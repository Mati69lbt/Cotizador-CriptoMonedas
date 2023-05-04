function uf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function sf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var js = { exports: {} },
  _l = {},
  Is = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dr = Symbol.for("react.element"),
  af = Symbol.for("react.portal"),
  cf = Symbol.for("react.fragment"),
  ff = Symbol.for("react.strict_mode"),
  df = Symbol.for("react.profiler"),
  pf = Symbol.for("react.provider"),
  mf = Symbol.for("react.context"),
  hf = Symbol.for("react.forward_ref"),
  vf = Symbol.for("react.suspense"),
  yf = Symbol.for("react.memo"),
  gf = Symbol.for("react.lazy"),
  hu = Symbol.iterator;
function wf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hu && e[hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ds = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Fs = Object.assign,
  As = {};
function gn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = As),
    (this.updater = n || Ds);
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $s() {}
$s.prototype = gn.prototype;
function yo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = As),
    (this.updater = n || Ds);
}
var go = (yo.prototype = new $s());
go.constructor = yo;
Fs(go, gn.prototype);
go.isPureReactComponent = !0;
var vu = Array.isArray,
  Us = Object.prototype.hasOwnProperty,
  wo = { current: null },
  Vs = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Us.call(t, r) && !Vs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: dr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: wo.current,
  };
}
function Sf(e, t) {
  return {
    $$typeof: dr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function So(e) {
  return typeof e == "object" && e !== null && e.$$typeof === dr;
}
function kf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var yu = /\/+/g;
function Yl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? kf("" + e.key)
    : t.toString(36);
}
function $r(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case dr:
          case af:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Yl(o, 0) : r),
      vu(l)
        ? ((n = ""),
          e != null && (n = e.replace(yu, "$&/") + "/"),
          $r(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (So(l) &&
            (l = Sf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(yu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), vu(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Yl(i, u);
      o += $r(i, t, n, s, l);
    }
  else if (((s = wf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Yl(i, u++)), (o += $r(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Sr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    $r(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function xf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null },
  Ur = { transition: null },
  Ef = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: Ur,
    ReactCurrentOwner: wo,
  };
O.Children = {
  map: Sr,
  forEach: function (e, t, n) {
    Sr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Sr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Sr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!So(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
O.Component = gn;
O.Fragment = cf;
O.Profiler = df;
O.PureComponent = yo;
O.StrictMode = ff;
O.Suspense = vf;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ef;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Fs({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = wo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Us.call(t, s) &&
        !Vs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: dr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: mf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: pf, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = Hs;
O.createFactory = function (e) {
  var t = Hs.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: hf, render: e };
};
O.isValidElement = So;
O.lazy = function (e) {
  return { $$typeof: gf, _payload: { _status: -1, _result: e }, _init: xf };
};
O.memo = function (e, t) {
  return { $$typeof: yf, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Ur.transition;
  Ur.transition = {};
  try {
    e();
  } finally {
    Ur.transition = t;
  }
};
O.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
O.useCallback = function (e, t) {
  return pe.current.useCallback(e, t);
};
O.useContext = function (e) {
  return pe.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return pe.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return pe.current.useEffect(e, t);
};
O.useId = function () {
  return pe.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return pe.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return pe.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return pe.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return pe.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return pe.current.useRef(e);
};
O.useState = function (e) {
  return pe.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return pe.current.useTransition();
};
O.version = "18.2.0";
Is.exports = O;
var K = Is.exports;
const Bs = sf(K),
  gu = uf({ __proto__: null, default: Bs }, [K]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cf = K,
  _f = Symbol.for("react.element"),
  Pf = Symbol.for("react.fragment"),
  Nf = Object.prototype.hasOwnProperty,
  zf = Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Tf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ws(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Nf.call(t, r) && !Tf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: _f,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: zf.current,
  };
}
_l.Fragment = Pf;
_l.jsx = Ws;
_l.jsxs = Ws;
js.exports = _l;
var z = js.exports,
  Si = {},
  Qs = { exports: {} },
  Ne = {},
  Ks = { exports: {} },
  Ys = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, T) {
    var R = _.length;
    _.push(T);
    e: for (; 0 < R; ) {
      var Y = (R - 1) >>> 1,
        b = _[Y];
      if (0 < l(b, T)) (_[Y] = T), (_[R] = b), (R = Y);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var T = _[0],
      R = _.pop();
    if (R !== T) {
      _[0] = R;
      e: for (var Y = 0, b = _.length, gr = b >>> 1; Y < gr; ) {
        var Nt = 2 * (Y + 1) - 1,
          Kl = _[Nt],
          zt = Nt + 1,
          wr = _[zt];
        if (0 > l(Kl, R))
          zt < b && 0 > l(wr, Kl)
            ? ((_[Y] = wr), (_[zt] = R), (Y = zt))
            : ((_[Y] = Kl), (_[Nt] = R), (Y = Nt));
        else if (zt < b && 0 > l(wr, R)) (_[Y] = wr), (_[zt] = R), (Y = zt);
        else break e;
      }
    }
    return T;
  }
  function l(_, T) {
    var R = _.sortIndex - T.sortIndex;
    return R !== 0 ? R : _.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    f = [],
    m = 1,
    p = null,
    h = 3,
    S = !1,
    g = !1,
    v = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    c = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var T = n(f); T !== null; ) {
      if (T.callback === null) r(f);
      else if (T.startTime <= _)
        r(f), (T.sortIndex = T.expirationTime), t(s, T);
      else break;
      T = n(f);
    }
  }
  function y(_) {
    if (((v = !1), d(_), !g))
      if (n(s) !== null) (g = !0), Wl(x);
      else {
        var T = n(f);
        T !== null && Ql(y, T.startTime - _);
      }
  }
  function x(_, T) {
    (g = !1), v && ((v = !1), c(P), (P = -1)), (S = !0);
    var R = h;
    try {
      for (
        d(T), p = n(s);
        p !== null && (!(p.expirationTime > T) || (_ && !Ie()));

      ) {
        var Y = p.callback;
        if (typeof Y == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var b = Y(p.expirationTime <= T);
          (T = e.unstable_now()),
            typeof b == "function" ? (p.callback = b) : p === n(s) && r(s),
            d(T);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var gr = !0;
      else {
        var Nt = n(f);
        Nt !== null && Ql(y, Nt.startTime - T), (gr = !1);
      }
      return gr;
    } finally {
      (p = null), (h = R), (S = !1);
    }
  }
  var E = !1,
    k = null,
    P = -1,
    F = 5,
    L = -1;
  function Ie() {
    return !(e.unstable_now() - L < F);
  }
  function xn() {
    if (k !== null) {
      var _ = e.unstable_now();
      L = _;
      var T = !0;
      try {
        T = k(!0, _);
      } finally {
        T ? En() : ((E = !1), (k = null));
      }
    } else E = !1;
  }
  var En;
  if (typeof a == "function")
    En = function () {
      a(xn);
    };
  else if (typeof MessageChannel < "u") {
    var mu = new MessageChannel(),
      of = mu.port2;
    (mu.port1.onmessage = xn),
      (En = function () {
        of.postMessage(null);
      });
  } else
    En = function () {
      N(xn, 0);
    };
  function Wl(_) {
    (k = _), E || ((E = !0), En());
  }
  function Ql(_, T) {
    P = N(function () {
      _(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || S || ((g = !0), Wl(x));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = h;
      }
      var R = h;
      h = T;
      try {
        return _();
      } finally {
        h = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, T) {
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
      var R = h;
      h = _;
      try {
        return T();
      } finally {
        h = R;
      }
    }),
    (e.unstable_scheduleCallback = function (_, T, R) {
      var Y = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? Y + R : Y))
          : (R = Y),
        _)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = R + b),
        (_ = {
          id: m++,
          callback: T,
          priorityLevel: _,
          startTime: R,
          expirationTime: b,
          sortIndex: -1,
        }),
        R > Y
          ? ((_.sortIndex = R),
            t(f, _),
            n(s) === null &&
              _ === n(f) &&
              (v ? (c(P), (P = -1)) : (v = !0), Ql(y, R - Y)))
          : ((_.sortIndex = b), t(s, _), g || S || ((g = !0), Wl(x))),
        _
      );
    }),
    (e.unstable_shouldYield = Ie),
    (e.unstable_wrapCallback = function (_) {
      var T = h;
      return function () {
        var R = h;
        h = T;
        try {
          return _.apply(this, arguments);
        } finally {
          h = R;
        }
      };
    });
})(Ys);
Ks.exports = Ys;
var Lf = Ks.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gs = K,
  _e = Lf;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Xs = new Set(),
  Kn = {};
function Vt(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) Xs.add(t[e]);
}
var nt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ki = Object.prototype.hasOwnProperty,
  Rf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wu = {},
  Su = {};
function Of(e) {
  return ki.call(Su, e)
    ? !0
    : ki.call(wu, e)
    ? !1
    : Rf.test(e)
    ? (Su[e] = !0)
    : ((wu[e] = !0), !1);
}
function Mf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function jf(e, t, n, r) {
  if (t === null || typeof t > "u" || Mf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function me(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ko = /[\-:]([a-z])/g;
function xo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ko, xo);
    ie[t] = new me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ko, xo);
    ie[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ko, xo);
  ie[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Eo(e, t, n, r) {
  var l = ie.hasOwnProperty(t) ? ie[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (jf(t, n, l, r) && (n = null),
    r || l === null
      ? Of(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = Gs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  kr = Symbol.for("react.element"),
  Wt = Symbol.for("react.portal"),
  Qt = Symbol.for("react.fragment"),
  Co = Symbol.for("react.strict_mode"),
  xi = Symbol.for("react.profiler"),
  Zs = Symbol.for("react.provider"),
  Js = Symbol.for("react.context"),
  _o = Symbol.for("react.forward_ref"),
  Ei = Symbol.for("react.suspense"),
  Ci = Symbol.for("react.suspense_list"),
  Po = Symbol.for("react.memo"),
  st = Symbol.for("react.lazy"),
  qs = Symbol.for("react.offscreen"),
  ku = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ku && e[ku]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Gl;
function Mn(e) {
  if (Gl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gl = (t && t[1]) || "";
    }
  return (
    `
` +
    Gl +
    e
  );
}
var Xl = !1;
function Zl(e, t) {
  if (!e || Xl) return "";
  Xl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Xl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Mn(e) : "";
}
function If(e) {
  switch (e.tag) {
    case 5:
      return Mn(e.type);
    case 16:
      return Mn("Lazy");
    case 13:
      return Mn("Suspense");
    case 19:
      return Mn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Zl(e.type, !1)), e;
    case 11:
      return (e = Zl(e.type.render, !1)), e;
    case 1:
      return (e = Zl(e.type, !0)), e;
    default:
      return "";
  }
}
function _i(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qt:
      return "Fragment";
    case Wt:
      return "Portal";
    case xi:
      return "Profiler";
    case Co:
      return "StrictMode";
    case Ei:
      return "Suspense";
    case Ci:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Js:
        return (e.displayName || "Context") + ".Consumer";
      case Zs:
        return (e._context.displayName || "Context") + ".Provider";
      case _o:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Po:
        return (
          (t = e.displayName || null), t !== null ? t : _i(e.type) || "Memo"
        );
      case st:
        (t = e._payload), (e = e._init);
        try {
          return _i(e(t));
        } catch {}
    }
  return null;
}
function Df(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return _i(t);
    case 8:
      return t === Co ? "StrictMode" : "Mode";
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
function bs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ff(e) {
  var t = bs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xr(e) {
  e._valueTracker || (e._valueTracker = Ff(e));
}
function ea(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = bs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function el(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pi(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function xu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = xt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ta(e, t) {
  (t = t.checked), t != null && Eo(e, "checked", t, !1);
}
function Ni(e, t) {
  ta(e, t);
  var n = xt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? zi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && zi(e, t.type, xt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Eu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function zi(e, t, n) {
  (t !== "number" || el(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jn = Array.isArray;
function nn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ti(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Cu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (jn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: xt(n) };
}
function na(e, t) {
  var n = xt(t.value),
    r = xt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function _u(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ra(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ra(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Er,
  la = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Er = Er || document.createElement("div"),
          Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Er.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yn(e, t) {
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
    strokeWidth: !0,
  },
  Af = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function (e) {
  Af.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]);
  });
});
function ia(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
    ? ("" + t).trim()
    : t + "px";
}
function oa(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ia(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var $f = W(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function Ri(e, t) {
  if (t) {
    if ($f[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function Oi(e, t) {
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
var Mi = null;
function No(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ji = null,
  rn = null,
  ln = null;
function Pu(e) {
  if ((e = hr(e))) {
    if (typeof ji != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = Ll(t)), ji(e.stateNode, e.type, t));
  }
}
function ua(e) {
  rn ? (ln ? ln.push(e) : (ln = [e])) : (rn = e);
}
function sa() {
  if (rn) {
    var e = rn,
      t = ln;
    if (((ln = rn = null), Pu(e), t)) for (e = 0; e < t.length; e++) Pu(t[e]);
  }
}
function aa(e, t) {
  return e(t);
}
function ca() {}
var Jl = !1;
function fa(e, t, n) {
  if (Jl) return e(t, n);
  Jl = !0;
  try {
    return aa(e, t, n);
  } finally {
    (Jl = !1), (rn !== null || ln !== null) && (ca(), sa());
  }
}
function Gn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ll(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var Ii = !1;
if (nt)
  try {
    var _n = {};
    Object.defineProperty(_n, "passive", {
      get: function () {
        Ii = !0;
      },
    }),
      window.addEventListener("test", _n, _n),
      window.removeEventListener("test", _n, _n);
  } catch {
    Ii = !1;
  }
function Uf(e, t, n, r, l, i, o, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (m) {
    this.onError(m);
  }
}
var An = !1,
  tl = null,
  nl = !1,
  Di = null,
  Vf = {
    onError: function (e) {
      (An = !0), (tl = e);
    },
  };
function Hf(e, t, n, r, l, i, o, u, s) {
  (An = !1), (tl = null), Uf.apply(Vf, arguments);
}
function Bf(e, t, n, r, l, i, o, u, s) {
  if ((Hf.apply(this, arguments), An)) {
    if (An) {
      var f = tl;
      (An = !1), (tl = null);
    } else throw Error(w(198));
    nl || ((nl = !0), (Di = f));
  }
}
function Ht(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function da(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Nu(e) {
  if (Ht(e) !== e) throw Error(w(188));
}
function Wf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ht(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Nu(l), e;
        if (i === r) return Nu(l), t;
        i = i.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function pa(e) {
  return (e = Wf(e)), e !== null ? ma(e) : null;
}
function ma(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ma(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ha = _e.unstable_scheduleCallback,
  zu = _e.unstable_cancelCallback,
  Qf = _e.unstable_shouldYield,
  Kf = _e.unstable_requestPaint,
  G = _e.unstable_now,
  Yf = _e.unstable_getCurrentPriorityLevel,
  zo = _e.unstable_ImmediatePriority,
  va = _e.unstable_UserBlockingPriority,
  rl = _e.unstable_NormalPriority,
  Gf = _e.unstable_LowPriority,
  ya = _e.unstable_IdlePriority,
  Pl = null,
  Ge = null;
function Xf(e) {
  if (Ge && typeof Ge.onCommitFiberRoot == "function")
    try {
      Ge.onCommitFiberRoot(Pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ue = Math.clz32 ? Math.clz32 : qf,
  Zf = Math.log,
  Jf = Math.LN2;
function qf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Zf(e) / Jf) | 0)) | 0;
}
var Cr = 64,
  _r = 4194304;
function In(e) {
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
function ll(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = In(u)) : ((i &= o), i !== 0 && (r = In(i)));
  } else (o = n & ~l), o !== 0 ? (r = In(o)) : i !== 0 && (r = In(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ue(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function bf(e, t) {
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
function ed(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Ue(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = bf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Fi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ga() {
  var e = Cr;
  return (Cr <<= 1), !(Cr & 4194240) && (Cr = 64), e;
}
function ql(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ue(t)),
    (e[t] = n);
}
function td(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ue(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function To(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ue(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var D = 0;
function wa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Sa,
  Lo,
  ka,
  xa,
  Ea,
  Ai = !1,
  Pr = [],
  mt = null,
  ht = null,
  vt = null,
  Xn = new Map(),
  Zn = new Map(),
  ct = [],
  nd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Tu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mt = null;
      break;
    case "dragenter":
    case "dragleave":
      ht = null;
      break;
    case "mouseover":
    case "mouseout":
      vt = null;
      break;
    case "pointerover":
    case "pointerout":
      Xn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function Pn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = hr(t)), t !== null && Lo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function rd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (mt = Pn(mt, e, t, n, r, l)), !0;
    case "dragenter":
      return (ht = Pn(ht, e, t, n, r, l)), !0;
    case "mouseover":
      return (vt = Pn(vt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Xn.set(i, Pn(Xn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Zn.set(i, Pn(Zn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ca(e) {
  var t = Rt(e.target);
  if (t !== null) {
    var n = Ht(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = da(n)), t !== null)) {
          (e.blockedOn = t),
            Ea(e.priority, function () {
              ka(n);
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
function Vr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Mi = r), n.target.dispatchEvent(r), (Mi = null);
    } else return (t = hr(n)), t !== null && Lo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Lu(e, t, n) {
  Vr(e) && n.delete(t);
}
function ld() {
  (Ai = !1),
    mt !== null && Vr(mt) && (mt = null),
    ht !== null && Vr(ht) && (ht = null),
    vt !== null && Vr(vt) && (vt = null),
    Xn.forEach(Lu),
    Zn.forEach(Lu);
}
function Nn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ai ||
      ((Ai = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, ld)));
}
function Jn(e) {
  function t(l) {
    return Nn(l, e);
  }
  if (0 < Pr.length) {
    Nn(Pr[0], e);
    for (var n = 1; n < Pr.length; n++) {
      var r = Pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    mt !== null && Nn(mt, e),
      ht !== null && Nn(ht, e),
      vt !== null && Nn(vt, e),
      Xn.forEach(t),
      Zn.forEach(t),
      n = 0;
    n < ct.length;
    n++
  )
    (r = ct[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ct.length && ((n = ct[0]), n.blockedOn === null); )
    Ca(n), n.blockedOn === null && ct.shift();
}
var on = ot.ReactCurrentBatchConfig,
  il = !0;
function id(e, t, n, r) {
  var l = D,
    i = on.transition;
  on.transition = null;
  try {
    (D = 1), Ro(e, t, n, r);
  } finally {
    (D = l), (on.transition = i);
  }
}
function od(e, t, n, r) {
  var l = D,
    i = on.transition;
  on.transition = null;
  try {
    (D = 4), Ro(e, t, n, r);
  } finally {
    (D = l), (on.transition = i);
  }
}
function Ro(e, t, n, r) {
  if (il) {
    var l = $i(e, t, n, r);
    if (l === null) si(e, t, r, ol, n), Tu(e, r);
    else if (rd(l, e, t, n, r)) r.stopPropagation();
    else if ((Tu(e, r), t & 4 && -1 < nd.indexOf(e))) {
      for (; l !== null; ) {
        var i = hr(l);
        if (
          (i !== null && Sa(i),
          (i = $i(e, t, n, r)),
          i === null && si(e, t, r, ol, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else si(e, t, r, null, n);
  }
}
var ol = null;
function $i(e, t, n, r) {
  if (((ol = null), (e = No(r)), (e = Rt(e)), e !== null))
    if (((t = Ht(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = da(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ol = e), null;
}
function _a(e) {
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
      switch (Yf()) {
        case zo:
          return 1;
        case va:
          return 4;
        case rl:
        case Gf:
          return 16;
        case ya:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dt = null,
  Oo = null,
  Hr = null;
function Pa() {
  if (Hr) return Hr;
  var e,
    t = Oo,
    n = t.length,
    r,
    l = "value" in dt ? dt.value : dt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Hr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Br(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Nr() {
  return !0;
}
function Ru() {
  return !1;
}
function ze(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Nr
        : Ru),
      (this.isPropagationStopped = Ru),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Nr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Nr));
      },
      persist: function () {},
      isPersistent: Nr,
    }),
    t
  );
}
var wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Mo = ze(wn),
  mr = W({}, wn, { view: 0, detail: 0 }),
  ud = ze(mr),
  bl,
  ei,
  zn,
  Nl = W({}, mr, {
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
    getModifierState: jo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== zn &&
            (zn && e.type === "mousemove"
              ? ((bl = e.screenX - zn.screenX), (ei = e.screenY - zn.screenY))
              : (ei = bl = 0),
            (zn = e)),
          bl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ei;
    },
  }),
  Ou = ze(Nl),
  sd = W({}, Nl, { dataTransfer: 0 }),
  ad = ze(sd),
  cd = W({}, mr, { relatedTarget: 0 }),
  ti = ze(cd),
  fd = W({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dd = ze(fd),
  pd = W({}, wn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  md = ze(pd),
  hd = W({}, wn, { data: 0 }),
  Mu = ze(hd),
  vd = {
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
    MozPrintableKey: "Unidentified",
  },
  yd = {
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
    224: "Meta",
  },
  gd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function wd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gd[e]) ? !!t[e] : !1;
}
function jo() {
  return wd;
}
var Sd = W({}, mr, {
    key: function (e) {
      if (e.key) {
        var t = vd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Br(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? yd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jo,
    charCode: function (e) {
      return e.type === "keypress" ? Br(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Br(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  kd = ze(Sd),
  xd = W({}, Nl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ju = ze(xd),
  Ed = W({}, mr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jo,
  }),
  Cd = ze(Ed),
  _d = W({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Pd = ze(_d),
  Nd = W({}, Nl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  zd = ze(Nd),
  Td = [9, 13, 27, 32],
  Io = nt && "CompositionEvent" in window,
  $n = null;
nt && "documentMode" in document && ($n = document.documentMode);
var Ld = nt && "TextEvent" in window && !$n,
  Na = nt && (!Io || ($n && 8 < $n && 11 >= $n)),
  Iu = String.fromCharCode(32),
  Du = !1;
function za(e, t) {
  switch (e) {
    case "keyup":
      return Td.indexOf(t.keyCode) !== -1;
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
function Ta(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function Rd(e, t) {
  switch (e) {
    case "compositionend":
      return Ta(t);
    case "keypress":
      return t.which !== 32 ? null : ((Du = !0), Iu);
    case "textInput":
      return (e = t.data), e === Iu && Du ? null : e;
    default:
      return null;
  }
}
function Od(e, t) {
  if (Kt)
    return e === "compositionend" || (!Io && za(e, t))
      ? ((e = Pa()), (Hr = Oo = dt = null), (Kt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Na && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Md = {
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
  week: !0,
};
function Fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Md[e.type] : t === "textarea";
}
function La(e, t, n, r) {
  ua(r),
    (t = ul(t, "onChange")),
    0 < t.length &&
      ((n = new Mo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Un = null,
  qn = null;
function jd(e) {
  Va(e, 0);
}
function zl(e) {
  var t = Xt(e);
  if (ea(t)) return e;
}
function Id(e, t) {
  if (e === "change") return t;
}
var Ra = !1;
if (nt) {
  var ni;
  if (nt) {
    var ri = "oninput" in document;
    if (!ri) {
      var Au = document.createElement("div");
      Au.setAttribute("oninput", "return;"),
        (ri = typeof Au.oninput == "function");
    }
    ni = ri;
  } else ni = !1;
  Ra = ni && (!document.documentMode || 9 < document.documentMode);
}
function $u() {
  Un && (Un.detachEvent("onpropertychange", Oa), (qn = Un = null));
}
function Oa(e) {
  if (e.propertyName === "value" && zl(qn)) {
    var t = [];
    La(t, qn, e, No(e)), fa(jd, t);
  }
}
function Dd(e, t, n) {
  e === "focusin"
    ? ($u(), (Un = t), (qn = n), Un.attachEvent("onpropertychange", Oa))
    : e === "focusout" && $u();
}
function Fd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return zl(qn);
}
function Ad(e, t) {
  if (e === "click") return zl(t);
}
function $d(e, t) {
  if (e === "input" || e === "change") return zl(t);
}
function Ud(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : Ud;
function bn(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ki.call(t, l) || !He(e[l], t[l])) return !1;
  }
  return !0;
}
function Uu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vu(e, t) {
  var n = Uu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
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
    n = Uu(n);
  }
}
function Ma(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ma(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ja() {
  for (var e = window, t = el(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = el(e.document);
  }
  return t;
}
function Do(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Vd(e) {
  var t = ja(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ma(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Do(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Vu(n, i));
        var o = Vu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Hd = nt && "documentMode" in document && 11 >= document.documentMode,
  Yt = null,
  Ui = null,
  Vn = null,
  Vi = !1;
function Hu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vi ||
    Yt == null ||
    Yt !== el(r) ||
    ((r = Yt),
    "selectionStart" in r && Do(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Vn && bn(Vn, r)) ||
      ((Vn = r),
      (r = ul(Ui, "onSelect")),
      0 < r.length &&
        ((t = new Mo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Yt))));
}
function zr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Gt = {
    animationend: zr("Animation", "AnimationEnd"),
    animationiteration: zr("Animation", "AnimationIteration"),
    animationstart: zr("Animation", "AnimationStart"),
    transitionend: zr("Transition", "TransitionEnd"),
  },
  li = {},
  Ia = {};
nt &&
  ((Ia = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gt.animationend.animation,
    delete Gt.animationiteration.animation,
    delete Gt.animationstart.animation),
  "TransitionEvent" in window || delete Gt.transitionend.transition);
function Tl(e) {
  if (li[e]) return li[e];
  if (!Gt[e]) return e;
  var t = Gt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ia) return (li[e] = t[n]);
  return e;
}
var Da = Tl("animationend"),
  Fa = Tl("animationiteration"),
  Aa = Tl("animationstart"),
  $a = Tl("transitionend"),
  Ua = new Map(),
  Bu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ct(e, t) {
  Ua.set(e, t), Vt(t, [e]);
}
for (var ii = 0; ii < Bu.length; ii++) {
  var oi = Bu[ii],
    Bd = oi.toLowerCase(),
    Wd = oi[0].toUpperCase() + oi.slice(1);
  Ct(Bd, "on" + Wd);
}
Ct(Da, "onAnimationEnd");
Ct(Fa, "onAnimationIteration");
Ct(Aa, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct($a, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
Vt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Vt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Vt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Vt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Dn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Qd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));
function Wu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Bf(r, t, void 0, e), (e.currentTarget = null);
}
function Va(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          Wu(l, u, f), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          Wu(l, u, f), (i = s);
        }
    }
  }
  if (nl) throw ((e = Di), (nl = !1), (Di = null), e);
}
function $(e, t) {
  var n = t[Ki];
  n === void 0 && (n = t[Ki] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ha(t, e, 2, !1), n.add(r));
}
function ui(e, t, n) {
  var r = 0;
  t && (r |= 4), Ha(n, e, r, t);
}
var Tr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Tr]) {
    (e[Tr] = !0),
      Xs.forEach(function (n) {
        n !== "selectionchange" && (Qd.has(n) || ui(n, !1, e), ui(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tr] || ((t[Tr] = !0), ui("selectionchange", !1, t));
  }
}
function Ha(e, t, n, r) {
  switch (_a(t)) {
    case 1:
      var l = id;
      break;
    case 4:
      l = od;
      break;
    default:
      l = Ro;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ii ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function si(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Rt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  fa(function () {
    var f = i,
      m = No(n),
      p = [];
    e: {
      var h = Ua.get(e);
      if (h !== void 0) {
        var S = Mo,
          g = e;
        switch (e) {
          case "keypress":
            if (Br(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = kd;
            break;
          case "focusin":
            (g = "focus"), (S = ti);
            break;
          case "focusout":
            (g = "blur"), (S = ti);
            break;
          case "beforeblur":
          case "afterblur":
            S = ti;
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
            S = Ou;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = ad;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Cd;
            break;
          case Da:
          case Fa:
          case Aa:
            S = dd;
            break;
          case $a:
            S = Pd;
            break;
          case "scroll":
            S = ud;
            break;
          case "wheel":
            S = zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = md;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = ju;
        }
        var v = (t & 4) !== 0,
          N = !v && e === "scroll",
          c = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var a = f, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              c !== null && ((y = Gn(a, c)), y != null && v.push(tr(a, y, d)))),
            N)
          )
            break;
          a = a.return;
        }
        0 < v.length &&
          ((h = new S(h, g, null, n, m)), p.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Mi &&
            (g = n.relatedTarget || n.fromElement) &&
            (Rt(g) || g[rt]))
        )
          break e;
        if (
          (S || h) &&
          ((h =
            m.window === m
              ? m
              : (h = m.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          S
            ? ((g = n.relatedTarget || n.toElement),
              (S = f),
              (g = g ? Rt(g) : null),
              g !== null &&
                ((N = Ht(g)), g !== N || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((S = null), (g = f)),
          S !== g)
        ) {
          if (
            ((v = Ou),
            (y = "onMouseLeave"),
            (c = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = ju),
              (y = "onPointerLeave"),
              (c = "onPointerEnter"),
              (a = "pointer")),
            (N = S == null ? h : Xt(S)),
            (d = g == null ? h : Xt(g)),
            (h = new v(y, a + "leave", S, n, m)),
            (h.target = N),
            (h.relatedTarget = d),
            (y = null),
            Rt(m) === f &&
              ((v = new v(c, a + "enter", g, n, m)),
              (v.target = d),
              (v.relatedTarget = N),
              (y = v)),
            (N = y),
            S && g)
          )
            t: {
              for (v = S, c = g, a = 0, d = v; d; d = Bt(d)) a++;
              for (d = 0, y = c; y; y = Bt(y)) d++;
              for (; 0 < a - d; ) (v = Bt(v)), a--;
              for (; 0 < d - a; ) (c = Bt(c)), d--;
              for (; a--; ) {
                if (v === c || (c !== null && v === c.alternate)) break t;
                (v = Bt(v)), (c = Bt(c));
              }
              v = null;
            }
          else v = null;
          S !== null && Qu(p, h, S, v, !1),
            g !== null && N !== null && Qu(p, N, g, v, !0);
        }
      }
      e: {
        if (
          ((h = f ? Xt(f) : window),
          (S = h.nodeName && h.nodeName.toLowerCase()),
          S === "select" || (S === "input" && h.type === "file"))
        )
          var x = Id;
        else if (Fu(h))
          if (Ra) x = $d;
          else {
            x = Fd;
            var E = Dd;
          }
        else
          (S = h.nodeName) &&
            S.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (x = Ad);
        if (x && (x = x(e, f))) {
          La(p, x, n, m);
          break e;
        }
        E && E(e, h, f),
          e === "focusout" &&
            (E = h._wrapperState) &&
            E.controlled &&
            h.type === "number" &&
            zi(h, "number", h.value);
      }
      switch (((E = f ? Xt(f) : window), e)) {
        case "focusin":
          (Fu(E) || E.contentEditable === "true") &&
            ((Yt = E), (Ui = f), (Vn = null));
          break;
        case "focusout":
          Vn = Ui = Yt = null;
          break;
        case "mousedown":
          Vi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vi = !1), Hu(p, n, m);
          break;
        case "selectionchange":
          if (Hd) break;
        case "keydown":
        case "keyup":
          Hu(p, n, m);
      }
      var k;
      if (Io)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Kt
          ? za(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Na &&
          n.locale !== "ko" &&
          (Kt || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Kt && (k = Pa())
            : ((dt = m),
              (Oo = "value" in dt ? dt.value : dt.textContent),
              (Kt = !0))),
        (E = ul(f, P)),
        0 < E.length &&
          ((P = new Mu(P, e, null, n, m)),
          p.push({ event: P, listeners: E }),
          k ? (P.data = k) : ((k = Ta(n)), k !== null && (P.data = k)))),
        (k = Ld ? Rd(e, n) : Od(e, n)) &&
          ((f = ul(f, "onBeforeInput")),
          0 < f.length &&
            ((m = new Mu("onBeforeInput", "beforeinput", null, n, m)),
            p.push({ event: m, listeners: f }),
            (m.data = k)));
    }
    Va(p, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ul(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Gn(e, n)),
      i != null && r.unshift(tr(e, i, l)),
      (i = Gn(e, t)),
      i != null && r.push(tr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Bt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      f !== null &&
      ((u = f),
      l
        ? ((s = Gn(n, i)), s != null && o.unshift(tr(n, s, u)))
        : l || ((s = Gn(n, i)), s != null && o.push(tr(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Kd = /\r\n?/g,
  Yd = /\u0000|\uFFFD/g;
function Ku(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Kd,
      `
`
    )
    .replace(Yd, "");
}
function Lr(e, t, n) {
  if (((t = Ku(t)), Ku(e) !== t && n)) throw Error(w(425));
}
function sl() {}
var Hi = null,
  Bi = null;
function Wi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Qi = typeof setTimeout == "function" ? setTimeout : void 0,
  Gd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Yu = typeof Promise == "function" ? Promise : void 0,
  Xd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Yu < "u"
      ? function (e) {
          return Yu.resolve(null).then(e).catch(Zd);
        }
      : Qi;
function Zd(e) {
  setTimeout(function () {
    throw e;
  });
}
function ai(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Jn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Jn(t);
}
function yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Gu(e) {
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
var Sn = Math.random().toString(36).slice(2),
  Ye = "__reactFiber$" + Sn,
  nr = "__reactProps$" + Sn,
  rt = "__reactContainer$" + Sn,
  Ki = "__reactEvents$" + Sn,
  Jd = "__reactListeners$" + Sn,
  qd = "__reactHandles$" + Sn;
function Rt(e) {
  var t = e[Ye];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[rt] || n[Ye])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Gu(e); e !== null; ) {
          if ((n = e[Ye])) return n;
          e = Gu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function hr(e) {
  return (
    (e = e[Ye] || e[rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Ll(e) {
  return e[nr] || null;
}
var Yi = [],
  Zt = -1;
function _t(e) {
  return { current: e };
}
function U(e) {
  0 > Zt || ((e.current = Yi[Zt]), (Yi[Zt] = null), Zt--);
}
function A(e, t) {
  Zt++, (Yi[Zt] = e.current), (e.current = t);
}
var Et = {},
  ce = _t(Et),
  ye = _t(!1),
  Dt = Et;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Et;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function al() {
  U(ye), U(ce);
}
function Xu(e, t, n) {
  if (ce.current !== Et) throw Error(w(168));
  A(ce, t), A(ye, n);
}
function Ba(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Df(e) || "Unknown", l));
  return W({}, n, r);
}
function cl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Et),
    (Dt = ce.current),
    A(ce, e),
    A(ye, ye.current),
    !0
  );
}
function Zu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = Ba(e, t, Dt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(ye),
      U(ce),
      A(ce, e))
    : U(ye),
    A(ye, n);
}
var qe = null,
  Rl = !1,
  ci = !1;
function Wa(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
function bd(e) {
  (Rl = !0), Wa(e);
}
function Pt() {
  if (!ci && qe !== null) {
    ci = !0;
    var e = 0,
      t = D;
    try {
      var n = qe;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (qe = null), (Rl = !1);
    } catch (l) {
      throw (qe !== null && (qe = qe.slice(e + 1)), ha(zo, Pt), l);
    } finally {
      (D = t), (ci = !1);
    }
  }
  return null;
}
var Jt = [],
  qt = 0,
  fl = null,
  dl = 0,
  Te = [],
  Le = 0,
  Ft = null,
  be = 1,
  et = "";
function Tt(e, t) {
  (Jt[qt++] = dl), (Jt[qt++] = fl), (fl = e), (dl = t);
}
function Qa(e, t, n) {
  (Te[Le++] = be), (Te[Le++] = et), (Te[Le++] = Ft), (Ft = e);
  var r = be;
  e = et;
  var l = 32 - Ue(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Ue(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (be = (1 << (32 - Ue(t) + l)) | (n << l) | r),
      (et = i + e);
  } else (be = (1 << i) | (n << l) | r), (et = e);
}
function Fo(e) {
  e.return !== null && (Tt(e, 1), Qa(e, 1, 0));
}
function Ao(e) {
  for (; e === fl; )
    (fl = Jt[--qt]), (Jt[qt] = null), (dl = Jt[--qt]), (Jt[qt] = null);
  for (; e === Ft; )
    (Ft = Te[--Le]),
      (Te[Le] = null),
      (et = Te[--Le]),
      (Te[Le] = null),
      (be = Te[--Le]),
      (Te[Le] = null);
}
var Ee = null,
  xe = null,
  V = !1,
  $e = null;
function Ka(e, t) {
  var n = Re(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ju(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ee = e), (xe = yt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ee = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ft !== null ? { id: be, overflow: et } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Re(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ee = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Gi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xi(e) {
  if (V) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Ju(e, t)) {
        if (Gi(e)) throw Error(w(418));
        t = yt(n.nextSibling);
        var r = Ee;
        t && Ju(e, t)
          ? Ka(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (Ee = e));
      }
    } else {
      if (Gi(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (Ee = e);
    }
  }
}
function qu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ee = e;
}
function Rr(e) {
  if (e !== Ee) return !1;
  if (!V) return qu(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Wi(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (Gi(e)) throw (Ya(), Error(w(418)));
    for (; t; ) Ka(e, t), (t = yt(t.nextSibling));
  }
  if ((qu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = yt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = Ee ? yt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ya() {
  for (var e = xe; e; ) e = yt(e.nextSibling);
}
function dn() {
  (xe = Ee = null), (V = !1);
}
function $o(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
var ep = ot.ReactCurrentBatchConfig;
function Fe(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var pl = _t(null),
  ml = null,
  bt = null,
  Uo = null;
function Vo() {
  Uo = bt = ml = null;
}
function Ho(e) {
  var t = pl.current;
  U(pl), (e._currentValue = t);
}
function Zi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function un(e, t) {
  (ml = e),
    (Uo = bt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null));
}
function Me(e) {
  var t = e._currentValue;
  if (Uo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), bt === null)) {
      if (ml === null) throw Error(w(308));
      (bt = e), (ml.dependencies = { lanes: 0, firstContext: e });
    } else bt = bt.next = e;
  return t;
}
var Ot = null;
function Bo(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function Ga(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Bo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    lt(e, r)
  );
}
function lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var at = !1;
function Wo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Xa(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function gt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      lt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Bo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    lt(e, n)
  );
}
function Wr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), To(e, n);
  }
}
function bu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function hl(e, t, n, r) {
  var l = e.updateQueue;
  at = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      f = s.next;
    (s.next = null), o === null ? (i = f) : (o.next = f), (o = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== o &&
        (u === null ? (m.firstBaseUpdate = f) : (u.next = f),
        (m.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var p = l.baseState;
    (o = 0), (m = f = s = null), (u = i);
    do {
      var h = u.lane,
        S = u.eventTime;
      if ((r & h) === h) {
        m !== null &&
          (m = m.next =
            {
              eventTime: S,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var g = e,
            v = u;
          switch (((h = t), (S = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                p = g.call(S, p, h);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = v.payload),
                (h = typeof g == "function" ? g.call(S, p, h) : g),
                h == null)
              )
                break e;
              p = W({}, p, h);
              break e;
            case 2:
              at = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (S = {
          eventTime: S,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((f = m = S), (s = p)) : (m = m.next = S),
          (o |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    ($t |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function es(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(w(191, l));
        l.call(r);
      }
    }
}
var Za = new Gs.Component().refs;
function Ji(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ol = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ht(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = St(e),
      i = tt(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = gt(e, i, l)),
      t !== null && (Ve(t, e, l, r), Wr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = St(e),
      i = tt(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = gt(e, i, l)),
      t !== null && (Ve(t, e, l, r), Wr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = St(e),
      l = tt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = gt(e, l, r)),
      t !== null && (Ve(t, e, r, n), Wr(t, e, r));
  },
};
function ts(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bn(n, r) || !bn(l, i)
      : !0
  );
}
function Ja(e, t, n) {
  var r = !1,
    l = Et,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Me(i))
      : ((l = ge(t) ? Dt : ce.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fn(e, l) : Et)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ol),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ns(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ol.enqueueReplaceState(t, t.state, null);
}
function qi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Za), Wo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Me(i))
    : ((i = ge(t) ? Dt : ce.current), (l.context = fn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ji(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ol.enqueueReplaceState(l, l.state, null),
      hl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Tn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === Za && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Or(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function rs(e) {
  var t = e._init;
  return t(e._payload);
}
function qa(e) {
  function t(c, a) {
    if (e) {
      var d = c.deletions;
      d === null ? ((c.deletions = [a]), (c.flags |= 16)) : d.push(a);
    }
  }
  function n(c, a) {
    if (!e) return null;
    for (; a !== null; ) t(c, a), (a = a.sibling);
    return null;
  }
  function r(c, a) {
    for (c = new Map(); a !== null; )
      a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
    return c;
  }
  function l(c, a) {
    return (c = kt(c, a)), (c.index = 0), (c.sibling = null), c;
  }
  function i(c, a, d) {
    return (
      (c.index = d),
      e
        ? ((d = c.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((c.flags |= 2), a) : d)
            : ((c.flags |= 2), a))
        : ((c.flags |= 1048576), a)
    );
  }
  function o(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, a, d, y) {
    return a === null || a.tag !== 6
      ? ((a = yi(d, c.mode, y)), (a.return = c), a)
      : ((a = l(a, d)), (a.return = c), a);
  }
  function s(c, a, d, y) {
    var x = d.type;
    return x === Qt
      ? m(c, a, d.props.children, y, d.key)
      : a !== null &&
        (a.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === st &&
            rs(x) === a.type))
      ? ((y = l(a, d.props)), (y.ref = Tn(c, a, d)), (y.return = c), y)
      : ((y = Zr(d.type, d.key, d.props, null, c.mode, y)),
        (y.ref = Tn(c, a, d)),
        (y.return = c),
        y);
  }
  function f(c, a, d, y) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = gi(d, c.mode, y)), (a.return = c), a)
      : ((a = l(a, d.children || [])), (a.return = c), a);
  }
  function m(c, a, d, y, x) {
    return a === null || a.tag !== 7
      ? ((a = It(d, c.mode, y, x)), (a.return = c), a)
      : ((a = l(a, d)), (a.return = c), a);
  }
  function p(c, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = yi("" + a, c.mode, d)), (a.return = c), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case kr:
          return (
            (d = Zr(a.type, a.key, a.props, null, c.mode, d)),
            (d.ref = Tn(c, null, a)),
            (d.return = c),
            d
          );
        case Wt:
          return (a = gi(a, c.mode, d)), (a.return = c), a;
        case st:
          var y = a._init;
          return p(c, y(a._payload), d);
      }
      if (jn(a) || Cn(a))
        return (a = It(a, c.mode, d, null)), (a.return = c), a;
      Or(c, a);
    }
    return null;
  }
  function h(c, a, d, y) {
    var x = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return x !== null ? null : u(c, a, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case kr:
          return d.key === x ? s(c, a, d, y) : null;
        case Wt:
          return d.key === x ? f(c, a, d, y) : null;
        case st:
          return (x = d._init), h(c, a, x(d._payload), y);
      }
      if (jn(d) || Cn(d)) return x !== null ? null : m(c, a, d, y, null);
      Or(c, d);
    }
    return null;
  }
  function S(c, a, d, y, x) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (c = c.get(d) || null), u(a, c, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case kr:
          return (c = c.get(y.key === null ? d : y.key) || null), s(a, c, y, x);
        case Wt:
          return (c = c.get(y.key === null ? d : y.key) || null), f(a, c, y, x);
        case st:
          var E = y._init;
          return S(c, a, d, E(y._payload), x);
      }
      if (jn(y) || Cn(y)) return (c = c.get(d) || null), m(a, c, y, x, null);
      Or(a, y);
    }
    return null;
  }
  function g(c, a, d, y) {
    for (
      var x = null, E = null, k = a, P = (a = 0), F = null;
      k !== null && P < d.length;
      P++
    ) {
      k.index > P ? ((F = k), (k = null)) : (F = k.sibling);
      var L = h(c, k, d[P], y);
      if (L === null) {
        k === null && (k = F);
        break;
      }
      e && k && L.alternate === null && t(c, k),
        (a = i(L, a, P)),
        E === null ? (x = L) : (E.sibling = L),
        (E = L),
        (k = F);
    }
    if (P === d.length) return n(c, k), V && Tt(c, P), x;
    if (k === null) {
      for (; P < d.length; P++)
        (k = p(c, d[P], y)),
          k !== null &&
            ((a = i(k, a, P)), E === null ? (x = k) : (E.sibling = k), (E = k));
      return V && Tt(c, P), x;
    }
    for (k = r(c, k); P < d.length; P++)
      (F = S(k, c, P, d[P], y)),
        F !== null &&
          (e && F.alternate !== null && k.delete(F.key === null ? P : F.key),
          (a = i(F, a, P)),
          E === null ? (x = F) : (E.sibling = F),
          (E = F));
    return (
      e &&
        k.forEach(function (Ie) {
          return t(c, Ie);
        }),
      V && Tt(c, P),
      x
    );
  }
  function v(c, a, d, y) {
    var x = Cn(d);
    if (typeof x != "function") throw Error(w(150));
    if (((d = x.call(d)), d == null)) throw Error(w(151));
    for (
      var E = (x = null), k = a, P = (a = 0), F = null, L = d.next();
      k !== null && !L.done;
      P++, L = d.next()
    ) {
      k.index > P ? ((F = k), (k = null)) : (F = k.sibling);
      var Ie = h(c, k, L.value, y);
      if (Ie === null) {
        k === null && (k = F);
        break;
      }
      e && k && Ie.alternate === null && t(c, k),
        (a = i(Ie, a, P)),
        E === null ? (x = Ie) : (E.sibling = Ie),
        (E = Ie),
        (k = F);
    }
    if (L.done) return n(c, k), V && Tt(c, P), x;
    if (k === null) {
      for (; !L.done; P++, L = d.next())
        (L = p(c, L.value, y)),
          L !== null &&
            ((a = i(L, a, P)), E === null ? (x = L) : (E.sibling = L), (E = L));
      return V && Tt(c, P), x;
    }
    for (k = r(c, k); !L.done; P++, L = d.next())
      (L = S(k, c, P, L.value, y)),
        L !== null &&
          (e && L.alternate !== null && k.delete(L.key === null ? P : L.key),
          (a = i(L, a, P)),
          E === null ? (x = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        k.forEach(function (xn) {
          return t(c, xn);
        }),
      V && Tt(c, P),
      x
    );
  }
  function N(c, a, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Qt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case kr:
          e: {
            for (var x = d.key, E = a; E !== null; ) {
              if (E.key === x) {
                if (((x = d.type), x === Qt)) {
                  if (E.tag === 7) {
                    n(c, E.sibling),
                      (a = l(E, d.props.children)),
                      (a.return = c),
                      (c = a);
                    break e;
                  }
                } else if (
                  E.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === st &&
                    rs(x) === E.type)
                ) {
                  n(c, E.sibling),
                    (a = l(E, d.props)),
                    (a.ref = Tn(c, E, d)),
                    (a.return = c),
                    (c = a);
                  break e;
                }
                n(c, E);
                break;
              } else t(c, E);
              E = E.sibling;
            }
            d.type === Qt
              ? ((a = It(d.props.children, c.mode, y, d.key)),
                (a.return = c),
                (c = a))
              : ((y = Zr(d.type, d.key, d.props, null, c.mode, y)),
                (y.ref = Tn(c, a, d)),
                (y.return = c),
                (c = y));
          }
          return o(c);
        case Wt:
          e: {
            for (E = d.key; a !== null; ) {
              if (a.key === E)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(c, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = c),
                    (c = a);
                  break e;
                } else {
                  n(c, a);
                  break;
                }
              else t(c, a);
              a = a.sibling;
            }
            (a = gi(d, c.mode, y)), (a.return = c), (c = a);
          }
          return o(c);
        case st:
          return (E = d._init), N(c, a, E(d._payload), y);
      }
      if (jn(d)) return g(c, a, d, y);
      if (Cn(d)) return v(c, a, d, y);
      Or(c, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(c, a.sibling), (a = l(a, d)), (a.return = c), (c = a))
          : (n(c, a), (a = yi(d, c.mode, y)), (a.return = c), (c = a)),
        o(c))
      : n(c, a);
  }
  return N;
}
var pn = qa(!0),
  ba = qa(!1),
  vr = {},
  Xe = _t(vr),
  rr = _t(vr),
  lr = _t(vr);
function Mt(e) {
  if (e === vr) throw Error(w(174));
  return e;
}
function Qo(e, t) {
  switch ((A(lr, t), A(rr, e), A(Xe, vr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Li(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Li(t, e));
  }
  U(Xe), A(Xe, t);
}
function mn() {
  U(Xe), U(rr), U(lr);
}
function ec(e) {
  Mt(lr.current);
  var t = Mt(Xe.current),
    n = Li(t, e.type);
  t !== n && (A(rr, e), A(Xe, n));
}
function Ko(e) {
  rr.current === e && (U(Xe), U(rr));
}
var H = _t(0);
function vl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var fi = [];
function Yo() {
  for (var e = 0; e < fi.length; e++)
    fi[e]._workInProgressVersionPrimary = null;
  fi.length = 0;
}
var Qr = ot.ReactCurrentDispatcher,
  di = ot.ReactCurrentBatchConfig,
  At = 0,
  B = null,
  J = null,
  ee = null,
  yl = !1,
  Hn = !1,
  ir = 0,
  tp = 0;
function oe() {
  throw Error(w(321));
}
function Go(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!He(e[n], t[n])) return !1;
  return !0;
}
function Xo(e, t, n, r, l, i) {
  if (
    ((At = i),
    (B = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qr.current = e === null || e.memoizedState === null ? ip : op),
    (e = n(r, l)),
    Hn)
  ) {
    i = 0;
    do {
      if (((Hn = !1), (ir = 0), 25 <= i)) throw Error(w(301));
      (i += 1),
        (ee = J = null),
        (t.updateQueue = null),
        (Qr.current = up),
        (e = n(r, l));
    } while (Hn);
  }
  if (
    ((Qr.current = gl),
    (t = J !== null && J.next !== null),
    (At = 0),
    (ee = J = B = null),
    (yl = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function Zo() {
  var e = ir !== 0;
  return (ir = 0), e;
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (B.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function je() {
  if (J === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = ee === null ? B.memoizedState : ee.next;
  if (t !== null) (ee = t), (J = e);
  else {
    if (e === null) throw Error(w(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      ee === null ? (B.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pi(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      f = i;
    do {
      var m = f.lane;
      if ((At & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var p = {
          lane: m,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (o = r)) : (s = s.next = p),
          (B.lanes |= m),
          ($t |= m);
      }
      f = f.next;
    } while (f !== null && f !== i);
    s === null ? (o = r) : (s.next = u),
      He(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (B.lanes |= i), ($t |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function mi(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    He(i, t.memoizedState) || (ve = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function tc() {}
function nc(e, t) {
  var n = B,
    r = je(),
    l = t(),
    i = !He(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ve = !0)),
    (r = r.queue),
    Jo(ic.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ur(9, lc.bind(null, n, r, l, t), void 0, null),
      te === null)
    )
      throw Error(w(349));
    At & 30 || rc(n, t, l);
  }
  return l;
}
function rc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function lc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), oc(t) && uc(e);
}
function ic(e, t, n) {
  return n(function () {
    oc(t) && uc(e);
  });
}
function oc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function uc(e) {
  var t = lt(e, 1);
  t !== null && Ve(t, e, 1, -1);
}
function ls(e) {
  var t = We();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: or,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = lp.bind(null, B, e)),
    [t.memoizedState, e]
  );
}
function ur(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sc() {
  return je().memoizedState;
}
function Kr(e, t, n, r) {
  var l = We();
  (B.flags |= e),
    (l.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ml(e, t, n, r) {
  var l = je();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (J !== null) {
    var o = J.memoizedState;
    if (((i = o.destroy), r !== null && Go(r, o.deps))) {
      l.memoizedState = ur(t, n, i, r);
      return;
    }
  }
  (B.flags |= e), (l.memoizedState = ur(1 | t, n, i, r));
}
function is(e, t) {
  return Kr(8390656, 8, e, t);
}
function Jo(e, t) {
  return Ml(2048, 8, e, t);
}
function ac(e, t) {
  return Ml(4, 2, e, t);
}
function cc(e, t) {
  return Ml(4, 4, e, t);
}
function fc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function dc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ml(4, 4, fc.bind(null, t, e), n)
  );
}
function qo() {}
function pc(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Go(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function mc(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Go(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function hc(e, t, n) {
  return At & 21
    ? (He(n, t) || ((n = ga()), (B.lanes |= n), ($t |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function np(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = di.transition;
  di.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (di.transition = r);
  }
}
function vc() {
  return je().memoizedState;
}
function rp(e, t, n) {
  var r = St(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    yc(e))
  )
    gc(t, n);
  else if (((n = Ga(e, t, n, r)), n !== null)) {
    var l = de();
    Ve(n, e, r, l), wc(n, t, r);
  }
}
function lp(e, t, n) {
  var r = St(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (yc(e)) gc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), He(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Bo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ga(e, t, l, r)),
      n !== null && ((l = de()), Ve(n, e, r, l), wc(n, t, r));
  }
}
function yc(e) {
  var t = e.alternate;
  return e === B || (t !== null && t === B);
}
function gc(e, t) {
  Hn = yl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function wc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), To(e, n);
  }
}
var gl = {
    readContext: Me,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  ip = {
    readContext: Me,
    useCallback: function (e, t) {
      return (We().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Me,
    useEffect: is,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Kr(4194308, 4, fc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Kr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Kr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = We();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = We();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = rp.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = We();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ls,
    useDebugValue: qo,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = ls(!1),
        t = e[0];
      return (e = np.bind(null, e[1])), (We().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = B,
        l = We();
      if (V) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(w(349));
        At & 30 || rc(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        is(ic.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ur(9, lc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = We(),
        t = te.identifierPrefix;
      if (V) {
        var n = et,
          r = be;
        (n = (r & ~(1 << (32 - Ue(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = tp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  op = {
    readContext: Me,
    useCallback: pc,
    useContext: Me,
    useEffect: Jo,
    useImperativeHandle: dc,
    useInsertionEffect: ac,
    useLayoutEffect: cc,
    useMemo: mc,
    useReducer: pi,
    useRef: sc,
    useState: function () {
      return pi(or);
    },
    useDebugValue: qo,
    useDeferredValue: function (e) {
      var t = je();
      return hc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = pi(or)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: tc,
    useSyncExternalStore: nc,
    useId: vc,
    unstable_isNewReconciler: !1,
  },
  up = {
    readContext: Me,
    useCallback: pc,
    useContext: Me,
    useEffect: Jo,
    useImperativeHandle: dc,
    useInsertionEffect: ac,
    useLayoutEffect: cc,
    useMemo: mc,
    useReducer: mi,
    useRef: sc,
    useState: function () {
      return mi(or);
    },
    useDebugValue: qo,
    useDeferredValue: function (e) {
      var t = je();
      return J === null ? (t.memoizedState = e) : hc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = mi(or)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: tc,
    useSyncExternalStore: nc,
    useId: vc,
    unstable_isNewReconciler: !1,
  };
function hn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += If(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function hi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sp = typeof WeakMap == "function" ? WeakMap : Map;
function Sc(e, t, n) {
  (n = tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Sl || ((Sl = !0), (ao = r)), bi(e, t);
    }),
    n
  );
}
function kc(e, t, n) {
  (n = tt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        bi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        bi(e, t),
          typeof r != "function" &&
            (wt === null ? (wt = new Set([this])) : wt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function os(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = xp.bind(null, e, t, n)), t.then(e, e));
}
function us(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ss(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = tt(-1, 1)), (t.tag = 2), gt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ap = ot.ReactCurrentOwner,
  ve = !1;
function fe(e, t, n, r) {
  t.child = e === null ? ba(t, null, n, r) : pn(t, e.child, n, r);
}
function as(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    un(t, l),
    (r = Xo(e, t, n, r, i, l)),
    (n = Zo()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        it(e, t, l))
      : (V && n && Fo(t), (t.flags |= 1), fe(e, t, r, l), t.child)
  );
}
function cs(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ou(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), xc(e, t, i, r, l))
      : ((e = Zr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(o, r) && e.ref === t.ref)
    )
      return it(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = kt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function xc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bn(i, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), it(e, t, l);
  }
  return eo(e, t, n, r, l);
}
function Ec(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        A(tn, ke),
        (ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          A(tn, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        A(tn, ke),
        (ke |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      A(tn, ke),
      (ke |= r);
  return fe(e, t, l, n), t.child;
}
function Cc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function eo(e, t, n, r, l) {
  var i = ge(n) ? Dt : ce.current;
  return (
    (i = fn(t, i)),
    un(t, l),
    (n = Xo(e, t, n, r, i, l)),
    (r = Zo()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        it(e, t, l))
      : (V && r && Fo(t), (t.flags |= 1), fe(e, t, n, l), t.child)
  );
}
function fs(e, t, n, r, l) {
  if (ge(n)) {
    var i = !0;
    cl(t);
  } else i = !1;
  if ((un(t, l), t.stateNode === null))
    Yr(e, t), Ja(t, n, r), qi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = Me(f))
      : ((f = ge(n) ? Dt : ce.current), (f = fn(t, f)));
    var m = n.getDerivedStateFromProps,
      p =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== f) && ns(t, o, r, f)),
      (at = !1);
    var h = t.memoizedState;
    (o.state = h),
      hl(t, r, o, l),
      (s = t.memoizedState),
      u !== r || h !== s || ye.current || at
        ? (typeof m == "function" && (Ji(t, n, m, r), (s = t.memoizedState)),
          (u = at || ts(t, n, u, r, h, s, f))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = f),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Xa(e, t),
      (u = t.memoizedProps),
      (f = t.type === t.elementType ? u : Fe(t.type, u)),
      (o.props = f),
      (p = t.pendingProps),
      (h = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Me(s))
        : ((s = ge(n) ? Dt : ce.current), (s = fn(t, s)));
    var S = n.getDerivedStateFromProps;
    (m =
      typeof S == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== p || h !== s) && ns(t, o, r, s)),
      (at = !1),
      (h = t.memoizedState),
      (o.state = h),
      hl(t, r, o, l);
    var g = t.memoizedState;
    u !== p || h !== g || ye.current || at
      ? (typeof S == "function" && (Ji(t, n, S, r), (g = t.memoizedState)),
        (f = at || ts(t, n, f, r, h, g, s) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, g, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, g, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = s),
        (r = f))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return to(e, t, n, r, i, l);
}
function to(e, t, n, r, l, i) {
  Cc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Zu(t, n, !1), it(e, t, i);
  (r = t.stateNode), (ap.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = pn(t, e.child, null, i)), (t.child = pn(t, null, u, i)))
      : fe(e, t, u, i),
    (t.memoizedState = r.state),
    l && Zu(t, n, !0),
    t.child
  );
}
function _c(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Xu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Xu(e, t.context, !1),
    Qo(e, t.containerInfo);
}
function ds(e, t, n, r, l) {
  return dn(), $o(l), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var no = { dehydrated: null, treeContext: null, retryLane: 0 };
function ro(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Pc(e, t, n) {
  var r = t.pendingProps,
    l = H.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    A(H, l & 1),
    e === null)
  )
    return (
      Xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Dl(o, r, 0, null)),
              (e = It(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ro(n)),
              (t.memoizedState = no),
              e)
            : bo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return cp(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = kt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = kt(u, i)) : ((i = It(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ro(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = no),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = kt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function bo(e, t) {
  return (
    (t = Dl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Mr(e, t, n, r) {
  return (
    r !== null && $o(r),
    pn(t, e.child, null, n),
    (e = bo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function cp(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = hi(Error(w(422)))), Mr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Dl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = It(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && pn(t, e.child, null, o),
        (t.child.memoizedState = ro(o)),
        (t.memoizedState = no),
        i);
  if (!(t.mode & 1)) return Mr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(w(419))), (r = hi(i, r, void 0)), Mr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ve || u)) {
    if (((r = te), r !== null)) {
      switch (o & -o) {
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
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), lt(e, l), Ve(r, e, l, -1));
    }
    return iu(), (r = hi(Error(w(421)))), Mr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ep.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (xe = yt(l.nextSibling)),
      (Ee = t),
      (V = !0),
      ($e = null),
      e !== null &&
        ((Te[Le++] = be),
        (Te[Le++] = et),
        (Te[Le++] = Ft),
        (be = e.id),
        (et = e.overflow),
        (Ft = t)),
      (t = bo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ps(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zi(e.return, t, n);
}
function vi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Nc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((fe(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ps(e, n, t);
        else if (e.tag === 19) ps(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((A(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && vl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          vi(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && vl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        vi(t, !0, n, null, i);
        break;
      case "together":
        vi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Yr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function it(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    ($t |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = kt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function fp(e, t, n) {
  switch (t.tag) {
    case 3:
      _c(t), dn();
      break;
    case 5:
      ec(t);
      break;
    case 1:
      ge(t.type) && cl(t);
      break;
    case 4:
      Qo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      A(pl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (A(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Pc(e, t, n)
          : (A(H, H.current & 1),
            (e = it(e, t, n)),
            e !== null ? e.sibling : null);
      A(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Nc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        A(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ec(e, t, n);
  }
  return it(e, t, n);
}
var zc, lo, Tc, Lc;
zc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
lo = function () {};
Tc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Mt(Xe.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Pi(e, l)), (r = Pi(e, r)), (i = []);
        break;
      case "select":
        (l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Ti(e, l)), (r = Ti(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = sl);
    }
    Ri(n, r);
    var o;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var u = l[f];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (Kn.hasOwnProperty(f)
              ? i || (i = [])
              : (i = i || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (
        ((u = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && s !== u && (s != null || u != null))
      )
        if (f === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(f, n)), (n = s);
        else
          f === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(f, s))
            : f === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(f, "" + s)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (Kn.hasOwnProperty(f)
                ? (s != null && f === "onScroll" && $("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(f, s));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Lc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ln(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function dp(e, t, n) {
  var r = t.pendingProps;
  switch ((Ao(t), t.tag)) {
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
      return ue(t), null;
    case 1:
      return ge(t.type) && al(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mn(),
        U(ye),
        U(ce),
        Yo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Rr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $e !== null && (po($e), ($e = null)))),
        lo(e, t),
        ue(t),
        null
      );
    case 5:
      Ko(t);
      var l = Mt(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Tc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return ue(t), null;
        }
        if (((e = Mt(Xe.current)), Rr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ye] = t), (r[nr] = i), (e = (t.mode & 1) !== 0), n)) {
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
              for (l = 0; l < Dn.length; l++) $(Dn[l], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              xu(r, i), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              Cu(r, i), $("invalid", r);
          }
          Ri(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Lr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Lr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Kn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              xr(r), Eu(r, i, !0);
              break;
            case "textarea":
              xr(r), _u(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = sl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ra(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ye] = t),
            (e[nr] = r),
            zc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Oi(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Dn.length; l++) $(Dn[l], e);
                l = r;
                break;
              case "source":
                $("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (l = r);
                break;
              case "details":
                $("toggle", e), (l = r);
                break;
              case "input":
                xu(e, r), (l = Pi(e, r)), $("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                Cu(e, r), (l = Ti(e, r)), $("invalid", e);
                break;
              default:
                l = r;
            }
            Ri(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? oa(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && la(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Yn(e, s)
                    : typeof s == "number" && Yn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Kn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && $("scroll", e)
                      : s != null && Eo(e, i, s, o));
              }
            switch (n) {
              case "input":
                xr(e), Eu(e, r, !1);
                break;
              case "textarea":
                xr(e), _u(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? nn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      nn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = sl);
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
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) Lc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = Mt(lr.current)), Mt(Xe.current), Rr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ye] = t),
            (i = r.nodeValue !== n) && ((e = Ee), e !== null))
          )
            switch (e.tag) {
              case 3:
                Lr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Lr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ye] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (U(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && xe !== null && t.mode & 1 && !(t.flags & 128))
          Ya(), dn(), (t.flags |= 98560), (i = !1);
        else if (((i = Rr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(w(317));
            i[Ye] = t;
          } else
            dn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (i = !1);
        } else $e !== null && (po($e), ($e = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? q === 0 && (q = 3) : iu())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        mn(), lo(e, t), e === null && er(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return Ho(t.type._context), ue(t), null;
    case 17:
      return ge(t.type) && al(), ue(t), null;
    case 19:
      if ((U(H), (i = t.memoizedState), i === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Ln(i, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = vl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Ln(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return A(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            G() > vn &&
            ((t.flags |= 128), (r = !0), Ln(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ln(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !V)
            )
              return ue(t), null;
          } else
            2 * G() - i.renderingStartTime > vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ln(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = G()),
          (t.sibling = null),
          (n = H.current),
          A(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        lu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ke & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function pp(e, t) {
  switch ((Ao(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && al(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mn(),
        U(ye),
        U(ce),
        Yo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ko(t), null;
    case 13:
      if ((U(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        dn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(H), null;
    case 4:
      return mn(), null;
    case 10:
      return Ho(t.type._context), null;
    case 22:
    case 23:
      return lu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jr = !1,
  ae = !1,
  mp = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function en(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function io(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var ms = !1;
function hp(e, t) {
  if (((Hi = il), (e = ja()), Do(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            f = 0,
            m = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var S;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = o + l),
                p !== i || (r !== 0 && p.nodeType !== 3) || (s = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (S = p.firstChild) !== null;

            )
              (h = p), (p = S);
            for (;;) {
              if (p === e) break t;
              if (
                (h === n && ++f === l && (u = o),
                h === i && ++m === r && (s = o),
                (S = p.nextSibling) !== null)
              )
                break;
              (p = h), (h = p.parentNode);
            }
            p = S;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bi = { focusedElem: e, selectionRange: n }, il = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    N = g.memoizedState,
                    c = t.stateNode,
                    a = c.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Fe(t.type, v),
                      N
                    );
                  c.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (y) {
          Q(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (g = ms), (ms = !1), g;
}
function Bn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && io(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function jl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function oo(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Rc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Rc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ye], delete t[nr], delete t[Ki], delete t[Jd], delete t[qd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Oc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Oc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function uo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = sl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (uo(e, t, n), e = e.sibling; e !== null; ) uo(e, t, n), (e = e.sibling);
}
function so(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (so(e, t, n), e = e.sibling; e !== null; ) so(e, t, n), (e = e.sibling);
}
var ne = null,
  Ae = !1;
function ut(e, t, n) {
  for (n = n.child; n !== null; ) Mc(e, t, n), (n = n.sibling);
}
function Mc(e, t, n) {
  if (Ge && typeof Ge.onCommitFiberUnmount == "function")
    try {
      Ge.onCommitFiberUnmount(Pl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ae || en(n, t);
    case 6:
      var r = ne,
        l = Ae;
      (ne = null),
        ut(e, t, n),
        (ne = r),
        (Ae = l),
        ne !== null &&
          (Ae
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (Ae
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? ai(e.parentNode, n)
              : e.nodeType === 1 && ai(e, n),
            Jn(e))
          : ai(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (l = Ae),
        (ne = n.stateNode.containerInfo),
        (Ae = !0),
        ut(e, t, n),
        (ne = r),
        (Ae = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && io(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      ut(e, t, n);
      break;
    case 1:
      if (
        !ae &&
        (en(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Q(n, t, u);
        }
      ut(e, t, n);
      break;
    case 21:
      ut(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ae = (r = ae) || n.memoizedState !== null), ut(e, t, n), (ae = r))
        : ut(e, t, n);
      break;
    default:
      ut(e, t, n);
  }
}
function vs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mp()),
      t.forEach(function (r) {
        var l = Cp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ne = u.stateNode), (Ae = !1);
              break e;
            case 3:
              (ne = u.stateNode.containerInfo), (Ae = !0);
              break e;
            case 4:
              (ne = u.stateNode.containerInfo), (Ae = !0);
              break e;
          }
          u = u.return;
        }
        if (ne === null) throw Error(w(160));
        Mc(i, o, l), (ne = null), (Ae = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (f) {
        Q(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) jc(t, e), (t = t.sibling);
}
function jc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((De(t, e), Be(e), r & 4)) {
        try {
          Bn(3, e, e.return), jl(3, e);
        } catch (v) {
          Q(e, e.return, v);
        }
        try {
          Bn(5, e, e.return);
        } catch (v) {
          Q(e, e.return, v);
        }
      }
      break;
    case 1:
      De(t, e), Be(e), r & 512 && n !== null && en(n, n.return);
      break;
    case 5:
      if (
        (De(t, e),
        Be(e),
        r & 512 && n !== null && en(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Yn(l, "");
        } catch (v) {
          Q(e, e.return, v);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && ta(l, i),
              Oi(u, o);
            var f = Oi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var m = s[o],
                p = s[o + 1];
              m === "style"
                ? oa(l, p)
                : m === "dangerouslySetInnerHTML"
                ? la(l, p)
                : m === "children"
                ? Yn(l, p)
                : Eo(l, m, p, f);
            }
            switch (u) {
              case "input":
                Ni(l, i);
                break;
              case "textarea":
                na(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? nn(l, !!i.multiple, S, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? nn(l, !!i.multiple, i.defaultValue, !0)
                      : nn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[nr] = i;
          } catch (v) {
            Q(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((De(t, e), Be(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (v) {
          Q(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (De(t, e), Be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jn(t.containerInfo);
        } catch (v) {
          Q(e, e.return, v);
        }
      break;
    case 4:
      De(t, e), Be(e);
      break;
    case 13:
      De(t, e),
        Be(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (nu = G())),
        r & 4 && vs(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ae = (f = ae) || m), De(t, e), (ae = f)) : De(t, e),
        Be(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !m && e.mode & 1)
        )
          for (C = e, m = e.child; m !== null; ) {
            for (p = C = m; C !== null; ) {
              switch (((h = C), (S = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Bn(4, h, h.return);
                  break;
                case 1:
                  en(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      Q(r, n, v);
                    }
                  }
                  break;
                case 5:
                  en(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    gs(p);
                    continue;
                  }
              }
              S !== null ? ((S.return = h), (C = S)) : gs(p);
            }
            m = m.sibling;
          }
        e: for (m = null, p = e; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                (l = p.stateNode),
                  f
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = ia("display", o)));
              } catch (v) {
                Q(e, e.return, v);
              }
            }
          } else if (p.tag === 6) {
            if (m === null)
              try {
                p.stateNode.nodeValue = f ? "" : p.memoizedProps;
              } catch (v) {
                Q(e, e.return, v);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            m === p && (m = null), (p = p.return);
          }
          m === p && (m = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      De(t, e), Be(e), r & 4 && vs(e);
      break;
    case 21:
      break;
    default:
      De(t, e), Be(e);
  }
}
function Be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Oc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Yn(l, ""), (r.flags &= -33));
          var i = hs(e);
          so(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = hs(e);
          uo(e, u, o);
          break;
        default:
          throw Error(w(161));
      }
    } catch (s) {
      Q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function vp(e, t, n) {
  (C = e), Ic(e);
}
function Ic(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || jr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ae;
        u = jr;
        var f = ae;
        if (((jr = o), (ae = s) && !f))
          for (C = l; C !== null; )
            (o = C),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ws(l)
                : s !== null
                ? ((s.return = o), (C = s))
                : ws(l);
        for (; i !== null; ) (C = i), Ic(i), (i = i.sibling);
        (C = l), (jr = u), (ae = f);
      }
      ys(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (C = i)) : ys(e);
  }
}
function ys(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ae || jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ae)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Fe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && es(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                es(t, o, n);
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
                var f = t.alternate;
                if (f !== null) {
                  var m = f.memoizedState;
                  if (m !== null) {
                    var p = m.dehydrated;
                    p !== null && Jn(p);
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
              throw Error(w(163));
          }
        ae || (t.flags & 512 && oo(t));
      } catch (h) {
        Q(t, t.return, h);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function gs(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function ws(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jl(4, t);
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
          var i = t.return;
          try {
            oo(t);
          } catch (s) {
            Q(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            oo(t);
          } catch (s) {
            Q(t, o, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (C = u);
      break;
    }
    C = t.return;
  }
}
var yp = Math.ceil,
  wl = ot.ReactCurrentDispatcher,
  eu = ot.ReactCurrentOwner,
  Oe = ot.ReactCurrentBatchConfig,
  M = 0,
  te = null,
  Z = null,
  le = 0,
  ke = 0,
  tn = _t(0),
  q = 0,
  sr = null,
  $t = 0,
  Il = 0,
  tu = 0,
  Wn = null,
  he = null,
  nu = 0,
  vn = 1 / 0,
  Je = null,
  Sl = !1,
  ao = null,
  wt = null,
  Ir = !1,
  pt = null,
  kl = 0,
  Qn = 0,
  co = null,
  Gr = -1,
  Xr = 0;
function de() {
  return M & 6 ? G() : Gr !== -1 ? Gr : (Gr = G());
}
function St(e) {
  return e.mode & 1
    ? M & 2 && le !== 0
      ? le & -le
      : ep.transition !== null
      ? (Xr === 0 && (Xr = ga()), Xr)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : _a(e.type))),
        e)
    : 1;
}
function Ve(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (co = null), Error(w(185)));
  pr(e, n, r),
    (!(M & 2) || e !== te) &&
      (e === te && (!(M & 2) && (Il |= n), q === 4 && ft(e, le)),
      we(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((vn = G() + 500), Rl && Pt()));
}
function we(e, t) {
  var n = e.callbackNode;
  ed(e, t);
  var r = ll(e, e === te ? le : 0);
  if (r === 0)
    n !== null && zu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && zu(n), t === 1))
      e.tag === 0 ? bd(Ss.bind(null, e)) : Wa(Ss.bind(null, e)),
        Xd(function () {
          !(M & 6) && Pt();
        }),
        (n = null);
    else {
      switch (wa(r)) {
        case 1:
          n = zo;
          break;
        case 4:
          n = va;
          break;
        case 16:
          n = rl;
          break;
        case 536870912:
          n = ya;
          break;
        default:
          n = rl;
      }
      n = Bc(n, Dc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Dc(e, t) {
  if (((Gr = -1), (Xr = 0), M & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (sn() && e.callbackNode !== n) return null;
  var r = ll(e, e === te ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = Ac();
    (te !== e || le !== t) && ((Je = null), (vn = G() + 500), jt(e, t));
    do
      try {
        Sp();
        break;
      } catch (u) {
        Fc(e, u);
      }
    while (1);
    Vo(),
      (wl.current = i),
      (M = l),
      Z !== null ? (t = 0) : ((te = null), (le = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Fi(e)), l !== 0 && ((r = l), (t = fo(e, l)))), t === 1)
    )
      throw ((n = sr), jt(e, 0), ft(e, r), we(e, G()), n);
    if (t === 6) ft(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !gp(l) &&
          ((t = xl(e, r)),
          t === 2 && ((i = Fi(e)), i !== 0 && ((r = i), (t = fo(e, i)))),
          t === 1))
      )
        throw ((n = sr), jt(e, 0), ft(e, r), we(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Lt(e, he, Je);
          break;
        case 3:
          if (
            (ft(e, r), (r & 130023424) === r && ((t = nu + 500 - G()), 10 < t))
          ) {
            if (ll(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Qi(Lt.bind(null, e, he, Je), t);
            break;
          }
          Lt(e, he, Je);
          break;
        case 4:
          if ((ft(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ue(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * yp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Qi(Lt.bind(null, e, he, Je), r);
            break;
          }
          Lt(e, he, Je);
          break;
        case 5:
          Lt(e, he, Je);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return we(e, G()), e.callbackNode === n ? Dc.bind(null, e) : null;
}
function fo(e, t) {
  var n = Wn;
  return (
    e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256),
    (e = xl(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && po(t)),
    e
  );
}
function po(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function gp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!He(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ft(e, t) {
  for (
    t &= ~tu,
      t &= ~Il,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ue(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ss(e) {
  if (M & 6) throw Error(w(327));
  sn();
  var t = ll(e, 0);
  if (!(t & 1)) return we(e, G()), null;
  var n = xl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fi(e);
    r !== 0 && ((t = r), (n = fo(e, r)));
  }
  if (n === 1) throw ((n = sr), jt(e, 0), ft(e, t), we(e, G()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Lt(e, he, Je),
    we(e, G()),
    null
  );
}
function ru(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((vn = G() + 500), Rl && Pt());
  }
}
function Ut(e) {
  pt !== null && pt.tag === 0 && !(M & 6) && sn();
  var t = M;
  M |= 1;
  var n = Oe.transition,
    r = D;
  try {
    if (((Oe.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Oe.transition = n), (M = t), !(M & 6) && Pt();
  }
}
function lu() {
  (ke = tn.current), U(tn);
}
function jt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Gd(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((Ao(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && al();
          break;
        case 3:
          mn(), U(ye), U(ce), Yo();
          break;
        case 5:
          Ko(r);
          break;
        case 4:
          mn();
          break;
        case 13:
          U(H);
          break;
        case 19:
          U(H);
          break;
        case 10:
          Ho(r.type._context);
          break;
        case 22:
        case 23:
          lu();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (Z = e = kt(e.current, null)),
    (le = ke = t),
    (q = 0),
    (sr = null),
    (tu = Il = $t = 0),
    (he = Wn = null),
    Ot !== null)
  ) {
    for (t = 0; t < Ot.length; t++)
      if (((n = Ot[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Ot = null;
  }
  return e;
}
function Fc(e, t) {
  do {
    var n = Z;
    try {
      if ((Vo(), (Qr.current = gl), yl)) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        yl = !1;
      }
      if (
        ((At = 0),
        (ee = J = B = null),
        (Hn = !1),
        (ir = 0),
        (eu.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (sr = t), (Z = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = le),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var f = s,
            m = u,
            p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = m.alternate;
            h
              ? ((m.updateQueue = h.updateQueue),
                (m.memoizedState = h.memoizedState),
                (m.lanes = h.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var S = us(o);
          if (S !== null) {
            (S.flags &= -257),
              ss(S, o, u, i, t),
              S.mode & 1 && os(i, f, t),
              (t = S),
              (s = f);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              os(i, f, t), iu();
              break e;
            }
            s = Error(w(426));
          }
        } else if (V && u.mode & 1) {
          var N = us(o);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              ss(N, o, u, i, t),
              $o(hn(s, u));
            break e;
          }
        }
        (i = s = hn(s, u)),
          q !== 4 && (q = 2),
          Wn === null ? (Wn = [i]) : Wn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var c = Sc(i, s, t);
              bu(i, c);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (wt === null || !wt.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = kc(i, u, t);
                bu(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Uc(n);
    } catch (x) {
      (t = x), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ac() {
  var e = wl.current;
  return (wl.current = gl), e === null ? gl : e;
}
function iu() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    te === null || (!($t & 268435455) && !(Il & 268435455)) || ft(te, le);
}
function xl(e, t) {
  var n = M;
  M |= 2;
  var r = Ac();
  (te !== e || le !== t) && ((Je = null), jt(e, t));
  do
    try {
      wp();
      break;
    } catch (l) {
      Fc(e, l);
    }
  while (1);
  if ((Vo(), (M = n), (wl.current = r), Z !== null)) throw Error(w(261));
  return (te = null), (le = 0), q;
}
function wp() {
  for (; Z !== null; ) $c(Z);
}
function Sp() {
  for (; Z !== null && !Qf(); ) $c(Z);
}
function $c(e) {
  var t = Hc(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? Uc(e) : (Z = t),
    (eu.current = null);
}
function Uc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = pp(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (Z = null);
        return;
      }
    } else if (((n = dp(n, t, ke)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function Lt(e, t, n) {
  var r = D,
    l = Oe.transition;
  try {
    (Oe.transition = null), (D = 1), kp(e, t, n, r);
  } finally {
    (Oe.transition = l), (D = r);
  }
  return null;
}
function kp(e, t, n, r) {
  do sn();
  while (pt !== null);
  if (M & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (td(e, i),
    e === te && ((Z = te = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ir ||
      ((Ir = !0),
      Bc(rl, function () {
        return sn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Oe.transition), (Oe.transition = null);
    var o = D;
    D = 1;
    var u = M;
    (M |= 4),
      (eu.current = null),
      hp(e, n),
      jc(n, e),
      Vd(Bi),
      (il = !!Hi),
      (Bi = Hi = null),
      (e.current = n),
      vp(n),
      Kf(),
      (M = u),
      (D = o),
      (Oe.transition = i);
  } else e.current = n;
  if (
    (Ir && ((Ir = !1), (pt = e), (kl = l)),
    (i = e.pendingLanes),
    i === 0 && (wt = null),
    Xf(n.stateNode),
    we(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Sl) throw ((Sl = !1), (e = ao), (ao = null), e);
  return (
    kl & 1 && e.tag !== 0 && sn(),
    (i = e.pendingLanes),
    i & 1 ? (e === co ? Qn++ : ((Qn = 0), (co = e))) : (Qn = 0),
    Pt(),
    null
  );
}
function sn() {
  if (pt !== null) {
    var e = wa(kl),
      t = Oe.transition,
      n = D;
    try {
      if (((Oe.transition = null), (D = 16 > e ? 16 : e), pt === null))
        var r = !1;
      else {
        if (((e = pt), (pt = null), (kl = 0), M & 6)) throw Error(w(331));
        var l = M;
        for (M |= 4, C = e.current; C !== null; ) {
          var i = C,
            o = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (C = f; C !== null; ) {
                  var m = C;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bn(8, m, i);
                  }
                  var p = m.child;
                  if (p !== null) (p.return = m), (C = p);
                  else
                    for (; C !== null; ) {
                      m = C;
                      var h = m.sibling,
                        S = m.return;
                      if ((Rc(m), m === f)) {
                        C = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = S), (C = h);
                        break;
                      }
                      C = S;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var N = v.sibling;
                    (v.sibling = null), (v = N);
                  } while (v !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (C = o);
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bn(9, i, i.return);
                }
              var c = i.sibling;
              if (c !== null) {
                (c.return = i.return), (C = c);
                break e;
              }
              C = i.return;
            }
        }
        var a = e.current;
        for (C = a; C !== null; ) {
          o = C;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (C = d);
          else
            e: for (o = a; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jl(9, u);
                  }
                } catch (x) {
                  Q(u, u.return, x);
                }
              if (u === o) {
                C = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (C = y);
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((M = l), Pt(), Ge && typeof Ge.onPostCommitFiberRoot == "function")
        )
          try {
            Ge.onPostCommitFiberRoot(Pl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Oe.transition = t);
    }
  }
  return !1;
}
function ks(e, t, n) {
  (t = hn(n, t)),
    (t = Sc(e, t, 1)),
    (e = gt(e, t, 1)),
    (t = de()),
    e !== null && (pr(e, 1, t), we(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) ks(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ks(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (wt === null || !wt.has(r)))
        ) {
          (e = hn(n, e)),
            (e = kc(t, e, 1)),
            (t = gt(t, e, 1)),
            (e = de()),
            t !== null && (pr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function xp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (le & n) === n &&
      (q === 4 || (q === 3 && (le & 130023424) === le && 500 > G() - nu)
        ? jt(e, 0)
        : (tu |= n)),
    we(e, t);
}
function Vc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _r), (_r <<= 1), !(_r & 130023424) && (_r = 4194304))
      : (t = 1));
  var n = de();
  (e = lt(e, t)), e !== null && (pr(e, t, n), we(e, n));
}
function Ep(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Vc(e, n);
}
function Cp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), Vc(e, n);
}
var Hc;
Hc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ye.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ve = !1), fp(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), V && t.flags & 1048576 && Qa(t, dl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Yr(e, t), (e = t.pendingProps);
      var l = fn(t, ce.current);
      un(t, n), (l = Xo(null, t, r, e, l, n));
      var i = Zo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((i = !0), cl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Wo(t),
            (l.updater = Ol),
            (t.stateNode = l),
            (l._reactInternals = t),
            qi(t, r, e, n),
            (t = to(null, t, r, !0, i, n)))
          : ((t.tag = 0), V && i && Fo(t), fe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Yr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Pp(r)),
          (e = Fe(r, e)),
          l)
        ) {
          case 0:
            t = eo(null, t, r, e, n);
            break e;
          case 1:
            t = fs(null, t, r, e, n);
            break e;
          case 11:
            t = as(null, t, r, e, n);
            break e;
          case 14:
            t = cs(null, t, r, Fe(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        eo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        fs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((_c(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Xa(e, t),
          hl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = hn(Error(w(423)), t)), (t = ds(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = hn(Error(w(424)), t)), (t = ds(e, t, r, n, l));
            break e;
          } else
            for (
              xe = yt(t.stateNode.containerInfo.firstChild),
                Ee = t,
                V = !0,
                $e = null,
                n = ba(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((dn(), r === l)) {
            t = it(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ec(t),
        e === null && Xi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Wi(r, l) ? (o = null) : i !== null && Wi(r, i) && (t.flags |= 32),
        Cc(e, t),
        fe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Xi(t), null;
    case 13:
      return Pc(e, t, n);
    case 4:
      return (
        Qo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pn(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        as(e, t, r, l, n)
      );
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          A(pl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (He(i.value, o)) {
            if (i.children === l.children && !ye.current) {
              t = it(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = tt(-1, n & -n)), (s.tag = 2);
                      var f = i.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var m = f.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (f.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Zi(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(w(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Zi(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        fe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        un(t, n),
        (l = Me(l)),
        (r = r(l)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Fe(r, t.pendingProps)),
        (l = Fe(r.type, l)),
        cs(e, t, r, l, n)
      );
    case 15:
      return xc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        Yr(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), cl(t)) : (e = !1),
        un(t, n),
        Ja(t, r, l),
        qi(t, r, l, n),
        to(null, t, r, !0, e, n)
      );
    case 19:
      return Nc(e, t, n);
    case 22:
      return Ec(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function Bc(e, t) {
  return ha(e, t);
}
function _p(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Re(e, t, n, r) {
  return new _p(e, t, n, r);
}
function ou(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Pp(e) {
  if (typeof e == "function") return ou(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _o)) return 11;
    if (e === Po) return 14;
  }
  return 2;
}
function kt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Re(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Zr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) ou(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Qt:
        return It(n.children, l, i, t);
      case Co:
        (o = 8), (l |= 8);
        break;
      case xi:
        return (
          (e = Re(12, n, t, l | 2)), (e.elementType = xi), (e.lanes = i), e
        );
      case Ei:
        return (e = Re(13, n, t, l)), (e.elementType = Ei), (e.lanes = i), e;
      case Ci:
        return (e = Re(19, n, t, l)), (e.elementType = Ci), (e.lanes = i), e;
      case qs:
        return Dl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Zs:
              o = 10;
              break e;
            case Js:
              o = 9;
              break e;
            case _o:
              o = 11;
              break e;
            case Po:
              o = 14;
              break e;
            case st:
              (o = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Re(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function It(e, t, n, r) {
  return (e = Re(7, e, r, t)), (e.lanes = n), e;
}
function Dl(e, t, n, r) {
  return (
    (e = Re(22, e, r, t)),
    (e.elementType = qs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yi(e, t, n) {
  return (e = Re(6, e, null, t)), (e.lanes = n), e;
}
function gi(e, t, n) {
  return (
    (t = Re(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Np(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ql(0)),
    (this.expirationTimes = ql(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ql(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function uu(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Np(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Re(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Wo(i),
    e
  );
}
function zp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Wc(e) {
  if (!e) return Et;
  e = e._reactInternals;
  e: {
    if (Ht(e) !== e || e.tag !== 1) throw Error(w(170));
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
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return Ba(e, n, t);
  }
  return t;
}
function Qc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = uu(n, r, !0, e, l, i, o, u, s)),
    (e.context = Wc(null)),
    (n = e.current),
    (r = de()),
    (l = St(n)),
    (i = tt(r, l)),
    (i.callback = t ?? null),
    gt(n, i, l),
    (e.current.lanes = l),
    pr(e, l, r),
    we(e, r),
    e
  );
}
function Fl(e, t, n, r) {
  var l = t.current,
    i = de(),
    o = St(l);
  return (
    (n = Wc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = tt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gt(l, t, o)),
    e !== null && (Ve(e, l, o, i), Wr(e, l, o)),
    o
  );
}
function El(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function su(e, t) {
  xs(e, t), (e = e.alternate) && xs(e, t);
}
function Tp() {
  return null;
}
var Kc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function au(e) {
  this._internalRoot = e;
}
Al.prototype.render = au.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  Fl(e, t, null, null);
};
Al.prototype.unmount = au.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function () {
      Fl(null, e, null, null);
    }),
      (t[rt] = null);
  }
};
function Al(e) {
  this._internalRoot = e;
}
Al.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = xa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++);
    ct.splice(n, 0, e), n === 0 && Ca(e);
  }
};
function cu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $l(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Es() {}
function Lp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var f = El(o);
        i.call(f);
      };
    }
    var o = Qc(t, r, e, 0, null, !1, !1, "", Es);
    return (
      (e._reactRootContainer = o),
      (e[rt] = o.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      Ut(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var f = El(s);
      u.call(f);
    };
  }
  var s = uu(e, 0, !1, null, null, !1, !1, "", Es);
  return (
    (e._reactRootContainer = s),
    (e[rt] = s.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    Ut(function () {
      Fl(t, s, n, r);
    }),
    s
  );
}
function Ul(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = El(o);
        u.call(s);
      };
    }
    Fl(t, o, e, l);
  } else o = Lp(n, t, e, l, r);
  return El(o);
}
Sa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = In(t.pendingLanes);
        n !== 0 &&
          (To(t, n | 1), we(t, G()), !(M & 6) && ((vn = G() + 500), Pt()));
      }
      break;
    case 13:
      Ut(function () {
        var r = lt(e, 1);
        if (r !== null) {
          var l = de();
          Ve(r, e, 1, l);
        }
      }),
        su(e, 1);
  }
};
Lo = function (e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728);
    if (t !== null) {
      var n = de();
      Ve(t, e, 134217728, n);
    }
    su(e, 134217728);
  }
};
ka = function (e) {
  if (e.tag === 13) {
    var t = St(e),
      n = lt(e, t);
    if (n !== null) {
      var r = de();
      Ve(n, e, t, r);
    }
    su(e, t);
  }
};
xa = function () {
  return D;
};
Ea = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
ji = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ni(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ll(r);
            if (!l) throw Error(w(90));
            ea(r), Ni(r, l);
          }
        }
      }
      break;
    case "textarea":
      na(e, n);
      break;
    case "select":
      (t = n.value), t != null && nn(e, !!n.multiple, t, !1);
  }
};
aa = ru;
ca = Ut;
var Rp = { usingClientEntryPoint: !1, Events: [hr, Xt, Ll, ua, sa, ru] },
  Rn = {
    findFiberByHostInstance: Rt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Op = {
    bundleType: Rn.bundleType,
    version: Rn.version,
    rendererPackageName: Rn.rendererPackageName,
    rendererConfig: Rn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = pa(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Rn.findFiberByHostInstance || Tp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dr.isDisabled && Dr.supportsFiber)
    try {
      (Pl = Dr.inject(Op)), (Ge = Dr);
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rp;
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cu(t)) throw Error(w(200));
  return zp(e, t, null, n);
};
Ne.createRoot = function (e, t) {
  if (!cu(e)) throw Error(w(299));
  var n = !1,
    r = "",
    l = Kc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = uu(e, 1, !1, null, null, n, !1, r, l)),
    (e[rt] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new au(t)
  );
};
Ne.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = pa(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function (e) {
  return Ut(e);
};
Ne.hydrate = function (e, t, n) {
  if (!$l(t)) throw Error(w(200));
  return Ul(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
  if (!cu(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Kc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Qc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[rt] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Al(t);
};
Ne.render = function (e, t, n) {
  if (!$l(t)) throw Error(w(200));
  return Ul(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
  if (!$l(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (Ut(function () {
        Ul(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[rt] = null);
        });
      }),
      !0)
    : !1;
};
Ne.unstable_batchedUpdates = ru;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$l(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Ul(e, t, n, !1, r);
};
Ne.version = "18.2.0-next-9e3b772b8-20220608";
function Yc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yc);
    } catch (e) {
      console.error(e);
    }
}
Yc(), (Qs.exports = Ne);
var Mp = Qs.exports,
  Cs = Mp;
(Si.createRoot = Cs.createRoot), (Si.hydrateRoot = Cs.hydrateRoot);
function mo() {
  return (
    (mo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mo.apply(this, arguments)
  );
}
function Gc(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var jp =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Ip = Gc(function (e) {
    return (
      jp.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function Dp(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Fp(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Ap = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (l) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(l, i),
          r.tags.push(l);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Fp(this));
        var l = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Dp(l);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else l.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  se = "-ms-",
  Cl = "-moz-",
  j = "-webkit-",
  Xc = "comm",
  fu = "rule",
  du = "decl",
  $p = "@import",
  Zc = "@keyframes",
  Up = Math.abs,
  Vl = String.fromCharCode,
  Vp = Object.assign;
function Hp(e, t) {
  return re(e, 0) ^ 45
    ? (((((((t << 2) ^ re(e, 0)) << 2) ^ re(e, 1)) << 2) ^ re(e, 2)) << 2) ^
        re(e, 3)
    : 0;
}
function Jc(e) {
  return e.trim();
}
function Bp(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function I(e, t, n) {
  return e.replace(t, n);
}
function ho(e, t) {
  return e.indexOf(t);
}
function re(e, t) {
  return e.charCodeAt(t) | 0;
}
function ar(e, t, n) {
  return e.slice(t, n);
}
function Qe(e) {
  return e.length;
}
function pu(e) {
  return e.length;
}
function Fr(e, t) {
  return t.push(e), e;
}
function Wp(e, t) {
  return e.map(t).join("");
}
var Hl = 1,
  yn = 1,
  qc = 0,
  Se = 0,
  X = 0,
  kn = "";
function Bl(e, t, n, r, l, i, o) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: l,
    children: i,
    line: Hl,
    column: yn,
    length: o,
    return: "",
  };
}
function On(e, t) {
  return Vp(Bl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Qp() {
  return X;
}
function Kp() {
  return (X = Se > 0 ? re(kn, --Se) : 0), yn--, X === 10 && ((yn = 1), Hl--), X;
}
function Ce() {
  return (
    (X = Se < qc ? re(kn, Se++) : 0), yn++, X === 10 && ((yn = 1), Hl++), X
  );
}
function Ze() {
  return re(kn, Se);
}
function Jr() {
  return Se;
}
function yr(e, t) {
  return ar(kn, e, t);
}
function cr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function bc(e) {
  return (Hl = yn = 1), (qc = Qe((kn = e))), (Se = 0), [];
}
function ef(e) {
  return (kn = ""), e;
}
function qr(e) {
  return Jc(yr(Se - 1, vo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Yp(e) {
  for (; (X = Ze()) && X < 33; ) Ce();
  return cr(e) > 2 || cr(X) > 3 ? "" : " ";
}
function Gp(e, t) {
  for (
    ;
    --t &&
    Ce() &&
    !(X < 48 || X > 102 || (X > 57 && X < 65) || (X > 70 && X < 97));

  );
  return yr(e, Jr() + (t < 6 && Ze() == 32 && Ce() == 32));
}
function vo(e) {
  for (; Ce(); )
    switch (X) {
      case e:
        return Se;
      case 34:
      case 39:
        e !== 34 && e !== 39 && vo(X);
        break;
      case 40:
        e === 41 && vo(e);
        break;
      case 92:
        Ce();
        break;
    }
  return Se;
}
function Xp(e, t) {
  for (; Ce() && e + X !== 47 + 10; )
    if (e + X === 42 + 42 && Ze() === 47) break;
  return "/*" + yr(t, Se - 1) + "*" + Vl(e === 47 ? e : Ce());
}
function Zp(e) {
  for (; !cr(Ze()); ) Ce();
  return yr(e, Se);
}
function Jp(e) {
  return ef(br("", null, null, null, [""], (e = bc(e)), 0, [0], e));
}
function br(e, t, n, r, l, i, o, u, s) {
  for (
    var f = 0,
      m = 0,
      p = o,
      h = 0,
      S = 0,
      g = 0,
      v = 1,
      N = 1,
      c = 1,
      a = 0,
      d = "",
      y = l,
      x = i,
      E = r,
      k = d;
    N;

  )
    switch (((g = a), (a = Ce()))) {
      case 40:
        if (g != 108 && re(k, p - 1) == 58) {
          ho((k += I(qr(a), "&", "&\f")), "&\f") != -1 && (c = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += qr(a);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Yp(g);
        break;
      case 92:
        k += Gp(Jr() - 1, 7);
        continue;
      case 47:
        switch (Ze()) {
          case 42:
          case 47:
            Fr(qp(Xp(Ce(), Jr()), t, n), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * v:
        u[f++] = Qe(k) * c;
      case 125 * v:
      case 59:
      case 0:
        switch (a) {
          case 0:
          case 125:
            N = 0;
          case 59 + m:
            c == -1 && (k = I(k, /\f/g, "")),
              S > 0 &&
                Qe(k) - p &&
                Fr(
                  S > 32
                    ? Ps(k + ";", r, n, p - 1)
                    : Ps(I(k, " ", "") + ";", r, n, p - 2),
                  s
                );
            break;
          case 59:
            k += ";";
          default:
            if (
              (Fr((E = _s(k, t, n, f, m, l, u, d, (y = []), (x = []), p)), i),
              a === 123)
            )
              if (m === 0) br(k, t, E, E, y, i, p, u, x);
              else
                switch (h === 99 && re(k, 3) === 110 ? 100 : h) {
                  case 100:
                  case 109:
                  case 115:
                    br(
                      e,
                      E,
                      E,
                      r && Fr(_s(e, E, E, 0, 0, l, u, d, l, (y = []), p), x),
                      l,
                      x,
                      p,
                      u,
                      r ? y : x
                    );
                    break;
                  default:
                    br(k, E, E, E, [""], x, 0, u, x);
                }
        }
        (f = m = S = 0), (v = c = 1), (d = k = ""), (p = o);
        break;
      case 58:
        (p = 1 + Qe(k)), (S = g);
      default:
        if (v < 1) {
          if (a == 123) --v;
          else if (a == 125 && v++ == 0 && Kp() == 125) continue;
        }
        switch (((k += Vl(a)), a * v)) {
          case 38:
            c = m > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (u[f++] = (Qe(k) - 1) * c), (c = 1);
            break;
          case 64:
            Ze() === 45 && (k += qr(Ce())),
              (h = Ze()),
              (m = p = Qe((d = k += Zp(Jr())))),
              a++;
            break;
          case 45:
            g === 45 && Qe(k) == 2 && (v = 0);
        }
    }
  return i;
}
function _s(e, t, n, r, l, i, o, u, s, f, m) {
  for (
    var p = l - 1, h = l === 0 ? i : [""], S = pu(h), g = 0, v = 0, N = 0;
    g < r;
    ++g
  )
    for (var c = 0, a = ar(e, p + 1, (p = Up((v = o[g])))), d = e; c < S; ++c)
      (d = Jc(v > 0 ? h[c] + " " + a : I(a, /&\f/g, h[c]))) && (s[N++] = d);
  return Bl(e, t, n, l === 0 ? fu : u, s, f, m);
}
function qp(e, t, n) {
  return Bl(e, t, n, Xc, Vl(Qp()), ar(e, 2, -2), 0);
}
function Ps(e, t, n, r) {
  return Bl(e, t, n, du, ar(e, 0, r), ar(e, r + 1, -1), r);
}
function an(e, t) {
  for (var n = "", r = pu(e), l = 0; l < r; l++) n += t(e[l], l, e, t) || "";
  return n;
}
function bp(e, t, n, r) {
  switch (e.type) {
    case $p:
    case du:
      return (e.return = e.return || e.value);
    case Xc:
      return "";
    case Zc:
      return (e.return = e.value + "{" + an(e.children, r) + "}");
    case fu:
      e.value = e.props.join(",");
  }
  return Qe((n = an(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function em(e) {
  var t = pu(e);
  return function (n, r, l, i) {
    for (var o = "", u = 0; u < t; u++) o += e[u](n, r, l, i) || "";
    return o;
  };
}
function tm(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var nm = function (t, n, r) {
    for (
      var l = 0, i = 0;
      (l = i), (i = Ze()), l === 38 && i === 12 && (n[r] = 1), !cr(i);

    )
      Ce();
    return yr(t, Se);
  },
  rm = function (t, n) {
    var r = -1,
      l = 44;
    do
      switch (cr(l)) {
        case 0:
          l === 38 && Ze() === 12 && (n[r] = 1), (t[r] += nm(Se - 1, n, r));
          break;
        case 2:
          t[r] += qr(l);
          break;
        case 4:
          if (l === 44) {
            (t[++r] = Ze() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Vl(l);
      }
    while ((l = Ce()));
    return t;
  },
  lm = function (t, n) {
    return ef(rm(bc(t), n));
  },
  Ns = new WeakMap(),
  im = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          l = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ns.get(r)) &&
        !l
      ) {
        Ns.set(t, !0);
        for (
          var i = [], o = lm(n, i), u = r.props, s = 0, f = 0;
          s < o.length;
          s++
        )
          for (var m = 0; m < u.length; m++, f++)
            t.props[f] = i[s] ? o[s].replace(/&\f/g, u[m]) : u[m] + " " + o[s];
      }
    }
  },
  om = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function tf(e, t) {
  switch (Hp(e, t)) {
    case 5103:
      return j + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return j + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return j + e + Cl + e + se + e + e;
    case 6828:
    case 4268:
      return j + e + se + e + e;
    case 6165:
      return j + e + se + "flex-" + e + e;
    case 5187:
      return (
        j + e + I(e, /(\w+).+(:[^]+)/, j + "box-$1$2" + se + "flex-$1$2") + e
      );
    case 5443:
      return j + e + se + "flex-item-" + I(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        j +
        e +
        se +
        "flex-line-pack" +
        I(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return j + e + se + I(e, "shrink", "negative") + e;
    case 5292:
      return j + e + se + I(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        j +
        "box-" +
        I(e, "-grow", "") +
        j +
        e +
        se +
        I(e, "grow", "positive") +
        e
      );
    case 4554:
      return j + I(e, /([^-])(transform)/g, "$1" + j + "$2") + e;
    case 6187:
      return (
        I(I(I(e, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return I(e, /(image-set\([^]*)/, j + "$1$`$1");
    case 4968:
      return (
        I(
          I(e, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + se + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        j +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return I(e, /(.+)-inline(.+)/, j + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Qe(e) - 1 - t > 6)
        switch (re(e, t + 1)) {
          case 109:
            if (re(e, t + 4) !== 45) break;
          case 102:
            return (
              I(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  j +
                  "$2-$3$1" +
                  Cl +
                  (re(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~ho(e, "stretch")
              ? tf(I(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (re(e, t + 1) !== 115) break;
    case 6444:
      switch (re(e, Qe(e) - 3 - (~ho(e, "!important") && 10))) {
        case 107:
          return I(e, ":", ":" + j) + e;
        case 101:
          return (
            I(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                j +
                (re(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                j +
                "$2$3$1" +
                se +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (re(e, t + 11)) {
        case 114:
          return j + e + se + I(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return j + e + se + I(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return j + e + se + I(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return j + e + se + e + e;
  }
  return e;
}
var um = function (t, n, r, l) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case du:
          t.return = tf(t.value, t.length);
          break;
        case Zc:
          return an([On(t, { value: I(t.value, "@", "@" + j) })], l);
        case fu:
          if (t.length)
            return Wp(t.props, function (i) {
              switch (Bp(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return an(
                    [On(t, { props: [I(i, /:(read-\w+)/, ":" + Cl + "$1")] })],
                    l
                  );
                case "::placeholder":
                  return an(
                    [
                      On(t, {
                        props: [I(i, /:(plac\w+)/, ":" + j + "input-$1")],
                      }),
                      On(t, { props: [I(i, /:(plac\w+)/, ":" + Cl + "$1")] }),
                      On(t, { props: [I(i, /:(plac\w+)/, se + "input-$1")] }),
                    ],
                    l
                  );
              }
              return "";
            });
      }
  },
  sm = [um],
  am = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var N = v.getAttribute("data-emotion");
        N.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var l = t.stylisPlugins || sm,
      i = {},
      o,
      u = [];
    (o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (v) {
          for (
            var N = v.getAttribute("data-emotion").split(" "), c = 1;
            c < N.length;
            c++
          )
            i[N[c]] = !0;
          u.push(v);
        }
      );
    var s,
      f = [im, om];
    {
      var m,
        p = [
          bp,
          tm(function (v) {
            m.insert(v);
          }),
        ],
        h = em(f.concat(l, p)),
        S = function (N) {
          return an(Jp(N), h);
        };
      s = function (N, c, a, d) {
        (m = a),
          S(N ? N + "{" + c.styles + "}" : c.styles),
          d && (g.inserted[c.name] = !0);
      };
    }
    var g = {
      key: n,
      sheet: new Ap({
        key: n,
        container: o,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return g.sheet.hydrate(u), g;
  },
  cm = !0;
function fm(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (l) {
      e[l] !== void 0 ? t.push(e[l] + ";") : (r += l + " ");
    }),
    r
  );
}
var nf = function (t, n, r) {
    var l = t.key + "-" + n.name;
    (r === !1 || cm === !1) &&
      t.registered[l] === void 0 &&
      (t.registered[l] = n.styles);
  },
  dm = function (t, n, r) {
    nf(t, n, r);
    var l = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + l : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function pm(e) {
  for (var t = 0, n, r = 0, l = e.length; l >= 4; ++r, l -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (l) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var mm = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  hm = /[A-Z]|^ms/g,
  vm = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  rf = function (t) {
    return t.charCodeAt(1) === 45;
  },
  zs = function (t) {
    return t != null && typeof t != "boolean";
  },
  wi = Gc(function (e) {
    return rf(e) ? e : e.replace(hm, "-$&").toLowerCase();
  }),
  Ts = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(vm, function (r, l, i) {
            return (Ke = { name: l, styles: i, next: Ke }), l;
          });
    }
    return mm[t] !== 1 && !rf(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function fr(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Ke = { name: n.name, styles: n.styles, next: Ke }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Ke = { name: r.name, styles: r.styles, next: Ke }), (r = r.next);
        var l = n.styles + ";";
        return l;
      }
      return ym(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ke,
          o = n(e);
        return (Ke = i), fr(e, t, o);
      }
      break;
    }
  }
  if (t == null) return n;
  var u = t[n];
  return u !== void 0 ? u : n;
}
function ym(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var l = 0; l < n.length; l++) r += fr(e, t, n[l]) + ";";
  else
    for (var i in n) {
      var o = n[i];
      if (typeof o != "object")
        t != null && t[o] !== void 0
          ? (r += i + "{" + t[o] + "}")
          : zs(o) && (r += wi(i) + ":" + Ts(i, o) + ";");
      else if (
        Array.isArray(o) &&
        typeof o[0] == "string" &&
        (t == null || t[o[0]] === void 0)
      )
        for (var u = 0; u < o.length; u++)
          zs(o[u]) && (r += wi(i) + ":" + Ts(i, o[u]) + ";");
      else {
        var s = fr(e, t, o);
        switch (i) {
          case "animation":
          case "animationName": {
            r += wi(i) + ":" + s + ";";
            break;
          }
          default:
            r += i + "{" + s + "}";
        }
      }
    }
  return r;
}
var Ls = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Ke,
  gm = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var l = !0,
      i = "";
    Ke = void 0;
    var o = t[0];
    o == null || o.raw === void 0
      ? ((l = !1), (i += fr(r, n, o)))
      : (i += o[0]);
    for (var u = 1; u < t.length; u++) (i += fr(r, n, t[u])), l && (i += o[u]);
    Ls.lastIndex = 0;
    for (var s = "", f; (f = Ls.exec(i)) !== null; ) s += "-" + f[1];
    var m = pm(i) + s;
    return { name: m, styles: i, next: Ke };
  },
  wm = function (t) {
    return t();
  },
  Sm = gu["useInsertionEffect"] ? gu["useInsertionEffect"] : !1,
  km = Sm || wm,
  lf = K.createContext(typeof HTMLElement < "u" ? am({ key: "css" }) : null);
lf.Provider;
var xm = function (t) {
    return K.forwardRef(function (n, r) {
      var l = K.useContext(lf);
      return t(n, l, r);
    });
  },
  Em = K.createContext({}),
  Cm = Ip,
  _m = function (t) {
    return t !== "theme";
  },
  Rs = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? Cm : _m;
  },
  Os = function (t, n, r) {
    var l;
    if (n) {
      var i = n.shouldForwardProp;
      l =
        t.__emotion_forwardProp && i
          ? function (o) {
              return t.__emotion_forwardProp(o) && i(o);
            }
          : i;
    }
    return typeof l != "function" && r && (l = t.__emotion_forwardProp), l;
  },
  Pm = function (t) {
    var n = t.cache,
      r = t.serialized,
      l = t.isStringTag;
    return (
      nf(n, r, l),
      km(function () {
        return dm(n, r, l);
      }),
      null
    );
  },
  Nm = function e(t, n) {
    var r = t.__emotion_real === t,
      l = (r && t.__emotion_base) || t,
      i,
      o;
    n !== void 0 && ((i = n.label), (o = n.target));
    var u = Os(t, n, r),
      s = u || Rs(l),
      f = !s("as");
    return function () {
      var m = arguments,
        p =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && p.push("label:" + i + ";"),
        m[0] == null || m[0].raw === void 0)
      )
        p.push.apply(p, m);
      else {
        p.push(m[0][0]);
        for (var h = m.length, S = 1; S < h; S++) p.push(m[S], m[0][S]);
      }
      var g = xm(function (v, N, c) {
        var a = (f && v.as) || l,
          d = "",
          y = [],
          x = v;
        if (v.theme == null) {
          x = {};
          for (var E in v) x[E] = v[E];
          x.theme = K.useContext(Em);
        }
        typeof v.className == "string"
          ? (d = fm(N.registered, y, v.className))
          : v.className != null && (d = v.className + " ");
        var k = gm(p.concat(y), N.registered, x);
        (d += N.key + "-" + k.name), o !== void 0 && (d += " " + o);
        var P = f && u === void 0 ? Rs(a) : s,
          F = {};
        for (var L in v) (f && L === "as") || (P(L) && (F[L] = v[L]));
        return (
          (F.className = d),
          (F.ref = c),
          K.createElement(
            K.Fragment,
            null,
            K.createElement(Pm, {
              cache: N,
              serialized: k,
              isStringTag: typeof a == "string",
            }),
            K.createElement(a, F)
          )
        );
      });
      return (
        (g.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof l == "string"
                ? l
                : l.displayName || l.name || "Component") +
              ")"),
        (g.defaultProps = t.defaultProps),
        (g.__emotion_real = g),
        (g.__emotion_base = l),
        (g.__emotion_styles = p),
        (g.__emotion_forwardProp = u),
        Object.defineProperty(g, "toString", {
          value: function () {
            return "." + o;
          },
        }),
        (g.withComponent = function (v, N) {
          return e(v, mo({}, n, N, { shouldForwardProp: Os(g, N, !0) })).apply(
            void 0,
            p
          );
        }),
        g
      );
    };
  },
  zm = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Pe = Nm.bind();
zm.forEach(function (e) {
  Pe[e] = Pe(e);
});
const Tm = [
    { id: "USD", nombre: "Dolar USA" },
    { id: "MXN", nombre: "Peso Mexicano" },
    { id: "EUR", nombre: "Euro" },
    { id: "GBP", nombre: "Libra Exterlina" },
    { id: "ARS", nombre: "Peso Argentino" },
  ],
  Lm = Pe.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 10px 0;
  }
`,
  Rm = Pe.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px;
  }
`,
  Ms = (e, t) => {
    const [n, r] = K.useState("");
    return [
      n,
      () =>
        z.jsxs(z.Fragment, {
          children: [
            z.jsx(Lm, { children: e }),
            z.jsxs(Rm, {
              value: n,
              onChange: (i) => r(i.target.value),
              children: [
                z.jsx("option", { value: "", children: "Seleccione" }),
                t.map((i) =>
                  z.jsx("option", { value: i.id, children: i.nombre }, i.id)
                ),
              ],
            }),
          ],
        }),
    ];
  },
  Om = Pe.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: center;
`,
  Mm = ({ children: e }) => z.jsx(Om, { children: e }),
  jm = Pe.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    padding: 8px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 14px;
    padding: 6px;
  }
`,
  Im = ({ setMonedas: e }) => {
    const [t, n] = K.useState([]),
      [r, l] = K.useState(!1),
      [i, o] = Ms("Elije tu Moneda", Tm),
      [u, s] = Ms("Elije tu CriptoMoneda", t);
    K.useEffect(() => {
      (async () => {
        const g = (
          await (
            await fetch(
              "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            )
          ).json()
        ).Data.map((v) => ({
          id: v.CoinInfo.Name,
          nombre: v.CoinInfo.FullName,
        }));
        n(g);
      })();
    }, []);
    const f = (m) => {
      if ((m.preventDefault(), [i, u].includes(""))) {
        l(!0);
        return;
      }
      l(!1), e({ moneda: i, criptomoneda: u });
    };
    return z.jsxs(z.Fragment, {
      children: [
        r && z.jsx(Mm, { children: "Todos los Campos son Obligatorios" }),
        z.jsxs("form", {
          onSubmit: f,
          children: [
            z.jsx(o, {}),
            z.jsx(s, {}),
            z.jsx(jm, { type: "submit", value: "Cotizar" }),
          ],
        }),
      ],
    });
  },
  Dm = Pe.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`,
  Fm = Pe.img`
  display: block;
  width: 120px;
`,
  Ar = Pe.p`
  font-size: 18px;
  span {
    font-weight: 700;
    display: block;
    text-align: end;
  }
`,
  Am = Pe.p`
  font-size: 24px;
  span {
    font-weight: 700;
    display: block;
    text-align: end;
  }
`,
  $m = ({ resultado: e }) => {
    const {
      PRICE: t,
      HIGHDAY: n,
      LOWDAY: r,
      CHANGEPCTHOUR: l,
      IMAGEURL: i,
      LASTUPDATE: o,
    } = e;
    return z.jsxs(Dm, {
      children: [
        z.jsx(Fm, {
          src: `https://www.cryptocompare.com/${i}`,
          alt: "Img Cripto",
        }),
        z.jsxs("div", {
          children: [
            z.jsxs(Am, {
              children: [
                "El Precio es de: ",
                z.jsx("br", {}),
                z.jsx("span", { children: t }),
              ],
            }),
            z.jsxs(Ar, {
              children: [
                "Precio + Alto del Día: ",
                z.jsx("br", {}),
                z.jsx("span", { children: n }),
              ],
            }),
            z.jsxs(Ar, {
              children: [
                "Precio + Bajo del Día: ",
                z.jsx("br", {}),
                z.jsx("span", { children: r }),
              ],
            }),
            z.jsxs(Ar, {
              children: [
                "Var.24hs: ",
                z.jsx("br", {}),
                z.jsxs("span", { children: [l, " %"] }),
              ],
            }),
            z.jsxs(Ar, {
              children: [
                "Última Actualización: ",
                z.jsx("br", {}),
                z.jsx("span", { children: o }),
              ],
            }),
          ],
        }),
      ],
    });
  };
const Um = "./assets/imagen-criptos-c0430b0f.png",
  Vm = Pe.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`,
  Hm = Pe.img`
  max-width: 480px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 30px;
  }
`,
  Bm = Pe.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &&::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
function Wm() {
  const [e, t] = K.useState({}),
    [n, r] = K.useState({}),
    l = K.useRef(null);
  return (
    K.useEffect(() => {
      Object.keys(e).length > 0 &&
        (async () => {
          const { moneda: o, criptomoneda: u } = e,
            s = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${u}&tsyms=${o}`,
            m = await (await fetch(s)).json();
          r(m.DISPLAY[u][o]);
        })();
    }, [e]),
    K.useEffect(() => {
      l.current &&
        l.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
    }, [n]),
    z.jsxs(Vm, {
      children: [
        z.jsx(Hm, { src: Um, alt: "Imagenes" }),
        z.jsxs("div", {
          children: [
            z.jsx(Bm, { children: "Cotiza Cripto-Monedas al Instante" }),
            z.jsx(Im, { setMonedas: t }),
            n.PRICE &&
              z.jsx(z.Fragment, {
                children: z.jsx("div", {
                  ref: l,
                  children: z.jsx($m, { resultado: n }),
                }),
              }),
          ],
        }),
      ],
    })
  );
}
Si.createRoot(document.getElementById("root")).render(
  z.jsx(Bs.StrictMode, { children: z.jsx(Wm, {}) })
);
