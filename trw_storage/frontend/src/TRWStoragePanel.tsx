/**
 * TRW Storage Panel
 * Renders inside InvenTree's stock item detail page as a custom UI panel.
 * Communicates with the trw-storage plugin REST API.
 */

import React, { useEffect, useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Company {
  id: number;
  name: string;
}

interface Custodian {
  id: number;
  stock_item: number;
  company: number;
  company_detail: Company;
  start_date: string;
  end_date: string | null;
  notes: string;
  created_at: string;
}

interface Interest {
  id: number;
  stock_item: number;
  company: number;
  company_detail: Company;
  start_date: string;
  end_date: string | null;
  notes: string;
  created_at: string;
}

interface PanelContext {
  stockItemId: number;
  apiBase: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function fmtDate(iso: string | null): string {
  if (!iso) return '—';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

function today(): string {
  return new Date().toISOString().split('T')[0];
}

async function apiFetch(url: string, opts?: RequestInit) {
  // InvenTree passes the CSRF token in a cookie; include credentials so the
  // session cookie is sent and the CSRF header is respected.
  const csrfToken = document.cookie
    .split('; ')
    .find(r => r.startsWith('csrftoken='))
    ?.split('=')[1] ?? '';

  const res = await fetch(url, {
    ...opts,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken,
      ...(opts?.headers ?? {}),
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const msg = body?.detail ?? body?.non_field_errors?.[0] ?? `HTTP ${res.status}`;
    throw new Error(msg);
  }

  return res.status === 204 ? null : res.json();
}

// ---------------------------------------------------------------------------
// Subcomponents
// ---------------------------------------------------------------------------

function SectionHeader({ title }: { title: string }) {
  return (
    <h3 style={{
      margin: '0 0 8px 0',
      fontSize: '13px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'var(--mantine-color-dimmed, #555)',
      borderBottom: '1px solid var(--mantine-color-default-border, #e5e7eb)',
      paddingBottom: '4px',
    }}>
      {title}
    </h3>
  );
}

function ErrorMsg({ msg }: { msg: string }) {
  return (
    <div style={{
      background: '#fef2f2',
      border: '1px solid #fecaca',
      color: '#b91c1c',
      borderRadius: 4,
      padding: '6px 10px',
      fontSize: '12px',
      marginBottom: 8,
    }}>
      {msg}
    </div>
  );
}

function Badge({ label, color = '#6b7280' }: { label: string; color?: string }) {
  return (
    <span style={{
      background: color + '1a',
      color,
      border: `1px solid ${color}40`,
      borderRadius: 12,
      padding: '1px 8px',
      fontSize: '11px',
      fontWeight: 500,
    }}>
      {label}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Transfer Custody Modal
// ---------------------------------------------------------------------------

function TransferCustodyForm({
  apiBase,
  stockItemId,
  companies,
  currentCustodian,
  onDone,
  onCancel,
}: {
  apiBase: string;
  stockItemId: number;
  companies: Company[];
  currentCustodian: Custodian | null;
  onDone: () => void;
  onCancel: () => void;
}) {
  const [newCompany, setNewCompany] = useState('');
  const [transferDate, setTransferDate] = useState(today());
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!newCompany) { setError('Please select a company.'); return; }
    setError('');
    setLoading(true);
    try {
      await apiFetch(`${apiBase}/custodians/transfer/`, {
        method: 'POST',
        body: JSON.stringify({
          stock_item: stockItemId,
          new_company: Number(newCompany),
          transfer_date: transferDate,
          notes,
        }),
      });
      onDone();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const otherCompanies = companies.filter(c => c.id !== currentCustodian?.company);

  return (
    <form onSubmit={submit} style={{ marginTop: 12 }}>
      {error && <ErrorMsg msg={error} />}

      {currentCustodian && (
        <p style={{ fontSize: '12px', color: 'var(--mantine-color-dimmed, #6b7280)', margin: '0 0 10px' }}>
          Current custodian: <strong>{currentCustodian.company_detail.name}</strong> (since {fmtDate(currentCustodian.start_date)})
        </p>
      )}

      <label style={labelStyle}>New Custodian</label>
      <select value={newCompany} onChange={e => setNewCompany(e.target.value)} style={inputStyle} required>
        <option value="">— select company —</option>
        {otherCompanies.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <label style={labelStyle}>Effective Date</label>
      <input
        type="date"
        value={transferDate}
        onChange={e => setTransferDate(e.target.value)}
        style={inputStyle}
        required
        max={today()}
      />

      <label style={labelStyle}>Notes (optional)</label>
      <input
        type="text"
        value={notes}
        onChange={e => setNotes(e.target.value)}
        style={inputStyle}
        placeholder="e.g. Volcafe paid invoice #1234"
      />

      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button type="submit" disabled={loading} style={btnPrimary}>
          {loading ? 'Transferring…' : 'Transfer Custody'}
        </button>
        <button type="button" onClick={onCancel} style={btnSecondary}>Cancel</button>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Add Interest Form
// ---------------------------------------------------------------------------

function AddInterestForm({
  apiBase,
  stockItemId,
  companies,
  onDone,
  onCancel,
}: {
  apiBase: string;
  stockItemId: number;
  companies: Company[];
  onDone: () => void;
  onCancel: () => void;
}) {
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState(today());
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!company) { setError('Please select a company.'); return; }
    setError('');
    setLoading(true);
    try {
      await apiFetch(`${apiBase}/interests/`, {
        method: 'POST',
        body: JSON.stringify({
          stock_item: stockItemId,
          company: Number(company),
          start_date: startDate,
          notes,
        }),
      });
      onDone();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} style={{ marginTop: 12 }}>
      {error && <ErrorMsg msg={error} />}

      <label style={labelStyle}>Company</label>
      <select value={company} onChange={e => setCompany(e.target.value)} style={inputStyle} required>
        <option value="">— select company —</option>
        {companies.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <label style={labelStyle}>Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        style={inputStyle}
        required
        max={today()}
      />

      <label style={labelStyle}>Notes (optional)</label>
      <input
        type="text"
        value={notes}
        onChange={e => setNotes(e.target.value)}
        style={inputStyle}
        placeholder="e.g. Agreed purchase pending payment"
      />

      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button type="submit" disabled={loading} style={btnPrimary}>
          {loading ? 'Adding…' : 'Add Interest'}
        </button>
        <button type="button" onClick={onCancel} style={btnSecondary}>Cancel</button>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Remove Custody Form (sets end_date on active custodian)
// ---------------------------------------------------------------------------

function RemoveCustodyForm({
  apiBase,
  custodian,
  onDone,
  onCancel,
}: {
  apiBase: string;
  custodian: Custodian;
  onDone: () => void;
  onCancel: () => void;
}) {
  const [endDate, setEndDate] = useState(today());
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await apiFetch(`${apiBase}/custodians/${custodian.id}/`, {
        method: 'PATCH',
        body: JSON.stringify({ end_date: endDate }),
      });
      onDone();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} style={{ marginTop: 8 }}>
      {error && <ErrorMsg msg={error} />}
      <p style={{ fontSize: '12px', color: 'var(--mantine-color-dimmed, #6b7280)', margin: '0 0 8px' }}>
        Remove custody for <strong>{custodian.company_detail.name}</strong>
      </p>
      <label style={labelStyle}>End Date</label>
      <input
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
        style={inputStyle}
        required
        min={custodian.start_date}
        max={today()}
      />
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <button type="submit" disabled={loading} style={btnDanger}>
          {loading ? 'Removing…' : 'Remove Custody'}
        </button>
        <button type="button" onClick={onCancel} style={btnSecondary}>Cancel</button>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Close Interest Form (sets end_date)
// ---------------------------------------------------------------------------

function CloseInterestForm({
  apiBase,
  interest,
  onDone,
  onCancel,
}: {
  apiBase: string;
  interest: Interest;
  onDone: () => void;
  onCancel: () => void;
}) {
  const [endDate, setEndDate] = useState(today());
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await apiFetch(`${apiBase}/interests/${interest.id}/close/`, {
        method: 'POST',
        body: JSON.stringify({ end_date: endDate }),
      });
      onDone();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} style={{ marginTop: 8 }}>
      {error && <ErrorMsg msg={error} />}
      <p style={{ fontSize: '12px', color: 'var(--mantine-color-dimmed, #6b7280)', margin: '0 0 8px' }}>
        Close interest for <strong>{interest.company_detail.name}</strong>
      </p>
      <label style={labelStyle}>End Date</label>
      <input
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
        style={inputStyle}
        required
        min={interest.start_date}
        max={today()}
      />
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <button type="submit" disabled={loading} style={btnDanger}>
          {loading ? 'Closing…' : 'Close Interest'}
        </button>
        <button type="button" onClick={onCancel} style={btnSecondary}>Cancel</button>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Set Custodian Form (for when there is no current custodian)
// ---------------------------------------------------------------------------

function SetCustodianForm({
  apiBase,
  stockItemId,
  companies,
  onDone,
  onCancel,
}: {
  apiBase: string;
  stockItemId: number;
  companies: Company[];
  onDone: () => void;
  onCancel: () => void;
}) {
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState(today());
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!company) { setError('Please select a company.'); return; }
    setError('');
    setLoading(true);
    try {
      await apiFetch(`${apiBase}/custodians/`, {
        method: 'POST',
        body: JSON.stringify({
          stock_item: stockItemId,
          company: Number(company),
          start_date: startDate,
          notes,
        }),
      });
      onDone();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} style={{ marginTop: 12 }}>
      {error && <ErrorMsg msg={error} />}

      <label style={labelStyle}>Custodian Company</label>
      <select value={company} onChange={e => setCompany(e.target.value)} style={inputStyle} required>
        <option value="">— select company —</option>
        {companies.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <label style={labelStyle}>Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        style={inputStyle}
        required
        max={today()}
      />

      <label style={labelStyle}>Notes (optional)</label>
      <input
        type="text"
        value={notes}
        onChange={e => setNotes(e.target.value)}
        style={inputStyle}
      />

      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button type="submit" disabled={loading} style={btnPrimary}>
          {loading ? 'Setting…' : 'Set Custodian'}
        </button>
        <button type="button" onClick={onCancel} style={btnSecondary}>Cancel</button>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Main Panel
// ---------------------------------------------------------------------------

type ActiveForm =
  | null
  | 'set-custodian'
  | 'transfer-custody'
  | 'remove-custody'
  | { type: 'close-interest'; interest: Interest }
  | 'add-interest';

function TRWStoragePanelInner({ stockItemId, apiBase }: PanelContext) {
  const [custodians, setCustodians] = useState<Custodian[]>([]);
  const [interests, setInterests] = useState<Interest[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeForm, setActiveForm] = useState<ActiveForm>(null);
  const [showCustodianHistory, setShowCustodianHistory] = useState(false);
  const [showInterestHistory, setShowInterestHistory] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<{ type: 'custodian' | 'interest'; id: number; name: string } | null>(null);
  const [deleting, setDeleting] = useState(false);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [cData, iData, compData] = await Promise.all([
        apiFetch(`${apiBase}/custodians/?stock_item=${stockItemId}`),
        apiFetch(`${apiBase}/interests/?stock_item=${stockItemId}`),
        apiFetch('/api/company/?is_customer=true&limit=500'),
      ]);
      setCustodians(cData.results ?? cData);
      setInterests(iData.results ?? iData);
      setCompanies(
        (compData.results ?? compData).map((c: any) => ({ id: c.pk, name: c.name }))
      );
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [apiBase, stockItemId]);

  useEffect(() => { loadData(); }, [loadData]);

  function afterFormDone() {
    setActiveForm(null);
    loadData();
  }

  async function handleDelete() {
    if (!confirmDelete) return;
    setDeleting(true);
    try {
      const endpoint = confirmDelete.type === 'custodian' ? 'custodians' : 'interests';
      await apiFetch(`${apiBase}/${endpoint}/${confirmDelete.id}/`, { method: 'DELETE' });
      setConfirmDelete(null);
      loadData();
    } catch (err: any) {
      setConfirmDelete(null);
      setDeleting(false);
    }
    setDeleting(false);
  }

  if (loading) {
    return <div style={{ padding: 16, color: 'var(--mantine-color-dimmed, #6b7280)', fontSize: 13 }}>Loading TRW Storage data…</div>;
  }

  if (error) {
    return (
      <div style={{ padding: 16 }}>
        <ErrorMsg msg={error} />
        <button onClick={loadData} style={btnSecondary}>Retry</button>
      </div>
    );
  }

  const activeCustodian = custodians.find(c => c.end_date === null) ?? null;
  const pastCustodians = custodians.filter(c => c.end_date !== null);
  const activeInterests = interests.filter(i => i.end_date === null);
  const pastInterests = interests.filter(i => i.end_date !== null);

  return (
    <div style={{ padding: '12px 16px', fontFamily: 'inherit', fontSize: 13 }}>

      {/* ---- Custodian Section ---- */}
      <div style={{ marginBottom: 20 }}>
        <SectionHeader title="Custodian (Billing Party)" />

        {activeCustodian ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span style={{ fontWeight: 600, color: 'var(--mantine-color-text, #111)' }}>{activeCustodian.company_detail.name}</span>
            <Badge label={`since ${fmtDate(activeCustodian.start_date)}`} color="#2563eb" />
            {activeCustodian.notes && (
              <span style={{ color: 'var(--mantine-color-dimmed, #9ca3af)', fontSize: 11 }}>{activeCustodian.notes}</span>
            )}
          </div>
        ) : (
          <p style={{ color: 'var(--mantine-color-dimmed, #9ca3af)', fontSize: 12, margin: '0 0 8px' }}>No custodian assigned.</p>
        )}

        {activeForm === 'transfer-custody' && (
          <TransferCustodyForm
            apiBase={apiBase}
            stockItemId={stockItemId}
            companies={companies}
            currentCustodian={activeCustodian}
            onDone={afterFormDone}
            onCancel={() => setActiveForm(null)}
          />
        )}

        {activeForm === 'remove-custody' && activeCustodian && (
          <RemoveCustodyForm
            apiBase={apiBase}
            custodian={activeCustodian}
            onDone={afterFormDone}
            onCancel={() => setActiveForm(null)}
          />
        )}

        {activeForm === 'set-custodian' && (
          <SetCustodianForm
            apiBase={apiBase}
            stockItemId={stockItemId}
            companies={companies}
            onDone={afterFormDone}
            onCancel={() => setActiveForm(null)}
          />
        )}

        {activeForm === null && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
            {activeCustodian ? (
              <>
                <button onClick={() => setActiveForm('transfer-custody')} style={btnSmall}>
                  Transfer Custody
                </button>
                <button onClick={() => setActiveForm('remove-custody')} style={{ ...btnSmall, color: '#dc2626', borderColor: '#fca5a5' }}>
                  Remove Custody
                </button>
              </>
            ) : (
              <button onClick={() => setActiveForm('set-custodian')} style={btnSmall}>
                Set Custodian
              </button>
            )}
          </div>
        )}

        {pastCustodians.length > 0 && (
          <div style={{ marginTop: 8 }}>
            <button
              onClick={() => setShowCustodianHistory(h => !h)}
              style={{ ...btnLink, fontSize: 11 }}
            >
              {showCustodianHistory ? 'Hide' : 'Show'} history ({pastCustodians.length})
            </button>
            {showCustodianHistory && (
              <>
                {confirmDelete?.type === 'custodian' && (
                  <div style={confirmBannerStyle}>
                    <span>Delete <strong>{confirmDelete.name}</strong> record permanently?</span>
                    <button onClick={handleDelete} disabled={deleting} style={{ ...btnDanger, padding: '2px 8px', fontSize: 11 }}>
                      {deleting ? 'Deleting…' : 'Delete'}
                    </button>
                    <button onClick={() => setConfirmDelete(null)} style={{ ...btnSecondary, padding: '2px 8px', fontSize: 11 }}>Cancel</button>
                  </div>
                )}
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Company</th>
                      <th style={thStyle}>From</th>
                      <th style={thStyle}>To</th>
                      <th style={thStyle}>Notes</th>
                      <th style={thStyle}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastCustodians.map(c => (
                      <tr key={c.id}>
                        <td style={tdStyle}>{c.company_detail.name}</td>
                        <td style={tdStyle}>{fmtDate(c.start_date)}</td>
                        <td style={tdStyle}>{fmtDate(c.end_date)}</td>
                        <td style={{ ...tdStyle, color: 'var(--mantine-color-dimmed, #9ca3af)' }}>{c.notes || '—'}</td>
                        <td style={tdStyle}>
                          <button
                            onClick={() => setConfirmDelete({ type: 'custodian', id: c.id, name: c.company_detail.name })}
                            style={{ ...btnLink, color: '#dc2626', fontSize: 11 }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        )}
      </div>

      {/* ---- Interests Section ---- */}
      <div>
        <SectionHeader title="Interests" />

        {activeInterests.length === 0 && (
          <p style={{ color: 'var(--mantine-color-dimmed, #9ca3af)', fontSize: 12, margin: '0 0 8px' }}>No active interests.</p>
        )}

        {activeInterests.map(interest => (
          <div key={interest.id} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{ fontWeight: 600, color: 'var(--mantine-color-text, #111)', minWidth: 140 }}>{interest.company_detail.name}</span>
            <Badge label={`since ${fmtDate(interest.start_date)}`} color="#059669" />
            {interest.notes && (
              <span style={{ color: 'var(--mantine-color-dimmed, #9ca3af)', fontSize: 11 }}>{interest.notes}</span>
            )}
            {activeForm === null && (
              <button
                onClick={() => setActiveForm({ type: 'close-interest', interest })}
                style={{ ...btnLink, color: '#dc2626', fontSize: 11 }}
              >
                Close
              </button>
            )}
            {typeof activeForm === 'object' && activeForm !== null &&
              activeForm.type === 'close-interest' && activeForm.interest.id === interest.id && (
              <CloseInterestForm
                apiBase={apiBase}
                interest={interest}
                onDone={afterFormDone}
                onCancel={() => setActiveForm(null)}
              />
            )}
          </div>
        ))}

        {activeForm === 'add-interest' && (
          <AddInterestForm
            apiBase={apiBase}
            stockItemId={stockItemId}
            companies={companies}
            onDone={afterFormDone}
            onCancel={() => setActiveForm(null)}
          />
        )}

        {activeForm === null && (
          <button onClick={() => setActiveForm('add-interest')} style={{ ...btnSmall, marginTop: 4 }}>
            Add Interest
          </button>
        )}

        {pastInterests.length > 0 && (
          <div style={{ marginTop: 8 }}>
            <button
              onClick={() => setShowInterestHistory(h => !h)}
              style={{ ...btnLink, fontSize: 11 }}
            >
              {showInterestHistory ? 'Hide' : 'Show'} closed interests ({pastInterests.length})
            </button>
            {showInterestHistory && (
              <>
                {confirmDelete?.type === 'interest' && (
                  <div style={confirmBannerStyle}>
                    <span>Delete <strong>{confirmDelete.name}</strong> record permanently?</span>
                    <button onClick={handleDelete} disabled={deleting} style={{ ...btnDanger, padding: '2px 8px', fontSize: 11 }}>
                      {deleting ? 'Deleting…' : 'Delete'}
                    </button>
                    <button onClick={() => setConfirmDelete(null)} style={{ ...btnSecondary, padding: '2px 8px', fontSize: 11 }}>Cancel</button>
                  </div>
                )}
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Company</th>
                      <th style={thStyle}>From</th>
                      <th style={thStyle}>To</th>
                      <th style={thStyle}>Notes</th>
                      <th style={thStyle}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastInterests.map(i => (
                      <tr key={i.id}>
                        <td style={tdStyle}>{i.company_detail.name}</td>
                        <td style={tdStyle}>{fmtDate(i.start_date)}</td>
                        <td style={tdStyle}>{fmtDate(i.end_date)}</td>
                        <td style={{ ...tdStyle, color: 'var(--mantine-color-dimmed, #9ca3af)' }}>{i.notes || '—'}</td>
                        <td style={tdStyle}>
                          <button
                            onClick={() => setConfirmDelete({ type: 'interest', id: i.id, name: i.company_detail.name })}
                            style={{ ...btnLink, color: '#dc2626', fontSize: 11 }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const inputStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  maxWidth: 320,
  padding: '5px 8px',
  border: '1px solid var(--mantine-color-default-border, #d1d5db)',
  borderRadius: 4,
  fontSize: 12,
  marginBottom: 8,
  boxSizing: 'border-box',
  background: 'var(--mantine-color-body, #fff)',
  color: 'var(--mantine-color-text, #111)',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 11,
  fontWeight: 600,
  color: 'var(--mantine-color-dimmed, #374151)',
  marginBottom: 2,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
};

const btnPrimary: React.CSSProperties = {
  background: '#2563eb',
  color: '#fff',
  border: 'none',
  borderRadius: 4,
  padding: '5px 12px',
  fontSize: 12,
  cursor: 'pointer',
  fontWeight: 500,
};

const btnSecondary: React.CSSProperties = {
  background: 'var(--mantine-color-default, #f3f4f6)',
  color: 'var(--mantine-color-text, #374151)',
  border: '1px solid var(--mantine-color-default-border, #d1d5db)',
  borderRadius: 4,
  padding: '5px 12px',
  fontSize: 12,
  cursor: 'pointer',
};

const btnDanger: React.CSSProperties = {
  background: '#dc2626',
  color: '#fff',
  border: 'none',
  borderRadius: 4,
  padding: '5px 12px',
  fontSize: 12,
  cursor: 'pointer',
  fontWeight: 500,
};

const btnSmall: React.CSSProperties = {
  background: 'var(--mantine-color-default, #f3f4f6)',
  color: 'var(--mantine-color-text, #374151)',
  border: '1px solid var(--mantine-color-default-border, #d1d5db)',
  borderRadius: 4,
  padding: '3px 10px',
  fontSize: 11,
  cursor: 'pointer',
};

const btnLink: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#2563eb',
  cursor: 'pointer',
  padding: 0,
  textDecoration: 'underline',
  fontSize: 12,
};

const confirmBannerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  background: '#fef2f2',
  border: '1px solid #fecaca',
  borderRadius: 4,
  padding: '5px 8px',
  fontSize: 12,
  marginTop: 6,
  marginBottom: 4,
  color: '#b91c1c',
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: 6,
  fontSize: 11,
};

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '3px 6px',
  borderBottom: '1px solid var(--mantine-color-default-border, #e5e7eb)',
  color: 'var(--mantine-color-dimmed, #6b7280)',
  fontWeight: 600,
};

const tdStyle: React.CSSProperties = {
  padding: '3px 6px',
  borderBottom: '1px solid var(--mantine-color-default-border, #f3f4f6)',
  color: 'var(--mantine-color-text, #374151)',
};

// ---------------------------------------------------------------------------
// Entry point — InvenTree loads this as an ES module and calls renderPanel(element, context)
// ---------------------------------------------------------------------------

// Named export: InvenTree does `await import(url)` then calls `module['renderPanel'](element, ctx)`
// func.length > 1 → InvenTree uses legacy mode: func(element, ctx)
export function renderPanel(element: HTMLElement, context: any) {
  const panelContext: PanelContext = context?.context ?? context;
  const root = createRoot(element);
  root.render(<TRWStoragePanelInner {...panelContext} />);
}
