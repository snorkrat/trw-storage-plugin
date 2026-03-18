var RE = { exports: {} }, av = {}, TE = { exports: {} }, Ct = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uT;
function oD() {
  if (uT) return Ct;
  uT = 1;
  var q = Symbol.for("react.element"), B = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), Be = Symbol.for("react.strict_mode"), Xe = Symbol.for("react.profiler"), We = Symbol.for("react.provider"), S = Symbol.for("react.context"), it = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), re = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), J = Symbol.iterator;
  function ne(_) {
    return _ === null || typeof _ != "object" ? null : (_ = J && _[J] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var Z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Oe = Object.assign, nt = {};
  function ge(_, P, Qe) {
    this.props = _, this.context = P, this.refs = nt, this.updater = Qe || Z;
  }
  ge.prototype.isReactComponent = {}, ge.prototype.setState = function(_, P) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, P, "setState");
  }, ge.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function Mt() {
  }
  Mt.prototype = ge.prototype;
  function Le(_, P, Qe) {
    this.props = _, this.context = P, this.refs = nt, this.updater = Qe || Z;
  }
  var He = Le.prototype = new Mt();
  He.constructor = Le, Oe(He, ge.prototype), He.isPureReactComponent = !0;
  var et = Array.isArray, be = Object.prototype.hasOwnProperty, ut = { current: null }, je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Re(_, P, Qe) {
    var Ie, vt = {}, ct = null, ot = null;
    if (P != null) for (Ie in P.ref !== void 0 && (ot = P.ref), P.key !== void 0 && (ct = "" + P.key), P) be.call(P, Ie) && !je.hasOwnProperty(Ie) && (vt[Ie] = P[Ie]);
    var ft = arguments.length - 2;
    if (ft === 1) vt.children = Qe;
    else if (1 < ft) {
      for (var ht = Array(ft), Wt = 0; Wt < ft; Wt++) ht[Wt] = arguments[Wt + 2];
      vt.children = ht;
    }
    if (_ && _.defaultProps) for (Ie in ft = _.defaultProps, ft) vt[Ie] === void 0 && (vt[Ie] = ft[Ie]);
    return { $$typeof: q, type: _, key: ct, ref: ot, props: vt, _owner: ut.current };
  }
  function Dt(_, P) {
    return { $$typeof: q, type: _.type, key: P, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function $t(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === q;
  }
  function Qt(_) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(Qe) {
      return P[Qe];
    });
  }
  var kt = /\/+/g;
  function ze(_, P) {
    return typeof _ == "object" && _ !== null && _.key != null ? Qt("" + _.key) : P.toString(36);
  }
  function Pt(_, P, Qe, Ie, vt) {
    var ct = typeof _;
    (ct === "undefined" || ct === "boolean") && (_ = null);
    var ot = !1;
    if (_ === null) ot = !0;
    else switch (ct) {
      case "string":
      case "number":
        ot = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case q:
          case B:
            ot = !0;
        }
    }
    if (ot) return ot = _, vt = vt(ot), _ = Ie === "" ? "." + ze(ot, 0) : Ie, et(vt) ? (Qe = "", _ != null && (Qe = _.replace(kt, "$&/") + "/"), Pt(vt, P, Qe, "", function(Wt) {
      return Wt;
    })) : vt != null && ($t(vt) && (vt = Dt(vt, Qe + (!vt.key || ot && ot.key === vt.key ? "" : ("" + vt.key).replace(kt, "$&/") + "/") + _)), P.push(vt)), 1;
    if (ot = 0, Ie = Ie === "" ? "." : Ie + ":", et(_)) for (var ft = 0; ft < _.length; ft++) {
      ct = _[ft];
      var ht = Ie + ze(ct, ft);
      ot += Pt(ct, P, Qe, ht, vt);
    }
    else if (ht = ne(_), typeof ht == "function") for (_ = ht.call(_), ft = 0; !(ct = _.next()).done; ) ct = ct.value, ht = Ie + ze(ct, ft++), ot += Pt(ct, P, Qe, ht, vt);
    else if (ct === "object") throw P = String(_), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return ot;
  }
  function Ot(_, P, Qe) {
    if (_ == null) return _;
    var Ie = [], vt = 0;
    return Pt(_, Ie, "", "", function(ct) {
      return P.call(Qe, ct, vt++);
    }), Ie;
  }
  function Nt(_) {
    if (_._status === -1) {
      var P = _._result;
      P = P(), P.then(function(Qe) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = Qe);
      }, function(Qe) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = Qe);
      }), _._status === -1 && (_._status = 0, _._result = P);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var xe = { current: null }, te = { transition: null }, we = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: te, ReactCurrentOwner: ut };
  function ue() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ct.Children = { map: Ot, forEach: function(_, P, Qe) {
    Ot(_, function() {
      P.apply(this, arguments);
    }, Qe);
  }, count: function(_) {
    var P = 0;
    return Ot(_, function() {
      P++;
    }), P;
  }, toArray: function(_) {
    return Ot(_, function(P) {
      return P;
    }) || [];
  }, only: function(_) {
    if (!$t(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Ct.Component = ge, Ct.Fragment = N, Ct.Profiler = Xe, Ct.PureComponent = Le, Ct.StrictMode = Be, Ct.Suspense = ie, Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, Ct.act = ue, Ct.cloneElement = function(_, P, Qe) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ie = Oe({}, _.props), vt = _.key, ct = _.ref, ot = _._owner;
    if (P != null) {
      if (P.ref !== void 0 && (ct = P.ref, ot = ut.current), P.key !== void 0 && (vt = "" + P.key), _.type && _.type.defaultProps) var ft = _.type.defaultProps;
      for (ht in P) be.call(P, ht) && !je.hasOwnProperty(ht) && (Ie[ht] = P[ht] === void 0 && ft !== void 0 ? ft[ht] : P[ht]);
    }
    var ht = arguments.length - 2;
    if (ht === 1) Ie.children = Qe;
    else if (1 < ht) {
      ft = Array(ht);
      for (var Wt = 0; Wt < ht; Wt++) ft[Wt] = arguments[Wt + 2];
      Ie.children = ft;
    }
    return { $$typeof: q, type: _.type, key: vt, ref: ct, props: Ie, _owner: ot };
  }, Ct.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: We, _context: _ }, _.Consumer = _;
  }, Ct.createElement = Re, Ct.createFactory = function(_) {
    var P = Re.bind(null, _);
    return P.type = _, P;
  }, Ct.createRef = function() {
    return { current: null };
  }, Ct.forwardRef = function(_) {
    return { $$typeof: it, render: _ };
  }, Ct.isValidElement = $t, Ct.lazy = function(_) {
    return { $$typeof: Ye, _payload: { _status: -1, _result: _ }, _init: Nt };
  }, Ct.memo = function(_, P) {
    return { $$typeof: re, type: _, compare: P === void 0 ? null : P };
  }, Ct.startTransition = function(_) {
    var P = te.transition;
    te.transition = {};
    try {
      _();
    } finally {
      te.transition = P;
    }
  }, Ct.unstable_act = ue, Ct.useCallback = function(_, P) {
    return xe.current.useCallback(_, P);
  }, Ct.useContext = function(_) {
    return xe.current.useContext(_);
  }, Ct.useDebugValue = function() {
  }, Ct.useDeferredValue = function(_) {
    return xe.current.useDeferredValue(_);
  }, Ct.useEffect = function(_, P) {
    return xe.current.useEffect(_, P);
  }, Ct.useId = function() {
    return xe.current.useId();
  }, Ct.useImperativeHandle = function(_, P, Qe) {
    return xe.current.useImperativeHandle(_, P, Qe);
  }, Ct.useInsertionEffect = function(_, P) {
    return xe.current.useInsertionEffect(_, P);
  }, Ct.useLayoutEffect = function(_, P) {
    return xe.current.useLayoutEffect(_, P);
  }, Ct.useMemo = function(_, P) {
    return xe.current.useMemo(_, P);
  }, Ct.useReducer = function(_, P, Qe) {
    return xe.current.useReducer(_, P, Qe);
  }, Ct.useRef = function(_) {
    return xe.current.useRef(_);
  }, Ct.useState = function(_) {
    return xe.current.useState(_);
  }, Ct.useSyncExternalStore = function(_, P, Qe) {
    return xe.current.useSyncExternalStore(_, P, Qe);
  }, Ct.useTransition = function() {
    return xe.current.useTransition();
  }, Ct.version = "18.3.1", Ct;
}
var lv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
lv.exports;
var oT;
function sD() {
  return oT || (oT = 1, function(q, B) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var N = "18.3.1", Be = Symbol.for("react.element"), Xe = Symbol.for("react.portal"), We = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), it = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), re = Symbol.for("react.context"), Ye = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), Oe = Symbol.for("react.lazy"), nt = Symbol.for("react.offscreen"), ge = Symbol.iterator, Mt = "@@iterator";
      function Le(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = ge && h[ge] || h[Mt];
        return typeof C == "function" ? C : null;
      }
      var He = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, et = {
        transition: null
      }, be = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ut = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, je = {}, Re = null;
      function Dt(h) {
        Re = h;
      }
      je.setExtraStackFrame = function(h) {
        Re = h;
      }, je.getCurrentStack = null, je.getStackAddendum = function() {
        var h = "";
        Re && (h += Re);
        var C = je.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var $t = !1, Qt = !1, kt = !1, ze = !1, Pt = !1, Ot = {
        ReactCurrentDispatcher: He,
        ReactCurrentBatchConfig: et,
        ReactCurrentOwner: ut
      };
      Ot.ReactDebugCurrentFrame = je, Ot.ReactCurrentActQueue = be;
      function Nt(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            z[j - 1] = arguments[j];
          te("warn", h, z);
        }
      }
      function xe(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            z[j - 1] = arguments[j];
          te("error", h, z);
        }
      }
      function te(h, C, z) {
        {
          var j = Ot.ReactDebugCurrentFrame, ee = j.getStackAddendum();
          ee !== "" && (C += "%s", z = z.concat([ee]));
          var Ue = z.map(function(oe) {
            return String(oe);
          });
          Ue.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ue);
        }
      }
      var we = {};
      function ue(h, C) {
        {
          var z = h.constructor, j = z && (z.displayName || z.name) || "ReactClass", ee = j + "." + C;
          if (we[ee])
            return;
          xe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), we[ee] = !0;
        }
      }
      var _ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, z) {
          ue(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, z, j) {
          ue(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, z, j) {
          ue(h, "setState");
        }
      }, P = Object.assign, Qe = {};
      Object.freeze(Qe);
      function Ie(h, C, z) {
        this.props = h, this.context = C, this.refs = Qe, this.updater = z || _;
      }
      Ie.prototype.isReactComponent = {}, Ie.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ie.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var vt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ct = function(h, C) {
          Object.defineProperty(Ie.prototype, h, {
            get: function() {
              Nt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ot in vt)
          vt.hasOwnProperty(ot) && ct(ot, vt[ot]);
      }
      function ft() {
      }
      ft.prototype = Ie.prototype;
      function ht(h, C, z) {
        this.props = h, this.context = C, this.refs = Qe, this.updater = z || _;
      }
      var Wt = ht.prototype = new ft();
      Wt.constructor = ht, P(Wt, Ie.prototype), Wt.isPureReactComponent = !0;
      function Ln() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var wr = Array.isArray;
      function Rn(h) {
        return wr(h);
      }
      function rr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Bn(h) {
        try {
          return Yn(h), !1;
        } catch {
          return !0;
        }
      }
      function Yn(h) {
        return "" + h;
      }
      function $r(h) {
        if (Bn(h))
          return xe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(h)), Yn(h);
      }
      function ci(h, C, z) {
        var j = h.displayName;
        if (j)
          return j;
        var ee = C.displayName || C.name || "";
        return ee !== "" ? z + "(" + ee + ")" : z;
      }
      function sa(h) {
        return h.displayName || "Context";
      }
      function Xn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && xe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case We:
            return "Fragment";
          case Xe:
            return "Portal";
          case it:
            return "Profiler";
          case S:
            return "StrictMode";
          case J:
            return "Suspense";
          case ne:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case re:
              var C = h;
              return sa(C) + ".Consumer";
            case ie:
              var z = h;
              return sa(z._context) + ".Provider";
            case Ye:
              return ci(h, h.render, "ForwardRef");
            case Z:
              var j = h.displayName || null;
              return j !== null ? j : Xn(h.type) || "Memo";
            case Oe: {
              var ee = h, Ue = ee._payload, oe = ee._init;
              try {
                return Xn(oe(Ue));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Tn = Object.prototype.hasOwnProperty, In = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Sr, $a, Mn;
      Mn = {};
      function Er(h) {
        if (Tn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function ca(h) {
        if (Tn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Wa(h, C) {
        var z = function() {
          Sr || (Sr = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function fi(h, C) {
        var z = function() {
          $a || ($a = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function ae(h) {
        if (typeof h.ref == "string" && ut.current && h.__self && ut.current.stateNode !== h.__self) {
          var C = Xn(ut.current.type);
          Mn[C] || (xe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Mn[C] = !0);
        }
      }
      var _e = function(h, C, z, j, ee, Ue, oe) {
        var Pe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Be,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: oe,
          // Record the component responsible for creating this element.
          _owner: Ue
        };
        return Pe._store = {}, Object.defineProperty(Pe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Pe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(Pe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ee
        }), Object.freeze && (Object.freeze(Pe.props), Object.freeze(Pe)), Pe;
      };
      function dt(h, C, z) {
        var j, ee = {}, Ue = null, oe = null, Pe = null, St = null;
        if (C != null) {
          Er(C) && (oe = C.ref, ae(C)), ca(C) && ($r(C.key), Ue = "" + C.key), Pe = C.__self === void 0 ? null : C.__self, St = C.__source === void 0 ? null : C.__source;
          for (j in C)
            Tn.call(C, j) && !In.hasOwnProperty(j) && (ee[j] = C[j]);
        }
        var _t = arguments.length - 2;
        if (_t === 1)
          ee.children = z;
        else if (_t > 1) {
          for (var un = Array(_t), Kt = 0; Kt < _t; Kt++)
            un[Kt] = arguments[Kt + 2];
          Object.freeze && Object.freeze(un), ee.children = un;
        }
        if (h && h.defaultProps) {
          var pt = h.defaultProps;
          for (j in pt)
            ee[j] === void 0 && (ee[j] = pt[j]);
        }
        if (Ue || oe) {
          var Jt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ue && Wa(ee, Jt), oe && fi(ee, Jt);
        }
        return _e(h, Ue, oe, Pe, St, ut.current, ee);
      }
      function Vt(h, C) {
        var z = _e(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function rn(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, ee = P({}, h.props), Ue = h.key, oe = h.ref, Pe = h._self, St = h._source, _t = h._owner;
        if (C != null) {
          Er(C) && (oe = C.ref, _t = ut.current), ca(C) && ($r(C.key), Ue = "" + C.key);
          var un;
          h.type && h.type.defaultProps && (un = h.type.defaultProps);
          for (j in C)
            Tn.call(C, j) && !In.hasOwnProperty(j) && (C[j] === void 0 && un !== void 0 ? ee[j] = un[j] : ee[j] = C[j]);
        }
        var Kt = arguments.length - 2;
        if (Kt === 1)
          ee.children = z;
        else if (Kt > 1) {
          for (var pt = Array(Kt), Jt = 0; Jt < Kt; Jt++)
            pt[Jt] = arguments[Jt + 2];
          ee.children = pt;
        }
        return _e(h.type, Ue, oe, Pe, St, _t, ee);
      }
      function hn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Be;
      }
      var sn = ".", Kn = ":";
      function an(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(ee) {
          return z[ee];
        });
        return "$" + j;
      }
      var Gt = !1, qt = /\/+/g;
      function fa(h) {
        return h.replace(qt, "$&/");
      }
      function Cr(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? ($r(h.key), an("" + h.key)) : C.toString(36);
      }
      function xa(h, C, z, j, ee) {
        var Ue = typeof h;
        (Ue === "undefined" || Ue === "boolean") && (h = null);
        var oe = !1;
        if (h === null)
          oe = !0;
        else
          switch (Ue) {
            case "string":
            case "number":
              oe = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Be:
                case Xe:
                  oe = !0;
              }
          }
        if (oe) {
          var Pe = h, St = ee(Pe), _t = j === "" ? sn + Cr(Pe, 0) : j;
          if (Rn(St)) {
            var un = "";
            _t != null && (un = fa(_t) + "/"), xa(St, C, un, "", function(nd) {
              return nd;
            });
          } else St != null && (hn(St) && (St.key && (!Pe || Pe.key !== St.key) && $r(St.key), St = Vt(
            St,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (St.key && (!Pe || Pe.key !== St.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              fa("" + St.key) + "/"
            ) : "") + _t
          )), C.push(St));
          return 1;
        }
        var Kt, pt, Jt = 0, mn = j === "" ? sn : j + Kn;
        if (Rn(h))
          for (var Rl = 0; Rl < h.length; Rl++)
            Kt = h[Rl], pt = mn + Cr(Kt, Rl), Jt += xa(Kt, C, z, pt, ee);
        else {
          var es = Le(h);
          if (typeof es == "function") {
            var Bi = h;
            es === Bi.entries && (Gt || Nt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Gt = !0);
            for (var ts = es.call(Bi), cu, td = 0; !(cu = ts.next()).done; )
              Kt = cu.value, pt = mn + Cr(Kt, td++), Jt += xa(Kt, C, z, pt, ee);
          } else if (Ue === "object") {
            var hc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (hc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : hc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Jt;
      }
      function Hi(h, C, z) {
        if (h == null)
          return h;
        var j = [], ee = 0;
        return xa(h, j, "", "", function(Ue) {
          return C.call(z, Ue, ee++);
        }), j;
      }
      function tu(h) {
        var C = 0;
        return Hi(h, function() {
          C++;
        }), C;
      }
      function nu(h, C, z) {
        Hi(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function pl(h) {
        return Hi(h, function(C) {
          return C;
        }) || [];
      }
      function vl(h) {
        if (!hn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function ru(h) {
        var C = {
          $$typeof: re,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ie,
          _context: C
        };
        var z = !1, j = !1, ee = !1;
        {
          var Ue = {
            $$typeof: re,
            _context: C
          };
          Object.defineProperties(Ue, {
            Provider: {
              get: function() {
                return j || (j = !0, xe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(oe) {
                C.Provider = oe;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(oe) {
                C._currentValue = oe;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(oe) {
                C._currentValue2 = oe;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(oe) {
                C._threadCount = oe;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, xe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(oe) {
                ee || (Nt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", oe), ee = !0);
              }
            }
          }), C.Consumer = Ue;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var _r = -1, Dr = 0, ar = 1, di = 2;
      function Qa(h) {
        if (h._status === _r) {
          var C = h._result, z = C();
          if (z.then(function(Ue) {
            if (h._status === Dr || h._status === _r) {
              var oe = h;
              oe._status = ar, oe._result = Ue;
            }
          }, function(Ue) {
            if (h._status === Dr || h._status === _r) {
              var oe = h;
              oe._status = di, oe._result = Ue;
            }
          }), h._status === _r) {
            var j = h;
            j._status = Dr, j._result = z;
          }
        }
        if (h._status === ar) {
          var ee = h._result;
          return ee === void 0 && xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ee), "default" in ee || xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ee), ee.default;
        } else
          throw h._result;
      }
      function pi(h) {
        var C = {
          // We use these fields to store the result.
          _status: _r,
          _result: h
        }, z = {
          $$typeof: Oe,
          _payload: C,
          _init: Qa
        };
        {
          var j, ee;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Ue) {
                xe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Ue, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ee;
              },
              set: function(Ue) {
                xe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ee = Ue, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function vi(h) {
        h != null && h.$$typeof === Z ? xe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? xe("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && xe("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && xe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Ye,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(j) {
              z = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function I(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === We || h === it || Pt || h === S || h === J || h === ne || ze || h === nt || $t || Qt || kt || typeof h == "object" && h !== null && (h.$$typeof === Oe || h.$$typeof === Z || h.$$typeof === ie || h.$$typeof === re || h.$$typeof === Ye || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function se(h, C) {
        I(h) || xe("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: Z,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(ee) {
              j = ee, !h.name && !h.displayName && (h.displayName = ee);
            }
          });
        }
        return z;
      }
      function ye() {
        var h = He.current;
        return h === null && xe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function rt(h) {
        var C = ye();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? xe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && xe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Je(h) {
        var C = ye();
        return C.useState(h);
      }
      function gt(h, C, z) {
        var j = ye();
        return j.useReducer(h, C, z);
      }
      function mt(h) {
        var C = ye();
        return C.useRef(h);
      }
      function xn(h, C) {
        var z = ye();
        return z.useEffect(h, C);
      }
      function ln(h, C) {
        var z = ye();
        return z.useInsertionEffect(h, C);
      }
      function cn(h, C) {
        var z = ye();
        return z.useLayoutEffect(h, C);
      }
      function ir(h, C) {
        var z = ye();
        return z.useCallback(h, C);
      }
      function Ga(h, C) {
        var z = ye();
        return z.useMemo(h, C);
      }
      function qa(h, C, z) {
        var j = ye();
        return j.useImperativeHandle(h, C, z);
      }
      function at(h, C) {
        {
          var z = ye();
          return z.useDebugValue(h, C);
        }
      }
      function st() {
        var h = ye();
        return h.useTransition();
      }
      function Xa(h) {
        var C = ye();
        return C.useDeferredValue(h);
      }
      function au() {
        var h = ye();
        return h.useId();
      }
      function iu(h, C, z) {
        var j = ye();
        return j.useSyncExternalStore(h, C, z);
      }
      var hl = 0, qu, ml, Wr, Xo, kr, pc, vc;
      function Xu() {
      }
      Xu.__reactDisabledLog = !0;
      function yl() {
        {
          if (hl === 0) {
            qu = console.log, ml = console.info, Wr = console.warn, Xo = console.error, kr = console.group, pc = console.groupCollapsed, vc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Xu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          hl++;
        }
      }
      function da() {
        {
          if (hl--, hl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: P({}, h, {
                value: qu
              }),
              info: P({}, h, {
                value: ml
              }),
              warn: P({}, h, {
                value: Wr
              }),
              error: P({}, h, {
                value: Xo
              }),
              group: P({}, h, {
                value: kr
              }),
              groupCollapsed: P({}, h, {
                value: pc
              }),
              groupEnd: P({}, h, {
                value: vc
              })
            });
          }
          hl < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ka = Ot.ReactCurrentDispatcher, Ja;
      function Ku(h, C, z) {
        {
          if (Ja === void 0)
            try {
              throw Error();
            } catch (ee) {
              var j = ee.stack.trim().match(/\n( *(at )?)/);
              Ja = j && j[1] || "";
            }
          return `
` + Ja + h;
        }
      }
      var lu = !1, gl;
      {
        var Ju = typeof WeakMap == "function" ? WeakMap : Map;
        gl = new Ju();
      }
      function Zu(h, C) {
        if (!h || lu)
          return "";
        {
          var z = gl.get(h);
          if (z !== void 0)
            return z;
        }
        var j;
        lu = !0;
        var ee = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ue;
        Ue = Ka.current, Ka.current = null, yl();
        try {
          if (C) {
            var oe = function() {
              throw Error();
            };
            if (Object.defineProperty(oe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(oe, []);
              } catch (mn) {
                j = mn;
              }
              Reflect.construct(h, [], oe);
            } else {
              try {
                oe.call();
              } catch (mn) {
                j = mn;
              }
              h.call(oe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (mn) {
              j = mn;
            }
            h();
          }
        } catch (mn) {
          if (mn && j && typeof mn.stack == "string") {
            for (var Pe = mn.stack.split(`
`), St = j.stack.split(`
`), _t = Pe.length - 1, un = St.length - 1; _t >= 1 && un >= 0 && Pe[_t] !== St[un]; )
              un--;
            for (; _t >= 1 && un >= 0; _t--, un--)
              if (Pe[_t] !== St[un]) {
                if (_t !== 1 || un !== 1)
                  do
                    if (_t--, un--, un < 0 || Pe[_t] !== St[un]) {
                      var Kt = `
` + Pe[_t].replace(" at new ", " at ");
                      return h.displayName && Kt.includes("<anonymous>") && (Kt = Kt.replace("<anonymous>", h.displayName)), typeof h == "function" && gl.set(h, Kt), Kt;
                    }
                  while (_t >= 1 && un >= 0);
                break;
              }
          }
        } finally {
          lu = !1, Ka.current = Ue, da(), Error.prepareStackTrace = ee;
        }
        var pt = h ? h.displayName || h.name : "", Jt = pt ? Ku(pt) : "";
        return typeof h == "function" && gl.set(h, Jt), Jt;
      }
      function Pi(h, C, z) {
        return Zu(h, !1);
      }
      function Zf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Vi(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Zu(h, Zf(h));
        if (typeof h == "string")
          return Ku(h);
        switch (h) {
          case J:
            return Ku("Suspense");
          case ne:
            return Ku("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ye:
              return Pi(h.render);
            case Z:
              return Vi(h.type, C, z);
            case Oe: {
              var j = h, ee = j._payload, Ue = j._init;
              try {
                return Vi(Ue(ee), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var zt = {}, eo = Ot.ReactDebugCurrentFrame;
      function wt(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          eo.setExtraStackFrame(z);
        } else
          eo.setExtraStackFrame(null);
      }
      function Ko(h, C, z, j, ee) {
        {
          var Ue = Function.call.bind(Tn);
          for (var oe in h)
            if (Ue(h, oe)) {
              var Pe = void 0;
              try {
                if (typeof h[oe] != "function") {
                  var St = Error((j || "React class") + ": " + z + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw St.name = "Invariant Violation", St;
                }
                Pe = h[oe](C, oe, j, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (_t) {
                Pe = _t;
              }
              Pe && !(Pe instanceof Error) && (wt(ee), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", z, oe, typeof Pe), wt(null)), Pe instanceof Error && !(Pe.message in zt) && (zt[Pe.message] = !0, wt(ee), xe("Failed %s type: %s", z, Pe.message), wt(null));
            }
        }
      }
      function hi(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          Dt(z);
        } else
          Dt(null);
      }
      var Ke;
      Ke = !1;
      function to() {
        if (ut.current) {
          var h = Xn(ut.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function lr(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function mi(h) {
        return h != null ? lr(h.__source) : "";
      }
      var Or = {};
      function yi(h) {
        var C = to();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function fn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = yi(C);
          if (!Or[z]) {
            Or[z] = !0;
            var j = "";
            h && h._owner && h._owner !== ut.current && (j = " It was passed a child from " + Xn(h._owner.type) + "."), hi(h), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, j), hi(null);
          }
        }
      }
      function Xt(h, C) {
        if (typeof h == "object") {
          if (Rn(h))
            for (var z = 0; z < h.length; z++) {
              var j = h[z];
              hn(j) && fn(j, C);
            }
          else if (hn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ee = Le(h);
            if (typeof ee == "function" && ee !== h.entries)
              for (var Ue = ee.call(h), oe; !(oe = Ue.next()).done; )
                hn(oe.value) && fn(oe.value, C);
          }
        }
      }
      function Sl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Ye || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === Z))
            z = C.propTypes;
          else
            return;
          if (z) {
            var j = Xn(C);
            Ko(z, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Ke) {
            Ke = !0;
            var ee = Xn(C);
            xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function $n(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var j = C[z];
            if (j !== "children" && j !== "key") {
              hi(h), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), hi(null);
              break;
            }
          }
          h.ref !== null && (hi(h), xe("Invalid attribute `ref` supplied to `React.Fragment`."), hi(null));
        }
      }
      function Lr(h, C, z) {
        var j = I(h);
        if (!j) {
          var ee = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ue = mi(C);
          Ue ? ee += Ue : ee += to();
          var oe;
          h === null ? oe = "null" : Rn(h) ? oe = "array" : h !== void 0 && h.$$typeof === Be ? (oe = "<" + (Xn(h.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof h, xe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, ee);
        }
        var Pe = dt.apply(this, arguments);
        if (Pe == null)
          return Pe;
        if (j)
          for (var St = 2; St < arguments.length; St++)
            Xt(arguments[St], h);
        return h === We ? $n(Pe) : Sl(Pe), Pe;
      }
      var ba = !1;
      function uu(h) {
        var C = Lr.bind(null, h);
        return C.type = h, ba || (ba = !0, Nt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Nt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Jo(h, C, z) {
        for (var j = rn.apply(this, arguments), ee = 2; ee < arguments.length; ee++)
          Xt(arguments[ee], j.type);
        return Sl(j), j;
      }
      function Zo(h, C) {
        var z = et.transition;
        et.transition = {};
        var j = et.transition;
        et.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (et.transition = z, z === null && j._updatedFibers) {
            var ee = j._updatedFibers.size;
            ee > 10 && Nt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var El = !1, ou = null;
      function ed(h) {
        if (ou === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = q && q[C];
            ou = z.call(q, "timers").setImmediate;
          } catch {
            ou = function(ee) {
              El === !1 && (El = !0, typeof MessageChannel > "u" && xe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ue = new MessageChannel();
              Ue.port1.onmessage = ee, Ue.port2.postMessage(void 0);
            };
          }
        return ou(h);
      }
      var wa = 0, Za = !1;
      function gi(h) {
        {
          var C = wa;
          wa++, be.current === null && (be.current = []);
          var z = be.isBatchingLegacy, j;
          try {
            if (be.isBatchingLegacy = !0, j = h(), !z && be.didScheduleLegacyUpdate) {
              var ee = be.current;
              ee !== null && (be.didScheduleLegacyUpdate = !1, Cl(ee));
            }
          } catch (pt) {
            throw _a(C), pt;
          } finally {
            be.isBatchingLegacy = z;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Ue = j, oe = !1, Pe = {
              then: function(pt, Jt) {
                oe = !0, Ue.then(function(mn) {
                  _a(C), wa === 0 ? no(mn, pt, Jt) : pt(mn);
                }, function(mn) {
                  _a(C), Jt(mn);
                });
              }
            };
            return !Za && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              oe || (Za = !0, xe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Pe;
          } else {
            var St = j;
            if (_a(C), wa === 0) {
              var _t = be.current;
              _t !== null && (Cl(_t), be.current = null);
              var un = {
                then: function(pt, Jt) {
                  be.current === null ? (be.current = [], no(St, pt, Jt)) : pt(St);
                }
              };
              return un;
            } else {
              var Kt = {
                then: function(pt, Jt) {
                  pt(St);
                }
              };
              return Kt;
            }
          }
        }
      }
      function _a(h) {
        h !== wa - 1 && xe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), wa = h;
      }
      function no(h, C, z) {
        {
          var j = be.current;
          if (j !== null)
            try {
              Cl(j), ed(function() {
                j.length === 0 ? (be.current = null, C(h)) : no(h, C, z);
              });
            } catch (ee) {
              z(ee);
            }
          else
            C(h);
        }
      }
      var ro = !1;
      function Cl(h) {
        if (!ro) {
          ro = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            ro = !1;
          }
        }
      }
      var su = Lr, ao = Jo, io = uu, ei = {
        map: Hi,
        forEach: nu,
        count: tu,
        toArray: pl,
        only: vl
      };
      B.Children = ei, B.Component = Ie, B.Fragment = We, B.Profiler = it, B.PureComponent = ht, B.StrictMode = S, B.Suspense = J, B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ot, B.act = gi, B.cloneElement = ao, B.createContext = ru, B.createElement = su, B.createFactory = io, B.createRef = Ln, B.forwardRef = vi, B.isValidElement = hn, B.lazy = pi, B.memo = se, B.startTransition = Zo, B.unstable_act = gi, B.useCallback = ir, B.useContext = rt, B.useDebugValue = at, B.useDeferredValue = Xa, B.useEffect = xn, B.useId = au, B.useImperativeHandle = qa, B.useInsertionEffect = ln, B.useLayoutEffect = cn, B.useMemo = Ga, B.useReducer = gt, B.useRef = mt, B.useState = Je, B.useSyncExternalStore = iu, B.useTransition = st, B.version = N, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(lv, lv.exports)), lv.exports;
}
process.env.NODE_ENV === "production" ? TE.exports = oD() : TE.exports = sD();
var It = TE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sT;
function cD() {
  if (sT) return av;
  sT = 1;
  var q = It, B = Symbol.for("react.element"), N = Symbol.for("react.fragment"), Be = Object.prototype.hasOwnProperty, Xe = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, We = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(it, ie, re) {
    var Ye, J = {}, ne = null, Z = null;
    re !== void 0 && (ne = "" + re), ie.key !== void 0 && (ne = "" + ie.key), ie.ref !== void 0 && (Z = ie.ref);
    for (Ye in ie) Be.call(ie, Ye) && !We.hasOwnProperty(Ye) && (J[Ye] = ie[Ye]);
    if (it && it.defaultProps) for (Ye in ie = it.defaultProps, ie) J[Ye] === void 0 && (J[Ye] = ie[Ye]);
    return { $$typeof: B, type: it, key: ne, ref: Z, props: J, _owner: Xe.current };
  }
  return av.Fragment = N, av.jsx = S, av.jsxs = S, av;
}
var iv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cT;
function fD() {
  return cT || (cT = 1, process.env.NODE_ENV !== "production" && function() {
    var q = It, B = Symbol.for("react.element"), N = Symbol.for("react.portal"), Be = Symbol.for("react.fragment"), Xe = Symbol.for("react.strict_mode"), We = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), it = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), Ye = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), Oe = Symbol.iterator, nt = "@@iterator";
    function ge(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = Oe && R[Oe] || R[nt];
      return typeof I == "function" ? I : null;
    }
    var Mt = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Le(R) {
      {
        for (var I = arguments.length, se = new Array(I > 1 ? I - 1 : 0), ye = 1; ye < I; ye++)
          se[ye - 1] = arguments[ye];
        He("error", R, se);
      }
    }
    function He(R, I, se) {
      {
        var ye = Mt.ReactDebugCurrentFrame, rt = ye.getStackAddendum();
        rt !== "" && (I += "%s", se = se.concat([rt]));
        var Je = se.map(function(gt) {
          return String(gt);
        });
        Je.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, Je);
      }
    }
    var et = !1, be = !1, ut = !1, je = !1, Re = !1, Dt;
    Dt = Symbol.for("react.module.reference");
    function $t(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Be || R === We || Re || R === Xe || R === re || R === Ye || je || R === Z || et || be || ut || typeof R == "object" && R !== null && (R.$$typeof === ne || R.$$typeof === J || R.$$typeof === S || R.$$typeof === it || R.$$typeof === ie || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Dt || R.getModuleId !== void 0));
    }
    function Qt(R, I, se) {
      var ye = R.displayName;
      if (ye)
        return ye;
      var rt = I.displayName || I.name || "";
      return rt !== "" ? se + "(" + rt + ")" : se;
    }
    function kt(R) {
      return R.displayName || "Context";
    }
    function ze(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && Le("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Be:
          return "Fragment";
        case N:
          return "Portal";
        case We:
          return "Profiler";
        case Xe:
          return "StrictMode";
        case re:
          return "Suspense";
        case Ye:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case it:
            var I = R;
            return kt(I) + ".Consumer";
          case S:
            var se = R;
            return kt(se._context) + ".Provider";
          case ie:
            return Qt(R, R.render, "ForwardRef");
          case J:
            var ye = R.displayName || null;
            return ye !== null ? ye : ze(R.type) || "Memo";
          case ne: {
            var rt = R, Je = rt._payload, gt = rt._init;
            try {
              return ze(gt(Je));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Pt = Object.assign, Ot = 0, Nt, xe, te, we, ue, _, P;
    function Qe() {
    }
    Qe.__reactDisabledLog = !0;
    function Ie() {
      {
        if (Ot === 0) {
          Nt = console.log, xe = console.info, te = console.warn, we = console.error, ue = console.group, _ = console.groupCollapsed, P = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Qe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        Ot++;
      }
    }
    function vt() {
      {
        if (Ot--, Ot === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Pt({}, R, {
              value: Nt
            }),
            info: Pt({}, R, {
              value: xe
            }),
            warn: Pt({}, R, {
              value: te
            }),
            error: Pt({}, R, {
              value: we
            }),
            group: Pt({}, R, {
              value: ue
            }),
            groupCollapsed: Pt({}, R, {
              value: _
            }),
            groupEnd: Pt({}, R, {
              value: P
            })
          });
        }
        Ot < 0 && Le("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ct = Mt.ReactCurrentDispatcher, ot;
    function ft(R, I, se) {
      {
        if (ot === void 0)
          try {
            throw Error();
          } catch (rt) {
            var ye = rt.stack.trim().match(/\n( *(at )?)/);
            ot = ye && ye[1] || "";
          }
        return `
` + ot + R;
      }
    }
    var ht = !1, Wt;
    {
      var Ln = typeof WeakMap == "function" ? WeakMap : Map;
      Wt = new Ln();
    }
    function wr(R, I) {
      if (!R || ht)
        return "";
      {
        var se = Wt.get(R);
        if (se !== void 0)
          return se;
      }
      var ye;
      ht = !0;
      var rt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Je;
      Je = ct.current, ct.current = null, Ie();
      try {
        if (I) {
          var gt = function() {
            throw Error();
          };
          if (Object.defineProperty(gt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(gt, []);
            } catch (at) {
              ye = at;
            }
            Reflect.construct(R, [], gt);
          } else {
            try {
              gt.call();
            } catch (at) {
              ye = at;
            }
            R.call(gt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (at) {
            ye = at;
          }
          R();
        }
      } catch (at) {
        if (at && ye && typeof at.stack == "string") {
          for (var mt = at.stack.split(`
`), xn = ye.stack.split(`
`), ln = mt.length - 1, cn = xn.length - 1; ln >= 1 && cn >= 0 && mt[ln] !== xn[cn]; )
            cn--;
          for (; ln >= 1 && cn >= 0; ln--, cn--)
            if (mt[ln] !== xn[cn]) {
              if (ln !== 1 || cn !== 1)
                do
                  if (ln--, cn--, cn < 0 || mt[ln] !== xn[cn]) {
                    var ir = `
` + mt[ln].replace(" at new ", " at ");
                    return R.displayName && ir.includes("<anonymous>") && (ir = ir.replace("<anonymous>", R.displayName)), typeof R == "function" && Wt.set(R, ir), ir;
                  }
                while (ln >= 1 && cn >= 0);
              break;
            }
        }
      } finally {
        ht = !1, ct.current = Je, vt(), Error.prepareStackTrace = rt;
      }
      var Ga = R ? R.displayName || R.name : "", qa = Ga ? ft(Ga) : "";
      return typeof R == "function" && Wt.set(R, qa), qa;
    }
    function Rn(R, I, se) {
      return wr(R, !1);
    }
    function rr(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function Bn(R, I, se) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return wr(R, rr(R));
      if (typeof R == "string")
        return ft(R);
      switch (R) {
        case re:
          return ft("Suspense");
        case Ye:
          return ft("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ie:
            return Rn(R.render);
          case J:
            return Bn(R.type, I, se);
          case ne: {
            var ye = R, rt = ye._payload, Je = ye._init;
            try {
              return Bn(Je(rt), I, se);
            } catch {
            }
          }
        }
      return "";
    }
    var Yn = Object.prototype.hasOwnProperty, $r = {}, ci = Mt.ReactDebugCurrentFrame;
    function sa(R) {
      if (R) {
        var I = R._owner, se = Bn(R.type, R._source, I ? I.type : null);
        ci.setExtraStackFrame(se);
      } else
        ci.setExtraStackFrame(null);
    }
    function Xn(R, I, se, ye, rt) {
      {
        var Je = Function.call.bind(Yn);
        for (var gt in R)
          if (Je(R, gt)) {
            var mt = void 0;
            try {
              if (typeof R[gt] != "function") {
                var xn = Error((ye || "React class") + ": " + se + " type `" + gt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[gt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xn.name = "Invariant Violation", xn;
              }
              mt = R[gt](I, gt, ye, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ln) {
              mt = ln;
            }
            mt && !(mt instanceof Error) && (sa(rt), Le("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ye || "React class", se, gt, typeof mt), sa(null)), mt instanceof Error && !(mt.message in $r) && ($r[mt.message] = !0, sa(rt), Le("Failed %s type: %s", se, mt.message), sa(null));
          }
      }
    }
    var Tn = Array.isArray;
    function In(R) {
      return Tn(R);
    }
    function Sr(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, se = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return se;
      }
    }
    function $a(R) {
      try {
        return Mn(R), !1;
      } catch {
        return !0;
      }
    }
    function Mn(R) {
      return "" + R;
    }
    function Er(R) {
      if ($a(R))
        return Le("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(R)), Mn(R);
    }
    var ca = Mt.ReactCurrentOwner, Wa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, ae;
    function _e(R) {
      if (Yn.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function dt(R) {
      if (Yn.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Vt(R, I) {
      typeof R.ref == "string" && ca.current;
    }
    function rn(R, I) {
      {
        var se = function() {
          fi || (fi = !0, Le("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        se.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: se,
          configurable: !0
        });
      }
    }
    function hn(R, I) {
      {
        var se = function() {
          ae || (ae = !0, Le("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        se.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: se,
          configurable: !0
        });
      }
    }
    var sn = function(R, I, se, ye, rt, Je, gt) {
      var mt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: B,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: se,
        props: gt,
        // Record the component responsible for creating this element.
        _owner: Je
      };
      return mt._store = {}, Object.defineProperty(mt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(mt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ye
      }), Object.defineProperty(mt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: rt
      }), Object.freeze && (Object.freeze(mt.props), Object.freeze(mt)), mt;
    };
    function Kn(R, I, se, ye, rt) {
      {
        var Je, gt = {}, mt = null, xn = null;
        se !== void 0 && (Er(se), mt = "" + se), dt(I) && (Er(I.key), mt = "" + I.key), _e(I) && (xn = I.ref, Vt(I, rt));
        for (Je in I)
          Yn.call(I, Je) && !Wa.hasOwnProperty(Je) && (gt[Je] = I[Je]);
        if (R && R.defaultProps) {
          var ln = R.defaultProps;
          for (Je in ln)
            gt[Je] === void 0 && (gt[Je] = ln[Je]);
        }
        if (mt || xn) {
          var cn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          mt && rn(gt, cn), xn && hn(gt, cn);
        }
        return sn(R, mt, xn, rt, ye, ca.current, gt);
      }
    }
    var an = Mt.ReactCurrentOwner, Gt = Mt.ReactDebugCurrentFrame;
    function qt(R) {
      if (R) {
        var I = R._owner, se = Bn(R.type, R._source, I ? I.type : null);
        Gt.setExtraStackFrame(se);
      } else
        Gt.setExtraStackFrame(null);
    }
    var fa;
    fa = !1;
    function Cr(R) {
      return typeof R == "object" && R !== null && R.$$typeof === B;
    }
    function xa() {
      {
        if (an.current) {
          var R = ze(an.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Hi(R) {
      return "";
    }
    var tu = {};
    function nu(R) {
      {
        var I = xa();
        if (!I) {
          var se = typeof R == "string" ? R : R.displayName || R.name;
          se && (I = `

Check the top-level render call using <` + se + ">.");
        }
        return I;
      }
    }
    function pl(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var se = nu(I);
        if (tu[se])
          return;
        tu[se] = !0;
        var ye = "";
        R && R._owner && R._owner !== an.current && (ye = " It was passed a child from " + ze(R._owner.type) + "."), qt(R), Le('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, ye), qt(null);
      }
    }
    function vl(R, I) {
      {
        if (typeof R != "object")
          return;
        if (In(R))
          for (var se = 0; se < R.length; se++) {
            var ye = R[se];
            Cr(ye) && pl(ye, I);
          }
        else if (Cr(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var rt = ge(R);
          if (typeof rt == "function" && rt !== R.entries)
            for (var Je = rt.call(R), gt; !(gt = Je.next()).done; )
              Cr(gt.value) && pl(gt.value, I);
        }
      }
    }
    function ru(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var se;
        if (typeof I == "function")
          se = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === ie || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === J))
          se = I.propTypes;
        else
          return;
        if (se) {
          var ye = ze(I);
          Xn(se, R.props, "prop", ye, R);
        } else if (I.PropTypes !== void 0 && !fa) {
          fa = !0;
          var rt = ze(I);
          Le("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", rt || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && Le("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(R) {
      {
        for (var I = Object.keys(R.props), se = 0; se < I.length; se++) {
          var ye = I[se];
          if (ye !== "children" && ye !== "key") {
            qt(R), Le("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ye), qt(null);
            break;
          }
        }
        R.ref !== null && (qt(R), Le("Invalid attribute `ref` supplied to `React.Fragment`."), qt(null));
      }
    }
    var Dr = {};
    function ar(R, I, se, ye, rt, Je) {
      {
        var gt = $t(R);
        if (!gt) {
          var mt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (mt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xn = Hi();
          xn ? mt += xn : mt += xa();
          var ln;
          R === null ? ln = "null" : In(R) ? ln = "array" : R !== void 0 && R.$$typeof === B ? (ln = "<" + (ze(R.type) || "Unknown") + " />", mt = " Did you accidentally export a JSX literal instead of a component?") : ln = typeof R, Le("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ln, mt);
        }
        var cn = Kn(R, I, se, rt, Je);
        if (cn == null)
          return cn;
        if (gt) {
          var ir = I.children;
          if (ir !== void 0)
            if (ye)
              if (In(ir)) {
                for (var Ga = 0; Ga < ir.length; Ga++)
                  vl(ir[Ga], R);
                Object.freeze && Object.freeze(ir);
              } else
                Le("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vl(ir, R);
        }
        if (Yn.call(I, "key")) {
          var qa = ze(R), at = Object.keys(I).filter(function(au) {
            return au !== "key";
          }), st = at.length > 0 ? "{key: someKey, " + at.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Dr[qa + st]) {
            var Xa = at.length > 0 ? "{" + at.join(": ..., ") + ": ...}" : "{}";
            Le(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, st, qa, Xa, qa), Dr[qa + st] = !0;
          }
        }
        return R === Be ? _r(cn) : ru(cn), cn;
      }
    }
    function di(R, I, se) {
      return ar(R, I, se, !0);
    }
    function Qa(R, I, se) {
      return ar(R, I, se, !1);
    }
    var pi = Qa, vi = di;
    iv.Fragment = Be, iv.jsx = pi, iv.jsxs = vi;
  }()), iv;
}
process.env.NODE_ENV === "production" ? RE.exports = cD() : RE.exports = fD();
var Y = RE.exports, xE = { exports: {} }, Ya = {}, ey = { exports: {} }, gE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fT;
function dD() {
  return fT || (fT = 1, function(q) {
    function B(te, we) {
      var ue = te.length;
      te.push(we);
      e: for (; 0 < ue; ) {
        var _ = ue - 1 >>> 1, P = te[_];
        if (0 < Xe(P, we)) te[_] = we, te[ue] = P, ue = _;
        else break e;
      }
    }
    function N(te) {
      return te.length === 0 ? null : te[0];
    }
    function Be(te) {
      if (te.length === 0) return null;
      var we = te[0], ue = te.pop();
      if (ue !== we) {
        te[0] = ue;
        e: for (var _ = 0, P = te.length, Qe = P >>> 1; _ < Qe; ) {
          var Ie = 2 * (_ + 1) - 1, vt = te[Ie], ct = Ie + 1, ot = te[ct];
          if (0 > Xe(vt, ue)) ct < P && 0 > Xe(ot, vt) ? (te[_] = ot, te[ct] = ue, _ = ct) : (te[_] = vt, te[Ie] = ue, _ = Ie);
          else if (ct < P && 0 > Xe(ot, ue)) te[_] = ot, te[ct] = ue, _ = ct;
          else break e;
        }
      }
      return we;
    }
    function Xe(te, we) {
      var ue = te.sortIndex - we.sortIndex;
      return ue !== 0 ? ue : te.id - we.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var We = performance;
      q.unstable_now = function() {
        return We.now();
      };
    } else {
      var S = Date, it = S.now();
      q.unstable_now = function() {
        return S.now() - it;
      };
    }
    var ie = [], re = [], Ye = 1, J = null, ne = 3, Z = !1, Oe = !1, nt = !1, ge = typeof setTimeout == "function" ? setTimeout : null, Mt = typeof clearTimeout == "function" ? clearTimeout : null, Le = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function He(te) {
      for (var we = N(re); we !== null; ) {
        if (we.callback === null) Be(re);
        else if (we.startTime <= te) Be(re), we.sortIndex = we.expirationTime, B(ie, we);
        else break;
        we = N(re);
      }
    }
    function et(te) {
      if (nt = !1, He(te), !Oe) if (N(ie) !== null) Oe = !0, Nt(be);
      else {
        var we = N(re);
        we !== null && xe(et, we.startTime - te);
      }
    }
    function be(te, we) {
      Oe = !1, nt && (nt = !1, Mt(Re), Re = -1), Z = !0;
      var ue = ne;
      try {
        for (He(we), J = N(ie); J !== null && (!(J.expirationTime > we) || te && !Qt()); ) {
          var _ = J.callback;
          if (typeof _ == "function") {
            J.callback = null, ne = J.priorityLevel;
            var P = _(J.expirationTime <= we);
            we = q.unstable_now(), typeof P == "function" ? J.callback = P : J === N(ie) && Be(ie), He(we);
          } else Be(ie);
          J = N(ie);
        }
        if (J !== null) var Qe = !0;
        else {
          var Ie = N(re);
          Ie !== null && xe(et, Ie.startTime - we), Qe = !1;
        }
        return Qe;
      } finally {
        J = null, ne = ue, Z = !1;
      }
    }
    var ut = !1, je = null, Re = -1, Dt = 5, $t = -1;
    function Qt() {
      return !(q.unstable_now() - $t < Dt);
    }
    function kt() {
      if (je !== null) {
        var te = q.unstable_now();
        $t = te;
        var we = !0;
        try {
          we = je(!0, te);
        } finally {
          we ? ze() : (ut = !1, je = null);
        }
      } else ut = !1;
    }
    var ze;
    if (typeof Le == "function") ze = function() {
      Le(kt);
    };
    else if (typeof MessageChannel < "u") {
      var Pt = new MessageChannel(), Ot = Pt.port2;
      Pt.port1.onmessage = kt, ze = function() {
        Ot.postMessage(null);
      };
    } else ze = function() {
      ge(kt, 0);
    };
    function Nt(te) {
      je = te, ut || (ut = !0, ze());
    }
    function xe(te, we) {
      Re = ge(function() {
        te(q.unstable_now());
      }, we);
    }
    q.unstable_IdlePriority = 5, q.unstable_ImmediatePriority = 1, q.unstable_LowPriority = 4, q.unstable_NormalPriority = 3, q.unstable_Profiling = null, q.unstable_UserBlockingPriority = 2, q.unstable_cancelCallback = function(te) {
      te.callback = null;
    }, q.unstable_continueExecution = function() {
      Oe || Z || (Oe = !0, Nt(be));
    }, q.unstable_forceFrameRate = function(te) {
      0 > te || 125 < te ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Dt = 0 < te ? Math.floor(1e3 / te) : 5;
    }, q.unstable_getCurrentPriorityLevel = function() {
      return ne;
    }, q.unstable_getFirstCallbackNode = function() {
      return N(ie);
    }, q.unstable_next = function(te) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
          var we = 3;
          break;
        default:
          we = ne;
      }
      var ue = ne;
      ne = we;
      try {
        return te();
      } finally {
        ne = ue;
      }
    }, q.unstable_pauseExecution = function() {
    }, q.unstable_requestPaint = function() {
    }, q.unstable_runWithPriority = function(te, we) {
      switch (te) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          te = 3;
      }
      var ue = ne;
      ne = te;
      try {
        return we();
      } finally {
        ne = ue;
      }
    }, q.unstable_scheduleCallback = function(te, we, ue) {
      var _ = q.unstable_now();
      switch (typeof ue == "object" && ue !== null ? (ue = ue.delay, ue = typeof ue == "number" && 0 < ue ? _ + ue : _) : ue = _, te) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = ue + P, te = { id: Ye++, callback: we, priorityLevel: te, startTime: ue, expirationTime: P, sortIndex: -1 }, ue > _ ? (te.sortIndex = ue, B(re, te), N(ie) === null && te === N(re) && (nt ? (Mt(Re), Re = -1) : nt = !0, xe(et, ue - _))) : (te.sortIndex = P, B(ie, te), Oe || Z || (Oe = !0, Nt(be))), te;
    }, q.unstable_shouldYield = Qt, q.unstable_wrapCallback = function(te) {
      var we = ne;
      return function() {
        var ue = ne;
        ne = we;
        try {
          return te.apply(this, arguments);
        } finally {
          ne = ue;
        }
      };
    };
  }(gE)), gE;
}
var SE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dT;
function pD() {
  return dT || (dT = 1, function(q) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var B = !1, N = 5;
      function Be(ae, _e) {
        var dt = ae.length;
        ae.push(_e), S(ae, _e, dt);
      }
      function Xe(ae) {
        return ae.length === 0 ? null : ae[0];
      }
      function We(ae) {
        if (ae.length === 0)
          return null;
        var _e = ae[0], dt = ae.pop();
        return dt !== _e && (ae[0] = dt, it(ae, dt, 0)), _e;
      }
      function S(ae, _e, dt) {
        for (var Vt = dt; Vt > 0; ) {
          var rn = Vt - 1 >>> 1, hn = ae[rn];
          if (ie(hn, _e) > 0)
            ae[rn] = _e, ae[Vt] = hn, Vt = rn;
          else
            return;
        }
      }
      function it(ae, _e, dt) {
        for (var Vt = dt, rn = ae.length, hn = rn >>> 1; Vt < hn; ) {
          var sn = (Vt + 1) * 2 - 1, Kn = ae[sn], an = sn + 1, Gt = ae[an];
          if (ie(Kn, _e) < 0)
            an < rn && ie(Gt, Kn) < 0 ? (ae[Vt] = Gt, ae[an] = _e, Vt = an) : (ae[Vt] = Kn, ae[sn] = _e, Vt = sn);
          else if (an < rn && ie(Gt, _e) < 0)
            ae[Vt] = Gt, ae[an] = _e, Vt = an;
          else
            return;
        }
      }
      function ie(ae, _e) {
        var dt = ae.sortIndex - _e.sortIndex;
        return dt !== 0 ? dt : ae.id - _e.id;
      }
      var re = 1, Ye = 2, J = 3, ne = 4, Z = 5;
      function Oe(ae, _e) {
      }
      var nt = typeof performance == "object" && typeof performance.now == "function";
      if (nt) {
        var ge = performance;
        q.unstable_now = function() {
          return ge.now();
        };
      } else {
        var Mt = Date, Le = Mt.now();
        q.unstable_now = function() {
          return Mt.now() - Le;
        };
      }
      var He = 1073741823, et = -1, be = 250, ut = 5e3, je = 1e4, Re = He, Dt = [], $t = [], Qt = 1, kt = null, ze = J, Pt = !1, Ot = !1, Nt = !1, xe = typeof setTimeout == "function" ? setTimeout : null, te = typeof clearTimeout == "function" ? clearTimeout : null, we = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ue(ae) {
        for (var _e = Xe($t); _e !== null; ) {
          if (_e.callback === null)
            We($t);
          else if (_e.startTime <= ae)
            We($t), _e.sortIndex = _e.expirationTime, Be(Dt, _e);
          else
            return;
          _e = Xe($t);
        }
      }
      function _(ae) {
        if (Nt = !1, ue(ae), !Ot)
          if (Xe(Dt) !== null)
            Ot = !0, Mn(P);
          else {
            var _e = Xe($t);
            _e !== null && Er(_, _e.startTime - ae);
          }
      }
      function P(ae, _e) {
        Ot = !1, Nt && (Nt = !1, ca()), Pt = !0;
        var dt = ze;
        try {
          var Vt;
          if (!B) return Qe(ae, _e);
        } finally {
          kt = null, ze = dt, Pt = !1;
        }
      }
      function Qe(ae, _e) {
        var dt = _e;
        for (ue(dt), kt = Xe(Dt); kt !== null && !(kt.expirationTime > dt && (!ae || ci())); ) {
          var Vt = kt.callback;
          if (typeof Vt == "function") {
            kt.callback = null, ze = kt.priorityLevel;
            var rn = kt.expirationTime <= dt, hn = Vt(rn);
            dt = q.unstable_now(), typeof hn == "function" ? kt.callback = hn : kt === Xe(Dt) && We(Dt), ue(dt);
          } else
            We(Dt);
          kt = Xe(Dt);
        }
        if (kt !== null)
          return !0;
        var sn = Xe($t);
        return sn !== null && Er(_, sn.startTime - dt), !1;
      }
      function Ie(ae, _e) {
        switch (ae) {
          case re:
          case Ye:
          case J:
          case ne:
          case Z:
            break;
          default:
            ae = J;
        }
        var dt = ze;
        ze = ae;
        try {
          return _e();
        } finally {
          ze = dt;
        }
      }
      function vt(ae) {
        var _e;
        switch (ze) {
          case re:
          case Ye:
          case J:
            _e = J;
            break;
          default:
            _e = ze;
            break;
        }
        var dt = ze;
        ze = _e;
        try {
          return ae();
        } finally {
          ze = dt;
        }
      }
      function ct(ae) {
        var _e = ze;
        return function() {
          var dt = ze;
          ze = _e;
          try {
            return ae.apply(this, arguments);
          } finally {
            ze = dt;
          }
        };
      }
      function ot(ae, _e, dt) {
        var Vt = q.unstable_now(), rn;
        if (typeof dt == "object" && dt !== null) {
          var hn = dt.delay;
          typeof hn == "number" && hn > 0 ? rn = Vt + hn : rn = Vt;
        } else
          rn = Vt;
        var sn;
        switch (ae) {
          case re:
            sn = et;
            break;
          case Ye:
            sn = be;
            break;
          case Z:
            sn = Re;
            break;
          case ne:
            sn = je;
            break;
          case J:
          default:
            sn = ut;
            break;
        }
        var Kn = rn + sn, an = {
          id: Qt++,
          callback: _e,
          priorityLevel: ae,
          startTime: rn,
          expirationTime: Kn,
          sortIndex: -1
        };
        return rn > Vt ? (an.sortIndex = rn, Be($t, an), Xe(Dt) === null && an === Xe($t) && (Nt ? ca() : Nt = !0, Er(_, rn - Vt))) : (an.sortIndex = Kn, Be(Dt, an), !Ot && !Pt && (Ot = !0, Mn(P))), an;
      }
      function ft() {
      }
      function ht() {
        !Ot && !Pt && (Ot = !0, Mn(P));
      }
      function Wt() {
        return Xe(Dt);
      }
      function Ln(ae) {
        ae.callback = null;
      }
      function wr() {
        return ze;
      }
      var Rn = !1, rr = null, Bn = -1, Yn = N, $r = -1;
      function ci() {
        var ae = q.unstable_now() - $r;
        return !(ae < Yn);
      }
      function sa() {
      }
      function Xn(ae) {
        if (ae < 0 || ae > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ae > 0 ? Yn = Math.floor(1e3 / ae) : Yn = N;
      }
      var Tn = function() {
        if (rr !== null) {
          var ae = q.unstable_now();
          $r = ae;
          var _e = !0, dt = !0;
          try {
            dt = rr(_e, ae);
          } finally {
            dt ? In() : (Rn = !1, rr = null);
          }
        } else
          Rn = !1;
      }, In;
      if (typeof we == "function")
        In = function() {
          we(Tn);
        };
      else if (typeof MessageChannel < "u") {
        var Sr = new MessageChannel(), $a = Sr.port2;
        Sr.port1.onmessage = Tn, In = function() {
          $a.postMessage(null);
        };
      } else
        In = function() {
          xe(Tn, 0);
        };
      function Mn(ae) {
        rr = ae, Rn || (Rn = !0, In());
      }
      function Er(ae, _e) {
        Bn = xe(function() {
          ae(q.unstable_now());
        }, _e);
      }
      function ca() {
        te(Bn), Bn = -1;
      }
      var Wa = sa, fi = null;
      q.unstable_IdlePriority = Z, q.unstable_ImmediatePriority = re, q.unstable_LowPriority = ne, q.unstable_NormalPriority = J, q.unstable_Profiling = fi, q.unstable_UserBlockingPriority = Ye, q.unstable_cancelCallback = Ln, q.unstable_continueExecution = ht, q.unstable_forceFrameRate = Xn, q.unstable_getCurrentPriorityLevel = wr, q.unstable_getFirstCallbackNode = Wt, q.unstable_next = vt, q.unstable_pauseExecution = ft, q.unstable_requestPaint = Wa, q.unstable_runWithPriority = Ie, q.unstable_scheduleCallback = ot, q.unstable_shouldYield = ci, q.unstable_wrapCallback = ct, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(SE)), SE;
}
var pT;
function ET() {
  return pT || (pT = 1, process.env.NODE_ENV === "production" ? ey.exports = dD() : ey.exports = pD()), ey.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vT;
function vD() {
  if (vT) return Ya;
  vT = 1;
  var q = It, B = ET();
  function N(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Be = /* @__PURE__ */ new Set(), Xe = {};
  function We(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Xe[n] = r, n = 0; n < r.length; n++) Be.add(r[n]);
  }
  var it = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ie = Object.prototype.hasOwnProperty, re = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ye = {}, J = {};
  function ne(n) {
    return ie.call(J, n) ? !0 : ie.call(Ye, n) ? !1 : re.test(n) ? J[n] = !0 : (Ye[n] = !0, !1);
  }
  function Z(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Oe(n, r, l, o) {
    if (r === null || typeof r > "u" || Z(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function nt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ge = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ge[n] = new nt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ge[r] = new nt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ge[n] = new nt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ge[n] = new nt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ge[n] = new nt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ge[n] = new nt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ge[n] = new nt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ge[n] = new nt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ge[n] = new nt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Mt = /[\-:]([a-z])/g;
  function Le(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Mt,
      Le
    );
    ge[r] = new nt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Mt, Le);
    ge[r] = new nt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Mt, Le);
    ge[r] = new nt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ge[n] = new nt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ge.xlinkHref = new nt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ge[n] = new nt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function He(n, r, l, o) {
    var c = ge.hasOwnProperty(r) ? ge[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Oe(r, l, c, o) && (l = null), o || c === null ? ne(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var et = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = Symbol.for("react.element"), ut = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), Re = Symbol.for("react.strict_mode"), Dt = Symbol.for("react.profiler"), $t = Symbol.for("react.provider"), Qt = Symbol.for("react.context"), kt = Symbol.for("react.forward_ref"), ze = Symbol.for("react.suspense"), Pt = Symbol.for("react.suspense_list"), Ot = Symbol.for("react.memo"), Nt = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), te = Symbol.iterator;
  function we(n) {
    return n === null || typeof n != "object" ? null : (n = te && n[te] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ue = Object.assign, _;
  function P(n) {
    if (_ === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + n;
  }
  var Qe = !1;
  function Ie(n, r) {
    if (!n || Qe) return "";
    Qe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Qe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function vt(n) {
    switch (n.tag) {
      case 5:
        return P(n.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ie(n.type, !1), n;
      case 11:
        return n = Ie(n.type.render, !1), n;
      case 1:
        return n = Ie(n.type, !0), n;
      default:
        return "";
    }
  }
  function ct(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case je:
        return "Fragment";
      case ut:
        return "Portal";
      case Dt:
        return "Profiler";
      case Re:
        return "StrictMode";
      case ze:
        return "Suspense";
      case Pt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Qt:
        return (n.displayName || "Context") + ".Consumer";
      case $t:
        return (n._context.displayName || "Context") + ".Provider";
      case kt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Ot:
        return r = n.displayName || null, r !== null ? r : ct(n.type) || "Memo";
      case Nt:
        r = n._payload, n = n._init;
        try {
          return ct(n(r));
        } catch {
        }
    }
    return null;
  }
  function ot(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ct(r);
      case 8:
        return r === Re ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function ft(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function ht(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Wt(n) {
    var r = ht(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Ln(n) {
    n._valueTracker || (n._valueTracker = Wt(n));
  }
  function wr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = ht(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Rn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function rr(n, r) {
    var l = r.checked;
    return ue({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Bn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ft(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Yn(n, r) {
    r = r.checked, r != null && He(n, "checked", r, !1);
  }
  function $r(n, r) {
    Yn(n, r);
    var l = ft(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? sa(n, r.type, l) : r.hasOwnProperty("defaultValue") && sa(n, r.type, ft(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ci(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function sa(n, r, l) {
    (r !== "number" || Rn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Xn = Array.isArray;
  function Tn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ft(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function In(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(N(91));
    return ue({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Sr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(N(92));
        if (Xn(l)) {
          if (1 < l.length) throw Error(N(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ft(l) };
  }
  function $a(n, r) {
    var l = ft(r.value), o = ft(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Mn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Er(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ca(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Er(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Wa, fi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Wa = Wa || document.createElement("div"), Wa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Wa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ae(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var _e = {
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
  }, dt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(_e).forEach(function(n) {
    dt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), _e[r] = _e[n];
    });
  });
  function Vt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || _e.hasOwnProperty(n) && _e[n] ? ("" + r).trim() : r + "px";
  }
  function rn(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Vt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var hn = ue({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function sn(n, r) {
    if (r) {
      if (hn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(N(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(N(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(N(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(N(62));
    }
  }
  function Kn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var an = null;
  function Gt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var qt = null, fa = null, Cr = null;
  function xa(n) {
    if (n = Me(n)) {
      if (typeof qt != "function") throw Error(N(280));
      var r = n.stateNode;
      r && (r = yn(r), qt(n.stateNode, n.type, r));
    }
  }
  function Hi(n) {
    fa ? Cr ? Cr.push(n) : Cr = [n] : fa = n;
  }
  function tu() {
    if (fa) {
      var n = fa, r = Cr;
      if (Cr = fa = null, xa(n), r) for (n = 0; n < r.length; n++) xa(r[n]);
    }
  }
  function nu(n, r) {
    return n(r);
  }
  function pl() {
  }
  var vl = !1;
  function ru(n, r, l) {
    if (vl) return n(r, l);
    vl = !0;
    try {
      return nu(n, r, l);
    } finally {
      vl = !1, (fa !== null || Cr !== null) && (pl(), tu());
    }
  }
  function _r(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = yn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
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
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(N(231, r, typeof l));
    return l;
  }
  var Dr = !1;
  if (it) try {
    var ar = {};
    Object.defineProperty(ar, "passive", { get: function() {
      Dr = !0;
    } }), window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
  } catch {
    Dr = !1;
  }
  function di(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var Qa = !1, pi = null, vi = !1, R = null, I = { onError: function(n) {
    Qa = !0, pi = n;
  } };
  function se(n, r, l, o, c, d, m, E, T) {
    Qa = !1, pi = null, di.apply(I, arguments);
  }
  function ye(n, r, l, o, c, d, m, E, T) {
    if (se.apply(this, arguments), Qa) {
      if (Qa) {
        var U = pi;
        Qa = !1, pi = null;
      } else throw Error(N(198));
      vi || (vi = !0, R = U);
    }
  }
  function rt(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Je(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function gt(n) {
    if (rt(n) !== n) throw Error(N(188));
  }
  function mt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = rt(n), r === null) throw Error(N(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return gt(c), n;
          if (d === o) return gt(c), r;
          d = d.sibling;
        }
        throw Error(N(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(N(189));
        }
      }
      if (l.alternate !== o) throw Error(N(190));
    }
    if (l.tag !== 3) throw Error(N(188));
    return l.stateNode.current === l ? n : r;
  }
  function xn(n) {
    return n = mt(n), n !== null ? ln(n) : null;
  }
  function ln(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = ln(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var cn = B.unstable_scheduleCallback, ir = B.unstable_cancelCallback, Ga = B.unstable_shouldYield, qa = B.unstable_requestPaint, at = B.unstable_now, st = B.unstable_getCurrentPriorityLevel, Xa = B.unstable_ImmediatePriority, au = B.unstable_UserBlockingPriority, iu = B.unstable_NormalPriority, hl = B.unstable_LowPriority, qu = B.unstable_IdlePriority, ml = null, Wr = null;
  function Xo(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : Xu, pc = Math.log, vc = Math.LN2;
  function Xu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (pc(n) / vc | 0) | 0;
  }
  var yl = 64, da = 4194304;
  function Ka(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ja(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Ka(E) : (d &= m, d !== 0 && (o = Ka(d)));
    } else m = l & ~c, m !== 0 ? o = Ka(m) : d !== 0 && (o = Ka(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Ku(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function lu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - kr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = Ku(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function gl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ju() {
    var n = yl;
    return yl <<= 1, !(yl & 4194240) && (yl = 64), n;
  }
  function Zu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Pi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function Zf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var zt = 0;
  function eo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var wt, Ko, hi, Ke, to, lr = !1, mi = [], Or = null, yi = null, fn = null, Xt = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Map(), $n = [], Lr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ba(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Or = null;
        break;
      case "dragenter":
      case "dragleave":
        yi = null;
        break;
      case "mouseover":
      case "mouseout":
        fn = null;
        break;
      case "pointerover":
      case "pointerout":
        Xt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sl.delete(r.pointerId);
    }
  }
  function uu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Me(r), r !== null && Ko(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Jo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Or = uu(Or, n, r, l, o, c), !0;
      case "dragenter":
        return yi = uu(yi, n, r, l, o, c), !0;
      case "mouseover":
        return fn = uu(fn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Xt.set(d, uu(Xt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Sl.set(d, uu(Sl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Zo(n) {
    var r = mu(n.target);
    if (r !== null) {
      var l = rt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Je(l), r !== null) {
            n.blockedOn = r, to(n.priority, function() {
              hi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function El(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ao(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        an = o, l.target.dispatchEvent(o), an = null;
      } else return r = Me(l), r !== null && Ko(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function ou(n, r, l) {
    El(n) && l.delete(r);
  }
  function ed() {
    lr = !1, Or !== null && El(Or) && (Or = null), yi !== null && El(yi) && (yi = null), fn !== null && El(fn) && (fn = null), Xt.forEach(ou), Sl.forEach(ou);
  }
  function wa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, lr || (lr = !0, B.unstable_scheduleCallback(B.unstable_NormalPriority, ed)));
  }
  function Za(n) {
    function r(c) {
      return wa(c, n);
    }
    if (0 < mi.length) {
      wa(mi[0], n);
      for (var l = 1; l < mi.length; l++) {
        var o = mi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Or !== null && wa(Or, n), yi !== null && wa(yi, n), fn !== null && wa(fn, n), Xt.forEach(r), Sl.forEach(r), l = 0; l < $n.length; l++) o = $n[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < $n.length && (l = $n[0], l.blockedOn === null); ) Zo(l), l.blockedOn === null && $n.shift();
  }
  var gi = et.ReactCurrentBatchConfig, _a = !0;
  function no(n, r, l, o) {
    var c = zt, d = gi.transition;
    gi.transition = null;
    try {
      zt = 1, Cl(n, r, l, o);
    } finally {
      zt = c, gi.transition = d;
    }
  }
  function ro(n, r, l, o) {
    var c = zt, d = gi.transition;
    gi.transition = null;
    try {
      zt = 4, Cl(n, r, l, o);
    } finally {
      zt = c, gi.transition = d;
    }
  }
  function Cl(n, r, l, o) {
    if (_a) {
      var c = ao(n, r, l, o);
      if (c === null) wc(n, r, o, su, l), ba(n, o);
      else if (Jo(c, n, r, l, o)) o.stopPropagation();
      else if (ba(n, o), r & 4 && -1 < Lr.indexOf(n)) {
        for (; c !== null; ) {
          var d = Me(c);
          if (d !== null && wt(d), d = ao(n, r, l, o), d === null && wc(n, r, o, su, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else wc(n, r, o, null, l);
    }
  }
  var su = null;
  function ao(n, r, l, o) {
    if (su = null, n = Gt(o), n = mu(n), n !== null) if (r = rt(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Je(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return su = n, null;
  }
  function io(n) {
    switch (n) {
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
        switch (st()) {
          case Xa:
            return 1;
          case au:
            return 4;
          case iu:
          case hl:
            return 16;
          case qu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ei = null, h = null, C = null;
  function z() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in ei ? ei.value : ei.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ee() {
    return !0;
  }
  function Ue() {
    return !1;
  }
  function oe(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ee : Ue, this.isPropagationStopped = Ue, this;
    }
    return ue(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ee);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ee);
    }, persist: function() {
    }, isPersistent: ee }), r;
  }
  var Pe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, St = oe(Pe), _t = ue({}, Pe, { view: 0, detail: 0 }), un = oe(_t), Kt, pt, Jt, mn = ue({}, _t, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: id, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Jt && (Jt && n.type === "mousemove" ? (Kt = n.screenX - Jt.screenX, pt = n.screenY - Jt.screenY) : pt = Kt = 0, Jt = n), Kt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : pt;
  } }), Rl = oe(mn), es = ue({}, mn, { dataTransfer: 0 }), Bi = oe(es), ts = ue({}, _t, { relatedTarget: 0 }), cu = oe(ts), td = ue({}, Pe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), hc = oe(td), nd = ue({}, Pe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), sv = oe(nd), rd = ue({}, Pe, { data: 0 }), ad = oe(rd), cv = {
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
  }, fv = {
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
  }, ny = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = ny[n]) ? !!r[n] : !1;
  }
  function id() {
    return Yi;
  }
  var ld = ue({}, _t, { key: function(n) {
    if (n.key) {
      var r = cv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? fv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: id, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ud = oe(ld), od = ue({}, mn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), dv = oe(od), mc = ue({}, _t, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: id }), pv = oe(mc), Qr = ue({}, Pe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ii = oe(Qr), Nn = ue({}, mn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $i = oe(Nn), sd = [9, 13, 27, 32], lo = it && "CompositionEvent" in window, ns = null;
  it && "documentMode" in document && (ns = document.documentMode);
  var rs = it && "TextEvent" in window && !ns, vv = it && (!lo || ns && 8 < ns && 11 >= ns), hv = " ", yc = !1;
  function mv(n, r) {
    switch (n) {
      case "keyup":
        return sd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function yv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var uo = !1;
  function gv(n, r) {
    switch (n) {
      case "compositionend":
        return yv(r);
      case "keypress":
        return r.which !== 32 ? null : (yc = !0, hv);
      case "textInput":
        return n = r.data, n === hv && yc ? null : n;
      default:
        return null;
    }
  }
  function ry(n, r) {
    if (uo) return n === "compositionend" || !lo && mv(n, r) ? (n = z(), C = h = ei = null, uo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return vv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ay = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Sv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ay[n.type] : r === "textarea";
  }
  function cd(n, r, l, o) {
    Hi(o), r = ss(r, "onChange"), 0 < r.length && (l = new St("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Si = null, fu = null;
  function Ev(n) {
    vu(n, 0);
  }
  function as(n) {
    var r = ni(n);
    if (wr(r)) return n;
  }
  function iy(n, r) {
    if (n === "change") return r;
  }
  var Cv = !1;
  if (it) {
    var fd;
    if (it) {
      var dd = "oninput" in document;
      if (!dd) {
        var Rv = document.createElement("div");
        Rv.setAttribute("oninput", "return;"), dd = typeof Rv.oninput == "function";
      }
      fd = dd;
    } else fd = !1;
    Cv = fd && (!document.documentMode || 9 < document.documentMode);
  }
  function Tv() {
    Si && (Si.detachEvent("onpropertychange", xv), fu = Si = null);
  }
  function xv(n) {
    if (n.propertyName === "value" && as(fu)) {
      var r = [];
      cd(r, fu, n, Gt(n)), ru(Ev, r);
    }
  }
  function ly(n, r, l) {
    n === "focusin" ? (Tv(), Si = r, fu = l, Si.attachEvent("onpropertychange", xv)) : n === "focusout" && Tv();
  }
  function bv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return as(fu);
  }
  function uy(n, r) {
    if (n === "click") return as(r);
  }
  function wv(n, r) {
    if (n === "input" || n === "change") return as(r);
  }
  function oy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ti = typeof Object.is == "function" ? Object.is : oy;
  function is(n, r) {
    if (ti(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ie.call(r, c) || !ti(n[c], r[c])) return !1;
    }
    return !0;
  }
  function _v(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function gc(n, r) {
    var l = _v(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = _v(l);
    }
  }
  function Tl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ls() {
    for (var n = window, r = Rn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Rn(n.document);
    }
    return r;
  }
  function Sc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function oo(n) {
    var r = ls(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Tl(l.ownerDocument.documentElement, l)) {
      if (o !== null && Sc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = gc(l, d);
          var m = gc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var sy = it && "documentMode" in document && 11 >= document.documentMode, so = null, pd = null, us = null, vd = !1;
  function hd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    vd || so == null || so !== Rn(o) || (o = so, "selectionStart" in o && Sc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), us && is(us, o) || (us = o, o = ss(pd, "onSelect"), 0 < o.length && (r = new St("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = so)));
  }
  function Ec(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var du = { animationend: Ec("Animation", "AnimationEnd"), animationiteration: Ec("Animation", "AnimationIteration"), animationstart: Ec("Animation", "AnimationStart"), transitionend: Ec("Transition", "TransitionEnd") }, ur = {}, md = {};
  it && (md = document.createElement("div").style, "AnimationEvent" in window || (delete du.animationend.animation, delete du.animationiteration.animation, delete du.animationstart.animation), "TransitionEvent" in window || delete du.transitionend.transition);
  function Cc(n) {
    if (ur[n]) return ur[n];
    if (!du[n]) return n;
    var r = du[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in md) return ur[n] = r[l];
    return n;
  }
  var Dv = Cc("animationend"), kv = Cc("animationiteration"), Ov = Cc("animationstart"), Lv = Cc("transitionend"), yd = /* @__PURE__ */ new Map(), Rc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Da(n, r) {
    yd.set(n, r), We(r, [n]);
  }
  for (var gd = 0; gd < Rc.length; gd++) {
    var pu = Rc[gd], cy = pu.toLowerCase(), fy = pu[0].toUpperCase() + pu.slice(1);
    Da(cy, "on" + fy);
  }
  Da(Dv, "onAnimationEnd"), Da(kv, "onAnimationIteration"), Da(Ov, "onAnimationStart"), Da("dblclick", "onDoubleClick"), Da("focusin", "onFocus"), Da("focusout", "onBlur"), Da(Lv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), We("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), We("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), We("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), We("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), We("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), We("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var os = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Sd = new Set("cancel close invalid load scroll toggle".split(" ").concat(os));
  function Tc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ye(o, r, void 0, n), n.currentTarget = null;
  }
  function vu(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, U = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          Tc(c, E, U), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          Tc(c, E, U), d = T;
        }
      }
    }
    if (vi) throw n = R, vi = !1, R = null, n;
  }
  function Bt(n, r) {
    var l = r[ds];
    l === void 0 && (l = r[ds] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Mv(r, n, 2, !1), l.add(o));
  }
  function xc(n, r, l) {
    var o = 0;
    r && (o |= 4), Mv(l, n, o, r);
  }
  var bc = "_reactListening" + Math.random().toString(36).slice(2);
  function co(n) {
    if (!n[bc]) {
      n[bc] = !0, Be.forEach(function(l) {
        l !== "selectionchange" && (Sd.has(l) || xc(l, !1, n), xc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[bc] || (r[bc] = !0, xc("selectionchange", !1, r));
    }
  }
  function Mv(n, r, l, o) {
    switch (io(r)) {
      case 1:
        var c = no;
        break;
      case 4:
        c = ro;
        break;
      default:
        c = Cl;
    }
    l = c.bind(null, r, l, n), c = void 0, !Dr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function wc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = mu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    ru(function() {
      var U = d, Q = Gt(l), X = [];
      e: {
        var W = yd.get(n);
        if (W !== void 0) {
          var pe = St, Se = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              pe = ud;
              break;
            case "focusin":
              Se = "focus", pe = cu;
              break;
            case "focusout":
              Se = "blur", pe = cu;
              break;
            case "beforeblur":
            case "afterblur":
              pe = cu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              pe = Rl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              pe = Bi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              pe = pv;
              break;
            case Dv:
            case kv:
            case Ov:
              pe = hc;
              break;
            case Lv:
              pe = Ii;
              break;
            case "scroll":
              pe = un;
              break;
            case "wheel":
              pe = $i;
              break;
            case "copy":
            case "cut":
            case "paste":
              pe = sv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              pe = dv;
          }
          var Te = (r & 4) !== 0, kn = !Te && n === "scroll", D = Te ? W !== null ? W + "Capture" : null : W;
          Te = [];
          for (var b = U, L; b !== null; ) {
            L = b;
            var G = L.stateNode;
            if (L.tag === 5 && G !== null && (L = G, D !== null && (G = _r(b, D), G != null && Te.push(fo(b, G, L)))), kn) break;
            b = b.return;
          }
          0 < Te.length && (W = new pe(W, Se, null, l, Q), X.push({ event: W, listeners: Te }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (W = n === "mouseover" || n === "pointerover", pe = n === "mouseout" || n === "pointerout", W && l !== an && (Se = l.relatedTarget || l.fromElement) && (mu(Se) || Se[Wi])) break e;
          if ((pe || W) && (W = Q.window === Q ? Q : (W = Q.ownerDocument) ? W.defaultView || W.parentWindow : window, pe ? (Se = l.relatedTarget || l.toElement, pe = U, Se = Se ? mu(Se) : null, Se !== null && (kn = rt(Se), Se !== kn || Se.tag !== 5 && Se.tag !== 6) && (Se = null)) : (pe = null, Se = U), pe !== Se)) {
            if (Te = Rl, G = "onMouseLeave", D = "onMouseEnter", b = "mouse", (n === "pointerout" || n === "pointerover") && (Te = dv, G = "onPointerLeave", D = "onPointerEnter", b = "pointer"), kn = pe == null ? W : ni(pe), L = Se == null ? W : ni(Se), W = new Te(G, b + "leave", pe, l, Q), W.target = kn, W.relatedTarget = L, G = null, mu(Q) === U && (Te = new Te(D, b + "enter", Se, l, Q), Te.target = L, Te.relatedTarget = kn, G = Te), kn = G, pe && Se) t: {
              for (Te = pe, D = Se, b = 0, L = Te; L; L = xl(L)) b++;
              for (L = 0, G = D; G; G = xl(G)) L++;
              for (; 0 < b - L; ) Te = xl(Te), b--;
              for (; 0 < L - b; ) D = xl(D), L--;
              for (; b--; ) {
                if (Te === D || D !== null && Te === D.alternate) break t;
                Te = xl(Te), D = xl(D);
              }
              Te = null;
            }
            else Te = null;
            pe !== null && Nv(X, W, pe, Te, !1), Se !== null && kn !== null && Nv(X, kn, Se, Te, !0);
          }
        }
        e: {
          if (W = U ? ni(U) : window, pe = W.nodeName && W.nodeName.toLowerCase(), pe === "select" || pe === "input" && W.type === "file") var Ee = iy;
          else if (Sv(W)) if (Cv) Ee = wv;
          else {
            Ee = bv;
            var Fe = ly;
          }
          else (pe = W.nodeName) && pe.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (Ee = uy);
          if (Ee && (Ee = Ee(n, U))) {
            cd(X, Ee, l, Q);
            break e;
          }
          Fe && Fe(n, W, U), n === "focusout" && (Fe = W._wrapperState) && Fe.controlled && W.type === "number" && sa(W, "number", W.value);
        }
        switch (Fe = U ? ni(U) : window, n) {
          case "focusin":
            (Sv(Fe) || Fe.contentEditable === "true") && (so = Fe, pd = U, us = null);
            break;
          case "focusout":
            us = pd = so = null;
            break;
          case "mousedown":
            vd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vd = !1, hd(X, l, Q);
            break;
          case "selectionchange":
            if (sy) break;
          case "keydown":
          case "keyup":
            hd(X, l, Q);
        }
        var Ve;
        if (lo) e: {
          switch (n) {
            case "compositionstart":
              var qe = "onCompositionStart";
              break e;
            case "compositionend":
              qe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              qe = "onCompositionUpdate";
              break e;
          }
          qe = void 0;
        }
        else uo ? mv(n, l) && (qe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (qe = "onCompositionStart");
        qe && (vv && l.locale !== "ko" && (uo || qe !== "onCompositionStart" ? qe === "onCompositionEnd" && uo && (Ve = z()) : (ei = Q, h = "value" in ei ? ei.value : ei.textContent, uo = !0)), Fe = ss(U, qe), 0 < Fe.length && (qe = new ad(qe, n, null, l, Q), X.push({ event: qe, listeners: Fe }), Ve ? qe.data = Ve : (Ve = yv(l), Ve !== null && (qe.data = Ve)))), (Ve = rs ? gv(n, l) : ry(n, l)) && (U = ss(U, "onBeforeInput"), 0 < U.length && (Q = new ad("onBeforeInput", "beforeinput", null, l, Q), X.push({ event: Q, listeners: U }), Q.data = Ve));
      }
      vu(X, r);
    });
  }
  function fo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ss(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = _r(n, l), d != null && o.unshift(fo(n, d, c)), d = _r(n, r), d != null && o.push(fo(n, d, c))), n = n.return;
    }
    return o;
  }
  function xl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Nv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (T = _r(l, d), T != null && m.unshift(fo(l, T, E))) : c || (T = _r(l, d), T != null && m.push(fo(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var zv = /\r\n?/g, dy = /\u0000|\uFFFD/g;
  function Uv(n) {
    return (typeof n == "string" ? n : "" + n).replace(zv, `
`).replace(dy, "");
  }
  function _c(n, r, l) {
    if (r = Uv(r), Uv(n) !== r && l) throw Error(N(425));
  }
  function bl() {
  }
  var cs = null, hu = null;
  function Dc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var kc = typeof setTimeout == "function" ? setTimeout : void 0, Ed = typeof clearTimeout == "function" ? clearTimeout : void 0, Av = typeof Promise == "function" ? Promise : void 0, po = typeof queueMicrotask == "function" ? queueMicrotask : typeof Av < "u" ? function(n) {
    return Av.resolve(null).then(n).catch(Oc);
  } : kc;
  function Oc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function vo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Za(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Za(r);
  }
  function Ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function jv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var wl = Math.random().toString(36).slice(2), Ci = "__reactFiber$" + wl, fs = "__reactProps$" + wl, Wi = "__reactContainer$" + wl, ds = "__reactEvents$" + wl, ho = "__reactListeners$" + wl, py = "__reactHandles$" + wl;
  function mu(n) {
    var r = n[Ci];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Wi] || l[Ci]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = jv(n); n !== null; ) {
          if (l = n[Ci]) return l;
          n = jv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Me(n) {
    return n = n[Ci] || n[Wi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ni(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(N(33));
  }
  function yn(n) {
    return n[fs] || null;
  }
  var Rt = [], ka = -1;
  function Oa(n) {
    return { current: n };
  }
  function on(n) {
    0 > ka || (n.current = Rt[ka], Rt[ka] = null, ka--);
  }
  function ke(n, r) {
    ka++, Rt[ka] = n.current, n.current = r;
  }
  var Rr = {}, Cn = Oa(Rr), Wn = Oa(!1), Gr = Rr;
  function qr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Rr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function mo() {
    on(Wn), on(Cn);
  }
  function Fv(n, r, l) {
    if (Cn.current !== Rr) throw Error(N(168));
    ke(Cn, r), ke(Wn, l);
  }
  function ps(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(N(108, ot(n) || "Unknown", c));
    return ue({}, l, o);
  }
  function Jn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Rr, Gr = Cn.current, ke(Cn, n), ke(Wn, Wn.current), !0;
  }
  function Lc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(N(169));
    l ? (n = ps(n, r, Gr), o.__reactInternalMemoizedMergedChildContext = n, on(Wn), on(Cn), ke(Cn, n)) : on(Wn), ke(Wn, l);
  }
  var Ri = null, yo = !1, Qi = !1;
  function Mc(n) {
    Ri === null ? Ri = [n] : Ri.push(n);
  }
  function _l(n) {
    yo = !0, Mc(n);
  }
  function Ti() {
    if (!Qi && Ri !== null) {
      Qi = !0;
      var n = 0, r = zt;
      try {
        var l = Ri;
        for (zt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ri = null, yo = !1;
      } catch (c) {
        throw Ri !== null && (Ri = Ri.slice(n + 1)), cn(Xa, Ti), c;
      } finally {
        zt = r, Qi = !1;
      }
    }
    return null;
  }
  var Dl = [], kl = 0, Ol = null, Gi = 0, Un = [], La = 0, pa = null, xi = 1, bi = "";
  function yu(n, r) {
    Dl[kl++] = Gi, Dl[kl++] = Ol, Ol = n, Gi = r;
  }
  function Hv(n, r, l) {
    Un[La++] = xi, Un[La++] = bi, Un[La++] = pa, pa = n;
    var o = xi;
    n = bi;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, xi = 1 << 32 - kr(r) + c | l << c | o, bi = d + n;
    } else xi = 1 << d | l << c | o, bi = n;
  }
  function Nc(n) {
    n.return !== null && (yu(n, 1), Hv(n, 1, 0));
  }
  function zc(n) {
    for (; n === Ol; ) Ol = Dl[--kl], Dl[kl] = null, Gi = Dl[--kl], Dl[kl] = null;
    for (; n === pa; ) pa = Un[--La], Un[La] = null, bi = Un[--La], Un[La] = null, xi = Un[--La], Un[La] = null;
  }
  var Xr = null, Kr = null, pn = !1, Ma = null;
  function Cd(n, r) {
    var l = ja(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Pv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Xr = n, Kr = Ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Xr = n, Kr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = pa !== null ? { id: xi, overflow: bi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ja(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Xr = n, Kr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Rd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Td(n) {
    if (pn) {
      var r = Kr;
      if (r) {
        var l = r;
        if (!Pv(n, r)) {
          if (Rd(n)) throw Error(N(418));
          r = Ei(l.nextSibling);
          var o = Xr;
          r && Pv(n, r) ? Cd(o, l) : (n.flags = n.flags & -4097 | 2, pn = !1, Xr = n);
        }
      } else {
        if (Rd(n)) throw Error(N(418));
        n.flags = n.flags & -4097 | 2, pn = !1, Xr = n;
      }
    }
  }
  function Qn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Xr = n;
  }
  function Uc(n) {
    if (n !== Xr) return !1;
    if (!pn) return Qn(n), pn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Dc(n.type, n.memoizedProps)), r && (r = Kr)) {
      if (Rd(n)) throw vs(), Error(N(418));
      for (; r; ) Cd(n, r), r = Ei(r.nextSibling);
    }
    if (Qn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(N(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Kr = Ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Kr = null;
      }
    } else Kr = Xr ? Ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function vs() {
    for (var n = Kr; n; ) n = Ei(n.nextSibling);
  }
  function Ll() {
    Kr = Xr = null, pn = !1;
  }
  function qi(n) {
    Ma === null ? Ma = [n] : Ma.push(n);
  }
  var vy = et.ReactCurrentBatchConfig;
  function gu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(N(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(N(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(N(284));
      if (!l._owner) throw Error(N(290, n));
    }
    return n;
  }
  function Ac(n, r) {
    throw n = Object.prototype.toString.call(r), Error(N(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Vv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Su(n) {
    function r(D, b) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [b], D.flags |= 16) : L.push(b);
      }
    }
    function l(D, b) {
      if (!n) return null;
      for (; b !== null; ) r(D, b), b = b.sibling;
      return null;
    }
    function o(D, b) {
      for (D = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? D.set(b.key, b) : D.set(b.index, b), b = b.sibling;
      return D;
    }
    function c(D, b) {
      return D = Hl(D, b), D.index = 0, D.sibling = null, D;
    }
    function d(D, b, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < b ? (D.flags |= 2, b) : L) : (D.flags |= 2, b)) : (D.flags |= 1048576, b);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, b, L, G) {
      return b === null || b.tag !== 6 ? (b = ep(L, D.mode, G), b.return = D, b) : (b = c(b, L), b.return = D, b);
    }
    function T(D, b, L, G) {
      var Ee = L.type;
      return Ee === je ? Q(D, b, L.props.children, G, L.key) : b !== null && (b.elementType === Ee || typeof Ee == "object" && Ee !== null && Ee.$$typeof === Nt && Vv(Ee) === b.type) ? (G = c(b, L.props), G.ref = gu(D, b, L), G.return = D, G) : (G = Is(L.type, L.key, L.props, null, D.mode, G), G.ref = gu(D, b, L), G.return = D, G);
    }
    function U(D, b, L, G) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== L.containerInfo || b.stateNode.implementation !== L.implementation ? (b = mf(L, D.mode, G), b.return = D, b) : (b = c(b, L.children || []), b.return = D, b);
    }
    function Q(D, b, L, G, Ee) {
      return b === null || b.tag !== 7 ? (b = tl(L, D.mode, G, Ee), b.return = D, b) : (b = c(b, L), b.return = D, b);
    }
    function X(D, b, L) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return b = ep("" + b, D.mode, L), b.return = D, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case be:
            return L = Is(b.type, b.key, b.props, null, D.mode, L), L.ref = gu(D, null, b), L.return = D, L;
          case ut:
            return b = mf(b, D.mode, L), b.return = D, b;
          case Nt:
            var G = b._init;
            return X(D, G(b._payload), L);
        }
        if (Xn(b) || we(b)) return b = tl(b, D.mode, L, null), b.return = D, b;
        Ac(D, b);
      }
      return null;
    }
    function W(D, b, L, G) {
      var Ee = b !== null ? b.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return Ee !== null ? null : E(D, b, "" + L, G);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case be:
            return L.key === Ee ? T(D, b, L, G) : null;
          case ut:
            return L.key === Ee ? U(D, b, L, G) : null;
          case Nt:
            return Ee = L._init, W(
              D,
              b,
              Ee(L._payload),
              G
            );
        }
        if (Xn(L) || we(L)) return Ee !== null ? null : Q(D, b, L, G, null);
        Ac(D, L);
      }
      return null;
    }
    function pe(D, b, L, G, Ee) {
      if (typeof G == "string" && G !== "" || typeof G == "number") return D = D.get(L) || null, E(b, D, "" + G, Ee);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case be:
            return D = D.get(G.key === null ? L : G.key) || null, T(b, D, G, Ee);
          case ut:
            return D = D.get(G.key === null ? L : G.key) || null, U(b, D, G, Ee);
          case Nt:
            var Fe = G._init;
            return pe(D, b, L, Fe(G._payload), Ee);
        }
        if (Xn(G) || we(G)) return D = D.get(L) || null, Q(b, D, G, Ee, null);
        Ac(b, G);
      }
      return null;
    }
    function Se(D, b, L, G) {
      for (var Ee = null, Fe = null, Ve = b, qe = b = 0, tr = null; Ve !== null && qe < L.length; qe++) {
        Ve.index > qe ? (tr = Ve, Ve = null) : tr = Ve.sibling;
        var jt = W(D, Ve, L[qe], G);
        if (jt === null) {
          Ve === null && (Ve = tr);
          break;
        }
        n && Ve && jt.alternate === null && r(D, Ve), b = d(jt, b, qe), Fe === null ? Ee = jt : Fe.sibling = jt, Fe = jt, Ve = tr;
      }
      if (qe === L.length) return l(D, Ve), pn && yu(D, qe), Ee;
      if (Ve === null) {
        for (; qe < L.length; qe++) Ve = X(D, L[qe], G), Ve !== null && (b = d(Ve, b, qe), Fe === null ? Ee = Ve : Fe.sibling = Ve, Fe = Ve);
        return pn && yu(D, qe), Ee;
      }
      for (Ve = o(D, Ve); qe < L.length; qe++) tr = pe(Ve, D, qe, L[qe], G), tr !== null && (n && tr.alternate !== null && Ve.delete(tr.key === null ? qe : tr.key), b = d(tr, b, qe), Fe === null ? Ee = tr : Fe.sibling = tr, Fe = tr);
      return n && Ve.forEach(function(Bl) {
        return r(D, Bl);
      }), pn && yu(D, qe), Ee;
    }
    function Te(D, b, L, G) {
      var Ee = we(L);
      if (typeof Ee != "function") throw Error(N(150));
      if (L = Ee.call(L), L == null) throw Error(N(151));
      for (var Fe = Ee = null, Ve = b, qe = b = 0, tr = null, jt = L.next(); Ve !== null && !jt.done; qe++, jt = L.next()) {
        Ve.index > qe ? (tr = Ve, Ve = null) : tr = Ve.sibling;
        var Bl = W(D, Ve, jt.value, G);
        if (Bl === null) {
          Ve === null && (Ve = tr);
          break;
        }
        n && Ve && Bl.alternate === null && r(D, Ve), b = d(Bl, b, qe), Fe === null ? Ee = Bl : Fe.sibling = Bl, Fe = Bl, Ve = tr;
      }
      if (jt.done) return l(
        D,
        Ve
      ), pn && yu(D, qe), Ee;
      if (Ve === null) {
        for (; !jt.done; qe++, jt = L.next()) jt = X(D, jt.value, G), jt !== null && (b = d(jt, b, qe), Fe === null ? Ee = jt : Fe.sibling = jt, Fe = jt);
        return pn && yu(D, qe), Ee;
      }
      for (Ve = o(D, Ve); !jt.done; qe++, jt = L.next()) jt = pe(Ve, D, qe, jt.value, G), jt !== null && (n && jt.alternate !== null && Ve.delete(jt.key === null ? qe : jt.key), b = d(jt, b, qe), Fe === null ? Ee = jt : Fe.sibling = jt, Fe = jt);
      return n && Ve.forEach(function(Th) {
        return r(D, Th);
      }), pn && yu(D, qe), Ee;
    }
    function kn(D, b, L, G) {
      if (typeof L == "object" && L !== null && L.type === je && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case be:
            e: {
              for (var Ee = L.key, Fe = b; Fe !== null; ) {
                if (Fe.key === Ee) {
                  if (Ee = L.type, Ee === je) {
                    if (Fe.tag === 7) {
                      l(D, Fe.sibling), b = c(Fe, L.props.children), b.return = D, D = b;
                      break e;
                    }
                  } else if (Fe.elementType === Ee || typeof Ee == "object" && Ee !== null && Ee.$$typeof === Nt && Vv(Ee) === Fe.type) {
                    l(D, Fe.sibling), b = c(Fe, L.props), b.ref = gu(D, Fe, L), b.return = D, D = b;
                    break e;
                  }
                  l(D, Fe);
                  break;
                } else r(D, Fe);
                Fe = Fe.sibling;
              }
              L.type === je ? (b = tl(L.props.children, D.mode, G, L.key), b.return = D, D = b) : (G = Is(L.type, L.key, L.props, null, D.mode, G), G.ref = gu(D, b, L), G.return = D, D = G);
            }
            return m(D);
          case ut:
            e: {
              for (Fe = L.key; b !== null; ) {
                if (b.key === Fe) if (b.tag === 4 && b.stateNode.containerInfo === L.containerInfo && b.stateNode.implementation === L.implementation) {
                  l(D, b.sibling), b = c(b, L.children || []), b.return = D, D = b;
                  break e;
                } else {
                  l(D, b);
                  break;
                }
                else r(D, b);
                b = b.sibling;
              }
              b = mf(L, D.mode, G), b.return = D, D = b;
            }
            return m(D);
          case Nt:
            return Fe = L._init, kn(D, b, Fe(L._payload), G);
        }
        if (Xn(L)) return Se(D, b, L, G);
        if (we(L)) return Te(D, b, L, G);
        Ac(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, b !== null && b.tag === 6 ? (l(D, b.sibling), b = c(b, L), b.return = D, D = b) : (l(D, b), b = ep(L, D.mode, G), b.return = D, D = b), m(D)) : l(D, b);
    }
    return kn;
  }
  var bn = Su(!0), ce = Su(!1), va = Oa(null), Jr = null, go = null, xd = null;
  function bd() {
    xd = go = Jr = null;
  }
  function wd(n) {
    var r = va.current;
    on(va), n._currentValue = r;
  }
  function _d(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function gn(n, r) {
    Jr = n, xd = go = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (jn = !0), n.firstContext = null);
  }
  function Na(n) {
    var r = n._currentValue;
    if (xd !== n) if (n = { context: n, memoizedValue: r, next: null }, go === null) {
      if (Jr === null) throw Error(N(308));
      go = n, Jr.dependencies = { lanes: 0, firstContext: n };
    } else go = go.next = n;
    return r;
  }
  var Eu = null;
  function Dd(n) {
    Eu === null ? Eu = [n] : Eu.push(n);
  }
  function kd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Dd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ha(n, o);
  }
  function ha(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ma = !1;
  function Od(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Bv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Xi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ml(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Tt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ha(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Dd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ha(n, l);
  }
  function jc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  function Yv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function hs(n, r, l, o) {
    var c = n.updateQueue;
    ma = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = U : E.next = U, Q.lastBaseUpdate = T));
    }
    if (d !== null) {
      var X = c.baseState;
      m = 0, Q = U = T = null, E = d;
      do {
        var W = E.lane, pe = E.eventTime;
        if ((o & W) === W) {
          Q !== null && (Q = Q.next = {
            eventTime: pe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Se = n, Te = E;
            switch (W = r, pe = l, Te.tag) {
              case 1:
                if (Se = Te.payload, typeof Se == "function") {
                  X = Se.call(pe, X, W);
                  break e;
                }
                X = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = Te.payload, W = typeof Se == "function" ? Se.call(pe, X, W) : Se, W == null) break e;
                X = ue({}, X, W);
                break e;
              case 2:
                ma = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, W = c.effects, W === null ? c.effects = [E] : W.push(E));
        } else pe = { eventTime: pe, lane: W, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (U = Q = pe, T = X) : Q = Q.next = pe, m |= W;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          W = E, E = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (T = X), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Oi |= m, n.lanes = m, n.memoizedState = X;
    }
  }
  function Ld(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(N(191, c));
        c.call(o);
      }
    }
  }
  var ms = {}, wi = Oa(ms), ys = Oa(ms), gs = Oa(ms);
  function Cu(n) {
    if (n === ms) throw Error(N(174));
    return n;
  }
  function Md(n, r) {
    switch (ke(gs, r), ke(ys, n), ke(wi, ms), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ca(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ca(r, n);
    }
    on(wi), ke(wi, r);
  }
  function Ru() {
    on(wi), on(ys), on(gs);
  }
  function Iv(n) {
    Cu(gs.current);
    var r = Cu(wi.current), l = ca(r, n.type);
    r !== l && (ke(ys, n), ke(wi, l));
  }
  function Fc(n) {
    ys.current === n && (on(wi), on(ys));
  }
  var Sn = Oa(0);
  function Hc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Ss = [];
  function Ne() {
    for (var n = 0; n < Ss.length; n++) Ss[n]._workInProgressVersionPrimary = null;
    Ss.length = 0;
  }
  var yt = et.ReactCurrentDispatcher, Ut = et.ReactCurrentBatchConfig, Zt = 0, At = null, An = null, Zn = null, Pc = !1, Es = !1, Tu = 0, $ = 0;
  function Lt() {
    throw Error(N(321));
  }
  function $e(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ti(n[l], r[l])) return !1;
    return !0;
  }
  function Nl(n, r, l, o, c, d) {
    if (Zt = d, At = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, yt.current = n === null || n.memoizedState === null ? tf : ws, n = l(o, c), Es) {
      d = 0;
      do {
        if (Es = !1, Tu = 0, 25 <= d) throw Error(N(301));
        d += 1, Zn = An = null, r.updateQueue = null, yt.current = nf, n = l(o, c);
      } while (Es);
    }
    if (yt.current = Du, r = An !== null && An.next !== null, Zt = 0, Zn = An = At = null, Pc = !1, r) throw Error(N(300));
    return n;
  }
  function ri() {
    var n = Tu !== 0;
    return Tu = 0, n;
  }
  function Tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Zn === null ? At.memoizedState = Zn = n : Zn = Zn.next = n, Zn;
  }
  function wn() {
    if (An === null) {
      var n = At.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = An.next;
    var r = Zn === null ? At.memoizedState : Zn.next;
    if (r !== null) Zn = r, An = n;
    else {
      if (n === null) throw Error(N(310));
      An = n, n = { memoizedState: An.memoizedState, baseState: An.baseState, baseQueue: An.baseQueue, queue: An.queue, next: null }, Zn === null ? At.memoizedState = Zn = n : Zn = Zn.next = n;
    }
    return Zn;
  }
  function Ki(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zl(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(N(311));
    l.lastRenderedReducer = n;
    var o = An, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, U = d;
      do {
        var Q = U.lane;
        if ((Zt & Q) === Q) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var X = {
            lane: Q,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = X, m = o) : T = T.next = X, At.lanes |= Q, Oi |= Q;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, ti(o, r.memoizedState) || (jn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, At.lanes |= d, Oi |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function xu(n) {
    var r = wn(), l = r.queue;
    if (l === null) throw Error(N(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ti(d, r.memoizedState) || (jn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Vc() {
  }
  function Bc(n, r) {
    var l = At, o = wn(), c = r(), d = !ti(o.memoizedState, c);
    if (d && (o.memoizedState = c, jn = !0), o = o.queue, Cs($c.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Zn !== null && Zn.memoizedState.tag & 1) {
      if (l.flags |= 2048, bu(9, Ic.bind(null, l, o, c, r), void 0, null), Gn === null) throw Error(N(349));
      Zt & 30 || Yc(l, r, c);
    }
    return c;
  }
  function Yc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = At.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, At.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Ic(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Wc(r) && Qc(n);
  }
  function $c(n, r, l) {
    return l(function() {
      Wc(r) && Qc(n);
    });
  }
  function Wc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ti(n, l);
    } catch {
      return !0;
    }
  }
  function Qc(n) {
    var r = ha(n, 1);
    r !== null && Ur(r, n, 1, -1);
  }
  function Gc(n) {
    var r = Tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ki, lastRenderedState: n }, r.queue = n, n = n.dispatch = _u.bind(null, At, n), [r.memoizedState, n];
  }
  function bu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = At.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, At.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function qc() {
    return wn().memoizedState;
  }
  function So(n, r, l, o) {
    var c = Tr();
    At.flags |= n, c.memoizedState = bu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Eo(n, r, l, o) {
    var c = wn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (An !== null) {
      var m = An.memoizedState;
      if (d = m.destroy, o !== null && $e(o, m.deps)) {
        c.memoizedState = bu(r, l, d, o);
        return;
      }
    }
    At.flags |= n, c.memoizedState = bu(1 | r, l, d, o);
  }
  function Xc(n, r) {
    return So(8390656, 8, n, r);
  }
  function Cs(n, r) {
    return Eo(2048, 8, n, r);
  }
  function Kc(n, r) {
    return Eo(4, 2, n, r);
  }
  function Rs(n, r) {
    return Eo(4, 4, n, r);
  }
  function wu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Jc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Eo(4, 4, wu.bind(null, r, n), l);
  }
  function Ts() {
  }
  function Zc(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && $e(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function ef(n, r) {
    var l = wn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && $e(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Nd(n, r, l) {
    return Zt & 21 ? (ti(l, r) || (l = Ju(), At.lanes |= l, Oi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, jn = !0), n.memoizedState = l);
  }
  function xs(n, r) {
    var l = zt;
    zt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Ut.transition;
    Ut.transition = {};
    try {
      n(!1), r();
    } finally {
      zt = l, Ut.transition = o;
    }
  }
  function zd() {
    return wn().memoizedState;
  }
  function bs(n, r, l) {
    var o = Li(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Zr(n)) $v(r, l);
    else if (l = kd(n, r, l, o), l !== null) {
      var c = Pn();
      Ur(l, n, o, c), nn(l, r, o);
    }
  }
  function _u(n, r, l) {
    var o = Li(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Zr(n)) $v(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ti(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Dd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = kd(n, r, c, o), l !== null && (c = Pn(), Ur(l, n, o, c), nn(l, r, o));
    }
  }
  function Zr(n) {
    var r = n.alternate;
    return n === At || r !== null && r === At;
  }
  function $v(n, r) {
    Es = Pc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function nn(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var Du = { readContext: Na, useCallback: Lt, useContext: Lt, useEffect: Lt, useImperativeHandle: Lt, useInsertionEffect: Lt, useLayoutEffect: Lt, useMemo: Lt, useReducer: Lt, useRef: Lt, useState: Lt, useDebugValue: Lt, useDeferredValue: Lt, useTransition: Lt, useMutableSource: Lt, useSyncExternalStore: Lt, useId: Lt, unstable_isNewReconciler: !1 }, tf = { readContext: Na, useCallback: function(n, r) {
    return Tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Na, useEffect: Xc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, So(
      4194308,
      4,
      wu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return So(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return So(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Tr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Tr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = bs.bind(null, At, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Gc, useDebugValue: Ts, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = Gc(!1), r = n[0];
    return n = xs.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = At, c = Tr();
    if (pn) {
      if (l === void 0) throw Error(N(407));
      l = l();
    } else {
      if (l = r(), Gn === null) throw Error(N(349));
      Zt & 30 || Yc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Xc($c.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, bu(9, Ic.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Tr(), r = Gn.identifierPrefix;
    if (pn) {
      var l = bi, o = xi;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Tu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = $++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ws = {
    readContext: Na,
    useCallback: Zc,
    useContext: Na,
    useEffect: Cs,
    useImperativeHandle: Jc,
    useInsertionEffect: Kc,
    useLayoutEffect: Rs,
    useMemo: ef,
    useReducer: zl,
    useRef: qc,
    useState: function() {
      return zl(Ki);
    },
    useDebugValue: Ts,
    useDeferredValue: function(n) {
      var r = wn();
      return Nd(r, An.memoizedState, n);
    },
    useTransition: function() {
      var n = zl(Ki)[0], r = wn().memoizedState;
      return [n, r];
    },
    useMutableSource: Vc,
    useSyncExternalStore: Bc,
    useId: zd,
    unstable_isNewReconciler: !1
  }, nf = { readContext: Na, useCallback: Zc, useContext: Na, useEffect: Cs, useImperativeHandle: Jc, useInsertionEffect: Kc, useLayoutEffect: Rs, useMemo: ef, useReducer: xu, useRef: qc, useState: function() {
    return xu(Ki);
  }, useDebugValue: Ts, useDeferredValue: function(n) {
    var r = wn();
    return An === null ? r.memoizedState = n : Nd(r, An.memoizedState, n);
  }, useTransition: function() {
    var n = xu(Ki)[0], r = wn().memoizedState;
    return [n, r];
  }, useMutableSource: Vc, useSyncExternalStore: Bc, useId: zd, unstable_isNewReconciler: !1 };
  function ai(n, r) {
    if (n && n.defaultProps) {
      r = ue({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Ud(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ue({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var rf = { isMounted: function(n) {
    return (n = n._reactInternals) ? rt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Pn(), c = Li(n), d = Xi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (Ur(r, n, c, o), jc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Pn(), c = Li(n), d = Xi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ml(n, d, c), r !== null && (Ur(r, n, c, o), jc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Pn(), o = Li(n), c = Xi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ml(n, c, o), r !== null && (Ur(r, n, o, l), jc(r, n, o));
  } };
  function Wv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !is(l, o) || !is(c, d) : !0;
  }
  function af(n, r, l) {
    var o = !1, c = Rr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Na(d) : (c = zn(r) ? Gr : Cn.current, o = r.contextTypes, d = (o = o != null) ? qr(n, c) : Rr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = rf, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Qv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && rf.enqueueReplaceState(r, r.state, null);
  }
  function _s(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Od(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Na(d) : (d = zn(r) ? Gr : Cn.current, c.context = qr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Ud(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && rf.enqueueReplaceState(c, c.state, null), hs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ku(n, r) {
    try {
      var l = "", o = r;
      do
        l += vt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ad(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function jd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var lf = typeof WeakMap == "function" ? WeakMap : Map;
  function Gv(n, r, l) {
    l = Xi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      wo || (wo = !0, Mu = o), jd(n, r);
    }, l;
  }
  function Fd(n, r, l) {
    l = Xi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        jd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      jd(n, r), typeof o != "function" && (jl === null ? jl = /* @__PURE__ */ new Set([this]) : jl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Hd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new lf();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Cy.bind(null, n, r, l), r.then(n, n));
  }
  function qv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ul(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Xi(-1, 1), r.tag = 2, Ml(l, r, 1))), l.lanes |= 1), n);
  }
  var Ds = et.ReactCurrentOwner, jn = !1;
  function or(n, r, l, o) {
    r.child = n === null ? ce(r, null, l, o) : bn(r, n.child, l, o);
  }
  function ea(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return gn(r, c), o = Nl(n, r, l, o, d, c), l = ri(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ua(n, r, c)) : (pn && l && Nc(r), r.flags |= 1, or(n, r, o, c), r.child);
  }
  function Ou(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Zd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, lt(n, r, d, o, c)) : (n = Is(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : is, l(m, o) && n.ref === r.ref) return Ua(n, r, c);
    }
    return r.flags |= 1, n = Hl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function lt(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (is(d, o) && n.ref === r.ref) if (jn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (jn = !0);
      else return r.lanes = n.lanes, Ua(n, r, c);
    }
    return Xv(n, r, l, o, c);
  }
  function ks(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ke(To, ya), ya |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, ke(To, ya), ya |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, ke(To, ya), ya |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, ke(To, ya), ya |= o;
    return or(n, r, c, l), r.child;
  }
  function Pd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Xv(n, r, l, o, c) {
    var d = zn(l) ? Gr : Cn.current;
    return d = qr(r, d), gn(r, c), l = Nl(n, r, l, o, d, c), o = ri(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ua(n, r, c)) : (pn && o && Nc(r), r.flags |= 1, or(n, r, l, c), r.child);
  }
  function Kv(n, r, l, o, c) {
    if (zn(l)) {
      var d = !0;
      Jn(r);
    } else d = !1;
    if (gn(r, c), r.stateNode === null) za(n, r), af(r, l, o), _s(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Na(U) : (U = zn(l) ? Gr : Cn.current, U = qr(r, U));
      var Q = l.getDerivedStateFromProps, X = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Qv(r, m, o, U), ma = !1;
      var W = r.memoizedState;
      m.state = W, hs(r, o, m, c), T = r.memoizedState, E !== o || W !== T || Wn.current || ma ? (typeof Q == "function" && (Ud(r, l, Q, o), T = r.memoizedState), (E = ma || Wv(r, l, E, o, W, T, U)) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Bv(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ai(r.type, E), m.props = U, X = r.pendingProps, W = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Na(T) : (T = zn(l) ? Gr : Cn.current, T = qr(r, T));
      var pe = l.getDerivedStateFromProps;
      (Q = typeof pe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== X || W !== T) && Qv(r, m, o, T), ma = !1, W = r.memoizedState, m.state = W, hs(r, o, m, c);
      var Se = r.memoizedState;
      E !== X || W !== Se || Wn.current || ma ? (typeof pe == "function" && (Ud(r, l, pe, o), Se = r.memoizedState), (U = ma || Wv(r, l, U, o, W, Se, T) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Se, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Se, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Se), m.props = o, m.state = Se, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Os(n, r, l, o, d, c);
  }
  function Os(n, r, l, o, c, d) {
    Pd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Lc(r, l, !1), Ua(n, r, d);
    o = r.stateNode, Ds.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = bn(r, n.child, null, d), r.child = bn(r, null, E, d)) : or(n, r, E, d), r.memoizedState = o.state, c && Lc(r, l, !0), r.child;
  }
  function Co(n) {
    var r = n.stateNode;
    r.pendingContext ? Fv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Fv(n, r.context, !1), Md(n, r.containerInfo);
  }
  function Jv(n, r, l, o, c) {
    return Ll(), qi(c), r.flags |= 256, or(n, r, l, o), r.child;
  }
  var uf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function of(n, r, l) {
    var o = r.pendingProps, c = Sn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), ke(Sn, c & 1), n === null)
      return Td(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Pl(m, o, 0, null), n = tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Vd(l), r.memoizedState = uf, n) : Bd(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Zv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Hl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Hl(E, d) : (d = tl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Vd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = uf, o;
    }
    return d = n.child, n = d.sibling, o = Hl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Bd(n, r) {
    return r = Pl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ls(n, r, l, o) {
    return o !== null && qi(o), bn(r, n.child, null, l), n = Bd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Zv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ad(Error(N(422))), Ls(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Pl({ mode: "visible", children: o.children }, c, 0, null), d = tl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && bn(r, n.child, null, m), r.child.memoizedState = Vd(m), r.memoizedState = uf, d);
    if (!(r.mode & 1)) return Ls(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(N(419)), o = Ad(d, o, void 0), Ls(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, jn || E) {
      if (o = Gn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ha(n, c), Ur(o, n, c, -1));
      }
      return Jd(), o = Ad(Error(N(421))), Ls(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ry.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Kr = Ei(c.nextSibling), Xr = r, pn = !0, Ma = null, n !== null && (Un[La++] = xi, Un[La++] = bi, Un[La++] = pa, xi = n.id, bi = n.overflow, pa = r), r = Bd(r, o.children), r.flags |= 4096, r);
  }
  function Yd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), _d(n.return, r, l);
  }
  function Mr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function _i(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (or(n, r, o.children, l), o = Sn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Yd(n, l, r);
        else if (n.tag === 19) Yd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (ke(Sn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Hc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Mr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Hc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Mr(r, !0, l, null, d);
        break;
      case "together":
        Mr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function za(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ua(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Oi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(N(153));
    if (r.child !== null) {
      for (n = r.child, l = Hl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Hl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ms(n, r, l) {
    switch (r.tag) {
      case 3:
        Co(r), Ll();
        break;
      case 5:
        Iv(r);
        break;
      case 1:
        zn(r.type) && Jn(r);
        break;
      case 4:
        Md(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        ke(va, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (ke(Sn, Sn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? of(n, r, l) : (ke(Sn, Sn.current & 1), n = Ua(n, r, l), n !== null ? n.sibling : null);
        ke(Sn, Sn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return _i(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), ke(Sn, Sn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ks(n, r, l);
    }
    return Ua(n, r, l);
  }
  var Aa, Fn, eh, th;
  Aa = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Fn = function() {
  }, eh = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Cu(wi.current);
      var d = null;
      switch (l) {
        case "input":
          c = rr(n, c), o = rr(n, o), d = [];
          break;
        case "select":
          c = ue({}, c, { value: void 0 }), o = ue({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = In(n, c), o = In(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = bl);
      }
      sn(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Xe.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Xe.hasOwnProperty(U) ? (T != null && U === "onScroll" && Bt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, th = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ns(n, r) {
    if (!pn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function er(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function nh(n, r, l) {
    var o = r.pendingProps;
    switch (zc(r), r.tag) {
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
        return er(r), null;
      case 1:
        return zn(r.type) && mo(), er(r), null;
      case 3:
        return o = r.stateNode, Ru(), on(Wn), on(Cn), Ne(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Uc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ma !== null && (Nu(Ma), Ma = null))), Fn(n, r), er(r), null;
      case 5:
        Fc(r);
        var c = Cu(gs.current);
        if (l = r.type, n !== null && r.stateNode != null) eh(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(N(166));
            return er(r), null;
          }
          if (n = Cu(wi.current), Uc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ci] = r, o[fs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Bt("cancel", o), Bt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Bt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < os.length; c++) Bt(os[c], o);
                break;
              case "source":
                Bt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Bt(
                  "error",
                  o
                ), Bt("load", o);
                break;
              case "details":
                Bt("toggle", o);
                break;
              case "input":
                Bn(o, d), Bt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Bt("invalid", o);
                break;
              case "textarea":
                Sr(o, d), Bt("invalid", o);
            }
            sn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && _c(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && _c(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Xe.hasOwnProperty(m) && E != null && m === "onScroll" && Bt("scroll", o);
            }
            switch (l) {
              case "input":
                Ln(o), ci(o, d, !0);
                break;
              case "textarea":
                Ln(o), Mn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = bl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Er(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ci] = r, n[fs] = o, Aa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Kn(l, o), l) {
                case "dialog":
                  Bt("cancel", n), Bt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Bt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < os.length; c++) Bt(os[c], n);
                  c = o;
                  break;
                case "source":
                  Bt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Bt(
                    "error",
                    n
                  ), Bt("load", n), c = o;
                  break;
                case "details":
                  Bt("toggle", n), c = o;
                  break;
                case "input":
                  Bn(n, o), c = rr(n, o), Bt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ue({}, o, { value: void 0 }), Bt("invalid", n);
                  break;
                case "textarea":
                  Sr(n, o), c = In(n, o), Bt("invalid", n);
                  break;
                default:
                  c = o;
              }
              sn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? rn(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && fi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ae(n, T) : typeof T == "number" && ae(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Xe.hasOwnProperty(d) ? T != null && d === "onScroll" && Bt("scroll", n) : T != null && He(n, d, T, m));
              }
              switch (l) {
                case "input":
                  Ln(n), ci(n, o, !1);
                  break;
                case "textarea":
                  Ln(n), Mn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ft(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Tn(n, !!o.multiple, d, !1) : o.defaultValue != null && Tn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = bl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return er(r), null;
      case 6:
        if (n && r.stateNode != null) th(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(N(166));
          if (l = Cu(gs.current), Cu(wi.current), Uc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ci] = r, (d = o.nodeValue !== l) && (n = Xr, n !== null)) switch (n.tag) {
              case 3:
                _c(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && _c(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ci] = r, r.stateNode = o;
        }
        return er(r), null;
      case 13:
        if (on(Sn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (pn && Kr !== null && r.mode & 1 && !(r.flags & 128)) vs(), Ll(), r.flags |= 98560, d = !1;
          else if (d = Uc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(N(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(N(317));
              d[Ci] = r;
            } else Ll(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            er(r), d = !1;
          } else Ma !== null && (Nu(Ma), Ma = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Sn.current & 1 ? Dn === 0 && (Dn = 3) : Jd())), r.updateQueue !== null && (r.flags |= 4), er(r), null);
      case 4:
        return Ru(), Fn(n, r), n === null && co(r.stateNode.containerInfo), er(r), null;
      case 10:
        return wd(r.type._context), er(r), null;
      case 17:
        return zn(r.type) && mo(), er(r), null;
      case 19:
        if (on(Sn), d = r.memoizedState, d === null) return er(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ns(d, !1);
        else {
          if (Dn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Hc(n), m !== null) {
              for (r.flags |= 128, Ns(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return ke(Sn, Sn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && at() > bo && (r.flags |= 128, o = !0, Ns(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Hc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ns(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !pn) return er(r), null;
          } else 2 * at() - d.renderingStartTime > bo && l !== 1073741824 && (r.flags |= 128, o = !0, Ns(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = at(), r.sibling = null, l = Sn.current, ke(Sn, o ? l & 1 | 2 : l & 1), r) : (er(r), null);
      case 22:
      case 23:
        return Kd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ya & 1073741824 && (er(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : er(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(N(156, r.tag));
  }
  function sf(n, r) {
    switch (zc(r), r.tag) {
      case 1:
        return zn(r.type) && mo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ru(), on(Wn), on(Cn), Ne(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Fc(r), null;
      case 13:
        if (on(Sn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(N(340));
          Ll();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return on(Sn), null;
      case 4:
        return Ru(), null;
      case 10:
        return wd(r.type._context), null;
      case 22:
      case 23:
        return Kd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var zs = !1, xr = !1, hy = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function Ro(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      vn(n, r, o);
    }
    else l.current = null;
  }
  function cf(n, r, l) {
    try {
      l();
    } catch (o) {
      vn(n, r, o);
    }
  }
  var rh = !1;
  function ah(n, r) {
    if (cs = _a, n = ls(), Sc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, U = 0, Q = 0, X = n, W = null;
          t: for (; ; ) {
            for (var pe; X !== l || c !== 0 && X.nodeType !== 3 || (E = m + c), X !== d || o !== 0 && X.nodeType !== 3 || (T = m + o), X.nodeType === 3 && (m += X.nodeValue.length), (pe = X.firstChild) !== null; )
              W = X, X = pe;
            for (; ; ) {
              if (X === n) break t;
              if (W === l && ++U === c && (E = m), W === d && ++Q === o && (T = m), (pe = X.nextSibling) !== null) break;
              X = W, W = X.parentNode;
            }
            X = pe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (hu = { focusedElem: n, selectionRange: l }, _a = !1, me = r; me !== null; ) if (r = me, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, me = n;
    else for (; me !== null; ) {
      r = me;
      try {
        var Se = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Se !== null) {
              var Te = Se.memoizedProps, kn = Se.memoizedState, D = r.stateNode, b = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Te : ai(r.type, Te), kn);
              D.__reactInternalSnapshotBeforeUpdate = b;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(N(163));
        }
      } catch (G) {
        vn(r, r.return, G);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, me = n;
        break;
      }
      me = r.return;
    }
    return Se = rh, rh = !1, Se;
  }
  function Us(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && cf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function As(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Id(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function ff(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, ff(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ci], delete r[fs], delete r[ds], delete r[ho], delete r[py])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function js(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ji(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || js(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Di(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = bl));
    else if (o !== 4 && (n = n.child, n !== null)) for (Di(n, r, l), n = n.sibling; n !== null; ) Di(n, r, l), n = n.sibling;
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  var _n = null, Nr = !1;
  function zr(n, r, l) {
    for (l = l.child; l !== null; ) ih(n, r, l), l = l.sibling;
  }
  function ih(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(ml, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        xr || Ro(l, r);
      case 6:
        var o = _n, c = Nr;
        _n = null, zr(n, r, l), _n = o, Nr = c, _n !== null && (Nr ? (n = _n, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : _n.removeChild(l.stateNode));
        break;
      case 18:
        _n !== null && (Nr ? (n = _n, l = l.stateNode, n.nodeType === 8 ? vo(n.parentNode, l) : n.nodeType === 1 && vo(n, l), Za(n)) : vo(_n, l.stateNode));
        break;
      case 4:
        o = _n, c = Nr, _n = l.stateNode.containerInfo, Nr = !0, zr(n, r, l), _n = o, Nr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!xr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && cf(l, r, m), c = c.next;
          } while (c !== o);
        }
        zr(n, r, l);
        break;
      case 1:
        if (!xr && (Ro(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          vn(l, r, E);
        }
        zr(n, r, l);
        break;
      case 21:
        zr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (xr = (o = xr) || l.memoizedState !== null, zr(n, r, l), xr = o) : zr(n, r, l);
        break;
      default:
        zr(n, r, l);
    }
  }
  function lh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new hy()), r.forEach(function(o) {
        var c = hh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ii(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              _n = E.stateNode, Nr = !1;
              break e;
            case 3:
              _n = E.stateNode.containerInfo, Nr = !0;
              break e;
            case 4:
              _n = E.stateNode.containerInfo, Nr = !0;
              break e;
          }
          E = E.return;
        }
        if (_n === null) throw Error(N(160));
        ih(d, m, c), _n = null, Nr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (U) {
        vn(c, r, U);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) $d(r, n), r = r.sibling;
  }
  function $d(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ii(r, n), ta(n), o & 4) {
          try {
            Us(3, n, n.return), As(3, n);
          } catch (Te) {
            vn(n, n.return, Te);
          }
          try {
            Us(5, n, n.return);
          } catch (Te) {
            vn(n, n.return, Te);
          }
        }
        break;
      case 1:
        ii(r, n), ta(n), o & 512 && l !== null && Ro(l, l.return);
        break;
      case 5:
        if (ii(r, n), ta(n), o & 512 && l !== null && Ro(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ae(c, "");
          } catch (Te) {
            vn(n, n.return, Te);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Yn(c, d), Kn(E, m);
            var U = Kn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Q = T[m], X = T[m + 1];
              Q === "style" ? rn(c, X) : Q === "dangerouslySetInnerHTML" ? fi(c, X) : Q === "children" ? ae(c, X) : He(c, Q, X, U);
            }
            switch (E) {
              case "input":
                $r(c, d);
                break;
              case "textarea":
                $a(c, d);
                break;
              case "select":
                var W = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var pe = d.value;
                pe != null ? Tn(c, !!d.multiple, pe, !1) : W !== !!d.multiple && (d.defaultValue != null ? Tn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Tn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[fs] = d;
          } catch (Te) {
            vn(n, n.return, Te);
          }
        }
        break;
      case 6:
        if (ii(r, n), ta(n), o & 4) {
          if (n.stateNode === null) throw Error(N(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Te) {
            vn(n, n.return, Te);
          }
        }
        break;
      case 3:
        if (ii(r, n), ta(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Za(r.containerInfo);
        } catch (Te) {
          vn(n, n.return, Te);
        }
        break;
      case 4:
        ii(r, n), ta(n);
        break;
      case 13:
        ii(r, n), ta(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Gd = at())), o & 4 && lh(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (xr = (U = xr) || Q, ii(r, n), xr = U) : ii(r, n), ta(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !Q && n.mode & 1) for (me = n, Q = n.child; Q !== null; ) {
            for (X = me = Q; me !== null; ) {
              switch (W = me, pe = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Us(4, W, W.return);
                  break;
                case 1:
                  Ro(W, W.return);
                  var Se = W.stateNode;
                  if (typeof Se.componentWillUnmount == "function") {
                    o = W, l = W.return;
                    try {
                      r = o, Se.props = r.memoizedProps, Se.state = r.memoizedState, Se.componentWillUnmount();
                    } catch (Te) {
                      vn(o, l, Te);
                    }
                  }
                  break;
                case 5:
                  Ro(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    Fs(X);
                    continue;
                  }
              }
              pe !== null ? (pe.return = W, me = pe) : Fs(X);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, X = n; ; ) {
            if (X.tag === 5) {
              if (Q === null) {
                Q = X;
                try {
                  c = X.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = X.stateNode, T = X.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Vt("display", m));
                } catch (Te) {
                  vn(n, n.return, Te);
                }
              }
            } else if (X.tag === 6) {
              if (Q === null) try {
                X.stateNode.nodeValue = U ? "" : X.memoizedProps;
              } catch (Te) {
                vn(n, n.return, Te);
              }
            } else if ((X.tag !== 22 && X.tag !== 23 || X.memoizedState === null || X === n) && X.child !== null) {
              X.child.return = X, X = X.child;
              continue;
            }
            if (X === n) break e;
            for (; X.sibling === null; ) {
              if (X.return === null || X.return === n) break e;
              Q === X && (Q = null), X = X.return;
            }
            Q === X && (Q = null), X.sibling.return = X.return, X = X.sibling;
          }
        }
        break;
      case 19:
        ii(r, n), ta(n), o & 4 && lh(n);
        break;
      case 21:
        break;
      default:
        ii(
          r,
          n
        ), ta(n);
    }
  }
  function ta(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (js(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(N(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ae(c, ""), o.flags &= -33);
            var d = Ji(n);
            ki(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ji(n);
            Di(n, E, m);
            break;
          default:
            throw Error(N(161));
        }
      } catch (T) {
        vn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function my(n, r, l) {
    me = n, Wd(n);
  }
  function Wd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; me !== null; ) {
      var c = me, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || zs;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || xr;
          E = zs;
          var U = xr;
          if (zs = m, (xr = T) && !U) for (me = c; me !== null; ) m = me, T = m.child, m.tag === 22 && m.memoizedState !== null ? Qd(c) : T !== null ? (T.return = m, me = T) : Qd(c);
          for (; d !== null; ) me = d, Wd(d), d = d.sibling;
          me = c, zs = E, xr = U;
        }
        uh(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, me = d) : uh(n);
    }
  }
  function uh(n) {
    for (; me !== null; ) {
      var r = me;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              xr || As(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !xr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ai(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Ld(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Ld(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
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
              if (r.memoizedState === null) {
                var U = r.alternate;
                if (U !== null) {
                  var Q = U.memoizedState;
                  if (Q !== null) {
                    var X = Q.dehydrated;
                    X !== null && Za(X);
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
              throw Error(N(163));
          }
          xr || r.flags & 512 && Id(r);
        } catch (W) {
          vn(r, r.return, W);
        }
      }
      if (r === n) {
        me = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function Fs(n) {
    for (; me !== null; ) {
      var r = me;
      if (r === n) {
        me = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function Qd(n) {
    for (; me !== null; ) {
      var r = me;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              As(4, r);
            } catch (T) {
              vn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                vn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Id(r);
            } catch (T) {
              vn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Id(r);
            } catch (T) {
              vn(r, m, T);
            }
        }
      } catch (T) {
        vn(r, r.return, T);
      }
      if (r === n) {
        me = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, me = E;
        break;
      }
      me = r.return;
    }
  }
  var yy = Math.ceil, Al = et.ReactCurrentDispatcher, Lu = et.ReactCurrentOwner, sr = et.ReactCurrentBatchConfig, Tt = 0, Gn = null, Hn = null, cr = 0, ya = 0, To = Oa(0), Dn = 0, Hs = null, Oi = 0, xo = 0, df = 0, Ps = null, na = null, Gd = 0, bo = 1 / 0, ga = null, wo = !1, Mu = null, jl = null, pf = !1, Zi = null, Vs = 0, Fl = 0, _o = null, Bs = -1, br = 0;
  function Pn() {
    return Tt & 6 ? at() : Bs !== -1 ? Bs : Bs = at();
  }
  function Li(n) {
    return n.mode & 1 ? Tt & 2 && cr !== 0 ? cr & -cr : vy.transition !== null ? (br === 0 && (br = Ju()), br) : (n = zt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : io(n.type)), n) : 1;
  }
  function Ur(n, r, l, o) {
    if (50 < Fl) throw Fl = 0, _o = null, Error(N(185));
    Pi(n, l, o), (!(Tt & 2) || n !== Gn) && (n === Gn && (!(Tt & 2) && (xo |= l), Dn === 4 && li(n, cr)), ra(n, o), l === 1 && Tt === 0 && !(r.mode & 1) && (bo = at() + 500, yo && Ti()));
  }
  function ra(n, r) {
    var l = n.callbackNode;
    lu(n, r);
    var o = Ja(n, n === Gn ? cr : 0);
    if (o === 0) l !== null && ir(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ir(l), r === 1) n.tag === 0 ? _l(qd.bind(null, n)) : Mc(qd.bind(null, n)), po(function() {
        !(Tt & 6) && Ti();
      }), l = null;
      else {
        switch (eo(o)) {
          case 1:
            l = Xa;
            break;
          case 4:
            l = au;
            break;
          case 16:
            l = iu;
            break;
          case 536870912:
            l = qu;
            break;
          default:
            l = iu;
        }
        l = yh(l, vf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function vf(n, r) {
    if (Bs = -1, br = 0, Tt & 6) throw Error(N(327));
    var l = n.callbackNode;
    if (Do() && n.callbackNode !== l) return null;
    var o = Ja(n, n === Gn ? cr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = hf(n, o);
    else {
      r = o;
      var c = Tt;
      Tt |= 2;
      var d = sh();
      (Gn !== n || cr !== r) && (ga = null, bo = at() + 500, el(n, r));
      do
        try {
          ch();
          break;
        } catch (E) {
          oh(n, E);
        }
      while (!0);
      bd(), Al.current = d, Tt = c, Hn !== null ? r = 0 : (Gn = null, cr = 0, r = Dn);
    }
    if (r !== 0) {
      if (r === 2 && (c = gl(n), c !== 0 && (o = c, r = Ys(n, c))), r === 1) throw l = Hs, el(n, 0), li(n, o), ra(n, at()), l;
      if (r === 6) li(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !gy(c) && (r = hf(n, o), r === 2 && (d = gl(n), d !== 0 && (o = d, r = Ys(n, d))), r === 1)) throw l = Hs, el(n, 0), li(n, o), ra(n, at()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(N(345));
          case 2:
            Uu(n, na, ga);
            break;
          case 3:
            if (li(n, o), (o & 130023424) === o && (r = Gd + 500 - at(), 10 < r)) {
              if (Ja(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Pn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = kc(Uu.bind(null, n, na, ga), r);
              break;
            }
            Uu(n, na, ga);
            break;
          case 4:
            if (li(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - kr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = at() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * yy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = kc(Uu.bind(null, n, na, ga), o);
              break;
            }
            Uu(n, na, ga);
            break;
          case 5:
            Uu(n, na, ga);
            break;
          default:
            throw Error(N(329));
        }
      }
    }
    return ra(n, at()), n.callbackNode === l ? vf.bind(null, n) : null;
  }
  function Ys(n, r) {
    var l = Ps;
    return n.current.memoizedState.isDehydrated && (el(n, r).flags |= 256), n = hf(n, r), n !== 2 && (r = na, na = l, r !== null && Nu(r)), n;
  }
  function Nu(n) {
    na === null ? na = n : na.push.apply(na, n);
  }
  function gy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ti(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function li(n, r) {
    for (r &= ~df, r &= ~xo, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function qd(n) {
    if (Tt & 6) throw Error(N(327));
    Do();
    var r = Ja(n, 0);
    if (!(r & 1)) return ra(n, at()), null;
    var l = hf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gl(n);
      o !== 0 && (r = o, l = Ys(n, o));
    }
    if (l === 1) throw l = Hs, el(n, 0), li(n, r), ra(n, at()), l;
    if (l === 6) throw Error(N(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Uu(n, na, ga), ra(n, at()), null;
  }
  function Xd(n, r) {
    var l = Tt;
    Tt |= 1;
    try {
      return n(r);
    } finally {
      Tt = l, Tt === 0 && (bo = at() + 500, yo && Ti());
    }
  }
  function zu(n) {
    Zi !== null && Zi.tag === 0 && !(Tt & 6) && Do();
    var r = Tt;
    Tt |= 1;
    var l = sr.transition, o = zt;
    try {
      if (sr.transition = null, zt = 1, n) return n();
    } finally {
      zt = o, sr.transition = l, Tt = r, !(Tt & 6) && Ti();
    }
  }
  function Kd() {
    ya = To.current, on(To);
  }
  function el(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ed(l)), Hn !== null) for (l = Hn.return; l !== null; ) {
      var o = l;
      switch (zc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && mo();
          break;
        case 3:
          Ru(), on(Wn), on(Cn), Ne();
          break;
        case 5:
          Fc(o);
          break;
        case 4:
          Ru();
          break;
        case 13:
          on(Sn);
          break;
        case 19:
          on(Sn);
          break;
        case 10:
          wd(o.type._context);
          break;
        case 22:
        case 23:
          Kd();
      }
      l = l.return;
    }
    if (Gn = n, Hn = n = Hl(n.current, null), cr = ya = r, Dn = 0, Hs = null, df = xo = Oi = 0, na = Ps = null, Eu !== null) {
      for (r = 0; r < Eu.length; r++) if (l = Eu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      Eu = null;
    }
    return n;
  }
  function oh(n, r) {
    do {
      var l = Hn;
      try {
        if (bd(), yt.current = Du, Pc) {
          for (var o = At.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Pc = !1;
        }
        if (Zt = 0, Zn = An = At = null, Es = !1, Tu = 0, Lu.current = null, l === null || l.return === null) {
          Dn = 1, Hs = r, Hn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = cr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, Q = E, X = Q.tag;
            if (!(Q.mode & 1) && (X === 0 || X === 11 || X === 15)) {
              var W = Q.alternate;
              W ? (Q.updateQueue = W.updateQueue, Q.memoizedState = W.memoizedState, Q.lanes = W.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var pe = qv(m);
            if (pe !== null) {
              pe.flags &= -257, Ul(pe, m, E, d, r), pe.mode & 1 && Hd(d, U, r), r = pe, T = U;
              var Se = r.updateQueue;
              if (Se === null) {
                var Te = /* @__PURE__ */ new Set();
                Te.add(T), r.updateQueue = Te;
              } else Se.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Hd(d, U, r), Jd();
                break e;
              }
              T = Error(N(426));
            }
          } else if (pn && E.mode & 1) {
            var kn = qv(m);
            if (kn !== null) {
              !(kn.flags & 65536) && (kn.flags |= 256), Ul(kn, m, E, d, r), qi(ku(T, E));
              break e;
            }
          }
          d = T = ku(T, E), Dn !== 4 && (Dn = 2), Ps === null ? Ps = [d] : Ps.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Gv(d, T, r);
                Yv(d, D);
                break e;
              case 1:
                E = T;
                var b = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof b.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (jl === null || !jl.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var G = Fd(d, E, r);
                  Yv(d, G);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        dh(l);
      } catch (Ee) {
        r = Ee, Hn === l && l !== null && (Hn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function sh() {
    var n = Al.current;
    return Al.current = Du, n === null ? Du : n;
  }
  function Jd() {
    (Dn === 0 || Dn === 3 || Dn === 2) && (Dn = 4), Gn === null || !(Oi & 268435455) && !(xo & 268435455) || li(Gn, cr);
  }
  function hf(n, r) {
    var l = Tt;
    Tt |= 2;
    var o = sh();
    (Gn !== n || cr !== r) && (ga = null, el(n, r));
    do
      try {
        Sy();
        break;
      } catch (c) {
        oh(n, c);
      }
    while (!0);
    if (bd(), Tt = l, Al.current = o, Hn !== null) throw Error(N(261));
    return Gn = null, cr = 0, Dn;
  }
  function Sy() {
    for (; Hn !== null; ) fh(Hn);
  }
  function ch() {
    for (; Hn !== null && !Ga(); ) fh(Hn);
  }
  function fh(n) {
    var r = mh(n.alternate, n, ya);
    n.memoizedProps = n.pendingProps, r === null ? dh(n) : Hn = r, Lu.current = null;
  }
  function dh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = sf(l, r), l !== null) {
          l.flags &= 32767, Hn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Dn = 6, Hn = null;
          return;
        }
      } else if (l = nh(l, r, ya), l !== null) {
        Hn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Hn = r;
        return;
      }
      Hn = r = n;
    } while (r !== null);
    Dn === 0 && (Dn = 5);
  }
  function Uu(n, r, l) {
    var o = zt, c = sr.transition;
    try {
      sr.transition = null, zt = 1, Ey(n, r, l, o);
    } finally {
      sr.transition = c, zt = o;
    }
    return null;
  }
  function Ey(n, r, l, o) {
    do
      Do();
    while (Zi !== null);
    if (Tt & 6) throw Error(N(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(N(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Zf(n, d), n === Gn && (Hn = Gn = null, cr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || pf || (pf = !0, yh(iu, function() {
      return Do(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = sr.transition, sr.transition = null;
      var m = zt;
      zt = 1;
      var E = Tt;
      Tt |= 4, Lu.current = null, ah(n, l), $d(l, n), oo(hu), _a = !!cs, hu = cs = null, n.current = l, my(l), qa(), Tt = E, zt = m, sr.transition = d;
    } else n.current = l;
    if (pf && (pf = !1, Zi = n, Vs = c), d = n.pendingLanes, d === 0 && (jl = null), Xo(l.stateNode), ra(n, at()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (wo) throw wo = !1, n = Mu, Mu = null, n;
    return Vs & 1 && n.tag !== 0 && Do(), d = n.pendingLanes, d & 1 ? n === _o ? Fl++ : (Fl = 0, _o = n) : Fl = 0, Ti(), null;
  }
  function Do() {
    if (Zi !== null) {
      var n = eo(Vs), r = sr.transition, l = zt;
      try {
        if (sr.transition = null, zt = 16 > n ? 16 : n, Zi === null) var o = !1;
        else {
          if (n = Zi, Zi = null, Vs = 0, Tt & 6) throw Error(N(331));
          var c = Tt;
          for (Tt |= 4, me = n.current; me !== null; ) {
            var d = me, m = d.child;
            if (me.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (me = U; me !== null; ) {
                    var Q = me;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Us(8, Q, d);
                    }
                    var X = Q.child;
                    if (X !== null) X.return = Q, me = X;
                    else for (; me !== null; ) {
                      Q = me;
                      var W = Q.sibling, pe = Q.return;
                      if (ff(Q), Q === U) {
                        me = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = pe, me = W;
                        break;
                      }
                      me = pe;
                    }
                  }
                }
                var Se = d.alternate;
                if (Se !== null) {
                  var Te = Se.child;
                  if (Te !== null) {
                    Se.child = null;
                    do {
                      var kn = Te.sibling;
                      Te.sibling = null, Te = kn;
                    } while (Te !== null);
                  }
                }
                me = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, me = m;
            else e: for (; me !== null; ) {
              if (d = me, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Us(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, me = D;
                break e;
              }
              me = d.return;
            }
          }
          var b = n.current;
          for (me = b; me !== null; ) {
            m = me;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, me = L;
            else e: for (m = b; me !== null; ) {
              if (E = me, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    As(9, E);
                }
              } catch (Ee) {
                vn(E, E.return, Ee);
              }
              if (E === m) {
                me = null;
                break e;
              }
              var G = E.sibling;
              if (G !== null) {
                G.return = E.return, me = G;
                break e;
              }
              me = E.return;
            }
          }
          if (Tt = c, Ti(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(ml, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        zt = l, sr.transition = r;
      }
    }
    return !1;
  }
  function ph(n, r, l) {
    r = ku(l, r), r = Gv(n, r, 1), n = Ml(n, r, 1), r = Pn(), n !== null && (Pi(n, 1, r), ra(n, r));
  }
  function vn(n, r, l) {
    if (n.tag === 3) ph(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ph(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (jl === null || !jl.has(o))) {
          n = ku(l, n), n = Fd(r, n, 1), r = Ml(r, n, 1), n = Pn(), r !== null && (Pi(r, 1, n), ra(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Cy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Pn(), n.pingedLanes |= n.suspendedLanes & l, Gn === n && (cr & l) === l && (Dn === 4 || Dn === 3 && (cr & 130023424) === cr && 500 > at() - Gd ? el(n, 0) : df |= l), ra(n, r);
  }
  function vh(n, r) {
    r === 0 && (n.mode & 1 ? (r = da, da <<= 1, !(da & 130023424) && (da = 4194304)) : r = 1);
    var l = Pn();
    n = ha(n, r), n !== null && (Pi(n, r, l), ra(n, l));
  }
  function Ry(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), vh(n, l);
  }
  function hh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(N(314));
    }
    o !== null && o.delete(r), vh(n, l);
  }
  var mh;
  mh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Wn.current) jn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return jn = !1, Ms(n, r, l);
      jn = !!(n.flags & 131072);
    }
    else jn = !1, pn && r.flags & 1048576 && Hv(r, Gi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        za(n, r), n = r.pendingProps;
        var c = qr(r, Cn.current);
        gn(r, l), c = Nl(null, r, o, n, c, l);
        var d = ri();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(o) ? (d = !0, Jn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Od(r), c.updater = rf, r.stateNode = c, c._reactInternals = r, _s(r, o, n, l), r = Os(null, r, o, !0, d, l)) : (r.tag = 0, pn && d && Nc(r), or(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (za(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = xy(o), n = ai(o, n), c) {
            case 0:
              r = Xv(null, r, o, n, l);
              break e;
            case 1:
              r = Kv(null, r, o, n, l);
              break e;
            case 11:
              r = ea(null, r, o, n, l);
              break e;
            case 14:
              r = Ou(null, r, o, ai(o.type, n), l);
              break e;
          }
          throw Error(N(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Xv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), Kv(n, r, o, c, l);
      case 3:
        e: {
          if (Co(r), n === null) throw Error(N(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Bv(n, r), hs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = ku(Error(N(423)), r), r = Jv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = ku(Error(N(424)), r), r = Jv(n, r, o, l, c);
            break e;
          } else for (Kr = Ei(r.stateNode.containerInfo.firstChild), Xr = r, pn = !0, Ma = null, l = ce(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ll(), o === c) {
              r = Ua(n, r, l);
              break e;
            }
            or(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Iv(r), n === null && Td(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Dc(o, c) ? m = null : d !== null && Dc(o, d) && (r.flags |= 32), Pd(n, r), or(n, r, m, l), r.child;
      case 6:
        return n === null && Td(r), null;
      case 13:
        return of(n, r, l);
      case 4:
        return Md(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = bn(r, null, o, l) : or(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), ea(n, r, o, c, l);
      case 7:
        return or(n, r, r.pendingProps, l), r.child;
      case 8:
        return or(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return or(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, ke(va, o._currentValue), o._currentValue = m, d !== null) if (ti(d.value, m)) {
            if (d.children === c.children && !Wn.current) {
              r = Ua(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Xi(-1, l & -l), T.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var Q = U.pending;
                      Q === null ? T.next = T : (T.next = Q.next, Q.next = T), U.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), _d(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(N(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), _d(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          or(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, gn(r, l), c = Na(c), o = o(c), r.flags |= 1, or(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ai(o, r.pendingProps), c = ai(o.type, c), Ou(n, r, o, c, l);
      case 15:
        return lt(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ai(o, c), za(n, r), r.tag = 1, zn(o) ? (n = !0, Jn(r)) : n = !1, gn(r, l), af(r, o, c), _s(r, o, c, l), Os(null, r, o, !0, n, l);
      case 19:
        return _i(n, r, l);
      case 22:
        return ks(n, r, l);
    }
    throw Error(N(156, r.tag));
  };
  function yh(n, r) {
    return cn(n, r);
  }
  function Ty(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ja(n, r, l, o) {
    return new Ty(n, r, l, o);
  }
  function Zd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function xy(n) {
    if (typeof n == "function") return Zd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === kt) return 11;
      if (n === Ot) return 14;
    }
    return 2;
  }
  function Hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = ja(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Is(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Zd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case je:
        return tl(l.children, c, d, r);
      case Re:
        m = 8, c |= 8;
        break;
      case Dt:
        return n = ja(12, l, r, c | 2), n.elementType = Dt, n.lanes = d, n;
      case ze:
        return n = ja(13, l, r, c), n.elementType = ze, n.lanes = d, n;
      case Pt:
        return n = ja(19, l, r, c), n.elementType = Pt, n.lanes = d, n;
      case xe:
        return Pl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case $t:
            m = 10;
            break e;
          case Qt:
            m = 9;
            break e;
          case kt:
            m = 11;
            break e;
          case Ot:
            m = 14;
            break e;
          case Nt:
            m = 16, o = null;
            break e;
        }
        throw Error(N(130, n == null ? n : typeof n, ""));
    }
    return r = ja(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function tl(n, r, l, o) {
    return n = ja(7, n, o, r), n.lanes = l, n;
  }
  function Pl(n, r, l, o) {
    return n = ja(22, n, o, r), n.elementType = xe, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function ep(n, r, l) {
    return n = ja(6, n, null, r), n.lanes = l, n;
  }
  function mf(n, r, l) {
    return r = ja(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function gh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zu(0), this.expirationTimes = Zu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function yf(n, r, l, o, c, d, m, E, T) {
    return n = new gh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ja(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Od(d), n;
  }
  function by(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ut, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function tp(n) {
    if (!n) return Rr;
    n = n._reactInternals;
    e: {
      if (rt(n) !== n || n.tag !== 1) throw Error(N(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(N(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (zn(l)) return ps(n, l, r);
    }
    return r;
  }
  function Sh(n, r, l, o, c, d, m, E, T) {
    return n = yf(l, o, !0, n, c, d, m, E, T), n.context = tp(null), l = n.current, o = Pn(), c = Li(l), d = Xi(o, c), d.callback = r ?? null, Ml(l, d, c), n.current.lanes = c, Pi(n, c, o), ra(n, o), n;
  }
  function gf(n, r, l, o) {
    var c = r.current, d = Pn(), m = Li(c);
    return l = tp(l), r.context === null ? r.context = l : r.pendingContext = l, r = Xi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ml(c, r, m), n !== null && (Ur(n, c, m, d), jc(n, c, m)), m;
  }
  function Sf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function np(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Ef(n, r) {
    np(n, r), (n = n.alternate) && np(n, r);
  }
  function Eh() {
    return null;
  }
  var Au = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function rp(n) {
    this._internalRoot = n;
  }
  Cf.prototype.render = rp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(N(409));
    gf(n, r, null, null);
  }, Cf.prototype.unmount = rp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      zu(function() {
        gf(null, n, null, null);
      }), r[Wi] = null;
    }
  };
  function Cf(n) {
    this._internalRoot = n;
  }
  Cf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ke();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < $n.length && r !== 0 && r < $n[l].priority; l++) ;
      $n.splice(l, 0, n), l === 0 && Zo(n);
    }
  };
  function ap(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Rf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Ch() {
  }
  function wy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = Sf(m);
          d.call(U);
        };
      }
      var m = Sh(r, o, n, 0, null, !1, !1, "", Ch);
      return n._reactRootContainer = m, n[Wi] = m.current, co(n.nodeType === 8 ? n.parentNode : n), zu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = Sf(T);
        E.call(U);
      };
    }
    var T = yf(n, 0, !1, null, null, !1, !1, "", Ch);
    return n._reactRootContainer = T, n[Wi] = T.current, co(n.nodeType === 8 ? n.parentNode : n), zu(function() {
      gf(r, T, l, o);
    }), T;
  }
  function $s(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = Sf(m);
          E.call(T);
        };
      }
      gf(r, m, n, c);
    } else m = wy(l, r, n, c, o);
    return Sf(m);
  }
  wt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ka(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), ra(r, at()), !(Tt & 6) && (bo = at() + 500, Ti()));
        }
        break;
      case 13:
        zu(function() {
          var o = ha(n, 1);
          if (o !== null) {
            var c = Pn();
            Ur(o, n, 1, c);
          }
        }), Ef(n, 1);
    }
  }, Ko = function(n) {
    if (n.tag === 13) {
      var r = ha(n, 134217728);
      if (r !== null) {
        var l = Pn();
        Ur(r, n, 134217728, l);
      }
      Ef(n, 134217728);
    }
  }, hi = function(n) {
    if (n.tag === 13) {
      var r = Li(n), l = ha(n, r);
      if (l !== null) {
        var o = Pn();
        Ur(l, n, r, o);
      }
      Ef(n, r);
    }
  }, Ke = function() {
    return zt;
  }, to = function(n, r) {
    var l = zt;
    try {
      return zt = n, r();
    } finally {
      zt = l;
    }
  }, qt = function(n, r, l) {
    switch (r) {
      case "input":
        if ($r(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = yn(o);
              if (!c) throw Error(N(90));
              wr(o), $r(o, c);
            }
          }
        }
        break;
      case "textarea":
        $a(n, l);
        break;
      case "select":
        r = l.value, r != null && Tn(n, !!l.multiple, r, !1);
    }
  }, nu = Xd, pl = zu;
  var _y = { usingClientEntryPoint: !1, Events: [Me, ni, yn, Hi, tu, Xd] }, Ws = { findFiberByHostInstance: mu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Rh = { bundleType: Ws.bundleType, version: Ws.version, rendererPackageName: Ws.rendererPackageName, rendererConfig: Ws.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: et.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = xn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ws.findFiberByHostInstance || Eh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber) try {
      ml = Vl.inject(Rh), Wr = Vl;
    } catch {
    }
  }
  return Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _y, Ya.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ap(r)) throw Error(N(200));
    return by(n, r, null, l);
  }, Ya.createRoot = function(n, r) {
    if (!ap(n)) throw Error(N(299));
    var l = !1, o = "", c = Au;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = yf(n, 1, !1, null, null, l, !1, o, c), n[Wi] = r.current, co(n.nodeType === 8 ? n.parentNode : n), new rp(r);
  }, Ya.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(N(188)) : (n = Object.keys(n).join(","), Error(N(268, n)));
    return n = xn(r), n = n === null ? null : n.stateNode, n;
  }, Ya.flushSync = function(n) {
    return zu(n);
  }, Ya.hydrate = function(n, r, l) {
    if (!Rf(r)) throw Error(N(200));
    return $s(null, n, r, !0, l);
  }, Ya.hydrateRoot = function(n, r, l) {
    if (!ap(n)) throw Error(N(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Au;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Sh(r, null, n, 1, l ?? null, c, !1, d, m), n[Wi] = r.current, co(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Cf(r);
  }, Ya.render = function(n, r, l) {
    if (!Rf(r)) throw Error(N(200));
    return $s(null, n, r, !1, l);
  }, Ya.unmountComponentAtNode = function(n) {
    if (!Rf(n)) throw Error(N(40));
    return n._reactRootContainer ? (zu(function() {
      $s(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Wi] = null;
      });
    }), !0) : !1;
  }, Ya.unstable_batchedUpdates = Xd, Ya.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Rf(l)) throw Error(N(200));
    if (n == null || n._reactInternals === void 0) throw Error(N(38));
    return $s(n, r, l, !1, o);
  }, Ya.version = "18.3.1-next-f1338f8080-20240426", Ya;
}
var Ia = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hT;
function hD() {
  return hT || (hT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var q = It, B = ET(), N = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Be = !1;
    function Xe(e) {
      Be = e;
    }
    function We(e) {
      if (!Be) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        it("warn", e, a);
      }
    }
    function S(e) {
      if (!Be) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        it("error", e, a);
      }
    }
    function it(e, t, a) {
      {
        var i = N.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ie = 0, re = 1, Ye = 2, J = 3, ne = 4, Z = 5, Oe = 6, nt = 7, ge = 8, Mt = 9, Le = 10, He = 11, et = 12, be = 13, ut = 14, je = 15, Re = 16, Dt = 17, $t = 18, Qt = 19, kt = 21, ze = 22, Pt = 23, Ot = 24, Nt = 25, xe = !0, te = !1, we = !1, ue = !1, _ = !1, P = !0, Qe = !0, Ie = !0, vt = !0, ct = /* @__PURE__ */ new Set(), ot = {}, ft = {};
    function ht(e, t) {
      Wt(e, t), Wt(e + "Capture", t);
    }
    function Wt(e, t) {
      ot[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ot[e] = t;
      {
        var a = e.toLowerCase();
        ft[a] = e, e === "onDoubleClick" && (ft.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ct.add(t[i]);
    }
    var Ln = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wr = Object.prototype.hasOwnProperty;
    function Rn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function rr(e) {
      try {
        return Bn(e), !1;
      } catch {
        return !0;
      }
    }
    function Bn(e) {
      return "" + e;
    }
    function Yn(e, t) {
      if (rr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Bn(e);
    }
    function $r(e) {
      if (rr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), Bn(e);
    }
    function ci(e, t) {
      if (rr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Bn(e);
    }
    function sa(e, t) {
      if (rr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Bn(e);
    }
    function Xn(e) {
      if (rr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), Bn(e);
    }
    function Tn(e) {
      if (rr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Rn(e)), Bn(e);
    }
    var In = 0, Sr = 1, $a = 2, Mn = 3, Er = 4, ca = 5, Wa = 6, fi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ae = fi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", _e = new RegExp("^[" + fi + "][" + ae + "]*$"), dt = {}, Vt = {};
    function rn(e) {
      return wr.call(Vt, e) ? !0 : wr.call(dt, e) ? !1 : _e.test(e) ? (Vt[e] = !0, !0) : (dt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function hn(e, t, a) {
      return t !== null ? t.type === In : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function sn(e, t, a, i) {
      if (a !== null && a.type === In)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Kn(e, t, a, i) {
      if (t === null || typeof t > "u" || sn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Mn:
            return !t;
          case Er:
            return t === !1;
          case ca:
            return isNaN(t);
          case Wa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function an(e) {
      return qt.hasOwnProperty(e) ? qt[e] : null;
    }
    function Gt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === $a || t === Mn || t === Er, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var qt = {}, fa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    fa.forEach(function(e) {
      qt[e] = new Gt(
        e,
        In,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      qt[t] = new Gt(
        t,
        Sr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      qt[e] = new Gt(
        e,
        $a,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      qt[e] = new Gt(
        e,
        $a,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      qt[e] = new Gt(
        e,
        Mn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new Gt(
        e,
        Mn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new Gt(
        e,
        Er,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new Gt(
        e,
        Wa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      qt[e] = new Gt(
        e,
        ca,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Cr = /[\-\:]([a-z])/g, xa = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, xa);
      qt[t] = new Gt(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, xa);
      qt[t] = new Gt(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cr, xa);
      qt[t] = new Gt(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      qt[e] = new Gt(
        e,
        Sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Hi = "xlinkHref";
    qt[Hi] = new Gt(
      "xlinkHref",
      Sr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      qt[e] = new Gt(
        e,
        Sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var tu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, nu = !1;
    function pl(e) {
      !nu && tu.test(e) && (nu = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Yn(a, t), i.sanitizeURL && pl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Er) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Kn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Kn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Mn)
            return a;
          f = e.getAttribute(s);
        }
        return Kn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ru(e, t, a, i) {
      {
        if (!rn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Yn(a, t), u === "" + a ? a : u;
      }
    }
    function _r(e, t, a, i) {
      var u = an(t);
      if (!hn(t, u, i)) {
        if (Kn(t, a, u, i) && (a = null), i || u === null) {
          if (rn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Yn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Mn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var w = u.type, x;
          w === Mn || w === Er && a === !0 ? x = "" : (Yn(a, y), x = "" + a, u.sanitizeURL && pl(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var Dr = Symbol.for("react.element"), ar = Symbol.for("react.portal"), di = Symbol.for("react.fragment"), Qa = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), vi = Symbol.for("react.provider"), R = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), rt = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), gt = Symbol.for("react.scope"), mt = Symbol.for("react.debug_trace_mode"), xn = Symbol.for("react.offscreen"), ln = Symbol.for("react.legacy_hidden"), cn = Symbol.for("react.cache"), ir = Symbol.for("react.tracing_marker"), Ga = Symbol.iterator, qa = "@@iterator";
    function at(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ga && e[Ga] || e[qa];
      return typeof t == "function" ? t : null;
    }
    var st = Object.assign, Xa = 0, au, iu, hl, qu, ml, Wr, Xo;
    function kr() {
    }
    kr.__reactDisabledLog = !0;
    function pc() {
      {
        if (Xa === 0) {
          au = console.log, iu = console.info, hl = console.warn, qu = console.error, ml = console.group, Wr = console.groupCollapsed, Xo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: kr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Xa++;
      }
    }
    function vc() {
      {
        if (Xa--, Xa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: st({}, e, {
              value: au
            }),
            info: st({}, e, {
              value: iu
            }),
            warn: st({}, e, {
              value: hl
            }),
            error: st({}, e, {
              value: qu
            }),
            group: st({}, e, {
              value: ml
            }),
            groupCollapsed: st({}, e, {
              value: Wr
            }),
            groupEnd: st({}, e, {
              value: Xo
            })
          });
        }
        Xa < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xu = N.ReactCurrentDispatcher, yl;
    function da(e, t, a) {
      {
        if (yl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            yl = i && i[1] || "";
          }
        return `
` + yl + e;
      }
    }
    var Ka = !1, Ja;
    {
      var Ku = typeof WeakMap == "function" ? WeakMap : Map;
      Ja = new Ku();
    }
    function lu(e, t) {
      if (!e || Ka)
        return "";
      {
        var a = Ja.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ka = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Xu.current, Xu.current = null, pc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var w = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && Ja.set(e, w), w;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Ka = !1, Xu.current = s, vc(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", M = x ? da(x) : "";
      return typeof e == "function" && Ja.set(e, M), M;
    }
    function gl(e, t, a) {
      return lu(e, !0);
    }
    function Ju(e, t, a) {
      return lu(e, !1);
    }
    function Zu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Pi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return lu(e, Zu(e));
      if (typeof e == "string")
        return da(e);
      switch (e) {
        case se:
          return da("Suspense");
        case ye:
          return da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            return Ju(e.render);
          case rt:
            return Pi(e.type, t, a);
          case Je: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Pi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Zf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Z:
          return da(e.type);
        case Re:
          return da("Lazy");
        case be:
          return da("Suspense");
        case Qt:
          return da("SuspenseList");
        case ie:
        case Ye:
        case je:
          return Ju(e.type);
        case He:
          return Ju(e.type.render);
        case re:
          return gl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
      try {
        var t = "", a = e;
        do
          t += Zf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function zt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function eo(e) {
      return e.displayName || "Context";
    }
    function wt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case di:
          return "Fragment";
        case ar:
          return "Portal";
        case pi:
          return "Profiler";
        case Qa:
          return "StrictMode";
        case se:
          return "Suspense";
        case ye:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return eo(t) + ".Consumer";
          case vi:
            var a = e;
            return eo(a._context) + ".Provider";
          case I:
            return zt(e, e.render, "ForwardRef");
          case rt:
            var i = e.displayName || null;
            return i !== null ? i : wt(e.type) || "Memo";
          case Je: {
            var u = e, s = u._payload, f = u._init;
            try {
              return wt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Ko(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function hi(e) {
      return e.displayName || "Context";
    }
    function Ke(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ot:
          return "Cache";
        case Mt:
          var i = a;
          return hi(i) + ".Consumer";
        case Le:
          var u = a;
          return hi(u._context) + ".Provider";
        case $t:
          return "DehydratedFragment";
        case He:
          return Ko(a, a.render, "ForwardRef");
        case nt:
          return "Fragment";
        case Z:
          return a;
        case ne:
          return "Portal";
        case J:
          return "Root";
        case Oe:
          return "Text";
        case Re:
          return wt(a);
        case ge:
          return a === Qa ? "StrictMode" : "Mode";
        case ze:
          return "Offscreen";
        case et:
          return "Profiler";
        case kt:
          return "Scope";
        case be:
          return "Suspense";
        case Qt:
          return "SuspenseList";
        case Nt:
          return "TracingMarker";
        case re:
        case ie:
        case Dt:
        case Ye:
        case ut:
        case je:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var to = N.ReactDebugCurrentFrame, lr = null, mi = !1;
    function Or() {
      {
        if (lr === null)
          return null;
        var e = lr._debugOwner;
        if (e !== null && typeof e < "u")
          return Ke(e);
      }
      return null;
    }
    function yi() {
      return lr === null ? "" : Vi(lr);
    }
    function fn() {
      to.getCurrentStack = null, lr = null, mi = !1;
    }
    function Xt(e) {
      to.getCurrentStack = e === null ? null : yi, lr = e, mi = !1;
    }
    function Sl() {
      return lr;
    }
    function $n(e) {
      mi = e;
    }
    function Lr(e) {
      return "" + e;
    }
    function ba(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Tn(e), e;
        default:
          return "";
      }
    }
    var uu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Jo(e, t) {
      uu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Zo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function El(e) {
      return e._valueTracker;
    }
    function ou(e) {
      e._valueTracker = null;
    }
    function ed(e) {
      var t = "";
      return e && (Zo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function wa(e) {
      var t = Zo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Tn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Tn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Tn(p), i = "" + p;
          },
          stopTracking: function() {
            ou(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Za(e) {
      El(e) || (e._valueTracker = wa(e));
    }
    function gi(e) {
      if (!e)
        return !1;
      var t = El(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = ed(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function _a(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var no = !1, ro = !1, Cl = !1, su = !1;
    function ao(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function io(e, t) {
      var a = e, i = t.checked, u = st({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ei(e, t) {
      Jo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ro && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), ro = !0), t.value !== void 0 && t.defaultValue !== void 0 && !no && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), no = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ba(t.value != null ? t.value : i),
        controlled: ao(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && _r(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = ao(t);
        !a._wrapperState.controlled && i && !su && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), su = !0), a._wrapperState.controlled && !i && !Cl && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cl = !0);
      }
      h(e, t);
      var u = ba(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Lr(u)) : a.value !== Lr(u) && (a.value = Lr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ue(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ue(a, t.type, ba(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Lr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      C(a, t), ee(a, t);
    }
    function ee(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Yn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Ph(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            gi(f), C(f, p);
          }
        }
      }
    }
    function Ue(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || _a(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Lr(e._wrapperState.initialValue) : e.defaultValue !== Lr(a) && (e.defaultValue = Lr(a)));
    }
    var oe = !1, Pe = !1, St = !1;
    function _t(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? q.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Pe || (Pe = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (St || (St = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !oe && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), oe = !0);
    }
    function un(e, t) {
      t.value != null && e.setAttribute("value", Lr(ba(t.value)));
    }
    var Kt = Array.isArray;
    function pt(e) {
      return Kt(e);
    }
    var Jt;
    Jt = !1;
    function mn() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Rl = ["value", "defaultValue"];
    function es(e) {
      {
        Jo("select", e);
        for (var t = 0; t < Rl.length; t++) {
          var a = Rl[t];
          if (e[a] != null) {
            var i = pt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, mn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, mn());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Lr(ba(a)), w = null, x = 0; x < u.length; x++) {
          if (u[x].value === g) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          w === null && !u[x].disabled && (w = u[x]);
        }
        w !== null && (w.selected = !0);
      }
    }
    function ts(e, t) {
      return st({}, t, {
        value: void 0
      });
    }
    function cu(e, t) {
      var a = e;
      es(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Jt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Jt = !0);
    }
    function td(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function hc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function nd(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var sv = !1;
    function rd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = st({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Lr(a._wrapperState.initialValue)
      });
      return i;
    }
    function ad(e, t) {
      var a = e;
      Jo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !sv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), sv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (pt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: ba(i)
      };
    }
    function cv(e, t) {
      var a = e, i = ba(t.value), u = ba(t.defaultValue);
      if (i != null) {
        var s = Lr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Lr(u));
    }
    function fv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function ny(e, t) {
      cv(e, t);
    }
    var Yi = "http://www.w3.org/1999/xhtml", id = "http://www.w3.org/1998/Math/MathML", ld = "http://www.w3.org/2000/svg";
    function ud(e) {
      switch (e) {
        case "svg":
          return ld;
        case "math":
          return id;
        default:
          return Yi;
      }
    }
    function od(e, t) {
      return e == null || e === Yi ? ud(t) : e === ld && t === "foreignObject" ? Yi : e;
    }
    var dv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, mc, pv = dv(function(e, t) {
      if (e.namespaceURI === ld && !("innerHTML" in e)) {
        mc = mc || document.createElement("div"), mc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = mc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, Ii = 3, Nn = 8, $i = 9, sd = 11, lo = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ii) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ns = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, rs = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function vv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var hv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(rs).forEach(function(e) {
      hv.forEach(function(t) {
        rs[vv(t, e)] = rs[e];
      });
    });
    function yc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(rs.hasOwnProperty(e) && rs[e]) ? t + "px" : (sa(t, e), ("" + t).trim());
    }
    var mv = /([A-Z])/g, yv = /^ms-/;
    function uo(e) {
      return e.replace(mv, "-$1").toLowerCase().replace(yv, "-ms-");
    }
    var gv = function() {
    };
    {
      var ry = /^(?:webkit|moz|o)[A-Z]/, ay = /^-ms-/, Sv = /-(.)/g, cd = /;\s*$/, Si = {}, fu = {}, Ev = !1, as = !1, iy = function(e) {
        return e.replace(Sv, function(t, a) {
          return a.toUpperCase();
        });
      }, Cv = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          iy(e.replace(ay, "ms-"))
        ));
      }, fd = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, dd = function(e, t) {
        fu.hasOwnProperty(t) && fu[t] || (fu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(cd, "")));
      }, Rv = function(e, t) {
        Ev || (Ev = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Tv = function(e, t) {
        as || (as = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      gv = function(e, t) {
        e.indexOf("-") > -1 ? Cv(e) : ry.test(e) ? fd(e) : cd.test(t) && dd(e, t), typeof t == "number" && (isNaN(t) ? Rv(e, t) : isFinite(t) || Tv(e, t));
      };
    }
    var xv = gv;
    function ly(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : uo(i)) + ":", t += yc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function bv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || xv(i, t[i]);
          var s = yc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function uy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function wv(e) {
      var t = {};
      for (var a in e)
        for (var i = ns[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function oy(e, t) {
      {
        if (!t)
          return;
        var a = wv(e), i = wv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", uy(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ti = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, is = st({
      menuitem: !0
    }, ti), _v = "__html";
    function gc(e, t) {
      if (t) {
        if (is[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(_v in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Tl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var ls = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Sc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, oo = {}, sy = new RegExp("^(aria)-[" + ae + "]*$"), so = new RegExp("^(aria)[A-Z][" + ae + "]*$");
    function pd(e, t) {
      {
        if (wr.call(oo, t) && oo[t])
          return !0;
        if (so.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Sc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), oo[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), oo[t] = !0, !0;
        }
        if (sy.test(t)) {
          var u = t.toLowerCase(), s = Sc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return oo[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), oo[t] = !0, !0;
        }
      }
      return !0;
    }
    function us(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = pd(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function vd(e, t) {
      Tl(e, t) || us(e, t);
    }
    var hd = !1;
    function Ec(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !hd && (hd = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var du = function() {
    };
    {
      var ur = {}, md = /^on./, Cc = /^on[^A-Z]/, Dv = new RegExp("^(aria)-[" + ae + "]*$"), kv = new RegExp("^(aria)[A-Z][" + ae + "]*$");
      du = function(e, t, a, i) {
        if (wr.call(ur, t) && ur[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ur[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), ur[t] = !0, !0;
          if (md.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), ur[t] = !0, !0;
        } else if (md.test(t))
          return Cc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ur[t] = !0, !0;
        if (Dv.test(t) || kv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ur[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ur[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), ur[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ur[t] = !0, !0;
        var v = an(t), y = v !== null && v.type === In;
        if (ls.hasOwnProperty(u)) {
          var g = ls[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), ur[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), ur[t] = !0, !0;
        return typeof a == "boolean" && sn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), ur[t] = !0, !0) : y ? !0 : sn(t, a, v, !1) ? (ur[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Mn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), ur[t] = !0), !0);
      };
    }
    var Ov = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = du(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Lv(e, t, a) {
      Tl(e, t) || Ov(e, t, a);
    }
    var yd = 1, Rc = 2, Da = 4, gd = yd | Rc | Da, pu = null;
    function cy(e) {
      pu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), pu = e;
    }
    function fy() {
      pu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), pu = null;
    }
    function os(e) {
      return e === pu;
    }
    function Sd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var Tc = null, vu = null, Bt = null;
    function xc(e) {
      var t = Lo(e);
      if (t) {
        if (typeof Tc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Ph(a);
          Tc(t.stateNode, t.type, i);
        }
      }
    }
    function bc(e) {
      Tc = e;
    }
    function co(e) {
      vu ? Bt ? Bt.push(e) : Bt = [e] : vu = e;
    }
    function Mv() {
      return vu !== null || Bt !== null;
    }
    function wc() {
      if (vu) {
        var e = vu, t = Bt;
        if (vu = null, Bt = null, xc(e), t)
          for (var a = 0; a < t.length; a++)
            xc(t[a]);
      }
    }
    var fo = function(e, t) {
      return e(t);
    }, ss = function() {
    }, xl = !1;
    function Nv() {
      var e = Mv();
      e && (ss(), wc());
    }
    function zv(e, t, a) {
      if (xl)
        return e(t, a);
      xl = !0;
      try {
        return fo(e, t, a);
      } finally {
        xl = !1, Nv();
      }
    }
    function dy(e, t, a) {
      fo = e, ss = a;
    }
    function Uv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function _c(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Uv(t));
        default:
          return !1;
      }
    }
    function bl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Ph(a);
      if (i === null)
        return null;
      var u = i[t];
      if (_c(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var cs = !1;
    if (Ln)
      try {
        var hu = {};
        Object.defineProperty(hu, "passive", {
          get: function() {
            cs = !0;
          }
        }), window.addEventListener("test", hu, hu), window.removeEventListener("test", hu, hu);
      } catch {
        cs = !1;
      }
    function Dc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var kc = Dc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Ed = document.createElement("react");
      kc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), w = !1, x = !0, M = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          Ed.removeEventListener(H, Ae, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var fe = Array.prototype.slice.call(arguments, 3);
        function Ae() {
          w = !0, F(), a.apply(i, fe), x = !1;
        }
        var De, bt = !1, Et = !1;
        function k(O) {
          if (De = O.error, bt = !0, De === null && O.colno === 0 && O.lineno === 0 && (Et = !0), O.defaultPrevented && De != null && typeof De == "object")
            try {
              De._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), Ed.addEventListener(H, Ae, !1), g.initEvent(H, !1, !1), Ed.dispatchEvent(g), A && Object.defineProperty(window, "event", A), w && x && (bt ? Et && (De = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : De = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(De)), window.removeEventListener("error", k), !w)
          return F(), Dc.apply(this, arguments);
      };
    }
    var Av = kc, po = !1, Oc = null, vo = !1, Ei = null, jv = {
      onError: function(e) {
        po = !0, Oc = e;
      }
    };
    function wl(e, t, a, i, u, s, f, p, v) {
      po = !1, Oc = null, Av.apply(jv, arguments);
    }
    function Ci(e, t, a, i, u, s, f, p, v) {
      if (wl.apply(this, arguments), po) {
        var y = ds();
        vo || (vo = !0, Ei = y);
      }
    }
    function fs() {
      if (vo) {
        var e = Ei;
        throw vo = !1, Ei = null, e;
      }
    }
    function Wi() {
      return po;
    }
    function ds() {
      if (po) {
        var e = Oc;
        return po = !1, Oc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ho(e) {
      return e._reactInternals;
    }
    function py(e) {
      return e._reactInternals !== void 0;
    }
    function mu(e, t) {
      e._reactInternals = t;
    }
    var Me = (
      /*                      */
      0
    ), ni = (
      /*                */
      1
    ), yn = (
      /*                    */
      2
    ), Rt = (
      /*                       */
      4
    ), ka = (
      /*                */
      16
    ), Oa = (
      /*                 */
      32
    ), on = (
      /*                     */
      64
    ), ke = (
      /*                   */
      128
    ), Rr = (
      /*            */
      256
    ), Cn = (
      /*                          */
      512
    ), Wn = (
      /*                     */
      1024
    ), Gr = (
      /*                      */
      2048
    ), qr = (
      /*                    */
      4096
    ), zn = (
      /*                   */
      8192
    ), mo = (
      /*             */
      16384
    ), Fv = (
      /*               */
      32767
    ), ps = (
      /*                   */
      32768
    ), Jn = (
      /*                */
      65536
    ), Lc = (
      /* */
      131072
    ), Ri = (
      /*                       */
      1048576
    ), yo = (
      /*                    */
      2097152
    ), Qi = (
      /*                 */
      4194304
    ), Mc = (
      /*                */
      8388608
    ), _l = (
      /*               */
      16777216
    ), Ti = (
      /*              */
      33554432
    ), Dl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Rt | Wn | 0
    ), kl = yn | Rt | ka | Oa | Cn | qr | zn, Ol = Rt | on | Cn | zn, Gi = Gr | ka, Un = Qi | Mc | yo, La = N.ReactCurrentOwner;
    function pa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (yn | qr)) !== Me && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function xi(e) {
      if (e.tag === be) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function bi(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function yu(e) {
      return pa(e) === e;
    }
    function Hv(e) {
      {
        var t = La.current;
        if (t !== null && t.tag === re) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ke(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ho(e);
      return u ? pa(u) === u : !1;
    }
    function Nc(e) {
      if (pa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function zc(e) {
      var t = e.alternate;
      if (!t) {
        var a = pa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Nc(s), e;
            if (v === u)
              return Nc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Xr(e) {
      var t = zc(e);
      return t !== null ? Kr(t) : null;
    }
    function Kr(e) {
      if (e.tag === Z || e.tag === Oe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Kr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function pn(e) {
      var t = zc(e);
      return t !== null ? Ma(t) : null;
    }
    function Ma(e) {
      if (e.tag === Z || e.tag === Oe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ne) {
          var a = Ma(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Cd = B.unstable_scheduleCallback, Pv = B.unstable_cancelCallback, Rd = B.unstable_shouldYield, Td = B.unstable_requestPaint, Qn = B.unstable_now, Uc = B.unstable_getCurrentPriorityLevel, vs = B.unstable_ImmediatePriority, Ll = B.unstable_UserBlockingPriority, qi = B.unstable_NormalPriority, vy = B.unstable_LowPriority, gu = B.unstable_IdlePriority, Ac = B.unstable_yieldValue, Vv = B.unstable_setDisableYieldValue, Su = null, bn = null, ce = null, va = !1, Jr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function go(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Qe && (e = st({}, e, {
          getLaneLabelMap: Eu,
          injectProfilingHooks: Na
        })), Su = t.inject(e), bn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function xd(e, t) {
      if (bn && typeof bn.onScheduleFiberRoot == "function")
        try {
          bn.onScheduleFiberRoot(Su, e, t);
        } catch (a) {
          va || (va = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function bd(e, t) {
      if (bn && typeof bn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ke) === ke;
          if (Ie) {
            var i;
            switch (t) {
              case Mr:
                i = vs;
                break;
              case _i:
                i = Ll;
                break;
              case za:
                i = qi;
                break;
              case Ua:
                i = gu;
                break;
              default:
                i = qi;
                break;
            }
            bn.onCommitFiberRoot(Su, e, i, a);
          }
        } catch (u) {
          va || (va = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function wd(e) {
      if (bn && typeof bn.onPostCommitFiberRoot == "function")
        try {
          bn.onPostCommitFiberRoot(Su, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function _d(e) {
      if (bn && typeof bn.onCommitFiberUnmount == "function")
        try {
          bn.onCommitFiberUnmount(Su, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function gn(e) {
      if (typeof Ac == "function" && (Vv(e), Xe(e)), bn && typeof bn.setStrictMode == "function")
        try {
          bn.setStrictMode(Su, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Na(e) {
      ce = e;
    }
    function Eu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Tu; a++) {
          var i = $v(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Dd(e) {
      ce !== null && typeof ce.markCommitStarted == "function" && ce.markCommitStarted(e);
    }
    function kd() {
      ce !== null && typeof ce.markCommitStopped == "function" && ce.markCommitStopped();
    }
    function ha(e) {
      ce !== null && typeof ce.markComponentRenderStarted == "function" && ce.markComponentRenderStarted(e);
    }
    function ma() {
      ce !== null && typeof ce.markComponentRenderStopped == "function" && ce.markComponentRenderStopped();
    }
    function Od(e) {
      ce !== null && typeof ce.markComponentPassiveEffectMountStarted == "function" && ce.markComponentPassiveEffectMountStarted(e);
    }
    function Bv() {
      ce !== null && typeof ce.markComponentPassiveEffectMountStopped == "function" && ce.markComponentPassiveEffectMountStopped();
    }
    function Xi(e) {
      ce !== null && typeof ce.markComponentPassiveEffectUnmountStarted == "function" && ce.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ml() {
      ce !== null && typeof ce.markComponentPassiveEffectUnmountStopped == "function" && ce.markComponentPassiveEffectUnmountStopped();
    }
    function jc(e) {
      ce !== null && typeof ce.markComponentLayoutEffectMountStarted == "function" && ce.markComponentLayoutEffectMountStarted(e);
    }
    function Yv() {
      ce !== null && typeof ce.markComponentLayoutEffectMountStopped == "function" && ce.markComponentLayoutEffectMountStopped();
    }
    function hs(e) {
      ce !== null && typeof ce.markComponentLayoutEffectUnmountStarted == "function" && ce.markComponentLayoutEffectUnmountStarted(e);
    }
    function Ld() {
      ce !== null && typeof ce.markComponentLayoutEffectUnmountStopped == "function" && ce.markComponentLayoutEffectUnmountStopped();
    }
    function ms(e, t, a) {
      ce !== null && typeof ce.markComponentErrored == "function" && ce.markComponentErrored(e, t, a);
    }
    function wi(e, t, a) {
      ce !== null && typeof ce.markComponentSuspended == "function" && ce.markComponentSuspended(e, t, a);
    }
    function ys(e) {
      ce !== null && typeof ce.markLayoutEffectsStarted == "function" && ce.markLayoutEffectsStarted(e);
    }
    function gs() {
      ce !== null && typeof ce.markLayoutEffectsStopped == "function" && ce.markLayoutEffectsStopped();
    }
    function Cu(e) {
      ce !== null && typeof ce.markPassiveEffectsStarted == "function" && ce.markPassiveEffectsStarted(e);
    }
    function Md() {
      ce !== null && typeof ce.markPassiveEffectsStopped == "function" && ce.markPassiveEffectsStopped();
    }
    function Ru(e) {
      ce !== null && typeof ce.markRenderStarted == "function" && ce.markRenderStarted(e);
    }
    function Iv() {
      ce !== null && typeof ce.markRenderYielded == "function" && ce.markRenderYielded();
    }
    function Fc() {
      ce !== null && typeof ce.markRenderStopped == "function" && ce.markRenderStopped();
    }
    function Sn(e) {
      ce !== null && typeof ce.markRenderScheduled == "function" && ce.markRenderScheduled(e);
    }
    function Hc(e, t) {
      ce !== null && typeof ce.markForceUpdateScheduled == "function" && ce.markForceUpdateScheduled(e, t);
    }
    function Ss(e, t) {
      ce !== null && typeof ce.markStateUpdateScheduled == "function" && ce.markStateUpdateScheduled(e, t);
    }
    var Ne = (
      /*                         */
      0
    ), yt = (
      /*                 */
      1
    ), Ut = (
      /*                    */
      2
    ), Zt = (
      /*               */
      8
    ), At = (
      /*              */
      16
    ), An = Math.clz32 ? Math.clz32 : Es, Zn = Math.log, Pc = Math.LN2;
    function Es(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Zn(t) / Pc | 0) | 0;
    }
    var Tu = 31, $ = (
      /*                        */
      0
    ), Lt = (
      /*                          */
      0
    ), $e = (
      /*                        */
      1
    ), Nl = (
      /*    */
      2
    ), ri = (
      /*             */
      4
    ), Tr = (
      /*            */
      8
    ), wn = (
      /*                     */
      16
    ), Ki = (
      /*                */
      32
    ), zl = (
      /*                       */
      4194240
    ), xu = (
      /*                        */
      64
    ), Vc = (
      /*                        */
      128
    ), Bc = (
      /*                        */
      256
    ), Yc = (
      /*                        */
      512
    ), Ic = (
      /*                        */
      1024
    ), $c = (
      /*                        */
      2048
    ), Wc = (
      /*                        */
      4096
    ), Qc = (
      /*                        */
      8192
    ), Gc = (
      /*                        */
      16384
    ), bu = (
      /*                       */
      32768
    ), qc = (
      /*                       */
      65536
    ), So = (
      /*                       */
      131072
    ), Eo = (
      /*                       */
      262144
    ), Xc = (
      /*                       */
      524288
    ), Cs = (
      /*                       */
      1048576
    ), Kc = (
      /*                       */
      2097152
    ), Rs = (
      /*                            */
      130023424
    ), wu = (
      /*                             */
      4194304
    ), Jc = (
      /*                             */
      8388608
    ), Ts = (
      /*                             */
      16777216
    ), Zc = (
      /*                             */
      33554432
    ), ef = (
      /*                             */
      67108864
    ), Nd = wu, xs = (
      /*          */
      134217728
    ), zd = (
      /*                          */
      268435455
    ), bs = (
      /*               */
      268435456
    ), _u = (
      /*                        */
      536870912
    ), Zr = (
      /*                   */
      1073741824
    );
    function $v(e) {
      {
        if (e & $e)
          return "Sync";
        if (e & Nl)
          return "InputContinuousHydration";
        if (e & ri)
          return "InputContinuous";
        if (e & Tr)
          return "DefaultHydration";
        if (e & wn)
          return "Default";
        if (e & Ki)
          return "TransitionHydration";
        if (e & zl)
          return "Transition";
        if (e & Rs)
          return "Retry";
        if (e & xs)
          return "SelectiveHydration";
        if (e & bs)
          return "IdleHydration";
        if (e & _u)
          return "Idle";
        if (e & Zr)
          return "Offscreen";
      }
    }
    var nn = -1, Du = xu, tf = wu;
    function ws(e) {
      switch (Ul(e)) {
        case $e:
          return $e;
        case Nl:
          return Nl;
        case ri:
          return ri;
        case Tr:
          return Tr;
        case wn:
          return wn;
        case Ki:
          return Ki;
        case xu:
        case Vc:
        case Bc:
        case Yc:
        case Ic:
        case $c:
        case Wc:
        case Qc:
        case Gc:
        case bu:
        case qc:
        case So:
        case Eo:
        case Xc:
        case Cs:
        case Kc:
          return e & zl;
        case wu:
        case Jc:
        case Ts:
        case Zc:
        case ef:
          return e & Rs;
        case xs:
          return xs;
        case bs:
          return bs;
        case _u:
          return _u;
        case Zr:
          return Zr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function nf(e, t) {
      var a = e.pendingLanes;
      if (a === $)
        return $;
      var i = $, u = e.suspendedLanes, s = e.pingedLanes, f = a & zd;
      if (f !== $) {
        var p = f & ~u;
        if (p !== $)
          i = ws(p);
        else {
          var v = f & s;
          v !== $ && (i = ws(v));
        }
      } else {
        var y = a & ~u;
        y !== $ ? i = ws(y) : s !== $ && (i = ws(s));
      }
      if (i === $)
        return $;
      if (t !== $ && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === $) {
        var g = Ul(i), w = Ul(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= w || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === wn && (w & zl) !== $
        )
          return t;
      }
      (i & ri) !== $ && (i |= a & wn);
      var x = e.entangledLanes;
      if (x !== $)
        for (var M = e.entanglements, A = i & x; A > 0; ) {
          var F = jn(A), fe = 1 << F;
          i |= M[F], A &= ~fe;
        }
      return i;
    }
    function ai(e, t) {
      for (var a = e.eventTimes, i = nn; t > 0; ) {
        var u = jn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Ud(e, t) {
      switch (e) {
        case $e:
        case Nl:
        case ri:
          return t + 250;
        case Tr:
        case wn:
        case Ki:
        case xu:
        case Vc:
        case Bc:
        case Yc:
        case Ic:
        case $c:
        case Wc:
        case Qc:
        case Gc:
        case bu:
        case qc:
        case So:
        case Eo:
        case Xc:
        case Cs:
        case Kc:
          return t + 5e3;
        case wu:
        case Jc:
        case Ts:
        case Zc:
        case ef:
          return nn;
        case xs:
        case bs:
        case _u:
        case Zr:
          return nn;
        default:
          return S("Should have found matching lanes. This is a bug in React."), nn;
      }
    }
    function rf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jn(f), v = 1 << p, y = s[p];
        y === nn ? ((v & i) === $ || (v & u) !== $) && (s[p] = Ud(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Wv(e) {
      return ws(e.pendingLanes);
    }
    function af(e) {
      var t = e.pendingLanes & ~Zr;
      return t !== $ ? t : t & Zr ? Zr : $;
    }
    function Qv(e) {
      return (e & $e) !== $;
    }
    function _s(e) {
      return (e & zd) !== $;
    }
    function ku(e) {
      return (e & Rs) === e;
    }
    function Ad(e) {
      var t = $e | ri | wn;
      return (e & t) === $;
    }
    function jd(e) {
      return (e & zl) === e;
    }
    function lf(e, t) {
      var a = Nl | ri | Tr | wn;
      return (t & a) !== $;
    }
    function Gv(e, t) {
      return (t & e.expiredLanes) !== $;
    }
    function Fd(e) {
      return (e & zl) !== $;
    }
    function Hd() {
      var e = Du;
      return Du <<= 1, (Du & zl) === $ && (Du = xu), e;
    }
    function qv() {
      var e = tf;
      return tf <<= 1, (tf & Rs) === $ && (tf = wu), e;
    }
    function Ul(e) {
      return e & -e;
    }
    function Ds(e) {
      return Ul(e);
    }
    function jn(e) {
      return 31 - An(e);
    }
    function or(e) {
      return jn(e);
    }
    function ea(e, t) {
      return (e & t) !== $;
    }
    function Ou(e, t) {
      return (e & t) === t;
    }
    function lt(e, t) {
      return e | t;
    }
    function ks(e, t) {
      return e & ~t;
    }
    function Pd(e, t) {
      return e & t;
    }
    function Xv(e) {
      return e;
    }
    function Kv(e, t) {
      return e !== Lt && e < t ? e : t;
    }
    function Os(e) {
      for (var t = [], a = 0; a < Tu; a++)
        t.push(e);
      return t;
    }
    function Co(e, t, a) {
      e.pendingLanes |= t, t !== _u && (e.suspendedLanes = $, e.pingedLanes = $);
      var i = e.eventTimes, u = or(t);
      i[u] = a;
    }
    function Jv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = jn(i), s = 1 << u;
        a[u] = nn, i &= ~s;
      }
    }
    function uf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Vd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = $, e.pingedLanes = $, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jn(f), v = 1 << p;
        i[p] = $, u[p] = nn, s[p] = nn, f &= ~v;
      }
    }
    function of(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = jn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Bd(e, t) {
      var a = Ul(t), i;
      switch (a) {
        case ri:
          i = Nl;
          break;
        case wn:
          i = Tr;
          break;
        case xu:
        case Vc:
        case Bc:
        case Yc:
        case Ic:
        case $c:
        case Wc:
        case Qc:
        case Gc:
        case bu:
        case qc:
        case So:
        case Eo:
        case Xc:
        case Cs:
        case Kc:
        case wu:
        case Jc:
        case Ts:
        case Zc:
        case ef:
          i = Ki;
          break;
        case _u:
          i = bs;
          break;
        default:
          i = Lt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Lt ? Lt : i;
    }
    function Ls(e, t, a) {
      if (Jr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = or(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Zv(e, t) {
      if (Jr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = or(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Yd(e, t) {
      return null;
    }
    var Mr = $e, _i = ri, za = wn, Ua = _u, Ms = Lt;
    function Aa() {
      return Ms;
    }
    function Fn(e) {
      Ms = e;
    }
    function eh(e, t) {
      var a = Ms;
      try {
        return Ms = e, t();
      } finally {
        Ms = a;
      }
    }
    function th(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ns(e, t) {
      return e > t ? e : t;
    }
    function er(e, t) {
      return e !== 0 && e < t;
    }
    function nh(e) {
      var t = Ul(e);
      return er(Mr, t) ? er(_i, t) ? _s(t) ? za : Ua : _i : Mr;
    }
    function sf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var zs;
    function xr(e) {
      zs = e;
    }
    function hy(e) {
      zs(e);
    }
    var me;
    function Ro(e) {
      me = e;
    }
    var cf;
    function rh(e) {
      cf = e;
    }
    var ah;
    function Us(e) {
      ah = e;
    }
    var As;
    function Id(e) {
      As = e;
    }
    var ff = !1, js = [], Ji = null, Di = null, ki = null, _n = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), zr = [], ih = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function lh(e) {
      return ih.indexOf(e) > -1;
    }
    function ii(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function $d(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ji = null;
          break;
        case "dragenter":
        case "dragleave":
          Di = null;
          break;
        case "mouseover":
        case "mouseout":
          ki = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          _n.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Nr.delete(i);
          break;
        }
      }
    }
    function ta(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ii(t, a, i, u, s);
        if (t !== null) {
          var p = Lo(t);
          p !== null && me(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function my(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ji = ta(Ji, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Di = ta(Di, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return ki = ta(ki, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return _n.set(y, ta(_n.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, w = g.pointerId;
          return Nr.set(w, ta(Nr.get(w) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Wd(e) {
      var t = qs(e.target);
      if (t !== null) {
        var a = pa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === be) {
            var u = xi(a);
            if (u !== null) {
              e.blockedOn = u, As(e.priority, function() {
                cf(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (sf(s)) {
              e.blockedOn = bi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function uh(e) {
      for (var t = ah(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < zr.length && er(t, zr[i].priority); i++)
        ;
      zr.splice(i, 0, a), i === 0 && Wd(a);
    }
    function Fs(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = xo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          cy(s), u.target.dispatchEvent(s), fy();
        } else {
          var f = Lo(i);
          return f !== null && me(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Qd(e, t, a) {
      Fs(e) && a.delete(t);
    }
    function yy() {
      ff = !1, Ji !== null && Fs(Ji) && (Ji = null), Di !== null && Fs(Di) && (Di = null), ki !== null && Fs(ki) && (ki = null), _n.forEach(Qd), Nr.forEach(Qd);
    }
    function Al(e, t) {
      e.blockedOn === t && (e.blockedOn = null, ff || (ff = !0, B.unstable_scheduleCallback(B.unstable_NormalPriority, yy)));
    }
    function Lu(e) {
      if (js.length > 0) {
        Al(js[0], e);
        for (var t = 1; t < js.length; t++) {
          var a = js[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ji !== null && Al(Ji, e), Di !== null && Al(Di, e), ki !== null && Al(ki, e);
      var i = function(p) {
        return Al(p, e);
      };
      _n.forEach(i), Nr.forEach(i);
      for (var u = 0; u < zr.length; u++) {
        var s = zr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; zr.length > 0; ) {
        var f = zr[0];
        if (f.blockedOn !== null)
          break;
        Wd(f), f.blockedOn === null && zr.shift();
      }
    }
    var sr = N.ReactCurrentBatchConfig, Tt = !0;
    function Gn(e) {
      Tt = !!e;
    }
    function Hn() {
      return Tt;
    }
    function cr(e, t, a) {
      var i = df(t), u;
      switch (i) {
        case Mr:
          u = ya;
          break;
        case _i:
          u = To;
          break;
        case za:
        default:
          u = Dn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ya(e, t, a, i) {
      var u = Aa(), s = sr.transition;
      sr.transition = null;
      try {
        Fn(Mr), Dn(e, t, a, i);
      } finally {
        Fn(u), sr.transition = s;
      }
    }
    function To(e, t, a, i) {
      var u = Aa(), s = sr.transition;
      sr.transition = null;
      try {
        Fn(_i), Dn(e, t, a, i);
      } finally {
        Fn(u), sr.transition = s;
      }
    }
    function Dn(e, t, a, i) {
      Tt && Hs(e, t, a, i);
    }
    function Hs(e, t, a, i) {
      var u = xo(e, t, a, i);
      if (u === null) {
        zy(e, t, i, Oi, a), $d(e, i);
        return;
      }
      if (my(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if ($d(e, i), t & Da && lh(e)) {
        for (; u !== null; ) {
          var s = Lo(u);
          s !== null && hy(s);
          var f = xo(e, t, a, i);
          if (f === null && zy(e, t, i, Oi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      zy(e, t, i, null, a);
    }
    var Oi = null;
    function xo(e, t, a, i) {
      Oi = null;
      var u = Sd(i), s = qs(u);
      if (s !== null) {
        var f = pa(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === be) {
            var v = xi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var y = f.stateNode;
            if (sf(y))
              return bi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Oi = s, null;
    }
    function df(e) {
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
          return Mr;
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
          return _i;
        case "message": {
          var t = Uc();
          switch (t) {
            case vs:
              return Mr;
            case Ll:
              return _i;
            case qi:
            case vy:
              return za;
            case gu:
              return Ua;
            default:
              return za;
          }
        }
        default:
          return za;
      }
    }
    function Ps(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function na(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Gd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function bo(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ga = null, wo = null, Mu = null;
    function jl(e) {
      return ga = e, wo = Vs(), !0;
    }
    function pf() {
      ga = null, wo = null, Mu = null;
    }
    function Zi() {
      if (Mu)
        return Mu;
      var e, t = wo, a = t.length, i, u = Vs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Mu = u.slice(e, p), Mu;
    }
    function Vs() {
      return "value" in ga ? ga.value : ga.textContent;
    }
    function Fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function _o() {
      return !0;
    }
    function Bs() {
      return !1;
    }
    function br(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = _o : this.isDefaultPrevented = Bs, this.isPropagationStopped = Bs, this;
      }
      return st(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = _o);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = _o);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: _o
      }), t;
    }
    var Pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Li = br(Pn), Ur = st({}, Pn, {
      view: 0,
      detail: 0
    }), ra = br(Ur), vf, Ys, Nu;
    function gy(e) {
      e !== Nu && (Nu && e.type === "mousemove" ? (vf = e.screenX - Nu.screenX, Ys = e.screenY - Nu.screenY) : (vf = 0, Ys = 0), Nu = e);
    }
    var li = st({}, Ur, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: vn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (gy(e), vf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ys;
      }
    }), qd = br(li), Xd = st({}, li, {
      dataTransfer: 0
    }), zu = br(Xd), Kd = st({}, Ur, {
      relatedTarget: 0
    }), el = br(Kd), oh = st({}, Pn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), sh = br(oh), Jd = st({}, Pn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), hf = br(Jd), Sy = st({}, Pn, {
      data: 0
    }), ch = br(Sy), fh = ch, dh = {
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
    }, Uu = {
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
    };
    function Ey(e) {
      if (e.key) {
        var t = dh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Uu[e.keyCode] || "Unidentified" : "";
    }
    var Do = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ph(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Do[e];
      return i ? !!a[i] : !1;
    }
    function vn(e) {
      return ph;
    }
    var Cy = st({}, Ur, {
      key: Ey,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: vn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), vh = br(Cy), Ry = st({}, li, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), hh = br(Ry), mh = st({}, Ur, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: vn
    }), yh = br(mh), Ty = st({}, Pn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ja = br(Ty), Zd = st({}, li, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), xy = br(Zd), Hl = [9, 13, 27, 32], Is = 229, tl = Ln && "CompositionEvent" in window, Pl = null;
    Ln && "documentMode" in document && (Pl = document.documentMode);
    var ep = Ln && "TextEvent" in window && !Pl, mf = Ln && (!tl || Pl && Pl > 8 && Pl <= 11), gh = 32, yf = String.fromCharCode(gh);
    function by() {
      ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ht("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ht("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ht("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var tp = !1;
    function Sh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function gf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Sf(e, t) {
      return e === "keydown" && t.keyCode === Is;
    }
    function np(e, t) {
      switch (e) {
        case "keyup":
          return Hl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Is;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Ef(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Eh(e) {
      return e.locale === "ko";
    }
    var Au = !1;
    function rp(e, t, a, i, u) {
      var s, f;
      if (tl ? s = gf(t) : Au ? np(t, i) && (s = "onCompositionEnd") : Sf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      mf && !Eh(i) && (!Au && s === "onCompositionStart" ? Au = jl(u) : s === "onCompositionEnd" && Au && (f = Zi()));
      var p = _h(a, s);
      if (p.length > 0) {
        var v = new ch(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Ef(i);
          y !== null && (v.data = y);
        }
      }
    }
    function Cf(e, t) {
      switch (e) {
        case "compositionend":
          return Ef(t);
        case "keypress":
          var a = t.which;
          return a !== gh ? null : (tp = !0, yf);
        case "textInput":
          var i = t.data;
          return i === yf && tp ? null : i;
        default:
          return null;
      }
    }
    function ap(e, t) {
      if (Au) {
        if (e === "compositionend" || !tl && np(e, t)) {
          var a = Zi();
          return pf(), Au = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Sh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return mf && !Eh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Rf(e, t, a, i, u) {
      var s;
      if (ep ? s = Cf(t, i) : s = ap(t, i), !s)
        return null;
      var f = _h(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new fh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Ch(e, t, a, i, u, s, f) {
      rp(e, t, a, i, u), Rf(e, t, a, i, u);
    }
    var wy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function $s(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!wy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function _y(e) {
      if (!Ln)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Ws() {
      ht("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Rh(e, t, a, i) {
      co(i);
      var u = _h(t, "onChange");
      if (u.length > 0) {
        var s = new Li("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Vl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      Rh(t, n, e, Sd(e)), zv(o, t);
    }
    function o(e) {
      FE(e, 0);
    }
    function c(e) {
      var t = Df(e);
      if (gi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    Ln && (m = _y("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Vl = e, n = t, Vl.attachEvent("onpropertychange", U);
    }
    function T() {
      Vl && (Vl.detachEvent("onpropertychange", U), Vl = null, n = null);
    }
    function U(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function Q(e, t, a) {
      e === "focusin" ? (T(), E(t, a)) : e === "focusout" && T();
    }
    function X(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function W(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function pe(e, t) {
      if (e === "click")
        return c(t);
    }
    function Se(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Te(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ue(e, "number", e.value);
    }
    function kn(e, t, a, i, u, s, f) {
      var p = a ? Df(a) : window, v, y;
      if (r(p) ? v = d : $s(p) ? m ? v = Se : (v = X, y = Q) : W(p) && (v = pe), v) {
        var g = v(t, a);
        if (g) {
          Rh(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Te(p);
    }
    function D() {
      Wt("onMouseEnter", ["mouseout", "mouseover"]), Wt("onMouseLeave", ["mouseout", "mouseover"]), Wt("onPointerEnter", ["pointerout", "pointerover"]), Wt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function b(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !os(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (qs(y) || gp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var w = u.ownerDocument;
          w ? g = w.defaultView || w.parentWindow : g = window;
        }
        var x, M;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (x = a, M = A ? qs(A) : null, M !== null) {
            var F = pa(M);
            (M !== F || M.tag !== Z && M.tag !== Oe) && (M = null);
          }
        } else
          x = null, M = a;
        if (x !== M) {
          var fe = qd, Ae = "onMouseLeave", De = "onMouseEnter", bt = "mouse";
          (t === "pointerout" || t === "pointerover") && (fe = hh, Ae = "onPointerLeave", De = "onPointerEnter", bt = "pointer");
          var Et = x == null ? g : Df(x), k = M == null ? g : Df(M), H = new fe(Ae, bt + "leave", x, i, u);
          H.target = Et, H.relatedTarget = k;
          var O = null, K = qs(u);
          if (K === a) {
            var he = new fe(De, bt + "enter", M, i, u);
            he.target = k, he.relatedTarget = Et, O = he;
          }
          PT(e, H, O, x, M);
        }
      }
    }
    function L(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var G = typeof Object.is == "function" ? Object.is : L;
    function Ee(e, t) {
      if (G(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!wr.call(t, s) || !G(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Fe(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ve(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function qe(e, t) {
      for (var a = Fe(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ii) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Fe(Ve(a));
      }
    }
    function tr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return jt(e, u, s, f, p);
    }
    function jt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, w = null;
      e: for (; ; ) {
        for (var x = null; g === t && (a === 0 || g.nodeType === Ii) && (f = s + a), g === i && (u === 0 || g.nodeType === Ii) && (p = s + u), g.nodeType === Ii && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
          w = g, g = x;
        for (; ; ) {
          if (g === e)
            break e;
          if (w === t && ++v === a && (f = s), w === i && ++y === u && (p = s), (x = g.nextSibling) !== null)
            break;
          g = w, w = g.parentNode;
        }
        g = x;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Bl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = qe(e, f), g = qe(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var w = a.createRange();
          w.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(w), u.extend(g.node, g.offset)) : (w.setEnd(g.node, g.offset), u.addRange(w));
        }
      }
    }
    function Th(e) {
      return e && e.nodeType === Ii;
    }
    function _E(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Th(e) ? !1 : Th(t) ? _E(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function RT(e) {
      return e && e.ownerDocument && _E(e.ownerDocument.documentElement, e);
    }
    function TT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function DE() {
      for (var e = window, t = _a(); t instanceof e.HTMLIFrameElement; ) {
        if (TT(t))
          e = t.contentWindow;
        else
          return t;
        t = _a(e.document);
      }
      return t;
    }
    function Dy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function xT() {
      var e = DE();
      return {
        focusedElem: e,
        selectionRange: Dy(e) ? wT(e) : null
      };
    }
    function bT(e) {
      var t = DE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && RT(a)) {
        i !== null && Dy(a) && _T(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function wT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = tr(e), t || {
        start: 0,
        end: 0
      };
    }
    function _T(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Bl(e, t);
    }
    var DT = Ln && "documentMode" in document && document.documentMode <= 11;
    function kT() {
      ht("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Tf = null, ky = null, ip = null, Oy = !1;
    function OT(e) {
      if ("selectionStart" in e && Dy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function LT(e) {
      return e.window === e ? e.document : e.nodeType === $i ? e : e.ownerDocument;
    }
    function kE(e, t, a) {
      var i = LT(a);
      if (!(Oy || Tf == null || Tf !== _a(i))) {
        var u = OT(Tf);
        if (!ip || !Ee(ip, u)) {
          ip = u;
          var s = _h(ky, "onSelect");
          if (s.length > 0) {
            var f = new Li("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Tf;
          }
        }
      }
    }
    function MT(e, t, a, i, u, s, f) {
      var p = a ? Df(a) : window;
      switch (t) {
        case "focusin":
          ($s(p) || p.contentEditable === "true") && (Tf = p, ky = a, ip = null);
          break;
        case "focusout":
          Tf = null, ky = null, ip = null;
          break;
        case "mousedown":
          Oy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Oy = !1, kE(e, i, u);
          break;
        case "selectionchange":
          if (DT)
            break;
        case "keydown":
        case "keyup":
          kE(e, i, u);
      }
    }
    function xh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var xf = {
      animationend: xh("Animation", "AnimationEnd"),
      animationiteration: xh("Animation", "AnimationIteration"),
      animationstart: xh("Animation", "AnimationStart"),
      transitionend: xh("Transition", "TransitionEnd")
    }, Ly = {}, OE = {};
    Ln && (OE = document.createElement("div").style, "AnimationEvent" in window || (delete xf.animationend.animation, delete xf.animationiteration.animation, delete xf.animationstart.animation), "TransitionEvent" in window || delete xf.transitionend.transition);
    function bh(e) {
      if (Ly[e])
        return Ly[e];
      if (!xf[e])
        return e;
      var t = xf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in OE)
          return Ly[e] = t[a];
      return e;
    }
    var LE = bh("animationend"), ME = bh("animationiteration"), NE = bh("animationstart"), zE = bh("transitionend"), UE = /* @__PURE__ */ new Map(), AE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ko(e, t) {
      UE.set(e, t), ht(t, [e]);
    }
    function NT() {
      for (var e = 0; e < AE.length; e++) {
        var t = AE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        ko(a, "on" + i);
      }
      ko(LE, "onAnimationEnd"), ko(ME, "onAnimationIteration"), ko(NE, "onAnimationStart"), ko("dblclick", "onDoubleClick"), ko("focusin", "onFocus"), ko("focusout", "onBlur"), ko(zE, "onTransitionEnd");
    }
    function zT(e, t, a, i, u, s, f) {
      var p = UE.get(t);
      if (p !== void 0) {
        var v = Li, y = t;
        switch (t) {
          case "keypress":
            if (Fl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = vh;
            break;
          case "focusin":
            y = "focus", v = el;
            break;
          case "focusout":
            y = "blur", v = el;
            break;
          case "beforeblur":
          case "afterblur":
            v = el;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = qd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = zu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = yh;
            break;
          case LE:
          case ME:
          case NE:
            v = sh;
            break;
          case zE:
            v = ja;
            break;
          case "scroll":
            v = ra;
            break;
          case "wheel":
            v = xy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = hf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = hh;
            break;
        }
        var g = (s & Da) !== 0;
        {
          var w = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = FT(a, p, i.type, g, w);
          if (x.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: x
            });
          }
        }
      }
    }
    NT(), D(), Ws(), kT(), by();
    function UT(e, t, a, i, u, s, f) {
      zT(e, t, a, i, u, s);
      var p = (s & gd) === 0;
      p && (b(e, t, a, i, u), kn(e, t, a, i, u), MT(e, t, a, i, u), Ch(e, t, a, i, u));
    }
    var lp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], My = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(lp));
    function jE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ci(i, t, void 0, e), e.currentTarget = null;
    }
    function AT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          jE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], w = g.instance, x = g.currentTarget, M = g.listener;
          if (w !== i && e.isPropagationStopped())
            return;
          jE(e, M, x), i = w;
        }
    }
    function FE(e, t) {
      for (var a = (t & Da) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        AT(s, f, a);
      }
      fs();
    }
    function jT(e, t, a, i, u) {
      var s = Sd(a), f = [];
      UT(f, e, i, a, s, t), FE(f, t);
    }
    function En(e, t) {
      My.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = pb(t), u = VT(e);
      i.has(u) || (HE(t, e, Rc, a), i.add(u));
    }
    function Ny(e, t, a) {
      My.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Da), HE(a, e, i, t);
    }
    var wh = "_reactListening" + Math.random().toString(36).slice(2);
    function up(e) {
      if (!e[wh]) {
        e[wh] = !0, ct.forEach(function(a) {
          a !== "selectionchange" && (My.has(a) || Ny(a, !1, e), Ny(a, !0, e));
        });
        var t = e.nodeType === $i ? e : e.ownerDocument;
        t !== null && (t[wh] || (t[wh] = !0, Ny("selectionchange", !1, t)));
      }
    }
    function HE(e, t, a, i, u) {
      var s = cr(e, t, a), f = void 0;
      cs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Gd(e, t, s, f) : na(e, t, s) : f !== void 0 ? bo(e, t, s, f) : Ps(e, t, s);
    }
    function PE(e, t) {
      return e === t || e.nodeType === Nn && e.parentNode === t;
    }
    function zy(e, t, a, i, u) {
      var s = i;
      if (!(t & yd) && !(t & Rc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === J || v === ne) {
              var y = p.stateNode.containerInfo;
              if (PE(y, f))
                break;
              if (v === ne)
                for (var g = p.return; g !== null; ) {
                  var w = g.tag;
                  if (w === J || w === ne) {
                    var x = g.stateNode.containerInfo;
                    if (PE(x, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = qs(y);
                if (M === null)
                  return;
                var A = M.tag;
                if (A === Z || A === Oe) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      zv(function() {
        return jT(e, t, a, s);
      });
    }
    function op(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function FT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var w = y, x = w.stateNode, M = w.tag;
        if (M === Z && x !== null && (g = x, p !== null)) {
          var A = bl(y, p);
          A != null && v.push(op(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function _h(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === Z && f !== null) {
          var v = f, y = bl(u, a);
          y != null && i.unshift(op(u, y, v));
          var g = bl(u, t);
          g != null && i.push(op(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function bf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Z);
      return e || null;
    }
    function HT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = bf(s))
        u++;
      for (var f = 0, p = i; p; p = bf(p))
        f++;
      for (; u - f > 0; )
        a = bf(a), u--;
      for (; f - u > 0; )
        i = bf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = bf(a), i = bf(i);
      }
      return null;
    }
    function VE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, w = v.tag;
        if (y !== null && y === i)
          break;
        if (w === Z && g !== null) {
          var x = g;
          if (u) {
            var M = bl(p, s);
            M != null && f.unshift(op(p, M, x));
          } else if (!u) {
            var A = bl(p, s);
            A != null && f.push(op(p, A, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function PT(e, t, a, i, u) {
      var s = i && u ? HT(i, u) : null;
      i !== null && VE(e, t, i, s, !1), u !== null && a !== null && VE(e, a, u, s, !0);
    }
    function VT(e, t) {
      return e + "__bubble";
    }
    var Fa = !1, sp = "dangerouslySetInnerHTML", Dh = "suppressContentEditableWarning", Oo = "suppressHydrationWarning", BE = "autoFocus", Qs = "children", Gs = "style", kh = "__html", Uy, Oh, cp, YE, Lh, IE, $E;
    Uy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Oh = function(e, t) {
      vd(e, t), Ec(e, t), Lv(e, t, {
        registrationNameDependencies: ot,
        possibleRegistrationNames: ft
      });
    }, IE = Ln && !document.documentMode, cp = function(e, t, a) {
      if (!Fa) {
        var i = Mh(a), u = Mh(t);
        u !== i && (Fa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, YE = function(e) {
      if (!Fa) {
        Fa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Lh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, $E = function(e, t) {
      var a = e.namespaceURI === Yi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var BT = /\r\n?/g, YT = /\u0000|\uFFFD/g;
    function Mh(e) {
      Xn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(BT, `
`).replace(YT, "");
    }
    function Nh(e, t, a, i) {
      var u = Mh(t), s = Mh(e);
      if (s !== u && (i && (Fa || (Fa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && xe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function WE(e) {
      return e.nodeType === $i ? e : e.ownerDocument;
    }
    function IT() {
    }
    function zh(e) {
      e.onclick = IT;
    }
    function $T(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Gs)
            f && Object.freeze(f), bv(t, f);
          else if (s === sp) {
            var p = f ? f[kh] : void 0;
            p != null && pv(t, p);
          } else if (s === Qs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && lo(t, f);
            } else typeof f == "number" && lo(t, "" + f);
          else s === Dh || s === Oo || s === BE || (ot.hasOwnProperty(s) ? f != null && (typeof f != "function" && Lh(s, f), s === "onScroll" && En("scroll", t)) : f != null && _r(t, s, f, u));
        }
    }
    function WT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Gs ? bv(e, f) : s === sp ? pv(e, f) : s === Qs ? lo(e, f) : _r(e, s, f, i);
      }
    }
    function QT(e, t, a, i) {
      var u, s = WE(a), f, p = i;
      if (p === Yi && (p = ud(e)), p === Yi) {
        if (u = Tl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Yi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !wr.call(Uy, e) && (Uy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function GT(e, t) {
      return WE(t).createTextNode(e);
    }
    function qT(e, t, a, i) {
      var u = Tl(t, a);
      Oh(t, a);
      var s;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < lp.length; f++)
            En(lp[f], e);
          s = a;
          break;
        case "source":
          En("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), s = a;
          break;
        case "details":
          En("toggle", e), s = a;
          break;
        case "input":
          ei(e, a), s = io(e, a), En("invalid", e);
          break;
        case "option":
          _t(e, a), s = a;
          break;
        case "select":
          cu(e, a), s = ts(e, a), En("invalid", e);
          break;
        case "textarea":
          ad(e, a), s = rd(e, a), En("invalid", e);
          break;
        default:
          s = a;
      }
      switch (gc(t, s), $T(t, e, i, s, u), t) {
        case "input":
          Za(e), z(e, a, !1);
          break;
        case "textarea":
          Za(e), fv(e);
          break;
        case "option":
          un(e, a);
          break;
        case "select":
          td(e, a);
          break;
        default:
          typeof s.onClick == "function" && zh(e);
          break;
      }
    }
    function XT(e, t, a, i, u) {
      Oh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = io(e, a), p = io(e, i), s = [];
          break;
        case "select":
          f = ts(e, a), p = ts(e, i), s = [];
          break;
        case "textarea":
          f = rd(e, a), p = rd(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && zh(e);
          break;
      }
      gc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Gs) {
            var w = f[v];
            for (y in w)
              w.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === sp || v === Qs || v === Dh || v === Oo || v === BE || (ot.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === M || x == null && M == null))
          if (v === Gs)
            if (x && Object.freeze(x), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && M[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === sp) {
            var A = x ? x[kh] : void 0, F = M ? M[kh] : void 0;
            A != null && F !== A && (s = s || []).push(v, A);
          } else v === Qs ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === Dh || v === Oo || (ot.hasOwnProperty(v) ? (x != null && (typeof x != "function" && Lh(v, x), v === "onScroll" && En("scroll", e)), !s && M !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (oy(g, p[Gs]), (s = s || []).push(Gs, g)), s;
    }
    function KT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Tl(a, i), f = Tl(a, u);
      switch (WT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          cv(e, u);
          break;
        case "select":
          hc(e, u);
          break;
      }
    }
    function JT(e) {
      {
        var t = e.toLowerCase();
        return ls.hasOwnProperty(t) && ls[t] || null;
      }
    }
    function ZT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Tl(t, a), Oh(t, a), t) {
        case "dialog":
          En("cancel", e), En("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < lp.length; y++)
            En(lp[y], e);
          break;
        case "source":
          En("error", e);
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e);
          break;
        case "details":
          En("toggle", e);
          break;
        case "input":
          ei(e, a), En("invalid", e);
          break;
        case "option":
          _t(e, a);
          break;
        case "select":
          cu(e, a), En("invalid", e);
          break;
        case "textarea":
          ad(e, a), En("invalid", e);
          break;
      }
      gc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, w = 0; w < g.length; w++) {
          var x = g[w].name.toLowerCase();
          switch (x) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[w].name);
          }
        }
      }
      var M = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var F = a[A];
          if (A === Qs)
            typeof F == "string" ? e.textContent !== F && (a[Oo] !== !0 && Nh(e.textContent, F, s, f), M = [Qs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[Oo] !== !0 && Nh(e.textContent, F, s, f), M = [Qs, "" + F]);
          else if (ot.hasOwnProperty(A))
            F != null && (typeof F != "function" && Lh(A, F), A === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var fe = void 0, Ae = an(A);
            if (a[Oo] !== !0) {
              if (!(A === Dh || A === Oo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === sp) {
                  var De = e.innerHTML, bt = F ? F[kh] : void 0;
                  if (bt != null) {
                    var Et = $E(e, bt);
                    Et !== De && cp(A, De, Et);
                  }
                } else if (A === Gs) {
                  if (v.delete(A), IE) {
                    var k = ly(F);
                    fe = e.getAttribute("style"), k !== fe && cp(A, fe, k);
                  }
                } else if (p && !_)
                  v.delete(A.toLowerCase()), fe = ru(e, A, F), F !== fe && cp(A, fe, F);
                else if (!hn(A, Ae, p) && !Kn(A, F, Ae, p)) {
                  var H = !1;
                  if (Ae !== null)
                    v.delete(Ae.attributeName), fe = vl(e, A, F, Ae);
                  else {
                    var O = i;
                    if (O === Yi && (O = ud(t)), O === Yi)
                      v.delete(A.toLowerCase());
                    else {
                      var K = JT(A);
                      K !== null && K !== A && (H = !0, v.delete(K)), v.delete(A);
                    }
                    fe = ru(e, A, F);
                  }
                  var he = _;
                  !he && F !== fe && !H && cp(A, fe, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Oo] !== !0 && YE(v), t) {
        case "input":
          Za(e), z(e, a, !0);
          break;
        case "textarea":
          Za(e), fv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && zh(e);
          break;
      }
      return M;
    }
    function ex(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ay(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function jy(e, t) {
      {
        if (Fa)
          return;
        Fa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Fy(e, t, a) {
      {
        if (Fa)
          return;
        Fa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Hy(e, t) {
      {
        if (t === "" || Fa)
          return;
        Fa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function tx(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          ny(e, a);
          return;
        case "select":
          nd(e, a);
          return;
      }
    }
    var fp = function() {
    }, dp = function() {
    };
    {
      var nx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], QE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], rx = QE.concat(["button"]), ax = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], GE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      dp = function(e, t) {
        var a = st({}, e || GE), i = {
          tag: t
        };
        return QE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), rx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), nx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ix = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return ax.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, lx = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, qE = {};
      fp = function(e, t, a) {
        a = a || GE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ix(e, u) ? null : i, f = s ? null : lx(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!qE[y]) {
            qE[y] = !0;
            var g = e, w = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", w = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, w, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Uh = "suppressHydrationWarning", Ah = "$", jh = "/$", pp = "$?", vp = "$!", ux = "style", Py = null, Vy = null;
    function ox(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case $i:
        case sd: {
          t = i === $i ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : od(null, "");
          break;
        }
        default: {
          var s = i === Nn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = od(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = dp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function sx(e, t, a) {
      {
        var i = e, u = od(i.namespace, t), s = dp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function TD(e) {
      return e;
    }
    function cx(e) {
      Py = Hn(), Vy = xT();
      var t = null;
      return Gn(!1), t;
    }
    function fx(e) {
      bT(Vy), Gn(Py), Py = null, Vy = null;
    }
    function dx(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (fp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = dp(f.ancestorInfo, e);
          fp(null, p, v);
        }
        s = f.namespace;
      }
      var y = QT(e, t, a, s);
      return yp(u, y), qy(y, t), y;
    }
    function px(e, t) {
      e.appendChild(t);
    }
    function vx(e, t, a, i, u) {
      switch (qT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function hx(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = dp(f.ancestorInfo, t);
          fp(null, p, v);
        }
      }
      return XT(e, t, a, i);
    }
    function By(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function mx(e, t, a, i) {
      {
        var u = a;
        fp(null, e, u.ancestorInfo);
      }
      var s = GT(e, t);
      return yp(i, s), s;
    }
    function yx() {
      var e = window.event;
      return e === void 0 ? za : df(e.type);
    }
    var Yy = typeof setTimeout == "function" ? setTimeout : void 0, gx = typeof clearTimeout == "function" ? clearTimeout : void 0, Iy = -1, XE = typeof Promise == "function" ? Promise : void 0, Sx = typeof queueMicrotask == "function" ? queueMicrotask : typeof XE < "u" ? function(e) {
      return XE.resolve(null).then(e).catch(Ex);
    } : Yy;
    function Ex(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Cx(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function Rx(e, t, a, i, u, s) {
      KT(e, t, a, i, u), qy(e, u);
    }
    function KE(e) {
      lo(e, "");
    }
    function Tx(e, t, a) {
      e.nodeValue = a;
    }
    function xx(e, t) {
      e.appendChild(t);
    }
    function bx(e, t) {
      var a;
      e.nodeType === Nn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && zh(a);
    }
    function wx(e, t, a) {
      e.insertBefore(t, a);
    }
    function _x(e, t, a) {
      e.nodeType === Nn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Dx(e, t) {
      e.removeChild(t);
    }
    function kx(e, t) {
      e.nodeType === Nn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function $y(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Nn) {
          var s = u.data;
          if (s === jh)
            if (i === 0) {
              e.removeChild(u), Lu(t);
              return;
            } else
              i--;
          else (s === Ah || s === pp || s === vp) && i++;
        }
        a = u;
      } while (a);
      Lu(t);
    }
    function Ox(e, t) {
      e.nodeType === Nn ? $y(e.parentNode, t) : e.nodeType === Qr && $y(e, t), Lu(e);
    }
    function Lx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Mx(e) {
      e.nodeValue = "";
    }
    function Nx(e, t) {
      e = e;
      var a = t[ux], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = yc("display", i);
    }
    function zx(e, t) {
      e.nodeValue = t;
    }
    function Ux(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === $i && e.documentElement && e.removeChild(e.documentElement);
    }
    function Ax(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function jx(e, t) {
      return t === "" || e.nodeType !== Ii ? null : e;
    }
    function Fx(e) {
      return e.nodeType !== Nn ? null : e;
    }
    function JE(e) {
      return e.data === pp;
    }
    function Wy(e) {
      return e.data === vp;
    }
    function Hx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Px(e, t) {
      e._reactRetry = t;
    }
    function Fh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === Ii)
          break;
        if (t === Nn) {
          var a = e.data;
          if (a === Ah || a === vp || a === pp)
            break;
          if (a === jh)
            return null;
        }
      }
      return e;
    }
    function hp(e) {
      return Fh(e.nextSibling);
    }
    function Vx(e) {
      return Fh(e.firstChild);
    }
    function Bx(e) {
      return Fh(e.firstChild);
    }
    function Yx(e) {
      return Fh(e.nextSibling);
    }
    function Ix(e, t, a, i, u, s, f) {
      yp(s, e), qy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & yt) !== Ne;
      return ZT(e, t, a, p, i, y, f);
    }
    function $x(e, t, a, i) {
      return yp(a, e), a.mode & yt, ex(e, t);
    }
    function Wx(e, t) {
      yp(t, e);
    }
    function Qx(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Nn) {
          var i = t.data;
          if (i === jh) {
            if (a === 0)
              return hp(t);
            a--;
          } else (i === Ah || i === vp || i === pp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function ZE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Nn) {
          var i = t.data;
          if (i === Ah || i === vp || i === pp) {
            if (a === 0)
              return t;
            a--;
          } else i === jh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Gx(e) {
      Lu(e);
    }
    function qx(e) {
      Lu(e);
    }
    function Xx(e) {
      return e !== "head" && e !== "body";
    }
    function Kx(e, t, a, i) {
      var u = !0;
      Nh(t.nodeValue, a, i, u);
    }
    function Jx(e, t, a, i, u, s) {
      if (t[Uh] !== !0) {
        var f = !0;
        Nh(i.nodeValue, u, s, f);
      }
    }
    function Zx(e, t) {
      t.nodeType === Qr ? Ay(e, t) : t.nodeType === Nn || jy(e, t);
    }
    function eb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? Ay(a, t) : t.nodeType === Nn || jy(a, t));
      }
    }
    function tb(e, t, a, i, u) {
      (u || t[Uh] !== !0) && (i.nodeType === Qr ? Ay(a, i) : i.nodeType === Nn || jy(a, i));
    }
    function nb(e, t, a) {
      Fy(e, t);
    }
    function rb(e, t) {
      Hy(e, t);
    }
    function ab(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Fy(i, t);
      }
    }
    function ib(e, t) {
      {
        var a = e.parentNode;
        a !== null && Hy(a, t);
      }
    }
    function lb(e, t, a, i, u, s) {
      (s || t[Uh] !== !0) && Fy(a, i);
    }
    function ub(e, t, a, i, u) {
      (u || t[Uh] !== !0) && Hy(a, i);
    }
    function ob(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function sb(e) {
      up(e);
    }
    var wf = Math.random().toString(36).slice(2), _f = "__reactFiber$" + wf, Qy = "__reactProps$" + wf, mp = "__reactContainer$" + wf, Gy = "__reactEvents$" + wf, cb = "__reactListeners$" + wf, fb = "__reactHandles$" + wf;
    function db(e) {
      delete e[_f], delete e[Qy], delete e[Gy], delete e[cb], delete e[fb];
    }
    function yp(e, t) {
      t[_f] = e;
    }
    function Hh(e, t) {
      t[mp] = e;
    }
    function eC(e) {
      e[mp] = null;
    }
    function gp(e) {
      return !!e[mp];
    }
    function qs(e) {
      var t = e[_f];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[mp] || a[_f], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = ZE(e); u !== null; ) {
              var s = u[_f];
              if (s)
                return s;
              u = ZE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Lo(e) {
      var t = e[_f] || e[mp];
      return t && (t.tag === Z || t.tag === Oe || t.tag === be || t.tag === J) ? t : null;
    }
    function Df(e) {
      if (e.tag === Z || e.tag === Oe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Ph(e) {
      return e[Qy] || null;
    }
    function qy(e, t) {
      e[Qy] = t;
    }
    function pb(e) {
      var t = e[Gy];
      return t === void 0 && (t = e[Gy] = /* @__PURE__ */ new Set()), t;
    }
    var tC = {}, nC = N.ReactDebugCurrentFrame;
    function Vh(e) {
      if (e) {
        var t = e._owner, a = Pi(e.type, e._source, t ? t.type : null);
        nC.setExtraStackFrame(a);
      } else
        nC.setExtraStackFrame(null);
    }
    function nl(e, t, a, i, u) {
      {
        var s = Function.call.bind(wr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Vh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Vh(null)), p instanceof Error && !(p.message in tC) && (tC[p.message] = !0, Vh(u), S("Failed %s type: %s", a, p.message), Vh(null));
          }
      }
    }
    var Xy = [], Bh;
    Bh = [];
    var ju = -1;
    function Mo(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (ju < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Bh[ju] && S("Unexpected Fiber popped."), e.current = Xy[ju], Xy[ju] = null, Bh[ju] = null, ju--;
    }
    function ia(e, t, a) {
      ju++, Xy[ju] = e.current, Bh[ju] = a, e.current = t;
    }
    var Ky;
    Ky = {};
    var ui = {};
    Object.freeze(ui);
    var Fu = Mo(ui), Yl = Mo(!1), Jy = ui;
    function kf(e, t, a) {
      return a && Il(t) ? Jy : Fu.current;
    }
    function rC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Of(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ui;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ke(e) || "Unknown";
          nl(i, s, "context", p);
        }
        return u && rC(e, t, s), s;
      }
    }
    function Yh() {
      return Yl.current;
    }
    function Il(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ih(e) {
      aa(Yl, e), aa(Fu, e);
    }
    function Zy(e) {
      aa(Yl, e), aa(Fu, e);
    }
    function aC(e, t, a) {
      {
        if (Fu.current !== ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(Fu, t, e), ia(Yl, a, e);
      }
    }
    function iC(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ke(e) || "Unknown";
            Ky[s] || (Ky[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ke(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ke(e) || "Unknown";
          nl(u, f, "child context", v);
        }
        return st({}, a, f);
      }
    }
    function $h(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ui;
        return Jy = Fu.current, ia(Fu, a, e), ia(Yl, Yl.current, e), !0;
      }
    }
    function lC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = iC(e, t, Jy);
          i.__reactInternalMemoizedMergedChildContext = u, aa(Yl, e), aa(Fu, e), ia(Fu, u, e), ia(Yl, a, e);
        } else
          aa(Yl, e), ia(Yl, a, e);
      }
    }
    function vb(e) {
      {
        if (!yu(e) || e.tag !== re)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case re: {
              var a = t.type;
              if (Il(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var No = 0, Wh = 1, Hu = null, eg = !1, tg = !1;
    function uC(e) {
      Hu === null ? Hu = [e] : Hu.push(e);
    }
    function hb(e) {
      eg = !0, uC(e);
    }
    function oC() {
      eg && zo();
    }
    function zo() {
      if (!tg && Hu !== null) {
        tg = !0;
        var e = 0, t = Aa();
        try {
          var a = !0, i = Hu;
          for (Fn(Mr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Hu = null, eg = !1;
        } catch (s) {
          throw Hu !== null && (Hu = Hu.slice(e + 1)), Cd(vs, zo), s;
        } finally {
          Fn(t), tg = !1;
        }
      }
      return null;
    }
    var Lf = [], Mf = 0, Qh = null, Gh = 0, Mi = [], Ni = 0, Xs = null, Pu = 1, Vu = "";
    function mb(e) {
      return Js(), (e.flags & Ri) !== Me;
    }
    function yb(e) {
      return Js(), Gh;
    }
    function gb() {
      var e = Vu, t = Pu, a = t & ~Sb(t);
      return a.toString(32) + e;
    }
    function Ks(e, t) {
      Js(), Lf[Mf++] = Gh, Lf[Mf++] = Qh, Qh = e, Gh = t;
    }
    function sC(e, t, a) {
      Js(), Mi[Ni++] = Pu, Mi[Ni++] = Vu, Mi[Ni++] = Xs, Xs = e;
      var i = Pu, u = Vu, s = qh(i) - 1, f = i & ~(1 << s), p = a + 1, v = qh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, w = (f & g).toString(32), x = f >> y, M = s - y, A = qh(t) + M, F = p << M, fe = F | x, Ae = w + u;
        Pu = 1 << A | fe, Vu = Ae;
      } else {
        var De = p << s, bt = De | f, Et = u;
        Pu = 1 << v | bt, Vu = Et;
      }
    }
    function ng(e) {
      Js();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ks(e, a), sC(e, a, i);
      }
    }
    function qh(e) {
      return 32 - An(e);
    }
    function Sb(e) {
      return 1 << qh(e) - 1;
    }
    function rg(e) {
      for (; e === Qh; )
        Qh = Lf[--Mf], Lf[Mf] = null, Gh = Lf[--Mf], Lf[Mf] = null;
      for (; e === Xs; )
        Xs = Mi[--Ni], Mi[Ni] = null, Vu = Mi[--Ni], Mi[Ni] = null, Pu = Mi[--Ni], Mi[Ni] = null;
    }
    function Eb() {
      return Js(), Xs !== null ? {
        id: Pu,
        overflow: Vu
      } : null;
    }
    function Cb(e, t) {
      Js(), Mi[Ni++] = Pu, Mi[Ni++] = Vu, Mi[Ni++] = Xs, Pu = t.id, Vu = t.overflow, Xs = e;
    }
    function Js() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, zi = null, rl = !1, Zs = !1, Uo = null;
    function Rb() {
      rl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function cC() {
      Zs = !0;
    }
    function Tb() {
      return Zs;
    }
    function xb(e) {
      var t = e.stateNode.containerInfo;
      return zi = Bx(t), Ar = e, rl = !0, Uo = null, Zs = !1, !0;
    }
    function bb(e, t, a) {
      return zi = Yx(t), Ar = e, rl = !0, Uo = null, Zs = !1, a !== null && Cb(e, a), !0;
    }
    function fC(e, t) {
      switch (e.tag) {
        case J: {
          Zx(e.stateNode.containerInfo, t);
          break;
        }
        case Z: {
          var a = (e.mode & yt) !== Ne;
          tb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case be: {
          var i = e.memoizedState;
          i.dehydrated !== null && eb(i.dehydrated, t);
          break;
        }
      }
    }
    function dC(e, t) {
      fC(e, t);
      var a = k_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ka) : i.push(a);
    }
    function ag(e, t) {
      {
        if (Zs)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Z:
                var i = t.type;
                t.pendingProps, nb(a, i);
                break;
              case Oe:
                var u = t.pendingProps;
                rb(a, u);
                break;
            }
            break;
          }
          case Z: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case Z: {
                var v = t.type, y = t.pendingProps, g = (e.mode & yt) !== Ne;
                lb(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Oe: {
                var w = t.pendingProps, x = (e.mode & yt) !== Ne;
                ub(
                  s,
                  f,
                  p,
                  w,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case be: {
            var M = e.memoizedState, A = M.dehydrated;
            if (A !== null) switch (t.tag) {
              case Z:
                var F = t.type;
                t.pendingProps, ab(A, F);
                break;
              case Oe:
                var fe = t.pendingProps;
                ib(A, fe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function pC(e, t) {
      t.flags = t.flags & ~qr | yn, ag(e, t);
    }
    function vC(e, t) {
      switch (e.tag) {
        case Z: {
          var a = e.type;
          e.pendingProps;
          var i = Ax(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, zi = Vx(i), !0) : !1;
        }
        case Oe: {
          var u = e.pendingProps, s = jx(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, zi = null, !0) : !1;
        }
        case be: {
          var f = Fx(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Eb(),
              retryLane: Zr
            };
            e.memoizedState = p;
            var v = O_(f);
            return v.return = e, e.child = v, Ar = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function ig(e) {
      return (e.mode & yt) !== Ne && (e.flags & ke) === Me;
    }
    function lg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ug(e) {
      if (rl) {
        var t = zi;
        if (!t) {
          ig(e) && (ag(Ar, e), lg()), pC(Ar, e), rl = !1, Ar = e;
          return;
        }
        var a = t;
        if (!vC(e, t)) {
          ig(e) && (ag(Ar, e), lg()), t = hp(a);
          var i = Ar;
          if (!t || !vC(e, t)) {
            pC(Ar, e), rl = !1, Ar = e;
            return;
          }
          dC(i, a);
        }
      }
    }
    function wb(e, t, a) {
      var i = e.stateNode, u = !Zs, s = Ix(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function _b(e) {
      var t = e.stateNode, a = e.memoizedProps, i = $x(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case J: {
              var s = u.stateNode.containerInfo, f = (u.mode & yt) !== Ne;
              Kx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Z: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & yt) !== Ne;
              Jx(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function Db(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Wx(a, e);
    }
    function kb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Qx(a);
    }
    function hC(e) {
      for (var t = e.return; t !== null && t.tag !== Z && t.tag !== J && t.tag !== be; )
        t = t.return;
      Ar = t;
    }
    function Xh(e) {
      if (e !== Ar)
        return !1;
      if (!rl)
        return hC(e), rl = !0, !1;
      if (e.tag !== J && (e.tag !== Z || Xx(e.type) && !By(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (ig(e))
            mC(e), lg();
          else
            for (; t; )
              dC(e, t), t = hp(t);
      }
      return hC(e), e.tag === be ? zi = kb(e) : zi = Ar ? hp(e.stateNode) : null, !0;
    }
    function Ob() {
      return rl && zi !== null;
    }
    function mC(e) {
      for (var t = zi; t; )
        fC(e, t), t = hp(t);
    }
    function Nf() {
      Ar = null, zi = null, rl = !1, Zs = !1;
    }
    function yC() {
      Uo !== null && (cR(Uo), Uo = null);
    }
    function jr() {
      return rl;
    }
    function og(e) {
      Uo === null ? Uo = [e] : Uo.push(e);
    }
    var Lb = N.ReactCurrentBatchConfig, Mb = null;
    function Nb() {
      return Lb.transition;
    }
    var al = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var zb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Zt && (t = a), a = a.return;
        return t;
      }, ec = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Sp = [], Ep = [], Cp = [], Rp = [], Tp = [], xp = [], tc = /* @__PURE__ */ new Set();
      al.recordUnsafeLifecycleWarnings = function(e, t) {
        tc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Sp.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillMount == "function" && Ep.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Cp.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Rp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Tp.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillUpdate == "function" && xp.push(e));
      }, al.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(x) {
          e.add(Ke(x) || "Component"), tc.add(x.type);
        }), Sp = []);
        var t = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(x) {
          t.add(Ke(x) || "Component"), tc.add(x.type);
        }), Ep = []);
        var a = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(x) {
          a.add(Ke(x) || "Component"), tc.add(x.type);
        }), Cp = []);
        var i = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(x) {
          i.add(Ke(x) || "Component"), tc.add(x.type);
        }), Rp = []);
        var u = /* @__PURE__ */ new Set();
        Tp.length > 0 && (Tp.forEach(function(x) {
          u.add(Ke(x) || "Component"), tc.add(x.type);
        }), Tp = []);
        var s = /* @__PURE__ */ new Set();
        if (xp.length > 0 && (xp.forEach(function(x) {
          s.add(Ke(x) || "Component"), tc.add(x.type);
        }), xp = []), t.size > 0) {
          var f = ec(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = ec(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = ec(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = ec(e);
          We(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = ec(a);
          We(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var w = ec(u);
          We(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
      };
      var Kh = /* @__PURE__ */ new Map(), gC = /* @__PURE__ */ new Set();
      al.recordLegacyContextWarning = function(e, t) {
        var a = zb(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!gC.has(e.type)) {
          var i = Kh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Kh.set(a, i)), i.push(e));
        }
      }, al.flushLegacyContextWarning = function() {
        Kh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ke(s) || "Component"), gC.add(s.type);
            });
            var u = ec(i);
            try {
              Xt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              fn();
            }
          }
        });
      }, al.discardPendingWarnings = function() {
        Sp = [], Ep = [], Cp = [], Rp = [], Tp = [], xp = [], Kh = /* @__PURE__ */ new Map();
      };
    }
    var sg, cg, fg, dg, pg, SC = function(e, t) {
    };
    sg = !1, cg = !1, fg = {}, dg = {}, pg = {}, SC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ke(t) || "Component";
        dg[a] || (dg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Ub(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function bp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Zt || P) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== re) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Ub(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ke(e) || "Component";
          fg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), fg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== re)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ci(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(w) {
            var x = v.refs;
            w === null ? delete x[y] : x[y] = w;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Jh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Zh(e) {
      {
        var t = Ke(e) || "Component";
        if (pg[t])
          return;
        pg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function EC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function CC(e) {
      function t(k, H) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [H], k.flags |= ka) : O.push(H);
        }
      }
      function a(k, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, H) {
        for (var O = /* @__PURE__ */ new Map(), K = H; K !== null; )
          K.key !== null ? O.set(K.key, K) : O.set(K.index, K), K = K.sibling;
        return O;
      }
      function u(k, H) {
        var O = cc(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= Ri, H;
        var K = k.alternate;
        if (K !== null) {
          var he = K.index;
          return he < H ? (k.flags |= yn, H) : he;
        } else
          return k.flags |= yn, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= yn), k;
      }
      function p(k, H, O, K) {
        if (H === null || H.tag !== Oe) {
          var he = oE(O, k.mode, K);
          return he.return = k, he;
        } else {
          var de = u(H, O);
          return de.return = k, de;
        }
      }
      function v(k, H, O, K) {
        var he = O.type;
        if (he === di)
          return g(k, H, O.props.children, K, O.key);
        if (H !== null && (H.elementType === he || // Keep this check inline so it only runs on the false path:
        wR(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof he == "object" && he !== null && he.$$typeof === Je && EC(he) === H.type)) {
          var de = u(H, O.props);
          return de.ref = bp(k, H, O), de.return = k, de._debugSource = O._source, de._debugOwner = O._owner, de;
        }
        var Ge = uE(O, k.mode, K);
        return Ge.ref = bp(k, H, O), Ge.return = k, Ge;
      }
      function y(k, H, O, K) {
        if (H === null || H.tag !== ne || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var he = sE(O, k.mode, K);
          return he.return = k, he;
        } else {
          var de = u(H, O.children || []);
          return de.return = k, de;
        }
      }
      function g(k, H, O, K, he) {
        if (H === null || H.tag !== nt) {
          var de = Wo(O, k.mode, K, he);
          return de.return = k, de;
        } else {
          var Ge = u(H, O);
          return Ge.return = k, Ge;
        }
      }
      function w(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var K = oE("" + H, k.mode, O);
          return K.return = k, K;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Dr: {
              var he = uE(H, k.mode, O);
              return he.ref = bp(k, null, H), he.return = k, he;
            }
            case ar: {
              var de = sE(H, k.mode, O);
              return de.return = k, de;
            }
            case Je: {
              var Ge = H._payload, tt = H._init;
              return w(k, tt(Ge), O);
            }
          }
          if (pt(H) || at(H)) {
            var tn = Wo(H, k.mode, O, null);
            return tn.return = k, tn;
          }
          Jh(k, H);
        }
        return typeof H == "function" && Zh(k), null;
      }
      function x(k, H, O, K) {
        var he = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return he !== null ? null : p(k, H, "" + O, K);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Dr:
              return O.key === he ? v(k, H, O, K) : null;
            case ar:
              return O.key === he ? y(k, H, O, K) : null;
            case Je: {
              var de = O._payload, Ge = O._init;
              return x(k, H, Ge(de), K);
            }
          }
          if (pt(O) || at(O))
            return he !== null ? null : g(k, H, O, K, null);
          Jh(k, O);
        }
        return typeof O == "function" && Zh(k), null;
      }
      function M(k, H, O, K, he) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var de = k.get(O) || null;
          return p(H, de, "" + K, he);
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case Dr: {
              var Ge = k.get(K.key === null ? O : K.key) || null;
              return v(H, Ge, K, he);
            }
            case ar: {
              var tt = k.get(K.key === null ? O : K.key) || null;
              return y(H, tt, K, he);
            }
            case Je:
              var tn = K._payload, Ft = K._init;
              return M(k, H, O, Ft(tn), he);
          }
          if (pt(K) || at(K)) {
            var qn = k.get(O) || null;
            return g(H, qn, K, he, null);
          }
          Jh(H, K);
        }
        return typeof K == "function" && Zh(H), null;
      }
      function A(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case Dr:
            case ar:
              SC(k, O);
              var K = k.key;
              if (typeof K != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(K);
                break;
              }
              if (!H.has(K)) {
                H.add(K);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", K);
              break;
            case Je:
              var he = k._payload, de = k._init;
              A(de(he), H, O);
              break;
          }
        }
        return H;
      }
      function F(k, H, O, K) {
        for (var he = null, de = 0; de < O.length; de++) {
          var Ge = O[de];
          he = A(Ge, he, k);
        }
        for (var tt = null, tn = null, Ft = H, qn = 0, Ht = 0, Vn = null; Ft !== null && Ht < O.length; Ht++) {
          Ft.index > Ht ? (Vn = Ft, Ft = null) : Vn = Ft.sibling;
          var ua = x(k, Ft, O[Ht], K);
          if (ua === null) {
            Ft === null && (Ft = Vn);
            break;
          }
          e && Ft && ua.alternate === null && t(k, Ft), qn = s(ua, qn, Ht), tn === null ? tt = ua : tn.sibling = ua, tn = ua, Ft = Vn;
        }
        if (Ht === O.length) {
          if (a(k, Ft), jr()) {
            var Ir = Ht;
            Ks(k, Ir);
          }
          return tt;
        }
        if (Ft === null) {
          for (; Ht < O.length; Ht++) {
            var si = w(k, O[Ht], K);
            si !== null && (qn = s(si, qn, Ht), tn === null ? tt = si : tn.sibling = si, tn = si);
          }
          if (jr()) {
            var Ra = Ht;
            Ks(k, Ra);
          }
          return tt;
        }
        for (var Ta = i(k, Ft); Ht < O.length; Ht++) {
          var oa = M(Ta, k, Ht, O[Ht], K);
          oa !== null && (e && oa.alternate !== null && Ta.delete(oa.key === null ? Ht : oa.key), qn = s(oa, qn, Ht), tn === null ? tt = oa : tn.sibling = oa, tn = oa);
        }
        if (e && Ta.forEach(function(Jf) {
          return t(k, Jf);
        }), jr()) {
          var Gu = Ht;
          Ks(k, Gu);
        }
        return tt;
      }
      function fe(k, H, O, K) {
        var he = at(O);
        if (typeof he != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (cg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), cg = !0), O.entries === he && (sg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), sg = !0);
          var de = he.call(O);
          if (de)
            for (var Ge = null, tt = de.next(); !tt.done; tt = de.next()) {
              var tn = tt.value;
              Ge = A(tn, Ge, k);
            }
        }
        var Ft = he.call(O);
        if (Ft == null)
          throw new Error("An iterable object provided no iterator.");
        for (var qn = null, Ht = null, Vn = H, ua = 0, Ir = 0, si = null, Ra = Ft.next(); Vn !== null && !Ra.done; Ir++, Ra = Ft.next()) {
          Vn.index > Ir ? (si = Vn, Vn = null) : si = Vn.sibling;
          var Ta = x(k, Vn, Ra.value, K);
          if (Ta === null) {
            Vn === null && (Vn = si);
            break;
          }
          e && Vn && Ta.alternate === null && t(k, Vn), ua = s(Ta, ua, Ir), Ht === null ? qn = Ta : Ht.sibling = Ta, Ht = Ta, Vn = si;
        }
        if (Ra.done) {
          if (a(k, Vn), jr()) {
            var oa = Ir;
            Ks(k, oa);
          }
          return qn;
        }
        if (Vn === null) {
          for (; !Ra.done; Ir++, Ra = Ft.next()) {
            var Gu = w(k, Ra.value, K);
            Gu !== null && (ua = s(Gu, ua, Ir), Ht === null ? qn = Gu : Ht.sibling = Gu, Ht = Gu);
          }
          if (jr()) {
            var Jf = Ir;
            Ks(k, Jf);
          }
          return qn;
        }
        for (var rv = i(k, Vn); !Ra.done; Ir++, Ra = Ft.next()) {
          var Jl = M(rv, k, Ir, Ra.value, K);
          Jl !== null && (e && Jl.alternate !== null && rv.delete(Jl.key === null ? Ir : Jl.key), ua = s(Jl, ua, Ir), Ht === null ? qn = Jl : Ht.sibling = Jl, Ht = Jl);
        }
        if (e && rv.forEach(function(uD) {
          return t(k, uD);
        }), jr()) {
          var lD = Ir;
          Ks(k, lD);
        }
        return qn;
      }
      function Ae(k, H, O, K) {
        if (H !== null && H.tag === Oe) {
          a(k, H.sibling);
          var he = u(H, O);
          return he.return = k, he;
        }
        a(k, H);
        var de = oE(O, k.mode, K);
        return de.return = k, de;
      }
      function De(k, H, O, K) {
        for (var he = O.key, de = H; de !== null; ) {
          if (de.key === he) {
            var Ge = O.type;
            if (Ge === di) {
              if (de.tag === nt) {
                a(k, de.sibling);
                var tt = u(de, O.props.children);
                return tt.return = k, tt._debugSource = O._source, tt._debugOwner = O._owner, tt;
              }
            } else if (de.elementType === Ge || // Keep this check inline so it only runs on the false path:
            wR(de, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ge == "object" && Ge !== null && Ge.$$typeof === Je && EC(Ge) === de.type) {
              a(k, de.sibling);
              var tn = u(de, O.props);
              return tn.ref = bp(k, de, O), tn.return = k, tn._debugSource = O._source, tn._debugOwner = O._owner, tn;
            }
            a(k, de);
            break;
          } else
            t(k, de);
          de = de.sibling;
        }
        if (O.type === di) {
          var Ft = Wo(O.props.children, k.mode, K, O.key);
          return Ft.return = k, Ft;
        } else {
          var qn = uE(O, k.mode, K);
          return qn.ref = bp(k, H, O), qn.return = k, qn;
        }
      }
      function bt(k, H, O, K) {
        for (var he = O.key, de = H; de !== null; ) {
          if (de.key === he)
            if (de.tag === ne && de.stateNode.containerInfo === O.containerInfo && de.stateNode.implementation === O.implementation) {
              a(k, de.sibling);
              var Ge = u(de, O.children || []);
              return Ge.return = k, Ge;
            } else {
              a(k, de);
              break;
            }
          else
            t(k, de);
          de = de.sibling;
        }
        var tt = sE(O, k.mode, K);
        return tt.return = k, tt;
      }
      function Et(k, H, O, K) {
        var he = typeof O == "object" && O !== null && O.type === di && O.key === null;
        if (he && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Dr:
              return f(De(k, H, O, K));
            case ar:
              return f(bt(k, H, O, K));
            case Je:
              var de = O._payload, Ge = O._init;
              return Et(k, H, Ge(de), K);
          }
          if (pt(O))
            return F(k, H, O, K);
          if (at(O))
            return fe(k, H, O, K);
          Jh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Ae(k, H, "" + O, K)) : (typeof O == "function" && Zh(k), a(k, H));
      }
      return Et;
    }
    var zf = CC(!0), RC = CC(!1);
    function Ab(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = cc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = cc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function jb(e, t) {
      for (var a = e.child; a !== null; )
        x_(a, t), a = a.sibling;
    }
    var vg = Mo(null), hg;
    hg = {};
    var em = null, Uf = null, mg = null, tm = !1;
    function nm() {
      em = null, Uf = null, mg = null, tm = !1;
    }
    function TC() {
      tm = !0;
    }
    function xC() {
      tm = !1;
    }
    function bC(e, t, a) {
      ia(vg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== hg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = hg;
    }
    function yg(e, t) {
      var a = vg.current;
      aa(vg, t), e._currentValue = a;
    }
    function gg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Ou(i.childLanes, t) ? u !== null && !Ou(u.childLanes, t) && (u.childLanes = lt(u.childLanes, t)) : (i.childLanes = lt(i.childLanes, t), u !== null && (u.childLanes = lt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Fb(e, t, a) {
      Hb(e, t, a);
    }
    function Hb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === re) {
                var p = Ds(a), v = Bu(nn, p);
                v.tag = am;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, w = g.pending;
                  w === null ? v.next = v : (v.next = w.next, w.next = v), g.pending = v;
                }
              }
              i.lanes = lt(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = lt(x.lanes, a)), gg(i.return, a, e), s.lanes = lt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Le)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === $t) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = lt(M.lanes, a);
          var A = M.alternate;
          A !== null && (A.lanes = lt(A.lanes, a)), gg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Af(e, t) {
      em = e, Uf = null, mg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ea(a.lanes, t) && Pp(), a.firstContext = null);
      }
    }
    function nr(e) {
      tm && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (mg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Uf === null) {
          if (em === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Uf = a, em.dependencies = {
            lanes: $,
            firstContext: a
          };
        } else
          Uf = Uf.next = a;
      }
      return t;
    }
    var nc = null;
    function Sg(e) {
      nc === null ? nc = [e] : nc.push(e);
    }
    function Pb() {
      if (nc !== null) {
        for (var e = 0; e < nc.length; e++) {
          var t = nc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        nc = null;
      }
    }
    function wC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, rm(e, i);
    }
    function Vb(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, Sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Bb(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, rm(e, i);
    }
    function Ha(e, t) {
      return rm(e, t);
    }
    var Yb = rm;
    function rm(e, t) {
      e.lanes = lt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = lt(a.lanes, t)), a === null && (e.flags & (yn | qr)) !== Me && RR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = lt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = lt(a.childLanes, t) : (u.flags & (yn | qr)) !== Me && RR(e), i = u, u = u.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var _C = 0, DC = 1, am = 2, Eg = 3, im = !1, Cg, lm;
    Cg = !1, lm = null;
    function Rg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: $
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function kC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Bu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: _C,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Ao(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (lm === u && !Cg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Cg = !0), Vw()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Yb(e, a);
      } else
        return Bb(e, u, t, a);
    }
    function um(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Fd(a)) {
          var s = u.lanes;
          s = Pd(s, e.pendingLanes);
          var f = lt(s, a);
          u.lanes = f, of(e, f);
        }
      }
    }
    function Tg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Ib(e, t, a, i, u, s) {
      switch (a.tag) {
        case DC: {
          var f = a.payload;
          if (typeof f == "function") {
            TC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Zt) {
                gn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  gn(!1);
                }
              }
              xC();
            }
            return p;
          }
          return f;
        }
        case Eg:
          e.flags = e.flags & ~Jn | ke;
        case _C: {
          var v = a.payload, y;
          if (typeof v == "function") {
            TC(), y = v.call(s, i, u);
            {
              if (e.mode & Zt) {
                gn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  gn(!1);
                }
              }
              xC();
            }
          } else
            y = v;
          return y == null ? i : st({}, i, y);
        }
        case am:
          return im = !0, i;
      }
      return i;
    }
    function om(e, t, a, i) {
      var u = e.updateQueue;
      im = !1, lm = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var w = g.updateQueue, x = w.lastBaseUpdate;
          x !== f && (x === null ? w.firstBaseUpdate = y : x.next = y, w.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, A = $, F = null, fe = null, Ae = null, De = s;
        do {
          var bt = De.lane, Et = De.eventTime;
          if (Ou(i, bt)) {
            if (Ae !== null) {
              var H = {
                eventTime: Et,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Lt,
                tag: De.tag,
                payload: De.payload,
                callback: De.callback,
                next: null
              };
              Ae = Ae.next = H;
            }
            M = Ib(e, u, De, M, t, a);
            var O = De.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            De.lane !== Lt) {
              e.flags |= on;
              var K = u.effects;
              K === null ? u.effects = [De] : K.push(De);
            }
          } else {
            var k = {
              eventTime: Et,
              lane: bt,
              tag: De.tag,
              payload: De.payload,
              callback: De.callback,
              next: null
            };
            Ae === null ? (fe = Ae = k, F = M) : Ae = Ae.next = k, A = lt(A, bt);
          }
          if (De = De.next, De === null) {
            if (p = u.shared.pending, p === null)
              break;
            var he = p, de = he.next;
            he.next = null, De = de, u.lastBaseUpdate = he, u.shared.pending = null;
          }
        } while (!0);
        Ae === null && (F = M), u.baseState = F, u.firstBaseUpdate = fe, u.lastBaseUpdate = Ae;
        var Ge = u.shared.interleaved;
        if (Ge !== null) {
          var tt = Ge;
          do
            A = lt(A, tt.lane), tt = tt.next;
          while (tt !== Ge);
        } else s === null && (u.shared.lanes = $);
        Jp(A), e.lanes = A, e.memoizedState = M;
      }
      lm = null;
    }
    function $b(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function OC() {
      im = !1;
    }
    function sm() {
      return im;
    }
    function LC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, $b(f, a));
        }
    }
    var wp = {}, jo = Mo(wp), _p = Mo(wp), cm = Mo(wp);
    function fm(e) {
      if (e === wp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function MC() {
      var e = fm(cm.current);
      return e;
    }
    function xg(e, t) {
      ia(cm, t, e), ia(_p, e, e), ia(jo, wp, e);
      var a = ox(t);
      aa(jo, e), ia(jo, a, e);
    }
    function jf(e) {
      aa(jo, e), aa(_p, e), aa(cm, e);
    }
    function bg() {
      var e = fm(jo.current);
      return e;
    }
    function NC(e) {
      fm(cm.current);
      var t = fm(jo.current), a = sx(t, e.type);
      t !== a && (ia(_p, e, e), ia(jo, a, e));
    }
    function wg(e) {
      _p.current === e && (aa(jo, e), aa(_p, e));
    }
    var Wb = 0, zC = 1, UC = 1, Dp = 2, il = Mo(Wb);
    function _g(e, t) {
      return (e & t) !== 0;
    }
    function Ff(e) {
      return e & zC;
    }
    function Dg(e, t) {
      return e & zC | t;
    }
    function Qb(e, t) {
      return e | t;
    }
    function Fo(e, t) {
      ia(il, t, e);
    }
    function Hf(e) {
      aa(il, e);
    }
    function Gb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function dm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === be) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || JE(i) || Wy(i))
              return t;
          }
        } else if (t.tag === Qt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & ke) !== Me;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Pa = (
      /*   */
      0
    ), fr = (
      /* */
      1
    ), $l = (
      /*  */
      2
    ), dr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), kg = [];
    function Og() {
      for (var e = 0; e < kg.length; e++) {
        var t = kg[e];
        t._workInProgressVersionPrimary = null;
      }
      kg.length = 0;
    }
    function qb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ve = N.ReactCurrentDispatcher, kp = N.ReactCurrentBatchConfig, Lg, Pf;
    Lg = /* @__PURE__ */ new Set();
    var rc = $, en = null, pr = null, vr = null, pm = !1, Op = !1, Lp = 0, Xb = 0, Kb = 25, V = null, Ui = null, Ho = -1, Mg = !1;
    function Yt() {
      {
        var e = V;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function le() {
      {
        var e = V;
        Ui !== null && (Ho++, Ui[Ho] !== e && Jb(e));
      }
    }
    function Vf(e) {
      e != null && !pt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function Jb(e) {
      {
        var t = Ke(en);
        if (!Lg.has(t) && (Lg.add(t), Ui !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ho; u++) {
            for (var s = Ui[u], f = u === Ho ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Ng(e, t) {
      if (Mg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!G(e[a], t[a]))
          return !1;
      return !0;
    }
    function Bf(e, t, a, i, u, s) {
      rc = s, en = t, Ui = e !== null ? e._debugHookTypes : null, Ho = -1, Mg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = $, e !== null && e.memoizedState !== null ? ve.current = r0 : Ui !== null ? ve.current = n0 : ve.current = t0;
      var f = a(i, u);
      if (Op) {
        var p = 0;
        do {
          if (Op = !1, Lp = 0, p >= Kb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Mg = !1, pr = null, vr = null, t.updateQueue = null, Ho = -1, ve.current = a0, f = a(i, u);
        } while (Op);
      }
      ve.current = wm, t._debugHookTypes = Ui;
      var v = pr !== null && pr.next !== null;
      if (rc = $, en = null, pr = null, vr = null, V = null, Ui = null, Ho = -1, e !== null && (e.flags & Un) !== (t.flags & Un) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & yt) !== Ne && S("Internal React error: Expected static flag was missing. Please notify the React team."), pm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Yf() {
      var e = Lp !== 0;
      return Lp = 0, e;
    }
    function AC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & At) !== Ne ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ks(e.lanes, a);
    }
    function jC() {
      if (ve.current = wm, pm) {
        for (var e = en.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        pm = !1;
      }
      rc = $, en = null, pr = null, vr = null, Ui = null, Ho = -1, V = null, XC = !1, Op = !1, Lp = 0;
    }
    function Wl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vr === null ? en.memoizedState = vr = e : vr = vr.next = e, vr;
    }
    function Ai() {
      var e;
      if (pr === null) {
        var t = en.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = pr.next;
      var a;
      if (vr === null ? a = en.memoizedState : a = vr.next, a !== null)
        vr = a, a = vr.next, pr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        pr = e;
        var i = {
          memoizedState: pr.memoizedState,
          baseState: pr.baseState,
          baseQueue: pr.baseQueue,
          queue: pr.queue,
          next: null
        };
        vr === null ? en.memoizedState = vr = i : vr = vr.next = i;
      }
      return vr;
    }
    function FC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function zg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ug(e, t, a) {
      var i = Wl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = n1.bind(null, en, s);
      return [i.memoizedState, f];
    }
    function Ag(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = pr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, w = s.baseState, x = null, M = null, A = null, F = g;
        do {
          var fe = F.lane;
          if (Ou(rc, fe)) {
            if (A !== null) {
              var De = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Lt,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              A = A.next = De;
            }
            if (F.hasEagerState)
              w = F.eagerState;
            else {
              var bt = F.action;
              w = e(w, bt);
            }
          } else {
            var Ae = {
              lane: fe,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            A === null ? (M = A = Ae, x = w) : A = A.next = Ae, en.lanes = lt(en.lanes, fe), Jp(fe);
          }
          F = F.next;
        } while (F !== null && F !== g);
        A === null ? x = w : A.next = M, G(w, i.memoizedState) || Pp(), i.memoizedState = w, i.baseState = x, i.baseQueue = A, u.lastRenderedState = w;
      }
      var Et = u.interleaved;
      if (Et !== null) {
        var k = Et;
        do {
          var H = k.lane;
          en.lanes = lt(en.lanes, H), Jp(H), k = k.next;
        } while (k !== Et);
      } else f === null && (u.lanes = $);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function jg(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        G(p, i.memoizedState) || Pp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function xD(e, t, a) {
    }
    function bD(e, t, a) {
    }
    function Fg(e, t, a) {
      var i = en, u = Wl(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Pf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Pf = !0);
      } else {
        if (s = t(), !Pf) {
          var p = t();
          G(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Pf = !0);
        }
        var v = $m();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        lf(v, rc) || HC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, gm(VC.bind(null, i, y, e), [e]), i.flags |= Gr, Mp(fr | Fr, PC.bind(null, i, y, s, t), void 0, null), s;
    }
    function vm(e, t, a) {
      var i = en, u = Ai(), s = t();
      if (!Pf) {
        var f = t();
        G(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Pf = !0);
      }
      var p = u.memoizedState, v = !G(p, s);
      v && (u.memoizedState = s, Pp());
      var y = u.queue;
      if (zp(VC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      vr !== null && vr.memoizedState.tag & fr) {
        i.flags |= Gr, Mp(fr | Fr, PC.bind(null, i, y, s, t), void 0, null);
        var g = $m();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        lf(g, rc) || HC(i, t, s);
      }
      return s;
    }
    function HC(e, t, a) {
      e.flags |= mo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = en.updateQueue;
      if (u === null)
        u = FC(), en.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function PC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, BC(t) && YC(e);
    }
    function VC(e, t, a) {
      var i = function() {
        BC(t) && YC(e);
      };
      return a(i);
    }
    function BC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !G(a, i);
      } catch {
        return !0;
      }
    }
    function YC(e) {
      var t = Ha(e, $e);
      t !== null && gr(t, e, $e, nn);
    }
    function hm(e) {
      var t = Wl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: zg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = r1.bind(null, en, a);
      return [t.memoizedState, i];
    }
    function Hg(e) {
      return Ag(zg);
    }
    function Pg(e) {
      return jg(zg);
    }
    function Mp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = en.updateQueue;
      if (s === null)
        s = FC(), en.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Vg(e) {
      var t = Wl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function mm(e) {
      var t = Ai();
      return t.memoizedState;
    }
    function Np(e, t, a, i) {
      var u = Wl(), s = i === void 0 ? null : i;
      en.flags |= e, u.memoizedState = Mp(fr | t, a, void 0, s);
    }
    function ym(e, t, a, i) {
      var u = Ai(), s = i === void 0 ? null : i, f = void 0;
      if (pr !== null) {
        var p = pr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ng(s, v)) {
            u.memoizedState = Mp(t, a, f, s);
            return;
          }
        }
      }
      en.flags |= e, u.memoizedState = Mp(fr | t, a, f, s);
    }
    function gm(e, t) {
      return (en.mode & At) !== Ne ? Np(Ti | Gr | Mc, Fr, e, t) : Np(Gr | Mc, Fr, e, t);
    }
    function zp(e, t) {
      return ym(Gr, Fr, e, t);
    }
    function Bg(e, t) {
      return Np(Rt, $l, e, t);
    }
    function Sm(e, t) {
      return ym(Rt, $l, e, t);
    }
    function Yg(e, t) {
      var a = Rt;
      return a |= Qi, (en.mode & At) !== Ne && (a |= _l), Np(a, dr, e, t);
    }
    function Em(e, t) {
      return ym(Rt, dr, e, t);
    }
    function IC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Ig(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Rt;
      return u |= Qi, (en.mode & At) !== Ne && (u |= _l), Np(u, dr, IC.bind(null, t, e), i);
    }
    function Cm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return ym(Rt, dr, IC.bind(null, t, e), i);
    }
    function Zb(e, t) {
    }
    var Rm = Zb;
    function $g(e, t) {
      var a = Wl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Tm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Wg(e, t) {
      var a = Wl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function xm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Qg(e) {
      var t = Wl();
      return t.memoizedState = e, e;
    }
    function $C(e) {
      var t = Ai(), a = pr, i = a.memoizedState;
      return QC(t, i, e);
    }
    function WC(e) {
      var t = Ai();
      if (pr === null)
        return t.memoizedState = e, e;
      var a = pr.memoizedState;
      return QC(t, a, e);
    }
    function QC(e, t, a) {
      var i = !Ad(rc);
      if (i) {
        if (!G(a, t)) {
          var u = Hd();
          en.lanes = lt(en.lanes, u), Jp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Pp()), e.memoizedState = a, a;
    }
    function e1(e, t, a) {
      var i = Aa();
      Fn(th(i, _i)), e(!0);
      var u = kp.transition;
      kp.transition = {};
      var s = kp.transition;
      kp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Fn(i), kp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && We("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Gg() {
      var e = hm(!1), t = e[0], a = e[1], i = e1.bind(null, a), u = Wl();
      return u.memoizedState = i, [t, i];
    }
    function GC() {
      var e = Hg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    function qC() {
      var e = Pg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    var XC = !1;
    function t1() {
      return XC;
    }
    function qg() {
      var e = Wl(), t = $m(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = gb();
        i = ":" + a + "R" + u;
        var s = Lp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Xb++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function bm() {
      var e = Ai(), t = e.memoizedState;
      return t;
    }
    function n1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Io(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (KC(e))
        JC(t, u);
      else {
        var s = wC(e, t, u, i);
        if (s !== null) {
          var f = Ca();
          gr(s, e, i, f), ZC(s, t, i);
        }
      }
      e0(e, i);
    }
    function r1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Io(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (KC(e))
        JC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === $ && (s === null || s.lanes === $)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ve.current, ve.current = ll;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, G(y, v)) {
                Vb(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ve.current = p;
            }
          }
        }
        var g = wC(e, t, u, i);
        if (g !== null) {
          var w = Ca();
          gr(g, e, i, w), ZC(g, t, i);
        }
      }
      e0(e, i);
    }
    function KC(e) {
      var t = e.alternate;
      return e === en || t !== null && t === en;
    }
    function JC(e, t) {
      Op = pm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function ZC(e, t, a) {
      if (Fd(a)) {
        var i = t.lanes;
        i = Pd(i, e.pendingLanes);
        var u = lt(i, a);
        t.lanes = u, of(e, u);
      }
    }
    function e0(e, t, a) {
      Ss(e, t);
    }
    var wm = {
      readContext: nr,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: te
    }, t0 = null, n0 = null, r0 = null, a0 = null, Ql = null, ll = null, _m = null;
    {
      var Xg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ze = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      t0 = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Yt(), Vf(t), $g(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Yt(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Yt(), Vf(t), gm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Yt(), Vf(a), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Yt(), Vf(t), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Yt(), Vf(t), Yg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Yt(), Vf(t);
          var a = ve.current;
          ve.current = Ql;
          try {
            return Wg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Yt();
          var i = ve.current;
          ve.current = Ql;
          try {
            return Ug(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Yt(), Vg(e);
        },
        useState: function(e) {
          V = "useState", Yt();
          var t = ve.current;
          ve.current = Ql;
          try {
            return hm(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Yt(), Qg(e);
        },
        useTransition: function() {
          return V = "useTransition", Yt(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Yt(), Fg(e, t, a);
        },
        useId: function() {
          return V = "useId", Yt(), qg();
        },
        unstable_isNewReconciler: te
      }, n0 = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", le(), $g(e, t);
        },
        useContext: function(e) {
          return V = "useContext", le(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", le(), gm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", le(), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", le(), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", le(), Yg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", le();
          var a = ve.current;
          ve.current = Ql;
          try {
            return Wg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", le();
          var i = ve.current;
          ve.current = Ql;
          try {
            return Ug(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", le(), Vg(e);
        },
        useState: function(e) {
          V = "useState", le();
          var t = ve.current;
          ve.current = Ql;
          try {
            return hm(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", le(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", le(), Qg(e);
        },
        useTransition: function() {
          return V = "useTransition", le(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", le(), Fg(e, t, a);
        },
        useId: function() {
          return V = "useId", le(), qg();
        },
        unstable_isNewReconciler: te
      }, r0 = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", le(), Tm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", le(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", le(), zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", le(), Cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", le(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", le(), Em(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", le();
          var a = ve.current;
          ve.current = ll;
          try {
            return xm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", le();
          var i = ve.current;
          ve.current = ll;
          try {
            return Ag(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", le(), mm();
        },
        useState: function(e) {
          V = "useState", le();
          var t = ve.current;
          ve.current = ll;
          try {
            return Hg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", le(), Rm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", le(), $C(e);
        },
        useTransition: function() {
          return V = "useTransition", le(), GC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", le(), vm(e, t);
        },
        useId: function() {
          return V = "useId", le(), bm();
        },
        unstable_isNewReconciler: te
      }, a0 = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", le(), Tm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", le(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", le(), zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", le(), Cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", le(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", le(), Em(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", le();
          var a = ve.current;
          ve.current = _m;
          try {
            return xm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", le();
          var i = ve.current;
          ve.current = _m;
          try {
            return jg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", le(), mm();
        },
        useState: function(e) {
          V = "useState", le();
          var t = ve.current;
          ve.current = _m;
          try {
            return Pg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", le(), Rm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", le(), WC(e);
        },
        useTransition: function() {
          return V = "useTransition", le(), qC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", le(), vm(e, t);
        },
        useId: function() {
          return V = "useId", le(), bm();
        },
        unstable_isNewReconciler: te
      }, Ql = {
        readContext: function(e) {
          return Xg(), nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ze(), Yt(), $g(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ze(), Yt(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ze(), Yt(), gm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ze(), Yt(), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ze(), Yt(), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ze(), Yt(), Yg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ze(), Yt();
          var a = ve.current;
          ve.current = Ql;
          try {
            return Wg(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ze(), Yt();
          var i = ve.current;
          ve.current = Ql;
          try {
            return Ug(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ze(), Yt(), Vg(e);
        },
        useState: function(e) {
          V = "useState", Ze(), Yt();
          var t = ve.current;
          ve.current = Ql;
          try {
            return hm(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ze(), Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ze(), Yt(), Qg(e);
        },
        useTransition: function() {
          return V = "useTransition", Ze(), Yt(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ze(), Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ze(), Yt(), Fg(e, t, a);
        },
        useId: function() {
          return V = "useId", Ze(), Yt(), qg();
        },
        unstable_isNewReconciler: te
      }, ll = {
        readContext: function(e) {
          return Xg(), nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ze(), le(), Tm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ze(), le(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ze(), le(), zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ze(), le(), Cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ze(), le(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ze(), le(), Em(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ze(), le();
          var a = ve.current;
          ve.current = ll;
          try {
            return xm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ze(), le();
          var i = ve.current;
          ve.current = ll;
          try {
            return Ag(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ze(), le(), mm();
        },
        useState: function(e) {
          V = "useState", Ze(), le();
          var t = ve.current;
          ve.current = ll;
          try {
            return Hg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ze(), le(), Rm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ze(), le(), $C(e);
        },
        useTransition: function() {
          return V = "useTransition", Ze(), le(), GC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ze(), le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ze(), le(), vm(e, t);
        },
        useId: function() {
          return V = "useId", Ze(), le(), bm();
        },
        unstable_isNewReconciler: te
      }, _m = {
        readContext: function(e) {
          return Xg(), nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ze(), le(), Tm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ze(), le(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ze(), le(), zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ze(), le(), Cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ze(), le(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ze(), le(), Em(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ze(), le();
          var a = ve.current;
          ve.current = ll;
          try {
            return xm(e, t);
          } finally {
            ve.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ze(), le();
          var i = ve.current;
          ve.current = ll;
          try {
            return jg(e, t, a);
          } finally {
            ve.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ze(), le(), mm();
        },
        useState: function(e) {
          V = "useState", Ze(), le();
          var t = ve.current;
          ve.current = ll;
          try {
            return Pg(e);
          } finally {
            ve.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ze(), le(), Rm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ze(), le(), WC(e);
        },
        useTransition: function() {
          return V = "useTransition", Ze(), le(), qC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ze(), le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ze(), le(), vm(e, t);
        },
        useId: function() {
          return V = "useId", Ze(), le(), bm();
        },
        unstable_isNewReconciler: te
      };
    }
    var Po = B.unstable_now, i0 = 0, Dm = -1, Up = -1, km = -1, Kg = !1, Om = !1;
    function l0() {
      return Kg;
    }
    function a1() {
      Om = !0;
    }
    function i1() {
      Kg = !1, Om = !1;
    }
    function l1() {
      Kg = Om, Om = !1;
    }
    function u0() {
      return i0;
    }
    function o0() {
      i0 = Po();
    }
    function Jg(e) {
      Up = Po(), e.actualStartTime < 0 && (e.actualStartTime = Po());
    }
    function s0(e) {
      Up = -1;
    }
    function Lm(e, t) {
      if (Up >= 0) {
        var a = Po() - Up;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Up = -1;
      }
    }
    function Gl(e) {
      if (Dm >= 0) {
        var t = Po() - Dm;
        Dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case et:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Zg(e) {
      if (km >= 0) {
        var t = Po() - km;
        km = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case et:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ql() {
      Dm = Po();
    }
    function eS() {
      km = Po();
    }
    function tS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = st({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var nS = {}, rS, aS, iS, lS, uS, c0, Mm, oS, sS, cS, Ap;
    {
      rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), Ap = /* @__PURE__ */ new Set();
      var f0 = /* @__PURE__ */ new Set();
      Mm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          f0.has(a) || (f0.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, c0 = function(e, t) {
        if (t === void 0) {
          var a = wt(e) || "Component";
          uS.has(a) || (uS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(nS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(nS);
    }
    function fS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Zt) {
          gn(!0);
          try {
            s = a(i, u);
          } finally {
            gn(!1);
          }
        }
        c0(t, s);
      }
      var f = s == null ? u : st({}, u, s);
      if (e.memoizedState = f, e.lanes === $) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var dS = {
      isMounted: Hv,
      enqueueSetState: function(e, t, a) {
        var i = ho(e), u = Ca(), s = Io(i), f = Bu(u, s);
        f.payload = t, a != null && (Mm(a, "setState"), f.callback = a);
        var p = Ao(i, f, s);
        p !== null && (gr(p, i, s, u), um(p, i, s)), Ss(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ho(e), u = Ca(), s = Io(i), f = Bu(u, s);
        f.tag = DC, f.payload = t, a != null && (Mm(a, "replaceState"), f.callback = a);
        var p = Ao(i, f, s);
        p !== null && (gr(p, i, s, u), um(p, i, s)), Ss(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ho(e), i = Ca(), u = Io(a), s = Bu(i, u);
        s.tag = am, t != null && (Mm(t, "forceUpdate"), s.callback = t);
        var f = Ao(a, s, u);
        f !== null && (gr(f, a, u, i), um(f, a, u)), Hc(a, u);
      }
    };
    function d0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Zt) {
            gn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              gn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", wt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ee(a, i) || !Ee(u, s) : !0;
    }
    function u1(e, t, a) {
      var i = e.stateNode;
      {
        var u = wt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Zt) === Ne && (Ap.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Zt) === Ne && (Ap.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !sS.has(t) && (sS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !iS.has(t) && (iS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || pt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function p0(e, t) {
      t.updater = dS, e.stateNode = t, mu(t, e), t._reactInternalInstance = nS;
    }
    function v0(e, t, a) {
      var i = !1, u = ui, s = ui, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !cS.has(t)) {
          cS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === vi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        u = kf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Of(e, u) : ui;
      }
      var g = new t(a, s);
      if (e.mode & Zt) {
        gn(!0);
        try {
          g = new t(a, s);
        } finally {
          gn(!1);
        }
      }
      var w = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      p0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && w === null) {
          var x = wt(t) || "Component";
          aS.has(x) || (aS.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, A = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), M !== null || A !== null || F !== null) {
            var fe = wt(t) || "Component", Ae = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            lS.has(fe) || (lS.add(fe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, fe, Ae, M !== null ? `
  ` + M : "", A !== null ? `
  ` + A : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && rC(e, u, s), g;
    }
    function o1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ke(e) || "Component"), dS.enqueueReplaceState(t, t.state, null));
    }
    function h0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ke(e) || "Component";
          rS.has(s) || (rS.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        dS.enqueueReplaceState(t, t.state, null);
      }
    }
    function pS(e, t, a, i) {
      u1(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, Rg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = nr(s);
      else {
        var f = kf(e, t, !0);
        u.context = Of(e, f);
      }
      {
        if (u.state === a) {
          var p = wt(t) || "Component";
          oS.has(p) || (oS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Zt && al.recordLegacyContextWarning(e, u), al.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (fS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (o1(e, u), om(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Rt;
        y |= Qi, (e.mode & At) !== Ne && (y |= _l), e.flags |= y;
      }
    }
    function s1(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ui;
      if (typeof p == "object" && p !== null)
        v = nr(p);
      else {
        var y = kf(e, t, !0);
        v = Of(e, y);
      }
      var g = t.getDerivedStateFromProps, w = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !w && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && h0(e, u, a, v), OC();
      var x = e.memoizedState, M = u.state = x;
      if (om(e, a, u, i), M = e.memoizedState, s === a && x === M && !Yh() && !sm()) {
        if (typeof u.componentDidMount == "function") {
          var A = Rt;
          A |= Qi, (e.mode & At) !== Ne && (A |= _l), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (fS(e, t, g, a), M = e.memoizedState);
      var F = sm() || d0(e, t, s, a, x, M, v);
      if (F) {
        if (!w && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var fe = Rt;
          fe |= Qi, (e.mode & At) !== Ne && (fe |= _l), e.flags |= fe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ae = Rt;
          Ae |= Qi, (e.mode & At) !== Ne && (Ae |= _l), e.flags |= Ae;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, F;
    }
    function c1(e, t, a, i, u) {
      var s = t.stateNode;
      kC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ul(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, w = ui;
      if (typeof g == "object" && g !== null)
        w = nr(g);
      else {
        var x = kf(t, a, !0);
        w = Of(t, x);
      }
      var M = a.getDerivedStateFromProps, A = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== w) && h0(t, s, i, w), OC();
      var F = t.memoizedState, fe = s.state = F;
      if (om(t, i, s, u), fe = t.memoizedState, f === v && F === fe && !Yh() && !sm() && !we)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Wn), !1;
      typeof M == "function" && (fS(t, a, M, i), fe = t.memoizedState);
      var Ae = sm() || d0(t, a, p, i, F, fe, w) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      we;
      return Ae ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, fe, w), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, fe, w)), typeof s.componentDidUpdate == "function" && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Wn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Wn), t.memoizedProps = i, t.memoizedState = fe), s.props = i, s.state = fe, s.context = w, Ae;
    }
    function ac(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function vS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function f1(e, t) {
      return !0;
    }
    function hS(e, t) {
      try {
        var a = f1(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === re)
            return;
          console.error(i);
        }
        var p = u ? Ke(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === J)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ke(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var w = v + `
` + f + `

` + ("" + y);
        console.error(w);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var d1 = typeof WeakMap == "function" ? WeakMap : Map;
    function m0(e, t, a) {
      var i = Bu(nn, a);
      i.tag = Eg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        a_(u), hS(e, t);
      }, i;
    }
    function mS(e, t, a) {
      var i = Bu(nn, a);
      i.tag = Eg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          _R(e), hS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        _R(e), hS(e, t), typeof u != "function" && n_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ea(e.lanes, $e) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ke(e) || "Unknown"));
      }), i;
    }
    function y0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new d1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = i_.bind(null, e, t, a);
        Jr && Zp(e, a), t.then(s, s);
      }
    }
    function p1(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function v1(e, t) {
      var a = e.tag;
      if ((e.mode & yt) === Ne && (a === ie || a === He || a === je)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function g0(e) {
      var t = e;
      do {
        if (t.tag === be && Gb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function S0(e, t, a, i, u) {
      if ((e.mode & yt) === Ne) {
        if (e === t)
          e.flags |= Jn;
        else {
          if (e.flags |= ke, a.flags |= Lc, a.flags &= -52805, a.tag === re) {
            var s = a.alternate;
            if (s === null)
              a.tag = Dt;
            else {
              var f = Bu(nn, $e);
              f.tag = am, Ao(a, f, $e);
            }
          }
          a.lanes = lt(a.lanes, $e);
        }
        return e;
      }
      return e.flags |= Jn, e.lanes = u, e;
    }
    function h1(e, t, a, i, u) {
      if (a.flags |= ps, Jr && Zp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        v1(a), jr() && a.mode & yt && cC();
        var f = g0(t);
        if (f !== null) {
          f.flags &= ~Rr, S0(f, t, a, e, u), f.mode & yt && y0(e, s, u), p1(f, e, s);
          return;
        } else {
          if (!Qv(u)) {
            y0(e, s, u), qS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & yt) {
        cC();
        var v = g0(t);
        if (v !== null) {
          (v.flags & Jn) === Me && (v.flags |= Rr), S0(v, t, a, e, u), og(ac(i, a));
          return;
        }
      }
      i = ac(i, a), Gw(i);
      var y = t;
      do {
        switch (y.tag) {
          case J: {
            var g = i;
            y.flags |= Jn;
            var w = Ds(u);
            y.lanes = lt(y.lanes, w);
            var x = m0(y, g, w);
            Tg(y, x);
            return;
          }
          case re:
            var M = i, A = y.type, F = y.stateNode;
            if ((y.flags & ke) === Me && (typeof A.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !gR(F))) {
              y.flags |= Jn;
              var fe = Ds(u);
              y.lanes = lt(y.lanes, fe);
              var Ae = mS(y, M, fe);
              Tg(y, Ae);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function m1() {
      return null;
    }
    var jp = N.ReactCurrentOwner, ol = !1, yS, Fp, gS, SS, ES, ic, CS, Nm, Hp;
    yS = {}, Fp = {}, gS = {}, SS = {}, ES = {}, ic = !1, CS = {}, Nm = {}, Hp = {};
    function Sa(e, t, a, i) {
      e === null ? t.child = RC(t, null, a, i) : t.child = zf(t, e.child, a, i);
    }
    function y1(e, t, a, i) {
      t.child = zf(t, e.child, null, i), t.child = zf(t, null, a, i);
    }
    function E0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Af(t, u), ha(t);
      {
        if (jp.current = t, $n(!0), v = Bf(e, t, f, i, p, u), y = Yf(), t.mode & Zt) {
          gn(!0);
          try {
            v = Bf(e, t, f, i, p, u), y = Yf();
          } finally {
            gn(!1);
          }
        }
        $n(!1);
      }
      return ma(), e !== null && !ol ? (AC(e, t, u), Yu(e, t, u)) : (jr() && y && ng(t), t.flags |= ni, Sa(e, t, v, u), t.child);
    }
    function C0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (R_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Kf(s), t.tag = je, t.type = f, xS(t, s), R0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && nl(
            p,
            i,
            // Resolved props
            "prop",
            wt(s)
          ), a.defaultProps !== void 0) {
            var v = wt(s) || "Unknown";
            Hp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Hp[v] = !0);
          }
        }
        var y = lE(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, w = g.propTypes;
        w && nl(
          w,
          i,
          // Resolved props
          "prop",
          wt(g)
        );
      }
      var x = e.child, M = OS(e, u);
      if (!M) {
        var A = x.memoizedProps, F = a.compare;
        if (F = F !== null ? F : Ee, F(A, i) && e.ref === t.ref)
          return Yu(e, t, u);
      }
      t.flags |= ni;
      var fe = cc(x, i);
      return fe.ref = t.ref, fe.return = t, t.child = fe, fe;
    }
    function R0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Je) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && nl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            wt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Ee(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = g, OS(e, u))
            (e.flags & Lc) !== Me && (ol = !0);
          else return t.lanes = e.lanes, Yu(e, t, u);
      }
      return RS(e, t, a, i, u);
    }
    function T0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ue)
        if ((t.mode & yt) === Ne) {
          var f = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Wm(t, a);
        } else if (ea(a, Zr)) {
          var w = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = w;
          var x = s !== null ? s.baseLanes : a;
          Wm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = lt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Zr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Wm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = lt(s.baseLanes, a), t.memoizedState = null) : M = a, Wm(t, M);
      }
      return Sa(e, t, u, a), t.child;
    }
    function g1(e, t, a) {
      var i = t.pendingProps;
      return Sa(e, t, i, a), t.child;
    }
    function S1(e, t, a) {
      var i = t.pendingProps.children;
      return Sa(e, t, i, a), t.child;
    }
    function E1(e, t, a) {
      {
        t.flags |= Rt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Sa(e, t, s, a), t.child;
    }
    function x0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Cn, t.flags |= yo);
    }
    function RS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          wt(a)
        );
      }
      var f;
      {
        var p = kf(t, a, !0);
        f = Of(t, p);
      }
      var v, y;
      Af(t, u), ha(t);
      {
        if (jp.current = t, $n(!0), v = Bf(e, t, a, i, f, u), y = Yf(), t.mode & Zt) {
          gn(!0);
          try {
            v = Bf(e, t, a, i, f, u), y = Yf();
          } finally {
            gn(!1);
          }
        }
        $n(!1);
      }
      return ma(), e !== null && !ol ? (AC(e, t, u), Yu(e, t, u)) : (jr() && y && ng(t), t.flags |= ni, Sa(e, t, v, u), t.child);
    }
    function b0(e, t, a, i, u) {
      {
        switch (j_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= ke, t.flags |= Jn;
            var y = new Error("Simulated error coming from DevTools"), g = Ds(u);
            t.lanes = lt(t.lanes, g);
            var w = mS(t, ac(y, t), g);
            Tg(t, w);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && nl(
            x,
            i,
            // Resolved props
            "prop",
            wt(a)
          );
        }
      }
      var M;
      Il(a) ? (M = !0, $h(t)) : M = !1, Af(t, u);
      var A = t.stateNode, F;
      A === null ? (Um(e, t), v0(t, a, i), pS(t, a, i, u), F = !0) : e === null ? F = s1(t, a, i, u) : F = c1(e, t, a, i, u);
      var fe = TS(e, t, a, F, M, u);
      {
        var Ae = t.stateNode;
        F && Ae.props !== i && (ic || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ke(t) || "a component"), ic = !0);
      }
      return fe;
    }
    function TS(e, t, a, i, u, s) {
      x0(e, t);
      var f = (t.flags & ke) !== Me;
      if (!i && !f)
        return u && lC(t, a, !1), Yu(e, t, s);
      var p = t.stateNode;
      jp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, s0();
      else {
        ha(t);
        {
          if ($n(!0), v = p.render(), t.mode & Zt) {
            gn(!0);
            try {
              p.render();
            } finally {
              gn(!1);
            }
          }
          $n(!1);
        }
        ma();
      }
      return t.flags |= ni, e !== null && f ? y1(e, t, v, s) : Sa(e, t, v, s), t.memoizedState = p.state, u && lC(t, a, !0), t.child;
    }
    function w0(e) {
      var t = e.stateNode;
      t.pendingContext ? aC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && aC(e, t.context, !1), xg(e, t.containerInfo);
    }
    function C1(e, t, a) {
      if (w0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      kC(e, t), om(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Rr) {
          var g = ac(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return _0(e, t, p, a, g);
        } else if (p !== s) {
          var w = ac(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return _0(e, t, p, a, w);
        } else {
          xb(t);
          var x = RC(t, null, p, a);
          t.child = x;
          for (var M = x; M; )
            M.flags = M.flags & ~yn | qr, M = M.sibling;
        }
      } else {
        if (Nf(), p === s)
          return Yu(e, t, a);
        Sa(e, t, p, a);
      }
      return t.child;
    }
    function _0(e, t, a, i, u) {
      return Nf(), og(u), t.flags |= Rr, Sa(e, t, a, i), t.child;
    }
    function R1(e, t, a) {
      NC(t), e === null && ug(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = By(i, u);
      return p ? f = null : s !== null && By(i, s) && (t.flags |= Oa), x0(e, t), Sa(e, t, f, a), t.child;
    }
    function T1(e, t) {
      return e === null && ug(t), null;
    }
    function x1(e, t, a, i) {
      Um(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = T_(v), g = ul(v, u), w;
      switch (y) {
        case ie:
          return xS(t, v), t.type = v = Kf(v), w = RS(null, t, v, g, i), w;
        case re:
          return t.type = v = eE(v), w = b0(null, t, v, g, i), w;
        case He:
          return t.type = v = tE(v), w = E0(null, t, v, g, i), w;
        case ut: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && nl(
              x,
              g,
              // Resolved for outer only
              "prop",
              wt(v)
            );
          }
          return w = C0(
            null,
            t,
            v,
            ul(v.type, g),
            // The inner type can have defaults too
            i
          ), w;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Je && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function b1(e, t, a, i, u) {
      Um(e, t), t.tag = re;
      var s;
      return Il(a) ? (s = !0, $h(t)) : s = !1, Af(t, u), v0(t, a, i), pS(t, a, i, u), TS(null, t, a, !0, s, u);
    }
    function w1(e, t, a, i) {
      Um(e, t);
      var u = t.pendingProps, s;
      {
        var f = kf(t, a, !1);
        s = Of(t, f);
      }
      Af(t, i);
      var p, v;
      ha(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = wt(a) || "Unknown";
          yS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), yS[y] = !0);
        }
        t.mode & Zt && al.recordLegacyContextWarning(t, null), $n(!0), jp.current = t, p = Bf(null, t, a, u, s, i), v = Yf(), $n(!1);
      }
      if (ma(), t.flags |= ni, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = wt(a) || "Unknown";
        Fp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Fp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var w = wt(a) || "Unknown";
          Fp[w] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), Fp[w] = !0);
        }
        t.tag = re, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return Il(a) ? (x = !0, $h(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Rg(t), p0(t, p), pS(t, a, u, i), TS(null, t, a, !0, x, i);
      } else {
        if (t.tag = ie, t.mode & Zt) {
          gn(!0);
          try {
            p = Bf(null, t, a, u, s, i), v = Yf();
          } finally {
            gn(!1);
          }
        }
        return jr() && v && ng(t), Sa(null, t, p, i), xS(t, a), t.child;
      }
    }
    function xS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), ES[u] || (ES[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = wt(t) || "Unknown";
          Hp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Hp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = wt(t) || "Unknown";
          SS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), SS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = wt(t) || "Unknown";
          gS[v] || (S("%s: Function components do not support contextType.", v), gS[v] = !0);
        }
      }
    }
    var bS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Lt
    };
    function wS(e) {
      return {
        baseLanes: e,
        cachePool: m1(),
        transitions: null
      };
    }
    function _1(e, t) {
      var a = null;
      return {
        baseLanes: lt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function D1(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return _g(e, Dp);
    }
    function k1(e, t) {
      return ks(e.childLanes, t);
    }
    function D0(e, t, a) {
      var i = t.pendingProps;
      F_(t) && (t.flags |= ke);
      var u = il.current, s = !1, f = (t.flags & ke) !== Me;
      if (f || D1(u, e) ? (s = !0, t.flags &= ~ke) : (e === null || e.memoizedState !== null) && (u = Qb(u, UC)), u = Ff(u), Fo(t, u), e === null) {
        ug(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return z1(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var w = O1(t, y, g, a), x = t.child;
          return x.memoizedState = wS(a), t.memoizedState = bS, w;
        } else
          return _S(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var A = M.dehydrated;
          if (A !== null)
            return U1(e, t, f, i, A, M, a);
        }
        if (s) {
          var F = i.fallback, fe = i.children, Ae = M1(e, t, fe, F, a), De = t.child, bt = e.child.memoizedState;
          return De.memoizedState = bt === null ? wS(a) : _1(bt, a), De.childLanes = k1(e, a), t.memoizedState = bS, Ae;
        } else {
          var Et = i.children, k = L1(e, t, Et, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = DS(u, i);
      return s.return = e, e.child = s, s;
    }
    function O1(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & yt) === Ne && s !== null ? (p = s, p.childLanes = $, p.pendingProps = f, e.mode & Ut && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Wo(a, u, i, null)) : (p = DS(f, u), v = Wo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function DS(e, t, a) {
      return kR(e, t, $, null);
    }
    function k0(e, t) {
      return cc(e, t);
    }
    function L1(e, t, a, i) {
      var u = e.child, s = u.sibling, f = k0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & yt) === Ne && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ka) : p.push(s);
      }
      return t.child = f, f;
    }
    function M1(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & yt) === Ne && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = $, y.pendingProps = v, t.mode & Ut && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = k0(f, v), y.subtreeFlags = f.subtreeFlags & Un;
      var w;
      return p !== null ? w = cc(p, i) : (w = Wo(i, s, u, null), w.flags |= yn), w.return = t, y.return = t, y.sibling = w, t.child = y, w;
    }
    function zm(e, t, a, i) {
      i !== null && og(i), zf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = _S(t, s);
      return f.flags |= yn, t.memoizedState = null, f;
    }
    function N1(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = DS(f, s), v = Wo(i, s, u, null);
      return v.flags |= yn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & yt) !== Ne && zf(t, e.child, null, u), v;
    }
    function z1(e, t, a) {
      return (e.mode & yt) === Ne ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = $e) : Wy(t) ? e.lanes = Tr : e.lanes = Zr, null;
    }
    function U1(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rr) {
          t.flags &= ~Rr;
          var k = vS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return zm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ke, null;
          var H = i.children, O = i.fallback, K = N1(e, t, H, O, f), he = t.child;
          return he.memoizedState = wS(f), t.memoizedState = bS, K;
        }
      else {
        if (Rb(), (t.mode & yt) === Ne)
          return zm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Wy(u)) {
          var p, v, y;
          {
            var g = Hx(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var w;
          v ? w = new Error(v) : w = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = vS(w, p, y);
          return zm(e, t, f, x);
        }
        var M = ea(f, e.childLanes);
        if (ol || M) {
          var A = $m();
          if (A !== null) {
            var F = Bd(A, f);
            if (F !== Lt && F !== s.retryLane) {
              s.retryLane = F;
              var fe = nn;
              Ha(e, F), gr(A, e, F, fe);
            }
          }
          qS();
          var Ae = vS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return zm(e, t, f, Ae);
        } else if (JE(u)) {
          t.flags |= ke, t.child = e.child;
          var De = l_.bind(null, e);
          return Px(u, De), null;
        } else {
          bb(t, u, s.treeContext);
          var bt = i.children, Et = _S(t, bt);
          return Et.flags |= qr, Et;
        }
      }
    }
    function O0(e, t, a) {
      e.lanes = lt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = lt(i.lanes, t)), gg(e.return, t, a);
    }
    function A1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === be) {
          var u = i.memoizedState;
          u !== null && O0(i, a, e);
        } else if (i.tag === Qt)
          O0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function j1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && dm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function F1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !CS[e])
        if (CS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function H1(e, t) {
      e !== void 0 && !Nm[e] && (e !== "collapsed" && e !== "hidden" ? (Nm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Nm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function L0(e, t) {
      {
        var a = pt(e), i = !a && typeof at(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function P1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (pt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!L0(e[a], a))
              return;
        } else {
          var i = at(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!L0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function kS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function M0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      F1(u), H1(s, u), P1(f, u), Sa(e, t, f, a);
      var p = il.current, v = _g(p, Dp);
      if (v)
        p = Dg(p, Dp), t.flags |= ke;
      else {
        var y = e !== null && (e.flags & ke) !== Me;
        y && A1(t, t.child, a), p = Ff(p);
      }
      if (Fo(t, p), (t.mode & yt) === Ne)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = j1(t.child), w;
            g === null ? (w = t.child, t.child = null) : (w = g.sibling, g.sibling = null), kS(
              t,
              !1,
              // isBackwards
              w,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var A = M.alternate;
              if (A !== null && dm(A) === null) {
                t.child = M;
                break;
              }
              var F = M.sibling;
              M.sibling = x, x = M, M = F;
            }
            kS(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            kS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function V1(e, t, a) {
      xg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = zf(t, null, i, a) : Sa(e, t, i, a), t.child;
    }
    var N0 = !1;
    function B1(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || N0 || (N0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && nl(v, s, "prop", "Context.Provider");
      }
      if (bC(t, u, p), f !== null) {
        var y = f.value;
        if (G(y, p)) {
          if (f.children === s.children && !Yh())
            return Yu(e, t, a);
        } else
          Fb(t, u, a);
      }
      var g = s.children;
      return Sa(e, t, g, a), t.child;
    }
    var z0 = !1;
    function Y1(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (z0 || (z0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Af(t, a);
      var f = nr(i);
      ha(t);
      var p;
      return jp.current = t, $n(!0), p = s(f), $n(!1), ma(), t.flags |= ni, Sa(e, t, p, a), t.child;
    }
    function Pp() {
      ol = !0;
    }
    function Um(e, t) {
      (t.mode & yt) === Ne && e !== null && (e.alternate = null, t.alternate = null, t.flags |= yn);
    }
    function Yu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), s0(), Jp(t.lanes), ea(a, t.childLanes) ? (Ab(e, t), t.child) : null;
    }
    function I1(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ka) : s.push(e), a.flags |= yn, a;
      }
    }
    function OS(e, t) {
      var a = e.lanes;
      return !!ea(a, t);
    }
    function $1(e, t, a) {
      switch (t.tag) {
        case J:
          w0(t), t.stateNode, Nf();
          break;
        case Z:
          NC(t);
          break;
        case re: {
          var i = t.type;
          Il(i) && $h(t);
          break;
        }
        case ne:
          xg(t, t.stateNode.containerInfo);
          break;
        case Le: {
          var u = t.memoizedProps.value, s = t.type._context;
          bC(t, s, u);
          break;
        }
        case et:
          {
            var f = ea(a, t.childLanes);
            f && (t.flags |= Rt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case be: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Fo(t, Ff(il.current)), t.flags |= ke, null;
            var y = t.child, g = y.childLanes;
            if (ea(a, g))
              return D0(e, t, a);
            Fo(t, Ff(il.current));
            var w = Yu(e, t, a);
            return w !== null ? w.sibling : null;
          } else
            Fo(t, Ff(il.current));
          break;
        }
        case Qt: {
          var x = (e.flags & ke) !== Me, M = ea(a, t.childLanes);
          if (x) {
            if (M)
              return M0(e, t, a);
            t.flags |= ke;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Fo(t, il.current), M)
            break;
          return null;
        }
        case ze:
        case Pt:
          return t.lanes = $, T0(e, t, a);
      }
      return Yu(e, t, a);
    }
    function U0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return I1(e, t, lE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Yh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ol = !0;
        else {
          var s = OS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ke) === Me)
            return ol = !1, $1(e, t, a);
          (e.flags & Lc) !== Me ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, jr() && mb(t)) {
        var f = t.index, p = yb();
        sC(t, p, f);
      }
      switch (t.lanes = $, t.tag) {
        case Ye:
          return w1(e, t, t.type, a);
        case Re: {
          var v = t.elementType;
          return x1(e, t, v, a);
        }
        case ie: {
          var y = t.type, g = t.pendingProps, w = t.elementType === y ? g : ul(y, g);
          return RS(e, t, y, w, a);
        }
        case re: {
          var x = t.type, M = t.pendingProps, A = t.elementType === x ? M : ul(x, M);
          return b0(e, t, x, A, a);
        }
        case J:
          return C1(e, t, a);
        case Z:
          return R1(e, t, a);
        case Oe:
          return T1(e, t);
        case be:
          return D0(e, t, a);
        case ne:
          return V1(e, t, a);
        case He: {
          var F = t.type, fe = t.pendingProps, Ae = t.elementType === F ? fe : ul(F, fe);
          return E0(e, t, F, Ae, a);
        }
        case nt:
          return g1(e, t, a);
        case ge:
          return S1(e, t, a);
        case et:
          return E1(e, t, a);
        case Le:
          return B1(e, t, a);
        case Mt:
          return Y1(e, t, a);
        case ut: {
          var De = t.type, bt = t.pendingProps, Et = ul(De, bt);
          if (t.type !== t.elementType) {
            var k = De.propTypes;
            k && nl(
              k,
              Et,
              // Resolved for outer only
              "prop",
              wt(De)
            );
          }
          return Et = ul(De.type, Et), C0(e, t, De, Et, a);
        }
        case je:
          return R0(e, t, t.type, t.pendingProps, a);
        case Dt: {
          var H = t.type, O = t.pendingProps, K = t.elementType === H ? O : ul(H, O);
          return b1(e, t, H, K, a);
        }
        case Qt:
          return M0(e, t, a);
        case kt:
          break;
        case ze:
          return T0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function If(e) {
      e.flags |= Rt;
    }
    function A0(e) {
      e.flags |= Cn, e.flags |= yo;
    }
    var j0, LS, F0, H0;
    j0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Z || u.tag === Oe)
          px(e, u.stateNode);
        else if (u.tag !== ne) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, LS = function(e, t) {
    }, F0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = bg(), v = hx(f, a, s, i, u, p);
        t.updateQueue = v, v && If(t);
      }
    }, H0 = function(e, t, a, i) {
      a !== i && If(t);
    };
    function Vp(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = $, i = Me;
      if (t) {
        if ((e.mode & Ut) !== Ne) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = lt(a, lt(y.lanes, y.childLanes)), i |= y.subtreeFlags & Un, i |= y.flags & Un, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = lt(a, lt(g.lanes, g.childLanes)), i |= g.subtreeFlags & Un, i |= g.flags & Un, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ut) !== Ne) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = lt(a, lt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = lt(a, lt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function W1(e, t, a) {
      if (Ob() && (t.mode & yt) !== Ne && (t.flags & ke) === Me)
        return mC(t), Nf(), t.flags |= Rr | ps | Jn, !1;
      var i = Xh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Db(t), Hr(t), (t.mode & Ut) !== Ne) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Nf(), (t.flags & ke) === Me && (t.memoizedState = null), t.flags |= Rt, Hr(t), (t.mode & Ut) !== Ne) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return yC(), !0;
    }
    function P0(e, t, a) {
      var i = t.pendingProps;
      switch (rg(t), t.tag) {
        case Ye:
        case Re:
        case je:
        case ie:
        case He:
        case nt:
        case ge:
        case et:
        case Mt:
        case ut:
          return Hr(t), null;
        case re: {
          var u = t.type;
          return Il(u) && Ih(t), Hr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (jf(t), Zy(t), Og(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Xh(t);
            if (f)
              If(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rr) !== Me) && (t.flags |= Wn, yC());
            }
          }
          return LS(e, t), Hr(t), null;
        }
        case Z: {
          wg(t);
          var v = MC(), y = t.type;
          if (e !== null && t.stateNode != null)
            F0(e, t, y, i, v), e.ref !== t.ref && A0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var g = bg(), w = Xh(t);
            if (w)
              wb(t, v, g) && If(t);
            else {
              var x = dx(y, i, v, g, t);
              j0(x, t, !1, !1), t.stateNode = x, vx(x, y, i, v) && If(t);
            }
            t.ref !== null && A0(t);
          }
          return Hr(t), null;
        }
        case Oe: {
          var M = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            H0(e, t, A, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = MC(), fe = bg(), Ae = Xh(t);
            Ae ? _b(t) && If(t) : t.stateNode = mx(M, F, fe, t);
          }
          return Hr(t), null;
        }
        case be: {
          Hf(t);
          var De = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var bt = W1(e, t, De);
            if (!bt)
              return t.flags & Jn ? t : null;
          }
          if ((t.flags & ke) !== Me)
            return t.lanes = a, (t.mode & Ut) !== Ne && tS(t), t;
          var Et = De !== null, k = e !== null && e.memoizedState !== null;
          if (Et !== k && Et) {
            var H = t.child;
            if (H.flags |= zn, (t.mode & yt) !== Ne) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || _g(il.current, UC) ? Qw() : qS();
            }
          }
          var K = t.updateQueue;
          if (K !== null && (t.flags |= Rt), Hr(t), (t.mode & Ut) !== Ne && Et) {
            var he = t.child;
            he !== null && (t.treeBaseDuration -= he.treeBaseDuration);
          }
          return null;
        }
        case ne:
          return jf(t), LS(e, t), e === null && sb(t.stateNode.containerInfo), Hr(t), null;
        case Le:
          var de = t.type._context;
          return yg(de, t), Hr(t), null;
        case Dt: {
          var Ge = t.type;
          return Il(Ge) && Ih(t), Hr(t), null;
        }
        case Qt: {
          Hf(t);
          var tt = t.memoizedState;
          if (tt === null)
            return Hr(t), null;
          var tn = (t.flags & ke) !== Me, Ft = tt.rendering;
          if (Ft === null)
            if (tn)
              Vp(tt, !1);
            else {
              var qn = qw() && (e === null || (e.flags & ke) === Me);
              if (!qn)
                for (var Ht = t.child; Ht !== null; ) {
                  var Vn = dm(Ht);
                  if (Vn !== null) {
                    tn = !0, t.flags |= ke, Vp(tt, !1);
                    var ua = Vn.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= Rt), t.subtreeFlags = Me, jb(t, a), Fo(t, Dg(il.current, Dp)), t.child;
                  }
                  Ht = Ht.sibling;
                }
              tt.tail !== null && Qn() > uR() && (t.flags |= ke, tn = !0, Vp(tt, !1), t.lanes = Nd);
            }
          else {
            if (!tn) {
              var Ir = dm(Ft);
              if (Ir !== null) {
                t.flags |= ke, tn = !0;
                var si = Ir.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= Rt), Vp(tt, !0), tt.tail === null && tt.tailMode === "hidden" && !Ft.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Qn() * 2 - tt.renderingStartTime > uR() && a !== Zr && (t.flags |= ke, tn = !0, Vp(tt, !1), t.lanes = Nd);
            }
            if (tt.isBackwards)
              Ft.sibling = t.child, t.child = Ft;
            else {
              var Ra = tt.last;
              Ra !== null ? Ra.sibling = Ft : t.child = Ft, tt.last = Ft;
            }
          }
          if (tt.tail !== null) {
            var Ta = tt.tail;
            tt.rendering = Ta, tt.tail = Ta.sibling, tt.renderingStartTime = Qn(), Ta.sibling = null;
            var oa = il.current;
            return tn ? oa = Dg(oa, Dp) : oa = Ff(oa), Fo(t, oa), Ta;
          }
          return Hr(t), null;
        }
        case kt:
          break;
        case ze:
        case Pt: {
          GS(t);
          var Gu = t.memoizedState, Jf = Gu !== null;
          if (e !== null) {
            var rv = e.memoizedState, Jl = rv !== null;
            Jl !== Jf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ue && (t.flags |= zn);
          }
          return !Jf || (t.mode & yt) === Ne ? Hr(t) : ea(Kl, Zr) && (Hr(t), t.subtreeFlags & (yn | Rt) && (t.flags |= zn)), null;
        }
        case Ot:
          return null;
        case Nt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Q1(e, t, a) {
      switch (rg(t), t.tag) {
        case re: {
          var i = t.type;
          Il(i) && Ih(t);
          var u = t.flags;
          return u & Jn ? (t.flags = u & ~Jn | ke, (t.mode & Ut) !== Ne && tS(t), t) : null;
        }
        case J: {
          t.stateNode, jf(t), Zy(t), Og();
          var s = t.flags;
          return (s & Jn) !== Me && (s & ke) === Me ? (t.flags = s & ~Jn | ke, t) : null;
        }
        case Z:
          return wg(t), null;
        case be: {
          Hf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Nf();
          }
          var p = t.flags;
          return p & Jn ? (t.flags = p & ~Jn | ke, (t.mode & Ut) !== Ne && tS(t), t) : null;
        }
        case Qt:
          return Hf(t), null;
        case ne:
          return jf(t), null;
        case Le:
          var v = t.type._context;
          return yg(v, t), null;
        case ze:
        case Pt:
          return GS(t), null;
        case Ot:
          return null;
        default:
          return null;
      }
    }
    function V0(e, t, a) {
      switch (rg(t), t.tag) {
        case re: {
          var i = t.type.childContextTypes;
          i != null && Ih(t);
          break;
        }
        case J: {
          t.stateNode, jf(t), Zy(t), Og();
          break;
        }
        case Z: {
          wg(t);
          break;
        }
        case ne:
          jf(t);
          break;
        case be:
          Hf(t);
          break;
        case Qt:
          Hf(t);
          break;
        case Le:
          var u = t.type._context;
          yg(u, t);
          break;
        case ze:
        case Pt:
          GS(t);
          break;
      }
    }
    var B0 = null;
    B0 = /* @__PURE__ */ new Set();
    var Am = !1, Pr = !1, G1 = typeof WeakSet == "function" ? WeakSet : Set, Ce = null, $f = null, Wf = null;
    function q1(e) {
      wl(null, function() {
        throw e;
      }), ds();
    }
    var X1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ut)
        try {
          ql(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function Y0(e, t) {
      try {
        Vo(dr, e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function MS(e, t, a) {
      try {
        X1(e, a);
      } catch (i) {
        dn(e, t, i);
      }
    }
    function K1(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        dn(e, t, i);
      }
    }
    function I0(e, t) {
      try {
        W0(e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function Qf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ie && vt && e.mode & Ut)
              try {
                ql(), i = a(null);
              } finally {
                Gl(e);
              }
            else
              i = a(null);
          } catch (u) {
            dn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          a.current = null;
    }
    function jm(e, t, a) {
      try {
        a();
      } catch (i) {
        dn(e, t, i);
      }
    }
    var $0 = !1;
    function J1(e, t) {
      cx(e.containerInfo), Ce = t, Z1();
      var a = $0;
      return $0 = !1, a;
    }
    function Z1() {
      for (; Ce !== null; ) {
        var e = Ce, t = e.child;
        (e.subtreeFlags & Dl) !== Me && t !== null ? (t.return = e, Ce = t) : ew();
      }
    }
    function ew() {
      for (; Ce !== null; ) {
        var e = Ce;
        Xt(e);
        try {
          tw(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        fn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ce = t;
          return;
        }
        Ce = e.return;
      }
    }
    function tw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Wn) !== Me) {
        switch (Xt(e), e.tag) {
          case ie:
          case He:
          case je:
            break;
          case re: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ic && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), u);
              {
                var p = B0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ke(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              Ux(v.containerInfo);
            }
            break;
          }
          case Z:
          case Oe:
          case ne:
          case Dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        fn();
      }
    }
    function sl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Pa ? Xi(t) : (e & dr) !== Pa && hs(t), (e & $l) !== Pa && ev(!0), jm(t, a, p), (e & $l) !== Pa && ev(!1), (e & Fr) !== Pa ? Ml() : (e & dr) !== Pa && Ld());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Vo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== Pa ? Od(t) : (e & dr) !== Pa && jc(t);
            var f = s.create;
            (e & $l) !== Pa && ev(!0), s.destroy = f(), (e & $l) !== Pa && ev(!1), (e & Fr) !== Pa ? Bv() : (e & dr) !== Pa && Yv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & dr) !== Me ? v = "useLayoutEffect" : (s.tag & $l) !== Me ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function nw(e, t) {
      if ((t.flags & Rt) !== Me)
        switch (t.tag) {
          case et: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = u0(), p = t.alternate === null ? "mount" : "update";
            l0() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case J:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case et:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function rw(e, t, a, i) {
      if ((a.flags & Ol) !== Me)
        switch (a.tag) {
          case ie:
          case He:
          case je: {
            if (!Pr)
              if (a.mode & Ut)
                try {
                  ql(), Vo(dr | fr, a);
                } finally {
                  Gl(a);
                }
              else
                Vo(dr | fr, a);
            break;
          }
          case re: {
            var u = a.stateNode;
            if (a.flags & Rt && !Pr)
              if (t === null)
                if (a.type === a.elementType && !ic && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Ut)
                  try {
                    ql(), u.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ic && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Ut)
                  try {
                    ql(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ic && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), LC(a, p, u));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Z:
                    y = a.child.stateNode;
                    break;
                  case re:
                    y = a.child.stateNode;
                    break;
                }
              LC(a, v, y);
            }
            break;
          }
          case Z: {
            var g = a.stateNode;
            if (t === null && a.flags & Rt) {
              var w = a.type, x = a.memoizedProps;
              Cx(g, w, x);
            }
            break;
          }
          case Oe:
            break;
          case ne:
            break;
          case et: {
            {
              var M = a.memoizedProps, A = M.onCommit, F = M.onRender, fe = a.stateNode.effectDuration, Ae = u0(), De = t === null ? "mount" : "update";
              l0() && (De = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, De, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ae);
              {
                typeof A == "function" && A(a.memoizedProps.id, De, fe, Ae), e_(a);
                var bt = a.return;
                e: for (; bt !== null; ) {
                  switch (bt.tag) {
                    case J:
                      var Et = bt.stateNode;
                      Et.effectDuration += fe;
                      break e;
                    case et:
                      var k = bt.stateNode;
                      k.effectDuration += fe;
                      break e;
                  }
                  bt = bt.return;
                }
              }
            }
            break;
          }
          case be: {
            fw(e, a);
            break;
          }
          case Qt:
          case Dt:
          case kt:
          case ze:
          case Pt:
          case Nt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & Cn && W0(a);
    }
    function aw(e) {
      switch (e.tag) {
        case ie:
        case He:
        case je: {
          if (e.mode & Ut)
            try {
              ql(), Y0(e, e.return);
            } finally {
              Gl(e);
            }
          else
            Y0(e, e.return);
          break;
        }
        case re: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && K1(e, e.return, t), I0(e, e.return);
          break;
        }
        case Z: {
          I0(e, e.return);
          break;
        }
      }
    }
    function iw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Z) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Lx(u) : Nx(i.stateNode, i.memoizedProps);
            } catch (f) {
              dn(e, e.return, f);
            }
          }
        } else if (i.tag === Oe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Mx(s) : zx(s, i.memoizedProps);
            } catch (f) {
              dn(e, e.return, f);
            }
        } else if (!((i.tag === ze || i.tag === Pt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function W0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Z:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ut)
            try {
              ql(), u = t(i);
            } finally {
              Gl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ke(e)), t.current = i;
      }
    }
    function lw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Q0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Q0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Z) {
          var a = e.stateNode;
          a !== null && db(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function uw(e) {
      for (var t = e.return; t !== null; ) {
        if (G0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function G0(e) {
      return e.tag === Z || e.tag === J || e.tag === ne;
    }
    function q0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || G0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== Z && t.tag !== Oe && t.tag !== $t; ) {
          if (t.flags & yn || t.child === null || t.tag === ne)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & yn))
          return t.stateNode;
      }
    }
    function ow(e) {
      var t = uw(e);
      switch (t.tag) {
        case Z: {
          var a = t.stateNode;
          t.flags & Oa && (KE(a), t.flags &= ~Oa);
          var i = q0(e);
          zS(e, i, a);
          break;
        }
        case J:
        case ne: {
          var u = t.stateNode.containerInfo, s = q0(e);
          NS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function NS(e, t, a) {
      var i = e.tag, u = i === Z || i === Oe;
      if (u) {
        var s = e.stateNode;
        t ? _x(a, s, t) : bx(a, s);
      } else if (i !== ne) {
        var f = e.child;
        if (f !== null) {
          NS(f, t, a);
          for (var p = f.sibling; p !== null; )
            NS(p, t, a), p = p.sibling;
        }
      }
    }
    function zS(e, t, a) {
      var i = e.tag, u = i === Z || i === Oe;
      if (u) {
        var s = e.stateNode;
        t ? wx(a, s, t) : xx(a, s);
      } else if (i !== ne) {
        var f = e.child;
        if (f !== null) {
          zS(f, t, a);
          for (var p = f.sibling; p !== null; )
            zS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, cl = !1;
    function sw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case Z: {
              Vr = i.stateNode, cl = !1;
              break e;
            }
            case J: {
              Vr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
            case ne: {
              Vr = i.stateNode.containerInfo, cl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        X0(e, t, a), Vr = null, cl = !1;
      }
      lw(a);
    }
    function Bo(e, t, a) {
      for (var i = a.child; i !== null; )
        X0(e, t, i), i = i.sibling;
    }
    function X0(e, t, a) {
      switch (_d(a), a.tag) {
        case Z:
          Pr || Qf(a, t);
        case Oe: {
          {
            var i = Vr, u = cl;
            Vr = null, Bo(e, t, a), Vr = i, cl = u, Vr !== null && (cl ? kx(Vr, a.stateNode) : Dx(Vr, a.stateNode));
          }
          return;
        }
        case $t: {
          Vr !== null && (cl ? Ox(Vr, a.stateNode) : $y(Vr, a.stateNode));
          return;
        }
        case ne: {
          {
            var s = Vr, f = cl;
            Vr = a.stateNode.containerInfo, cl = !0, Bo(e, t, a), Vr = s, cl = f;
          }
          return;
        }
        case ie:
        case He:
        case ut:
        case je: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var w = g, x = w.destroy, M = w.tag;
                  x !== void 0 && ((M & $l) !== Pa ? jm(a, t, x) : (M & dr) !== Pa && (hs(a), a.mode & Ut ? (ql(), jm(a, t, x), Gl(a)) : jm(a, t, x), Ld())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Bo(e, t, a);
          return;
        }
        case re: {
          if (!Pr) {
            Qf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && MS(a, t, A);
          }
          Bo(e, t, a);
          return;
        }
        case kt: {
          Bo(e, t, a);
          return;
        }
        case ze: {
          if (
            // TODO: Remove this dead flag
            a.mode & yt
          ) {
            var F = Pr;
            Pr = F || a.memoizedState !== null, Bo(e, t, a), Pr = F;
          } else
            Bo(e, t, a);
          break;
        }
        default: {
          Bo(e, t, a);
          return;
        }
      }
    }
    function cw(e) {
      e.memoizedState;
    }
    function fw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && qx(s);
          }
        }
      }
    }
    function K0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new G1()), t.forEach(function(i) {
          var u = u_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Jr)
              if ($f !== null && Wf !== null)
                Zp(Wf, $f);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function dw(e, t, a) {
      $f = a, Wf = e, Xt(t), J0(t, e), Xt(t), $f = null, Wf = null;
    }
    function fl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            sw(e, t, s);
          } catch (v) {
            dn(s, t, v);
          }
        }
      var f = Sl();
      if (t.subtreeFlags & kl)
        for (var p = t.child; p !== null; )
          Xt(p), J0(p, e), p = p.sibling;
      Xt(f);
    }
    function J0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ie:
        case He:
        case ut:
        case je: {
          if (fl(t, e), Xl(e), u & Rt) {
            try {
              sl($l | fr, e, e.return), Vo($l | fr, e);
            } catch (Ge) {
              dn(e, e.return, Ge);
            }
            if (e.mode & Ut) {
              try {
                ql(), sl(dr | fr, e, e.return);
              } catch (Ge) {
                dn(e, e.return, Ge);
              }
              Gl(e);
            } else
              try {
                sl(dr | fr, e, e.return);
              } catch (Ge) {
                dn(e, e.return, Ge);
              }
          }
          return;
        }
        case re: {
          fl(t, e), Xl(e), u & Cn && i !== null && Qf(i, i.return);
          return;
        }
        case Z: {
          fl(t, e), Xl(e), u & Cn && i !== null && Qf(i, i.return);
          {
            if (e.flags & Oa) {
              var s = e.stateNode;
              try {
                KE(s);
              } catch (Ge) {
                dn(e, e.return, Ge);
              }
            }
            if (u & Rt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    Rx(f, g, y, v, p, e);
                  } catch (Ge) {
                    dn(e, e.return, Ge);
                  }
              }
            }
          }
          return;
        }
        case Oe: {
          if (fl(t, e), Xl(e), u & Rt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var w = e.stateNode, x = e.memoizedProps, M = i !== null ? i.memoizedProps : x;
            try {
              Tx(w, M, x);
            } catch (Ge) {
              dn(e, e.return, Ge);
            }
          }
          return;
        }
        case J: {
          if (fl(t, e), Xl(e), u & Rt && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                Gx(t.containerInfo);
              } catch (Ge) {
                dn(e, e.return, Ge);
              }
          }
          return;
        }
        case ne: {
          fl(t, e), Xl(e);
          return;
        }
        case be: {
          fl(t, e), Xl(e);
          var F = e.child;
          if (F.flags & zn) {
            var fe = F.stateNode, Ae = F.memoizedState, De = Ae !== null;
            if (fe.isHidden = De, De) {
              var bt = F.alternate !== null && F.alternate.memoizedState !== null;
              bt || Ww();
            }
          }
          if (u & Rt) {
            try {
              cw(e);
            } catch (Ge) {
              dn(e, e.return, Ge);
            }
            K0(e);
          }
          return;
        }
        case ze: {
          var Et = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & yt
          ) {
            var k = Pr;
            Pr = k || Et, fl(t, e), Pr = k;
          } else
            fl(t, e);
          if (Xl(e), u & zn) {
            var H = e.stateNode, O = e.memoizedState, K = O !== null, he = e;
            if (H.isHidden = K, K && !Et && (he.mode & yt) !== Ne) {
              Ce = he;
              for (var de = he.child; de !== null; )
                Ce = de, vw(de), de = de.sibling;
            }
            iw(he, K);
          }
          return;
        }
        case Qt: {
          fl(t, e), Xl(e), u & Rt && K0(e);
          return;
        }
        case kt:
          return;
        default: {
          fl(t, e), Xl(e);
          return;
        }
      }
    }
    function Xl(e) {
      var t = e.flags;
      if (t & yn) {
        try {
          ow(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        e.flags &= ~yn;
      }
      t & qr && (e.flags &= ~qr);
    }
    function pw(e, t, a) {
      $f = a, Wf = t, Ce = e, Z0(e, t, a), $f = null, Wf = null;
    }
    function Z0(e, t, a) {
      for (var i = (e.mode & yt) !== Ne; Ce !== null; ) {
        var u = Ce, s = u.child;
        if (u.tag === ze && i) {
          var f = u.memoizedState !== null, p = f || Am;
          if (p) {
            US(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, w = Am, x = Pr;
            Am = p, Pr = g, Pr && !x && (Ce = u, hw(u));
            for (var M = s; M !== null; )
              Ce = M, Z0(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            Ce = u, Am = w, Pr = x, US(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ol) !== Me && s !== null ? (s.return = u, Ce = s) : US(e, t, a);
      }
    }
    function US(e, t, a) {
      for (; Ce !== null; ) {
        var i = Ce;
        if ((i.flags & Ol) !== Me) {
          var u = i.alternate;
          Xt(i);
          try {
            rw(t, u, i, a);
          } catch (f) {
            dn(i, i.return, f);
          }
          fn();
        }
        if (i === e) {
          Ce = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ce = s;
          return;
        }
        Ce = i.return;
      }
    }
    function vw(e) {
      for (; Ce !== null; ) {
        var t = Ce, a = t.child;
        switch (t.tag) {
          case ie:
          case He:
          case ut:
          case je: {
            if (t.mode & Ut)
              try {
                ql(), sl(dr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              sl(dr, t, t.return);
            break;
          }
          case re: {
            Qf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && MS(t, t.return, i);
            break;
          }
          case Z: {
            Qf(t, t.return);
            break;
          }
          case ze: {
            var u = t.memoizedState !== null;
            if (u) {
              eR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ce = a) : eR(e);
      }
    }
    function eR(e) {
      for (; Ce !== null; ) {
        var t = Ce;
        if (t === e) {
          Ce = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ce = a;
          return;
        }
        Ce = t.return;
      }
    }
    function hw(e) {
      for (; Ce !== null; ) {
        var t = Ce, a = t.child;
        if (t.tag === ze) {
          var i = t.memoizedState !== null;
          if (i) {
            tR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ce = a) : tR(e);
      }
    }
    function tR(e) {
      for (; Ce !== null; ) {
        var t = Ce;
        Xt(t);
        try {
          aw(t);
        } catch (i) {
          dn(t, t.return, i);
        }
        if (fn(), t === e) {
          Ce = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ce = a;
          return;
        }
        Ce = t.return;
      }
    }
    function mw(e, t, a, i) {
      Ce = t, yw(t, e, a, i);
    }
    function yw(e, t, a, i) {
      for (; Ce !== null; ) {
        var u = Ce, s = u.child;
        (u.subtreeFlags & Gi) !== Me && s !== null ? (s.return = u, Ce = s) : gw(e, t, a, i);
      }
    }
    function gw(e, t, a, i) {
      for (; Ce !== null; ) {
        var u = Ce;
        if ((u.flags & Gr) !== Me) {
          Xt(u);
          try {
            Sw(t, u, a, i);
          } catch (f) {
            dn(u, u.return, f);
          }
          fn();
        }
        if (u === e) {
          Ce = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ce = s;
          return;
        }
        Ce = u.return;
      }
    }
    function Sw(e, t, a, i) {
      switch (t.tag) {
        case ie:
        case He:
        case je: {
          if (t.mode & Ut) {
            eS();
            try {
              Vo(Fr | fr, t);
            } finally {
              Zg(t);
            }
          } else
            Vo(Fr | fr, t);
          break;
        }
      }
    }
    function Ew(e) {
      Ce = e, Cw();
    }
    function Cw() {
      for (; Ce !== null; ) {
        var e = Ce, t = e.child;
        if ((Ce.flags & ka) !== Me) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ce = u, xw(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ce = e;
          }
        }
        (e.subtreeFlags & Gi) !== Me && t !== null ? (t.return = e, Ce = t) : Rw();
      }
    }
    function Rw() {
      for (; Ce !== null; ) {
        var e = Ce;
        (e.flags & Gr) !== Me && (Xt(e), Tw(e), fn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ce = t;
          return;
        }
        Ce = e.return;
      }
    }
    function Tw(e) {
      switch (e.tag) {
        case ie:
        case He:
        case je: {
          e.mode & Ut ? (eS(), sl(Fr | fr, e, e.return), Zg(e)) : sl(Fr | fr, e, e.return);
          break;
        }
      }
    }
    function xw(e, t) {
      for (; Ce !== null; ) {
        var a = Ce;
        Xt(a), ww(a, t), fn();
        var i = a.child;
        i !== null ? (i.return = a, Ce = i) : bw(e);
      }
    }
    function bw(e) {
      for (; Ce !== null; ) {
        var t = Ce, a = t.sibling, i = t.return;
        if (Q0(t), t === e) {
          Ce = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ce = a;
          return;
        }
        Ce = i;
      }
    }
    function ww(e, t) {
      switch (e.tag) {
        case ie:
        case He:
        case je: {
          e.mode & Ut ? (eS(), sl(Fr, e, t), Zg(e)) : sl(Fr, e, t);
          break;
        }
      }
    }
    function _w(e) {
      switch (e.tag) {
        case ie:
        case He:
        case je: {
          try {
            Vo(dr | fr, e);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case re: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Dw(e) {
      switch (e.tag) {
        case ie:
        case He:
        case je: {
          try {
            Vo(Fr | fr, e);
          } catch (t) {
            dn(e, e.return, t);
          }
          break;
        }
      }
    }
    function kw(e) {
      switch (e.tag) {
        case ie:
        case He:
        case je: {
          try {
            sl(dr | fr, e, e.return);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case re: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && MS(e, e.return, t);
          break;
        }
      }
    }
    function Ow(e) {
      switch (e.tag) {
        case ie:
        case He:
        case je:
          try {
            sl(Fr | fr, e, e.return);
          } catch (t) {
            dn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Bp = Symbol.for;
      Bp("selector.component"), Bp("selector.has_pseudo_class"), Bp("selector.role"), Bp("selector.test_id"), Bp("selector.text");
    }
    var Lw = [];
    function Mw() {
      Lw.forEach(function(e) {
        return e();
      });
    }
    var Nw = N.ReactCurrentActQueue;
    function zw(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function nR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Nw.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Uw = Math.ceil, AS = N.ReactCurrentDispatcher, jS = N.ReactCurrentOwner, Br = N.ReactCurrentBatchConfig, dl = N.ReactCurrentActQueue, hr = (
      /*             */
      0
    ), rR = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Iu = 0, Yp = 1, lc = 2, Fm = 3, Ip = 4, aR = 5, FS = 6, xt = hr, Ea = null, On = null, mr = $, Kl = $, HS = Mo($), yr = Iu, $p = null, Hm = $, Wp = $, Pm = $, Qp = null, Va = null, PS = 0, iR = 500, lR = 1 / 0, Aw = 500, $u = null;
    function Gp() {
      lR = Qn() + Aw;
    }
    function uR() {
      return lR;
    }
    var Vm = !1, VS = null, Gf = null, uc = !1, Yo = null, qp = $, BS = [], YS = null, jw = 50, Xp = 0, IS = null, $S = !1, Bm = !1, Fw = 50, qf = 0, Ym = null, Kp = nn, Im = $, oR = !1;
    function $m() {
      return Ea;
    }
    function Ca() {
      return (xt & (Yr | ji)) !== hr ? Qn() : (Kp !== nn || (Kp = Qn()), Kp);
    }
    function Io(e) {
      var t = e.mode;
      if ((t & yt) === Ne)
        return $e;
      if ((xt & Yr) !== hr && mr !== $)
        return Ds(mr);
      var a = Nb() !== Mb;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Im === Lt && (Im = Hd()), Im;
      }
      var u = Aa();
      if (u !== Lt)
        return u;
      var s = yx();
      return s;
    }
    function Hw(e) {
      var t = e.mode;
      return (t & yt) === Ne ? $e : qv();
    }
    function gr(e, t, a, i) {
      s_(), oR && S("useInsertionEffect must not schedule updates."), $S && (Bm = !0), Co(e, a, i), (xt & Yr) !== $ && e === Ea ? d_(t) : (Jr && Ls(e, t, a), p_(t), e === Ea && ((xt & Yr) === hr && (Wp = lt(Wp, a)), yr === Ip && $o(e, mr)), Ba(e, i), a === $e && xt === hr && (t.mode & yt) === Ne && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !dl.isBatchingLegacy && (Gp(), oC()));
    }
    function Pw(e, t, a) {
      var i = e.current;
      i.lanes = t, Co(e, t, a), Ba(e, a);
    }
    function Vw(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (xt & Yr) !== hr
      );
    }
    function Ba(e, t) {
      var a = e.callbackNode;
      rf(e, t);
      var i = nf(e, e === Ea ? mr : $);
      if (i === $) {
        a !== null && xR(a), e.callbackNode = null, e.callbackPriority = Lt;
        return;
      }
      var u = Ul(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(dl.current !== null && a !== JS)) {
        a == null && s !== $e && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && xR(a);
      var f;
      if (u === $e)
        e.tag === No ? (dl.isBatchingLegacy !== null && (dl.didScheduleLegacyUpdate = !0), hb(fR.bind(null, e))) : uC(fR.bind(null, e)), dl.current !== null ? dl.current.push(zo) : Sx(function() {
          (xt & (Yr | ji)) === hr && zo();
        }), f = null;
      else {
        var p;
        switch (nh(i)) {
          case Mr:
            p = vs;
            break;
          case _i:
            p = Ll;
            break;
          case za:
            p = qi;
            break;
          case Ua:
            p = gu;
            break;
          default:
            p = qi;
            break;
        }
        f = ZS(p, sR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function sR(e, t) {
      if (i1(), Kp = nn, Im = $, (xt & (Yr | ji)) !== hr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Qu();
      if (i && e.callbackNode !== a)
        return null;
      var u = nf(e, e === Ea ? mr : $);
      if (u === $)
        return null;
      var s = !lf(e, u) && !Gv(e, u) && !t, f = s ? Kw(e, u) : Qm(e, u);
      if (f !== Iu) {
        if (f === lc) {
          var p = af(e);
          p !== $ && (u = p, f = WS(e, p));
        }
        if (f === Yp) {
          var v = $p;
          throw oc(e, $), $o(e, u), Ba(e, Qn()), v;
        }
        if (f === FS)
          $o(e, u);
        else {
          var y = !lf(e, u), g = e.current.alternate;
          if (y && !Yw(g)) {
            if (f = Qm(e, u), f === lc) {
              var w = af(e);
              w !== $ && (u = w, f = WS(e, w));
            }
            if (f === Yp) {
              var x = $p;
              throw oc(e, $), $o(e, u), Ba(e, Qn()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Bw(e, f, u);
        }
      }
      return Ba(e, Qn()), e.callbackNode === a ? sR.bind(null, e) : null;
    }
    function WS(e, t) {
      var a = Qp;
      if (sf(e)) {
        var i = oc(e, t);
        i.flags |= Rr, ob(e.containerInfo);
      }
      var u = Qm(e, t);
      if (u !== lc) {
        var s = Va;
        Va = a, s !== null && cR(s);
      }
      return u;
    }
    function cR(e) {
      Va === null ? Va = e : Va.push.apply(Va, e);
    }
    function Bw(e, t, a) {
      switch (t) {
        case Iu:
        case Yp:
          throw new Error("Root did not complete. This is a bug in React.");
        case lc: {
          sc(e, Va, $u);
          break;
        }
        case Fm: {
          if ($o(e, a), ku(a) && // do not delay if we're inside an act() scope
          !bR()) {
            var i = PS + iR - Qn();
            if (i > 10) {
              var u = nf(e, $);
              if (u !== $)
                break;
              var s = e.suspendedLanes;
              if (!Ou(s, a)) {
                Ca(), uf(e, s);
                break;
              }
              e.timeoutHandle = Yy(sc.bind(null, e, Va, $u), i);
              break;
            }
          }
          sc(e, Va, $u);
          break;
        }
        case Ip: {
          if ($o(e, a), jd(a))
            break;
          if (!bR()) {
            var f = ai(e, a), p = f, v = Qn() - p, y = o_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Yy(sc.bind(null, e, Va, $u), y);
              break;
            }
          }
          sc(e, Va, $u);
          break;
        }
        case aR: {
          sc(e, Va, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Yw(e) {
      for (var t = e; ; ) {
        if (t.flags & mo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!G(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & mo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function $o(e, t) {
      t = ks(t, Pm), t = ks(t, Wp), Jv(e, t);
    }
    function fR(e) {
      if (l1(), (xt & (Yr | ji)) !== hr)
        throw new Error("Should not already be working.");
      Qu();
      var t = nf(e, $);
      if (!ea(t, $e))
        return Ba(e, Qn()), null;
      var a = Qm(e, t);
      if (e.tag !== No && a === lc) {
        var i = af(e);
        i !== $ && (t = i, a = WS(e, i));
      }
      if (a === Yp) {
        var u = $p;
        throw oc(e, $), $o(e, t), Ba(e, Qn()), u;
      }
      if (a === FS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, sc(e, Va, $u), Ba(e, Qn()), null;
    }
    function Iw(e, t) {
      t !== $ && (of(e, lt(t, $e)), Ba(e, Qn()), (xt & (Yr | ji)) === hr && (Gp(), zo()));
    }
    function QS(e, t) {
      var a = xt;
      xt |= rR;
      try {
        return e(t);
      } finally {
        xt = a, xt === hr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !dl.isBatchingLegacy && (Gp(), oC());
      }
    }
    function $w(e, t, a, i, u) {
      var s = Aa(), f = Br.transition;
      try {
        return Br.transition = null, Fn(Mr), e(t, a, i, u);
      } finally {
        Fn(s), Br.transition = f, xt === hr && Gp();
      }
    }
    function Wu(e) {
      Yo !== null && Yo.tag === No && (xt & (Yr | ji)) === hr && Qu();
      var t = xt;
      xt |= rR;
      var a = Br.transition, i = Aa();
      try {
        return Br.transition = null, Fn(Mr), e ? e() : void 0;
      } finally {
        Fn(i), Br.transition = a, xt = t, (xt & (Yr | ji)) === hr && zo();
      }
    }
    function dR() {
      return (xt & (Yr | ji)) !== hr;
    }
    function Wm(e, t) {
      ia(HS, Kl, e), Kl = lt(Kl, t);
    }
    function GS(e) {
      Kl = HS.current, aa(HS, e);
    }
    function oc(e, t) {
      e.finishedWork = null, e.finishedLanes = $;
      var a = e.timeoutHandle;
      if (a !== Iy && (e.timeoutHandle = Iy, gx(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          V0(u, i), i = i.return;
        }
      Ea = e;
      var s = cc(e.current, null);
      return On = s, mr = Kl = t, yr = Iu, $p = null, Hm = $, Wp = $, Pm = $, Qp = null, Va = null, Pb(), al.discardPendingWarnings(), s;
    }
    function pR(e, t) {
      do {
        var a = On;
        try {
          if (nm(), jC(), fn(), jS.current = null, a === null || a.return === null) {
            yr = Yp, $p = t, On = null;
            return;
          }
          if (Ie && a.mode & Ut && Lm(a, !0), Qe)
            if (ma(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              wi(a, i, mr);
            } else
              ms(a, t, mr);
          h1(e, a.return, a, t, mr), yR(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function vR() {
      var e = AS.current;
      return AS.current = wm, e === null ? wm : e;
    }
    function hR(e) {
      AS.current = e;
    }
    function Ww() {
      PS = Qn();
    }
    function Jp(e) {
      Hm = lt(e, Hm);
    }
    function Qw() {
      yr === Iu && (yr = Fm);
    }
    function qS() {
      (yr === Iu || yr === Fm || yr === lc) && (yr = Ip), Ea !== null && (_s(Hm) || _s(Wp)) && $o(Ea, mr);
    }
    function Gw(e) {
      yr !== Ip && (yr = lc), Qp === null ? Qp = [e] : Qp.push(e);
    }
    function qw() {
      return yr === Iu;
    }
    function Qm(e, t) {
      var a = xt;
      xt |= Yr;
      var i = vR();
      if (Ea !== e || mr !== t) {
        if (Jr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Zp(e, mr), u.clear()), Zv(e, t);
        }
        $u = Yd(), oc(e, t);
      }
      Ru(t);
      do
        try {
          Xw();
          break;
        } catch (s) {
          pR(e, s);
        }
      while (!0);
      if (nm(), xt = a, hR(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Fc(), Ea = null, mr = $, yr;
    }
    function Xw() {
      for (; On !== null; )
        mR(On);
    }
    function Kw(e, t) {
      var a = xt;
      xt |= Yr;
      var i = vR();
      if (Ea !== e || mr !== t) {
        if (Jr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Zp(e, mr), u.clear()), Zv(e, t);
        }
        $u = Yd(), Gp(), oc(e, t);
      }
      Ru(t);
      do
        try {
          Jw();
          break;
        } catch (s) {
          pR(e, s);
        }
      while (!0);
      return nm(), hR(i), xt = a, On !== null ? (Iv(), Iu) : (Fc(), Ea = null, mr = $, yr);
    }
    function Jw() {
      for (; On !== null && !Rd(); )
        mR(On);
    }
    function mR(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & Ut) !== Ne ? (Jg(e), a = XS(t, e, Kl), Lm(e, !0)) : a = XS(t, e, Kl), fn(), e.memoizedProps = e.pendingProps, a === null ? yR(e) : On = a, jS.current = null;
    }
    function yR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ps) === Me) {
          Xt(t);
          var u = void 0;
          if ((t.mode & Ut) === Ne ? u = P0(a, t, Kl) : (Jg(t), u = P0(a, t, Kl), Lm(t, !1)), fn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = Q1(a, t);
          if (s !== null) {
            s.flags &= Fv, On = s;
            return;
          }
          if ((t.mode & Ut) !== Ne) {
            Lm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ps, i.subtreeFlags = Me, i.deletions = null;
          else {
            yr = FS, On = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          On = v;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      yr === Iu && (yr = aR);
    }
    function sc(e, t, a) {
      var i = Aa(), u = Br.transition;
      try {
        Br.transition = null, Fn(Mr), Zw(e, t, a, i);
      } finally {
        Br.transition = u, Fn(i);
      }
      return null;
    }
    function Zw(e, t, a, i) {
      do
        Qu();
      while (Yo !== null);
      if (c_(), (xt & (Yr | ji)) !== hr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Dd(s), u === null)
        return kd(), null;
      if (s === $ && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = $, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Lt;
      var f = lt(u.lanes, u.childLanes);
      Vd(e, f), e === Ea && (Ea = null, On = null, mr = $), ((u.subtreeFlags & Gi) !== Me || (u.flags & Gi) !== Me) && (uc || (uc = !0, YS = a, ZS(qi, function() {
        return Qu(), null;
      })));
      var p = (u.subtreeFlags & (Dl | kl | Ol | Gi)) !== Me, v = (u.flags & (Dl | kl | Ol | Gi)) !== Me;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = Aa();
        Fn(Mr);
        var w = xt;
        xt |= ji, jS.current = null, J1(e, u), o0(), dw(e, u, s), fx(e.containerInfo), e.current = u, ys(s), pw(u, e, s), gs(), Td(), xt = w, Fn(g), Br.transition = y;
      } else
        e.current = u, o0();
      var x = uc;
      if (uc ? (uc = !1, Yo = e, qp = s) : (qf = 0, Ym = null), f = e.pendingLanes, f === $ && (Gf = null), x || CR(e.current, !1), bd(u.stateNode, i), Jr && e.memoizedUpdaters.clear(), Mw(), Ba(e, Qn()), t !== null)
        for (var M = e.onRecoverableError, A = 0; A < t.length; A++) {
          var F = t[A], fe = F.stack, Ae = F.digest;
          M(F.value, {
            componentStack: fe,
            digest: Ae
          });
        }
      if (Vm) {
        Vm = !1;
        var De = VS;
        throw VS = null, De;
      }
      return ea(qp, $e) && e.tag !== No && Qu(), f = e.pendingLanes, ea(f, $e) ? (a1(), e === IS ? Xp++ : (Xp = 0, IS = e)) : Xp = 0, zo(), kd(), null;
    }
    function Qu() {
      if (Yo !== null) {
        var e = nh(qp), t = Ns(za, e), a = Br.transition, i = Aa();
        try {
          return Br.transition = null, Fn(t), t_();
        } finally {
          Fn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function e_(e) {
      BS.push(e), uc || (uc = !0, ZS(qi, function() {
        return Qu(), null;
      }));
    }
    function t_() {
      if (Yo === null)
        return !1;
      var e = YS;
      YS = null;
      var t = Yo, a = qp;
      if (Yo = null, qp = $, (xt & (Yr | ji)) !== hr)
        throw new Error("Cannot flush passive effects while already rendering.");
      $S = !0, Bm = !1, Cu(a);
      var i = xt;
      xt |= ji, Ew(t.current), mw(t, t.current, a, e);
      {
        var u = BS;
        BS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          nw(t, f);
        }
      }
      Md(), CR(t.current, !0), xt = i, zo(), Bm ? t === Ym ? qf++ : (qf = 0, Ym = t) : qf = 0, $S = !1, Bm = !1, wd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function gR(e) {
      return Gf !== null && Gf.has(e);
    }
    function n_(e) {
      Gf === null ? Gf = /* @__PURE__ */ new Set([e]) : Gf.add(e);
    }
    function r_(e) {
      Vm || (Vm = !0, VS = e);
    }
    var a_ = r_;
    function SR(e, t, a) {
      var i = ac(a, t), u = m0(e, i, $e), s = Ao(e, u, $e), f = Ca();
      s !== null && (Co(s, $e, f), Ba(s, f));
    }
    function dn(e, t, a) {
      if (q1(a), ev(!1), e.tag === J) {
        SR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          SR(i, e, a);
          return;
        } else if (i.tag === re) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !gR(s)) {
            var f = ac(a, e), p = mS(i, f, $e), v = Ao(i, p, $e), y = Ca();
            v !== null && (Co(v, $e, y), Ba(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function i_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ca();
      uf(e, a), v_(e), Ea === e && Ou(mr, a) && (yr === Ip || yr === Fm && ku(mr) && Qn() - PS < iR ? oc(e, $) : Pm = lt(Pm, a)), Ba(e, u);
    }
    function ER(e, t) {
      t === Lt && (t = Hw(e));
      var a = Ca(), i = Ha(e, t);
      i !== null && (Co(i, t, a), Ba(i, a));
    }
    function l_(e) {
      var t = e.memoizedState, a = Lt;
      t !== null && (a = t.retryLane), ER(e, a);
    }
    function u_(e, t) {
      var a = Lt, i;
      switch (e.tag) {
        case be:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Qt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), ER(e, a);
    }
    function o_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Uw(e / 1960) * 1960;
    }
    function s_() {
      if (Xp > jw)
        throw Xp = 0, IS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      qf > Fw && (qf = 0, Ym = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function c_() {
      al.flushLegacyContextWarning(), al.flushPendingUnsafeLifecycleWarnings();
    }
    function CR(e, t) {
      Xt(e), Gm(e, _l, kw), t && Gm(e, Ti, Ow), Gm(e, _l, _w), t && Gm(e, Ti, Dw), fn();
    }
    function Gm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Me ? i = i.child : ((i.flags & t) !== Me && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var qm = null;
    function RR(e) {
      {
        if ((xt & Yr) !== hr || !(e.mode & yt))
          return;
        var t = e.tag;
        if (t !== Ye && t !== J && t !== re && t !== ie && t !== He && t !== ut && t !== je)
          return;
        var a = Ke(e) || "ReactComponent";
        if (qm !== null) {
          if (qm.has(a))
            return;
          qm.add(a);
        } else
          qm = /* @__PURE__ */ new Set([a]);
        var i = lr;
        try {
          Xt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xt(e) : fn();
        }
      }
    }
    var XS;
    {
      var f_ = null;
      XS = function(e, t, a) {
        var i = OR(f_, t);
        try {
          return U0(e, t, a);
        } catch (s) {
          if (Tb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (nm(), jC(), V0(e, t), OR(t, i), t.mode & Ut && Jg(t), wl(null, U0, null, e, t, a), Wi()) {
            var u = ds();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var TR = !1, KS;
    KS = /* @__PURE__ */ new Set();
    function d_(e) {
      if (mi && !t1())
        switch (e.tag) {
          case ie:
          case He:
          case je: {
            var t = On && Ke(On) || "Unknown", a = t;
            if (!KS.has(a)) {
              KS.add(a);
              var i = Ke(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case re: {
            TR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), TR = !0);
            break;
          }
        }
    }
    function Zp(e, t) {
      if (Jr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ls(e, i, t);
        });
      }
    }
    var JS = {};
    function ZS(e, t) {
      {
        var a = dl.current;
        return a !== null ? (a.push(t), JS) : Cd(e, t);
      }
    }
    function xR(e) {
      if (e !== JS)
        return Pv(e);
    }
    function bR() {
      return dl.current !== null;
    }
    function p_(e) {
      {
        if (e.mode & yt) {
          if (!nR())
            return;
        } else if (!zw() || xt !== hr || e.tag !== ie && e.tag !== He && e.tag !== je)
          return;
        if (dl.current === null) {
          var t = lr;
          try {
            Xt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ke(e));
          } finally {
            t ? Xt(e) : fn();
          }
        }
      }
    }
    function v_(e) {
      e.tag !== No && nR() && dl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function ev(e) {
      oR = e;
    }
    var Fi = null, Xf = null, h_ = function(e) {
      Fi = e;
    };
    function Kf(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function eE(e) {
      return Kf(e);
    }
    function tE(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Kf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: I,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function wR(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case re: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ie: {
            (typeof i == "function" || s === Je) && (u = !0);
            break;
          }
          case He: {
            (s === I || s === Je) && (u = !0);
            break;
          }
          case ut:
          case je: {
            (s === rt || s === Je) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Fi(a);
          if (f !== void 0 && f === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function _R(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        Xf === null && (Xf = /* @__PURE__ */ new WeakSet()), Xf.add(e);
      }
    }
    var m_ = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Qu(), Wu(function() {
          nE(e.current, i, a);
        });
      }
    }, y_ = function(e, t) {
      {
        if (e.context !== ui)
          return;
        Qu(), Wu(function() {
          tv(t, e, null, null);
        });
      }
    };
    function nE(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ie:
          case je:
          case re:
            v = p;
            break;
          case He:
            v = p.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var w = Fi(v);
          w !== void 0 && (a.has(w) ? g = !0 : t.has(w) && (f === re ? g = !0 : y = !0));
        }
        if (Xf !== null && (Xf.has(e) || i !== null && Xf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = Ha(e, $e);
          x !== null && gr(x, e, $e, nn);
        }
        u !== null && !g && nE(u, t, a), s !== null && nE(s, t, a);
      }
    }
    var g_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return rE(e.current, i, a), a;
      }
    };
    function rE(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ie:
          case je:
          case re:
            p = f;
            break;
          case He:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? S_(e, a) : i !== null && rE(i, t, a), u !== null && rE(u, t, a);
      }
    }
    function S_(e, t) {
      {
        var a = E_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Z:
              t.add(i.stateNode);
              return;
            case ne:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function E_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Z)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var aE;
    {
      aE = !1;
      try {
        var DR = Object.preventExtensions({});
      } catch {
        aE = !0;
      }
    }
    function C_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Me, this.subtreeFlags = Me, this.deletions = null, this.lanes = $, this.childLanes = $, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !aE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new C_(e, t, a, i);
    };
    function iE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function R_(e) {
      return typeof e == "function" && !iE(e) && e.defaultProps === void 0;
    }
    function T_(e) {
      if (typeof e == "function")
        return iE(e) ? re : ie;
      if (e != null) {
        var t = e.$$typeof;
        if (t === I)
          return He;
        if (t === rt)
          return ut;
      }
      return Ye;
    }
    function cc(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Me, a.subtreeFlags = Me, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Un, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ye:
        case ie:
        case je:
          a.type = Kf(e.type);
          break;
        case re:
          a.type = eE(e.type);
          break;
        case He:
          a.type = tE(e.type);
          break;
      }
      return a;
    }
    function x_(e, t) {
      e.flags &= Un | yn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = $, e.lanes = t, e.child = null, e.subtreeFlags = Me, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Me, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function b_(e, t, a) {
      var i;
      return e === Wh ? (i = yt, t === !0 && (i |= Zt, i |= At)) : i = Ne, Jr && (i |= Ut), oi(J, null, null, i);
    }
    function lE(e, t, a, i, u, s) {
      var f = Ye, p = e;
      if (typeof e == "function")
        iE(e) ? (f = re, p = eE(p)) : p = Kf(p);
      else if (typeof e == "string")
        f = Z;
      else
        e: switch (e) {
          case di:
            return Wo(a.children, u, s, t);
          case Qa:
            f = ge, u |= Zt, (u & yt) !== Ne && (u |= At);
            break;
          case pi:
            return w_(a, u, s, t);
          case se:
            return __(a, u, s, t);
          case ye:
            return D_(a, u, s, t);
          case xn:
            return kR(a, u, s, t);
          case ln:
          case gt:
          case cn:
          case ir:
          case mt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case vi:
                  f = Le;
                  break e;
                case R:
                  f = Mt;
                  break e;
                case I:
                  f = He, p = tE(p);
                  break e;
                case rt:
                  f = ut;
                  break e;
                case Je:
                  f = Re, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ke(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = oi(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function uE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = lE(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Wo(e, t, a, i) {
      var u = oi(nt, e, i, t);
      return u.lanes = a, u;
    }
    function w_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oi(et, e, i, t | Ut);
      return u.elementType = pi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function __(e, t, a, i) {
      var u = oi(be, e, i, t);
      return u.elementType = se, u.lanes = a, u;
    }
    function D_(e, t, a, i) {
      var u = oi(Qt, e, i, t);
      return u.elementType = ye, u.lanes = a, u;
    }
    function kR(e, t, a, i) {
      var u = oi(ze, e, i, t);
      u.elementType = xn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function oE(e, t, a) {
      var i = oi(Oe, e, null, t);
      return i.lanes = a, i;
    }
    function k_() {
      var e = oi(Z, null, null, Ne);
      return e.elementType = "DELETED", e;
    }
    function O_(e) {
      var t = oi($t, null, null, Ne);
      return t.stateNode = e, t;
    }
    function sE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oi(ne, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function OR(e, t) {
      return e === null && (e = oi(Ye, null, null, Ne)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function L_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Iy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Lt, this.eventTimes = Os($), this.expirationTimes = Os(nn), this.pendingLanes = $, this.suspendedLanes = $, this.pingedLanes = $, this.expiredLanes = $, this.mutableReadLanes = $, this.finishedLanes = $, this.entangledLanes = $, this.entanglements = Os($), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Tu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Wh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case No:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function LR(e, t, a, i, u, s, f, p, v, y) {
      var g = new L_(e, t, a, p, v), w = b_(t, s);
      g.current = w, w.stateNode = g;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        w.memoizedState = x;
      }
      return Rg(w), g;
    }
    var cE = "18.3.1";
    function M_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return $r(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ar,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var fE, dE;
    fE = !1, dE = {};
    function MR(e) {
      if (!e)
        return ui;
      var t = ho(e), a = vb(t);
      if (t.tag === re) {
        var i = t.type;
        if (Il(i))
          return iC(t, i, a);
      }
      return a;
    }
    function N_(e, t) {
      {
        var a = ho(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Xr(a);
        if (u === null)
          return null;
        if (u.mode & Zt) {
          var s = Ke(a) || "Component";
          if (!dE[s]) {
            dE[s] = !0;
            var f = lr;
            try {
              Xt(u), a.mode & Zt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Xt(f) : fn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function NR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return LR(e, t, v, y, a, i, u, s, f);
    }
    function zR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, w = LR(a, i, g, e, u, s, f, p, v);
      w.context = MR(null);
      var x = w.current, M = Ca(), A = Io(x), F = Bu(M, A);
      return F.callback = t ?? null, Ao(x, F, A), Pw(w, A, M), w;
    }
    function tv(e, t, a, i) {
      xd(t, e);
      var u = t.current, s = Ca(), f = Io(u);
      Sn(f);
      var p = MR(a);
      t.context === null ? t.context = p : t.pendingContext = p, mi && lr !== null && !fE && (fE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ke(lr) || "Unknown"));
      var v = Bu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Ao(u, v, f);
      return y !== null && (gr(y, u, f, s), um(y, u, f)), f;
    }
    function Xm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Z:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function z_(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (sf(t)) {
            var a = Wv(t);
            Iw(t, a);
          }
          break;
        }
        case be: {
          Wu(function() {
            var u = Ha(e, $e);
            if (u !== null) {
              var s = Ca();
              gr(u, e, $e, s);
            }
          });
          var i = $e;
          pE(e, i);
          break;
        }
      }
    }
    function UR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Kv(a.retryLane, t));
    }
    function pE(e, t) {
      UR(e, t);
      var a = e.alternate;
      a && UR(a, t);
    }
    function U_(e) {
      if (e.tag === be) {
        var t = xs, a = Ha(e, t);
        if (a !== null) {
          var i = Ca();
          gr(a, e, t, i);
        }
        pE(e, t);
      }
    }
    function A_(e) {
      if (e.tag === be) {
        var t = Io(e), a = Ha(e, t);
        if (a !== null) {
          var i = Ca();
          gr(a, e, t, i);
        }
        pE(e, t);
      }
    }
    function AR(e) {
      var t = pn(e);
      return t === null ? null : t.stateNode;
    }
    var jR = function(e) {
      return null;
    };
    function j_(e) {
      return jR(e);
    }
    var FR = function(e) {
      return !1;
    };
    function F_(e) {
      return FR(e);
    }
    var HR = null, PR = null, VR = null, BR = null, YR = null, IR = null, $R = null, WR = null, QR = null;
    {
      var GR = function(e, t, a) {
        var i = t[a], u = pt(e) ? e.slice() : st({}, e);
        return a + 1 === t.length ? (pt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = GR(e[i], t, a + 1), u);
      }, qR = function(e, t) {
        return GR(e, t, 0);
      }, XR = function(e, t, a, i) {
        var u = t[i], s = pt(e) ? e.slice() : st({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], pt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = XR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, KR = function(e, t, a) {
        if (t.length !== a.length) {
          We("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              We("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return XR(e, t, a, 0);
      }, JR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = pt(e) ? e.slice() : st({}, e);
        return s[u] = JR(e[u], t, a + 1, i), s;
      }, ZR = function(e, t, a) {
        return JR(e, t, 0, a);
      }, vE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      HR = function(e, t, a, i) {
        var u = vE(e, t);
        if (u !== null) {
          var s = ZR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = st({}, e.memoizedProps);
          var f = Ha(e, $e);
          f !== null && gr(f, e, $e, nn);
        }
      }, PR = function(e, t, a) {
        var i = vE(e, t);
        if (i !== null) {
          var u = qR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = st({}, e.memoizedProps);
          var s = Ha(e, $e);
          s !== null && gr(s, e, $e, nn);
        }
      }, VR = function(e, t, a, i) {
        var u = vE(e, t);
        if (u !== null) {
          var s = KR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = st({}, e.memoizedProps);
          var f = Ha(e, $e);
          f !== null && gr(f, e, $e, nn);
        }
      }, BR = function(e, t, a) {
        e.pendingProps = ZR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, $e);
        i !== null && gr(i, e, $e, nn);
      }, YR = function(e, t) {
        e.pendingProps = qR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ha(e, $e);
        a !== null && gr(a, e, $e, nn);
      }, IR = function(e, t, a) {
        e.pendingProps = KR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, $e);
        i !== null && gr(i, e, $e, nn);
      }, $R = function(e) {
        var t = Ha(e, $e);
        t !== null && gr(t, e, $e, nn);
      }, WR = function(e) {
        jR = e;
      }, QR = function(e) {
        FR = e;
      };
    }
    function H_(e) {
      var t = Xr(e);
      return t === null ? null : t.stateNode;
    }
    function P_(e) {
      return null;
    }
    function V_() {
      return lr;
    }
    function B_(e) {
      var t = e.findFiberByHostInstance, a = N.ReactCurrentDispatcher;
      return go({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: HR,
        overrideHookStateDeletePath: PR,
        overrideHookStateRenamePath: VR,
        overrideProps: BR,
        overridePropsDeletePath: YR,
        overridePropsRenamePath: IR,
        setErrorHandler: WR,
        setSuspenseHandler: QR,
        scheduleUpdate: $R,
        currentDispatcherRef: a,
        findHostInstanceByFiber: H_,
        findFiberByHostInstance: t || P_,
        // React Refresh
        findHostInstancesForRefresh: g_,
        scheduleRefresh: m_,
        scheduleRoot: y_,
        setRefreshHandler: h_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: V_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: cE
      });
    }
    var eT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function hE(e) {
      this._internalRoot = e;
    }
    Km.prototype.render = hE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Jm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Nn) {
          var i = AR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      tv(e, t, null, null);
    }, Km.prototype.unmount = hE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        dR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Wu(function() {
          tv(null, e, null, null);
        }), eC(t);
      }
    };
    function Y_(e, t) {
      if (!Jm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      tT(e);
      var a = !1, i = !1, u = "", s = eT;
      t != null && (t.hydrate ? We("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Dr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = NR(e, Wh, null, a, i, u, s);
      Hh(f.current, e);
      var p = e.nodeType === Nn ? e.parentNode : e;
      return up(p), new hE(f);
    }
    function Km(e) {
      this._internalRoot = e;
    }
    function I_(e) {
      e && uh(e);
    }
    Km.prototype.unstable_scheduleHydration = I_;
    function $_(e, t, a) {
      if (!Jm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      tT(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = eT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = zR(t, null, e, Wh, i, s, f, p, v);
      if (Hh(y.current, e), up(e), u)
        for (var g = 0; g < u.length; g++) {
          var w = u[g];
          qb(y, w);
        }
      return new Km(y);
    }
    function Jm(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === $i || e.nodeType === sd));
    }
    function nv(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === $i || e.nodeType === sd || e.nodeType === Nn && e.nodeValue === " react-mount-point-unstable "));
    }
    function tT(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), gp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var W_ = N.ReactCurrentOwner, nT;
    nT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Nn) {
        var t = AR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = mE(e), u = !!(i && Lo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function mE(e) {
      return e ? e.nodeType === $i ? e.documentElement : e.firstChild : null;
    }
    function rT() {
    }
    function Q_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = Xm(f);
            s.call(x);
          };
        }
        var f = zR(
          t,
          i,
          e,
          No,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          rT
        );
        e._reactRootContainer = f, Hh(f.current, e);
        var p = e.nodeType === Nn ? e.parentNode : e;
        return up(p), Wu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = Xm(g);
            y.call(x);
          };
        }
        var g = NR(
          e,
          No,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          rT
        );
        e._reactRootContainer = g, Hh(g.current, e);
        var w = e.nodeType === Nn ? e.parentNode : e;
        return up(w), Wu(function() {
          tv(t, g, a, i);
        }), g;
      }
    }
    function G_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Zm(e, t, a, i, u) {
      nT(a), G_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Q_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Xm(f);
            p.call(v);
          };
        }
        tv(t, f, e, u);
      }
      return Xm(f);
    }
    var aT = !1;
    function q_(e) {
      {
        aT || (aT = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = W_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : N_(e, "findDOMNode");
    }
    function X_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !nv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = gp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Zm(null, e, t, !0, a);
    }
    function K_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !nv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = gp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Zm(null, e, t, !1, a);
    }
    function J_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !nv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !py(e))
        throw new Error("parentComponent must be a valid React Component");
      return Zm(e, t, a, !1, i);
    }
    var iT = !1;
    function Z_(e) {
      if (iT || (iT = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !nv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = gp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = mE(e), i = a && !Lo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Wu(function() {
          Zm(null, null, e, !1, function() {
            e._reactRootContainer = null, eC(e);
          });
        }), !0;
      } else {
        {
          var u = mE(e), s = !!(u && Lo(u)), f = e.nodeType === Qr && nv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    xr(z_), Ro(U_), rh(A_), Us(Aa), Id(eh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), bc(tx), dy(QS, $w, Wu);
    function eD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Jm(t))
        throw new Error("Target container is not a DOM element.");
      return M_(e, t, null, a);
    }
    function tD(e, t, a, i) {
      return J_(e, t, a, i);
    }
    var yE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Lo, Df, Ph, co, wc, QS]
    };
    function nD(e, t) {
      return yE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Y_(e, t);
    }
    function rD(e, t, a) {
      return yE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), $_(e, t, a);
    }
    function aD(e) {
      return dR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Wu(e);
    }
    var iD = B_({
      findFiberByHostInstance: qs,
      bundleType: 1,
      version: cE,
      rendererPackageName: "react-dom"
    });
    if (!iD && Ln && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var lT = window.location.protocol;
      /^(https?|file):$/.test(lT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (lT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yE, Ia.createPortal = eD, Ia.createRoot = nD, Ia.findDOMNode = q_, Ia.flushSync = aD, Ia.hydrate = X_, Ia.hydrateRoot = rD, Ia.render = K_, Ia.unmountComponentAtNode = Z_, Ia.unstable_batchedUpdates = QS, Ia.unstable_renderSubtreeIntoContainer = tD, Ia.version = cE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ia;
}
function CT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(CT);
    } catch (q) {
      console.error(q);
    }
  }
}
process.env.NODE_ENV === "production" ? (CT(), xE.exports = vD()) : xE.exports = hD();
var mD = xE.exports, bE, ty = mD;
if (process.env.NODE_ENV === "production")
  bE = ty.createRoot, ty.hydrateRoot;
else {
  var mT = ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  bE = function(q, B) {
    mT.usingClientEntryPoint = !0;
    try {
      return ty.createRoot(q, B);
    } finally {
      mT.usingClientEntryPoint = !1;
    }
  };
}
function fc(q) {
  if (!q) return "—";
  const [B, N, Be] = q.split("-");
  return `${Be}/${N}/${B}`;
}
function qo() {
  return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
}
async function dc(q, B) {
  var Xe, We;
  const N = ((Xe = document.cookie.split("; ").find((S) => S.startsWith("csrftoken="))) == null ? void 0 : Xe.split("=")[1]) ?? "", Be = await fetch(q, {
    ...B,
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": N,
      ...(B == null ? void 0 : B.headers) ?? {}
    }
  });
  if (!Be.ok) {
    const S = await Be.json().catch(() => ({})), it = (S == null ? void 0 : S.detail) ?? ((We = S == null ? void 0 : S.non_field_errors) == null ? void 0 : We[0]) ?? `HTTP ${Be.status}`;
    throw new Error(it);
  }
  return Be.status === 204 ? null : Be.json();
}
function yT({ title: q }) {
  return /* @__PURE__ */ Y.jsx("h3", { style: {
    margin: "0 0 8px 0",
    fontSize: "13px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#555",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "4px"
  }, children: q });
}
function uv({ msg: q }) {
  return /* @__PURE__ */ Y.jsx("div", { style: {
    background: "#fef2f2",
    border: "1px solid #fecaca",
    color: "#b91c1c",
    borderRadius: 4,
    padding: "6px 10px",
    fontSize: "12px",
    marginBottom: 8
  }, children: q });
}
function gT({ label: q, color: B = "#6b7280" }) {
  return /* @__PURE__ */ Y.jsx("span", { style: {
    background: B + "1a",
    color: B,
    border: `1px solid ${B}40`,
    borderRadius: 12,
    padding: "1px 8px",
    fontSize: "11px",
    fontWeight: 500
  }, children: q });
}
function yD({
  apiBase: q,
  stockItemId: B,
  companies: N,
  currentCustodian: Be,
  onDone: Xe,
  onCancel: We
}) {
  const [S, it] = It.useState(""), [ie, re] = It.useState(qo()), [Ye, J] = It.useState(""), [ne, Z] = It.useState(""), [Oe, nt] = It.useState(!1);
  async function ge(Le) {
    if (Le.preventDefault(), !S) {
      Z("Please select a company.");
      return;
    }
    Z(""), nt(!0);
    try {
      await dc(`${q}/custodians/transfer/`, {
        method: "POST",
        body: JSON.stringify({
          stock_item: B,
          new_company: Number(S),
          transfer_date: ie,
          notes: Ye
        })
      }), Xe();
    } catch (He) {
      Z(He.message);
    } finally {
      nt(!1);
    }
  }
  const Mt = N.filter((Le) => Le.id !== (Be == null ? void 0 : Be.company));
  return /* @__PURE__ */ Y.jsxs("form", { onSubmit: ge, style: { marginTop: 12 }, children: [
    ne && /* @__PURE__ */ Y.jsx(uv, { msg: ne }),
    Be && /* @__PURE__ */ Y.jsxs("p", { style: { fontSize: "12px", color: "#6b7280", margin: "0 0 10px" }, children: [
      "Current custodian: ",
      /* @__PURE__ */ Y.jsx("strong", { children: Be.company_detail.name }),
      " (since ",
      fc(Be.start_date),
      ")"
    ] }),
    /* @__PURE__ */ Y.jsx("label", { style: eu, children: "New Custodian" }),
    /* @__PURE__ */ Y.jsxs("select", { value: S, onChange: (Le) => it(Le.target.value), style: Zl, required: !0, children: [
      /* @__PURE__ */ Y.jsx("option", { value: "", children: "— select company —" }),
      Mt.map((Le) => /* @__PURE__ */ Y.jsx("option", { value: Le.id, children: Le.name }, Le.id))
    ] }),
    /* @__PURE__ */ Y.jsx("label", { style: eu, children: "Effective Date" }),
    /* @__PURE__ */ Y.jsx(
      "input",
      {
        type: "date",
        value: ie,
        onChange: (Le) => re(Le.target.value),
        style: Zl,
        required: !0,
        max: qo()
      }
    ),
    /* @__PURE__ */ Y.jsx("label", { style: eu, children: "Notes (optional)" }),
    /* @__PURE__ */ Y.jsx(
      "input",
      {
        type: "text",
        value: Ye,
        onChange: (Le) => J(Le.target.value),
        style: Zl,
        placeholder: "e.g. Volcafe paid invoice #1234"
      }
    ),
    /* @__PURE__ */ Y.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 12 }, children: [
      /* @__PURE__ */ Y.jsx("button", { type: "submit", disabled: Oe, style: wE, children: Oe ? "Transferring…" : "Transfer Custody" }),
      /* @__PURE__ */ Y.jsx("button", { type: "button", onClick: We, style: ov, children: "Cancel" })
    ] })
  ] });
}
function gD({
  apiBase: q,
  stockItemId: B,
  companies: N,
  onDone: Be,
  onCancel: Xe
}) {
  const [We, S] = It.useState(""), [it, ie] = It.useState(qo()), [re, Ye] = It.useState(""), [J, ne] = It.useState(""), [Z, Oe] = It.useState(!1);
  async function nt(ge) {
    if (ge.preventDefault(), !We) {
      ne("Please select a company.");
      return;
    }
    ne(""), Oe(!0);
    try {
      await dc(`${q}/interests/`, {
        method: "POST",
        body: JSON.stringify({
          stock_item: B,
          company: Number(We),
          start_date: it,
          notes: re
        })
      }), Be();
    } catch (Mt) {
      ne(Mt.message);
    } finally {
      Oe(!1);
    }
  }
  return /* @__PURE__ */ Y.jsxs("form", { onSubmit: nt, style: { marginTop: 12 }, children: [
    J && /* @__PURE__ */ Y.jsx(uv, { msg: J }),
    /* @__PURE__ */ Y.jsx("label", { style: eu, children: "Company" }),
    /* @__PURE__ */ Y.jsxs("select", { value: We, onChange: (ge) => S(ge.target.value), style: Zl, required: !0, children: [
      /* @__PURE__ */ Y.jsx("option", { value: "", children: "— select company —" }),
      N.map((ge) => /* @__PURE__ */ Y.jsx("option", { value: ge.id, children: ge.name }, ge.id))
    ] }),
    /* @__PURE__ */ Y.jsx("label", { style: eu, children: "Start Date" }),
    /* @__PURE__ */ Y.jsx(
      "input",
      {
        type: "date",
        value: it,
        onChange: (ge) => ie(ge.target.value),
        style: Zl,
        required: !0,
        max: qo()
      }
    ),
    /* @__PURE__ */ Y.jsx("label", { style: eu, children: "Notes (optional)" }),
    /* @__PURE__ */ Y.jsx(
      "input",
      {
        type: "text",
        value: re,
        onChange: (ge) => Ye(ge.target.value),
        style: Zl,
        placeholder: "e.g. Agreed purchase pending payment"
      }
    ),
    /* @__PURE__ */ Y.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 12 }, children: [
      /* @__PURE__ */ Y.jsx("button", { type: "submit", disabled: Z, style: wE, children: Z ? "Adding…" : "Add Interest" }),
      /* @__PURE__ */ Y.jsx("button", { type: "button", onClick: Xe, style: ov, children: "Cancel" })
    ] })
  ] });
}
function SD({
  apiBase: q,
  interest: B,
  onDone: N,
  onCancel: Be
}) {
  const [Xe, We] = It.useState(qo()), [S, it] = It.useState(""), [ie, re] = It.useState(!1);
  async function Ye(J) {
    J.preventDefault(), it(""), re(!0);
    try {
      await dc(`${q}/interests/${B.id}/close/`, {
        method: "POST",
        body: JSON.stringify({ end_date: Xe })
      }), N();
    } catch (ne) {
      it(ne.message);
    } finally {
      re(!1);
    }
  }
  return /* @__PURE__ */ Y.jsxs("form", { onSubmit: Ye, style: { marginTop: 8 }, children: [
    S && /* @__PURE__ */ Y.jsx(uv, { msg: S }),
    /* @__PURE__ */ Y.jsxs("p", { style: { fontSize: "12px", color: "#6b7280", margin: "0 0 8px" }, children: [
      "Close interest for ",
      /* @__PURE__ */ Y.jsx("strong", { children: B.company_detail.name })
    ] }),
    /* @__PURE__ */ Y.jsx("label", { style: eu, children: "End Date" }),
    /* @__PURE__ */ Y.jsx(
      "input",
      {
        type: "date",
        value: Xe,
        onChange: (J) => We(J.target.value),
        style: Zl,
        required: !0,
        min: B.start_date,
        max: qo()
      }
    ),
    /* @__PURE__ */ Y.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 8 }, children: [
      /* @__PURE__ */ Y.jsx("button", { type: "submit", disabled: ie, style: RD, children: ie ? "Closing…" : "Close Interest" }),
      /* @__PURE__ */ Y.jsx("button", { type: "button", onClick: Be, style: ov, children: "Cancel" })
    ] })
  ] });
}
function ED({
  apiBase: q,
  stockItemId: B,
  companies: N,
  onDone: Be,
  onCancel: Xe
}) {
  const [We, S] = It.useState(""), [it, ie] = It.useState(qo()), [re, Ye] = It.useState(""), [J, ne] = It.useState(""), [Z, Oe] = It.useState(!1);
  async function nt(ge) {
    if (ge.preventDefault(), !We) {
      ne("Please select a company.");
      return;
    }
    ne(""), Oe(!0);
    try {
      await dc(`${q}/custodians/`, {
        method: "POST",
        body: JSON.stringify({
          stock_item: B,
          company: Number(We),
          start_date: it,
          notes: re
        })
      }), Be();
    } catch (Mt) {
      ne(Mt.message);
    } finally {
      Oe(!1);
    }
  }
  return /* @__PURE__ */ Y.jsxs("form", { onSubmit: nt, style: { marginTop: 12 }, children: [
    J && /* @__PURE__ */ Y.jsx(uv, { msg: J }),
    /* @__PURE__ */ Y.jsx("label", { style: eu, children: "Custodian Company" }),
    /* @__PURE__ */ Y.jsxs("select", { value: We, onChange: (ge) => S(ge.target.value), style: Zl, required: !0, children: [
      /* @__PURE__ */ Y.jsx("option", { value: "", children: "— select company —" }),
      N.map((ge) => /* @__PURE__ */ Y.jsx("option", { value: ge.id, children: ge.name }, ge.id))
    ] }),
    /* @__PURE__ */ Y.jsx("label", { style: eu, children: "Start Date" }),
    /* @__PURE__ */ Y.jsx(
      "input",
      {
        type: "date",
        value: it,
        onChange: (ge) => ie(ge.target.value),
        style: Zl,
        required: !0,
        max: qo()
      }
    ),
    /* @__PURE__ */ Y.jsx("label", { style: eu, children: "Notes (optional)" }),
    /* @__PURE__ */ Y.jsx(
      "input",
      {
        type: "text",
        value: re,
        onChange: (ge) => Ye(ge.target.value),
        style: Zl
      }
    ),
    /* @__PURE__ */ Y.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 12 }, children: [
      /* @__PURE__ */ Y.jsx("button", { type: "submit", disabled: Z, style: wE, children: Z ? "Setting…" : "Set Custodian" }),
      /* @__PURE__ */ Y.jsx("button", { type: "button", onClick: Xe, style: ov, children: "Cancel" })
    ] })
  ] });
}
function CD({ stockItemId: q, apiBase: B }) {
  const [N, Be] = It.useState([]), [Xe, We] = It.useState([]), [S, it] = It.useState([]), [ie, re] = It.useState(!0), [Ye, J] = It.useState(""), [ne, Z] = It.useState(null), [Oe, nt] = It.useState(!1), [ge, Mt] = It.useState(!1), Le = It.useCallback(async () => {
    re(!0), J("");
    try {
      const [Re, Dt, $t] = await Promise.all([
        dc(`${B}/custodians/?stock_item=${q}`),
        dc(`${B}/interests/?stock_item=${q}`),
        dc("/api/company/?is_customer=true&limit=500")
      ]);
      Be(Re.results ?? Re), We(Dt.results ?? Dt), it(
        ($t.results ?? $t).map((Qt) => ({ id: Qt.pk, name: Qt.name }))
      );
    } catch (Re) {
      J(Re.message);
    } finally {
      re(!1);
    }
  }, [B, q]);
  It.useEffect(() => {
    Le();
  }, [Le]);
  function He() {
    Z(null), Le();
  }
  if (ie)
    return /* @__PURE__ */ Y.jsx("div", { style: { padding: 16, color: "#6b7280", fontSize: 13 }, children: "Loading TRW Storage data…" });
  if (Ye)
    return /* @__PURE__ */ Y.jsxs("div", { style: { padding: 16 }, children: [
      /* @__PURE__ */ Y.jsx(uv, { msg: Ye }),
      /* @__PURE__ */ Y.jsx("button", { onClick: Le, style: ov, children: "Retry" })
    ] });
  const et = N.find((Re) => Re.end_date === null) ?? null, be = N.filter((Re) => Re.end_date !== null), ut = Xe.filter((Re) => Re.end_date === null), je = Xe.filter((Re) => Re.end_date !== null);
  return /* @__PURE__ */ Y.jsxs("div", { style: { padding: "12px 16px", fontFamily: "inherit", fontSize: 13 }, children: [
    /* @__PURE__ */ Y.jsxs("div", { style: { marginBottom: 20 }, children: [
      /* @__PURE__ */ Y.jsx(yT, { title: "Custodian (Billing Party)" }),
      et ? /* @__PURE__ */ Y.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ Y.jsx("span", { style: { fontWeight: 600, color: "#111" }, children: et.company_detail.name }),
        /* @__PURE__ */ Y.jsx(gT, { label: `since ${fc(et.start_date)}`, color: "#2563eb" }),
        et.notes && /* @__PURE__ */ Y.jsx("span", { style: { color: "#9ca3af", fontSize: 11 }, children: et.notes })
      ] }) : /* @__PURE__ */ Y.jsx("p", { style: { color: "#9ca3af", fontSize: 12, margin: "0 0 8px" }, children: "No custodian assigned." }),
      ne === "transfer-custody" && /* @__PURE__ */ Y.jsx(
        yD,
        {
          apiBase: B,
          stockItemId: q,
          companies: S,
          currentCustodian: et,
          onDone: He,
          onCancel: () => Z(null)
        }
      ),
      ne === "set-custodian" && /* @__PURE__ */ Y.jsx(
        ED,
        {
          apiBase: B,
          stockItemId: q,
          companies: S,
          onDone: He,
          onCancel: () => Z(null)
        }
      ),
      ne === null && /* @__PURE__ */ Y.jsx("div", { style: { display: "flex", gap: 8, marginBottom: 4 }, children: et ? /* @__PURE__ */ Y.jsx("button", { onClick: () => Z("transfer-custody"), style: EE, children: "Transfer Custody" }) : /* @__PURE__ */ Y.jsx("button", { onClick: () => Z("set-custodian"), style: EE, children: "Set Custodian" }) }),
      be.length > 0 && /* @__PURE__ */ Y.jsxs("div", { style: { marginTop: 8 }, children: [
        /* @__PURE__ */ Y.jsxs(
          "button",
          {
            onClick: () => nt((Re) => !Re),
            style: { ...CE, fontSize: 11 },
            children: [
              Oe ? "Hide" : "Show",
              " history (",
              be.length,
              ")"
            ]
          }
        ),
        Oe && /* @__PURE__ */ Y.jsxs("table", { style: ST, children: [
          /* @__PURE__ */ Y.jsx("thead", { children: /* @__PURE__ */ Y.jsxs("tr", { children: [
            /* @__PURE__ */ Y.jsx("th", { style: Qo, children: "Company" }),
            /* @__PURE__ */ Y.jsx("th", { style: Qo, children: "From" }),
            /* @__PURE__ */ Y.jsx("th", { style: Qo, children: "To" }),
            /* @__PURE__ */ Y.jsx("th", { style: Qo, children: "Notes" })
          ] }) }),
          /* @__PURE__ */ Y.jsx("tbody", { children: be.map((Re) => /* @__PURE__ */ Y.jsxs("tr", { children: [
            /* @__PURE__ */ Y.jsx("td", { style: Go, children: Re.company_detail.name }),
            /* @__PURE__ */ Y.jsx("td", { style: Go, children: fc(Re.start_date) }),
            /* @__PURE__ */ Y.jsx("td", { style: Go, children: fc(Re.end_date) }),
            /* @__PURE__ */ Y.jsx("td", { style: { ...Go, color: "#9ca3af" }, children: Re.notes || "—" })
          ] }, Re.id)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ Y.jsxs("div", { children: [
      /* @__PURE__ */ Y.jsx(yT, { title: "Interests" }),
      ut.length === 0 && /* @__PURE__ */ Y.jsx("p", { style: { color: "#9ca3af", fontSize: 12, margin: "0 0 8px" }, children: "No active interests." }),
      ut.map((Re) => /* @__PURE__ */ Y.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }, children: [
        /* @__PURE__ */ Y.jsx("span", { style: { fontWeight: 600, color: "#111", minWidth: 140 }, children: Re.company_detail.name }),
        /* @__PURE__ */ Y.jsx(gT, { label: `since ${fc(Re.start_date)}`, color: "#059669" }),
        Re.notes && /* @__PURE__ */ Y.jsx("span", { style: { color: "#9ca3af", fontSize: 11 }, children: Re.notes }),
        ne === null && /* @__PURE__ */ Y.jsx(
          "button",
          {
            onClick: () => Z({ type: "close-interest", interest: Re }),
            style: { ...CE, color: "#dc2626", fontSize: 11 },
            children: "Close"
          }
        ),
        typeof ne == "object" && ne !== null && ne.type === "close-interest" && ne.interest.id === Re.id && /* @__PURE__ */ Y.jsx(
          SD,
          {
            apiBase: B,
            interest: Re,
            onDone: He,
            onCancel: () => Z(null)
          }
        )
      ] }, Re.id)),
      ne === "add-interest" && /* @__PURE__ */ Y.jsx(
        gD,
        {
          apiBase: B,
          stockItemId: q,
          companies: S,
          onDone: He,
          onCancel: () => Z(null)
        }
      ),
      ne === null && /* @__PURE__ */ Y.jsx("button", { onClick: () => Z("add-interest"), style: { ...EE, marginTop: 4 }, children: "Add Interest" }),
      je.length > 0 && /* @__PURE__ */ Y.jsxs("div", { style: { marginTop: 8 }, children: [
        /* @__PURE__ */ Y.jsxs(
          "button",
          {
            onClick: () => Mt((Re) => !Re),
            style: { ...CE, fontSize: 11 },
            children: [
              ge ? "Hide" : "Show",
              " closed interests (",
              je.length,
              ")"
            ]
          }
        ),
        ge && /* @__PURE__ */ Y.jsxs("table", { style: ST, children: [
          /* @__PURE__ */ Y.jsx("thead", { children: /* @__PURE__ */ Y.jsxs("tr", { children: [
            /* @__PURE__ */ Y.jsx("th", { style: Qo, children: "Company" }),
            /* @__PURE__ */ Y.jsx("th", { style: Qo, children: "From" }),
            /* @__PURE__ */ Y.jsx("th", { style: Qo, children: "To" }),
            /* @__PURE__ */ Y.jsx("th", { style: Qo, children: "Notes" })
          ] }) }),
          /* @__PURE__ */ Y.jsx("tbody", { children: je.map((Re) => /* @__PURE__ */ Y.jsxs("tr", { children: [
            /* @__PURE__ */ Y.jsx("td", { style: Go, children: Re.company_detail.name }),
            /* @__PURE__ */ Y.jsx("td", { style: Go, children: fc(Re.start_date) }),
            /* @__PURE__ */ Y.jsx("td", { style: Go, children: fc(Re.end_date) }),
            /* @__PURE__ */ Y.jsx("td", { style: { ...Go, color: "#9ca3af" }, children: Re.notes || "—" })
          ] }, Re.id)) })
        ] })
      ] })
    ] })
  ] });
}
const Zl = {
  display: "block",
  width: "100%",
  padding: "5px 8px",
  border: "1px solid #d1d5db",
  borderRadius: 4,
  fontSize: 12,
  marginBottom: 8,
  boxSizing: "border-box"
}, eu = {
  display: "block",
  fontSize: 11,
  fontWeight: 600,
  color: "#374151",
  marginBottom: 2,
  textTransform: "uppercase",
  letterSpacing: "0.04em"
}, wE = {
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: 4,
  padding: "5px 12px",
  fontSize: 12,
  cursor: "pointer",
  fontWeight: 500
}, ov = {
  background: "#f3f4f6",
  color: "#374151",
  border: "1px solid #d1d5db",
  borderRadius: 4,
  padding: "5px 12px",
  fontSize: 12,
  cursor: "pointer"
}, RD = {
  background: "#dc2626",
  color: "#fff",
  border: "none",
  borderRadius: 4,
  padding: "5px 12px",
  fontSize: 12,
  cursor: "pointer",
  fontWeight: 500
}, EE = {
  background: "#f3f4f6",
  color: "#374151",
  border: "1px solid #d1d5db",
  borderRadius: 4,
  padding: "3px 10px",
  fontSize: 11,
  cursor: "pointer"
}, CE = {
  background: "none",
  border: "none",
  color: "#2563eb",
  cursor: "pointer",
  padding: 0,
  textDecoration: "underline",
  fontSize: 12
}, ST = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: 6,
  fontSize: 11
}, Qo = {
  textAlign: "left",
  padding: "3px 6px",
  borderBottom: "1px solid #e5e7eb",
  color: "#6b7280",
  fontWeight: 600
}, Go = {
  padding: "3px 6px",
  borderBottom: "1px solid #f3f4f6",
  color: "#374151"
};
function wD(q, B) {
  const N = (B == null ? void 0 : B.context) ?? B;
  bE(q).render(/* @__PURE__ */ Y.jsx(CD, { ...N }));
}
export {
  wD as renderPanel
};
