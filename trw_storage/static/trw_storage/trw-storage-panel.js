var is = { exports: {} }, yl = {}, us = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur = Symbol.for("react.element"), Sc = Symbol.for("react.portal"), xc = Symbol.for("react.fragment"), wc = Symbol.for("react.strict_mode"), kc = Symbol.for("react.profiler"), Cc = Symbol.for("react.provider"), Ec = Symbol.for("react.context"), _c = Symbol.for("react.forward_ref"), jc = Symbol.for("react.suspense"), Nc = Symbol.for("react.memo"), zc = Symbol.for("react.lazy"), Yi = Symbol.iterator;
function Pc(e) {
  return e === null || typeof e != "object" ? null : (e = Yi && e[Yi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ss = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, as = Object.assign, cs = {};
function gn(e, t, n) {
  this.props = e, this.context = t, this.refs = cs, this.updater = n || ss;
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fs() {
}
fs.prototype = gn.prototype;
function bo(e, t, n) {
  this.props = e, this.context = t, this.refs = cs, this.updater = n || ss;
}
var ei = bo.prototype = new fs();
ei.constructor = bo;
as(ei, gn.prototype);
ei.isPureReactComponent = !0;
var Xi = Array.isArray, ds = Object.prototype.hasOwnProperty, ti = { current: null }, ps = { key: !0, ref: !0, __self: !0, __source: !0 };
function ms(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ds.call(t, r) && !ps.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: ur, type: e, key: o, ref: i, props: l, _owner: ti.current };
}
function Tc(e, t) {
  return { $$typeof: ur, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ni(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ur;
}
function Lc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Gi = /\/+/g;
function Ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Lc("" + e.key) : t.toString(36);
}
function Rr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case ur:
        case Sc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Ol(i, 0) : r, Xi(l) ? (n = "", e != null && (n = e.replace(Gi, "$&/") + "/"), Rr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (ni(l) && (l = Tc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Gi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Xi(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + Ol(o, u);
    i += Rr(o, t, n, s, l);
  }
  else if (s = Pc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + Ol(o, u++), i += Rr(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function yr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Rr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Dc(e) {
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
var fe = { current: null }, Or = { transition: null }, Rc = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: Or, ReactCurrentOwner: ti };
function hs() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = { map: yr, forEach: function(e, t, n) {
  yr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return yr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return yr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ni(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
O.Component = gn;
O.Fragment = xc;
O.Profiler = kc;
O.PureComponent = bo;
O.StrictMode = wc;
O.Suspense = jc;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rc;
O.act = hs;
O.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = as({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ti.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) ds.call(t, s) && !ps.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: ur, type: e.type, key: l, ref: o, props: r, _owner: i };
};
O.createContext = function(e) {
  return e = { $$typeof: Ec, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Cc, _context: e }, e.Consumer = e;
};
O.createElement = ms;
O.createFactory = function(e) {
  var t = ms.bind(null, e);
  return t.type = e, t;
};
O.createRef = function() {
  return { current: null };
};
O.forwardRef = function(e) {
  return { $$typeof: _c, render: e };
};
O.isValidElement = ni;
O.lazy = function(e) {
  return { $$typeof: zc, _payload: { _status: -1, _result: e }, _init: Dc };
};
O.memo = function(e, t) {
  return { $$typeof: Nc, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function(e) {
  var t = Or.transition;
  Or.transition = {};
  try {
    e();
  } finally {
    Or.transition = t;
  }
};
O.unstable_act = hs;
O.useCallback = function(e, t) {
  return fe.current.useCallback(e, t);
};
O.useContext = function(e) {
  return fe.current.useContext(e);
};
O.useDebugValue = function() {
};
O.useDeferredValue = function(e) {
  return fe.current.useDeferredValue(e);
};
O.useEffect = function(e, t) {
  return fe.current.useEffect(e, t);
};
O.useId = function() {
  return fe.current.useId();
};
O.useImperativeHandle = function(e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function(e, t) {
  return fe.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function(e, t) {
  return fe.current.useLayoutEffect(e, t);
};
O.useMemo = function(e, t) {
  return fe.current.useMemo(e, t);
};
O.useReducer = function(e, t, n) {
  return fe.current.useReducer(e, t, n);
};
O.useRef = function(e) {
  return fe.current.useRef(e);
};
O.useState = function(e) {
  return fe.current.useState(e);
};
O.useSyncExternalStore = function(e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function() {
  return fe.current.useTransition();
};
O.version = "18.3.1";
us.exports = O;
var T = us.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oc = T, Fc = Symbol.for("react.element"), Mc = Symbol.for("react.fragment"), Ic = Object.prototype.hasOwnProperty, Uc = Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $c = { key: !0, ref: !0, __self: !0, __source: !0 };
function ys(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Ic.call(t, r) && !$c.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Fc, type: e, key: o, ref: i, props: l, _owner: Uc.current };
}
yl.Fragment = Mc;
yl.jsx = ys;
yl.jsxs = ys;
is.exports = yl;
var d = is.exports, vs = { exports: {} }, Ee = {}, gs = { exports: {} }, Ss = {};
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
  function t(j, L) {
    var R = j.length;
    j.push(L);
    e: for (; 0 < R; ) {
      var K = R - 1 >>> 1, J = j[K];
      if (0 < l(J, L)) j[K] = L, j[R] = J, R = K;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var L = j[0], R = j.pop();
    if (R !== L) {
      j[0] = R;
      e: for (var K = 0, J = j.length, mr = J >>> 1; K < mr; ) {
        var jt = 2 * (K + 1) - 1, Rl = j[jt], Nt = jt + 1, hr = j[Nt];
        if (0 > l(Rl, R)) Nt < J && 0 > l(hr, Rl) ? (j[K] = hr, j[Nt] = R, K = Nt) : (j[K] = Rl, j[jt] = R, K = jt);
        else if (Nt < J && 0 > l(hr, R)) j[K] = hr, j[Nt] = R, K = Nt;
        else break e;
      }
    }
    return L;
  }
  function l(j, L) {
    var R = j.sortIndex - L.sortIndex;
    return R !== 0 ? R : j.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], c = [], y = 1, h = null, m = 3, g = !1, x = !1, w = !1, k = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(j) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= j) r(c), L.sortIndex = L.expirationTime, t(s, L);
      else break;
      L = n(c);
    }
  }
  function v(j) {
    if (w = !1, p(j), !x) if (n(s) !== null) x = !0, Wt(C);
    else {
      var L = n(c);
      L !== null && Dl(v, L.startTime - j);
    }
  }
  function C(j, L) {
    x = !1, w && (w = !1, f(z), z = -1), g = !0;
    var R = m;
    try {
      for (p(L), h = n(s); h !== null && (!(h.expirationTime > L) || j && !pe()); ) {
        var K = h.callback;
        if (typeof K == "function") {
          h.callback = null, m = h.priorityLevel;
          var J = K(h.expirationTime <= L);
          L = e.unstable_now(), typeof J == "function" ? h.callback = J : h === n(s) && r(s), p(L);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var mr = !0;
      else {
        var jt = n(c);
        jt !== null && Dl(v, jt.startTime - L), mr = !1;
      }
      return mr;
    } finally {
      h = null, m = R, g = !1;
    }
  }
  var N = !1, _ = null, z = -1, F = 5, D = -1;
  function pe() {
    return !(e.unstable_now() - D < F);
  }
  function Xe() {
    if (_ !== null) {
      var j = e.unstable_now();
      D = j;
      var L = !0;
      try {
        L = _(!0, j);
      } finally {
        L ? P() : (N = !1, _ = null);
      }
    } else N = !1;
  }
  var P;
  if (typeof a == "function") P = function() {
    a(Xe);
  };
  else if (typeof MessageChannel < "u") {
    var wn = new MessageChannel(), pr = wn.port2;
    wn.port1.onmessage = Xe, P = function() {
      pr.postMessage(null);
    };
  } else P = function() {
    k(Xe, 0);
  };
  function Wt(j) {
    _ = j, N || (N = !0, P());
  }
  function Dl(j, L) {
    z = k(function() {
      j(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, e.unstable_continueExecution = function() {
    x || g || (x = !0, Wt(C));
  }, e.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < j ? Math.floor(1e3 / j) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(j) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = m;
    }
    var R = m;
    m = L;
    try {
      return j();
    } finally {
      m = R;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(j, L) {
    switch (j) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        j = 3;
    }
    var R = m;
    m = j;
    try {
      return L();
    } finally {
      m = R;
    }
  }, e.unstable_scheduleCallback = function(j, L, R) {
    var K = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? K + R : K) : R = K, j) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = R + J, j = { id: y++, callback: L, priorityLevel: j, startTime: R, expirationTime: J, sortIndex: -1 }, R > K ? (j.sortIndex = R, t(c, j), n(s) === null && j === n(c) && (w ? (f(z), z = -1) : w = !0, Dl(v, R - K))) : (j.sortIndex = J, t(s, j), x || g || (x = !0, Wt(C))), j;
  }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function(j) {
    var L = m;
    return function() {
      var R = m;
      m = L;
      try {
        return j.apply(this, arguments);
      } finally {
        m = R;
      }
    };
  };
})(Ss);
gs.exports = Ss;
var Ac = gs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vc = T, Ce = Ac;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var xs = /* @__PURE__ */ new Set(), Bn = {};
function Vt(e, t) {
  fn(e, t), fn(e + "Capture", t);
}
function fn(e, t) {
  for (Bn[e] = t, e = 0; e < t.length; e++) xs.add(t[e]);
}
var et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), io = Object.prototype.hasOwnProperty, Hc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Zi = {}, Ji = {};
function Wc(e) {
  return io.call(Ji, e) ? !0 : io.call(Zi, e) ? !1 : Hc.test(e) ? Ji[e] = !0 : (Zi[e] = !0, !1);
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
function Qc(e, t, n, r) {
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
function de(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  le[e] = new de(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  le[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  le[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  le[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  le[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  le[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  le[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  le[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  le[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ri = /[\-:]([a-z])/g;
function li(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ri,
    li
  );
  le[t] = new de(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ri, li);
  le[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ri, li);
  le[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  le[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  le[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function oi(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Qc(t, n, l, r) && (n = null), r || l === null ? Wc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lt = Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vr = Symbol.for("react.element"), Kt = Symbol.for("react.portal"), Yt = Symbol.for("react.fragment"), ii = Symbol.for("react.strict_mode"), uo = Symbol.for("react.profiler"), ws = Symbol.for("react.provider"), ks = Symbol.for("react.context"), ui = Symbol.for("react.forward_ref"), so = Symbol.for("react.suspense"), ao = Symbol.for("react.suspense_list"), si = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), Cs = Symbol.for("react.offscreen"), qi = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object" ? null : (e = qi && e[qi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var B = Object.assign, Fl;
function Ln(e) {
  if (Fl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Fl = t && t[1] || "";
  }
  return `
` + Fl + e;
}
var Ml = !1;
function Il(e, t) {
  if (!e || Ml) return "";
  Ml = !0;
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
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    Ml = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ln(e) : "";
}
function Kc(e) {
  switch (e.tag) {
    case 5:
      return Ln(e.type);
    case 16:
      return Ln("Lazy");
    case 13:
      return Ln("Suspense");
    case 19:
      return Ln("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Il(e.type, !1), e;
    case 11:
      return e = Il(e.type.render, !1), e;
    case 1:
      return e = Il(e.type, !0), e;
    default:
      return "";
  }
}
function co(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yt:
      return "Fragment";
    case Kt:
      return "Portal";
    case uo:
      return "Profiler";
    case ii:
      return "StrictMode";
    case so:
      return "Suspense";
    case ao:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ks:
      return (e.displayName || "Context") + ".Consumer";
    case ws:
      return (e._context.displayName || "Context") + ".Provider";
    case ui:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case si:
      return t = e.displayName || null, t !== null ? t : co(e.type) || "Memo";
    case it:
      t = e._payload, e = e._init;
      try {
        return co(e(t));
      } catch {
      }
  }
  return null;
}
function Yc(e) {
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
      return co(t);
    case 8:
      return t === ii ? "StrictMode" : "Mode";
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
function xt(e) {
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
function Es(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Xc(e) {
  var t = Es(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function gr(e) {
  e._valueTracker || (e._valueTracker = Xc(e));
}
function _s(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Es(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Qr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fo(e, t) {
  var n = t.checked;
  return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function bi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = xt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function js(e, t) {
  t = t.checked, t != null && oi(e, "checked", t, !1);
}
function po(e, t) {
  js(e, t);
  var n = xt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? mo(e, t.type, n) : t.hasOwnProperty("defaultValue") && mo(e, t.type, xt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function eu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function mo(e, t, n) {
  (t !== "number" || Qr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Dn = Array.isArray;
function ln(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ho(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function tu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (Dn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: xt(n) };
}
function Ns(e, t) {
  var n = xt(t.value), r = xt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function nu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? zs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Sr, Ps = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Sr = Sr || document.createElement("div"), Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fn = {
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
}, Gc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function(e) {
  Gc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Fn[t] = Fn[e];
  });
});
function Ts(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Fn.hasOwnProperty(e) && Fn[e] ? ("" + t).trim() : t + "px";
}
function Ls(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ts(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Zc = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function vo(e, t) {
  if (t) {
    if (Zc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function go(e, t) {
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
var So = null;
function ai(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var xo = null, on = null, un = null;
function ru(e) {
  if (e = cr(e)) {
    if (typeof xo != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = wl(t), xo(e.stateNode, e.type, t));
  }
}
function Ds(e) {
  on ? un ? un.push(e) : un = [e] : on = e;
}
function Rs() {
  if (on) {
    var e = on, t = un;
    if (un = on = null, ru(e), t) for (e = 0; e < t.length; e++) ru(t[e]);
  }
}
function Os(e, t) {
  return e(t);
}
function Fs() {
}
var Ul = !1;
function Ms(e, t, n) {
  if (Ul) return e(t, n);
  Ul = !0;
  try {
    return Os(e, t, n);
  } finally {
    Ul = !1, (on !== null || un !== null) && (Fs(), Rs());
  }
}
function Kn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wl(n);
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
var wo = !1;
if (et) try {
  var Cn = {};
  Object.defineProperty(Cn, "passive", { get: function() {
    wo = !0;
  } }), window.addEventListener("test", Cn, Cn), window.removeEventListener("test", Cn, Cn);
} catch {
  wo = !1;
}
function Jc(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (y) {
    this.onError(y);
  }
}
var Mn = !1, Kr = null, Yr = !1, ko = null, qc = { onError: function(e) {
  Mn = !0, Kr = e;
} };
function bc(e, t, n, r, l, o, i, u, s) {
  Mn = !1, Kr = null, Jc.apply(qc, arguments);
}
function ef(e, t, n, r, l, o, i, u, s) {
  if (bc.apply(this, arguments), Mn) {
    if (Mn) {
      var c = Kr;
      Mn = !1, Kr = null;
    } else throw Error(S(198));
    Yr || (Yr = !0, ko = c);
  }
}
function Ht(e) {
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
function Is(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function lu(e) {
  if (Ht(e) !== e) throw Error(S(188));
}
function tf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ht(e), t === null) throw Error(S(188));
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
        if (o === n) return lu(l), e;
        if (o === r) return lu(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Us(e) {
  return e = tf(e), e !== null ? $s(e) : null;
}
function $s(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $s(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var As = Ce.unstable_scheduleCallback, ou = Ce.unstable_cancelCallback, nf = Ce.unstable_shouldYield, rf = Ce.unstable_requestPaint, Y = Ce.unstable_now, lf = Ce.unstable_getCurrentPriorityLevel, ci = Ce.unstable_ImmediatePriority, Vs = Ce.unstable_UserBlockingPriority, Xr = Ce.unstable_NormalPriority, of = Ce.unstable_LowPriority, Hs = Ce.unstable_IdlePriority, vl = null, Qe = null;
function uf(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function") try {
    Qe.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ie = Math.clz32 ? Math.clz32 : cf, sf = Math.log, af = Math.LN2;
function cf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (sf(e) / af | 0) | 0;
}
var xr = 64, wr = 4194304;
function Rn(e) {
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
function Gr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Rn(u) : (o &= i, o !== 0 && (r = Rn(o)));
  } else i = n & ~l, i !== 0 ? r = Rn(i) : o !== 0 && (r = Rn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ie(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function ff(e, t) {
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
function df(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Ie(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = ff(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Co(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ws() {
  var e = xr;
  return xr <<= 1, !(xr & 4194240) && (xr = 64), e;
}
function $l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function sr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ie(t), e[t] = n;
}
function pf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ie(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function fi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var I = 0;
function Bs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Qs, di, Ks, Ys, Xs, Eo = !1, kr = [], dt = null, pt = null, mt = null, Yn = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map(), st = [], mf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function iu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      dt = null;
      break;
    case "dragenter":
    case "dragleave":
      pt = null;
      break;
    case "mouseover":
    case "mouseout":
      mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Yn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xn.delete(t.pointerId);
  }
}
function En(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = cr(t), t !== null && di(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function hf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return dt = En(dt, e, t, n, r, l), !0;
    case "dragenter":
      return pt = En(pt, e, t, n, r, l), !0;
    case "mouseover":
      return mt = En(mt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Yn.set(o, En(Yn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Xn.set(o, En(Xn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Gs(e) {
  var t = Lt(e.target);
  if (t !== null) {
    var n = Ht(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Is(n), t !== null) {
          e.blockedOn = t, Xs(e.priority, function() {
            Ks(n);
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
function Fr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _o(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      So = r, n.target.dispatchEvent(r), So = null;
    } else return t = cr(n), t !== null && di(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function uu(e, t, n) {
  Fr(e) && n.delete(t);
}
function yf() {
  Eo = !1, dt !== null && Fr(dt) && (dt = null), pt !== null && Fr(pt) && (pt = null), mt !== null && Fr(mt) && (mt = null), Yn.forEach(uu), Xn.forEach(uu);
}
function _n(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Eo || (Eo = !0, Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, yf)));
}
function Gn(e) {
  function t(l) {
    return _n(l, e);
  }
  if (0 < kr.length) {
    _n(kr[0], e);
    for (var n = 1; n < kr.length; n++) {
      var r = kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (dt !== null && _n(dt, e), pt !== null && _n(pt, e), mt !== null && _n(mt, e), Yn.forEach(t), Xn.forEach(t), n = 0; n < st.length; n++) r = st[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < st.length && (n = st[0], n.blockedOn === null); ) Gs(n), n.blockedOn === null && st.shift();
}
var sn = lt.ReactCurrentBatchConfig, Zr = !0;
function vf(e, t, n, r) {
  var l = I, o = sn.transition;
  sn.transition = null;
  try {
    I = 1, pi(e, t, n, r);
  } finally {
    I = l, sn.transition = o;
  }
}
function gf(e, t, n, r) {
  var l = I, o = sn.transition;
  sn.transition = null;
  try {
    I = 4, pi(e, t, n, r);
  } finally {
    I = l, sn.transition = o;
  }
}
function pi(e, t, n, r) {
  if (Zr) {
    var l = _o(e, t, n, r);
    if (l === null) Gl(e, t, r, Jr, n), iu(e, r);
    else if (hf(l, e, t, n, r)) r.stopPropagation();
    else if (iu(e, r), t & 4 && -1 < mf.indexOf(e)) {
      for (; l !== null; ) {
        var o = cr(l);
        if (o !== null && Qs(o), o = _o(e, t, n, r), o === null && Gl(e, t, r, Jr, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Gl(e, t, r, null, n);
  }
}
var Jr = null;
function _o(e, t, n, r) {
  if (Jr = null, e = ai(r), e = Lt(e), e !== null) if (t = Ht(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Is(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Jr = e, null;
}
function Zs(e) {
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
      switch (lf()) {
        case ci:
          return 1;
        case Vs:
          return 4;
        case Xr:
        case of:
          return 16;
        case Hs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null, mi = null, Mr = null;
function Js() {
  if (Mr) return Mr;
  var e, t = mi, n = t.length, r, l = "value" in ct ? ct.value : ct.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Mr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ir(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Cr() {
  return !0;
}
function su() {
  return !1;
}
function _e(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Cr : su, this.isPropagationStopped = su, this;
  }
  return B(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Cr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Cr);
  }, persist: function() {
  }, isPersistent: Cr }), t;
}
var Sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, hi = _e(Sn), ar = B({}, Sn, { view: 0, detail: 0 }), Sf = _e(ar), Al, Vl, jn, gl = B({}, ar, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== jn && (jn && e.type === "mousemove" ? (Al = e.screenX - jn.screenX, Vl = e.screenY - jn.screenY) : Vl = Al = 0, jn = e), Al);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Vl;
} }), au = _e(gl), xf = B({}, gl, { dataTransfer: 0 }), wf = _e(xf), kf = B({}, ar, { relatedTarget: 0 }), Hl = _e(kf), Cf = B({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ef = _e(Cf), _f = B({}, Sn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), jf = _e(_f), Nf = B({}, Sn, { data: 0 }), cu = _e(Nf), zf = {
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
}, Tf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Lf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tf[e]) ? !!t[e] : !1;
}
function yi() {
  return Lf;
}
var Df = B({}, ar, { key: function(e) {
  if (e.key) {
    var t = zf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ir(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yi, charCode: function(e) {
  return e.type === "keypress" ? Ir(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ir(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Rf = _e(Df), Of = B({}, gl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fu = _e(Of), Ff = B({}, ar, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yi }), Mf = _e(Ff), If = B({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Uf = _e(If), $f = B({}, gl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Af = _e($f), Vf = [9, 13, 27, 32], vi = et && "CompositionEvent" in window, In = null;
et && "documentMode" in document && (In = document.documentMode);
var Hf = et && "TextEvent" in window && !In, qs = et && (!vi || In && 8 < In && 11 >= In), du = " ", pu = !1;
function bs(e, t) {
  switch (e) {
    case "keyup":
      return Vf.indexOf(t.keyCode) !== -1;
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
function ea(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Xt = !1;
function Wf(e, t) {
  switch (e) {
    case "compositionend":
      return ea(t);
    case "keypress":
      return t.which !== 32 ? null : (pu = !0, du);
    case "textInput":
      return e = t.data, e === du && pu ? null : e;
    default:
      return null;
  }
}
function Bf(e, t) {
  if (Xt) return e === "compositionend" || !vi && bs(e, t) ? (e = Js(), Mr = mi = ct = null, Xt = !1, e) : null;
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
      return qs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qf[e.type] : t === "textarea";
}
function ta(e, t, n, r) {
  Ds(r), t = qr(t, "onChange"), 0 < t.length && (n = new hi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Un = null, Zn = null;
function Kf(e) {
  da(e, 0);
}
function Sl(e) {
  var t = Jt(e);
  if (_s(t)) return e;
}
function Yf(e, t) {
  if (e === "change") return t;
}
var na = !1;
if (et) {
  var Wl;
  if (et) {
    var Bl = "oninput" in document;
    if (!Bl) {
      var hu = document.createElement("div");
      hu.setAttribute("oninput", "return;"), Bl = typeof hu.oninput == "function";
    }
    Wl = Bl;
  } else Wl = !1;
  na = Wl && (!document.documentMode || 9 < document.documentMode);
}
function yu() {
  Un && (Un.detachEvent("onpropertychange", ra), Zn = Un = null);
}
function ra(e) {
  if (e.propertyName === "value" && Sl(Zn)) {
    var t = [];
    ta(t, Zn, e, ai(e)), Ms(Kf, t);
  }
}
function Xf(e, t, n) {
  e === "focusin" ? (yu(), Un = t, Zn = n, Un.attachEvent("onpropertychange", ra)) : e === "focusout" && yu();
}
function Gf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Sl(Zn);
}
function Zf(e, t) {
  if (e === "click") return Sl(t);
}
function Jf(e, t) {
  if (e === "input" || e === "change") return Sl(t);
}
function qf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var $e = typeof Object.is == "function" ? Object.is : qf;
function Jn(e, t) {
  if ($e(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!io.call(t, l) || !$e(e[l], t[l])) return !1;
  }
  return !0;
}
function vu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gu(e, t) {
  var n = vu(e);
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
    n = vu(n);
  }
}
function la(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? la(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function oa() {
  for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qr(e.document);
  }
  return t;
}
function gi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function bf(e) {
  var t = oa(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && la(n.ownerDocument.documentElement, n)) {
    if (r !== null && gi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = gu(n, o);
        var i = gu(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var ed = et && "documentMode" in document && 11 >= document.documentMode, Gt = null, jo = null, $n = null, No = !1;
function Su(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  No || Gt == null || Gt !== Qr(r) || (r = Gt, "selectionStart" in r && gi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), $n && Jn($n, r) || ($n = r, r = qr(jo, "onSelect"), 0 < r.length && (t = new hi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Gt)));
}
function Er(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Zt = { animationend: Er("Animation", "AnimationEnd"), animationiteration: Er("Animation", "AnimationIteration"), animationstart: Er("Animation", "AnimationStart"), transitionend: Er("Transition", "TransitionEnd") }, Ql = {}, ia = {};
et && (ia = document.createElement("div").style, "AnimationEvent" in window || (delete Zt.animationend.animation, delete Zt.animationiteration.animation, delete Zt.animationstart.animation), "TransitionEvent" in window || delete Zt.transitionend.transition);
function xl(e) {
  if (Ql[e]) return Ql[e];
  if (!Zt[e]) return e;
  var t = Zt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ia) return Ql[e] = t[n];
  return e;
}
var ua = xl("animationend"), sa = xl("animationiteration"), aa = xl("animationstart"), ca = xl("transitionend"), fa = /* @__PURE__ */ new Map(), xu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function kt(e, t) {
  fa.set(e, t), Vt(t, [e]);
}
for (var Kl = 0; Kl < xu.length; Kl++) {
  var Yl = xu[Kl], td = Yl.toLowerCase(), nd = Yl[0].toUpperCase() + Yl.slice(1);
  kt(td, "on" + nd);
}
kt(ua, "onAnimationEnd");
kt(sa, "onAnimationIteration");
kt(aa, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(ca, "onTransitionEnd");
fn("onMouseEnter", ["mouseout", "mouseover"]);
fn("onMouseLeave", ["mouseout", "mouseover"]);
fn("onPointerEnter", ["pointerout", "pointerover"]);
fn("onPointerLeave", ["pointerout", "pointerover"]);
Vt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var On = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), rd = new Set("cancel close invalid load scroll toggle".split(" ").concat(On));
function wu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ef(r, t, void 0, e), e.currentTarget = null;
}
function da(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        wu(l, u, c), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        wu(l, u, c), o = s;
      }
    }
  }
  if (Yr) throw e = ko, Yr = !1, ko = null, e;
}
function $(e, t) {
  var n = t[Do];
  n === void 0 && (n = t[Do] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (pa(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), pa(n, e, r, t);
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function qn(e) {
  if (!e[_r]) {
    e[_r] = !0, xs.forEach(function(n) {
      n !== "selectionchange" && (rd.has(n) || Xl(n, !1, e), Xl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_r] || (t[_r] = !0, Xl("selectionchange", !1, t));
  }
}
function pa(e, t, n, r) {
  switch (Zs(t)) {
    case 1:
      var l = vf;
      break;
    case 4:
      l = gf;
      break;
    default:
      l = pi;
  }
  n = l.bind(null, t, n, e), l = void 0, !wo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Gl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = Lt(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Ms(function() {
    var c = o, y = ai(n), h = [];
    e: {
      var m = fa.get(e);
      if (m !== void 0) {
        var g = hi, x = e;
        switch (e) {
          case "keypress":
            if (Ir(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Rf;
            break;
          case "focusin":
            x = "focus", g = Hl;
            break;
          case "focusout":
            x = "blur", g = Hl;
            break;
          case "beforeblur":
          case "afterblur":
            g = Hl;
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
            g = au;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = wf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Mf;
            break;
          case ua:
          case sa:
          case aa:
            g = Ef;
            break;
          case ca:
            g = Uf;
            break;
          case "scroll":
            g = Sf;
            break;
          case "wheel":
            g = Af;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = jf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = fu;
        }
        var w = (t & 4) !== 0, k = !w && e === "scroll", f = w ? m !== null ? m + "Capture" : null : m;
        w = [];
        for (var a = c, p; a !== null; ) {
          p = a;
          var v = p.stateNode;
          if (p.tag === 5 && v !== null && (p = v, f !== null && (v = Kn(a, f), v != null && w.push(bn(a, v, p)))), k) break;
          a = a.return;
        }
        0 < w.length && (m = new g(m, x, null, n, y), h.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", m && n !== So && (x = n.relatedTarget || n.fromElement) && (Lt(x) || x[tt])) break e;
        if ((g || m) && (m = y.window === y ? y : (m = y.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (x = n.relatedTarget || n.toElement, g = c, x = x ? Lt(x) : null, x !== null && (k = Ht(x), x !== k || x.tag !== 5 && x.tag !== 6) && (x = null)) : (g = null, x = c), g !== x)) {
          if (w = au, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (w = fu, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), k = g == null ? m : Jt(g), p = x == null ? m : Jt(x), m = new w(v, a + "leave", g, n, y), m.target = k, m.relatedTarget = p, v = null, Lt(y) === c && (w = new w(f, a + "enter", x, n, y), w.target = p, w.relatedTarget = k, v = w), k = v, g && x) t: {
            for (w = g, f = x, a = 0, p = w; p; p = Bt(p)) a++;
            for (p = 0, v = f; v; v = Bt(v)) p++;
            for (; 0 < a - p; ) w = Bt(w), a--;
            for (; 0 < p - a; ) f = Bt(f), p--;
            for (; a--; ) {
              if (w === f || f !== null && w === f.alternate) break t;
              w = Bt(w), f = Bt(f);
            }
            w = null;
          }
          else w = null;
          g !== null && ku(h, m, g, w, !1), x !== null && k !== null && ku(h, k, x, w, !0);
        }
      }
      e: {
        if (m = c ? Jt(c) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file") var C = Yf;
        else if (mu(m)) if (na) C = Jf;
        else {
          C = Gf;
          var N = Xf;
        }
        else (g = m.nodeName) && g.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = Zf);
        if (C && (C = C(e, c))) {
          ta(h, C, n, y);
          break e;
        }
        N && N(e, m, c), e === "focusout" && (N = m._wrapperState) && N.controlled && m.type === "number" && mo(m, "number", m.value);
      }
      switch (N = c ? Jt(c) : window, e) {
        case "focusin":
          (mu(N) || N.contentEditable === "true") && (Gt = N, jo = c, $n = null);
          break;
        case "focusout":
          $n = jo = Gt = null;
          break;
        case "mousedown":
          No = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          No = !1, Su(h, n, y);
          break;
        case "selectionchange":
          if (ed) break;
        case "keydown":
        case "keyup":
          Su(h, n, y);
      }
      var _;
      if (vi) e: {
        switch (e) {
          case "compositionstart":
            var z = "onCompositionStart";
            break e;
          case "compositionend":
            z = "onCompositionEnd";
            break e;
          case "compositionupdate":
            z = "onCompositionUpdate";
            break e;
        }
        z = void 0;
      }
      else Xt ? bs(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z && (qs && n.locale !== "ko" && (Xt || z !== "onCompositionStart" ? z === "onCompositionEnd" && Xt && (_ = Js()) : (ct = y, mi = "value" in ct ? ct.value : ct.textContent, Xt = !0)), N = qr(c, z), 0 < N.length && (z = new cu(z, e, null, n, y), h.push({ event: z, listeners: N }), _ ? z.data = _ : (_ = ea(n), _ !== null && (z.data = _)))), (_ = Hf ? Wf(e, n) : Bf(e, n)) && (c = qr(c, "onBeforeInput"), 0 < c.length && (y = new cu("onBeforeInput", "beforeinput", null, n, y), h.push({ event: y, listeners: c }), y.data = _));
    }
    da(h, t);
  });
}
function bn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Kn(e, n), o != null && r.unshift(bn(e, o, l)), o = Kn(e, t), o != null && r.push(bn(e, o, l))), e = e.return;
  }
  return r;
}
function Bt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ku(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Kn(n, o), s != null && i.unshift(bn(n, s, u))) : l || (s = Kn(n, o), s != null && i.push(bn(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var ld = /\r\n?/g, od = /\u0000|\uFFFD/g;
function Cu(e) {
  return (typeof e == "string" ? e : "" + e).replace(ld, `
`).replace(od, "");
}
function jr(e, t, n) {
  if (t = Cu(t), Cu(e) !== t && n) throw Error(S(425));
}
function br() {
}
var zo = null, Po = null;
function To(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Lo = typeof setTimeout == "function" ? setTimeout : void 0, id = typeof clearTimeout == "function" ? clearTimeout : void 0, Eu = typeof Promise == "function" ? Promise : void 0, ud = typeof queueMicrotask == "function" ? queueMicrotask : typeof Eu < "u" ? function(e) {
  return Eu.resolve(null).then(e).catch(sd);
} : Lo;
function sd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Zl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Gn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Gn(t);
}
function ht(e) {
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
function _u(e) {
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
var xn = Math.random().toString(36).slice(2), Be = "__reactFiber$" + xn, er = "__reactProps$" + xn, tt = "__reactContainer$" + xn, Do = "__reactEvents$" + xn, ad = "__reactListeners$" + xn, cd = "__reactHandles$" + xn;
function Lt(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[tt] || n[Be]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = _u(e); e !== null; ) {
        if (n = e[Be]) return n;
        e = _u(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function cr(e) {
  return e = e[Be] || e[tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function wl(e) {
  return e[er] || null;
}
var Ro = [], qt = -1;
function Ct(e) {
  return { current: e };
}
function A(e) {
  0 > qt || (e.current = Ro[qt], Ro[qt] = null, qt--);
}
function U(e, t) {
  qt++, Ro[qt] = e.current, e.current = t;
}
var wt = {}, se = Ct(wt), ve = Ct(!1), Mt = wt;
function dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ge(e) {
  return e = e.childContextTypes, e != null;
}
function el() {
  A(ve), A(se);
}
function ju(e, t, n) {
  if (se.current !== wt) throw Error(S(168));
  U(se, t), U(ve, n);
}
function ma(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Yc(e) || "Unknown", l));
  return B({}, n, r);
}
function tl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wt, Mt = se.current, U(se, e), U(ve, ve.current), !0;
}
function Nu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = ma(e, t, Mt), r.__reactInternalMemoizedMergedChildContext = e, A(ve), A(se), U(se, e)) : A(ve), U(ve, n);
}
var Ze = null, kl = !1, Jl = !1;
function ha(e) {
  Ze === null ? Ze = [e] : Ze.push(e);
}
function fd(e) {
  kl = !0, ha(e);
}
function Et() {
  if (!Jl && Ze !== null) {
    Jl = !0;
    var e = 0, t = I;
    try {
      var n = Ze;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ze = null, kl = !1;
    } catch (l) {
      throw Ze !== null && (Ze = Ze.slice(e + 1)), As(ci, Et), l;
    } finally {
      I = t, Jl = !1;
    }
  }
  return null;
}
var bt = [], en = 0, nl = null, rl = 0, je = [], Ne = 0, It = null, Je = 1, qe = "";
function zt(e, t) {
  bt[en++] = rl, bt[en++] = nl, nl = e, rl = t;
}
function ya(e, t, n) {
  je[Ne++] = Je, je[Ne++] = qe, je[Ne++] = It, It = e;
  var r = Je;
  e = qe;
  var l = 32 - Ie(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Ie(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Je = 1 << 32 - Ie(t) + l | n << l | r, qe = o + e;
  } else Je = 1 << o | n << l | r, qe = e;
}
function Si(e) {
  e.return !== null && (zt(e, 1), ya(e, 1, 0));
}
function xi(e) {
  for (; e === nl; ) nl = bt[--en], bt[en] = null, rl = bt[--en], bt[en] = null;
  for (; e === It; ) It = je[--Ne], je[Ne] = null, qe = je[--Ne], je[Ne] = null, Je = je[--Ne], je[Ne] = null;
}
var ke = null, we = null, V = !1, Fe = null;
function va(e, t) {
  var n = ze(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function zu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ke = e, we = ht(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ke = e, we = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = It !== null ? { id: Je, overflow: qe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ke = e, we = null, !0) : !1;
    default:
      return !1;
  }
}
function Oo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fo(e) {
  if (V) {
    var t = we;
    if (t) {
      var n = t;
      if (!zu(e, t)) {
        if (Oo(e)) throw Error(S(418));
        t = ht(n.nextSibling);
        var r = ke;
        t && zu(e, t) ? va(r, n) : (e.flags = e.flags & -4097 | 2, V = !1, ke = e);
      }
    } else {
      if (Oo(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, V = !1, ke = e;
    }
  }
}
function Pu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ke = e;
}
function Nr(e) {
  if (e !== ke) return !1;
  if (!V) return Pu(e), V = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !To(e.type, e.memoizedProps)), t && (t = we)) {
    if (Oo(e)) throw ga(), Error(S(418));
    for (; t; ) va(e, t), t = ht(t.nextSibling);
  }
  if (Pu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = ht(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = ke ? ht(e.stateNode.nextSibling) : null;
  return !0;
}
function ga() {
  for (var e = we; e; ) e = ht(e.nextSibling);
}
function pn() {
  we = ke = null, V = !1;
}
function wi(e) {
  Fe === null ? Fe = [e] : Fe.push(e);
}
var dd = lt.ReactCurrentBatchConfig;
function Nn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function zr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Tu(e) {
  var t = e._init;
  return t(e._payload);
}
function Sa(e) {
  function t(f, a) {
    if (e) {
      var p = f.deletions;
      p === null ? (f.deletions = [a], f.flags |= 16) : p.push(a);
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
    return f = St(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < a ? (f.flags |= 2, a) : p) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, p, v) {
    return a === null || a.tag !== 6 ? (a = lo(p, f.mode, v), a.return = f, a) : (a = l(a, p), a.return = f, a);
  }
  function s(f, a, p, v) {
    var C = p.type;
    return C === Yt ? y(f, a, p.props.children, v, p.key) : a !== null && (a.elementType === C || typeof C == "object" && C !== null && C.$$typeof === it && Tu(C) === a.type) ? (v = l(a, p.props), v.ref = Nn(f, a, p), v.return = f, v) : (v = Br(p.type, p.key, p.props, null, f.mode, v), v.ref = Nn(f, a, p), v.return = f, v);
  }
  function c(f, a, p, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== p.containerInfo || a.stateNode.implementation !== p.implementation ? (a = oo(p, f.mode, v), a.return = f, a) : (a = l(a, p.children || []), a.return = f, a);
  }
  function y(f, a, p, v, C) {
    return a === null || a.tag !== 7 ? (a = Ft(p, f.mode, v, C), a.return = f, a) : (a = l(a, p), a.return = f, a);
  }
  function h(f, a, p) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = lo("" + a, f.mode, p), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case vr:
          return p = Br(a.type, a.key, a.props, null, f.mode, p), p.ref = Nn(f, null, a), p.return = f, p;
        case Kt:
          return a = oo(a, f.mode, p), a.return = f, a;
        case it:
          var v = a._init;
          return h(f, v(a._payload), p);
      }
      if (Dn(a) || kn(a)) return a = Ft(a, f.mode, p, null), a.return = f, a;
      zr(f, a);
    }
    return null;
  }
  function m(f, a, p, v) {
    var C = a !== null ? a.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return C !== null ? null : u(f, a, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case vr:
          return p.key === C ? s(f, a, p, v) : null;
        case Kt:
          return p.key === C ? c(f, a, p, v) : null;
        case it:
          return C = p._init, m(
            f,
            a,
            C(p._payload),
            v
          );
      }
      if (Dn(p) || kn(p)) return C !== null ? null : y(f, a, p, v, null);
      zr(f, p);
    }
    return null;
  }
  function g(f, a, p, v, C) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(p) || null, u(a, f, "" + v, C);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case vr:
          return f = f.get(v.key === null ? p : v.key) || null, s(a, f, v, C);
        case Kt:
          return f = f.get(v.key === null ? p : v.key) || null, c(a, f, v, C);
        case it:
          var N = v._init;
          return g(f, a, p, N(v._payload), C);
      }
      if (Dn(v) || kn(v)) return f = f.get(p) || null, y(a, f, v, C, null);
      zr(a, v);
    }
    return null;
  }
  function x(f, a, p, v) {
    for (var C = null, N = null, _ = a, z = a = 0, F = null; _ !== null && z < p.length; z++) {
      _.index > z ? (F = _, _ = null) : F = _.sibling;
      var D = m(f, _, p[z], v);
      if (D === null) {
        _ === null && (_ = F);
        break;
      }
      e && _ && D.alternate === null && t(f, _), a = o(D, a, z), N === null ? C = D : N.sibling = D, N = D, _ = F;
    }
    if (z === p.length) return n(f, _), V && zt(f, z), C;
    if (_ === null) {
      for (; z < p.length; z++) _ = h(f, p[z], v), _ !== null && (a = o(_, a, z), N === null ? C = _ : N.sibling = _, N = _);
      return V && zt(f, z), C;
    }
    for (_ = r(f, _); z < p.length; z++) F = g(_, f, z, p[z], v), F !== null && (e && F.alternate !== null && _.delete(F.key === null ? z : F.key), a = o(F, a, z), N === null ? C = F : N.sibling = F, N = F);
    return e && _.forEach(function(pe) {
      return t(f, pe);
    }), V && zt(f, z), C;
  }
  function w(f, a, p, v) {
    var C = kn(p);
    if (typeof C != "function") throw Error(S(150));
    if (p = C.call(p), p == null) throw Error(S(151));
    for (var N = C = null, _ = a, z = a = 0, F = null, D = p.next(); _ !== null && !D.done; z++, D = p.next()) {
      _.index > z ? (F = _, _ = null) : F = _.sibling;
      var pe = m(f, _, D.value, v);
      if (pe === null) {
        _ === null && (_ = F);
        break;
      }
      e && _ && pe.alternate === null && t(f, _), a = o(pe, a, z), N === null ? C = pe : N.sibling = pe, N = pe, _ = F;
    }
    if (D.done) return n(
      f,
      _
    ), V && zt(f, z), C;
    if (_ === null) {
      for (; !D.done; z++, D = p.next()) D = h(f, D.value, v), D !== null && (a = o(D, a, z), N === null ? C = D : N.sibling = D, N = D);
      return V && zt(f, z), C;
    }
    for (_ = r(f, _); !D.done; z++, D = p.next()) D = g(_, f, z, D.value, v), D !== null && (e && D.alternate !== null && _.delete(D.key === null ? z : D.key), a = o(D, a, z), N === null ? C = D : N.sibling = D, N = D);
    return e && _.forEach(function(Xe) {
      return t(f, Xe);
    }), V && zt(f, z), C;
  }
  function k(f, a, p, v) {
    if (typeof p == "object" && p !== null && p.type === Yt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case vr:
          e: {
            for (var C = p.key, N = a; N !== null; ) {
              if (N.key === C) {
                if (C = p.type, C === Yt) {
                  if (N.tag === 7) {
                    n(f, N.sibling), a = l(N, p.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (N.elementType === C || typeof C == "object" && C !== null && C.$$typeof === it && Tu(C) === N.type) {
                  n(f, N.sibling), a = l(N, p.props), a.ref = Nn(f, N, p), a.return = f, f = a;
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            p.type === Yt ? (a = Ft(p.props.children, f.mode, v, p.key), a.return = f, f = a) : (v = Br(p.type, p.key, p.props, null, f.mode, v), v.ref = Nn(f, a, p), v.return = f, f = v);
          }
          return i(f);
        case Kt:
          e: {
            for (N = p.key; a !== null; ) {
              if (a.key === N) if (a.tag === 4 && a.stateNode.containerInfo === p.containerInfo && a.stateNode.implementation === p.implementation) {
                n(f, a.sibling), a = l(a, p.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = oo(p, f.mode, v), a.return = f, f = a;
          }
          return i(f);
        case it:
          return N = p._init, k(f, a, N(p._payload), v);
      }
      if (Dn(p)) return x(f, a, p, v);
      if (kn(p)) return w(f, a, p, v);
      zr(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, p), a.return = f, f = a) : (n(f, a), a = lo(p, f.mode, v), a.return = f, f = a), i(f)) : n(f, a);
  }
  return k;
}
var mn = Sa(!0), xa = Sa(!1), ll = Ct(null), ol = null, tn = null, ki = null;
function Ci() {
  ki = tn = ol = null;
}
function Ei(e) {
  var t = ll.current;
  A(ll), e._currentValue = t;
}
function Mo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function an(e, t) {
  ol = e, ki = tn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (he = !0), e.firstContext = null);
}
function Te(e) {
  var t = e._currentValue;
  if (ki !== e) if (e = { context: e, memoizedValue: t, next: null }, tn === null) {
    if (ol === null) throw Error(S(308));
    tn = e, ol.dependencies = { lanes: 0, firstContext: e };
  } else tn = tn.next = e;
  return t;
}
var Dt = null;
function _i(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
function wa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, _i(t)) : (n.next = l.next, l.next = n), t.interleaved = n, nt(e, r);
}
function nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ut = !1;
function ji(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ka(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function be(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, M & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, nt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, _i(r)) : (t.next = l.next, l.next = t), r.interleaved = t, nt(e, n);
}
function Ur(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fi(e, n);
  }
}
function Lu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function il(e, t, n, r) {
  var l = e.updateQueue;
  ut = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, i === null ? o = c : i.next = c, i = s;
    var y = e.alternate;
    y !== null && (y = y.updateQueue, u = y.lastBaseUpdate, u !== i && (u === null ? y.firstBaseUpdate = c : u.next = c, y.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = l.baseState;
    i = 0, y = c = s = null, u = o;
    do {
      var m = u.lane, g = u.eventTime;
      if ((r & m) === m) {
        y !== null && (y = y.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var x = e, w = u;
          switch (m = t, g = n, w.tag) {
            case 1:
              if (x = w.payload, typeof x == "function") {
                h = x.call(g, h, m);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = w.payload, m = typeof x == "function" ? x.call(g, h, m) : x, m == null) break e;
              h = B({}, h, m);
              break e;
            case 2:
              ut = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else g = { eventTime: g, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, y === null ? (c = y = g, s = h) : y = y.next = g, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (y === null && (s = h), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = y, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    $t |= i, e.lanes = i, e.memoizedState = h;
  }
}
function Du(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
      l.call(r);
    }
  }
}
var fr = {}, Ke = Ct(fr), tr = Ct(fr), nr = Ct(fr);
function Rt(e) {
  if (e === fr) throw Error(S(174));
  return e;
}
function Ni(e, t) {
  switch (U(nr, t), U(tr, e), U(Ke, fr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = yo(t, e);
  }
  A(Ke), U(Ke, t);
}
function hn() {
  A(Ke), A(tr), A(nr);
}
function Ca(e) {
  Rt(nr.current);
  var t = Rt(Ke.current), n = yo(t, e.type);
  t !== n && (U(tr, e), U(Ke, n));
}
function zi(e) {
  tr.current === e && (A(Ke), A(tr));
}
var H = Ct(0);
function ul(e) {
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
var ql = [];
function Pi() {
  for (var e = 0; e < ql.length; e++) ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var $r = lt.ReactCurrentDispatcher, bl = lt.ReactCurrentBatchConfig, Ut = 0, W = null, G = null, q = null, sl = !1, An = !1, rr = 0, pd = 0;
function oe() {
  throw Error(S(321));
}
function Ti(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!$e(e[n], t[n])) return !1;
  return !0;
}
function Li(e, t, n, r, l, o) {
  if (Ut = o, W = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $r.current = e === null || e.memoizedState === null ? vd : gd, e = n(r, l), An) {
    o = 0;
    do {
      if (An = !1, rr = 0, 25 <= o) throw Error(S(301));
      o += 1, q = G = null, t.updateQueue = null, $r.current = Sd, e = n(r, l);
    } while (An);
  }
  if ($r.current = al, t = G !== null && G.next !== null, Ut = 0, q = G = W = null, sl = !1, t) throw Error(S(300));
  return e;
}
function Di() {
  var e = rr !== 0;
  return rr = 0, e;
}
function We() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return q === null ? W.memoizedState = q = e : q = q.next = e, q;
}
function Le() {
  if (G === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = q === null ? W.memoizedState : q.next;
  if (t !== null) q = t, G = e;
  else {
    if (e === null) throw Error(S(310));
    G = e, e = { memoizedState: G.memoizedState, baseState: G.baseState, baseQueue: G.baseQueue, queue: G.queue, next: null }, q === null ? W.memoizedState = q = e : q = q.next = e;
  }
  return q;
}
function lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function eo(e) {
  var t = Le(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = G, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, c = o;
    do {
      var y = c.lane;
      if ((Ut & y) === y) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: y,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = h, i = r) : s = s.next = h, W.lanes |= y, $t |= y;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, $e(r, t.memoizedState) || (he = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, W.lanes |= o, $t |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function to(e) {
  var t = Le(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    $e(o, t.memoizedState) || (he = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Ea() {
}
function _a(e, t) {
  var n = W, r = Le(), l = t(), o = !$e(r.memoizedState, l);
  if (o && (r.memoizedState = l, he = !0), r = r.queue, Ri(za.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || q !== null && q.memoizedState.tag & 1) {
    if (n.flags |= 2048, or(9, Na.bind(null, n, r, l, t), void 0, null), te === null) throw Error(S(349));
    Ut & 30 || ja(n, t, l);
  }
  return l;
}
function ja(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = W.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, W.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Na(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Pa(t) && Ta(e);
}
function za(e, t, n) {
  return n(function() {
    Pa(t) && Ta(e);
  });
}
function Pa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$e(e, n);
  } catch {
    return !0;
  }
}
function Ta(e) {
  var t = nt(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function Ru(e) {
  var t = We();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: lr, lastRenderedState: e }, t.queue = e, e = e.dispatch = yd.bind(null, W, e), [t.memoizedState, e];
}
function or(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = W.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, W.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function La() {
  return Le().memoizedState;
}
function Ar(e, t, n, r) {
  var l = We();
  W.flags |= e, l.memoizedState = or(1 | t, n, void 0, r === void 0 ? null : r);
}
function Cl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (G !== null) {
    var i = G.memoizedState;
    if (o = i.destroy, r !== null && Ti(r, i.deps)) {
      l.memoizedState = or(t, n, o, r);
      return;
    }
  }
  W.flags |= e, l.memoizedState = or(1 | t, n, o, r);
}
function Ou(e, t) {
  return Ar(8390656, 8, e, t);
}
function Ri(e, t) {
  return Cl(2048, 8, e, t);
}
function Da(e, t) {
  return Cl(4, 2, e, t);
}
function Ra(e, t) {
  return Cl(4, 4, e, t);
}
function Oa(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Fa(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Cl(4, 4, Oa.bind(null, t, e), n);
}
function Oi() {
}
function Ma(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ti(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ia(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ti(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ua(e, t, n) {
  return Ut & 21 ? ($e(n, t) || (n = Ws(), W.lanes |= n, $t |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, he = !0), e.memoizedState = n);
}
function md(e, t) {
  var n = I;
  I = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = bl.transition;
  bl.transition = {};
  try {
    e(!1), t();
  } finally {
    I = n, bl.transition = r;
  }
}
function $a() {
  return Le().memoizedState;
}
function hd(e, t, n) {
  var r = gt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Aa(e)) Va(t, n);
  else if (n = wa(e, t, n, r), n !== null) {
    var l = ce();
    Ue(n, e, r, l), Ha(n, t, r);
  }
}
function yd(e, t, n) {
  var r = gt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Aa(e)) Va(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, $e(u, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, _i(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = wa(e, t, l, r), n !== null && (l = ce(), Ue(n, e, r, l), Ha(n, t, r));
  }
}
function Aa(e) {
  var t = e.alternate;
  return e === W || t !== null && t === W;
}
function Va(e, t) {
  An = sl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ha(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fi(e, n);
  }
}
var al = { readContext: Te, useCallback: oe, useContext: oe, useEffect: oe, useImperativeHandle: oe, useInsertionEffect: oe, useLayoutEffect: oe, useMemo: oe, useReducer: oe, useRef: oe, useState: oe, useDebugValue: oe, useDeferredValue: oe, useTransition: oe, useMutableSource: oe, useSyncExternalStore: oe, useId: oe, unstable_isNewReconciler: !1 }, vd = { readContext: Te, useCallback: function(e, t) {
  return We().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Te, useEffect: Ou, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ar(
    4194308,
    4,
    Oa.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ar(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ar(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = We();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = We();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = hd.bind(null, W, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = We();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ru, useDebugValue: Oi, useDeferredValue: function(e) {
  return We().memoizedState = e;
}, useTransition: function() {
  var e = Ru(!1), t = e[0];
  return e = md.bind(null, e[1]), We().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = W, l = We();
  if (V) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), te === null) throw Error(S(349));
    Ut & 30 || ja(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Ou(za.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, or(9, Na.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = We(), t = te.identifierPrefix;
  if (V) {
    var n = qe, r = Je;
    n = (r & ~(1 << 32 - Ie(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = rr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = pd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, gd = {
  readContext: Te,
  useCallback: Ma,
  useContext: Te,
  useEffect: Ri,
  useImperativeHandle: Fa,
  useInsertionEffect: Da,
  useLayoutEffect: Ra,
  useMemo: Ia,
  useReducer: eo,
  useRef: La,
  useState: function() {
    return eo(lr);
  },
  useDebugValue: Oi,
  useDeferredValue: function(e) {
    var t = Le();
    return Ua(t, G.memoizedState, e);
  },
  useTransition: function() {
    var e = eo(lr)[0], t = Le().memoizedState;
    return [e, t];
  },
  useMutableSource: Ea,
  useSyncExternalStore: _a,
  useId: $a,
  unstable_isNewReconciler: !1
}, Sd = { readContext: Te, useCallback: Ma, useContext: Te, useEffect: Ri, useImperativeHandle: Fa, useInsertionEffect: Da, useLayoutEffect: Ra, useMemo: Ia, useReducer: to, useRef: La, useState: function() {
  return to(lr);
}, useDebugValue: Oi, useDeferredValue: function(e) {
  var t = Le();
  return G === null ? t.memoizedState = e : Ua(t, G.memoizedState, e);
}, useTransition: function() {
  var e = to(lr)[0], t = Le().memoizedState;
  return [e, t];
}, useMutableSource: Ea, useSyncExternalStore: _a, useId: $a, unstable_isNewReconciler: !1 };
function Re(e, t) {
  if (e && e.defaultProps) {
    t = B({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Io(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var El = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ht(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = gt(e), o = be(r, l);
  o.payload = t, n != null && (o.callback = n), t = yt(e, o, l), t !== null && (Ue(t, e, l, r), Ur(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = gt(e), o = be(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = yt(e, o, l), t !== null && (Ue(t, e, l, r), Ur(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ce(), r = gt(e), l = be(n, r);
  l.tag = 2, t != null && (l.callback = t), t = yt(e, l, r), t !== null && (Ue(t, e, r, n), Ur(t, e, r));
} };
function Fu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Jn(n, r) || !Jn(l, o) : !0;
}
function Wa(e, t, n) {
  var r = !1, l = wt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Te(o) : (l = ge(t) ? Mt : se.current, r = t.contextTypes, o = (r = r != null) ? dn(e, l) : wt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = El, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Mu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && El.enqueueReplaceState(t, t.state, null);
}
function Uo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ji(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Te(o) : (o = ge(t) ? Mt : se.current, l.context = dn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Io(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && El.enqueueReplaceState(l, l.state, null), il(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function yn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Kc(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function no(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $o(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var xd = typeof WeakMap == "function" ? WeakMap : Map;
function Ba(e, t, n) {
  n = be(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    fl || (fl = !0, Go = r), $o(e, t);
  }, n;
}
function Qa(e, t, n) {
  n = be(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      $o(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    $o(e, t), typeof r != "function" && (vt === null ? vt = /* @__PURE__ */ new Set([this]) : vt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Iu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new xd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Od.bind(null, e, t, n), t.then(e, e));
}
function Uu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $u(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = be(-1, 1), t.tag = 2, yt(n, t, 1))), n.lanes |= 1), e);
}
var wd = lt.ReactCurrentOwner, he = !1;
function ae(e, t, n, r) {
  t.child = e === null ? xa(t, null, n, r) : mn(t, e.child, n, r);
}
function Au(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return an(t, l), r = Li(e, t, n, r, o, l), n = Di(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, rt(e, t, l)) : (V && n && Si(t), t.flags |= 1, ae(e, t, r, l), t.child);
}
function Vu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Hi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ka(e, t, o, r, l)) : (e = Br(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Jn, n(i, r) && e.ref === t.ref) return rt(e, t, l);
  }
  return t.flags |= 1, e = St(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ka(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Jn(o, r) && e.ref === t.ref) if (he = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (he = !0);
    else return t.lanes = e.lanes, rt(e, t, l);
  }
  return Ao(e, t, n, r, l);
}
function Ya(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(rn, xe), xe |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(rn, xe), xe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, U(rn, xe), xe |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(rn, xe), xe |= r;
  return ae(e, t, l, n), t.child;
}
function Xa(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ao(e, t, n, r, l) {
  var o = ge(n) ? Mt : se.current;
  return o = dn(t, o), an(t, l), n = Li(e, t, n, r, o, l), r = Di(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, rt(e, t, l)) : (V && r && Si(t), t.flags |= 1, ae(e, t, n, l), t.child);
}
function Hu(e, t, n, r, l) {
  if (ge(n)) {
    var o = !0;
    tl(t);
  } else o = !1;
  if (an(t, l), t.stateNode === null) Vr(e, t), Wa(t, n, r), Uo(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Te(c) : (c = ge(n) ? Mt : se.current, c = dn(t, c));
    var y = n.getDerivedStateFromProps, h = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && Mu(t, i, r, c), ut = !1;
    var m = t.memoizedState;
    i.state = m, il(t, r, i, l), s = t.memoizedState, u !== r || m !== s || ve.current || ut ? (typeof y == "function" && (Io(t, n, y, r), s = t.memoizedState), (u = ut || Fu(t, n, u, r, m, s, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, ka(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Re(t.type, u), i.props = c, h = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Te(s) : (s = ge(n) ? Mt : se.current, s = dn(t, s));
    var g = n.getDerivedStateFromProps;
    (y = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || m !== s) && Mu(t, i, r, s), ut = !1, m = t.memoizedState, i.state = m, il(t, r, i, l);
    var x = t.memoizedState;
    u !== h || m !== x || ve.current || ut ? (typeof g == "function" && (Io(t, n, g, r), x = t.memoizedState), (c = ut || Fu(t, n, c, r, m, x, s) || !1) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), i.props = r, i.state = x, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Vo(e, t, n, r, o, l);
}
function Vo(e, t, n, r, l, o) {
  Xa(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Nu(t, n, !1), rt(e, t, o);
  r = t.stateNode, wd.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = mn(t, e.child, null, o), t.child = mn(t, null, u, o)) : ae(e, t, u, o), t.memoizedState = r.state, l && Nu(t, n, !0), t.child;
}
function Ga(e) {
  var t = e.stateNode;
  t.pendingContext ? ju(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ju(e, t.context, !1), Ni(e, t.containerInfo);
}
function Wu(e, t, n, r, l) {
  return pn(), wi(l), t.flags |= 256, ae(e, t, n, r), t.child;
}
var Ho = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Za(e, t, n) {
  var r = t.pendingProps, l = H.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), U(H, l & 1), e === null)
    return Fo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Nl(i, r, 0, null), e = Ft(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Wo(n), t.memoizedState = Ho, e) : Fi(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return kd(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = St(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = St(u, o) : (o = Ft(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Wo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Ho, r;
  }
  return o = e.child, e = o.sibling, r = St(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Fi(e, t) {
  return t = Nl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Pr(e, t, n, r) {
  return r !== null && wi(r), mn(t, e.child, null, n), e = Fi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function kd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = no(Error(S(422))), Pr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Nl({ mode: "visible", children: r.children }, l, 0, null), o = Ft(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && mn(t, e.child, null, i), t.child.memoizedState = Wo(i), t.memoizedState = Ho, o);
  if (!(t.mode & 1)) return Pr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(S(419)), r = no(o, r, void 0), Pr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, he || u) {
    if (r = te, r !== null) {
      switch (i & -i) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, nt(e, l), Ue(r, e, l, -1));
    }
    return Vi(), r = no(Error(S(421))), Pr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Fd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, we = ht(l.nextSibling), ke = t, V = !0, Fe = null, e !== null && (je[Ne++] = Je, je[Ne++] = qe, je[Ne++] = It, Je = e.id, qe = e.overflow, It = t), t = Fi(t, r.children), t.flags |= 4096, t);
}
function Bu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mo(e.return, t, n);
}
function ro(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Ja(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ae(e, t, r.children, n), r = H.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Bu(e, n, t);
      else if (e.tag === 19) Bu(e, n, t);
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
  if (U(H, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ul(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ro(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && ul(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ro(t, !0, n, null, o);
      break;
    case "together":
      ro(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Vr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function rt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), $t |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = St(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = St(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Cd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ga(t), pn();
      break;
    case 5:
      Ca(t);
      break;
    case 1:
      ge(t.type) && tl(t);
      break;
    case 4:
      Ni(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      U(ll, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(H, H.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Za(e, t, n) : (U(H, H.current & 1), e = rt(e, t, n), e !== null ? e.sibling : null);
      U(H, H.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ja(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), U(H, H.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ya(e, t, n);
  }
  return rt(e, t, n);
}
var qa, Bo, ba, ec;
qa = function(e, t) {
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
Bo = function() {
};
ba = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Rt(Ke.current);
    var o = null;
    switch (n) {
      case "input":
        l = fo(e, l), r = fo(e, r), o = [];
        break;
      case "select":
        l = B({}, l, { value: void 0 }), r = B({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = ho(e, l), r = ho(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = br);
    }
    vo(n, r);
    var i;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Bn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Bn.hasOwnProperty(c) ? (s != null && c === "onScroll" && $("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ec = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zn(e, t) {
  if (!V) switch (e.tailMode) {
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
function ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Ed(e, t, n) {
  var r = t.pendingProps;
  switch (xi(t), t.tag) {
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
      return ie(t), null;
    case 1:
      return ge(t.type) && el(), ie(t), null;
    case 3:
      return r = t.stateNode, hn(), A(ve), A(se), Pi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Nr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Fe !== null && (qo(Fe), Fe = null))), Bo(e, t), ie(t), null;
    case 5:
      zi(t);
      var l = Rt(nr.current);
      if (n = t.type, e !== null && t.stateNode != null) ba(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return ie(t), null;
        }
        if (e = Rt(Ke.current), Nr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Be] = t, r[er] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < On.length; l++) $(On[l], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $(
                "error",
                r
              ), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              bi(r, o), $("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, $("invalid", r);
              break;
            case "textarea":
              tu(r, o), $("invalid", r);
          }
          vo(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && jr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && jr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Bn.hasOwnProperty(i) && u != null && i === "onScroll" && $("scroll", r);
          }
          switch (n) {
            case "input":
              gr(r), eu(r, o, !0);
              break;
            case "textarea":
              gr(r), nu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = br);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = zs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Be] = t, e[er] = r, qa(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = go(n, r), n) {
              case "dialog":
                $("cancel", e), $("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < On.length; l++) $(On[l], e);
                l = r;
                break;
              case "source":
                $("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                $(
                  "error",
                  e
                ), $("load", e), l = r;
                break;
              case "details":
                $("toggle", e), l = r;
                break;
              case "input":
                bi(e, r), l = fo(e, r), $("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = B({}, r, { value: void 0 }), $("invalid", e);
                break;
              case "textarea":
                tu(e, r), l = ho(e, r), $("invalid", e);
                break;
              default:
                l = r;
            }
            vo(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? Ls(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ps(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Qn(e, s) : typeof s == "number" && Qn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Bn.hasOwnProperty(o) ? s != null && o === "onScroll" && $("scroll", e) : s != null && oi(e, o, s, i));
            }
            switch (n) {
              case "input":
                gr(e), eu(e, r, !1);
                break;
              case "textarea":
                gr(e), nu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? ln(e, !!r.multiple, o, !1) : r.defaultValue != null && ln(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = br);
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
      return ie(t), null;
    case 6:
      if (e && t.stateNode != null) ec(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = Rt(nr.current), Rt(Ke.current), Nr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Be] = t, (o = r.nodeValue !== n) && (e = ke, e !== null)) switch (e.tag) {
            case 3:
              jr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && jr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Be] = t, t.stateNode = r;
      }
      return ie(t), null;
    case 13:
      if (A(H), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (V && we !== null && t.mode & 1 && !(t.flags & 128)) ga(), pn(), t.flags |= 98560, o = !1;
        else if (o = Nr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
            o[Be] = t;
          } else pn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ie(t), o = !1;
        } else Fe !== null && (qo(Fe), Fe = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || H.current & 1 ? Z === 0 && (Z = 3) : Vi())), t.updateQueue !== null && (t.flags |= 4), ie(t), null);
    case 4:
      return hn(), Bo(e, t), e === null && qn(t.stateNode.containerInfo), ie(t), null;
    case 10:
      return Ei(t.type._context), ie(t), null;
    case 17:
      return ge(t.type) && el(), ie(t), null;
    case 19:
      if (A(H), o = t.memoizedState, o === null) return ie(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) zn(o, !1);
      else {
        if (Z !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = ul(e), i !== null) {
            for (t.flags |= 128, zn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return U(H, H.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Y() > vn && (t.flags |= 128, r = !0, zn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ul(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), zn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !V) return ie(t), null;
        } else 2 * Y() - o.renderingStartTime > vn && n !== 1073741824 && (t.flags |= 128, r = !0, zn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Y(), t.sibling = null, n = H.current, U(H, r ? n & 1 | 2 : n & 1), t) : (ie(t), null);
    case 22:
    case 23:
      return Ai(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? xe & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function _d(e, t) {
  switch (xi(t), t.tag) {
    case 1:
      return ge(t.type) && el(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return hn(), A(ve), A(se), Pi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return zi(t), null;
    case 13:
      if (A(H), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        pn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return A(H), null;
    case 4:
      return hn(), null;
    case 10:
      return Ei(t.type._context), null;
    case 22:
    case 23:
      return Ai(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Tr = !1, ue = !1, jd = typeof WeakSet == "function" ? WeakSet : Set, E = null;
function nn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Q(e, t, r);
  }
  else n.current = null;
}
function Qo(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var Qu = !1;
function Nd(e, t) {
  if (zo = Zr, e = oa(), gi(e)) {
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
        var i = 0, u = -1, s = -1, c = 0, y = 0, h = e, m = null;
        t: for (; ; ) {
          for (var g; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (g = h.firstChild) !== null; )
            m = h, h = g;
          for (; ; ) {
            if (h === e) break t;
            if (m === n && ++c === l && (u = i), m === o && ++y === r && (s = i), (g = h.nextSibling) !== null) break;
            h = m, m = h.parentNode;
          }
          h = g;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Po = { focusedElem: e, selectionRange: n }, Zr = !1, E = t; E !== null; ) if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
  else for (; E !== null; ) {
    t = E;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var w = x.memoizedProps, k = x.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Re(t.type, w), k);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var p = t.stateNode.containerInfo;
          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(S(163));
      }
    } catch (v) {
      Q(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, E = e;
      break;
    }
    E = t.return;
  }
  return x = Qu, Qu = !1, x;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Qo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function _l(e, t) {
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
function Ko(e) {
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
function tc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, tc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Be], delete t[er], delete t[Do], delete t[ad], delete t[cd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function nc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ku(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || nc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Yo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = br));
  else if (r !== 4 && (e = e.child, e !== null)) for (Yo(e, t, n), e = e.sibling; e !== null; ) Yo(e, t, n), e = e.sibling;
}
function Xo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Xo(e, t, n), e = e.sibling; e !== null; ) Xo(e, t, n), e = e.sibling;
}
var ne = null, Oe = !1;
function ot(e, t, n) {
  for (n = n.child; n !== null; ) rc(e, t, n), n = n.sibling;
}
function rc(e, t, n) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function") try {
    Qe.onCommitFiberUnmount(vl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ue || nn(n, t);
    case 6:
      var r = ne, l = Oe;
      ne = null, ot(e, t, n), ne = r, Oe = l, ne !== null && (Oe ? (e = ne, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null && (Oe ? (e = ne, n = n.stateNode, e.nodeType === 8 ? Zl(e.parentNode, n) : e.nodeType === 1 && Zl(e, n), Gn(e)) : Zl(ne, n.stateNode));
      break;
    case 4:
      r = ne, l = Oe, ne = n.stateNode.containerInfo, Oe = !0, ot(e, t, n), ne = r, Oe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Qo(n, t, i), l = l.next;
        } while (l !== r);
      }
      ot(e, t, n);
      break;
    case 1:
      if (!ue && (nn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Q(n, t, u);
      }
      ot(e, t, n);
      break;
    case 21:
      ot(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ue = (r = ue) || n.memoizedState !== null, ot(e, t, n), ue = r) : ot(e, t, n);
      break;
    default:
      ot(e, t, n);
  }
}
function Yu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jd()), t.forEach(function(r) {
      var l = Md.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ne = u.stateNode, Oe = !1;
            break e;
          case 3:
            ne = u.stateNode.containerInfo, Oe = !0;
            break e;
          case 4:
            ne = u.stateNode.containerInfo, Oe = !0;
            break e;
        }
        u = u.return;
      }
      if (ne === null) throw Error(S(160));
      rc(o, i, l), ne = null, Oe = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      Q(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) lc(t, e), t = t.sibling;
}
function lc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (De(t, e), Ae(e), r & 4) {
        try {
          Vn(3, e, e.return), _l(3, e);
        } catch (w) {
          Q(e, e.return, w);
        }
        try {
          Vn(5, e, e.return);
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      break;
    case 1:
      De(t, e), Ae(e), r & 512 && n !== null && nn(n, n.return);
      break;
    case 5:
      if (De(t, e), Ae(e), r & 512 && n !== null && nn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Qn(l, "");
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && js(l, o), go(u, i);
          var c = go(u, o);
          for (i = 0; i < s.length; i += 2) {
            var y = s[i], h = s[i + 1];
            y === "style" ? Ls(l, h) : y === "dangerouslySetInnerHTML" ? Ps(l, h) : y === "children" ? Qn(l, h) : oi(l, y, h, c);
          }
          switch (u) {
            case "input":
              po(l, o);
              break;
            case "textarea":
              Ns(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? ln(l, !!o.multiple, g, !1) : m !== !!o.multiple && (o.defaultValue != null ? ln(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : ln(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[er] = o;
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      break;
    case 6:
      if (De(t, e), Ae(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      break;
    case 3:
      if (De(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Gn(t.containerInfo);
      } catch (w) {
        Q(e, e.return, w);
      }
      break;
    case 4:
      De(t, e), Ae(e);
      break;
    case 13:
      De(t, e), Ae(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ui = Y())), r & 4 && Yu(e);
      break;
    case 22:
      if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (ue = (c = ue) || y, De(t, e), ue = c) : De(t, e), Ae(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !y && e.mode & 1) for (E = e, y = e.child; y !== null; ) {
          for (h = E = y; E !== null; ) {
            switch (m = E, g = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Vn(4, m, m.return);
                break;
              case 1:
                nn(m, m.return);
                var x = m.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (w) {
                    Q(r, n, w);
                  }
                }
                break;
              case 5:
                nn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Gu(h);
                  continue;
                }
            }
            g !== null ? (g.return = m, E = g) : Gu(h);
          }
          y = y.sibling;
        }
        e: for (y = null, h = e; ; ) {
          if (h.tag === 5) {
            if (y === null) {
              y = h;
              try {
                l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ts("display", i));
              } catch (w) {
                Q(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (y === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (w) {
              Q(e, e.return, w);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            y === h && (y = null), h = h.return;
          }
          y === h && (y = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      De(t, e), Ae(e), r & 4 && Yu(e);
      break;
    case 21:
      break;
    default:
      De(
        t,
        e
      ), Ae(e);
  }
}
function Ae(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (nc(n)) {
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
          r.flags & 32 && (Qn(l, ""), r.flags &= -33);
          var o = Ku(e);
          Xo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Ku(e);
          Yo(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      Q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zd(e, t, n) {
  E = e, oc(e);
}
function oc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Tr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ue;
        u = Tr;
        var c = ue;
        if (Tr = i, (ue = s) && !c) for (E = l; E !== null; ) i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? Zu(l) : s !== null ? (s.return = i, E = s) : Zu(l);
        for (; o !== null; ) E = o, oc(o), o = o.sibling;
        E = l, Tr = u, ue = c;
      }
      Xu(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : Xu(e);
  }
}
function Xu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ue || _l(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ue) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Re(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Du(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Du(t, i, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
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
                var y = c.memoizedState;
                if (y !== null) {
                  var h = y.dehydrated;
                  h !== null && Gn(h);
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
        ue || t.flags & 512 && Ko(t);
      } catch (m) {
        Q(t, t.return, m);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, E = n;
      break;
    }
    E = t.return;
  }
}
function Gu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, E = n;
      break;
    }
    E = t.return;
  }
}
function Zu(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _l(4, t);
          } catch (s) {
            Q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Q(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ko(t);
          } catch (s) {
            Q(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ko(t);
          } catch (s) {
            Q(t, i, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, E = u;
      break;
    }
    E = t.return;
  }
}
var Pd = Math.ceil, cl = lt.ReactCurrentDispatcher, Mi = lt.ReactCurrentOwner, Pe = lt.ReactCurrentBatchConfig, M = 0, te = null, X = null, re = 0, xe = 0, rn = Ct(0), Z = 0, ir = null, $t = 0, jl = 0, Ii = 0, Hn = null, me = null, Ui = 0, vn = 1 / 0, Ge = null, fl = !1, Go = null, vt = null, Lr = !1, ft = null, dl = 0, Wn = 0, Zo = null, Hr = -1, Wr = 0;
function ce() {
  return M & 6 ? Y() : Hr !== -1 ? Hr : Hr = Y();
}
function gt(e) {
  return e.mode & 1 ? M & 2 && re !== 0 ? re & -re : dd.transition !== null ? (Wr === 0 && (Wr = Ws()), Wr) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zs(e.type)), e) : 1;
}
function Ue(e, t, n, r) {
  if (50 < Wn) throw Wn = 0, Zo = null, Error(S(185));
  sr(e, n, r), (!(M & 2) || e !== te) && (e === te && (!(M & 2) && (jl |= n), Z === 4 && at(e, re)), Se(e, r), n === 1 && M === 0 && !(t.mode & 1) && (vn = Y() + 500, kl && Et()));
}
function Se(e, t) {
  var n = e.callbackNode;
  df(e, t);
  var r = Gr(e, e === te ? re : 0);
  if (r === 0) n !== null && ou(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ou(n), t === 1) e.tag === 0 ? fd(Ju.bind(null, e)) : ha(Ju.bind(null, e)), ud(function() {
      !(M & 6) && Et();
    }), n = null;
    else {
      switch (Bs(r)) {
        case 1:
          n = ci;
          break;
        case 4:
          n = Vs;
          break;
        case 16:
          n = Xr;
          break;
        case 536870912:
          n = Hs;
          break;
        default:
          n = Xr;
      }
      n = pc(n, ic.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ic(e, t) {
  if (Hr = -1, Wr = 0, M & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (cn() && e.callbackNode !== n) return null;
  var r = Gr(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var o = sc();
    (te !== e || re !== t) && (Ge = null, vn = Y() + 500, Ot(e, t));
    do
      try {
        Dd();
        break;
      } catch (u) {
        uc(e, u);
      }
    while (!0);
    Ci(), cl.current = o, M = l, X !== null ? t = 0 : (te = null, re = 0, t = Z);
  }
  if (t !== 0) {
    if (t === 2 && (l = Co(e), l !== 0 && (r = l, t = Jo(e, l))), t === 1) throw n = ir, Ot(e, 0), at(e, r), Se(e, Y()), n;
    if (t === 6) at(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Td(l) && (t = pl(e, r), t === 2 && (o = Co(e), o !== 0 && (r = o, t = Jo(e, o))), t === 1)) throw n = ir, Ot(e, 0), at(e, r), Se(e, Y()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Pt(e, me, Ge);
          break;
        case 3:
          if (at(e, r), (r & 130023424) === r && (t = Ui + 500 - Y(), 10 < t)) {
            if (Gr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ce(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Lo(Pt.bind(null, e, me, Ge), t);
            break;
          }
          Pt(e, me, Ge);
          break;
        case 4:
          if (at(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ie(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = Y() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Lo(Pt.bind(null, e, me, Ge), r);
            break;
          }
          Pt(e, me, Ge);
          break;
        case 5:
          Pt(e, me, Ge);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Se(e, Y()), e.callbackNode === n ? ic.bind(null, e) : null;
}
function Jo(e, t) {
  var n = Hn;
  return e.current.memoizedState.isDehydrated && (Ot(e, t).flags |= 256), e = pl(e, t), e !== 2 && (t = me, me = n, t !== null && qo(t)), e;
}
function qo(e) {
  me === null ? me = e : me.push.apply(me, e);
}
function Td(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!$e(o(), l)) return !1;
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
function at(e, t) {
  for (t &= ~Ii, t &= ~jl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ie(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ju(e) {
  if (M & 6) throw Error(S(327));
  cn();
  var t = Gr(e, 0);
  if (!(t & 1)) return Se(e, Y()), null;
  var n = pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Co(e);
    r !== 0 && (t = r, n = Jo(e, r));
  }
  if (n === 1) throw n = ir, Ot(e, 0), at(e, t), Se(e, Y()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Pt(e, me, Ge), Se(e, Y()), null;
}
function $i(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    M = n, M === 0 && (vn = Y() + 500, kl && Et());
  }
}
function At(e) {
  ft !== null && ft.tag === 0 && !(M & 6) && cn();
  var t = M;
  M |= 1;
  var n = Pe.transition, r = I;
  try {
    if (Pe.transition = null, I = 1, e) return e();
  } finally {
    I = r, Pe.transition = n, M = t, !(M & 6) && Et();
  }
}
function Ai() {
  xe = rn.current, A(rn);
}
function Ot(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, id(n)), X !== null) for (n = X.return; n !== null; ) {
    var r = n;
    switch (xi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && el();
        break;
      case 3:
        hn(), A(ve), A(se), Pi();
        break;
      case 5:
        zi(r);
        break;
      case 4:
        hn();
        break;
      case 13:
        A(H);
        break;
      case 19:
        A(H);
        break;
      case 10:
        Ei(r.type._context);
        break;
      case 22:
      case 23:
        Ai();
    }
    n = n.return;
  }
  if (te = e, X = e = St(e.current, null), re = xe = t, Z = 0, ir = null, Ii = jl = $t = 0, me = Hn = null, Dt !== null) {
    for (t = 0; t < Dt.length; t++) if (n = Dt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    Dt = null;
  }
  return e;
}
function uc(e, t) {
  do {
    var n = X;
    try {
      if (Ci(), $r.current = al, sl) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        sl = !1;
      }
      if (Ut = 0, q = G = W = null, An = !1, rr = 0, Mi.current = null, n === null || n.return === null) {
        Z = 1, ir = t, X = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = re, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, y = u, h = y.tag;
          if (!(y.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = y.alternate;
            m ? (y.updateQueue = m.updateQueue, y.memoizedState = m.memoizedState, y.lanes = m.lanes) : (y.updateQueue = null, y.memoizedState = null);
          }
          var g = Uu(i);
          if (g !== null) {
            g.flags &= -257, $u(g, i, u, o, t), g.mode & 1 && Iu(o, c, t), t = g, s = c;
            var x = t.updateQueue;
            if (x === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), t.updateQueue = w;
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Iu(o, c, t), Vi();
              break e;
            }
            s = Error(S(426));
          }
        } else if (V && u.mode & 1) {
          var k = Uu(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), $u(k, i, u, o, t), wi(yn(s, u));
            break e;
          }
        }
        o = s = yn(s, u), Z !== 4 && (Z = 2), Hn === null ? Hn = [o] : Hn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Ba(o, s, t);
              Lu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (vt === null || !vt.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = Qa(o, u, t);
                Lu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      cc(n);
    } catch (C) {
      t = C, X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function sc() {
  var e = cl.current;
  return cl.current = al, e === null ? al : e;
}
function Vi() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4), te === null || !($t & 268435455) && !(jl & 268435455) || at(te, re);
}
function pl(e, t) {
  var n = M;
  M |= 2;
  var r = sc();
  (te !== e || re !== t) && (Ge = null, Ot(e, t));
  do
    try {
      Ld();
      break;
    } catch (l) {
      uc(e, l);
    }
  while (!0);
  if (Ci(), M = n, cl.current = r, X !== null) throw Error(S(261));
  return te = null, re = 0, Z;
}
function Ld() {
  for (; X !== null; ) ac(X);
}
function Dd() {
  for (; X !== null && !nf(); ) ac(X);
}
function ac(e) {
  var t = dc(e.alternate, e, xe);
  e.memoizedProps = e.pendingProps, t === null ? cc(e) : X = t, Mi.current = null;
}
function cc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = _d(n, t), n !== null) {
        n.flags &= 32767, X = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Z = 6, X = null;
        return;
      }
    } else if (n = Ed(n, t, xe), n !== null) {
      X = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Pt(e, t, n) {
  var r = I, l = Pe.transition;
  try {
    Pe.transition = null, I = 1, Rd(e, t, n, r);
  } finally {
    Pe.transition = l, I = r;
  }
  return null;
}
function Rd(e, t, n, r) {
  do
    cn();
  while (ft !== null);
  if (M & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (pf(e, o), e === te && (X = te = null, re = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Lr || (Lr = !0, pc(Xr, function() {
    return cn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Pe.transition, Pe.transition = null;
    var i = I;
    I = 1;
    var u = M;
    M |= 4, Mi.current = null, Nd(e, n), lc(n, e), bf(Po), Zr = !!zo, Po = zo = null, e.current = n, zd(n), rf(), M = u, I = i, Pe.transition = o;
  } else e.current = n;
  if (Lr && (Lr = !1, ft = e, dl = l), o = e.pendingLanes, o === 0 && (vt = null), uf(n.stateNode), Se(e, Y()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (fl) throw fl = !1, e = Go, Go = null, e;
  return dl & 1 && e.tag !== 0 && cn(), o = e.pendingLanes, o & 1 ? e === Zo ? Wn++ : (Wn = 0, Zo = e) : Wn = 0, Et(), null;
}
function cn() {
  if (ft !== null) {
    var e = Bs(dl), t = Pe.transition, n = I;
    try {
      if (Pe.transition = null, I = 16 > e ? 16 : e, ft === null) var r = !1;
      else {
        if (e = ft, ft = null, dl = 0, M & 6) throw Error(S(331));
        var l = M;
        for (M |= 4, E = e.current; E !== null; ) {
          var o = E, i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (E = c; E !== null; ) {
                  var y = E;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, y, o);
                  }
                  var h = y.child;
                  if (h !== null) h.return = y, E = h;
                  else for (; E !== null; ) {
                    y = E;
                    var m = y.sibling, g = y.return;
                    if (tc(y), y === c) {
                      E = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = g, E = m;
                      break;
                    }
                    E = g;
                  }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var k = w.sibling;
                    w.sibling = null, w = k;
                  } while (w !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, E = i;
          else e: for (; E !== null; ) {
            if (o = E, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Vn(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, E = f;
              break e;
            }
            E = o.return;
          }
        }
        var a = e.current;
        for (E = a; E !== null; ) {
          i = E;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, E = p;
          else e: for (i = a; E !== null; ) {
            if (u = E, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  _l(9, u);
              }
            } catch (C) {
              Q(u, u.return, C);
            }
            if (u === i) {
              E = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, E = v;
              break e;
            }
            E = u.return;
          }
        }
        if (M = l, Et(), Qe && typeof Qe.onPostCommitFiberRoot == "function") try {
          Qe.onPostCommitFiberRoot(vl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      I = n, Pe.transition = t;
    }
  }
  return !1;
}
function qu(e, t, n) {
  t = yn(n, t), t = Ba(e, t, 1), e = yt(e, t, 1), t = ce(), e !== null && (sr(e, 1, t), Se(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) qu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      qu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vt === null || !vt.has(r))) {
        e = yn(n, e), e = Qa(t, e, 1), t = yt(t, e, 1), e = ce(), t !== null && (sr(t, 1, e), Se(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Od(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ce(), e.pingedLanes |= e.suspendedLanes & n, te === e && (re & n) === n && (Z === 4 || Z === 3 && (re & 130023424) === re && 500 > Y() - Ui ? Ot(e, 0) : Ii |= n), Se(e, t);
}
function fc(e, t) {
  t === 0 && (e.mode & 1 ? (t = wr, wr <<= 1, !(wr & 130023424) && (wr = 4194304)) : t = 1);
  var n = ce();
  e = nt(e, t), e !== null && (sr(e, t, n), Se(e, n));
}
function Fd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), fc(e, n);
}
function Md(e, t) {
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
  r !== null && r.delete(t), fc(e, n);
}
var dc;
dc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ve.current) he = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return he = !1, Cd(e, t, n);
    he = !!(e.flags & 131072);
  }
  else he = !1, V && t.flags & 1048576 && ya(t, rl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Vr(e, t), e = t.pendingProps;
      var l = dn(t, se.current);
      an(t, n), l = Li(null, t, r, e, l, n);
      var o = Di();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ge(r) ? (o = !0, tl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ji(t), l.updater = El, t.stateNode = l, l._reactInternals = t, Uo(t, r, e, n), t = Vo(null, t, r, !0, o, n)) : (t.tag = 0, V && o && Si(t), ae(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Vr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Ud(r), e = Re(r, e), l) {
          case 0:
            t = Ao(null, t, r, e, n);
            break e;
          case 1:
            t = Hu(null, t, r, e, n);
            break e;
          case 11:
            t = Au(null, t, r, e, n);
            break e;
          case 14:
            t = Vu(null, t, r, Re(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Ao(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Hu(e, t, r, l, n);
    case 3:
      e: {
        if (Ga(t), e === null) throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, ka(e, t), il(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = yn(Error(S(423)), t), t = Wu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = yn(Error(S(424)), t), t = Wu(e, t, r, n, l);
          break e;
        } else for (we = ht(t.stateNode.containerInfo.firstChild), ke = t, V = !0, Fe = null, n = xa(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (pn(), r === l) {
            t = rt(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ca(t), e === null && Fo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, To(r, l) ? i = null : o !== null && To(r, o) && (t.flags |= 32), Xa(e, t), ae(e, t, i, n), t.child;
    case 6:
      return e === null && Fo(t), null;
    case 13:
      return Za(e, t, n);
    case 4:
      return Ni(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = mn(t, null, r, n) : ae(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Au(e, t, r, l, n);
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, U(ll, r._currentValue), r._currentValue = i, o !== null) if ($e(o.value, i)) {
          if (o.children === l.children && !ve.current) {
            t = rt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = be(-1, n & -n), s.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var y = c.pending;
                    y === null ? s.next = s : (s.next = y.next, y.next = s), c.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Mo(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(S(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Mo(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        ae(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, an(t, n), l = Te(l), r = r(l), t.flags |= 1, ae(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Re(r, t.pendingProps), l = Re(r.type, l), Vu(e, t, r, l, n);
    case 15:
      return Ka(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Vr(e, t), t.tag = 1, ge(r) ? (e = !0, tl(t)) : e = !1, an(t, n), Wa(t, r, l), Uo(t, r, l, n), Vo(null, t, r, !0, e, n);
    case 19:
      return Ja(e, t, n);
    case 22:
      return Ya(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function pc(e, t) {
  return As(e, t);
}
function Id(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ze(e, t, n, r) {
  return new Id(e, t, n, r);
}
function Hi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Ud(e) {
  if (typeof e == "function") return Hi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ui) return 11;
    if (e === si) return 14;
  }
  return 2;
}
function St(e, t) {
  var n = e.alternate;
  return n === null ? (n = ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Br(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Hi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Yt:
      return Ft(n.children, l, o, t);
    case ii:
      i = 8, l |= 8;
      break;
    case uo:
      return e = ze(12, n, t, l | 2), e.elementType = uo, e.lanes = o, e;
    case so:
      return e = ze(13, n, t, l), e.elementType = so, e.lanes = o, e;
    case ao:
      return e = ze(19, n, t, l), e.elementType = ao, e.lanes = o, e;
    case Cs:
      return Nl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ws:
          i = 10;
          break e;
        case ks:
          i = 9;
          break e;
        case ui:
          i = 11;
          break e;
        case si:
          i = 14;
          break e;
        case it:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = ze(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Ft(e, t, n, r) {
  return e = ze(7, e, r, t), e.lanes = n, e;
}
function Nl(e, t, n, r) {
  return e = ze(22, e, r, t), e.elementType = Cs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function lo(e, t, n) {
  return e = ze(6, e, null, t), e.lanes = n, e;
}
function oo(e, t, n) {
  return t = ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function $d(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $l(0), this.expirationTimes = $l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $l(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Wi(e, t, n, r, l, o, i, u, s) {
  return e = new $d(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ze(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ji(o), e;
}
function Ad(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Kt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function mc(e) {
  if (!e) return wt;
  e = e._reactInternals;
  e: {
    if (Ht(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
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
    if (ge(n)) return ma(e, n, t);
  }
  return t;
}
function hc(e, t, n, r, l, o, i, u, s) {
  return e = Wi(n, r, !0, e, l, o, i, u, s), e.context = mc(null), n = e.current, r = ce(), l = gt(n), o = be(r, l), o.callback = t ?? null, yt(n, o, l), e.current.lanes = l, sr(e, l, r), Se(e, r), e;
}
function zl(e, t, n, r) {
  var l = t.current, o = ce(), i = gt(l);
  return n = mc(n), t.context === null ? t.context = n : t.pendingContext = n, t = be(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = yt(l, t, i), e !== null && (Ue(e, l, i, o), Ur(e, l, i)), i;
}
function ml(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bi(e, t) {
  bu(e, t), (e = e.alternate) && bu(e, t);
}
function Vd() {
  return null;
}
var yc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Qi(e) {
  this._internalRoot = e;
}
Pl.prototype.render = Qi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  zl(e, t, null, null);
};
Pl.prototype.unmount = Qi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    At(function() {
      zl(null, e, null, null);
    }), t[tt] = null;
  }
};
function Pl(e) {
  this._internalRoot = e;
}
Pl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ys();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < st.length && t !== 0 && t < st[n].priority; n++) ;
    st.splice(n, 0, e), n === 0 && Gs(e);
  }
};
function Ki(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Tl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function es() {
}
function Hd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = ml(i);
        o.call(c);
      };
    }
    var i = hc(t, r, e, 0, null, !1, !1, "", es);
    return e._reactRootContainer = i, e[tt] = i.current, qn(e.nodeType === 8 ? e.parentNode : e), At(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = ml(s);
      u.call(c);
    };
  }
  var s = Wi(e, 0, !1, null, null, !1, !1, "", es);
  return e._reactRootContainer = s, e[tt] = s.current, qn(e.nodeType === 8 ? e.parentNode : e), At(function() {
    zl(t, s, n, r);
  }), s;
}
function Ll(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = ml(i);
        u.call(s);
      };
    }
    zl(t, i, e, l);
  } else i = Hd(n, t, e, l, r);
  return ml(i);
}
Qs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rn(t.pendingLanes);
        n !== 0 && (fi(t, n | 1), Se(t, Y()), !(M & 6) && (vn = Y() + 500, Et()));
      }
      break;
    case 13:
      At(function() {
        var r = nt(e, 1);
        if (r !== null) {
          var l = ce();
          Ue(r, e, 1, l);
        }
      }), Bi(e, 1);
  }
};
di = function(e) {
  if (e.tag === 13) {
    var t = nt(e, 134217728);
    if (t !== null) {
      var n = ce();
      Ue(t, e, 134217728, n);
    }
    Bi(e, 134217728);
  }
};
Ks = function(e) {
  if (e.tag === 13) {
    var t = gt(e), n = nt(e, t);
    if (n !== null) {
      var r = ce();
      Ue(n, e, t, r);
    }
    Bi(e, t);
  }
};
Ys = function() {
  return I;
};
Xs = function(e, t) {
  var n = I;
  try {
    return I = e, t();
  } finally {
    I = n;
  }
};
xo = function(e, t, n) {
  switch (t) {
    case "input":
      if (po(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = wl(r);
            if (!l) throw Error(S(90));
            _s(r), po(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ns(e, n);
      break;
    case "select":
      t = n.value, t != null && ln(e, !!n.multiple, t, !1);
  }
};
Os = $i;
Fs = At;
var Wd = { usingClientEntryPoint: !1, Events: [cr, Jt, wl, Ds, Rs, $i] }, Pn = { findFiberByHostInstance: Lt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Bd = { bundleType: Pn.bundleType, version: Pn.version, rendererPackageName: Pn.rendererPackageName, rendererConfig: Pn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Us(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Pn.findFiberByHostInstance || Vd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dr.isDisabled && Dr.supportsFiber) try {
    vl = Dr.inject(Bd), Qe = Dr;
  } catch {
  }
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wd;
Ee.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ki(t)) throw Error(S(200));
  return Ad(e, t, null, n);
};
Ee.createRoot = function(e, t) {
  if (!Ki(e)) throw Error(S(299));
  var n = !1, r = "", l = yc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Wi(e, 1, !1, null, null, n, !1, r, l), e[tt] = t.current, qn(e.nodeType === 8 ? e.parentNode : e), new Qi(t);
};
Ee.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Us(t), e = e === null ? null : e.stateNode, e;
};
Ee.flushSync = function(e) {
  return At(e);
};
Ee.hydrate = function(e, t, n) {
  if (!Tl(t)) throw Error(S(200));
  return Ll(null, e, t, !0, n);
};
Ee.hydrateRoot = function(e, t, n) {
  if (!Ki(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = yc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = hc(t, null, e, 1, n ?? null, l, !1, o, i), e[tt] = t.current, qn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Pl(t);
};
Ee.render = function(e, t, n) {
  if (!Tl(t)) throw Error(S(200));
  return Ll(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function(e) {
  if (!Tl(e)) throw Error(S(40));
  return e._reactRootContainer ? (At(function() {
    Ll(null, null, e, !1, function() {
      e._reactRootContainer = null, e[tt] = null;
    });
  }), !0) : !1;
};
Ee.unstable_batchedUpdates = $i;
Ee.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Tl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Ll(e, t, n, !1, r);
};
Ee.version = "18.3.1-next-f1338f8080-20240426";
function vc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vc);
    } catch (e) {
      console.error(e);
    }
}
vc(), vs.exports = Ee;
var Qd = vs.exports, gc, ts = Qd;
gc = ts.createRoot, ts.hydrateRoot;
function Tt(e) {
  if (!e) return "—";
  const [t, n, r] = e.split("-");
  return `${r}/${n}/${t}`;
}
function ye() {
  return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
}
async function Me(e, t) {
  var l, o;
  const n = ((l = document.cookie.split("; ").find((i) => i.startsWith("csrftoken="))) == null ? void 0 : l.split("=")[1]) ?? "", r = await fetch(e, {
    ...t,
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": n,
      ...(t == null ? void 0 : t.headers) ?? {}
    }
  });
  if (!r.ok) {
    const i = await r.json().catch(() => ({})), u = (i == null ? void 0 : i.detail) ?? ((o = i == null ? void 0 : i.non_field_errors) == null ? void 0 : o[0]) ?? `HTTP ${r.status}`;
    throw new Error(u);
  }
  return r.status === 204 ? null : r.json();
}
function ns({ title: e }) {
  return /* @__PURE__ */ d.jsx("h3", { style: {
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
function _t({ msg: e }) {
  return /* @__PURE__ */ d.jsx("div", { style: {
    background: "#fef2f2",
    border: "1px solid #fecaca",
    color: "#b91c1c",
    borderRadius: 4,
    padding: "6px 10px",
    fontSize: "12px",
    marginBottom: 8
  }, children: e });
}
function rs({ label: e, color: t = "#6b7280" }) {
  return /* @__PURE__ */ d.jsx("span", { style: {
    background: t + "1a",
    color: t,
    border: `1px solid ${t}40`,
    borderRadius: 12,
    padding: "1px 8px",
    fontSize: "11px",
    fontWeight: 500
  }, children: e });
}
function Kd({
  apiBase: e,
  stockItemId: t,
  companies: n,
  currentCustodian: r,
  onDone: l,
  onCancel: o
}) {
  const [i, u] = T.useState(""), [s, c] = T.useState(ye()), [y, h] = T.useState(ye()), [m, g] = T.useState(""), [x, w] = T.useState(""), [k, f] = T.useState(!1);
  async function a(v) {
    if (v.preventDefault(), !i) {
      w("Please select a company.");
      return;
    }
    w(""), f(!0);
    try {
      await Me(`${e}/custodians/transfer/`, {
        method: "POST",
        body: JSON.stringify({
          stock_item: t,
          new_company: Number(i),
          old_end_date: s,
          new_start_date: y,
          notes: m
        })
      }), l();
    } catch (C) {
      w(C.message);
    } finally {
      f(!1);
    }
  }
  const p = n.filter((v) => v.id !== (r == null ? void 0 : r.company));
  return /* @__PURE__ */ d.jsxs("form", { onSubmit: a, style: { marginTop: 12 }, children: [
    x && /* @__PURE__ */ d.jsx(_t, { msg: x }),
    r && /* @__PURE__ */ d.jsxs("p", { style: { fontSize: "12px", color: "var(--mantine-color-dimmed, #6b7280)", margin: "0 0 10px" }, children: [
      "Current custodian: ",
      /* @__PURE__ */ d.jsx("strong", { children: r.company_detail.name }),
      " (since ",
      Tt(r.start_date),
      ")"
    ] }),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "New Custodian" }),
    /* @__PURE__ */ d.jsxs("select", { value: i, onChange: (v) => u(v.target.value), style: b, required: !0, children: [
      /* @__PURE__ */ d.jsx("option", { value: "", children: "— select company —" }),
      p.map((v) => /* @__PURE__ */ d.jsx("option", { value: v.id, children: v.name }, v.id))
    ] }),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "Old Custodian End Date" }),
    /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "date",
        value: s,
        onChange: (v) => c(v.target.value),
        style: b,
        required: !0,
        max: ye()
      }
    ),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "New Custodian Start Date" }),
    /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "date",
        value: y,
        onChange: (v) => h(v.target.value),
        style: b,
        required: !0,
        max: ye()
      }
    ),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "Notes (optional)" }),
    /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "text",
        value: m,
        onChange: (v) => g(v.target.value),
        style: b,
        placeholder: "e.g. Volcafe paid invoice #1234"
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 12 }, children: [
      /* @__PURE__ */ d.jsx("button", { type: "submit", disabled: k, style: dr, children: k ? "Transferring…" : "Transfer Custody" }),
      /* @__PURE__ */ d.jsx("button", { type: "button", onClick: o, style: Ye, children: "Cancel" })
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
  const [o, i] = T.useState(""), [u, s] = T.useState(ye()), [c, y] = T.useState(""), [h, m] = T.useState(""), [g, x] = T.useState(!1);
  async function w(k) {
    if (k.preventDefault(), !o) {
      m("Please select a company.");
      return;
    }
    m(""), x(!0);
    try {
      await Me(`${e}/interests/`, {
        method: "POST",
        body: JSON.stringify({
          stock_item: t,
          company: Number(o),
          start_date: u,
          notes: c
        })
      }), r();
    } catch (f) {
      m(f.message);
    } finally {
      x(!1);
    }
  }
  return /* @__PURE__ */ d.jsxs("form", { onSubmit: w, style: { marginTop: 12 }, children: [
    h && /* @__PURE__ */ d.jsx(_t, { msg: h }),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "Company" }),
    /* @__PURE__ */ d.jsxs("select", { value: o, onChange: (k) => i(k.target.value), style: b, required: !0, children: [
      /* @__PURE__ */ d.jsx("option", { value: "", children: "— select company —" }),
      n.map((k) => /* @__PURE__ */ d.jsx("option", { value: k.id, children: k.name }, k.id))
    ] }),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "Start Date" }),
    /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "date",
        value: u,
        onChange: (k) => s(k.target.value),
        style: b,
        required: !0,
        max: ye()
      }
    ),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "Notes (optional)" }),
    /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "text",
        value: c,
        onChange: (k) => y(k.target.value),
        style: b,
        placeholder: "e.g. Agreed purchase pending payment"
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 12 }, children: [
      /* @__PURE__ */ d.jsx("button", { type: "submit", disabled: g, style: dr, children: g ? "Adding…" : "Add Interest" }),
      /* @__PURE__ */ d.jsx("button", { type: "button", onClick: l, style: Ye, children: "Cancel" })
    ] })
  ] });
}
function Xd({
  apiBase: e,
  custodian: t,
  companies: n,
  onDone: r,
  onCancel: l
}) {
  const [o, i] = T.useState(String(t.company)), [u, s] = T.useState(t.start_date), [c, y] = T.useState(t.notes ?? ""), [h, m] = T.useState(""), [g, x] = T.useState(!1);
  async function w(k) {
    k.preventDefault(), m(""), x(!0);
    try {
      await Me(`${e}/custodians/${t.id}/`, {
        method: "PATCH",
        body: JSON.stringify({ company: Number(o), start_date: u, notes: c })
      }), r();
    } catch (f) {
      m(f.message);
    } finally {
      x(!1);
    }
  }
  return /* @__PURE__ */ d.jsxs("form", { onSubmit: w, style: { marginTop: 8 }, children: [
    h && /* @__PURE__ */ d.jsx(_t, { msg: h }),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "Custodian Company" }),
    /* @__PURE__ */ d.jsx("select", { value: o, onChange: (k) => i(k.target.value), style: b, required: !0, children: n.map((k) => /* @__PURE__ */ d.jsx("option", { value: k.id, children: k.name }, k.id)) }),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "Start Date" }),
    /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "date",
        value: u,
        onChange: (k) => s(k.target.value),
        style: b,
        required: !0,
        max: ye()
      }
    ),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "Notes (optional)" }),
    /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "text",
        value: c,
        onChange: (k) => y(k.target.value),
        style: b
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 8 }, children: [
      /* @__PURE__ */ d.jsx("button", { type: "submit", disabled: g, style: dr, children: g ? "Saving…" : "Save Changes" }),
      /* @__PURE__ */ d.jsx("button", { type: "button", onClick: l, style: Ye, children: "Cancel" })
    ] })
  ] });
}
function Gd({
  apiBase: e,
  interest: t,
  companies: n,
  onDone: r,
  onCancel: l
}) {
  const [o, i] = T.useState(String(t.company)), [u, s] = T.useState(t.start_date), [c, y] = T.useState(t.notes ?? ""), [h, m] = T.useState(""), [g, x] = T.useState(!1);
  async function w(k) {
    k.preventDefault(), m(""), x(!0);
    try {
      await Me(`${e}/interests/${t.id}/`, {
        method: "PATCH",
        body: JSON.stringify({ company: Number(o), start_date: u, notes: c })
      }), r();
    } catch (f) {
      m(f.message);
    } finally {
      x(!1);
    }
  }
  return /* @__PURE__ */ d.jsxs("form", { onSubmit: w, style: { marginTop: 8 }, children: [
    h && /* @__PURE__ */ d.jsx(_t, { msg: h }),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "Company" }),
    /* @__PURE__ */ d.jsx("select", { value: o, onChange: (k) => i(k.target.value), style: b, required: !0, children: n.map((k) => /* @__PURE__ */ d.jsx("option", { value: k.id, children: k.name }, k.id)) }),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "Start Date" }),
    /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "date",
        value: u,
        onChange: (k) => s(k.target.value),
        style: b,
        required: !0,
        max: ye()
      }
    ),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "Notes (optional)" }),
    /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "text",
        value: c,
        onChange: (k) => y(k.target.value),
        style: b
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 8 }, children: [
      /* @__PURE__ */ d.jsx("button", { type: "submit", disabled: g, style: dr, children: g ? "Saving…" : "Save Changes" }),
      /* @__PURE__ */ d.jsx("button", { type: "button", onClick: l, style: Ye, children: "Cancel" })
    ] })
  ] });
}
function Zd({
  apiBase: e,
  custodian: t,
  onDone: n,
  onCancel: r
}) {
  const [l, o] = T.useState(ye()), [i, u] = T.useState(""), [s, c] = T.useState(!1);
  async function y(h) {
    h.preventDefault(), u(""), c(!0);
    try {
      await Me(`${e}/custodians/${t.id}/`, {
        method: "PATCH",
        body: JSON.stringify({ end_date: l })
      }), n();
    } catch (m) {
      u(m.message);
    } finally {
      c(!1);
    }
  }
  return /* @__PURE__ */ d.jsxs("form", { onSubmit: y, style: { marginTop: 8 }, children: [
    i && /* @__PURE__ */ d.jsx(_t, { msg: i }),
    /* @__PURE__ */ d.jsxs("p", { style: { fontSize: "12px", color: "var(--mantine-color-dimmed, #6b7280)", margin: "0 0 8px" }, children: [
      "Remove custody for ",
      /* @__PURE__ */ d.jsx("strong", { children: t.company_detail.name })
    ] }),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "End Date" }),
    /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "date",
        value: l,
        onChange: (h) => o(h.target.value),
        style: b,
        required: !0,
        min: t.start_date,
        max: ye()
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 8 }, children: [
      /* @__PURE__ */ d.jsx("button", { type: "submit", disabled: s, style: hl, children: s ? "Removing…" : "Remove Custody" }),
      /* @__PURE__ */ d.jsx("button", { type: "button", onClick: r, style: Ye, children: "Cancel" })
    ] })
  ] });
}
function Jd({
  apiBase: e,
  interest: t,
  onDone: n,
  onCancel: r
}) {
  const [l, o] = T.useState(ye()), [i, u] = T.useState(""), [s, c] = T.useState(!1);
  async function y(h) {
    h.preventDefault(), u(""), c(!0);
    try {
      await Me(`${e}/interests/${t.id}/close/`, {
        method: "POST",
        body: JSON.stringify({ end_date: l })
      }), n();
    } catch (m) {
      u(m.message);
    } finally {
      c(!1);
    }
  }
  return /* @__PURE__ */ d.jsxs("form", { onSubmit: y, style: { marginTop: 8 }, children: [
    i && /* @__PURE__ */ d.jsx(_t, { msg: i }),
    /* @__PURE__ */ d.jsxs("p", { style: { fontSize: "12px", color: "var(--mantine-color-dimmed, #6b7280)", margin: "0 0 8px" }, children: [
      "Close interest for ",
      /* @__PURE__ */ d.jsx("strong", { children: t.company_detail.name })
    ] }),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "End Date" }),
    /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "date",
        value: l,
        onChange: (h) => o(h.target.value),
        style: b,
        required: !0,
        min: t.start_date,
        max: ye()
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 8 }, children: [
      /* @__PURE__ */ d.jsx("button", { type: "submit", disabled: s, style: hl, children: s ? "Closing…" : "Close Interest" }),
      /* @__PURE__ */ d.jsx("button", { type: "button", onClick: r, style: Ye, children: "Cancel" })
    ] })
  ] });
}
function qd({
  apiBase: e,
  stockItemId: t,
  companies: n,
  onDone: r,
  onCancel: l
}) {
  const [o, i] = T.useState(""), [u, s] = T.useState(ye()), [c, y] = T.useState(""), [h, m] = T.useState(""), [g, x] = T.useState(!1);
  async function w(k) {
    if (k.preventDefault(), !o) {
      m("Please select a company.");
      return;
    }
    m(""), x(!0);
    try {
      await Me(`${e}/custodians/`, {
        method: "POST",
        body: JSON.stringify({
          stock_item: t,
          company: Number(o),
          start_date: u,
          notes: c
        })
      }), r();
    } catch (f) {
      m(f.message);
    } finally {
      x(!1);
    }
  }
  return /* @__PURE__ */ d.jsxs("form", { onSubmit: w, style: { marginTop: 12 }, children: [
    h && /* @__PURE__ */ d.jsx(_t, { msg: h }),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "Custodian Company" }),
    /* @__PURE__ */ d.jsxs("select", { value: o, onChange: (k) => i(k.target.value), style: b, required: !0, children: [
      /* @__PURE__ */ d.jsx("option", { value: "", children: "— select company —" }),
      n.map((k) => /* @__PURE__ */ d.jsx("option", { value: k.id, children: k.name }, k.id))
    ] }),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "Start Date" }),
    /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "date",
        value: u,
        onChange: (k) => s(k.target.value),
        style: b,
        required: !0,
        max: ye()
      }
    ),
    /* @__PURE__ */ d.jsx("label", { style: ee, children: "Notes (optional)" }),
    /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "text",
        value: c,
        onChange: (k) => y(k.target.value),
        style: b
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 12 }, children: [
      /* @__PURE__ */ d.jsx("button", { type: "submit", disabled: g, style: dr, children: g ? "Setting…" : "Set Custodian" }),
      /* @__PURE__ */ d.jsx("button", { type: "button", onClick: l, style: Ye, children: "Cancel" })
    ] })
  ] });
}
function bd({ stockItemId: e, apiBase: t }) {
  const [n, r] = T.useState([]), [l, o] = T.useState([]), [i, u] = T.useState([]), [s, c] = T.useState(!0), [y, h] = T.useState(""), [m, g] = T.useState(null), [x, w] = T.useState(!1), [k, f] = T.useState(!1), [a, p] = T.useState(null), [v, C] = T.useState(!1), N = T.useCallback(async () => {
    c(!0), h("");
    try {
      const [P, wn, pr] = await Promise.all([
        Me(`${t}/custodians/?stock_item=${e}`),
        Me(`${t}/interests/?stock_item=${e}`),
        Me("/api/company/?is_customer=true&limit=500")
      ]);
      r(P.results ?? P), o(wn.results ?? wn), u(
        (pr.results ?? pr).map((Wt) => ({ id: Wt.pk, name: Wt.name }))
      );
    } catch (P) {
      h(P.message);
    } finally {
      c(!1);
    }
  }, [t, e]);
  T.useEffect(() => {
    N();
  }, [N]);
  function _() {
    g(null), N();
  }
  async function z() {
    if (a) {
      C(!0);
      try {
        const P = a.type === "custodian" ? "custodians" : "interests";
        await Me(`${t}/${P}/${a.id}/`, { method: "DELETE" }), p(null), N();
      } catch {
        p(null), C(!1);
      }
      C(!1);
    }
  }
  if (s)
    return /* @__PURE__ */ d.jsx("div", { style: { padding: 16, color: "var(--mantine-color-dimmed, #6b7280)", fontSize: 13 }, children: "Loading TRW Storage data…" });
  if (y)
    return /* @__PURE__ */ d.jsxs("div", { style: { padding: 16 }, children: [
      /* @__PURE__ */ d.jsx(_t, { msg: y }),
      /* @__PURE__ */ d.jsx("button", { onClick: N, style: Ye, children: "Retry" })
    ] });
  const F = n.find((P) => P.end_date === null) ?? null, D = n.filter((P) => P.end_date !== null), pe = l.filter((P) => P.end_date === null), Xe = l.filter((P) => P.end_date !== null);
  return /* @__PURE__ */ d.jsxs("div", { style: { padding: "12px 16px", fontFamily: "inherit", fontSize: 13 }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: { marginBottom: 20 }, children: [
      /* @__PURE__ */ d.jsx(ns, { title: "Custodian (Billing Party)" }),
      F ? /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ d.jsx("span", { style: { fontWeight: 600, color: "var(--mantine-color-text, #111)" }, children: F.company_detail.name }),
        /* @__PURE__ */ d.jsx(rs, { label: `since ${Tt(F.start_date)}`, color: "#2563eb" }),
        F.notes && /* @__PURE__ */ d.jsx("span", { style: { color: "var(--mantine-color-dimmed, #9ca3af)", fontSize: 11 }, children: F.notes })
      ] }) : /* @__PURE__ */ d.jsx("p", { style: { color: "var(--mantine-color-dimmed, #9ca3af)", fontSize: 12, margin: "0 0 8px" }, children: "No custodian assigned." }),
      m === "transfer-custody" && /* @__PURE__ */ d.jsx(
        Kd,
        {
          apiBase: t,
          stockItemId: e,
          companies: i,
          currentCustodian: F,
          onDone: _,
          onCancel: () => g(null)
        }
      ),
      m === "remove-custody" && F && /* @__PURE__ */ d.jsx(
        Zd,
        {
          apiBase: t,
          custodian: F,
          onDone: _,
          onCancel: () => g(null)
        }
      ),
      m === "edit-custodian" && F && /* @__PURE__ */ d.jsx(
        Xd,
        {
          apiBase: t,
          custodian: F,
          companies: i,
          onDone: _,
          onCancel: () => g(null)
        }
      ),
      m === "set-custodian" && /* @__PURE__ */ d.jsx(
        qd,
        {
          apiBase: t,
          stockItemId: e,
          companies: i,
          onDone: _,
          onCancel: () => g(null)
        }
      ),
      m === null && /* @__PURE__ */ d.jsx("div", { style: { display: "flex", gap: 8, marginBottom: 4 }, children: F ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx("button", { onClick: () => g("transfer-custody"), style: Tn, children: "Transfer Custody" }),
        /* @__PURE__ */ d.jsx("button", { onClick: () => g("edit-custodian"), style: Tn, children: "Edit" }),
        /* @__PURE__ */ d.jsx("button", { onClick: () => g("remove-custody"), style: { ...Tn, color: "#dc2626", borderColor: "#fca5a5" }, children: "Remove Custody" })
      ] }) : /* @__PURE__ */ d.jsx("button", { onClick: () => g("set-custodian"), style: Tn, children: "Set Custodian" }) }),
      D.length > 0 && /* @__PURE__ */ d.jsxs("div", { style: { marginTop: 8 }, children: [
        /* @__PURE__ */ d.jsxs(
          "button",
          {
            onClick: () => w((P) => !P),
            style: { ...Qt, fontSize: 11 },
            children: [
              x ? "Hide" : "Show",
              " history (",
              D.length,
              ")"
            ]
          }
        ),
        x && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          (a == null ? void 0 : a.type) === "custodian" && /* @__PURE__ */ d.jsxs("div", { style: ls, children: [
            /* @__PURE__ */ d.jsxs("span", { children: [
              "Delete ",
              /* @__PURE__ */ d.jsx("strong", { children: a.name }),
              " record permanently?"
            ] }),
            /* @__PURE__ */ d.jsx("button", { onClick: z, disabled: v, style: { ...hl, padding: "2px 8px", fontSize: 11 }, children: v ? "Deleting…" : "Delete" }),
            /* @__PURE__ */ d.jsx("button", { onClick: () => p(null), style: { ...Ye, padding: "2px 8px", fontSize: 11 }, children: "Cancel" })
          ] }),
          /* @__PURE__ */ d.jsxs("table", { style: os, children: [
            /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsxs("tr", { children: [
              /* @__PURE__ */ d.jsx("th", { style: Ve, children: "Company" }),
              /* @__PURE__ */ d.jsx("th", { style: Ve, children: "From" }),
              /* @__PURE__ */ d.jsx("th", { style: Ve, children: "To" }),
              /* @__PURE__ */ d.jsx("th", { style: Ve, children: "Notes" }),
              /* @__PURE__ */ d.jsx("th", { style: Ve })
            ] }) }),
            /* @__PURE__ */ d.jsx("tbody", { children: D.map((P) => /* @__PURE__ */ d.jsxs("tr", { children: [
              /* @__PURE__ */ d.jsx("td", { style: He, children: P.company_detail.name }),
              /* @__PURE__ */ d.jsx("td", { style: He, children: Tt(P.start_date) }),
              /* @__PURE__ */ d.jsx("td", { style: He, children: Tt(P.end_date) }),
              /* @__PURE__ */ d.jsx("td", { style: { ...He, color: "var(--mantine-color-dimmed, #9ca3af)" }, children: P.notes || "—" }),
              /* @__PURE__ */ d.jsx("td", { style: He, children: /* @__PURE__ */ d.jsx(
                "button",
                {
                  onClick: () => p({ type: "custodian", id: P.id, name: P.company_detail.name }),
                  style: { ...Qt, color: "#dc2626", fontSize: 11 },
                  children: "Delete"
                }
              ) })
            ] }, P.id)) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx(ns, { title: "Interests" }),
      pe.length === 0 && /* @__PURE__ */ d.jsx("p", { style: { color: "var(--mantine-color-dimmed, #9ca3af)", fontSize: 12, margin: "0 0 8px" }, children: "No active interests." }),
      pe.map((P) => /* @__PURE__ */ d.jsxs("div", { style: { marginBottom: 8 }, children: [
        /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ d.jsx("span", { style: { fontWeight: 600, color: "var(--mantine-color-text, #111)", minWidth: 140 }, children: P.company_detail.name }),
          /* @__PURE__ */ d.jsx(rs, { label: `since ${Tt(P.start_date)}`, color: "#059669" }),
          P.notes && /* @__PURE__ */ d.jsx("span", { style: { color: "var(--mantine-color-dimmed, #9ca3af)", fontSize: 11 }, children: P.notes }),
          m === null && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
            /* @__PURE__ */ d.jsx(
              "button",
              {
                onClick: () => g({ type: "edit-interest", interest: P }),
                style: { ...Qt, fontSize: 11 },
                children: "Edit"
              }
            ),
            /* @__PURE__ */ d.jsx(
              "button",
              {
                onClick: () => g({ type: "close-interest", interest: P }),
                style: { ...Qt, color: "#dc2626", fontSize: 11 },
                children: "Close"
              }
            )
          ] })
        ] }),
        typeof m == "object" && m !== null && m.type === "close-interest" && m.interest.id === P.id && /* @__PURE__ */ d.jsx(
          Jd,
          {
            apiBase: t,
            interest: P,
            onDone: _,
            onCancel: () => g(null)
          }
        ),
        typeof m == "object" && m !== null && m.type === "edit-interest" && m.interest.id === P.id && /* @__PURE__ */ d.jsx(
          Gd,
          {
            apiBase: t,
            interest: P,
            companies: i,
            onDone: _,
            onCancel: () => g(null)
          }
        )
      ] }, P.id)),
      m === "add-interest" && /* @__PURE__ */ d.jsx(
        Yd,
        {
          apiBase: t,
          stockItemId: e,
          companies: i,
          onDone: _,
          onCancel: () => g(null)
        }
      ),
      m === null && /* @__PURE__ */ d.jsx("button", { onClick: () => g("add-interest"), style: { ...Tn, marginTop: 4 }, children: "Add Interest" }),
      Xe.length > 0 && /* @__PURE__ */ d.jsxs("div", { style: { marginTop: 8 }, children: [
        /* @__PURE__ */ d.jsxs(
          "button",
          {
            onClick: () => f((P) => !P),
            style: { ...Qt, fontSize: 11 },
            children: [
              k ? "Hide" : "Show",
              " closed interests (",
              Xe.length,
              ")"
            ]
          }
        ),
        k && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          (a == null ? void 0 : a.type) === "interest" && /* @__PURE__ */ d.jsxs("div", { style: ls, children: [
            /* @__PURE__ */ d.jsxs("span", { children: [
              "Delete ",
              /* @__PURE__ */ d.jsx("strong", { children: a.name }),
              " record permanently?"
            ] }),
            /* @__PURE__ */ d.jsx("button", { onClick: z, disabled: v, style: { ...hl, padding: "2px 8px", fontSize: 11 }, children: v ? "Deleting…" : "Delete" }),
            /* @__PURE__ */ d.jsx("button", { onClick: () => p(null), style: { ...Ye, padding: "2px 8px", fontSize: 11 }, children: "Cancel" })
          ] }),
          /* @__PURE__ */ d.jsxs("table", { style: os, children: [
            /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsxs("tr", { children: [
              /* @__PURE__ */ d.jsx("th", { style: Ve, children: "Company" }),
              /* @__PURE__ */ d.jsx("th", { style: Ve, children: "From" }),
              /* @__PURE__ */ d.jsx("th", { style: Ve, children: "To" }),
              /* @__PURE__ */ d.jsx("th", { style: Ve, children: "Notes" }),
              /* @__PURE__ */ d.jsx("th", { style: Ve })
            ] }) }),
            /* @__PURE__ */ d.jsx("tbody", { children: Xe.map((P) => /* @__PURE__ */ d.jsxs("tr", { children: [
              /* @__PURE__ */ d.jsx("td", { style: He, children: P.company_detail.name }),
              /* @__PURE__ */ d.jsx("td", { style: He, children: Tt(P.start_date) }),
              /* @__PURE__ */ d.jsx("td", { style: He, children: Tt(P.end_date) }),
              /* @__PURE__ */ d.jsx("td", { style: { ...He, color: "var(--mantine-color-dimmed, #9ca3af)" }, children: P.notes || "—" }),
              /* @__PURE__ */ d.jsx("td", { style: He, children: /* @__PURE__ */ d.jsx(
                "button",
                {
                  onClick: () => p({ type: "interest", id: P.id, name: P.company_detail.name }),
                  style: { ...Qt, color: "#dc2626", fontSize: 11 },
                  children: "Delete"
                }
              ) })
            ] }, P.id)) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const b = {
  display: "block",
  width: "100%",
  maxWidth: 320,
  padding: "5px 8px",
  border: "1px solid var(--mantine-color-default-border, #d1d5db)",
  borderRadius: 4,
  fontSize: 12,
  marginBottom: 8,
  boxSizing: "border-box",
  background: "var(--mantine-color-body, #fff)",
  color: "var(--mantine-color-text, #111)"
}, ee = {
  display: "block",
  fontSize: 11,
  fontWeight: 600,
  color: "var(--mantine-color-dimmed, #374151)",
  marginBottom: 2,
  textTransform: "uppercase",
  letterSpacing: "0.04em"
}, dr = {
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: 4,
  padding: "5px 12px",
  fontSize: 12,
  cursor: "pointer",
  fontWeight: 500
}, Ye = {
  background: "var(--mantine-color-default, #f3f4f6)",
  color: "var(--mantine-color-text, #374151)",
  border: "1px solid var(--mantine-color-default-border, #d1d5db)",
  borderRadius: 4,
  padding: "5px 12px",
  fontSize: 12,
  cursor: "pointer"
}, hl = {
  background: "#dc2626",
  color: "#fff",
  border: "none",
  borderRadius: 4,
  padding: "5px 12px",
  fontSize: 12,
  cursor: "pointer",
  fontWeight: 500
}, Tn = {
  background: "var(--mantine-color-default, #f3f4f6)",
  color: "var(--mantine-color-text, #374151)",
  border: "1px solid var(--mantine-color-default-border, #d1d5db)",
  borderRadius: 4,
  padding: "3px 10px",
  fontSize: 11,
  cursor: "pointer"
}, Qt = {
  background: "none",
  border: "none",
  color: "#2563eb",
  cursor: "pointer",
  padding: 0,
  textDecoration: "underline",
  fontSize: 12
}, ls = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  background: "#fef2f2",
  border: "1px solid #fecaca",
  borderRadius: 4,
  padding: "5px 8px",
  fontSize: 12,
  marginTop: 6,
  marginBottom: 4,
  color: "#b91c1c"
}, os = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: 6,
  fontSize: 11
}, Ve = {
  textAlign: "left",
  padding: "3px 6px",
  borderBottom: "1px solid var(--mantine-color-default-border, #e5e7eb)",
  color: "var(--mantine-color-dimmed, #6b7280)",
  fontWeight: 600
}, He = {
  padding: "3px 6px",
  borderBottom: "1px solid var(--mantine-color-default-border, #f3f4f6)",
  color: "var(--mantine-color-text, #374151)"
};
function ep(e, t) {
  const n = (t == null ? void 0 : t.context) ?? t;
  gc(e).render(/* @__PURE__ */ d.jsx(bd, { ...n }));
}
export {
  ep as renderPanel
};
