var rs = { exports: {} }, al = {}, ls = { exports: {} }, R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr = Symbol.for("react.element"), yc = Symbol.for("react.portal"), gc = Symbol.for("react.fragment"), Sc = Symbol.for("react.strict_mode"), wc = Symbol.for("react.profiler"), kc = Symbol.for("react.provider"), xc = Symbol.for("react.context"), Ec = Symbol.for("react.forward_ref"), Cc = Symbol.for("react.suspense"), _c = Symbol.for("react.memo"), Nc = Symbol.for("react.lazy"), Qu = Symbol.iterator;
function Pc(e) {
  return e === null || typeof e != "object" ? null : (e = Qu && e[Qu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var os = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, us = Object.assign, is = {};
function dn(e, t, n) {
  this.props = e, this.context = t, this.refs = is, this.updater = n || os;
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ss() {
}
ss.prototype = dn.prototype;
function Go(e, t, n) {
  this.props = e, this.context = t, this.refs = is, this.updater = n || os;
}
var Zo = Go.prototype = new ss();
Zo.constructor = Go;
us(Zo, dn.prototype);
Zo.isPureReactComponent = !0;
var Ku = Array.isArray, as = Object.prototype.hasOwnProperty, Jo = { current: null }, cs = { key: !0, ref: !0, __self: !0, __source: !0 };
function fs(e, t, n) {
  var r, l = {}, o = null, u = null;
  if (t != null) for (r in t.ref !== void 0 && (u = t.ref), t.key !== void 0 && (o = "" + t.key), t) as.call(t, r) && !cs.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: tr, type: e, key: o, ref: u, props: l, _owner: Jo.current };
}
function zc(e, t) {
  return { $$typeof: tr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function qo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tr;
}
function jc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Yu = /\/+/g;
function zl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? jc("" + e.key) : t.toString(36);
}
function Pr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else switch (o) {
    case "string":
    case "number":
      u = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case tr:
        case yc:
          u = !0;
      }
  }
  if (u) return u = e, l = l(u), e = r === "" ? "." + zl(u, 0) : r, Ku(l) ? (n = "", e != null && (n = e.replace(Yu, "$&/") + "/"), Pr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (qo(l) && (l = zc(l, n + (!l.key || u && u.key === l.key ? "" : ("" + l.key).replace(Yu, "$&/") + "/") + e)), t.push(l)), 1;
  if (u = 0, r = r === "" ? "." : r + ":", Ku(e)) for (var i = 0; i < e.length; i++) {
    o = e[i];
    var s = r + zl(o, i);
    u += Pr(o, t, n, s, l);
  }
  else if (s = Pc(e), typeof s == "function") for (e = s.call(e), i = 0; !(o = e.next()).done; ) o = o.value, s = r + zl(o, i++), u += Pr(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return u;
}
function cr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Pr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Tc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null }, zr = { transition: null }, Lc = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: zr, ReactCurrentOwner: Jo };
function ds() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = { map: cr, forEach: function(e, t, n) {
  cr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return cr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return cr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!qo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
R.Component = dn;
R.Fragment = gc;
R.Profiler = wc;
R.PureComponent = Go;
R.StrictMode = Sc;
R.Suspense = Cc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lc;
R.act = ds;
R.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = us({}, e.props), l = e.key, o = e.ref, u = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, u = Jo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (s in t) as.call(t, s) && !cs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    i = Array(s);
    for (var c = 0; c < s; c++) i[c] = arguments[c + 2];
    r.children = i;
  }
  return { $$typeof: tr, type: e.type, key: l, ref: o, props: r, _owner: u };
};
R.createContext = function(e) {
  return e = { $$typeof: xc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: kc, _context: e }, e.Consumer = e;
};
R.createElement = fs;
R.createFactory = function(e) {
  var t = fs.bind(null, e);
  return t.type = e, t;
};
R.createRef = function() {
  return { current: null };
};
R.forwardRef = function(e) {
  return { $$typeof: Ec, render: e };
};
R.isValidElement = qo;
R.lazy = function(e) {
  return { $$typeof: Nc, _payload: { _status: -1, _result: e }, _init: Tc };
};
R.memo = function(e, t) {
  return { $$typeof: _c, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function(e) {
  var t = zr.transition;
  zr.transition = {};
  try {
    e();
  } finally {
    zr.transition = t;
  }
};
R.unstable_act = ds;
R.useCallback = function(e, t) {
  return se.current.useCallback(e, t);
};
R.useContext = function(e) {
  return se.current.useContext(e);
};
R.useDebugValue = function() {
};
R.useDeferredValue = function(e) {
  return se.current.useDeferredValue(e);
};
R.useEffect = function(e, t) {
  return se.current.useEffect(e, t);
};
R.useId = function() {
  return se.current.useId();
};
R.useImperativeHandle = function(e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function(e, t) {
  return se.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function(e, t) {
  return se.current.useLayoutEffect(e, t);
};
R.useMemo = function(e, t) {
  return se.current.useMemo(e, t);
};
R.useReducer = function(e, t, n) {
  return se.current.useReducer(e, t, n);
};
R.useRef = function(e) {
  return se.current.useRef(e);
};
R.useState = function(e) {
  return se.current.useState(e);
};
R.useSyncExternalStore = function(e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function() {
  return se.current.useTransition();
};
R.version = "18.3.1";
ls.exports = R;
var O = ls.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc = O, Dc = Symbol.for("react.element"), Oc = Symbol.for("react.fragment"), Mc = Object.prototype.hasOwnProperty, Fc = Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ic = { key: !0, ref: !0, __self: !0, __source: !0 };
function ps(e, t, n) {
  var r, l = {}, o = null, u = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (u = t.ref);
  for (r in t) Mc.call(t, r) && !Ic.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Dc, type: e, key: o, ref: u, props: l, _owner: Fc.current };
}
al.Fragment = Oc;
al.jsx = ps;
al.jsxs = ps;
rs.exports = al;
var v = rs.exports, ms = { exports: {} }, we = {}, hs = { exports: {} }, vs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(_, j) {
    var L = _.length;
    _.push(j);
    e: for (; 0 < L; ) {
      var Q = L - 1 >>> 1, Z = _[Q];
      if (0 < l(Z, j)) _[Q] = j, _[L] = Z, L = Q;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var j = _[0], L = _.pop();
    if (L !== j) {
      _[0] = L;
      e: for (var Q = 0, Z = _.length, sr = Z >>> 1; Q < sr; ) {
        var kt = 2 * (Q + 1) - 1, Pl = _[kt], xt = kt + 1, ar = _[xt];
        if (0 > l(Pl, L)) xt < Z && 0 > l(ar, Pl) ? (_[Q] = ar, _[xt] = L, Q = xt) : (_[Q] = Pl, _[kt] = L, Q = kt);
        else if (xt < Z && 0 > l(ar, L)) _[Q] = ar, _[xt] = L, Q = xt;
        else break e;
      }
    }
    return j;
  }
  function l(_, j) {
    var L = _.sortIndex - j.sortIndex;
    return L !== 0 ? L : _.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var u = Date, i = u.now();
    e.unstable_now = function() {
      return u.now() - i;
    };
  }
  var s = [], c = [], h = 1, m = null, p = 3, g = !1, k = !1, x = !1, z = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var j = n(c); j !== null; ) {
      if (j.callback === null) r(c);
      else if (j.startTime <= _) r(c), j.sortIndex = j.expirationTime, t(s, j);
      else break;
      j = n(c);
    }
  }
  function y(_) {
    if (x = !1, d(_), !k) if (n(s) !== null) k = !0, _l(E);
    else {
      var j = n(c);
      j !== null && Nl(y, j.startTime - _);
    }
  }
  function E(_, j) {
    k = !1, x && (x = !1, f(w), w = -1), g = !0;
    var L = p;
    try {
      for (d(j), m = n(s); m !== null && (!(m.expirationTime > j) || _ && !ce()); ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          m.callback = null, p = m.priorityLevel;
          var Z = Q(m.expirationTime <= j);
          j = e.unstable_now(), typeof Z == "function" ? m.callback = Z : m === n(s) && r(s), d(j);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var sr = !0;
      else {
        var kt = n(c);
        kt !== null && Nl(y, kt.startTime - j), sr = !1;
      }
      return sr;
    } finally {
      m = null, p = L, g = !1;
    }
  }
  var P = !1, N = null, w = -1, $ = 5, T = -1;
  function ce() {
    return !(e.unstable_now() - T < $);
  }
  function hn() {
    if (N !== null) {
      var _ = e.unstable_now();
      T = _;
      var j = !0;
      try {
        j = N(!0, _);
      } finally {
        j ? vn() : (P = !1, N = null);
      }
    } else P = !1;
  }
  var vn;
  if (typeof a == "function") vn = function() {
    a(hn);
  };
  else if (typeof MessageChannel < "u") {
    var Hu = new MessageChannel(), vc = Hu.port2;
    Hu.port1.onmessage = hn, vn = function() {
      vc.postMessage(null);
    };
  } else vn = function() {
    z(hn, 0);
  };
  function _l(_) {
    N = _, P || (P = !0, vn());
  }
  function Nl(_, j) {
    w = z(function() {
      _(e.unstable_now());
    }, j);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    k || g || (k = !0, _l(E));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(_) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var j = 3;
        break;
      default:
        j = p;
    }
    var L = p;
    p = j;
    try {
      return _();
    } finally {
      p = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, j) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var L = p;
    p = _;
    try {
      return j();
    } finally {
      p = L;
    }
  }, e.unstable_scheduleCallback = function(_, j, L) {
    var Q = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? Q + L : Q) : L = Q, _) {
      case 1:
        var Z = -1;
        break;
      case 2:
        Z = 250;
        break;
      case 5:
        Z = 1073741823;
        break;
      case 4:
        Z = 1e4;
        break;
      default:
        Z = 5e3;
    }
    return Z = L + Z, _ = { id: h++, callback: j, priorityLevel: _, startTime: L, expirationTime: Z, sortIndex: -1 }, L > Q ? (_.sortIndex = L, t(c, _), n(s) === null && _ === n(c) && (x ? (f(w), w = -1) : x = !0, Nl(y, L - Q))) : (_.sortIndex = Z, t(s, _), k || g || (k = !0, _l(E))), _;
  }, e.unstable_shouldYield = ce, e.unstable_wrapCallback = function(_) {
    var j = p;
    return function() {
      var L = p;
      p = j;
      try {
        return _.apply(this, arguments);
      } finally {
        p = L;
      }
    };
  };
})(vs);
hs.exports = vs;
var Uc = hs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $c = O, Se = Uc;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ys = /* @__PURE__ */ new Set(), Un = {};
function It(e, t) {
  ln(e, t), ln(e + "Capture", t);
}
function ln(e, t) {
  for (Un[e] = t, e = 0; e < t.length; e++) ys.add(t[e]);
}
var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), no = Object.prototype.hasOwnProperty, Ac = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xu = {}, Gu = {};
function Vc(e) {
  return no.call(Gu, e) ? !0 : no.call(Xu, e) ? !1 : Ac.test(e) ? Gu[e] = !0 : (Xu[e] = !0, !1);
}
function Bc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Wc(e, t, n, r) {
  if (t === null || typeof t > "u" || Bc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function ae(e, t, n, r, l, o, u) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = u;
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  te[e] = new ae(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bo = /[\-:]([a-z])/g;
function eu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    bo,
    eu
  );
  te[t] = new ae(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(bo, eu);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(bo, eu);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function tu(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Wc(t, n, l, r) && (n = null), r || l === null ? Vc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = $c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fr = Symbol.for("react.element"), At = Symbol.for("react.portal"), Vt = Symbol.for("react.fragment"), nu = Symbol.for("react.strict_mode"), ro = Symbol.for("react.profiler"), gs = Symbol.for("react.provider"), Ss = Symbol.for("react.context"), ru = Symbol.for("react.forward_ref"), lo = Symbol.for("react.suspense"), oo = Symbol.for("react.suspense_list"), lu = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), ws = Symbol.for("react.offscreen"), Zu = Symbol.iterator;
function yn(e) {
  return e === null || typeof e != "object" ? null : (e = Zu && e[Zu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var W = Object.assign, jl;
function _n(e) {
  if (jl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    jl = t && t[1] || "";
  }
  return `
` + jl + e;
}
var Tl = !1;
function Ll(e, t) {
  if (!e || Tl) return "";
  Tl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), u = l.length - 1, i = o.length - 1; 1 <= u && 0 <= i && l[u] !== o[i]; ) i--;
      for (; 1 <= u && 0 <= i; u--, i--) if (l[u] !== o[i]) {
        if (u !== 1 || i !== 1)
          do
            if (u--, i--, 0 > i || l[u] !== o[i]) {
              var s = `
` + l[u].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= u && 0 <= i);
        break;
      }
    }
  } finally {
    Tl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? _n(e) : "";
}
function Hc(e) {
  switch (e.tag) {
    case 5:
      return _n(e.type);
    case 16:
      return _n("Lazy");
    case 13:
      return _n("Suspense");
    case 19:
      return _n("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ll(e.type, !1), e;
    case 11:
      return e = Ll(e.type.render, !1), e;
    case 1:
      return e = Ll(e.type, !0), e;
    default:
      return "";
  }
}
function uo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vt:
      return "Fragment";
    case At:
      return "Portal";
    case ro:
      return "Profiler";
    case nu:
      return "StrictMode";
    case lo:
      return "Suspense";
    case oo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ss:
      return (e.displayName || "Context") + ".Consumer";
    case gs:
      return (e._context.displayName || "Context") + ".Provider";
    case ru:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case lu:
      return t = e.displayName || null, t !== null ? t : uo(e.type) || "Memo";
    case tt:
      t = e._payload, e = e._init;
      try {
        return uo(e(t));
      } catch {
      }
  }
  return null;
}
function Qc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return uo(t);
    case 8:
      return t === nu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ks(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Kc(e) {
  var t = ks(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(u) {
      r = "" + u, o.call(this, u);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(u) {
      r = "" + u;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function dr(e) {
  e._valueTracker || (e._valueTracker = Kc(e));
}
function xs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ks(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function $r(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function io(e, t) {
  var n = t.checked;
  return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ju(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Es(e, t) {
  t = t.checked, t != null && tu(e, "checked", t, !1);
}
function so(e, t) {
  Es(e, t);
  var n = ht(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ao(e, t.type, n) : t.hasOwnProperty("defaultValue") && ao(e, t.type, ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function qu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ao(e, t, n) {
  (t !== "number" || $r(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nn = Array.isArray;
function qt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function co(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function bu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (Nn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ht(n) };
}
function Cs(e, t) {
  var n = ht(t.value), r = ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ei(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _s(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? _s(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var pr, Ns = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (pr = pr || document.createElement("div"), pr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = pr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function $n(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Yc = ["Webkit", "ms", "Moz", "O"];
Object.keys(jn).forEach(function(e) {
  Yc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), jn[t] = jn[e];
  });
});
function Ps(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || jn.hasOwnProperty(e) && jn[e] ? ("" + t).trim() : t + "px";
}
function zs(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ps(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Xc = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function po(e, t) {
  if (t) {
    if (Xc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function mo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ho = null;
function ou(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var vo = null, bt = null, en = null;
function ti(e) {
  if (e = lr(e)) {
    if (typeof vo != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = ml(t), vo(e.stateNode, e.type, t));
  }
}
function js(e) {
  bt ? en ? en.push(e) : en = [e] : bt = e;
}
function Ts() {
  if (bt) {
    var e = bt, t = en;
    if (en = bt = null, ti(e), t) for (e = 0; e < t.length; e++) ti(t[e]);
  }
}
function Ls(e, t) {
  return e(t);
}
function Rs() {
}
var Rl = !1;
function Ds(e, t, n) {
  if (Rl) return e(t, n);
  Rl = !0;
  try {
    return Ls(e, t, n);
  } finally {
    Rl = !1, (bt !== null || en !== null) && (Rs(), Ts());
  }
}
function An(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ml(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var yo = !1;
if (Ye) try {
  var gn = {};
  Object.defineProperty(gn, "passive", { get: function() {
    yo = !0;
  } }), window.addEventListener("test", gn, gn), window.removeEventListener("test", gn, gn);
} catch {
  yo = !1;
}
function Gc(e, t, n, r, l, o, u, i, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Tn = !1, Ar = null, Vr = !1, go = null, Zc = { onError: function(e) {
  Tn = !0, Ar = e;
} };
function Jc(e, t, n, r, l, o, u, i, s) {
  Tn = !1, Ar = null, Gc.apply(Zc, arguments);
}
function qc(e, t, n, r, l, o, u, i, s) {
  if (Jc.apply(this, arguments), Tn) {
    if (Tn) {
      var c = Ar;
      Tn = !1, Ar = null;
    } else throw Error(S(198));
    Vr || (Vr = !0, go = c);
  }
}
function Ut(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Os(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ni(e) {
  if (Ut(e) !== e) throw Error(S(188));
}
function bc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ut(e), t === null) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return ni(l), e;
        if (o === r) return ni(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var u = !1, i = l.child; i; ) {
        if (i === n) {
          u = !0, n = l, r = o;
          break;
        }
        if (i === r) {
          u = !0, r = l, n = o;
          break;
        }
        i = i.sibling;
      }
      if (!u) {
        for (i = o.child; i; ) {
          if (i === n) {
            u = !0, n = o, r = l;
            break;
          }
          if (i === r) {
            u = !0, r = o, n = l;
            break;
          }
          i = i.sibling;
        }
        if (!u) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Ms(e) {
  return e = bc(e), e !== null ? Fs(e) : null;
}
function Fs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Is = Se.unstable_scheduleCallback, ri = Se.unstable_cancelCallback, ef = Se.unstable_shouldYield, tf = Se.unstable_requestPaint, K = Se.unstable_now, nf = Se.unstable_getCurrentPriorityLevel, uu = Se.unstable_ImmediatePriority, Us = Se.unstable_UserBlockingPriority, Br = Se.unstable_NormalPriority, rf = Se.unstable_LowPriority, $s = Se.unstable_IdlePriority, cl = null, Ue = null;
function lf(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function") try {
    Ue.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Re = Math.clz32 ? Math.clz32 : sf, of = Math.log, uf = Math.LN2;
function sf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (of(e) / uf | 0) | 0;
}
var mr = 64, hr = 4194304;
function Pn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Wr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, u = n & 268435455;
  if (u !== 0) {
    var i = u & ~l;
    i !== 0 ? r = Pn(i) : (o &= u, o !== 0 && (r = Pn(o)));
  } else u = n & ~l, u !== 0 ? r = Pn(u) : o !== 0 && (r = Pn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Re(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function af(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function cf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var u = 31 - Re(o), i = 1 << u, s = l[u];
    s === -1 ? (!(i & n) || i & r) && (l[u] = af(i, t)) : s <= t && (e.expiredLanes |= i), o &= ~i;
  }
}
function So(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function As() {
  var e = mr;
  return mr <<= 1, !(mr & 4194240) && (mr = 64), e;
}
function Dl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Re(t), e[t] = n;
}
function ff(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Re(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function iu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var M = 0;
function Vs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Bs, su, Ws, Hs, Qs, wo = !1, vr = [], it = null, st = null, at = null, Vn = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map(), rt = [], df = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function li(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      it = null;
      break;
    case "dragenter":
    case "dragleave":
      st = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      Vn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Bn.delete(t.pointerId);
  }
}
function Sn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = lr(t), t !== null && su(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function pf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return it = Sn(it, e, t, n, r, l), !0;
    case "dragenter":
      return st = Sn(st, e, t, n, r, l), !0;
    case "mouseover":
      return at = Sn(at, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Vn.set(o, Sn(Vn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Bn.set(o, Sn(Bn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Ks(e) {
  var t = Nt(e.target);
  if (t !== null) {
    var n = Ut(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Os(n), t !== null) {
          e.blockedOn = t, Qs(e.priority, function() {
            Ws(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ko(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ho = r, n.target.dispatchEvent(r), ho = null;
    } else return t = lr(n), t !== null && su(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function oi(e, t, n) {
  jr(e) && n.delete(t);
}
function mf() {
  wo = !1, it !== null && jr(it) && (it = null), st !== null && jr(st) && (st = null), at !== null && jr(at) && (at = null), Vn.forEach(oi), Bn.forEach(oi);
}
function wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, wo || (wo = !0, Se.unstable_scheduleCallback(Se.unstable_NormalPriority, mf)));
}
function Wn(e) {
  function t(l) {
    return wn(l, e);
  }
  if (0 < vr.length) {
    wn(vr[0], e);
    for (var n = 1; n < vr.length; n++) {
      var r = vr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (it !== null && wn(it, e), st !== null && wn(st, e), at !== null && wn(at, e), Vn.forEach(t), Bn.forEach(t), n = 0; n < rt.length; n++) r = rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rt.length && (n = rt[0], n.blockedOn === null); ) Ks(n), n.blockedOn === null && rt.shift();
}
var tn = Je.ReactCurrentBatchConfig, Hr = !0;
function hf(e, t, n, r) {
  var l = M, o = tn.transition;
  tn.transition = null;
  try {
    M = 1, au(e, t, n, r);
  } finally {
    M = l, tn.transition = o;
  }
}
function vf(e, t, n, r) {
  var l = M, o = tn.transition;
  tn.transition = null;
  try {
    M = 4, au(e, t, n, r);
  } finally {
    M = l, tn.transition = o;
  }
}
function au(e, t, n, r) {
  if (Hr) {
    var l = ko(e, t, n, r);
    if (l === null) Wl(e, t, r, Qr, n), li(e, r);
    else if (pf(l, e, t, n, r)) r.stopPropagation();
    else if (li(e, r), t & 4 && -1 < df.indexOf(e)) {
      for (; l !== null; ) {
        var o = lr(l);
        if (o !== null && Bs(o), o = ko(e, t, n, r), o === null && Wl(e, t, r, Qr, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Wl(e, t, r, null, n);
  }
}
var Qr = null;
function ko(e, t, n, r) {
  if (Qr = null, e = ou(r), e = Nt(e), e !== null) if (t = Ut(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Os(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Qr = e, null;
}
function Ys(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (nf()) {
        case uu:
          return 1;
        case Us:
          return 4;
        case Br:
        case rf:
          return 16;
        case $s:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ot = null, cu = null, Tr = null;
function Xs() {
  if (Tr) return Tr;
  var e, t = cu, n = t.length, r, l = "value" in ot ? ot.value : ot.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === l[o - r]; r++) ;
  return Tr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Lr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function yr() {
  return !0;
}
function ui() {
  return !1;
}
function ke(e) {
  function t(n, r, l, o, u) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(o) : o[i]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? yr : ui, this.isPropagationStopped = ui, this;
  }
  return W(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = yr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = yr);
  }, persist: function() {
  }, isPersistent: yr }), t;
}
var pn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, fu = ke(pn), rr = W({}, pn, { view: 0, detail: 0 }), yf = ke(rr), Ol, Ml, kn, fl = W({}, rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: du, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== kn && (kn && e.type === "mousemove" ? (Ol = e.screenX - kn.screenX, Ml = e.screenY - kn.screenY) : Ml = Ol = 0, kn = e), Ol);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ml;
} }), ii = ke(fl), gf = W({}, fl, { dataTransfer: 0 }), Sf = ke(gf), wf = W({}, rr, { relatedTarget: 0 }), Fl = ke(wf), kf = W({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xf = ke(kf), Ef = W({}, pn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Cf = ke(Ef), _f = W({}, pn, { data: 0 }), si = ke(_f), Nf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Pf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, zf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function jf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zf[e]) ? !!t[e] : !1;
}
function du() {
  return jf;
}
var Tf = W({}, rr, { key: function(e) {
  if (e.key) {
    var t = Nf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Lr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: du, charCode: function(e) {
  return e.type === "keypress" ? Lr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Lr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Lf = ke(Tf), Rf = W({}, fl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ai = ke(Rf), Df = W({}, rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: du }), Of = ke(Df), Mf = W({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ff = ke(Mf), If = W({}, fl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Uf = ke(If), $f = [9, 13, 27, 32], pu = Ye && "CompositionEvent" in window, Ln = null;
Ye && "documentMode" in document && (Ln = document.documentMode);
var Af = Ye && "TextEvent" in window && !Ln, Gs = Ye && (!pu || Ln && 8 < Ln && 11 >= Ln), ci = " ", fi = !1;
function Zs(e, t) {
  switch (e) {
    case "keyup":
      return $f.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Js(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Bt = !1;
function Vf(e, t) {
  switch (e) {
    case "compositionend":
      return Js(t);
    case "keypress":
      return t.which !== 32 ? null : (fi = !0, ci);
    case "textInput":
      return e = t.data, e === ci && fi ? null : e;
    default:
      return null;
  }
}
function Bf(e, t) {
  if (Bt) return e === "compositionend" || !pu && Zs(e, t) ? (e = Xs(), Tr = cu = ot = null, Bt = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Gs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Wf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function di(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wf[e.type] : t === "textarea";
}
function qs(e, t, n, r) {
  js(r), t = Kr(t, "onChange"), 0 < t.length && (n = new fu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Rn = null, Hn = null;
function Hf(e) {
  aa(e, 0);
}
function dl(e) {
  var t = Qt(e);
  if (xs(t)) return e;
}
function Qf(e, t) {
  if (e === "change") return t;
}
var bs = !1;
if (Ye) {
  var Il;
  if (Ye) {
    var Ul = "oninput" in document;
    if (!Ul) {
      var pi = document.createElement("div");
      pi.setAttribute("oninput", "return;"), Ul = typeof pi.oninput == "function";
    }
    Il = Ul;
  } else Il = !1;
  bs = Il && (!document.documentMode || 9 < document.documentMode);
}
function mi() {
  Rn && (Rn.detachEvent("onpropertychange", ea), Hn = Rn = null);
}
function ea(e) {
  if (e.propertyName === "value" && dl(Hn)) {
    var t = [];
    qs(t, Hn, e, ou(e)), Ds(Hf, t);
  }
}
function Kf(e, t, n) {
  e === "focusin" ? (mi(), Rn = t, Hn = n, Rn.attachEvent("onpropertychange", ea)) : e === "focusout" && mi();
}
function Yf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return dl(Hn);
}
function Xf(e, t) {
  if (e === "click") return dl(t);
}
function Gf(e, t) {
  if (e === "input" || e === "change") return dl(t);
}
function Zf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Oe = typeof Object.is == "function" ? Object.is : Zf;
function Qn(e, t) {
  if (Oe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!no.call(t, l) || !Oe(e[l], t[l])) return !1;
  }
  return !0;
}
function hi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function vi(e, t) {
  var n = hi(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = hi(n);
  }
}
function ta(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ta(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function na() {
  for (var e = window, t = $r(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = $r(e.document);
  }
  return t;
}
function mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Jf(e) {
  var t = na(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ta(n.ownerDocument.documentElement, n)) {
    if (r !== null && mu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = vi(n, o);
        var u = vi(
          n,
          r
        );
        l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var qf = Ye && "documentMode" in document && 11 >= document.documentMode, Wt = null, xo = null, Dn = null, Eo = !1;
function yi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Eo || Wt == null || Wt !== $r(r) || (r = Wt, "selectionStart" in r && mu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Dn && Qn(Dn, r) || (Dn = r, r = Kr(xo, "onSelect"), 0 < r.length && (t = new fu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Wt)));
}
function gr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ht = { animationend: gr("Animation", "AnimationEnd"), animationiteration: gr("Animation", "AnimationIteration"), animationstart: gr("Animation", "AnimationStart"), transitionend: gr("Transition", "TransitionEnd") }, $l = {}, ra = {};
Ye && (ra = document.createElement("div").style, "AnimationEvent" in window || (delete Ht.animationend.animation, delete Ht.animationiteration.animation, delete Ht.animationstart.animation), "TransitionEvent" in window || delete Ht.transitionend.transition);
function pl(e) {
  if ($l[e]) return $l[e];
  if (!Ht[e]) return e;
  var t = Ht[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ra) return $l[e] = t[n];
  return e;
}
var la = pl("animationend"), oa = pl("animationiteration"), ua = pl("animationstart"), ia = pl("transitionend"), sa = /* @__PURE__ */ new Map(), gi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function gt(e, t) {
  sa.set(e, t), It(t, [e]);
}
for (var Al = 0; Al < gi.length; Al++) {
  var Vl = gi[Al], bf = Vl.toLowerCase(), ed = Vl[0].toUpperCase() + Vl.slice(1);
  gt(bf, "on" + ed);
}
gt(la, "onAnimationEnd");
gt(oa, "onAnimationIteration");
gt(ua, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(ia, "onTransitionEnd");
ln("onMouseEnter", ["mouseout", "mouseover"]);
ln("onMouseLeave", ["mouseout", "mouseover"]);
ln("onPointerEnter", ["pointerout", "pointerover"]);
ln("onPointerLeave", ["pointerout", "pointerover"]);
It("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
It("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
It("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
It("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), td = new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));
function Si(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, qc(r, t, void 0, e), e.currentTarget = null;
}
function aa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var u = r.length - 1; 0 <= u; u--) {
        var i = r[u], s = i.instance, c = i.currentTarget;
        if (i = i.listener, s !== o && l.isPropagationStopped()) break e;
        Si(l, i, c), o = s;
      }
      else for (u = 0; u < r.length; u++) {
        if (i = r[u], s = i.instance, c = i.currentTarget, i = i.listener, s !== o && l.isPropagationStopped()) break e;
        Si(l, i, c), o = s;
      }
    }
  }
  if (Vr) throw e = go, Vr = !1, go = null, e;
}
function I(e, t) {
  var n = t[zo];
  n === void 0 && (n = t[zo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ca(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
  var r = 0;
  t && (r |= 4), ca(n, e, r, t);
}
var Sr = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(e) {
  if (!e[Sr]) {
    e[Sr] = !0, ys.forEach(function(n) {
      n !== "selectionchange" && (td.has(n) || Bl(n, !1, e), Bl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Sr] || (t[Sr] = !0, Bl("selectionchange", !1, t));
  }
}
function ca(e, t, n, r) {
  switch (Ys(t)) {
    case 1:
      var l = hf;
      break;
    case 4:
      l = vf;
      break;
    default:
      l = au;
  }
  n = l.bind(null, t, n, e), l = void 0, !yo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Wl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var u = r.tag;
    if (u === 3 || u === 4) {
      var i = r.stateNode.containerInfo;
      if (i === l || i.nodeType === 8 && i.parentNode === l) break;
      if (u === 4) for (u = r.return; u !== null; ) {
        var s = u.tag;
        if ((s === 3 || s === 4) && (s = u.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        u = u.return;
      }
      for (; i !== null; ) {
        if (u = Nt(i), u === null) return;
        if (s = u.tag, s === 5 || s === 6) {
          r = o = u;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Ds(function() {
    var c = o, h = ou(n), m = [];
    e: {
      var p = sa.get(e);
      if (p !== void 0) {
        var g = fu, k = e;
        switch (e) {
          case "keypress":
            if (Lr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Lf;
            break;
          case "focusin":
            k = "focus", g = Fl;
            break;
          case "focusout":
            k = "blur", g = Fl;
            break;
          case "beforeblur":
          case "afterblur":
            g = Fl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = ii;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Sf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Of;
            break;
          case la:
          case oa:
          case ua:
            g = xf;
            break;
          case ia:
            g = Ff;
            break;
          case "scroll":
            g = yf;
            break;
          case "wheel":
            g = Uf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Cf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = ai;
        }
        var x = (t & 4) !== 0, z = !x && e === "scroll", f = x ? p !== null ? p + "Capture" : null : p;
        x = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (d.tag === 5 && y !== null && (d = y, f !== null && (y = An(a, f), y != null && x.push(Yn(a, y, d)))), z) break;
          a = a.return;
        }
        0 < x.length && (p = new g(p, k, null, n, h), m.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== ho && (k = n.relatedTarget || n.fromElement) && (Nt(k) || k[Xe])) break e;
        if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (k = n.relatedTarget || n.toElement, g = c, k = k ? Nt(k) : null, k !== null && (z = Ut(k), k !== z || k.tag !== 5 && k.tag !== 6) && (k = null)) : (g = null, k = c), g !== k)) {
          if (x = ii, y = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (x = ai, y = "onPointerLeave", f = "onPointerEnter", a = "pointer"), z = g == null ? p : Qt(g), d = k == null ? p : Qt(k), p = new x(y, a + "leave", g, n, h), p.target = z, p.relatedTarget = d, y = null, Nt(h) === c && (x = new x(f, a + "enter", k, n, h), x.target = d, x.relatedTarget = z, y = x), z = y, g && k) t: {
            for (x = g, f = k, a = 0, d = x; d; d = $t(d)) a++;
            for (d = 0, y = f; y; y = $t(y)) d++;
            for (; 0 < a - d; ) x = $t(x), a--;
            for (; 0 < d - a; ) f = $t(f), d--;
            for (; a--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = $t(x), f = $t(f);
            }
            x = null;
          }
          else x = null;
          g !== null && wi(m, p, g, x, !1), k !== null && z !== null && wi(m, z, k, x, !0);
        }
      }
      e: {
        if (p = c ? Qt(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var E = Qf;
        else if (di(p)) if (bs) E = Gf;
        else {
          E = Yf;
          var P = Kf;
        }
        else (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Xf);
        if (E && (E = E(e, c))) {
          qs(m, E, n, h);
          break e;
        }
        P && P(e, p, c), e === "focusout" && (P = p._wrapperState) && P.controlled && p.type === "number" && ao(p, "number", p.value);
      }
      switch (P = c ? Qt(c) : window, e) {
        case "focusin":
          (di(P) || P.contentEditable === "true") && (Wt = P, xo = c, Dn = null);
          break;
        case "focusout":
          Dn = xo = Wt = null;
          break;
        case "mousedown":
          Eo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Eo = !1, yi(m, n, h);
          break;
        case "selectionchange":
          if (qf) break;
        case "keydown":
        case "keyup":
          yi(m, n, h);
      }
      var N;
      if (pu) e: {
        switch (e) {
          case "compositionstart":
            var w = "onCompositionStart";
            break e;
          case "compositionend":
            w = "onCompositionEnd";
            break e;
          case "compositionupdate":
            w = "onCompositionUpdate";
            break e;
        }
        w = void 0;
      }
      else Bt ? Zs(e, n) && (w = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (w = "onCompositionStart");
      w && (Gs && n.locale !== "ko" && (Bt || w !== "onCompositionStart" ? w === "onCompositionEnd" && Bt && (N = Xs()) : (ot = h, cu = "value" in ot ? ot.value : ot.textContent, Bt = !0)), P = Kr(c, w), 0 < P.length && (w = new si(w, e, null, n, h), m.push({ event: w, listeners: P }), N ? w.data = N : (N = Js(n), N !== null && (w.data = N)))), (N = Af ? Vf(e, n) : Bf(e, n)) && (c = Kr(c, "onBeforeInput"), 0 < c.length && (h = new si("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: c }), h.data = N));
    }
    aa(m, t);
  });
}
function Yn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Kr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = An(e, n), o != null && r.unshift(Yn(e, o, l)), o = An(e, t), o != null && r.push(Yn(e, o, l))), e = e.return;
  }
  return r;
}
function $t(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wi(e, t, n, r, l) {
  for (var o = t._reactName, u = []; n !== null && n !== r; ) {
    var i = n, s = i.alternate, c = i.stateNode;
    if (s !== null && s === r) break;
    i.tag === 5 && c !== null && (i = c, l ? (s = An(n, o), s != null && u.unshift(Yn(n, s, i))) : l || (s = An(n, o), s != null && u.push(Yn(n, s, i)))), n = n.return;
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var nd = /\r\n?/g, rd = /\u0000|\uFFFD/g;
function ki(e) {
  return (typeof e == "string" ? e : "" + e).replace(nd, `
`).replace(rd, "");
}
function wr(e, t, n) {
  if (t = ki(t), ki(e) !== t && n) throw Error(S(425));
}
function Yr() {
}
var Co = null, _o = null;
function No(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Po = typeof setTimeout == "function" ? setTimeout : void 0, ld = typeof clearTimeout == "function" ? clearTimeout : void 0, xi = typeof Promise == "function" ? Promise : void 0, od = typeof queueMicrotask == "function" ? queueMicrotask : typeof xi < "u" ? function(e) {
  return xi.resolve(null).then(e).catch(ud);
} : Po;
function ud(e) {
  setTimeout(function() {
    throw e;
  });
}
function Hl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Wn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Wn(t);
}
function ct(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ei(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var mn = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + mn, Xn = "__reactProps$" + mn, Xe = "__reactContainer$" + mn, zo = "__reactEvents$" + mn, id = "__reactListeners$" + mn, sd = "__reactHandles$" + mn;
function Nt(e) {
  var t = e[Ie];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Xe] || n[Ie]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ei(e); e !== null; ) {
        if (n = e[Ie]) return n;
        e = Ei(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function lr(e) {
  return e = e[Ie] || e[Xe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function ml(e) {
  return e[Xn] || null;
}
var jo = [], Kt = -1;
function St(e) {
  return { current: e };
}
function U(e) {
  0 > Kt || (e.current = jo[Kt], jo[Kt] = null, Kt--);
}
function F(e, t) {
  Kt++, jo[Kt] = e.current, e.current = t;
}
var vt = {}, oe = St(vt), pe = St(!1), Rt = vt;
function on(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function me(e) {
  return e = e.childContextTypes, e != null;
}
function Xr() {
  U(pe), U(oe);
}
function Ci(e, t, n) {
  if (oe.current !== vt) throw Error(S(168));
  F(oe, t), F(pe, n);
}
function fa(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Qc(e) || "Unknown", l));
  return W({}, n, r);
}
function Gr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vt, Rt = oe.current, F(oe, e), F(pe, pe.current), !0;
}
function _i(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = fa(e, t, Rt), r.__reactInternalMemoizedMergedChildContext = e, U(pe), U(oe), F(oe, e)) : U(pe), F(pe, n);
}
var We = null, hl = !1, Ql = !1;
function da(e) {
  We === null ? We = [e] : We.push(e);
}
function ad(e) {
  hl = !0, da(e);
}
function wt() {
  if (!Ql && We !== null) {
    Ql = !0;
    var e = 0, t = M;
    try {
      var n = We;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      We = null, hl = !1;
    } catch (l) {
      throw We !== null && (We = We.slice(e + 1)), Is(uu, wt), l;
    } finally {
      M = t, Ql = !1;
    }
  }
  return null;
}
var Yt = [], Xt = 0, Zr = null, Jr = 0, xe = [], Ee = 0, Dt = null, He = 1, Qe = "";
function Et(e, t) {
  Yt[Xt++] = Jr, Yt[Xt++] = Zr, Zr = e, Jr = t;
}
function pa(e, t, n) {
  xe[Ee++] = He, xe[Ee++] = Qe, xe[Ee++] = Dt, Dt = e;
  var r = He;
  e = Qe;
  var l = 32 - Re(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Re(t) + l;
  if (30 < o) {
    var u = l - l % 5;
    o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, He = 1 << 32 - Re(t) + l | n << l | r, Qe = o + e;
  } else He = 1 << o | n << l | r, Qe = e;
}
function hu(e) {
  e.return !== null && (Et(e, 1), pa(e, 1, 0));
}
function vu(e) {
  for (; e === Zr; ) Zr = Yt[--Xt], Yt[Xt] = null, Jr = Yt[--Xt], Yt[Xt] = null;
  for (; e === Dt; ) Dt = xe[--Ee], xe[Ee] = null, Qe = xe[--Ee], xe[Ee] = null, He = xe[--Ee], xe[Ee] = null;
}
var ge = null, ye = null, A = !1, Le = null;
function ma(e, t) {
  var n = Ce(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ni(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ge = e, ye = ct(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ge = e, ye = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Dt !== null ? { id: He, overflow: Qe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ce(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ge = e, ye = null, !0) : !1;
    default:
      return !1;
  }
}
function To(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Lo(e) {
  if (A) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Ni(e, t)) {
        if (To(e)) throw Error(S(418));
        t = ct(n.nextSibling);
        var r = ge;
        t && Ni(e, t) ? ma(r, n) : (e.flags = e.flags & -4097 | 2, A = !1, ge = e);
      }
    } else {
      if (To(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, A = !1, ge = e;
    }
  }
}
function Pi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ge = e;
}
function kr(e) {
  if (e !== ge) return !1;
  if (!A) return Pi(e), A = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !No(e.type, e.memoizedProps)), t && (t = ye)) {
    if (To(e)) throw ha(), Error(S(418));
    for (; t; ) ma(e, t), t = ct(t.nextSibling);
  }
  if (Pi(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = ct(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = ge ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function ha() {
  for (var e = ye; e; ) e = ct(e.nextSibling);
}
function un() {
  ye = ge = null, A = !1;
}
function yu(e) {
  Le === null ? Le = [e] : Le.push(e);
}
var cd = Je.ReactCurrentBatchConfig;
function xn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(u) {
        var i = l.refs;
        u === null ? delete i[o] : i[o] = u;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function xr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function zi(e) {
  var t = e._init;
  return t(e._payload);
}
function va(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = mt(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function u(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, a, d, y) {
    return a === null || a.tag !== 6 ? (a = ql(d, f.mode, y), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, y) {
    var E = d.type;
    return E === Vt ? h(f, a, d.props.children, y, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === tt && zi(E) === a.type) ? (y = l(a, d.props), y.ref = xn(f, a, d), y.return = f, y) : (y = Ur(d.type, d.key, d.props, null, f.mode, y), y.ref = xn(f, a, d), y.return = f, y);
  }
  function c(f, a, d, y) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = bl(d, f.mode, y), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, y, E) {
    return a === null || a.tag !== 7 ? (a = Tt(d, f.mode, y, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function m(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = ql("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case fr:
          return d = Ur(a.type, a.key, a.props, null, f.mode, d), d.ref = xn(f, null, a), d.return = f, d;
        case At:
          return a = bl(a, f.mode, d), a.return = f, a;
        case tt:
          var y = a._init;
          return m(f, y(a._payload), d);
      }
      if (Nn(a) || yn(a)) return a = Tt(a, f.mode, d, null), a.return = f, a;
      xr(f, a);
    }
    return null;
  }
  function p(f, a, d, y) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : i(f, a, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case fr:
          return d.key === E ? s(f, a, d, y) : null;
        case At:
          return d.key === E ? c(f, a, d, y) : null;
        case tt:
          return E = d._init, p(
            f,
            a,
            E(d._payload),
            y
          );
      }
      if (Nn(d) || yn(d)) return E !== null ? null : h(f, a, d, y, null);
      xr(f, d);
    }
    return null;
  }
  function g(f, a, d, y, E) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return f = f.get(d) || null, i(a, f, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case fr:
          return f = f.get(y.key === null ? d : y.key) || null, s(a, f, y, E);
        case At:
          return f = f.get(y.key === null ? d : y.key) || null, c(a, f, y, E);
        case tt:
          var P = y._init;
          return g(f, a, d, P(y._payload), E);
      }
      if (Nn(y) || yn(y)) return f = f.get(d) || null, h(a, f, y, E, null);
      xr(a, y);
    }
    return null;
  }
  function k(f, a, d, y) {
    for (var E = null, P = null, N = a, w = a = 0, $ = null; N !== null && w < d.length; w++) {
      N.index > w ? ($ = N, N = null) : $ = N.sibling;
      var T = p(f, N, d[w], y);
      if (T === null) {
        N === null && (N = $);
        break;
      }
      e && N && T.alternate === null && t(f, N), a = o(T, a, w), P === null ? E = T : P.sibling = T, P = T, N = $;
    }
    if (w === d.length) return n(f, N), A && Et(f, w), E;
    if (N === null) {
      for (; w < d.length; w++) N = m(f, d[w], y), N !== null && (a = o(N, a, w), P === null ? E = N : P.sibling = N, P = N);
      return A && Et(f, w), E;
    }
    for (N = r(f, N); w < d.length; w++) $ = g(N, f, w, d[w], y), $ !== null && (e && $.alternate !== null && N.delete($.key === null ? w : $.key), a = o($, a, w), P === null ? E = $ : P.sibling = $, P = $);
    return e && N.forEach(function(ce) {
      return t(f, ce);
    }), A && Et(f, w), E;
  }
  function x(f, a, d, y) {
    var E = yn(d);
    if (typeof E != "function") throw Error(S(150));
    if (d = E.call(d), d == null) throw Error(S(151));
    for (var P = E = null, N = a, w = a = 0, $ = null, T = d.next(); N !== null && !T.done; w++, T = d.next()) {
      N.index > w ? ($ = N, N = null) : $ = N.sibling;
      var ce = p(f, N, T.value, y);
      if (ce === null) {
        N === null && (N = $);
        break;
      }
      e && N && ce.alternate === null && t(f, N), a = o(ce, a, w), P === null ? E = ce : P.sibling = ce, P = ce, N = $;
    }
    if (T.done) return n(
      f,
      N
    ), A && Et(f, w), E;
    if (N === null) {
      for (; !T.done; w++, T = d.next()) T = m(f, T.value, y), T !== null && (a = o(T, a, w), P === null ? E = T : P.sibling = T, P = T);
      return A && Et(f, w), E;
    }
    for (N = r(f, N); !T.done; w++, T = d.next()) T = g(N, f, w, T.value, y), T !== null && (e && T.alternate !== null && N.delete(T.key === null ? w : T.key), a = o(T, a, w), P === null ? E = T : P.sibling = T, P = T);
    return e && N.forEach(function(hn) {
      return t(f, hn);
    }), A && Et(f, w), E;
  }
  function z(f, a, d, y) {
    if (typeof d == "object" && d !== null && d.type === Vt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case fr:
          e: {
            for (var E = d.key, P = a; P !== null; ) {
              if (P.key === E) {
                if (E = d.type, E === Vt) {
                  if (P.tag === 7) {
                    n(f, P.sibling), a = l(P, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === tt && zi(E) === P.type) {
                  n(f, P.sibling), a = l(P, d.props), a.ref = xn(f, P, d), a.return = f, f = a;
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            d.type === Vt ? (a = Tt(d.props.children, f.mode, y, d.key), a.return = f, f = a) : (y = Ur(d.type, d.key, d.props, null, f.mode, y), y.ref = xn(f, a, d), y.return = f, f = y);
          }
          return u(f);
        case At:
          e: {
            for (P = d.key; a !== null; ) {
              if (a.key === P) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = bl(d, f.mode, y), a.return = f, f = a;
          }
          return u(f);
        case tt:
          return P = d._init, z(f, a, P(d._payload), y);
      }
      if (Nn(d)) return k(f, a, d, y);
      if (yn(d)) return x(f, a, d, y);
      xr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = ql(d, f.mode, y), a.return = f, f = a), u(f)) : n(f, a);
  }
  return z;
}
var sn = va(!0), ya = va(!1), qr = St(null), br = null, Gt = null, gu = null;
function Su() {
  gu = Gt = br = null;
}
function wu(e) {
  var t = qr.current;
  U(qr), e._currentValue = t;
}
function Ro(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function nn(e, t) {
  br = e, gu = Gt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (de = !0), e.firstContext = null);
}
function Ne(e) {
  var t = e._currentValue;
  if (gu !== e) if (e = { context: e, memoizedValue: t, next: null }, Gt === null) {
    if (br === null) throw Error(S(308));
    Gt = e, br.dependencies = { lanes: 0, firstContext: e };
  } else Gt = Gt.next = e;
  return t;
}
var Pt = null;
function ku(e) {
  Pt === null ? Pt = [e] : Pt.push(e);
}
function ga(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, ku(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ge(e, r);
}
function Ge(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var nt = !1;
function xu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Sa(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ke(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, D & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ge(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, ku(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ge(e, n);
}
function Rr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, iu(e, n);
  }
}
function ji(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var u = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = u : o = o.next = u, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function el(e, t, n, r) {
  var l = e.updateQueue;
  nt = !1;
  var o = l.firstBaseUpdate, u = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i, c = s.next;
    s.next = null, u === null ? o = c : u.next = c, u = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== u && (i === null ? h.firstBaseUpdate = c : i.next = c, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var m = l.baseState;
    u = 0, h = c = s = null, i = o;
    do {
      var p = i.lane, g = i.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: g,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var k = e, x = i;
          switch (p = t, g = n, x.tag) {
            case 1:
              if (k = x.payload, typeof k == "function") {
                m = k.call(g, m, p);
                break e;
              }
              m = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = x.payload, p = typeof k == "function" ? k.call(g, m, p) : k, p == null) break e;
              m = W({}, m, p);
              break e;
            case 2:
              nt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [i] : p.push(i));
      } else g = { eventTime: g, lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (c = h = g, s = m) : h = h.next = g, u |= p;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        p = i, i = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        u |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    Mt |= u, e.lanes = u, e.memoizedState = m;
  }
}
function Ti(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
      l.call(r);
    }
  }
}
var or = {}, $e = St(or), Gn = St(or), Zn = St(or);
function zt(e) {
  if (e === or) throw Error(S(174));
  return e;
}
function Eu(e, t) {
  switch (F(Zn, t), F(Gn, e), F($e, or), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = fo(t, e);
  }
  U($e), F($e, t);
}
function an() {
  U($e), U(Gn), U(Zn);
}
function wa(e) {
  zt(Zn.current);
  var t = zt($e.current), n = fo(t, e.type);
  t !== n && (F(Gn, e), F($e, n));
}
function Cu(e) {
  Gn.current === e && (U($e), U(Gn));
}
var V = St(0);
function tl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Kl = [];
function _u() {
  for (var e = 0; e < Kl.length; e++) Kl[e]._workInProgressVersionPrimary = null;
  Kl.length = 0;
}
var Dr = Je.ReactCurrentDispatcher, Yl = Je.ReactCurrentBatchConfig, Ot = 0, B = null, X = null, J = null, nl = !1, On = !1, Jn = 0, fd = 0;
function ne() {
  throw Error(S(321));
}
function Nu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Oe(e[n], t[n])) return !1;
  return !0;
}
function Pu(e, t, n, r, l, o) {
  if (Ot = o, B = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Dr.current = e === null || e.memoizedState === null ? hd : vd, e = n(r, l), On) {
    o = 0;
    do {
      if (On = !1, Jn = 0, 25 <= o) throw Error(S(301));
      o += 1, J = X = null, t.updateQueue = null, Dr.current = yd, e = n(r, l);
    } while (On);
  }
  if (Dr.current = rl, t = X !== null && X.next !== null, Ot = 0, J = X = B = null, nl = !1, t) throw Error(S(300));
  return e;
}
function zu() {
  var e = Jn !== 0;
  return Jn = 0, e;
}
function Fe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? B.memoizedState = J = e : J = J.next = e, J;
}
function Pe() {
  if (X === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? B.memoizedState : J.next;
  if (t !== null) J = t, X = e;
  else {
    if (e === null) throw Error(S(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, J === null ? B.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xl(e) {
  var t = Pe(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = X, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var u = l.next;
      l.next = o.next, o.next = u;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var i = u = null, s = null, c = o;
    do {
      var h = c.lane;
      if ((Ot & h) === h) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (i = s = m, u = r) : s = s.next = m, B.lanes |= h, Mt |= h;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? u = r : s.next = i, Oe(r, t.memoizedState) || (de = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, B.lanes |= o, Mt |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Gl(e) {
  var t = Pe(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var u = l = l.next;
    do
      o = e(o, u.action), u = u.next;
    while (u !== l);
    Oe(o, t.memoizedState) || (de = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function ka() {
}
function xa(e, t) {
  var n = B, r = Pe(), l = t(), o = !Oe(r.memoizedState, l);
  if (o && (r.memoizedState = l, de = !0), r = r.queue, ju(_a.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, bn(9, Ca.bind(null, n, r, l, t), void 0, null), q === null) throw Error(S(349));
    Ot & 30 || Ea(n, t, l);
  }
  return l;
}
function Ea(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = B.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, B.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ca(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Na(t) && Pa(e);
}
function _a(e, t, n) {
  return n(function() {
    Na(t) && Pa(e);
  });
}
function Na(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Oe(e, n);
  } catch {
    return !0;
  }
}
function Pa(e) {
  var t = Ge(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Li(e) {
  var t = Fe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qn, lastRenderedState: e }, t.queue = e, e = e.dispatch = md.bind(null, B, e), [t.memoizedState, e];
}
function bn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = B.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, B.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function za() {
  return Pe().memoizedState;
}
function Or(e, t, n, r) {
  var l = Fe();
  B.flags |= e, l.memoizedState = bn(1 | t, n, void 0, r === void 0 ? null : r);
}
function vl(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var u = X.memoizedState;
    if (o = u.destroy, r !== null && Nu(r, u.deps)) {
      l.memoizedState = bn(t, n, o, r);
      return;
    }
  }
  B.flags |= e, l.memoizedState = bn(1 | t, n, o, r);
}
function Ri(e, t) {
  return Or(8390656, 8, e, t);
}
function ju(e, t) {
  return vl(2048, 8, e, t);
}
function ja(e, t) {
  return vl(4, 2, e, t);
}
function Ta(e, t) {
  return vl(4, 4, e, t);
}
function La(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ra(e, t, n) {
  return n = n != null ? n.concat([e]) : null, vl(4, 4, La.bind(null, t, e), n);
}
function Tu() {
}
function Da(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Oa(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ma(e, t, n) {
  return Ot & 21 ? (Oe(n, t) || (n = As(), B.lanes |= n, Mt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, de = !0), e.memoizedState = n);
}
function dd(e, t) {
  var n = M;
  M = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Yl.transition;
  Yl.transition = {};
  try {
    e(!1), t();
  } finally {
    M = n, Yl.transition = r;
  }
}
function Fa() {
  return Pe().memoizedState;
}
function pd(e, t, n) {
  var r = pt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ia(e)) Ua(t, n);
  else if (n = ga(e, t, n, r), n !== null) {
    var l = ie();
    De(n, e, r, l), $a(n, t, r);
  }
}
function md(e, t, n) {
  var r = pt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ia(e)) Ua(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var u = t.lastRenderedState, i = o(u, n);
      if (l.hasEagerState = !0, l.eagerState = i, Oe(i, u)) {
        var s = t.interleaved;
        s === null ? (l.next = l, ku(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = ga(e, t, l, r), n !== null && (l = ie(), De(n, e, r, l), $a(n, t, r));
  }
}
function Ia(e) {
  var t = e.alternate;
  return e === B || t !== null && t === B;
}
function Ua(e, t) {
  On = nl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function $a(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, iu(e, n);
  }
}
var rl = { readContext: Ne, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, hd = { readContext: Ne, useCallback: function(e, t) {
  return Fe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ne, useEffect: Ri, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Or(
    4194308,
    4,
    La.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Or(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Or(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Fe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Fe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = pd.bind(null, B, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Fe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Li, useDebugValue: Tu, useDeferredValue: function(e) {
  return Fe().memoizedState = e;
}, useTransition: function() {
  var e = Li(!1), t = e[0];
  return e = dd.bind(null, e[1]), Fe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = B, l = Fe();
  if (A) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), q === null) throw Error(S(349));
    Ot & 30 || Ea(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Ri(_a.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, bn(9, Ca.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Fe(), t = q.identifierPrefix;
  if (A) {
    var n = Qe, r = He;
    n = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = fd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, vd = {
  readContext: Ne,
  useCallback: Da,
  useContext: Ne,
  useEffect: ju,
  useImperativeHandle: Ra,
  useInsertionEffect: ja,
  useLayoutEffect: Ta,
  useMemo: Oa,
  useReducer: Xl,
  useRef: za,
  useState: function() {
    return Xl(qn);
  },
  useDebugValue: Tu,
  useDeferredValue: function(e) {
    var t = Pe();
    return Ma(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Xl(qn)[0], t = Pe().memoizedState;
    return [e, t];
  },
  useMutableSource: ka,
  useSyncExternalStore: xa,
  useId: Fa,
  unstable_isNewReconciler: !1
}, yd = { readContext: Ne, useCallback: Da, useContext: Ne, useEffect: ju, useImperativeHandle: Ra, useInsertionEffect: ja, useLayoutEffect: Ta, useMemo: Oa, useReducer: Gl, useRef: za, useState: function() {
  return Gl(qn);
}, useDebugValue: Tu, useDeferredValue: function(e) {
  var t = Pe();
  return X === null ? t.memoizedState = e : Ma(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Gl(qn)[0], t = Pe().memoizedState;
  return [e, t];
}, useMutableSource: ka, useSyncExternalStore: xa, useId: Fa, unstable_isNewReconciler: !1 };
function je(e, t) {
  if (e && e.defaultProps) {
    t = W({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Do(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var yl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ut(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = pt(e), o = Ke(r, l);
  o.payload = t, n != null && (o.callback = n), t = ft(e, o, l), t !== null && (De(t, e, l, r), Rr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = pt(e), o = Ke(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ft(e, o, l), t !== null && (De(t, e, l, r), Rr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ie(), r = pt(e), l = Ke(n, r);
  l.tag = 2, t != null && (l.callback = t), t = ft(e, l, r), t !== null && (De(t, e, r, n), Rr(t, e, r));
} };
function Di(e, t, n, r, l, o, u) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : t.prototype && t.prototype.isPureReactComponent ? !Qn(n, r) || !Qn(l, o) : !0;
}
function Aa(e, t, n) {
  var r = !1, l = vt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ne(o) : (l = me(t) ? Rt : oe.current, r = t.contextTypes, o = (r = r != null) ? on(e, l) : vt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = yl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Oi(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && yl.enqueueReplaceState(t, t.state, null);
}
function Oo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, xu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ne(o) : (o = me(t) ? Rt : oe.current, l.context = on(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Do(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && yl.enqueueReplaceState(l, l.state, null), el(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function cn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Hc(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Zl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Mo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var gd = typeof WeakMap == "function" ? WeakMap : Map;
function Va(e, t, n) {
  n = Ke(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ol || (ol = !0, Qo = r), Mo(e, t);
  }, n;
}
function Ba(e, t, n) {
  n = Ke(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Mo(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Mo(e, t), typeof r != "function" && (dt === null ? dt = /* @__PURE__ */ new Set([this]) : dt.add(this));
    var u = t.stack;
    this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
  }), n;
}
function Mi(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Rd.bind(null, e, t, n), t.then(e, e));
}
function Fi(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ii(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ke(-1, 1), t.tag = 2, ft(n, t, 1))), n.lanes |= 1), e);
}
var Sd = Je.ReactCurrentOwner, de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? ya(t, null, n, r) : sn(t, e.child, n, r);
}
function Ui(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return nn(t, l), r = Pu(e, t, n, r, o, l), n = zu(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : (A && n && hu(t), t.flags |= 1, ue(e, t, r, l), t.child);
}
function $i(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Uu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Wa(e, t, o, r, l)) : (e = Ur(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var u = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Qn, n(u, r) && e.ref === t.ref) return Ze(e, t, l);
  }
  return t.flags |= 1, e = mt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Wa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Qn(o, r) && e.ref === t.ref) if (de = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (de = !0);
    else return t.lanes = e.lanes, Ze(e, t, l);
  }
  return Fo(e, t, n, r, l);
}
function Ha(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, F(Jt, ve), ve |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, F(Jt, ve), ve |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, F(Jt, ve), ve |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, F(Jt, ve), ve |= r;
  return ue(e, t, l, n), t.child;
}
function Qa(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Fo(e, t, n, r, l) {
  var o = me(n) ? Rt : oe.current;
  return o = on(t, o), nn(t, l), n = Pu(e, t, n, r, o, l), r = zu(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : (A && r && hu(t), t.flags |= 1, ue(e, t, n, l), t.child);
}
function Ai(e, t, n, r, l) {
  if (me(n)) {
    var o = !0;
    Gr(t);
  } else o = !1;
  if (nn(t, l), t.stateNode === null) Mr(e, t), Aa(t, n, r), Oo(t, n, r, l), r = !0;
  else if (e === null) {
    var u = t.stateNode, i = t.memoizedProps;
    u.props = i;
    var s = u.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ne(c) : (c = me(n) ? Rt : oe.current, c = on(t, c));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof u.getSnapshotBeforeUpdate == "function";
    m || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || s !== c) && Oi(t, u, r, c), nt = !1;
    var p = t.memoizedState;
    u.state = p, el(t, r, u, l), s = t.memoizedState, i !== r || p !== s || pe.current || nt ? (typeof h == "function" && (Do(t, n, h, r), s = t.memoizedState), (i = nt || Di(t, n, i, r, p, s, c)) ? (m || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), u.props = r, u.state = s, u.context = c, r = i) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    u = t.stateNode, Sa(e, t), i = t.memoizedProps, c = t.type === t.elementType ? i : je(t.type, i), u.props = c, m = t.pendingProps, p = u.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ne(s) : (s = me(n) ? Rt : oe.current, s = on(t, s));
    var g = n.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== m || p !== s) && Oi(t, u, r, s), nt = !1, p = t.memoizedState, u.state = p, el(t, r, u, l);
    var k = t.memoizedState;
    i !== m || p !== k || pe.current || nt ? (typeof g == "function" && (Do(t, n, g, r), k = t.memoizedState), (c = nt || Di(t, n, c, r, p, k, s) || !1) ? (h || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, k, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, k, s)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), u.props = r, u.state = k, u.context = s, r = c) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Io(e, t, n, r, o, l);
}
function Io(e, t, n, r, l, o) {
  Qa(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u) return l && _i(t, n, !1), Ze(e, t, o);
  r = t.stateNode, Sd.current = t;
  var i = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && u ? (t.child = sn(t, e.child, null, o), t.child = sn(t, null, i, o)) : ue(e, t, i, o), t.memoizedState = r.state, l && _i(t, n, !0), t.child;
}
function Ka(e) {
  var t = e.stateNode;
  t.pendingContext ? Ci(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ci(e, t.context, !1), Eu(e, t.containerInfo);
}
function Vi(e, t, n, r, l) {
  return un(), yu(l), t.flags |= 256, ue(e, t, n, r), t.child;
}
var Uo = { dehydrated: null, treeContext: null, retryLane: 0 };
function $o(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ya(e, t, n) {
  var r = t.pendingProps, l = V.current, o = !1, u = (t.flags & 128) !== 0, i;
  if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), F(V, l & 1), e === null)
    return Lo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (u = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, u = { mode: "hidden", children: u }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = u) : o = wl(u, r, 0, null), e = Tt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = $o(n), t.memoizedState = Uo, e) : Lu(t, u));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return wd(e, t, u, r, i, l, n);
  if (o) {
    o = r.fallback, u = t.mode, l = e.child, i = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(u & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = mt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = mt(i, o) : (o = Tt(o, u, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, u = e.child.memoizedState, u = u === null ? $o(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, o.memoizedState = u, o.childLanes = e.childLanes & ~n, t.memoizedState = Uo, r;
  }
  return o = e.child, e = o.sibling, r = mt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Lu(e, t) {
  return t = wl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Er(e, t, n, r) {
  return r !== null && yu(r), sn(t, e.child, null, n), e = Lu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function wd(e, t, n, r, l, o, u) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Zl(Error(S(422))), Er(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = wl({ mode: "visible", children: r.children }, l, 0, null), o = Tt(o, l, u, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && sn(t, e.child, null, u), t.child.memoizedState = $o(u), t.memoizedState = Uo, o);
  if (!(t.mode & 1)) return Er(e, t, u, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, o = Error(S(419)), r = Zl(o, r, void 0), Er(e, t, u, r);
  }
  if (i = (u & e.childLanes) !== 0, de || i) {
    if (r = q, r !== null) {
      switch (u & -u) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | u) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ge(e, l), De(r, e, l, -1));
    }
    return Iu(), r = Zl(Error(S(421))), Er(e, t, u, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Dd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ye = ct(l.nextSibling), ge = t, A = !0, Le = null, e !== null && (xe[Ee++] = He, xe[Ee++] = Qe, xe[Ee++] = Dt, He = e.id, Qe = e.overflow, Dt = t), t = Lu(t, r.children), t.flags |= 4096, t);
}
function Bi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ro(e.return, t, n);
}
function Jl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Xa(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ue(e, t, r.children, n), r = V.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Bi(e, n, t);
      else if (e.tag === 19) Bi(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (F(V, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && tl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Jl(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && tl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Jl(t, !0, n, null, o);
      break;
    case "together":
      Jl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Mr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ze(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Mt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = mt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function kd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ka(t), un();
      break;
    case 5:
      wa(t);
      break;
    case 1:
      me(t.type) && Gr(t);
      break;
    case 4:
      Eu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      F(qr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (F(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ya(e, t, n) : (F(V, V.current & 1), e = Ze(e, t, n), e !== null ? e.sibling : null);
      F(V, V.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Xa(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), F(V, V.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ha(e, t, n);
  }
  return Ze(e, t, n);
}
var Ga, Ao, Za, Ja;
Ga = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Ao = function() {
};
Za = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, zt($e.current);
    var o = null;
    switch (n) {
      case "input":
        l = io(e, l), r = io(e, r), o = [];
        break;
      case "select":
        l = W({}, l, { value: void 0 }), r = W({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = co(e, l), r = co(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yr);
    }
    po(n, r);
    var u;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var i = l[c];
      for (u in i) i.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Un.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (i = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== i && (s != null || i != null)) if (c === "style") if (i) {
        for (u in i) !i.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
        for (u in s) s.hasOwnProperty(u) && i[u] !== s[u] && (n || (n = {}), n[u] = s[u]);
      } else n || (o || (o = []), o.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Un.hasOwnProperty(c) ? (s != null && c === "onScroll" && I("scroll", e), o || i === s || (o = [])) : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ja = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function En(e, t) {
  if (!A) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function xd(e, t, n) {
  var r = t.pendingProps;
  switch (vu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return me(t.type) && Xr(), re(t), null;
    case 3:
      return r = t.stateNode, an(), U(pe), U(oe), _u(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (kr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Le !== null && (Xo(Le), Le = null))), Ao(e, t), re(t), null;
    case 5:
      Cu(t);
      var l = zt(Zn.current);
      if (n = t.type, e !== null && t.stateNode != null) Za(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return re(t), null;
        }
        if (e = zt($e.current), kr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ie] = t, r[Xn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < zn.length; l++) I(zn[l], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I(
                "error",
                r
              ), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              Ju(r, o), I("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, I("invalid", r);
              break;
            case "textarea":
              bu(r, o), I("invalid", r);
          }
          po(n, o), l = null;
          for (var u in o) if (o.hasOwnProperty(u)) {
            var i = o[u];
            u === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && wr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && wr(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Un.hasOwnProperty(u) && i != null && u === "onScroll" && I("scroll", r);
          }
          switch (n) {
            case "input":
              dr(r), qu(r, o, !0);
              break;
            case "textarea":
              dr(r), ei(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Yr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = _s(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[Ie] = t, e[Xn] = r, Ga(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (u = mo(n, r), n) {
              case "dialog":
                I("cancel", e), I("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                I("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < zn.length; l++) I(zn[l], e);
                l = r;
                break;
              case "source":
                I("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                I(
                  "error",
                  e
                ), I("load", e), l = r;
                break;
              case "details":
                I("toggle", e), l = r;
                break;
              case "input":
                Ju(e, r), l = io(e, r), I("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = W({}, r, { value: void 0 }), I("invalid", e);
                break;
              case "textarea":
                bu(e, r), l = co(e, r), I("invalid", e);
                break;
              default:
                l = r;
            }
            po(n, l), i = l;
            for (o in i) if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "style" ? zs(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ns(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && $n(e, s) : typeof s == "number" && $n(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Un.hasOwnProperty(o) ? s != null && o === "onScroll" && I("scroll", e) : s != null && tu(e, o, s, u));
            }
            switch (n) {
              case "input":
                dr(e), qu(e, r, !1);
                break;
              case "textarea":
                dr(e), ei(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? qt(e, !!r.multiple, o, !1) : r.defaultValue != null && qt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Yr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Ja(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = zt(Zn.current), zt($e.current), kr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ie] = t, (o = r.nodeValue !== n) && (e = ge, e !== null)) switch (e.tag) {
            case 3:
              wr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && wr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ie] = t, t.stateNode = r;
      }
      return re(t), null;
    case 13:
      if (U(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (A && ye !== null && t.mode & 1 && !(t.flags & 128)) ha(), un(), t.flags |= 98560, o = !1;
        else if (o = kr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
            o[Ie] = t;
          } else un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          re(t), o = !1;
        } else Le !== null && (Xo(Le), Le = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? G === 0 && (G = 3) : Iu())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
    case 4:
      return an(), Ao(e, t), e === null && Kn(t.stateNode.containerInfo), re(t), null;
    case 10:
      return wu(t.type._context), re(t), null;
    case 17:
      return me(t.type) && Xr(), re(t), null;
    case 19:
      if (U(V), o = t.memoizedState, o === null) return re(t), null;
      if (r = (t.flags & 128) !== 0, u = o.rendering, u === null) if (r) En(o, !1);
      else {
        if (G !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (u = tl(e), u !== null) {
            for (t.flags |= 128, En(o, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return F(V, V.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && K() > fn && (t.flags |= 128, r = !0, En(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = tl(u), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), En(o, !0), o.tail === null && o.tailMode === "hidden" && !u.alternate && !A) return re(t), null;
        } else 2 * K() - o.renderingStartTime > fn && n !== 1073741824 && (t.flags |= 128, r = !0, En(o, !1), t.lanes = 4194304);
        o.isBackwards ? (u.sibling = t.child, t.child = u) : (n = o.last, n !== null ? n.sibling = u : t.child = u, o.last = u);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = K(), t.sibling = null, n = V.current, F(V, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
    case 22:
    case 23:
      return Fu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ve & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Ed(e, t) {
  switch (vu(t), t.tag) {
    case 1:
      return me(t.type) && Xr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return an(), U(pe), U(oe), _u(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Cu(t), null;
    case 13:
      if (U(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        un();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return U(V), null;
    case 4:
      return an(), null;
    case 10:
      return wu(t.type._context), null;
    case 22:
    case 23:
      return Fu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Cr = !1, le = !1, Cd = typeof WeakSet == "function" ? WeakSet : Set, C = null;
function Zt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    H(e, t, r);
  }
  else n.current = null;
}
function Vo(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Wi = !1;
function _d(e, t) {
  if (Co = Hr, e = na(), mu(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var u = 0, i = -1, s = -1, c = 0, h = 0, m = e, p = null;
        t: for (; ; ) {
          for (var g; m !== n || l !== 0 && m.nodeType !== 3 || (i = u + l), m !== o || r !== 0 && m.nodeType !== 3 || (s = u + r), m.nodeType === 3 && (u += m.nodeValue.length), (g = m.firstChild) !== null; )
            p = m, m = g;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++c === l && (i = u), p === o && ++h === r && (s = u), (g = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = g;
        }
        n = i === -1 || s === -1 ? null : { start: i, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (_o = { focusedElem: e, selectionRange: n }, Hr = !1, C = t; C !== null; ) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
  else for (; C !== null; ) {
    t = C;
    try {
      var k = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var x = k.memoizedProps, z = k.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : je(t.type, x), z);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(S(163));
      }
    } catch (y) {
      H(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, C = e;
      break;
    }
    C = t.return;
  }
  return k = Wi, Wi = !1, k;
}
function Mn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Vo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function gl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Bo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function qa(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, qa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ie], delete t[Xn], delete t[zo], delete t[id], delete t[sd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ba(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hi(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ba(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Wo(e, t, n), e = e.sibling; e !== null; ) Wo(e, t, n), e = e.sibling;
}
function Ho(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ho(e, t, n), e = e.sibling; e !== null; ) Ho(e, t, n), e = e.sibling;
}
var b = null, Te = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) ec(e, t, n), n = n.sibling;
}
function ec(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function") try {
    Ue.onCommitFiberUnmount(cl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      le || Zt(n, t);
    case 6:
      var r = b, l = Te;
      b = null, qe(e, t, n), b = r, Te = l, b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? Hl(e.parentNode, n) : e.nodeType === 1 && Hl(e, n), Wn(e)) : Hl(b, n.stateNode));
      break;
    case 4:
      r = b, l = Te, b = n.stateNode.containerInfo, Te = !0, qe(e, t, n), b = r, Te = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, u = o.destroy;
          o = o.tag, u !== void 0 && (o & 2 || o & 4) && Vo(n, t, u), l = l.next;
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (!le && (Zt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        H(n, t, i);
      }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, qe(e, t, n), le = r) : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function Qi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Cd()), t.forEach(function(r) {
      var l = Od.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, u = t, i = u;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            b = i.stateNode, Te = !1;
            break e;
          case 3:
            b = i.stateNode.containerInfo, Te = !0;
            break e;
          case 4:
            b = i.stateNode.containerInfo, Te = !0;
            break e;
        }
        i = i.return;
      }
      if (b === null) throw Error(S(160));
      ec(o, u, l), b = null, Te = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      H(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) tc(t, e), t = t.sibling;
}
function tc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ze(t, e), Me(e), r & 4) {
        try {
          Mn(3, e, e.return), gl(3, e);
        } catch (x) {
          H(e, e.return, x);
        }
        try {
          Mn(5, e, e.return);
        } catch (x) {
          H(e, e.return, x);
        }
      }
      break;
    case 1:
      ze(t, e), Me(e), r & 512 && n !== null && Zt(n, n.return);
      break;
    case 5:
      if (ze(t, e), Me(e), r & 512 && n !== null && Zt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          $n(l, "");
        } catch (x) {
          H(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, u = n !== null ? n.memoizedProps : o, i = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          i === "input" && o.type === "radio" && o.name != null && Es(l, o), mo(i, u);
          var c = mo(i, o);
          for (u = 0; u < s.length; u += 2) {
            var h = s[u], m = s[u + 1];
            h === "style" ? zs(l, m) : h === "dangerouslySetInnerHTML" ? Ns(l, m) : h === "children" ? $n(l, m) : tu(l, h, m, c);
          }
          switch (i) {
            case "input":
              so(l, o);
              break;
            case "textarea":
              Cs(l, o);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? qt(l, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? qt(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : qt(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Xn] = o;
        } catch (x) {
          H(e, e.return, x);
        }
      }
      break;
    case 6:
      if (ze(t, e), Me(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (x) {
          H(e, e.return, x);
        }
      }
      break;
    case 3:
      if (ze(t, e), Me(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Wn(t.containerInfo);
      } catch (x) {
        H(e, e.return, x);
      }
      break;
    case 4:
      ze(t, e), Me(e);
      break;
    case 13:
      ze(t, e), Me(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ou = K())), r & 4 && Qi(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (c = le) || h, ze(t, e), le = c) : ze(t, e), Me(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (C = e, h = e.child; h !== null; ) {
          for (m = C = h; C !== null; ) {
            switch (p = C, g = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Mn(4, p, p.return);
                break;
              case 1:
                Zt(p, p.return);
                var k = p.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                  } catch (x) {
                    H(r, n, x);
                  }
                }
                break;
              case 5:
                Zt(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Yi(m);
                  continue;
                }
            }
            g !== null ? (g.return = p, C = g) : Yi(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                l = m.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = m.stateNode, s = m.memoizedProps.style, u = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Ps("display", u));
              } catch (x) {
                H(e, e.return, x);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (x) {
              H(e, e.return, x);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), m = m.return;
          }
          h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      ze(t, e), Me(e), r & 4 && Qi(e);
      break;
    case 21:
      break;
    default:
      ze(
        t,
        e
      ), Me(e);
  }
}
function Me(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ba(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && ($n(l, ""), r.flags &= -33);
          var o = Hi(e);
          Ho(e, o, l);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo, i = Hi(e);
          Wo(e, i, u);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      H(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Nd(e, t, n) {
  C = e, nc(e);
}
function nc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C, o = l.child;
    if (l.tag === 22 && r) {
      var u = l.memoizedState !== null || Cr;
      if (!u) {
        var i = l.alternate, s = i !== null && i.memoizedState !== null || le;
        i = Cr;
        var c = le;
        if (Cr = u, (le = s) && !c) for (C = l; C !== null; ) u = C, s = u.child, u.tag === 22 && u.memoizedState !== null ? Xi(l) : s !== null ? (s.return = u, C = s) : Xi(l);
        for (; o !== null; ) C = o, nc(o), o = o.sibling;
        C = l, Cr = i, le = c;
      }
      Ki(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : Ki(e);
  }
}
function Ki(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            le || gl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !le) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : je(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Ti(t, o, r);
            break;
          case 3:
            var u = t.updateQueue;
            if (u !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Ti(t, u, n);
            }
            break;
          case 5:
            var i = t.stateNode;
            if (n === null && t.flags & 4) {
              n = i;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var c = t.alternate;
              if (c !== null) {
                var h = c.memoizedState;
                if (h !== null) {
                  var m = h.dehydrated;
                  m !== null && Wn(m);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(S(163));
        }
        le || t.flags & 512 && Bo(t);
      } catch (p) {
        H(t, t.return, p);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function Yi(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function Xi(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gl(4, t);
          } catch (s) {
            H(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              H(t, l, s);
            }
          }
          var o = t.return;
          try {
            Bo(t);
          } catch (s) {
            H(t, o, s);
          }
          break;
        case 5:
          var u = t.return;
          try {
            Bo(t);
          } catch (s) {
            H(t, u, s);
          }
      }
    } catch (s) {
      H(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, C = i;
      break;
    }
    C = t.return;
  }
}
var Pd = Math.ceil, ll = Je.ReactCurrentDispatcher, Ru = Je.ReactCurrentOwner, _e = Je.ReactCurrentBatchConfig, D = 0, q = null, Y = null, ee = 0, ve = 0, Jt = St(0), G = 0, er = null, Mt = 0, Sl = 0, Du = 0, Fn = null, fe = null, Ou = 0, fn = 1 / 0, Be = null, ol = !1, Qo = null, dt = null, _r = !1, ut = null, ul = 0, In = 0, Ko = null, Fr = -1, Ir = 0;
function ie() {
  return D & 6 ? K() : Fr !== -1 ? Fr : Fr = K();
}
function pt(e) {
  return e.mode & 1 ? D & 2 && ee !== 0 ? ee & -ee : cd.transition !== null ? (Ir === 0 && (Ir = As()), Ir) : (e = M, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ys(e.type)), e) : 1;
}
function De(e, t, n, r) {
  if (50 < In) throw In = 0, Ko = null, Error(S(185));
  nr(e, n, r), (!(D & 2) || e !== q) && (e === q && (!(D & 2) && (Sl |= n), G === 4 && lt(e, ee)), he(e, r), n === 1 && D === 0 && !(t.mode & 1) && (fn = K() + 500, hl && wt()));
}
function he(e, t) {
  var n = e.callbackNode;
  cf(e, t);
  var r = Wr(e, e === q ? ee : 0);
  if (r === 0) n !== null && ri(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ri(n), t === 1) e.tag === 0 ? ad(Gi.bind(null, e)) : da(Gi.bind(null, e)), od(function() {
      !(D & 6) && wt();
    }), n = null;
    else {
      switch (Vs(r)) {
        case 1:
          n = uu;
          break;
        case 4:
          n = Us;
          break;
        case 16:
          n = Br;
          break;
        case 536870912:
          n = $s;
          break;
        default:
          n = Br;
      }
      n = cc(n, rc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function rc(e, t) {
  if (Fr = -1, Ir = 0, D & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (rn() && e.callbackNode !== n) return null;
  var r = Wr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var o = oc();
    (q !== e || ee !== t) && (Be = null, fn = K() + 500, jt(e, t));
    do
      try {
        Td();
        break;
      } catch (i) {
        lc(e, i);
      }
    while (!0);
    Su(), ll.current = o, D = l, Y !== null ? t = 0 : (q = null, ee = 0, t = G);
  }
  if (t !== 0) {
    if (t === 2 && (l = So(e), l !== 0 && (r = l, t = Yo(e, l))), t === 1) throw n = er, jt(e, 0), lt(e, r), he(e, K()), n;
    if (t === 6) lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !zd(l) && (t = il(e, r), t === 2 && (o = So(e), o !== 0 && (r = o, t = Yo(e, o))), t === 1)) throw n = er, jt(e, 0), lt(e, r), he(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Ct(e, fe, Be);
          break;
        case 3:
          if (lt(e, r), (r & 130023424) === r && (t = Ou + 500 - K(), 10 < t)) {
            if (Wr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ie(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Po(Ct.bind(null, e, fe, Be), t);
            break;
          }
          Ct(e, fe, Be);
          break;
        case 4:
          if (lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var u = 31 - Re(r);
            o = 1 << u, u = t[u], u > l && (l = u), r &= ~o;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Po(Ct.bind(null, e, fe, Be), r);
            break;
          }
          Ct(e, fe, Be);
          break;
        case 5:
          Ct(e, fe, Be);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return he(e, K()), e.callbackNode === n ? rc.bind(null, e) : null;
}
function Yo(e, t) {
  var n = Fn;
  return e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256), e = il(e, t), e !== 2 && (t = fe, fe = n, t !== null && Xo(t)), e;
}
function Xo(e) {
  fe === null ? fe = e : fe.push.apply(fe, e);
}
function zd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Oe(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function lt(e, t) {
  for (t &= ~Du, t &= ~Sl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Re(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Gi(e) {
  if (D & 6) throw Error(S(327));
  rn();
  var t = Wr(e, 0);
  if (!(t & 1)) return he(e, K()), null;
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = So(e);
    r !== 0 && (t = r, n = Yo(e, r));
  }
  if (n === 1) throw n = er, jt(e, 0), lt(e, t), he(e, K()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ct(e, fe, Be), he(e, K()), null;
}
function Mu(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    D = n, D === 0 && (fn = K() + 500, hl && wt());
  }
}
function Ft(e) {
  ut !== null && ut.tag === 0 && !(D & 6) && rn();
  var t = D;
  D |= 1;
  var n = _e.transition, r = M;
  try {
    if (_e.transition = null, M = 1, e) return e();
  } finally {
    M = r, _e.transition = n, D = t, !(D & 6) && wt();
  }
}
function Fu() {
  ve = Jt.current, U(Jt);
}
function jt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ld(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (vu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Xr();
        break;
      case 3:
        an(), U(pe), U(oe), _u();
        break;
      case 5:
        Cu(r);
        break;
      case 4:
        an();
        break;
      case 13:
        U(V);
        break;
      case 19:
        U(V);
        break;
      case 10:
        wu(r.type._context);
        break;
      case 22:
      case 23:
        Fu();
    }
    n = n.return;
  }
  if (q = e, Y = e = mt(e.current, null), ee = ve = t, G = 0, er = null, Du = Sl = Mt = 0, fe = Fn = null, Pt !== null) {
    for (t = 0; t < Pt.length; t++) if (n = Pt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var u = o.next;
        o.next = l, r.next = u;
      }
      n.pending = r;
    }
    Pt = null;
  }
  return e;
}
function lc(e, t) {
  do {
    var n = Y;
    try {
      if (Su(), Dr.current = rl, nl) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        nl = !1;
      }
      if (Ot = 0, J = X = B = null, On = !1, Jn = 0, Ru.current = null, n === null || n.return === null) {
        G = 1, er = t, Y = null;
        break;
      }
      e: {
        var o = e, u = n.return, i = n, s = t;
        if (t = ee, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, h = i, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = Fi(u);
          if (g !== null) {
            g.flags &= -257, Ii(g, u, i, o, t), g.mode & 1 && Mi(o, c, t), t = g, s = c;
            var k = t.updateQueue;
            if (k === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(s), t.updateQueue = x;
            } else k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Mi(o, c, t), Iu();
              break e;
            }
            s = Error(S(426));
          }
        } else if (A && i.mode & 1) {
          var z = Fi(u);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256), Ii(z, u, i, o, t), yu(cn(s, i));
            break e;
          }
        }
        o = s = cn(s, i), G !== 4 && (G = 2), Fn === null ? Fn = [o] : Fn.push(o), o = u;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Va(o, s, t);
              ji(o, f);
              break e;
            case 1:
              i = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (dt === null || !dt.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = Ba(o, i, t);
                ji(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ic(n);
    } catch (E) {
      t = E, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function oc() {
  var e = ll.current;
  return ll.current = rl, e === null ? rl : e;
}
function Iu() {
  (G === 0 || G === 3 || G === 2) && (G = 4), q === null || !(Mt & 268435455) && !(Sl & 268435455) || lt(q, ee);
}
function il(e, t) {
  var n = D;
  D |= 2;
  var r = oc();
  (q !== e || ee !== t) && (Be = null, jt(e, t));
  do
    try {
      jd();
      break;
    } catch (l) {
      lc(e, l);
    }
  while (!0);
  if (Su(), D = n, ll.current = r, Y !== null) throw Error(S(261));
  return q = null, ee = 0, G;
}
function jd() {
  for (; Y !== null; ) uc(Y);
}
function Td() {
  for (; Y !== null && !ef(); ) uc(Y);
}
function uc(e) {
  var t = ac(e.alternate, e, ve);
  e.memoizedProps = e.pendingProps, t === null ? ic(e) : Y = t, Ru.current = null;
}
function ic(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ed(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        G = 6, Y = null;
        return;
      }
    } else if (n = xd(n, t, ve), n !== null) {
      Y = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function Ct(e, t, n) {
  var r = M, l = _e.transition;
  try {
    _e.transition = null, M = 1, Ld(e, t, n, r);
  } finally {
    _e.transition = l, M = r;
  }
  return null;
}
function Ld(e, t, n, r) {
  do
    rn();
  while (ut !== null);
  if (D & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (ff(e, o), e === q && (Y = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _r || (_r = !0, cc(Br, function() {
    return rn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = _e.transition, _e.transition = null;
    var u = M;
    M = 1;
    var i = D;
    D |= 4, Ru.current = null, _d(e, n), tc(n, e), Jf(_o), Hr = !!Co, _o = Co = null, e.current = n, Nd(n), tf(), D = i, M = u, _e.transition = o;
  } else e.current = n;
  if (_r && (_r = !1, ut = e, ul = l), o = e.pendingLanes, o === 0 && (dt = null), lf(n.stateNode), he(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ol) throw ol = !1, e = Qo, Qo = null, e;
  return ul & 1 && e.tag !== 0 && rn(), o = e.pendingLanes, o & 1 ? e === Ko ? In++ : (In = 0, Ko = e) : In = 0, wt(), null;
}
function rn() {
  if (ut !== null) {
    var e = Vs(ul), t = _e.transition, n = M;
    try {
      if (_e.transition = null, M = 16 > e ? 16 : e, ut === null) var r = !1;
      else {
        if (e = ut, ut = null, ul = 0, D & 6) throw Error(S(331));
        var l = D;
        for (D |= 4, C = e.current; C !== null; ) {
          var o = C, u = o.child;
          if (C.flags & 16) {
            var i = o.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var c = i[s];
                for (C = c; C !== null; ) {
                  var h = C;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mn(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, C = m;
                  else for (; C !== null; ) {
                    h = C;
                    var p = h.sibling, g = h.return;
                    if (qa(h), h === c) {
                      C = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = g, C = p;
                      break;
                    }
                    C = g;
                  }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var x = k.child;
                if (x !== null) {
                  k.child = null;
                  do {
                    var z = x.sibling;
                    x.sibling = null, x = z;
                  } while (x !== null);
                }
              }
              C = o;
            }
          }
          if (o.subtreeFlags & 2064 && u !== null) u.return = o, C = u;
          else e: for (; C !== null; ) {
            if (o = C, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Mn(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, C = f;
              break e;
            }
            C = o.return;
          }
        }
        var a = e.current;
        for (C = a; C !== null; ) {
          u = C;
          var d = u.child;
          if (u.subtreeFlags & 2064 && d !== null) d.return = u, C = d;
          else e: for (u = a; C !== null; ) {
            if (i = C, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  gl(9, i);
              }
            } catch (E) {
              H(i, i.return, E);
            }
            if (i === u) {
              C = null;
              break e;
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, C = y;
              break e;
            }
            C = i.return;
          }
        }
        if (D = l, wt(), Ue && typeof Ue.onPostCommitFiberRoot == "function") try {
          Ue.onPostCommitFiberRoot(cl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      M = n, _e.transition = t;
    }
  }
  return !1;
}
function Zi(e, t, n) {
  t = cn(n, t), t = Va(e, t, 1), e = ft(e, t, 1), t = ie(), e !== null && (nr(e, 1, t), he(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) Zi(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Zi(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dt === null || !dt.has(r))) {
        e = cn(n, e), e = Ba(t, e, 1), t = ft(t, e, 1), e = ie(), t !== null && (nr(t, 1, e), he(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Rd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ie(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (G === 4 || G === 3 && (ee & 130023424) === ee && 500 > K() - Ou ? jt(e, 0) : Du |= n), he(e, t);
}
function sc(e, t) {
  t === 0 && (e.mode & 1 ? (t = hr, hr <<= 1, !(hr & 130023424) && (hr = 4194304)) : t = 1);
  var n = ie();
  e = Ge(e, t), e !== null && (nr(e, t, n), he(e, n));
}
function Dd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), sc(e, n);
}
function Od(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), sc(e, n);
}
var ac;
ac = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return de = !1, kd(e, t, n);
    de = !!(e.flags & 131072);
  }
  else de = !1, A && t.flags & 1048576 && pa(t, Jr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Mr(e, t), e = t.pendingProps;
      var l = on(t, oe.current);
      nn(t, n), l = Pu(null, t, r, e, l, n);
      var o = zu();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, me(r) ? (o = !0, Gr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, xu(t), l.updater = yl, t.stateNode = l, l._reactInternals = t, Oo(t, r, e, n), t = Io(null, t, r, !0, o, n)) : (t.tag = 0, A && o && hu(t), ue(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Mr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Fd(r), e = je(r, e), l) {
          case 0:
            t = Fo(null, t, r, e, n);
            break e;
          case 1:
            t = Ai(null, t, r, e, n);
            break e;
          case 11:
            t = Ui(null, t, r, e, n);
            break e;
          case 14:
            t = $i(null, t, r, je(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Fo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Ai(e, t, r, l, n);
    case 3:
      e: {
        if (Ka(t), e === null) throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Sa(e, t), el(t, r, null, n);
        var u = t.memoizedState;
        if (r = u.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = cn(Error(S(423)), t), t = Vi(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = cn(Error(S(424)), t), t = Vi(e, t, r, n, l);
          break e;
        } else for (ye = ct(t.stateNode.containerInfo.firstChild), ge = t, A = !0, Le = null, n = ya(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (un(), r === l) {
            t = Ze(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return wa(t), e === null && Lo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, u = l.children, No(r, l) ? u = null : o !== null && No(r, o) && (t.flags |= 32), Qa(e, t), ue(e, t, u, n), t.child;
    case 6:
      return e === null && Lo(t), null;
    case 13:
      return Ya(e, t, n);
    case 4:
      return Eu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = sn(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Ui(e, t, r, l, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, u = l.value, F(qr, r._currentValue), r._currentValue = u, o !== null) if (Oe(o.value, u)) {
          if (o.children === l.children && !pe.current) {
            t = Ze(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var i = o.dependencies;
          if (i !== null) {
            u = o.child;
            for (var s = i.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = Ke(-1, n & -n), s.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Ro(
                  o.return,
                  n,
                  t
                ), i.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (u = o.return, u === null) throw Error(S(341));
            u.lanes |= n, i = u.alternate, i !== null && (i.lanes |= n), Ro(u, n, t), u = o.sibling;
          } else u = o.child;
          if (u !== null) u.return = o;
          else for (u = o; u !== null; ) {
            if (u === t) {
              u = null;
              break;
            }
            if (o = u.sibling, o !== null) {
              o.return = u.return, u = o;
              break;
            }
            u = u.return;
          }
          o = u;
        }
        ue(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, nn(t, n), l = Ne(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = je(r, t.pendingProps), l = je(r.type, l), $i(e, t, r, l, n);
    case 15:
      return Wa(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Mr(e, t), t.tag = 1, me(r) ? (e = !0, Gr(t)) : e = !1, nn(t, n), Aa(t, r, l), Oo(t, r, l, n), Io(null, t, r, !0, e, n);
    case 19:
      return Xa(e, t, n);
    case 22:
      return Ha(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function cc(e, t) {
  return Is(e, t);
}
function Md(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ce(e, t, n, r) {
  return new Md(e, t, n, r);
}
function Uu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Fd(e) {
  if (typeof e == "function") return Uu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ru) return 11;
    if (e === lu) return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ce(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ur(e, t, n, r, l, o) {
  var u = 2;
  if (r = e, typeof e == "function") Uu(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else e: switch (e) {
    case Vt:
      return Tt(n.children, l, o, t);
    case nu:
      u = 8, l |= 8;
      break;
    case ro:
      return e = Ce(12, n, t, l | 2), e.elementType = ro, e.lanes = o, e;
    case lo:
      return e = Ce(13, n, t, l), e.elementType = lo, e.lanes = o, e;
    case oo:
      return e = Ce(19, n, t, l), e.elementType = oo, e.lanes = o, e;
    case ws:
      return wl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case gs:
          u = 10;
          break e;
        case Ss:
          u = 9;
          break e;
        case ru:
          u = 11;
          break e;
        case lu:
          u = 14;
          break e;
        case tt:
          u = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = Ce(u, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Tt(e, t, n, r) {
  return e = Ce(7, e, r, t), e.lanes = n, e;
}
function wl(e, t, n, r) {
  return e = Ce(22, e, r, t), e.elementType = ws, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ql(e, t, n) {
  return e = Ce(6, e, null, t), e.lanes = n, e;
}
function bl(e, t, n) {
  return t = Ce(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Id(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Dl(0), this.expirationTimes = Dl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Dl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function $u(e, t, n, r, l, o, u, i, s) {
  return e = new Id(e, t, n, i, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ce(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xu(o), e;
}
function Ud(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: At, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function fc(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (Ut(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return fa(e, n, t);
  }
  return t;
}
function dc(e, t, n, r, l, o, u, i, s) {
  return e = $u(n, r, !0, e, l, o, u, i, s), e.context = fc(null), n = e.current, r = ie(), l = pt(n), o = Ke(r, l), o.callback = t ?? null, ft(n, o, l), e.current.lanes = l, nr(e, l, r), he(e, r), e;
}
function kl(e, t, n, r) {
  var l = t.current, o = ie(), u = pt(l);
  return n = fc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ke(o, u), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ft(l, t, u), e !== null && (De(e, l, u, o), Rr(e, l, u)), u;
}
function sl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ji(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Au(e, t) {
  Ji(e, t), (e = e.alternate) && Ji(e, t);
}
function $d() {
  return null;
}
var pc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Vu(e) {
  this._internalRoot = e;
}
xl.prototype.render = Vu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  kl(e, t, null, null);
};
xl.prototype.unmount = Vu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ft(function() {
      kl(null, e, null, null);
    }), t[Xe] = null;
  }
};
function xl(e) {
  this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Hs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++) ;
    rt.splice(n, 0, e), n === 0 && Ks(e);
  }
};
function Bu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function El(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function qi() {
}
function Ad(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = sl(u);
        o.call(c);
      };
    }
    var u = dc(t, r, e, 0, null, !1, !1, "", qi);
    return e._reactRootContainer = u, e[Xe] = u.current, Kn(e.nodeType === 8 ? e.parentNode : e), Ft(), u;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var c = sl(s);
      i.call(c);
    };
  }
  var s = $u(e, 0, !1, null, null, !1, !1, "", qi);
  return e._reactRootContainer = s, e[Xe] = s.current, Kn(e.nodeType === 8 ? e.parentNode : e), Ft(function() {
    kl(t, s, n, r);
  }), s;
}
function Cl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var u = o;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var s = sl(u);
        i.call(s);
      };
    }
    kl(t, u, e, l);
  } else u = Ad(n, t, e, l, r);
  return sl(u);
}
Bs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pn(t.pendingLanes);
        n !== 0 && (iu(t, n | 1), he(t, K()), !(D & 6) && (fn = K() + 500, wt()));
      }
      break;
    case 13:
      Ft(function() {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = ie();
          De(r, e, 1, l);
        }
      }), Au(e, 1);
  }
};
su = function(e) {
  if (e.tag === 13) {
    var t = Ge(e, 134217728);
    if (t !== null) {
      var n = ie();
      De(t, e, 134217728, n);
    }
    Au(e, 134217728);
  }
};
Ws = function(e) {
  if (e.tag === 13) {
    var t = pt(e), n = Ge(e, t);
    if (n !== null) {
      var r = ie();
      De(n, e, t, r);
    }
    Au(e, t);
  }
};
Hs = function() {
  return M;
};
Qs = function(e, t) {
  var n = M;
  try {
    return M = e, t();
  } finally {
    M = n;
  }
};
vo = function(e, t, n) {
  switch (t) {
    case "input":
      if (so(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ml(r);
            if (!l) throw Error(S(90));
            xs(r), so(r, l);
          }
        }
      }
      break;
    case "textarea":
      Cs(e, n);
      break;
    case "select":
      t = n.value, t != null && qt(e, !!n.multiple, t, !1);
  }
};
Ls = Mu;
Rs = Ft;
var Vd = { usingClientEntryPoint: !1, Events: [lr, Qt, ml, js, Ts, Mu] }, Cn = { findFiberByHostInstance: Nt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Bd = { bundleType: Cn.bundleType, version: Cn.version, rendererPackageName: Cn.rendererPackageName, rendererConfig: Cn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Je.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ms(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Cn.findFiberByHostInstance || $d, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Nr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Nr.isDisabled && Nr.supportsFiber) try {
    cl = Nr.inject(Bd), Ue = Nr;
  } catch {
  }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vd;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bu(t)) throw Error(S(200));
  return Ud(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!Bu(e)) throw Error(S(299));
  var n = !1, r = "", l = pc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = $u(e, 1, !1, null, null, n, !1, r, l), e[Xe] = t.current, Kn(e.nodeType === 8 ? e.parentNode : e), new Vu(t);
};
we.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Ms(t), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return Ft(e);
};
we.hydrate = function(e, t, n) {
  if (!El(t)) throw Error(S(200));
  return Cl(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!Bu(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", u = pc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = dc(t, null, e, 1, n ?? null, l, !1, o, u), e[Xe] = t.current, Kn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new xl(t);
};
we.render = function(e, t, n) {
  if (!El(t)) throw Error(S(200));
  return Cl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function(e) {
  if (!El(e)) throw Error(S(40));
  return e._reactRootContainer ? (Ft(function() {
    Cl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Xe] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = Mu;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!El(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Cl(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function mc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mc);
    } catch (e) {
      console.error(e);
    }
}
mc(), ms.exports = we;
var Wd = ms.exports, hc, bi = Wd;
hc = bi.createRoot, bi.hydrateRoot;
function _t(e) {
  if (!e) return "—";
  const [t, n, r] = e.split("-");
  return `${r}/${n}/${t}`;
}
function yt() {
  return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
}
async function Lt(e, t) {
  var l, o;
  const n = ((l = document.cookie.split("; ").find((u) => u.startsWith("csrftoken="))) == null ? void 0 : l.split("=")[1]) ?? "", r = await fetch(e, {
    ...t,
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": n,
      ...(t == null ? void 0 : t.headers) ?? {}
    }
  });
  if (!r.ok) {
    const u = await r.json().catch(() => ({})), i = (u == null ? void 0 : u.detail) ?? ((o = u == null ? void 0 : u.non_field_errors) == null ? void 0 : o[0]) ?? `HTTP ${r.status}`;
    throw new Error(i);
  }
  return r.status === 204 ? null : r.json();
}
function es({ title: e }) {
  return /* @__PURE__ */ v.jsx("h3", { style: {
    margin: "0 0 8px 0",
    fontSize: "13px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "var(--mantine-color-dimmed, #555)",
    borderBottom: "1px solid var(--mantine-color-default-border, #e5e7eb)",
    paddingBottom: "4px"
  }, children: e });
}
function ur({ msg: e }) {
  return /* @__PURE__ */ v.jsx("div", { style: {
    background: "#fef2f2",
    border: "1px solid #fecaca",
    color: "#b91c1c",
    borderRadius: 4,
    padding: "6px 10px",
    fontSize: "12px",
    marginBottom: 8
  }, children: e });
}
function ts({ label: e, color: t = "#6b7280" }) {
  return /* @__PURE__ */ v.jsx("span", { style: {
    background: t + "1a",
    color: t,
    border: `1px solid ${t}40`,
    borderRadius: 12,
    padding: "1px 8px",
    fontSize: "11px",
    fontWeight: 500
  }, children: e });
}
function Hd({
  apiBase: e,
  stockItemId: t,
  companies: n,
  currentCustodian: r,
  onDone: l,
  onCancel: o
}) {
  const [u, i] = O.useState(""), [s, c] = O.useState(yt()), [h, m] = O.useState(""), [p, g] = O.useState(""), [k, x] = O.useState(!1);
  async function z(a) {
    if (a.preventDefault(), !u) {
      g("Please select a company.");
      return;
    }
    g(""), x(!0);
    try {
      await Lt(`${e}/custodians/transfer/`, {
        method: "POST",
        body: JSON.stringify({
          stock_item: t,
          new_company: Number(u),
          transfer_date: s,
          notes: h
        })
      }), l();
    } catch (d) {
      g(d.message);
    } finally {
      x(!1);
    }
  }
  const f = n.filter((a) => a.id !== (r == null ? void 0 : r.company));
  return /* @__PURE__ */ v.jsxs("form", { onSubmit: z, style: { marginTop: 12 }, children: [
    p && /* @__PURE__ */ v.jsx(ur, { msg: p }),
    r && /* @__PURE__ */ v.jsxs("p", { style: { fontSize: "12px", color: "var(--mantine-color-dimmed, #6b7280)", margin: "0 0 10px" }, children: [
      "Current custodian: ",
      /* @__PURE__ */ v.jsx("strong", { children: r.company_detail.name }),
      " (since ",
      _t(r.start_date),
      ")"
    ] }),
    /* @__PURE__ */ v.jsx("label", { style: Ve, children: "New Custodian" }),
    /* @__PURE__ */ v.jsxs("select", { value: u, onChange: (a) => i(a.target.value), style: Ae, required: !0, children: [
      /* @__PURE__ */ v.jsx("option", { value: "", children: "— select company —" }),
      f.map((a) => /* @__PURE__ */ v.jsx("option", { value: a.id, children: a.name }, a.id))
    ] }),
    /* @__PURE__ */ v.jsx("label", { style: Ve, children: "Effective Date" }),
    /* @__PURE__ */ v.jsx(
      "input",
      {
        type: "date",
        value: s,
        onChange: (a) => c(a.target.value),
        style: Ae,
        required: !0,
        max: yt()
      }
    ),
    /* @__PURE__ */ v.jsx("label", { style: Ve, children: "Notes (optional)" }),
    /* @__PURE__ */ v.jsx(
      "input",
      {
        type: "text",
        value: h,
        onChange: (a) => m(a.target.value),
        style: Ae,
        placeholder: "e.g. Volcafe paid invoice #1234"
      }
    ),
    /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 12 }, children: [
      /* @__PURE__ */ v.jsx("button", { type: "submit", disabled: k, style: Wu, children: k ? "Transferring…" : "Transfer Custody" }),
      /* @__PURE__ */ v.jsx("button", { type: "button", onClick: o, style: ir, children: "Cancel" })
    ] })
  ] });
}
function Qd({
  apiBase: e,
  stockItemId: t,
  companies: n,
  onDone: r,
  onCancel: l
}) {
  const [o, u] = O.useState(""), [i, s] = O.useState(yt()), [c, h] = O.useState(""), [m, p] = O.useState(""), [g, k] = O.useState(!1);
  async function x(z) {
    if (z.preventDefault(), !o) {
      p("Please select a company.");
      return;
    }
    p(""), k(!0);
    try {
      await Lt(`${e}/interests/`, {
        method: "POST",
        body: JSON.stringify({
          stock_item: t,
          company: Number(o),
          start_date: i,
          notes: c
        })
      }), r();
    } catch (f) {
      p(f.message);
    } finally {
      k(!1);
    }
  }
  return /* @__PURE__ */ v.jsxs("form", { onSubmit: x, style: { marginTop: 12 }, children: [
    m && /* @__PURE__ */ v.jsx(ur, { msg: m }),
    /* @__PURE__ */ v.jsx("label", { style: Ve, children: "Company" }),
    /* @__PURE__ */ v.jsxs("select", { value: o, onChange: (z) => u(z.target.value), style: Ae, required: !0, children: [
      /* @__PURE__ */ v.jsx("option", { value: "", children: "— select company —" }),
      n.map((z) => /* @__PURE__ */ v.jsx("option", { value: z.id, children: z.name }, z.id))
    ] }),
    /* @__PURE__ */ v.jsx("label", { style: Ve, children: "Start Date" }),
    /* @__PURE__ */ v.jsx(
      "input",
      {
        type: "date",
        value: i,
        onChange: (z) => s(z.target.value),
        style: Ae,
        required: !0,
        max: yt()
      }
    ),
    /* @__PURE__ */ v.jsx("label", { style: Ve, children: "Notes (optional)" }),
    /* @__PURE__ */ v.jsx(
      "input",
      {
        type: "text",
        value: c,
        onChange: (z) => h(z.target.value),
        style: Ae,
        placeholder: "e.g. Agreed purchase pending payment"
      }
    ),
    /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 12 }, children: [
      /* @__PURE__ */ v.jsx("button", { type: "submit", disabled: g, style: Wu, children: g ? "Adding…" : "Add Interest" }),
      /* @__PURE__ */ v.jsx("button", { type: "button", onClick: l, style: ir, children: "Cancel" })
    ] })
  ] });
}
function Kd({
  apiBase: e,
  interest: t,
  onDone: n,
  onCancel: r
}) {
  const [l, o] = O.useState(yt()), [u, i] = O.useState(""), [s, c] = O.useState(!1);
  async function h(m) {
    m.preventDefault(), i(""), c(!0);
    try {
      await Lt(`${e}/interests/${t.id}/close/`, {
        method: "POST",
        body: JSON.stringify({ end_date: l })
      }), n();
    } catch (p) {
      i(p.message);
    } finally {
      c(!1);
    }
  }
  return /* @__PURE__ */ v.jsxs("form", { onSubmit: h, style: { marginTop: 8 }, children: [
    u && /* @__PURE__ */ v.jsx(ur, { msg: u }),
    /* @__PURE__ */ v.jsxs("p", { style: { fontSize: "12px", color: "var(--mantine-color-dimmed, #6b7280)", margin: "0 0 8px" }, children: [
      "Close interest for ",
      /* @__PURE__ */ v.jsx("strong", { children: t.company_detail.name })
    ] }),
    /* @__PURE__ */ v.jsx("label", { style: Ve, children: "End Date" }),
    /* @__PURE__ */ v.jsx(
      "input",
      {
        type: "date",
        value: l,
        onChange: (m) => o(m.target.value),
        style: Ae,
        required: !0,
        min: t.start_date,
        max: yt()
      }
    ),
    /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 8 }, children: [
      /* @__PURE__ */ v.jsx("button", { type: "submit", disabled: s, style: Gd, children: s ? "Closing…" : "Close Interest" }),
      /* @__PURE__ */ v.jsx("button", { type: "button", onClick: r, style: ir, children: "Cancel" })
    ] })
  ] });
}
function Yd({
  apiBase: e,
  stockItemId: t,
  companies: n,
  onDone: r,
  onCancel: l
}) {
  const [o, u] = O.useState(""), [i, s] = O.useState(yt()), [c, h] = O.useState(""), [m, p] = O.useState(""), [g, k] = O.useState(!1);
  async function x(z) {
    if (z.preventDefault(), !o) {
      p("Please select a company.");
      return;
    }
    p(""), k(!0);
    try {
      await Lt(`${e}/custodians/`, {
        method: "POST",
        body: JSON.stringify({
          stock_item: t,
          company: Number(o),
          start_date: i,
          notes: c
        })
      }), r();
    } catch (f) {
      p(f.message);
    } finally {
      k(!1);
    }
  }
  return /* @__PURE__ */ v.jsxs("form", { onSubmit: x, style: { marginTop: 12 }, children: [
    m && /* @__PURE__ */ v.jsx(ur, { msg: m }),
    /* @__PURE__ */ v.jsx("label", { style: Ve, children: "Custodian Company" }),
    /* @__PURE__ */ v.jsxs("select", { value: o, onChange: (z) => u(z.target.value), style: Ae, required: !0, children: [
      /* @__PURE__ */ v.jsx("option", { value: "", children: "— select company —" }),
      n.map((z) => /* @__PURE__ */ v.jsx("option", { value: z.id, children: z.name }, z.id))
    ] }),
    /* @__PURE__ */ v.jsx("label", { style: Ve, children: "Start Date" }),
    /* @__PURE__ */ v.jsx(
      "input",
      {
        type: "date",
        value: i,
        onChange: (z) => s(z.target.value),
        style: Ae,
        required: !0,
        max: yt()
      }
    ),
    /* @__PURE__ */ v.jsx("label", { style: Ve, children: "Notes (optional)" }),
    /* @__PURE__ */ v.jsx(
      "input",
      {
        type: "text",
        value: c,
        onChange: (z) => h(z.target.value),
        style: Ae
      }
    ),
    /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 12 }, children: [
      /* @__PURE__ */ v.jsx("button", { type: "submit", disabled: g, style: Wu, children: g ? "Setting…" : "Set Custodian" }),
      /* @__PURE__ */ v.jsx("button", { type: "button", onClick: l, style: ir, children: "Cancel" })
    ] })
  ] });
}
function Xd({ stockItemId: e, apiBase: t }) {
  const [n, r] = O.useState([]), [l, o] = O.useState([]), [u, i] = O.useState([]), [s, c] = O.useState(!0), [h, m] = O.useState(""), [p, g] = O.useState(null), [k, x] = O.useState(!1), [z, f] = O.useState(!1), a = O.useCallback(async () => {
    c(!0), m("");
    try {
      const [w, $, T] = await Promise.all([
        Lt(`${t}/custodians/?stock_item=${e}`),
        Lt(`${t}/interests/?stock_item=${e}`),
        Lt("/api/company/?is_customer=true&limit=500")
      ]);
      r(w.results ?? w), o($.results ?? $), i(
        (T.results ?? T).map((ce) => ({ id: ce.pk, name: ce.name }))
      );
    } catch (w) {
      m(w.message);
    } finally {
      c(!1);
    }
  }, [t, e]);
  O.useEffect(() => {
    a();
  }, [a]);
  function d() {
    g(null), a();
  }
  if (s)
    return /* @__PURE__ */ v.jsx("div", { style: { padding: 16, color: "var(--mantine-color-dimmed, #6b7280)", fontSize: 13 }, children: "Loading TRW Storage data…" });
  if (h)
    return /* @__PURE__ */ v.jsxs("div", { style: { padding: 16 }, children: [
      /* @__PURE__ */ v.jsx(ur, { msg: h }),
      /* @__PURE__ */ v.jsx("button", { onClick: a, style: ir, children: "Retry" })
    ] });
  const y = n.find((w) => w.end_date === null) ?? null, E = n.filter((w) => w.end_date !== null), P = l.filter((w) => w.end_date === null), N = l.filter((w) => w.end_date !== null);
  return /* @__PURE__ */ v.jsxs("div", { style: { padding: "12px 16px", fontFamily: "inherit", fontSize: 13 }, children: [
    /* @__PURE__ */ v.jsxs("div", { style: { marginBottom: 20 }, children: [
      /* @__PURE__ */ v.jsx(es, { title: "Custodian (Billing Party)" }),
      y ? /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ v.jsx("span", { style: { fontWeight: 600, color: "var(--mantine-color-text, #111)" }, children: y.company_detail.name }),
        /* @__PURE__ */ v.jsx(ts, { label: `since ${_t(y.start_date)}`, color: "#2563eb" }),
        y.notes && /* @__PURE__ */ v.jsx("span", { style: { color: "var(--mantine-color-dimmed, #9ca3af)", fontSize: 11 }, children: y.notes })
      ] }) : /* @__PURE__ */ v.jsx("p", { style: { color: "var(--mantine-color-dimmed, #9ca3af)", fontSize: 12, margin: "0 0 8px" }, children: "No custodian assigned." }),
      p === "transfer-custody" && /* @__PURE__ */ v.jsx(
        Hd,
        {
          apiBase: t,
          stockItemId: e,
          companies: u,
          currentCustodian: y,
          onDone: d,
          onCancel: () => g(null)
        }
      ),
      p === "set-custodian" && /* @__PURE__ */ v.jsx(
        Yd,
        {
          apiBase: t,
          stockItemId: e,
          companies: u,
          onDone: d,
          onCancel: () => g(null)
        }
      ),
      p === null && /* @__PURE__ */ v.jsx("div", { style: { display: "flex", gap: 8, marginBottom: 4 }, children: y ? /* @__PURE__ */ v.jsx("button", { onClick: () => g("transfer-custody"), style: eo, children: "Transfer Custody" }) : /* @__PURE__ */ v.jsx("button", { onClick: () => g("set-custodian"), style: eo, children: "Set Custodian" }) }),
      E.length > 0 && /* @__PURE__ */ v.jsxs("div", { style: { marginTop: 8 }, children: [
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            onClick: () => x((w) => !w),
            style: { ...to, fontSize: 11 },
            children: [
              k ? "Hide" : "Show",
              " history (",
              E.length,
              ")"
            ]
          }
        ),
        k && /* @__PURE__ */ v.jsxs("table", { style: ns, children: [
          /* @__PURE__ */ v.jsx("thead", { children: /* @__PURE__ */ v.jsxs("tr", { children: [
            /* @__PURE__ */ v.jsx("th", { style: be, children: "Company" }),
            /* @__PURE__ */ v.jsx("th", { style: be, children: "From" }),
            /* @__PURE__ */ v.jsx("th", { style: be, children: "To" }),
            /* @__PURE__ */ v.jsx("th", { style: be, children: "Notes" })
          ] }) }),
          /* @__PURE__ */ v.jsx("tbody", { children: E.map((w) => /* @__PURE__ */ v.jsxs("tr", { children: [
            /* @__PURE__ */ v.jsx("td", { style: et, children: w.company_detail.name }),
            /* @__PURE__ */ v.jsx("td", { style: et, children: _t(w.start_date) }),
            /* @__PURE__ */ v.jsx("td", { style: et, children: _t(w.end_date) }),
            /* @__PURE__ */ v.jsx("td", { style: { ...et, color: "#9ca3af" }, children: w.notes || "—" })
          ] }, w.id)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { children: [
      /* @__PURE__ */ v.jsx(es, { title: "Interests" }),
      P.length === 0 && /* @__PURE__ */ v.jsx("p", { style: { color: "var(--mantine-color-dimmed, #9ca3af)", fontSize: 12, margin: "0 0 8px" }, children: "No active interests." }),
      P.map((w) => /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }, children: [
        /* @__PURE__ */ v.jsx("span", { style: { fontWeight: 600, color: "var(--mantine-color-text, #111)", minWidth: 140 }, children: w.company_detail.name }),
        /* @__PURE__ */ v.jsx(ts, { label: `since ${_t(w.start_date)}`, color: "#059669" }),
        w.notes && /* @__PURE__ */ v.jsx("span", { style: { color: "var(--mantine-color-dimmed, #9ca3af)", fontSize: 11 }, children: w.notes }),
        p === null && /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => g({ type: "close-interest", interest: w }),
            style: { ...to, color: "#dc2626", fontSize: 11 },
            children: "Close"
          }
        ),
        typeof p == "object" && p !== null && p.type === "close-interest" && p.interest.id === w.id && /* @__PURE__ */ v.jsx(
          Kd,
          {
            apiBase: t,
            interest: w,
            onDone: d,
            onCancel: () => g(null)
          }
        )
      ] }, w.id)),
      p === "add-interest" && /* @__PURE__ */ v.jsx(
        Qd,
        {
          apiBase: t,
          stockItemId: e,
          companies: u,
          onDone: d,
          onCancel: () => g(null)
        }
      ),
      p === null && /* @__PURE__ */ v.jsx("button", { onClick: () => g("add-interest"), style: { ...eo, marginTop: 4 }, children: "Add Interest" }),
      N.length > 0 && /* @__PURE__ */ v.jsxs("div", { style: { marginTop: 8 }, children: [
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            onClick: () => f((w) => !w),
            style: { ...to, fontSize: 11 },
            children: [
              z ? "Hide" : "Show",
              " closed interests (",
              N.length,
              ")"
            ]
          }
        ),
        z && /* @__PURE__ */ v.jsxs("table", { style: ns, children: [
          /* @__PURE__ */ v.jsx("thead", { children: /* @__PURE__ */ v.jsxs("tr", { children: [
            /* @__PURE__ */ v.jsx("th", { style: be, children: "Company" }),
            /* @__PURE__ */ v.jsx("th", { style: be, children: "From" }),
            /* @__PURE__ */ v.jsx("th", { style: be, children: "To" }),
            /* @__PURE__ */ v.jsx("th", { style: be, children: "Notes" })
          ] }) }),
          /* @__PURE__ */ v.jsx("tbody", { children: N.map((w) => /* @__PURE__ */ v.jsxs("tr", { children: [
            /* @__PURE__ */ v.jsx("td", { style: et, children: w.company_detail.name }),
            /* @__PURE__ */ v.jsx("td", { style: et, children: _t(w.start_date) }),
            /* @__PURE__ */ v.jsx("td", { style: et, children: _t(w.end_date) }),
            /* @__PURE__ */ v.jsx("td", { style: { ...et, color: "#9ca3af" }, children: w.notes || "—" })
          ] }, w.id)) })
        ] })
      ] })
    ] })
  ] });
}
const Ae = {
  display: "block",
  width: "100%",
  padding: "5px 8px",
  border: "1px solid var(--mantine-color-default-border, #d1d5db)",
  borderRadius: 4,
  fontSize: 12,
  marginBottom: 8,
  boxSizing: "border-box",
  background: "var(--mantine-color-body, #fff)",
  color: "var(--mantine-color-text, #111)"
}, Ve = {
  display: "block",
  fontSize: 11,
  fontWeight: 600,
  color: "var(--mantine-color-dimmed, #374151)",
  marginBottom: 2,
  textTransform: "uppercase",
  letterSpacing: "0.04em"
}, Wu = {
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: 4,
  padding: "5px 12px",
  fontSize: 12,
  cursor: "pointer",
  fontWeight: 500
}, ir = {
  background: "var(--mantine-color-default, #f3f4f6)",
  color: "var(--mantine-color-text, #374151)",
  border: "1px solid var(--mantine-color-default-border, #d1d5db)",
  borderRadius: 4,
  padding: "5px 12px",
  fontSize: 12,
  cursor: "pointer"
}, Gd = {
  background: "#dc2626",
  color: "#fff",
  border: "none",
  borderRadius: 4,
  padding: "5px 12px",
  fontSize: 12,
  cursor: "pointer",
  fontWeight: 500
}, eo = {
  background: "var(--mantine-color-default, #f3f4f6)",
  color: "var(--mantine-color-text, #374151)",
  border: "1px solid var(--mantine-color-default-border, #d1d5db)",
  borderRadius: 4,
  padding: "3px 10px",
  fontSize: 11,
  cursor: "pointer"
}, to = {
  background: "none",
  border: "none",
  color: "#2563eb",
  cursor: "pointer",
  padding: 0,
  textDecoration: "underline",
  fontSize: 12
}, ns = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: 6,
  fontSize: 11
}, be = {
  textAlign: "left",
  padding: "3px 6px",
  borderBottom: "1px solid var(--mantine-color-default-border, #e5e7eb)",
  color: "var(--mantine-color-dimmed, #6b7280)",
  fontWeight: 600
}, et = {
  padding: "3px 6px",
  borderBottom: "1px solid var(--mantine-color-default-border, #f3f4f6)",
  color: "var(--mantine-color-text, #374151)"
};
function Zd(e, t) {
  const n = (t == null ? void 0 : t.context) ?? t;
  hc(e).render(/* @__PURE__ */ v.jsx(Xd, { ...n }));
}
export {
  Zd as renderPanel
};
