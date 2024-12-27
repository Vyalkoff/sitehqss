(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
var Fi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var vp = {
    exports: {}
}
  , go = {}
  , yp = {
    exports: {}
}
  , H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ti = Symbol.for("react.element")
  , Xv = Symbol.for("react.portal")
  , Kv = Symbol.for("react.fragment")
  , qv = Symbol.for("react.strict_mode")
  , Zv = Symbol.for("react.profiler")
  , Jv = Symbol.for("react.provider")
  , ey = Symbol.for("react.context")
  , ty = Symbol.for("react.forward_ref")
  , ny = Symbol.for("react.suspense")
  , ry = Symbol.for("react.memo")
  , iy = Symbol.for("react.lazy")
  , _c = Symbol.iterator;
function sy(e) {
    return e === null || typeof e != "object" ? null : (e = _c && e[_c] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var xp = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , wp = Object.assign
  , Sp = {};
function Tr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Sp,
    this.updater = n || xp
}
Tr.prototype.isReactComponent = {};
Tr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Tr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Tp() {}
Tp.prototype = Tr.prototype;
function tu(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Sp,
    this.updater = n || xp
}
var nu = tu.prototype = new Tp;
nu.constructor = tu;
wp(nu, Tr.prototype);
nu.isPureReactComponent = !0;
var jc = Array.isArray
  , Ep = Object.prototype.hasOwnProperty
  , ru = {
    current: null
}
  , Cp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Pp(e, t, n) {
    var r, i = {}, s = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            Ep.call(t, r) && !Cp.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: Ti,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: ru.current
    }
}
function oy(e, t) {
    return {
        $$typeof: Ti,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function iu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ti
}
function ay(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Oc = /\/+/g;
function Yo(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ay("" + e.key) : t.toString(36)
}
function ms(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Ti:
            case Xv:
                o = !0
            }
        }
    if (o)
        return o = e,
        i = i(o),
        e = r === "" ? "." + Yo(o, 0) : r,
        jc(i) ? (n = "",
        e != null && (n = e.replace(Oc, "$&/") + "/"),
        ms(i, t, n, "", function(u) {
            return u
        })) : i != null && (iu(i) && (i = oy(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Oc, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    jc(e))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var a = r + Yo(s, l);
            o += ms(s, t, n, a, i)
        }
    else if (a = sy(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(s = e.next()).done; )
            s = s.value,
            a = r + Yo(s, l++),
            o += ms(s, t, n, a, i);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Bi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return ms(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }),
    r
}
function ly(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Le = {
    current: null
}
  , gs = {
    transition: null
}
  , uy = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: gs,
    ReactCurrentOwner: ru
};
H.Children = {
    map: Bi,
    forEach: function(e, t, n) {
        Bi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Bi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Bi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!iu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
H.Component = Tr;
H.Fragment = Kv;
H.Profiler = Zv;
H.PureComponent = tu;
H.StrictMode = qv;
H.Suspense = ny;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uy;
H.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = wp({}, e.props)
      , i = e.key
      , s = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        o = ru.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            Ep.call(t, a) && !Cp.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Ti,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
}
;
H.createContext = function(e) {
    return e = {
        $$typeof: ey,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Jv,
        _context: e
    },
    e.Consumer = e
}
;
H.createElement = Pp;
H.createFactory = function(e) {
    var t = Pp.bind(null, e);
    return t.type = e,
    t
}
;
H.createRef = function() {
    return {
        current: null
    }
}
;
H.forwardRef = function(e) {
    return {
        $$typeof: ty,
        render: e
    }
}
;
H.isValidElement = iu;
H.lazy = function(e) {
    return {
        $$typeof: iy,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: ly
    }
}
;
H.memo = function(e, t) {
    return {
        $$typeof: ry,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
H.startTransition = function(e) {
    var t = gs.transition;
    gs.transition = {};
    try {
        e()
    } finally {
        gs.transition = t
    }
}
;
H.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
H.useCallback = function(e, t) {
    return Le.current.useCallback(e, t)
}
;
H.useContext = function(e) {
    return Le.current.useContext(e)
}
;
H.useDebugValue = function() {}
;
H.useDeferredValue = function(e) {
    return Le.current.useDeferredValue(e)
}
;
H.useEffect = function(e, t) {
    return Le.current.useEffect(e, t)
}
;
H.useId = function() {
    return Le.current.useId()
}
;
H.useImperativeHandle = function(e, t, n) {
    return Le.current.useImperativeHandle(e, t, n)
}
;
H.useInsertionEffect = function(e, t) {
    return Le.current.useInsertionEffect(e, t)
}
;
H.useLayoutEffect = function(e, t) {
    return Le.current.useLayoutEffect(e, t)
}
;
H.useMemo = function(e, t) {
    return Le.current.useMemo(e, t)
}
;
H.useReducer = function(e, t, n) {
    return Le.current.useReducer(e, t, n)
}
;
H.useRef = function(e) {
    return Le.current.useRef(e)
}
;
H.useState = function(e) {
    return Le.current.useState(e)
}
;
H.useSyncExternalStore = function(e, t, n) {
    return Le.current.useSyncExternalStore(e, t, n)
}
;
H.useTransition = function() {
    return Le.current.useTransition()
}
;
H.version = "18.2.0";
yp.exports = H;
var V = yp.exports;
const se = gp(V);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cy = V
  , dy = Symbol.for("react.element")
  , fy = Symbol.for("react.fragment")
  , py = Object.prototype.hasOwnProperty
  , hy = cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , my = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function kp(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        py.call(t, r) && !my.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: dy,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: hy.current
    }
}
go.Fragment = fy;
go.jsx = kp;
go.jsxs = kp;
vp.exports = go;
var y = vp.exports
  , Ha = {}
  , bp = {
    exports: {}
}
  , Ue = {}
  , Lp = {
    exports: {}
}
  , Mp = {};
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
    function t(j, A) {
        var R = j.length;
        j.push(A);
        e: for (; 0 < R; ) {
            var F = R - 1 >>> 1
              , W = j[F];
            if (0 < i(W, A))
                j[F] = A,
                j[R] = W,
                R = F;
            else
                break e
        }
    }
    function n(j) {
        return j.length === 0 ? null : j[0]
    }
    function r(j) {
        if (j.length === 0)
            return null;
        var A = j[0]
          , R = j.pop();
        if (R !== A) {
            j[0] = R;
            e: for (var F = 0, W = j.length, hn = W >>> 1; F < hn; ) {
                var ct = 2 * (F + 1) - 1
                  , Bn = j[ct]
                  , Ve = ct + 1
                  , mn = j[Ve];
                if (0 > i(Bn, R))
                    Ve < W && 0 > i(mn, Bn) ? (j[F] = mn,
                    j[Ve] = R,
                    F = Ve) : (j[F] = Bn,
                    j[ct] = R,
                    F = ct);
                else if (Ve < W && 0 > i(mn, R))
                    j[F] = mn,
                    j[Ve] = R,
                    F = Ve;
                else
                    break e
            }
        }
        return A
    }
    function i(j, A) {
        var R = j.sortIndex - A.sortIndex;
        return R !== 0 ? R : j.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , l = o.now();
        e.unstable_now = function() {
            return o.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , d = null
      , p = 3
      , g = !1
      , x = !1
      , v = !1
      , E = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(j) {
        for (var A = n(u); A !== null; ) {
            if (A.callback === null)
                r(u);
            else if (A.startTime <= j)
                r(u),
                A.sortIndex = A.expirationTime,
                t(a, A);
            else
                break;
            A = n(u)
        }
    }
    function w(j) {
        if (v = !1,
        h(j),
        !x)
            if (n(a) !== null)
                x = !0,
                N(S);
            else {
                var A = n(u);
                A !== null && $(w, A.startTime - j)
            }
    }
    function S(j, A) {
        x = !1,
        v && (v = !1,
        m(P),
        P = -1),
        g = !0;
        var R = p;
        try {
            for (h(A),
            d = n(a); d !== null && (!(d.expirationTime > A) || j && !I()); ) {
                var F = d.callback;
                if (typeof F == "function") {
                    d.callback = null,
                    p = d.priorityLevel;
                    var W = F(d.expirationTime <= A);
                    A = e.unstable_now(),
                    typeof W == "function" ? d.callback = W : d === n(a) && r(a),
                    h(A)
                } else
                    r(a);
                d = n(a)
            }
            if (d !== null)
                var hn = !0;
            else {
                var ct = n(u);
                ct !== null && $(w, ct.startTime - A),
                hn = !1
            }
            return hn
        } finally {
            d = null,
            p = R,
            g = !1
        }
    }
    var C = !1
      , M = null
      , P = -1
      , L = 5
      , b = -1;
    function I() {
        return !(e.unstable_now() - b < L)
    }
    function O() {
        if (M !== null) {
            var j = e.unstable_now();
            b = j;
            var A = !0;
            try {
                A = M(!0, j)
            } finally {
                A ? _() : (C = !1,
                M = null)
            }
        } else
            C = !1
    }
    var _;
    if (typeof f == "function")
        _ = function() {
            f(O)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var T = new MessageChannel
          , k = T.port2;
        T.port1.onmessage = O,
        _ = function() {
            k.postMessage(null)
        }
    } else
        _ = function() {
            E(O, 0)
        }
        ;
    function N(j) {
        M = j,
        C || (C = !0,
        _())
    }
    function $(j, A) {
        P = E(function() {
            j(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(j) {
        j.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || g || (x = !0,
        N(S))
    }
    ,
    e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < j ? Math.floor(1e3 / j) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return p
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(j) {
        switch (p) {
        case 1:
        case 2:
        case 3:
            var A = 3;
            break;
        default:
            A = p
        }
        var R = p;
        p = A;
        try {
            return j()
        } finally {
            p = R
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(j, A) {
        switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            j = 3
        }
        var R = p;
        p = j;
        try {
            return A()
        } finally {
            p = R
        }
    }
    ,
    e.unstable_scheduleCallback = function(j, A, R) {
        var F = e.unstable_now();
        switch (typeof R == "object" && R !== null ? (R = R.delay,
        R = typeof R == "number" && 0 < R ? F + R : F) : R = F,
        j) {
        case 1:
            var W = -1;
            break;
        case 2:
            W = 250;
            break;
        case 5:
            W = 1073741823;
            break;
        case 4:
            W = 1e4;
            break;
        default:
            W = 5e3
        }
        return W = R + W,
        j = {
            id: c++,
            callback: A,
            priorityLevel: j,
            startTime: R,
            expirationTime: W,
            sortIndex: -1
        },
        R > F ? (j.sortIndex = R,
        t(u, j),
        n(a) === null && j === n(u) && (v ? (m(P),
        P = -1) : v = !0,
        $(w, R - F))) : (j.sortIndex = W,
        t(a, j),
        x || g || (x = !0,
        N(S))),
        j
    }
    ,
    e.unstable_shouldYield = I,
    e.unstable_wrapCallback = function(j) {
        var A = p;
        return function() {
            var R = p;
            p = A;
            try {
                return j.apply(this, arguments)
            } finally {
                p = R
            }
        }
    }
}
)(Mp);
Lp.exports = Mp;
var gy = Lp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _p = V
  , $e = gy;
function D(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var jp = new Set
  , ti = {};
function Vn(e, t) {
    fr(e, t),
    fr(e + "Capture", t)
}
function fr(e, t) {
    for (ti[e] = t,
    e = 0; e < t.length; e++)
        jp.add(t[e])
}
var jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ua = Object.prototype.hasOwnProperty
  , vy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Ac = {}
  , Nc = {};
function yy(e) {
    return Ua.call(Nc, e) ? !0 : Ua.call(Ac, e) ? !1 : vy.test(e) ? Nc[e] = !0 : (Ac[e] = !0,
    !1)
}
function xy(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function wy(e, t, n, r) {
    if (t === null || typeof t > "u" || xy(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Me(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    we[e] = new Me(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    we[t] = new Me(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    we[e] = new Me(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    we[e] = new Me(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    we[e] = new Me(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    we[e] = new Me(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    we[e] = new Me(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    we[e] = new Me(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    we[e] = new Me(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var su = /[\-:]([a-z])/g;
function ou(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(su, ou);
    we[t] = new Me(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(su, ou);
    we[t] = new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(su, ou);
    we[t] = new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    we[e] = new Me(e,1,!1,e.toLowerCase(),null,!1,!1)
});
we.xlinkHref = new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    we[e] = new Me(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function au(e, t, n, r) {
    var i = we.hasOwnProperty(t) ? we[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (wy(t, n, i, r) && (n = null),
    r || i === null ? yy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Dt = _p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , $i = Symbol.for("react.element")
  , Hn = Symbol.for("react.portal")
  , Un = Symbol.for("react.fragment")
  , lu = Symbol.for("react.strict_mode")
  , Wa = Symbol.for("react.profiler")
  , Op = Symbol.for("react.provider")
  , Ap = Symbol.for("react.context")
  , uu = Symbol.for("react.forward_ref")
  , Ga = Symbol.for("react.suspense")
  , Ya = Symbol.for("react.suspense_list")
  , cu = Symbol.for("react.memo")
  , $t = Symbol.for("react.lazy")
  , Np = Symbol.for("react.offscreen")
  , Ic = Symbol.iterator;
function kr(e) {
    return e === null || typeof e != "object" ? null : (e = Ic && e[Ic] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ie = Object.assign, Qo;
function Dr(e) {
    if (Qo === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Qo = t && t[1] || ""
        }
    return `
` + Qo + e
}
var Xo = !1;
function Ko(e, t) {
    if (!e || Xo)
        return "";
    Xo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l]; )
                l--;
            for (; 1 <= o && 0 <= l; o--,
            l--)
                if (i[o] !== s[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--,
                            l--,
                            0 > l || i[o] !== s[l]) {
                                var a = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        Xo = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Dr(e) : ""
}
function Sy(e) {
    switch (e.tag) {
    case 5:
        return Dr(e.type);
    case 16:
        return Dr("Lazy");
    case 13:
        return Dr("Suspense");
    case 19:
        return Dr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Ko(e.type, !1),
        e;
    case 11:
        return e = Ko(e.type.render, !1),
        e;
    case 1:
        return e = Ko(e.type, !0),
        e;
    default:
        return ""
    }
}
function Qa(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Un:
        return "Fragment";
    case Hn:
        return "Portal";
    case Wa:
        return "Profiler";
    case lu:
        return "StrictMode";
    case Ga:
        return "Suspense";
    case Ya:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Ap:
            return (e.displayName || "Context") + ".Consumer";
        case Op:
            return (e._context.displayName || "Context") + ".Provider";
        case uu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case cu:
            return t = e.displayName || null,
            t !== null ? t : Qa(e.type) || "Memo";
        case $t:
            t = e._payload,
            e = e._init;
            try {
                return Qa(e(t))
            } catch {}
        }
    return null
}
function Ty(e) {
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
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return Qa(t);
    case 8:
        return t === lu ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function on(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Ip(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Ey(e) {
    var t = Ip(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Hi(e) {
    e._valueTracker || (e._valueTracker = Ey(e))
}
function Dp(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Ip(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Os(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Xa(e, t) {
    var n = t.checked;
    return ie({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Dc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = on(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Vp(e, t) {
    t = t.checked,
    t != null && au(e, "checked", t, !1)
}
function Ka(e, t) {
    Vp(e, t);
    var n = on(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? qa(e, t.type, n) : t.hasOwnProperty("defaultValue") && qa(e, t.type, on(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Vc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function qa(e, t, n) {
    (t !== "number" || Os(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Vr = Array.isArray;
function sr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + on(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Za(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(D(91));
    return ie({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Rc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(D(92));
            if (Vr(n)) {
                if (1 < n.length)
                    throw Error(D(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: on(n)
    }
}
function Rp(e, t) {
    var n = on(t.value)
      , r = on(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function zc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function zp(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Ja(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? zp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ui, Fp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ui = Ui || document.createElement("div"),
        Ui.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ui.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function ni(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Br = {
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
}
  , Cy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Br).forEach(function(e) {
    Cy.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Br[t] = Br[e]
    })
});
function Bp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Br.hasOwnProperty(e) && Br[e] ? ("" + t).trim() : t + "px"
}
function $p(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Bp(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var Py = ie({
    menuitem: !0
}, {
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
});
function el(e, t) {
    if (t) {
        if (Py[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(D(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(D(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(D(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(D(62))
    }
}
function tl(e, t) {
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
        return !0
    }
}
var nl = null;
function du(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var rl = null
  , or = null
  , ar = null;
function Fc(e) {
    if (e = Pi(e)) {
        if (typeof rl != "function")
            throw Error(D(280));
        var t = e.stateNode;
        t && (t = So(t),
        rl(e.stateNode, e.type, t))
    }
}
function Hp(e) {
    or ? ar ? ar.push(e) : ar = [e] : or = e
}
function Up() {
    if (or) {
        var e = or
          , t = ar;
        if (ar = or = null,
        Fc(e),
        t)
            for (e = 0; e < t.length; e++)
                Fc(t[e])
    }
}
function Wp(e, t) {
    return e(t)
}
function Gp() {}
var qo = !1;
function Yp(e, t, n) {
    if (qo)
        return e(t, n);
    qo = !0;
    try {
        return Wp(e, t, n)
    } finally {
        qo = !1,
        (or !== null || ar !== null) && (Gp(),
        Up())
    }
}
function ri(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = So(n);
    if (r === null)
        return null;
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(D(231, t, typeof n));
    return n
}
var il = !1;
if (jt)
    try {
        var br = {};
        Object.defineProperty(br, "passive", {
            get: function() {
                il = !0
            }
        }),
        window.addEventListener("test", br, br),
        window.removeEventListener("test", br, br)
    } catch {
        il = !1
    }
function ky(e, t, n, r, i, s, o, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var $r = !1
  , As = null
  , Ns = !1
  , sl = null
  , by = {
    onError: function(e) {
        $r = !0,
        As = e
    }
};
function Ly(e, t, n, r, i, s, o, l, a) {
    $r = !1,
    As = null,
    ky.apply(by, arguments)
}
function My(e, t, n, r, i, s, o, l, a) {
    if (Ly.apply(this, arguments),
    $r) {
        if ($r) {
            var u = As;
            $r = !1,
            As = null
        } else
            throw Error(D(198));
        Ns || (Ns = !0,
        sl = u)
    }
}
function Rn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Qp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Bc(e) {
    if (Rn(e) !== e)
        throw Error(D(188))
}
function _y(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Rn(e),
        t === null)
            throw Error(D(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return Bc(i),
                    e;
                if (s === r)
                    return Bc(i),
                    t;
                s = s.sibling
            }
            throw Error(D(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var o = !1, l = i.child; l; ) {
                if (l === n) {
                    o = !0,
                    n = i,
                    r = s;
                    break
                }
                if (l === r) {
                    o = !0,
                    r = i,
                    n = s;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        o = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (l === r) {
                        o = !0,
                        r = s,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!o)
                    throw Error(D(189))
            }
        }
        if (n.alternate !== r)
            throw Error(D(190))
    }
    if (n.tag !== 3)
        throw Error(D(188));
    return n.stateNode.current === n ? e : t
}
function Xp(e) {
    return e = _y(e),
    e !== null ? Kp(e) : null
}
function Kp(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Kp(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var qp = $e.unstable_scheduleCallback
  , $c = $e.unstable_cancelCallback
  , jy = $e.unstable_shouldYield
  , Oy = $e.unstable_requestPaint
  , ue = $e.unstable_now
  , Ay = $e.unstable_getCurrentPriorityLevel
  , fu = $e.unstable_ImmediatePriority
  , Zp = $e.unstable_UserBlockingPriority
  , Is = $e.unstable_NormalPriority
  , Ny = $e.unstable_LowPriority
  , Jp = $e.unstable_IdlePriority
  , vo = null
  , gt = null;
function Iy(e) {
    if (gt && typeof gt.onCommitFiberRoot == "function")
        try {
            gt.onCommitFiberRoot(vo, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var ot = Math.clz32 ? Math.clz32 : Ry
  , Dy = Math.log
  , Vy = Math.LN2;
function Ry(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Dy(e) / Vy | 0) | 0
}
var Wi = 64
  , Gi = 4194304;
function Rr(e) {
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
        return e
    }
}
function Ds(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var l = o & ~i;
        l !== 0 ? r = Rr(l) : (s &= o,
        s !== 0 && (r = Rr(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = Rr(o) : s !== 0 && (r = Rr(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    s = t & -t,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - ot(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function zy(e, t) {
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
        return -1
    }
}
function Fy(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - ot(s)
          , l = 1 << o
          , a = i[o];
        a === -1 ? (!(l & n) || l & r) && (i[o] = zy(l, t)) : a <= t && (e.expiredLanes |= l),
        s &= ~l
    }
}
function ol(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function eh() {
    var e = Wi;
    return Wi <<= 1,
    !(Wi & 4194240) && (Wi = 64),
    e
}
function Zo(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Ei(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - ot(t),
    e[t] = n
}
function By(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - ot(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function pu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - ot(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var G = 0;
function th(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var nh, hu, rh, ih, sh, al = !1, Yi = [], Kt = null, qt = null, Zt = null, ii = new Map, si = new Map, Wt = [], $y = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Hc(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Kt = null;
        break;
    case "dragenter":
    case "dragleave":
        qt = null;
        break;
    case "mouseover":
    case "mouseout":
        Zt = null;
        break;
    case "pointerover":
    case "pointerout":
        ii.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        si.delete(t.pointerId)
    }
}
function Lr(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = Pi(t),
    t !== null && hu(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function Hy(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Kt = Lr(Kt, e, t, n, r, i),
        !0;
    case "dragenter":
        return qt = Lr(qt, e, t, n, r, i),
        !0;
    case "mouseover":
        return Zt = Lr(Zt, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return ii.set(s, Lr(ii.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        si.set(s, Lr(si.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function oh(e) {
    var t = En(e.target);
    if (t !== null) {
        var n = Rn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Qp(n),
                t !== null) {
                    e.blockedOn = t,
                    sh(e.priority, function() {
                        rh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function vs(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            nl = r,
            n.target.dispatchEvent(r),
            nl = null
        } else
            return t = Pi(n),
            t !== null && hu(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Uc(e, t, n) {
    vs(e) && n.delete(t)
}
function Uy() {
    al = !1,
    Kt !== null && vs(Kt) && (Kt = null),
    qt !== null && vs(qt) && (qt = null),
    Zt !== null && vs(Zt) && (Zt = null),
    ii.forEach(Uc),
    si.forEach(Uc)
}
function Mr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    al || (al = !0,
    $e.unstable_scheduleCallback($e.unstable_NormalPriority, Uy)))
}
function oi(e) {
    function t(i) {
        return Mr(i, e)
    }
    if (0 < Yi.length) {
        Mr(Yi[0], e);
        for (var n = 1; n < Yi.length; n++) {
            var r = Yi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Kt !== null && Mr(Kt, e),
    qt !== null && Mr(qt, e),
    Zt !== null && Mr(Zt, e),
    ii.forEach(t),
    si.forEach(t),
    n = 0; n < Wt.length; n++)
        r = Wt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Wt.length && (n = Wt[0],
    n.blockedOn === null); )
        oh(n),
        n.blockedOn === null && Wt.shift()
}
var lr = Dt.ReactCurrentBatchConfig
  , Vs = !0;
function Wy(e, t, n, r) {
    var i = G
      , s = lr.transition;
    lr.transition = null;
    try {
        G = 1,
        mu(e, t, n, r)
    } finally {
        G = i,
        lr.transition = s
    }
}
function Gy(e, t, n, r) {
    var i = G
      , s = lr.transition;
    lr.transition = null;
    try {
        G = 4,
        mu(e, t, n, r)
    } finally {
        G = i,
        lr.transition = s
    }
}
function mu(e, t, n, r) {
    if (Vs) {
        var i = ll(e, t, n, r);
        if (i === null)
            la(e, t, r, Rs, n),
            Hc(e, r);
        else if (Hy(i, e, t, n, r))
            r.stopPropagation();
        else if (Hc(e, r),
        t & 4 && -1 < $y.indexOf(e)) {
            for (; i !== null; ) {
                var s = Pi(i);
                if (s !== null && nh(s),
                s = ll(e, t, n, r),
                s === null && la(e, t, r, Rs, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            la(e, t, r, null, n)
    }
}
var Rs = null;
function ll(e, t, n, r) {
    if (Rs = null,
    e = du(r),
    e = En(e),
    e !== null)
        if (t = Rn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Qp(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Rs = e,
    null
}
function ah(e) {
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
        switch (Ay()) {
        case fu:
            return 1;
        case Zp:
            return 4;
        case Is:
        case Ny:
            return 16;
        case Jp:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Yt = null
  , gu = null
  , ys = null;
function lh() {
    if (ys)
        return ys;
    var e, t = gu, n = t.length, r, i = "value"in Yt ? Yt.value : Yt.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return ys = i.slice(e, 1 < r ? 1 - r : void 0)
}
function xs(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Qi() {
    return !0
}
function Wc() {
    return !1
}
function We(e) {
    function t(n, r, i, s, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Qi : Wc,
        this.isPropagationStopped = Wc,
        this
    }
    return ie(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Qi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Qi)
        },
        persist: function() {},
        isPersistent: Qi
    }),
    t
}
var Er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, vu = We(Er), Ci = ie({}, Er, {
    view: 0,
    detail: 0
}), Yy = We(Ci), Jo, ea, _r, yo = ie({}, Ci, {
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
    getModifierState: yu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== _r && (_r && e.type === "mousemove" ? (Jo = e.screenX - _r.screenX,
        ea = e.screenY - _r.screenY) : ea = Jo = 0,
        _r = e),
        Jo)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ea
    }
}), Gc = We(yo), Qy = ie({}, yo, {
    dataTransfer: 0
}), Xy = We(Qy), Ky = ie({}, Ci, {
    relatedTarget: 0
}), ta = We(Ky), qy = ie({}, Er, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Zy = We(qy), Jy = ie({}, Er, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), e0 = We(Jy), t0 = ie({}, Er, {
    data: 0
}), Yc = We(t0), n0 = {
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
}, r0 = {
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
}, i0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function s0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = i0[e]) ? !!t[e] : !1
}
function yu() {
    return s0
}
var o0 = ie({}, Ci, {
    key: function(e) {
        if (e.key) {
            var t = n0[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = xs(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? r0[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yu,
    charCode: function(e) {
        return e.type === "keypress" ? xs(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? xs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , a0 = We(o0)
  , l0 = ie({}, yo, {
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
})
  , Qc = We(l0)
  , u0 = ie({}, Ci, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yu
})
  , c0 = We(u0)
  , d0 = ie({}, Er, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , f0 = We(d0)
  , p0 = ie({}, yo, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , h0 = We(p0)
  , m0 = [9, 13, 27, 32]
  , xu = jt && "CompositionEvent"in window
  , Hr = null;
jt && "documentMode"in document && (Hr = document.documentMode);
var g0 = jt && "TextEvent"in window && !Hr
  , uh = jt && (!xu || Hr && 8 < Hr && 11 >= Hr)
  , Xc = " "
  , Kc = !1;
function ch(e, t) {
    switch (e) {
    case "keyup":
        return m0.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function dh(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Wn = !1;
function v0(e, t) {
    switch (e) {
    case "compositionend":
        return dh(t);
    case "keypress":
        return t.which !== 32 ? null : (Kc = !0,
        Xc);
    case "textInput":
        return e = t.data,
        e === Xc && Kc ? null : e;
    default:
        return null
    }
}
function y0(e, t) {
    if (Wn)
        return e === "compositionend" || !xu && ch(e, t) ? (e = lh(),
        ys = gu = Yt = null,
        Wn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return uh && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var x0 = {
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
function qc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!x0[e.type] : t === "textarea"
}
function fh(e, t, n, r) {
    Hp(r),
    t = zs(t, "onChange"),
    0 < t.length && (n = new vu("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Ur = null
  , ai = null;
function w0(e) {
    Eh(e, 0)
}
function xo(e) {
    var t = Qn(e);
    if (Dp(t))
        return e
}
function S0(e, t) {
    if (e === "change")
        return t
}
var ph = !1;
if (jt) {
    var na;
    if (jt) {
        var ra = "oninput"in document;
        if (!ra) {
            var Zc = document.createElement("div");
            Zc.setAttribute("oninput", "return;"),
            ra = typeof Zc.oninput == "function"
        }
        na = ra
    } else
        na = !1;
    ph = na && (!document.documentMode || 9 < document.documentMode)
}
function Jc() {
    Ur && (Ur.detachEvent("onpropertychange", hh),
    ai = Ur = null)
}
function hh(e) {
    if (e.propertyName === "value" && xo(ai)) {
        var t = [];
        fh(t, ai, e, du(e)),
        Yp(w0, t)
    }
}
function T0(e, t, n) {
    e === "focusin" ? (Jc(),
    Ur = t,
    ai = n,
    Ur.attachEvent("onpropertychange", hh)) : e === "focusout" && Jc()
}
function E0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return xo(ai)
}
function C0(e, t) {
    if (e === "click")
        return xo(t)
}
function P0(e, t) {
    if (e === "input" || e === "change")
        return xo(t)
}
function k0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var ut = typeof Object.is == "function" ? Object.is : k0;
function li(e, t) {
    if (ut(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ua.call(t, i) || !ut(e[i], t[i]))
            return !1
    }
    return !0
}
function ed(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function td(e, t) {
    var n = ed(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ed(n)
    }
}
function mh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mh(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function gh() {
    for (var e = window, t = Os(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Os(e.document)
    }
    return t
}
function wu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function b0(e) {
    var t = gh()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && mh(n.ownerDocument.documentElement, n)) {
        if (r !== null && wu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !e.extend && s > r && (i = r,
                r = s,
                s = i),
                i = td(n, s);
                var o = td(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var L0 = jt && "documentMode"in document && 11 >= document.documentMode
  , Gn = null
  , ul = null
  , Wr = null
  , cl = !1;
function nd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    cl || Gn == null || Gn !== Os(r) || (r = Gn,
    "selectionStart"in r && wu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Wr && li(Wr, r) || (Wr = r,
    r = zs(ul, "onSelect"),
    0 < r.length && (t = new vu("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Gn)))
}
function Xi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Yn = {
    animationend: Xi("Animation", "AnimationEnd"),
    animationiteration: Xi("Animation", "AnimationIteration"),
    animationstart: Xi("Animation", "AnimationStart"),
    transitionend: Xi("Transition", "TransitionEnd")
}
  , ia = {}
  , vh = {};
jt && (vh = document.createElement("div").style,
"AnimationEvent"in window || (delete Yn.animationend.animation,
delete Yn.animationiteration.animation,
delete Yn.animationstart.animation),
"TransitionEvent"in window || delete Yn.transitionend.transition);
function wo(e) {
    if (ia[e])
        return ia[e];
    if (!Yn[e])
        return e;
    var t = Yn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in vh)
            return ia[e] = t[n];
    return e
}
var yh = wo("animationend")
  , xh = wo("animationiteration")
  , wh = wo("animationstart")
  , Sh = wo("transitionend")
  , Th = new Map
  , rd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function cn(e, t) {
    Th.set(e, t),
    Vn(t, [e])
}
for (var sa = 0; sa < rd.length; sa++) {
    var oa = rd[sa]
      , M0 = oa.toLowerCase()
      , _0 = oa[0].toUpperCase() + oa.slice(1);
    cn(M0, "on" + _0)
}
cn(yh, "onAnimationEnd");
cn(xh, "onAnimationIteration");
cn(wh, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(Sh, "onTransitionEnd");
fr("onMouseEnter", ["mouseout", "mouseover"]);
fr("onMouseLeave", ["mouseout", "mouseover"]);
fr("onPointerEnter", ["pointerout", "pointerover"]);
fr("onPointerLeave", ["pointerout", "pointerover"]);
Vn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , j0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));
function id(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    My(r, t, void 0, e),
    e.currentTarget = null
}
function Eh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== s && i.isPropagationStopped())
                        break e;
                    id(i, l, u),
                    s = a
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (l = r[o],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== s && i.isPropagationStopped())
                        break e;
                    id(i, l, u),
                    s = a
                }
        }
    }
    if (Ns)
        throw e = sl,
        Ns = !1,
        sl = null,
        e
}
function Q(e, t) {
    var n = t[ml];
    n === void 0 && (n = t[ml] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Ch(t, e, 2, !1),
    n.add(r))
}
function aa(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Ch(n, e, r, t)
}
var Ki = "_reactListening" + Math.random().toString(36).slice(2);
function ui(e) {
    if (!e[Ki]) {
        e[Ki] = !0,
        jp.forEach(function(n) {
            n !== "selectionchange" && (j0.has(n) || aa(n, !1, e),
            aa(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ki] || (t[Ki] = !0,
        aa("selectionchange", !1, t))
    }
}
function Ch(e, t, n, r) {
    switch (ah(t)) {
    case 1:
        var i = Wy;
        break;
    case 4:
        i = Gy;
        break;
    default:
        i = mu
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !il || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function la(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var a = o.tag;
                        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; l !== null; ) {
                    if (o = En(l),
                    o === null)
                        return;
                    if (a = o.tag,
                    a === 5 || a === 6) {
                        r = s = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Yp(function() {
        var u = s
          , c = du(n)
          , d = [];
        e: {
            var p = Th.get(e);
            if (p !== void 0) {
                var g = vu
                  , x = e;
                switch (e) {
                case "keypress":
                    if (xs(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    g = a0;
                    break;
                case "focusin":
                    x = "focus",
                    g = ta;
                    break;
                case "focusout":
                    x = "blur",
                    g = ta;
                    break;
                case "beforeblur":
                case "afterblur":
                    g = ta;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    g = Gc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    g = Xy;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    g = c0;
                    break;
                case yh:
                case xh:
                case wh:
                    g = Zy;
                    break;
                case Sh:
                    g = f0;
                    break;
                case "scroll":
                    g = Yy;
                    break;
                case "wheel":
                    g = h0;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    g = e0;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    g = Qc
                }
                var v = (t & 4) !== 0
                  , E = !v && e === "scroll"
                  , m = v ? p !== null ? p + "Capture" : null : p;
                v = [];
                for (var f = u, h; f !== null; ) {
                    h = f;
                    var w = h.stateNode;
                    if (h.tag === 5 && w !== null && (h = w,
                    m !== null && (w = ri(f, m),
                    w != null && v.push(ci(f, w, h)))),
                    E)
                        break;
                    f = f.return
                }
                0 < v.length && (p = new g(p,x,null,n,c),
                d.push({
                    event: p,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover",
                g = e === "mouseout" || e === "pointerout",
                p && n !== nl && (x = n.relatedTarget || n.fromElement) && (En(x) || x[Ot]))
                    break e;
                if ((g || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window,
                g ? (x = n.relatedTarget || n.toElement,
                g = u,
                x = x ? En(x) : null,
                x !== null && (E = Rn(x),
                x !== E || x.tag !== 5 && x.tag !== 6) && (x = null)) : (g = null,
                x = u),
                g !== x)) {
                    if (v = Gc,
                    w = "onMouseLeave",
                    m = "onMouseEnter",
                    f = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = Qc,
                    w = "onPointerLeave",
                    m = "onPointerEnter",
                    f = "pointer"),
                    E = g == null ? p : Qn(g),
                    h = x == null ? p : Qn(x),
                    p = new v(w,f + "leave",g,n,c),
                    p.target = E,
                    p.relatedTarget = h,
                    w = null,
                    En(c) === u && (v = new v(m,f + "enter",x,n,c),
                    v.target = h,
                    v.relatedTarget = E,
                    w = v),
                    E = w,
                    g && x)
                        t: {
                            for (v = g,
                            m = x,
                            f = 0,
                            h = v; h; h = $n(h))
                                f++;
                            for (h = 0,
                            w = m; w; w = $n(w))
                                h++;
                            for (; 0 < f - h; )
                                v = $n(v),
                                f--;
                            for (; 0 < h - f; )
                                m = $n(m),
                                h--;
                            for (; f--; ) {
                                if (v === m || m !== null && v === m.alternate)
                                    break t;
                                v = $n(v),
                                m = $n(m)
                            }
                            v = null
                        }
                    else
                        v = null;
                    g !== null && sd(d, p, g, v, !1),
                    x !== null && E !== null && sd(d, E, x, v, !0)
                }
            }
            e: {
                if (p = u ? Qn(u) : window,
                g = p.nodeName && p.nodeName.toLowerCase(),
                g === "select" || g === "input" && p.type === "file")
                    var S = S0;
                else if (qc(p))
                    if (ph)
                        S = P0;
                    else {
                        S = E0;
                        var C = T0
                    }
                else
                    (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = C0);
                if (S && (S = S(e, u))) {
                    fh(d, S, n, c);
                    break e
                }
                C && C(e, p, u),
                e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && qa(p, "number", p.value)
            }
            switch (C = u ? Qn(u) : window,
            e) {
            case "focusin":
                (qc(C) || C.contentEditable === "true") && (Gn = C,
                ul = u,
                Wr = null);
                break;
            case "focusout":
                Wr = ul = Gn = null;
                break;
            case "mousedown":
                cl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                cl = !1,
                nd(d, n, c);
                break;
            case "selectionchange":
                if (L0)
                    break;
            case "keydown":
            case "keyup":
                nd(d, n, c)
            }
            var M;
            if (xu)
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
                        break e
                    }
                    P = void 0
                }
            else
                Wn ? ch(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (uh && n.locale !== "ko" && (Wn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Wn && (M = lh()) : (Yt = c,
            gu = "value"in Yt ? Yt.value : Yt.textContent,
            Wn = !0)),
            C = zs(u, P),
            0 < C.length && (P = new Yc(P,e,null,n,c),
            d.push({
                event: P,
                listeners: C
            }),
            M ? P.data = M : (M = dh(n),
            M !== null && (P.data = M)))),
            (M = g0 ? v0(e, n) : y0(e, n)) && (u = zs(u, "onBeforeInput"),
            0 < u.length && (c = new Yc("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = M))
        }
        Eh(d, t)
    })
}
function ci(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function zs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = ri(e, n),
        s != null && r.unshift(ci(e, s, i)),
        s = ri(e, t),
        s != null && r.push(ci(e, s, i))),
        e = e.return
    }
    return r
}
function $n(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function sd(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        i ? (a = ri(n, s),
        a != null && o.unshift(ci(n, a, l))) : i || (a = ri(n, s),
        a != null && o.push(ci(n, a, l)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var O0 = /\r\n?/g
  , A0 = /\u0000|\uFFFD/g;
function od(e) {
    return (typeof e == "string" ? e : "" + e).replace(O0, `
`).replace(A0, "")
}
function qi(e, t, n) {
    if (t = od(t),
    od(e) !== t && n)
        throw Error(D(425))
}
function Fs() {}
var dl = null
  , fl = null;
function pl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var hl = typeof setTimeout == "function" ? setTimeout : void 0
  , N0 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , ad = typeof Promise == "function" ? Promise : void 0
  , I0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ad < "u" ? function(e) {
    return ad.resolve(null).then(e).catch(D0)
}
: hl;
function D0(e) {
    setTimeout(function() {
        throw e
    })
}
function ua(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    oi(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    oi(t)
}
function Jt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function ld(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Cr = Math.random().toString(36).slice(2)
  , ht = "__reactFiber$" + Cr
  , di = "__reactProps$" + Cr
  , Ot = "__reactContainer$" + Cr
  , ml = "__reactEvents$" + Cr
  , V0 = "__reactListeners$" + Cr
  , R0 = "__reactHandles$" + Cr;
function En(e) {
    var t = e[ht];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ot] || n[ht]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = ld(e); e !== null; ) {
                    if (n = e[ht])
                        return n;
                    e = ld(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Pi(e) {
    return e = e[ht] || e[Ot],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Qn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(D(33))
}
function So(e) {
    return e[di] || null
}
var gl = []
  , Xn = -1;
function dn(e) {
    return {
        current: e
    }
}
function X(e) {
    0 > Xn || (e.current = gl[Xn],
    gl[Xn] = null,
    Xn--)
}
function Y(e, t) {
    Xn++,
    gl[Xn] = e.current,
    e.current = t
}
var an = {}
  , Ce = dn(an)
  , Oe = dn(!1)
  , jn = an;
function pr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return an;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Ae(e) {
    return e = e.childContextTypes,
    e != null
}
function Bs() {
    X(Oe),
    X(Ce)
}
function ud(e, t, n) {
    if (Ce.current !== an)
        throw Error(D(168));
    Y(Ce, t),
    Y(Oe, n)
}
function Ph(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(D(108, Ty(e) || "Unknown", i));
    return ie({}, n, r)
}
function $s(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an,
    jn = Ce.current,
    Y(Ce, e),
    Y(Oe, Oe.current),
    !0
}
function cd(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(D(169));
    n ? (e = Ph(e, t, jn),
    r.__reactInternalMemoizedMergedChildContext = e,
    X(Oe),
    X(Ce),
    Y(Ce, e)) : X(Oe),
    Y(Oe, n)
}
var Tt = null
  , To = !1
  , ca = !1;
function kh(e) {
    Tt === null ? Tt = [e] : Tt.push(e)
}
function z0(e) {
    To = !0,
    kh(e)
}
function fn() {
    if (!ca && Tt !== null) {
        ca = !0;
        var e = 0
          , t = G;
        try {
            var n = Tt;
            for (G = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Tt = null,
            To = !1
        } catch (i) {
            throw Tt !== null && (Tt = Tt.slice(e + 1)),
            qp(fu, fn),
            i
        } finally {
            G = t,
            ca = !1
        }
    }
    return null
}
var Kn = []
  , qn = 0
  , Hs = null
  , Us = 0
  , Qe = []
  , Xe = 0
  , On = null
  , Pt = 1
  , kt = "";
function xn(e, t) {
    Kn[qn++] = Us,
    Kn[qn++] = Hs,
    Hs = e,
    Us = t
}
function bh(e, t, n) {
    Qe[Xe++] = Pt,
    Qe[Xe++] = kt,
    Qe[Xe++] = On,
    On = e;
    var r = Pt;
    e = kt;
    var i = 32 - ot(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - ot(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        Pt = 1 << 32 - ot(t) + i | n << i | r,
        kt = s + e
    } else
        Pt = 1 << s | n << i | r,
        kt = e
}
function Su(e) {
    e.return !== null && (xn(e, 1),
    bh(e, 1, 0))
}
function Tu(e) {
    for (; e === Hs; )
        Hs = Kn[--qn],
        Kn[qn] = null,
        Us = Kn[--qn],
        Kn[qn] = null;
    for (; e === On; )
        On = Qe[--Xe],
        Qe[Xe] = null,
        kt = Qe[--Xe],
        Qe[Xe] = null,
        Pt = Qe[--Xe],
        Qe[Xe] = null
}
var Be = null
  , Fe = null
  , q = !1
  , rt = null;
function Lh(e, t) {
    var n = Ke(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function dd(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Be = e,
        Fe = Jt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Be = e,
        Fe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = On !== null ? {
            id: Pt,
            overflow: kt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ke(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Be = e,
        Fe = null,
        !0) : !1;
    default:
        return !1
    }
}
function vl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function yl(e) {
    if (q) {
        var t = Fe;
        if (t) {
            var n = t;
            if (!dd(e, t)) {
                if (vl(e))
                    throw Error(D(418));
                t = Jt(n.nextSibling);
                var r = Be;
                t && dd(e, t) ? Lh(r, n) : (e.flags = e.flags & -4097 | 2,
                q = !1,
                Be = e)
            }
        } else {
            if (vl(e))
                throw Error(D(418));
            e.flags = e.flags & -4097 | 2,
            q = !1,
            Be = e
        }
    }
}
function fd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Be = e
}
function Zi(e) {
    if (e !== Be)
        return !1;
    if (!q)
        return fd(e),
        q = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !pl(e.type, e.memoizedProps)),
    t && (t = Fe)) {
        if (vl(e))
            throw Mh(),
            Error(D(418));
        for (; t; )
            Lh(e, t),
            t = Jt(t.nextSibling)
    }
    if (fd(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(D(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Fe = Jt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Fe = null
        }
    } else
        Fe = Be ? Jt(e.stateNode.nextSibling) : null;
    return !0
}
function Mh() {
    for (var e = Fe; e; )
        e = Jt(e.nextSibling)
}
function hr() {
    Fe = Be = null,
    q = !1
}
function Eu(e) {
    rt === null ? rt = [e] : rt.push(e)
}
var F0 = Dt.ReactCurrentBatchConfig;
function tt(e, t) {
    if (e && e.defaultProps) {
        t = ie({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Ws = dn(null)
  , Gs = null
  , Zn = null
  , Cu = null;
function Pu() {
    Cu = Zn = Gs = null
}
function ku(e) {
    var t = Ws.current;
    X(Ws),
    e._currentValue = t
}
function xl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function ur(e, t) {
    Gs = e,
    Cu = Zn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (je = !0),
    e.firstContext = null)
}
function Ze(e) {
    var t = e._currentValue;
    if (Cu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Zn === null) {
            if (Gs === null)
                throw Error(D(308));
            Zn = e,
            Gs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Zn = Zn.next = e;
    return t
}
var Cn = null;
function bu(e) {
    Cn === null ? Cn = [e] : Cn.push(e)
}
function _h(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    bu(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    At(e, r)
}
function At(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ht = !1;
function Lu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function jh(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Lt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function en(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    U & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        At(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    bu(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    At(e, n)
}
function ws(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        pu(e, n)
    }
}
function pd(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Ys(e, t, n, r) {
    var i = e.updateQueue;
    Ht = !1;
    var s = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        o === null ? s = u : o.next = u,
        o = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== o && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (s !== null) {
        var d = i.baseState;
        o = 0,
        c = u = a = null,
        l = s;
        do {
            var p = l.lane
              , g = l.eventTime;
            if ((r & p) === p) {
                c !== null && (c = c.next = {
                    eventTime: g,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var x = e
                      , v = l;
                    switch (p = t,
                    g = n,
                    v.tag) {
                    case 1:
                        if (x = v.payload,
                        typeof x == "function") {
                            d = x.call(g, d, p);
                            break e
                        }
                        d = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = v.payload,
                        p = typeof x == "function" ? x.call(g, d, p) : x,
                        p == null)
                            break e;
                        d = ie({}, d, p);
                        break e;
                    case 2:
                        Ht = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                p = i.effects,
                p === null ? i.effects = [l] : p.push(l))
            } else
                g = {
                    eventTime: g,
                    lane: p,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = g,
                a = d) : c = c.next = g,
                o |= p;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                p = l,
                l = p.next,
                p.next = null,
                i.lastBaseUpdate = p,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = d),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                o |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        Nn |= o,
        e.lanes = o,
        e.memoizedState = d
    }
}
function hd(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(D(191, i));
                i.call(r)
            }
        }
}
var Oh = new _p.Component().refs;
function wl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ie({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Eo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Rn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = be()
          , i = nn(e)
          , s = Lt(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = en(e, s, i),
        t !== null && (at(t, e, i, r),
        ws(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = be()
          , i = nn(e)
          , s = Lt(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = en(e, s, i),
        t !== null && (at(t, e, i, r),
        ws(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = be()
          , r = nn(e)
          , i = Lt(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = en(e, i, r),
        t !== null && (at(t, e, r, n),
        ws(t, e, r))
    }
};
function md(e, t, n, r, i, s, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !li(n, r) || !li(i, s) : !0
}
function Ah(e, t, n) {
    var r = !1
      , i = an
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = Ze(s) : (i = Ae(t) ? jn : Ce.current,
    r = t.contextTypes,
    s = (r = r != null) ? pr(e, i) : an),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Eo,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function gd(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Eo.enqueueReplaceState(t, t.state, null)
}
function Sl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = Oh,
    Lu(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = Ze(s) : (s = Ae(t) ? jn : Ce.current,
    i.context = pr(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (wl(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Eo.enqueueReplaceState(i, i.state, null),
    Ys(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function jr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(D(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(D(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var l = i.refs;
                l === Oh && (l = i.refs = {}),
                o === null ? delete l[s] : l[s] = o
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(D(284));
        if (!n._owner)
            throw Error(D(290, e))
    }
    return e
}
function Ji(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function vd(e) {
    var t = e._init;
    return t(e._payload)
}
function Nh(e) {
    function t(m, f) {
        if (e) {
            var h = m.deletions;
            h === null ? (m.deletions = [f],
            m.flags |= 16) : h.push(f)
        }
    }
    function n(m, f) {
        if (!e)
            return null;
        for (; f !== null; )
            t(m, f),
            f = f.sibling;
        return null
    }
    function r(m, f) {
        for (m = new Map; f !== null; )
            f.key !== null ? m.set(f.key, f) : m.set(f.index, f),
            f = f.sibling;
        return m
    }
    function i(m, f) {
        return m = rn(m, f),
        m.index = 0,
        m.sibling = null,
        m
    }
    function s(m, f, h) {
        return m.index = h,
        e ? (h = m.alternate,
        h !== null ? (h = h.index,
        h < f ? (m.flags |= 2,
        f) : h) : (m.flags |= 2,
        f)) : (m.flags |= 1048576,
        f)
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function l(m, f, h, w) {
        return f === null || f.tag !== 6 ? (f = va(h, m.mode, w),
        f.return = m,
        f) : (f = i(f, h),
        f.return = m,
        f)
    }
    function a(m, f, h, w) {
        var S = h.type;
        return S === Un ? c(m, f, h.props.children, w, h.key) : f !== null && (f.elementType === S || typeof S == "object" && S !== null && S.$$typeof === $t && vd(S) === f.type) ? (w = i(f, h.props),
        w.ref = jr(m, f, h),
        w.return = m,
        w) : (w = ks(h.type, h.key, h.props, null, m.mode, w),
        w.ref = jr(m, f, h),
        w.return = m,
        w)
    }
    function u(m, f, h, w) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== h.containerInfo || f.stateNode.implementation !== h.implementation ? (f = ya(h, m.mode, w),
        f.return = m,
        f) : (f = i(f, h.children || []),
        f.return = m,
        f)
    }
    function c(m, f, h, w, S) {
        return f === null || f.tag !== 7 ? (f = Ln(h, m.mode, w, S),
        f.return = m,
        f) : (f = i(f, h),
        f.return = m,
        f)
    }
    function d(m, f, h) {
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return f = va("" + f, m.mode, h),
            f.return = m,
            f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case $i:
                return h = ks(f.type, f.key, f.props, null, m.mode, h),
                h.ref = jr(m, null, f),
                h.return = m,
                h;
            case Hn:
                return f = ya(f, m.mode, h),
                f.return = m,
                f;
            case $t:
                var w = f._init;
                return d(m, w(f._payload), h)
            }
            if (Vr(f) || kr(f))
                return f = Ln(f, m.mode, h, null),
                f.return = m,
                f;
            Ji(m, f)
        }
        return null
    }
    function p(m, f, h, w) {
        var S = f !== null ? f.key : null;
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return S !== null ? null : l(m, f, "" + h, w);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case $i:
                return h.key === S ? a(m, f, h, w) : null;
            case Hn:
                return h.key === S ? u(m, f, h, w) : null;
            case $t:
                return S = h._init,
                p(m, f, S(h._payload), w)
            }
            if (Vr(h) || kr(h))
                return S !== null ? null : c(m, f, h, w, null);
            Ji(m, h)
        }
        return null
    }
    function g(m, f, h, w, S) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return m = m.get(h) || null,
            l(f, m, "" + w, S);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case $i:
                return m = m.get(w.key === null ? h : w.key) || null,
                a(f, m, w, S);
            case Hn:
                return m = m.get(w.key === null ? h : w.key) || null,
                u(f, m, w, S);
            case $t:
                var C = w._init;
                return g(m, f, h, C(w._payload), S)
            }
            if (Vr(w) || kr(w))
                return m = m.get(h) || null,
                c(f, m, w, S, null);
            Ji(f, w)
        }
        return null
    }
    function x(m, f, h, w) {
        for (var S = null, C = null, M = f, P = f = 0, L = null; M !== null && P < h.length; P++) {
            M.index > P ? (L = M,
            M = null) : L = M.sibling;
            var b = p(m, M, h[P], w);
            if (b === null) {
                M === null && (M = L);
                break
            }
            e && M && b.alternate === null && t(m, M),
            f = s(b, f, P),
            C === null ? S = b : C.sibling = b,
            C = b,
            M = L
        }
        if (P === h.length)
            return n(m, M),
            q && xn(m, P),
            S;
        if (M === null) {
            for (; P < h.length; P++)
                M = d(m, h[P], w),
                M !== null && (f = s(M, f, P),
                C === null ? S = M : C.sibling = M,
                C = M);
            return q && xn(m, P),
            S
        }
        for (M = r(m, M); P < h.length; P++)
            L = g(M, m, P, h[P], w),
            L !== null && (e && L.alternate !== null && M.delete(L.key === null ? P : L.key),
            f = s(L, f, P),
            C === null ? S = L : C.sibling = L,
            C = L);
        return e && M.forEach(function(I) {
            return t(m, I)
        }),
        q && xn(m, P),
        S
    }
    function v(m, f, h, w) {
        var S = kr(h);
        if (typeof S != "function")
            throw Error(D(150));
        if (h = S.call(h),
        h == null)
            throw Error(D(151));
        for (var C = S = null, M = f, P = f = 0, L = null, b = h.next(); M !== null && !b.done; P++,
        b = h.next()) {
            M.index > P ? (L = M,
            M = null) : L = M.sibling;
            var I = p(m, M, b.value, w);
            if (I === null) {
                M === null && (M = L);
                break
            }
            e && M && I.alternate === null && t(m, M),
            f = s(I, f, P),
            C === null ? S = I : C.sibling = I,
            C = I,
            M = L
        }
        if (b.done)
            return n(m, M),
            q && xn(m, P),
            S;
        if (M === null) {
            for (; !b.done; P++,
            b = h.next())
                b = d(m, b.value, w),
                b !== null && (f = s(b, f, P),
                C === null ? S = b : C.sibling = b,
                C = b);
            return q && xn(m, P),
            S
        }
        for (M = r(m, M); !b.done; P++,
        b = h.next())
            b = g(M, m, P, b.value, w),
            b !== null && (e && b.alternate !== null && M.delete(b.key === null ? P : b.key),
            f = s(b, f, P),
            C === null ? S = b : C.sibling = b,
            C = b);
        return e && M.forEach(function(O) {
            return t(m, O)
        }),
        q && xn(m, P),
        S
    }
    function E(m, f, h, w) {
        if (typeof h == "object" && h !== null && h.type === Un && h.key === null && (h = h.props.children),
        typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case $i:
                e: {
                    for (var S = h.key, C = f; C !== null; ) {
                        if (C.key === S) {
                            if (S = h.type,
                            S === Un) {
                                if (C.tag === 7) {
                                    n(m, C.sibling),
                                    f = i(C, h.props.children),
                                    f.return = m,
                                    m = f;
                                    break e
                                }
                            } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === $t && vd(S) === C.type) {
                                n(m, C.sibling),
                                f = i(C, h.props),
                                f.ref = jr(m, C, h),
                                f.return = m,
                                m = f;
                                break e
                            }
                            n(m, C);
                            break
                        } else
                            t(m, C);
                        C = C.sibling
                    }
                    h.type === Un ? (f = Ln(h.props.children, m.mode, w, h.key),
                    f.return = m,
                    m = f) : (w = ks(h.type, h.key, h.props, null, m.mode, w),
                    w.ref = jr(m, f, h),
                    w.return = m,
                    m = w)
                }
                return o(m);
            case Hn:
                e: {
                    for (C = h.key; f !== null; ) {
                        if (f.key === C)
                            if (f.tag === 4 && f.stateNode.containerInfo === h.containerInfo && f.stateNode.implementation === h.implementation) {
                                n(m, f.sibling),
                                f = i(f, h.children || []),
                                f.return = m,
                                m = f;
                                break e
                            } else {
                                n(m, f);
                                break
                            }
                        else
                            t(m, f);
                        f = f.sibling
                    }
                    f = ya(h, m.mode, w),
                    f.return = m,
                    m = f
                }
                return o(m);
            case $t:
                return C = h._init,
                E(m, f, C(h._payload), w)
            }
            if (Vr(h))
                return x(m, f, h, w);
            if (kr(h))
                return v(m, f, h, w);
            Ji(m, h)
        }
        return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h,
        f !== null && f.tag === 6 ? (n(m, f.sibling),
        f = i(f, h),
        f.return = m,
        m = f) : (n(m, f),
        f = va(h, m.mode, w),
        f.return = m,
        m = f),
        o(m)) : n(m, f)
    }
    return E
}
var mr = Nh(!0)
  , Ih = Nh(!1)
  , ki = {}
  , vt = dn(ki)
  , fi = dn(ki)
  , pi = dn(ki);
function Pn(e) {
    if (e === ki)
        throw Error(D(174));
    return e
}
function Mu(e, t) {
    switch (Y(pi, t),
    Y(fi, e),
    Y(vt, ki),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ja(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Ja(t, e)
    }
    X(vt),
    Y(vt, t)
}
function gr() {
    X(vt),
    X(fi),
    X(pi)
}
function Dh(e) {
    Pn(pi.current);
    var t = Pn(vt.current)
      , n = Ja(t, e.type);
    t !== n && (Y(fi, e),
    Y(vt, n))
}
function _u(e) {
    fi.current === e && (X(vt),
    X(fi))
}
var ee = dn(0);
function Qs(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var da = [];
function ju() {
    for (var e = 0; e < da.length; e++)
        da[e]._workInProgressVersionPrimary = null;
    da.length = 0
}
var Ss = Dt.ReactCurrentDispatcher
  , fa = Dt.ReactCurrentBatchConfig
  , An = 0
  , re = null
  , fe = null
  , he = null
  , Xs = !1
  , Gr = !1
  , hi = 0
  , B0 = 0;
function Se() {
    throw Error(D(321))
}
function Ou(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!ut(e[n], t[n]))
            return !1;
    return !0
}
function Au(e, t, n, r, i, s) {
    if (An = s,
    re = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ss.current = e === null || e.memoizedState === null ? W0 : G0,
    e = n(r, i),
    Gr) {
        s = 0;
        do {
            if (Gr = !1,
            hi = 0,
            25 <= s)
                throw Error(D(301));
            s += 1,
            he = fe = null,
            t.updateQueue = null,
            Ss.current = Y0,
            e = n(r, i)
        } while (Gr)
    }
    if (Ss.current = Ks,
    t = fe !== null && fe.next !== null,
    An = 0,
    he = fe = re = null,
    Xs = !1,
    t)
        throw Error(D(300));
    return e
}
function Nu() {
    var e = hi !== 0;
    return hi = 0,
    e
}
function ft() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return he === null ? re.memoizedState = he = e : he = he.next = e,
    he
}
function Je() {
    if (fe === null) {
        var e = re.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = fe.next;
    var t = he === null ? re.memoizedState : he.next;
    if (t !== null)
        he = t,
        fe = e;
    else {
        if (e === null)
            throw Error(D(310));
        fe = e,
        e = {
            memoizedState: fe.memoizedState,
            baseState: fe.baseState,
            baseQueue: fe.baseQueue,
            queue: fe.queue,
            next: null
        },
        he === null ? re.memoizedState = he = e : he = he.next = e
    }
    return he
}
function mi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function pa(e) {
    var t = Je()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = fe
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
            s.next = o
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var l = o = null
          , a = null
          , u = s;
        do {
            var c = u.lane;
            if ((An & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = d,
                o = r) : a = a.next = d,
                re.lanes |= c,
                Nn |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        a === null ? o = r : a.next = l,
        ut(r, t.memoizedState) || (je = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            s = i.lane,
            re.lanes |= s,
            Nn |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function ha(e) {
    var t = Je()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = e(s, o.action),
            o = o.next;
        while (o !== i);
        ut(s, t.memoizedState) || (je = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Vh() {}
function Rh(e, t) {
    var n = re
      , r = Je()
      , i = t()
      , s = !ut(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    je = !0),
    r = r.queue,
    Iu(Bh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || he !== null && he.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        gi(9, Fh.bind(null, n, r, i, t), void 0, null),
        me === null)
            throw Error(D(349));
        An & 30 || zh(n, t, i)
    }
    return i
}
function zh(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = re.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    re.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Fh(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    $h(t) && Hh(e)
}
function Bh(e, t, n) {
    return n(function() {
        $h(t) && Hh(e)
    })
}
function $h(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ut(e, n)
    } catch {
        return !0
    }
}
function Hh(e) {
    var t = At(e, 1);
    t !== null && at(t, e, 1, -1)
}
function yd(e) {
    var t = ft();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mi,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = U0.bind(null, re, e),
    [t.memoizedState, e]
}
function gi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = re.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    re.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Uh() {
    return Je().memoizedState
}
function Ts(e, t, n, r) {
    var i = ft();
    re.flags |= e,
    i.memoizedState = gi(1 | t, n, void 0, r === void 0 ? null : r)
}
function Co(e, t, n, r) {
    var i = Je();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (fe !== null) {
        var o = fe.memoizedState;
        if (s = o.destroy,
        r !== null && Ou(r, o.deps)) {
            i.memoizedState = gi(t, n, s, r);
            return
        }
    }
    re.flags |= e,
    i.memoizedState = gi(1 | t, n, s, r)
}
function xd(e, t) {
    return Ts(8390656, 8, e, t)
}
function Iu(e, t) {
    return Co(2048, 8, e, t)
}
function Wh(e, t) {
    return Co(4, 2, e, t)
}
function Gh(e, t) {
    return Co(4, 4, e, t)
}
function Yh(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Qh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Co(4, 4, Yh.bind(null, t, e), n)
}
function Du() {}
function Xh(e, t) {
    var n = Je();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ou(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Kh(e, t) {
    var n = Je();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ou(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function qh(e, t, n) {
    return An & 21 ? (ut(n, t) || (n = eh(),
    re.lanes |= n,
    Nn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    je = !0),
    e.memoizedState = n)
}
function $0(e, t) {
    var n = G;
    G = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = fa.transition;
    fa.transition = {};
    try {
        e(!1),
        t()
    } finally {
        G = n,
        fa.transition = r
    }
}
function Zh() {
    return Je().memoizedState
}
function H0(e, t, n) {
    var r = nn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Jh(e))
        em(t, n);
    else if (n = _h(e, t, n, r),
    n !== null) {
        var i = be();
        at(n, e, r, i),
        tm(n, t, r)
    }
}
function U0(e, t, n) {
    var r = nn(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Jh(e))
        em(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var o = t.lastRenderedState
                  , l = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                ut(l, o)) {
                    var a = t.interleaved;
                    a === null ? (i.next = i,
                    bu(t)) : (i.next = a.next,
                    a.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = _h(e, t, i, r),
        n !== null && (i = be(),
        at(n, e, r, i),
        tm(n, t, r))
    }
}
function Jh(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re
}
function em(e, t) {
    Gr = Xs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function tm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        pu(e, n)
    }
}
var Ks = {
    readContext: Ze,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useInsertionEffect: Se,
    useLayoutEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useMutableSource: Se,
    useSyncExternalStore: Se,
    useId: Se,
    unstable_isNewReconciler: !1
}
  , W0 = {
    readContext: Ze,
    useCallback: function(e, t) {
        return ft().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ze,
    useEffect: xd,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ts(4194308, 4, Yh.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ts(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ts(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = ft();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = ft();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = H0.bind(null, re, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = ft();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: yd,
    useDebugValue: Du,
    useDeferredValue: function(e) {
        return ft().memoizedState = e
    },
    useTransition: function() {
        var e = yd(!1)
          , t = e[0];
        return e = $0.bind(null, e[1]),
        ft().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = re
          , i = ft();
        if (q) {
            if (n === void 0)
                throw Error(D(407));
            n = n()
        } else {
            if (n = t(),
            me === null)
                throw Error(D(349));
            An & 30 || zh(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        xd(Bh.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        gi(9, Fh.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = ft()
          , t = me.identifierPrefix;
        if (q) {
            var n = kt
              , r = Pt;
            n = (r & ~(1 << 32 - ot(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = hi++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = B0++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , G0 = {
    readContext: Ze,
    useCallback: Xh,
    useContext: Ze,
    useEffect: Iu,
    useImperativeHandle: Qh,
    useInsertionEffect: Wh,
    useLayoutEffect: Gh,
    useMemo: Kh,
    useReducer: pa,
    useRef: Uh,
    useState: function() {
        return pa(mi)
    },
    useDebugValue: Du,
    useDeferredValue: function(e) {
        var t = Je();
        return qh(t, fe.memoizedState, e)
    },
    useTransition: function() {
        var e = pa(mi)[0]
          , t = Je().memoizedState;
        return [e, t]
    },
    useMutableSource: Vh,
    useSyncExternalStore: Rh,
    useId: Zh,
    unstable_isNewReconciler: !1
}
  , Y0 = {
    readContext: Ze,
    useCallback: Xh,
    useContext: Ze,
    useEffect: Iu,
    useImperativeHandle: Qh,
    useInsertionEffect: Wh,
    useLayoutEffect: Gh,
    useMemo: Kh,
    useReducer: ha,
    useRef: Uh,
    useState: function() {
        return ha(mi)
    },
    useDebugValue: Du,
    useDeferredValue: function(e) {
        var t = Je();
        return fe === null ? t.memoizedState = e : qh(t, fe.memoizedState, e)
    },
    useTransition: function() {
        var e = ha(mi)[0]
          , t = Je().memoizedState;
        return [e, t]
    },
    useMutableSource: Vh,
    useSyncExternalStore: Rh,
    useId: Zh,
    unstable_isNewReconciler: !1
};
function vr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Sy(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function ma(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Tl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Q0 = typeof WeakMap == "function" ? WeakMap : Map;
function nm(e, t, n) {
    n = Lt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Zs || (Zs = !0,
        Ol = r),
        Tl(e, t)
    }
    ,
    n
}
function rm(e, t, n) {
    n = Lt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Tl(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Tl(e, t),
        typeof r != "function" && (tn === null ? tn = new Set([this]) : tn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function wd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Q0;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = l1.bind(null, e, t, n),
    t.then(e, e))
}
function Sd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Td(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Lt(-1, 1),
    t.tag = 2,
    en(n, t, 1))),
    n.lanes |= 1),
    e)
}
var X0 = Dt.ReactCurrentOwner
  , je = !1;
function ke(e, t, n, r) {
    t.child = e === null ? Ih(t, null, n, r) : mr(t, e.child, n, r)
}
function Ed(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return ur(t, i),
    r = Au(e, t, n, r, s, i),
    n = Nu(),
    e !== null && !je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Nt(e, t, i)) : (q && n && Su(t),
    t.flags |= 1,
    ke(e, t, r, i),
    t.child)
}
function Cd(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Uu(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        im(e, t, s, r, i)) : (e = ks(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : li,
        n(o, r) && e.ref === t.ref)
            return Nt(e, t, i)
    }
    return t.flags |= 1,
    e = rn(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function im(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (li(s, r) && e.ref === t.ref)
            if (je = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (je = !0);
            else
                return t.lanes = e.lanes,
                Nt(e, t, i)
    }
    return El(e, t, n, r, i)
}
function sm(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            Y(er, Re),
            Re |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                Y(er, Re),
                Re |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            Y(er, Re),
            Re |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        Y(er, Re),
        Re |= r;
    return ke(e, t, i, n),
    t.child
}
function om(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function El(e, t, n, r, i) {
    var s = Ae(n) ? jn : Ce.current;
    return s = pr(t, s),
    ur(t, i),
    n = Au(e, t, n, r, s, i),
    r = Nu(),
    e !== null && !je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Nt(e, t, i)) : (q && r && Su(t),
    t.flags |= 1,
    ke(e, t, n, i),
    t.child)
}
function Pd(e, t, n, r, i) {
    if (Ae(n)) {
        var s = !0;
        $s(t)
    } else
        s = !1;
    if (ur(t, i),
    t.stateNode === null)
        Es(e, t),
        Ah(t, n, r),
        Sl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , l = t.memoizedProps;
        o.props = l;
        var a = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Ze(u) : (u = Ae(n) ? jn : Ce.current,
        u = pr(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== u) && gd(t, o, r, u),
        Ht = !1;
        var p = t.memoizedState;
        o.state = p,
        Ys(t, r, o, i),
        a = t.memoizedState,
        l !== r || p !== a || Oe.current || Ht ? (typeof c == "function" && (wl(t, n, c, r),
        a = t.memoizedState),
        (l = Ht || md(t, n, l, r, p, a, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        o.props = r,
        o.state = a,
        o.context = u,
        r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        jh(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : tt(t.type, l),
        o.props = u,
        d = t.pendingProps,
        p = o.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = Ze(a) : (a = Ae(n) ? jn : Ce.current,
        a = pr(t, a));
        var g = n.getDerivedStateFromProps;
        (c = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== d || p !== a) && gd(t, o, r, a),
        Ht = !1,
        p = t.memoizedState,
        o.state = p,
        Ys(t, r, o, i);
        var x = t.memoizedState;
        l !== d || p !== x || Oe.current || Ht ? (typeof g == "function" && (wl(t, n, g, r),
        x = t.memoizedState),
        (u = Ht || md(t, n, u, r, p, x, a) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, a),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, a)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        o.props = r,
        o.state = x,
        o.context = a,
        r = u) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Cl(e, t, n, r, s, i)
}
function Cl(e, t, n, r, i, s) {
    om(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && cd(t, n, !1),
        Nt(e, t, s);
    r = t.stateNode,
    X0.current = t;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = mr(t, e.child, null, s),
    t.child = mr(t, null, l, s)) : ke(e, t, l, s),
    t.memoizedState = r.state,
    i && cd(t, n, !0),
    t.child
}
function am(e) {
    var t = e.stateNode;
    t.pendingContext ? ud(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ud(e, t.context, !1),
    Mu(e, t.containerInfo)
}
function kd(e, t, n, r, i) {
    return hr(),
    Eu(i),
    t.flags |= 256,
    ke(e, t, n, r),
    t.child
}
var Pl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function kl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function lm(e, t, n) {
    var r = t.pendingProps, i = ee.current, s = !1, o = (t.flags & 128) !== 0, l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    Y(ee, i & 1),
    e === null)
        return yl(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = bo(o, r, 0, null),
        e = Ln(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = kl(n),
        t.memoizedState = Pl,
        e) : Vu(t, o));
    if (i = e.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return K0(e, t, o, r, l, i, n);
    if (s) {
        s = r.fallback,
        o = t.mode,
        i = e.child,
        l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = rn(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? s = rn(l, s) : (s = Ln(s, o, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        o = e.child.memoizedState,
        o = o === null ? kl(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = Pl,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = rn(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Vu(e, t) {
    return t = bo({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function es(e, t, n, r) {
    return r !== null && Eu(r),
    mr(t, e.child, null, n),
    e = Vu(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function K0(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ma(Error(D(422))),
        es(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = bo({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = Ln(s, i, o, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && mr(t, e.child, null, o),
        t.child.memoizedState = kl(o),
        t.memoizedState = Pl,
        s);
    if (!(t.mode & 1))
        return es(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        s = Error(D(419)),
        r = ma(s, r, void 0),
        es(e, t, o, r)
    }
    if (l = (o & e.childLanes) !== 0,
    je || l) {
        if (r = me,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
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
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            At(e, i),
            at(r, e, i, -1))
        }
        return Hu(),
        r = ma(Error(D(421))),
        es(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = u1.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    Fe = Jt(i.nextSibling),
    Be = t,
    q = !0,
    rt = null,
    e !== null && (Qe[Xe++] = Pt,
    Qe[Xe++] = kt,
    Qe[Xe++] = On,
    Pt = e.id,
    kt = e.overflow,
    On = t),
    t = Vu(t, r.children),
    t.flags |= 4096,
    t)
}
function bd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    xl(e.return, t, n)
}
function ga(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function um(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (ke(e, t, r.children, n),
    r = ee.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && bd(e, n, t);
                else if (e.tag === 19)
                    bd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (Y(ee, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Qs(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            ga(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Qs(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            ga(t, !0, n, null, s);
            break;
        case "together":
            ga(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Es(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Nt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Nn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(D(153));
    if (t.child !== null) {
        for (e = t.child,
        n = rn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = rn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function q0(e, t, n) {
    switch (t.tag) {
    case 3:
        am(t),
        hr();
        break;
    case 5:
        Dh(t);
        break;
    case 1:
        Ae(t.type) && $s(t);
        break;
    case 4:
        Mu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        Y(Ws, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (Y(ee, ee.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? lm(e, t, n) : (Y(ee, ee.current & 1),
            e = Nt(e, t, n),
            e !== null ? e.sibling : null);
        Y(ee, ee.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return um(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        Y(ee, ee.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        sm(e, t, n)
    }
    return Nt(e, t, n)
}
var cm, bl, dm, fm;
cm = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
bl = function() {}
;
dm = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Pn(vt.current);
        var s = null;
        switch (n) {
        case "input":
            i = Xa(e, i),
            r = Xa(e, r),
            s = [];
            break;
        case "select":
            i = ie({}, i, {
                value: void 0
            }),
            r = ie({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = Za(e, i),
            r = Za(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Fs)
        }
        el(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (o in l)
                        l.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ti.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in a)
                            a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}),
                            n[o] = a[o])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ti.hasOwnProperty(u) ? (a != null && u === "onScroll" && Q("scroll", e),
                    s || l === a || (s = [])) : (s = s || []).push(u, a))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
fm = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Or(e, t) {
    if (!q)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Z0(e, t, n) {
    var r = t.pendingProps;
    switch (Tu(t),
    t.tag) {
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
        return Te(t),
        null;
    case 1:
        return Ae(t.type) && Bs(),
        Te(t),
        null;
    case 3:
        return r = t.stateNode,
        gr(),
        X(Oe),
        X(Ce),
        ju(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Zi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        rt !== null && (Il(rt),
        rt = null))),
        bl(e, t),
        Te(t),
        null;
    case 5:
        _u(t);
        var i = Pn(pi.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            dm(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(D(166));
                return Te(t),
                null
            }
            if (e = Pn(vt.current),
            Zi(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[ht] = t,
                r[di] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    Q("cancel", r),
                    Q("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    Q("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < zr.length; i++)
                        Q(zr[i], r);
                    break;
                case "source":
                    Q("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    Q("error", r),
                    Q("load", r);
                    break;
                case "details":
                    Q("toggle", r);
                    break;
                case "input":
                    Dc(r, s),
                    Q("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    Q("invalid", r);
                    break;
                case "textarea":
                    Rc(r, s),
                    Q("invalid", r)
                }
                el(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var l = s[o];
                        o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && qi(r.textContent, l, e),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && qi(r.textContent, l, e),
                        i = ["children", "" + l]) : ti.hasOwnProperty(o) && l != null && o === "onScroll" && Q("scroll", r)
                    }
                switch (n) {
                case "input":
                    Hi(r),
                    Vc(r, s, !0);
                    break;
                case "textarea":
                    Hi(r),
                    zc(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = Fs)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = zp(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[ht] = t,
                e[di] = r,
                cm(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = tl(n, r),
                    n) {
                    case "dialog":
                        Q("cancel", e),
                        Q("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Q("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < zr.length; i++)
                            Q(zr[i], e);
                        i = r;
                        break;
                    case "source":
                        Q("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Q("error", e),
                        Q("load", e),
                        i = r;
                        break;
                    case "details":
                        Q("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Dc(e, r),
                        i = Xa(e, r),
                        Q("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = ie({}, r, {
                            value: void 0
                        }),
                        Q("invalid", e);
                        break;
                    case "textarea":
                        Rc(e, r),
                        i = Za(e, r),
                        Q("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    el(n, i),
                    l = i;
                    for (s in l)
                        if (l.hasOwnProperty(s)) {
                            var a = l[s];
                            s === "style" ? $p(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Fp(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ni(e, a) : typeof a == "number" && ni(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ti.hasOwnProperty(s) ? a != null && s === "onScroll" && Q("scroll", e) : a != null && au(e, s, a, o))
                        }
                    switch (n) {
                    case "input":
                        Hi(e),
                        Vc(e, r, !1);
                        break;
                    case "textarea":
                        Hi(e),
                        zc(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + on(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? sr(e, !!r.multiple, s, !1) : r.defaultValue != null && sr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = Fs)
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
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Te(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            fm(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(D(166));
            if (n = Pn(pi.current),
            Pn(vt.current),
            Zi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[ht] = t,
                (s = r.nodeValue !== n) && (e = Be,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        qi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && qi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[ht] = t,
                t.stateNode = r
        }
        return Te(t),
        null;
    case 13:
        if (X(ee),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (q && Fe !== null && t.mode & 1 && !(t.flags & 128))
                Mh(),
                hr(),
                t.flags |= 98560,
                s = !1;
            else if (s = Zi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(D(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(D(317));
                    s[ht] = t
                } else
                    hr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Te(t),
                s = !1
            } else
                rt !== null && (Il(rt),
                rt = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ee.current & 1 ? pe === 0 && (pe = 3) : Hu())),
        t.updateQueue !== null && (t.flags |= 4),
        Te(t),
        null);
    case 4:
        return gr(),
        bl(e, t),
        e === null && ui(t.stateNode.containerInfo),
        Te(t),
        null;
    case 10:
        return ku(t.type._context),
        Te(t),
        null;
    case 17:
        return Ae(t.type) && Bs(),
        Te(t),
        null;
    case 19:
        if (X(ee),
        s = t.memoizedState,
        s === null)
            return Te(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                Or(s, !1);
            else {
                if (pe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Qs(e),
                        o !== null) {
                            for (t.flags |= 128,
                            Or(s, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                e = o.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return Y(ee, ee.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && ue() > yr && (t.flags |= 128,
                r = !0,
                Or(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Qs(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Or(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !q)
                        return Te(t),
                        null
                } else
                    2 * ue() - s.renderingStartTime > yr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Or(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = s.last,
            n !== null ? n.sibling = o : t.child = o,
            s.last = o)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = ue(),
        t.sibling = null,
        n = ee.current,
        Y(ee, r ? n & 1 | 2 : n & 1),
        t) : (Te(t),
        null);
    case 22:
    case 23:
        return $u(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Re & 1073741824 && (Te(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(D(156, t.tag))
}
function J0(e, t) {
    switch (Tu(t),
    t.tag) {
    case 1:
        return Ae(t.type) && Bs(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return gr(),
        X(Oe),
        X(Ce),
        ju(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return _u(t),
        null;
    case 13:
        if (X(ee),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(D(340));
            hr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return X(ee),
        null;
    case 4:
        return gr(),
        null;
    case 10:
        return ku(t.type._context),
        null;
    case 22:
    case 23:
        return $u(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ts = !1
  , Ee = !1
  , e1 = typeof WeakSet == "function" ? WeakSet : Set
  , z = null;
function Jn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ae(e, t, r)
            }
        else
            n.current = null
}
function Ll(e, t, n) {
    try {
        n()
    } catch (r) {
        ae(e, t, r)
    }
}
var Ld = !1;
function t1(e, t) {
    if (dl = Vs,
    e = gh(),
    wu(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , p = null;
                    t: for (; ; ) {
                        for (var g; d !== n || i !== 0 && d.nodeType !== 3 || (l = o + i),
                        d !== s || r !== 0 && d.nodeType !== 3 || (a = o + r),
                        d.nodeType === 3 && (o += d.nodeValue.length),
                        (g = d.firstChild) !== null; )
                            p = d,
                            d = g;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (p === n && ++u === i && (l = o),
                            p === s && ++c === r && (a = o),
                            (g = d.nextSibling) !== null)
                                break;
                            d = p,
                            p = d.parentNode
                        }
                        d = g
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (fl = {
        focusedElem: e,
        selectionRange: n
    },
    Vs = !1,
    z = t; z !== null; )
        if (t = z,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            z = e;
        else
            for (; z !== null; ) {
                t = z;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var v = x.memoizedProps
                                  , E = x.memoizedState
                                  , m = t.stateNode
                                  , f = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : tt(t.type, v), E);
                                m.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var h = t.stateNode.containerInfo;
                            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(D(163))
                        }
                } catch (w) {
                    ae(t, t.return, w)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    z = e;
                    break
                }
                z = t.return
            }
    return x = Ld,
    Ld = !1,
    x
}
function Yr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && Ll(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function Po(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ml(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function pm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    pm(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[ht],
    delete t[di],
    delete t[ml],
    delete t[V0],
    delete t[R0])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function hm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Md(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || hm(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function _l(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Fs));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (_l(e, t, n),
        e = e.sibling; e !== null; )
            _l(e, t, n),
            e = e.sibling
}
function jl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (jl(e, t, n),
        e = e.sibling; e !== null; )
            jl(e, t, n),
            e = e.sibling
}
var ge = null
  , nt = !1;
function Vt(e, t, n) {
    for (n = n.child; n !== null; )
        mm(e, t, n),
        n = n.sibling
}
function mm(e, t, n) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
        try {
            gt.onCommitFiberUnmount(vo, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ee || Jn(n, t);
    case 6:
        var r = ge
          , i = nt;
        ge = null,
        Vt(e, t, n),
        ge = r,
        nt = i,
        ge !== null && (nt ? (e = ge,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ge.removeChild(n.stateNode));
        break;
    case 18:
        ge !== null && (nt ? (e = ge,
        n = n.stateNode,
        e.nodeType === 8 ? ua(e.parentNode, n) : e.nodeType === 1 && ua(e, n),
        oi(e)) : ua(ge, n.stateNode));
        break;
    case 4:
        r = ge,
        i = nt,
        ge = n.stateNode.containerInfo,
        nt = !0,
        Vt(e, t, n),
        ge = r,
        nt = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ee && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && Ll(n, t, o),
                i = i.next
            } while (i !== r)
        }
        Vt(e, t, n);
        break;
    case 1:
        if (!Ee && (Jn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                ae(n, t, l)
            }
        Vt(e, t, n);
        break;
    case 21:
        Vt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null,
        Vt(e, t, n),
        Ee = r) : Vt(e, t, n);
        break;
    default:
        Vt(e, t, n)
    }
}
function _d(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new e1),
        t.forEach(function(r) {
            var i = c1.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function et(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                  , o = t
                  , l = o;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        ge = l.stateNode,
                        nt = !1;
                        break e;
                    case 3:
                        ge = l.stateNode.containerInfo,
                        nt = !0;
                        break e;
                    case 4:
                        ge = l.stateNode.containerInfo,
                        nt = !0;
                        break e
                    }
                    l = l.return
                }
                if (ge === null)
                    throw Error(D(160));
                mm(s, o, i),
                ge = null,
                nt = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                ae(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            gm(t, e),
            t = t.sibling
}
function gm(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (et(t, e),
        dt(e),
        r & 4) {
            try {
                Yr(3, e, e.return),
                Po(3, e)
            } catch (v) {
                ae(e, e.return, v)
            }
            try {
                Yr(5, e, e.return)
            } catch (v) {
                ae(e, e.return, v)
            }
        }
        break;
    case 1:
        et(t, e),
        dt(e),
        r & 512 && n !== null && Jn(n, n.return);
        break;
    case 5:
        if (et(t, e),
        dt(e),
        r & 512 && n !== null && Jn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                ni(i, "")
            } catch (v) {
                ae(e, e.return, v)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var s = e.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && s.type === "radio" && s.name != null && Vp(i, s),
                    tl(l, o);
                    var u = tl(l, s);
                    for (o = 0; o < a.length; o += 2) {
                        var c = a[o]
                          , d = a[o + 1];
                        c === "style" ? $p(i, d) : c === "dangerouslySetInnerHTML" ? Fp(i, d) : c === "children" ? ni(i, d) : au(i, c, d, u)
                    }
                    switch (l) {
                    case "input":
                        Ka(i, s);
                        break;
                    case "textarea":
                        Rp(i, s);
                        break;
                    case "select":
                        var p = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var g = s.value;
                        g != null ? sr(i, !!s.multiple, g, !1) : p !== !!s.multiple && (s.defaultValue != null ? sr(i, !!s.multiple, s.defaultValue, !0) : sr(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[di] = s
                } catch (v) {
                    ae(e, e.return, v)
                }
        }
        break;
    case 6:
        if (et(t, e),
        dt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(D(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (v) {
                ae(e, e.return, v)
            }
        }
        break;
    case 3:
        if (et(t, e),
        dt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                oi(t.containerInfo)
            } catch (v) {
                ae(e, e.return, v)
            }
        break;
    case 4:
        et(t, e),
        dt(e);
        break;
    case 13:
        et(t, e),
        dt(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (Fu = ue())),
        r & 4 && _d(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ee = (u = Ee) || c,
        et(t, e),
        Ee = u) : et(t, e),
        dt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (z = e,
                c = e.child; c !== null; ) {
                    for (d = z = c; z !== null; ) {
                        switch (p = z,
                        g = p.child,
                        p.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Yr(4, p, p.return);
                            break;
                        case 1:
                            Jn(p, p.return);
                            var x = p.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = p,
                                n = p.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (v) {
                                    ae(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            Jn(p, p.return);
                            break;
                        case 22:
                            if (p.memoizedState !== null) {
                                Od(d);
                                continue
                            }
                        }
                        g !== null ? (g.return = p,
                        z = g) : Od(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            i = d.stateNode,
                            u ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = d.stateNode,
                            a = d.memoizedProps.style,
                            o = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = Bp("display", o))
                        } catch (v) {
                            ae(e, e.return, v)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (v) {
                            ae(e, e.return, v)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        et(t, e),
        dt(e),
        r & 4 && _d(e);
        break;
    case 21:
        break;
    default:
        et(t, e),
        dt(e)
    }
}
function dt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (hm(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(D(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (ni(i, ""),
                r.flags &= -33);
                var s = Md(e);
                jl(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , l = Md(e);
                _l(e, l, o);
                break;
            default:
                throw Error(D(161))
            }
        } catch (a) {
            ae(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function n1(e, t, n) {
    z = e,
    vm(e)
}
function vm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
        var i = z
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || ts;
            if (!o) {
                var l = i.alternate
                  , a = l !== null && l.memoizedState !== null || Ee;
                l = ts;
                var u = Ee;
                if (ts = o,
                (Ee = a) && !u)
                    for (z = i; z !== null; )
                        o = z,
                        a = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Ad(i) : a !== null ? (a.return = o,
                        z = a) : Ad(i);
                for (; s !== null; )
                    z = s,
                    vm(s),
                    s = s.sibling;
                z = i,
                ts = l,
                Ee = u
            }
            jd(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            z = s) : jd(e)
    }
}
function jd(e) {
    for (; z !== null; ) {
        var t = z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ee || Po(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ee)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : tt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && hd(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            hd(t, o, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
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
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && oi(d)
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
                        throw Error(D(163))
                    }
                Ee || t.flags & 512 && Ml(t)
            } catch (p) {
                ae(t, t.return, p)
            }
        }
        if (t === e) {
            z = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            z = n;
            break
        }
        z = t.return
    }
}
function Od(e) {
    for (; z !== null; ) {
        var t = z;
        if (t === e) {
            z = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            z = n;
            break
        }
        z = t.return
    }
}
function Ad(e) {
    for (; z !== null; ) {
        var t = z;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Po(4, t)
                } catch (a) {
                    ae(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        ae(t, i, a)
                    }
                }
                var s = t.return;
                try {
                    Ml(t)
                } catch (a) {
                    ae(t, s, a)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Ml(t)
                } catch (a) {
                    ae(t, o, a)
                }
            }
        } catch (a) {
            ae(t, t.return, a)
        }
        if (t === e) {
            z = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            z = l;
            break
        }
        z = t.return
    }
}
var r1 = Math.ceil
  , qs = Dt.ReactCurrentDispatcher
  , Ru = Dt.ReactCurrentOwner
  , qe = Dt.ReactCurrentBatchConfig
  , U = 0
  , me = null
  , de = null
  , xe = 0
  , Re = 0
  , er = dn(0)
  , pe = 0
  , vi = null
  , Nn = 0
  , ko = 0
  , zu = 0
  , Qr = null
  , _e = null
  , Fu = 0
  , yr = 1 / 0
  , St = null
  , Zs = !1
  , Ol = null
  , tn = null
  , ns = !1
  , Qt = null
  , Js = 0
  , Xr = 0
  , Al = null
  , Cs = -1
  , Ps = 0;
function be() {
    return U & 6 ? ue() : Cs !== -1 ? Cs : Cs = ue()
}
function nn(e) {
    return e.mode & 1 ? U & 2 && xe !== 0 ? xe & -xe : F0.transition !== null ? (Ps === 0 && (Ps = eh()),
    Ps) : (e = G,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : ah(e.type)),
    e) : 1
}
function at(e, t, n, r) {
    if (50 < Xr)
        throw Xr = 0,
        Al = null,
        Error(D(185));
    Ei(e, n, r),
    (!(U & 2) || e !== me) && (e === me && (!(U & 2) && (ko |= n),
    pe === 4 && Gt(e, xe)),
    Ne(e, r),
    n === 1 && U === 0 && !(t.mode & 1) && (yr = ue() + 500,
    To && fn()))
}
function Ne(e, t) {
    var n = e.callbackNode;
    Fy(e, t);
    var r = Ds(e, e === me ? xe : 0);
    if (r === 0)
        n !== null && $c(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && $c(n),
        t === 1)
            e.tag === 0 ? z0(Nd.bind(null, e)) : kh(Nd.bind(null, e)),
            I0(function() {
                !(U & 6) && fn()
            }),
            n = null;
        else {
            switch (th(r)) {
            case 1:
                n = fu;
                break;
            case 4:
                n = Zp;
                break;
            case 16:
                n = Is;
                break;
            case 536870912:
                n = Jp;
                break;
            default:
                n = Is
            }
            n = Pm(n, ym.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function ym(e, t) {
    if (Cs = -1,
    Ps = 0,
    U & 6)
        throw Error(D(327));
    var n = e.callbackNode;
    if (cr() && e.callbackNode !== n)
        return null;
    var r = Ds(e, e === me ? xe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = eo(e, r);
    else {
        t = r;
        var i = U;
        U |= 2;
        var s = wm();
        (me !== e || xe !== t) && (St = null,
        yr = ue() + 500,
        bn(e, t));
        do
            try {
                o1();
                break
            } catch (l) {
                xm(e, l)
            }
        while (!0);
        Pu(),
        qs.current = s,
        U = i,
        de !== null ? t = 0 : (me = null,
        xe = 0,
        t = pe)
    }
    if (t !== 0) {
        if (t === 2 && (i = ol(e),
        i !== 0 && (r = i,
        t = Nl(e, i))),
        t === 1)
            throw n = vi,
            bn(e, 0),
            Gt(e, r),
            Ne(e, ue()),
            n;
        if (t === 6)
            Gt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !i1(i) && (t = eo(e, r),
            t === 2 && (s = ol(e),
            s !== 0 && (r = s,
            t = Nl(e, s))),
            t === 1))
                throw n = vi,
                bn(e, 0),
                Gt(e, r),
                Ne(e, ue()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(D(345));
            case 2:
                wn(e, _e, St);
                break;
            case 3:
                if (Gt(e, r),
                (r & 130023424) === r && (t = Fu + 500 - ue(),
                10 < t)) {
                    if (Ds(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        be(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = hl(wn.bind(null, e, _e, St), t);
                    break
                }
                wn(e, _e, St);
                break;
            case 4:
                if (Gt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - ot(r);
                    s = 1 << o,
                    o = t[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = ue() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * r1(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = hl(wn.bind(null, e, _e, St), r);
                    break
                }
                wn(e, _e, St);
                break;
            case 5:
                wn(e, _e, St);
                break;
            default:
                throw Error(D(329))
            }
        }
    }
    return Ne(e, ue()),
    e.callbackNode === n ? ym.bind(null, e) : null
}
function Nl(e, t) {
    var n = Qr;
    return e.current.memoizedState.isDehydrated && (bn(e, t).flags |= 256),
    e = eo(e, t),
    e !== 2 && (t = _e,
    _e = n,
    t !== null && Il(t)),
    e
}
function Il(e) {
    _e === null ? _e = e : _e.push.apply(_e, e)
}
function i1(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!ut(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Gt(e, t) {
    for (t &= ~zu,
    t &= ~ko,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - ot(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Nd(e) {
    if (U & 6)
        throw Error(D(327));
    cr();
    var t = Ds(e, 0);
    if (!(t & 1))
        return Ne(e, ue()),
        null;
    var n = eo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ol(e);
        r !== 0 && (t = r,
        n = Nl(e, r))
    }
    if (n === 1)
        throw n = vi,
        bn(e, 0),
        Gt(e, t),
        Ne(e, ue()),
        n;
    if (n === 6)
        throw Error(D(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    wn(e, _e, St),
    Ne(e, ue()),
    null
}
function Bu(e, t) {
    var n = U;
    U |= 1;
    try {
        return e(t)
    } finally {
        U = n,
        U === 0 && (yr = ue() + 500,
        To && fn())
    }
}
function In(e) {
    Qt !== null && Qt.tag === 0 && !(U & 6) && cr();
    var t = U;
    U |= 1;
    var n = qe.transition
      , r = G;
    try {
        if (qe.transition = null,
        G = 1,
        e)
            return e()
    } finally {
        G = r,
        qe.transition = n,
        U = t,
        !(U & 6) && fn()
    }
}
function $u() {
    Re = er.current,
    X(er)
}
function bn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    N0(n)),
    de !== null)
        for (n = de.return; n !== null; ) {
            var r = n;
            switch (Tu(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Bs();
                break;
            case 3:
                gr(),
                X(Oe),
                X(Ce),
                ju();
                break;
            case 5:
                _u(r);
                break;
            case 4:
                gr();
                break;
            case 13:
                X(ee);
                break;
            case 19:
                X(ee);
                break;
            case 10:
                ku(r.type._context);
                break;
            case 22:
            case 23:
                $u()
            }
            n = n.return
        }
    if (me = e,
    de = e = rn(e.current, null),
    xe = Re = t,
    pe = 0,
    vi = null,
    zu = ko = Nn = 0,
    _e = Qr = null,
    Cn !== null) {
        for (t = 0; t < Cn.length; t++)
            if (n = Cn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                    r.next = o
                }
                n.pending = r
            }
        Cn = null
    }
    return e
}
function xm(e, t) {
    do {
        var n = de;
        try {
            if (Pu(),
            Ss.current = Ks,
            Xs) {
                for (var r = re.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Xs = !1
            }
            if (An = 0,
            he = fe = re = null,
            Gr = !1,
            hi = 0,
            Ru.current = null,
            n === null || n.return === null) {
                pe = 1,
                vi = t,
                de = null;
                break
            }
            e: {
                var s = e
                  , o = n.return
                  , l = n
                  , a = t;
                if (t = xe,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var p = c.alternate;
                        p ? (c.updateQueue = p.updateQueue,
                        c.memoizedState = p.memoizedState,
                        c.lanes = p.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var g = Sd(o);
                    if (g !== null) {
                        g.flags &= -257,
                        Td(g, o, l, s, t),
                        g.mode & 1 && wd(s, u, t),
                        t = g,
                        a = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var v = new Set;
                            v.add(a),
                            t.updateQueue = v
                        } else
                            x.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            wd(s, u, t),
                            Hu();
                            break e
                        }
                        a = Error(D(426))
                    }
                } else if (q && l.mode & 1) {
                    var E = Sd(o);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256),
                        Td(E, o, l, s, t),
                        Eu(vr(a, l));
                        break e
                    }
                }
                s = a = vr(a, l),
                pe !== 4 && (pe = 2),
                Qr === null ? Qr = [s] : Qr.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var m = nm(s, a, t);
                        pd(s, m);
                        break e;
                    case 1:
                        l = a;
                        var f = s.type
                          , h = s.stateNode;
                        if (!(s.flags & 128) && (typeof f.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (tn === null || !tn.has(h)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var w = rm(s, l, t);
                            pd(s, w);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Tm(n)
        } catch (S) {
            t = S,
            de === n && n !== null && (de = n = n.return);
            continue
        }
        break
    } while (!0)
}
function wm() {
    var e = qs.current;
    return qs.current = Ks,
    e === null ? Ks : e
}
function Hu() {
    (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
    me === null || !(Nn & 268435455) && !(ko & 268435455) || Gt(me, xe)
}
function eo(e, t) {
    var n = U;
    U |= 2;
    var r = wm();
    (me !== e || xe !== t) && (St = null,
    bn(e, t));
    do
        try {
            s1();
            break
        } catch (i) {
            xm(e, i)
        }
    while (!0);
    if (Pu(),
    U = n,
    qs.current = r,
    de !== null)
        throw Error(D(261));
    return me = null,
    xe = 0,
    pe
}
function s1() {
    for (; de !== null; )
        Sm(de)
}
function o1() {
    for (; de !== null && !jy(); )
        Sm(de)
}
function Sm(e) {
    var t = Cm(e.alternate, e, Re);
    e.memoizedProps = e.pendingProps,
    t === null ? Tm(e) : de = t,
    Ru.current = null
}
function Tm(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = J0(n, t),
            n !== null) {
                n.flags &= 32767,
                de = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                pe = 6,
                de = null;
                return
            }
        } else if (n = Z0(n, t, Re),
        n !== null) {
            de = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            de = t;
            return
        }
        de = t = e
    } while (t !== null);
    pe === 0 && (pe = 5)
}
function wn(e, t, n) {
    var r = G
      , i = qe.transition;
    try {
        qe.transition = null,
        G = 1,
        a1(e, t, n, r)
    } finally {
        qe.transition = i,
        G = r
    }
    return null
}
function a1(e, t, n, r) {
    do
        cr();
    while (Qt !== null);
    if (U & 6)
        throw Error(D(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(D(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (By(e, s),
    e === me && (de = me = null,
    xe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ns || (ns = !0,
    Pm(Is, function() {
        return cr(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = qe.transition,
        qe.transition = null;
        var o = G;
        G = 1;
        var l = U;
        U |= 4,
        Ru.current = null,
        t1(e, n),
        gm(n, e),
        b0(fl),
        Vs = !!dl,
        fl = dl = null,
        e.current = n,
        n1(n),
        Oy(),
        U = l,
        G = o,
        qe.transition = s
    } else
        e.current = n;
    if (ns && (ns = !1,
    Qt = e,
    Js = i),
    s = e.pendingLanes,
    s === 0 && (tn = null),
    Iy(n.stateNode),
    Ne(e, ue()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Zs)
        throw Zs = !1,
        e = Ol,
        Ol = null,
        e;
    return Js & 1 && e.tag !== 0 && cr(),
    s = e.pendingLanes,
    s & 1 ? e === Al ? Xr++ : (Xr = 0,
    Al = e) : Xr = 0,
    fn(),
    null
}
function cr() {
    if (Qt !== null) {
        var e = th(Js)
          , t = qe.transition
          , n = G;
        try {
            if (qe.transition = null,
            G = 16 > e ? 16 : e,
            Qt === null)
                var r = !1;
            else {
                if (e = Qt,
                Qt = null,
                Js = 0,
                U & 6)
                    throw Error(D(331));
                var i = U;
                for (U |= 4,
                z = e.current; z !== null; ) {
                    var s = z
                      , o = s.child;
                    if (z.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (z = u; z !== null; ) {
                                    var c = z;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Yr(8, c, s)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        z = d;
                                    else
                                        for (; z !== null; ) {
                                            c = z;
                                            var p = c.sibling
                                              , g = c.return;
                                            if (pm(c),
                                            c === u) {
                                                z = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = g,
                                                z = p;
                                                break
                                            }
                                            z = g
                                        }
                                }
                            }
                            var x = s.alternate;
                            if (x !== null) {
                                var v = x.child;
                                if (v !== null) {
                                    x.child = null;
                                    do {
                                        var E = v.sibling;
                                        v.sibling = null,
                                        v = E
                                    } while (v !== null)
                                }
                            }
                            z = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        z = o;
                    else
                        e: for (; z !== null; ) {
                            if (s = z,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Yr(9, s, s.return)
                                }
                            var m = s.sibling;
                            if (m !== null) {
                                m.return = s.return,
                                z = m;
                                break e
                            }
                            z = s.return
                        }
                }
                var f = e.current;
                for (z = f; z !== null; ) {
                    o = z;
                    var h = o.child;
                    if (o.subtreeFlags & 2064 && h !== null)
                        h.return = o,
                        z = h;
                    else
                        e: for (o = f; z !== null; ) {
                            if (l = z,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Po(9, l)
                                    }
                                } catch (S) {
                                    ae(l, l.return, S)
                                }
                            if (l === o) {
                                z = null;
                                break e
                            }
                            var w = l.sibling;
                            if (w !== null) {
                                w.return = l.return,
                                z = w;
                                break e
                            }
                            z = l.return
                        }
                }
                if (U = i,
                fn(),
                gt && typeof gt.onPostCommitFiberRoot == "function")
                    try {
                        gt.onPostCommitFiberRoot(vo, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            G = n,
            qe.transition = t
        }
    }
    return !1
}
function Id(e, t, n) {
    t = vr(n, t),
    t = nm(e, t, 1),
    e = en(e, t, 1),
    t = be(),
    e !== null && (Ei(e, 1, t),
    Ne(e, t))
}
function ae(e, t, n) {
    if (e.tag === 3)
        Id(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Id(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tn === null || !tn.has(r))) {
                    e = vr(n, e),
                    e = rm(t, e, 1),
                    t = en(t, e, 1),
                    e = be(),
                    t !== null && (Ei(t, 1, e),
                    Ne(t, e));
                    break
                }
            }
            t = t.return
        }
}
function l1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = be(),
    e.pingedLanes |= e.suspendedLanes & n,
    me === e && (xe & n) === n && (pe === 4 || pe === 3 && (xe & 130023424) === xe && 500 > ue() - Fu ? bn(e, 0) : zu |= n),
    Ne(e, t)
}
function Em(e, t) {
    t === 0 && (e.mode & 1 ? (t = Gi,
    Gi <<= 1,
    !(Gi & 130023424) && (Gi = 4194304)) : t = 1);
    var n = be();
    e = At(e, t),
    e !== null && (Ei(e, t, n),
    Ne(e, n))
}
function u1(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Em(e, n)
}
function c1(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(D(314))
    }
    r !== null && r.delete(t),
    Em(e, n)
}
var Cm;
Cm = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Oe.current)
            je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return je = !1,
                q0(e, t, n);
            je = !!(e.flags & 131072)
        }
    else
        je = !1,
        q && t.flags & 1048576 && bh(t, Us, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Es(e, t),
        e = t.pendingProps;
        var i = pr(t, Ce.current);
        ur(t, n),
        i = Au(null, t, r, e, i, n);
        var s = Nu();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ae(r) ? (s = !0,
        $s(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Lu(t),
        i.updater = Eo,
        t.stateNode = i,
        i._reactInternals = t,
        Sl(t, r, e, n),
        t = Cl(null, t, r, !0, s, n)) : (t.tag = 0,
        q && s && Su(t),
        ke(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Es(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = f1(r),
            e = tt(r, e),
            i) {
            case 0:
                t = El(null, t, r, e, n);
                break e;
            case 1:
                t = Pd(null, t, r, e, n);
                break e;
            case 11:
                t = Ed(null, t, r, e, n);
                break e;
            case 14:
                t = Cd(null, t, r, tt(r.type, e), n);
                break e
            }
            throw Error(D(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : tt(r, i),
        El(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : tt(r, i),
        Pd(e, t, r, i, n);
    case 3:
        e: {
            if (am(t),
            e === null)
                throw Error(D(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            jh(e, t),
            Ys(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    i = vr(Error(D(423)), t),
                    t = kd(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = vr(Error(D(424)), t),
                    t = kd(e, t, r, n, i);
                    break e
                } else
                    for (Fe = Jt(t.stateNode.containerInfo.firstChild),
                    Be = t,
                    q = !0,
                    rt = null,
                    n = Ih(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (hr(),
                r === i) {
                    t = Nt(e, t, n);
                    break e
                }
                ke(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Dh(t),
        e === null && yl(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        o = i.children,
        pl(r, i) ? o = null : s !== null && pl(r, s) && (t.flags |= 32),
        om(e, t),
        ke(e, t, o, n),
        t.child;
    case 6:
        return e === null && yl(t),
        null;
    case 13:
        return lm(e, t, n);
    case 4:
        return Mu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = mr(t, null, r, n) : ke(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : tt(r, i),
        Ed(e, t, r, i, n);
    case 7:
        return ke(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ke(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ke(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            o = i.value,
            Y(Ws, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (ut(s.value, o)) {
                    if (s.children === i.children && !Oe.current) {
                        t = Nt(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var l = s.dependencies;
                        if (l !== null) {
                            o = s.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (s.tag === 1) {
                                        a = Lt(-1, n & -n),
                                        a.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    s.lanes |= n,
                                    a = s.alternate,
                                    a !== null && (a.lanes |= n),
                                    xl(s.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(D(341));
                            o.lanes |= n,
                            l = o.alternate,
                            l !== null && (l.lanes |= n),
                            xl(o, n, t),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            ke(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        ur(t, n),
        i = Ze(i),
        r = r(i),
        t.flags |= 1,
        ke(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = tt(r, t.pendingProps),
        i = tt(r.type, i),
        Cd(e, t, r, i, n);
    case 15:
        return im(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : tt(r, i),
        Es(e, t),
        t.tag = 1,
        Ae(r) ? (e = !0,
        $s(t)) : e = !1,
        ur(t, n),
        Ah(t, r, i),
        Sl(t, r, i, n),
        Cl(null, t, r, !0, e, n);
    case 19:
        return um(e, t, n);
    case 22:
        return sm(e, t, n)
    }
    throw Error(D(156, t.tag))
}
;
function Pm(e, t) {
    return qp(e, t)
}
function d1(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ke(e, t, n, r) {
    return new d1(e,t,n,r)
}
function Uu(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function f1(e) {
    if (typeof e == "function")
        return Uu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === uu)
            return 11;
        if (e === cu)
            return 14
    }
    return 2
}
function rn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ke(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ks(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Uu(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Un:
            return Ln(n.children, i, s, t);
        case lu:
            o = 8,
            i |= 8;
            break;
        case Wa:
            return e = Ke(12, n, t, i | 2),
            e.elementType = Wa,
            e.lanes = s,
            e;
        case Ga:
            return e = Ke(13, n, t, i),
            e.elementType = Ga,
            e.lanes = s,
            e;
        case Ya:
            return e = Ke(19, n, t, i),
            e.elementType = Ya,
            e.lanes = s,
            e;
        case Np:
            return bo(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Op:
                    o = 10;
                    break e;
                case Ap:
                    o = 9;
                    break e;
                case uu:
                    o = 11;
                    break e;
                case cu:
                    o = 14;
                    break e;
                case $t:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(D(130, e == null ? e : typeof e, ""))
        }
    return t = Ke(o, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function Ln(e, t, n, r) {
    return e = Ke(7, e, r, t),
    e.lanes = n,
    e
}
function bo(e, t, n, r) {
    return e = Ke(22, e, r, t),
    e.elementType = Np,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function va(e, t, n) {
    return e = Ke(6, e, null, t),
    e.lanes = n,
    e
}
function ya(e, t, n) {
    return t = Ke(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function p1(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Zo(0),
    this.expirationTimes = Zo(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Zo(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Wu(e, t, n, r, i, s, o, l, a) {
    return e = new p1(e,t,n,l,a),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Ke(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Lu(s),
    e
}
function h1(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Hn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function km(e) {
    if (!e)
        return an;
    e = e._reactInternals;
    e: {
        if (Rn(e) !== e || e.tag !== 1)
            throw Error(D(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ae(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(D(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ae(n))
            return Ph(e, n, t)
    }
    return t
}
function bm(e, t, n, r, i, s, o, l, a) {
    return e = Wu(n, r, !0, e, i, s, o, l, a),
    e.context = km(null),
    n = e.current,
    r = be(),
    i = nn(n),
    s = Lt(r, i),
    s.callback = t ?? null,
    en(n, s, i),
    e.current.lanes = i,
    Ei(e, i, r),
    Ne(e, r),
    e
}
function Lo(e, t, n, r) {
    var i = t.current
      , s = be()
      , o = nn(i);
    return n = km(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Lt(s, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = en(i, t, o),
    e !== null && (at(e, i, o, s),
    ws(e, i, o)),
    o
}
function to(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Dd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Gu(e, t) {
    Dd(e, t),
    (e = e.alternate) && Dd(e, t)
}
function m1() {
    return null
}
var Lm = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Yu(e) {
    this._internalRoot = e
}
Mo.prototype.render = Yu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(D(409));
    Lo(e, t, null, null)
}
;
Mo.prototype.unmount = Yu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        In(function() {
            Lo(null, e, null, null)
        }),
        t[Ot] = null
    }
}
;
function Mo(e) {
    this._internalRoot = e
}
Mo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ih();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++)
            ;
        Wt.splice(n, 0, e),
        n === 0 && oh(e)
    }
}
;
function Qu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function _o(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Vd() {}
function g1(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = to(o);
                s.call(u)
            }
        }
        var o = bm(t, r, e, 0, null, !1, !1, "", Vd);
        return e._reactRootContainer = o,
        e[Ot] = o.current,
        ui(e.nodeType === 8 ? e.parentNode : e),
        In(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = to(a);
            l.call(u)
        }
    }
    var a = Wu(e, 0, !1, null, null, !1, !1, "", Vd);
    return e._reactRootContainer = a,
    e[Ot] = a.current,
    ui(e.nodeType === 8 ? e.parentNode : e),
    In(function() {
        Lo(t, a, n, r)
    }),
    a
}
function jo(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = to(o);
                l.call(a)
            }
        }
        Lo(t, o, e, i)
    } else
        o = g1(n, t, e, i, r);
    return to(o)
}
nh = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Rr(t.pendingLanes);
            n !== 0 && (pu(t, n | 1),
            Ne(t, ue()),
            !(U & 6) && (yr = ue() + 500,
            fn()))
        }
        break;
    case 13:
        In(function() {
            var r = At(e, 1);
            if (r !== null) {
                var i = be();
                at(r, e, 1, i)
            }
        }),
        Gu(e, 1)
    }
}
;
hu = function(e) {
    if (e.tag === 13) {
        var t = At(e, 134217728);
        if (t !== null) {
            var n = be();
            at(t, e, 134217728, n)
        }
        Gu(e, 134217728)
    }
}
;
rh = function(e) {
    if (e.tag === 13) {
        var t = nn(e)
          , n = At(e, t);
        if (n !== null) {
            var r = be();
            at(n, e, t, r)
        }
        Gu(e, t)
    }
}
;
ih = function() {
    return G
}
;
sh = function(e, t) {
    var n = G;
    try {
        return G = e,
        t()
    } finally {
        G = n
    }
}
;
rl = function(e, t, n) {
    switch (t) {
    case "input":
        if (Ka(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = So(r);
                    if (!i)
                        throw Error(D(90));
                    Dp(r),
                    Ka(r, i)
                }
            }
        }
        break;
    case "textarea":
        Rp(e, n);
        break;
    case "select":
        t = n.value,
        t != null && sr(e, !!n.multiple, t, !1)
    }
}
;
Wp = Bu;
Gp = In;
var v1 = {
    usingClientEntryPoint: !1,
    Events: [Pi, Qn, So, Hp, Up, Bu]
}
  , Ar = {
    findFiberByHostInstance: En,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , y1 = {
    bundleType: Ar.bundleType,
    version: Ar.version,
    rendererPackageName: Ar.rendererPackageName,
    rendererConfig: Ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Xp(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Ar.findFiberByHostInstance || m1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var rs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rs.isDisabled && rs.supportsFiber)
        try {
            vo = rs.inject(y1),
            gt = rs
        } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v1;
Ue.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Qu(t))
        throw Error(D(200));
    return h1(e, t, null, n)
}
;
Ue.createRoot = function(e, t) {
    if (!Qu(e))
        throw Error(D(299));
    var n = !1
      , r = ""
      , i = Lm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Wu(e, 1, !1, null, null, n, !1, r, i),
    e[Ot] = t.current,
    ui(e.nodeType === 8 ? e.parentNode : e),
    new Yu(t)
}
;
Ue.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","),
        Error(D(268, e)));
    return e = Xp(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Ue.flushSync = function(e) {
    return In(e)
}
;
Ue.hydrate = function(e, t, n) {
    if (!_o(t))
        throw Error(D(200));
    return jo(null, e, t, !0, n)
}
;
Ue.hydrateRoot = function(e, t, n) {
    if (!Qu(e))
        throw Error(D(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = Lm;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = bm(t, null, e, 1, n ?? null, i, !1, s, o),
    e[Ot] = t.current,
    ui(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Mo(t)
}
;
Ue.render = function(e, t, n) {
    if (!_o(t))
        throw Error(D(200));
    return jo(null, e, t, !1, n)
}
;
Ue.unmountComponentAtNode = function(e) {
    if (!_o(e))
        throw Error(D(40));
    return e._reactRootContainer ? (In(function() {
        jo(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ot] = null
        })
    }),
    !0) : !1
}
;
Ue.unstable_batchedUpdates = Bu;
Ue.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!_o(n))
        throw Error(D(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(D(38));
    return jo(e, t, n, !1, r)
}
;
Ue.version = "18.2.0-next-9e3b772b8-20220608";
function Mm() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mm)
        } catch (e) {
            console.error(e)
        }
}
Mm(),
bp.exports = Ue;
var _m = bp.exports
  , Rd = _m;
Ha.createRoot = Rd.createRoot,
Ha.hydrateRoot = Rd.hydrateRoot;
var jm = {
    exports: {}
}
  , x1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , w1 = x1
  , S1 = w1;
function Om() {}
function Am() {}
Am.resetWarningCache = Om;
var T1 = function() {
    function e(r, i, s, o, l, a) {
        if (a !== S1) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation",
            u
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Am,
        resetWarningCache: Om
    };
    return n.PropTypes = n,
    n
};
jm.exports = T1();
var bi = jm.exports;
const it = gp(bi)
  , Nm = e => {
    const [t,n] = V.useState(!1);
    return V.useEffect( () => {
        const r = window.matchMedia(e);
        r.matches !== t && n(r.matches);
        const i = () => n(r.matches);
        return window.addEventListener("resize", i),
        () => window.removeEventListener("resize", i)
    }
    , [t, e]),
    t
}
;
var oe = {}
  , Xu = {}
  , Li = {}
  , Mi = {}
  , Im = "Expected a function"
  , zd = NaN
  , E1 = "[object Symbol]"
  , C1 = /^\s+|\s+$/g
  , P1 = /^[-+]0x[0-9a-f]+$/i
  , k1 = /^0b[01]+$/i
  , b1 = /^0o[0-7]+$/i
  , L1 = parseInt
  , M1 = typeof Fi == "object" && Fi && Fi.Object === Object && Fi
  , _1 = typeof self == "object" && self && self.Object === Object && self
  , j1 = M1 || _1 || Function("return this")()
  , O1 = Object.prototype
  , A1 = O1.toString
  , N1 = Math.max
  , I1 = Math.min
  , xa = function() {
    return j1.Date.now()
};
function D1(e, t, n) {
    var r, i, s, o, l, a, u = 0, c = !1, d = !1, p = !0;
    if (typeof e != "function")
        throw new TypeError(Im);
    t = Fd(t) || 0,
    no(n) && (c = !!n.leading,
    d = "maxWait"in n,
    s = d ? N1(Fd(n.maxWait) || 0, t) : s,
    p = "trailing"in n ? !!n.trailing : p);
    function g(C) {
        var M = r
          , P = i;
        return r = i = void 0,
        u = C,
        o = e.apply(P, M),
        o
    }
    function x(C) {
        return u = C,
        l = setTimeout(m, t),
        c ? g(C) : o
    }
    function v(C) {
        var M = C - a
          , P = C - u
          , L = t - M;
        return d ? I1(L, s - P) : L
    }
    function E(C) {
        var M = C - a
          , P = C - u;
        return a === void 0 || M >= t || M < 0 || d && P >= s
    }
    function m() {
        var C = xa();
        if (E(C))
            return f(C);
        l = setTimeout(m, v(C))
    }
    function f(C) {
        return l = void 0,
        p && r ? g(C) : (r = i = void 0,
        o)
    }
    function h() {
        l !== void 0 && clearTimeout(l),
        u = 0,
        r = a = i = l = void 0
    }
    function w() {
        return l === void 0 ? o : f(xa())
    }
    function S() {
        var C = xa()
          , M = E(C);
        if (r = arguments,
        i = this,
        a = C,
        M) {
            if (l === void 0)
                return x(a);
            if (d)
                return l = setTimeout(m, t),
                g(a)
        }
        return l === void 0 && (l = setTimeout(m, t)),
        o
    }
    return S.cancel = h,
    S.flush = w,
    S
}
function V1(e, t, n) {
    var r = !0
      , i = !0;
    if (typeof e != "function")
        throw new TypeError(Im);
    return no(n) && (r = "leading"in n ? !!n.leading : r,
    i = "trailing"in n ? !!n.trailing : i),
    D1(e, t, {
        leading: r,
        maxWait: t,
        trailing: i
    })
}
function no(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function")
}
function R1(e) {
    return !!e && typeof e == "object"
}
function z1(e) {
    return typeof e == "symbol" || R1(e) && A1.call(e) == E1
}
function Fd(e) {
    if (typeof e == "number")
        return e;
    if (z1(e))
        return zd;
    if (no(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = no(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = e.replace(C1, "");
    var n = k1.test(e);
    return n || b1.test(e) ? L1(e.slice(2), n ? 2 : 8) : P1.test(e) ? zd : +e
}
var F1 = V1
  , _i = {};
Object.defineProperty(_i, "__esModule", {
    value: !0
});
_i.addPassiveEventListener = function(t, n, r) {
    var i = r.name;
    i || (i = n,
    console.warn("Listener must be a named function.")),
    bs.has(n) || bs.set(n, new Set);
    var s = bs.get(n);
    if (!s.has(i)) {
        var o = function() {
            var l = !1;
            try {
                var a = Object.defineProperty({}, "passive", {
                    get: function() {
                        l = !0
                    }
                });
                window.addEventListener("test", null, a)
            } catch {}
            return l
        }();
        t.addEventListener(n, r, o ? {
            passive: !0
        } : !1),
        s.add(i)
    }
}
;
_i.removePassiveEventListener = function(t, n, r) {
    t.removeEventListener(n, r),
    bs.get(n).delete(r.name || n)
}
;
var bs = new Map;
Object.defineProperty(Mi, "__esModule", {
    value: !0
});
var B1 = F1
  , $1 = U1(B1)
  , H1 = _i;
function U1(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var W1 = function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
    return (0,
    $1.default)(t, n)
}
  , Z = {
    spyCallbacks: [],
    spySetState: [],
    scrollSpyContainers: [],
    mount: function(t, n) {
        if (t) {
            var r = W1(function(i) {
                Z.scrollHandler(t)
            }, n);
            Z.scrollSpyContainers.push(t),
            (0,
            H1.addPassiveEventListener)(t, "scroll", r)
        }
    },
    isMounted: function(t) {
        return Z.scrollSpyContainers.indexOf(t) !== -1
    },
    currentPositionX: function(t) {
        if (t === document) {
            var n = window.pageYOffset !== void 0
              , r = (document.compatMode || "") === "CSS1Compat";
            return n ? window.pageXOffset : r ? document.documentElement.scrollLeft : document.body.scrollLeft
        } else
            return t.scrollLeft
    },
    currentPositionY: function(t) {
        if (t === document) {
            var n = window.pageXOffset !== void 0
              , r = (document.compatMode || "") === "CSS1Compat";
            return n ? window.pageYOffset : r ? document.documentElement.scrollTop : document.body.scrollTop
        } else
            return t.scrollTop
    },
    scrollHandler: function(t) {
        var n = Z.scrollSpyContainers[Z.scrollSpyContainers.indexOf(t)].spyCallbacks || [];
        n.forEach(function(r) {
            return r(Z.currentPositionX(t), Z.currentPositionY(t))
        })
    },
    addStateHandler: function(t) {
        Z.spySetState.push(t)
    },
    addSpyHandler: function(t, n) {
        var r = Z.scrollSpyContainers[Z.scrollSpyContainers.indexOf(n)];
        r.spyCallbacks || (r.spyCallbacks = []),
        r.spyCallbacks.push(t),
        t(Z.currentPositionX(n), Z.currentPositionY(n))
    },
    updateStates: function() {
        Z.spySetState.forEach(function(t) {
            return t()
        })
    },
    unmount: function(t, n) {
        Z.scrollSpyContainers.forEach(function(r) {
            return r.spyCallbacks && r.spyCallbacks.length && r.spyCallbacks.indexOf(n) > -1 && r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
        }),
        Z.spySetState && Z.spySetState.length && Z.spySetState.indexOf(t) > -1 && Z.spySetState.splice(Z.spySetState.indexOf(t), 1),
        document.removeEventListener("scroll", Z.scrollHandler)
    },
    update: function() {
        return Z.scrollSpyContainers.forEach(function(t) {
            return Z.scrollHandler(t)
        })
    }
};
Mi.default = Z;
var Pr = {}
  , ji = {};
Object.defineProperty(ji, "__esModule", {
    value: !0
});
var G1 = function(t, n) {
    var r = t.indexOf("#") === 0 ? t.substring(1) : t
      , i = r ? "#" + r : ""
      , s = window && window.location
      , o = i ? s.pathname + s.search + i : s.pathname + s.search;
    n ? history.pushState(history.state, "", o) : history.replaceState(history.state, "", o)
}
  , Y1 = function() {
    return window.location.hash.replace(/^#/, "")
}
  , Q1 = function(t) {
    return function(n) {
        return t.contains ? t != n && t.contains(n) : !!(t.compareDocumentPosition(n) & 16)
    }
}
  , X1 = function(t) {
    return getComputedStyle(t).position !== "static"
}
  , wa = function(t, n) {
    for (var r = t.offsetTop, i = t.offsetParent; i && !n(i); )
        r += i.offsetTop,
        i = i.offsetParent;
    return {
        offsetTop: r,
        offsetParent: i
    }
}
  , K1 = function(t, n, r) {
    if (r)
        return t === document ? n.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(t).position !== "static" ? n.offsetLeft : n.offsetLeft - t.offsetLeft;
    if (t === document)
        return n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    if (X1(t)) {
        if (n.offsetParent !== t) {
            var i = function(c) {
                return c === t || c === document
            }
              , s = wa(n, i)
              , o = s.offsetTop
              , l = s.offsetParent;
            if (l !== t)
                throw new Error("Seems containerElement is not an ancestor of the Element");
            return o
        }
        return n.offsetTop
    }
    if (n.offsetParent === t.offsetParent)
        return n.offsetTop - t.offsetTop;
    var a = function(c) {
        return c === document
    };
    return wa(n, a).offsetTop - wa(t, a).offsetTop
};
ji.default = {
    updateHash: G1,
    getHash: Y1,
    filterElementInContainer: Q1,
    scrollOffset: K1
};
var Oo = {}
  , Ku = {};
Object.defineProperty(Ku, "__esModule", {
    value: !0
});
Ku.default = {
    defaultEasing: function(t) {
        return t < .5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2
    },
    linear: function(t) {
        return t
    },
    easeInQuad: function(t) {
        return t * t
    },
    easeOutQuad: function(t) {
        return t * (2 - t)
    },
    easeInOutQuad: function(t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    },
    easeInCubic: function(t) {
        return t * t * t
    },
    easeOutCubic: function(t) {
        return --t * t * t + 1
    },
    easeInOutCubic: function(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    },
    easeInQuart: function(t) {
        return t * t * t * t
    },
    easeOutQuart: function(t) {
        return 1 - --t * t * t * t
    },
    easeInOutQuart: function(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
    },
    easeInQuint: function(t) {
        return t * t * t * t * t
    },
    easeOutQuint: function(t) {
        return 1 + --t * t * t * t * t
    },
    easeInOutQuint: function(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    }
};
var qu = {};
Object.defineProperty(qu, "__esModule", {
    value: !0
});
var q1 = _i
  , Z1 = ["mousedown", "mousewheel", "touchmove", "keydown"];
qu.default = {
    subscribe: function(t) {
        return typeof document < "u" && Z1.forEach(function(n) {
            return (0,
            q1.addPassiveEventListener)(document, n, t)
        })
    }
};
var Oi = {};
Object.defineProperty(Oi, "__esModule", {
    value: !0
});
var Dl = {
    registered: {},
    scrollEvent: {
        register: function(t, n) {
            Dl.registered[t] = n
        },
        remove: function(t) {
            Dl.registered[t] = null
        }
    }
};
Oi.default = Dl;
Object.defineProperty(Oo, "__esModule", {
    value: !0
});
var J1 = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , ex = ji;
Ao(ex);
var tx = Ku
  , Bd = Ao(tx)
  , nx = qu
  , rx = Ao(nx)
  , ix = Oi
  , pt = Ao(ix);
function Ao(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var Dm = function(t) {
    return Bd.default[t.smooth] || Bd.default.defaultEasing
}
  , sx = function(t) {
    return typeof t == "function" ? t : function() {
        return t
    }
}
  , ox = function() {
    if (typeof window < "u")
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame
}
  , Vl = function() {
    return ox() || function(e, t, n) {
        window.setTimeout(e, n || 1e3 / 60, new Date().getTime())
    }
}()
  , Vm = function() {
    return {
        currentPosition: 0,
        startPosition: 0,
        targetPosition: 0,
        progress: 0,
        duration: 0,
        cancel: !1,
        target: null,
        containerElement: null,
        to: null,
        start: null,
        delta: null,
        percent: null,
        delayTimeout: null
    }
}
  , Rm = function(t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
        return n.scrollLeft;
    var r = window.pageXOffset !== void 0
      , i = (document.compatMode || "") === "CSS1Compat";
    return r ? window.pageXOffset : i ? document.documentElement.scrollLeft : document.body.scrollLeft
}
  , zm = function(t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
        return n.scrollTop;
    var r = window.pageXOffset !== void 0
      , i = (document.compatMode || "") === "CSS1Compat";
    return r ? window.pageYOffset : i ? document.documentElement.scrollTop : document.body.scrollTop
}
  , ax = function(t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
        return n.scrollWidth - n.offsetWidth;
    var r = document.body
      , i = document.documentElement;
    return Math.max(r.scrollWidth, r.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth)
}
  , lx = function(t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
        return n.scrollHeight - n.offsetHeight;
    var r = document.body
      , i = document.documentElement;
    return Math.max(r.scrollHeight, r.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight)
}
  , ux = function e(t, n, r) {
    var i = n.data;
    if (!n.ignoreCancelEvents && i.cancel) {
        pt.default.registered.end && pt.default.registered.end(i.to, i.target, i.currentPositionY);
        return
    }
    if (i.delta = Math.round(i.targetPosition - i.startPosition),
    i.start === null && (i.start = r),
    i.progress = r - i.start,
    i.percent = i.progress >= i.duration ? 1 : t(i.progress / i.duration),
    i.currentPosition = i.startPosition + Math.ceil(i.delta * i.percent),
    i.containerElement && i.containerElement !== document && i.containerElement !== document.body ? n.horizontal ? i.containerElement.scrollLeft = i.currentPosition : i.containerElement.scrollTop = i.currentPosition : n.horizontal ? window.scrollTo(i.currentPosition, 0) : window.scrollTo(0, i.currentPosition),
    i.percent < 1) {
        var s = e.bind(null, t, n);
        Vl.call(window, s);
        return
    }
    pt.default.registered.end && pt.default.registered.end(i.to, i.target, i.currentPosition)
}
  , Zu = function(t) {
    t.data.containerElement = t ? t.containerId ? document.getElementById(t.containerId) : t.container && t.container.nodeType ? t.container : document : null
}
  , Ai = function(t, n, r, i) {
    n.data = n.data || Vm(),
    window.clearTimeout(n.data.delayTimeout);
    var s = function() {
        n.data.cancel = !0
    };
    if (rx.default.subscribe(s),
    Zu(n),
    n.data.start = null,
    n.data.cancel = !1,
    n.data.startPosition = n.horizontal ? Rm(n) : zm(n),
    n.data.targetPosition = n.absolute ? t : t + n.data.startPosition,
    n.data.startPosition === n.data.targetPosition) {
        pt.default.registered.end && pt.default.registered.end(n.data.to, n.data.target, n.data.currentPosition);
        return
    }
    n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition),
    n.data.duration = sx(n.duration)(n.data.delta),
    n.data.duration = isNaN(parseFloat(n.data.duration)) ? 1e3 : parseFloat(n.data.duration),
    n.data.to = r,
    n.data.target = i;
    var o = Dm(n)
      , l = ux.bind(null, o, n);
    if (n && n.delay > 0) {
        n.data.delayTimeout = window.setTimeout(function() {
            pt.default.registered.begin && pt.default.registered.begin(n.data.to, n.data.target),
            Vl.call(window, l)
        }, n.delay);
        return
    }
    pt.default.registered.begin && pt.default.registered.begin(n.data.to, n.data.target),
    Vl.call(window, l)
}
  , No = function(t) {
    return t = J1({}, t),
    t.data = t.data || Vm(),
    t.absolute = !0,
    t
}
  , cx = function(t) {
    Ai(0, No(t))
}
  , dx = function(t, n) {
    Ai(t, No(n))
}
  , fx = function(t) {
    t = No(t),
    Zu(t),
    Ai(t.horizontal ? ax(t) : lx(t), t)
}
  , px = function(t, n) {
    n = No(n),
    Zu(n);
    var r = n.horizontal ? Rm(n) : zm(n);
    Ai(t + r, n)
};
Oo.default = {
    animateTopScroll: Ai,
    getAnimationType: Dm,
    scrollToTop: cx,
    scrollToBottom: fx,
    scrollTo: dx,
    scrollMore: px
};
Object.defineProperty(Pr, "__esModule", {
    value: !0
});
var hx = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , mx = ji
  , gx = Ju(mx)
  , vx = Oo
  , yx = Ju(vx)
  , xx = Oi
  , is = Ju(xx);
function Ju(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var ss = {}
  , $d = void 0;
Pr.default = {
    unmount: function() {
        ss = {}
    },
    register: function(t, n) {
        ss[t] = n
    },
    unregister: function(t) {
        delete ss[t]
    },
    get: function(t) {
        return ss[t] || document.getElementById(t) || document.getElementsByName(t)[0] || document.getElementsByClassName(t)[0]
    },
    setActiveLink: function(t) {
        return $d = t
    },
    getActiveLink: function() {
        return $d
    },
    scrollTo: function(t, n) {
        var r = this.get(t);
        if (!r) {
            console.warn("target Element not found");
            return
        }
        n = hx({}, n, {
            absolute: !1
        });
        var i = n.containerId
          , s = n.container
          , o = void 0;
        i ? o = document.getElementById(i) : s && s.nodeType ? o = s : o = document,
        n.absolute = !0;
        var l = n.horizontal
          , a = gx.default.scrollOffset(o, r, l) + (n.offset || 0);
        if (!n.smooth) {
            is.default.registered.begin && is.default.registered.begin(t, r),
            o === document ? n.horizontal ? window.scrollTo(a, 0) : window.scrollTo(0, a) : o.scrollTop = a,
            is.default.registered.end && is.default.registered.end(t, r);
            return
        }
        yx.default.animateTopScroll(a, n, t, r)
    }
};
var Io = {};
Object.defineProperty(Io, "__esModule", {
    value: !0
});
var wx = ji
  , Sa = Sx(wx);
function Sx(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var Tx = {
    mountFlag: !1,
    initialized: !1,
    scroller: null,
    containers: {},
    mount: function(t) {
        this.scroller = t,
        this.handleHashChange = this.handleHashChange.bind(this),
        window.addEventListener("hashchange", this.handleHashChange),
        this.initStateFromHash(),
        this.mountFlag = !0
    },
    mapContainer: function(t, n) {
        this.containers[t] = n
    },
    isMounted: function() {
        return this.mountFlag
    },
    isInitialized: function() {
        return this.initialized
    },
    initStateFromHash: function() {
        var t = this
          , n = this.getHash();
        n ? window.setTimeout(function() {
            t.scrollTo(n, !0),
            t.initialized = !0
        }, 10) : this.initialized = !0
    },
    scrollTo: function(t, n) {
        var r = this.scroller
          , i = r.get(t);
        if (i && (n || t !== r.getActiveLink())) {
            var s = this.containers[t] || document;
            r.scrollTo(t, {
                container: s
            })
        }
    },
    getHash: function() {
        return Sa.default.getHash()
    },
    changeHash: function(t, n) {
        this.isInitialized() && Sa.default.getHash() !== t && Sa.default.updateHash(t, n)
    },
    handleHashChange: function() {
        this.scrollTo(this.getHash())
    },
    unmount: function() {
        this.scroller = null,
        this.containers = null,
        window.removeEventListener("hashchange", this.handleHashChange)
    }
};
Io.default = Tx;
Object.defineProperty(Li, "__esModule", {
    value: !0
});
var os = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , Ex = function() {
    function e(t, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
}()
  , Cx = V
  , Hd = Ni(Cx)
  , Px = Mi
  , as = Ni(Px)
  , kx = Pr
  , bx = Ni(kx)
  , Lx = bi
  , K = Ni(Lx)
  , Mx = Io
  , Rt = Ni(Mx);
function Ni(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function _x(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function jx(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function Ox(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var Ud = {
    to: K.default.string.isRequired,
    containerId: K.default.string,
    container: K.default.object,
    activeClass: K.default.string,
    activeStyle: K.default.object,
    spy: K.default.bool,
    horizontal: K.default.bool,
    smooth: K.default.oneOfType([K.default.bool, K.default.string]),
    offset: K.default.number,
    delay: K.default.number,
    isDynamic: K.default.bool,
    onClick: K.default.func,
    duration: K.default.oneOfType([K.default.number, K.default.func]),
    absolute: K.default.bool,
    onSetActive: K.default.func,
    onSetInactive: K.default.func,
    ignoreCancelEvents: K.default.bool,
    hashSpy: K.default.bool,
    saveHashHistory: K.default.bool,
    spyThrottle: K.default.number
};
Li.default = function(e, t) {
    var n = t || bx.default
      , r = function(s) {
        Ox(o, s);
        function o(l) {
            _x(this, o);
            var a = jx(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, l));
            return i.call(a),
            a.state = {
                active: !1
            },
            a
        }
        return Ex(o, [{
            key: "getScrollSpyContainer",
            value: function() {
                var a = this.props.containerId
                  , u = this.props.container;
                return a && !u ? document.getElementById(a) : u && u.nodeType ? u : document
            }
        }, {
            key: "componentDidMount",
            value: function() {
                if (this.props.spy || this.props.hashSpy) {
                    var a = this.getScrollSpyContainer();
                    as.default.isMounted(a) || as.default.mount(a, this.props.spyThrottle),
                    this.props.hashSpy && (Rt.default.isMounted() || Rt.default.mount(n),
                    Rt.default.mapContainer(this.props.to, a)),
                    as.default.addSpyHandler(this.spyHandler, a),
                    this.setState({
                        container: a
                    })
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                as.default.unmount(this.stateHandler, this.spyHandler)
            }
        }, {
            key: "render",
            value: function() {
                var a = "";
                this.state && this.state.active ? a = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : a = this.props.className;
                var u = {};
                this.state && this.state.active ? u = os({}, this.props.style, this.props.activeStyle) : u = os({}, this.props.style);
                var c = os({}, this.props);
                for (var d in Ud)
                    c.hasOwnProperty(d) && delete c[d];
                return c.className = a,
                c.style = u,
                c.onClick = this.handleClick,
                Hd.default.createElement(e, c)
            }
        }]),
        o
    }(Hd.default.PureComponent)
      , i = function() {
        var o = this;
        this.scrollTo = function(l, a) {
            n.scrollTo(l, os({}, o.state, a))
        }
        ,
        this.handleClick = function(l) {
            o.props.onClick && o.props.onClick(l),
            l.stopPropagation && l.stopPropagation(),
            l.preventDefault && l.preventDefault(),
            o.scrollTo(o.props.to, o.props)
        }
        ,
        this.spyHandler = function(l, a) {
            var u = o.getScrollSpyContainer();
            if (!(Rt.default.isMounted() && !Rt.default.isInitialized())) {
                var c = o.props.horizontal
                  , d = o.props.to
                  , p = null
                  , g = void 0
                  , x = void 0;
                if (c) {
                    var v = 0
                      , E = 0
                      , m = 0;
                    if (u.getBoundingClientRect) {
                        var f = u.getBoundingClientRect();
                        m = f.left
                    }
                    if (!p || o.props.isDynamic) {
                        if (p = n.get(d),
                        !p)
                            return;
                        var h = p.getBoundingClientRect();
                        v = h.left - m + l,
                        E = v + h.width
                    }
                    var w = l - o.props.offset;
                    g = w >= Math.floor(v) && w < Math.floor(E),
                    x = w < Math.floor(v) || w >= Math.floor(E)
                } else {
                    var S = 0
                      , C = 0
                      , M = 0;
                    if (u.getBoundingClientRect) {
                        var P = u.getBoundingClientRect();
                        M = P.top
                    }
                    if (!p || o.props.isDynamic) {
                        if (p = n.get(d),
                        !p)
                            return;
                        var L = p.getBoundingClientRect();
                        S = L.top - M + a,
                        C = S + L.height
                    }
                    var b = a - o.props.offset;
                    g = b >= Math.floor(S) && b < Math.floor(C),
                    x = b < Math.floor(S) || b >= Math.floor(C)
                }
                var I = n.getActiveLink();
                if (x) {
                    if (d === I && n.setActiveLink(void 0),
                    o.props.hashSpy && Rt.default.getHash() === d) {
                        var O = o.props.saveHashHistory
                          , _ = O === void 0 ? !1 : O;
                        Rt.default.changeHash("", _)
                    }
                    o.props.spy && o.state.active && (o.setState({
                        active: !1
                    }),
                    o.props.onSetInactive && o.props.onSetInactive(d, p))
                }
                if (g && (I !== d || o.state.active === !1)) {
                    n.setActiveLink(d);
                    var T = o.props.saveHashHistory
                      , k = T === void 0 ? !1 : T;
                    o.props.hashSpy && Rt.default.changeHash(d, k),
                    o.props.spy && (o.setState({
                        active: !0
                    }),
                    o.props.onSetActive && o.props.onSetActive(d, p))
                }
            }
        }
    };
    return r.propTypes = Ud,
    r.defaultProps = {
        offset: 0
    },
    r
}
;
Object.defineProperty(Xu, "__esModule", {
    value: !0
});
var Ax = V
  , Wd = Fm(Ax)
  , Nx = Li
  , Ix = Fm(Nx);
function Fm(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function Dx(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function Gd(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function Vx(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var Rx = function(e) {
    Vx(t, e);
    function t() {
        var n, r, i, s;
        Dx(this, t);
        for (var o = arguments.length, l = Array(o), a = 0; a < o; a++)
            l[a] = arguments[a];
        return s = (r = (i = Gd(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(l))),
        i),
        i.render = function() {
            return Wd.default.createElement("a", i.props, i.props.children)
        }
        ,
        r),
        Gd(i, s)
    }
    return t
}(Wd.default.Component);
Xu.default = (0,
Ix.default)(Rx);
var ec = {};
Object.defineProperty(ec, "__esModule", {
    value: !0
});
var zx = function() {
    function e(t, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
}()
  , Fx = V
  , Yd = Bm(Fx)
  , Bx = Li
  , $x = Bm(Bx);
function Bm(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function Hx(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function Ux(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function Wx(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var Gx = function(e) {
    Wx(t, e);
    function t() {
        return Hx(this, t),
        Ux(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return zx(t, [{
        key: "render",
        value: function() {
            return Yd.default.createElement("button", this.props, this.props.children)
        }
    }]),
    t
}(Yd.default.Component);
ec.default = (0,
$x.default)(Gx);
var tc = {}
  , Do = {};
Object.defineProperty(Do, "__esModule", {
    value: !0
});
var Yx = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , Qx = function() {
    function e(t, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
}()
  , Xx = V
  , Qd = Vo(Xx)
  , Kx = _m;
Vo(Kx);
var qx = Pr
  , Xd = Vo(qx)
  , Zx = bi
  , Kd = Vo(Zx);
function Vo(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function Jx(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function ew(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function tw(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
Do.default = function(e) {
    var t = function(n) {
        tw(r, n);
        function r(i) {
            Jx(this, r);
            var s = ew(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
            return s.childBindings = {
                domNode: null
            },
            s
        }
        return Qx(r, [{
            key: "componentDidMount",
            value: function() {
                if (typeof window > "u")
                    return !1;
                this.registerElems(this.props.name)
            }
        }, {
            key: "componentDidUpdate",
            value: function(s) {
                this.props.name !== s.name && this.registerElems(this.props.name)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                if (typeof window > "u")
                    return !1;
                Xd.default.unregister(this.props.name)
            }
        }, {
            key: "registerElems",
            value: function(s) {
                Xd.default.register(s, this.childBindings.domNode)
            }
        }, {
            key: "render",
            value: function() {
                return Qd.default.createElement(e, Yx({}, this.props, {
                    parentBindings: this.childBindings
                }))
            }
        }]),
        r
    }(Qd.default.Component);
    return t.propTypes = {
        name: Kd.default.string,
        id: Kd.default.string
    },
    t
}
;
Object.defineProperty(tc, "__esModule", {
    value: !0
});
var qd = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , nw = function() {
    function e(t, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
}()
  , rw = V
  , Zd = nc(rw)
  , iw = Do
  , sw = nc(iw)
  , ow = bi
  , Jd = nc(ow);
function nc(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function aw(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function lw(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function uw(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var $m = function(e) {
    uw(t, e);
    function t() {
        return aw(this, t),
        lw(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return nw(t, [{
        key: "render",
        value: function() {
            var r = this
              , i = qd({}, this.props);
            return delete i.name,
            i.parentBindings && delete i.parentBindings,
            Zd.default.createElement("div", qd({}, i, {
                ref: function(o) {
                    r.props.parentBindings.domNode = o
                }
            }), this.props.children)
        }
    }]),
    t
}(Zd.default.Component);
$m.propTypes = {
    name: Jd.default.string,
    id: Jd.default.string
};
tc.default = (0,
sw.default)($m);
var Ta = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , ef = function() {
    function e(t, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
}();
function tf(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function nf(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function rf(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var ls = V
  , vn = Mi
  , Ea = Pr
  , J = bi
  , zt = Io
  , sf = {
    to: J.string.isRequired,
    containerId: J.string,
    container: J.object,
    activeClass: J.string,
    spy: J.bool,
    smooth: J.oneOfType([J.bool, J.string]),
    offset: J.number,
    delay: J.number,
    isDynamic: J.bool,
    onClick: J.func,
    duration: J.oneOfType([J.number, J.func]),
    absolute: J.bool,
    onSetActive: J.func,
    onSetInactive: J.func,
    ignoreCancelEvents: J.bool,
    hashSpy: J.bool,
    spyThrottle: J.number
}
  , cw = {
    Scroll: function(t, n) {
        console.warn("Helpers.Scroll is deprecated since v1.7.0");
        var r = n || Ea
          , i = function(o) {
            rf(l, o);
            function l(a) {
                tf(this, l);
                var u = nf(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, a));
                return s.call(u),
                u.state = {
                    active: !1
                },
                u
            }
            return ef(l, [{
                key: "getScrollSpyContainer",
                value: function() {
                    var u = this.props.containerId
                      , c = this.props.container;
                    return u ? document.getElementById(u) : c && c.nodeType ? c : document
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    if (this.props.spy || this.props.hashSpy) {
                        var u = this.getScrollSpyContainer();
                        vn.isMounted(u) || vn.mount(u, this.props.spyThrottle),
                        this.props.hashSpy && (zt.isMounted() || zt.mount(r),
                        zt.mapContainer(this.props.to, u)),
                        this.props.spy && vn.addStateHandler(this.stateHandler),
                        vn.addSpyHandler(this.spyHandler, u),
                        this.setState({
                            container: u
                        })
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    vn.unmount(this.stateHandler, this.spyHandler)
                }
            }, {
                key: "render",
                value: function() {
                    var u = "";
                    this.state && this.state.active ? u = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : u = this.props.className;
                    var c = Ta({}, this.props);
                    for (var d in sf)
                        c.hasOwnProperty(d) && delete c[d];
                    return c.className = u,
                    c.onClick = this.handleClick,
                    ls.createElement(t, c)
                }
            }]),
            l
        }(ls.Component)
          , s = function() {
            var l = this;
            this.scrollTo = function(a, u) {
                r.scrollTo(a, Ta({}, l.state, u))
            }
            ,
            this.handleClick = function(a) {
                l.props.onClick && l.props.onClick(a),
                a.stopPropagation && a.stopPropagation(),
                a.preventDefault && a.preventDefault(),
                l.scrollTo(l.props.to, l.props)
            }
            ,
            this.stateHandler = function() {
                r.getActiveLink() !== l.props.to && (l.state !== null && l.state.active && l.props.onSetInactive && l.props.onSetInactive(),
                l.setState({
                    active: !1
                }))
            }
            ,
            this.spyHandler = function(a) {
                var u = l.getScrollSpyContainer();
                if (!(zt.isMounted() && !zt.isInitialized())) {
                    var c = l.props.to
                      , d = null
                      , p = 0
                      , g = 0
                      , x = 0;
                    if (u.getBoundingClientRect) {
                        var v = u.getBoundingClientRect();
                        x = v.top
                    }
                    if (!d || l.props.isDynamic) {
                        if (d = r.get(c),
                        !d)
                            return;
                        var E = d.getBoundingClientRect();
                        p = E.top - x + a,
                        g = p + E.height
                    }
                    var m = a - l.props.offset
                      , f = m >= Math.floor(p) && m < Math.floor(g)
                      , h = m < Math.floor(p) || m >= Math.floor(g)
                      , w = r.getActiveLink();
                    if (h)
                        return c === w && r.setActiveLink(void 0),
                        l.props.hashSpy && zt.getHash() === c && zt.changeHash(),
                        l.props.spy && l.state.active && (l.setState({
                            active: !1
                        }),
                        l.props.onSetInactive && l.props.onSetInactive()),
                        vn.updateStates();
                    if (f && w !== c)
                        return r.setActiveLink(c),
                        l.props.hashSpy && zt.changeHash(c),
                        l.props.spy && (l.setState({
                            active: !0
                        }),
                        l.props.onSetActive && l.props.onSetActive(c)),
                        vn.updateStates()
                }
            }
        };
        return i.propTypes = sf,
        i.defaultProps = {
            offset: 0
        },
        i
    },
    Element: function(t) {
        console.warn("Helpers.Element is deprecated since v1.7.0");
        var n = function(r) {
            rf(i, r);
            function i(s) {
                tf(this, i);
                var o = nf(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, s));
                return o.childBindings = {
                    domNode: null
                },
                o
            }
            return ef(i, [{
                key: "componentDidMount",
                value: function() {
                    if (typeof window > "u")
                        return !1;
                    this.registerElems(this.props.name)
                }
            }, {
                key: "componentDidUpdate",
                value: function(o) {
                    this.props.name !== o.name && this.registerElems(this.props.name)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    if (typeof window > "u")
                        return !1;
                    Ea.unregister(this.props.name)
                }
            }, {
                key: "registerElems",
                value: function(o) {
                    Ea.register(o, this.childBindings.domNode)
                }
            }, {
                key: "render",
                value: function() {
                    return ls.createElement(t, Ta({}, this.props, {
                        parentBindings: this.childBindings
                    }))
                }
            }]),
            i
        }(ls.Component);
        return n.propTypes = {
            name: J.string,
            id: J.string
        },
        n
    }
}
  , dw = cw;
Object.defineProperty(oe, "__esModule", {
    value: !0
});
oe.Helpers = oe.ScrollElement = oe.ScrollLink = Jm = oe.animateScroll = oe.scrollSpy = oe.Events = oe.scroller = oe.Element = oe.Button = rc = oe.Link = void 0;
var fw = Xu
  , Hm = xt(fw)
  , pw = ec
  , Um = xt(pw)
  , hw = tc
  , Wm = xt(hw)
  , mw = Pr
  , Gm = xt(mw)
  , gw = Oi
  , Ym = xt(gw)
  , vw = Mi
  , Qm = xt(vw)
  , yw = Oo
  , Xm = xt(yw)
  , xw = Li
  , Km = xt(xw)
  , ww = Do
  , qm = xt(ww)
  , Sw = dw
  , Zm = xt(Sw);
function xt(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var rc = oe.Link = Hm.default;
oe.Button = Um.default;
oe.Element = Wm.default;
oe.scroller = Gm.default;
oe.Events = Ym.default;
oe.scrollSpy = Qm.default;
var Jm = oe.animateScroll = Xm.default;
oe.ScrollLink = Km.default;
oe.ScrollElement = qm.default;
oe.Helpers = Zm.default;
oe.default = {
    Link: Hm.default,
    Button: Um.default,
    Element: Wm.default,
    scroller: Gm.default,
    Events: Ym.default,
    scrollSpy: Qm.default,
    animateScroll: Xm.default,
    ScrollLink: Km.default,
    ScrollElement: qm.default,
    Helpers: Zm.default
};
st.propTypes = {
    page: it.string.isRequired,
    selectedPage: it.string.isRequired,
    setSelectedPage: it.func.isRequired,
    icon: it.object.isRequired,
    className: it.string,
    mini: it.bool
};
function st({page: e, selectedPage: t, setSelectedPage: n, icon: r, className: i=""}) {
    const s = e.toLowerCase().replace(/ /g, "");
    return y.jsxs(rc, {
        to: `${e.startsWith("Услуги") ? "услуги" : s}`,
        spy: !0,
        smooth: !0,
        duration: 500,
        offset: -80,
        onClick: () => {
            n(s)
        }
        ,
        className: `ease flex h-[80px] cursor-pointer items-center gap-4 px-5 text-black transition-all duration-300 ${i} hover:bg-yellow-100`,
        children: [r, " ", e]
    })
}
function Tw() {
    return y.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "h-[30px] w-[30px]",
        children: y.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18 18 6M6 6l12 12"
        })
    })
}
function eg() {
    return y.jsx("img", {
        src: "./customer-service.png",
        alt: "Услуги иконка",
        className: "h-[30px] w-[30px] object-contain"
    })
}
function tg() {
    return y.jsx("img", {
        src: "./enterprise.png",
        alt: "О нас иконка",
        className: "h-[30px] w-[30px] object-contain"
    })
}
function ng() {
    return y.jsx("img", {
        src: "./1cicon.jfif",
        alt: "Иконка 1с услуг",
        className: "h-[30px] w-[30px] object-contain"
    })
}
function rg() {
    return y.jsx("img", {
        src: "./accounts.png",
        alt: "Бухгалтер иконка",
        className: "h-[30px] w-[30px] object-contain"
    })
}
function ig() {
    return y.jsx("img", {
        src: "./obr.png",
        alt: "Оборудование иконка",
        className: "h-[30px] w-[30px] object-contain"
    })
}
function Ew({selectedPage: e, setSelectedPage: t, isMenuToggled: n, setIsMenuToggled: r}) {
    return y.jsx("div", {
        className: `ease fixed inset-0 z-40 h-full w-full bg-black bg-opacity-60 transition-all duration-300 ${n ? "opacity-100" : "pointer-events-none opacity-0 "}`,
        children: y.jsxs("div", {
            className: `fixed right-0 top-0 z-50 h-full bg-yellow-200 transition-all duration-500 xs:w-[220px] sm:w-[300px] ${n ? "translate-x-0" : "translate-x-full"}`,
            children: [y.jsx("div", {
                className: "flex justify-end p-5",
                children: y.jsx("button", {
                    onClick: () => r(!n),
                    children: y.jsx(Tw, {})
                })
            }), y.jsxs("ul", {
                className: "flex flex-col",
                children: [y.jsx(st, {
                    page: "Услуги 1C",
                    selectedPage: e,
                    setSelectedPage: t,
                    icon: y.jsx(ng, {}),
                    className: "justify-start"
                }), y.jsx(st, {
                    page: "Услуги IT",
                    selectedPage: e,
                    setSelectedPage: t,
                    icon: y.jsx(eg, {}),
                    className: "justify-start"
                }), y.jsx(st, {
                    page: "Услуги Бухаутсорсинга",
                    selectedPage: e,
                    setSelectedPage: t,
                    icon: y.jsx(rg, {}),
                    className: "justify-start"
                }), y.jsx(st, {
                    page: "Оборудование",
                    selectedPage: e,
                    setSelectedPage: t,
                    icon: y.jsx(ig, {}),
                    className: "justify-start"
                }), y.jsx(st, {
                    page: "О нас",
                    selectedPage: e,
                    setSelectedPage: t,
                    icon: y.jsx(tg, {}),
                    className: "justify-start"
                })]
            })]
        })
    })
}
function Ro() {
    return y.jsxs("svg", {
        width: "21",
        height: "22",
        viewBox: "0 0 21 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [y.jsxs("g", {
            clipPath: "url(#clip0_43_20)",
            children: [y.jsx("path", {
                d: "M10.5026 0.5H10.4974C4.70795 0.5 1.37772e-05 5.20925 1.37772e-05 11C-0.00358129 13.2116 0.696491 15.3669 1.99895 17.1543L0.690389 21.0551L4.72633 19.7649C6.43831 20.9007 8.44815 21.5044 10.5026 21.5C16.2921 21.5 21 16.7894 21 11C21 5.21056 16.2921 0.5 10.5026 0.5Z",
                fill: "#4CAF50"
            }), y.jsx("path", {
                d: "M16.6122 15.3274C16.3589 16.0427 15.3535 16.6359 14.5516 16.8092C14.003 16.926 13.2864 17.0192 10.874 16.0191C7.78829 14.7407 5.80116 11.6051 5.64629 11.4017C5.49798 11.1982 4.39941 9.74137 4.39941 8.23462C4.39941 6.72787 5.1646 5.99418 5.47304 5.67918C5.72635 5.42062 6.14504 5.30249 6.54666 5.30249C6.6766 5.30249 6.79341 5.30905 6.89841 5.3143C7.20685 5.32743 7.36173 5.3458 7.56516 5.83274C7.81848 6.44305 8.43535 7.9498 8.50885 8.10468C8.58366 8.25955 8.65848 8.46955 8.55348 8.67299C8.45504 8.88299 8.36841 8.97618 8.21354 9.15468C8.05866 9.33318 7.91166 9.46968 7.75679 9.6613C7.61504 9.82799 7.45491 10.0065 7.63341 10.3149C7.81191 10.6168 8.42879 11.6235 9.33704 12.432C10.5091 13.4754 11.4594 13.8088 11.7993 13.9506C12.0526 14.0556 12.3545 14.0306 12.5395 13.8337C12.7745 13.5804 13.0645 13.1604 13.3599 12.747C13.5699 12.4504 13.835 12.4136 14.1132 12.5186C14.3967 12.6171 15.8969 13.3586 16.2054 13.5122C16.5138 13.6671 16.7172 13.7406 16.792 13.8705C16.8655 14.0004 16.8655 14.6107 16.6122 15.3274Z",
                fill: "#FAFAFA"
            })]
        }), y.jsx("defs", {
            children: y.jsx("clipPath", {
                id: "clip0_43_20",
                children: y.jsx("rect", {
                    width: "21",
                    height: "21",
                    fill: "white",
                    transform: "translate(0 0.5)"
                })
            })
        })]
    })
}
function Cw() {
    return y.jsxs("a", {
        href: "https://wa.me/77711070225",
        target: "_blank",
        rel: "noreferrer",
        children: [y.jsxs("div", {
            className: "underline-offset-3 flex items-center gap-4  font-bold text-green-500 underline",
            children: [y.jsx(Ro, {}), "+7 771 107 0225"]
        }), y.jsx("p", {
            className: "text-right text-sm",
            children: "Поддержка HQSS"
        })]
    })
}
function Pw({selectedPage: e, setSelectedPage: t}) {
    return y.jsxs("div", {
        className: "flex w-full items-center justify-between",
        children: [y.jsxs("div", {
            className: "flex items-center",
            children: [y.jsx(st, {
                page: "Услуги 1C",
                selectedPage: e,
                setSelectedPage: t,
                icon: y.jsx(ng, {}),
                className: "justify-center"
            }), y.jsx(st, {
                page: "Услуги IT",
                selectedPage: e,
                setSelectedPage: t,
                icon: y.jsx(eg, {}),
                className: "justify-center"
            }), y.jsx(st, {
                page: "Услуги Бухаутсорсинга",
                selectedPage: e,
                setSelectedPage: t,
                icon: y.jsx(rg, {}),
                className: "justify-center"
            }), y.jsx(st, {
                page: "Оборудование",
                selectedPage: e,
                setSelectedPage: t,
                icon: y.jsx(ig, {}),
                className: "justify-center"
            }), y.jsx(st, {
                page: "О нас",
                className: "justify-center",
                selectedPage: e,
                setSelectedPage: t,
                icon: y.jsx(tg, {})
            })]
        }), y.jsx("div", {
            className: "ml-auto",
            children: y.jsx(Cw, {})
        })]
    })
}
function kw() {
    return y.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 2,
        stroke: "#D8252C",
        className: "h-[30px] w-[30px]",
        children: y.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        })
    })
}
sg.propTypes = {
    selectedPage: it.string.isRequired,
    setSelectedPage: it.func.isRequired
};
function sg({selectedPage: e, setSelectedPage: t}) {
    const [n,r] = V.useState(!1)
      , i = Nm("(min-width: 1250px)")
      , s = () => {
        Jm.scrollToTop({
            duration: 1e3,
            smooth: !0
        })
    }
    ;
    return y.jsx("header", {
        className: "fixed left-0 top-0 z-30 w-screen border border-b bg-yellow-200 xs:px-4 ",
        children: y.jsxs("div", {
            className: "container flex h-[80px] items-center gap-5",
            children: [y.jsx(rc, {
                spy: !0,
                smooth: !0,
                className: "cursor-pointer text-[26px] font-bold xs:mr-1 sm:mr-10",
                onClick: () => {
                    t("главная"),
                    s()
                }
                ,
                children: "HQSS"
            }), i && y.jsx(Pw, {
                selectedPage: e,
                setSelectedPage: t,
                isMenuToggled: n,
                setIsMenuToggled: r
            }), !i && y.jsx("button", {
                onClick: () => r(!n),
                className: "ml-auto",
                children: y.jsx(kw, {})
            }), y.jsx(Ew, {
                selectedPage: e,
                setSelectedPage: t,
                isMenuToggled: n,
                setIsMenuToggled: r
            })]
        })
    })
}
const og = V.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
})
  , zo = V.createContext({})
  , ic = V.createContext(null)
  , Fo = typeof document < "u"
  , bw = Fo ? V.useLayoutEffect : V.useEffect
  , ag = V.createContext({
    strict: !1
})
  , sc = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  , Lw = "framerAppearId"
  , lg = "data-" + sc(Lw)
  , ug = {
    skipAnimations: !1,
    useManualTiming: !1
};
class of {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t))
            return this.scheduled.add(t),
            this.order.push(t),
            !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1),
        this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
function Mw(e) {
    let t = new of
      , n = new of
      , r = 0
      , i = !1
      , s = !1;
    const o = new WeakSet
      , l = {
        schedule: (a, u=!1, c=!1) => {
            const d = c && i
              , p = d ? t : n;
            return u && o.add(a),
            p.add(a) && d && i && (r = t.order.length),
            a
        }
        ,
        cancel: a => {
            n.remove(a),
            o.delete(a)
        }
        ,
        process: a => {
            if (i) {
                s = !0;
                return
            }
            if (i = !0,
            [t,n] = [n, t],
            n.clear(),
            r = t.order.length,
            r)
                for (let u = 0; u < r; u++) {
                    const c = t.order[u];
                    o.has(c) && (l.schedule(c),
                    e()),
                    c(a)
                }
            i = !1,
            s && (s = !1,
            l.process(a))
        }
    };
    return l
}
const us = ["prepare", "read", "update", "preRender", "render", "postRender"]
  , _w = 40;
function cg(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = us.reduce( (d, p) => (d[p] = Mw( () => n = !0),
    d), {})
      , o = d => {
        s[d].process(i)
    }
      , l = () => {
        const d = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, _w), 1),
        i.timestamp = d,
        i.isProcessing = !0,
        us.forEach(o),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(l))
    }
      , a = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(l)
    }
    ;
    return {
        schedule: us.reduce( (d, p) => {
            const g = s[p];
            return d[p] = (x, v=!1, E=!1) => (n || a(),
            g.schedule(x, v, E)),
            d
        }
        , {}),
        cancel: d => us.forEach(p => s[p].cancel(d)),
        state: i,
        steps: s
    }
}
const {schedule: oc, cancel: _k} = cg(queueMicrotask, !1);
function jw(e, t, n, r) {
    const {visualElement: i} = V.useContext(zo)
      , s = V.useContext(ag)
      , o = V.useContext(ic)
      , l = V.useContext(og).reducedMotion
      , a = V.useRef();
    r = r || s.renderer,
    !a.current && r && (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const u = a.current;
    V.useInsertionEffect( () => {
        u && u.update(n, o)
    }
    );
    const c = V.useRef(!!(n[lg] && !window.HandoffComplete));
    return bw( () => {
        u && (oc.postRender(u.render),
        c.current && u.animationState && u.animationState.animateChanges())
    }
    ),
    V.useEffect( () => {
        u && (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && (c.current = !1,
        window.HandoffComplete = !0))
    }
    ),
    u
}
function tr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function Ow(e, t, n) {
    return V.useCallback(r => {
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : tr(n) && (n.current = r))
    }
    , [t])
}
function yi(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Bo(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const ac = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , lc = ["initial", ...ac];
function $o(e) {
    return Bo(e.animate) || lc.some(t => yi(e[t]))
}
function dg(e) {
    return !!($o(e) || e.variants)
}
function Aw(e, t) {
    if ($o(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || yi(n) ? n : void 0,
            animate: yi(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function Nw(e) {
    const {initial: t, animate: n} = Aw(e, V.useContext(zo));
    return V.useMemo( () => ({
        initial: t,
        animate: n
    }), [af(t), af(n)])
}
function af(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const lf = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , xi = {};
for (const e in lf)
    xi[e] = {
        isEnabled: t => lf[e].some(n => !!t[n])
    };
function Iw(e) {
    for (const t in e)
        xi[t] = {
            ...xi[t],
            ...e[t]
        }
}
const fg = V.createContext({})
  , pg = V.createContext({})
  , Dw = Symbol.for("motionComponentSymbol");
function Vw({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    e && Iw(e);
    function s(l, a) {
        let u;
        const c = {
            ...V.useContext(og),
            ...l,
            layoutId: Rw(l)
        }
          , {isStatic: d} = c
          , p = Nw(l)
          , g = r(l, d);
        if (!d && Fo) {
            p.visualElement = jw(i, g, c, t);
            const x = V.useContext(pg)
              , v = V.useContext(ag).strict;
            p.visualElement && (u = p.visualElement.loadFeatures(c, v, e, x))
        }
        return V.createElement(zo.Provider, {
            value: p
        }, u && p.visualElement ? V.createElement(u, {
            visualElement: p.visualElement,
            ...c
        }) : null, n(i, l, Ow(g, p.visualElement, a), g, d, p.visualElement))
    }
    const o = V.forwardRef(s);
    return o[Dw] = i,
    o
}
function Rw({layoutId: e}) {
    const t = V.useContext(fg).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function zw(e) {
    function t(r, i={}) {
        return Vw(e(r, i))
    }
    if (typeof Proxy > "u")
        return t;
    const n = new Map;
    return new Proxy(t,{
        get: (r, i) => (n.has(i) || n.set(i, t(i)),
        n.get(i))
    })
}
const Fw = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function uc(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Fw.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const ro = {};
function Bw(e) {
    Object.assign(ro, e)
}
const Ii = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , zn = new Set(Ii);
function hg(e, {layout: t, layoutId: n}) {
    return zn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ro[e] || e === "opacity")
}
const Ie = e => !!(e && e.getVelocity)
  , $w = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Hw = Ii.length;
function Uw(e, {enableHardwareAcceleration: t=!0, allowTransformNone: n=!0}, r, i) {
    let s = "";
    for (let o = 0; o < Hw; o++) {
        const l = Ii[o];
        if (e[l] !== void 0) {
            const a = $w[l] || l;
            s += `${a}(${e[l]}) `
        }
    }
    return t && !e.z && (s += "translateZ(0)"),
    s = s.trim(),
    i ? s = i(e, r ? "" : s) : n && r && (s = "none"),
    s
}
const mg = e => t => typeof t == "string" && t.startsWith(e)
  , gg = mg("--")
  , Rl = mg("var(--")
  , Ww = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
  , Gw = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , ln = (e, t, n) => Math.min(Math.max(n, e), t)
  , Fn = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Kr = {
    ...Fn,
    transform: e => ln(0, 1, e)
}
  , cs = {
    ...Fn,
    default: 1
}
  , qr = e => Math.round(e * 1e5) / 1e5
  , Ho = /(-)?([\d]*\.?[\d])+/g
  , vg = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , Yw = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Di(e) {
    return typeof e == "string"
}
const Vi = e => ({
    test: t => Di(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Ft = Vi("deg")
  , yt = Vi("%")
  , B = Vi("px")
  , Qw = Vi("vh")
  , Xw = Vi("vw")
  , uf = {
    ...yt,
    parse: e => yt.parse(e) / 100,
    transform: e => yt.transform(e * 100)
}
  , cf = {
    ...Fn,
    transform: Math.round
}
  , yg = {
    borderWidth: B,
    borderTopWidth: B,
    borderRightWidth: B,
    borderBottomWidth: B,
    borderLeftWidth: B,
    borderRadius: B,
    radius: B,
    borderTopLeftRadius: B,
    borderTopRightRadius: B,
    borderBottomRightRadius: B,
    borderBottomLeftRadius: B,
    width: B,
    maxWidth: B,
    height: B,
    maxHeight: B,
    size: B,
    top: B,
    right: B,
    bottom: B,
    left: B,
    padding: B,
    paddingTop: B,
    paddingRight: B,
    paddingBottom: B,
    paddingLeft: B,
    margin: B,
    marginTop: B,
    marginRight: B,
    marginBottom: B,
    marginLeft: B,
    rotate: Ft,
    rotateX: Ft,
    rotateY: Ft,
    rotateZ: Ft,
    scale: cs,
    scaleX: cs,
    scaleY: cs,
    scaleZ: cs,
    skew: Ft,
    skewX: Ft,
    skewY: Ft,
    distance: B,
    translateX: B,
    translateY: B,
    translateZ: B,
    x: B,
    y: B,
    z: B,
    perspective: B,
    transformPerspective: B,
    opacity: Kr,
    originX: uf,
    originY: uf,
    originZ: B,
    zIndex: cf,
    fillOpacity: Kr,
    strokeOpacity: Kr,
    numOctaves: cf
};
function cc(e, t, n, r) {
    const {style: i, vars: s, transform: o, transformOrigin: l} = e;
    let a = !1
      , u = !1
      , c = !0;
    for (const d in t) {
        const p = t[d];
        if (gg(d)) {
            s[d] = p;
            continue
        }
        const g = yg[d]
          , x = Gw(p, g);
        if (zn.has(d)) {
            if (a = !0,
            o[d] = x,
            !c)
                continue;
            p !== (g.default || 0) && (c = !1)
        } else
            d.startsWith("origin") ? (u = !0,
            l[d] = x) : i[d] = x
    }
    if (t.transform || (a || r ? i.transform = Uw(e.transform, n, c, r) : i.transform && (i.transform = "none")),
    u) {
        const {originX: d="50%", originY: p="50%", originZ: g=0} = l;
        i.transformOrigin = `${d} ${p} ${g}`
    }
}
const dc = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function xg(e, t, n) {
    for (const r in t)
        !Ie(t[r]) && !hg(r, n) && (e[r] = t[r])
}
function Kw({transformTemplate: e}, t, n) {
    return V.useMemo( () => {
        const r = dc();
        return cc(r, t, {
            enableHardwareAcceleration: !n
        }, e),
        Object.assign({}, r.vars, r.style)
    }
    , [t])
}
function qw(e, t, n) {
    const r = e.style || {}
      , i = {};
    return xg(i, r, e),
    Object.assign(i, Kw(e, t, n)),
    i
}
function Zw(e, t, n) {
    const r = {}
      , i = qw(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
const Jw = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function io(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Jw.has(e)
}
let wg = e => !io(e);
function eS(e) {
    e && (wg = t => t.startsWith("on") ? !io(t) : e(t))
}
try {
    eS(require("@emotion/is-prop-valid").default)
} catch {}
function tS(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (wg(i) || n === !0 && io(i) || !t && !io(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function df(e, t, n) {
    return typeof e == "string" ? e : B.transform(t + n * e)
}
function nS(e, t, n) {
    const r = df(t, e.x, e.width)
      , i = df(n, e.y, e.height);
    return `${r} ${i}`
}
const rS = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , iS = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function sS(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const s = i ? rS : iS;
    e[s.offset] = B.transform(-r);
    const o = B.transform(t)
      , l = B.transform(n);
    e[s.array] = `${o} ${l}`
}
function fc(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: s, pathLength: o, pathSpacing: l=1, pathOffset: a=0, ...u}, c, d, p) {
    if (cc(e, u, c, p),
    d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: g, style: x, dimensions: v} = e;
    g.transform && (v && (x.transform = g.transform),
    delete g.transform),
    v && (i !== void 0 || s !== void 0 || x.transform) && (x.transformOrigin = nS(v, i !== void 0 ? i : .5, s !== void 0 ? s : .5)),
    t !== void 0 && (g.x = t),
    n !== void 0 && (g.y = n),
    r !== void 0 && (g.scale = r),
    o !== void 0 && sS(g, o, l, a, !1)
}
const Sg = () => ({
    ...dc(),
    attrs: {}
})
  , pc = e => typeof e == "string" && e.toLowerCase() === "svg";
function oS(e, t, n, r) {
    const i = V.useMemo( () => {
        const s = Sg();
        return fc(s, t, {
            enableHardwareAcceleration: !1
        }, pc(r), e.transformTemplate),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        xg(s, e.style, e),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
function aS(e=!1) {
    return (n, r, i, {latestValues: s}, o) => {
        const a = (uc(n) ? oS : Zw)(r, s, o, n)
          , c = {
            ...tS(r, typeof n == "string", e),
            ...a,
            ref: i
        }
          , {children: d} = r
          , p = V.useMemo( () => Ie(d) ? d.get() : d, [d]);
        return V.createElement(n, {
            ...c,
            children: p
        })
    }
}
function Tg(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const s in n)
        e.style.setProperty(s, n[s])
}
const Eg = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Cg(e, t, n, r) {
    Tg(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(Eg.has(i) ? i : sc(i), t.attrs[i])
}
function hc(e, t) {
    const {style: n} = e
      , r = {};
    for (const i in n)
        (Ie(n[i]) || t.style && Ie(t.style[i]) || hg(i, e)) && (r[i] = n[i]);
    return r
}
function Pg(e, t) {
    const n = hc(e, t);
    for (const r in e)
        if (Ie(e[r]) || Ie(t[r])) {
            const i = Ii.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[i] = e[r]
        }
    return n
}
function mc(e, t, n, r={}, i={}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
}
function lS(e) {
    const t = V.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const so = e => Array.isArray(e)
  , uS = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , cS = e => so(e) ? e[e.length - 1] || 0 : e;
function Ls(e) {
    const t = Ie(e) ? e.get() : e;
    return uS(t) ? t.toValue() : t
}
function dS({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, i, s) {
    const o = {
        latestValues: fS(r, i, s, e),
        renderState: t()
    };
    return n && (o.mount = l => n(r, l, o)),
    o
}
const kg = e => (t, n) => {
    const r = V.useContext(zo)
      , i = V.useContext(ic)
      , s = () => dS(e, t, r, i);
    return n ? s() : lS(s)
}
;
function fS(e, t, n, r) {
    const i = {}
      , s = r(e, {});
    for (const p in s)
        i[p] = Ls(s[p]);
    let {initial: o, animate: l} = e;
    const a = $o(e)
      , u = dg(e);
    t && u && !a && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    l === void 0 && (l = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const d = c ? l : o;
    return d && typeof d != "boolean" && !Bo(d) && (Array.isArray(d) ? d : [d]).forEach(g => {
        const x = mc(e, g);
        if (!x)
            return;
        const {transitionEnd: v, transition: E, ...m} = x;
        for (const f in m) {
            let h = m[f];
            if (Array.isArray(h)) {
                const w = c ? h.length - 1 : 0;
                h = h[w]
            }
            h !== null && (i[f] = h)
        }
        for (const f in v)
            i[f] = v[f]
    }
    ),
    i
}
const ce = e => e
  , {schedule: ne, cancel: It, state: ve, steps: Ca} = cg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ce, !0)
  , pS = {
    useVisualState: kg({
        scrapeMotionValuesFromProps: Pg,
        createRenderState: Sg,
        onMount: (e, t, {renderState: n, latestValues: r}) => {
            ne.read( () => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            ne.render( () => {
                fc(n, r, {
                    enableHardwareAcceleration: !1
                }, pc(t.tagName), e.transformTemplate),
                Cg(t, n)
            }
            )
        }
    })
}
  , hS = {
    useVisualState: kg({
        scrapeMotionValuesFromProps: hc,
        createRenderState: dc
    })
};
function mS(e, {forwardMotionProps: t=!1}, n, r) {
    return {
        ...uc(e) ? pS : hS,
        preloadedFeatures: n,
        useRender: aS(t),
        createVisualElement: r,
        Component: e
    }
}
function bt(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const bg = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Uo(e, t="page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const gS = e => t => bg(t) && e(t, Uo(t));
function Mt(e, t, n, r) {
    return bt(e, t, gS(n), r)
}
const vS = (e, t) => n => t(e(n))
  , sn = (...e) => e.reduce(vS);
function Lg(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        }
        ;
        return t === null ? (t = e,
        n) : !1
    }
}
const ff = Lg("dragHorizontal")
  , pf = Lg("dragVertical");
function Mg(e) {
    let t = !1;
    if (e === "y")
        t = pf();
    else if (e === "x")
        t = ff();
    else {
        const n = ff()
          , r = pf();
        n && r ? t = () => {
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return t
}
function _g() {
    const e = Mg(!0);
    return e ? (e(),
    !1) : !0
}
class pn {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function hf(e, t) {
    const n = "pointer" + (t ? "enter" : "leave")
      , r = "onHover" + (t ? "Start" : "End")
      , i = (s, o) => {
        if (s.pointerType === "touch" || _g())
            return;
        const l = e.getProps();
        e.animationState && l.whileHover && e.animationState.setActive("whileHover", t),
        l[r] && ne.update( () => l[r](s, o))
    }
    ;
    return Mt(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class yS extends pn {
    mount() {
        this.unmount = sn(hf(this.node, !0), hf(this.node, !1))
    }
    unmount() {}
}
class xS extends pn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = sn(bt(this.node.current, "focus", () => this.onFocus()), bt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const jg = (e, t) => t ? e === t ? !0 : jg(e, t.parentElement) : !1;
function Pa(e, t) {
    if (!t)
        return;
    const n = new PointerEvent("pointer" + e);
    t(n, Uo(n))
}
class wS extends pn {
    constructor() {
        super(...arguments),
        this.removeStartListeners = ce,
        this.removeEndListeners = ce,
        this.removeAccessibleListeners = ce,
        this.startPointerPress = (t, n) => {
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const r = this.node.getProps()
              , s = Mt(window, "pointerup", (l, a) => {
                if (!this.checkPressEnd())
                    return;
                const {onTap: u, onTapCancel: c, globalTapTarget: d} = this.node.getProps();
                ne.update( () => {
                    !d && !jg(this.node.current, l.target) ? c && c(l, a) : u && u(l, a)
                }
                )
            }
            , {
                passive: !(r.onTap || r.onPointerUp)
            })
              , o = Mt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
                passive: !(r.onTapCancel || r.onPointerCancel)
            });
            this.removeEndListeners = sn(s, o),
            this.startPress(t, n)
        }
        ,
        this.startAccessiblePress = () => {
            const t = s => {
                if (s.key !== "Enter" || this.isPressing)
                    return;
                const o = l => {
                    l.key !== "Enter" || !this.checkPressEnd() || Pa("up", (a, u) => {
                        const {onTap: c} = this.node.getProps();
                        c && ne.update( () => c(a, u))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = bt(this.node.current, "keyup", o),
                Pa("down", (l, a) => {
                    this.startPress(l, a)
                }
                )
            }
              , n = bt(this.node.current, "keydown", t)
              , r = () => {
                this.isPressing && Pa("cancel", (s, o) => this.cancelPress(s, o))
            }
              , i = bt(this.node.current, "blur", r);
            this.removeAccessibleListeners = sn(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {onTapStart: r, whileTap: i} = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        r && ne.update( () => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !_g()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: r} = this.node.getProps();
        r && ne.update( () => r(t, n))
    }
    mount() {
        const t = this.node.getProps()
          , n = Mt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(t.onTapStart || t.onPointerStart)
        })
          , r = bt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = sn(n, r)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const zl = new WeakMap
  , ka = new WeakMap
  , SS = e => {
    const t = zl.get(e.target);
    t && t(e)
}
  , TS = e => {
    e.forEach(SS)
}
;
function ES({root: e, ...t}) {
    const n = e || document;
    ka.has(n) || ka.set(n, {});
    const r = ka.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(TS,{
        root: e,
        ...t
    })),
    r[i]
}
function CS(e, t, n) {
    const r = ES(t);
    return zl.set(e, n),
    r.observe(e),
    () => {
        zl.delete(e),
        r.unobserve(e)
    }
}
const PS = {
    some: 0,
    all: 1
};
class kS extends pn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: s} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : PS[i]
        }
          , l = a => {
            const {isIntersecting: u} = a;
            if (this.isInView === u || (this.isInView = u,
            s && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: d} = this.node.getProps()
              , p = u ? c : d;
            p && p(a)
        }
        ;
        return CS(this.node.current, o, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(bS(t, n)) && this.startObserver()
    }
    unmount() {}
}
function bS({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const LS = {
    inView: {
        Feature: kS
    },
    tap: {
        Feature: wS
    },
    focus: {
        Feature: xS
    },
    hover: {
        Feature: yS
    }
};
function Og(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function MS(e) {
    const t = {};
    return e.values.forEach( (n, r) => t[r] = n.get()),
    t
}
function _S(e) {
    const t = {};
    return e.values.forEach( (n, r) => t[r] = n.getVelocity()),
    t
}
function Wo(e, t, n) {
    const r = e.getProps();
    return mc(r, t, n !== void 0 ? n : r.custom, MS(e), _S(e))
}
let gc = ce;
const Mn = e => e * 1e3
  , _t = e => e / 1e3
  , jS = {
    current: !1
}
  , Ag = e => Array.isArray(e) && typeof e[0] == "number";
function Ng(e) {
    return !!(!e || typeof e == "string" && Ig[e] || Ag(e) || Array.isArray(e) && e.every(Ng))
}
const Fr = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Ig = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Fr([0, .65, .55, 1]),
    circOut: Fr([.55, 0, 1, .45]),
    backIn: Fr([.31, .01, .66, -.59]),
    backOut: Fr([.33, 1.53, .69, .99])
};
function Dg(e) {
    if (e)
        return Ag(e) ? Fr(e) : Array.isArray(e) ? e.map(Dg) : Ig[e]
}
function OS(e, t, n, {delay: r=0, duration: i, repeat: s=0, repeatType: o="loop", ease: l, times: a}={}) {
    const u = {
        [t]: n
    };
    a && (u.offset = a);
    const c = Dg(l);
    return Array.isArray(c) && (u.easing = c),
    e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
function AS(e, {repeat: t, repeatType: n="loop"}) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const Vg = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , NS = 1e-7
  , IS = 12;
function DS(e, t, n, r, i) {
    let s, o, l = 0;
    do
        o = t + (n - t) / 2,
        s = Vg(o, r, i) - e,
        s > 0 ? n = o : t = o;
    while (Math.abs(s) > NS && ++l < IS);
    return o
}
function Ri(e, t, n, r) {
    if (e === t && n === r)
        return ce;
    const i = s => DS(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : Vg(i(s), t, r)
}
const VS = Ri(.42, 0, 1, 1)
  , RS = Ri(0, 0, .58, 1)
  , Rg = Ri(.42, 0, .58, 1)
  , zS = e => Array.isArray(e) && typeof e[0] != "number"
  , zg = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Fg = e => t => 1 - e(1 - t)
  , vc = e => 1 - Math.sin(Math.acos(e))
  , Bg = Fg(vc)
  , FS = zg(vc)
  , $g = Ri(.33, 1.53, .69, .99)
  , yc = Fg($g)
  , BS = zg(yc)
  , $S = e => (e *= 2) < 1 ? .5 * yc(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , HS = {
    linear: ce,
    easeIn: VS,
    easeInOut: Rg,
    easeOut: RS,
    circIn: vc,
    circInOut: FS,
    circOut: Bg,
    backIn: yc,
    backInOut: BS,
    backOut: $g,
    anticipate: $S
}
  , mf = e => {
    if (Array.isArray(e)) {
        gc(e.length === 4);
        const [t,n,r,i] = e;
        return Ri(t, n, r, i)
    } else if (typeof e == "string")
        return HS[e];
    return e
}
  , xc = (e, t) => n => !!(Di(n) && Yw.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , Hg = (e, t, n) => r => {
    if (!Di(r))
        return r;
    const [i,s,o,l] = r.match(Ho);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , US = e => ln(0, 255, e)
  , ba = {
    ...Fn,
    transform: e => Math.round(US(e))
}
  , kn = {
    test: xc("rgb", "red"),
    parse: Hg("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + ba.transform(e) + ", " + ba.transform(t) + ", " + ba.transform(n) + ", " + qr(Kr.transform(r)) + ")"
};
function WS(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Fl = {
    test: xc("#"),
    parse: WS,
    transform: kn.transform
}
  , nr = {
    test: xc("hsl", "hue"),
    parse: Hg("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + yt.transform(qr(t)) + ", " + yt.transform(qr(n)) + ", " + qr(Kr.transform(r)) + ")"
}
  , Pe = {
    test: e => kn.test(e) || Fl.test(e) || nr.test(e),
    parse: e => kn.test(e) ? kn.parse(e) : nr.test(e) ? nr.parse(e) : Fl.parse(e),
    transform: e => Di(e) ? e : e.hasOwnProperty("red") ? kn.transform(e) : nr.transform(e)
}
  , te = (e, t, n) => -n * e + n * t + e;
function La(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function GS({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , s = 0
      , o = 0;
    if (!t)
        i = s = o = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - l;
        i = La(a, l, e + 1 / 3),
        s = La(a, l, e),
        o = La(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
const Ma = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r))
}
  , YS = [Fl, kn, nr]
  , QS = e => YS.find(t => t.test(e));
function gf(e) {
    const t = QS(e);
    let n = t.parse(e);
    return t === nr && (n = GS(n)),
    n
}
const Ug = (e, t) => {
    const n = gf(e)
      , r = gf(t)
      , i = {
        ...n
    };
    return s => (i.red = Ma(n.red, r.red, s),
    i.green = Ma(n.green, r.green, s),
    i.blue = Ma(n.blue, r.blue, s),
    i.alpha = te(n.alpha, r.alpha, s),
    kn.transform(i))
}
;
function XS(e) {
    var t, n;
    return isNaN(e) && Di(e) && (((t = e.match(Ho)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(vg)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Wg = {
    regex: Ww,
    countKey: "Vars",
    token: "${v}",
    parse: ce
}
  , Gg = {
    regex: vg,
    countKey: "Colors",
    token: "${c}",
    parse: Pe.parse
}
  , Yg = {
    regex: Ho,
    countKey: "Numbers",
    token: "${n}",
    parse: Fn.parse
};
function _a(e, {regex: t, countKey: n, token: r, parse: i}) {
    const s = e.tokenised.match(t);
    s && (e["num" + n] = s.length,
    e.tokenised = e.tokenised.replace(t, r),
    e.values.push(...s.map(i)))
}
function oo(e) {
    const t = e.toString()
      , n = {
        value: t,
        tokenised: t,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0
    };
    return n.value.includes("var(--") && _a(n, Wg),
    _a(n, Gg),
    _a(n, Yg),
    n
}
function Qg(e) {
    return oo(e).values
}
function Xg(e) {
    const {values: t, numColors: n, numVars: r, tokenised: i} = oo(e)
      , s = t.length;
    return o => {
        let l = i;
        for (let a = 0; a < s; a++)
            a < r ? l = l.replace(Wg.token, o[a]) : a < r + n ? l = l.replace(Gg.token, Pe.transform(o[a])) : l = l.replace(Yg.token, qr(o[a]));
        return l
    }
}
const KS = e => typeof e == "number" ? 0 : e;
function qS(e) {
    const t = Qg(e);
    return Xg(e)(t.map(KS))
}
const un = {
    test: XS,
    parse: Qg,
    createTransformer: Xg,
    getAnimatableNone: qS
}
  , Kg = (e, t) => n => `${n > 0 ? t : e}`;
function qg(e, t) {
    return typeof e == "number" ? n => te(e, t, n) : Pe.test(e) ? Ug(e, t) : e.startsWith("var(") ? Kg(e, t) : Jg(e, t)
}
const Zg = (e, t) => {
    const n = [...e]
      , r = n.length
      , i = e.map( (s, o) => qg(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
  , ZS = (e, t) => {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = qg(e[i], t[i]));
    return i => {
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
  , Jg = (e, t) => {
    const n = un.createTransformer(t)
      , r = oo(e)
      , i = oo(t);
    return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? sn(Zg(r.values, i.values), n) : Kg(e, t)
}
  , wi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , vf = (e, t) => n => te(e, t, n);
function JS(e) {
    return typeof e == "number" ? vf : typeof e == "string" ? Pe.test(e) ? Ug : Jg : Array.isArray(e) ? Zg : typeof e == "object" ? ZS : vf
}
function eT(e, t, n) {
    const r = []
      , i = n || JS(e[0])
      , s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let l = i(e[o], e[o + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[o] || ce : t;
            l = sn(a, l)
        }
        r.push(l)
    }
    return r
}
function ev(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = e.length;
    if (gc(s === t.length),
    s === 1)
        return () => t[0];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const o = eT(t, r, i)
      , l = o.length
      , a = u => {
        let c = 0;
        if (l > 1)
            for (; c < e.length - 2 && !(u < e[c + 1]); c++)
                ;
        const d = wi(e[c], e[c + 1], u);
        return o[c](d)
    }
    ;
    return n ? u => a(ln(e[0], e[s - 1], u)) : a
}
function tT(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = wi(0, t, r);
        e.push(te(n, 1, i))
    }
}
function nT(e) {
    const t = [0];
    return tT(t, e.length - 1),
    t
}
function rT(e, t) {
    return e.map(n => n * t)
}
function iT(e, t) {
    return e.map( () => t || Rg).splice(0, e.length - 1)
}
function ao({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = zS(r) ? r.map(mf) : mf(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , o = rT(n && n.length === t.length ? n : nT(t), e)
      , l = ev(o, t, {
        ease: Array.isArray(i) ? i : iT(t, i)
    });
    return {
        calculatedDuration: e,
        next: a => (s.value = l(a),
        s.done = a >= e,
        s)
    }
}
function tv(e, t) {
    return t ? e * (1e3 / t) : 0
}
const sT = 5;
function nv(e, t, n) {
    const r = Math.max(t - sT, 0);
    return tv(n - e(r), t - r)
}
const ja = .001
  , oT = .01
  , aT = 10
  , lT = .05
  , uT = 1;
function cT({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, s, o = 1 - t;
    o = ln(lT, uT, o),
    e = ln(oT, aT, _t(e)),
    o < 1 ? (i = u => {
        const c = u * o
          , d = c * e
          , p = c - n
          , g = Bl(u, o)
          , x = Math.exp(-d);
        return ja - p / g * x
    }
    ,
    s = u => {
        const d = u * o * e
          , p = d * n + n
          , g = Math.pow(o, 2) * Math.pow(u, 2) * e
          , x = Math.exp(-d)
          , v = Bl(Math.pow(u, 2), o);
        return (-i(u) + ja > 0 ? -1 : 1) * ((p - g) * x) / v
    }
    ) : (i = u => {
        const c = Math.exp(-u * e)
          , d = (u - n) * e + 1;
        return -ja + c * d
    }
    ,
    s = u => {
        const c = Math.exp(-u * e)
          , d = (n - u) * (e * e);
        return c * d
    }
    );
    const l = 5 / e
      , a = fT(i, s, l);
    if (e = Mn(e),
    isNaN(a))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const dT = 12;
function fT(e, t, n) {
    let r = n;
    for (let i = 1; i < dT; i++)
        r = r - e(r) / t(r);
    return r
}
function Bl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const pT = ["duration", "bounce"]
  , hT = ["stiffness", "damping", "mass"];
function yf(e, t) {
    return t.some(n => e[n] !== void 0)
}
function mT(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!yf(e, hT) && yf(e, pT)) {
        const n = cT(e);
        t = {
            ...t,
            ...n,
            mass: 1
        },
        t.isResolvedFromDuration = !0
    }
    return t
}
function rv({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
    const i = e[0]
      , s = e[e.length - 1]
      , o = {
        done: !1,
        value: i
    }
      , {stiffness: l, damping: a, mass: u, duration: c, velocity: d, isResolvedFromDuration: p} = mT({
        ...r,
        velocity: -_t(r.velocity || 0)
    })
      , g = d || 0
      , x = a / (2 * Math.sqrt(l * u))
      , v = s - i
      , E = _t(Math.sqrt(l / u))
      , m = Math.abs(v) < 5;
    n || (n = m ? .01 : 2),
    t || (t = m ? .005 : .5);
    let f;
    if (x < 1) {
        const h = Bl(E, x);
        f = w => {
            const S = Math.exp(-x * E * w);
            return s - S * ((g + x * E * v) / h * Math.sin(h * w) + v * Math.cos(h * w))
        }
    } else if (x === 1)
        f = h => s - Math.exp(-E * h) * (v + (g + E * v) * h);
    else {
        const h = E * Math.sqrt(x * x - 1);
        f = w => {
            const S = Math.exp(-x * E * w)
              , C = Math.min(h * w, 300);
            return s - S * ((g + x * E * v) * Math.sinh(C) + h * v * Math.cosh(C)) / h
        }
    }
    return {
        calculatedDuration: p && c || null,
        next: h => {
            const w = f(h);
            if (p)
                o.done = h >= c;
            else {
                let S = g;
                h !== 0 && (x < 1 ? S = nv(f, h, w) : S = 0);
                const C = Math.abs(S) <= n
                  , M = Math.abs(s - w) <= t;
                o.done = C && M
            }
            return o.value = o.done ? s : w,
            o
        }
    }
}
function xf({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: l, max: a, restDelta: u=.5, restSpeed: c}) {
    const d = e[0]
      , p = {
        done: !1,
        value: d
    }
      , g = P => l !== void 0 && P < l || a !== void 0 && P > a
      , x = P => l === void 0 ? a : a === void 0 || Math.abs(l - P) < Math.abs(a - P) ? l : a;
    let v = n * t;
    const E = d + v
      , m = o === void 0 ? E : o(E);
    m !== E && (v = m - d);
    const f = P => -v * Math.exp(-P / r)
      , h = P => m + f(P)
      , w = P => {
        const L = f(P)
          , b = h(P);
        p.done = Math.abs(L) <= u,
        p.value = p.done ? m : b
    }
    ;
    let S, C;
    const M = P => {
        g(p.value) && (S = P,
        C = rv({
            keyframes: [p.value, x(p.value)],
            velocity: nv(h, P, p.value),
            damping: i,
            stiffness: s,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return M(0),
    {
        calculatedDuration: null,
        next: P => {
            let L = !1;
            return !C && S === void 0 && (L = !0,
            w(P),
            M(P)),
            S !== void 0 && P > S ? C.next(P - S) : (!L && w(P),
            p)
        }
    }
}
let Ms;
function gT() {
    Ms = void 0
}
const _n = {
    now: () => (Ms === void 0 && _n.set(ve.isProcessing || ug.useManualTiming ? ve.timestamp : performance.now()),
    Ms),
    set: e => {
        Ms = e,
        queueMicrotask(gT)
    }
}
  , vT = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => ne.update(t, !0),
        stop: () => It(t),
        now: () => ve.isProcessing ? ve.timestamp : _n.now()
    }
}
  , wf = 2e4;
function Sf(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < wf; )
        t += n,
        r = e.next(t);
    return t >= wf ? 1 / 0 : t
}
const yT = {
    decay: xf,
    inertia: xf,
    tween: ao,
    keyframes: ao,
    spring: rv
};
function lo({autoplay: e=!0, delay: t=0, driver: n=vT, keyframes: r, type: i="keyframes", repeat: s=0, repeatDelay: o=0, repeatType: l="loop", onPlay: a, onStop: u, onComplete: c, onUpdate: d, ...p}) {
    let g = 1, x = !1, v, E;
    const m = () => {
        E = new Promise(F => {
            v = F
        }
        )
    }
    ;
    m();
    let f;
    const h = yT[i] || ao;
    let w;
    h !== ao && typeof r[0] != "number" && (w = ev([0, 100], r, {
        clamp: !1
    }),
    r = [0, 100]);
    const S = h({
        ...p,
        keyframes: r
    });
    let C;
    l === "mirror" && (C = h({
        ...p,
        keyframes: [...r].reverse(),
        velocity: -(p.velocity || 0)
    }));
    let M = "idle"
      , P = null
      , L = null
      , b = null;
    S.calculatedDuration === null && s && (S.calculatedDuration = Sf(S));
    const {calculatedDuration: I} = S;
    let O = 1 / 0
      , _ = 1 / 0;
    I !== null && (O = I + o,
    _ = O * (s + 1) - o);
    let T = 0;
    const k = F => {
        if (L === null)
            return;
        g > 0 && (L = Math.min(L, F)),
        g < 0 && (L = Math.min(F - _ / g, L)),
        P !== null ? T = P : T = Math.round(F - L) * g;
        const W = T - t * (g >= 0 ? 1 : -1)
          , hn = g >= 0 ? W < 0 : W > _;
        T = Math.max(W, 0),
        M === "finished" && P === null && (T = _);
        let ct = T
          , Bn = S;
        if (s) {
            const Go = Math.min(T, _) / O;
            let zi = Math.floor(Go)
              , gn = Go % 1;
            !gn && Go >= 1 && (gn = 1),
            gn === 1 && zi--,
            zi = Math.min(zi, s + 1),
            !!(zi % 2) && (l === "reverse" ? (gn = 1 - gn,
            o && (gn -= o / O)) : l === "mirror" && (Bn = C)),
            ct = ln(0, 1, gn) * O
        }
        const Ve = hn ? {
            done: !1,
            value: r[0]
        } : Bn.next(ct);
        w && (Ve.value = w(Ve.value));
        let {done: mn} = Ve;
        !hn && I !== null && (mn = g >= 0 ? T >= _ : T <= 0);
        const Qv = P === null && (M === "finished" || M === "running" && mn);
        return d && d(Ve.value),
        Qv && j(),
        Ve
    }
      , N = () => {
        f && f.stop(),
        f = void 0
    }
      , $ = () => {
        M = "idle",
        N(),
        v(),
        m(),
        L = b = null
    }
      , j = () => {
        M = "finished",
        c && c(),
        N(),
        v()
    }
      , A = () => {
        if (x)
            return;
        f || (f = n(k));
        const F = f.now();
        a && a(),
        P !== null ? L = F - P : (!L || M === "finished") && (L = F),
        M === "finished" && m(),
        b = L,
        P = null,
        M = "running",
        f.start()
    }
    ;
    e && A();
    const R = {
        then(F, W) {
            return E.then(F, W)
        },
        get time() {
            return _t(T)
        },
        set time(F) {
            F = Mn(F),
            T = F,
            P !== null || !f || g === 0 ? P = F : L = f.now() - F / g
        },
        get duration() {
            const F = S.calculatedDuration === null ? Sf(S) : S.calculatedDuration;
            return _t(F)
        },
        get speed() {
            return g
        },
        set speed(F) {
            F === g || !f || (g = F,
            R.time = _t(T))
        },
        get state() {
            return M
        },
        play: A,
        pause: () => {
            M = "paused",
            P = T
        }
        ,
        stop: () => {
            x = !0,
            M !== "idle" && (M = "idle",
            u && u(),
            $())
        }
        ,
        cancel: () => {
            b !== null && k(b),
            $()
        }
        ,
        complete: () => {
            M = "finished"
        }
        ,
        sample: F => (L = 0,
        k(F))
    };
    return R
}
function xT(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const wT = xT( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , ST = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
  , ds = 10
  , TT = 2e4
  , ET = (e, t) => t.type === "spring" || e === "backgroundColor" || !Ng(t.ease);
function CT(e, t, {onUpdate: n, onComplete: r, ...i}) {
    if (!(wT() && ST.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
        return !1;
    let o = !1, l, a, u = !1;
    const c = () => {
        a = new Promise(h => {
            l = h
        }
        )
    }
    ;
    c();
    let {keyframes: d, duration: p=300, ease: g, times: x} = i;
    if (ET(t, i)) {
        const h = lo({
            ...i,
            repeat: 0,
            delay: 0
        });
        let w = {
            done: !1,
            value: d[0]
        };
        const S = [];
        let C = 0;
        for (; !w.done && C < TT; )
            w = h.sample(C),
            S.push(w.value),
            C += ds;
        x = void 0,
        d = S,
        p = C - ds,
        g = "linear"
    }
    const v = OS(e.owner.current, t, d, {
        ...i,
        duration: p,
        ease: g,
        times: x
    })
      , E = () => {
        u = !1,
        v.cancel()
    }
      , m = () => {
        u = !0,
        ne.update(E),
        l(),
        c()
    }
    ;
    return v.onfinish = () => {
        u || (e.set(AS(d, i)),
        r && r(),
        m())
    }
    ,
    {
        then(h, w) {
            return a.then(h, w)
        },
        attachTimeline(h) {
            return v.timeline = h,
            v.onfinish = null,
            ce
        },
        get time() {
            return _t(v.currentTime || 0)
        },
        set time(h) {
            v.currentTime = Mn(h)
        },
        get speed() {
            return v.playbackRate
        },
        set speed(h) {
            v.playbackRate = h
        },
        get duration() {
            return _t(p)
        },
        play: () => {
            o || (v.play(),
            It(E))
        }
        ,
        pause: () => v.pause(),
        stop: () => {
            if (o = !0,
            v.playState === "idle")
                return;
            const {currentTime: h} = v;
            if (h) {
                const w = lo({
                    ...i,
                    autoplay: !1
                });
                e.setWithVelocity(w.sample(h - ds).value, w.sample(h).value, ds)
            }
            m()
        }
        ,
        complete: () => {
            u || v.finish()
        }
        ,
        cancel: m
    }
}
function PT({keyframes: e, delay: t, onUpdate: n, onComplete: r}) {
    const i = () => (n && n(e[e.length - 1]),
    r && r(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: ce,
        pause: ce,
        stop: ce,
        then: s => (s(),
        Promise.resolve()),
        cancel: ce,
        complete: ce
    });
    return t ? lo({
        keyframes: [0, 1],
        duration: 0,
        delay: t,
        onComplete: i
    }) : i()
}
const kT = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , bT = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , LT = {
    type: "keyframes",
    duration: .8
}
  , MT = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , _T = (e, {keyframes: t}) => t.length > 2 ? LT : zn.has(e) ? e.startsWith("scale") ? bT(t[1]) : kT : MT
  , $l = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (un.test(t) || t === "0") && !t.startsWith("url("))
  , jT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function OT(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Ho) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let s = jT.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + i + ")"
}
const AT = /([a-z-]*)\(.*?\)/g
  , Hl = {
    ...un,
    getAnimatableNone: e => {
        const t = e.match(AT);
        return t ? t.map(OT).join(" ") : e
    }
}
  , NT = {
    ...yg,
    color: Pe,
    backgroundColor: Pe,
    outlineColor: Pe,
    fill: Pe,
    stroke: Pe,
    borderColor: Pe,
    borderTopColor: Pe,
    borderRightColor: Pe,
    borderBottomColor: Pe,
    borderLeftColor: Pe,
    filter: Hl,
    WebkitFilter: Hl
}
  , wc = e => NT[e];
function iv(e, t) {
    let n = wc(e);
    return n !== Hl && (n = un),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const sv = e => /^0[^.\s]+$/.test(e);
function IT(e) {
    if (typeof e == "number")
        return e === 0;
    if (e !== null)
        return e === "none" || e === "0" || sv(e)
}
function DT(e, t, n, r) {
    const i = $l(t, n);
    let s;
    Array.isArray(n) ? s = [...n] : s = [null, n];
    const o = r.from !== void 0 ? r.from : e.get();
    let l;
    const a = [];
    for (let u = 0; u < s.length; u++)
        s[u] === null && (s[u] = u === 0 ? o : s[u - 1]),
        IT(s[u]) && a.push(u),
        typeof s[u] == "string" && s[u] !== "none" && s[u] !== "0" && (l = s[u]);
    if (i && a.length && l)
        for (let u = 0; u < a.length; u++) {
            const c = a[u];
            s[c] = iv(t, l)
        }
    return s
}
function VT({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: l, from: a, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
function Sc(e, t) {
    return e[t] || e.default || e
}
const Tc = (e, t, n, r={}) => i => {
    const s = Sc(r, e) || {}
      , o = s.delay || r.delay || 0;
    let {elapsed: l=0} = r;
    l = l - Mn(o);
    const a = DT(t, e, n, s)
      , u = a[0]
      , c = a[a.length - 1]
      , d = $l(e, u)
      , p = $l(e, c);
    let g = {
        keyframes: a,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...s,
        delay: -l,
        onUpdate: x => {
            t.set(x),
            s.onUpdate && s.onUpdate(x)
        }
        ,
        onComplete: () => {
            i(),
            s.onComplete && s.onComplete()
        }
    };
    if (VT(s) || (g = {
        ...g,
        ..._T(e, g)
    }),
    g.duration && (g.duration = Mn(g.duration)),
    g.repeatDelay && (g.repeatDelay = Mn(g.repeatDelay)),
    !d || !p || jS.current || s.type === !1 || ug.skipAnimations)
        return PT(g);
    if (!r.isHandoff && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
        const x = CT(t, e, g);
        if (x)
            return x
    }
    return lo(g)
}
;
function uo(e) {
    return !!(Ie(e) && e.add)
}
const ov = e => /^\-?\d*\.?\d+$/.test(e);
function Ec(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Cc(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Pc {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Ec(this.subscriptions, t),
        () => Cc(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Tf = 30
  , RT = e => !isNaN(parseFloat(e));
class zT {
    constructor(t, n={}) {
        this.version = "11.0.3",
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (r, i=!0) => {
            const s = _n.now();
            this.updatedAt !== s && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.canTrackVelocity = RT(this.current),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = _n.now()
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Pc);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            ne.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = _n.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Tf)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Tf);
        return tv(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function xr(e, t) {
    return new zT(e,t)
}
const av = e => t => t.test(e)
  , FT = {
    test: e => e === "auto",
    parse: e => e
}
  , lv = [Fn, B, yt, Ft, Xw, Qw, FT]
  , Nr = e => lv.find(av(e))
  , BT = [...lv, Pe, un]
  , $T = e => BT.find(av(e));
function HT(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, xr(n))
}
function UT(e, t) {
    const n = Wo(e, t);
    let {transitionEnd: r={}, transition: i={}, ...s} = n ? e.makeTargetAnimatable(n, !1) : {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const l = cS(s[o]);
        HT(e, o, l)
    }
}
function WT(e, t, n) {
    var r, i;
    const s = Object.keys(t).filter(l => !e.hasValue(l))
      , o = s.length;
    if (o)
        for (let l = 0; l < o; l++) {
            const a = s[l]
              , u = t[a];
            let c = null;
            Array.isArray(u) && (c = u[0]),
            c === null && (c = (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !== null && i !== void 0 ? i : t[a]),
            c != null && (typeof c == "string" && (ov(c) || sv(c)) ? c = parseFloat(c) : !$T(c) && un.test(u) && (c = iv(a, u)),
            e.addValue(a, xr(c, {
                owner: e
            })),
            n[a] === void 0 && (n[a] = c),
            c !== null && e.setBaseTarget(a, c))
        }
}
function GT(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}
function YT(e, t, n) {
    const r = {};
    for (const i in e) {
        const s = GT(i, t);
        if (s !== void 0)
            r[i] = s;
        else {
            const o = n.getValue(i);
            o && (r[i] = o.get())
        }
    }
    return r
}
function QT({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function XT(e, t) {
    const n = e.get();
    if (Array.isArray(t)) {
        for (let r = 0; r < t.length; r++)
            if (t[r] !== n)
                return !0
    } else
        return n !== t
}
function uv(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: s=e.getDefaultTransition(), transitionEnd: o, ...l} = e.makeTargetAnimatable(t);
    const a = e.getValue("willChange");
    r && (s = r);
    const u = []
      , c = i && e.animationState && e.animationState.getState()[i];
    for (const d in l) {
        const p = e.getValue(d)
          , g = l[d];
        if (!p || g === void 0 || c && QT(c, d))
            continue;
        const x = {
            delay: n,
            elapsed: 0,
            ...Sc(s || {}, d)
        };
        if (window.HandoffAppearAnimations) {
            const m = e.getProps()[lg];
            if (m) {
                const f = window.HandoffAppearAnimations(m, d, p, ne);
                f !== null && (x.elapsed = f,
                x.isHandoff = !0)
            }
        }
        let v = !x.isHandoff && !XT(p, g);
        if (x.type === "spring" && (p.getVelocity() || x.velocity) && (v = !1),
        p.animation && (v = !1),
        v)
            continue;
        p.start(Tc(d, p, g, e.shouldReduceMotion && zn.has(d) ? {
            type: !1
        } : x));
        const E = p.animation;
        uo(a) && (a.add(d),
        E.then( () => a.remove(d))),
        u.push(E)
    }
    return o && Promise.all(u).then( () => {
        o && UT(e, o)
    }
    ),
    u
}
function Ul(e, t, n={}) {
    const r = Wo(e, t, n.custom);
    let {transition: i=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(uv(e, r, n)) : () => Promise.resolve()
      , o = e.variantChildren && e.variantChildren.size ? (a=0) => {
        const {delayChildren: u=0, staggerChildren: c, staggerDirection: d} = i;
        return KT(e, t, u + a, c, d, n)
    }
    : () => Promise.resolve()
      , {when: l} = i;
    if (l) {
        const [a,u] = l === "beforeChildren" ? [s, o] : [o, s];
        return a().then( () => u())
    } else
        return Promise.all([s(), o(n.delay)])
}
function KT(e, t, n=0, r=0, i=1, s) {
    const o = []
      , l = (e.variantChildren.size - 1) * r
      , a = i === 1 ? (u=0) => u * r : (u=0) => l - u * r;
    return Array.from(e.variantChildren).sort(qT).forEach( (u, c) => {
        u.notify("AnimationStart", t),
        o.push(Ul(u, t, {
            ...s,
            delay: n + a(c)
        }).then( () => u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(o)
}
function qT(e, t) {
    return e.sortNodePosition(t)
}
function ZT(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => Ul(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = Ul(e, t, n);
    else {
        const i = typeof t == "function" ? Wo(e, t, n.custom) : t;
        r = Promise.all(uv(e, i, n))
    }
    return r.then( () => e.notify("AnimationComplete", t))
}
const JT = [...ac].reverse()
  , eE = ac.length;
function tE(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => ZT(e, n, r)))
}
function nE(e) {
    let t = tE(e);
    const n = iE();
    let r = !0;
    const i = (a, u) => {
        const c = Wo(e, u);
        if (c) {
            const {transition: d, transitionEnd: p, ...g} = c;
            a = {
                ...a,
                ...g,
                ...p
            }
        }
        return a
    }
    ;
    function s(a) {
        t = a(e)
    }
    function o(a, u) {
        const c = e.getProps()
          , d = e.getVariantContext(!0) || {}
          , p = []
          , g = new Set;
        let x = {}
          , v = 1 / 0;
        for (let m = 0; m < eE; m++) {
            const f = JT[m]
              , h = n[f]
              , w = c[f] !== void 0 ? c[f] : d[f]
              , S = yi(w)
              , C = f === u ? h.isActive : null;
            C === !1 && (v = m);
            let M = w === d[f] && w !== c[f] && S;
            if (M && r && e.manuallyAnimateOnMount && (M = !1),
            h.protectedKeys = {
                ...x
            },
            !h.isActive && C === null || !w && !h.prevProp || Bo(w) || typeof w == "boolean")
                continue;
            let L = rE(h.prevProp, w) || f === u && h.isActive && !M && S || m > v && S
              , b = !1;
            const I = Array.isArray(w) ? w : [w];
            let O = I.reduce(i, {});
            C === !1 && (O = {});
            const {prevResolvedValues: _={}} = h
              , T = {
                ..._,
                ...O
            }
              , k = N => {
                L = !0,
                g.has(N) && (b = !0,
                g.delete(N)),
                h.needsAnimating[N] = !0
            }
            ;
            for (const N in T) {
                const $ = O[N]
                  , j = _[N];
                if (x.hasOwnProperty(N))
                    continue;
                let A = !1;
                so($) && so(j) ? A = !Og($, j) : A = $ !== j,
                A ? $ !== void 0 ? k(N) : g.add(N) : $ !== void 0 && g.has(N) ? k(N) : h.protectedKeys[N] = !0
            }
            h.prevProp = w,
            h.prevResolvedValues = O,
            h.isActive && (x = {
                ...x,
                ...O
            }),
            r && e.blockInitialAnimation && (L = !1),
            L && (!M || b) && p.push(...I.map(N => ({
                animation: N,
                options: {
                    type: f,
                    ...a
                }
            })))
        }
        if (g.size) {
            const m = {};
            g.forEach(f => {
                const h = e.getBaseTarget(f);
                h !== void 0 && (m[f] = h)
            }
            ),
            p.push({
                animation: m
            })
        }
        let E = !!p.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (E = !1),
        r = !1,
        E ? t(p) : Promise.resolve()
    }
    function l(a, u, c) {
        var d;
        if (n[a].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(g => {
            var x;
            return (x = g.animationState) === null || x === void 0 ? void 0 : x.setActive(a, u)
        }
        ),
        n[a].isActive = u;
        const p = o(c, a);
        for (const g in n)
            n[g].protectedKeys = {};
        return p
    }
    return {
        animateChanges: o,
        setActive: l,
        setAnimateFunction: s,
        getState: () => n
    }
}
function rE(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Og(t, e) : !1
}
function yn(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function iE() {
    return {
        animate: yn(!0),
        whileInView: yn(),
        whileHover: yn(),
        whileTap: yn(),
        whileDrag: yn(),
        whileFocus: yn(),
        exit: yn()
    }
}
class sE extends pn {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = nE(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        this.unmount(),
        Bo(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let oE = 0;
class aE extends pn {
    constructor() {
        super(...arguments),
        this.id = oE++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n, custom: r} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === i)
            return;
        const s = this.node.animationState.setActive("exit", !t, {
            custom: r ?? this.node.getProps().custom
        });
        n && !t && s.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const lE = {
    animation: {
        Feature: sE
    },
    exit: {
        Feature: aE
    }
}
  , Ef = (e, t) => Math.abs(e - t);
function uE(e, t) {
    const n = Ef(e.x, t.x)
      , r = Ef(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class cv {
    constructor(t, n, {transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const d = Aa(this.lastMoveEventInfo, this.history)
              , p = this.startEvent !== null
              , g = uE(d.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!p && !g)
                return;
            const {point: x} = d
              , {timestamp: v} = ve;
            this.history.push({
                ...x,
                timestamp: v
            });
            const {onStart: E, onMove: m} = this.handlers;
            p || (E && E(this.lastMoveEvent, d),
            this.startEvent = this.lastMoveEvent),
            m && m(this.lastMoveEvent, d)
        }
        ,
        this.handlePointerMove = (d, p) => {
            this.lastMoveEvent = d,
            this.lastMoveEventInfo = Oa(p, this.transformPagePoint),
            ne.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (d, p) => {
            this.end();
            const {onEnd: g, onSessionEnd: x, resumeAnimation: v} = this.handlers;
            if (this.dragSnapToOrigin && v && v(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const E = Aa(d.type === "pointercancel" ? this.lastMoveEventInfo : Oa(p, this.transformPagePoint), this.history);
            this.startEvent && g && g(d, E),
            x && x(d, E)
        }
        ,
        !bg(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = i || window;
        const o = Uo(t)
          , l = Oa(o, this.transformPagePoint)
          , {point: a} = l
          , {timestamp: u} = ve;
        this.history = [{
            ...a,
            timestamp: u
        }];
        const {onSessionStart: c} = n;
        c && c(t, Aa(l, this.history)),
        this.removeListeners = sn(Mt(this.contextWindow, "pointermove", this.handlePointerMove), Mt(this.contextWindow, "pointerup", this.handlePointerUp), Mt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        It(this.updatePoint)
    }
}
function Oa(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Cf(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Aa({point: e}, t) {
    return {
        point: e,
        delta: Cf(e, dv(t)),
        offset: Cf(e, cE(t)),
        velocity: dE(t, .1)
    }
}
function cE(e) {
    return e[0]
}
function dv(e) {
    return e[e.length - 1]
}
function dE(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = dv(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > Mn(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const s = _t(i.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function He(e) {
    return e.max - e.min
}
function Wl(e, t=0, n=.01) {
    return Math.abs(e - t) <= n
}
function Pf(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = te(t.min, t.max, e.origin),
    e.scale = He(n) / He(t),
    (Wl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    e.translate = te(n.min, n.max, e.origin) - e.originPoint,
    (Wl(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function Zr(e, t, n, r) {
    Pf(e.x, t.x, n.x, r ? r.originX : void 0),
    Pf(e.y, t.y, n.y, r ? r.originY : void 0)
}
function kf(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + He(t)
}
function fE(e, t, n) {
    kf(e.x, t.x, n.x),
    kf(e.y, t.y, n.y)
}
function bf(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + He(t)
}
function Jr(e, t, n) {
    bf(e.x, t.x, n.x),
    bf(e.y, t.y, n.y)
}
function pE(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? te(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? te(n, e, r.max) : Math.min(e, n)),
    e
}
function Lf(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function hE(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: Lf(e.x, n, i),
        y: Lf(e.y, t, r)
    }
}
function Mf(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function mE(e, t) {
    return {
        x: Mf(e.x, t.x),
        y: Mf(e.y, t.y)
    }
}
function gE(e, t) {
    let n = .5;
    const r = He(e)
      , i = He(t);
    return i > r ? n = wi(t.min, t.max - r, e.min) : r > i && (n = wi(e.min, e.max - i, t.min)),
    ln(0, 1, n)
}
function vE(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const Gl = .35;
function yE(e=Gl) {
    return e === !1 ? e = 0 : e === !0 && (e = Gl),
    {
        x: _f(e, "left", "right"),
        y: _f(e, "top", "bottom")
    }
}
function _f(e, t, n) {
    return {
        min: jf(e, t),
        max: jf(e, n)
    }
}
function jf(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Of = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , rr = () => ({
    x: Of(),
    y: Of()
})
  , Af = () => ({
    min: 0,
    max: 0
})
  , le = () => ({
    x: Af(),
    y: Af()
});
function Ye(e) {
    return [e("x"), e("y")]
}
function fv({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function xE({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function wE(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Na(e) {
    return e === void 0 || e === 1
}
function Yl({scale: e, scaleX: t, scaleY: n}) {
    return !Na(e) || !Na(t) || !Na(n)
}
function Sn(e) {
    return Yl(e) || pv(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function pv(e) {
    return Nf(e.x) || Nf(e.y)
}
function Nf(e) {
    return e && e !== "0%"
}
function co(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function If(e, t, n, r, i) {
    return i !== void 0 && (e = co(e, i, r)),
    co(e, n, r) + t
}
function Ql(e, t=0, n=1, r, i) {
    e.min = If(e.min, t, n, r, i),
    e.max = If(e.max, t, n, r, i)
}
function hv(e, {x: t, y: n}) {
    Ql(e.x, t.translate, t.scale, t.originPoint),
    Ql(e.y, n.translate, n.scale, n.originPoint)
}
function SE(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let s, o;
    for (let l = 0; l < i; l++) {
        s = n[l],
        o = s.projectionDelta;
        const a = s.instance;
        a && a.style && a.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && ir(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        hv(e, o)),
        r && Sn(s.latestValues) && ir(e, s.latestValues))
    }
    t.x = Df(t.x),
    t.y = Df(t.y)
}
function Df(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}
function Ut(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function Vf(e, t, [n,r,i]) {
    const s = t[i] !== void 0 ? t[i] : .5
      , o = te(e.min, e.max, s);
    Ql(e, t[n], t[r], o, t.scale)
}
const TE = ["x", "scaleX", "originX"]
  , EE = ["y", "scaleY", "originY"];
function ir(e, t) {
    Vf(e.x, t, TE),
    Vf(e.y, t, EE)
}
function mv(e, t) {
    return fv(wE(e.getBoundingClientRect(), t))
}
function CE(e, t, n) {
    const r = mv(e, n)
      , {scroll: i} = t;
    return i && (Ut(r.x, i.offset.x),
    Ut(r.y, i.offset.y)),
    r
}
const gv = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , PE = new WeakMap;
class kE {
    constructor(t) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = le(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = c => {
            const {dragSnapToOrigin: d} = this.getProps();
            d ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(Uo(c, "page").point)
        }
          , s = (c, d) => {
            const {drag: p, dragPropagation: g, onDragStart: x} = this.getProps();
            if (p && !g && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = Mg(p),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Ye(E => {
                let m = this.getAxisMotionValue(E).get() || 0;
                if (yt.test(m)) {
                    const {projection: f} = this.visualElement;
                    if (f && f.layout) {
                        const h = f.layout.layoutBox[E];
                        h && (m = He(h) * (parseFloat(m) / 100))
                    }
                }
                this.originPoint[E] = m
            }
            ),
            x && ne.update( () => x(c, d), !1, !0);
            const {animationState: v} = this.visualElement;
            v && v.setActive("whileDrag", !0)
        }
          , o = (c, d) => {
            const {dragPropagation: p, dragDirectionLock: g, onDirectionLock: x, onDrag: v} = this.getProps();
            if (!p && !this.openGlobalLock)
                return;
            const {offset: E} = d;
            if (g && this.currentDirection === null) {
                this.currentDirection = bE(E),
                this.currentDirection !== null && x && x(this.currentDirection);
                return
            }
            this.updateAxis("x", d.point, E),
            this.updateAxis("y", d.point, E),
            this.visualElement.render(),
            v && v(c, d)
        }
          , l = (c, d) => this.stop(c, d)
          , a = () => Ye(c => {
            var d;
            return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new cv(t,{
            onSessionStart: i,
            onStart: s,
            onMove: o,
            onSessionEnd: l,
            resumeAnimation: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: gv(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: s} = this.getProps();
        s && ne.update( () => s(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !fs(t, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = pE(o, this.constraints[t], this.elastic[t])),
        s.set(o)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , s = this.constraints;
        n && tr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = hE(i.layoutBox, n) : this.constraints = !1,
        this.elastic = yE(r),
        s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Ye(o => {
            this.getAxisMotionValue(o) && (this.constraints[o] = vE(i.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !tr(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = CE(r, i.root, this.visualElement.getTransformPagePoint());
        let o = mE(i.layout.layoutBox, s);
        if (n) {
            const l = n(xE(o));
            this.hasMutatedConstraints = !!l,
            l && (o = fv(l))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: l} = this.getProps()
          , a = this.constraints || {}
          , u = Ye(c => {
            if (!fs(c, n, this.currentDirection))
                return;
            let d = a && a[c] || {};
            o && (d = {
                min: 0,
                max: 0
            });
            const p = i ? 200 : 1e6
              , g = i ? 40 : 1e7
              , x = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: p,
                bounceDamping: g,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...d
            };
            return this.startAxisValueAnimation(c, x)
        }
        );
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(Tc(t, r, 0, n))
    }
    stopAnimation() {
        Ye(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Ye(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase()
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Ye(n => {
            const {drag: r} = this.getProps();
            if (!fs(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: l} = i.layout.layoutBox[n];
                s.set(t[n] - te(o, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!tr(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Ye(o => {
            const l = this.getAxisMotionValue(o);
            if (l) {
                const a = l.get();
                i[o] = gE({
                    min: a,
                    max: a
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        Ye(o => {
            if (!fs(o, t, null))
                return;
            const l = this.getAxisMotionValue(o)
              , {min: a, max: u} = this.constraints[o];
            l.set(te(a, u, i[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        PE.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Mt(t, "pointerdown", a => {
            const {drag: u, dragListener: c=!0} = this.getProps();
            u && c && this.start(a)
        }
        )
          , r = () => {
            const {dragConstraints: a} = this.getProps();
            tr(a) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        r();
        const o = bt(window, "resize", () => this.scalePositionWithinConstraints())
          , l = i.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: u}) => {
            this.isDragging && u && (Ye(c => {
                const d = this.getAxisMotionValue(c);
                d && (this.originPoint[c] += a[c].translate,
                d.set(d.get() + a[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            o(),
            n(),
            s(),
            l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=Gl, dragMomentum: l=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: l
        }
    }
}
function fs(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function bE(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class LE extends pn {
    constructor(t) {
        super(t),
        this.removeGroupControls = ce,
        this.removeListeners = ce,
        this.controls = new kE(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || ce
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Rf = e => (t, n) => {
    e && ne.update( () => e(t, n))
}
;
class ME extends pn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = ce
    }
    onPointerDown(t) {
        this.session = new cv(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: gv(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: Rf(t),
            onStart: Rf(n),
            onMove: r,
            onEnd: (s, o) => {
                delete this.session,
                i && ne.update( () => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Mt(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function _E() {
    const e = V.useContext(ic);
    if (e === null)
        return [!0, null];
    const {isPresent: t, onExitComplete: n, register: r} = e
      , i = V.useId();
    return V.useEffect( () => r(i), []),
    !t && n ? [!1, () => n && n(i)] : [!0]
}
const _s = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function zf(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Ir = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (B.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = zf(e, t.target.x)
          , r = zf(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , jE = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = un.parse(e);
        if (i.length > 5)
            return r;
        const s = un.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , l = n.x.scale * t.x
          , a = n.y.scale * t.y;
        i[0 + o] /= l,
        i[1 + o] /= a;
        const u = te(l, a, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
    }
};
class OE extends se.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = t;
        Bw(AE),
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
        })),
        _s.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , o = r.projection;
        return o && (o.isPresent = s,
        i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? o.promote() : o.relegate() || ne.postRender( () => {
            const l = o.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        oc.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function vv(e) {
    const [t,n] = _E()
      , r = V.useContext(fg);
    return se.createElement(OE, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: V.useContext(pg),
        isPresent: t,
        safeToRemove: n
    })
}
const AE = {
    borderRadius: {
        ...Ir,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Ir,
    borderTopRightRadius: Ir,
    borderBottomLeftRadius: Ir,
    borderBottomRightRadius: Ir,
    boxShadow: jE
}
  , yv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , NE = yv.length
  , Ff = e => typeof e == "string" ? parseFloat(e) : e
  , Bf = e => typeof e == "number" || B.test(e);
function IE(e, t, n, r, i, s) {
    i ? (e.opacity = te(0, n.opacity !== void 0 ? n.opacity : 1, DE(r)),
    e.opacityExit = te(t.opacity !== void 0 ? t.opacity : 1, 0, VE(r))) : s && (e.opacity = te(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < NE; o++) {
        const l = `border${yv[o]}Radius`;
        let a = $f(t, l)
          , u = $f(n, l);
        if (a === void 0 && u === void 0)
            continue;
        a || (a = 0),
        u || (u = 0),
        a === 0 || u === 0 || Bf(a) === Bf(u) ? (e[l] = Math.max(te(Ff(a), Ff(u), r), 0),
        (yt.test(u) || yt.test(a)) && (e[l] += "%")) : e[l] = u
    }
    (t.rotate || n.rotate) && (e.rotate = te(t.rotate || 0, n.rotate || 0, r))
}
function $f(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const DE = xv(0, .5, Bg)
  , VE = xv(.5, .95, ce);
function xv(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(wi(e, t, r))
}
function Hf(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Ge(e, t) {
    Hf(e.x, t.x),
    Hf(e.y, t.y)
}
function Uf(e, t, n, r, i) {
    return e -= t,
    e = co(e, 1 / n, r),
    i !== void 0 && (e = co(e, 1 / i, r)),
    e
}
function RE(e, t=0, n=1, r=.5, i, s=e, o=e) {
    if (yt.test(t) && (t = parseFloat(t),
    t = te(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let l = te(s.min, s.max, r);
    e === s && (l -= t),
    e.min = Uf(e.min, t, n, l, i),
    e.max = Uf(e.max, t, n, l, i)
}
function Wf(e, t, [n,r,i], s, o) {
    RE(e, t[n], t[r], t[i], t.scale, s, o)
}
const zE = ["x", "scaleX", "originX"]
  , FE = ["y", "scaleY", "originY"];
function Gf(e, t, n, r) {
    Wf(e.x, t, zE, n ? n.x : void 0, r ? r.x : void 0),
    Wf(e.y, t, FE, n ? n.y : void 0, r ? r.y : void 0)
}
function Yf(e) {
    return e.translate === 0 && e.scale === 1
}
function wv(e) {
    return Yf(e.x) && Yf(e.y)
}
function BE(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function Sv(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}
function Qf(e) {
    return He(e.x) / He(e.y)
}
class $E {
    constructor() {
        this.members = []
    }
    add(t) {
        Ec(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (Cc(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function Xf(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , s = e.y.translate / t.y;
    if ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {rotate: a, rotateX: u, rotateY: c} = n;
        a && (r += `rotate(${a}deg) `),
        u && (r += `rotateX(${u}deg) `),
        c && (r += `rotateY(${c}deg) `)
    }
    const o = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (o !== 1 || l !== 1) && (r += `scale(${o}, ${l})`),
    r || "none"
}
const HE = (e, t) => e.depth - t.depth;
class UE {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Ec(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Cc(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(HE),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function WE(e, t) {
    const n = _n.now()
      , r = ({timestamp: i}) => {
        const s = i - n;
        s >= t && (It(r),
        e(s - t))
    }
    ;
    return ne.read(r, !0),
    () => It(r)
}
function GE(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}
function YE(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function QE(e, t, n) {
    const r = Ie(e) ? e : xr(e);
    return r.start(Tc("", r, t, n)),
    r.animation
}
const Kf = ["", "X", "Y", "Z"]
  , XE = {
    visibility: "hidden"
}
  , qf = 1e3;
let KE = 0;
const Tn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function Tv({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, l=t == null ? void 0 : t()) {
            this.id = KE++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                Tn.totalNodes = Tn.resolvedTargetDeltas = Tn.recalculatedProjection = 0,
                this.nodes.forEach(JE),
                this.nodes.forEach(iC),
                this.nodes.forEach(sC),
                this.nodes.forEach(eC),
                GE(Tn)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = l ? l.root || l : this,
            this.path = l ? [...l.path, l] : [],
            this.parent = l,
            this.depth = l ? l.depth + 1 : 0;
            for (let a = 0; a < this.path.length; a++)
                this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new UE)
        }
        addEventListener(o, l) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Pc),
            this.eventHandlers.get(o).add(l)
        }
        notifyListeners(o, ...l) {
            const a = this.eventHandlers.get(o);
            a && a.notify(...l)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, l=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = YE(o),
            this.instance = o;
            const {layoutId: a, layout: u, visualElement: c} = this.options;
            if (c && !c.current && c.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            l && (u || a) && (this.isLayoutDirty = !0),
            e) {
                let d;
                const p = () => this.root.updateBlockedByResize = !1;
                e(o, () => {
                    this.root.updateBlockedByResize = !0,
                    d && d(),
                    d = WE(p, 250),
                    _s.hasAnimatedSinceResize && (_s.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Jf))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({delta: d, hasLayoutChanged: p, hasRelativeTargetChanged: g, layout: x}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || c.getDefaultTransition() || cC
                  , {onLayoutAnimationStart: E, onLayoutAnimationComplete: m} = c.getProps()
                  , f = !this.targetLayout || !Sv(this.targetLayout, x) || g
                  , h = !p && g;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || h || p && (f || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(d, h);
                    const w = {
                        ...Sc(v, "layout"),
                        onPlay: E,
                        onComplete: m
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0,
                    w.type = !1),
                    this.startAnimation(w)
                } else
                    p || Jf(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = x
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            It(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(oC),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: l, layout: a} = this.options;
            if (l === void 0 && !a)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Zf);
                return
            }
            this.isUpdating || this.nodes.forEach(nC),
            this.isUpdating = !1,
            this.nodes.forEach(rC),
            this.nodes.forEach(qE),
            this.nodes.forEach(ZE),
            this.clearAllSnapshots();
            const l = _n.now();
            ve.delta = ln(0, 1e3 / 60, l - ve.timestamp),
            ve.timestamp = l,
            ve.isProcessing = !0,
            Ca.update.process(ve),
            Ca.preRender.process(ve),
            Ca.render.process(ve),
            ve.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            oc.read( () => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(tC),
            this.sharedNodes.forEach(aC)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            ne.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            ne.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++)
                    this.path[a].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = le(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: l} = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1),
            l && (this.scroll = {
                animationId: this.root.animationId,
                phase: o,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform
              , l = this.projectionDelta && !wv(this.projectionDelta)
              , a = this.getTransformTemplate()
              , u = a ? a(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            o && (l || Sn(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return o && (a = this.removeTransform(a)),
            dC(a),
            {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: o} = this.options;
            if (!o)
                return le();
            const l = o.measureViewportBox()
              , {scroll: a} = this.root;
            return a && (Ut(l.x, a.offset.x),
            Ut(l.y, a.offset.y)),
            l
        }
        removeElementScroll(o) {
            const l = le();
            Ge(l, o);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a]
                  , {scroll: c, options: d} = u;
                if (u !== this.root && c && d.layoutScroll) {
                    if (c.isRoot) {
                        Ge(l, o);
                        const {scroll: p} = this.root;
                        p && (Ut(l.x, -p.offset.x),
                        Ut(l.y, -p.offset.y))
                    }
                    Ut(l.x, c.offset.x),
                    Ut(l.y, c.offset.y)
                }
            }
            return l
        }
        applyTransform(o, l=!1) {
            const a = le();
            Ge(a, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l && c.options.layoutScroll && c.scroll && c !== c.root && ir(a, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                Sn(c.latestValues) && ir(a, c.latestValues)
            }
            return Sn(this.latestValues) && ir(a, this.latestValues),
            a
        }
        removeTransform(o) {
            const l = le();
            Ge(l, o);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !Sn(u.latestValues))
                    continue;
                Yl(u.latestValues) && u.updateSnapshot();
                const c = le()
                  , d = u.measurePageBox();
                Ge(c, d),
                Gf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return Sn(this.latestValues) && Gf(l, this.latestValues),
            l
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ve.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const {layout: d, layoutId: p} = this.options;
            if (!(!this.layout || !(d || p))) {
                if (this.resolvedRelativeTargetAt = ve.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const g = this.getClosestProjectingParent();
                    g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = le(),
                    this.relativeTargetOrigin = le(),
                    Jr(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox),
                    Ge(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = le(),
                    this.targetWithTransforms = le()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    fE(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ge(this.target, this.layout.layoutBox),
                    hv(this.target, this.targetDelta)) : Ge(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const g = this.getClosestProjectingParent();
                        g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = le(),
                        this.relativeTargetOrigin = le(),
                        Jr(this.relativeTargetOrigin, this.target, g.target),
                        Ge(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Tn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Yl(this.parent.latestValues) || pv(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const l = this.getLead()
              , a = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === ve.timestamp && (u = !1),
            u)
                return;
            const {layout: c, layoutId: d} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || d))
                return;
            Ge(this.layoutCorrected, this.layout.layoutBox);
            const p = this.treeScale.x
              , g = this.treeScale.y;
            SE(this.layoutCorrected, this.treeScale, this.path, a),
            l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox,
            l.targetWithTransforms = le());
            const {target: x} = l;
            if (!x) {
                this.projectionTransform && (this.projectionDelta = rr(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = rr(),
            this.projectionDeltaWithTransform = rr());
            const v = this.projectionTransform;
            Zr(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
            this.projectionTransform = Xf(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== v || this.treeScale.x !== p || this.treeScale.y !== g) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", x)),
            Tn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(o, l=!1) {
            const a = this.snapshot
              , u = a ? a.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = rr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !l;
            const p = le()
              , g = a ? a.source : void 0
              , x = this.layout ? this.layout.source : void 0
              , v = g !== x
              , E = this.getStack()
              , m = !E || E.members.length <= 1
              , f = !!(v && !m && this.options.crossfade === !0 && !this.path.some(uC));
            this.animationProgress = 0;
            let h;
            this.mixTargetDelta = w => {
                const S = w / 1e3;
                ep(d.x, o.x, S),
                ep(d.y, o.y, S),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Jr(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                lC(this.relativeTarget, this.relativeTargetOrigin, p, S),
                h && BE(this.relativeTarget, h) && (this.isProjectionDirty = !1),
                h || (h = le()),
                Ge(h, this.relativeTarget)),
                v && (this.animationValues = c,
                IE(c, u, this.latestValues, S, f, m)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = S
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (It(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = ne.update( () => {
                _s.hasAnimatedSinceResize = !0,
                this.currentAnimation = QE(0, qf, {
                    ...o,
                    onUpdate: l => {
                        this.mixTargetDelta(l),
                        o.onUpdate && o.onUpdate(l)
                    }
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(qf),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: l, target: a, layout: u, latestValues: c} = o;
            if (!(!l || !a || !u)) {
                if (this !== o && this.layout && u && Ev(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || le();
                    const d = He(this.layout.layoutBox.x);
                    a.x.min = o.target.x.min,
                    a.x.max = a.x.min + d;
                    const p = He(this.layout.layoutBox.y);
                    a.y.min = o.target.y.min,
                    a.y.max = a.y.min + p
                }
                Ge(l, a),
                ir(l, c),
                Zr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
            }
        }
        registerSharedNode(o, l) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new $E),
            this.sharedNodes.get(o).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {layoutId: l} = this.options;
            return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {layoutId: l} = this.options;
            return l ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: l, preserveFollowOpacity: a}={}) {
            const u = this.getStack();
            u && u.promote(this, a),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let l = !1;
            const {latestValues: a} = o;
            if ((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0),
            !l)
                return;
            const u = {};
            for (let c = 0; c < Kf.length; c++) {
                const d = "rotate" + Kf[c];
                a[d] && (u[d] = a[d],
                o.setStaticValue(d, 0))
            }
            o.render();
            for (const c in u)
                o.setStaticValue(c, u[c]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var l, a;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return XE;
            const u = {
                visibility: ""
            }
              , c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = Ls(o == null ? void 0 : o.pointerEvents) || "",
                u.transform = c ? c(this.latestValues, "") : "none",
                u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const v = {};
                return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                v.pointerEvents = Ls(o == null ? void 0 : o.pointerEvents) || ""),
                this.hasProjected && !Sn(this.latestValues) && (v.transform = c ? c({}, "") : "none",
                this.hasProjected = !1),
                v
            }
            const p = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(),
            u.transform = Xf(this.projectionDeltaWithTransform, this.treeScale, p),
            c && (u.transform = c(p, u.transform));
            const {x: g, y: x} = this.projectionDelta;
            u.transformOrigin = `${g.origin * 100}% ${x.origin * 100}% 0`,
            d.animationValues ? u.opacity = d === this ? (a = (l = p.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : u.opacity = d === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
            for (const v in ro) {
                if (p[v] === void 0)
                    continue;
                const {correct: E, applyTo: m} = ro[v]
                  , f = u.transform === "none" ? p[v] : E(p[v], d);
                if (m) {
                    const h = m.length;
                    for (let w = 0; w < h; w++)
                        u[m[w]] = f
                } else
                    u[v] = f
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? Ls(o == null ? void 0 : o.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var l;
                return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
            this.root.nodes.forEach(Zf),
            this.root.sharedNodes.clear()
        }
    }
}
function qE(e) {
    e.updateLayout()
}
function ZE(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , o = n.source !== e.layout.source;
        s === "size" ? Ye(d => {
            const p = o ? n.measuredBox[d] : n.layoutBox[d]
              , g = He(p);
            p.min = r[d].min,
            p.max = p.min + g
        }
        ) : Ev(s, n.layoutBox, r) && Ye(d => {
            const p = o ? n.measuredBox[d] : n.layoutBox[d]
              , g = He(r[d]);
            p.max = p.min + g,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[d].max = e.relativeTarget[d].min + g)
        }
        );
        const l = rr();
        Zr(l, r, n.layoutBox);
        const a = rr();
        o ? Zr(a, e.applyTransform(i, !0), n.measuredBox) : Zr(a, r, n.layoutBox);
        const u = !wv(l);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: p, layout: g} = d;
                if (p && g) {
                    const x = le();
                    Jr(x, n.layoutBox, p.layoutBox);
                    const v = le();
                    Jr(v, r, g.layoutBox),
                    Sv(x, v) || (c = !0),
                    d.options.layoutRoot && (e.relativeTarget = v,
                    e.relativeTargetOrigin = x,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function JE(e) {
    Tn.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function eC(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function tC(e) {
    e.clearSnapshot()
}
function Zf(e) {
    e.clearMeasurements()
}
function nC(e) {
    e.isLayoutDirty = !1
}
function rC(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Jf(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function iC(e) {
    e.resolveTargetDelta()
}
function sC(e) {
    e.calcProjection()
}
function oC(e) {
    e.resetRotation()
}
function aC(e) {
    e.removeLeadSnapshot()
}
function ep(e, t, n) {
    e.translate = te(t.translate, 0, n),
    e.scale = te(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function tp(e, t, n, r) {
    e.min = te(t.min, n.min, r),
    e.max = te(t.max, n.max, r)
}
function lC(e, t, n, r) {
    tp(e.x, t.x, n.x, r),
    tp(e.y, t.y, n.y, r)
}
function uC(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const cC = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , np = e => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e)
  , rp = np("applewebkit/") && !np("chrome/") ? Math.round : ce;
function ip(e) {
    e.min = rp(e.min),
    e.max = rp(e.max)
}
function dC(e) {
    ip(e.x),
    ip(e.y)
}
function Ev(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Wl(Qf(t), Qf(n), .2)
}
const fC = Tv({
    attachResizeListener: (e, t) => bt(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Ia = {
    current: void 0
}
  , Cv = Tv({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Ia.current) {
            const e = new fC({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Ia.current = e
        }
        return Ia.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , pC = {
    pan: {
        Feature: ME
    },
    drag: {
        Feature: LE,
        ProjectionNode: Cv,
        MeasureLayout: vv
    }
}
  , hC = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function mC(e) {
    const t = hC.exec(e);
    if (!t)
        return [, ];
    const [,n,r] = t;
    return [n, r]
}
function Xl(e, t, n=1) {
    const [r,i] = mC(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return ov(o) ? parseFloat(o) : o
    } else
        return Rl(i) ? Xl(i, t, n + 1) : i
}
function gC(e, {...t}, n) {
    const r = e.current;
    if (!(r instanceof Element))
        return {
            target: t,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
    e.values.forEach(i => {
        const s = i.get();
        if (!Rl(s))
            return;
        const o = Xl(s, r);
        o && i.set(o)
    }
    );
    for (const i in t) {
        const s = t[i];
        if (!Rl(s))
            continue;
        const o = Xl(s, r);
        o && (t[i] = o,
        n || (n = {}),
        n[i] === void 0 && (n[i] = s))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const vC = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , Pv = e => vC.has(e)
  , yC = e => Object.keys(e).some(Pv)
  , sp = e => e === Fn || e === B
  , op = (e, t) => parseFloat(e.split(", ")[t])
  , ap = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/);
    if (i)
        return op(i[1], t);
    {
        const s = r.match(/^matrix\((.+)\)$/);
        return s ? op(s[1], e) : 0
    }
}
  , xC = new Set(["x", "y", "z"])
  , wC = Ii.filter(e => !xC.has(e));
function SC(e) {
    const t = [];
    return wC.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t.length && e.render(),
    t
}
const wr = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: ap(4, 13),
    y: ap(5, 14)
};
wr.translateX = wr.x;
wr.translateY = wr.y;
const TC = (e, t, n) => {
    const r = t.measureViewportBox()
      , i = t.current
      , s = getComputedStyle(i)
      , {display: o} = s
      , l = {};
    o === "none" && t.setStaticValue("display", e.display || "block"),
    n.forEach(u => {
        l[u] = wr[u](r, s)
    }
    ),
    t.render();
    const a = t.measureViewportBox();
    return n.forEach(u => {
        const c = t.getValue(u);
        c && c.jump(l[u]),
        e[u] = wr[u](a, s)
    }
    ),
    e
}
  , EC = (e, t, n={}, r={}) => {
    t = {
        ...t
    },
    r = {
        ...r
    };
    const i = Object.keys(t).filter(Pv);
    let s = []
      , o = !1;
    const l = [];
    if (i.forEach(a => {
        const u = e.getValue(a);
        if (!e.hasValue(a))
            return;
        let c = n[a]
          , d = Nr(c);
        const p = t[a];
        let g;
        if (so(p)) {
            const x = p.length
              , v = p[0] === null ? 1 : 0;
            c = p[v],
            d = Nr(c);
            for (let E = v; E < x && p[E] !== null; E++)
                g ? gc(Nr(p[E]) === g) : g = Nr(p[E])
        } else
            g = Nr(p);
        if (d !== g)
            if (sp(d) && sp(g)) {
                const x = u.get();
                typeof x == "string" && u.set(parseFloat(x)),
                typeof p == "string" ? t[a] = parseFloat(p) : Array.isArray(p) && g === B && (t[a] = p.map(parseFloat))
            } else
                d != null && d.transform && (g != null && g.transform) && (c === 0 || p === 0) ? c === 0 ? u.set(g.transform(c)) : t[a] = d.transform(p) : (o || (s = SC(e),
                o = !0),
                l.push(a),
                r[a] = r[a] !== void 0 ? r[a] : t[a],
                u.jump(p))
    }
    ),
    l.length) {
        const a = l.indexOf("height") >= 0 ? window.pageYOffset : null
          , u = TC(t, e, l);
        return s.length && s.forEach( ([c,d]) => {
            e.getValue(c).set(d)
        }
        ),
        e.render(),
        Fo && a !== null && window.scrollTo({
            top: a
        }),
        {
            target: u,
            transitionEnd: r
        }
    } else
        return {
            target: t,
            transitionEnd: r
        }
}
;
function CC(e, t, n, r) {
    return yC(t) ? EC(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const PC = (e, t, n, r) => {
    const i = gC(e, t, r);
    return t = i.target,
    r = i.transitionEnd,
    CC(e, t, n, r)
}
  , Kl = {
    current: null
}
  , kv = {
    current: !1
};
function kC() {
    if (kv.current = !0,
    !!Fo)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Kl.current = e.matches;
            e.addListener(t),
            t()
        } else
            Kl.current = !1
}
function bC(e, t, n) {
    const {willChange: r} = t;
    for (const i in t) {
        const s = t[i]
          , o = n[i];
        if (Ie(s))
            e.addValue(i, s),
            uo(r) && r.add(i);
        else if (Ie(o))
            e.addValue(i, xr(s, {
                owner: e
            })),
            uo(r) && r.remove(i);
        else if (o !== s)
            if (e.hasValue(i)) {
                const l = e.getValue(i);
                !l.hasAnimated && l.set(s)
            } else {
                const l = e.getStaticValue(i);
                e.addValue(i, xr(l !== void 0 ? l : s, {
                    owner: e
                }))
            }
    }
    for (const i in n)
        t[i] === void 0 && e.removeValue(i);
    return t
}
const lp = new WeakMap
  , bv = Object.keys(xi)
  , LC = bv.length
  , up = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , MC = lc.length;
class _C {
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: s}, o={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = () => ne.render(this.render, !1, !0);
        const {latestValues: l, renderState: a} = s;
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = a,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = o,
        this.isControllingVariants = $o(n),
        this.isVariantNode = dg(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: u, ...c} = this.scrapeMotionValuesFromProps(n, {});
        for (const d in c) {
            const p = c[d];
            l[d] !== void 0 && Ie(p) && (p.set(l[d], !1),
            uo(u) && u.add(d))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t,
        lp.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        kv.current || kC(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Kl.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        lp.delete(this.current),
        this.projection && this.projection.unmount(),
        It(this.notifyUpdate),
        It(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features)
            this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = zn.has(t)
          , i = n.on("change", o => {
            this.latestValues[t] = o,
            this.props.onUpdate && ne.update(this.notifyUpdate, !1, !0),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , s = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            i(),
            s()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({children: t, ...n}, r, i, s) {
        let o, l;
        for (let a = 0; a < LC; a++) {
            const u = bv[a]
              , {isEnabled: c, Feature: d, ProjectionNode: p, MeasureLayout: g} = xi[u];
            p && (o = p),
            c(n) && (!this.features[u] && d && (this.features[u] = new d(this)),
            g && (l = g))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && o) {
            this.projection = new o(this.latestValues,this.parent && this.parent.projection);
            const {layoutId: a, layout: u, drag: c, dragConstraints: d, layoutScroll: p, layoutRoot: g} = n;
            this.projection.setOptions({
                layoutId: a,
                layout: u,
                alwaysMeasureLayout: !!c || d && tr(d),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: s,
                layoutScroll: p,
                layoutRoot: g
            })
        }
        return l
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(),
            n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : le()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n=!0) {
        return this.makeTargetAnimatableFromInstance(t, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < up.length; r++) {
            const i = up[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = bC(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t=!1) {
        if (t)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
            r
        }
        const n = {};
        for (let r = 0; r < MC; r++) {
            const i = lc[r]
              , s = this.props[i];
            (yi(s) || s === !1) && (n[i] = s)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t),
        this.bindToMotionValue(t, n)),
        this.values.set(t, n),
        this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = xr(n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t) {
        var n;
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props
          , i = typeof r == "string" || typeof r == "object" ? (n = mc(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && i !== void 0)
            return i;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !Ie(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Pc),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Lv extends _C {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    makeTargetAnimatableFromInstance({transition: t, transitionEnd: n, ...r}, i) {
        const s = YT(r, t || {}, this);
        if (i) {
            WT(this, r, s);
            const o = PC(this, r, s, n);
            n = o.transitionEnd,
            r = o.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}
function jC(e) {
    return window.getComputedStyle(e)
}
class OC extends Lv {
    constructor() {
        super(...arguments),
        this.type = "html"
    }
    readValueFromInstance(t, n) {
        if (zn.has(n)) {
            const r = wc(n);
            return r && r.default || 0
        } else {
            const r = jC(t)
              , i = (gg(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return mv(t, n)
    }
    build(t, n, r, i) {
        cc(t, n, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return hc(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Ie(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(t, n, r, i) {
        Tg(t, n, r, i)
    }
}
class AC extends Lv {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (zn.has(n)) {
            const r = wc(n);
            return r && r.default || 0
        }
        return n = Eg.has(n) ? n : sc(n),
        t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return le()
    }
    scrapeMotionValuesFromProps(t, n) {
        return Pg(t, n)
    }
    build(t, n, r, i) {
        fc(t, n, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        Cg(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = pc(t.tagName),
        super.mount(t)
    }
}
const NC = (e, t) => uc(e) ? new AC(t,{
    enableHardwareAcceleration: !1
}) : new OC(t,{
    enableHardwareAcceleration: !0
})
  , IC = {
    layout: {
        ProjectionNode: Cv,
        MeasureLayout: vv
    }
}
  , DC = {
    ...lE,
    ...LS,
    ...pC,
    ...IC
}
  , ye = zw( (e, t) => mS(e, t, DC, NC));
function VC() {
    return y.jsxs("section", {
        id: "главная",
        className: "container  grid items-center gap-5  xs:my-10 xs:grid-cols-1 xs:px-16 sm:grid-cols-2 md:my-28",
        children: [y.jsxs(ye.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: !0
            },
            transition: {
                duration: .5
            },
            variants: {
                visible: {
                    opacity: 1,
                    x: 0
                },
                hidden: {
                    opacity: 0,
                    x: -50
                }
            },
            children: [y.jsxs("h1", {
                className: "font-geosib leading-tight xs:text-4xl md:text-5xl",
                children: ["Профессиональное ", y.jsx("br", {}), " IT-Администрирование для Вашего Бизнеса"]
            }), y.jsx("p", {
                className: "mt-6 text-gray-300 xs:text-sm sm:text-lg",
                children: "Комплексные услуги по администрированию серверов, баз данных, сетей и программных продуктов."
            }), y.jsxs("div", {
                className: "mt-8 flex items-center gap-3 xs:flex-col xs:items-start md:flex-row",
                children: [y.jsx("a", {
                    href: "tel:+77711070225",
                    className: "ease cursor-pointer rounded-sm border bg-yellow-500 px-5 py-3 text-[#513E00]  transition-all duration-300 hover:bg-yellow-400 xs:text-[15px] md:text-[16px]",
                    children: "Позвонить"
                }), y.jsxs("a", {
                    href: "https://wa.me/77711070225",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "ease md:text-[16px]xs:text-[15px] flex cursor-pointer items-center gap-3 rounded-sm border border-green-500 px-5 py-3 text-green-500 transition-all duration-300 hover:bg-green-200 xs:text-[15px] md:text-[16px] ",
                    children: [y.jsx(Ro, {}), " Написать в WhatsApp"]
                })]
            })]
        }), y.jsx(ye.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: !0
            },
            transition: {
                duration: .5
            },
            variants: {
                visible: {
                    opacity: 1,
                    x: 0
                },
                hidden: {
                    opacity: 0,
                    x: 50
                }
            },
            children: y.jsx("img", {
                src: "./hero.png",
                alt: "Компьютер с 1С"
            })
        })]
    })
}
function cp(e) {
    return e !== null && typeof e == "object" && "constructor"in e && e.constructor === Object
}
function kc(e, t) {
    e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach(n => {
        typeof e[n] > "u" ? e[n] = t[n] : cp(t[n]) && cp(e[n]) && Object.keys(t[n]).length > 0 && kc(e[n], t[n])
    }
    )
}
const Mv = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function lt() {
    const e = typeof document < "u" ? document : {};
    return kc(e, Mv),
    e
}
const RC = {
    document: Mv,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(),
        null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};
function De() {
    const e = typeof window < "u" ? window : {};
    return kc(e, RC),
    e
}
function Bt(e) {
    return e === void 0 && (e = ""),
    e.trim().split(" ").filter(t => !!t.trim())
}
function zC(e) {
    const t = e;
    Object.keys(t).forEach(n => {
        try {
            t[n] = null
        } catch {}
        try {
            delete t[n]
        } catch {}
    }
    )
}
function fo(e, t) {
    return t === void 0 && (t = 0),
    setTimeout(e, t)
}
function po() {
    return Date.now()
}
function FC(e) {
    const t = De();
    let n;
    return t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
}
function BC(e, t) {
    t === void 0 && (t = "x");
    const n = De();
    let r, i, s;
    const o = FC(e);
    return n.WebKitCSSMatrix ? (i = o.transform || o.webkitTransform,
    i.split(",").length > 6 && (i = i.split(", ").map(l => l.replace(",", ".")).join(", ")),
    s = new n.WebKitCSSMatrix(i === "none" ? "" : i)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    r = s.toString().split(",")),
    t === "x" && (n.WebKitCSSMatrix ? i = s.m41 : r.length === 16 ? i = parseFloat(r[12]) : i = parseFloat(r[4])),
    t === "y" && (n.WebKitCSSMatrix ? i = s.m42 : r.length === 16 ? i = parseFloat(r[13]) : i = parseFloat(r[5])),
    i || 0
}
function ps(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}
function $C(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}
function ze() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , t = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < arguments.length; n += 1) {
        const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (r != null && !$C(r)) {
            const i = Object.keys(Object(r)).filter(s => t.indexOf(s) < 0);
            for (let s = 0, o = i.length; s < o; s += 1) {
                const l = i[s]
                  , a = Object.getOwnPropertyDescriptor(r, l);
                a !== void 0 && a.enumerable && (ps(e[l]) && ps(r[l]) ? r[l].__swiper__ ? e[l] = r[l] : ze(e[l], r[l]) : !ps(e[l]) && ps(r[l]) ? (e[l] = {},
                r[l].__swiper__ ? e[l] = r[l] : ze(e[l], r[l])) : e[l] = r[l])
            }
        }
    }
    return e
}
function hs(e, t, n) {
    e.style.setProperty(t, n)
}
function _v(e) {
    let {swiper: t, targetPosition: n, side: r} = e;
    const i = De()
      , s = -t.translate;
    let o = null, l;
    const a = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none",
    i.cancelAnimationFrame(t.cssModeFrameID);
    const u = n > s ? "next" : "prev"
      , c = (p, g) => u === "next" && p >= g || u === "prev" && p <= g
      , d = () => {
        l = new Date().getTime(),
        o === null && (o = l);
        const p = Math.max(Math.min((l - o) / a, 1), 0)
          , g = .5 - Math.cos(p * Math.PI) / 2;
        let x = s + g * (n - s);
        if (c(x, n) && (x = n),
        t.wrapperEl.scrollTo({
            [r]: x
        }),
        c(x, n)) {
            t.wrapperEl.style.overflow = "hidden",
            t.wrapperEl.style.scrollSnapType = "",
            setTimeout( () => {
                t.wrapperEl.style.overflow = "",
                t.wrapperEl.scrollTo({
                    [r]: x
                })
            }
            ),
            i.cancelAnimationFrame(t.cssModeFrameID);
            return
        }
        t.cssModeFrameID = i.requestAnimationFrame(d)
    }
    ;
    d()
}
function mt(e, t) {
    return t === void 0 && (t = ""),
    [...e.children].filter(n => n.matches(t))
}
function ho(e) {
    try {
        console.warn(e);
        return
    } catch {}
}
function Sr(e, t) {
    t === void 0 && (t = []);
    const n = document.createElement(e);
    return n.classList.add(...Array.isArray(t) ? t : Bt(t)),
    n
}
function HC(e) {
    const t = De()
      , n = lt()
      , r = e.getBoundingClientRect()
      , i = n.body
      , s = e.clientTop || i.clientTop || 0
      , o = e.clientLeft || i.clientLeft || 0
      , l = e === t ? t.scrollY : e.scrollTop
      , a = e === t ? t.scrollX : e.scrollLeft;
    return {
        top: r.top + l - s,
        left: r.left + a - o
    }
}
function UC(e, t) {
    const n = [];
    for (; e.previousElementSibling; ) {
        const r = e.previousElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r),
        e = r
    }
    return n
}
function WC(e, t) {
    const n = [];
    for (; e.nextElementSibling; ) {
        const r = e.nextElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r),
        e = r
    }
    return n
}
function Xt(e, t) {
    return De().getComputedStyle(e, null).getPropertyValue(t)
}
function Si(e) {
    let t = e, n;
    if (t) {
        for (n = 0; (t = t.previousSibling) !== null; )
            t.nodeType === 1 && (n += 1);
        return n
    }
}
function jv(e, t) {
    const n = [];
    let r = e.parentElement;
    for (; r; )
        t ? r.matches(t) && n.push(r) : n.push(r),
        r = r.parentElement;
    return n
}
function ql(e, t, n) {
    const r = De();
    return n ? e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth
}
let Da;
function GC() {
    const e = De()
      , t = lt();
    return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
        touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch)
    }
}
function Ov() {
    return Da || (Da = GC()),
    Da
}
let Va;
function YC(e) {
    let {userAgent: t} = e === void 0 ? {} : e;
    const n = Ov()
      , r = De()
      , i = r.navigator.platform
      , s = t || r.navigator.userAgent
      , o = {
        ios: !1,
        android: !1
    }
      , l = r.screen.width
      , a = r.screen.height
      , u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = s.match(/(iPad).*OS\s([\d_]+)/);
    const d = s.match(/(iPod)(.*OS\s([\d_]+))?/)
      , p = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , g = i === "Win32";
    let x = i === "MacIntel";
    const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !c && x && n.touch && v.indexOf(`${l}x${a}`) >= 0 && (c = s.match(/(Version)\/([\d.]+)/),
    c || (c = [0, 1, "13_0_0"]),
    x = !1),
    u && !g && (o.os = "android",
    o.android = !0),
    (c || p || d) && (o.os = "ios",
    o.ios = !0),
    o
}
function QC(e) {
    return e === void 0 && (e = {}),
    Va || (Va = YC(e)),
    Va
}
let Ra;
function XC() {
    const e = De();
    let t = !1;
    function n() {
        const r = e.navigator.userAgent.toLowerCase();
        return r.indexOf("safari") >= 0 && r.indexOf("chrome") < 0 && r.indexOf("android") < 0
    }
    if (n()) {
        const r = String(e.navigator.userAgent);
        if (r.includes("Version/")) {
            const [i,s] = r.split("Version/")[1].split(" ")[0].split(".").map(o => Number(o));
            t = i < 16 || i === 16 && s < 2
        }
    }
    return {
        isSafari: t || n(),
        needPerspectiveFix: t,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    }
}
function KC() {
    return Ra || (Ra = XC()),
    Ra
}
function qC(e) {
    let {swiper: t, on: n, emit: r} = e;
    const i = De();
    let s = null
      , o = null;
    const l = () => {
        !t || t.destroyed || !t.initialized || (r("beforeResize"),
        r("resize"))
    }
      , a = () => {
        !t || t.destroyed || !t.initialized || (s = new ResizeObserver(d => {
            o = i.requestAnimationFrame( () => {
                const {width: p, height: g} = t;
                let x = p
                  , v = g;
                d.forEach(E => {
                    let {contentBoxSize: m, contentRect: f, target: h} = E;
                    h && h !== t.el || (x = f ? f.width : (m[0] || m).inlineSize,
                    v = f ? f.height : (m[0] || m).blockSize)
                }
                ),
                (x !== p || v !== g) && l()
            }
            )
        }
        ),
        s.observe(t.el))
    }
      , u = () => {
        o && i.cancelAnimationFrame(o),
        s && s.unobserve && t.el && (s.unobserve(t.el),
        s = null)
    }
      , c = () => {
        !t || t.destroyed || !t.initialized || r("orientationchange")
    }
    ;
    n("init", () => {
        if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
            a();
            return
        }
        i.addEventListener("resize", l),
        i.addEventListener("orientationchange", c)
    }
    ),
    n("destroy", () => {
        u(),
        i.removeEventListener("resize", l),
        i.removeEventListener("orientationchange", c)
    }
    )
}
function ZC(e) {
    let {swiper: t, extendParams: n, on: r, emit: i} = e;
    const s = []
      , o = De()
      , l = function(c, d) {
        d === void 0 && (d = {});
        const p = o.MutationObserver || o.WebkitMutationObserver
          , g = new p(x => {
            if (t.__preventObserver__)
                return;
            if (x.length === 1) {
                i("observerUpdate", x[0]);
                return
            }
            const v = function() {
                i("observerUpdate", x[0])
            };
            o.requestAnimationFrame ? o.requestAnimationFrame(v) : o.setTimeout(v, 0)
        }
        );
        g.observe(c, {
            attributes: typeof d.attributes > "u" ? !0 : d.attributes,
            childList: typeof d.childList > "u" ? !0 : d.childList,
            characterData: typeof d.characterData > "u" ? !0 : d.characterData
        }),
        s.push(g)
    }
      , a = () => {
        if (t.params.observer) {
            if (t.params.observeParents) {
                const c = jv(t.hostEl);
                for (let d = 0; d < c.length; d += 1)
                    l(c[d])
            }
            l(t.hostEl, {
                childList: t.params.observeSlideChildren
            }),
            l(t.wrapperEl, {
                attributes: !1
            })
        }
    }
      , u = () => {
        s.forEach(c => {
            c.disconnect()
        }
        ),
        s.splice(0, s.length)
    }
    ;
    n({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    r("init", a),
    r("destroy", u)
}
var JC = {
    on(e, t, n) {
        const r = this;
        if (!r.eventsListeners || r.destroyed || typeof t != "function")
            return r;
        const i = n ? "unshift" : "push";
        return e.split(" ").forEach(s => {
            r.eventsListeners[s] || (r.eventsListeners[s] = []),
            r.eventsListeners[s][i](t)
        }
        ),
        r
    },
    once(e, t, n) {
        const r = this;
        if (!r.eventsListeners || r.destroyed || typeof t != "function")
            return r;
        function i() {
            r.off(e, i),
            i.__emitterProxy && delete i.__emitterProxy;
            for (var s = arguments.length, o = new Array(s), l = 0; l < s; l++)
                o[l] = arguments[l];
            t.apply(r, o)
        }
        return i.__emitterProxy = t,
        r.on(e, i, n)
    },
    onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed || typeof e != "function")
            return n;
        const r = t ? "unshift" : "push";
        return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e),
        n
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners)
            return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1),
        t
    },
    off(e, t) {
        const n = this;
        return !n.eventsListeners || n.destroyed || !n.eventsListeners || e.split(" ").forEach(r => {
            typeof t > "u" ? n.eventsListeners[r] = [] : n.eventsListeners[r] && n.eventsListeners[r].forEach( (i, s) => {
                (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[r].splice(s, 1)
            }
            )
        }
        ),
        n
    },
    emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsListeners)
            return e;
        let t, n, r;
        for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
            s[o] = arguments[o];
        return typeof s[0] == "string" || Array.isArray(s[0]) ? (t = s[0],
        n = s.slice(1, s.length),
        r = e) : (t = s[0].events,
        n = s[0].data,
        r = s[0].context || e),
        n.unshift(r),
        (Array.isArray(t) ? t : t.split(" ")).forEach(a => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(u => {
                u.apply(r, [a, ...n])
            }
            ),
            e.eventsListeners && e.eventsListeners[a] && e.eventsListeners[a].forEach(u => {
                u.apply(r, n)
            }
            )
        }
        ),
        e
    }
};
function eP() {
    const e = this;
    let t, n;
    const r = e.el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = r.clientWidth,
    typeof e.params.height < "u" && e.params.height !== null ? n = e.params.height : n = r.clientHeight,
    !(t === 0 && e.isHorizontal() || n === 0 && e.isVertical()) && (t = t - parseInt(Xt(r, "padding-left") || 0, 10) - parseInt(Xt(r, "padding-right") || 0, 10),
    n = n - parseInt(Xt(r, "padding-top") || 0, 10) - parseInt(Xt(r, "padding-bottom") || 0, 10),
    Number.isNaN(t) && (t = 0),
    Number.isNaN(n) && (n = 0),
    Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n
    }))
}
function tP() {
    const e = this;
    function t(b, I) {
        return parseFloat(b.getPropertyValue(e.getDirectionLabel(I)) || 0)
    }
    const n = e.params
      , {wrapperEl: r, slidesEl: i, size: s, rtlTranslate: o, wrongRTL: l} = e
      , a = e.virtual && n.virtual.enabled
      , u = a ? e.virtual.slides.length : e.slides.length
      , c = mt(i, `.${e.params.slideClass}, swiper-slide`)
      , d = a ? e.virtual.slides.length : c.length;
    let p = [];
    const g = []
      , x = [];
    let v = n.slidesOffsetBefore;
    typeof v == "function" && (v = n.slidesOffsetBefore.call(e));
    let E = n.slidesOffsetAfter;
    typeof E == "function" && (E = n.slidesOffsetAfter.call(e));
    const m = e.snapGrid.length
      , f = e.slidesGrid.length;
    let h = n.spaceBetween
      , w = -v
      , S = 0
      , C = 0;
    if (typeof s > "u")
        return;
    typeof h == "string" && h.indexOf("%") >= 0 ? h = parseFloat(h.replace("%", "")) / 100 * s : typeof h == "string" && (h = parseFloat(h)),
    e.virtualSize = -h,
    c.forEach(b => {
        o ? b.style.marginLeft = "" : b.style.marginRight = "",
        b.style.marginBottom = "",
        b.style.marginTop = ""
    }
    ),
    n.centeredSlides && n.cssMode && (hs(r, "--swiper-centered-offset-before", ""),
    hs(r, "--swiper-centered-offset-after", ""));
    const M = n.grid && n.grid.rows > 1 && e.grid;
    M ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
    let P;
    const L = n.slidesPerView === "auto" && n.breakpoints && Object.keys(n.breakpoints).filter(b => typeof n.breakpoints[b].slidesPerView < "u").length > 0;
    for (let b = 0; b < d; b += 1) {
        P = 0;
        let I;
        if (c[b] && (I = c[b]),
        M && e.grid.updateSlide(b, I, c),
        !(c[b] && Xt(I, "display") === "none")) {
            if (n.slidesPerView === "auto") {
                L && (c[b].style[e.getDirectionLabel("width")] = "");
                const O = getComputedStyle(I)
                  , _ = I.style.transform
                  , T = I.style.webkitTransform;
                if (_ && (I.style.transform = "none"),
                T && (I.style.webkitTransform = "none"),
                n.roundLengths)
                    P = e.isHorizontal() ? ql(I, "width", !0) : ql(I, "height", !0);
                else {
                    const k = t(O, "width")
                      , N = t(O, "padding-left")
                      , $ = t(O, "padding-right")
                      , j = t(O, "margin-left")
                      , A = t(O, "margin-right")
                      , R = O.getPropertyValue("box-sizing");
                    if (R && R === "border-box")
                        P = k + j + A;
                    else {
                        const {clientWidth: F, offsetWidth: W} = I;
                        P = k + N + $ + j + A + (W - F)
                    }
                }
                _ && (I.style.transform = _),
                T && (I.style.webkitTransform = T),
                n.roundLengths && (P = Math.floor(P))
            } else
                P = (s - (n.slidesPerView - 1) * h) / n.slidesPerView,
                n.roundLengths && (P = Math.floor(P)),
                c[b] && (c[b].style[e.getDirectionLabel("width")] = `${P}px`);
            c[b] && (c[b].swiperSlideSize = P),
            x.push(P),
            n.centeredSlides ? (w = w + P / 2 + S / 2 + h,
            S === 0 && b !== 0 && (w = w - s / 2 - h),
            b === 0 && (w = w - s / 2 - h),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            n.roundLengths && (w = Math.floor(w)),
            C % n.slidesPerGroup === 0 && p.push(w),
            g.push(w)) : (n.roundLengths && (w = Math.floor(w)),
            (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup === 0 && p.push(w),
            g.push(w),
            w = w + P + h),
            e.virtualSize += P + h,
            S = P,
            C += 1
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, s) + E,
    o && l && (n.effect === "slide" || n.effect === "coverflow") && (r.style.width = `${e.virtualSize + h}px`),
    n.setWrapperSize && (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + h}px`),
    M && e.grid.updateWrapperSize(P, p),
    !n.centeredSlides) {
        const b = [];
        for (let I = 0; I < p.length; I += 1) {
            let O = p[I];
            n.roundLengths && (O = Math.floor(O)),
            p[I] <= e.virtualSize - s && b.push(O)
        }
        p = b,
        Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - s)
    }
    if (a && n.loop) {
        const b = x[0] + h;
        if (n.slidesPerGroup > 1) {
            const I = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup)
              , O = b * n.slidesPerGroup;
            for (let _ = 0; _ < I; _ += 1)
                p.push(p[p.length - 1] + O)
        }
        for (let I = 0; I < e.virtual.slidesBefore + e.virtual.slidesAfter; I += 1)
            n.slidesPerGroup === 1 && p.push(p[p.length - 1] + b),
            g.push(g[g.length - 1] + b),
            e.virtualSize += b
    }
    if (p.length === 0 && (p = [0]),
    h !== 0) {
        const b = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
        c.filter( (I, O) => !n.cssMode || n.loop ? !0 : O !== c.length - 1).forEach(I => {
            I.style[b] = `${h}px`
        }
        )
    }
    if (n.centeredSlides && n.centeredSlidesBounds) {
        let b = 0;
        x.forEach(O => {
            b += O + (h || 0)
        }
        ),
        b -= h;
        const I = b - s;
        p = p.map(O => O <= 0 ? -v : O > I ? I + E : O)
    }
    if (n.centerInsufficientSlides) {
        let b = 0;
        if (x.forEach(I => {
            b += I + (h || 0)
        }
        ),
        b -= h,
        b < s) {
            const I = (s - b) / 2;
            p.forEach( (O, _) => {
                p[_] = O - I
            }
            ),
            g.forEach( (O, _) => {
                g[_] = O + I
            }
            )
        }
    }
    if (Object.assign(e, {
        slides: c,
        snapGrid: p,
        slidesGrid: g,
        slidesSizesGrid: x
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
        hs(r, "--swiper-centered-offset-before", `${-p[0]}px`),
        hs(r, "--swiper-centered-offset-after", `${e.size / 2 - x[x.length - 1] / 2}px`);
        const b = -e.snapGrid[0]
          , I = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(O => O + b),
        e.slidesGrid = e.slidesGrid.map(O => O + I)
    }
    if (d !== u && e.emit("slidesLengthChange"),
    p.length !== m && (e.params.watchOverflow && e.checkOverflow(),
    e.emit("snapGridLengthChange")),
    g.length !== f && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !a && !n.cssMode && (n.effect === "slide" || n.effect === "fade")) {
        const b = `${n.containerModifierClass}backface-hidden`
          , I = e.el.classList.contains(b);
        d <= n.maxBackfaceHiddenSlides ? I || e.el.classList.add(b) : I && e.el.classList.remove(b)
    }
}
function nP(e) {
    const t = this
      , n = []
      , r = t.virtual && t.params.virtual.enabled;
    let i = 0, s;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const o = l => r ? t.slides[t.getSlideIndexByData(l)] : t.slides[l];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach(l => {
                n.push(l)
            }
            );
        else
            for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                const l = t.activeIndex + s;
                if (l > t.slides.length && !r)
                    break;
                n.push(o(l))
            }
    else
        n.push(o(t.activeIndex));
    for (s = 0; s < n.length; s += 1)
        if (typeof n[s] < "u") {
            const l = n[s].offsetHeight;
            i = l > i ? l : i
        }
    (i || i === 0) && (t.wrapperEl.style.height = `${i}px`)
}
function rP() {
    const e = this
      , t = e.slides
      , n = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
    for (let r = 0; r < t.length; r += 1)
        t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment()
}
function iP(e) {
    e === void 0 && (e = this && this.translate || 0);
    const t = this
      , n = t.params
      , {slides: r, rtlTranslate: i, snapGrid: s} = t;
    if (r.length === 0)
        return;
    typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let o = -e;
    i && (o = e),
    r.forEach(a => {
        a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass)
    }
    ),
    t.visibleSlidesIndexes = [],
    t.visibleSlides = [];
    let l = n.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : typeof l == "string" && (l = parseFloat(l));
    for (let a = 0; a < r.length; a += 1) {
        const u = r[a];
        let c = u.swiperSlideOffset;
        n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
        const d = (o + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + l)
          , p = (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + l)
          , g = -(o - c)
          , x = g + t.slidesSizesGrid[a]
          , v = g >= 0 && g <= t.size - t.slidesSizesGrid[a];
        (g >= 0 && g < t.size - 1 || x > 1 && x <= t.size || g <= 0 && x >= t.size) && (t.visibleSlides.push(u),
        t.visibleSlidesIndexes.push(a),
        r[a].classList.add(n.slideVisibleClass)),
        v && r[a].classList.add(n.slideFullyVisibleClass),
        u.progress = i ? -d : d,
        u.originalProgress = i ? -p : p
    }
}
function sP(e) {
    const t = this;
    if (typeof e > "u") {
        const c = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * c || 0
    }
    const n = t.params
      , r = t.maxTranslate() - t.minTranslate();
    let {progress: i, isBeginning: s, isEnd: o, progressLoop: l} = t;
    const a = s
      , u = o;
    if (r === 0)
        i = 0,
        s = !0,
        o = !0;
    else {
        i = (e - t.minTranslate()) / r;
        const c = Math.abs(e - t.minTranslate()) < 1
          , d = Math.abs(e - t.maxTranslate()) < 1;
        s = c || i <= 0,
        o = d || i >= 1,
        c && (i = 0),
        d && (i = 1)
    }
    if (n.loop) {
        const c = t.getSlideIndexByData(0)
          , d = t.getSlideIndexByData(t.slides.length - 1)
          , p = t.slidesGrid[c]
          , g = t.slidesGrid[d]
          , x = t.slidesGrid[t.slidesGrid.length - 1]
          , v = Math.abs(e);
        v >= p ? l = (v - p) / x : l = (v + x - g) / x,
        l > 1 && (l -= 1)
    }
    Object.assign(t, {
        progress: i,
        progressLoop: l,
        isBeginning: s,
        isEnd: o
    }),
    (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e),
    s && !a && t.emit("reachBeginning toEdge"),
    o && !u && t.emit("reachEnd toEdge"),
    (a && !s || u && !o) && t.emit("fromEdge"),
    t.emit("progress", i)
}
function oP() {
    const e = this
      , {slides: t, params: n, slidesEl: r, activeIndex: i} = e
      , s = e.virtual && n.virtual.enabled
      , o = e.grid && n.grid && n.grid.rows > 1
      , l = d => mt(r, `.${n.slideClass}${d}, swiper-slide${d}`)[0];
    t.forEach(d => {
        d.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
    }
    );
    let a, u, c;
    if (s)
        if (n.loop) {
            let d = i - e.virtual.slidesBefore;
            d < 0 && (d = e.virtual.slides.length + d),
            d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
            a = l(`[data-swiper-slide-index="${d}"]`)
        } else
            a = l(`[data-swiper-slide-index="${i}"]`);
    else
        o ? (a = t.filter(d => d.column === i)[0],
        c = t.filter(d => d.column === i + 1)[0],
        u = t.filter(d => d.column === i - 1)[0]) : a = t[i];
    a && (a.classList.add(n.slideActiveClass),
    o ? (c && c.classList.add(n.slideNextClass),
    u && u.classList.add(n.slidePrevClass)) : (c = WC(a, `.${n.slideClass}, swiper-slide`)[0],
    n.loop && !c && (c = t[0]),
    c && c.classList.add(n.slideNextClass),
    u = UC(a, `.${n.slideClass}, swiper-slide`)[0],
    n.loop && !u === 0 && (u = t[t.length - 1]),
    u && u.classList.add(n.slidePrevClass))),
    e.emitSlidesClasses()
}
const js = (e, t) => {
    if (!e || e.destroyed || !e.params)
        return;
    const n = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      , r = t.closest(n());
    if (r) {
        let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
        !i && e.isElement && (r.shadowRoot ? i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame( () => {
            r.shadowRoot && (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),
            i && i.remove())
        }
        )),
        i && i.remove()
    }
}
  , za = (e, t) => {
    if (!e.slides[t])
        return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading")
}
  , Zl = e => {
    if (!e || e.destroyed || !e.params)
        return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0)
        return;
    t = Math.min(t, n);
    const r = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
      , i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
        const o = i
          , l = [o - t];
        l.push(...Array.from({
            length: t
        }).map( (a, u) => o + r + u)),
        e.slides.forEach( (a, u) => {
            l.includes(a.column) && za(e, u)
        }
        );
        return
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
        for (let o = i - t; o <= s + t; o += 1) {
            const l = (o % n + n) % n;
            (l < i || l > s) && za(e, l)
        }
    else
        for (let o = Math.max(i - t, 0); o <= Math.min(s + t, n - 1); o += 1)
            o !== i && (o > s || o < i) && za(e, o)
}
;
function aP(e) {
    const {slidesGrid: t, params: n} = e
      , r = e.rtlTranslate ? e.translate : -e.translate;
    let i;
    for (let s = 0; s < t.length; s += 1)
        typeof t[s + 1] < "u" ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2 ? i = s : r >= t[s] && r < t[s + 1] && (i = s + 1) : r >= t[s] && (i = s);
    return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0),
    i
}
function lP(e) {
    const t = this
      , n = t.rtlTranslate ? t.translate : -t.translate
      , {snapGrid: r, params: i, activeIndex: s, realIndex: o, snapIndex: l} = t;
    let a = e, u;
    const c = g => {
        let x = g - t.virtual.slidesBefore;
        return x < 0 && (x = t.virtual.slides.length + x),
        x >= t.virtual.slides.length && (x -= t.virtual.slides.length),
        x
    }
    ;
    if (typeof a > "u" && (a = aP(t)),
    r.indexOf(n) >= 0)
        u = r.indexOf(n);
    else {
        const g = Math.min(i.slidesPerGroupSkip, a);
        u = g + Math.floor((a - g) / i.slidesPerGroup)
    }
    if (u >= r.length && (u = r.length - 1),
    a === s && !t.params.loop) {
        u !== l && (t.snapIndex = u,
        t.emit("snapIndexChange"));
        return
    }
    if (a === s && t.params.loop && t.virtual && t.params.virtual.enabled) {
        t.realIndex = c(a);
        return
    }
    const d = t.grid && i.grid && i.grid.rows > 1;
    let p;
    if (t.virtual && i.virtual.enabled && i.loop)
        p = c(a);
    else if (d) {
        const g = t.slides.filter(v => v.column === a)[0];
        let x = parseInt(g.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(x) && (x = Math.max(t.slides.indexOf(g), 0)),
        p = Math.floor(x / i.grid.rows)
    } else if (t.slides[a]) {
        const g = t.slides[a].getAttribute("data-swiper-slide-index");
        g ? p = parseInt(g, 10) : p = a
    } else
        p = a;
    Object.assign(t, {
        previousSnapIndex: l,
        snapIndex: u,
        previousRealIndex: o,
        realIndex: p,
        previousIndex: s,
        activeIndex: a
    }),
    t.initialized && Zl(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && (o !== p && t.emit("realIndexChange"),
    t.emit("slideChange"))
}
function uP(e, t) {
    const n = this
      , r = n.params;
    let i = e.closest(`.${r.slideClass}, swiper-slide`);
    !i && n.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(l => {
        !i && l.matches && l.matches(`.${r.slideClass}, swiper-slide`) && (i = l)
    }
    );
    let s = !1, o;
    if (i) {
        for (let l = 0; l < n.slides.length; l += 1)
            if (n.slides[l] === i) {
                s = !0,
                o = l;
                break
            }
    }
    if (i && s)
        n.clickedSlide = i,
        n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : n.clickedIndex = o;
    else {
        n.clickedSlide = void 0,
        n.clickedIndex = void 0;
        return
    }
    r.slideToClickedSlide && n.clickedIndex !== void 0 && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
}
var cP = {
    updateSize: eP,
    updateSlides: tP,
    updateAutoHeight: nP,
    updateSlidesOffset: rP,
    updateSlidesProgress: iP,
    updateProgress: sP,
    updateSlidesClasses: oP,
    updateActiveIndex: lP,
    updateClickedSlide: uP
};
function dP(e) {
    e === void 0 && (e = this.isHorizontal() ? "x" : "y");
    const t = this
      , {params: n, rtlTranslate: r, translate: i, wrapperEl: s} = t;
    if (n.virtualTranslate)
        return r ? -i : i;
    if (n.cssMode)
        return i;
    let o = BC(s, e);
    return o += t.cssOverflowAdjustment(),
    r && (o = -o),
    o || 0
}
function fP(e, t) {
    const n = this
      , {rtlTranslate: r, params: i, wrapperEl: s, progress: o} = n;
    let l = 0
      , a = 0;
    const u = 0;
    n.isHorizontal() ? l = r ? -e : e : a = e,
    i.roundLengths && (l = Math.floor(l),
    a = Math.floor(a)),
    n.previousTranslate = n.translate,
    n.translate = n.isHorizontal() ? l : a,
    i.cssMode ? s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -a : i.virtualTranslate || (n.isHorizontal() ? l -= n.cssOverflowAdjustment() : a -= n.cssOverflowAdjustment(),
    s.style.transform = `translate3d(${l}px, ${a}px, ${u}px)`);
    let c;
    const d = n.maxTranslate() - n.minTranslate();
    d === 0 ? c = 0 : c = (e - n.minTranslate()) / d,
    c !== o && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t)
}
function pP() {
    return -this.snapGrid[0]
}
function hP() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function mP(e, t, n, r, i) {
    e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
    const s = this
      , {params: o, wrapperEl: l} = s;
    if (s.animating && o.preventInteractionOnTransition)
        return !1;
    const a = s.minTranslate()
      , u = s.maxTranslate();
    let c;
    if (r && e > a ? c = a : r && e < u ? c = u : c = e,
    s.updateProgress(c),
    o.cssMode) {
        const d = s.isHorizontal();
        if (t === 0)
            l[d ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!s.support.smoothScroll)
                return _v({
                    swiper: s,
                    targetPosition: -c,
                    side: d ? "left" : "top"
                }),
                !0;
            l.scrollTo({
                [d ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (s.setTransition(0),
    s.setTranslate(c),
    n && (s.emit("beforeTransitionStart", t, i),
    s.emit("transitionEnd"))) : (s.setTransition(t),
    s.setTranslate(c),
    n && (s.emit("beforeTransitionStart", t, i),
    s.emit("transitionStart")),
    s.animating || (s.animating = !0,
    s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(p) {
        !s || s.destroyed || p.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
        s.onTranslateToWrapperTransitionEnd = null,
        delete s.onTranslateToWrapperTransitionEnd,
        n && s.emit("transitionEnd"))
    }
    ),
    s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))),
    !0
}
var gP = {
    getTranslate: dP,
    setTranslate: fP,
    minTranslate: pP,
    maxTranslate: hP,
    translateTo: mP
};
function vP(e, t) {
    const n = this;
    n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`,
    n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""),
    n.emit("setTransition", e, t)
}
function Av(e) {
    let {swiper: t, runCallbacks: n, direction: r, step: i} = e;
    const {activeIndex: s, previousIndex: o} = t;
    let l = r;
    if (l || (s > o ? l = "next" : s < o ? l = "prev" : l = "reset"),
    t.emit(`transition${i}`),
    n && s !== o) {
        if (l === "reset") {
            t.emit(`slideResetTransition${i}`);
            return
        }
        t.emit(`slideChangeTransition${i}`),
        l === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
    }
}
function yP(e, t) {
    e === void 0 && (e = !0);
    const n = this
      , {params: r} = n;
    r.cssMode || (r.autoHeight && n.updateAutoHeight(),
    Av({
        swiper: n,
        runCallbacks: e,
        direction: t,
        step: "Start"
    }))
}
function xP(e, t) {
    e === void 0 && (e = !0);
    const n = this
      , {params: r} = n;
    n.animating = !1,
    !r.cssMode && (n.setTransition(0),
    Av({
        swiper: n,
        runCallbacks: e,
        direction: t,
        step: "End"
    }))
}
var wP = {
    setTransition: vP,
    transitionStart: yP,
    transitionEnd: xP
};
function SP(e, t, n, r, i) {
    e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
    const s = this;
    let o = e;
    o < 0 && (o = 0);
    const {params: l, snapGrid: a, slidesGrid: u, previousIndex: c, activeIndex: d, rtlTranslate: p, wrapperEl: g, enabled: x} = s;
    if (s.animating && l.preventInteractionOnTransition || !x && !r && !i)
        return !1;
    const v = Math.min(s.params.slidesPerGroupSkip, o);
    let E = v + Math.floor((o - v) / s.params.slidesPerGroup);
    E >= a.length && (E = a.length - 1);
    const m = -a[E];
    if (l.normalizeSlideIndex)
        for (let h = 0; h < u.length; h += 1) {
            const w = -Math.floor(m * 100)
              , S = Math.floor(u[h] * 100)
              , C = Math.floor(u[h + 1] * 100);
            typeof u[h + 1] < "u" ? w >= S && w < C - (C - S) / 2 ? o = h : w >= S && w < C && (o = h + 1) : w >= S && (o = h)
        }
    if (s.initialized && o !== d && (!s.allowSlideNext && (p ? m > s.translate && m > s.minTranslate() : m < s.translate && m < s.minTranslate()) || !s.allowSlidePrev && m > s.translate && m > s.maxTranslate() && (d || 0) !== o))
        return !1;
    o !== (c || 0) && n && s.emit("beforeSlideChangeStart"),
    s.updateProgress(m);
    let f;
    if (o > d ? f = "next" : o < d ? f = "prev" : f = "reset",
    p && -m === s.translate || !p && m === s.translate)
        return s.updateActiveIndex(o),
        l.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        l.effect !== "slide" && s.setTranslate(m),
        f !== "reset" && (s.transitionStart(n, f),
        s.transitionEnd(n, f)),
        !1;
    if (l.cssMode) {
        const h = s.isHorizontal()
          , w = p ? m : -m;
        if (t === 0) {
            const S = s.virtual && s.params.virtual.enabled;
            S && (s.wrapperEl.style.scrollSnapType = "none",
            s._immediateVirtual = !0),
            S && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0,
            requestAnimationFrame( () => {
                g[h ? "scrollLeft" : "scrollTop"] = w
            }
            )) : g[h ? "scrollLeft" : "scrollTop"] = w,
            S && requestAnimationFrame( () => {
                s.wrapperEl.style.scrollSnapType = "",
                s._immediateVirtual = !1
            }
            )
        } else {
            if (!s.support.smoothScroll)
                return _v({
                    swiper: s,
                    targetPosition: w,
                    side: h ? "left" : "top"
                }),
                !0;
            g.scrollTo({
                [h ? "left" : "top"]: w,
                behavior: "smooth"
            })
        }
        return !0
    }
    return s.setTransition(t),
    s.setTranslate(m),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, f),
    t === 0 ? s.transitionEnd(n, f) : s.animating || (s.animating = !0,
    s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(w) {
        !s || s.destroyed || w.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
        s.onSlideToWrapperTransitionEnd = null,
        delete s.onSlideToWrapperTransitionEnd,
        s.transitionEnd(n, f))
    }
    ),
    s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)),
    !0
}
function TP(e, t, n, r) {
    e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
    const i = this
      , s = i.grid && i.params.grid && i.params.grid.rows > 1;
    let o = e;
    if (i.params.loop)
        if (i.virtual && i.params.virtual.enabled)
            o = o + i.virtual.slidesBefore;
        else {
            let l;
            if (s) {
                const p = o * i.params.grid.rows;
                l = i.slides.filter(g => g.getAttribute("data-swiper-slide-index") * 1 === p)[0].column
            } else
                l = i.getSlideIndexByData(o);
            const a = s ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length
              , {centeredSlides: u} = i.params;
            let c = i.params.slidesPerView;
            c === "auto" ? c = i.slidesPerViewDynamic() : (c = Math.ceil(parseFloat(i.params.slidesPerView, 10)),
            u && c % 2 === 0 && (c = c + 1));
            let d = a - l < c;
            if (u && (d = d || l < Math.ceil(c / 2)),
            d) {
                const p = u ? l < i.activeIndex ? "prev" : "next" : l - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                i.loopFix({
                    direction: p,
                    slideTo: !0,
                    activeSlideIndex: p === "next" ? l + 1 : l - a + 1,
                    slideRealIndex: p === "next" ? i.realIndex : void 0
                })
            }
            if (s) {
                const p = o * i.params.grid.rows;
                o = i.slides.filter(g => g.getAttribute("data-swiper-slide-index") * 1 === p)[0].column
            } else
                o = i.getSlideIndexByData(o)
        }
    return requestAnimationFrame( () => {
        i.slideTo(o, t, n, r)
    }
    ),
    i
}
function EP(e, t, n) {
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0);
    const r = this
      , {enabled: i, params: s, animating: o} = r;
    if (!i)
        return r;
    let l = s.slidesPerGroup;
    s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
    const a = r.activeIndex < s.slidesPerGroupSkip ? 1 : l
      , u = r.virtual && s.virtual.enabled;
    if (s.loop) {
        if (o && !u && s.loopPreventsSliding)
            return !1;
        if (r.loopFix({
            direction: "next"
        }),
        r._clientLeft = r.wrapperEl.clientLeft,
        r.activeIndex === r.slides.length - 1 && s.cssMode)
            return requestAnimationFrame( () => {
                r.slideTo(r.activeIndex + a, e, t, n)
            }
            ),
            !0
    }
    return s.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + a, e, t, n)
}
function CP(e, t, n) {
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0);
    const r = this
      , {params: i, snapGrid: s, slidesGrid: o, rtlTranslate: l, enabled: a, animating: u} = r;
    if (!a)
        return r;
    const c = r.virtual && i.virtual.enabled;
    if (i.loop) {
        if (u && !c && i.loopPreventsSliding)
            return !1;
        r.loopFix({
            direction: "prev"
        }),
        r._clientLeft = r.wrapperEl.clientLeft
    }
    const d = l ? r.translate : -r.translate;
    function p(m) {
        return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m)
    }
    const g = p(d)
      , x = s.map(m => p(m));
    let v = s[x.indexOf(g) - 1];
    if (typeof v > "u" && i.cssMode) {
        let m;
        s.forEach( (f, h) => {
            g >= f && (m = h)
        }
        ),
        typeof m < "u" && (v = s[m > 0 ? m - 1 : m])
    }
    let E = 0;
    if (typeof v < "u" && (E = o.indexOf(v),
    E < 0 && (E = r.activeIndex - 1),
    i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (E = E - r.slidesPerViewDynamic("previous", !0) + 1,
    E = Math.max(E, 0))),
    i.rewind && r.isBeginning) {
        const m = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
        return r.slideTo(m, e, t, n)
    } else if (i.loop && r.activeIndex === 0 && i.cssMode)
        return requestAnimationFrame( () => {
            r.slideTo(E, e, t, n)
        }
        ),
        !0;
    return r.slideTo(E, e, t, n)
}
function PP(e, t, n) {
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0);
    const r = this;
    return r.slideTo(r.activeIndex, e, t, n)
}
function kP(e, t, n, r) {
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    r === void 0 && (r = .5);
    const i = this;
    let s = i.activeIndex;
    const o = Math.min(i.params.slidesPerGroupSkip, s)
      , l = o + Math.floor((s - o) / i.params.slidesPerGroup)
      , a = i.rtlTranslate ? i.translate : -i.translate;
    if (a >= i.snapGrid[l]) {
        const u = i.snapGrid[l]
          , c = i.snapGrid[l + 1];
        a - u > (c - u) * r && (s += i.params.slidesPerGroup)
    } else {
        const u = i.snapGrid[l - 1]
          , c = i.snapGrid[l];
        a - u <= (c - u) * r && (s -= i.params.slidesPerGroup)
    }
    return s = Math.max(s, 0),
    s = Math.min(s, i.slidesGrid.length - 1),
    i.slideTo(s, e, t, n)
}
function bP() {
    const e = this
      , {params: t, slidesEl: n} = e
      , r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let i = e.clickedIndex, s;
    const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
        if (e.animating)
            return;
        s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        t.centeredSlides ? i < e.loopedSlides - r / 2 || i > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(),
        i = e.getSlideIndex(mt(n, `${o}[data-swiper-slide-index="${s}"]`)[0]),
        fo( () => {
            e.slideTo(i)
        }
        )) : e.slideTo(i) : i > e.slides.length - r ? (e.loopFix(),
        i = e.getSlideIndex(mt(n, `${o}[data-swiper-slide-index="${s}"]`)[0]),
        fo( () => {
            e.slideTo(i)
        }
        )) : e.slideTo(i)
    } else
        e.slideTo(i)
}
var LP = {
    slideTo: SP,
    slideToLoop: TP,
    slideNext: EP,
    slidePrev: CP,
    slideReset: PP,
    slideToClosest: kP,
    slideToClickedSlide: bP
};
function MP(e) {
    const t = this
      , {params: n, slidesEl: r} = t;
    if (!n.loop || t.virtual && t.params.virtual.enabled)
        return;
    const i = () => {
        mt(r, `.${n.slideClass}, swiper-slide`).forEach( (d, p) => {
            d.setAttribute("data-swiper-slide-index", p)
        }
        )
    }
      , s = t.grid && n.grid && n.grid.rows > 1
      , o = n.slidesPerGroup * (s ? n.grid.rows : 1)
      , l = t.slides.length % o !== 0
      , a = s && t.slides.length % n.grid.rows !== 0
      , u = c => {
        for (let d = 0; d < c; d += 1) {
            const p = t.isElement ? Sr("swiper-slide", [n.slideBlankClass]) : Sr("div", [n.slideClass, n.slideBlankClass]);
            t.slidesEl.append(p)
        }
    }
    ;
    if (l) {
        if (n.loopAddBlankSlides) {
            const c = o - t.slides.length % o;
            u(c),
            t.recalcSlides(),
            t.updateSlides()
        } else
            ho("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        i()
    } else if (a) {
        if (n.loopAddBlankSlides) {
            const c = n.grid.rows - t.slides.length % n.grid.rows;
            u(c),
            t.recalcSlides(),
            t.updateSlides()
        } else
            ho("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        i()
    } else
        i();
    t.loopFix({
        slideRealIndex: e,
        direction: n.centeredSlides ? void 0 : "next"
    })
}
function _P(e) {
    let {slideRealIndex: t, slideTo: n=!0, direction: r, setTranslate: i, activeSlideIndex: s, byController: o, byMousewheel: l} = e === void 0 ? {} : e;
    const a = this;
    if (!a.params.loop)
        return;
    a.emit("beforeLoopFix");
    const {slides: u, allowSlidePrev: c, allowSlideNext: d, slidesEl: p, params: g} = a
      , {centeredSlides: x} = g;
    if (a.allowSlidePrev = !0,
    a.allowSlideNext = !0,
    a.virtual && g.virtual.enabled) {
        n && (!g.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : g.centeredSlides && a.snapIndex < g.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
        a.allowSlidePrev = c,
        a.allowSlideNext = d,
        a.emit("loopFix");
        return
    }
    let v = g.slidesPerView;
    v === "auto" ? v = a.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(g.slidesPerView, 10)),
    x && v % 2 === 0 && (v = v + 1));
    const E = g.slidesPerGroupAuto ? v : g.slidesPerGroup;
    let m = E;
    m % E !== 0 && (m += E - m % E),
    m += g.loopAdditionalSlides,
    a.loopedSlides = m;
    const f = a.grid && g.grid && g.grid.rows > 1;
    u.length < v + m ? ho("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : f && g.grid.fill === "row" && ho("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const h = []
      , w = [];
    let S = a.activeIndex;
    typeof s > "u" ? s = a.getSlideIndex(u.filter(_ => _.classList.contains(g.slideActiveClass))[0]) : S = s;
    const C = r === "next" || !r
      , M = r === "prev" || !r;
    let P = 0
      , L = 0;
    const b = f ? Math.ceil(u.length / g.grid.rows) : u.length
      , O = (f ? u[s].column : s) + (x && typeof i > "u" ? -v / 2 + .5 : 0);
    if (O < m) {
        P = Math.max(m - O, E);
        for (let _ = 0; _ < m - O; _ += 1) {
            const T = _ - Math.floor(_ / b) * b;
            if (f) {
                const k = b - T - 1;
                for (let N = u.length - 1; N >= 0; N -= 1)
                    u[N].column === k && h.push(N)
            } else
                h.push(b - T - 1)
        }
    } else if (O + v > b - m) {
        L = Math.max(O - (b - m * 2), E);
        for (let _ = 0; _ < L; _ += 1) {
            const T = _ - Math.floor(_ / b) * b;
            f ? u.forEach( (k, N) => {
                k.column === T && w.push(N)
            }
            ) : w.push(T)
        }
    }
    if (a.__preventObserver__ = !0,
    requestAnimationFrame( () => {
        a.__preventObserver__ = !1
    }
    ),
    M && h.forEach(_ => {
        u[_].swiperLoopMoveDOM = !0,
        p.prepend(u[_]),
        u[_].swiperLoopMoveDOM = !1
    }
    ),
    C && w.forEach(_ => {
        u[_].swiperLoopMoveDOM = !0,
        p.append(u[_]),
        u[_].swiperLoopMoveDOM = !1
    }
    ),
    a.recalcSlides(),
    g.slidesPerView === "auto" ? a.updateSlides() : f && (h.length > 0 && M || w.length > 0 && C) && a.slides.forEach( (_, T) => {
        a.grid.updateSlide(T, _, a.slides)
    }
    ),
    g.watchSlidesProgress && a.updateSlidesOffset(),
    n) {
        if (h.length > 0 && M) {
            if (typeof t > "u") {
                const _ = a.slidesGrid[S]
                  , k = a.slidesGrid[S + P] - _;
                l ? a.setTranslate(a.translate - k) : (a.slideTo(S + P, 0, !1, !0),
                i && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - k,
                a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - k))
            } else if (i) {
                const _ = f ? h.length / g.grid.rows : h.length;
                a.slideTo(a.activeIndex + _, 0, !1, !0),
                a.touchEventsData.currentTranslate = a.translate
            }
        } else if (w.length > 0 && C)
            if (typeof t > "u") {
                const _ = a.slidesGrid[S]
                  , k = a.slidesGrid[S - L] - _;
                l ? a.setTranslate(a.translate - k) : (a.slideTo(S - L, 0, !1, !0),
                i && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - k,
                a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - k))
            } else {
                const _ = f ? w.length / g.grid.rows : w.length;
                a.slideTo(a.activeIndex - _, 0, !1, !0)
            }
    }
    if (a.allowSlidePrev = c,
    a.allowSlideNext = d,
    a.controller && a.controller.control && !o) {
        const _ = {
            slideRealIndex: t,
            direction: r,
            setTranslate: i,
            activeSlideIndex: s,
            byController: !0
        };
        Array.isArray(a.controller.control) ? a.controller.control.forEach(T => {
            !T.destroyed && T.params.loop && T.loopFix({
                ..._,
                slideTo: T.params.slidesPerView === g.slidesPerView ? n : !1
            })
        }
        ) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
            ..._,
            slideTo: a.controller.control.params.slidesPerView === g.slidesPerView ? n : !1
        })
    }
    a.emit("loopFix")
}
function jP() {
    const e = this
      , {params: t, slidesEl: n} = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    e.recalcSlides();
    const r = [];
    e.slides.forEach(i => {
        const s = typeof i.swiperSlideIndex > "u" ? i.getAttribute("data-swiper-slide-index") * 1 : i.swiperSlideIndex;
        r[s] = i
    }
    ),
    e.slides.forEach(i => {
        i.removeAttribute("data-swiper-slide-index")
    }
    ),
    r.forEach(i => {
        n.append(i)
    }
    ),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0)
}
var OP = {
    loopCreate: MP,
    loopFix: _P,
    loopDestroy: jP
};
function AP(e) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
        return;
    const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
    n.style.cursor = "move",
    n.style.cursor = e ? "grabbing" : "grab",
    t.isElement && requestAnimationFrame( () => {
        t.__preventObserver__ = !1
    }
    )
}
function NP() {
    const e = this;
    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
    e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    e.isElement && requestAnimationFrame( () => {
        e.__preventObserver__ = !1
    }
    ))
}
var IP = {
    setGrabCursor: AP,
    unsetGrabCursor: NP
};
function DP(e, t) {
    t === void 0 && (t = this);
    function n(r) {
        if (!r || r === lt() || r === De())
            return null;
        r.assignedSlot && (r = r.assignedSlot);
        const i = r.closest(e);
        return !i && !r.getRootNode ? null : i || n(r.getRootNode().host)
    }
    return n(t)
}
function dp(e, t, n) {
    const r = De()
      , {params: i} = e
      , s = i.edgeSwipeDetection
      , o = i.edgeSwipeThreshold;
    return s && (n <= o || n >= r.innerWidth - o) ? s === "prevent" ? (t.preventDefault(),
    !0) : !1 : !0
}
function VP(e) {
    const t = this
      , n = lt();
    let r = e;
    r.originalEvent && (r = r.originalEvent);
    const i = t.touchEventsData;
    if (r.type === "pointerdown") {
        if (i.pointerId !== null && i.pointerId !== r.pointerId)
            return;
        i.pointerId = r.pointerId
    } else
        r.type === "touchstart" && r.targetTouches.length === 1 && (i.touchId = r.targetTouches[0].identifier);
    if (r.type === "touchstart") {
        dp(t, r, r.targetTouches[0].pageX);
        return
    }
    const {params: s, touches: o, enabled: l} = t;
    if (!l || !s.simulateTouch && r.pointerType === "mouse" || t.animating && s.preventInteractionOnTransition)
        return;
    !t.animating && s.cssMode && s.loop && t.loopFix();
    let a = r.target;
    if (s.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(a) || "which"in r && r.which === 3 || "button"in r && r.button > 0 || i.isTouched && i.isMoved)
        return;
    const u = !!s.noSwipingClass && s.noSwipingClass !== ""
      , c = r.composedPath ? r.composedPath() : r.path;
    u && r.target && r.target.shadowRoot && c && (a = c[0]);
    const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`
      , p = !!(r.target && r.target.shadowRoot);
    if (s.noSwiping && (p ? DP(d, a) : a.closest(d))) {
        t.allowClick = !0;
        return
    }
    if (s.swipeHandler && !a.closest(s.swipeHandler))
        return;
    o.currentX = r.pageX,
    o.currentY = r.pageY;
    const g = o.currentX
      , x = o.currentY;
    if (!dp(t, r, g))
        return;
    Object.assign(i, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    o.startX = g,
    o.startY = x,
    i.touchStartTime = po(),
    t.allowClick = !0,
    t.updateSize(),
    t.swipeDirection = void 0,
    s.threshold > 0 && (i.allowThresholdMove = !1);
    let v = !0;
    a.matches(i.focusableElements) && (v = !1,
    a.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement && n.activeElement.matches(i.focusableElements) && n.activeElement !== a && n.activeElement.blur();
    const E = v && t.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || E) && !a.isContentEditable && r.preventDefault(),
    s.freeMode && s.freeMode.enabled && t.freeMode && t.animating && !s.cssMode && t.freeMode.onTouchStart(),
    t.emit("touchStart", r)
}
function RP(e) {
    const t = lt()
      , n = this
      , r = n.touchEventsData
      , {params: i, touches: s, rtlTranslate: o, enabled: l} = n;
    if (!l || !i.simulateTouch && e.pointerType === "mouse")
        return;
    let a = e;
    if (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" && (r.touchId !== null || a.pointerId !== r.pointerId))
        return;
    let u;
    if (a.type === "touchmove") {
        if (u = [...a.changedTouches].filter(C => C.identifier === r.touchId)[0],
        !u || u.identifier !== r.touchId)
            return
    } else
        u = a;
    if (!r.isTouched) {
        r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", a);
        return
    }
    const c = u.pageX
      , d = u.pageY;
    if (a.preventedByNestedSwiper) {
        s.startX = c,
        s.startY = d;
        return
    }
    if (!n.allowTouchMove) {
        a.target.matches(r.focusableElements) || (n.allowClick = !1),
        r.isTouched && (Object.assign(s, {
            startX: c,
            startY: d,
            currentX: c,
            currentY: d
        }),
        r.touchStartTime = po());
        return
    }
    if (i.touchReleaseOnEdges && !i.loop) {
        if (n.isVertical()) {
            if (d < s.startY && n.translate <= n.maxTranslate() || d > s.startY && n.translate >= n.minTranslate()) {
                r.isTouched = !1,
                r.isMoved = !1;
                return
            }
        } else if (c < s.startX && n.translate <= n.maxTranslate() || c > s.startX && n.translate >= n.minTranslate())
            return
    }
    if (t.activeElement && a.target === t.activeElement && a.target.matches(r.focusableElements)) {
        r.isMoved = !0,
        n.allowClick = !1;
        return
    }
    r.allowTouchCallbacks && n.emit("touchMove", a),
    s.previousX = s.currentX,
    s.previousY = s.currentY,
    s.currentX = c,
    s.currentY = d;
    const p = s.currentX - s.startX
      , g = s.currentY - s.startY;
    if (n.params.threshold && Math.sqrt(p ** 2 + g ** 2) < n.params.threshold)
        return;
    if (typeof r.isScrolling > "u") {
        let C;
        n.isHorizontal() && s.currentY === s.startY || n.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : p * p + g * g >= 25 && (C = Math.atan2(Math.abs(g), Math.abs(p)) * 180 / Math.PI,
        r.isScrolling = n.isHorizontal() ? C > i.touchAngle : 90 - C > i.touchAngle)
    }
    if (r.isScrolling && n.emit("touchMoveOpposite", a),
    typeof r.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (r.startMoving = !0),
    r.isScrolling) {
        r.isTouched = !1;
        return
    }
    if (!r.startMoving)
        return;
    n.allowClick = !1,
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
    let x = n.isHorizontal() ? p : g
      , v = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
    i.oneWayMovement && (x = Math.abs(x) * (o ? 1 : -1),
    v = Math.abs(v) * (o ? 1 : -1)),
    s.diff = x,
    x *= i.touchRatio,
    o && (x = -x,
    v = -v);
    const E = n.touchesDirection;
    n.swipeDirection = x > 0 ? "prev" : "next",
    n.touchesDirection = v > 0 ? "prev" : "next";
    const m = n.params.loop && !i.cssMode
      , f = n.touchesDirection === "next" && n.allowSlideNext || n.touchesDirection === "prev" && n.allowSlidePrev;
    if (!r.isMoved) {
        if (m && f && n.loopFix({
            direction: n.swipeDirection
        }),
        r.startTranslate = n.getTranslate(),
        n.setTransition(0),
        n.animating) {
            const C = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0
            });
            n.wrapperEl.dispatchEvent(C)
        }
        r.allowMomentumBounce = !1,
        i.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0),
        n.emit("sliderFirstMove", a)
    }
    let h;
    if (new Date().getTime(),
    r.isMoved && r.allowThresholdMove && E !== n.touchesDirection && m && f && Math.abs(x) >= 1) {
        Object.assign(s, {
            startX: c,
            startY: d,
            currentX: c,
            currentY: d,
            startTranslate: r.currentTranslate
        }),
        r.loopSwapReset = !0,
        r.startTranslate = r.currentTranslate;
        return
    }
    n.emit("sliderMove", a),
    r.isMoved = !0,
    r.currentTranslate = x + r.startTranslate;
    let w = !0
      , S = i.resistanceRatio;
    if (i.touchReleaseOnEdges && (S = 0),
    x > 0 ? (m && f && !h && r.allowThresholdMove && r.currentTranslate > (i.centeredSlides ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1] : n.minTranslate()) && n.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    r.currentTranslate > n.minTranslate() && (w = !1,
    i.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + x) ** S))) : x < 0 && (m && f && !h && r.allowThresholdMove && r.currentTranslate < (i.centeredSlides ? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1] : n.maxTranslate()) && n.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: n.slides.length - (i.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
    }),
    r.currentTranslate < n.maxTranslate() && (w = !1,
    i.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - x) ** S))),
    w && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext && n.swipeDirection === "next" && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev && n.swipeDirection === "prev" && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev && !n.allowSlideNext && (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
        if (Math.abs(x) > i.threshold || r.allowThresholdMove) {
            if (!r.allowThresholdMove) {
                r.allowThresholdMove = !0,
                s.startX = s.currentX,
                s.startY = s.currentY,
                r.currentTranslate = r.startTranslate,
                s.diff = n.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
                return
            }
        } else {
            r.currentTranslate = r.startTranslate;
            return
        }
    !i.followFinger || i.cssMode || ((i.freeMode && i.freeMode.enabled && n.freeMode || i.watchSlidesProgress) && (n.updateActiveIndex(),
    n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate))
}
function zP(e) {
    const t = this
      , n = t.touchEventsData;
    let r = e;
    r.originalEvent && (r = r.originalEvent);
    let i;
    if (r.type === "touchend" || r.type === "touchcancel") {
        if (i = [...r.changedTouches].filter(S => S.identifier === n.touchId)[0],
        !i || i.identifier !== n.touchId)
            return
    } else {
        if (n.touchId !== null || r.pointerId !== n.pointerId)
            return;
        i = r
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type) && !(["pointercancel", "contextmenu"].includes(r.type) && (t.browser.isSafari || t.browser.isWebView)))
        return;
    n.pointerId = null,
    n.touchId = null;
    const {params: o, touches: l, rtlTranslate: a, slidesGrid: u, enabled: c} = t;
    if (!c || !o.simulateTouch && r.pointerType === "mouse")
        return;
    if (n.allowTouchCallbacks && t.emit("touchEnd", r),
    n.allowTouchCallbacks = !1,
    !n.isTouched) {
        n.isMoved && o.grabCursor && t.setGrabCursor(!1),
        n.isMoved = !1,
        n.startMoving = !1;
        return
    }
    o.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const d = po()
      , p = d - n.touchStartTime;
    if (t.allowClick) {
        const S = r.path || r.composedPath && r.composedPath();
        t.updateClickedSlide(S && S[0] || r.target, S),
        t.emit("tap click", r),
        p < 300 && d - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", r)
    }
    if (n.lastClickTime = po(),
    fo( () => {
        t.destroyed || (t.allowClick = !0)
    }
    ),
    !n.isTouched || !n.isMoved || !t.swipeDirection || l.diff === 0 && !n.loopSwapReset || n.currentTranslate === n.startTranslate && !n.loopSwapReset) {
        n.isTouched = !1,
        n.isMoved = !1,
        n.startMoving = !1;
        return
    }
    n.isTouched = !1,
    n.isMoved = !1,
    n.startMoving = !1;
    let g;
    if (o.followFinger ? g = a ? t.translate : -t.translate : g = -n.currentTranslate,
    o.cssMode)
        return;
    if (o.freeMode && o.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: g
        });
        return
    }
    const x = g >= -t.maxTranslate() && !t.params.loop;
    let v = 0
      , E = t.slidesSizesGrid[0];
    for (let S = 0; S < u.length; S += S < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
        const C = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
        typeof u[S + C] < "u" ? (x || g >= u[S] && g < u[S + C]) && (v = S,
        E = u[S + C] - u[S]) : (x || g >= u[S]) && (v = S,
        E = u[u.length - 1] - u[u.length - 2])
    }
    let m = null
      , f = null;
    o.rewind && (t.isBeginning ? f = o.virtual && o.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (m = 0));
    const h = (g - u[v]) / E
      , w = v < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (p > o.longSwipesMs) {
        if (!o.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (h >= o.longSwipesRatio ? t.slideTo(o.rewind && t.isEnd ? m : v + w) : t.slideTo(v)),
        t.swipeDirection === "prev" && (h > 1 - o.longSwipesRatio ? t.slideTo(v + w) : f !== null && h < 0 && Math.abs(h) > o.longSwipesRatio ? t.slideTo(f) : t.slideTo(v))
    } else {
        if (!o.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl) ? r.target === t.navigation.nextEl ? t.slideTo(v + w) : t.slideTo(v) : (t.swipeDirection === "next" && t.slideTo(m !== null ? m : v + w),
        t.swipeDirection === "prev" && t.slideTo(f !== null ? f : v))
    }
}
function fp() {
    const e = this
      , {params: t, el: n} = e;
    if (n && n.offsetWidth === 0)
        return;
    t.breakpoints && e.setBreakpoint();
    const {allowSlideNext: r, allowSlidePrev: i, snapGrid: s} = e
      , o = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0,
    e.allowSlidePrev = !0,
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
    const l = o && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !l ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !o ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
    e.autoplay.resizeTimeout = setTimeout( () => {
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
    }
    , 500)),
    e.allowSlidePrev = i,
    e.allowSlideNext = r,
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
}
function FP(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
    t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
    e.stopImmediatePropagation())))
}
function BP() {
    const e = this
      , {wrapperEl: t, rtlTranslate: n, enabled: r} = e;
    if (!r)
        return;
    e.previousTranslate = e.translate,
    e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
    let i;
    const s = e.maxTranslate() - e.minTranslate();
    s === 0 ? i = 0 : i = (e.translate - e.minTranslate()) / s,
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1)
}
function $P(e) {
    const t = this;
    js(t, e.target),
    !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update()
}
function HP() {
    const e = this;
    e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0,
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
}
const Nv = (e, t) => {
    const n = lt()
      , {params: r, el: i, wrapperEl: s, device: o} = e
      , l = !!r.nested
      , a = t === "on" ? "addEventListener" : "removeEventListener"
      , u = t;
    n[a]("touchstart", e.onDocumentTouchStart, {
        passive: !1,
        capture: l
    }),
    i[a]("touchstart", e.onTouchStart, {
        passive: !1
    }),
    i[a]("pointerdown", e.onTouchStart, {
        passive: !1
    }),
    n[a]("touchmove", e.onTouchMove, {
        passive: !1,
        capture: l
    }),
    n[a]("pointermove", e.onTouchMove, {
        passive: !1,
        capture: l
    }),
    n[a]("touchend", e.onTouchEnd, {
        passive: !0
    }),
    n[a]("pointerup", e.onTouchEnd, {
        passive: !0
    }),
    n[a]("pointercancel", e.onTouchEnd, {
        passive: !0
    }),
    n[a]("touchcancel", e.onTouchEnd, {
        passive: !0
    }),
    n[a]("pointerout", e.onTouchEnd, {
        passive: !0
    }),
    n[a]("pointerleave", e.onTouchEnd, {
        passive: !0
    }),
    n[a]("contextmenu", e.onTouchEnd, {
        passive: !0
    }),
    (r.preventClicks || r.preventClicksPropagation) && i[a]("click", e.onClick, !0),
    r.cssMode && s[a]("scroll", e.onScroll),
    r.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", fp, !0) : e[u]("observerUpdate", fp, !0),
    i[a]("load", e.onLoad, {
        capture: !0
    })
}
;
function UP() {
    const e = this
      , {params: t} = e;
    e.onTouchStart = VP.bind(e),
    e.onTouchMove = RP.bind(e),
    e.onTouchEnd = zP.bind(e),
    e.onDocumentTouchStart = HP.bind(e),
    t.cssMode && (e.onScroll = BP.bind(e)),
    e.onClick = FP.bind(e),
    e.onLoad = $P.bind(e),
    Nv(e, "on")
}
function WP() {
    Nv(this, "off")
}
var GP = {
    attachEvents: UP,
    detachEvents: WP
};
const pp = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function YP() {
    const e = this
      , {realIndex: t, initialized: n, params: r, el: i} = e
      , s = r.breakpoints;
    if (!s || s && Object.keys(s).length === 0)
        return;
    const o = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
    if (!o || e.currentBreakpoint === o)
        return;
    const a = (o in s ? s[o] : void 0) || e.originalParams
      , u = pp(e, r)
      , c = pp(e, a)
      , d = r.enabled;
    u && !c ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`),
    e.emitContainerClasses()) : !u && c && (i.classList.add(`${r.containerModifierClass}grid`),
    (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && r.grid.fill === "column") && i.classList.add(`${r.containerModifierClass}grid-column`),
    e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach(m => {
        if (typeof a[m] > "u")
            return;
        const f = r[m] && r[m].enabled
          , h = a[m] && a[m].enabled;
        f && !h && e[m].disable(),
        !f && h && e[m].enable()
    }
    );
    const p = a.direction && a.direction !== r.direction
      , g = r.loop && (a.slidesPerView !== r.slidesPerView || p)
      , x = r.loop;
    p && n && e.changeDirection(),
    ze(e.params, a);
    const v = e.params.enabled
      , E = e.params.loop;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }),
    d && !v ? e.disable() : !d && v && e.enable(),
    e.currentBreakpoint = o,
    e.emit("_beforeBreakpoint", a),
    n && (g ? (e.loopDestroy(),
    e.loopCreate(t),
    e.updateSlides()) : !x && E ? (e.loopCreate(t),
    e.updateSlides()) : x && !E && e.loopDestroy()),
    e.emit("breakpoint", a)
}
function QP(e, t, n) {
    if (t === void 0 && (t = "window"),
    !e || t === "container" && !n)
        return;
    let r = !1;
    const i = De()
      , s = t === "window" ? i.innerHeight : n.clientHeight
      , o = Object.keys(e).map(l => {
        if (typeof l == "string" && l.indexOf("@") === 0) {
            const a = parseFloat(l.substr(1));
            return {
                value: s * a,
                point: l
            }
        }
        return {
            value: l,
            point: l
        }
    }
    );
    o.sort( (l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
    for (let l = 0; l < o.length; l += 1) {
        const {point: a, value: u} = o[l];
        t === "window" ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = a) : u <= n.clientWidth && (r = a)
    }
    return r || "max"
}
var XP = {
    setBreakpoint: YP,
    getBreakpoint: QP
};
function KP(e, t) {
    const n = [];
    return e.forEach(r => {
        typeof r == "object" ? Object.keys(r).forEach(i => {
            r[i] && n.push(t + i)
        }
        ) : typeof r == "string" && n.push(t + r)
    }
    ),
    n
}
function qP() {
    const e = this
      , {classNames: t, params: n, rtl: r, el: i, device: s} = e
      , o = KP(["initialized", n.direction, {
        "free-mode": e.params.freeMode && n.freeMode.enabled
    }, {
        autoheight: n.autoHeight
    }, {
        rtl: r
    }, {
        grid: n.grid && n.grid.rows > 1
    }, {
        "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column"
    }, {
        android: s.android
    }, {
        ios: s.ios
    }, {
        "css-mode": n.cssMode
    }, {
        centered: n.cssMode && n.centeredSlides
    }, {
        "watch-progress": n.watchSlidesProgress
    }], n.containerModifierClass);
    t.push(...o),
    i.classList.add(...t),
    e.emitContainerClasses()
}
function ZP() {
    const e = this
      , {el: t, classNames: n} = e;
    t.classList.remove(...n),
    e.emitContainerClasses()
}
var JP = {
    addClasses: qP,
    removeClasses: ZP
};
function ek() {
    const e = this
      , {isLocked: t, params: n} = e
      , {slidesOffsetBefore: r} = n;
    if (r) {
        const i = e.slides.length - 1
          , s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
        e.isLocked = e.size > s
    } else
        e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
var tk = {
    checkOverflow: ek
}
  , Jl = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function nk(e, t) {
    return function(r) {
        r === void 0 && (r = {});
        const i = Object.keys(r)[0]
          , s = r[i];
        if (typeof s != "object" || s === null) {
            ze(t, r);
            return
        }
        if (e[i] === !0 && (e[i] = {
            enabled: !0
        }),
        i === "navigation" && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0),
        ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0),
        !(i in e && "enabled"in s)) {
            ze(t, r);
            return
        }
        typeof e[i] == "object" && !("enabled"in e[i]) && (e[i].enabled = !0),
        e[i] || (e[i] = {
            enabled: !1
        }),
        ze(t, r)
    }
}
const Fa = {
    eventsEmitter: JC,
    update: cP,
    translate: gP,
    transition: wP,
    slide: LP,
    loop: OP,
    grabCursor: IP,
    events: GP,
    breakpoints: XP,
    checkOverflow: tk,
    classes: JP
}
  , Ba = {};
let bc = class wt {
    constructor() {
        let t, n;
        for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
            i[s] = arguments[s];
        i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === "Object" ? n = i[0] : [t,n] = i,
        n || (n = {}),
        n = ze({}, n),
        t && !n.el && (n.el = t);
        const o = lt();
        if (n.el && typeof n.el == "string" && o.querySelectorAll(n.el).length > 1) {
            const c = [];
            return o.querySelectorAll(n.el).forEach(d => {
                const p = ze({}, n, {
                    el: d
                });
                c.push(new wt(p))
            }
            ),
            c
        }
        const l = this;
        l.__swiper__ = !0,
        l.support = Ov(),
        l.device = QC({
            userAgent: n.userAgent
        }),
        l.browser = KC(),
        l.eventsListeners = {},
        l.eventsAnyListeners = [],
        l.modules = [...l.__modules__],
        n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
        const a = {};
        l.modules.forEach(c => {
            c({
                params: n,
                swiper: l,
                extendParams: nk(n, a),
                on: l.on.bind(l),
                once: l.once.bind(l),
                off: l.off.bind(l),
                emit: l.emit.bind(l)
            })
        }
        );
        const u = ze({}, Jl, a);
        return l.params = ze({}, u, Ba, n),
        l.originalParams = ze({}, l.params),
        l.passedParams = ze({}, n),
        l.params && l.params.on && Object.keys(l.params.on).forEach(c => {
            l.on(c, l.params.on[c])
        }
        ),
        l.params && l.params.onAny && l.onAny(l.params.onAny),
        Object.assign(l, {
            enabled: l.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return l.params.direction === "horizontal"
            },
            isVertical() {
                return l.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: l.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        l.emit("_swiper"),
        l.params.init && l.init(),
        l
    }
    getDirectionLabel(t) {
        return this.isHorizontal() ? t : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[t]
    }
    getSlideIndex(t) {
        const {slidesEl: n, params: r} = this
          , i = mt(n, `.${r.slideClass}, swiper-slide`)
          , s = Si(i[0]);
        return Si(t) - s
    }
    getSlideIndexByData(t) {
        return this.getSlideIndex(this.slides.filter(n => n.getAttribute("data-swiper-slide-index") * 1 === t)[0])
    }
    recalcSlides() {
        const t = this
          , {slidesEl: n, params: r} = t;
        t.slides = mt(n, `.${r.slideClass}, swiper-slide`)
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0,
        t.params.grabCursor && t.setGrabCursor(),
        t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1,
        t.params.grabCursor && t.unsetGrabCursor(),
        t.emit("disable"))
    }
    setProgress(t, n) {
        const r = this;
        t = Math.min(Math.max(t, 0), 1);
        const i = r.minTranslate()
          , o = (r.maxTranslate() - i) * t + i;
        r.translateTo(o, typeof n > "u" ? 0 : n),
        r.updateActiveIndex(),
        r.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const n = t.el.className.split(" ").filter(r => r.indexOf("swiper") === 0 || r.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", n.join(" "))
    }
    getSlideClasses(t) {
        const n = this;
        return n.destroyed ? "" : t.className.split(" ").filter(r => r.indexOf("swiper-slide") === 0 || r.indexOf(n.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const n = [];
        t.slides.forEach(r => {
            const i = t.getSlideClasses(r);
            n.push({
                slideEl: r,
                classNames: i
            }),
            t.emit("_slideClass", r, i)
        }
        ),
        t.emit("_slideClasses", n)
    }
    slidesPerViewDynamic(t, n) {
        t === void 0 && (t = "current"),
        n === void 0 && (n = !1);
        const r = this
          , {params: i, slides: s, slidesGrid: o, slidesSizesGrid: l, size: a, activeIndex: u} = r;
        let c = 1;
        if (typeof i.slidesPerView == "number")
            return i.slidesPerView;
        if (i.centeredSlides) {
            let d = s[u] ? s[u].swiperSlideSize : 0, p;
            for (let g = u + 1; g < s.length; g += 1)
                s[g] && !p && (d += s[g].swiperSlideSize,
                c += 1,
                d > a && (p = !0));
            for (let g = u - 1; g >= 0; g -= 1)
                s[g] && !p && (d += s[g].swiperSlideSize,
                c += 1,
                d > a && (p = !0))
        } else if (t === "current")
            for (let d = u + 1; d < s.length; d += 1)
                (n ? o[d] + l[d] - o[u] < a : o[d] - o[u] < a) && (c += 1);
        else
            for (let d = u - 1; d >= 0; d -= 1)
                o[u] - o[d] < a && (c += 1);
        return c
    }
    update() {
        const t = this;
        if (!t || t.destroyed)
            return;
        const {snapGrid: n, params: r} = t;
        r.breakpoints && t.setBreakpoint(),
        [...t.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
            o.complete && js(t, o)
        }
        ),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses();
        function i() {
            const o = t.rtlTranslate ? t.translate * -1 : t.translate
              , l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
            t.setTranslate(l),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        }
        let s;
        if (r.freeMode && r.freeMode.enabled && !r.cssMode)
            i(),
            r.autoHeight && t.updateAutoHeight();
        else {
            if ((r.slidesPerView === "auto" || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
                const o = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
                s = t.slideTo(o.length - 1, 0, !1, !0)
            } else
                s = t.slideTo(t.activeIndex, 0, !1, !0);
            s || i()
        }
        r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
        t.emit("update")
    }
    changeDirection(t, n) {
        n === void 0 && (n = !0);
        const r = this
          , i = r.params.direction;
        return t || (t = i === "horizontal" ? "vertical" : "horizontal"),
        t === i || t !== "horizontal" && t !== "vertical" || (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        r.params.direction = t,
        r.slides.forEach(s => {
            t === "vertical" ? s.style.width = "" : s.style.height = ""
        }
        ),
        r.emit("changeDirection"),
        n && r.update()),
        r
    }
    changeLanguageDirection(t) {
        const n = this;
        n.rtl && t === "rtl" || !n.rtl && t === "ltr" || (n.rtl = t === "rtl",
        n.rtlTranslate = n.params.direction === "horizontal" && n.rtl,
        n.rtl ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
        n.el.dir = "rtl") : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
        n.el.dir = "ltr"),
        n.update())
    }
    mount(t) {
        const n = this;
        if (n.mounted)
            return !0;
        let r = t || n.params.el;
        if (typeof r == "string" && (r = document.querySelector(r)),
        !r)
            return !1;
        r.swiper = n,
        r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === "SWIPER-CONTAINER" && (n.isElement = !0);
        const i = () => `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let o = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : mt(r, i())[0];
        return !o && n.params.createElements && (o = Sr("div", n.params.wrapperClass),
        r.append(o),
        mt(r, `.${n.params.slideClass}`).forEach(l => {
            o.append(l)
        }
        )),
        Object.assign(n, {
            el: r,
            wrapperEl: o,
            slidesEl: n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
            hostEl: n.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: r.dir.toLowerCase() === "rtl" || Xt(r, "direction") === "rtl",
            rtlTranslate: n.params.direction === "horizontal" && (r.dir.toLowerCase() === "rtl" || Xt(r, "direction") === "rtl"),
            wrongRTL: Xt(o, "display") === "-webkit-box"
        }),
        !0
    }
    init(t) {
        const n = this;
        if (n.initialized || n.mount(t) === !1)
            return n;
        n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.loop && n.virtual && n.params.virtual.enabled ? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, !1, !0) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
        n.params.loop && n.loopCreate(),
        n.attachEvents();
        const i = [...n.el.querySelectorAll('[loading="lazy"]')];
        return n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
        i.forEach(s => {
            s.complete ? js(n, s) : s.addEventListener("load", o => {
                js(n, o.target)
            }
            )
        }
        ),
        Zl(n),
        n.initialized = !0,
        Zl(n),
        n.emit("init"),
        n.emit("afterInit"),
        n
    }
    destroy(t, n) {
        t === void 0 && (t = !0),
        n === void 0 && (n = !0);
        const r = this
          , {params: i, el: s, wrapperEl: o, slides: l} = r;
        return typeof r.params > "u" || r.destroyed || (r.emit("beforeDestroy"),
        r.initialized = !1,
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n && (r.removeClasses(),
        s.removeAttribute("style"),
        o.removeAttribute("style"),
        l && l.length && l.forEach(a => {
            a.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass),
            a.removeAttribute("style"),
            a.removeAttribute("data-swiper-slide-index")
        }
        )),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach(a => {
            r.off(a)
        }
        ),
        t !== !1 && (r.el.swiper = null,
        zC(r)),
        r.destroyed = !0),
        null
    }
    static extendDefaults(t) {
        ze(Ba, t)
    }
    static get extendedDefaults() {
        return Ba
    }
    static get defaults() {
        return Jl
    }
    static installModule(t) {
        wt.prototype.__modules__ || (wt.prototype.__modules__ = []);
        const n = wt.prototype.__modules__;
        typeof t == "function" && n.indexOf(t) < 0 && n.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(n => wt.installModule(n)),
        wt) : (wt.installModule(t),
        wt)
    }
}
;
Object.keys(Fa).forEach(e => {
    Object.keys(Fa[e]).forEach(t => {
        bc.prototype[t] = Fa[e][t]
    }
    )
}
);
bc.use([qC, ZC]);
const Iv = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
function Dn(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__
}
function dr(e, t) {
    const n = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(r => n.indexOf(r) < 0).forEach(r => {
        typeof e[r] > "u" ? e[r] = t[r] : Dn(t[r]) && Dn(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : dr(e[r], t[r]) : e[r] = t[r]
    }
    )
}
function Dv(e) {
    return e === void 0 && (e = {}),
    e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"
}
function Vv(e) {
    return e === void 0 && (e = {}),
    e.pagination && typeof e.pagination.el > "u"
}
function Rv(e) {
    return e === void 0 && (e = {}),
    e.scrollbar && typeof e.scrollbar.el > "u"
}
function zv(e) {
    e === void 0 && (e = "");
    const t = e.split(" ").map(r => r.trim()).filter(r => !!r)
      , n = [];
    return t.forEach(r => {
        n.indexOf(r) < 0 && n.push(r)
    }
    ),
    n.join(" ")
}
function rk(e) {
    return e === void 0 && (e = ""),
    e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
}
function ik(e) {
    let {swiper: t, slides: n, passedParams: r, changedParams: i, nextEl: s, prevEl: o, scrollbarEl: l, paginationEl: a} = e;
    const u = i.filter(L => L !== "children" && L !== "direction" && L !== "wrapperClass")
      , {params: c, pagination: d, navigation: p, scrollbar: g, virtual: x, thumbs: v} = t;
    let E, m, f, h, w, S, C, M;
    i.includes("thumbs") && r.thumbs && r.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (E = !0),
    i.includes("controller") && r.controller && r.controller.control && c.controller && !c.controller.control && (m = !0),
    i.includes("pagination") && r.pagination && (r.pagination.el || a) && (c.pagination || c.pagination === !1) && d && !d.el && (f = !0),
    i.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || l) && (c.scrollbar || c.scrollbar === !1) && g && !g.el && (h = !0),
    i.includes("navigation") && r.navigation && (r.navigation.prevEl || o) && (r.navigation.nextEl || s) && (c.navigation || c.navigation === !1) && p && !p.prevEl && !p.nextEl && (w = !0);
    const P = L => {
        t[L] && (t[L].destroy(),
        L === "navigation" ? (t.isElement && (t[L].prevEl.remove(),
        t[L].nextEl.remove()),
        c[L].prevEl = void 0,
        c[L].nextEl = void 0,
        t[L].prevEl = void 0,
        t[L].nextEl = void 0) : (t.isElement && t[L].el.remove(),
        c[L].el = void 0,
        t[L].el = void 0))
    }
    ;
    i.includes("loop") && t.isElement && (c.loop && !r.loop ? S = !0 : !c.loop && r.loop ? C = !0 : M = !0),
    u.forEach(L => {
        if (Dn(c[L]) && Dn(r[L]))
            Object.assign(c[L], r[L]),
            (L === "navigation" || L === "pagination" || L === "scrollbar") && "enabled"in r[L] && !r[L].enabled && P(L);
        else {
            const b = r[L];
            (b === !0 || b === !1) && (L === "navigation" || L === "pagination" || L === "scrollbar") ? b === !1 && P(L) : c[L] = r[L]
        }
    }
    ),
    u.includes("controller") && !m && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control),
    i.includes("children") && n && x && c.virtual.enabled ? (x.slides = n,
    x.update(!0)) : i.includes("virtual") && x && c.virtual.enabled && (n && (x.slides = n),
    x.update(!0)),
    i.includes("children") && n && c.loop && (M = !0),
    E && v.init() && v.update(!0),
    m && (t.controller.control = c.controller.control),
    f && (t.isElement && (!a || typeof a == "string") && (a = document.createElement("div"),
    a.classList.add("swiper-pagination"),
    a.part.add("pagination"),
    t.el.appendChild(a)),
    a && (c.pagination.el = a),
    d.init(),
    d.render(),
    d.update()),
    h && (t.isElement && (!l || typeof l == "string") && (l = document.createElement("div"),
    l.classList.add("swiper-scrollbar"),
    l.part.add("scrollbar"),
    t.el.appendChild(l)),
    l && (c.scrollbar.el = l),
    g.init(),
    g.updateSize(),
    g.setTranslate()),
    w && (t.isElement && ((!s || typeof s == "string") && (s = document.createElement("div"),
    s.classList.add("swiper-button-next"),
    s.innerHTML = t.hostEl.constructor.nextButtonSvg,
    s.part.add("button-next"),
    t.el.appendChild(s)),
    (!o || typeof o == "string") && (o = document.createElement("div"),
    o.classList.add("swiper-button-prev"),
    o.innerHTML = t.hostEl.constructor.prevButtonSvg,
    o.part.add("button-prev"),
    t.el.appendChild(o))),
    s && (c.navigation.nextEl = s),
    o && (c.navigation.prevEl = o),
    p.init(),
    p.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (S || M) && t.loopDestroy(),
    (C || M) && t.loopCreate(),
    t.update()
}
function sk(e, t) {
    e === void 0 && (e = {}),
    t === void 0 && (t = !0);
    const n = {
        on: {}
    }
      , r = {}
      , i = {};
    dr(n, Jl),
    n._emitClasses = !0,
    n.init = !1;
    const s = {}
      , o = Iv.map(a => a.replace(/_/, ""))
      , l = Object.assign({}, e);
    return Object.keys(l).forEach(a => {
        typeof e[a] > "u" || (o.indexOf(a) >= 0 ? Dn(e[a]) ? (n[a] = {},
        i[a] = {},
        dr(n[a], e[a]),
        dr(i[a], e[a])) : (n[a] = e[a],
        i[a] = e[a]) : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function" ? t ? r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : s[a] = e[a])
    }
    ),
    ["navigation", "pagination", "scrollbar"].forEach(a => {
        n[a] === !0 && (n[a] = {}),
        n[a] === !1 && delete n[a]
    }
    ),
    {
        params: n,
        passedParams: i,
        rest: s,
        events: r
    }
}
function ok(e, t) {
    let {el: n, nextEl: r, prevEl: i, paginationEl: s, scrollbarEl: o, swiper: l} = e;
    Dv(t) && r && i && (l.params.navigation.nextEl = r,
    l.originalParams.navigation.nextEl = r,
    l.params.navigation.prevEl = i,
    l.originalParams.navigation.prevEl = i),
    Vv(t) && s && (l.params.pagination.el = s,
    l.originalParams.pagination.el = s),
    Rv(t) && o && (l.params.scrollbar.el = o,
    l.originalParams.scrollbar.el = o),
    l.init(n)
}
function ak(e, t, n, r, i) {
    const s = [];
    if (!t)
        return s;
    const o = a => {
        s.indexOf(a) < 0 && s.push(a)
    }
    ;
    if (n && r) {
        const a = r.map(i)
          , u = n.map(i);
        a.join("") !== u.join("") && o("children"),
        r.length !== n.length && o("children")
    }
    return Iv.filter(a => a[0] === "_").map(a => a.replace(/_/, "")).forEach(a => {
        if (a in e && a in t)
            if (Dn(e[a]) && Dn(t[a])) {
                const u = Object.keys(e[a])
                  , c = Object.keys(t[a]);
                u.length !== c.length ? o(a) : (u.forEach(d => {
                    e[a][d] !== t[a][d] && o(a)
                }
                ),
                c.forEach(d => {
                    e[a][d] !== t[a][d] && o(a)
                }
                ))
            } else
                e[a] !== t[a] && o(a)
    }
    ),
    s
}
const lk = e => {
    !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
}
;
function mo() {
    return mo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    mo.apply(this, arguments)
}
function Fv(e) {
    return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
}
function Bv(e) {
    const t = [];
    return se.Children.toArray(e).forEach(n => {
        Fv(n) ? t.push(n) : n.props && n.props.children && Bv(n.props.children).forEach(r => t.push(r))
    }
    ),
    t
}
function uk(e) {
    const t = []
      , n = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": []
    };
    return se.Children.toArray(e).forEach(r => {
        if (Fv(r))
            t.push(r);
        else if (r.props && r.props.slot && n[r.props.slot])
            n[r.props.slot].push(r);
        else if (r.props && r.props.children) {
            const i = Bv(r.props.children);
            i.length > 0 ? i.forEach(s => t.push(s)) : n["container-end"].push(r)
        } else
            n["container-end"].push(r)
    }
    ),
    {
        slides: t,
        slots: n
    }
}
function ck(e, t, n) {
    if (!n)
        return null;
    const r = c => {
        let d = c;
        return c < 0 ? d = t.length + c : d >= t.length && (d = d - t.length),
        d
    }
      , i = e.isHorizontal() ? {
        [e.rtlTranslate ? "right" : "left"]: `${n.offset}px`
    } : {
        top: `${n.offset}px`
    }
      , {from: s, to: o} = n
      , l = e.params.loop ? -t.length : 0
      , a = e.params.loop ? t.length * 2 : t.length
      , u = [];
    for (let c = l; c < a; c += 1)
        c >= s && c <= o && u.push(t[r(c)]);
    return u.map( (c, d) => se.cloneElement(c, {
        swiper: e,
        style: i,
        key: `slide-${d}`
    }))
}
function ei(e, t) {
    return typeof window > "u" ? V.useEffect(e, t) : V.useLayoutEffect(e, t)
}
const hp = V.createContext(null)
  , dk = V.createContext(null)
  , Lc = V.forwardRef(function(e, t) {
    let {className: n, tag: r="div", wrapperTag: i="div", children: s, onSwiper: o, ...l} = e === void 0 ? {} : e
      , a = !1;
    const [u,c] = V.useState("swiper")
      , [d,p] = V.useState(null)
      , [g,x] = V.useState(!1)
      , v = V.useRef(!1)
      , E = V.useRef(null)
      , m = V.useRef(null)
      , f = V.useRef(null)
      , h = V.useRef(null)
      , w = V.useRef(null)
      , S = V.useRef(null)
      , C = V.useRef(null)
      , M = V.useRef(null)
      , {params: P, passedParams: L, rest: b, events: I} = sk(l)
      , {slides: O, slots: _} = uk(s)
      , T = () => {
        x(!g)
    }
    ;
    Object.assign(P.on, {
        _containerClasses(A, R) {
            c(R)
        }
    });
    const k = () => {
        Object.assign(P.on, I),
        a = !0;
        const A = {
            ...P
        };
        if (delete A.wrapperClass,
        m.current = new bc(A),
        m.current.virtual && m.current.params.virtual.enabled) {
            m.current.virtual.slides = O;
            const R = {
                cache: !1,
                slides: O,
                renderExternal: p,
                renderExternalUpdate: !1
            };
            dr(m.current.params.virtual, R),
            dr(m.current.originalParams.virtual, R)
        }
    }
    ;
    E.current || k(),
    m.current && m.current.on("_beforeBreakpoint", T);
    const N = () => {
        a || !I || !m.current || Object.keys(I).forEach(A => {
            m.current.on(A, I[A])
        }
        )
    }
      , $ = () => {
        !I || !m.current || Object.keys(I).forEach(A => {
            m.current.off(A, I[A])
        }
        )
    }
    ;
    V.useEffect( () => () => {
        m.current && m.current.off("_beforeBreakpoint", T)
    }
    ),
    V.useEffect( () => {
        !v.current && m.current && (m.current.emitSlidesClasses(),
        v.current = !0)
    }
    ),
    ei( () => {
        if (t && (t.current = E.current),
        !!E.current)
            return m.current.destroyed && k(),
            ok({
                el: E.current,
                nextEl: w.current,
                prevEl: S.current,
                paginationEl: C.current,
                scrollbarEl: M.current,
                swiper: m.current
            }, P),
            o && o(m.current),
            () => {
                m.current && !m.current.destroyed && m.current.destroy(!0, !1)
            }
    }
    , []),
    ei( () => {
        N();
        const A = ak(L, f.current, O, h.current, R => R.key);
        return f.current = L,
        h.current = O,
        A.length && m.current && !m.current.destroyed && ik({
            swiper: m.current,
            slides: O,
            passedParams: L,
            changedParams: A,
            nextEl: w.current,
            prevEl: S.current,
            scrollbarEl: M.current,
            paginationEl: C.current
        }),
        () => {
            $()
        }
    }
    ),
    ei( () => {
        lk(m.current)
    }
    , [d]);
    function j() {
        return P.virtual ? ck(m.current, O, d) : O.map( (A, R) => se.cloneElement(A, {
            swiper: m.current,
            swiperSlideIndex: R
        }))
    }
    return se.createElement(r, mo({
        ref: E,
        className: zv(`${u}${n ? ` ${n}` : ""}`)
    }, b), se.createElement(dk.Provider, {
        value: m.current
    }, _["container-start"], se.createElement(i, {
        className: rk(P.wrapperClass)
    }, _["wrapper-start"], j(), _["wrapper-end"]), Dv(P) && se.createElement(se.Fragment, null, se.createElement("div", {
        ref: S,
        className: "swiper-button-prev"
    }), se.createElement("div", {
        ref: w,
        className: "swiper-button-next"
    })), Rv(P) && se.createElement("div", {
        ref: M,
        className: "swiper-scrollbar"
    }), Vv(P) && se.createElement("div", {
        ref: C,
        className: "swiper-pagination"
    }), _["container-end"]))
});
Lc.displayName = "Swiper";
const Et = V.forwardRef(function(e, t) {
    let {tag: n="div", children: r, className: i="", swiper: s, zoom: o, lazy: l, virtualIndex: a, swiperSlideIndex: u, ...c} = e === void 0 ? {} : e;
    const d = V.useRef(null)
      , [p,g] = V.useState("swiper-slide")
      , [x,v] = V.useState(!1);
    function E(w, S, C) {
        S === d.current && g(C)
    }
    ei( () => {
        if (typeof u < "u" && (d.current.swiperSlideIndex = u),
        t && (t.current = d.current),
        !(!d.current || !s)) {
            if (s.destroyed) {
                p !== "swiper-slide" && g("swiper-slide");
                return
            }
            return s.on("_slideClass", E),
            () => {
                s && s.off("_slideClass", E)
            }
        }
    }
    ),
    ei( () => {
        s && d.current && !s.destroyed && g(s.getSlideClasses(d.current))
    }
    , [s]);
    const m = {
        isActive: p.indexOf("swiper-slide-active") >= 0,
        isVisible: p.indexOf("swiper-slide-visible") >= 0,
        isPrev: p.indexOf("swiper-slide-prev") >= 0,
        isNext: p.indexOf("swiper-slide-next") >= 0
    }
      , f = () => typeof r == "function" ? r(m) : r
      , h = () => {
        v(!0)
    }
    ;
    return se.createElement(n, mo({
        ref: d,
        className: zv(`${p}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: h
    }, c), o && se.createElement(hp.Provider, {
        value: m
    }, se.createElement("div", {
        className: "swiper-zoom-container",
        "data-swiper-zoom": typeof o == "number" ? o : void 0
    }, f(), l && !x && se.createElement("div", {
        className: "swiper-lazy-preloader"
    }))), !o && se.createElement(hp.Provider, {
        value: m
    }, f(), l && !x && se.createElement("div", {
        className: "swiper-lazy-preloader"
    })))
});
Et.displayName = "SwiperSlide";
function Mc(e, t, n, r) {
    return e.params.createElements && Object.keys(r).forEach(i => {
        if (!n[i] && n.auto === !0) {
            let s = mt(e.el, `.${r[i]}`)[0];
            s || (s = Sr("div", r[i]),
            s.className = r[i],
            e.el.append(s)),
            n[i] = s,
            t[i] = s
        }
    }
    ),
    n
}
function $v(e) {
    let {swiper: t, extendParams: n, on: r, emit: i} = e;
    n({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }),
    t.navigation = {
        nextEl: null,
        prevEl: null
    };
    const s = v => (Array.isArray(v) ? v : [v]).filter(E => !!E);
    function o(v) {
        let E;
        return v && typeof v == "string" && t.isElement && (E = t.el.querySelector(v),
        E) ? E : (v && (typeof v == "string" && (E = [...document.querySelectorAll(v)]),
        t.params.uniqueNavElements && typeof v == "string" && E.length > 1 && t.el.querySelectorAll(v).length === 1 && (E = t.el.querySelector(v))),
        v && !E ? v : E)
    }
    function l(v, E) {
        const m = t.params.navigation;
        v = s(v),
        v.forEach(f => {
            f && (f.classList[E ? "add" : "remove"](...m.disabledClass.split(" ")),
            f.tagName === "BUTTON" && (f.disabled = E),
            t.params.watchOverflow && t.enabled && f.classList[t.isLocked ? "add" : "remove"](m.lockClass))
        }
        )
    }
    function a() {
        const {nextEl: v, prevEl: E} = t.navigation;
        if (t.params.loop) {
            l(E, !1),
            l(v, !1);
            return
        }
        l(E, t.isBeginning && !t.params.rewind),
        l(v, t.isEnd && !t.params.rewind)
    }
    function u(v) {
        v.preventDefault(),
        !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(),
        i("navigationPrev"))
    }
    function c(v) {
        v.preventDefault(),
        !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(),
        i("navigationNext"))
    }
    function d() {
        const v = t.params.navigation;
        if (t.params.navigation = Mc(t, t.originalParams.navigation, t.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }),
        !(v.nextEl || v.prevEl))
            return;
        let E = o(v.nextEl)
          , m = o(v.prevEl);
        Object.assign(t.navigation, {
            nextEl: E,
            prevEl: m
        }),
        E = s(E),
        m = s(m);
        const f = (h, w) => {
            h && h.addEventListener("click", w === "next" ? c : u),
            !t.enabled && h && h.classList.add(...v.lockClass.split(" "))
        }
        ;
        E.forEach(h => f(h, "next")),
        m.forEach(h => f(h, "prev"))
    }
    function p() {
        let {nextEl: v, prevEl: E} = t.navigation;
        v = s(v),
        E = s(E);
        const m = (f, h) => {
            f.removeEventListener("click", h === "next" ? c : u),
            f.classList.remove(...t.params.navigation.disabledClass.split(" "))
        }
        ;
        v.forEach(f => m(f, "next")),
        E.forEach(f => m(f, "prev"))
    }
    r("init", () => {
        t.params.navigation.enabled === !1 ? x() : (d(),
        a())
    }
    ),
    r("toEdge fromEdge lock unlock", () => {
        a()
    }
    ),
    r("destroy", () => {
        p()
    }
    ),
    r("enable disable", () => {
        let {nextEl: v, prevEl: E} = t.navigation;
        if (v = s(v),
        E = s(E),
        t.enabled) {
            a();
            return
        }
        [...v, ...E].filter(m => !!m).forEach(m => m.classList.add(t.params.navigation.lockClass))
    }
    ),
    r("click", (v, E) => {
        let {nextEl: m, prevEl: f} = t.navigation;
        m = s(m),
        f = s(f);
        const h = E.target;
        if (t.params.navigation.hideOnClick && !f.includes(h) && !m.includes(h)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === h || t.pagination.el.contains(h)))
                return;
            let w;
            m.length ? w = m[0].classList.contains(t.params.navigation.hiddenClass) : f.length && (w = f[0].classList.contains(t.params.navigation.hiddenClass)),
            i(w === !0 ? "navigationShow" : "navigationHide"),
            [...m, ...f].filter(S => !!S).forEach(S => S.classList.toggle(t.params.navigation.hiddenClass))
        }
    }
    );
    const g = () => {
        t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),
        d(),
        a()
    }
      , x = () => {
        t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),
        p()
    }
    ;
    Object.assign(t.navigation, {
        enable: g,
        disable: x,
        update: a,
        init: d,
        destroy: p
    })
}
function Ct(e) {
    return e === void 0 && (e = ""),
    `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
}
function Hv(e) {
    let {swiper: t, extendParams: n, on: r, emit: i} = e;
    const s = "swiper-pagination";
    n({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: f => f,
            formatFractionTotal: f => f,
            bulletClass: `${s}-bullet`,
            bulletActiveClass: `${s}-bullet-active`,
            modifierClass: `${s}-`,
            currentClass: `${s}-current`,
            totalClass: `${s}-total`,
            hiddenClass: `${s}-hidden`,
            progressbarFillClass: `${s}-progressbar-fill`,
            progressbarOppositeClass: `${s}-progressbar-opposite`,
            clickableClass: `${s}-clickable`,
            lockClass: `${s}-lock`,
            horizontalClass: `${s}-horizontal`,
            verticalClass: `${s}-vertical`,
            paginationDisabledClass: `${s}-disabled`
        }
    }),
    t.pagination = {
        el: null,
        bullets: []
    };
    let o, l = 0;
    const a = f => (Array.isArray(f) ? f : [f]).filter(h => !!h);
    function u() {
        return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && t.pagination.el.length === 0
    }
    function c(f, h) {
        const {bulletActiveClass: w} = t.params.pagination;
        f && (f = f[`${h === "prev" ? "previous" : "next"}ElementSibling`],
        f && (f.classList.add(`${w}-${h}`),
        f = f[`${h === "prev" ? "previous" : "next"}ElementSibling`],
        f && f.classList.add(`${w}-${h}-${h}`)))
    }
    function d(f) {
        const h = f.target.closest(Ct(t.params.pagination.bulletClass));
        if (!h)
            return;
        f.preventDefault();
        const w = Si(h) * t.params.slidesPerGroup;
        if (t.params.loop) {
            if (t.realIndex === w)
                return;
            t.slideToLoop(w)
        } else
            t.slideTo(w)
    }
    function p() {
        const f = t.rtl
          , h = t.params.pagination;
        if (u())
            return;
        let w = t.pagination.el;
        w = a(w);
        let S, C;
        const M = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
          , P = t.params.loop ? Math.ceil(M / t.params.slidesPerGroup) : t.snapGrid.length;
        if (t.params.loop ? (C = t.previousRealIndex || 0,
        S = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : typeof t.snapIndex < "u" ? (S = t.snapIndex,
        C = t.previousSnapIndex) : (C = t.previousIndex || 0,
        S = t.activeIndex || 0),
        h.type === "bullets" && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const L = t.pagination.bullets;
            let b, I, O;
            if (h.dynamicBullets && (o = ql(L[0], t.isHorizontal() ? "width" : "height", !0),
            w.forEach(_ => {
                _.style[t.isHorizontal() ? "width" : "height"] = `${o * (h.dynamicMainBullets + 4)}px`
            }
            ),
            h.dynamicMainBullets > 1 && C !== void 0 && (l += S - (C || 0),
            l > h.dynamicMainBullets - 1 ? l = h.dynamicMainBullets - 1 : l < 0 && (l = 0)),
            b = Math.max(S - l, 0),
            I = b + (Math.min(L.length, h.dynamicMainBullets) - 1),
            O = (I + b) / 2),
            L.forEach(_ => {
                const T = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(k => `${h.bulletActiveClass}${k}`)].map(k => typeof k == "string" && k.includes(" ") ? k.split(" ") : k).flat();
                _.classList.remove(...T)
            }
            ),
            w.length > 1)
                L.forEach(_ => {
                    const T = Si(_);
                    T === S ? _.classList.add(...h.bulletActiveClass.split(" ")) : t.isElement && _.setAttribute("part", "bullet"),
                    h.dynamicBullets && (T >= b && T <= I && _.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),
                    T === b && c(_, "prev"),
                    T === I && c(_, "next"))
                }
                );
            else {
                const _ = L[S];
                if (_ && _.classList.add(...h.bulletActiveClass.split(" ")),
                t.isElement && L.forEach( (T, k) => {
                    T.setAttribute("part", k === S ? "bullet-active" : "bullet")
                }
                ),
                h.dynamicBullets) {
                    const T = L[b]
                      , k = L[I];
                    for (let N = b; N <= I; N += 1)
                        L[N] && L[N].classList.add(...`${h.bulletActiveClass}-main`.split(" "));
                    c(T, "prev"),
                    c(k, "next")
                }
            }
            if (h.dynamicBullets) {
                const _ = Math.min(L.length, h.dynamicMainBullets + 4)
                  , T = (o * _ - o) / 2 - O * o
                  , k = f ? "right" : "left";
                L.forEach(N => {
                    N.style[t.isHorizontal() ? k : "top"] = `${T}px`
                }
                )
            }
        }
        w.forEach( (L, b) => {
            if (h.type === "fraction" && (L.querySelectorAll(Ct(h.currentClass)).forEach(I => {
                I.textContent = h.formatFractionCurrent(S + 1)
            }
            ),
            L.querySelectorAll(Ct(h.totalClass)).forEach(I => {
                I.textContent = h.formatFractionTotal(P)
            }
            )),
            h.type === "progressbar") {
                let I;
                h.progressbarOpposite ? I = t.isHorizontal() ? "vertical" : "horizontal" : I = t.isHorizontal() ? "horizontal" : "vertical";
                const O = (S + 1) / P;
                let _ = 1
                  , T = 1;
                I === "horizontal" ? _ = O : T = O,
                L.querySelectorAll(Ct(h.progressbarFillClass)).forEach(k => {
                    k.style.transform = `translate3d(0,0,0) scaleX(${_}) scaleY(${T})`,
                    k.style.transitionDuration = `${t.params.speed}ms`
                }
                )
            }
            h.type === "custom" && h.renderCustom ? (L.innerHTML = h.renderCustom(t, S + 1, P),
            b === 0 && i("paginationRender", L)) : (b === 0 && i("paginationRender", L),
            i("paginationUpdate", L)),
            t.params.watchOverflow && t.enabled && L.classList[t.isLocked ? "add" : "remove"](h.lockClass)
        }
        )
    }
    function g() {
        const f = t.params.pagination;
        if (u())
            return;
        const h = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
        let w = t.pagination.el;
        w = a(w);
        let S = "";
        if (f.type === "bullets") {
            let C = t.params.loop ? Math.ceil(h / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && C > h && (C = h);
            for (let M = 0; M < C; M += 1)
                f.renderBullet ? S += f.renderBullet.call(t, M, f.bulletClass) : S += `<${f.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${f.bulletClass}"></${f.bulletElement}>`
        }
        f.type === "fraction" && (f.renderFraction ? S = f.renderFraction.call(t, f.currentClass, f.totalClass) : S = `<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),
        f.type === "progressbar" && (f.renderProgressbar ? S = f.renderProgressbar.call(t, f.progressbarFillClass) : S = `<span class="${f.progressbarFillClass}"></span>`),
        t.pagination.bullets = [],
        w.forEach(C => {
            f.type !== "custom" && (C.innerHTML = S || ""),
            f.type === "bullets" && t.pagination.bullets.push(...C.querySelectorAll(Ct(f.bulletClass)))
        }
        ),
        f.type !== "custom" && i("paginationRender", w[0])
    }
    function x() {
        t.params.pagination = Mc(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
        });
        const f = t.params.pagination;
        if (!f.el)
            return;
        let h;
        typeof f.el == "string" && t.isElement && (h = t.el.querySelector(f.el)),
        !h && typeof f.el == "string" && (h = [...document.querySelectorAll(f.el)]),
        h || (h = f.el),
        !(!h || h.length === 0) && (t.params.uniqueNavElements && typeof f.el == "string" && Array.isArray(h) && h.length > 1 && (h = [...t.el.querySelectorAll(f.el)],
        h.length > 1 && (h = h.filter(w => jv(w, ".swiper")[0] === t.el)[0])),
        Array.isArray(h) && h.length === 1 && (h = h[0]),
        Object.assign(t.pagination, {
            el: h
        }),
        h = a(h),
        h.forEach(w => {
            f.type === "bullets" && f.clickable && w.classList.add(...(f.clickableClass || "").split(" ")),
            w.classList.add(f.modifierClass + f.type),
            w.classList.add(t.isHorizontal() ? f.horizontalClass : f.verticalClass),
            f.type === "bullets" && f.dynamicBullets && (w.classList.add(`${f.modifierClass}${f.type}-dynamic`),
            l = 0,
            f.dynamicMainBullets < 1 && (f.dynamicMainBullets = 1)),
            f.type === "progressbar" && f.progressbarOpposite && w.classList.add(f.progressbarOppositeClass),
            f.clickable && w.addEventListener("click", d),
            t.enabled || w.classList.add(f.lockClass)
        }
        ))
    }
    function v() {
        const f = t.params.pagination;
        if (u())
            return;
        let h = t.pagination.el;
        h && (h = a(h),
        h.forEach(w => {
            w.classList.remove(f.hiddenClass),
            w.classList.remove(f.modifierClass + f.type),
            w.classList.remove(t.isHorizontal() ? f.horizontalClass : f.verticalClass),
            f.clickable && (w.classList.remove(...(f.clickableClass || "").split(" ")),
            w.removeEventListener("click", d))
        }
        )),
        t.pagination.bullets && t.pagination.bullets.forEach(w => w.classList.remove(...f.bulletActiveClass.split(" ")))
    }
    r("changeDirection", () => {
        if (!t.pagination || !t.pagination.el)
            return;
        const f = t.params.pagination;
        let {el: h} = t.pagination;
        h = a(h),
        h.forEach(w => {
            w.classList.remove(f.horizontalClass, f.verticalClass),
            w.classList.add(t.isHorizontal() ? f.horizontalClass : f.verticalClass)
        }
        )
    }
    ),
    r("init", () => {
        t.params.pagination.enabled === !1 ? m() : (x(),
        g(),
        p())
    }
    ),
    r("activeIndexChange", () => {
        typeof t.snapIndex > "u" && p()
    }
    ),
    r("snapIndexChange", () => {
        p()
    }
    ),
    r("snapGridLengthChange", () => {
        g(),
        p()
    }
    ),
    r("destroy", () => {
        v()
    }
    ),
    r("enable disable", () => {
        let {el: f} = t.pagination;
        f && (f = a(f),
        f.forEach(h => h.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)))
    }
    ),
    r("lock unlock", () => {
        p()
    }
    ),
    r("click", (f, h) => {
        const w = h.target
          , S = a(t.pagination.el);
        if (t.params.pagination.el && t.params.pagination.hideOnClick && S && S.length > 0 && !w.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && w === t.navigation.nextEl || t.navigation.prevEl && w === t.navigation.prevEl))
                return;
            const C = S[0].classList.contains(t.params.pagination.hiddenClass);
            i(C === !0 ? "paginationShow" : "paginationHide"),
            S.forEach(M => M.classList.toggle(t.params.pagination.hiddenClass))
        }
    }
    );
    const E = () => {
        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
        let {el: f} = t.pagination;
        f && (f = a(f),
        f.forEach(h => h.classList.remove(t.params.pagination.paginationDisabledClass))),
        x(),
        g(),
        p()
    }
      , m = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let {el: f} = t.pagination;
        f && (f = a(f),
        f.forEach(h => h.classList.add(t.params.pagination.paginationDisabledClass))),
        v()
    }
    ;
    Object.assign(t.pagination, {
        enable: E,
        disable: m,
        render: g,
        update: p,
        init: x,
        destroy: v
    })
}
function Uv(e) {
    let {swiper: t, extendParams: n, on: r, emit: i} = e;
    const s = lt();
    let o = !1, l = null, a = null, u, c, d, p;
    n({
        scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: "swiper-scrollbar-horizontal",
            verticalClass: "swiper-scrollbar-vertical"
        }
    }),
    t.scrollbar = {
        el: null,
        dragEl: null
    };
    function g() {
        if (!t.params.scrollbar.el || !t.scrollbar.el)
            return;
        const {scrollbar: O, rtlTranslate: _} = t
          , {dragEl: T, el: k} = O
          , N = t.params.scrollbar
          , $ = t.params.loop ? t.progressLoop : t.progress;
        let j = c
          , A = (d - c) * $;
        _ ? (A = -A,
        A > 0 ? (j = c - A,
        A = 0) : -A + c > d && (j = d + A)) : A < 0 ? (j = c + A,
        A = 0) : A + c > d && (j = d - A),
        t.isHorizontal() ? (T.style.transform = `translate3d(${A}px, 0, 0)`,
        T.style.width = `${j}px`) : (T.style.transform = `translate3d(0px, ${A}px, 0)`,
        T.style.height = `${j}px`),
        N.hide && (clearTimeout(l),
        k.style.opacity = 1,
        l = setTimeout( () => {
            k.style.opacity = 0,
            k.style.transitionDuration = "400ms"
        }
        , 1e3))
    }
    function x(O) {
        !t.params.scrollbar.el || !t.scrollbar.el || (t.scrollbar.dragEl.style.transitionDuration = `${O}ms`)
    }
    function v() {
        if (!t.params.scrollbar.el || !t.scrollbar.el)
            return;
        const {scrollbar: O} = t
          , {dragEl: _, el: T} = O;
        _.style.width = "",
        _.style.height = "",
        d = t.isHorizontal() ? T.offsetWidth : T.offsetHeight,
        p = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)),
        t.params.scrollbar.dragSize === "auto" ? c = d * p : c = parseInt(t.params.scrollbar.dragSize, 10),
        t.isHorizontal() ? _.style.width = `${c}px` : _.style.height = `${c}px`,
        p >= 1 ? T.style.display = "none" : T.style.display = "",
        t.params.scrollbar.hide && (T.style.opacity = 0),
        t.params.watchOverflow && t.enabled && O.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass)
    }
    function E(O) {
        return t.isHorizontal() ? O.clientX : O.clientY
    }
    function m(O) {
        const {scrollbar: _, rtlTranslate: T} = t
          , {el: k} = _;
        let N;
        N = (E(O) - HC(k)[t.isHorizontal() ? "left" : "top"] - (u !== null ? u : c / 2)) / (d - c),
        N = Math.max(Math.min(N, 1), 0),
        T && (N = 1 - N);
        const $ = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * N;
        t.updateProgress($),
        t.setTranslate($),
        t.updateActiveIndex(),
        t.updateSlidesClasses()
    }
    function f(O) {
        const _ = t.params.scrollbar
          , {scrollbar: T, wrapperEl: k} = t
          , {el: N, dragEl: $} = T;
        o = !0,
        u = O.target === $ ? E(O) - O.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
        O.preventDefault(),
        O.stopPropagation(),
        k.style.transitionDuration = "100ms",
        $.style.transitionDuration = "100ms",
        m(O),
        clearTimeout(a),
        N.style.transitionDuration = "0ms",
        _.hide && (N.style.opacity = 1),
        t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"),
        i("scrollbarDragStart", O)
    }
    function h(O) {
        const {scrollbar: _, wrapperEl: T} = t
          , {el: k, dragEl: N} = _;
        o && (O.preventDefault ? O.preventDefault() : O.returnValue = !1,
        m(O),
        T.style.transitionDuration = "0ms",
        k.style.transitionDuration = "0ms",
        N.style.transitionDuration = "0ms",
        i("scrollbarDragMove", O))
    }
    function w(O) {
        const _ = t.params.scrollbar
          , {scrollbar: T, wrapperEl: k} = t
          , {el: N} = T;
        o && (o = !1,
        t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "",
        k.style.transitionDuration = ""),
        _.hide && (clearTimeout(a),
        a = fo( () => {
            N.style.opacity = 0,
            N.style.transitionDuration = "400ms"
        }
        , 1e3)),
        i("scrollbarDragEnd", O),
        _.snapOnRelease && t.slideToClosest())
    }
    function S(O) {
        const {scrollbar: _, params: T} = t
          , k = _.el;
        if (!k)
            return;
        const N = k
          , $ = T.passiveListeners ? {
            passive: !1,
            capture: !1
        } : !1
          , j = T.passiveListeners ? {
            passive: !0,
            capture: !1
        } : !1;
        if (!N)
            return;
        const A = O === "on" ? "addEventListener" : "removeEventListener";
        N[A]("pointerdown", f, $),
        s[A]("pointermove", h, $),
        s[A]("pointerup", w, j)
    }
    function C() {
        !t.params.scrollbar.el || !t.scrollbar.el || S("on")
    }
    function M() {
        !t.params.scrollbar.el || !t.scrollbar.el || S("off")
    }
    function P() {
        const {scrollbar: O, el: _} = t;
        t.params.scrollbar = Mc(t, t.originalParams.scrollbar, t.params.scrollbar, {
            el: "swiper-scrollbar"
        });
        const T = t.params.scrollbar;
        if (!T.el)
            return;
        let k;
        if (typeof T.el == "string" && t.isElement && (k = t.el.querySelector(T.el)),
        !k && typeof T.el == "string") {
            if (k = s.querySelectorAll(T.el),
            !k.length)
                return
        } else
            k || (k = T.el);
        t.params.uniqueNavElements && typeof T.el == "string" && k.length > 1 && _.querySelectorAll(T.el).length === 1 && (k = _.querySelector(T.el)),
        k.length > 0 && (k = k[0]),
        k.classList.add(t.isHorizontal() ? T.horizontalClass : T.verticalClass);
        let N;
        k && (N = k.querySelector(Ct(t.params.scrollbar.dragClass)),
        N || (N = Sr("div", t.params.scrollbar.dragClass),
        k.append(N))),
        Object.assign(O, {
            el: k,
            dragEl: N
        }),
        T.draggable && C(),
        k && k.classList[t.enabled ? "remove" : "add"](...Bt(t.params.scrollbar.lockClass))
    }
    function L() {
        const O = t.params.scrollbar
          , _ = t.scrollbar.el;
        _ && _.classList.remove(...Bt(t.isHorizontal() ? O.horizontalClass : O.verticalClass)),
        M()
    }
    r("init", () => {
        t.params.scrollbar.enabled === !1 ? I() : (P(),
        v(),
        g())
    }
    ),
    r("update resize observerUpdate lock unlock", () => {
        v()
    }
    ),
    r("setTranslate", () => {
        g()
    }
    ),
    r("setTransition", (O, _) => {
        x(_)
    }
    ),
    r("enable disable", () => {
        const {el: O} = t.scrollbar;
        O && O.classList[t.enabled ? "remove" : "add"](...Bt(t.params.scrollbar.lockClass))
    }
    ),
    r("destroy", () => {
        L()
    }
    );
    const b = () => {
        t.el.classList.remove(...Bt(t.params.scrollbar.scrollbarDisabledClass)),
        t.scrollbar.el && t.scrollbar.el.classList.remove(...Bt(t.params.scrollbar.scrollbarDisabledClass)),
        P(),
        v(),
        g()
    }
      , I = () => {
        t.el.classList.add(...Bt(t.params.scrollbar.scrollbarDisabledClass)),
        t.scrollbar.el && t.scrollbar.el.classList.add(...Bt(t.params.scrollbar.scrollbarDisabledClass)),
        L()
    }
    ;
    Object.assign(t.scrollbar, {
        enable: b,
        disable: I,
        updateSize: v,
        setTranslate: g,
        init: P,
        destroy: L
    })
}
function Wv(e) {
    let {swiper: t, extendParams: n, on: r} = e;
    n({
        a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null
        }
    }),
    t.a11y = {
        clicked: !1
    };
    let i = null;
    function s(T) {
        const k = i;
        k.length !== 0 && (k.innerHTML = "",
        k.innerHTML = T)
    }
    const o = T => (Array.isArray(T) ? T : [T]).filter(k => !!k);
    function l(T) {
        T === void 0 && (T = 16);
        const k = () => Math.round(16 * Math.random()).toString(16);
        return "x".repeat(T).replace(/x/g, k)
    }
    function a(T) {
        T = o(T),
        T.forEach(k => {
            k.setAttribute("tabIndex", "0")
        }
        )
    }
    function u(T) {
        T = o(T),
        T.forEach(k => {
            k.setAttribute("tabIndex", "-1")
        }
        )
    }
    function c(T, k) {
        T = o(T),
        T.forEach(N => {
            N.setAttribute("role", k)
        }
        )
    }
    function d(T, k) {
        T = o(T),
        T.forEach(N => {
            N.setAttribute("aria-roledescription", k)
        }
        )
    }
    function p(T, k) {
        T = o(T),
        T.forEach(N => {
            N.setAttribute("aria-controls", k)
        }
        )
    }
    function g(T, k) {
        T = o(T),
        T.forEach(N => {
            N.setAttribute("aria-label", k)
        }
        )
    }
    function x(T, k) {
        T = o(T),
        T.forEach(N => {
            N.setAttribute("id", k)
        }
        )
    }
    function v(T, k) {
        T = o(T),
        T.forEach(N => {
            N.setAttribute("aria-live", k)
        }
        )
    }
    function E(T) {
        T = o(T),
        T.forEach(k => {
            k.setAttribute("aria-disabled", !0)
        }
        )
    }
    function m(T) {
        T = o(T),
        T.forEach(k => {
            k.setAttribute("aria-disabled", !1)
        }
        )
    }
    function f(T) {
        if (T.keyCode !== 13 && T.keyCode !== 32)
            return;
        const k = t.params.a11y
          , N = T.target;
        t.pagination && t.pagination.el && (N === t.pagination.el || t.pagination.el.contains(T.target)) && !T.target.matches(Ct(t.params.pagination.bulletClass)) || (t.navigation && t.navigation.nextEl && N === t.navigation.nextEl && (t.isEnd && !t.params.loop || t.slideNext(),
        t.isEnd ? s(k.lastSlideMessage) : s(k.nextSlideMessage)),
        t.navigation && t.navigation.prevEl && N === t.navigation.prevEl && (t.isBeginning && !t.params.loop || t.slidePrev(),
        t.isBeginning ? s(k.firstSlideMessage) : s(k.prevSlideMessage)),
        t.pagination && N.matches(Ct(t.params.pagination.bulletClass)) && N.click())
    }
    function h() {
        if (t.params.loop || t.params.rewind || !t.navigation)
            return;
        const {nextEl: T, prevEl: k} = t.navigation;
        k && (t.isBeginning ? (E(k),
        u(k)) : (m(k),
        a(k))),
        T && (t.isEnd ? (E(T),
        u(T)) : (m(T),
        a(T)))
    }
    function w() {
        return t.pagination && t.pagination.bullets && t.pagination.bullets.length
    }
    function S() {
        return w() && t.params.pagination.clickable
    }
    function C() {
        const T = t.params.a11y;
        w() && t.pagination.bullets.forEach(k => {
            t.params.pagination.clickable && (a(k),
            t.params.pagination.renderBullet || (c(k, "button"),
            g(k, T.paginationBulletMessage.replace(/\{\{index\}\}/, Si(k) + 1)))),
            k.matches(Ct(t.params.pagination.bulletActiveClass)) ? k.setAttribute("aria-current", "true") : k.removeAttribute("aria-current")
        }
        )
    }
    const M = (T, k, N) => {
        a(T),
        T.tagName !== "BUTTON" && (c(T, "button"),
        T.addEventListener("keydown", f)),
        g(T, N),
        p(T, k)
    }
      , P = () => {
        t.a11y.clicked = !0
    }
      , L = () => {
        requestAnimationFrame( () => {
            requestAnimationFrame( () => {
                t.destroyed || (t.a11y.clicked = !1)
            }
            )
        }
        )
    }
      , b = T => {
        if (t.a11y.clicked)
            return;
        const k = T.target.closest(`.${t.params.slideClass}, swiper-slide`);
        if (!k || !t.slides.includes(k))
            return;
        const N = t.slides.indexOf(k) === t.activeIndex
          , $ = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(k);
        N || $ || T.sourceCapabilities && T.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0,
        t.slideTo(t.slides.indexOf(k), 0))
    }
      , I = () => {
        const T = t.params.a11y;
        T.itemRoleDescriptionMessage && d(t.slides, T.itemRoleDescriptionMessage),
        T.slideRole && c(t.slides, T.slideRole);
        const k = t.slides.length;
        T.slideLabelMessage && t.slides.forEach( (N, $) => {
            const j = t.params.loop ? parseInt(N.getAttribute("data-swiper-slide-index"), 10) : $
              , A = T.slideLabelMessage.replace(/\{\{index\}\}/, j + 1).replace(/\{\{slidesLength\}\}/, k);
            g(N, A)
        }
        )
    }
      , O = () => {
        const T = t.params.a11y;
        t.el.append(i);
        const k = t.el;
        T.containerRoleDescriptionMessage && d(k, T.containerRoleDescriptionMessage),
        T.containerMessage && g(k, T.containerMessage);
        const N = t.wrapperEl
          , $ = T.id || N.getAttribute("id") || `swiper-wrapper-${l(16)}`
          , j = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
        x(N, $),
        v(N, j),
        I();
        let {nextEl: A, prevEl: R} = t.navigation ? t.navigation : {};
        A = o(A),
        R = o(R),
        A && A.forEach(F => M(F, $, T.nextSlideMessage)),
        R && R.forEach(F => M(F, $, T.prevSlideMessage)),
        S() && o(t.pagination.el).forEach(W => {
            W.addEventListener("keydown", f)
        }
        ),
        t.el.addEventListener("focus", b, !0),
        t.el.addEventListener("pointerdown", P, !0),
        t.el.addEventListener("pointerup", L, !0)
    }
    ;
    function _() {
        i && i.remove();
        let {nextEl: T, prevEl: k} = t.navigation ? t.navigation : {};
        T = o(T),
        k = o(k),
        T && T.forEach(N => N.removeEventListener("keydown", f)),
        k && k.forEach(N => N.removeEventListener("keydown", f)),
        S() && o(t.pagination.el).forEach($ => {
            $.removeEventListener("keydown", f)
        }
        ),
        t.el.removeEventListener("focus", b, !0),
        t.el.removeEventListener("pointerdown", P, !0),
        t.el.removeEventListener("pointerup", L, !0)
    }
    r("beforeInit", () => {
        i = Sr("span", t.params.a11y.notificationClass),
        i.setAttribute("aria-live", "assertive"),
        i.setAttribute("aria-atomic", "true")
    }
    ),
    r("afterInit", () => {
        t.params.a11y.enabled && O()
    }
    ),
    r("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
        t.params.a11y.enabled && I()
    }
    ),
    r("fromEdge toEdge afterInit lock unlock", () => {
        t.params.a11y.enabled && h()
    }
    ),
    r("paginationUpdate", () => {
        t.params.a11y.enabled && C()
    }
    ),
    r("destroy", () => {
        t.params.a11y.enabled && _()
    }
    )
}
function Gv(e) {
    let {swiper: t, extendParams: n, on: r, emit: i, params: s} = e;
    t.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    },
    n({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let o, l, a = s && s.autoplay ? s.autoplay.delay : 3e3, u = s && s.autoplay ? s.autoplay.delay : 3e3, c, d = new Date().getTime(), p, g, x, v, E, m, f;
    function h(j) {
        !t || t.destroyed || !t.wrapperEl || j.target === t.wrapperEl && (t.wrapperEl.removeEventListener("transitionend", h),
        !f && b())
    }
    const w = () => {
        if (t.destroyed || !t.autoplay.running)
            return;
        t.autoplay.paused ? p = !0 : p && (u = c,
        p = !1);
        const j = t.autoplay.paused ? c : d + u - new Date().getTime();
        t.autoplay.timeLeft = j,
        i("autoplayTimeLeft", j, j / a),
        l = requestAnimationFrame( () => {
            w()
        }
        )
    }
      , S = () => {
        let j;
        return t.virtual && t.params.virtual.enabled ? j = t.slides.filter(R => R.classList.contains("swiper-slide-active"))[0] : j = t.slides[t.activeIndex],
        j ? parseInt(j.getAttribute("data-swiper-autoplay"), 10) : void 0
    }
      , C = j => {
        if (t.destroyed || !t.autoplay.running)
            return;
        cancelAnimationFrame(l),
        w();
        let A = typeof j > "u" ? t.params.autoplay.delay : j;
        a = t.params.autoplay.delay,
        u = t.params.autoplay.delay;
        const R = S();
        !Number.isNaN(R) && R > 0 && typeof j > "u" && (A = R,
        a = R,
        u = R),
        c = A;
        const F = t.params.speed
          , W = () => {
            !t || t.destroyed || (t.params.autoplay.reverseDirection ? !t.isBeginning || t.params.loop || t.params.rewind ? (t.slidePrev(F, !0, !0),
            i("autoplay")) : t.params.autoplay.stopOnLastSlide || (t.slideTo(t.slides.length - 1, F, !0, !0),
            i("autoplay")) : !t.isEnd || t.params.loop || t.params.rewind ? (t.slideNext(F, !0, !0),
            i("autoplay")) : t.params.autoplay.stopOnLastSlide || (t.slideTo(0, F, !0, !0),
            i("autoplay")),
            t.params.cssMode && (d = new Date().getTime(),
            requestAnimationFrame( () => {
                C()
            }
            )))
        }
        ;
        return A > 0 ? (clearTimeout(o),
        o = setTimeout( () => {
            W()
        }
        , A)) : requestAnimationFrame( () => {
            W()
        }
        ),
        A
    }
      , M = () => {
        d = new Date().getTime(),
        t.autoplay.running = !0,
        C(),
        i("autoplayStart")
    }
      , P = () => {
        t.autoplay.running = !1,
        clearTimeout(o),
        cancelAnimationFrame(l),
        i("autoplayStop")
    }
      , L = (j, A) => {
        if (t.destroyed || !t.autoplay.running)
            return;
        clearTimeout(o),
        j || (m = !0);
        const R = () => {
            i("autoplayPause"),
            t.params.autoplay.waitForTransition ? t.wrapperEl.addEventListener("transitionend", h) : b()
        }
        ;
        if (t.autoplay.paused = !0,
        A) {
            E && (c = t.params.autoplay.delay),
            E = !1,
            R();
            return
        }
        c = (c || t.params.autoplay.delay) - (new Date().getTime() - d),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0),
        R())
    }
      , b = () => {
        t.isEnd && c < 0 && !t.params.loop || t.destroyed || !t.autoplay.running || (d = new Date().getTime(),
        m ? (m = !1,
        C(c)) : C(),
        t.autoplay.paused = !1,
        i("autoplayResume"))
    }
      , I = () => {
        if (t.destroyed || !t.autoplay.running)
            return;
        const j = lt();
        j.visibilityState === "hidden" && (m = !0,
        L(!0)),
        j.visibilityState === "visible" && b()
    }
      , O = j => {
        j.pointerType === "mouse" && (m = !0,
        f = !0,
        !(t.animating || t.autoplay.paused) && L(!0))
    }
      , _ = j => {
        j.pointerType === "mouse" && (f = !1,
        t.autoplay.paused && b())
    }
      , T = () => {
        t.params.autoplay.pauseOnMouseEnter && (t.el.addEventListener("pointerenter", O),
        t.el.addEventListener("pointerleave", _))
    }
      , k = () => {
        t.el.removeEventListener("pointerenter", O),
        t.el.removeEventListener("pointerleave", _)
    }
      , N = () => {
        lt().addEventListener("visibilitychange", I)
    }
      , $ = () => {
        lt().removeEventListener("visibilitychange", I)
    }
    ;
    r("init", () => {
        t.params.autoplay.enabled && (T(),
        N(),
        M())
    }
    ),
    r("destroy", () => {
        k(),
        $(),
        t.autoplay.running && P()
    }
    ),
    r("_freeModeStaticRelease", () => {
        (x || m) && b()
    }
    ),
    r("_freeModeNoMomentumRelease", () => {
        t.params.autoplay.disableOnInteraction ? P() : L(!0, !0)
    }
    ),
    r("beforeTransitionStart", (j, A, R) => {
        t.destroyed || !t.autoplay.running || (R || !t.params.autoplay.disableOnInteraction ? L(!0, !0) : P())
    }
    ),
    r("sliderFirstMove", () => {
        if (!(t.destroyed || !t.autoplay.running)) {
            if (t.params.autoplay.disableOnInteraction) {
                P();
                return
            }
            g = !0,
            x = !1,
            m = !1,
            v = setTimeout( () => {
                m = !0,
                x = !0,
                L(!0)
            }
            , 200)
        }
    }
    ),
    r("touchEnd", () => {
        if (!(t.destroyed || !t.autoplay.running || !g)) {
            if (clearTimeout(v),
            clearTimeout(o),
            t.params.autoplay.disableOnInteraction) {
                x = !1,
                g = !1;
                return
            }
            x && t.params.cssMode && b(),
            x = !1,
            g = !1
        }
    }
    ),
    r("slideChange", () => {
        t.destroyed || !t.autoplay.running || (E = !0)
    }
    ),
    Object.assign(t.autoplay, {
        start: M,
        stop: P,
        pause: L,
        resume: b
    })
}
function fk() {
    return y.jsxs("section", {
        id: "главная",
        className: "container  grid items-center gap-5  xs:my-10 xs:grid-cols-1 xs:px-16 sm:grid-cols-2 md:my-28",
        children: [y.jsxs(ye.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: !0
            },
            transition: {
                duration: .5
            },
            variants: {
                visible: {
                    opacity: 1,
                    x: 0
                },
                hidden: {
                    opacity: 0,
                    x: -50
                }
            },
            children: [y.jsx("h1", {
                className: "font-geosib leading-tight xs:text-4xl md:text-5xl",
                children: "Решения 1С для вашего бизнеса"
            }), y.jsx("p", {
                className: "mt-6 text-gray-300 xs:text-sm sm:text-lg",
                children: "Максимальная эффективность и автоматизация с помощью продуктов 1С. Узнайте, как мы можем оптимизировать ваш бизнес."
            }), y.jsxs("div", {
                className: "mt-8 flex items-center gap-3 xs:flex-col xs:items-start md:flex-row",
                children: [y.jsx("a", {
                    href: "tel:+77711070225",
                    className: "ease cursor-pointer rounded-sm border bg-yellow-500 px-5 py-3 text-[#513E00]  transition-all duration-300 hover:bg-yellow-400 xs:text-[15px] md:text-[16px]",
                    children: "Позвонить"
                }), y.jsxs("a", {
                    href: "https://wa.me/77711070225",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "ease md:text-[16px]xs:text-[15px] flex cursor-pointer items-center gap-3 rounded-sm border border-green-500 px-5 py-3 text-green-500 transition-all duration-300 hover:bg-green-200 xs:text-[15px] md:text-[16px] ",
                    children: [y.jsx(Ro, {}), " Написать в WhatsApp"]
                })]
            })]
        }), y.jsx(ye.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: !0
            },
            transition: {
                duration: .5
            },
            variants: {
                visible: {
                    opacity: 1,
                    x: 0
                },
                hidden: {
                    opacity: 0,
                    x: 50
                }
            },
            children: y.jsx("img", {
                src: "./webkassa1.png",
                alt: "Компьютер с 1С",
                className: "w-full"
            })
        })]
    })
}
function pk() {
    return y.jsxs("section", {
        id: "главная",
        className: "container grid items-center  gap-5 xs:my-10 xs:grid-cols-1 xs:px-16 sm:grid-cols-2 md:my-28",
        children: [y.jsxs(ye.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: !0
            },
            transition: {
                duration: .5
            },
            variants: {
                visible: {
                    opacity: 1,
                    x: 0
                },
                hidden: {
                    opacity: 0,
                    x: -50
                }
            },
            children: [y.jsx("h1", {
                className: "font-geosib leading-tight xs:text-4xl md:text-5xl",
                children: "Эффективное управление финансами"
            }), y.jsx("p", {
                className: "mt-6 text-gray-300 xs:text-sm sm:text-lg",
                children: "Бухгалтерские решения, которые помогут вам вести учет и финансовый анализ вашего бизнеса. Узнайте, как мы можем улучшить вашу бухгалтерию."
            }), y.jsxs("div", {
                className: "mt-8 flex items-center gap-3 xs:flex-col xs:items-start md:flex-row",
                children: [y.jsx("a", {
                    href: "tel:+77711070225",
                    className: "ease cursor-pointer rounded-sm border bg-yellow-500 px-5 py-3 text-[#513E00]  transition-all duration-300 hover:bg-yellow-400 xs:text-[15px] md:text-[16px]",
                    children: "Позвонить"
                }), y.jsxs("a", {
                    href: "https://wa.me/77711070225",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "ease md:text-[16px]xs:text-[15px] flex cursor-pointer items-center gap-3 rounded-sm border border-green-500 px-5 py-3 text-green-500 transition-all duration-300 hover:bg-green-200 xs:text-[15px] md:text-[16px] ",
                    children: [y.jsx(Ro, {}), " Написать в WhatsApp"]
                })]
            })]
        }), y.jsx(ye.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: !0
            },
            transition: {
                duration: .5
            },
            variants: {
                visible: {
                    opacity: 1,
                    x: 0
                },
                hidden: {
                    opacity: 0,
                    x: 50
                }
            },
            className: "flex items-center justify-center",
            children: y.jsx("img", {
                src: "./buhhero1.png",
                alt: "Компьютер с 1С",
                className: "w-[400px]"
            })
        })]
    })
}
function hk() {
    return y.jsxs(Lc, {
        modules: [$v, Hv, Uv, Wv, Gv],
        spaceBetween: 50,
        slidesPerView: 1,
        navigation: !0,
        pagination: {
            clickable: !0
        },
        autoplay: {
            delay: 2e3,
            disableOnInteraction: !1,
            pauseOnMouseEnter: !0
        },
        className: "bg-white",
        children: [y.jsxs(Et, {
            children: [y.jsx(fk, {}), ";"]
        }), y.jsxs(Et, {
            children: [y.jsx(VC, {}), ";"]
        }), y.jsxs(Et, {
            children: [y.jsx(pk, {}), ";"]
        })]
    })
}
function mk() {
    return y.jsxs(ye.section, {
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: !0
        },
        transition: {
            duration: .5
        },
        variants: {
            visible: {
                opacity: 1,
                y: 0
            },
            hidden: {
                opacity: 0,
                y: 50
            }
        },
        className: "container  rounded-md bg-white shadow-lg xs:my-10 xs:p-10 sm:my-20 md:px-[65px] md:py-[50px]",
        children: [y.jsx("h2", {
            className: "font-bold uppercase xs:text-[30px] sm:text-[38px]",
            children: "1С это просто!"
        }), y.jsxs("div", {
            className: "mt-5 flex flex-1 flex-wrap items-center justify-between gap-3 xs:flex-col sm:flex-row",
            children: [y.jsxs("div", {
                className: "flex-col xs:flex xs:items-center sm:items-start",
                children: [y.jsx("h3", {
                    className: "font-bold leading-[42px] text-red-500 xs:text-[35px] md:text-[40px]",
                    children: "15 лет"
                }), y.jsx("span", {
                    className: "ml-1 text-[#333]",
                    children: "В сфере IT"
                })]
            }), y.jsx("div", {
                className: "h-[70px] w-[2px] bg-gray-200"
            }), y.jsxs("div", {
                className: "flex-col xs:flex xs:items-center sm:items-start",
                children: [y.jsx("h3", {
                    className: "font-bold leading-[42px] text-red-500 xs:text-[35px] md:text-[40px]",
                    children: "более 500"
                }), y.jsx("span", {
                    className: "ml-1 text-[#333]",
                    children: "Довольных клиентов"
                })]
            }), y.jsx("div", {
                className: "h-[70px] w-[2px] bg-gray-200"
            }), y.jsxs("div", {
                className: "flex-col xs:flex xs:items-center sm:items-start",
                children: [y.jsx("h3", {
                    className: "font-bold leading-[42px] text-red-500 xs:text-[35px] md:text-[40px]",
                    children: "30"
                }), y.jsx("span", {
                    className: "ml-1 text-[#333]",
                    children: "Специалистов"
                })]
            }), y.jsx("div", {
                className: "h-[70px] w-[2px] bg-gray-200"
            }), y.jsxs("div", {
                className: "flex-col xs:flex xs:items-center sm:items-start",
                children: [y.jsx("h3", {
                    className: "font-bold leading-[42px] text-red-500 xs:text-[35px] md:text-[40px]",
                    children: "Более 100"
                }), y.jsx("span", {
                    className: "ml-1 text-[#333]",
                    children: "Активных проектов"
                })]
            })]
        })]
    })
}
function mp() {
    return y.jsx("img", {
        src: "./user-experience.png",
        alt: "О нас иконка",
        className: "h-[80px] w-[80px] object-contain"
    })
}
function gk() {
    return y.jsx("img", {
        src: "./language.png",
        alt: "Языки иконка",
        className: "h-[80px] w-[80px] object-contain"
    })
}
function vk() {
    return y.jsx("img", {
        src: "/handshake.png",
        alt: "Партнеры иконка",
        className: "h-[90px] w-[90px] object-contain"
    })
}
function yk() {
    return y.jsx("section", {
        id: "онас",
        className: "mt-10 w-full bg-yellow-300 py-20 xs:mt-10 sm:mt-20",
        children: y.jsxs("div", {
            className: "container grid grid-cols-7 gap-7 xs:gap-3 xs:px-4",
            children: [y.jsxs(ye.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5
                },
                variants: {
                    visible: {
                        opacity: 1,
                        y: 0
                    },
                    hidden: {
                        opacity: 0,
                        y: 50
                    }
                },
                className: "mb-10 xs:col-span-7 md:col-span-4",
                children: [y.jsx("h2", {
                    className: "font-geosib text-black xs:text-[30px] sm:text-[38px]",
                    children: "О нас"
                }), y.jsxs("p", {
                    className: "mt-5 leading-loose text-black",
                    children: [y.jsx("strong", {
                        children: "High Quality Support Service"
                    }), " - мы команда высококвалифицированных специалистов с более чем 15-летним опытом в сфере IT. Мы специализируемся в администрировании серверов, СУБД SQL, 1С, сетей, и решении различных проблем с MS Windows. Наш опыт позволяет нам предоставлять высококачественные услуги на трех языках: русском, казахском и английском. Наша компания является официальным партнером фирмы 1С в г. Актау с 2012 года. Мы являемся очень сильными разработчиками в сфере автоматизации, производства и торговлю. В нашей компании 3 направления – IT аутсорсинг, 1С Франчайзи и БУХ аутсорсинг."]
                })]
            }), y.jsx("div", {}), y.jsx("div", {}), y.jsxs(ye.div, {
                id: "преимущества",
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5
                },
                variants: {
                    visible: {
                        opacity: 1,
                        x: 0
                    },
                    hidden: {
                        opacity: 0,
                        x: -50
                    }
                },
                className: "flex items-center gap-10 border bg-white xs:col-span-7 xs:p-5 md:col-span-3 md:p-10",
                children: [y.jsx(mp, {}), y.jsxs("div", {
                    children: [y.jsx("h3", {
                        className: "mb-3 text-[18px] font-bold",
                        children: "Опыт и Экспертиза"
                    }), y.jsx("p", {
                        className: "text-[14px]",
                        children: "Более 12 лет успешной работы в сфере IT, обеспечивая клиентов высококачественными решениями и надежной поддержкой."
                    })]
                })]
            }), y.jsxs(ye.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5
                },
                variants: {
                    visible: {
                        opacity: 1,
                        x: 0
                    },
                    hidden: {
                        opacity: 0,
                        x: 50
                    }
                },
                className: "flex items-center gap-10 border bg-white p-10 xs:col-span-7 xs:p-5 md:col-span-3 md:p-10",
                children: [y.jsx(gk, {}), y.jsxs("div", {
                    children: [y.jsx("h3", {
                        className: "mb-3 text-[18px] font-bold",
                        children: "Многоязычная Техническая Поддержка"
                    }), y.jsx("p", {
                        className: "text-[14px]",
                        children: "Профессиональное обслуживание на трех языках (русский, казахский, английский), гарантируя комфортное взаимодействие с клиентами."
                    })]
                })]
            }), y.jsx("div", {}), y.jsxs(ye.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5
                },
                variants: {
                    visible: {
                        opacity: 1,
                        x: 0
                    },
                    hidden: {
                        opacity: 0,
                        x: -50
                    }
                },
                className: "flex items-center justify-between gap-10 border bg-white p-10 xs:col-span-7 xs:p-5 md:col-span-3 md:p-10",
                children: [y.jsx(vk, {}), y.jsxs("div", {
                    children: [y.jsx("h3", {
                        className: "mb-3 text-[18px] font-bold",
                        children: "Партнерство с Ведущими Брендами"
                    }), y.jsx("p", {
                        className: "text-[14px]",
                        children: "Стратегические партнерства с HP, Webkassa, Cleverens, ZEBRA, Comportal, Drweb, обеспечивающие доступ к передовым технологиям и ресурсам."
                    })]
                })]
            }), y.jsxs(ye.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5
                },
                variants: {
                    visible: {
                        opacity: 1,
                        x: 0
                    },
                    hidden: {
                        opacity: 0,
                        x: 50
                    }
                },
                className: "flex items-center gap-10 border bg-white p-10 xs:col-span-7 xs:p-5 md:col-span-3 md:p-10",
                children: [y.jsx(mp, {}), y.jsxs("div", {
                    children: [y.jsxs("h3", {
                        className: "mb-3 text-[18px] font-bold",
                        children: ["Индивидуальный Подход к ", y.jsx("br", {}), " Каждому Клиенту"]
                    }), y.jsx("p", {
                        className: "text-[14px]",
                        children: "Ориентированный на клиента подход, где время, результат и качество являются основными приоритетами в нашей работе."
                    })]
                })]
            })]
        })
    })
}
function xk() {
    return y.jsxs(ye.section, {
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: !0
        },
        transition: {
            duration: .5
        },
        variants: {
            visible: {
                opacity: 1,
                y: 0
            },
            hidden: {
                opacity: 0,
                y: 50
            }
        },
        id: "партнеры",
        className: "container pb-20 pt-20",
        children: [y.jsx("h2", {
            className: "text-center font-geosib text-3xl",
            children: "Наши партнеры"
        }), y.jsxs("div", {
            className: "mt-10 flex w-full flex-wrap items-center justify-center gap-8",
            children: [y.jsx("img", {
                src: "./webkassa.png",
                alt: "Вебкасса логотип ЦТО",
                className: "ease h-[120px] w-[200px] border bg-white object-contain px-5 transition-all duration-300  hover:opacity-80"
            }), y.jsx("img", {
                src: "./zebra.png",
                alt: "Zebra логотип",
                className: "ease h-[120px] w-[200px] border bg-white object-contain p-8 transition-all duration-300  hover:opacity-80"
            }), y.jsx("img", {
                src: "./comportal.png",
                alt: "comportal логотип",
                className: "ease h-[120px] w-[200px] border bg-white object-contain p-5 transition-all duration-300  hover:opacity-80"
            }), y.jsx("img", {
                src: "./drweb.png",
                alt: "drweb логотип",
                className: "ease h-[120px] w-[200px] border bg-white object-contain p-5 transition-all duration-300  hover:opacity-80"
            }), y.jsx("img", {
                src: "./hp.png",
                alt: "hp логотип",
                className: "ease h-[120px] w-[200px] border bg-white object-contain p-8 transition-all duration-300  hover:opacity-80"
            }), y.jsx("img", {
                src: "./cleverence.png",
                alt: "cleverence логотип",
                className: "ease h-[120px] w-[200px] border bg-white object-contain p-5 transition-all duration-300  hover:opacity-80"
            }), y.jsx("img", {
                src: "./mobic.png",
                alt: "Моби-с логотип",
                className: "ease h-[120px] w-[200px] border bg-white object-contain p-5 transition-all duration-300  hover:opacity-80"
            }), y.jsx("img", {
                src: "./agentplus.png",
                alt: "Агент Плюс логотип",
                className: "ease h-[120px] w-[200px] border bg-white object-contain p-5 transition-all duration-300  hover:opacity-80"
            }), y.jsx("img", {
                src: "./1cfresh.png",
                alt: "1c fresh логотип",
                className: "ease h-[120px] w-[200px] border bg-white object-contain p-7 transition-all duration-300  hover:opacity-80"
            })]
        })]
    })
}
it.func.isRequired;
it.func.isRequired;
function wk() {
    const e = Nm("( min-width: 768px )") ? 3 : 1;
    return y.jsxs("section", {
        id: "отзывы",
        className: "container gap-5 pb-20 pt-20 xs:px-4",
        children: [y.jsxs("div", {
            className: "xs:w-full sm:w-1/2",
            children: [y.jsx(ye.h2, {
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5
                },
                variants: {
                    visible: {
                        opacity: 1,
                        x: 0
                    },
                    hidden: {
                        opacity: 0,
                        x: -50
                    }
                },
                className: "mb-7 font-geosib text-4xl",
                children: "Отзывы наших клиентов"
            }), y.jsx(ye.p, {
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .5
                },
                variants: {
                    visible: {
                        opacity: 1,
                        x: 0
                    },
                    hidden: {
                        opacity: 0,
                        x: 50
                    }
                },
                children: "Наши клиенты – это различные компании самых разных направлений – производство, розничная торговля, оптовая дистрибьюция, медицинские учреждения, аптечные сети. Нам доверяют и работают с нами многие крупные компании г. Актау и Мангистауской области, а также у нас есть клиенты в г. Атырау, Астана, Алматы. Многие клиенты с нами работают больше 5ти лет, а есть даже больше 10 лет. Мы активно расширяемся и берём новые объемы!"
            })]
        }), y.jsx("div", {}), y.jsx("div", {}), y.jsxs(Lc, {
            modules: [$v, Hv, Uv, Wv, Gv],
            spaceBetween: 50,
            slidesPerView: e,
            scrollbar: {
                draggable: !0
            },
            autoplay: {
                delay: 2e3,
                disableOnInteraction: !1,
                pauseOnMouseEnter: !0
            },
            children: [y.jsx(Et, {
                children: y.jsxs("div", {
                    className: "col-span-1 mt-10 border border-gray-200 bg-white p-5",
                    children: [y.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [y.jsx("img", {
                            src: "./user.png",
                            alt: "Пользователь",
                            className: "h-[40px] w-[40px] object-contain"
                        }), y.jsxs("div", {
                            children: [y.jsx("h5", {
                                className: "font-bold",
                                children: "Аида"
                            }), y.jsx("p", {
                                className: "text-gray-300",
                                children: "Директор компании"
                            })]
                        })]
                    }), y.jsx("p", {
                        className: "mt-5 leading-relaxed",
                        children: "Хочу выразить свою благодарность за высокий профессионализм и ответственный подход, проявленный командой специалистов HQSS"
                    }), y.jsxs("div", {
                        className: "mt-5 flex items-center gap-3",
                        children: [y.jsx("img", {
                            src: "./star.png",
                            alt: "Звезда",
                            className: "h-[20px] w-[20px] object-contain"
                        }), y.jsx("p", {
                            children: "5 / 5"
                        })]
                    })]
                })
            }), y.jsxs(Et, {
                children: [" ", y.jsxs("div", {
                    className: "col-span-1 mt-10 border border-gray-200 bg-white p-5",
                    children: [y.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [y.jsx("img", {
                            src: "./user.png",
                            alt: "Пользователь",
                            className: "h-[40px] w-[40px] object-contain"
                        }), y.jsxs("div", {
                            children: [y.jsx("h5", {
                                className: "font-bold",
                                children: "Марат"
                            }), y.jsx("p", {
                                className: "text-gray-300",
                                children: "Директор компании"
                            })]
                        })]
                    }), y.jsx("p", {
                        className: "mt-5 leading-relaxed",
                        children: "Надежная компания. Профессиональная бухгалтерская поддержка, своевременная обработка документов и высокий уровень ответственности. Рекомендуем."
                    }), y.jsxs("div", {
                        className: "mt-5 flex items-center gap-3",
                        children: [y.jsx("img", {
                            src: "./star.png",
                            alt: "Звезда",
                            className: "h-[20px] w-[20px] object-contain"
                        }), y.jsx("p", {
                            children: "5 / 5"
                        })]
                    })]
                })]
            }), y.jsxs(Et, {
                children: [" ", y.jsxs("div", {
                    className: "col-span-1 mt-10 border border-gray-200 bg-white p-5",
                    children: [y.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [y.jsx("img", {
                            src: "./user.png",
                            alt: "Пользователь",
                            className: "h-[40px] w-[40px] object-contain"
                        }), y.jsxs("div", {
                            children: [y.jsx("h5", {
                                className: "font-bold",
                                children: "Олег"
                            }), y.jsx("p", {
                                className: "text-gray-300",
                                children: "Директор компании"
                            })]
                        })]
                    }), y.jsx("p", {
                        className: "mt-5 leading-relaxed",
                        children: "Выражаем благодарность HQSS за отличное администрирование системы 1С. Профессиональный подход к обслуживанию, оперативное реагирование на возникающие проблемы и предоставление качественных технических решений позволяют нам быть уверенными в стабильной работе нашей бизнес-системы. Рекомендуем как компетентного партнера по администрированию 1С."
                    }), y.jsxs("div", {
                        className: "mt-5 flex items-center gap-3",
                        children: [y.jsx("img", {
                            src: "./star.png",
                            alt: "Звезда",
                            className: "h-[20px] w-[20px] object-contain"
                        }), y.jsx("p", {
                            children: "5 / 5"
                        })]
                    })]
                })]
            }), y.jsxs(Et, {
                children: [" ", y.jsxs("div", {
                    className: "col-span-1 mt-10 border border-gray-200 bg-white p-5",
                    children: [y.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [y.jsx("img", {
                            src: "./user.png",
                            alt: "Пользователь",
                            className: "h-[40px] w-[40px] object-contain"
                        }), y.jsxs("div", {
                            children: [y.jsx("h5", {
                                className: "font-bold",
                                children: "Александр"
                            }), y.jsx("p", {
                                className: "text-gray-300",
                                children: "Директор компании"
                            })]
                        })]
                    }), y.jsx("p", {
                        className: "mt-5 leading-relaxed",
                        children: "Огромное спасибо команде HQSS за качественную поддержку в вопросах 1С. Системная работа, оперативные решения и профессиональные консультации внесли значительный вклад в улучшение работы нашей компании."
                    }), y.jsxs("div", {
                        className: "mt-5 flex items-center gap-3",
                        children: [y.jsx("img", {
                            src: "./star.png",
                            alt: "Звезда",
                            className: "h-[20px] w-[20px] object-contain"
                        }), y.jsx("p", {
                            children: "5 / 5"
                        })]
                    })]
                })]
            }), y.jsxs(Et, {
                children: [" ", y.jsxs("div", {
                    className: "col-span-1 mt-10 border border-gray-200 bg-white p-5",
                    children: [y.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [y.jsx("img", {
                            src: "./user.png",
                            alt: "Пользователь",
                            className: "h-[40px] w-[40px] object-contain"
                        }), y.jsxs("div", {
                            children: [y.jsx("h5", {
                                className: "font-bold",
                                children: "Нурбол"
                            }), y.jsx("p", {
                                className: "text-gray-300",
                                children: "Директор компании"
                            })]
                        })]
                    }), y.jsx("p", {
                        className: "mt-5 leading-relaxed",
                        children: "Мы сотрудничаем с HQSS в области 1С администрирования и хочу подчеркнуть их высокий профессионализм. Команда специалистов оперативно решает все технические вопросы, обеспечивая бесперебойную работу нашей системы. Гибкий и индивидуальный подход к нашим потребностям внес значительный вклад в оптимизацию процессов управления и отчетности."
                    }), y.jsxs("div", {
                        className: "mt-5 flex items-center gap-3",
                        children: [y.jsx("img", {
                            src: "./star.png",
                            alt: "Звезда",
                            className: "h-[20px] w-[20px] object-contain"
                        }), y.jsx("p", {
                            children: "5 / 5"
                        })]
                    })]
                })]
            })]
        })]
    })
}
Yv.propTypes = {
    setSelectedPage: it.func.isRequired
};
function Yv() {
    return y.jsx("footer", {
        className: " bg-red-500",
        children: y.jsx("div", {
            className: "container flex flex-col justify-center gap-5 py-5 xs:px-4",
            children: y.jsxs("div", {
                className: "flex flex-row flex-wrap items-center xs:gap-3 md:gap-10",
                children: [y.jsx("h3", {
                    className: "font-geosib text-[18px] tracking-wider text-yellow-700 xs:w-full md:w-[400px] ",
                    children: "Контактная информация"
                }), y.jsxs("a", {
                    href: "mailto:vX9yZ@example.com",
                    className: " flex items-center gap-5",
                    children: [y.jsx("img", {
                        src: "envelope.png",
                        alt: "Почта иконка",
                        className: "h-[15px] w-[15px] object-contain"
                    }), y.jsx("span", {
                        className: "ml-1 text-[14px] text-white",
                        children: "1c@hqss.kz"
                    })]
                }), y.jsxs("a", {
                    href: "tel:+77711070225",
                    className: " flex items-center gap-5",
                    children: [y.jsx("img", {
                        src: "call.png",
                        alt: "Телефон иконка",
                        className: "h-[15px] w-[15px] object-contain"
                    }), y.jsx("span", {
                        className: "ml-1 text-[14px] text-white",
                        children: "+7 771 107 0225"
                    })]
                }), y.jsxs("address", {
                    className: "flex items-center gap-5",
                    children: [y.jsx("img", {
                        src: "placeholder.png",
                        alt: "Адрес иконка",
                        className: "h-[15px] w-[15px] object-contain"
                    }), y.jsx("span", {
                        className: "ml-1 text-[14px] text-white",
                        children: "г.Актау 2 мкр б/ц Сункар 723 кабинет"
                    })]
                })]
            })
        })
    })
}
function eu({className: e}) {
    return y.jsx("svg", {
        height: "16px",
        width: "16px",
        version: "1.1",
        id: "Capa_1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 185.343 185.343",
        "xml:space": "preserve",
        className: e,
        children: y.jsx("g", {
            children: y.jsx("g", {
                children: y.jsx("path", {
                    className: "fill-red-500",
                    d: `M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175\r
           l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934\r
           c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z`
                })
            })
        })
    })
}
const Sk = {
    "1C": [{
        category: "Администрирование 1С",
        services: ["Установка платформы 1с предприятие", "Активация лицензий", "Перенос лицензий", "Перенос файловых баз", "Установка сервера 1с"]
    }],
    IT: [{
        category: "Администрирование серверов",
        services: ["Установка windows server", "Установка ролей", "Мониторинг производительности", "Мониторинг свободного места на дисках", "Миграция серверов на облачные сервисы", "Запуск серверов на платформе vmware"]
    }, {
        category: "Администрирование СУБД SQL",
        services: ["Cоздание баз", "Резервное копирование баз", "Перемещения баз", "Восстановление / поддержание работоспособности баз"]
    }, {
        category: "Администрирование сети",
        services: ["Настройка роутеров", "Настройка маршрутизации", "Настройка vpn тунелей"]
    }, {
        category: "Общие вопросы",
        services: ["Установка\\обновление СОНО", "Установка банк клиентов", "Работа с оргтехникой", "Решение любых проблем с MS Windows", "Установка програмных фискализаторов webkassa, NFD", "Работа с торговым оборудованием", "Принтеры чеков, принтеры этикеток, сканеры штрих кодов, прайсчекеры,весы"]
    }, {
        category: "Администрирование 1С",
        services: ["Установка платформы 1с предприятие", "Активация лицензий", "Перенос лицензий", "Перенос файловых баз", "Установка сервера 1с"]
    }],
    Бух: [{
        category: "Учет и обработка товаров и услуг",
        services: ["Разноска поступления товаров и услуг", "Сверка с поступившими ЭСФ", "Реализация товаров и услуг", "Выставление ЭСФ с контролем срока выписки"]
    }, {
        category: "Финансовые операции и документы",
        services: ["Формирование счетов на оплату покупателям", "Проведение инвентаризации с результатами в 1С", "Акты сверки взаиморасчетов с поставщиками и покупателями"]
    }, {
        category: "Управление финансами",
        services: ["Учет и контроль Кассы (пробивка чеков)", "Ведение кассовой книги", "Учет и контроль банковских операций", "Разноска выписок, создание платежных поручений, валютные переводы"]
    }, {
        category: "Налоги и отчетность",
        services: ["Отслеживание оборотов по компаниям для расчетов НДС, КПН", "Начисление заработной платы и выплата ее на карточки/расходными ордерами", "Расчет налогов с заработной платы сотрудников", "Авансовые отчеты", "Подача налоговых деклараций по импорту товара", "Учет, расчет и сдача налоговых деклараций и своевременная уплата по ним", "Ответы на уведомления налоговых органов"]
    }, {
        category: "Отчетность и анализ",
        services: ["Составление финансового отчета для Банка по предоставлению кредита", "Составление квартального/годового финансового отчета", "Финансовый анализ компании", "Хранение документов и их архивирование с гарантией полного соблюдения бухгалтерской тайны", "Проверка договоров ежедневно"]
    }]
};
function $a({label: e, isActive: t, onClick: n}) {
    return y.jsx("button", {
        onClick: n,
        className: `rounded-lg px-4 py-2 font-geosib ${t ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"} text-2xl transition duration-150  ease-in hover:bg-red-500 hover:text-white focus:outline-none`,
        children: e
    })
}
function Tk({name: e, active: t=!1, onClick: n}) {
    return t ? y.jsxs("div", {
        onClick: n,
        className: "group flex cursor-pointer items-center justify-between border border-b bg-white bg-yellow-100 px-5 py-6 transition duration-150 ease-in ease-out hover:bg-yellow-100",
        children: [y.jsx("p", {
            className: "text-[17px] font-bold text-red-500 transition duration-150 ease-out group-hover:text-red-500",
            children: e
        }), y.jsx(eu, {
            className: "rotate-90"
        })]
    }) : y.jsxs("div", {
        onClick: n,
        className: "group flex cursor-pointer items-center justify-between border border-b bg-white px-5 py-6 transition duration-150 ease-in ease-out hover:bg-yellow-100",
        children: [y.jsx("p", {
            className: "text-[17px] font-bold transition duration-150 ease-out group-hover:text-red-500",
            children: e
        }), y.jsx(eu, {})]
    })
}
function Ek({name: e}) {
    return y.jsxs("div", {
        className: "group relative flex items-center justify-center border bg-white p-10 text-center text-[18px] font-bold transition duration-150 ease-in ease-out hover:border-red-500 hover:bg-yellow-100 hover:text-red-500",
        children: [e, y.jsx("a", {
            href: `https://wa.me/77711070225/?text=Здравствуйте, хочу заказать услугу ${encodeURIComponent(e)}`,
            className: "absolute bottom-0 right-0 p-4 text-black opacity-0 transition duration-150 ease-in-out hover:scale-110 hover:transform group-hover:opacity-100",
            children: y.jsx(eu, {})
        })]
    })
}
function Ck({selectedPage: e}) {
    const [t,n] = V.useState("1C")
      , [r,i] = V.useState(0)
      , s = Sk[t];
    function o(l) {
        i(0),
        n(l)
    }
    return V.useEffect( () => {
        e === "услугиit" && n("IT"),
        e === "услуги1c" && n("1C"),
        e === "услугибухаутсорсинга" && n("Бух")
    }
    , [e]),
    y.jsxs(ye.section, {
        id: "услуги",
        className: "container pt-10 xs:px-4",
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: !0
        },
        transition: {
            duration: .5
        },
        variants: {
            visible: {
                opacity: 1,
                y: 0
            },
            hidden: {
                opacity: 0,
                y: 50
            }
        },
        children: [y.jsx("h2", {
            id: "услуги",
            className: "font-geosib text-4xl",
            children: "Наши услуги"
        }), y.jsxs("div", {
            className: "mt-10 flex items-center gap-5",
            children: [y.jsx($a, {
                label: "Услуги 1C",
                isActive: t === "1C",
                onClick: () => o("1C")
            }), y.jsx($a, {
                label: "Услуги IT",
                isActive: t === "IT",
                onClick: () => o("IT")
            }), y.jsx($a, {
                label: "Услуги Бухаутсорсинга",
                isActive: t === "Бух",
                onClick: () => o("Бух")
            })]
        }), y.jsxs("div", {
            className: "mt-10 grid grid-cols-1 gap-3 sm:grid-cols-4",
            children: [y.jsx("div", {
                className: " sm:col-span-2 md:col-span-1",
                children: s.map( (l, a) => y.jsx(Tk, {
                    name: l.category,
                    active: r === a,
                    onClick: () => i(a)
                }, a))
            }), y.jsx("div", {
                className: "col-span-2 grid grid-cols-2 content-start gap-3 md:col-span-3 md:grid-cols-4",
                children: s[r].services.map( (l, a) => y.jsx(Ek, {
                    name: l
                }, a))
            })]
        })]
    })
}
const Pk = {
    Общее: [{
        category: "Общий магазин",
        services: [{
            title: "Моноблоки",
            src: "./monoblock.png"
        }, {
            title: "Принтеры чеков",
            src: "./check.png"
        }, {
            title: "Принтеры этикеток",
            src: "./etc.png"
        }, {
            title: "Сканеры штрих кода",
            src: "./scanner.png"
        }, {
            title: "Денежные ящики",
            src: "./cashbox.png"
        }, {
            title: "Держатели сканера",
            src: "./holder.png"
        }, {
            title: "Весы",
            src: "./weight.png"
        }, {
            title: "Терминалы сбора данных",
            src: "./terminal.png"
        }, {
            title: "Термоэтикетки",
            src: "./termo.png"
        }, {
            title: "Термолента",
            src: "./termolenta.png"
        }]
    }]
};
function kk({title: e, src: t}) {
    return y.jsxs("div", {
        className: "group relative flex flex-col items-center justify-center gap-3 border bg-white p-10  text-center text-[18px] transition duration-150 ease-in-out hover:border-red-500 hover:text-red-500",
        children: [y.jsx("img", {
            src: t,
            alt: e,
            className: "h-[150px] w-[150px] object-contain"
        }), y.jsx("p", {
            className: "mb-3 font-bold",
            children: e
        }), y.jsx("a", {
            href: `https://wa.me/77711070225/?text=Здравствуйте, хочу заказать оборудование ${encodeURIComponent(e)}`,
            className: "absolute bottom-0 left-0 right-0 bg-yellow-500 px-4 py-2 text-black opacity-0 transition duration-150 ease-in-out group-hover:opacity-100",
            children: "Заказать"
        })]
    })
}
function bk() {
    const [e,t] = V.useState("Общее")
      , [n,r] = V.useState(0)
      , i = Pk[e];
    return y.jsxs(ye.section, {
        id: "оборудование",
        className: "container pt-20 xs:px-4",
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: !0
        },
        transition: {
            duration: .5
        },
        variants: {
            visible: {
                opacity: 1,
                y: 0
            },
            hidden: {
                opacity: 0,
                y: 50
            }
        },
        children: [y.jsx("h2", {
            className: "text-center font-geosib text-4xl",
            children: "Оборудование"
        }), y.jsx("div", {
            className: "mt-10 grid grid-cols-1 gap-3 sm:grid-cols-4",
            children: y.jsx("div", {
                className: "col-span-4 grid grid-cols-2 content-start gap-3 md:grid-cols-4",
                children: i[n].services.map( (s, o) => y.jsx(kk, {
                    title: s.title,
                    src: s.src
                }, o))
            })
        })]
    })
}
function Lk() {
    const [e,t] = V.useState("главная");
    return y.jsxs("div", {
        className: "app bg-white",
        children: [y.jsx(sg, {
            selectedPage: e,
            setSelectedPage: t
        }), y.jsxs("main", {
            className: "pt-[82px]",
            children: [y.jsx(hk, {}), y.jsx(mk, {}), y.jsx(Ck, {
                selectedPage: e
            }), y.jsx(bk, {}), y.jsx(xk, {}), y.jsx(yk, {}), y.jsx(wk, {}), y.jsx(Yv, {})]
        })]
    })
}
Ha.createRoot(document.getElementById("root")).render(y.jsx(se.StrictMode, {
    children: y.jsx(Lk, {})
}));
