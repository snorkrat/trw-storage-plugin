#!/usr/bin/env python3
"""
Batch Code → Plugin Migration Script
=====================================
Reads existing InvenTree batch codes, matches the company names to InvenTree
customers, and creates TRWCustodian + TRWInterest records via the plugin API.

Uses the stock item's creation date as the custodian/interest start_date.

Usage:
    python migrate_batch_codes.py \
        --inventree-url https://your-inventree.example.com \
        --api-token YOUR_INVENTREE_API_TOKEN \
        [--dry-run]         # preview without writing anything
        [--mapping FILE]    # JSON file of manual overrides: {"batch_name": company_id, ...}

The script will:
  1. Fetch all InvenTree customers.
  2. Fetch all stock items.
  3. Parse batch codes (comma-separated; first = custodian, rest = interests).
  4. Attempt case-insensitive name matching for each batch entry.
  5. Print any unmatched names and prompt for manual mapping.
  6. POST to the plugin API to create the records.
"""

import argparse
import json
import sys
import unicodedata
import re
from datetime import date
import requests

# ---------------------------------------------------------------------------
# Argument parsing
# ---------------------------------------------------------------------------

parser = argparse.ArgumentParser(description='Migrate batch codes to TRW Storage plugin records')
parser.add_argument('--inventree-url', required=True, help='InvenTree base URL (no trailing slash)')
parser.add_argument('--api-token', required=True, help='InvenTree API token')
parser.add_argument('--dry-run', action='store_true', help='Preview without writing')
parser.add_argument('--mapping', help='JSON file of manual name→company_id overrides')
args = parser.parse_args()

BASE = args.inventree_url.rstrip('/')
HEADERS = {
    'Authorization': f'Token {args.api_token}',
    'Content-Type': 'application/json',
}

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def normalize(s: str) -> str:
    """Lowercase, strip accents, collapse whitespace."""
    s = unicodedata.normalize('NFD', s)
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'\s+', ' ', s.strip().lower())


def paginate(url: str, params: dict = None) -> list:
    """Fetch all pages from an InvenTree list endpoint."""
    all_results = []
    params = params or {}
    params['limit'] = 200
    params['offset'] = 0
    while True:
        r = requests.get(url, headers=HEADERS, params=params)
        r.raise_for_status()
        data = r.json()
        results = data.get('results', data)
        all_results.extend(results)
        if not data.get('next'):
            break
        params['offset'] += len(results)
    return all_results


def post_plugin(endpoint: str, payload: dict) -> dict:
    url = f'{BASE}/plugin/trw-storage/api/{endpoint}/'
    r = requests.post(url, headers=HEADERS, json=payload)
    if not r.ok:
        print(f'  ERROR {r.status_code}: {r.text}')
        return None
    return r.json()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

# Load manual mapping overrides if provided.
manual_mapping: dict[str, int] = {}
if args.mapping:
    with open(args.mapping) as f:
        manual_mapping = json.load(f)
    print(f'Loaded {len(manual_mapping)} manual mapping(s) from {args.mapping}')

# 1. Fetch all customers.
print('Fetching InvenTree customers...')
customers = paginate(f'{BASE}/api/company/', {'is_customer': True})
print(f'  Got {len(customers)} customer(s)')

# Build lookup: normalized_name → company_pk
name_to_id: dict[str, int] = {}
id_to_name: dict[int, str] = {}
for c in customers:
    name_to_id[normalize(c['name'])] = c['pk']
    id_to_name[c['pk']] = c['name']

# 2. Fetch all stock items.
print('Fetching stock items...')
stock_items_all = paginate(f'{BASE}/api/stock/')
print(f'  Got {len(stock_items_all)} stock item(s) total')

# 2b. Fetch all stock tracking entries in bulk to find earliest event date per item.
print('Fetching stock tracking history (to find creation dates)...')
tracking_entries = paginate(f'{BASE}/api/stock/track/')
print(f'  Got {len(tracking_entries)} tracking event(s)')

# Build map: stock_item_pk -> earliest event date (YYYY-MM-DD)
earliest_date: dict[int, str] = {}
for entry in tracking_entries:
    item_pk = entry.get('item')
    raw_date = entry.get('date', '')
    if item_pk and raw_date:
        date_str = raw_date[:10]  # "YYYY-MM-DD HH:MM" -> "YYYY-MM-DD"
        if item_pk not in earliest_date or date_str < earliest_date[item_pk]:
            earliest_date[item_pk] = date_str

# 3. Parse batch codes.
unmatched_names: set[str] = set()
records: list[dict] = []  # {stock_item_pk, creation_date, custodian_name, interest_names}

for item in stock_items_all:
    batch = item.get('batch') or ''
    if not batch.strip():
        continue

    parts_raw = [p.strip() for p in batch.split(',') if p.strip()]
    if not parts_raw:
        continue

    # Use earliest tracking event date as the creation date; fall back to today.
    creation_date = earliest_date.get(item['pk']) or str(date.today())

    records.append({
        'stock_item_pk': item['pk'],
        'creation_date': creation_date[:10],  # YYYY-MM-DD
        'custodian_raw': parts_raw[0],
        'interest_raws': parts_raw[1:],
    })

    # Collect unmatched names.
    for raw in parts_raw:
        key = normalize(raw)
        if key not in name_to_id and raw not in manual_mapping:
            unmatched_names.add(raw)

print(f'\nFound {len(records)} stock item(s) with batch codes')

# 4. Report and prompt for unmatched names.
if unmatched_names:
    print(f'\n⚠  The following {len(unmatched_names)} batch name(s) could not be automatically matched to InvenTree customers:')
    for name in sorted(unmatched_names):
        print(f'  - "{name}"')
    print('\nYou have two options:')
    print('  A) Create a mapping.json file with:')
    print('     {"<batch_name>": <inventree_company_pk>, ...}')
    print('     Then re-run with: --mapping mapping.json')
    print()
    print('  B) Enter the company IDs now (press Enter to skip a name):')
    print()

    for name in sorted(unmatched_names):
        # Try partial match as a hint.
        norm_name = normalize(name)
        candidates = [(cid, cname) for cname, cid in name_to_id.items() if norm_name in cname or cname in norm_name]
        if candidates:
            hint = ', '.join(f'"{id_to_name[cid]}" (pk={cid})' for cid, _ in candidates[:3])
            print(f'  "{name}" — possible matches: {hint}')
        else:
            print(f'  "{name}" — no close matches found')

        value = input(f'    Company ID for "{name}" (or Enter to skip): ').strip()
        if value.isdigit():
            manual_mapping[name] = int(value)
        else:
            print(f'    Skipping "{name}" — items with this batch entry will have no assignment created.')

if unmatched_names:
    still_unmatched = [n for n in unmatched_names if n not in manual_mapping and normalize(n) not in name_to_id]
    if still_unmatched:
        print(f'\n  Note: {len(still_unmatched)} name(s) still unmatched — those assignments will be skipped.')

# ---------------------------------------------------------------------------
# Helper: resolve a raw batch name to a company ID.
# ---------------------------------------------------------------------------

def resolve(raw: str) -> int | None:
    # Manual mapping takes priority.
    if raw in manual_mapping:
        return manual_mapping[raw]
    # Case-insensitive name match.
    key = normalize(raw)
    if key in name_to_id:
        return name_to_id[key]
    return None

# ---------------------------------------------------------------------------
# 5. Create plugin records.
# ---------------------------------------------------------------------------

print(f'\n{"[DRY RUN] " if args.dry_run else ""}Creating plugin records...\n')

created_custodians = 0
skipped_custodians = 0
created_interests = 0
skipped_interests = 0

for rec in records:
    pk = rec['stock_item_pk']
    start = rec['creation_date']

    # Custodian
    custodian_id = resolve(rec['custodian_raw'])
    if custodian_id:
        if args.dry_run:
            print(f'  [DRY RUN] Custodian: stock_item={pk}, company={id_to_name.get(custodian_id, custodian_id)}, start={start}')
            created_custodians += 1
        else:
            result = post_plugin('custodians', {
                'stock_item': pk,
                'company': custodian_id,
                'start_date': start,
                'notes': f'Migrated from batch code: {rec["custodian_raw"]}',
            })
            if result:
                created_custodians += 1
            else:
                skipped_custodians += 1
    else:
        print(f'  SKIP custodian for stock_item={pk}: no match for "{rec["custodian_raw"]}"')
        skipped_custodians += 1

    # Interests
    for raw in rec['interest_raws']:
        interest_id = resolve(raw)
        if interest_id:
            if args.dry_run:
                print(f'  [DRY RUN] Interest: stock_item={pk}, company={id_to_name.get(interest_id, interest_id)}, start={start}')
                created_interests += 1
            else:
                result = post_plugin('interests', {
                    'stock_item': pk,
                    'company': interest_id,
                    'start_date': start,
                    'notes': f'Migrated from batch code: {raw}',
                })
                if result:
                    created_interests += 1
                else:
                    skipped_interests += 1
        else:
            print(f'  SKIP interest for stock_item={pk}: no match for "{raw}"')
            skipped_interests += 1

# ---------------------------------------------------------------------------
# Summary
# ---------------------------------------------------------------------------

print(f'\n{"[DRY RUN] " if args.dry_run else ""}Done.')
print(f'  Custodians: {created_custodians} created, {skipped_custodians} skipped')
print(f'  Interests:  {created_interests} created, {skipped_interests} skipped')

if args.dry_run:
    print('\nThis was a dry run — nothing was written to the database.')
    print('Re-run without --dry-run to apply.')
