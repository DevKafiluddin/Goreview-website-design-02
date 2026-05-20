var Oh = r => {
    throw TypeError(r)
}
;
var xu = (r, n, s) => n.has(r) || Oh("Cannot " + s);
var b = (r, n, s) => (xu(r, n, "read from private field"),
s ? s.call(r) : n.get(r))
  , ue = (r, n, s) => n.has(r) ? Oh("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(r) : n.set(r, s)
  , G = (r, n, s, o) => (xu(r, n, "write to private field"),
o ? o.call(r, s) : n.set(r, s),
s)
  , xe = (r, n, s) => (xu(r, n, "access private method"),
s);
var Wo = (r, n, s, o) => ({
    set _(a) {
        G(r, n, a, s)
    },
    get _() {
        return b(r, n, o)
    }
});
function Qv(r, n) {
    for (var s = 0; s < n.length; s++) {
        const o = n[s];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const a in o)
                if (a !== "default" && !(a in r)) {
                    const c = Object.getOwnPropertyDescriptor(o, a);
                    c && Object.defineProperty(r, a, c.get ? c : {
                        enumerable: !0,
                        get: () => o[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        o(a);
    new MutationObserver(a => {
        for (const c of a)
            if (c.type === "childList")
                for (const f of c.addedNodes)
                    f.tagName === "LINK" && f.rel === "modulepreload" && o(f)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(a) {
        const c = {};
        return a.integrity && (c.integrity = a.integrity),
        a.referrerPolicy && (c.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? c.credentials = "include" : a.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin",
        c
    }
    function o(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const c = s(a);
        fetch(a.href, c)
    }
}
)();
function um(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var Su = {
    exports: {}
}
  , ci = {}
  , ku = {
    exports: {}
}
  , we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ah;
function Wv() {
    if (Ah)
        return we;
    Ah = 1;
    var r = Symbol.for("react.element")
      , n = Symbol.for("react.portal")
      , s = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , a = Symbol.for("react.profiler")
      , c = Symbol.for("react.provider")
      , f = Symbol.for("react.context")
      , h = Symbol.for("react.forward_ref")
      , m = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , y = Symbol.for("react.lazy")
      , x = Symbol.iterator;
    function N(R) {
        return R === null || typeof R != "object" ? null : (R = x && R[x] || R["@@iterator"],
        typeof R == "function" ? R : null)
    }
    var A = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , E = Object.assign
      , _ = {};
    function S(R, I, he) {
        this.props = R,
        this.context = I,
        this.refs = _,
        this.updater = he || A
    }
    S.prototype.isReactComponent = {},
    S.prototype.setState = function(R, I) {
        if (typeof R != "object" && typeof R != "function" && R != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, R, I, "setState")
    }
    ,
    S.prototype.forceUpdate = function(R) {
        this.updater.enqueueForceUpdate(this, R, "forceUpdate")
    }
    ;
    function D() {}
    D.prototype = S.prototype;
    function Q(R, I, he) {
        this.props = R,
        this.context = I,
        this.refs = _,
        this.updater = he || A
    }
    var B = Q.prototype = new D;
    B.constructor = Q,
    E(B, S.prototype),
    B.isPureReactComponent = !0;
    var M = Array.isArray
      , W = Object.prototype.hasOwnProperty
      , X = {
        current: null
    }
      , se = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function F(R, I, he) {
        var pe, ae = {}, ce = null, Te = null;
        if (I != null)
            for (pe in I.ref !== void 0 && (Te = I.ref),
            I.key !== void 0 && (ce = "" + I.key),
            I)
                W.call(I, pe) && !se.hasOwnProperty(pe) && (ae[pe] = I[pe]);
        var Ce = arguments.length - 2;
        if (Ce === 1)
            ae.children = he;
        else if (1 < Ce) {
            for (var me = Array(Ce), ot = 0; ot < Ce; ot++)
                me[ot] = arguments[ot + 2];
            ae.children = me
        }
        if (R && R.defaultProps)
            for (pe in Ce = R.defaultProps,
            Ce)
                ae[pe] === void 0 && (ae[pe] = Ce[pe]);
        return {
            $$typeof: r,
            type: R,
            key: ce,
            ref: Te,
            props: ae,
            _owner: X.current
        }
    }
    function le(R, I) {
        return {
            $$typeof: r,
            type: R.type,
            key: I,
            ref: R.ref,
            props: R.props,
            _owner: R._owner
        }
    }
    function be(R) {
        return typeof R == "object" && R !== null && R.$$typeof === r
    }
    function ge(R) {
        var I = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + R.replace(/[=:]/g, function(he) {
            return I[he]
        })
    }
    var Ne = /\/+/g;
    function Ie(R, I) {
        return typeof R == "object" && R !== null && R.key != null ? ge("" + R.key) : I.toString(36)
    }
    function Ae(R, I, he, pe, ae) {
        var ce = typeof R;
        (ce === "undefined" || ce === "boolean") && (R = null);
        var Te = !1;
        if (R === null)
            Te = !0;
        else
            switch (ce) {
            case "string":
            case "number":
                Te = !0;
                break;
            case "object":
                switch (R.$$typeof) {
                case r:
                case n:
                    Te = !0
                }
            }
        if (Te)
            return Te = R,
            ae = ae(Te),
            R = pe === "" ? "." + Ie(Te, 0) : pe,
            M(ae) ? (he = "",
            R != null && (he = R.replace(Ne, "$&/") + "/"),
            Ae(ae, I, he, "", function(ot) {
                return ot
            })) : ae != null && (be(ae) && (ae = le(ae, he + (!ae.key || Te && Te.key === ae.key ? "" : ("" + ae.key).replace(Ne, "$&/") + "/") + R)),
            I.push(ae)),
            1;
        if (Te = 0,
        pe = pe === "" ? "." : pe + ":",
        M(R))
            for (var Ce = 0; Ce < R.length; Ce++) {
                ce = R[Ce];
                var me = pe + Ie(ce, Ce);
                Te += Ae(ce, I, he, me, ae)
            }
        else if (me = N(R),
        typeof me == "function")
            for (R = me.call(R),
            Ce = 0; !(ce = R.next()).done; )
                ce = ce.value,
                me = pe + Ie(ce, Ce++),
                Te += Ae(ce, I, he, me, ae);
        else if (ce === "object")
            throw I = String(R),
            Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
        return Te
    }
    function De(R, I, he) {
        if (R == null)
            return R;
        var pe = []
          , ae = 0;
        return Ae(R, pe, "", "", function(ce) {
            return I.call(he, ce, ae++)
        }),
        pe
    }
    function ye(R) {
        if (R._status === -1) {
            var I = R._result;
            I = I(),
            I.then(function(he) {
                (R._status === 0 || R._status === -1) && (R._status = 1,
                R._result = he)
            }, function(he) {
                (R._status === 0 || R._status === -1) && (R._status = 2,
                R._result = he)
            }),
            R._status === -1 && (R._status = 0,
            R._result = I)
        }
        if (R._status === 1)
            return R._result.default;
        throw R._result
    }
    var _e = {
        current: null
    }
      , H = {
        transition: null
    }
      , re = {
        ReactCurrentDispatcher: _e,
        ReactCurrentBatchConfig: H,
        ReactCurrentOwner: X
    };
    function L() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return we.Children = {
        map: De,
        forEach: function(R, I, he) {
            De(R, function() {
                I.apply(this, arguments)
            }, he)
        },
        count: function(R) {
            var I = 0;
            return De(R, function() {
                I++
            }),
            I
        },
        toArray: function(R) {
            return De(R, function(I) {
                return I
            }) || []
        },
        only: function(R) {
            if (!be(R))
                throw Error("React.Children.only expected to receive a single React element child.");
            return R
        }
    },
    we.Component = S,
    we.Fragment = s,
    we.Profiler = a,
    we.PureComponent = Q,
    we.StrictMode = o,
    we.Suspense = m,
    we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re,
    we.act = L,
    we.cloneElement = function(R, I, he) {
        if (R == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
        var pe = E({}, R.props)
          , ae = R.key
          , ce = R.ref
          , Te = R._owner;
        if (I != null) {
            if (I.ref !== void 0 && (ce = I.ref,
            Te = X.current),
            I.key !== void 0 && (ae = "" + I.key),
            R.type && R.type.defaultProps)
                var Ce = R.type.defaultProps;
            for (me in I)
                W.call(I, me) && !se.hasOwnProperty(me) && (pe[me] = I[me] === void 0 && Ce !== void 0 ? Ce[me] : I[me])
        }
        var me = arguments.length - 2;
        if (me === 1)
            pe.children = he;
        else if (1 < me) {
            Ce = Array(me);
            for (var ot = 0; ot < me; ot++)
                Ce[ot] = arguments[ot + 2];
            pe.children = Ce
        }
        return {
            $$typeof: r,
            type: R.type,
            key: ae,
            ref: ce,
            props: pe,
            _owner: Te
        }
    }
    ,
    we.createContext = function(R) {
        return R = {
            $$typeof: f,
            _currentValue: R,
            _currentValue2: R,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        R.Provider = {
            $$typeof: c,
            _context: R
        },
        R.Consumer = R
    }
    ,
    we.createElement = F,
    we.createFactory = function(R) {
        var I = F.bind(null, R);
        return I.type = R,
        I
    }
    ,
    we.createRef = function() {
        return {
            current: null
        }
    }
    ,
    we.forwardRef = function(R) {
        return {
            $$typeof: h,
            render: R
        }
    }
    ,
    we.isValidElement = be,
    we.lazy = function(R) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: R
            },
            _init: ye
        }
    }
    ,
    we.memo = function(R, I) {
        return {
            $$typeof: g,
            type: R,
            compare: I === void 0 ? null : I
        }
    }
    ,
    we.startTransition = function(R) {
        var I = H.transition;
        H.transition = {};
        try {
            R()
        } finally {
            H.transition = I
        }
    }
    ,
    we.unstable_act = L,
    we.useCallback = function(R, I) {
        return _e.current.useCallback(R, I)
    }
    ,
    we.useContext = function(R) {
        return _e.current.useContext(R)
    }
    ,
    we.useDebugValue = function() {}
    ,
    we.useDeferredValue = function(R) {
        return _e.current.useDeferredValue(R)
    }
    ,
    we.useEffect = function(R, I) {
        return _e.current.useEffect(R, I)
    }
    ,
    we.useId = function() {
        return _e.current.useId()
    }
    ,
    we.useImperativeHandle = function(R, I, he) {
        return _e.current.useImperativeHandle(R, I, he)
    }
    ,
    we.useInsertionEffect = function(R, I) {
        return _e.current.useInsertionEffect(R, I)
    }
    ,
    we.useLayoutEffect = function(R, I) {
        return _e.current.useLayoutEffect(R, I)
    }
    ,
    we.useMemo = function(R, I) {
        return _e.current.useMemo(R, I)
    }
    ,
    we.useReducer = function(R, I, he) {
        return _e.current.useReducer(R, I, he)
    }
    ,
    we.useRef = function(R) {
        return _e.current.useRef(R)
    }
    ,
    we.useState = function(R) {
        return _e.current.useState(R)
    }
    ,
    we.useSyncExternalStore = function(R, I, he) {
        return _e.current.useSyncExternalStore(R, I, he)
    }
    ,
    we.useTransition = function() {
        return _e.current.useTransition()
    }
    ,
    we.version = "18.3.1",
    we
}
var jh;
function mc() {
    return jh || (jh = 1,
    ku.exports = Wv()),
    ku.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lh;
function Kv() {
    if (Lh)
        return ci;
    Lh = 1;
    var r = mc()
      , n = Symbol.for("react.element")
      , s = Symbol.for("react.fragment")
      , o = Object.prototype.hasOwnProperty
      , a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , c = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function f(h, m, g) {
        var y, x = {}, N = null, A = null;
        g !== void 0 && (N = "" + g),
        m.key !== void 0 && (N = "" + m.key),
        m.ref !== void 0 && (A = m.ref);
        for (y in m)
            o.call(m, y) && !c.hasOwnProperty(y) && (x[y] = m[y]);
        if (h && h.defaultProps)
            for (y in m = h.defaultProps,
            m)
                x[y] === void 0 && (x[y] = m[y]);
        return {
            $$typeof: n,
            type: h,
            key: N,
            ref: A,
            props: x,
            _owner: a.current
        }
    }
    return ci.Fragment = s,
    ci.jsx = f,
    ci.jsxs = f,
    ci
}
var Ih;
function Gv() {
    return Ih || (Ih = 1,
    Su.exports = Kv()),
    Su.exports
}
var v = Gv()
  , U = mc();
const Yv = um(U)
  , cm = Qv({
    __proto__: null,
    default: Yv
}, [U]);
var Ko = {}
  , bu = {
    exports: {}
}
  , St = {}
  , _u = {
    exports: {}
}
  , Eu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dh;
function Xv() {
    return Dh || (Dh = 1,
    (function(r) {
        function n(H, re) {
            var L = H.length;
            H.push(re);
            e: for (; 0 < L; ) {
                var R = L - 1 >>> 1
                  , I = H[R];
                if (0 < a(I, re))
                    H[R] = re,
                    H[L] = I,
                    L = R;
                else
                    break e
            }
        }
        function s(H) {
            return H.length === 0 ? null : H[0]
        }
        function o(H) {
            if (H.length === 0)
                return null;
            var re = H[0]
              , L = H.pop();
            if (L !== re) {
                H[0] = L;
                e: for (var R = 0, I = H.length, he = I >>> 1; R < he; ) {
                    var pe = 2 * (R + 1) - 1
                      , ae = H[pe]
                      , ce = pe + 1
                      , Te = H[ce];
                    if (0 > a(ae, L))
                        ce < I && 0 > a(Te, ae) ? (H[R] = Te,
                        H[ce] = L,
                        R = ce) : (H[R] = ae,
                        H[pe] = L,
                        R = pe);
                    else if (ce < I && 0 > a(Te, L))
                        H[R] = Te,
                        H[ce] = L,
                        R = ce;
                    else
                        break e
                }
            }
            return re
        }
        function a(H, re) {
            var L = H.sortIndex - re.sortIndex;
            return L !== 0 ? L : H.id - re.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var c = performance;
            r.unstable_now = function() {
                return c.now()
            }
        } else {
            var f = Date
              , h = f.now();
            r.unstable_now = function() {
                return f.now() - h
            }
        }
        var m = []
          , g = []
          , y = 1
          , x = null
          , N = 3
          , A = !1
          , E = !1
          , _ = !1
          , S = typeof setTimeout == "function" ? setTimeout : null
          , D = typeof clearTimeout == "function" ? clearTimeout : null
          , Q = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function B(H) {
            for (var re = s(g); re !== null; ) {
                if (re.callback === null)
                    o(g);
                else if (re.startTime <= H)
                    o(g),
                    re.sortIndex = re.expirationTime,
                    n(m, re);
                else
                    break;
                re = s(g)
            }
        }
        function M(H) {
            if (_ = !1,
            B(H),
            !E)
                if (s(m) !== null)
                    E = !0,
                    ye(W);
                else {
                    var re = s(g);
                    re !== null && _e(M, re.startTime - H)
                }
        }
        function W(H, re) {
            E = !1,
            _ && (_ = !1,
            D(F),
            F = -1),
            A = !0;
            var L = N;
            try {
                for (B(re),
                x = s(m); x !== null && (!(x.expirationTime > re) || H && !ge()); ) {
                    var R = x.callback;
                    if (typeof R == "function") {
                        x.callback = null,
                        N = x.priorityLevel;
                        var I = R(x.expirationTime <= re);
                        re = r.unstable_now(),
                        typeof I == "function" ? x.callback = I : x === s(m) && o(m),
                        B(re)
                    } else
                        o(m);
                    x = s(m)
                }
                if (x !== null)
                    var he = !0;
                else {
                    var pe = s(g);
                    pe !== null && _e(M, pe.startTime - re),
                    he = !1
                }
                return he
            } finally {
                x = null,
                N = L,
                A = !1
            }
        }
        var X = !1
          , se = null
          , F = -1
          , le = 5
          , be = -1;
        function ge() {
            return !(r.unstable_now() - be < le)
        }
        function Ne() {
            if (se !== null) {
                var H = r.unstable_now();
                be = H;
                var re = !0;
                try {
                    re = se(!0, H)
                } finally {
                    re ? Ie() : (X = !1,
                    se = null)
                }
            } else
                X = !1
        }
        var Ie;
        if (typeof Q == "function")
            Ie = function() {
                Q(Ne)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Ae = new MessageChannel
              , De = Ae.port2;
            Ae.port1.onmessage = Ne,
            Ie = function() {
                De.postMessage(null)
            }
        } else
            Ie = function() {
                S(Ne, 0)
            }
            ;
        function ye(H) {
            se = H,
            X || (X = !0,
            Ie())
        }
        function _e(H, re) {
            F = S(function() {
                H(r.unstable_now())
            }, re)
        }
        r.unstable_IdlePriority = 5,
        r.unstable_ImmediatePriority = 1,
        r.unstable_LowPriority = 4,
        r.unstable_NormalPriority = 3,
        r.unstable_Profiling = null,
        r.unstable_UserBlockingPriority = 2,
        r.unstable_cancelCallback = function(H) {
            H.callback = null
        }
        ,
        r.unstable_continueExecution = function() {
            E || A || (E = !0,
            ye(W))
        }
        ,
        r.unstable_forceFrameRate = function(H) {
            0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : le = 0 < H ? Math.floor(1e3 / H) : 5
        }
        ,
        r.unstable_getCurrentPriorityLevel = function() {
            return N
        }
        ,
        r.unstable_getFirstCallbackNode = function() {
            return s(m)
        }
        ,
        r.unstable_next = function(H) {
            switch (N) {
            case 1:
            case 2:
            case 3:
                var re = 3;
                break;
            default:
                re = N
            }
            var L = N;
            N = re;
            try {
                return H()
            } finally {
                N = L
            }
        }
        ,
        r.unstable_pauseExecution = function() {}
        ,
        r.unstable_requestPaint = function() {}
        ,
        r.unstable_runWithPriority = function(H, re) {
            switch (H) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                H = 3
            }
            var L = N;
            N = H;
            try {
                return re()
            } finally {
                N = L
            }
        }
        ,
        r.unstable_scheduleCallback = function(H, re, L) {
            var R = r.unstable_now();
            switch (typeof L == "object" && L !== null ? (L = L.delay,
            L = typeof L == "number" && 0 < L ? R + L : R) : L = R,
            H) {
            case 1:
                var I = -1;
                break;
            case 2:
                I = 250;
                break;
            case 5:
                I = 1073741823;
                break;
            case 4:
                I = 1e4;
                break;
            default:
                I = 5e3
            }
            return I = L + I,
            H = {
                id: y++,
                callback: re,
                priorityLevel: H,
                startTime: L,
                expirationTime: I,
                sortIndex: -1
            },
            L > R ? (H.sortIndex = L,
            n(g, H),
            s(m) === null && H === s(g) && (_ ? (D(F),
            F = -1) : _ = !0,
            _e(M, L - R))) : (H.sortIndex = I,
            n(m, H),
            E || A || (E = !0,
            ye(W))),
            H
        }
        ,
        r.unstable_shouldYield = ge,
        r.unstable_wrapCallback = function(H) {
            var re = N;
            return function() {
                var L = N;
                N = re;
                try {
                    return H.apply(this, arguments)
                } finally {
                    N = L
                }
            }
        }
    }
    )(Eu)),
    Eu
}
var Mh;
function Jv() {
    return Mh || (Mh = 1,
    _u.exports = Xv()),
    _u.exports
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
var Fh;
function Zv() {
    if (Fh)
        return St;
    Fh = 1;
    var r = mc()
      , n = Jv();
    function s(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++)
            t += "&args[]=" + encodeURIComponent(arguments[i]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var o = new Set
      , a = {};
    function c(e, t) {
        f(e, t),
        f(e + "Capture", t)
    }
    function f(e, t) {
        for (a[e] = t,
        e = 0; e < t.length; e++)
            o.add(t[e])
    }
    var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , m = Object.prototype.hasOwnProperty
      , g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , y = {}
      , x = {};
    function N(e) {
        return m.call(x, e) ? !0 : m.call(y, e) ? !1 : g.test(e) ? x[e] = !0 : (y[e] = !0,
        !1)
    }
    function A(e, t, i, l) {
        if (i !== null && i.type === 0)
            return !1;
        switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return l ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
            e !== "data-" && e !== "aria-");
        default:
            return !1
        }
    }
    function E(e, t, i, l) {
        if (t === null || typeof t > "u" || A(e, t, i, l))
            return !0;
        if (l)
            return !1;
        if (i !== null)
            switch (i.type) {
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
    function _(e, t, i, l, u, d, p) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = l,
        this.attributeNamespace = u,
        this.mustUseProperty = i,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = d,
        this.removeEmptyString = p
    }
    var S = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        S[e] = new _(e,0,!1,e,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
        var t = e[0];
        S[t] = new _(t,1,!1,e[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        S[e] = new _(e,2,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        S[e] = new _(e,2,!1,e,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        S[e] = new _(e,3,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        S[e] = new _(e,3,!0,e,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(e) {
        S[e] = new _(e,4,!1,e,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(e) {
        S[e] = new _(e,6,!1,e,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(e) {
        S[e] = new _(e,5,!1,e.toLowerCase(),null,!1,!1)
    });
    var D = /[\-:]([a-z])/g;
    function Q(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(D, Q);
        S[t] = new _(t,1,!1,e,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(D, Q);
        S[t] = new _(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(D, Q);
        S[t] = new _(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        S[e] = new _(e,1,!1,e.toLowerCase(),null,!1,!1)
    }),
    S.xlinkHref = new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(e) {
        S[e] = new _(e,1,!1,e.toLowerCase(),null,!0,!0)
    });
    function B(e, t, i, l) {
        var u = S.hasOwnProperty(t) ? S[t] : null;
        (u !== null ? u.type !== 0 : l || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (E(t, i, u, l) && (i = null),
        l || u === null ? N(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : u.mustUseProperty ? e[u.propertyName] = i === null ? u.type === 3 ? !1 : "" : i : (t = u.attributeName,
        l = u.attributeNamespace,
        i === null ? e.removeAttribute(t) : (u = u.type,
        i = u === 3 || u === 4 && i === !0 ? "" : "" + i,
        l ? e.setAttributeNS(l, t, i) : e.setAttribute(t, i))))
    }
    var M = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , W = Symbol.for("react.element")
      , X = Symbol.for("react.portal")
      , se = Symbol.for("react.fragment")
      , F = Symbol.for("react.strict_mode")
      , le = Symbol.for("react.profiler")
      , be = Symbol.for("react.provider")
      , ge = Symbol.for("react.context")
      , Ne = Symbol.for("react.forward_ref")
      , Ie = Symbol.for("react.suspense")
      , Ae = Symbol.for("react.suspense_list")
      , De = Symbol.for("react.memo")
      , ye = Symbol.for("react.lazy")
      , _e = Symbol.for("react.offscreen")
      , H = Symbol.iterator;
    function re(e) {
        return e === null || typeof e != "object" ? null : (e = H && e[H] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var L = Object.assign, R;
    function I(e) {
        if (R === void 0)
            try {
                throw Error()
            } catch (i) {
                var t = i.stack.trim().match(/\n( *(at )?)/);
                R = t && t[1] || ""
            }
        return `
` + R + e
    }
    var he = !1;
    function pe(e, t) {
        if (!e || he)
            return "";
        he = !0;
        var i = Error.prepareStackTrace;
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
                    } catch (O) {
                        var l = O
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (O) {
                        l = O
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (O) {
                    l = O
                }
                e()
            }
        } catch (O) {
            if (O && l && typeof O.stack == "string") {
                for (var u = O.stack.split(`
`), d = l.stack.split(`
`), p = u.length - 1, w = d.length - 1; 1 <= p && 0 <= w && u[p] !== d[w]; )
                    w--;
                for (; 1 <= p && 0 <= w; p--,
                w--)
                    if (u[p] !== d[w]) {
                        if (p !== 1 || w !== 1)
                            do
                                if (p--,
                                w--,
                                0 > w || u[p] !== d[w]) {
                                    var k = `
` + u[p].replace(" at new ", " at ");
                                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)),
                                    k
                                }
                            while (1 <= p && 0 <= w);
                        break
                    }
            }
        } finally {
            he = !1,
            Error.prepareStackTrace = i
        }
        return (e = e ? e.displayName || e.name : "") ? I(e) : ""
    }
    function ae(e) {
        switch (e.tag) {
        case 5:
            return I(e.type);
        case 16:
            return I("Lazy");
        case 13:
            return I("Suspense");
        case 19:
            return I("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = pe(e.type, !1),
            e;
        case 11:
            return e = pe(e.type.render, !1),
            e;
        case 1:
            return e = pe(e.type, !0),
            e;
        default:
            return ""
        }
    }
    function ce(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case se:
            return "Fragment";
        case X:
            return "Portal";
        case le:
            return "Profiler";
        case F:
            return "StrictMode";
        case Ie:
            return "Suspense";
        case Ae:
            return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case ge:
                return (e.displayName || "Context") + ".Consumer";
            case be:
                return (e._context.displayName || "Context") + ".Provider";
            case Ne:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case De:
                return t = e.displayName || null,
                t !== null ? t : ce(e.type) || "Memo";
            case ye:
                t = e._payload,
                e = e._init;
                try {
                    return ce(e(t))
                } catch {}
            }
        return null
    }
    function Te(e) {
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
            return ce(t);
        case 8:
            return t === F ? "StrictMode" : "Mode";
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
    function Ce(e) {
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
    function me(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function ot(e) {
        var t = me(e) ? "checked" : "value"
          , i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , l = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
            var u = i.get
              , d = i.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(p) {
                    l = "" + p,
                    d.call(this, p)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: i.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(p) {
                    l = "" + p
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function cn(e) {
        e._valueTracker || (e._valueTracker = ot(e))
    }
    function lr(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var i = t.getValue()
          , l = "";
        return e && (l = me(e) ? e.checked ? "true" : "false" : e.value),
        e = l,
        e !== i ? (t.setValue(e),
        !0) : !1
    }
    function _n(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function En(e, t) {
        var i = t.checked;
        return L({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: i ?? e._wrapperState.initialChecked
        })
    }
    function Mc(e, t) {
        var i = t.defaultValue == null ? "" : t.defaultValue
          , l = t.checked != null ? t.checked : t.defaultChecked;
        i = Ce(t.value != null ? t.value : i),
        e._wrapperState = {
            initialChecked: l,
            initialValue: i,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }
    function Fc(e, t) {
        t = t.checked,
        t != null && B(e, "checked", t, !1)
    }
    function Tl(e, t) {
        Fc(e, t);
        var i = Ce(t.value)
          , l = t.type;
        if (i != null)
            l === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
        else if (l === "submit" || l === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? Nl(e, t.type, i) : t.hasOwnProperty("defaultValue") && Nl(e, t.type, Ce(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }
    function Uc(e, t, i) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var l = t.type;
            if (!(l !== "submit" && l !== "reset" || t.value !== void 0 && t.value !== null))
                return;
            t = "" + e._wrapperState.initialValue,
            i || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        i = e.name,
        i !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        i !== "" && (e.name = i)
    }
    function Nl(e, t, i) {
        (t !== "number" || _n(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i))
    }
    var Es = Array.isArray;
    function Mr(e, t, i, l) {
        if (e = e.options,
        t) {
            t = {};
            for (var u = 0; u < i.length; u++)
                t["$" + i[u]] = !0;
            for (i = 0; i < e.length; i++)
                u = t.hasOwnProperty("$" + e[i].value),
                e[i].selected !== u && (e[i].selected = u),
                u && l && (e[i].defaultSelected = !0)
        } else {
            for (i = "" + Ce(i),
            t = null,
            u = 0; u < e.length; u++) {
                if (e[u].value === i) {
                    e[u].selected = !0,
                    l && (e[u].defaultSelected = !0);
                    return
                }
                t !== null || e[u].disabled || (t = e[u])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Pl(e, t) {
        if (t.dangerouslySetInnerHTML != null)
            throw Error(s(91));
        return L({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function zc(e, t) {
        var i = t.value;
        if (i == null) {
            if (i = t.children,
            t = t.defaultValue,
            i != null) {
                if (t != null)
                    throw Error(s(92));
                if (Es(i)) {
                    if (1 < i.length)
                        throw Error(s(93));
                    i = i[0]
                }
                t = i
            }
            t == null && (t = ""),
            i = t
        }
        e._wrapperState = {
            initialValue: Ce(i)
        }
    }
    function Bc(e, t) {
        var i = Ce(t.value)
          , l = Ce(t.defaultValue);
        i != null && (i = "" + i,
        i !== e.value && (e.value = i),
        t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
        l != null && (e.defaultValue = "" + l)
    }
    function $c(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }
    function Vc(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function Ol(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Vc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var Fi, qc = (function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, l, u) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, i, l, u)
            })
        }
        : e
    }
    )(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
            e.innerHTML = t;
        else {
            for (Fi = Fi || document.createElement("div"),
            Fi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Fi.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; )
                e.appendChild(t.firstChild)
        }
    });
    function Cs(e, t) {
        if (t) {
            var i = e.firstChild;
            if (i && i === e.lastChild && i.nodeType === 3) {
                i.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Rs = {
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
      , Yg = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Rs).forEach(function(e) {
        Yg.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
            Rs[t] = Rs[e]
        })
    });
    function Hc(e, t, i) {
        return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || Rs.hasOwnProperty(e) && Rs[e] ? ("" + t).trim() : t + "px"
    }
    function Qc(e, t) {
        e = e.style;
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var l = i.indexOf("--") === 0
                  , u = Hc(i, t[i], l);
                i === "float" && (i = "cssFloat"),
                l ? e.setProperty(i, u) : e[i] = u
            }
    }
    var Xg = L({
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
    function Al(e, t) {
        if (t) {
            if (Xg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw Error(s(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                    throw Error(s(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                    throw Error(s(61))
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(s(62))
        }
    }
    function jl(e, t) {
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
    var Ll = null;
    function Il(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Dl = null
      , Fr = null
      , Ur = null;
    function Wc(e) {
        if (e = Gs(e)) {
            if (typeof Dl != "function")
                throw Error(s(280));
            var t = e.stateNode;
            t && (t = lo(t),
            Dl(e.stateNode, e.type, t))
        }
    }
    function Kc(e) {
        Fr ? Ur ? Ur.push(e) : Ur = [e] : Fr = e
    }
    function Gc() {
        if (Fr) {
            var e = Fr
              , t = Ur;
            if (Ur = Fr = null,
            Wc(e),
            t)
                for (e = 0; e < t.length; e++)
                    Wc(t[e])
        }
    }
    function Yc(e, t) {
        return e(t)
    }
    function Xc() {}
    var Ml = !1;
    function Jc(e, t, i) {
        if (Ml)
            return e(t, i);
        Ml = !0;
        try {
            return Yc(e, t, i)
        } finally {
            Ml = !1,
            (Fr !== null || Ur !== null) && (Xc(),
            Gc())
        }
    }
    function Ts(e, t) {
        var i = e.stateNode;
        if (i === null)
            return null;
        var l = lo(i);
        if (l === null)
            return null;
        i = l[t];
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
            (l = !l.disabled) || (e = e.type,
            l = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !l;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (i && typeof i != "function")
            throw Error(s(231, t, typeof i));
        return i
    }
    var Fl = !1;
    if (h)
        try {
            var Ns = {};
            Object.defineProperty(Ns, "passive", {
                get: function() {
                    Fl = !0
                }
            }),
            window.addEventListener("test", Ns, Ns),
            window.removeEventListener("test", Ns, Ns)
        } catch {
            Fl = !1
        }
    function Jg(e, t, i, l, u, d, p, w, k) {
        var O = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(i, O)
        } catch ($) {
            this.onError($)
        }
    }
    var Ps = !1
      , Ui = null
      , zi = !1
      , Ul = null
      , Zg = {
        onError: function(e) {
            Ps = !0,
            Ui = e
        }
    };
    function ey(e, t, i, l, u, d, p, w, k) {
        Ps = !1,
        Ui = null,
        Jg.apply(Zg, arguments)
    }
    function ty(e, t, i, l, u, d, p, w, k) {
        if (ey.apply(this, arguments),
        Ps) {
            if (Ps) {
                var O = Ui;
                Ps = !1,
                Ui = null
            } else
                throw Error(s(198));
            zi || (zi = !0,
            Ul = O)
        }
    }
    function ar(e) {
        var t = e
          , i = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (i = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? i : null
    }
    function Zc(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function ed(e) {
        if (ar(e) !== e)
            throw Error(s(188))
    }
    function ny(e) {
        var t = e.alternate;
        if (!t) {
            if (t = ar(e),
            t === null)
                throw Error(s(188));
            return t !== e ? null : e
        }
        for (var i = e, l = t; ; ) {
            var u = i.return;
            if (u === null)
                break;
            var d = u.alternate;
            if (d === null) {
                if (l = u.return,
                l !== null) {
                    i = l;
                    continue
                }
                break
            }
            if (u.child === d.child) {
                for (d = u.child; d; ) {
                    if (d === i)
                        return ed(u),
                        e;
                    if (d === l)
                        return ed(u),
                        t;
                    d = d.sibling
                }
                throw Error(s(188))
            }
            if (i.return !== l.return)
                i = u,
                l = d;
            else {
                for (var p = !1, w = u.child; w; ) {
                    if (w === i) {
                        p = !0,
                        i = u,
                        l = d;
                        break
                    }
                    if (w === l) {
                        p = !0,
                        l = u,
                        i = d;
                        break
                    }
                    w = w.sibling
                }
                if (!p) {
                    for (w = d.child; w; ) {
                        if (w === i) {
                            p = !0,
                            i = d,
                            l = u;
                            break
                        }
                        if (w === l) {
                            p = !0,
                            l = d,
                            i = u;
                            break
                        }
                        w = w.sibling
                    }
                    if (!p)
                        throw Error(s(189))
                }
            }
            if (i.alternate !== l)
                throw Error(s(190))
        }
        if (i.tag !== 3)
            throw Error(s(188));
        return i.stateNode.current === i ? e : t
    }
    function td(e) {
        return e = ny(e),
        e !== null ? nd(e) : null
    }
    function nd(e) {
        if (e.tag === 5 || e.tag === 6)
            return e;
        for (e = e.child; e !== null; ) {
            var t = nd(e);
            if (t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var rd = n.unstable_scheduleCallback
      , sd = n.unstable_cancelCallback
      , ry = n.unstable_shouldYield
      , sy = n.unstable_requestPaint
      , qe = n.unstable_now
      , iy = n.unstable_getCurrentPriorityLevel
      , zl = n.unstable_ImmediatePriority
      , id = n.unstable_UserBlockingPriority
      , Bi = n.unstable_NormalPriority
      , oy = n.unstable_LowPriority
      , od = n.unstable_IdlePriority
      , $i = null
      , Zt = null;
    function ly(e) {
        if (Zt && typeof Zt.onCommitFiberRoot == "function")
            try {
                Zt.onCommitFiberRoot($i, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
    }
    var $t = Math.clz32 ? Math.clz32 : cy
      , ay = Math.log
      , uy = Math.LN2;
    function cy(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (ay(e) / uy | 0) | 0
    }
    var Vi = 64
      , qi = 4194304;
    function Os(e) {
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
    function Hi(e, t) {
        var i = e.pendingLanes;
        if (i === 0)
            return 0;
        var l = 0
          , u = e.suspendedLanes
          , d = e.pingedLanes
          , p = i & 268435455;
        if (p !== 0) {
            var w = p & ~u;
            w !== 0 ? l = Os(w) : (d &= p,
            d !== 0 && (l = Os(d)))
        } else
            p = i & ~u,
            p !== 0 ? l = Os(p) : d !== 0 && (l = Os(d));
        if (l === 0)
            return 0;
        if (t !== 0 && t !== l && (t & u) === 0 && (u = l & -l,
        d = t & -t,
        u >= d || u === 16 && (d & 4194240) !== 0))
            return t;
        if ((l & 4) !== 0 && (l |= i & 16),
        t = e.entangledLanes,
        t !== 0)
            for (e = e.entanglements,
            t &= l; 0 < t; )
                i = 31 - $t(t),
                u = 1 << i,
                l |= e[i],
                t &= ~u;
        return l
    }
    function dy(e, t) {
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
    function fy(e, t) {
        for (var i = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes; 0 < d; ) {
            var p = 31 - $t(d)
              , w = 1 << p
              , k = u[p];
            k === -1 ? ((w & i) === 0 || (w & l) !== 0) && (u[p] = dy(w, t)) : k <= t && (e.expiredLanes |= w),
            d &= ~w
        }
    }
    function Bl(e) {
        return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function ld() {
        var e = Vi;
        return Vi <<= 1,
        (Vi & 4194240) === 0 && (Vi = 64),
        e
    }
    function $l(e) {
        for (var t = [], i = 0; 31 > i; i++)
            t.push(e);
        return t
    }
    function As(e, t, i) {
        e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
        e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - $t(t),
        e[t] = i
    }
    function hy(e, t) {
        var i = e.pendingLanes & ~t;
        e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
        var l = e.eventTimes;
        for (e = e.expirationTimes; 0 < i; ) {
            var u = 31 - $t(i)
              , d = 1 << u;
            t[u] = 0,
            l[u] = -1,
            e[u] = -1,
            i &= ~d
        }
    }
    function Vl(e, t) {
        var i = e.entangledLanes |= t;
        for (e = e.entanglements; i; ) {
            var l = 31 - $t(i)
              , u = 1 << l;
            u & t | e[l] & t && (e[l] |= t),
            i &= ~u
        }
    }
    var Oe = 0;
    function ad(e) {
        return e &= -e,
        1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var ud, ql, cd, dd, fd, Hl = !1, Qi = [], Cn = null, Rn = null, Tn = null, js = new Map, Ls = new Map, Nn = [], py = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function hd(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Cn = null;
            break;
        case "dragenter":
        case "dragleave":
            Rn = null;
            break;
        case "mouseover":
        case "mouseout":
            Tn = null;
            break;
        case "pointerover":
        case "pointerout":
            js.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ls.delete(t.pointerId)
        }
    }
    function Is(e, t, i, l, u, d) {
        return e === null || e.nativeEvent !== d ? (e = {
            blockedOn: t,
            domEventName: i,
            eventSystemFlags: l,
            nativeEvent: d,
            targetContainers: [u]
        },
        t !== null && (t = Gs(t),
        t !== null && ql(t)),
        e) : (e.eventSystemFlags |= l,
        t = e.targetContainers,
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e)
    }
    function my(e, t, i, l, u) {
        switch (t) {
        case "focusin":
            return Cn = Is(Cn, e, t, i, l, u),
            !0;
        case "dragenter":
            return Rn = Is(Rn, e, t, i, l, u),
            !0;
        case "mouseover":
            return Tn = Is(Tn, e, t, i, l, u),
            !0;
        case "pointerover":
            var d = u.pointerId;
            return js.set(d, Is(js.get(d) || null, e, t, i, l, u)),
            !0;
        case "gotpointercapture":
            return d = u.pointerId,
            Ls.set(d, Is(Ls.get(d) || null, e, t, i, l, u)),
            !0
        }
        return !1
    }
    function pd(e) {
        var t = ur(e.target);
        if (t !== null) {
            var i = ar(t);
            if (i !== null) {
                if (t = i.tag,
                t === 13) {
                    if (t = Zc(i),
                    t !== null) {
                        e.blockedOn = t,
                        fd(e.priority, function() {
                            cd(i)
                        });
                        return
                    }
                } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Wi(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var i = Wl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (i === null) {
                i = e.nativeEvent;
                var l = new i.constructor(i.type,i);
                Ll = l,
                i.target.dispatchEvent(l),
                Ll = null
            } else
                return t = Gs(i),
                t !== null && ql(t),
                e.blockedOn = i,
                !1;
            t.shift()
        }
        return !0
    }
    function md(e, t, i) {
        Wi(e) && i.delete(t)
    }
    function gy() {
        Hl = !1,
        Cn !== null && Wi(Cn) && (Cn = null),
        Rn !== null && Wi(Rn) && (Rn = null),
        Tn !== null && Wi(Tn) && (Tn = null),
        js.forEach(md),
        Ls.forEach(md)
    }
    function Ds(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Hl || (Hl = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, gy)))
    }
    function Ms(e) {
        function t(u) {
            return Ds(u, e)
        }
        if (0 < Qi.length) {
            Ds(Qi[0], e);
            for (var i = 1; i < Qi.length; i++) {
                var l = Qi[i];
                l.blockedOn === e && (l.blockedOn = null)
            }
        }
        for (Cn !== null && Ds(Cn, e),
        Rn !== null && Ds(Rn, e),
        Tn !== null && Ds(Tn, e),
        js.forEach(t),
        Ls.forEach(t),
        i = 0; i < Nn.length; i++)
            l = Nn[i],
            l.blockedOn === e && (l.blockedOn = null);
        for (; 0 < Nn.length && (i = Nn[0],
        i.blockedOn === null); )
            pd(i),
            i.blockedOn === null && Nn.shift()
    }
    var zr = M.ReactCurrentBatchConfig
      , Ki = !0;
    function yy(e, t, i, l) {
        var u = Oe
          , d = zr.transition;
        zr.transition = null;
        try {
            Oe = 1,
            Ql(e, t, i, l)
        } finally {
            Oe = u,
            zr.transition = d
        }
    }
    function vy(e, t, i, l) {
        var u = Oe
          , d = zr.transition;
        zr.transition = null;
        try {
            Oe = 4,
            Ql(e, t, i, l)
        } finally {
            Oe = u,
            zr.transition = d
        }
    }
    function Ql(e, t, i, l) {
        if (Ki) {
            var u = Wl(e, t, i, l);
            if (u === null)
                ca(e, t, l, Gi, i),
                hd(e, l);
            else if (my(u, e, t, i, l))
                l.stopPropagation();
            else if (hd(e, l),
            t & 4 && -1 < py.indexOf(e)) {
                for (; u !== null; ) {
                    var d = Gs(u);
                    if (d !== null && ud(d),
                    d = Wl(e, t, i, l),
                    d === null && ca(e, t, l, Gi, i),
                    d === u)
                        break;
                    u = d
                }
                u !== null && l.stopPropagation()
            } else
                ca(e, t, l, null, i)
        }
    }
    var Gi = null;
    function Wl(e, t, i, l) {
        if (Gi = null,
        e = Il(l),
        e = ur(e),
        e !== null)
            if (t = ar(e),
            t === null)
                e = null;
            else if (i = t.tag,
            i === 13) {
                if (e = Zc(t),
                e !== null)
                    return e;
                e = null
            } else if (i === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else
                t !== e && (e = null);
        return Gi = e,
        null
    }
    function gd(e) {
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
            switch (iy()) {
            case zl:
                return 1;
            case id:
                return 4;
            case Bi:
            case oy:
                return 16;
            case od:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var Pn = null
      , Kl = null
      , Yi = null;
    function yd() {
        if (Yi)
            return Yi;
        var e, t = Kl, i = t.length, l, u = "value"in Pn ? Pn.value : Pn.textContent, d = u.length;
        for (e = 0; e < i && t[e] === u[e]; e++)
            ;
        var p = i - e;
        for (l = 1; l <= p && t[i - l] === u[d - l]; l++)
            ;
        return Yi = u.slice(e, 1 < l ? 1 - l : void 0)
    }
    function Xi(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Ji() {
        return !0
    }
    function vd() {
        return !1
    }
    function Rt(e) {
        function t(i, l, u, d, p) {
            this._reactName = i,
            this._targetInst = u,
            this.type = l,
            this.nativeEvent = d,
            this.target = p,
            this.currentTarget = null;
            for (var w in e)
                e.hasOwnProperty(w) && (i = e[w],
                this[w] = i ? i(d) : d[w]);
            return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Ji : vd,
            this.isPropagationStopped = vd,
            this
        }
        return L(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var i = this.nativeEvent;
                i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1),
                this.isDefaultPrevented = Ji)
            },
            stopPropagation: function() {
                var i = this.nativeEvent;
                i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
                this.isPropagationStopped = Ji)
            },
            persist: function() {},
            isPersistent: Ji
        }),
        t
    }
    var Br = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Gl = Rt(Br), Fs = L({}, Br, {
        view: 0,
        detail: 0
    }), wy = Rt(Fs), Yl, Xl, Us, Zi = L({}, Fs, {
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
        getModifierState: Zl,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== Us && (Us && e.type === "mousemove" ? (Yl = e.screenX - Us.screenX,
            Xl = e.screenY - Us.screenY) : Xl = Yl = 0,
            Us = e),
            Yl)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Xl
        }
    }), wd = Rt(Zi), xy = L({}, Zi, {
        dataTransfer: 0
    }), Sy = Rt(xy), ky = L({}, Fs, {
        relatedTarget: 0
    }), Jl = Rt(ky), by = L({}, Br, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), _y = Rt(by), Ey = L({}, Br, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), Cy = Rt(Ey), Ry = L({}, Br, {
        data: 0
    }), xd = Rt(Ry), Ty = {
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
    }, Ny = {
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
    }, Py = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Oy(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Py[e]) ? !!t[e] : !1
    }
    function Zl() {
        return Oy
    }
    var Ay = L({}, Fs, {
        key: function(e) {
            if (e.key) {
                var t = Ty[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Xi(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ny[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Zl,
        charCode: function(e) {
            return e.type === "keypress" ? Xi(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Xi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , jy = Rt(Ay)
      , Ly = L({}, Zi, {
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
      , Sd = Rt(Ly)
      , Iy = L({}, Fs, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Zl
    })
      , Dy = Rt(Iy)
      , My = L({}, Br, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Fy = Rt(My)
      , Uy = L({}, Zi, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , zy = Rt(Uy)
      , By = [9, 13, 27, 32]
      , ea = h && "CompositionEvent"in window
      , zs = null;
    h && "documentMode"in document && (zs = document.documentMode);
    var $y = h && "TextEvent"in window && !zs
      , kd = h && (!ea || zs && 8 < zs && 11 >= zs)
      , bd = " "
      , _d = !1;
    function Ed(e, t) {
        switch (e) {
        case "keyup":
            return By.indexOf(t.keyCode) !== -1;
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
    function Cd(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var $r = !1;
    function Vy(e, t) {
        switch (e) {
        case "compositionend":
            return Cd(t);
        case "keypress":
            return t.which !== 32 ? null : (_d = !0,
            bd);
        case "textInput":
            return e = t.data,
            e === bd && _d ? null : e;
        default:
            return null
        }
    }
    function qy(e, t) {
        if ($r)
            return e === "compositionend" || !ea && Ed(e, t) ? (e = yd(),
            Yi = Kl = Pn = null,
            $r = !1,
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
            return kd && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var Hy = {
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
    function Rd(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Hy[e.type] : t === "textarea"
    }
    function Td(e, t, i, l) {
        Kc(l),
        t = so(t, "onChange"),
        0 < t.length && (i = new Gl("onChange","change",null,i,l),
        e.push({
            event: i,
            listeners: t
        }))
    }
    var Bs = null
      , $s = null;
    function Qy(e) {
        Qd(e, 0)
    }
    function eo(e) {
        var t = Wr(e);
        if (lr(t))
            return e
    }
    function Wy(e, t) {
        if (e === "change")
            return t
    }
    var Nd = !1;
    if (h) {
        var ta;
        if (h) {
            var na = "oninput"in document;
            if (!na) {
                var Pd = document.createElement("div");
                Pd.setAttribute("oninput", "return;"),
                na = typeof Pd.oninput == "function"
            }
            ta = na
        } else
            ta = !1;
        Nd = ta && (!document.documentMode || 9 < document.documentMode)
    }
    function Od() {
        Bs && (Bs.detachEvent("onpropertychange", Ad),
        $s = Bs = null)
    }
    function Ad(e) {
        if (e.propertyName === "value" && eo($s)) {
            var t = [];
            Td(t, $s, e, Il(e)),
            Jc(Qy, t)
        }
    }
    function Ky(e, t, i) {
        e === "focusin" ? (Od(),
        Bs = t,
        $s = i,
        Bs.attachEvent("onpropertychange", Ad)) : e === "focusout" && Od()
    }
    function Gy(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return eo($s)
    }
    function Yy(e, t) {
        if (e === "click")
            return eo(t)
    }
    function Xy(e, t) {
        if (e === "input" || e === "change")
            return eo(t)
    }
    function Jy(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Vt = typeof Object.is == "function" ? Object.is : Jy;
    function Vs(e, t) {
        if (Vt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var i = Object.keys(e)
          , l = Object.keys(t);
        if (i.length !== l.length)
            return !1;
        for (l = 0; l < i.length; l++) {
            var u = i[l];
            if (!m.call(t, u) || !Vt(e[u], t[u]))
                return !1
        }
        return !0
    }
    function jd(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Ld(e, t) {
        var i = jd(e);
        e = 0;
        for (var l; i; ) {
            if (i.nodeType === 3) {
                if (l = e + i.textContent.length,
                e <= t && l >= t)
                    return {
                        node: i,
                        offset: t - e
                    };
                e = l
            }
            e: {
                for (; i; ) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break e
                    }
                    i = i.parentNode
                }
                i = void 0
            }
            i = jd(i)
        }
    }
    function Id(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Id(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Dd() {
        for (var e = window, t = _n(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var i = typeof t.contentWindow.location.href == "string"
            } catch {
                i = !1
            }
            if (i)
                e = t.contentWindow;
            else
                break;
            t = _n(e.document)
        }
        return t
    }
    function ra(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    function Zy(e) {
        var t = Dd()
          , i = e.focusedElem
          , l = e.selectionRange;
        if (t !== i && i && i.ownerDocument && Id(i.ownerDocument.documentElement, i)) {
            if (l !== null && ra(i)) {
                if (t = l.start,
                e = l.end,
                e === void 0 && (e = t),
                "selectionStart"in i)
                    i.selectionStart = t,
                    i.selectionEnd = Math.min(e, i.value.length);
                else if (e = (t = i.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                    e = e.getSelection();
                    var u = i.textContent.length
                      , d = Math.min(l.start, u);
                    l = l.end === void 0 ? d : Math.min(l.end, u),
                    !e.extend && d > l && (u = l,
                    l = d,
                    d = u),
                    u = Ld(i, d);
                    var p = Ld(i, l);
                    u && p && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== p.node || e.focusOffset !== p.offset) && (t = t.createRange(),
                    t.setStart(u.node, u.offset),
                    e.removeAllRanges(),
                    d > l ? (e.addRange(t),
                    e.extend(p.node, p.offset)) : (t.setEnd(p.node, p.offset),
                    e.addRange(t)))
                }
            }
            for (t = [],
            e = i; e = e.parentNode; )
                e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
            for (typeof i.focus == "function" && i.focus(),
            i = 0; i < t.length; i++)
                e = t[i],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
        }
    }
    var ev = h && "documentMode"in document && 11 >= document.documentMode
      , Vr = null
      , sa = null
      , qs = null
      , ia = !1;
    function Md(e, t, i) {
        var l = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
        ia || Vr == null || Vr !== _n(l) || (l = Vr,
        "selectionStart"in l && ra(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        qs && Vs(qs, l) || (qs = l,
        l = so(sa, "onSelect"),
        0 < l.length && (t = new Gl("onSelect","select",null,t,i),
        e.push({
            event: t,
            listeners: l
        }),
        t.target = Vr)))
    }
    function to(e, t) {
        var i = {};
        return i[e.toLowerCase()] = t.toLowerCase(),
        i["Webkit" + e] = "webkit" + t,
        i["Moz" + e] = "moz" + t,
        i
    }
    var qr = {
        animationend: to("Animation", "AnimationEnd"),
        animationiteration: to("Animation", "AnimationIteration"),
        animationstart: to("Animation", "AnimationStart"),
        transitionend: to("Transition", "TransitionEnd")
    }
      , oa = {}
      , Fd = {};
    h && (Fd = document.createElement("div").style,
    "AnimationEvent"in window || (delete qr.animationend.animation,
    delete qr.animationiteration.animation,
    delete qr.animationstart.animation),
    "TransitionEvent"in window || delete qr.transitionend.transition);
    function no(e) {
        if (oa[e])
            return oa[e];
        if (!qr[e])
            return e;
        var t = qr[e], i;
        for (i in t)
            if (t.hasOwnProperty(i) && i in Fd)
                return oa[e] = t[i];
        return e
    }
    var Ud = no("animationend")
      , zd = no("animationiteration")
      , Bd = no("animationstart")
      , $d = no("transitionend")
      , Vd = new Map
      , qd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function On(e, t) {
        Vd.set(e, t),
        c(t, [e])
    }
    for (var la = 0; la < qd.length; la++) {
        var aa = qd[la]
          , tv = aa.toLowerCase()
          , nv = aa[0].toUpperCase() + aa.slice(1);
        On(tv, "on" + nv)
    }
    On(Ud, "onAnimationEnd"),
    On(zd, "onAnimationIteration"),
    On(Bd, "onAnimationStart"),
    On("dblclick", "onDoubleClick"),
    On("focusin", "onFocus"),
    On("focusout", "onBlur"),
    On($d, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Hs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , rv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));
    function Hd(e, t, i) {
        var l = e.type || "unknown-event";
        e.currentTarget = i,
        ty(l, t, void 0, e),
        e.currentTarget = null
    }
    function Qd(e, t) {
        t = (t & 4) !== 0;
        for (var i = 0; i < e.length; i++) {
            var l = e[i]
              , u = l.event;
            l = l.listeners;
            e: {
                var d = void 0;
                if (t)
                    for (var p = l.length - 1; 0 <= p; p--) {
                        var w = l[p]
                          , k = w.instance
                          , O = w.currentTarget;
                        if (w = w.listener,
                        k !== d && u.isPropagationStopped())
                            break e;
                        Hd(u, w, O),
                        d = k
                    }
                else
                    for (p = 0; p < l.length; p++) {
                        if (w = l[p],
                        k = w.instance,
                        O = w.currentTarget,
                        w = w.listener,
                        k !== d && u.isPropagationStopped())
                            break e;
                        Hd(u, w, O),
                        d = k
                    }
            }
        }
        if (zi)
            throw e = Ul,
            zi = !1,
            Ul = null,
            e
    }
    function Me(e, t) {
        var i = t[ga];
        i === void 0 && (i = t[ga] = new Set);
        var l = e + "__bubble";
        i.has(l) || (Wd(t, e, 2, !1),
        i.add(l))
    }
    function ua(e, t, i) {
        var l = 0;
        t && (l |= 4),
        Wd(i, e, l, t)
    }
    var ro = "_reactListening" + Math.random().toString(36).slice(2);
    function Qs(e) {
        if (!e[ro]) {
            e[ro] = !0,
            o.forEach(function(i) {
                i !== "selectionchange" && (rv.has(i) || ua(i, !1, e),
                ua(i, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[ro] || (t[ro] = !0,
            ua("selectionchange", !1, t))
        }
    }
    function Wd(e, t, i, l) {
        switch (gd(t)) {
        case 1:
            var u = yy;
            break;
        case 4:
            u = vy;
            break;
        default:
            u = Ql
        }
        i = u.bind(null, t, i, e),
        u = void 0,
        !Fl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0),
        l ? u !== void 0 ? e.addEventListener(t, i, {
            capture: !0,
            passive: u
        }) : e.addEventListener(t, i, !0) : u !== void 0 ? e.addEventListener(t, i, {
            passive: u
        }) : e.addEventListener(t, i, !1)
    }
    function ca(e, t, i, l, u) {
        var d = l;
        if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
            e: for (; ; ) {
                if (l === null)
                    return;
                var p = l.tag;
                if (p === 3 || p === 4) {
                    var w = l.stateNode.containerInfo;
                    if (w === u || w.nodeType === 8 && w.parentNode === u)
                        break;
                    if (p === 4)
                        for (p = l.return; p !== null; ) {
                            var k = p.tag;
                            if ((k === 3 || k === 4) && (k = p.stateNode.containerInfo,
                            k === u || k.nodeType === 8 && k.parentNode === u))
                                return;
                            p = p.return
                        }
                    for (; w !== null; ) {
                        if (p = ur(w),
                        p === null)
                            return;
                        if (k = p.tag,
                        k === 5 || k === 6) {
                            l = d = p;
                            continue e
                        }
                        w = w.parentNode
                    }
                }
                l = l.return
            }
        Jc(function() {
            var O = d
              , $ = Il(i)
              , V = [];
            e: {
                var z = Vd.get(e);
                if (z !== void 0) {
                    var K = Gl
                      , J = e;
                    switch (e) {
                    case "keypress":
                        if (Xi(i) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        K = jy;
                        break;
                    case "focusin":
                        J = "focus",
                        K = Jl;
                        break;
                    case "focusout":
                        J = "blur",
                        K = Jl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        K = Jl;
                        break;
                    case "click":
                        if (i.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        K = wd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        K = Sy;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        K = Dy;
                        break;
                    case Ud:
                    case zd:
                    case Bd:
                        K = _y;
                        break;
                    case $d:
                        K = Fy;
                        break;
                    case "scroll":
                        K = wy;
                        break;
                    case "wheel":
                        K = zy;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        K = Cy;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        K = Sd
                    }
                    var te = (t & 4) !== 0
                      , He = !te && e === "scroll"
                      , T = te ? z !== null ? z + "Capture" : null : z;
                    te = [];
                    for (var C = O, P; C !== null; ) {
                        P = C;
                        var q = P.stateNode;
                        if (P.tag === 5 && q !== null && (P = q,
                        T !== null && (q = Ts(C, T),
                        q != null && te.push(Ws(C, q, P)))),
                        He)
                            break;
                        C = C.return
                    }
                    0 < te.length && (z = new K(z,J,null,i,$),
                    V.push({
                        event: z,
                        listeners: te
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (z = e === "mouseover" || e === "pointerover",
                    K = e === "mouseout" || e === "pointerout",
                    z && i !== Ll && (J = i.relatedTarget || i.fromElement) && (ur(J) || J[dn]))
                        break e;
                    if ((K || z) && (z = $.window === $ ? $ : (z = $.ownerDocument) ? z.defaultView || z.parentWindow : window,
                    K ? (J = i.relatedTarget || i.toElement,
                    K = O,
                    J = J ? ur(J) : null,
                    J !== null && (He = ar(J),
                    J !== He || J.tag !== 5 && J.tag !== 6) && (J = null)) : (K = null,
                    J = O),
                    K !== J)) {
                        if (te = wd,
                        q = "onMouseLeave",
                        T = "onMouseEnter",
                        C = "mouse",
                        (e === "pointerout" || e === "pointerover") && (te = Sd,
                        q = "onPointerLeave",
                        T = "onPointerEnter",
                        C = "pointer"),
                        He = K == null ? z : Wr(K),
                        P = J == null ? z : Wr(J),
                        z = new te(q,C + "leave",K,i,$),
                        z.target = He,
                        z.relatedTarget = P,
                        q = null,
                        ur($) === O && (te = new te(T,C + "enter",J,i,$),
                        te.target = P,
                        te.relatedTarget = He,
                        q = te),
                        He = q,
                        K && J)
                            t: {
                                for (te = K,
                                T = J,
                                C = 0,
                                P = te; P; P = Hr(P))
                                    C++;
                                for (P = 0,
                                q = T; q; q = Hr(q))
                                    P++;
                                for (; 0 < C - P; )
                                    te = Hr(te),
                                    C--;
                                for (; 0 < P - C; )
                                    T = Hr(T),
                                    P--;
                                for (; C--; ) {
                                    if (te === T || T !== null && te === T.alternate)
                                        break t;
                                    te = Hr(te),
                                    T = Hr(T)
                                }
                                te = null
                            }
                        else
                            te = null;
                        K !== null && Kd(V, z, K, te, !1),
                        J !== null && He !== null && Kd(V, He, J, te, !0)
                    }
                }
                e: {
                    if (z = O ? Wr(O) : window,
                    K = z.nodeName && z.nodeName.toLowerCase(),
                    K === "select" || K === "input" && z.type === "file")
                        var ne = Wy;
                    else if (Rd(z))
                        if (Nd)
                            ne = Xy;
                        else {
                            ne = Gy;
                            var ie = Ky
                        }
                    else
                        (K = z.nodeName) && K.toLowerCase() === "input" && (z.type === "checkbox" || z.type === "radio") && (ne = Yy);
                    if (ne && (ne = ne(e, O))) {
                        Td(V, ne, i, $);
                        break e
                    }
                    ie && ie(e, z, O),
                    e === "focusout" && (ie = z._wrapperState) && ie.controlled && z.type === "number" && Nl(z, "number", z.value)
                }
                switch (ie = O ? Wr(O) : window,
                e) {
                case "focusin":
                    (Rd(ie) || ie.contentEditable === "true") && (Vr = ie,
                    sa = O,
                    qs = null);
                    break;
                case "focusout":
                    qs = sa = Vr = null;
                    break;
                case "mousedown":
                    ia = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ia = !1,
                    Md(V, i, $);
                    break;
                case "selectionchange":
                    if (ev)
                        break;
                case "keydown":
                case "keyup":
                    Md(V, i, $)
                }
                var oe;
                if (ea)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var fe = "onCompositionStart";
                            break e;
                        case "compositionend":
                            fe = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            fe = "onCompositionUpdate";
                            break e
                        }
                        fe = void 0
                    }
                else
                    $r ? Ed(e, i) && (fe = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (fe = "onCompositionStart");
                fe && (kd && i.locale !== "ko" && ($r || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && $r && (oe = yd()) : (Pn = $,
                Kl = "value"in Pn ? Pn.value : Pn.textContent,
                $r = !0)),
                ie = so(O, fe),
                0 < ie.length && (fe = new xd(fe,e,null,i,$),
                V.push({
                    event: fe,
                    listeners: ie
                }),
                oe ? fe.data = oe : (oe = Cd(i),
                oe !== null && (fe.data = oe)))),
                (oe = $y ? Vy(e, i) : qy(e, i)) && (O = so(O, "onBeforeInput"),
                0 < O.length && ($ = new xd("onBeforeInput","beforeinput",null,i,$),
                V.push({
                    event: $,
                    listeners: O
                }),
                $.data = oe))
            }
            Qd(V, t)
        })
    }
    function Ws(e, t, i) {
        return {
            instance: e,
            listener: t,
            currentTarget: i
        }
    }
    function so(e, t) {
        for (var i = t + "Capture", l = []; e !== null; ) {
            var u = e
              , d = u.stateNode;
            u.tag === 5 && d !== null && (u = d,
            d = Ts(e, i),
            d != null && l.unshift(Ws(e, d, u)),
            d = Ts(e, t),
            d != null && l.push(Ws(e, d, u))),
            e = e.return
        }
        return l
    }
    function Hr(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5);
        return e || null
    }
    function Kd(e, t, i, l, u) {
        for (var d = t._reactName, p = []; i !== null && i !== l; ) {
            var w = i
              , k = w.alternate
              , O = w.stateNode;
            if (k !== null && k === l)
                break;
            w.tag === 5 && O !== null && (w = O,
            u ? (k = Ts(i, d),
            k != null && p.unshift(Ws(i, k, w))) : u || (k = Ts(i, d),
            k != null && p.push(Ws(i, k, w)))),
            i = i.return
        }
        p.length !== 0 && e.push({
            event: t,
            listeners: p
        })
    }
    var sv = /\r\n?/g
      , iv = /\u0000|\uFFFD/g;
    function Gd(e) {
        return (typeof e == "string" ? e : "" + e).replace(sv, `
`).replace(iv, "")
    }
    function io(e, t, i) {
        if (t = Gd(t),
        Gd(e) !== t && i)
            throw Error(s(425))
    }
    function oo() {}
    var da = null
      , fa = null;
    function ha(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var pa = typeof setTimeout == "function" ? setTimeout : void 0
      , ov = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Yd = typeof Promise == "function" ? Promise : void 0
      , lv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yd < "u" ? function(e) {
        return Yd.resolve(null).then(e).catch(av)
    }
    : pa;
    function av(e) {
        setTimeout(function() {
            throw e
        })
    }
    function ma(e, t) {
        var i = t
          , l = 0;
        do {
            var u = i.nextSibling;
            if (e.removeChild(i),
            u && u.nodeType === 8)
                if (i = u.data,
                i === "/$") {
                    if (l === 0) {
                        e.removeChild(u),
                        Ms(t);
                        return
                    }
                    l--
                } else
                    i !== "$" && i !== "$?" && i !== "$!" || l++;
            i = u
        } while (i);
        Ms(t)
    }
    function An(e) {
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
    function Xd(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "$" || i === "$!" || i === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    i === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Qr = Math.random().toString(36).slice(2)
      , en = "__reactFiber$" + Qr
      , Ks = "__reactProps$" + Qr
      , dn = "__reactContainer$" + Qr
      , ga = "__reactEvents$" + Qr
      , uv = "__reactListeners$" + Qr
      , cv = "__reactHandles$" + Qr;
    function ur(e) {
        var t = e[en];
        if (t)
            return t;
        for (var i = e.parentNode; i; ) {
            if (t = i[dn] || i[en]) {
                if (i = t.alternate,
                t.child !== null || i !== null && i.child !== null)
                    for (e = Xd(e); e !== null; ) {
                        if (i = e[en])
                            return i;
                        e = Xd(e)
                    }
                return t
            }
            e = i,
            i = e.parentNode
        }
        return null
    }
    function Gs(e) {
        return e = e[en] || e[dn],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }
    function Wr(e) {
        if (e.tag === 5 || e.tag === 6)
            return e.stateNode;
        throw Error(s(33))
    }
    function lo(e) {
        return e[Ks] || null
    }
    var ya = []
      , Kr = -1;
    function jn(e) {
        return {
            current: e
        }
    }
    function Fe(e) {
        0 > Kr || (e.current = ya[Kr],
        ya[Kr] = null,
        Kr--)
    }
    function Le(e, t) {
        Kr++,
        ya[Kr] = e.current,
        e.current = t
    }
    var Ln = {}
      , lt = jn(Ln)
      , gt = jn(!1)
      , cr = Ln;
    function Gr(e, t) {
        var i = e.type.contextTypes;
        if (!i)
            return Ln;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
            return l.__reactInternalMemoizedMaskedChildContext;
        var u = {}, d;
        for (d in i)
            u[d] = t[d];
        return l && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = u),
        u
    }
    function yt(e) {
        return e = e.childContextTypes,
        e != null
    }
    function ao() {
        Fe(gt),
        Fe(lt)
    }
    function Jd(e, t, i) {
        if (lt.current !== Ln)
            throw Error(s(168));
        Le(lt, t),
        Le(gt, i)
    }
    function Zd(e, t, i) {
        var l = e.stateNode;
        if (t = t.childContextTypes,
        typeof l.getChildContext != "function")
            return i;
        l = l.getChildContext();
        for (var u in l)
            if (!(u in t))
                throw Error(s(108, Te(e) || "Unknown", u));
        return L({}, i, l)
    }
    function uo(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ln,
        cr = lt.current,
        Le(lt, e),
        Le(gt, gt.current),
        !0
    }
    function ef(e, t, i) {
        var l = e.stateNode;
        if (!l)
            throw Error(s(169));
        i ? (e = Zd(e, t, cr),
        l.__reactInternalMemoizedMergedChildContext = e,
        Fe(gt),
        Fe(lt),
        Le(lt, e)) : Fe(gt),
        Le(gt, i)
    }
    var fn = null
      , co = !1
      , va = !1;
    function tf(e) {
        fn === null ? fn = [e] : fn.push(e)
    }
    function dv(e) {
        co = !0,
        tf(e)
    }
    function In() {
        if (!va && fn !== null) {
            va = !0;
            var e = 0
              , t = Oe;
            try {
                var i = fn;
                for (Oe = 1; e < i.length; e++) {
                    var l = i[e];
                    do
                        l = l(!0);
                    while (l !== null)
                }
                fn = null,
                co = !1
            } catch (u) {
                throw fn !== null && (fn = fn.slice(e + 1)),
                rd(zl, In),
                u
            } finally {
                Oe = t,
                va = !1
            }
        }
        return null
    }
    var Yr = []
      , Xr = 0
      , fo = null
      , ho = 0
      , Ot = []
      , At = 0
      , dr = null
      , hn = 1
      , pn = "";
    function fr(e, t) {
        Yr[Xr++] = ho,
        Yr[Xr++] = fo,
        fo = e,
        ho = t
    }
    function nf(e, t, i) {
        Ot[At++] = hn,
        Ot[At++] = pn,
        Ot[At++] = dr,
        dr = e;
        var l = hn;
        e = pn;
        var u = 32 - $t(l) - 1;
        l &= ~(1 << u),
        i += 1;
        var d = 32 - $t(t) + u;
        if (30 < d) {
            var p = u - u % 5;
            d = (l & (1 << p) - 1).toString(32),
            l >>= p,
            u -= p,
            hn = 1 << 32 - $t(t) + u | i << u | l,
            pn = d + e
        } else
            hn = 1 << d | i << u | l,
            pn = e
    }
    function wa(e) {
        e.return !== null && (fr(e, 1),
        nf(e, 1, 0))
    }
    function xa(e) {
        for (; e === fo; )
            fo = Yr[--Xr],
            Yr[Xr] = null,
            ho = Yr[--Xr],
            Yr[Xr] = null;
        for (; e === dr; )
            dr = Ot[--At],
            Ot[At] = null,
            pn = Ot[--At],
            Ot[At] = null,
            hn = Ot[--At],
            Ot[At] = null
    }
    var Tt = null
      , Nt = null
      , Ue = !1
      , qt = null;
    function rf(e, t) {
        var i = Dt(5, null, null, 0);
        i.elementType = "DELETED",
        i.stateNode = t,
        i.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [i],
        e.flags |= 16) : t.push(i)
    }
    function sf(e, t) {
        switch (e.tag) {
        case 5:
            var i = e.type;
            return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
            t !== null ? (e.stateNode = t,
            Tt = e,
            Nt = An(t.firstChild),
            !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
            t !== null ? (e.stateNode = t,
            Tt = e,
            Nt = null,
            !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
            t !== null ? (i = dr !== null ? {
                id: hn,
                overflow: pn
            } : null,
            e.memoizedState = {
                dehydrated: t,
                treeContext: i,
                retryLane: 1073741824
            },
            i = Dt(18, null, null, 0),
            i.stateNode = t,
            i.return = e,
            e.child = i,
            Tt = e,
            Nt = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function Sa(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }
    function ka(e) {
        if (Ue) {
            var t = Nt;
            if (t) {
                var i = t;
                if (!sf(e, t)) {
                    if (Sa(e))
                        throw Error(s(418));
                    t = An(i.nextSibling);
                    var l = Tt;
                    t && sf(e, t) ? rf(l, i) : (e.flags = e.flags & -4097 | 2,
                    Ue = !1,
                    Tt = e)
                }
            } else {
                if (Sa(e))
                    throw Error(s(418));
                e.flags = e.flags & -4097 | 2,
                Ue = !1,
                Tt = e
            }
        }
    }
    function of(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
            e = e.return;
        Tt = e
    }
    function po(e) {
        if (e !== Tt)
            return !1;
        if (!Ue)
            return of(e),
            Ue = !0,
            !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !ha(e.type, e.memoizedProps)),
        t && (t = Nt)) {
            if (Sa(e))
                throw lf(),
                Error(s(418));
            for (; t; )
                rf(e, t),
                t = An(t.nextSibling)
        }
        if (of(e),
        e.tag === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(s(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var i = e.data;
                        if (i === "/$") {
                            if (t === 0) {
                                Nt = An(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            i !== "$" && i !== "$!" && i !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                Nt = null
            }
        } else
            Nt = Tt ? An(e.stateNode.nextSibling) : null;
        return !0
    }
    function lf() {
        for (var e = Nt; e; )
            e = An(e.nextSibling)
    }
    function Jr() {
        Nt = Tt = null,
        Ue = !1
    }
    function ba(e) {
        qt === null ? qt = [e] : qt.push(e)
    }
    var fv = M.ReactCurrentBatchConfig;
    function Ys(e, t, i) {
        if (e = i.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
            if (i._owner) {
                if (i = i._owner,
                i) {
                    if (i.tag !== 1)
                        throw Error(s(309));
                    var l = i.stateNode
                }
                if (!l)
                    throw Error(s(147, e));
                var u = l
                  , d = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === d ? t.ref : (t = function(p) {
                    var w = u.refs;
                    p === null ? delete w[d] : w[d] = p
                }
                ,
                t._stringRef = d,
                t)
            }
            if (typeof e != "string")
                throw Error(s(284));
            if (!i._owner)
                throw Error(s(290, e))
        }
        return e
    }
    function mo(e, t) {
        throw e = Object.prototype.toString.call(t),
        Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }
    function af(e) {
        var t = e._init;
        return t(e._payload)
    }
    function uf(e) {
        function t(T, C) {
            if (e) {
                var P = T.deletions;
                P === null ? (T.deletions = [C],
                T.flags |= 16) : P.push(C)
            }
        }
        function i(T, C) {
            if (!e)
                return null;
            for (; C !== null; )
                t(T, C),
                C = C.sibling;
            return null
        }
        function l(T, C) {
            for (T = new Map; C !== null; )
                C.key !== null ? T.set(C.key, C) : T.set(C.index, C),
                C = C.sibling;
            return T
        }
        function u(T, C) {
            return T = Vn(T, C),
            T.index = 0,
            T.sibling = null,
            T
        }
        function d(T, C, P) {
            return T.index = P,
            e ? (P = T.alternate,
            P !== null ? (P = P.index,
            P < C ? (T.flags |= 2,
            C) : P) : (T.flags |= 2,
            C)) : (T.flags |= 1048576,
            C)
        }
        function p(T) {
            return e && T.alternate === null && (T.flags |= 2),
            T
        }
        function w(T, C, P, q) {
            return C === null || C.tag !== 6 ? (C = pu(P, T.mode, q),
            C.return = T,
            C) : (C = u(C, P),
            C.return = T,
            C)
        }
        function k(T, C, P, q) {
            var ne = P.type;
            return ne === se ? $(T, C, P.props.children, q, P.key) : C !== null && (C.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === ye && af(ne) === C.type) ? (q = u(C, P.props),
            q.ref = Ys(T, C, P),
            q.return = T,
            q) : (q = Uo(P.type, P.key, P.props, null, T.mode, q),
            q.ref = Ys(T, C, P),
            q.return = T,
            q)
        }
        function O(T, C, P, q) {
            return C === null || C.tag !== 4 || C.stateNode.containerInfo !== P.containerInfo || C.stateNode.implementation !== P.implementation ? (C = mu(P, T.mode, q),
            C.return = T,
            C) : (C = u(C, P.children || []),
            C.return = T,
            C)
        }
        function $(T, C, P, q, ne) {
            return C === null || C.tag !== 7 ? (C = xr(P, T.mode, q, ne),
            C.return = T,
            C) : (C = u(C, P),
            C.return = T,
            C)
        }
        function V(T, C, P) {
            if (typeof C == "string" && C !== "" || typeof C == "number")
                return C = pu("" + C, T.mode, P),
                C.return = T,
                C;
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                case W:
                    return P = Uo(C.type, C.key, C.props, null, T.mode, P),
                    P.ref = Ys(T, null, C),
                    P.return = T,
                    P;
                case X:
                    return C = mu(C, T.mode, P),
                    C.return = T,
                    C;
                case ye:
                    var q = C._init;
                    return V(T, q(C._payload), P)
                }
                if (Es(C) || re(C))
                    return C = xr(C, T.mode, P, null),
                    C.return = T,
                    C;
                mo(T, C)
            }
            return null
        }
        function z(T, C, P, q) {
            var ne = C !== null ? C.key : null;
            if (typeof P == "string" && P !== "" || typeof P == "number")
                return ne !== null ? null : w(T, C, "" + P, q);
            if (typeof P == "object" && P !== null) {
                switch (P.$$typeof) {
                case W:
                    return P.key === ne ? k(T, C, P, q) : null;
                case X:
                    return P.key === ne ? O(T, C, P, q) : null;
                case ye:
                    return ne = P._init,
                    z(T, C, ne(P._payload), q)
                }
                if (Es(P) || re(P))
                    return ne !== null ? null : $(T, C, P, q, null);
                mo(T, P)
            }
            return null
        }
        function K(T, C, P, q, ne) {
            if (typeof q == "string" && q !== "" || typeof q == "number")
                return T = T.get(P) || null,
                w(C, T, "" + q, ne);
            if (typeof q == "object" && q !== null) {
                switch (q.$$typeof) {
                case W:
                    return T = T.get(q.key === null ? P : q.key) || null,
                    k(C, T, q, ne);
                case X:
                    return T = T.get(q.key === null ? P : q.key) || null,
                    O(C, T, q, ne);
                case ye:
                    var ie = q._init;
                    return K(T, C, P, ie(q._payload), ne)
                }
                if (Es(q) || re(q))
                    return T = T.get(P) || null,
                    $(C, T, q, ne, null);
                mo(C, q)
            }
            return null
        }
        function J(T, C, P, q) {
            for (var ne = null, ie = null, oe = C, fe = C = 0, et = null; oe !== null && fe < P.length; fe++) {
                oe.index > fe ? (et = oe,
                oe = null) : et = oe.sibling;
                var Re = z(T, oe, P[fe], q);
                if (Re === null) {
                    oe === null && (oe = et);
                    break
                }
                e && oe && Re.alternate === null && t(T, oe),
                C = d(Re, C, fe),
                ie === null ? ne = Re : ie.sibling = Re,
                ie = Re,
                oe = et
            }
            if (fe === P.length)
                return i(T, oe),
                Ue && fr(T, fe),
                ne;
            if (oe === null) {
                for (; fe < P.length; fe++)
                    oe = V(T, P[fe], q),
                    oe !== null && (C = d(oe, C, fe),
                    ie === null ? ne = oe : ie.sibling = oe,
                    ie = oe);
                return Ue && fr(T, fe),
                ne
            }
            for (oe = l(T, oe); fe < P.length; fe++)
                et = K(oe, T, fe, P[fe], q),
                et !== null && (e && et.alternate !== null && oe.delete(et.key === null ? fe : et.key),
                C = d(et, C, fe),
                ie === null ? ne = et : ie.sibling = et,
                ie = et);
            return e && oe.forEach(function(qn) {
                return t(T, qn)
            }),
            Ue && fr(T, fe),
            ne
        }
        function te(T, C, P, q) {
            var ne = re(P);
            if (typeof ne != "function")
                throw Error(s(150));
            if (P = ne.call(P),
            P == null)
                throw Error(s(151));
            for (var ie = ne = null, oe = C, fe = C = 0, et = null, Re = P.next(); oe !== null && !Re.done; fe++,
            Re = P.next()) {
                oe.index > fe ? (et = oe,
                oe = null) : et = oe.sibling;
                var qn = z(T, oe, Re.value, q);
                if (qn === null) {
                    oe === null && (oe = et);
                    break
                }
                e && oe && qn.alternate === null && t(T, oe),
                C = d(qn, C, fe),
                ie === null ? ne = qn : ie.sibling = qn,
                ie = qn,
                oe = et
            }
            if (Re.done)
                return i(T, oe),
                Ue && fr(T, fe),
                ne;
            if (oe === null) {
                for (; !Re.done; fe++,
                Re = P.next())
                    Re = V(T, Re.value, q),
                    Re !== null && (C = d(Re, C, fe),
                    ie === null ? ne = Re : ie.sibling = Re,
                    ie = Re);
                return Ue && fr(T, fe),
                ne
            }
            for (oe = l(T, oe); !Re.done; fe++,
            Re = P.next())
                Re = K(oe, T, fe, Re.value, q),
                Re !== null && (e && Re.alternate !== null && oe.delete(Re.key === null ? fe : Re.key),
                C = d(Re, C, fe),
                ie === null ? ne = Re : ie.sibling = Re,
                ie = Re);
            return e && oe.forEach(function(Hv) {
                return t(T, Hv)
            }),
            Ue && fr(T, fe),
            ne
        }
        function He(T, C, P, q) {
            if (typeof P == "object" && P !== null && P.type === se && P.key === null && (P = P.props.children),
            typeof P == "object" && P !== null) {
                switch (P.$$typeof) {
                case W:
                    e: {
                        for (var ne = P.key, ie = C; ie !== null; ) {
                            if (ie.key === ne) {
                                if (ne = P.type,
                                ne === se) {
                                    if (ie.tag === 7) {
                                        i(T, ie.sibling),
                                        C = u(ie, P.props.children),
                                        C.return = T,
                                        T = C;
                                        break e
                                    }
                                } else if (ie.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === ye && af(ne) === ie.type) {
                                    i(T, ie.sibling),
                                    C = u(ie, P.props),
                                    C.ref = Ys(T, ie, P),
                                    C.return = T,
                                    T = C;
                                    break e
                                }
                                i(T, ie);
                                break
                            } else
                                t(T, ie);
                            ie = ie.sibling
                        }
                        P.type === se ? (C = xr(P.props.children, T.mode, q, P.key),
                        C.return = T,
                        T = C) : (q = Uo(P.type, P.key, P.props, null, T.mode, q),
                        q.ref = Ys(T, C, P),
                        q.return = T,
                        T = q)
                    }
                    return p(T);
                case X:
                    e: {
                        for (ie = P.key; C !== null; ) {
                            if (C.key === ie)
                                if (C.tag === 4 && C.stateNode.containerInfo === P.containerInfo && C.stateNode.implementation === P.implementation) {
                                    i(T, C.sibling),
                                    C = u(C, P.children || []),
                                    C.return = T,
                                    T = C;
                                    break e
                                } else {
                                    i(T, C);
                                    break
                                }
                            else
                                t(T, C);
                            C = C.sibling
                        }
                        C = mu(P, T.mode, q),
                        C.return = T,
                        T = C
                    }
                    return p(T);
                case ye:
                    return ie = P._init,
                    He(T, C, ie(P._payload), q)
                }
                if (Es(P))
                    return J(T, C, P, q);
                if (re(P))
                    return te(T, C, P, q);
                mo(T, P)
            }
            return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P,
            C !== null && C.tag === 6 ? (i(T, C.sibling),
            C = u(C, P),
            C.return = T,
            T = C) : (i(T, C),
            C = pu(P, T.mode, q),
            C.return = T,
            T = C),
            p(T)) : i(T, C)
        }
        return He
    }
    var Zr = uf(!0)
      , cf = uf(!1)
      , go = jn(null)
      , yo = null
      , es = null
      , _a = null;
    function Ea() {
        _a = es = yo = null
    }
    function Ca(e) {
        var t = go.current;
        Fe(go),
        e._currentValue = t
    }
    function Ra(e, t, i) {
        for (; e !== null; ) {
            var l = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
            e === i)
                break;
            e = e.return
        }
    }
    function ts(e, t) {
        yo = e,
        _a = es = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (vt = !0),
        e.firstContext = null)
    }
    function jt(e) {
        var t = e._currentValue;
        if (_a !== e)
            if (e = {
                context: e,
                memoizedValue: t,
                next: null
            },
            es === null) {
                if (yo === null)
                    throw Error(s(308));
                es = e,
                yo.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else
                es = es.next = e;
        return t
    }
    var hr = null;
    function Ta(e) {
        hr === null ? hr = [e] : hr.push(e)
    }
    function df(e, t, i, l) {
        var u = t.interleaved;
        return u === null ? (i.next = i,
        Ta(t)) : (i.next = u.next,
        u.next = i),
        t.interleaved = i,
        mn(e, l)
    }
    function mn(e, t) {
        e.lanes |= t;
        var i = e.alternate;
        for (i !== null && (i.lanes |= t),
        i = e,
        e = e.return; e !== null; )
            e.childLanes |= t,
            i = e.alternate,
            i !== null && (i.childLanes |= t),
            i = e,
            e = e.return;
        return i.tag === 3 ? i.stateNode : null
    }
    var Dn = !1;
    function Na(e) {
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
    function ff(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }
    function gn(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Mn(e, t, i) {
        var l = e.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Ee & 2) !== 0) {
            var u = l.pending;
            return u === null ? t.next = t : (t.next = u.next,
            u.next = t),
            l.pending = t,
            mn(e, i)
        }
        return u = l.interleaved,
        u === null ? (t.next = t,
        Ta(l)) : (t.next = u.next,
        u.next = t),
        l.interleaved = t,
        mn(e, i)
    }
    function vo(e, t, i) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (i & 4194240) !== 0)) {
            var l = t.lanes;
            l &= e.pendingLanes,
            i |= l,
            t.lanes = i,
            Vl(e, i)
        }
    }
    function hf(e, t) {
        var i = e.updateQueue
          , l = e.alternate;
        if (l !== null && (l = l.updateQueue,
        i === l)) {
            var u = null
              , d = null;
            if (i = i.firstBaseUpdate,
            i !== null) {
                do {
                    var p = {
                        eventTime: i.eventTime,
                        lane: i.lane,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    };
                    d === null ? u = d = p : d = d.next = p,
                    i = i.next
                } while (i !== null);
                d === null ? u = d = t : d = d.next = t
            } else
                u = d = t;
            i = {
                baseState: l.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: d,
                shared: l.shared,
                effects: l.effects
            },
            e.updateQueue = i;
            return
        }
        e = i.lastBaseUpdate,
        e === null ? i.firstBaseUpdate = t : e.next = t,
        i.lastBaseUpdate = t
    }
    function wo(e, t, i, l) {
        var u = e.updateQueue;
        Dn = !1;
        var d = u.firstBaseUpdate
          , p = u.lastBaseUpdate
          , w = u.shared.pending;
        if (w !== null) {
            u.shared.pending = null;
            var k = w
              , O = k.next;
            k.next = null,
            p === null ? d = O : p.next = O,
            p = k;
            var $ = e.alternate;
            $ !== null && ($ = $.updateQueue,
            w = $.lastBaseUpdate,
            w !== p && (w === null ? $.firstBaseUpdate = O : w.next = O,
            $.lastBaseUpdate = k))
        }
        if (d !== null) {
            var V = u.baseState;
            p = 0,
            $ = O = k = null,
            w = d;
            do {
                var z = w.lane
                  , K = w.eventTime;
                if ((l & z) === z) {
                    $ !== null && ($ = $.next = {
                        eventTime: K,
                        lane: 0,
                        tag: w.tag,
                        payload: w.payload,
                        callback: w.callback,
                        next: null
                    });
                    e: {
                        var J = e
                          , te = w;
                        switch (z = t,
                        K = i,
                        te.tag) {
                        case 1:
                            if (J = te.payload,
                            typeof J == "function") {
                                V = J.call(K, V, z);
                                break e
                            }
                            V = J;
                            break e;
                        case 3:
                            J.flags = J.flags & -65537 | 128;
                        case 0:
                            if (J = te.payload,
                            z = typeof J == "function" ? J.call(K, V, z) : J,
                            z == null)
                                break e;
                            V = L({}, V, z);
                            break e;
                        case 2:
                            Dn = !0
                        }
                    }
                    w.callback !== null && w.lane !== 0 && (e.flags |= 64,
                    z = u.effects,
                    z === null ? u.effects = [w] : z.push(w))
                } else
                    K = {
                        eventTime: K,
                        lane: z,
                        tag: w.tag,
                        payload: w.payload,
                        callback: w.callback,
                        next: null
                    },
                    $ === null ? (O = $ = K,
                    k = V) : $ = $.next = K,
                    p |= z;
                if (w = w.next,
                w === null) {
                    if (w = u.shared.pending,
                    w === null)
                        break;
                    z = w,
                    w = z.next,
                    z.next = null,
                    u.lastBaseUpdate = z,
                    u.shared.pending = null
                }
            } while (!0);
            if ($ === null && (k = V),
            u.baseState = k,
            u.firstBaseUpdate = O,
            u.lastBaseUpdate = $,
            t = u.shared.interleaved,
            t !== null) {
                u = t;
                do
                    p |= u.lane,
                    u = u.next;
                while (u !== t)
            } else
                d === null && (u.shared.lanes = 0);
            gr |= p,
            e.lanes = p,
            e.memoizedState = V
        }
    }
    function pf(e, t, i) {
        if (e = t.effects,
        t.effects = null,
        e !== null)
            for (t = 0; t < e.length; t++) {
                var l = e[t]
                  , u = l.callback;
                if (u !== null) {
                    if (l.callback = null,
                    l = i,
                    typeof u != "function")
                        throw Error(s(191, u));
                    u.call(l)
                }
            }
    }
    var Xs = {}
      , tn = jn(Xs)
      , Js = jn(Xs)
      , Zs = jn(Xs);
    function pr(e) {
        if (e === Xs)
            throw Error(s(174));
        return e
    }
    function Pa(e, t) {
        switch (Le(Zs, t),
        Le(Js, e),
        Le(tn, Xs),
        e = t.nodeType,
        e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ol(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
            t = e.namespaceURI || null,
            e = e.tagName,
            t = Ol(t, e)
        }
        Fe(tn),
        Le(tn, t)
    }
    function ns() {
        Fe(tn),
        Fe(Js),
        Fe(Zs)
    }
    function mf(e) {
        pr(Zs.current);
        var t = pr(tn.current)
          , i = Ol(t, e.type);
        t !== i && (Le(Js, e),
        Le(tn, i))
    }
    function Oa(e) {
        Js.current === e && (Fe(tn),
        Fe(Js))
    }
    var ze = jn(0);
    function xo(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var i = t.memoizedState;
                if (i !== null && (i = i.dehydrated,
                i === null || i.data === "$?" || i.data === "$!"))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
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
    var Aa = [];
    function ja() {
        for (var e = 0; e < Aa.length; e++)
            Aa[e]._workInProgressVersionPrimary = null;
        Aa.length = 0
    }
    var So = M.ReactCurrentDispatcher
      , La = M.ReactCurrentBatchConfig
      , mr = 0
      , Be = null
      , Ge = null
      , Je = null
      , ko = !1
      , ei = !1
      , ti = 0
      , hv = 0;
    function at() {
        throw Error(s(321))
    }
    function Ia(e, t) {
        if (t === null)
            return !1;
        for (var i = 0; i < t.length && i < e.length; i++)
            if (!Vt(e[i], t[i]))
                return !1;
        return !0
    }
    function Da(e, t, i, l, u, d) {
        if (mr = d,
        Be = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        So.current = e === null || e.memoizedState === null ? yv : vv,
        e = i(l, u),
        ei) {
            d = 0;
            do {
                if (ei = !1,
                ti = 0,
                25 <= d)
                    throw Error(s(301));
                d += 1,
                Je = Ge = null,
                t.updateQueue = null,
                So.current = wv,
                e = i(l, u)
            } while (ei)
        }
        if (So.current = Eo,
        t = Ge !== null && Ge.next !== null,
        mr = 0,
        Je = Ge = Be = null,
        ko = !1,
        t)
            throw Error(s(300));
        return e
    }
    function Ma() {
        var e = ti !== 0;
        return ti = 0,
        e
    }
    function nn() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Je === null ? Be.memoizedState = Je = e : Je = Je.next = e,
        Je
    }
    function Lt() {
        if (Ge === null) {
            var e = Be.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Ge.next;
        var t = Je === null ? Be.memoizedState : Je.next;
        if (t !== null)
            Je = t,
            Ge = e;
        else {
            if (e === null)
                throw Error(s(310));
            Ge = e,
            e = {
                memoizedState: Ge.memoizedState,
                baseState: Ge.baseState,
                baseQueue: Ge.baseQueue,
                queue: Ge.queue,
                next: null
            },
            Je === null ? Be.memoizedState = Je = e : Je = Je.next = e
        }
        return Je
    }
    function ni(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Fa(e) {
        var t = Lt()
          , i = t.queue;
        if (i === null)
            throw Error(s(311));
        i.lastRenderedReducer = e;
        var l = Ge
          , u = l.baseQueue
          , d = i.pending;
        if (d !== null) {
            if (u !== null) {
                var p = u.next;
                u.next = d.next,
                d.next = p
            }
            l.baseQueue = u = d,
            i.pending = null
        }
        if (u !== null) {
            d = u.next,
            l = l.baseState;
            var w = p = null
              , k = null
              , O = d;
            do {
                var $ = O.lane;
                if ((mr & $) === $)
                    k !== null && (k = k.next = {
                        lane: 0,
                        action: O.action,
                        hasEagerState: O.hasEagerState,
                        eagerState: O.eagerState,
                        next: null
                    }),
                    l = O.hasEagerState ? O.eagerState : e(l, O.action);
                else {
                    var V = {
                        lane: $,
                        action: O.action,
                        hasEagerState: O.hasEagerState,
                        eagerState: O.eagerState,
                        next: null
                    };
                    k === null ? (w = k = V,
                    p = l) : k = k.next = V,
                    Be.lanes |= $,
                    gr |= $
                }
                O = O.next
            } while (O !== null && O !== d);
            k === null ? p = l : k.next = w,
            Vt(l, t.memoizedState) || (vt = !0),
            t.memoizedState = l,
            t.baseState = p,
            t.baseQueue = k,
            i.lastRenderedState = l
        }
        if (e = i.interleaved,
        e !== null) {
            u = e;
            do
                d = u.lane,
                Be.lanes |= d,
                gr |= d,
                u = u.next;
            while (u !== e)
        } else
            u === null && (i.lanes = 0);
        return [t.memoizedState, i.dispatch]
    }
    function Ua(e) {
        var t = Lt()
          , i = t.queue;
        if (i === null)
            throw Error(s(311));
        i.lastRenderedReducer = e;
        var l = i.dispatch
          , u = i.pending
          , d = t.memoizedState;
        if (u !== null) {
            i.pending = null;
            var p = u = u.next;
            do
                d = e(d, p.action),
                p = p.next;
            while (p !== u);
            Vt(d, t.memoizedState) || (vt = !0),
            t.memoizedState = d,
            t.baseQueue === null && (t.baseState = d),
            i.lastRenderedState = d
        }
        return [d, l]
    }
    function gf() {}
    function yf(e, t) {
        var i = Be
          , l = Lt()
          , u = t()
          , d = !Vt(l.memoizedState, u);
        if (d && (l.memoizedState = u,
        vt = !0),
        l = l.queue,
        za(xf.bind(null, i, l, e), [e]),
        l.getSnapshot !== t || d || Je !== null && Je.memoizedState.tag & 1) {
            if (i.flags |= 2048,
            ri(9, wf.bind(null, i, l, u, t), void 0, null),
            Ze === null)
                throw Error(s(349));
            (mr & 30) !== 0 || vf(i, t, u)
        }
        return u
    }
    function vf(e, t, i) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: i
        },
        t = Be.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        Be.updateQueue = t,
        t.stores = [e]) : (i = t.stores,
        i === null ? t.stores = [e] : i.push(e))
    }
    function wf(e, t, i, l) {
        t.value = i,
        t.getSnapshot = l,
        Sf(t) && kf(e)
    }
    function xf(e, t, i) {
        return i(function() {
            Sf(t) && kf(e)
        })
    }
    function Sf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var i = t();
            return !Vt(e, i)
        } catch {
            return !0
        }
    }
    function kf(e) {
        var t = mn(e, 1);
        t !== null && Kt(t, e, 1, -1)
    }
    function bf(e) {
        var t = nn();
        return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ni,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = gv.bind(null, Be, e),
        [t.memoizedState, e]
    }
    function ri(e, t, i, l) {
        return e = {
            tag: e,
            create: t,
            destroy: i,
            deps: l,
            next: null
        },
        t = Be.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        Be.updateQueue = t,
        t.lastEffect = e.next = e) : (i = t.lastEffect,
        i === null ? t.lastEffect = e.next = e : (l = i.next,
        i.next = e,
        e.next = l,
        t.lastEffect = e)),
        e
    }
    function _f() {
        return Lt().memoizedState
    }
    function bo(e, t, i, l) {
        var u = nn();
        Be.flags |= e,
        u.memoizedState = ri(1 | t, i, void 0, l === void 0 ? null : l)
    }
    function _o(e, t, i, l) {
        var u = Lt();
        l = l === void 0 ? null : l;
        var d = void 0;
        if (Ge !== null) {
            var p = Ge.memoizedState;
            if (d = p.destroy,
            l !== null && Ia(l, p.deps)) {
                u.memoizedState = ri(t, i, d, l);
                return
            }
        }
        Be.flags |= e,
        u.memoizedState = ri(1 | t, i, d, l)
    }
    function Ef(e, t) {
        return bo(8390656, 8, e, t)
    }
    function za(e, t) {
        return _o(2048, 8, e, t)
    }
    function Cf(e, t) {
        return _o(4, 2, e, t)
    }
    function Rf(e, t) {
        return _o(4, 4, e, t)
    }
    function Tf(e, t) {
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
    function Nf(e, t, i) {
        return i = i != null ? i.concat([e]) : null,
        _o(4, 4, Tf.bind(null, t, e), i)
    }
    function Ba() {}
    function Pf(e, t) {
        var i = Lt();
        t = t === void 0 ? null : t;
        var l = i.memoizedState;
        return l !== null && t !== null && Ia(t, l[1]) ? l[0] : (i.memoizedState = [e, t],
        e)
    }
    function Of(e, t) {
        var i = Lt();
        t = t === void 0 ? null : t;
        var l = i.memoizedState;
        return l !== null && t !== null && Ia(t, l[1]) ? l[0] : (e = e(),
        i.memoizedState = [e, t],
        e)
    }
    function Af(e, t, i) {
        return (mr & 21) === 0 ? (e.baseState && (e.baseState = !1,
        vt = !0),
        e.memoizedState = i) : (Vt(i, t) || (i = ld(),
        Be.lanes |= i,
        gr |= i,
        e.baseState = !0),
        t)
    }
    function pv(e, t) {
        var i = Oe;
        Oe = i !== 0 && 4 > i ? i : 4,
        e(!0);
        var l = La.transition;
        La.transition = {};
        try {
            e(!1),
            t()
        } finally {
            Oe = i,
            La.transition = l
        }
    }
    function jf() {
        return Lt().memoizedState
    }
    function mv(e, t, i) {
        var l = Bn(e);
        if (i = {
            lane: l,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Lf(e))
            If(t, i);
        else if (i = df(e, t, i, l),
        i !== null) {
            var u = pt();
            Kt(i, e, l, u),
            Df(i, t, l)
        }
    }
    function gv(e, t, i) {
        var l = Bn(e)
          , u = {
            lane: l,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Lf(e))
            If(t, u);
        else {
            var d = e.alternate;
            if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer,
            d !== null))
                try {
                    var p = t.lastRenderedState
                      , w = d(p, i);
                    if (u.hasEagerState = !0,
                    u.eagerState = w,
                    Vt(w, p)) {
                        var k = t.interleaved;
                        k === null ? (u.next = u,
                        Ta(t)) : (u.next = k.next,
                        k.next = u),
                        t.interleaved = u;
                        return
                    }
                } catch {} finally {}
            i = df(e, t, u, l),
            i !== null && (u = pt(),
            Kt(i, e, l, u),
            Df(i, t, l))
        }
    }
    function Lf(e) {
        var t = e.alternate;
        return e === Be || t !== null && t === Be
    }
    function If(e, t) {
        ei = ko = !0;
        var i = e.pending;
        i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        e.pending = t
    }
    function Df(e, t, i) {
        if ((i & 4194240) !== 0) {
            var l = t.lanes;
            l &= e.pendingLanes,
            i |= l,
            t.lanes = i,
            Vl(e, i)
        }
    }
    var Eo = {
        readContext: jt,
        useCallback: at,
        useContext: at,
        useEffect: at,
        useImperativeHandle: at,
        useInsertionEffect: at,
        useLayoutEffect: at,
        useMemo: at,
        useReducer: at,
        useRef: at,
        useState: at,
        useDebugValue: at,
        useDeferredValue: at,
        useTransition: at,
        useMutableSource: at,
        useSyncExternalStore: at,
        useId: at,
        unstable_isNewReconciler: !1
    }
      , yv = {
        readContext: jt,
        useCallback: function(e, t) {
            return nn().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: jt,
        useEffect: Ef,
        useImperativeHandle: function(e, t, i) {
            return i = i != null ? i.concat([e]) : null,
            bo(4194308, 4, Tf.bind(null, t, e), i)
        },
        useLayoutEffect: function(e, t) {
            return bo(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return bo(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var i = nn();
            return t = t === void 0 ? null : t,
            e = e(),
            i.memoizedState = [e, t],
            e
        },
        useReducer: function(e, t, i) {
            var l = nn();
            return t = i !== void 0 ? i(t) : t,
            l.memoizedState = l.baseState = t,
            e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            },
            l.queue = e,
            e = e.dispatch = mv.bind(null, Be, e),
            [l.memoizedState, e]
        },
        useRef: function(e) {
            var t = nn();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: bf,
        useDebugValue: Ba,
        useDeferredValue: function(e) {
            return nn().memoizedState = e
        },
        useTransition: function() {
            var e = bf(!1)
              , t = e[0];
            return e = pv.bind(null, e[1]),
            nn().memoizedState = e,
            [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, i) {
            var l = Be
              , u = nn();
            if (Ue) {
                if (i === void 0)
                    throw Error(s(407));
                i = i()
            } else {
                if (i = t(),
                Ze === null)
                    throw Error(s(349));
                (mr & 30) !== 0 || vf(l, t, i)
            }
            u.memoizedState = i;
            var d = {
                value: i,
                getSnapshot: t
            };
            return u.queue = d,
            Ef(xf.bind(null, l, d, e), [e]),
            l.flags |= 2048,
            ri(9, wf.bind(null, l, d, i, t), void 0, null),
            i
        },
        useId: function() {
            var e = nn()
              , t = Ze.identifierPrefix;
            if (Ue) {
                var i = pn
                  , l = hn;
                i = (l & ~(1 << 32 - $t(l) - 1)).toString(32) + i,
                t = ":" + t + "R" + i,
                i = ti++,
                0 < i && (t += "H" + i.toString(32)),
                t += ":"
            } else
                i = hv++,
                t = ":" + t + "r" + i.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
      , vv = {
        readContext: jt,
        useCallback: Pf,
        useContext: jt,
        useEffect: za,
        useImperativeHandle: Nf,
        useInsertionEffect: Cf,
        useLayoutEffect: Rf,
        useMemo: Of,
        useReducer: Fa,
        useRef: _f,
        useState: function() {
            return Fa(ni)
        },
        useDebugValue: Ba,
        useDeferredValue: function(e) {
            var t = Lt();
            return Af(t, Ge.memoizedState, e)
        },
        useTransition: function() {
            var e = Fa(ni)[0]
              , t = Lt().memoizedState;
            return [e, t]
        },
        useMutableSource: gf,
        useSyncExternalStore: yf,
        useId: jf,
        unstable_isNewReconciler: !1
    }
      , wv = {
        readContext: jt,
        useCallback: Pf,
        useContext: jt,
        useEffect: za,
        useImperativeHandle: Nf,
        useInsertionEffect: Cf,
        useLayoutEffect: Rf,
        useMemo: Of,
        useReducer: Ua,
        useRef: _f,
        useState: function() {
            return Ua(ni)
        },
        useDebugValue: Ba,
        useDeferredValue: function(e) {
            var t = Lt();
            return Ge === null ? t.memoizedState = e : Af(t, Ge.memoizedState, e)
        },
        useTransition: function() {
            var e = Ua(ni)[0]
              , t = Lt().memoizedState;
            return [e, t]
        },
        useMutableSource: gf,
        useSyncExternalStore: yf,
        useId: jf,
        unstable_isNewReconciler: !1
    };
    function Ht(e, t) {
        if (e && e.defaultProps) {
            t = L({}, t),
            e = e.defaultProps;
            for (var i in e)
                t[i] === void 0 && (t[i] = e[i]);
            return t
        }
        return t
    }
    function $a(e, t, i, l) {
        t = e.memoizedState,
        i = i(l, t),
        i = i == null ? t : L({}, t, i),
        e.memoizedState = i,
        e.lanes === 0 && (e.updateQueue.baseState = i)
    }
    var Co = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? ar(e) === e : !1
        },
        enqueueSetState: function(e, t, i) {
            e = e._reactInternals;
            var l = pt()
              , u = Bn(e)
              , d = gn(l, u);
            d.payload = t,
            i != null && (d.callback = i),
            t = Mn(e, d, u),
            t !== null && (Kt(t, e, u, l),
            vo(t, e, u))
        },
        enqueueReplaceState: function(e, t, i) {
            e = e._reactInternals;
            var l = pt()
              , u = Bn(e)
              , d = gn(l, u);
            d.tag = 1,
            d.payload = t,
            i != null && (d.callback = i),
            t = Mn(e, d, u),
            t !== null && (Kt(t, e, u, l),
            vo(t, e, u))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var i = pt()
              , l = Bn(e)
              , u = gn(i, l);
            u.tag = 2,
            t != null && (u.callback = t),
            t = Mn(e, u, l),
            t !== null && (Kt(t, e, l, i),
            vo(t, e, l))
        }
    };
    function Mf(e, t, i, l, u, d, p) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, d, p) : t.prototype && t.prototype.isPureReactComponent ? !Vs(i, l) || !Vs(u, d) : !0
    }
    function Ff(e, t, i) {
        var l = !1
          , u = Ln
          , d = t.contextType;
        return typeof d == "object" && d !== null ? d = jt(d) : (u = yt(t) ? cr : lt.current,
        l = t.contextTypes,
        d = (l = l != null) ? Gr(e, u) : Ln),
        t = new t(i,d),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = Co,
        e.stateNode = t,
        t._reactInternals = e,
        l && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = u,
        e.__reactInternalMemoizedMaskedChildContext = d),
        t
    }
    function Uf(e, t, i, l) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, l),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, l),
        t.state !== e && Co.enqueueReplaceState(t, t.state, null)
    }
    function Va(e, t, i, l) {
        var u = e.stateNode;
        u.props = i,
        u.state = e.memoizedState,
        u.refs = {},
        Na(e);
        var d = t.contextType;
        typeof d == "object" && d !== null ? u.context = jt(d) : (d = yt(t) ? cr : lt.current,
        u.context = Gr(e, d)),
        u.state = e.memoizedState,
        d = t.getDerivedStateFromProps,
        typeof d == "function" && ($a(e, t, d, i),
        u.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state,
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
        t !== u.state && Co.enqueueReplaceState(u, u.state, null),
        wo(e, i, u, l),
        u.state = e.memoizedState),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308)
    }
    function rs(e, t) {
        try {
            var i = ""
              , l = t;
            do
                i += ae(l),
                l = l.return;
            while (l);
            var u = i
        } catch (d) {
            u = `
Error generating stack: ` + d.message + `
` + d.stack
        }
        return {
            value: e,
            source: t,
            stack: u,
            digest: null
        }
    }
    function qa(e, t, i) {
        return {
            value: e,
            source: null,
            stack: i ?? null,
            digest: t ?? null
        }
    }
    function Ha(e, t) {
        try {
            console.error(t.value)
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }
    var xv = typeof WeakMap == "function" ? WeakMap : Map;
    function zf(e, t, i) {
        i = gn(-1, i),
        i.tag = 3,
        i.payload = {
            element: null
        };
        var l = t.value;
        return i.callback = function() {
            jo || (jo = !0,
            ou = l),
            Ha(e, t)
        }
        ,
        i
    }
    function Bf(e, t, i) {
        i = gn(-1, i),
        i.tag = 3;
        var l = e.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var u = t.value;
            i.payload = function() {
                return l(u)
            }
            ,
            i.callback = function() {
                Ha(e, t)
            }
        }
        var d = e.stateNode;
        return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
            Ha(e, t),
            typeof l != "function" && (Un === null ? Un = new Set([this]) : Un.add(this));
            var p = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: p !== null ? p : ""
            })
        }
        ),
        i
    }
    function $f(e, t, i) {
        var l = e.pingCache;
        if (l === null) {
            l = e.pingCache = new xv;
            var u = new Set;
            l.set(t, u)
        } else
            u = l.get(t),
            u === void 0 && (u = new Set,
            l.set(t, u));
        u.has(i) || (u.add(i),
        e = Lv.bind(null, e, t, i),
        t.then(e, e))
    }
    function Vf(e) {
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
    function qf(e, t, i, l, u) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
        i.flags |= 131072,
        i.flags &= -52805,
        i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = gn(-1, 1),
        t.tag = 2,
        Mn(i, t, 1))),
        i.lanes |= 1),
        e) : (e.flags |= 65536,
        e.lanes = u,
        e)
    }
    var Sv = M.ReactCurrentOwner
      , vt = !1;
    function ht(e, t, i, l) {
        t.child = e === null ? cf(t, null, i, l) : Zr(t, e.child, i, l)
    }
    function Hf(e, t, i, l, u) {
        i = i.render;
        var d = t.ref;
        return ts(t, u),
        l = Da(e, t, i, l, d, u),
        i = Ma(),
        e !== null && !vt ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~u,
        yn(e, t, u)) : (Ue && i && wa(t),
        t.flags |= 1,
        ht(e, t, l, u),
        t.child)
    }
    function Qf(e, t, i, l, u) {
        if (e === null) {
            var d = i.type;
            return typeof d == "function" && !hu(d) && d.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15,
            t.type = d,
            Wf(e, t, d, l, u)) : (e = Uo(i.type, null, l, t, t.mode, u),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (d = e.child,
        (e.lanes & u) === 0) {
            var p = d.memoizedProps;
            if (i = i.compare,
            i = i !== null ? i : Vs,
            i(p, l) && e.ref === t.ref)
                return yn(e, t, u)
        }
        return t.flags |= 1,
        e = Vn(d, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Wf(e, t, i, l, u) {
        if (e !== null) {
            var d = e.memoizedProps;
            if (Vs(d, l) && e.ref === t.ref)
                if (vt = !1,
                t.pendingProps = l = d,
                (e.lanes & u) !== 0)
                    (e.flags & 131072) !== 0 && (vt = !0);
                else
                    return t.lanes = e.lanes,
                    yn(e, t, u)
        }
        return Qa(e, t, i, l, u)
    }
    function Kf(e, t, i) {
        var l = t.pendingProps
          , u = l.children
          , d = e !== null ? e.memoizedState : null;
        if (l.mode === "hidden")
            if ((t.mode & 1) === 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Le(is, Pt),
                Pt |= i;
            else {
                if ((i & 1073741824) === 0)
                    return e = d !== null ? d.baseLanes | i : i,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    Le(is, Pt),
                    Pt |= e,
                    null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                l = d !== null ? d.baseLanes : i,
                Le(is, Pt),
                Pt |= l
            }
        else
            d !== null ? (l = d.baseLanes | i,
            t.memoizedState = null) : l = i,
            Le(is, Pt),
            Pt |= l;
        return ht(e, t, u, i),
        t.child
    }
    function Gf(e, t) {
        var i = t.ref;
        (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512,
        t.flags |= 2097152)
    }
    function Qa(e, t, i, l, u) {
        var d = yt(i) ? cr : lt.current;
        return d = Gr(t, d),
        ts(t, u),
        i = Da(e, t, i, l, d, u),
        l = Ma(),
        e !== null && !vt ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~u,
        yn(e, t, u)) : (Ue && l && wa(t),
        t.flags |= 1,
        ht(e, t, i, u),
        t.child)
    }
    function Yf(e, t, i, l, u) {
        if (yt(i)) {
            var d = !0;
            uo(t)
        } else
            d = !1;
        if (ts(t, u),
        t.stateNode === null)
            To(e, t),
            Ff(t, i, l),
            Va(t, i, l, u),
            l = !0;
        else if (e === null) {
            var p = t.stateNode
              , w = t.memoizedProps;
            p.props = w;
            var k = p.context
              , O = i.contextType;
            typeof O == "object" && O !== null ? O = jt(O) : (O = yt(i) ? cr : lt.current,
            O = Gr(t, O));
            var $ = i.getDerivedStateFromProps
              , V = typeof $ == "function" || typeof p.getSnapshotBeforeUpdate == "function";
            V || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (w !== l || k !== O) && Uf(t, p, l, O),
            Dn = !1;
            var z = t.memoizedState;
            p.state = z,
            wo(t, l, p, u),
            k = t.memoizedState,
            w !== l || z !== k || gt.current || Dn ? (typeof $ == "function" && ($a(t, i, $, l),
            k = t.memoizedState),
            (w = Dn || Mf(t, i, w, l, z, k, O)) ? (V || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(),
            typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()),
            typeof p.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = l,
            t.memoizedState = k),
            p.props = l,
            p.state = k,
            p.context = O,
            l = w) : (typeof p.componentDidMount == "function" && (t.flags |= 4194308),
            l = !1)
        } else {
            p = t.stateNode,
            ff(e, t),
            w = t.memoizedProps,
            O = t.type === t.elementType ? w : Ht(t.type, w),
            p.props = O,
            V = t.pendingProps,
            z = p.context,
            k = i.contextType,
            typeof k == "object" && k !== null ? k = jt(k) : (k = yt(i) ? cr : lt.current,
            k = Gr(t, k));
            var K = i.getDerivedStateFromProps;
            ($ = typeof K == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (w !== V || z !== k) && Uf(t, p, l, k),
            Dn = !1,
            z = t.memoizedState,
            p.state = z,
            wo(t, l, p, u);
            var J = t.memoizedState;
            w !== V || z !== J || gt.current || Dn ? (typeof K == "function" && ($a(t, i, K, l),
            J = t.memoizedState),
            (O = Dn || Mf(t, i, O, l, z, J, k) || !1) ? ($ || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(l, J, k),
            typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(l, J, k)),
            typeof p.componentDidUpdate == "function" && (t.flags |= 4),
            typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || w === e.memoizedProps && z === e.memoizedState || (t.flags |= 4),
            typeof p.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = l,
            t.memoizedState = J),
            p.props = l,
            p.state = J,
            p.context = k,
            l = O) : (typeof p.componentDidUpdate != "function" || w === e.memoizedProps && z === e.memoizedState || (t.flags |= 4),
            typeof p.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024),
            l = !1)
        }
        return Wa(e, t, i, l, d, u)
    }
    function Wa(e, t, i, l, u, d) {
        Gf(e, t);
        var p = (t.flags & 128) !== 0;
        if (!l && !p)
            return u && ef(t, i, !1),
            yn(e, t, d);
        l = t.stateNode,
        Sv.current = t;
        var w = p && typeof i.getDerivedStateFromError != "function" ? null : l.render();
        return t.flags |= 1,
        e !== null && p ? (t.child = Zr(t, e.child, null, d),
        t.child = Zr(t, null, w, d)) : ht(e, t, w, d),
        t.memoizedState = l.state,
        u && ef(t, i, !0),
        t.child
    }
    function Xf(e) {
        var t = e.stateNode;
        t.pendingContext ? Jd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Jd(e, t.context, !1),
        Pa(e, t.containerInfo)
    }
    function Jf(e, t, i, l, u) {
        return Jr(),
        ba(u),
        t.flags |= 256,
        ht(e, t, i, l),
        t.child
    }
    var Ka = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Ga(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }
    function Zf(e, t, i) {
        var l = t.pendingProps, u = ze.current, d = !1, p = (t.flags & 128) !== 0, w;
        if ((w = p) || (w = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
        w ? (d = !0,
        t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1),
        Le(ze, u & 1),
        e === null)
            return ka(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824,
            null) : (p = l.children,
            e = l.fallback,
            d ? (l = t.mode,
            d = t.child,
            p = {
                mode: "hidden",
                children: p
            },
            (l & 1) === 0 && d !== null ? (d.childLanes = 0,
            d.pendingProps = p) : d = zo(p, l, 0, null),
            e = xr(e, l, i, null),
            d.return = t,
            e.return = t,
            d.sibling = e,
            t.child = d,
            t.child.memoizedState = Ga(i),
            t.memoizedState = Ka,
            e) : Ya(t, p));
        if (u = e.memoizedState,
        u !== null && (w = u.dehydrated,
        w !== null))
            return kv(e, t, p, l, w, u, i);
        if (d) {
            d = l.fallback,
            p = t.mode,
            u = e.child,
            w = u.sibling;
            var k = {
                mode: "hidden",
                children: l.children
            };
            return (p & 1) === 0 && t.child !== u ? (l = t.child,
            l.childLanes = 0,
            l.pendingProps = k,
            t.deletions = null) : (l = Vn(u, k),
            l.subtreeFlags = u.subtreeFlags & 14680064),
            w !== null ? d = Vn(w, d) : (d = xr(d, p, i, null),
            d.flags |= 2),
            d.return = t,
            l.return = t,
            l.sibling = d,
            t.child = l,
            l = d,
            d = t.child,
            p = e.child.memoizedState,
            p = p === null ? Ga(i) : {
                baseLanes: p.baseLanes | i,
                cachePool: null,
                transitions: p.transitions
            },
            d.memoizedState = p,
            d.childLanes = e.childLanes & ~i,
            t.memoizedState = Ka,
            l
        }
        return d = e.child,
        e = d.sibling,
        l = Vn(d, {
            mode: "visible",
            children: l.children
        }),
        (t.mode & 1) === 0 && (l.lanes = i),
        l.return = t,
        l.sibling = null,
        e !== null && (i = t.deletions,
        i === null ? (t.deletions = [e],
        t.flags |= 16) : i.push(e)),
        t.child = l,
        t.memoizedState = null,
        l
    }
    function Ya(e, t) {
        return t = zo({
            mode: "visible",
            children: t
        }, e.mode, 0, null),
        t.return = e,
        e.child = t
    }
    function Ro(e, t, i, l) {
        return l !== null && ba(l),
        Zr(t, e.child, null, i),
        e = Ya(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function kv(e, t, i, l, u, d, p) {
        if (i)
            return t.flags & 256 ? (t.flags &= -257,
            l = qa(Error(s(422))),
            Ro(e, t, p, l)) : t.memoizedState !== null ? (t.child = e.child,
            t.flags |= 128,
            null) : (d = l.fallback,
            u = t.mode,
            l = zo({
                mode: "visible",
                children: l.children
            }, u, 0, null),
            d = xr(d, u, p, null),
            d.flags |= 2,
            l.return = t,
            d.return = t,
            l.sibling = d,
            t.child = l,
            (t.mode & 1) !== 0 && Zr(t, e.child, null, p),
            t.child.memoizedState = Ga(p),
            t.memoizedState = Ka,
            d);
        if ((t.mode & 1) === 0)
            return Ro(e, t, p, null);
        if (u.data === "$!") {
            if (l = u.nextSibling && u.nextSibling.dataset,
            l)
                var w = l.dgst;
            return l = w,
            d = Error(s(419)),
            l = qa(d, l, void 0),
            Ro(e, t, p, l)
        }
        if (w = (p & e.childLanes) !== 0,
        vt || w) {
            if (l = Ze,
            l !== null) {
                switch (p & -p) {
                case 4:
                    u = 2;
                    break;
                case 16:
                    u = 8;
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
                    u = 32;
                    break;
                case 536870912:
                    u = 268435456;
                    break;
                default:
                    u = 0
                }
                u = (u & (l.suspendedLanes | p)) !== 0 ? 0 : u,
                u !== 0 && u !== d.retryLane && (d.retryLane = u,
                mn(e, u),
                Kt(l, e, u, -1))
            }
            return fu(),
            l = qa(Error(s(421))),
            Ro(e, t, p, l)
        }
        return u.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = Iv.bind(null, e),
        u._reactRetry = t,
        null) : (e = d.treeContext,
        Nt = An(u.nextSibling),
        Tt = t,
        Ue = !0,
        qt = null,
        e !== null && (Ot[At++] = hn,
        Ot[At++] = pn,
        Ot[At++] = dr,
        hn = e.id,
        pn = e.overflow,
        dr = t),
        t = Ya(t, l.children),
        t.flags |= 4096,
        t)
    }
    function eh(e, t, i) {
        e.lanes |= t;
        var l = e.alternate;
        l !== null && (l.lanes |= t),
        Ra(e.return, t, i)
    }
    function Xa(e, t, i, l, u) {
        var d = e.memoizedState;
        d === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: i,
            tailMode: u
        } : (d.isBackwards = t,
        d.rendering = null,
        d.renderingStartTime = 0,
        d.last = l,
        d.tail = i,
        d.tailMode = u)
    }
    function th(e, t, i) {
        var l = t.pendingProps
          , u = l.revealOrder
          , d = l.tail;
        if (ht(e, t, l.children, i),
        l = ze.current,
        (l & 2) !== 0)
            l = l & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && eh(e, i, t);
                    else if (e.tag === 19)
                        eh(e, i, t);
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
            l &= 1
        }
        if (Le(ze, l),
        (t.mode & 1) === 0)
            t.memoizedState = null;
        else
            switch (u) {
            case "forwards":
                for (i = t.child,
                u = null; i !== null; )
                    e = i.alternate,
                    e !== null && xo(e) === null && (u = i),
                    i = i.sibling;
                i = u,
                i === null ? (u = t.child,
                t.child = null) : (u = i.sibling,
                i.sibling = null),
                Xa(t, !1, u, i, d);
                break;
            case "backwards":
                for (i = null,
                u = t.child,
                t.child = null; u !== null; ) {
                    if (e = u.alternate,
                    e !== null && xo(e) === null) {
                        t.child = u;
                        break
                    }
                    e = u.sibling,
                    u.sibling = i,
                    i = u,
                    u = e
                }
                Xa(t, !0, i, null, d);
                break;
            case "together":
                Xa(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
            }
        return t.child
    }
    function To(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
    }
    function yn(e, t, i) {
        if (e !== null && (t.dependencies = e.dependencies),
        gr |= t.lanes,
        (i & t.childLanes) === 0)
            return null;
        if (e !== null && t.child !== e.child)
            throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child,
            i = Vn(e, e.pendingProps),
            t.child = i,
            i.return = t; e.sibling !== null; )
                e = e.sibling,
                i = i.sibling = Vn(e, e.pendingProps),
                i.return = t;
            i.sibling = null
        }
        return t.child
    }
    function bv(e, t, i) {
        switch (t.tag) {
        case 3:
            Xf(t),
            Jr();
            break;
        case 5:
            mf(t);
            break;
        case 1:
            yt(t.type) && uo(t);
            break;
        case 4:
            Pa(t, t.stateNode.containerInfo);
            break;
        case 10:
            var l = t.type._context
              , u = t.memoizedProps.value;
            Le(go, l._currentValue),
            l._currentValue = u;
            break;
        case 13:
            if (l = t.memoizedState,
            l !== null)
                return l.dehydrated !== null ? (Le(ze, ze.current & 1),
                t.flags |= 128,
                null) : (i & t.child.childLanes) !== 0 ? Zf(e, t, i) : (Le(ze, ze.current & 1),
                e = yn(e, t, i),
                e !== null ? e.sibling : null);
            Le(ze, ze.current & 1);
            break;
        case 19:
            if (l = (i & t.childLanes) !== 0,
            (e.flags & 128) !== 0) {
                if (l)
                    return th(e, t, i);
                t.flags |= 128
            }
            if (u = t.memoizedState,
            u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
            Le(ze, ze.current),
            l)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            Kf(e, t, i)
        }
        return yn(e, t, i)
    }
    var nh, Ja, rh, sh;
    nh = function(e, t) {
        for (var i = t.child; i !== null; ) {
            if (i.tag === 5 || i.tag === 6)
                e.appendChild(i.stateNode);
            else if (i.tag !== 4 && i.child !== null) {
                i.child.return = i,
                i = i.child;
                continue
            }
            if (i === t)
                break;
            for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                    return;
                i = i.return
            }
            i.sibling.return = i.return,
            i = i.sibling
        }
    }
    ,
    Ja = function() {}
    ,
    rh = function(e, t, i, l) {
        var u = e.memoizedProps;
        if (u !== l) {
            e = t.stateNode,
            pr(tn.current);
            var d = null;
            switch (i) {
            case "input":
                u = En(e, u),
                l = En(e, l),
                d = [];
                break;
            case "select":
                u = L({}, u, {
                    value: void 0
                }),
                l = L({}, l, {
                    value: void 0
                }),
                d = [];
                break;
            case "textarea":
                u = Pl(e, u),
                l = Pl(e, l),
                d = [];
                break;
            default:
                typeof u.onClick != "function" && typeof l.onClick == "function" && (e.onclick = oo)
            }
            Al(i, l);
            var p;
            i = null;
            for (O in u)
                if (!l.hasOwnProperty(O) && u.hasOwnProperty(O) && u[O] != null)
                    if (O === "style") {
                        var w = u[O];
                        for (p in w)
                            w.hasOwnProperty(p) && (i || (i = {}),
                            i[p] = "")
                    } else
                        O !== "dangerouslySetInnerHTML" && O !== "children" && O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && O !== "autoFocus" && (a.hasOwnProperty(O) ? d || (d = []) : (d = d || []).push(O, null));
            for (O in l) {
                var k = l[O];
                if (w = u != null ? u[O] : void 0,
                l.hasOwnProperty(O) && k !== w && (k != null || w != null))
                    if (O === "style")
                        if (w) {
                            for (p in w)
                                !w.hasOwnProperty(p) || k && k.hasOwnProperty(p) || (i || (i = {}),
                                i[p] = "");
                            for (p in k)
                                k.hasOwnProperty(p) && w[p] !== k[p] && (i || (i = {}),
                                i[p] = k[p])
                        } else
                            i || (d || (d = []),
                            d.push(O, i)),
                            i = k;
                    else
                        O === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0,
                        w = w ? w.__html : void 0,
                        k != null && w !== k && (d = d || []).push(O, k)) : O === "children" ? typeof k != "string" && typeof k != "number" || (d = d || []).push(O, "" + k) : O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && (a.hasOwnProperty(O) ? (k != null && O === "onScroll" && Me("scroll", e),
                        d || w === k || (d = [])) : (d = d || []).push(O, k))
            }
            i && (d = d || []).push("style", i);
            var O = d;
            (t.updateQueue = O) && (t.flags |= 4)
        }
    }
    ,
    sh = function(e, t, i, l) {
        i !== l && (t.flags |= 4)
    }
    ;
    function si(e, t) {
        if (!Ue)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var i = null; t !== null; )
                    t.alternate !== null && (i = t),
                    t = t.sibling;
                i === null ? e.tail = null : i.sibling = null;
                break;
            case "collapsed":
                i = e.tail;
                for (var l = null; i !== null; )
                    i.alternate !== null && (l = i),
                    i = i.sibling;
                l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
            }
    }
    function ut(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , i = 0
          , l = 0;
        if (t)
            for (var u = e.child; u !== null; )
                i |= u.lanes | u.childLanes,
                l |= u.subtreeFlags & 14680064,
                l |= u.flags & 14680064,
                u.return = e,
                u = u.sibling;
        else
            for (u = e.child; u !== null; )
                i |= u.lanes | u.childLanes,
                l |= u.subtreeFlags,
                l |= u.flags,
                u.return = e,
                u = u.sibling;
        return e.subtreeFlags |= l,
        e.childLanes = i,
        t
    }
    function _v(e, t, i) {
        var l = t.pendingProps;
        switch (xa(t),
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
            return ut(t),
            null;
        case 1:
            return yt(t.type) && ao(),
            ut(t),
            null;
        case 3:
            return l = t.stateNode,
            ns(),
            Fe(gt),
            Fe(lt),
            ja(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (e === null || e.child === null) && (po(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            qt !== null && (uu(qt),
            qt = null))),
            Ja(e, t),
            ut(t),
            null;
        case 5:
            Oa(t);
            var u = pr(Zs.current);
            if (i = t.type,
            e !== null && t.stateNode != null)
                rh(e, t, i, l, u),
                e.ref !== t.ref && (t.flags |= 512,
                t.flags |= 2097152);
            else {
                if (!l) {
                    if (t.stateNode === null)
                        throw Error(s(166));
                    return ut(t),
                    null
                }
                if (e = pr(tn.current),
                po(t)) {
                    l = t.stateNode,
                    i = t.type;
                    var d = t.memoizedProps;
                    switch (l[en] = t,
                    l[Ks] = d,
                    e = (t.mode & 1) !== 0,
                    i) {
                    case "dialog":
                        Me("cancel", l),
                        Me("close", l);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Me("load", l);
                        break;
                    case "video":
                    case "audio":
                        for (u = 0; u < Hs.length; u++)
                            Me(Hs[u], l);
                        break;
                    case "source":
                        Me("error", l);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Me("error", l),
                        Me("load", l);
                        break;
                    case "details":
                        Me("toggle", l);
                        break;
                    case "input":
                        Mc(l, d),
                        Me("invalid", l);
                        break;
                    case "select":
                        l._wrapperState = {
                            wasMultiple: !!d.multiple
                        },
                        Me("invalid", l);
                        break;
                    case "textarea":
                        zc(l, d),
                        Me("invalid", l)
                    }
                    Al(i, d),
                    u = null;
                    for (var p in d)
                        if (d.hasOwnProperty(p)) {
                            var w = d[p];
                            p === "children" ? typeof w == "string" ? l.textContent !== w && (d.suppressHydrationWarning !== !0 && io(l.textContent, w, e),
                            u = ["children", w]) : typeof w == "number" && l.textContent !== "" + w && (d.suppressHydrationWarning !== !0 && io(l.textContent, w, e),
                            u = ["children", "" + w]) : a.hasOwnProperty(p) && w != null && p === "onScroll" && Me("scroll", l)
                        }
                    switch (i) {
                    case "input":
                        cn(l),
                        Uc(l, d, !0);
                        break;
                    case "textarea":
                        cn(l),
                        $c(l);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof d.onClick == "function" && (l.onclick = oo)
                    }
                    l = u,
                    t.updateQueue = l,
                    l !== null && (t.flags |= 4)
                } else {
                    p = u.nodeType === 9 ? u : u.ownerDocument,
                    e === "http://www.w3.org/1999/xhtml" && (e = Vc(i)),
                    e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = p.createElement("div"),
                    e.innerHTML = "<script><\/script>",
                    e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = p.createElement(i, {
                        is: l.is
                    }) : (e = p.createElement(i),
                    i === "select" && (p = e,
                    l.multiple ? p.multiple = !0 : l.size && (p.size = l.size))) : e = p.createElementNS(e, i),
                    e[en] = t,
                    e[Ks] = l,
                    nh(e, t, !1, !1),
                    t.stateNode = e;
                    e: {
                        switch (p = jl(i, l),
                        i) {
                        case "dialog":
                            Me("cancel", e),
                            Me("close", e),
                            u = l;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Me("load", e),
                            u = l;
                            break;
                        case "video":
                        case "audio":
                            for (u = 0; u < Hs.length; u++)
                                Me(Hs[u], e);
                            u = l;
                            break;
                        case "source":
                            Me("error", e),
                            u = l;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Me("error", e),
                            Me("load", e),
                            u = l;
                            break;
                        case "details":
                            Me("toggle", e),
                            u = l;
                            break;
                        case "input":
                            Mc(e, l),
                            u = En(e, l),
                            Me("invalid", e);
                            break;
                        case "option":
                            u = l;
                            break;
                        case "select":
                            e._wrapperState = {
                                wasMultiple: !!l.multiple
                            },
                            u = L({}, l, {
                                value: void 0
                            }),
                            Me("invalid", e);
                            break;
                        case "textarea":
                            zc(e, l),
                            u = Pl(e, l),
                            Me("invalid", e);
                            break;
                        default:
                            u = l
                        }
                        Al(i, u),
                        w = u;
                        for (d in w)
                            if (w.hasOwnProperty(d)) {
                                var k = w[d];
                                d === "style" ? Qc(e, k) : d === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0,
                                k != null && qc(e, k)) : d === "children" ? typeof k == "string" ? (i !== "textarea" || k !== "") && Cs(e, k) : typeof k == "number" && Cs(e, "" + k) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (a.hasOwnProperty(d) ? k != null && d === "onScroll" && Me("scroll", e) : k != null && B(e, d, k, p))
                            }
                        switch (i) {
                        case "input":
                            cn(e),
                            Uc(e, l, !1);
                            break;
                        case "textarea":
                            cn(e),
                            $c(e);
                            break;
                        case "option":
                            l.value != null && e.setAttribute("value", "" + Ce(l.value));
                            break;
                        case "select":
                            e.multiple = !!l.multiple,
                            d = l.value,
                            d != null ? Mr(e, !!l.multiple, d, !1) : l.defaultValue != null && Mr(e, !!l.multiple, l.defaultValue, !0);
                            break;
                        default:
                            typeof u.onClick == "function" && (e.onclick = oo)
                        }
                        switch (i) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            l = !!l.autoFocus;
                            break e;
                        case "img":
                            l = !0;
                            break e;
                        default:
                            l = !1
                        }
                    }
                    l && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                t.flags |= 2097152)
            }
            return ut(t),
            null;
        case 6:
            if (e && t.stateNode != null)
                sh(e, t, e.memoizedProps, l);
            else {
                if (typeof l != "string" && t.stateNode === null)
                    throw Error(s(166));
                if (i = pr(Zs.current),
                pr(tn.current),
                po(t)) {
                    if (l = t.stateNode,
                    i = t.memoizedProps,
                    l[en] = t,
                    (d = l.nodeValue !== i) && (e = Tt,
                    e !== null))
                        switch (e.tag) {
                        case 3:
                            io(l.nodeValue, i, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && io(l.nodeValue, i, (e.mode & 1) !== 0)
                        }
                    d && (t.flags |= 4)
                } else
                    l = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(l),
                    l[en] = t,
                    t.stateNode = l
            }
            return ut(t),
            null;
        case 13:
            if (Fe(ze),
            l = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Ue && Nt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                    lf(),
                    Jr(),
                    t.flags |= 98560,
                    d = !1;
                else if (d = po(t),
                l !== null && l.dehydrated !== null) {
                    if (e === null) {
                        if (!d)
                            throw Error(s(318));
                        if (d = t.memoizedState,
                        d = d !== null ? d.dehydrated : null,
                        !d)
                            throw Error(s(317));
                        d[en] = t
                    } else
                        Jr(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    ut(t),
                    d = !1
                } else
                    qt !== null && (uu(qt),
                    qt = null),
                    d = !0;
                if (!d)
                    return t.flags & 65536 ? t : null
            }
            return (t.flags & 128) !== 0 ? (t.lanes = i,
            t) : (l = l !== null,
            l !== (e !== null && e.memoizedState !== null) && l && (t.child.flags |= 8192,
            (t.mode & 1) !== 0 && (e === null || (ze.current & 1) !== 0 ? Ye === 0 && (Ye = 3) : fu())),
            t.updateQueue !== null && (t.flags |= 4),
            ut(t),
            null);
        case 4:
            return ns(),
            Ja(e, t),
            e === null && Qs(t.stateNode.containerInfo),
            ut(t),
            null;
        case 10:
            return Ca(t.type._context),
            ut(t),
            null;
        case 17:
            return yt(t.type) && ao(),
            ut(t),
            null;
        case 19:
            if (Fe(ze),
            d = t.memoizedState,
            d === null)
                return ut(t),
                null;
            if (l = (t.flags & 128) !== 0,
            p = d.rendering,
            p === null)
                if (l)
                    si(d, !1);
                else {
                    if (Ye !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (p = xo(e),
                            p !== null) {
                                for (t.flags |= 128,
                                si(d, !1),
                                l = p.updateQueue,
                                l !== null && (t.updateQueue = l,
                                t.flags |= 4),
                                t.subtreeFlags = 0,
                                l = i,
                                i = t.child; i !== null; )
                                    d = i,
                                    e = l,
                                    d.flags &= 14680066,
                                    p = d.alternate,
                                    p === null ? (d.childLanes = 0,
                                    d.lanes = e,
                                    d.child = null,
                                    d.subtreeFlags = 0,
                                    d.memoizedProps = null,
                                    d.memoizedState = null,
                                    d.updateQueue = null,
                                    d.dependencies = null,
                                    d.stateNode = null) : (d.childLanes = p.childLanes,
                                    d.lanes = p.lanes,
                                    d.child = p.child,
                                    d.subtreeFlags = 0,
                                    d.deletions = null,
                                    d.memoizedProps = p.memoizedProps,
                                    d.memoizedState = p.memoizedState,
                                    d.updateQueue = p.updateQueue,
                                    d.type = p.type,
                                    e = p.dependencies,
                                    d.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }),
                                    i = i.sibling;
                                return Le(ze, ze.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    d.tail !== null && qe() > os && (t.flags |= 128,
                    l = !0,
                    si(d, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!l)
                    if (e = xo(p),
                    e !== null) {
                        if (t.flags |= 128,
                        l = !0,
                        i = e.updateQueue,
                        i !== null && (t.updateQueue = i,
                        t.flags |= 4),
                        si(d, !0),
                        d.tail === null && d.tailMode === "hidden" && !p.alternate && !Ue)
                            return ut(t),
                            null
                    } else
                        2 * qe() - d.renderingStartTime > os && i !== 1073741824 && (t.flags |= 128,
                        l = !0,
                        si(d, !1),
                        t.lanes = 4194304);
                d.isBackwards ? (p.sibling = t.child,
                t.child = p) : (i = d.last,
                i !== null ? i.sibling = p : t.child = p,
                d.last = p)
            }
            return d.tail !== null ? (t = d.tail,
            d.rendering = t,
            d.tail = t.sibling,
            d.renderingStartTime = qe(),
            t.sibling = null,
            i = ze.current,
            Le(ze, l ? i & 1 | 2 : i & 1),
            t) : (ut(t),
            null);
        case 22:
        case 23:
            return du(),
            l = t.memoizedState !== null,
            e !== null && e.memoizedState !== null !== l && (t.flags |= 8192),
            l && (t.mode & 1) !== 0 ? (Pt & 1073741824) !== 0 && (ut(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : ut(t),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(s(156, t.tag))
    }
    function Ev(e, t) {
        switch (xa(t),
        t.tag) {
        case 1:
            return yt(t.type) && ao(),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return ns(),
            Fe(gt),
            Fe(lt),
            ja(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 5:
            return Oa(t),
            null;
        case 13:
            if (Fe(ze),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(s(340));
                Jr()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return Fe(ze),
            null;
        case 4:
            return ns(),
            null;
        case 10:
            return Ca(t.type._context),
            null;
        case 22:
        case 23:
            return du(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var No = !1
      , ct = !1
      , Cv = typeof WeakSet == "function" ? WeakSet : Set
      , Y = null;
    function ss(e, t) {
        var i = e.ref;
        if (i !== null)
            if (typeof i == "function")
                try {
                    i(null)
                } catch (l) {
                    $e(e, t, l)
                }
            else
                i.current = null
    }
    function Za(e, t, i) {
        try {
            i()
        } catch (l) {
            $e(e, t, l)
        }
    }
    var ih = !1;
    function Rv(e, t) {
        if (da = Ki,
        e = Dd(),
        ra(e)) {
            if ("selectionStart"in e)
                var i = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    i = (i = e.ownerDocument) && i.defaultView || window;
                    var l = i.getSelection && i.getSelection();
                    if (l && l.rangeCount !== 0) {
                        i = l.anchorNode;
                        var u = l.anchorOffset
                          , d = l.focusNode;
                        l = l.focusOffset;
                        try {
                            i.nodeType,
                            d.nodeType
                        } catch {
                            i = null;
                            break e
                        }
                        var p = 0
                          , w = -1
                          , k = -1
                          , O = 0
                          , $ = 0
                          , V = e
                          , z = null;
                        t: for (; ; ) {
                            for (var K; V !== i || u !== 0 && V.nodeType !== 3 || (w = p + u),
                            V !== d || l !== 0 && V.nodeType !== 3 || (k = p + l),
                            V.nodeType === 3 && (p += V.nodeValue.length),
                            (K = V.firstChild) !== null; )
                                z = V,
                                V = K;
                            for (; ; ) {
                                if (V === e)
                                    break t;
                                if (z === i && ++O === u && (w = p),
                                z === d && ++$ === l && (k = p),
                                (K = V.nextSibling) !== null)
                                    break;
                                V = z,
                                z = V.parentNode
                            }
                            V = K
                        }
                        i = w === -1 || k === -1 ? null : {
                            start: w,
                            end: k
                        }
                    } else
                        i = null
                }
            i = i || {
                start: 0,
                end: 0
            }
        } else
            i = null;
        for (fa = {
            focusedElem: e,
            selectionRange: i
        },
        Ki = !1,
        Y = t; Y !== null; )
            if (t = Y,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                Y = e;
            else
                for (; Y !== null; ) {
                    t = Y;
                    try {
                        var J = t.alternate;
                        if ((t.flags & 1024) !== 0)
                            switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (J !== null) {
                                    var te = J.memoizedProps
                                      , He = J.memoizedState
                                      , T = t.stateNode
                                      , C = T.getSnapshotBeforeUpdate(t.elementType === t.type ? te : Ht(t.type, te), He);
                                    T.__reactInternalSnapshotBeforeUpdate = C
                                }
                                break;
                            case 3:
                                var P = t.stateNode.containerInfo;
                                P.nodeType === 1 ? P.textContent = "" : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(s(163))
                            }
                    } catch (q) {
                        $e(t, t.return, q)
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        Y = e;
                        break
                    }
                    Y = t.return
                }
        return J = ih,
        ih = !1,
        J
    }
    function ii(e, t, i) {
        var l = t.updateQueue;
        if (l = l !== null ? l.lastEffect : null,
        l !== null) {
            var u = l = l.next;
            do {
                if ((u.tag & e) === e) {
                    var d = u.destroy;
                    u.destroy = void 0,
                    d !== void 0 && Za(t, i, d)
                }
                u = u.next
            } while (u !== l)
        }
    }
    function Po(e, t) {
        if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
            var i = t = t.next;
            do {
                if ((i.tag & e) === e) {
                    var l = i.create;
                    i.destroy = l()
                }
                i = i.next
            } while (i !== t)
        }
    }
    function eu(e) {
        var t = e.ref;
        if (t !== null) {
            var i = e.stateNode;
            switch (e.tag) {
            case 5:
                e = i;
                break;
            default:
                e = i
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }
    function oh(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        oh(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && (delete t[en],
        delete t[Ks],
        delete t[ga],
        delete t[uv],
        delete t[cv])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    function lh(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function ah(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || lh(e.return))
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
    function tu(e, t, i) {
        var l = e.tag;
        if (l === 5 || l === 6)
            e = e.stateNode,
            t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode,
            t.insertBefore(e, i)) : (t = i,
            t.appendChild(e)),
            i = i._reactRootContainer,
            i != null || t.onclick !== null || (t.onclick = oo));
        else if (l !== 4 && (e = e.child,
        e !== null))
            for (tu(e, t, i),
            e = e.sibling; e !== null; )
                tu(e, t, i),
                e = e.sibling
    }
    function nu(e, t, i) {
        var l = e.tag;
        if (l === 5 || l === 6)
            e = e.stateNode,
            t ? i.insertBefore(e, t) : i.appendChild(e);
        else if (l !== 4 && (e = e.child,
        e !== null))
            for (nu(e, t, i),
            e = e.sibling; e !== null; )
                nu(e, t, i),
                e = e.sibling
    }
    var nt = null
      , Qt = !1;
    function Fn(e, t, i) {
        for (i = i.child; i !== null; )
            uh(e, t, i),
            i = i.sibling
    }
    function uh(e, t, i) {
        if (Zt && typeof Zt.onCommitFiberUnmount == "function")
            try {
                Zt.onCommitFiberUnmount($i, i)
            } catch {}
        switch (i.tag) {
        case 5:
            ct || ss(i, t);
        case 6:
            var l = nt
              , u = Qt;
            nt = null,
            Fn(e, t, i),
            nt = l,
            Qt = u,
            nt !== null && (Qt ? (e = nt,
            i = i.stateNode,
            e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : nt.removeChild(i.stateNode));
            break;
        case 18:
            nt !== null && (Qt ? (e = nt,
            i = i.stateNode,
            e.nodeType === 8 ? ma(e.parentNode, i) : e.nodeType === 1 && ma(e, i),
            Ms(e)) : ma(nt, i.stateNode));
            break;
        case 4:
            l = nt,
            u = Qt,
            nt = i.stateNode.containerInfo,
            Qt = !0,
            Fn(e, t, i),
            nt = l,
            Qt = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ct && (l = i.updateQueue,
            l !== null && (l = l.lastEffect,
            l !== null))) {
                u = l = l.next;
                do {
                    var d = u
                      , p = d.destroy;
                    d = d.tag,
                    p !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && Za(i, t, p),
                    u = u.next
                } while (u !== l)
            }
            Fn(e, t, i);
            break;
        case 1:
            if (!ct && (ss(i, t),
            l = i.stateNode,
            typeof l.componentWillUnmount == "function"))
                try {
                    l.props = i.memoizedProps,
                    l.state = i.memoizedState,
                    l.componentWillUnmount()
                } catch (w) {
                    $e(i, t, w)
                }
            Fn(e, t, i);
            break;
        case 21:
            Fn(e, t, i);
            break;
        case 22:
            i.mode & 1 ? (ct = (l = ct) || i.memoizedState !== null,
            Fn(e, t, i),
            ct = l) : Fn(e, t, i);
            break;
        default:
            Fn(e, t, i)
        }
    }
    function ch(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var i = e.stateNode;
            i === null && (i = e.stateNode = new Cv),
            t.forEach(function(l) {
                var u = Dv.bind(null, e, l);
                i.has(l) || (i.add(l),
                l.then(u, u))
            })
        }
    }
    function Wt(e, t) {
        var i = t.deletions;
        if (i !== null)
            for (var l = 0; l < i.length; l++) {
                var u = i[l];
                try {
                    var d = e
                      , p = t
                      , w = p;
                    e: for (; w !== null; ) {
                        switch (w.tag) {
                        case 5:
                            nt = w.stateNode,
                            Qt = !1;
                            break e;
                        case 3:
                            nt = w.stateNode.containerInfo,
                            Qt = !0;
                            break e;
                        case 4:
                            nt = w.stateNode.containerInfo,
                            Qt = !0;
                            break e
                        }
                        w = w.return
                    }
                    if (nt === null)
                        throw Error(s(160));
                    uh(d, p, u),
                    nt = null,
                    Qt = !1;
                    var k = u.alternate;
                    k !== null && (k.return = null),
                    u.return = null
                } catch (O) {
                    $e(u, t, O)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; )
                dh(t, e),
                t = t.sibling
    }
    function dh(e, t) {
        var i = e.alternate
          , l = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Wt(t, e),
            rn(e),
            l & 4) {
                try {
                    ii(3, e, e.return),
                    Po(3, e)
                } catch (te) {
                    $e(e, e.return, te)
                }
                try {
                    ii(5, e, e.return)
                } catch (te) {
                    $e(e, e.return, te)
                }
            }
            break;
        case 1:
            Wt(t, e),
            rn(e),
            l & 512 && i !== null && ss(i, i.return);
            break;
        case 5:
            if (Wt(t, e),
            rn(e),
            l & 512 && i !== null && ss(i, i.return),
            e.flags & 32) {
                var u = e.stateNode;
                try {
                    Cs(u, "")
                } catch (te) {
                    $e(e, e.return, te)
                }
            }
            if (l & 4 && (u = e.stateNode,
            u != null)) {
                var d = e.memoizedProps
                  , p = i !== null ? i.memoizedProps : d
                  , w = e.type
                  , k = e.updateQueue;
                if (e.updateQueue = null,
                k !== null)
                    try {
                        w === "input" && d.type === "radio" && d.name != null && Fc(u, d),
                        jl(w, p);
                        var O = jl(w, d);
                        for (p = 0; p < k.length; p += 2) {
                            var $ = k[p]
                              , V = k[p + 1];
                            $ === "style" ? Qc(u, V) : $ === "dangerouslySetInnerHTML" ? qc(u, V) : $ === "children" ? Cs(u, V) : B(u, $, V, O)
                        }
                        switch (w) {
                        case "input":
                            Tl(u, d);
                            break;
                        case "textarea":
                            Bc(u, d);
                            break;
                        case "select":
                            var z = u._wrapperState.wasMultiple;
                            u._wrapperState.wasMultiple = !!d.multiple;
                            var K = d.value;
                            K != null ? Mr(u, !!d.multiple, K, !1) : z !== !!d.multiple && (d.defaultValue != null ? Mr(u, !!d.multiple, d.defaultValue, !0) : Mr(u, !!d.multiple, d.multiple ? [] : "", !1))
                        }
                        u[Ks] = d
                    } catch (te) {
                        $e(e, e.return, te)
                    }
            }
            break;
        case 6:
            if (Wt(t, e),
            rn(e),
            l & 4) {
                if (e.stateNode === null)
                    throw Error(s(162));
                u = e.stateNode,
                d = e.memoizedProps;
                try {
                    u.nodeValue = d
                } catch (te) {
                    $e(e, e.return, te)
                }
            }
            break;
        case 3:
            if (Wt(t, e),
            rn(e),
            l & 4 && i !== null && i.memoizedState.isDehydrated)
                try {
                    Ms(t.containerInfo)
                } catch (te) {
                    $e(e, e.return, te)
                }
            break;
        case 4:
            Wt(t, e),
            rn(e);
            break;
        case 13:
            Wt(t, e),
            rn(e),
            u = e.child,
            u.flags & 8192 && (d = u.memoizedState !== null,
            u.stateNode.isHidden = d,
            !d || u.alternate !== null && u.alternate.memoizedState !== null || (iu = qe())),
            l & 4 && ch(e);
            break;
        case 22:
            if ($ = i !== null && i.memoizedState !== null,
            e.mode & 1 ? (ct = (O = ct) || $,
            Wt(t, e),
            ct = O) : Wt(t, e),
            rn(e),
            l & 8192) {
                if (O = e.memoizedState !== null,
                (e.stateNode.isHidden = O) && !$ && (e.mode & 1) !== 0)
                    for (Y = e,
                    $ = e.child; $ !== null; ) {
                        for (V = Y = $; Y !== null; ) {
                            switch (z = Y,
                            K = z.child,
                            z.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                ii(4, z, z.return);
                                break;
                            case 1:
                                ss(z, z.return);
                                var J = z.stateNode;
                                if (typeof J.componentWillUnmount == "function") {
                                    l = z,
                                    i = z.return;
                                    try {
                                        t = l,
                                        J.props = t.memoizedProps,
                                        J.state = t.memoizedState,
                                        J.componentWillUnmount()
                                    } catch (te) {
                                        $e(l, i, te)
                                    }
                                }
                                break;
                            case 5:
                                ss(z, z.return);
                                break;
                            case 22:
                                if (z.memoizedState !== null) {
                                    ph(V);
                                    continue
                                }
                            }
                            K !== null ? (K.return = z,
                            Y = K) : ph(V)
                        }
                        $ = $.sibling
                    }
                e: for ($ = null,
                V = e; ; ) {
                    if (V.tag === 5) {
                        if ($ === null) {
                            $ = V;
                            try {
                                u = V.stateNode,
                                O ? (d = u.style,
                                typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (w = V.stateNode,
                                k = V.memoizedProps.style,
                                p = k != null && k.hasOwnProperty("display") ? k.display : null,
                                w.style.display = Hc("display", p))
                            } catch (te) {
                                $e(e, e.return, te)
                            }
                        }
                    } else if (V.tag === 6) {
                        if ($ === null)
                            try {
                                V.stateNode.nodeValue = O ? "" : V.memoizedProps
                            } catch (te) {
                                $e(e, e.return, te)
                            }
                    } else if ((V.tag !== 22 && V.tag !== 23 || V.memoizedState === null || V === e) && V.child !== null) {
                        V.child.return = V,
                        V = V.child;
                        continue
                    }
                    if (V === e)
                        break e;
                    for (; V.sibling === null; ) {
                        if (V.return === null || V.return === e)
                            break e;
                        $ === V && ($ = null),
                        V = V.return
                    }
                    $ === V && ($ = null),
                    V.sibling.return = V.return,
                    V = V.sibling
                }
            }
            break;
        case 19:
            Wt(t, e),
            rn(e),
            l & 4 && ch(e);
            break;
        case 21:
            break;
        default:
            Wt(t, e),
            rn(e)
        }
    }
    function rn(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var i = e.return; i !== null; ) {
                        if (lh(i)) {
                            var l = i;
                            break e
                        }
                        i = i.return
                    }
                    throw Error(s(160))
                }
                switch (l.tag) {
                case 5:
                    var u = l.stateNode;
                    l.flags & 32 && (Cs(u, ""),
                    l.flags &= -33);
                    var d = ah(e);
                    nu(e, d, u);
                    break;
                case 3:
                case 4:
                    var p = l.stateNode.containerInfo
                      , w = ah(e);
                    tu(e, w, p);
                    break;
                default:
                    throw Error(s(161))
                }
            } catch (k) {
                $e(e, e.return, k)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Tv(e, t, i) {
        Y = e,
        fh(e)
    }
    function fh(e, t, i) {
        for (var l = (e.mode & 1) !== 0; Y !== null; ) {
            var u = Y
              , d = u.child;
            if (u.tag === 22 && l) {
                var p = u.memoizedState !== null || No;
                if (!p) {
                    var w = u.alternate
                      , k = w !== null && w.memoizedState !== null || ct;
                    w = No;
                    var O = ct;
                    if (No = p,
                    (ct = k) && !O)
                        for (Y = u; Y !== null; )
                            p = Y,
                            k = p.child,
                            p.tag === 22 && p.memoizedState !== null ? mh(u) : k !== null ? (k.return = p,
                            Y = k) : mh(u);
                    for (; d !== null; )
                        Y = d,
                        fh(d),
                        d = d.sibling;
                    Y = u,
                    No = w,
                    ct = O
                }
                hh(e)
            } else
                (u.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = u,
                Y = d) : hh(e)
        }
    }
    function hh(e) {
        for (; Y !== null; ) {
            var t = Y;
            if ((t.flags & 8772) !== 0) {
                var i = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ct || Po(5, t);
                            break;
                        case 1:
                            var l = t.stateNode;
                            if (t.flags & 4 && !ct)
                                if (i === null)
                                    l.componentDidMount();
                                else {
                                    var u = t.elementType === t.type ? i.memoizedProps : Ht(t.type, i.memoizedProps);
                                    l.componentDidUpdate(u, i.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
                                }
                            var d = t.updateQueue;
                            d !== null && pf(t, d, l);
                            break;
                        case 3:
                            var p = t.updateQueue;
                            if (p !== null) {
                                if (i = null,
                                t.child !== null)
                                    switch (t.child.tag) {
                                    case 5:
                                        i = t.child.stateNode;
                                        break;
                                    case 1:
                                        i = t.child.stateNode
                                    }
                                pf(t, p, i)
                            }
                            break;
                        case 5:
                            var w = t.stateNode;
                            if (i === null && t.flags & 4) {
                                i = w;
                                var k = t.memoizedProps;
                                switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    k.autoFocus && i.focus();
                                    break;
                                case "img":
                                    k.src && (i.src = k.src)
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
                                var O = t.alternate;
                                if (O !== null) {
                                    var $ = O.memoizedState;
                                    if ($ !== null) {
                                        var V = $.dehydrated;
                                        V !== null && Ms(V)
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
                            throw Error(s(163))
                        }
                    ct || t.flags & 512 && eu(t)
                } catch (z) {
                    $e(t, t.return, z)
                }
            }
            if (t === e) {
                Y = null;
                break
            }
            if (i = t.sibling,
            i !== null) {
                i.return = t.return,
                Y = i;
                break
            }
            Y = t.return
        }
    }
    function ph(e) {
        for (; Y !== null; ) {
            var t = Y;
            if (t === e) {
                Y = null;
                break
            }
            var i = t.sibling;
            if (i !== null) {
                i.return = t.return,
                Y = i;
                break
            }
            Y = t.return
        }
    }
    function mh(e) {
        for (; Y !== null; ) {
            var t = Y;
            try {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var i = t.return;
                    try {
                        Po(4, t)
                    } catch (k) {
                        $e(t, i, k)
                    }
                    break;
                case 1:
                    var l = t.stateNode;
                    if (typeof l.componentDidMount == "function") {
                        var u = t.return;
                        try {
                            l.componentDidMount()
                        } catch (k) {
                            $e(t, u, k)
                        }
                    }
                    var d = t.return;
                    try {
                        eu(t)
                    } catch (k) {
                        $e(t, d, k)
                    }
                    break;
                case 5:
                    var p = t.return;
                    try {
                        eu(t)
                    } catch (k) {
                        $e(t, p, k)
                    }
                }
            } catch (k) {
                $e(t, t.return, k)
            }
            if (t === e) {
                Y = null;
                break
            }
            var w = t.sibling;
            if (w !== null) {
                w.return = t.return,
                Y = w;
                break
            }
            Y = t.return
        }
    }
    var Nv = Math.ceil
      , Oo = M.ReactCurrentDispatcher
      , ru = M.ReactCurrentOwner
      , It = M.ReactCurrentBatchConfig
      , Ee = 0
      , Ze = null
      , We = null
      , rt = 0
      , Pt = 0
      , is = jn(0)
      , Ye = 0
      , oi = null
      , gr = 0
      , Ao = 0
      , su = 0
      , li = null
      , wt = null
      , iu = 0
      , os = 1 / 0
      , vn = null
      , jo = !1
      , ou = null
      , Un = null
      , Lo = !1
      , zn = null
      , Io = 0
      , ai = 0
      , lu = null
      , Do = -1
      , Mo = 0;
    function pt() {
        return (Ee & 6) !== 0 ? qe() : Do !== -1 ? Do : Do = qe()
    }
    function Bn(e) {
        return (e.mode & 1) === 0 ? 1 : (Ee & 2) !== 0 && rt !== 0 ? rt & -rt : fv.transition !== null ? (Mo === 0 && (Mo = ld()),
        Mo) : (e = Oe,
        e !== 0 || (e = window.event,
        e = e === void 0 ? 16 : gd(e.type)),
        e)
    }
    function Kt(e, t, i, l) {
        if (50 < ai)
            throw ai = 0,
            lu = null,
            Error(s(185));
        As(e, i, l),
        ((Ee & 2) === 0 || e !== Ze) && (e === Ze && ((Ee & 2) === 0 && (Ao |= i),
        Ye === 4 && $n(e, rt)),
        xt(e, l),
        i === 1 && Ee === 0 && (t.mode & 1) === 0 && (os = qe() + 500,
        co && In()))
    }
    function xt(e, t) {
        var i = e.callbackNode;
        fy(e, t);
        var l = Hi(e, e === Ze ? rt : 0);
        if (l === 0)
            i !== null && sd(i),
            e.callbackNode = null,
            e.callbackPriority = 0;
        else if (t = l & -l,
        e.callbackPriority !== t) {
            if (i != null && sd(i),
            t === 1)
                e.tag === 0 ? dv(yh.bind(null, e)) : tf(yh.bind(null, e)),
                lv(function() {
                    (Ee & 6) === 0 && In()
                }),
                i = null;
            else {
                switch (ad(l)) {
                case 1:
                    i = zl;
                    break;
                case 4:
                    i = id;
                    break;
                case 16:
                    i = Bi;
                    break;
                case 536870912:
                    i = od;
                    break;
                default:
                    i = Bi
                }
                i = Eh(i, gh.bind(null, e))
            }
            e.callbackPriority = t,
            e.callbackNode = i
        }
    }
    function gh(e, t) {
        if (Do = -1,
        Mo = 0,
        (Ee & 6) !== 0)
            throw Error(s(327));
        var i = e.callbackNode;
        if (ls() && e.callbackNode !== i)
            return null;
        var l = Hi(e, e === Ze ? rt : 0);
        if (l === 0)
            return null;
        if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t)
            t = Fo(e, l);
        else {
            t = l;
            var u = Ee;
            Ee |= 2;
            var d = wh();
            (Ze !== e || rt !== t) && (vn = null,
            os = qe() + 500,
            vr(e, t));
            do
                try {
                    Av();
                    break
                } catch (w) {
                    vh(e, w)
                }
            while (!0);
            Ea(),
            Oo.current = d,
            Ee = u,
            We !== null ? t = 0 : (Ze = null,
            rt = 0,
            t = Ye)
        }
        if (t !== 0) {
            if (t === 2 && (u = Bl(e),
            u !== 0 && (l = u,
            t = au(e, u))),
            t === 1)
                throw i = oi,
                vr(e, 0),
                $n(e, l),
                xt(e, qe()),
                i;
            if (t === 6)
                $n(e, l);
            else {
                if (u = e.current.alternate,
                (l & 30) === 0 && !Pv(u) && (t = Fo(e, l),
                t === 2 && (d = Bl(e),
                d !== 0 && (l = d,
                t = au(e, d))),
                t === 1))
                    throw i = oi,
                    vr(e, 0),
                    $n(e, l),
                    xt(e, qe()),
                    i;
                switch (e.finishedWork = u,
                e.finishedLanes = l,
                t) {
                case 0:
                case 1:
                    throw Error(s(345));
                case 2:
                    wr(e, wt, vn);
                    break;
                case 3:
                    if ($n(e, l),
                    (l & 130023424) === l && (t = iu + 500 - qe(),
                    10 < t)) {
                        if (Hi(e, 0) !== 0)
                            break;
                        if (u = e.suspendedLanes,
                        (u & l) !== l) {
                            pt(),
                            e.pingedLanes |= e.suspendedLanes & u;
                            break
                        }
                        e.timeoutHandle = pa(wr.bind(null, e, wt, vn), t);
                        break
                    }
                    wr(e, wt, vn);
                    break;
                case 4:
                    if ($n(e, l),
                    (l & 4194240) === l)
                        break;
                    for (t = e.eventTimes,
                    u = -1; 0 < l; ) {
                        var p = 31 - $t(l);
                        d = 1 << p,
                        p = t[p],
                        p > u && (u = p),
                        l &= ~d
                    }
                    if (l = u,
                    l = qe() - l,
                    l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Nv(l / 1960)) - l,
                    10 < l) {
                        e.timeoutHandle = pa(wr.bind(null, e, wt, vn), l);
                        break
                    }
                    wr(e, wt, vn);
                    break;
                case 5:
                    wr(e, wt, vn);
                    break;
                default:
                    throw Error(s(329))
                }
            }
        }
        return xt(e, qe()),
        e.callbackNode === i ? gh.bind(null, e) : null
    }
    function au(e, t) {
        var i = li;
        return e.current.memoizedState.isDehydrated && (vr(e, t).flags |= 256),
        e = Fo(e, t),
        e !== 2 && (t = wt,
        wt = i,
        t !== null && uu(t)),
        e
    }
    function uu(e) {
        wt === null ? wt = e : wt.push.apply(wt, e)
    }
    function Pv(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var i = t.updateQueue;
                if (i !== null && (i = i.stores,
                i !== null))
                    for (var l = 0; l < i.length; l++) {
                        var u = i[l]
                          , d = u.getSnapshot;
                        u = u.value;
                        try {
                            if (!Vt(d(), u))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (i = t.child,
            t.subtreeFlags & 16384 && i !== null)
                i.return = t,
                t = i;
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
    function $n(e, t) {
        for (t &= ~su,
        t &= ~Ao,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t; ) {
            var i = 31 - $t(t)
              , l = 1 << i;
            e[i] = -1,
            t &= ~l
        }
    }
    function yh(e) {
        if ((Ee & 6) !== 0)
            throw Error(s(327));
        ls();
        var t = Hi(e, 0);
        if ((t & 1) === 0)
            return xt(e, qe()),
            null;
        var i = Fo(e, t);
        if (e.tag !== 0 && i === 2) {
            var l = Bl(e);
            l !== 0 && (t = l,
            i = au(e, l))
        }
        if (i === 1)
            throw i = oi,
            vr(e, 0),
            $n(e, t),
            xt(e, qe()),
            i;
        if (i === 6)
            throw Error(s(345));
        return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        wr(e, wt, vn),
        xt(e, qe()),
        null
    }
    function cu(e, t) {
        var i = Ee;
        Ee |= 1;
        try {
            return e(t)
        } finally {
            Ee = i,
            Ee === 0 && (os = qe() + 500,
            co && In())
        }
    }
    function yr(e) {
        zn !== null && zn.tag === 0 && (Ee & 6) === 0 && ls();
        var t = Ee;
        Ee |= 1;
        var i = It.transition
          , l = Oe;
        try {
            if (It.transition = null,
            Oe = 1,
            e)
                return e()
        } finally {
            Oe = l,
            It.transition = i,
            Ee = t,
            (Ee & 6) === 0 && In()
        }
    }
    function du() {
        Pt = is.current,
        Fe(is)
    }
    function vr(e, t) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var i = e.timeoutHandle;
        if (i !== -1 && (e.timeoutHandle = -1,
        ov(i)),
        We !== null)
            for (i = We.return; i !== null; ) {
                var l = i;
                switch (xa(l),
                l.tag) {
                case 1:
                    l = l.type.childContextTypes,
                    l != null && ao();
                    break;
                case 3:
                    ns(),
                    Fe(gt),
                    Fe(lt),
                    ja();
                    break;
                case 5:
                    Oa(l);
                    break;
                case 4:
                    ns();
                    break;
                case 13:
                    Fe(ze);
                    break;
                case 19:
                    Fe(ze);
                    break;
                case 10:
                    Ca(l.type._context);
                    break;
                case 22:
                case 23:
                    du()
                }
                i = i.return
            }
        if (Ze = e,
        We = e = Vn(e.current, null),
        rt = Pt = t,
        Ye = 0,
        oi = null,
        su = Ao = gr = 0,
        wt = li = null,
        hr !== null) {
            for (t = 0; t < hr.length; t++)
                if (i = hr[t],
                l = i.interleaved,
                l !== null) {
                    i.interleaved = null;
                    var u = l.next
                      , d = i.pending;
                    if (d !== null) {
                        var p = d.next;
                        d.next = u,
                        l.next = p
                    }
                    i.pending = l
                }
            hr = null
        }
        return e
    }
    function vh(e, t) {
        do {
            var i = We;
            try {
                if (Ea(),
                So.current = Eo,
                ko) {
                    for (var l = Be.memoizedState; l !== null; ) {
                        var u = l.queue;
                        u !== null && (u.pending = null),
                        l = l.next
                    }
                    ko = !1
                }
                if (mr = 0,
                Je = Ge = Be = null,
                ei = !1,
                ti = 0,
                ru.current = null,
                i === null || i.return === null) {
                    Ye = 1,
                    oi = t,
                    We = null;
                    break
                }
                e: {
                    var d = e
                      , p = i.return
                      , w = i
                      , k = t;
                    if (t = rt,
                    w.flags |= 32768,
                    k !== null && typeof k == "object" && typeof k.then == "function") {
                        var O = k
                          , $ = w
                          , V = $.tag;
                        if (($.mode & 1) === 0 && (V === 0 || V === 11 || V === 15)) {
                            var z = $.alternate;
                            z ? ($.updateQueue = z.updateQueue,
                            $.memoizedState = z.memoizedState,
                            $.lanes = z.lanes) : ($.updateQueue = null,
                            $.memoizedState = null)
                        }
                        var K = Vf(p);
                        if (K !== null) {
                            K.flags &= -257,
                            qf(K, p, w, d, t),
                            K.mode & 1 && $f(d, O, t),
                            t = K,
                            k = O;
                            var J = t.updateQueue;
                            if (J === null) {
                                var te = new Set;
                                te.add(k),
                                t.updateQueue = te
                            } else
                                J.add(k);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                $f(d, O, t),
                                fu();
                                break e
                            }
                            k = Error(s(426))
                        }
                    } else if (Ue && w.mode & 1) {
                        var He = Vf(p);
                        if (He !== null) {
                            (He.flags & 65536) === 0 && (He.flags |= 256),
                            qf(He, p, w, d, t),
                            ba(rs(k, w));
                            break e
                        }
                    }
                    d = k = rs(k, w),
                    Ye !== 4 && (Ye = 2),
                    li === null ? li = [d] : li.push(d),
                    d = p;
                    do {
                        switch (d.tag) {
                        case 3:
                            d.flags |= 65536,
                            t &= -t,
                            d.lanes |= t;
                            var T = zf(d, k, t);
                            hf(d, T);
                            break e;
                        case 1:
                            w = k;
                            var C = d.type
                              , P = d.stateNode;
                            if ((d.flags & 128) === 0 && (typeof C.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (Un === null || !Un.has(P)))) {
                                d.flags |= 65536,
                                t &= -t,
                                d.lanes |= t;
                                var q = Bf(d, w, t);
                                hf(d, q);
                                break e
                            }
                        }
                        d = d.return
                    } while (d !== null)
                }
                Sh(i)
            } catch (ne) {
                t = ne,
                We === i && i !== null && (We = i = i.return);
                continue
            }
            break
        } while (!0)
    }
    function wh() {
        var e = Oo.current;
        return Oo.current = Eo,
        e === null ? Eo : e
    }
    function fu() {
        (Ye === 0 || Ye === 3 || Ye === 2) && (Ye = 4),
        Ze === null || (gr & 268435455) === 0 && (Ao & 268435455) === 0 || $n(Ze, rt)
    }
    function Fo(e, t) {
        var i = Ee;
        Ee |= 2;
        var l = wh();
        (Ze !== e || rt !== t) && (vn = null,
        vr(e, t));
        do
            try {
                Ov();
                break
            } catch (u) {
                vh(e, u)
            }
        while (!0);
        if (Ea(),
        Ee = i,
        Oo.current = l,
        We !== null)
            throw Error(s(261));
        return Ze = null,
        rt = 0,
        Ye
    }
    function Ov() {
        for (; We !== null; )
            xh(We)
    }
    function Av() {
        for (; We !== null && !ry(); )
            xh(We)
    }
    function xh(e) {
        var t = _h(e.alternate, e, Pt);
        e.memoizedProps = e.pendingProps,
        t === null ? Sh(e) : We = t,
        ru.current = null
    }
    function Sh(e) {
        var t = e;
        do {
            var i = t.alternate;
            if (e = t.return,
            (t.flags & 32768) === 0) {
                if (i = _v(i, t, Pt),
                i !== null) {
                    We = i;
                    return
                }
            } else {
                if (i = Ev(i, t),
                i !== null) {
                    i.flags &= 32767,
                    We = i;
                    return
                }
                if (e !== null)
                    e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
                else {
                    Ye = 6,
                    We = null;
                    return
                }
            }
            if (t = t.sibling,
            t !== null) {
                We = t;
                return
            }
            We = t = e
        } while (t !== null);
        Ye === 0 && (Ye = 5)
    }
    function wr(e, t, i) {
        var l = Oe
          , u = It.transition;
        try {
            It.transition = null,
            Oe = 1,
            jv(e, t, i, l)
        } finally {
            It.transition = u,
            Oe = l
        }
        return null
    }
    function jv(e, t, i, l) {
        do
            ls();
        while (zn !== null);
        if ((Ee & 6) !== 0)
            throw Error(s(327));
        i = e.finishedWork;
        var u = e.finishedLanes;
        if (i === null)
            return null;
        if (e.finishedWork = null,
        e.finishedLanes = 0,
        i === e.current)
            throw Error(s(177));
        e.callbackNode = null,
        e.callbackPriority = 0;
        var d = i.lanes | i.childLanes;
        if (hy(e, d),
        e === Ze && (We = Ze = null,
        rt = 0),
        (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Lo || (Lo = !0,
        Eh(Bi, function() {
            return ls(),
            null
        })),
        d = (i.flags & 15990) !== 0,
        (i.subtreeFlags & 15990) !== 0 || d) {
            d = It.transition,
            It.transition = null;
            var p = Oe;
            Oe = 1;
            var w = Ee;
            Ee |= 4,
            ru.current = null,
            Rv(e, i),
            dh(i, e),
            Zy(fa),
            Ki = !!da,
            fa = da = null,
            e.current = i,
            Tv(i),
            sy(),
            Ee = w,
            Oe = p,
            It.transition = d
        } else
            e.current = i;
        if (Lo && (Lo = !1,
        zn = e,
        Io = u),
        d = e.pendingLanes,
        d === 0 && (Un = null),
        ly(i.stateNode),
        xt(e, qe()),
        t !== null)
            for (l = e.onRecoverableError,
            i = 0; i < t.length; i++)
                u = t[i],
                l(u.value, {
                    componentStack: u.stack,
                    digest: u.digest
                });
        if (jo)
            throw jo = !1,
            e = ou,
            ou = null,
            e;
        return (Io & 1) !== 0 && e.tag !== 0 && ls(),
        d = e.pendingLanes,
        (d & 1) !== 0 ? e === lu ? ai++ : (ai = 0,
        lu = e) : ai = 0,
        In(),
        null
    }
    function ls() {
        if (zn !== null) {
            var e = ad(Io)
              , t = It.transition
              , i = Oe;
            try {
                if (It.transition = null,
                Oe = 16 > e ? 16 : e,
                zn === null)
                    var l = !1;
                else {
                    if (e = zn,
                    zn = null,
                    Io = 0,
                    (Ee & 6) !== 0)
                        throw Error(s(331));
                    var u = Ee;
                    for (Ee |= 4,
                    Y = e.current; Y !== null; ) {
                        var d = Y
                          , p = d.child;
                        if ((Y.flags & 16) !== 0) {
                            var w = d.deletions;
                            if (w !== null) {
                                for (var k = 0; k < w.length; k++) {
                                    var O = w[k];
                                    for (Y = O; Y !== null; ) {
                                        var $ = Y;
                                        switch ($.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ii(8, $, d)
                                        }
                                        var V = $.child;
                                        if (V !== null)
                                            V.return = $,
                                            Y = V;
                                        else
                                            for (; Y !== null; ) {
                                                $ = Y;
                                                var z = $.sibling
                                                  , K = $.return;
                                                if (oh($),
                                                $ === O) {
                                                    Y = null;
                                                    break
                                                }
                                                if (z !== null) {
                                                    z.return = K,
                                                    Y = z;
                                                    break
                                                }
                                                Y = K
                                            }
                                    }
                                }
                                var J = d.alternate;
                                if (J !== null) {
                                    var te = J.child;
                                    if (te !== null) {
                                        J.child = null;
                                        do {
                                            var He = te.sibling;
                                            te.sibling = null,
                                            te = He
                                        } while (te !== null)
                                    }
                                }
                                Y = d
                            }
                        }
                        if ((d.subtreeFlags & 2064) !== 0 && p !== null)
                            p.return = d,
                            Y = p;
                        else
                            e: for (; Y !== null; ) {
                                if (d = Y,
                                (d.flags & 2048) !== 0)
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ii(9, d, d.return)
                                    }
                                var T = d.sibling;
                                if (T !== null) {
                                    T.return = d.return,
                                    Y = T;
                                    break e
                                }
                                Y = d.return
                            }
                    }
                    var C = e.current;
                    for (Y = C; Y !== null; ) {
                        p = Y;
                        var P = p.child;
                        if ((p.subtreeFlags & 2064) !== 0 && P !== null)
                            P.return = p,
                            Y = P;
                        else
                            e: for (p = C; Y !== null; ) {
                                if (w = Y,
                                (w.flags & 2048) !== 0)
                                    try {
                                        switch (w.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Po(9, w)
                                        }
                                    } catch (ne) {
                                        $e(w, w.return, ne)
                                    }
                                if (w === p) {
                                    Y = null;
                                    break e
                                }
                                var q = w.sibling;
                                if (q !== null) {
                                    q.return = w.return,
                                    Y = q;
                                    break e
                                }
                                Y = w.return
                            }
                    }
                    if (Ee = u,
                    In(),
                    Zt && typeof Zt.onPostCommitFiberRoot == "function")
                        try {
                            Zt.onPostCommitFiberRoot($i, e)
                        } catch {}
                    l = !0
                }
                return l
            } finally {
                Oe = i,
                It.transition = t
            }
        }
        return !1
    }
    function kh(e, t, i) {
        t = rs(i, t),
        t = zf(e, t, 1),
        e = Mn(e, t, 1),
        t = pt(),
        e !== null && (As(e, 1, t),
        xt(e, t))
    }
    function $e(e, t, i) {
        if (e.tag === 3)
            kh(e, e, i);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    kh(t, e, i);
                    break
                } else if (t.tag === 1) {
                    var l = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Un === null || !Un.has(l))) {
                        e = rs(i, e),
                        e = Bf(t, e, 1),
                        t = Mn(t, e, 1),
                        e = pt(),
                        t !== null && (As(t, 1, e),
                        xt(t, e));
                        break
                    }
                }
                t = t.return
            }
    }
    function Lv(e, t, i) {
        var l = e.pingCache;
        l !== null && l.delete(t),
        t = pt(),
        e.pingedLanes |= e.suspendedLanes & i,
        Ze === e && (rt & i) === i && (Ye === 4 || Ye === 3 && (rt & 130023424) === rt && 500 > qe() - iu ? vr(e, 0) : su |= i),
        xt(e, t)
    }
    function bh(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = qi,
        qi <<= 1,
        (qi & 130023424) === 0 && (qi = 4194304)));
        var i = pt();
        e = mn(e, t),
        e !== null && (As(e, t, i),
        xt(e, i))
    }
    function Iv(e) {
        var t = e.memoizedState
          , i = 0;
        t !== null && (i = t.retryLane),
        bh(e, i)
    }
    function Dv(e, t) {
        var i = 0;
        switch (e.tag) {
        case 13:
            var l = e.stateNode
              , u = e.memoizedState;
            u !== null && (i = u.retryLane);
            break;
        case 19:
            l = e.stateNode;
            break;
        default:
            throw Error(s(314))
        }
        l !== null && l.delete(t),
        bh(e, i)
    }
    var _h;
    _h = function(e, t, i) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || gt.current)
                vt = !0;
            else {
                if ((e.lanes & i) === 0 && (t.flags & 128) === 0)
                    return vt = !1,
                    bv(e, t, i);
                vt = (e.flags & 131072) !== 0
            }
        else
            vt = !1,
            Ue && (t.flags & 1048576) !== 0 && nf(t, ho, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 2:
            var l = t.type;
            To(e, t),
            e = t.pendingProps;
            var u = Gr(t, lt.current);
            ts(t, i),
            u = Da(null, t, l, e, u, i);
            var d = Ma();
            return t.flags |= 1,
            typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1,
            t.memoizedState = null,
            t.updateQueue = null,
            yt(l) ? (d = !0,
            uo(t)) : d = !1,
            t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            Na(t),
            u.updater = Co,
            t.stateNode = u,
            u._reactInternals = t,
            Va(t, l, e, i),
            t = Wa(null, t, l, !0, d, i)) : (t.tag = 0,
            Ue && d && wa(t),
            ht(null, t, u, i),
            t = t.child),
            t;
        case 16:
            l = t.elementType;
            e: {
                switch (To(e, t),
                e = t.pendingProps,
                u = l._init,
                l = u(l._payload),
                t.type = l,
                u = t.tag = Fv(l),
                e = Ht(l, e),
                u) {
                case 0:
                    t = Qa(null, t, l, e, i);
                    break e;
                case 1:
                    t = Yf(null, t, l, e, i);
                    break e;
                case 11:
                    t = Hf(null, t, l, e, i);
                    break e;
                case 14:
                    t = Qf(null, t, l, Ht(l.type, e), i);
                    break e
                }
                throw Error(s(306, l, ""))
            }
            return t;
        case 0:
            return l = t.type,
            u = t.pendingProps,
            u = t.elementType === l ? u : Ht(l, u),
            Qa(e, t, l, u, i);
        case 1:
            return l = t.type,
            u = t.pendingProps,
            u = t.elementType === l ? u : Ht(l, u),
            Yf(e, t, l, u, i);
        case 3:
            e: {
                if (Xf(t),
                e === null)
                    throw Error(s(387));
                l = t.pendingProps,
                d = t.memoizedState,
                u = d.element,
                ff(e, t),
                wo(t, l, null, i);
                var p = t.memoizedState;
                if (l = p.element,
                d.isDehydrated)
                    if (d = {
                        element: l,
                        isDehydrated: !1,
                        cache: p.cache,
                        pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                        transitions: p.transitions
                    },
                    t.updateQueue.baseState = d,
                    t.memoizedState = d,
                    t.flags & 256) {
                        u = rs(Error(s(423)), t),
                        t = Jf(e, t, l, i, u);
                        break e
                    } else if (l !== u) {
                        u = rs(Error(s(424)), t),
                        t = Jf(e, t, l, i, u);
                        break e
                    } else
                        for (Nt = An(t.stateNode.containerInfo.firstChild),
                        Tt = t,
                        Ue = !0,
                        qt = null,
                        i = cf(t, null, l, i),
                        t.child = i; i; )
                            i.flags = i.flags & -3 | 4096,
                            i = i.sibling;
                else {
                    if (Jr(),
                    l === u) {
                        t = yn(e, t, i);
                        break e
                    }
                    ht(e, t, l, i)
                }
                t = t.child
            }
            return t;
        case 5:
            return mf(t),
            e === null && ka(t),
            l = t.type,
            u = t.pendingProps,
            d = e !== null ? e.memoizedProps : null,
            p = u.children,
            ha(l, u) ? p = null : d !== null && ha(l, d) && (t.flags |= 32),
            Gf(e, t),
            ht(e, t, p, i),
            t.child;
        case 6:
            return e === null && ka(t),
            null;
        case 13:
            return Zf(e, t, i);
        case 4:
            return Pa(t, t.stateNode.containerInfo),
            l = t.pendingProps,
            e === null ? t.child = Zr(t, null, l, i) : ht(e, t, l, i),
            t.child;
        case 11:
            return l = t.type,
            u = t.pendingProps,
            u = t.elementType === l ? u : Ht(l, u),
            Hf(e, t, l, u, i);
        case 7:
            return ht(e, t, t.pendingProps, i),
            t.child;
        case 8:
            return ht(e, t, t.pendingProps.children, i),
            t.child;
        case 12:
            return ht(e, t, t.pendingProps.children, i),
            t.child;
        case 10:
            e: {
                if (l = t.type._context,
                u = t.pendingProps,
                d = t.memoizedProps,
                p = u.value,
                Le(go, l._currentValue),
                l._currentValue = p,
                d !== null)
                    if (Vt(d.value, p)) {
                        if (d.children === u.children && !gt.current) {
                            t = yn(e, t, i);
                            break e
                        }
                    } else
                        for (d = t.child,
                        d !== null && (d.return = t); d !== null; ) {
                            var w = d.dependencies;
                            if (w !== null) {
                                p = d.child;
                                for (var k = w.firstContext; k !== null; ) {
                                    if (k.context === l) {
                                        if (d.tag === 1) {
                                            k = gn(-1, i & -i),
                                            k.tag = 2;
                                            var O = d.updateQueue;
                                            if (O !== null) {
                                                O = O.shared;
                                                var $ = O.pending;
                                                $ === null ? k.next = k : (k.next = $.next,
                                                $.next = k),
                                                O.pending = k
                                            }
                                        }
                                        d.lanes |= i,
                                        k = d.alternate,
                                        k !== null && (k.lanes |= i),
                                        Ra(d.return, i, t),
                                        w.lanes |= i;
                                        break
                                    }
                                    k = k.next
                                }
                            } else if (d.tag === 10)
                                p = d.type === t.type ? null : d.child;
                            else if (d.tag === 18) {
                                if (p = d.return,
                                p === null)
                                    throw Error(s(341));
                                p.lanes |= i,
                                w = p.alternate,
                                w !== null && (w.lanes |= i),
                                Ra(p, i, t),
                                p = d.sibling
                            } else
                                p = d.child;
                            if (p !== null)
                                p.return = d;
                            else
                                for (p = d; p !== null; ) {
                                    if (p === t) {
                                        p = null;
                                        break
                                    }
                                    if (d = p.sibling,
                                    d !== null) {
                                        d.return = p.return,
                                        p = d;
                                        break
                                    }
                                    p = p.return
                                }
                            d = p
                        }
                ht(e, t, u.children, i),
                t = t.child
            }
            return t;
        case 9:
            return u = t.type,
            l = t.pendingProps.children,
            ts(t, i),
            u = jt(u),
            l = l(u),
            t.flags |= 1,
            ht(e, t, l, i),
            t.child;
        case 14:
            return l = t.type,
            u = Ht(l, t.pendingProps),
            u = Ht(l.type, u),
            Qf(e, t, l, u, i);
        case 15:
            return Wf(e, t, t.type, t.pendingProps, i);
        case 17:
            return l = t.type,
            u = t.pendingProps,
            u = t.elementType === l ? u : Ht(l, u),
            To(e, t),
            t.tag = 1,
            yt(l) ? (e = !0,
            uo(t)) : e = !1,
            ts(t, i),
            Ff(t, l, u),
            Va(t, l, u, i),
            Wa(null, t, l, !0, e, i);
        case 19:
            return th(e, t, i);
        case 22:
            return Kf(e, t, i)
        }
        throw Error(s(156, t.tag))
    }
    ;
    function Eh(e, t) {
        return rd(e, t)
    }
    function Mv(e, t, i, l) {
        this.tag = e,
        this.key = i,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Dt(e, t, i, l) {
        return new Mv(e,t,i,l)
    }
    function hu(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Fv(e) {
        if (typeof e == "function")
            return hu(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof,
            e === Ne)
                return 11;
            if (e === De)
                return 14
        }
        return 2
    }
    function Vn(e, t) {
        var i = e.alternate;
        return i === null ? (i = Dt(e.tag, t, e.key, e.mode),
        i.elementType = e.elementType,
        i.type = e.type,
        i.stateNode = e.stateNode,
        i.alternate = e,
        e.alternate = i) : (i.pendingProps = t,
        i.type = e.type,
        i.flags = 0,
        i.subtreeFlags = 0,
        i.deletions = null),
        i.flags = e.flags & 14680064,
        i.childLanes = e.childLanes,
        i.lanes = e.lanes,
        i.child = e.child,
        i.memoizedProps = e.memoizedProps,
        i.memoizedState = e.memoizedState,
        i.updateQueue = e.updateQueue,
        t = e.dependencies,
        i.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        i.sibling = e.sibling,
        i.index = e.index,
        i.ref = e.ref,
        i
    }
    function Uo(e, t, i, l, u, d) {
        var p = 2;
        if (l = e,
        typeof e == "function")
            hu(e) && (p = 1);
        else if (typeof e == "string")
            p = 5;
        else
            e: switch (e) {
            case se:
                return xr(i.children, u, d, t);
            case F:
                p = 8,
                u |= 8;
                break;
            case le:
                return e = Dt(12, i, t, u | 2),
                e.elementType = le,
                e.lanes = d,
                e;
            case Ie:
                return e = Dt(13, i, t, u),
                e.elementType = Ie,
                e.lanes = d,
                e;
            case Ae:
                return e = Dt(19, i, t, u),
                e.elementType = Ae,
                e.lanes = d,
                e;
            case _e:
                return zo(i, u, d, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case be:
                        p = 10;
                        break e;
                    case ge:
                        p = 9;
                        break e;
                    case Ne:
                        p = 11;
                        break e;
                    case De:
                        p = 14;
                        break e;
                    case ye:
                        p = 16,
                        l = null;
                        break e
                    }
                throw Error(s(130, e == null ? e : typeof e, ""))
            }
        return t = Dt(p, i, t, u),
        t.elementType = e,
        t.type = l,
        t.lanes = d,
        t
    }
    function xr(e, t, i, l) {
        return e = Dt(7, e, l, t),
        e.lanes = i,
        e
    }
    function zo(e, t, i, l) {
        return e = Dt(22, e, l, t),
        e.elementType = _e,
        e.lanes = i,
        e.stateNode = {
            isHidden: !1
        },
        e
    }
    function pu(e, t, i) {
        return e = Dt(6, e, null, t),
        e.lanes = i,
        e
    }
    function mu(e, t, i) {
        return t = Dt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = i,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function Uv(e, t, i, l, u) {
        this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = $l(0),
        this.expirationTimes = $l(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = $l(0),
        this.identifierPrefix = l,
        this.onRecoverableError = u,
        this.mutableSourceEagerHydrationData = null
    }
    function gu(e, t, i, l, u, d, p, w, k) {
        return e = new Uv(e,t,i,w,k),
        t === 1 ? (t = 1,
        d === !0 && (t |= 8)) : t = 0,
        d = Dt(3, null, null, t),
        e.current = d,
        d.stateNode = e,
        d.memoizedState = {
            element: l,
            isDehydrated: i,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Na(d),
        e
    }
    function zv(e, t, i) {
        var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: X,
            key: l == null ? null : "" + l,
            children: e,
            containerInfo: t,
            implementation: i
        }
    }
    function Ch(e) {
        if (!e)
            return Ln;
        e = e._reactInternals;
        e: {
            if (ar(e) !== e || e.tag !== 1)
                throw Error(s(170));
            var t = e;
            do {
                switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (yt(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                t = t.return
            } while (t !== null);
            throw Error(s(171))
        }
        if (e.tag === 1) {
            var i = e.type;
            if (yt(i))
                return Zd(e, i, t)
        }
        return t
    }
    function Rh(e, t, i, l, u, d, p, w, k) {
        return e = gu(i, l, !0, e, u, d, p, w, k),
        e.context = Ch(null),
        i = e.current,
        l = pt(),
        u = Bn(i),
        d = gn(l, u),
        d.callback = t ?? null,
        Mn(i, d, u),
        e.current.lanes = u,
        As(e, u, l),
        xt(e, l),
        e
    }
    function Bo(e, t, i, l) {
        var u = t.current
          , d = pt()
          , p = Bn(u);
        return i = Ch(i),
        t.context === null ? t.context = i : t.pendingContext = i,
        t = gn(d, p),
        t.payload = {
            element: e
        },
        l = l === void 0 ? null : l,
        l !== null && (t.callback = l),
        e = Mn(u, t, p),
        e !== null && (Kt(e, u, p, d),
        vo(e, u, p)),
        p
    }
    function $o(e) {
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
    function Th(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var i = e.retryLane;
            e.retryLane = i !== 0 && i < t ? i : t
        }
    }
    function yu(e, t) {
        Th(e, t),
        (e = e.alternate) && Th(e, t)
    }
    function Bv() {
        return null
    }
    var Nh = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    }
    ;
    function vu(e) {
        this._internalRoot = e
    }
    Vo.prototype.render = vu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(s(409));
        Bo(e, t, null, null)
    }
    ,
    Vo.prototype.unmount = vu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            yr(function() {
                Bo(null, e, null, null)
            }),
            t[dn] = null
        }
    }
    ;
    function Vo(e) {
        this._internalRoot = e
    }
    Vo.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = dd();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var i = 0; i < Nn.length && t !== 0 && t < Nn[i].priority; i++)
                ;
            Nn.splice(i, 0, e),
            i === 0 && pd(e)
        }
    }
    ;
    function wu(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function qo(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }
    function Ph() {}
    function $v(e, t, i, l, u) {
        if (u) {
            if (typeof l == "function") {
                var d = l;
                l = function() {
                    var O = $o(p);
                    d.call(O)
                }
            }
            var p = Rh(t, l, e, 0, null, !1, !1, "", Ph);
            return e._reactRootContainer = p,
            e[dn] = p.current,
            Qs(e.nodeType === 8 ? e.parentNode : e),
            yr(),
            p
        }
        for (; u = e.lastChild; )
            e.removeChild(u);
        if (typeof l == "function") {
            var w = l;
            l = function() {
                var O = $o(k);
                w.call(O)
            }
        }
        var k = gu(e, 0, !1, null, null, !1, !1, "", Ph);
        return e._reactRootContainer = k,
        e[dn] = k.current,
        Qs(e.nodeType === 8 ? e.parentNode : e),
        yr(function() {
            Bo(t, k, i, l)
        }),
        k
    }
    function Ho(e, t, i, l, u) {
        var d = i._reactRootContainer;
        if (d) {
            var p = d;
            if (typeof u == "function") {
                var w = u;
                u = function() {
                    var k = $o(p);
                    w.call(k)
                }
            }
            Bo(t, p, e, u)
        } else
            p = $v(i, t, e, u, l);
        return $o(p)
    }
    ud = function(e) {
        switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var i = Os(t.pendingLanes);
                i !== 0 && (Vl(t, i | 1),
                xt(t, qe()),
                (Ee & 6) === 0 && (os = qe() + 500,
                In()))
            }
            break;
        case 13:
            yr(function() {
                var l = mn(e, 1);
                if (l !== null) {
                    var u = pt();
                    Kt(l, e, 1, u)
                }
            }),
            yu(e, 1)
        }
    }
    ,
    ql = function(e) {
        if (e.tag === 13) {
            var t = mn(e, 134217728);
            if (t !== null) {
                var i = pt();
                Kt(t, e, 134217728, i)
            }
            yu(e, 134217728)
        }
    }
    ,
    cd = function(e) {
        if (e.tag === 13) {
            var t = Bn(e)
              , i = mn(e, t);
            if (i !== null) {
                var l = pt();
                Kt(i, e, t, l)
            }
            yu(e, t)
        }
    }
    ,
    dd = function() {
        return Oe
    }
    ,
    fd = function(e, t) {
        var i = Oe;
        try {
            return Oe = e,
            t()
        } finally {
            Oe = i
        }
    }
    ,
    Dl = function(e, t, i) {
        switch (t) {
        case "input":
            if (Tl(e, i),
            t = i.name,
            i.type === "radio" && t != null) {
                for (i = e; i.parentNode; )
                    i = i.parentNode;
                for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0; t < i.length; t++) {
                    var l = i[t];
                    if (l !== e && l.form === e.form) {
                        var u = lo(l);
                        if (!u)
                            throw Error(s(90));
                        lr(l),
                        Tl(l, u)
                    }
                }
            }
            break;
        case "textarea":
            Bc(e, i);
            break;
        case "select":
            t = i.value,
            t != null && Mr(e, !!i.multiple, t, !1)
        }
    }
    ,
    Yc = cu,
    Xc = yr;
    var Vv = {
        usingClientEntryPoint: !1,
        Events: [Gs, Wr, lo, Kc, Gc, cu]
    }
      , ui = {
        findFiberByHostInstance: ur,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , qv = {
        bundleType: ui.bundleType,
        version: ui.version,
        rendererPackageName: ui.rendererPackageName,
        rendererConfig: ui.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: M.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = td(e),
            e === null ? null : e.stateNode
        },
        findFiberByHostInstance: ui.findFiberByHostInstance || Bv,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Qo.isDisabled && Qo.supportsFiber)
            try {
                $i = Qo.inject(qv),
                Zt = Qo
            } catch {}
    }
    return St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vv,
    St.createPortal = function(e, t) {
        var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!wu(t))
            throw Error(s(200));
        return zv(e, t, null, i)
    }
    ,
    St.createRoot = function(e, t) {
        if (!wu(e))
            throw Error(s(299));
        var i = !1
          , l = ""
          , u = Nh;
        return t != null && (t.unstable_strictMode === !0 && (i = !0),
        t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        t = gu(e, 1, !1, null, null, i, !1, l, u),
        e[dn] = t.current,
        Qs(e.nodeType === 8 ? e.parentNode : e),
        new vu(t)
    }
    ,
    St.findDOMNode = function(e) {
        if (e == null)
            return null;
        if (e.nodeType === 1)
            return e;
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","),
            Error(s(268, e)));
        return e = td(t),
        e = e === null ? null : e.stateNode,
        e
    }
    ,
    St.flushSync = function(e) {
        return yr(e)
    }
    ,
    St.hydrate = function(e, t, i) {
        if (!qo(t))
            throw Error(s(200));
        return Ho(null, e, t, !0, i)
    }
    ,
    St.hydrateRoot = function(e, t, i) {
        if (!wu(e))
            throw Error(s(405));
        var l = i != null && i.hydratedSources || null
          , u = !1
          , d = ""
          , p = Nh;
        if (i != null && (i.unstable_strictMode === !0 && (u = !0),
        i.identifierPrefix !== void 0 && (d = i.identifierPrefix),
        i.onRecoverableError !== void 0 && (p = i.onRecoverableError)),
        t = Rh(t, null, e, 1, i ?? null, u, !1, d, p),
        e[dn] = t.current,
        Qs(e),
        l)
            for (e = 0; e < l.length; e++)
                i = l[e],
                u = i._getVersion,
                u = u(i._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, u] : t.mutableSourceEagerHydrationData.push(i, u);
        return new Vo(t)
    }
    ,
    St.render = function(e, t, i) {
        if (!qo(t))
            throw Error(s(200));
        return Ho(null, e, t, !1, i)
    }
    ,
    St.unmountComponentAtNode = function(e) {
        if (!qo(e))
            throw Error(s(40));
        return e._reactRootContainer ? (yr(function() {
            Ho(null, null, e, !1, function() {
                e._reactRootContainer = null,
                e[dn] = null
            })
        }),
        !0) : !1
    }
    ,
    St.unstable_batchedUpdates = cu,
    St.unstable_renderSubtreeIntoContainer = function(e, t, i, l) {
        if (!qo(i))
            throw Error(s(200));
        if (e == null || e._reactInternals === void 0)
            throw Error(s(38));
        return Ho(e, t, i, !1, l)
    }
    ,
    St.version = "18.3.1-next-f1338f8080-20240426",
    St
}
var Uh;
function dm() {
    if (Uh)
        return bu.exports;
    Uh = 1;
    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (n) {
                console.error(n)
            }
    }
    return r(),
    bu.exports = Zv(),
    bu.exports
}
var zh;
function e0() {
    if (zh)
        return Ko;
    zh = 1;
    var r = dm();
    return Ko.createRoot = r.createRoot,
    Ko.hydrateRoot = r.hydrateRoot,
    Ko
}
var t0 = e0();
const n0 = um(t0)
  , r0 = 20
  , s0 = 1e6
  , bn = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let Cu = 0;
function i0() {
    return Cu = (Cu + 1) % Number.MAX_VALUE,
    Cu.toString()
}
const Ru = new Map
  , Bh = r => {
    if (Ru.has(r))
        return;
    const n = setTimeout( () => {
        Ru.delete(r),
        Si({
            type: bn.REMOVE_TOAST,
            toastId: r
        })
    }
    , s0);
    Ru.set(r, n)
}
  , o0 = (r, n) => {
    switch (n.type) {
    case bn.ADD_TOAST:
        return {
            ...r,
            toasts: [n.toast, ...r.toasts].slice(0, r0)
        };
    case bn.UPDATE_TOAST:
        return {
            ...r,
            toasts: r.toasts.map(s => s.id === n.toast.id ? {
                ...s,
                ...n.toast
            } : s)
        };
    case bn.DISMISS_TOAST:
        {
            const {toastId: s} = n;
            return s ? Bh(s) : r.toasts.forEach(o => {
                Bh(o.id)
            }
            ),
            {
                ...r,
                toasts: r.toasts.map(o => o.id === s || s === void 0 ? {
                    ...o,
                    open: !1
                } : o)
            }
        }
    case bn.REMOVE_TOAST:
        return n.toastId === void 0 ? {
            ...r,
            toasts: []
        } : {
            ...r,
            toasts: r.toasts.filter(s => s.id !== n.toastId)
        }
    }
}
  , tl = [];
let nl = {
    toasts: []
};
function Si(r) {
    nl = o0(nl, r),
    tl.forEach(n => {
        n(nl)
    }
    )
}
function l0({...r}) {
    const n = i0()
      , s = a => Si({
        type: bn.UPDATE_TOAST,
        toast: {
            ...a,
            id: n
        }
    })
      , o = () => Si({
        type: bn.DISMISS_TOAST,
        toastId: n
    });
    return Si({
        type: bn.ADD_TOAST,
        toast: {
            ...r,
            id: n,
            open: !0,
            onOpenChange: a => {
                a || o()
            }
        }
    }),
    {
        id: n,
        dismiss: o,
        update: s
    }
}
function a0() {
    const [r,n] = U.useState(nl);
    return U.useEffect( () => (tl.push(n),
    () => {
        const s = tl.indexOf(n);
        s > -1 && tl.splice(s, 1)
    }
    ), [r]),
    {
        ...r,
        toast: l0,
        dismiss: s => Si({
            type: bn.DISMISS_TOAST,
            toastId: s
        })
    }
}
function fm(r) {
    var n, s, o = "";
    if (typeof r == "string" || typeof r == "number")
        o += r;
    else if (typeof r == "object")
        if (Array.isArray(r)) {
            var a = r.length;
            for (n = 0; n < a; n++)
                r[n] && (s = fm(r[n])) && (o && (o += " "),
                o += s)
        } else
            for (s in r)
                r[s] && (o && (o += " "),
                o += s);
    return o
}
function hm() {
    for (var r, n, s = 0, o = "", a = arguments.length; s < a; s++)
        (r = arguments[s]) && (n = fm(r)) && (o && (o += " "),
        o += n);
    return o
}
const $h = r => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r
  , Vh = hm
  , gc = (r, n) => s => {
    var o;
    if ((n == null ? void 0 : n.variants) == null)
        return Vh(r, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
    const {variants: a, defaultVariants: c} = n
      , f = Object.keys(a).map(g => {
        const y = s == null ? void 0 : s[g]
          , x = c == null ? void 0 : c[g];
        if (y === null)
            return null;
        const N = $h(y) || $h(x);
        return a[g][N]
    }
    )
      , h = s && Object.entries(s).reduce( (g, y) => {
        let[x,N] = y;
        return N === void 0 || (g[x] = N),
        g
    }
    , {})
      , m = n == null || (o = n.compoundVariants) === null || o === void 0 ? void 0 : o.reduce( (g, y) => {
        let {class: x, className: N, ...A} = y;
        return Object.entries(A).every(E => {
            let[_,S] = E;
            return Array.isArray(S) ? S.includes({
                ...c,
                ...h
            }[_]) : {
                ...c,
                ...h
            }[_] === S
        }
        ) ? [...g, x, N] : g
    }
    , []);
    return Vh(r, f, m, s == null ? void 0 : s.class, s == null ? void 0 : s.className)
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u0 = r => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , pm = (...r) => r.filter( (n, s, o) => !!n && n.trim() !== "" && o.indexOf(n) === s).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var c0 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d0 = U.forwardRef( ({color: r="currentColor", size: n=24, strokeWidth: s=2, absoluteStrokeWidth: o, className: a="", children: c, iconNode: f, ...h}, m) => U.createElement("svg", {
    ref: m,
    ...c0,
    width: n,
    height: n,
    stroke: r,
    strokeWidth: o ? Number(s) * 24 / Number(n) : s,
    className: pm("lucide", a),
    ...h
}, [...f.map( ([g,y]) => U.createElement(g, y)), ...Array.isArray(c) ? c : [c]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = (r, n) => {
    const s = U.forwardRef( ({className: o, ...a}, c) => U.createElement(d0, {
        ref: c,
        iconNode: n,
        className: pm(`lucide-${u0(r)}`, o),
        ...a
    }));
    return s.displayName = `${r}`,
    s
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f0 = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , yc = Bt("ArrowRight", f0);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h0 = [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]
  , p0 = Bt("Award", h0);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m0 = [["path", {
    d: "M4.5 3h15",
    key: "c7n0jr"
}], ["path", {
    d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",
    key: "m1uhx7"
}], ["path", {
    d: "M6 14h12",
    key: "4cwo0f"
}]]
  , g0 = Bt("Beaker", m0);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y0 = [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]
  , Uu = Bt("CircleCheckBig", y0);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v0 = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m15 9-6 6",
    key: "1uzhvr"
}], ["path", {
    d: "m9 9 6 6",
    key: "z0biqf"
}]]
  , qh = Bt("CircleX", v0);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w0 = [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]
  , x0 = Bt("DollarSign", w0);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S0 = [["path", {
    d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
    key: "18mbvz"
}], ["path", {
    d: "M6.453 15h11.094",
    key: "3shlmq"
}], ["path", {
    d: "M8.5 2h7",
    key: "csnxdl"
}]]
  , k0 = Bt("FlaskConical", S0);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b0 = [["path", {
    d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",
    key: "wa1lgi"
}], ["path", {
    d: "m8.5 8.5 7 7",
    key: "rvfmvr"
}]]
  , _0 = Bt("Pill", b0);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E0 = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]
  , mm = Bt("ShieldCheck", E0);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C0 = [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]
  , cl = Bt("Star", C0);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R0 = [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    key: "wmoenq"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]
  , T0 = Bt("TriangleAlert", R0);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N0 = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , P0 = Bt("X", N0)
  , O0 = (r, n) => {
    const s = new Array(r.length + n.length);
    for (let o = 0; o < r.length; o++)
        s[o] = r[o];
    for (let o = 0; o < n.length; o++)
        s[r.length + o] = n[o];
    return s
}
  , A0 = (r, n) => ({
    classGroupId: r,
    validator: n
})
  , gm = (r=new Map, n=null, s) => ({
    nextPart: r,
    validators: n,
    classGroupId: s
})
  , dl = "-"
  , Hh = []
  , j0 = "arbitrary.."
  , L0 = r => {
    const n = D0(r)
      , {conflictingClassGroups: s, conflictingClassGroupModifiers: o} = r;
    return {
        getClassGroupId: f => {
            if (f.startsWith("[") && f.endsWith("]"))
                return I0(f);
            const h = f.split(dl)
              , m = h[0] === "" && h.length > 1 ? 1 : 0;
            return ym(h, m, n)
        }
        ,
        getConflictingClassGroupIds: (f, h) => {
            if (h) {
                const m = o[f]
                  , g = s[f];
                return m ? g ? O0(g, m) : m : g || Hh
            }
            return s[f] || Hh
        }
    }
}
  , ym = (r, n, s) => {
    if (r.length - n === 0)
        return s.classGroupId;
    const a = r[n]
      , c = s.nextPart.get(a);
    if (c) {
        const g = ym(r, n + 1, c);
        if (g)
            return g
    }
    const f = s.validators;
    if (f === null)
        return;
    const h = n === 0 ? r.join(dl) : r.slice(n).join(dl)
      , m = f.length;
    for (let g = 0; g < m; g++) {
        const y = f[g];
        if (y.validator(h))
            return y.classGroupId
    }
}
  , I0 = r => r.slice(1, -1).indexOf(":") === -1 ? void 0 : ( () => {
    const n = r.slice(1, -1)
      , s = n.indexOf(":")
      , o = n.slice(0, s);
    return o ? j0 + o : void 0
}
)()
  , D0 = r => {
    const {theme: n, classGroups: s} = r;
    return M0(s, n)
}
  , M0 = (r, n) => {
    const s = gm();
    for (const o in r) {
        const a = r[o];
        vc(a, s, o, n)
    }
    return s
}
  , vc = (r, n, s, o) => {
    const a = r.length;
    for (let c = 0; c < a; c++) {
        const f = r[c];
        F0(f, n, s, o)
    }
}
  , F0 = (r, n, s, o) => {
    if (typeof r == "string") {
        U0(r, n, s);
        return
    }
    if (typeof r == "function") {
        z0(r, n, s, o);
        return
    }
    B0(r, n, s, o)
}
  , U0 = (r, n, s) => {
    const o = r === "" ? n : vm(n, r);
    o.classGroupId = s
}
  , z0 = (r, n, s, o) => {
    if ($0(r)) {
        vc(r(o), n, s, o);
        return
    }
    n.validators === null && (n.validators = []),
    n.validators.push(A0(s, r))
}
  , B0 = (r, n, s, o) => {
    const a = Object.entries(r)
      , c = a.length;
    for (let f = 0; f < c; f++) {
        const [h,m] = a[f];
        vc(m, vm(n, h), s, o)
    }
}
  , vm = (r, n) => {
    let s = r;
    const o = n.split(dl)
      , a = o.length;
    for (let c = 0; c < a; c++) {
        const f = o[c];
        let h = s.nextPart.get(f);
        h || (h = gm(),
        s.nextPart.set(f, h)),
        s = h
    }
    return s
}
  , $0 = r => "isThemeGetter"in r && r.isThemeGetter === !0
  , V0 = r => {
    if (r < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let n = 0
      , s = Object.create(null)
      , o = Object.create(null);
    const a = (c, f) => {
        s[c] = f,
        n++,
        n > r && (n = 0,
        o = s,
        s = Object.create(null))
    }
    ;
    return {
        get(c) {
            let f = s[c];
            if (f !== void 0)
                return f;
            if ((f = o[c]) !== void 0)
                return a(c, f),
                f
        },
        set(c, f) {
            c in s ? s[c] = f : a(c, f)
        }
    }
}
  , zu = "!"
  , Qh = ":"
  , q0 = []
  , Wh = (r, n, s, o, a) => ({
    modifiers: r,
    hasImportantModifier: n,
    baseClassName: s,
    maybePostfixModifierPosition: o,
    isExternal: a
})
  , H0 = r => {
    const {prefix: n, experimentalParseClassName: s} = r;
    let o = a => {
        const c = [];
        let f = 0, h = 0, m = 0, g;
        const y = a.length;
        for (let _ = 0; _ < y; _++) {
            const S = a[_];
            if (f === 0 && h === 0) {
                if (S === Qh) {
                    c.push(a.slice(m, _)),
                    m = _ + 1;
                    continue
                }
                if (S === "/") {
                    g = _;
                    continue
                }
            }
            S === "[" ? f++ : S === "]" ? f-- : S === "(" ? h++ : S === ")" && h--
        }
        const x = c.length === 0 ? a : a.slice(m);
        let N = x
          , A = !1;
        x.endsWith(zu) ? (N = x.slice(0, -1),
        A = !0) : x.startsWith(zu) && (N = x.slice(1),
        A = !0);
        const E = g && g > m ? g - m : void 0;
        return Wh(c, A, N, E)
    }
    ;
    if (n) {
        const a = n + Qh
          , c = o;
        o = f => f.startsWith(a) ? c(f.slice(a.length)) : Wh(q0, !1, f, void 0, !0)
    }
    if (s) {
        const a = o;
        o = c => s({
            className: c,
            parseClassName: a
        })
    }
    return o
}
  , Q0 = r => {
    const n = new Map;
    return r.orderSensitiveModifiers.forEach( (s, o) => {
        n.set(s, 1e6 + o)
    }
    ),
    s => {
        const o = [];
        let a = [];
        for (let c = 0; c < s.length; c++) {
            const f = s[c]
              , h = f[0] === "["
              , m = n.has(f);
            h || m ? (a.length > 0 && (a.sort(),
            o.push(...a),
            a = []),
            o.push(f)) : a.push(f)
        }
        return a.length > 0 && (a.sort(),
        o.push(...a)),
        o
    }
}
  , W0 = r => ({
    cache: V0(r.cacheSize),
    parseClassName: H0(r),
    sortModifiers: Q0(r),
    ...L0(r)
})
  , K0 = /\s+/
  , G0 = (r, n) => {
    const {parseClassName: s, getClassGroupId: o, getConflictingClassGroupIds: a, sortModifiers: c} = n
      , f = []
      , h = r.trim().split(K0);
    let m = "";
    for (let g = h.length - 1; g >= 0; g -= 1) {
        const y = h[g]
          , {isExternal: x, modifiers: N, hasImportantModifier: A, baseClassName: E, maybePostfixModifierPosition: _} = s(y);
        if (x) {
            m = y + (m.length > 0 ? " " + m : m);
            continue
        }
        let S = !!_
          , D = o(S ? E.substring(0, _) : E);
        if (!D) {
            if (!S) {
                m = y + (m.length > 0 ? " " + m : m);
                continue
            }
            if (D = o(E),
            !D) {
                m = y + (m.length > 0 ? " " + m : m);
                continue
            }
            S = !1
        }
        const Q = N.length === 0 ? "" : N.length === 1 ? N[0] : c(N).join(":")
          , B = A ? Q + zu : Q
          , M = B + D;
        if (f.indexOf(M) > -1)
            continue;
        f.push(M);
        const W = a(D, S);
        for (let X = 0; X < W.length; ++X) {
            const se = W[X];
            f.push(B + se)
        }
        m = y + (m.length > 0 ? " " + m : m)
    }
    return m
}
  , Y0 = (...r) => {
    let n = 0, s, o, a = "";
    for (; n < r.length; )
        (s = r[n++]) && (o = wm(s)) && (a && (a += " "),
        a += o);
    return a
}
  , wm = r => {
    if (typeof r == "string")
        return r;
    let n, s = "";
    for (let o = 0; o < r.length; o++)
        r[o] && (n = wm(r[o])) && (s && (s += " "),
        s += n);
    return s
}
  , X0 = (r, ...n) => {
    let s, o, a, c;
    const f = m => {
        const g = n.reduce( (y, x) => x(y), r());
        return s = W0(g),
        o = s.cache.get,
        a = s.cache.set,
        c = h,
        h(m)
    }
      , h = m => {
        const g = o(m);
        if (g)
            return g;
        const y = G0(m, s);
        return a(m, y),
        y
    }
    ;
    return c = f,
    (...m) => c(Y0(...m))
}
  , J0 = []
  , Xe = r => {
    const n = s => s[r] || J0;
    return n.isThemeGetter = !0,
    n
}
  , xm = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , Sm = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , Z0 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
  , ew = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , tw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , nw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , rw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , sw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Hn = r => Z0.test(r)
  , ve = r => !!r && !Number.isNaN(Number(r))
  , Qn = r => !!r && Number.isInteger(Number(r))
  , Tu = r => r.endsWith("%") && ve(r.slice(0, -1))
  , wn = r => ew.test(r)
  , km = () => !0
  , iw = r => tw.test(r) && !nw.test(r)
  , wc = () => !1
  , ow = r => rw.test(r)
  , lw = r => sw.test(r)
  , aw = r => !Z(r) && !ee(r)
  , uw = r => ir(r, Em, wc)
  , Z = r => xm.test(r)
  , Sr = r => ir(r, Cm, iw)
  , Kh = r => ir(r, yw, ve)
  , cw = r => ir(r, Tm, km)
  , dw = r => ir(r, Rm, wc)
  , Gh = r => ir(r, bm, wc)
  , fw = r => ir(r, _m, lw)
  , Go = r => ir(r, Nm, ow)
  , ee = r => Sm.test(r)
  , di = r => Dr(r, Cm)
  , hw = r => Dr(r, Rm)
  , Yh = r => Dr(r, bm)
  , pw = r => Dr(r, Em)
  , mw = r => Dr(r, _m)
  , Yo = r => Dr(r, Nm, !0)
  , gw = r => Dr(r, Tm, !0)
  , ir = (r, n, s) => {
    const o = xm.exec(r);
    return o ? o[1] ? n(o[1]) : s(o[2]) : !1
}
  , Dr = (r, n, s=!1) => {
    const o = Sm.exec(r);
    return o ? o[1] ? n(o[1]) : s : !1
}
  , bm = r => r === "position" || r === "percentage"
  , _m = r => r === "image" || r === "url"
  , Em = r => r === "length" || r === "size" || r === "bg-size"
  , Cm = r => r === "length"
  , yw = r => r === "number"
  , Rm = r => r === "family-name"
  , Tm = r => r === "number" || r === "weight"
  , Nm = r => r === "shadow"
  , vw = () => {
    const r = Xe("color")
      , n = Xe("font")
      , s = Xe("text")
      , o = Xe("font-weight")
      , a = Xe("tracking")
      , c = Xe("leading")
      , f = Xe("breakpoint")
      , h = Xe("container")
      , m = Xe("spacing")
      , g = Xe("radius")
      , y = Xe("shadow")
      , x = Xe("inset-shadow")
      , N = Xe("text-shadow")
      , A = Xe("drop-shadow")
      , E = Xe("blur")
      , _ = Xe("perspective")
      , S = Xe("aspect")
      , D = Xe("ease")
      , Q = Xe("animate")
      , B = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , M = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , W = () => [...M(), ee, Z]
      , X = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , se = () => ["auto", "contain", "none"]
      , F = () => [ee, Z, m]
      , le = () => [Hn, "full", "auto", ...F()]
      , be = () => [Qn, "none", "subgrid", ee, Z]
      , ge = () => ["auto", {
        span: ["full", Qn, ee, Z]
    }, Qn, ee, Z]
      , Ne = () => [Qn, "auto", ee, Z]
      , Ie = () => ["auto", "min", "max", "fr", ee, Z]
      , Ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , De = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , ye = () => ["auto", ...F()]
      , _e = () => [Hn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...F()]
      , H = () => [Hn, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...F()]
      , re = () => [Hn, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...F()]
      , L = () => [r, ee, Z]
      , R = () => [...M(), Yh, Gh, {
        position: [ee, Z]
    }]
      , I = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , he = () => ["auto", "cover", "contain", pw, uw, {
        size: [ee, Z]
    }]
      , pe = () => [Tu, di, Sr]
      , ae = () => ["", "none", "full", g, ee, Z]
      , ce = () => ["", ve, di, Sr]
      , Te = () => ["solid", "dashed", "dotted", "double"]
      , Ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , me = () => [ve, Tu, Yh, Gh]
      , ot = () => ["", "none", E, ee, Z]
      , cn = () => ["none", ve, ee, Z]
      , lr = () => ["none", ve, ee, Z]
      , _n = () => [ve, ee, Z]
      , En = () => [Hn, "full", ...F()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [wn],
            breakpoint: [wn],
            color: [km],
            container: [wn],
            "drop-shadow": [wn],
            ease: ["in", "out", "in-out"],
            font: [aw],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [wn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [wn],
            shadow: [wn],
            spacing: ["px", ve],
            text: [wn],
            "text-shadow": [wn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", Hn, Z, ee, S]
            }],
            container: ["container"],
            columns: [{
                columns: [ve, Z, ee, h]
            }],
            "break-after": [{
                "break-after": B()
            }],
            "break-before": [{
                "break-before": B()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: W()
            }],
            overflow: [{
                overflow: X()
            }],
            "overflow-x": [{
                "overflow-x": X()
            }],
            "overflow-y": [{
                "overflow-y": X()
            }],
            overscroll: [{
                overscroll: se()
            }],
            "overscroll-x": [{
                "overscroll-x": se()
            }],
            "overscroll-y": [{
                "overscroll-y": se()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: le()
            }],
            "inset-x": [{
                "inset-x": le()
            }],
            "inset-y": [{
                "inset-y": le()
            }],
            start: [{
                "inset-s": le(),
                start: le()
            }],
            end: [{
                "inset-e": le(),
                end: le()
            }],
            "inset-bs": [{
                "inset-bs": le()
            }],
            "inset-be": [{
                "inset-be": le()
            }],
            top: [{
                top: le()
            }],
            right: [{
                right: le()
            }],
            bottom: [{
                bottom: le()
            }],
            left: [{
                left: le()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [Qn, "auto", ee, Z]
            }],
            basis: [{
                basis: [Hn, "full", "auto", h, ...F()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [ve, Hn, "auto", "initial", "none", Z]
            }],
            grow: [{
                grow: ["", ve, ee, Z]
            }],
            shrink: [{
                shrink: ["", ve, ee, Z]
            }],
            order: [{
                order: [Qn, "first", "last", "none", ee, Z]
            }],
            "grid-cols": [{
                "grid-cols": be()
            }],
            "col-start-end": [{
                col: ge()
            }],
            "col-start": [{
                "col-start": Ne()
            }],
            "col-end": [{
                "col-end": Ne()
            }],
            "grid-rows": [{
                "grid-rows": be()
            }],
            "row-start-end": [{
                row: ge()
            }],
            "row-start": [{
                "row-start": Ne()
            }],
            "row-end": [{
                "row-end": Ne()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": Ie()
            }],
            "auto-rows": [{
                "auto-rows": Ie()
            }],
            gap: [{
                gap: F()
            }],
            "gap-x": [{
                "gap-x": F()
            }],
            "gap-y": [{
                "gap-y": F()
            }],
            "justify-content": [{
                justify: [...Ae(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...De(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...De()]
            }],
            "align-content": [{
                content: ["normal", ...Ae()]
            }],
            "align-items": [{
                items: [...De(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...De(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": Ae()
            }],
            "place-items": [{
                "place-items": [...De(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...De()]
            }],
            p: [{
                p: F()
            }],
            px: [{
                px: F()
            }],
            py: [{
                py: F()
            }],
            ps: [{
                ps: F()
            }],
            pe: [{
                pe: F()
            }],
            pbs: [{
                pbs: F()
            }],
            pbe: [{
                pbe: F()
            }],
            pt: [{
                pt: F()
            }],
            pr: [{
                pr: F()
            }],
            pb: [{
                pb: F()
            }],
            pl: [{
                pl: F()
            }],
            m: [{
                m: ye()
            }],
            mx: [{
                mx: ye()
            }],
            my: [{
                my: ye()
            }],
            ms: [{
                ms: ye()
            }],
            me: [{
                me: ye()
            }],
            mbs: [{
                mbs: ye()
            }],
            mbe: [{
                mbe: ye()
            }],
            mt: [{
                mt: ye()
            }],
            mr: [{
                mr: ye()
            }],
            mb: [{
                mb: ye()
            }],
            ml: [{
                ml: ye()
            }],
            "space-x": [{
                "space-x": F()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": F()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: _e()
            }],
            "inline-size": [{
                inline: ["auto", ...H()]
            }],
            "min-inline-size": [{
                "min-inline": ["auto", ...H()]
            }],
            "max-inline-size": [{
                "max-inline": ["none", ...H()]
            }],
            "block-size": [{
                block: ["auto", ...re()]
            }],
            "min-block-size": [{
                "min-block": ["auto", ...re()]
            }],
            "max-block-size": [{
                "max-block": ["none", ...re()]
            }],
            w: [{
                w: [h, "screen", ..._e()]
            }],
            "min-w": [{
                "min-w": [h, "screen", "none", ..._e()]
            }],
            "max-w": [{
                "max-w": [h, "screen", "none", "prose", {
                    screen: [f]
                }, ..._e()]
            }],
            h: [{
                h: ["screen", "lh", ..._e()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ..._e()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ..._e()]
            }],
            "font-size": [{
                text: ["base", s, di, Sr]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [o, gw, cw]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Tu, Z]
            }],
            "font-family": [{
                font: [hw, dw, n]
            }],
            "font-features": [{
                "font-features": [Z]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [a, ee, Z]
            }],
            "line-clamp": [{
                "line-clamp": [ve, "none", ee, Kh]
            }],
            leading: [{
                leading: [c, ...F()]
            }],
            "list-image": [{
                "list-image": ["none", ee, Z]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", ee, Z]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: L()
            }],
            "text-color": [{
                text: L()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...Te(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [ve, "from-font", "auto", ee, Sr]
            }],
            "text-decoration-color": [{
                decoration: L()
            }],
            "underline-offset": [{
                "underline-offset": [ve, "auto", ee, Z]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: F()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ee, Z]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", ee, Z]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: R()
            }],
            "bg-repeat": [{
                bg: I()
            }],
            "bg-size": [{
                bg: he()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, Qn, ee, Z],
                    radial: ["", ee, Z],
                    conic: [Qn, ee, Z]
                }, mw, fw]
            }],
            "bg-color": [{
                bg: L()
            }],
            "gradient-from-pos": [{
                from: pe()
            }],
            "gradient-via-pos": [{
                via: pe()
            }],
            "gradient-to-pos": [{
                to: pe()
            }],
            "gradient-from": [{
                from: L()
            }],
            "gradient-via": [{
                via: L()
            }],
            "gradient-to": [{
                to: L()
            }],
            rounded: [{
                rounded: ae()
            }],
            "rounded-s": [{
                "rounded-s": ae()
            }],
            "rounded-e": [{
                "rounded-e": ae()
            }],
            "rounded-t": [{
                "rounded-t": ae()
            }],
            "rounded-r": [{
                "rounded-r": ae()
            }],
            "rounded-b": [{
                "rounded-b": ae()
            }],
            "rounded-l": [{
                "rounded-l": ae()
            }],
            "rounded-ss": [{
                "rounded-ss": ae()
            }],
            "rounded-se": [{
                "rounded-se": ae()
            }],
            "rounded-ee": [{
                "rounded-ee": ae()
            }],
            "rounded-es": [{
                "rounded-es": ae()
            }],
            "rounded-tl": [{
                "rounded-tl": ae()
            }],
            "rounded-tr": [{
                "rounded-tr": ae()
            }],
            "rounded-br": [{
                "rounded-br": ae()
            }],
            "rounded-bl": [{
                "rounded-bl": ae()
            }],
            "border-w": [{
                border: ce()
            }],
            "border-w-x": [{
                "border-x": ce()
            }],
            "border-w-y": [{
                "border-y": ce()
            }],
            "border-w-s": [{
                "border-s": ce()
            }],
            "border-w-e": [{
                "border-e": ce()
            }],
            "border-w-bs": [{
                "border-bs": ce()
            }],
            "border-w-be": [{
                "border-be": ce()
            }],
            "border-w-t": [{
                "border-t": ce()
            }],
            "border-w-r": [{
                "border-r": ce()
            }],
            "border-w-b": [{
                "border-b": ce()
            }],
            "border-w-l": [{
                "border-l": ce()
            }],
            "divide-x": [{
                "divide-x": ce()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": ce()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...Te(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...Te(), "hidden", "none"]
            }],
            "border-color": [{
                border: L()
            }],
            "border-color-x": [{
                "border-x": L()
            }],
            "border-color-y": [{
                "border-y": L()
            }],
            "border-color-s": [{
                "border-s": L()
            }],
            "border-color-e": [{
                "border-e": L()
            }],
            "border-color-bs": [{
                "border-bs": L()
            }],
            "border-color-be": [{
                "border-be": L()
            }],
            "border-color-t": [{
                "border-t": L()
            }],
            "border-color-r": [{
                "border-r": L()
            }],
            "border-color-b": [{
                "border-b": L()
            }],
            "border-color-l": [{
                "border-l": L()
            }],
            "divide-color": [{
                divide: L()
            }],
            "outline-style": [{
                outline: [...Te(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [ve, ee, Z]
            }],
            "outline-w": [{
                outline: ["", ve, di, Sr]
            }],
            "outline-color": [{
                outline: L()
            }],
            shadow: [{
                shadow: ["", "none", y, Yo, Go]
            }],
            "shadow-color": [{
                shadow: L()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", x, Yo, Go]
            }],
            "inset-shadow-color": [{
                "inset-shadow": L()
            }],
            "ring-w": [{
                ring: ce()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: L()
            }],
            "ring-offset-w": [{
                "ring-offset": [ve, Sr]
            }],
            "ring-offset-color": [{
                "ring-offset": L()
            }],
            "inset-ring-w": [{
                "inset-ring": ce()
            }],
            "inset-ring-color": [{
                "inset-ring": L()
            }],
            "text-shadow": [{
                "text-shadow": ["none", N, Yo, Go]
            }],
            "text-shadow-color": [{
                "text-shadow": L()
            }],
            opacity: [{
                opacity: [ve, ee, Z]
            }],
            "mix-blend": [{
                "mix-blend": [...Ce(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": Ce()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [ve]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": me()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": me()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": L()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": L()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": me()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": me()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": L()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": L()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": me()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": me()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": L()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": L()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": me()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": me()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": L()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": L()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": me()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": me()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": L()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": L()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": me()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": me()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": L()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": L()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": me()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": me()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": L()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": L()
            }],
            "mask-image-radial": [{
                "mask-radial": [ee, Z]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": me()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": me()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": L()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": L()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": M()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [ve]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": me()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": me()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": L()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": L()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: R()
            }],
            "mask-repeat": [{
                mask: I()
            }],
            "mask-size": [{
                mask: he()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", ee, Z]
            }],
            filter: [{
                filter: ["", "none", ee, Z]
            }],
            blur: [{
                blur: ot()
            }],
            brightness: [{
                brightness: [ve, ee, Z]
            }],
            contrast: [{
                contrast: [ve, ee, Z]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", A, Yo, Go]
            }],
            "drop-shadow-color": [{
                "drop-shadow": L()
            }],
            grayscale: [{
                grayscale: ["", ve, ee, Z]
            }],
            "hue-rotate": [{
                "hue-rotate": [ve, ee, Z]
            }],
            invert: [{
                invert: ["", ve, ee, Z]
            }],
            saturate: [{
                saturate: [ve, ee, Z]
            }],
            sepia: [{
                sepia: ["", ve, ee, Z]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", ee, Z]
            }],
            "backdrop-blur": [{
                "backdrop-blur": ot()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [ve, ee, Z]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [ve, ee, Z]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", ve, ee, Z]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [ve, ee, Z]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", ve, ee, Z]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [ve, ee, Z]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [ve, ee, Z]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", ve, ee, Z]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": F()
            }],
            "border-spacing-x": [{
                "border-spacing-x": F()
            }],
            "border-spacing-y": [{
                "border-spacing-y": F()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ee, Z]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [ve, "initial", ee, Z]
            }],
            ease: [{
                ease: ["linear", "initial", D, ee, Z]
            }],
            delay: [{
                delay: [ve, ee, Z]
            }],
            animate: [{
                animate: ["none", Q, ee, Z]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [_, ee, Z]
            }],
            "perspective-origin": [{
                "perspective-origin": W()
            }],
            rotate: [{
                rotate: cn()
            }],
            "rotate-x": [{
                "rotate-x": cn()
            }],
            "rotate-y": [{
                "rotate-y": cn()
            }],
            "rotate-z": [{
                "rotate-z": cn()
            }],
            scale: [{
                scale: lr()
            }],
            "scale-x": [{
                "scale-x": lr()
            }],
            "scale-y": [{
                "scale-y": lr()
            }],
            "scale-z": [{
                "scale-z": lr()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: _n()
            }],
            "skew-x": [{
                "skew-x": _n()
            }],
            "skew-y": [{
                "skew-y": _n()
            }],
            transform: [{
                transform: [ee, Z, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: W()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: En()
            }],
            "translate-x": [{
                "translate-x": En()
            }],
            "translate-y": [{
                "translate-y": En()
            }],
            "translate-z": [{
                "translate-z": En()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: L()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: L()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ee, Z]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": F()
            }],
            "scroll-mx": [{
                "scroll-mx": F()
            }],
            "scroll-my": [{
                "scroll-my": F()
            }],
            "scroll-ms": [{
                "scroll-ms": F()
            }],
            "scroll-me": [{
                "scroll-me": F()
            }],
            "scroll-mbs": [{
                "scroll-mbs": F()
            }],
            "scroll-mbe": [{
                "scroll-mbe": F()
            }],
            "scroll-mt": [{
                "scroll-mt": F()
            }],
            "scroll-mr": [{
                "scroll-mr": F()
            }],
            "scroll-mb": [{
                "scroll-mb": F()
            }],
            "scroll-ml": [{
                "scroll-ml": F()
            }],
            "scroll-p": [{
                "scroll-p": F()
            }],
            "scroll-px": [{
                "scroll-px": F()
            }],
            "scroll-py": [{
                "scroll-py": F()
            }],
            "scroll-ps": [{
                "scroll-ps": F()
            }],
            "scroll-pe": [{
                "scroll-pe": F()
            }],
            "scroll-pbs": [{
                "scroll-pbs": F()
            }],
            "scroll-pbe": [{
                "scroll-pbe": F()
            }],
            "scroll-pt": [{
                "scroll-pt": F()
            }],
            "scroll-pr": [{
                "scroll-pr": F()
            }],
            "scroll-pb": [{
                "scroll-pb": F()
            }],
            "scroll-pl": [{
                "scroll-pl": F()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", ee, Z]
            }],
            fill: [{
                fill: ["none", ...L()]
            }],
            "stroke-w": [{
                stroke: [ve, di, Sr, Kh]
            }],
            stroke: [{
                stroke: ["none", ...L()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , ww = X0(vw);
function or(...r) {
    return ww(hm(r))
}
const Pm = U.forwardRef( ({...r}, n) => v.jsx("div", {
    ref: n,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...r
}));
Pm.displayName = "ToastProvider";
const Om = U.forwardRef( ({...r}, n) => v.jsx("div", {
    ref: n,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...r
}));
Om.displayName = "ToastViewport";
const xw = gc("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Am = U.forwardRef( ({className: r, variant: n, ...s}, o) => v.jsx("div", {
    ref: o,
    className: or(xw({
        variant: n
    }), r),
    ...s
}));
Am.displayName = "Toast";
const Sw = U.forwardRef( ({className: r, ...n}, s) => v.jsx("div", {
    ref: s,
    className: or("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", r),
    ...n
}));
Sw.displayName = "ToastAction";
const jm = U.forwardRef( ({className: r, ...n}, s) => v.jsx("button", {
    ref: s,
    className: or("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", r),
    "toast-close": "",
    ...n,
    children: v.jsx(P0, {
        className: "h-4 w-4"
    })
}));
jm.displayName = "ToastClose";
const Lm = U.forwardRef( ({className: r, ...n}, s) => v.jsx("div", {
    ref: s,
    className: or("text-sm font-semibold", r),
    ...n
}));
Lm.displayName = "ToastTitle";
const Im = U.forwardRef( ({className: r, ...n}, s) => v.jsx("div", {
    ref: s,
    className: or("text-sm opacity-90", r),
    ...n
}));
Im.displayName = "ToastDescription";
function kw() {
    const {toasts: r} = a0();
    return v.jsxs(Pm, {
        children: [r.map(function({id: n, title: s, description: o, action: a, ...c}) {
            return v.jsxs(Am, {
                ...c,
                children: [v.jsxs("div", {
                    className: "grid gap-1",
                    children: [s && v.jsx(Lm, {
                        children: s
                    }), o && v.jsx(Im, {
                        children: o
                    })]
                }), a, v.jsx(jm, {})]
            }, n)
        }), v.jsx(Om, {})]
    })
}
var Ai = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(r) {
        return this.listeners.add(r),
        this.onSubscribe(),
        () => {
            this.listeners.delete(r),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
, bw = {
    setTimeout: (r, n) => setTimeout(r, n),
    clearTimeout: r => clearTimeout(r),
    setInterval: (r, n) => setInterval(r, n),
    clearInterval: r => clearInterval(r)
}, Kn, pc, Zp, _w = (Zp = class {
    constructor() {
        ue(this, Kn, bw);
        ue(this, pc, !1)
    }
    setTimeoutProvider(r) {
        G(this, Kn, r)
    }
    setTimeout(r, n) {
        return b(this, Kn).setTimeout(r, n)
    }
    clearTimeout(r) {
        b(this, Kn).clearTimeout(r)
    }
    setInterval(r, n) {
        return b(this, Kn).setInterval(r, n)
    }
    clearInterval(r) {
        b(this, Kn).clearInterval(r)
    }
}
,
Kn = new WeakMap,
pc = new WeakMap,
Zp), kr = new _w;
function Ew(r) {
    setTimeout(r, 0)
}
var Lr = typeof window > "u" || "Deno"in globalThis;
function bt() {}
function Cw(r, n) {
    return typeof r == "function" ? r(n) : r
}
function Bu(r) {
    return typeof r == "number" && r >= 0 && r !== 1 / 0
}
function Dm(r, n) {
    return Math.max(r + (n || 0) - Date.now(), 0)
}
function rr(r, n) {
    return typeof r == "function" ? r(n) : r
}
function Ut(r, n) {
    return typeof r == "function" ? r(n) : r
}
function Xh(r, n) {
    const {type: s="all", exact: o, fetchStatus: a, predicate: c, queryKey: f, stale: h} = r;
    if (f) {
        if (o) {
            if (n.queryHash !== xc(f, n.options))
                return !1
        } else if (!_i(n.queryKey, f))
            return !1
    }
    if (s !== "all") {
        const m = n.isActive();
        if (s === "active" && !m || s === "inactive" && m)
            return !1
    }
    return !(typeof h == "boolean" && n.isStale() !== h || a && a !== n.state.fetchStatus || c && !c(n))
}
function Jh(r, n) {
    const {exact: s, status: o, predicate: a, mutationKey: c} = r;
    if (c) {
        if (!n.options.mutationKey)
            return !1;
        if (s) {
            if (bi(n.options.mutationKey) !== bi(c))
                return !1
        } else if (!_i(n.options.mutationKey, c))
            return !1
    }
    return !(o && n.state.status !== o || a && !a(n))
}
function xc(r, n) {
    return ((n == null ? void 0 : n.queryKeyHashFn) || bi)(r)
}
function bi(r) {
    return JSON.stringify(r, (n, s) => Vu(s) ? Object.keys(s).sort().reduce( (o, a) => (o[a] = s[a],
    o), {}) : s)
}
function _i(r, n) {
    return r === n ? !0 : typeof r != typeof n ? !1 : r && n && typeof r == "object" && typeof n == "object" ? Object.keys(n).every(s => _i(r[s], n[s])) : !1
}
var Rw = Object.prototype.hasOwnProperty;
function Mm(r, n, s=0) {
    if (r === n)
        return r;
    if (s > 500)
        return n;
    const o = Zh(r) && Zh(n);
    if (!o && !(Vu(r) && Vu(n)))
        return n;
    const c = (o ? r : Object.keys(r)).length
      , f = o ? n : Object.keys(n)
      , h = f.length
      , m = o ? new Array(h) : {};
    let g = 0;
    for (let y = 0; y < h; y++) {
        const x = o ? y : f[y]
          , N = r[x]
          , A = n[x];
        if (N === A) {
            m[x] = N,
            (o ? y < c : Rw.call(r, x)) && g++;
            continue
        }
        if (N === null || A === null || typeof N != "object" || typeof A != "object") {
            m[x] = A;
            continue
        }
        const E = Mm(N, A, s + 1);
        m[x] = E,
        E === N && g++
    }
    return c === h && g === c ? r : m
}
function $u(r, n) {
    if (!n || Object.keys(r).length !== Object.keys(n).length)
        return !1;
    for (const s in r)
        if (r[s] !== n[s])
            return !1;
    return !0
}
function Zh(r) {
    return Array.isArray(r) && r.length === Object.keys(r).length
}
function Vu(r) {
    if (!ep(r))
        return !1;
    const n = r.constructor;
    if (n === void 0)
        return !0;
    const s = n.prototype;
    return !(!ep(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(r) !== Object.prototype)
}
function ep(r) {
    return Object.prototype.toString.call(r) === "[object Object]"
}
function Tw(r) {
    return new Promise(n => {
        kr.setTimeout(n, r)
    }
    )
}
function qu(r, n, s) {
    return typeof s.structuralSharing == "function" ? s.structuralSharing(r, n) : s.structuralSharing !== !1 ? Mm(r, n) : n
}
function Nw(r, n, s=0) {
    const o = [...r, n];
    return s && o.length > s ? o.slice(1) : o
}
function Pw(r, n, s=0) {
    const o = [n, ...r];
    return s && o.length > s ? o.slice(0, -1) : o
}
var Sc = Symbol();
function Fm(r, n) {
    return !r.queryFn && (n != null && n.initialPromise) ? () => n.initialPromise : !r.queryFn || r.queryFn === Sc ? () => Promise.reject(new Error(`Missing queryFn: '${r.queryHash}'`)) : r.queryFn
}
function Um(r, n) {
    return typeof r == "function" ? r(...n) : !!r
}
function Ow(r, n, s) {
    let o = !1, a;
    return Object.defineProperty(r, "signal", {
        enumerable: !0,
        get: () => (a ?? (a = n()),
        o || (o = !0,
        a.aborted ? s() : a.addEventListener("abort", s, {
            once: !0
        })),
        a)
    }),
    r
}
var _r, Gn, cs, em, Aw = (em = class extends Ai {
    constructor() {
        super();
        ue(this, _r);
        ue(this, Gn);
        ue(this, cs);
        G(this, cs, n => {
            if (!Lr && window.addEventListener) {
                const s = () => n();
                return window.addEventListener("visibilitychange", s, !1),
                () => {
                    window.removeEventListener("visibilitychange", s)
                }
            }
        }
        )
    }
    onSubscribe() {
        b(this, Gn) || this.setEventListener(b(this, cs))
    }
    onUnsubscribe() {
        var n;
        this.hasListeners() || ((n = b(this, Gn)) == null || n.call(this),
        G(this, Gn, void 0))
    }
    setEventListener(n) {
        var s;
        G(this, cs, n),
        (s = b(this, Gn)) == null || s.call(this),
        G(this, Gn, n(o => {
            typeof o == "boolean" ? this.setFocused(o) : this.onFocus()
        }
        ))
    }
    setFocused(n) {
        b(this, _r) !== n && (G(this, _r, n),
        this.onFocus())
    }
    onFocus() {
        const n = this.isFocused();
        this.listeners.forEach(s => {
            s(n)
        }
        )
    }
    isFocused() {
        var n;
        return typeof b(this, _r) == "boolean" ? b(this, _r) : ((n = globalThis.document) == null ? void 0 : n.visibilityState) !== "hidden"
    }
}
,
_r = new WeakMap,
Gn = new WeakMap,
cs = new WeakMap,
em), kc = new Aw;
function Hu() {
    let r, n;
    const s = new Promise( (a, c) => {
        r = a,
        n = c
    }
    );
    s.status = "pending",
    s.catch( () => {}
    );
    function o(a) {
        Object.assign(s, a),
        delete s.resolve,
        delete s.reject
    }
    return s.resolve = a => {
        o({
            status: "fulfilled",
            value: a
        }),
        r(a)
    }
    ,
    s.reject = a => {
        o({
            status: "rejected",
            reason: a
        }),
        n(a)
    }
    ,
    s
}
var jw = Ew;
function Lw() {
    let r = []
      , n = 0
      , s = h => {
        h()
    }
      , o = h => {
        h()
    }
      , a = jw;
    const c = h => {
        n ? r.push(h) : a( () => {
            s(h)
        }
        )
    }
      , f = () => {
        const h = r;
        r = [],
        h.length && a( () => {
            o( () => {
                h.forEach(m => {
                    s(m)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: h => {
            let m;
            n++;
            try {
                m = h()
            } finally {
                n--,
                n || f()
            }
            return m
        }
        ,
        batchCalls: h => (...m) => {
            c( () => {
                h(...m)
            }
            )
        }
        ,
        schedule: c,
        setNotifyFunction: h => {
            s = h
        }
        ,
        setBatchNotifyFunction: h => {
            o = h
        }
        ,
        setScheduler: h => {
            a = h
        }
    }
}
var it = Lw(), ds, Yn, fs, tm, Iw = (tm = class extends Ai {
    constructor() {
        super();
        ue(this, ds, !0);
        ue(this, Yn);
        ue(this, fs);
        G(this, fs, n => {
            if (!Lr && window.addEventListener) {
                const s = () => n(!0)
                  , o = () => n(!1);
                return window.addEventListener("online", s, !1),
                window.addEventListener("offline", o, !1),
                () => {
                    window.removeEventListener("online", s),
                    window.removeEventListener("offline", o)
                }
            }
        }
        )
    }
    onSubscribe() {
        b(this, Yn) || this.setEventListener(b(this, fs))
    }
    onUnsubscribe() {
        var n;
        this.hasListeners() || ((n = b(this, Yn)) == null || n.call(this),
        G(this, Yn, void 0))
    }
    setEventListener(n) {
        var s;
        G(this, fs, n),
        (s = b(this, Yn)) == null || s.call(this),
        G(this, Yn, n(this.setOnline.bind(this)))
    }
    setOnline(n) {
        b(this, ds) !== n && (G(this, ds, n),
        this.listeners.forEach(o => {
            o(n)
        }
        ))
    }
    isOnline() {
        return b(this, ds)
    }
}
,
ds = new WeakMap,
Yn = new WeakMap,
fs = new WeakMap,
tm), fl = new Iw;
function Dw(r) {
    return Math.min(1e3 * 2 ** r, 3e4)
}
function zm(r) {
    return (r ?? "online") === "online" ? fl.isOnline() : !0
}
var Qu = class extends Error {
    constructor(r) {
        super("CancelledError"),
        this.revert = r == null ? void 0 : r.revert,
        this.silent = r == null ? void 0 : r.silent
    }
}
;
function Bm(r) {
    let n = !1, s = 0, o;
    const a = Hu()
      , c = () => a.status !== "pending"
      , f = _ => {
        var S;
        if (!c()) {
            const D = new Qu(_);
            N(D),
            (S = r.onCancel) == null || S.call(r, D)
        }
    }
      , h = () => {
        n = !0
    }
      , m = () => {
        n = !1
    }
      , g = () => kc.isFocused() && (r.networkMode === "always" || fl.isOnline()) && r.canRun()
      , y = () => zm(r.networkMode) && r.canRun()
      , x = _ => {
        c() || (o == null || o(),
        a.resolve(_))
    }
      , N = _ => {
        c() || (o == null || o(),
        a.reject(_))
    }
      , A = () => new Promise(_ => {
        var S;
        o = D => {
            (c() || g()) && _(D)
        }
        ,
        (S = r.onPause) == null || S.call(r)
    }
    ).then( () => {
        var _;
        o = void 0,
        c() || (_ = r.onContinue) == null || _.call(r)
    }
    )
      , E = () => {
        if (c())
            return;
        let _;
        const S = s === 0 ? r.initialPromise : void 0;
        try {
            _ = S ?? r.fn()
        } catch (D) {
            _ = Promise.reject(D)
        }
        Promise.resolve(_).then(x).catch(D => {
            var X;
            if (c())
                return;
            const Q = r.retry ?? (Lr ? 0 : 3)
              , B = r.retryDelay ?? Dw
              , M = typeof B == "function" ? B(s, D) : B
              , W = Q === !0 || typeof Q == "number" && s < Q || typeof Q == "function" && Q(s, D);
            if (n || !W) {
                N(D);
                return
            }
            s++,
            (X = r.onFail) == null || X.call(r, s, D),
            Tw(M).then( () => g() ? void 0 : A()).then( () => {
                n ? N(D) : E()
            }
            )
        }
        )
    }
    ;
    return {
        promise: a,
        status: () => a.status,
        cancel: f,
        continue: () => (o == null || o(),
        a),
        cancelRetry: h,
        continueRetry: m,
        canStart: y,
        start: () => (y() ? E() : A().then(E),
        a)
    }
}
var Er, nm, $m = (nm = class {
    constructor() {
        ue(this, Er)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Bu(this.gcTime) && G(this, Er, kr.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(r) {
        this.gcTime = Math.max(this.gcTime || 0, r ?? (Lr ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        b(this, Er) && (kr.clearTimeout(b(this, Er)),
        G(this, Er, void 0))
    }
}
,
Er = new WeakMap,
nm), Cr, hs, Ft, Rr, tt, Ri, Tr, Gt, xn, rm, Mw = (rm = class extends $m {
    constructor(n) {
        super();
        ue(this, Gt);
        ue(this, Cr);
        ue(this, hs);
        ue(this, Ft);
        ue(this, Rr);
        ue(this, tt);
        ue(this, Ri);
        ue(this, Tr);
        G(this, Tr, !1),
        G(this, Ri, n.defaultOptions),
        this.setOptions(n.options),
        this.observers = [],
        G(this, Rr, n.client),
        G(this, Ft, b(this, Rr).getQueryCache()),
        this.queryKey = n.queryKey,
        this.queryHash = n.queryHash,
        G(this, Cr, np(this.options)),
        this.state = n.state ?? b(this, Cr),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var n;
        return (n = b(this, tt)) == null ? void 0 : n.promise
    }
    setOptions(n) {
        if (this.options = {
            ...b(this, Ri),
            ...n
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const s = np(this.options);
            s.data !== void 0 && (this.setState(tp(s.data, s.dataUpdatedAt)),
            G(this, Cr, s))
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && b(this, Ft).remove(this)
    }
    setData(n, s) {
        const o = qu(this.state.data, n, this.options);
        return xe(this, Gt, xn).call(this, {
            data: o,
            type: "success",
            dataUpdatedAt: s == null ? void 0 : s.updatedAt,
            manual: s == null ? void 0 : s.manual
        }),
        o
    }
    setState(n, s) {
        xe(this, Gt, xn).call(this, {
            type: "setState",
            state: n,
            setStateOptions: s
        })
    }
    cancel(n) {
        var o, a;
        const s = (o = b(this, tt)) == null ? void 0 : o.promise;
        return (a = b(this, tt)) == null || a.cancel(n),
        s ? s.then(bt).catch(bt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(b(this, Cr))
    }
    isActive() {
        return this.observers.some(n => Ut(n.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Sc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(n => rr(n.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(n => n.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(n=0) {
        return this.state.data === void 0 ? !0 : n === "static" ? !1 : this.state.isInvalidated ? !0 : !Dm(this.state.dataUpdatedAt, n)
    }
    onFocus() {
        var s;
        const n = this.observers.find(o => o.shouldFetchOnWindowFocus());
        n == null || n.refetch({
            cancelRefetch: !1
        }),
        (s = b(this, tt)) == null || s.continue()
    }
    onOnline() {
        var s;
        const n = this.observers.find(o => o.shouldFetchOnReconnect());
        n == null || n.refetch({
            cancelRefetch: !1
        }),
        (s = b(this, tt)) == null || s.continue()
    }
    addObserver(n) {
        this.observers.includes(n) || (this.observers.push(n),
        this.clearGcTimeout(),
        b(this, Ft).notify({
            type: "observerAdded",
            query: this,
            observer: n
        }))
    }
    removeObserver(n) {
        this.observers.includes(n) && (this.observers = this.observers.filter(s => s !== n),
        this.observers.length || (b(this, tt) && (b(this, Tr) ? b(this, tt).cancel({
            revert: !0
        }) : b(this, tt).cancelRetry()),
        this.scheduleGc()),
        b(this, Ft).notify({
            type: "observerRemoved",
            query: this,
            observer: n
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || xe(this, Gt, xn).call(this, {
            type: "invalidate"
        })
    }
    async fetch(n, s) {
        var m, g, y, x, N, A, E, _, S, D, Q, B;
        if (this.state.fetchStatus !== "idle" && ((m = b(this, tt)) == null ? void 0 : m.status()) !== "rejected") {
            if (this.state.data !== void 0 && (s != null && s.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (b(this, tt))
                return b(this, tt).continueRetry(),
                b(this, tt).promise
        }
        if (n && this.setOptions(n),
        !this.options.queryFn) {
            const M = this.observers.find(W => W.options.queryFn);
            M && this.setOptions(M.options)
        }
        const o = new AbortController
          , a = M => {
            Object.defineProperty(M, "signal", {
                enumerable: !0,
                get: () => (G(this, Tr, !0),
                o.signal)
            })
        }
          , c = () => {
            const M = Fm(this.options, s)
              , X = ( () => {
                const se = {
                    client: b(this, Rr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return a(se),
                se
            }
            )();
            return G(this, Tr, !1),
            this.options.persister ? this.options.persister(M, X, this) : M(X)
        }
          , h = ( () => {
            const M = {
                fetchOptions: s,
                options: this.options,
                queryKey: this.queryKey,
                client: b(this, Rr),
                state: this.state,
                fetchFn: c
            };
            return a(M),
            M
        }
        )();
        (g = this.options.behavior) == null || g.onFetch(h, this),
        G(this, hs, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((y = h.fetchOptions) == null ? void 0 : y.meta)) && xe(this, Gt, xn).call(this, {
            type: "fetch",
            meta: (x = h.fetchOptions) == null ? void 0 : x.meta
        }),
        G(this, tt, Bm({
            initialPromise: s == null ? void 0 : s.initialPromise,
            fn: h.fetchFn,
            onCancel: M => {
                M instanceof Qu && M.revert && this.setState({
                    ...b(this, hs),
                    fetchStatus: "idle"
                }),
                o.abort()
            }
            ,
            onFail: (M, W) => {
                xe(this, Gt, xn).call(this, {
                    type: "failed",
                    failureCount: M,
                    error: W
                })
            }
            ,
            onPause: () => {
                xe(this, Gt, xn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                xe(this, Gt, xn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: h.options.retry,
            retryDelay: h.options.retryDelay,
            networkMode: h.options.networkMode,
            canRun: () => !0
        }));
        try {
            const M = await b(this, tt).start();
            if (M === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(M),
            (A = (N = b(this, Ft).config).onSuccess) == null || A.call(N, M, this),
            (_ = (E = b(this, Ft).config).onSettled) == null || _.call(E, M, this.state.error, this),
            M
        } catch (M) {
            if (M instanceof Qu) {
                if (M.silent)
                    return b(this, tt).promise;
                if (M.revert) {
                    if (this.state.data === void 0)
                        throw M;
                    return this.state.data
                }
            }
            throw xe(this, Gt, xn).call(this, {
                type: "error",
                error: M
            }),
            (D = (S = b(this, Ft).config).onError) == null || D.call(S, M, this),
            (B = (Q = b(this, Ft).config).onSettled) == null || B.call(Q, this.state.data, M, this),
            M
        } finally {
            this.scheduleGc()
        }
    }
}
,
Cr = new WeakMap,
hs = new WeakMap,
Ft = new WeakMap,
Rr = new WeakMap,
tt = new WeakMap,
Ri = new WeakMap,
Tr = new WeakMap,
Gt = new WeakSet,
xn = function(n) {
    const s = o => {
        switch (n.type) {
        case "failed":
            return {
                ...o,
                fetchFailureCount: n.failureCount,
                fetchFailureReason: n.error
            };
        case "pause":
            return {
                ...o,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...o,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...o,
                ...Vm(o.data, this.options),
                fetchMeta: n.meta ?? null
            };
        case "success":
            const a = {
                ...o,
                ...tp(n.data, n.dataUpdatedAt),
                dataUpdateCount: o.dataUpdateCount + 1,
                ...!n.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
            return G(this, hs, n.manual ? a : void 0),
            a;
        case "error":
            const c = n.error;
            return {
                ...o,
                error: c,
                errorUpdateCount: o.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: o.fetchFailureCount + 1,
                fetchFailureReason: c,
                fetchStatus: "idle",
                status: "error",
                isInvalidated: !0
            };
        case "invalidate":
            return {
                ...o,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...o,
                ...n.state
            }
        }
    }
    ;
    this.state = s(this.state),
    it.batch( () => {
        this.observers.forEach(o => {
            o.onQueryUpdate()
        }
        ),
        b(this, Ft).notify({
            query: this,
            type: "updated",
            action: n
        })
    }
    )
}
,
rm);
function Vm(r, n) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: zm(n.networkMode) ? "fetching" : "paused",
        ...r === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function tp(r, n) {
    return {
        data: r,
        dataUpdatedAt: n ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}
function np(r) {
    const n = typeof r.initialData == "function" ? r.initialData() : r.initialData
      , s = n !== void 0
      , o = s ? typeof r.initialDataUpdatedAt == "function" ? r.initialDataUpdatedAt() : r.initialDataUpdatedAt : 0;
    return {
        data: n,
        dataUpdateCount: 0,
        dataUpdatedAt: s ? o ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: s ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var kt, Se, Ti, mt, Nr, ps, Sn, Xn, Ni, ms, gs, Pr, Or, Jn, ys, Pe, gi, Wu, Ku, Gu, Yu, Xu, Ju, Zu, qm, sm, Fw = (sm = class extends Ai {
    constructor(n, s) {
        super();
        ue(this, Pe);
        ue(this, kt);
        ue(this, Se);
        ue(this, Ti);
        ue(this, mt);
        ue(this, Nr);
        ue(this, ps);
        ue(this, Sn);
        ue(this, Xn);
        ue(this, Ni);
        ue(this, ms);
        ue(this, gs);
        ue(this, Pr);
        ue(this, Or);
        ue(this, Jn);
        ue(this, ys, new Set);
        this.options = s,
        G(this, kt, n),
        G(this, Xn, null),
        G(this, Sn, Hu()),
        this.bindMethods(),
        this.setOptions(s)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (b(this, Se).addObserver(this),
        rp(b(this, Se), this.options) ? xe(this, Pe, gi).call(this) : this.updateResult(),
        xe(this, Pe, Yu).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return ec(b(this, Se), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return ec(b(this, Se), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        xe(this, Pe, Xu).call(this),
        xe(this, Pe, Ju).call(this),
        b(this, Se).removeObserver(this)
    }
    setOptions(n) {
        const s = this.options
          , o = b(this, Se);
        if (this.options = b(this, kt).defaultQueryOptions(n),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Ut(this.options.enabled, b(this, Se)) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        xe(this, Pe, Zu).call(this),
        b(this, Se).setOptions(this.options),
        s._defaulted && !$u(this.options, s) && b(this, kt).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: b(this, Se),
            observer: this
        });
        const a = this.hasListeners();
        a && sp(b(this, Se), o, this.options, s) && xe(this, Pe, gi).call(this),
        this.updateResult(),
        a && (b(this, Se) !== o || Ut(this.options.enabled, b(this, Se)) !== Ut(s.enabled, b(this, Se)) || rr(this.options.staleTime, b(this, Se)) !== rr(s.staleTime, b(this, Se))) && xe(this, Pe, Wu).call(this);
        const c = xe(this, Pe, Ku).call(this);
        a && (b(this, Se) !== o || Ut(this.options.enabled, b(this, Se)) !== Ut(s.enabled, b(this, Se)) || c !== b(this, Jn)) && xe(this, Pe, Gu).call(this, c)
    }
    getOptimisticResult(n) {
        const s = b(this, kt).getQueryCache().build(b(this, kt), n)
          , o = this.createResult(s, n);
        return zw(this, o) && (G(this, mt, o),
        G(this, ps, this.options),
        G(this, Nr, b(this, Se).state)),
        o
    }
    getCurrentResult() {
        return b(this, mt)
    }
    trackResult(n, s) {
        return new Proxy(n,{
            get: (o, a) => (this.trackProp(a),
            s == null || s(a),
            a === "promise" && (this.trackProp("data"),
            !this.options.experimental_prefetchInRender && b(this, Sn).status === "pending" && b(this, Sn).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),
            Reflect.get(o, a))
        })
    }
    trackProp(n) {
        b(this, ys).add(n)
    }
    getCurrentQuery() {
        return b(this, Se)
    }
    refetch({...n}={}) {
        return this.fetch({
            ...n
        })
    }
    fetchOptimistic(n) {
        const s = b(this, kt).defaultQueryOptions(n)
          , o = b(this, kt).getQueryCache().build(b(this, kt), s);
        return o.fetch().then( () => this.createResult(o, s))
    }
    fetch(n) {
        return xe(this, Pe, gi).call(this, {
            ...n,
            cancelRefetch: n.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        b(this, mt)))
    }
    createResult(n, s) {
        var le;
        const o = b(this, Se)
          , a = this.options
          , c = b(this, mt)
          , f = b(this, Nr)
          , h = b(this, ps)
          , g = n !== o ? n.state : b(this, Ti)
          , {state: y} = n;
        let x = {
            ...y
        }, N = !1, A;
        if (s._optimisticResults) {
            const be = this.hasListeners()
              , ge = !be && rp(n, s)
              , Ne = be && sp(n, o, s, a);
            (ge || Ne) && (x = {
                ...x,
                ...Vm(y.data, n.options)
            }),
            s._optimisticResults === "isRestoring" && (x.fetchStatus = "idle")
        }
        let {error: E, errorUpdatedAt: _, status: S} = x;
        A = x.data;
        let D = !1;
        if (s.placeholderData !== void 0 && A === void 0 && S === "pending") {
            let be;
            c != null && c.isPlaceholderData && s.placeholderData === (h == null ? void 0 : h.placeholderData) ? (be = c.data,
            D = !0) : be = typeof s.placeholderData == "function" ? s.placeholderData((le = b(this, gs)) == null ? void 0 : le.state.data, b(this, gs)) : s.placeholderData,
            be !== void 0 && (S = "success",
            A = qu(c == null ? void 0 : c.data, be, s),
            N = !0)
        }
        if (s.select && A !== void 0 && !D)
            if (c && A === (f == null ? void 0 : f.data) && s.select === b(this, Ni))
                A = b(this, ms);
            else
                try {
                    G(this, Ni, s.select),
                    A = s.select(A),
                    A = qu(c == null ? void 0 : c.data, A, s),
                    G(this, ms, A),
                    G(this, Xn, null)
                } catch (be) {
                    G(this, Xn, be)
                }
        b(this, Xn) && (E = b(this, Xn),
        A = b(this, ms),
        _ = Date.now(),
        S = "error");
        const Q = x.fetchStatus === "fetching"
          , B = S === "pending"
          , M = S === "error"
          , W = B && Q
          , X = A !== void 0
          , F = {
            status: S,
            fetchStatus: x.fetchStatus,
            isPending: B,
            isSuccess: S === "success",
            isError: M,
            isInitialLoading: W,
            isLoading: W,
            data: A,
            dataUpdatedAt: x.dataUpdatedAt,
            error: E,
            errorUpdatedAt: _,
            failureCount: x.fetchFailureCount,
            failureReason: x.fetchFailureReason,
            errorUpdateCount: x.errorUpdateCount,
            isFetched: x.dataUpdateCount > 0 || x.errorUpdateCount > 0,
            isFetchedAfterMount: x.dataUpdateCount > g.dataUpdateCount || x.errorUpdateCount > g.errorUpdateCount,
            isFetching: Q,
            isRefetching: Q && !B,
            isLoadingError: M && !X,
            isPaused: x.fetchStatus === "paused",
            isPlaceholderData: N,
            isRefetchError: M && X,
            isStale: bc(n, s),
            refetch: this.refetch,
            promise: b(this, Sn),
            isEnabled: Ut(s.enabled, n) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            const be = F.data !== void 0
              , ge = F.status === "error" && !be
              , Ne = De => {
                ge ? De.reject(F.error) : be && De.resolve(F.data)
            }
              , Ie = () => {
                const De = G(this, Sn, F.promise = Hu());
                Ne(De)
            }
              , Ae = b(this, Sn);
            switch (Ae.status) {
            case "pending":
                n.queryHash === o.queryHash && Ne(Ae);
                break;
            case "fulfilled":
                (ge || F.data !== Ae.value) && Ie();
                break;
            case "rejected":
                (!ge || F.error !== Ae.reason) && Ie();
                break
            }
        }
        return F
    }
    updateResult() {
        const n = b(this, mt)
          , s = this.createResult(b(this, Se), this.options);
        if (G(this, Nr, b(this, Se).state),
        G(this, ps, this.options),
        b(this, Nr).data !== void 0 && G(this, gs, b(this, Se)),
        $u(s, n))
            return;
        G(this, mt, s);
        const o = () => {
            if (!n)
                return !0;
            const {notifyOnChangeProps: a} = this.options
              , c = typeof a == "function" ? a() : a;
            if (c === "all" || !c && !b(this, ys).size)
                return !0;
            const f = new Set(c ?? b(this, ys));
            return this.options.throwOnError && f.add("error"),
            Object.keys(b(this, mt)).some(h => {
                const m = h;
                return b(this, mt)[m] !== n[m] && f.has(m)
            }
            )
        }
        ;
        xe(this, Pe, qm).call(this, {
            listeners: o()
        })
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && xe(this, Pe, Yu).call(this)
    }
}
,
kt = new WeakMap,
Se = new WeakMap,
Ti = new WeakMap,
mt = new WeakMap,
Nr = new WeakMap,
ps = new WeakMap,
Sn = new WeakMap,
Xn = new WeakMap,
Ni = new WeakMap,
ms = new WeakMap,
gs = new WeakMap,
Pr = new WeakMap,
Or = new WeakMap,
Jn = new WeakMap,
ys = new WeakMap,
Pe = new WeakSet,
gi = function(n) {
    xe(this, Pe, Zu).call(this);
    let s = b(this, Se).fetch(this.options, n);
    return n != null && n.throwOnError || (s = s.catch(bt)),
    s
}
,
Wu = function() {
    xe(this, Pe, Xu).call(this);
    const n = rr(this.options.staleTime, b(this, Se));
    if (Lr || b(this, mt).isStale || !Bu(n))
        return;
    const o = Dm(b(this, mt).dataUpdatedAt, n) + 1;
    G(this, Pr, kr.setTimeout( () => {
        b(this, mt).isStale || this.updateResult()
    }
    , o))
}
,
Ku = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(b(this, Se)) : this.options.refetchInterval) ?? !1
}
,
Gu = function(n) {
    xe(this, Pe, Ju).call(this),
    G(this, Jn, n),
    !(Lr || Ut(this.options.enabled, b(this, Se)) === !1 || !Bu(b(this, Jn)) || b(this, Jn) === 0) && G(this, Or, kr.setInterval( () => {
        (this.options.refetchIntervalInBackground || kc.isFocused()) && xe(this, Pe, gi).call(this)
    }
    , b(this, Jn)))
}
,
Yu = function() {
    xe(this, Pe, Wu).call(this),
    xe(this, Pe, Gu).call(this, xe(this, Pe, Ku).call(this))
}
,
Xu = function() {
    b(this, Pr) && (kr.clearTimeout(b(this, Pr)),
    G(this, Pr, void 0))
}
,
Ju = function() {
    b(this, Or) && (kr.clearInterval(b(this, Or)),
    G(this, Or, void 0))
}
,
Zu = function() {
    const n = b(this, kt).getQueryCache().build(b(this, kt), this.options);
    if (n === b(this, Se))
        return;
    const s = b(this, Se);
    G(this, Se, n),
    G(this, Ti, n.state),
    this.hasListeners() && (s == null || s.removeObserver(this),
    n.addObserver(this))
}
,
qm = function(n) {
    it.batch( () => {
        n.listeners && this.listeners.forEach(s => {
            s(b(this, mt))
        }
        ),
        b(this, kt).getQueryCache().notify({
            query: b(this, Se),
            type: "observerResultsUpdated"
        })
    }
    )
}
,
sm);
function Uw(r, n) {
    return Ut(n.enabled, r) !== !1 && r.state.data === void 0 && !(r.state.status === "error" && n.retryOnMount === !1)
}
function rp(r, n) {
    return Uw(r, n) || r.state.data !== void 0 && ec(r, n, n.refetchOnMount)
}
function ec(r, n, s) {
    if (Ut(n.enabled, r) !== !1 && rr(n.staleTime, r) !== "static") {
        const o = typeof s == "function" ? s(r) : s;
        return o === "always" || o !== !1 && bc(r, n)
    }
    return !1
}
function sp(r, n, s, o) {
    return (r !== n || Ut(o.enabled, r) === !1) && (!s.suspense || r.state.status !== "error") && bc(r, s)
}
function bc(r, n) {
    return Ut(n.enabled, r) !== !1 && r.isStaleByTime(rr(n.staleTime, r))
}
function zw(r, n) {
    return !$u(r.getCurrentResult(), n)
}
function ip(r) {
    return {
        onFetch: (n, s) => {
            var y, x, N, A, E;
            const o = n.options
              , a = (N = (x = (y = n.fetchOptions) == null ? void 0 : y.meta) == null ? void 0 : x.fetchMore) == null ? void 0 : N.direction
              , c = ((A = n.state.data) == null ? void 0 : A.pages) || []
              , f = ((E = n.state.data) == null ? void 0 : E.pageParams) || [];
            let h = {
                pages: [],
                pageParams: []
            }
              , m = 0;
            const g = async () => {
                let _ = !1;
                const S = B => {
                    Ow(B, () => n.signal, () => _ = !0)
                }
                  , D = Fm(n.options, n.fetchOptions)
                  , Q = async (B, M, W) => {
                    if (_)
                        return Promise.reject();
                    if (M == null && B.pages.length)
                        return Promise.resolve(B);
                    const se = ( () => {
                        const ge = {
                            client: n.client,
                            queryKey: n.queryKey,
                            pageParam: M,
                            direction: W ? "backward" : "forward",
                            meta: n.options.meta
                        };
                        return S(ge),
                        ge
                    }
                    )()
                      , F = await D(se)
                      , {maxPages: le} = n.options
                      , be = W ? Pw : Nw;
                    return {
                        pages: be(B.pages, F, le),
                        pageParams: be(B.pageParams, M, le)
                    }
                }
                ;
                if (a && c.length) {
                    const B = a === "backward"
                      , M = B ? Bw : op
                      , W = {
                        pages: c,
                        pageParams: f
                    }
                      , X = M(o, W);
                    h = await Q(W, X, B)
                } else {
                    const B = r ?? c.length;
                    do {
                        const M = m === 0 ? f[0] ?? o.initialPageParam : op(o, h);
                        if (m > 0 && M == null)
                            break;
                        h = await Q(h, M),
                        m++
                    } while (m < B)
                }
                return h
            }
            ;
            n.options.persister ? n.fetchFn = () => {
                var _, S;
                return (S = (_ = n.options).persister) == null ? void 0 : S.call(_, g, {
                    client: n.client,
                    queryKey: n.queryKey,
                    meta: n.options.meta,
                    signal: n.signal
                }, s)
            }
            : n.fetchFn = g
        }
    }
}
function op(r, {pages: n, pageParams: s}) {
    const o = n.length - 1;
    return n.length > 0 ? r.getNextPageParam(n[o], n, s[o], s) : void 0
}
function Bw(r, {pages: n, pageParams: s}) {
    var o;
    return n.length > 0 ? (o = r.getPreviousPageParam) == null ? void 0 : o.call(r, n[0], n, s[0], s) : void 0
}
var Pi, sn, dt, Ar, on, Wn, im, $w = (im = class extends $m {
    constructor(n) {
        super();
        ue(this, on);
        ue(this, Pi);
        ue(this, sn);
        ue(this, dt);
        ue(this, Ar);
        G(this, Pi, n.client),
        this.mutationId = n.mutationId,
        G(this, dt, n.mutationCache),
        G(this, sn, []),
        this.state = n.state || Vw(),
        this.setOptions(n.options),
        this.scheduleGc()
    }
    setOptions(n) {
        this.options = n,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(n) {
        b(this, sn).includes(n) || (b(this, sn).push(n),
        this.clearGcTimeout(),
        b(this, dt).notify({
            type: "observerAdded",
            mutation: this,
            observer: n
        }))
    }
    removeObserver(n) {
        G(this, sn, b(this, sn).filter(s => s !== n)),
        this.scheduleGc(),
        b(this, dt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: n
        })
    }
    optionalRemove() {
        b(this, sn).length || (this.state.status === "pending" ? this.scheduleGc() : b(this, dt).remove(this))
    }
    continue() {
        var n;
        return ((n = b(this, Ar)) == null ? void 0 : n.continue()) ?? this.execute(this.state.variables)
    }
    async execute(n) {
        var f, h, m, g, y, x, N, A, E, _, S, D, Q, B, M, W, X, se;
        const s = () => {
            xe(this, on, Wn).call(this, {
                type: "continue"
            })
        }
          , o = {
            client: b(this, Pi),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        G(this, Ar, Bm({
            fn: () => this.options.mutationFn ? this.options.mutationFn(n, o) : Promise.reject(new Error("No mutationFn found")),
            onFail: (F, le) => {
                xe(this, on, Wn).call(this, {
                    type: "failed",
                    failureCount: F,
                    error: le
                })
            }
            ,
            onPause: () => {
                xe(this, on, Wn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: s,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => b(this, dt).canRun(this)
        }));
        const a = this.state.status === "pending"
          , c = !b(this, Ar).canStart();
        try {
            if (a)
                s();
            else {
                xe(this, on, Wn).call(this, {
                    type: "pending",
                    variables: n,
                    isPaused: c
                }),
                b(this, dt).config.onMutate && await b(this, dt).config.onMutate(n, this, o);
                const le = await ((h = (f = this.options).onMutate) == null ? void 0 : h.call(f, n, o));
                le !== this.state.context && xe(this, on, Wn).call(this, {
                    type: "pending",
                    context: le,
                    variables: n,
                    isPaused: c
                })
            }
            const F = await b(this, Ar).start();
            return await ((g = (m = b(this, dt).config).onSuccess) == null ? void 0 : g.call(m, F, n, this.state.context, this, o)),
            await ((x = (y = this.options).onSuccess) == null ? void 0 : x.call(y, F, n, this.state.context, o)),
            await ((A = (N = b(this, dt).config).onSettled) == null ? void 0 : A.call(N, F, null, this.state.variables, this.state.context, this, o)),
            await ((_ = (E = this.options).onSettled) == null ? void 0 : _.call(E, F, null, n, this.state.context, o)),
            xe(this, on, Wn).call(this, {
                type: "success",
                data: F
            }),
            F
        } catch (F) {
            try {
                await ((D = (S = b(this, dt).config).onError) == null ? void 0 : D.call(S, F, n, this.state.context, this, o))
            } catch (le) {
                Promise.reject(le)
            }
            try {
                await ((B = (Q = this.options).onError) == null ? void 0 : B.call(Q, F, n, this.state.context, o))
            } catch (le) {
                Promise.reject(le)
            }
            try {
                await ((W = (M = b(this, dt).config).onSettled) == null ? void 0 : W.call(M, void 0, F, this.state.variables, this.state.context, this, o))
            } catch (le) {
                Promise.reject(le)
            }
            try {
                await ((se = (X = this.options).onSettled) == null ? void 0 : se.call(X, void 0, F, n, this.state.context, o))
            } catch (le) {
                Promise.reject(le)
            }
            throw xe(this, on, Wn).call(this, {
                type: "error",
                error: F
            }),
            F
        } finally {
            b(this, dt).runNext(this)
        }
    }
}
,
Pi = new WeakMap,
sn = new WeakMap,
dt = new WeakMap,
Ar = new WeakMap,
on = new WeakSet,
Wn = function(n) {
    const s = o => {
        switch (n.type) {
        case "failed":
            return {
                ...o,
                failureCount: n.failureCount,
                failureReason: n.error
            };
        case "pause":
            return {
                ...o,
                isPaused: !0
            };
        case "continue":
            return {
                ...o,
                isPaused: !1
            };
        case "pending":
            return {
                ...o,
                context: n.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: n.isPaused,
                status: "pending",
                variables: n.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...o,
                data: n.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...o,
                data: void 0,
                error: n.error,
                failureCount: o.failureCount + 1,
                failureReason: n.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = s(this.state),
    it.batch( () => {
        b(this, sn).forEach(o => {
            o.onMutationUpdate(n)
        }
        ),
        b(this, dt).notify({
            mutation: this,
            type: "updated",
            action: n
        })
    }
    )
}
,
im);
function Vw() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var kn, Yt, Oi, om, qw = (om = class extends Ai {
    constructor(n={}) {
        super();
        ue(this, kn);
        ue(this, Yt);
        ue(this, Oi);
        this.config = n,
        G(this, kn, new Set),
        G(this, Yt, new Map),
        G(this, Oi, 0)
    }
    build(n, s, o) {
        const a = new $w({
            client: n,
            mutationCache: this,
            mutationId: ++Wo(this, Oi)._,
            options: n.defaultMutationOptions(s),
            state: o
        });
        return this.add(a),
        a
    }
    add(n) {
        b(this, kn).add(n);
        const s = Xo(n);
        if (typeof s == "string") {
            const o = b(this, Yt).get(s);
            o ? o.push(n) : b(this, Yt).set(s, [n])
        }
        this.notify({
            type: "added",
            mutation: n
        })
    }
    remove(n) {
        if (b(this, kn).delete(n)) {
            const s = Xo(n);
            if (typeof s == "string") {
                const o = b(this, Yt).get(s);
                if (o)
                    if (o.length > 1) {
                        const a = o.indexOf(n);
                        a !== -1 && o.splice(a, 1)
                    } else
                        o[0] === n && b(this, Yt).delete(s)
            }
        }
        this.notify({
            type: "removed",
            mutation: n
        })
    }
    canRun(n) {
        const s = Xo(n);
        if (typeof s == "string") {
            const o = b(this, Yt).get(s)
              , a = o == null ? void 0 : o.find(c => c.state.status === "pending");
            return !a || a === n
        } else
            return !0
    }
    runNext(n) {
        var o;
        const s = Xo(n);
        if (typeof s == "string") {
            const a = (o = b(this, Yt).get(s)) == null ? void 0 : o.find(c => c !== n && c.state.isPaused);
            return (a == null ? void 0 : a.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        it.batch( () => {
            b(this, kn).forEach(n => {
                this.notify({
                    type: "removed",
                    mutation: n
                })
            }
            ),
            b(this, kn).clear(),
            b(this, Yt).clear()
        }
        )
    }
    getAll() {
        return Array.from(b(this, kn))
    }
    find(n) {
        const s = {
            exact: !0,
            ...n
        };
        return this.getAll().find(o => Jh(s, o))
    }
    findAll(n={}) {
        return this.getAll().filter(s => Jh(n, s))
    }
    notify(n) {
        it.batch( () => {
            this.listeners.forEach(s => {
                s(n)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const n = this.getAll().filter(s => s.state.isPaused);
        return it.batch( () => Promise.all(n.map(s => s.continue().catch(bt))))
    }
}
,
kn = new WeakMap,
Yt = new WeakMap,
Oi = new WeakMap,
om);
function Xo(r) {
    var n;
    return (n = r.options.scope) == null ? void 0 : n.id
}
var ln, lm, Hw = (lm = class extends Ai {
    constructor(n={}) {
        super();
        ue(this, ln);
        this.config = n,
        G(this, ln, new Map)
    }
    build(n, s, o) {
        const a = s.queryKey
          , c = s.queryHash ?? xc(a, s);
        let f = this.get(c);
        return f || (f = new Mw({
            client: n,
            queryKey: a,
            queryHash: c,
            options: n.defaultQueryOptions(s),
            state: o,
            defaultOptions: n.getQueryDefaults(a)
        }),
        this.add(f)),
        f
    }
    add(n) {
        b(this, ln).has(n.queryHash) || (b(this, ln).set(n.queryHash, n),
        this.notify({
            type: "added",
            query: n
        }))
    }
    remove(n) {
        const s = b(this, ln).get(n.queryHash);
        s && (n.destroy(),
        s === n && b(this, ln).delete(n.queryHash),
        this.notify({
            type: "removed",
            query: n
        }))
    }
    clear() {
        it.batch( () => {
            this.getAll().forEach(n => {
                this.remove(n)
            }
            )
        }
        )
    }
    get(n) {
        return b(this, ln).get(n)
    }
    getAll() {
        return [...b(this, ln).values()]
    }
    find(n) {
        const s = {
            exact: !0,
            ...n
        };
        return this.getAll().find(o => Xh(s, o))
    }
    findAll(n={}) {
        const s = this.getAll();
        return Object.keys(n).length > 0 ? s.filter(o => Xh(n, o)) : s
    }
    notify(n) {
        it.batch( () => {
            this.listeners.forEach(s => {
                s(n)
            }
            )
        }
        )
    }
    onFocus() {
        it.batch( () => {
            this.getAll().forEach(n => {
                n.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        it.batch( () => {
            this.getAll().forEach(n => {
                n.onOnline()
            }
            )
        }
        )
    }
}
,
ln = new WeakMap,
lm), Ve, Zn, er, vs, ws, tr, xs, Ss, am, Qw = (am = class {
    constructor(r={}) {
        ue(this, Ve);
        ue(this, Zn);
        ue(this, er);
        ue(this, vs);
        ue(this, ws);
        ue(this, tr);
        ue(this, xs);
        ue(this, Ss);
        G(this, Ve, r.queryCache || new Hw),
        G(this, Zn, r.mutationCache || new qw),
        G(this, er, r.defaultOptions || {}),
        G(this, vs, new Map),
        G(this, ws, new Map),
        G(this, tr, 0)
    }
    mount() {
        Wo(this, tr)._++,
        b(this, tr) === 1 && (G(this, xs, kc.subscribe(async r => {
            r && (await this.resumePausedMutations(),
            b(this, Ve).onFocus())
        }
        )),
        G(this, Ss, fl.subscribe(async r => {
            r && (await this.resumePausedMutations(),
            b(this, Ve).onOnline())
        }
        )))
    }
    unmount() {
        var r, n;
        Wo(this, tr)._--,
        b(this, tr) === 0 && ((r = b(this, xs)) == null || r.call(this),
        G(this, xs, void 0),
        (n = b(this, Ss)) == null || n.call(this),
        G(this, Ss, void 0))
    }
    isFetching(r) {
        return b(this, Ve).findAll({
            ...r,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(r) {
        return b(this, Zn).findAll({
            ...r,
            status: "pending"
        }).length
    }
    getQueryData(r) {
        var s;
        const n = this.defaultQueryOptions({
            queryKey: r
        });
        return (s = b(this, Ve).get(n.queryHash)) == null ? void 0 : s.state.data
    }
    ensureQueryData(r) {
        const n = this.defaultQueryOptions(r)
          , s = b(this, Ve).build(this, n)
          , o = s.state.data;
        return o === void 0 ? this.fetchQuery(r) : (r.revalidateIfStale && s.isStaleByTime(rr(n.staleTime, s)) && this.prefetchQuery(n),
        Promise.resolve(o))
    }
    getQueriesData(r) {
        return b(this, Ve).findAll(r).map( ({queryKey: n, state: s}) => {
            const o = s.data;
            return [n, o]
        }
        )
    }
    setQueryData(r, n, s) {
        const o = this.defaultQueryOptions({
            queryKey: r
        })
          , a = b(this, Ve).get(o.queryHash)
          , c = a == null ? void 0 : a.state.data
          , f = Cw(n, c);
        if (f !== void 0)
            return b(this, Ve).build(this, o).setData(f, {
                ...s,
                manual: !0
            })
    }
    setQueriesData(r, n, s) {
        return it.batch( () => b(this, Ve).findAll(r).map( ({queryKey: o}) => [o, this.setQueryData(o, n, s)]))
    }
    getQueryState(r) {
        var s;
        const n = this.defaultQueryOptions({
            queryKey: r
        });
        return (s = b(this, Ve).get(n.queryHash)) == null ? void 0 : s.state
    }
    removeQueries(r) {
        const n = b(this, Ve);
        it.batch( () => {
            n.findAll(r).forEach(s => {
                n.remove(s)
            }
            )
        }
        )
    }
    resetQueries(r, n) {
        const s = b(this, Ve);
        return it.batch( () => (s.findAll(r).forEach(o => {
            o.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...r
        }, n)))
    }
    cancelQueries(r, n={}) {
        const s = {
            revert: !0,
            ...n
        }
          , o = it.batch( () => b(this, Ve).findAll(r).map(a => a.cancel(s)));
        return Promise.all(o).then(bt).catch(bt)
    }
    invalidateQueries(r, n={}) {
        return it.batch( () => (b(this, Ve).findAll(r).forEach(s => {
            s.invalidate()
        }
        ),
        (r == null ? void 0 : r.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...r,
            type: (r == null ? void 0 : r.refetchType) ?? (r == null ? void 0 : r.type) ?? "active"
        }, n)))
    }
    refetchQueries(r, n={}) {
        const s = {
            ...n,
            cancelRefetch: n.cancelRefetch ?? !0
        }
          , o = it.batch( () => b(this, Ve).findAll(r).filter(a => !a.isDisabled() && !a.isStatic()).map(a => {
            let c = a.fetch(void 0, s);
            return s.throwOnError || (c = c.catch(bt)),
            a.state.fetchStatus === "paused" ? Promise.resolve() : c
        }
        ));
        return Promise.all(o).then(bt)
    }
    fetchQuery(r) {
        const n = this.defaultQueryOptions(r);
        n.retry === void 0 && (n.retry = !1);
        const s = b(this, Ve).build(this, n);
        return s.isStaleByTime(rr(n.staleTime, s)) ? s.fetch(n) : Promise.resolve(s.state.data)
    }
    prefetchQuery(r) {
        return this.fetchQuery(r).then(bt).catch(bt)
    }
    fetchInfiniteQuery(r) {
        return r.behavior = ip(r.pages),
        this.fetchQuery(r)
    }
    prefetchInfiniteQuery(r) {
        return this.fetchInfiniteQuery(r).then(bt).catch(bt)
    }
    ensureInfiniteQueryData(r) {
        return r.behavior = ip(r.pages),
        this.ensureQueryData(r)
    }
    resumePausedMutations() {
        return fl.isOnline() ? b(this, Zn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return b(this, Ve)
    }
    getMutationCache() {
        return b(this, Zn)
    }
    getDefaultOptions() {
        return b(this, er)
    }
    setDefaultOptions(r) {
        G(this, er, r)
    }
    setQueryDefaults(r, n) {
        b(this, vs).set(bi(r), {
            queryKey: r,
            defaultOptions: n
        })
    }
    getQueryDefaults(r) {
        const n = [...b(this, vs).values()]
          , s = {};
        return n.forEach(o => {
            _i(r, o.queryKey) && Object.assign(s, o.defaultOptions)
        }
        ),
        s
    }
    setMutationDefaults(r, n) {
        b(this, ws).set(bi(r), {
            mutationKey: r,
            defaultOptions: n
        })
    }
    getMutationDefaults(r) {
        const n = [...b(this, ws).values()]
          , s = {};
        return n.forEach(o => {
            _i(r, o.mutationKey) && Object.assign(s, o.defaultOptions)
        }
        ),
        s
    }
    defaultQueryOptions(r) {
        if (r._defaulted)
            return r;
        const n = {
            ...b(this, er).queries,
            ...this.getQueryDefaults(r.queryKey),
            ...r,
            _defaulted: !0
        };
        return n.queryHash || (n.queryHash = xc(n.queryKey, n)),
        n.refetchOnReconnect === void 0 && (n.refetchOnReconnect = n.networkMode !== "always"),
        n.throwOnError === void 0 && (n.throwOnError = !!n.suspense),
        !n.networkMode && n.persister && (n.networkMode = "offlineFirst"),
        n.queryFn === Sc && (n.enabled = !1),
        n
    }
    defaultMutationOptions(r) {
        return r != null && r._defaulted ? r : {
            ...b(this, er).mutations,
            ...(r == null ? void 0 : r.mutationKey) && this.getMutationDefaults(r.mutationKey),
            ...r,
            _defaulted: !0
        }
    }
    clear() {
        b(this, Ve).clear(),
        b(this, Zn).clear()
    }
}
,
Ve = new WeakMap,
Zn = new WeakMap,
er = new WeakMap,
vs = new WeakMap,
ws = new WeakMap,
tr = new WeakMap,
xs = new WeakMap,
Ss = new WeakMap,
am), Hm = U.createContext(void 0), Ww = r => {
    const n = U.useContext(Hm);
    if (!n)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return n
}
, Kw = ({client: r, children: n}) => (U.useEffect( () => (r.mount(),
() => {
    r.unmount()
}
), [r]),
v.jsx(Hm.Provider, {
    value: r,
    children: n
})), Qm = U.createContext(!1), Gw = () => U.useContext(Qm);
Qm.Provider;
function Yw() {
    let r = !1;
    return {
        clearReset: () => {
            r = !1
        }
        ,
        reset: () => {
            r = !0
        }
        ,
        isReset: () => r
    }
}
var Xw = U.createContext(Yw())
  , Jw = () => U.useContext(Xw)
  , Zw = (r, n, s) => {
    const o = s != null && s.state.error && typeof r.throwOnError == "function" ? Um(r.throwOnError, [s.state.error, s]) : r.throwOnError;
    (r.suspense || r.experimental_prefetchInRender || o) && (n.isReset() || (r.retryOnMount = !1))
}
  , ex = r => {
    U.useEffect( () => {
        r.clearReset()
    }
    , [r])
}
  , tx = ({result: r, errorResetBoundary: n, throwOnError: s, query: o, suspense: a}) => r.isError && !n.isReset() && !r.isFetching && o && (a && r.data === void 0 || Um(s, [r.error, o]))
  , nx = r => {
    if (r.suspense) {
        const s = a => a === "static" ? a : Math.max(a ?? 1e3, 1e3)
          , o = r.staleTime;
        r.staleTime = typeof o == "function" ? (...a) => s(o(...a)) : s(o),
        typeof r.gcTime == "number" && (r.gcTime = Math.max(r.gcTime, 1e3))
    }
}
  , rx = (r, n) => r.isLoading && r.isFetching && !n
  , sx = (r, n) => (r == null ? void 0 : r.suspense) && n.isPending
  , lp = (r, n, s) => n.fetchOptimistic(r).catch( () => {
    s.clearReset()
}
);
function ix(r, n, s) {
    var N, A, E, _;
    const o = Gw()
      , a = Jw()
      , c = Ww()
      , f = c.defaultQueryOptions(r);
    (A = (N = c.getDefaultOptions().queries) == null ? void 0 : N._experimental_beforeQuery) == null || A.call(N, f);
    const h = c.getQueryCache().get(f.queryHash);
    f._optimisticResults = o ? "isRestoring" : "optimistic",
    nx(f),
    Zw(f, a, h),
    ex(a);
    const m = !c.getQueryCache().get(f.queryHash)
      , [g] = U.useState( () => new n(c,f))
      , y = g.getOptimisticResult(f)
      , x = !o && r.subscribed !== !1;
    if (U.useSyncExternalStore(U.useCallback(S => {
        const D = x ? g.subscribe(it.batchCalls(S)) : bt;
        return g.updateResult(),
        D
    }
    , [g, x]), () => g.getCurrentResult(), () => g.getCurrentResult()),
    U.useEffect( () => {
        g.setOptions(f)
    }
    , [f, g]),
    sx(f, y))
        throw lp(f, g, a);
    if (tx({
        result: y,
        errorResetBoundary: a,
        throwOnError: f.throwOnError,
        query: h,
        suspense: f.suspense
    }))
        throw y.error;
    if ((_ = (E = c.getDefaultOptions().queries) == null ? void 0 : E._experimental_afterQuery) == null || _.call(E, f, y),
    f.experimental_prefetchInRender && !Lr && rx(y, o)) {
        const S = m ? lp(f, g, a) : h == null ? void 0 : h.promise;
        S == null || S.catch(bt).finally( () => {
            g.updateResult()
        }
        )
    }
    return f.notifyOnChangeProps ? y : g.trackResult(y)
}
function ox(r, n) {
    return ix(r, Fw)
}
const lx = new Qw({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});
dm();
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function hl() {
    return hl = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
            var s = arguments[n];
            for (var o in s)
                Object.prototype.hasOwnProperty.call(s, o) && (r[o] = s[o])
        }
        return r
    }
    ,
    hl.apply(this, arguments)
}
var nr;
(function(r) {
    r.Pop = "POP",
    r.Push = "PUSH",
    r.Replace = "REPLACE"
}
)(nr || (nr = {}));
const ap = "popstate";
function ax(r) {
    r === void 0 && (r = {});
    function n(o, a) {
        let {pathname: c, search: f, hash: h} = o.location;
        return tc("", {
            pathname: c,
            search: f,
            hash: h
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }
    function s(o, a) {
        return typeof a == "string" ? a : Km(a)
    }
    return cx(n, s, null, r)
}
function Ct(r, n) {
    if (r === !1 || r === null || typeof r > "u")
        throw new Error(n)
}
function Wm(r, n) {
    if (!r) {
        typeof console < "u" && console.warn(n);
        try {
            throw new Error(n)
        } catch {}
    }
}
function ux() {
    return Math.random().toString(36).substr(2, 8)
}
function up(r, n) {
    return {
        usr: r.state,
        key: r.key,
        idx: n
    }
}
function tc(r, n, s, o) {
    return s === void 0 && (s = null),
    hl({
        pathname: typeof r == "string" ? r : r.pathname,
        search: "",
        hash: ""
    }, typeof n == "string" ? vl(n) : n, {
        state: s,
        key: n && n.key || o || ux()
    })
}
function Km(r) {
    let {pathname: n="/", search: s="", hash: o=""} = r;
    return s && s !== "?" && (n += s.charAt(0) === "?" ? s : "?" + s),
    o && o !== "#" && (n += o.charAt(0) === "#" ? o : "#" + o),
    n
}
function vl(r) {
    let n = {};
    if (r) {
        let s = r.indexOf("#");
        s >= 0 && (n.hash = r.substr(s),
        r = r.substr(0, s));
        let o = r.indexOf("?");
        o >= 0 && (n.search = r.substr(o),
        r = r.substr(0, o)),
        r && (n.pathname = r)
    }
    return n
}
function cx(r, n, s, o) {
    o === void 0 && (o = {});
    let {window: a=document.defaultView, v5Compat: c=!1} = o
      , f = a.history
      , h = nr.Pop
      , m = null
      , g = y();
    g == null && (g = 0,
    f.replaceState(hl({}, f.state, {
        idx: g
    }), ""));
    function y() {
        return (f.state || {
            idx: null
        }).idx
    }
    function x() {
        h = nr.Pop;
        let S = y()
          , D = S == null ? null : S - g;
        g = S,
        m && m({
            action: h,
            location: _.location,
            delta: D
        })
    }
    function N(S, D) {
        h = nr.Push;
        let Q = tc(_.location, S, D);
        g = y() + 1;
        let B = up(Q, g)
          , M = _.createHref(Q);
        try {
            f.pushState(B, "", M)
        } catch (W) {
            if (W instanceof DOMException && W.name === "DataCloneError")
                throw W;
            a.location.assign(M)
        }
        c && m && m({
            action: h,
            location: _.location,
            delta: 1
        })
    }
    function A(S, D) {
        h = nr.Replace;
        let Q = tc(_.location, S, D);
        g = y();
        let B = up(Q, g)
          , M = _.createHref(Q);
        f.replaceState(B, "", M),
        c && m && m({
            action: h,
            location: _.location,
            delta: 0
        })
    }
    function E(S) {
        let D = a.location.origin !== "null" ? a.location.origin : a.location.href
          , Q = typeof S == "string" ? S : Km(S);
        return Q = Q.replace(/ $/, "%20"),
        Ct(D, "No window.location.(origin|href) available to create URL for href: " + Q),
        new URL(Q,D)
    }
    let _ = {
        get action() {
            return h
        },
        get location() {
            return r(a, f)
        },
        listen(S) {
            if (m)
                throw new Error("A history only accepts one active listener");
            return a.addEventListener(ap, x),
            m = S,
            () => {
                a.removeEventListener(ap, x),
                m = null
            }
        },
        createHref(S) {
            return n(a, S)
        },
        createURL: E,
        encodeLocation(S) {
            let D = E(S);
            return {
                pathname: D.pathname,
                search: D.search,
                hash: D.hash
            }
        },
        push: N,
        replace: A,
        go(S) {
            return f.go(S)
        }
    };
    return _
}
var cp;
(function(r) {
    r.data = "data",
    r.deferred = "deferred",
    r.redirect = "redirect",
    r.error = "error"
}
)(cp || (cp = {}));
function dx(r, n, s) {
    return s === void 0 && (s = "/"),
    fx(r, n, s)
}
function fx(r, n, s, o) {
    let a = typeof n == "string" ? vl(n) : n
      , c = Xm(a.pathname || "/", s);
    if (c == null)
        return null;
    let f = Gm(r);
    hx(f);
    let h = null;
    for (let m = 0; h == null && m < f.length; ++m) {
        let g = Ex(c);
        h = kx(f[m], g)
    }
    return h
}
function Gm(r, n, s, o) {
    n === void 0 && (n = []),
    s === void 0 && (s = []),
    o === void 0 && (o = "");
    let a = (c, f, h) => {
        let m = {
            relativePath: h === void 0 ? c.path || "" : h,
            caseSensitive: c.caseSensitive === !0,
            childrenIndex: f,
            route: c
        };
        m.relativePath.startsWith("/") && (Ct(m.relativePath.startsWith(o), 'Absolute route path "' + m.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        m.relativePath = m.relativePath.slice(o.length));
        let g = us([o, m.relativePath])
          , y = s.concat(m);
        c.children && c.children.length > 0 && (Ct(c.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + g + '".')),
        Gm(c.children, n, y, g)),
        !(c.path == null && !c.index) && n.push({
            path: g,
            score: xx(g, c.index),
            routesMeta: y
        })
    }
    ;
    return r.forEach( (c, f) => {
        var h;
        if (c.path === "" || !((h = c.path) != null && h.includes("?")))
            a(c, f);
        else
            for (let m of Ym(c.path))
                a(c, f, m)
    }
    ),
    n
}
function Ym(r) {
    let n = r.split("/");
    if (n.length === 0)
        return [];
    let[s,...o] = n
      , a = s.endsWith("?")
      , c = s.replace(/\?$/, "");
    if (o.length === 0)
        return a ? [c, ""] : [c];
    let f = Ym(o.join("/"))
      , h = [];
    return h.push(...f.map(m => m === "" ? c : [c, m].join("/"))),
    a && h.push(...f),
    h.map(m => r.startsWith("/") && m === "" ? "/" : m)
}
function hx(r) {
    r.sort( (n, s) => n.score !== s.score ? s.score - n.score : Sx(n.routesMeta.map(o => o.childrenIndex), s.routesMeta.map(o => o.childrenIndex)))
}
const px = /^:[\w-]+$/
  , mx = 3
  , gx = 2
  , yx = 1
  , vx = 10
  , wx = -2
  , dp = r => r === "*";
function xx(r, n) {
    let s = r.split("/")
      , o = s.length;
    return s.some(dp) && (o += wx),
    n && (o += gx),
    s.filter(a => !dp(a)).reduce( (a, c) => a + (px.test(c) ? mx : c === "" ? yx : vx), o)
}
function Sx(r, n) {
    return r.length === n.length && r.slice(0, -1).every( (o, a) => o === n[a]) ? r[r.length - 1] - n[n.length - 1] : 0
}
function kx(r, n, s) {
    let {routesMeta: o} = r
      , a = {}
      , c = "/"
      , f = [];
    for (let h = 0; h < o.length; ++h) {
        let m = o[h]
          , g = h === o.length - 1
          , y = c === "/" ? n : n.slice(c.length) || "/"
          , x = bx({
            path: m.relativePath,
            caseSensitive: m.caseSensitive,
            end: g
        }, y)
          , N = m.route;
        if (!x)
            return null;
        Object.assign(a, x.params),
        f.push({
            params: a,
            pathname: us([c, x.pathname]),
            pathnameBase: Cx(us([c, x.pathnameBase])),
            route: N
        }),
        x.pathnameBase !== "/" && (c = us([c, x.pathnameBase]))
    }
    return f
}
function bx(r, n) {
    typeof r == "string" && (r = {
        path: r,
        caseSensitive: !1,
        end: !0
    });
    let[s,o] = _x(r.path, r.caseSensitive, r.end)
      , a = n.match(s);
    if (!a)
        return null;
    let c = a[0]
      , f = c.replace(/(.)\/+$/, "$1")
      , h = a.slice(1);
    return {
        params: o.reduce( (g, y, x) => {
            let {paramName: N, isOptional: A} = y;
            if (N === "*") {
                let _ = h[x] || "";
                f = c.slice(0, c.length - _.length).replace(/(.)\/+$/, "$1")
            }
            const E = h[x];
            return A && !E ? g[N] = void 0 : g[N] = (E || "").replace(/%2F/g, "/"),
            g
        }
        , {}),
        pathname: c,
        pathnameBase: f,
        pattern: r
    }
}
function _x(r, n, s) {
    n === void 0 && (n = !1),
    s === void 0 && (s = !0),
    Wm(r === "*" || !r.endsWith("*") || r.endsWith("/*"), 'Route path "' + r + '" will be treated as if it were ' + ('"' + r.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + r.replace(/\*$/, "/*") + '".'));
    let o = []
      , a = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (f, h, m) => (o.push({
        paramName: h,
        isOptional: m != null
    }),
    m ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return r.endsWith("*") ? (o.push({
        paramName: "*"
    }),
    a += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? a += "\\/*$" : r !== "" && r !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a,n ? void 0 : "i"), o]
}
function Ex(r) {
    try {
        return r.split("/").map(n => decodeURIComponent(n).replace(/\//g, "%2F")).join("/")
    } catch (n) {
        return Wm(!1, 'The URL path "' + r + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + n + ").")),
        r
    }
}
function Xm(r, n) {
    if (n === "/")
        return r;
    if (!r.toLowerCase().startsWith(n.toLowerCase()))
        return null;
    let s = n.endsWith("/") ? n.length - 1 : n.length
      , o = r.charAt(s);
    return o && o !== "/" ? null : r.slice(s) || "/"
}
const us = r => r.join("/").replace(/\/\/+/g, "/")
  , Cx = r => r.replace(/\/+$/, "").replace(/^\/*/, "/");
function Rx(r) {
    return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data"in r
}
const Jm = ["post", "put", "patch", "delete"];
new Set(Jm);
const Tx = ["get", ...Jm];
new Set(Tx);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function pl() {
    return pl = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
            var s = arguments[n];
            for (var o in s)
                Object.prototype.hasOwnProperty.call(s, o) && (r[o] = s[o])
        }
        return r
    }
    ,
    pl.apply(this, arguments)
}
const Nx = U.createContext(null)
  , Px = U.createContext(null)
  , Zm = U.createContext(null)
  , wl = U.createContext(null)
  , xl = U.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , eg = U.createContext(null);
function _c() {
    return U.useContext(wl) != null
}
function tg() {
    return _c() || Ct(!1),
    U.useContext(wl).location
}
function Ox(r, n) {
    return Ax(r, n)
}
function Ax(r, n, s, o) {
    _c() || Ct(!1);
    let {navigator: a} = U.useContext(Zm)
      , {matches: c} = U.useContext(xl)
      , f = c[c.length - 1]
      , h = f ? f.params : {};
    f && f.pathname;
    let m = f ? f.pathnameBase : "/";
    f && f.route;
    let g = tg(), y;
    if (n) {
        var x;
        let S = typeof n == "string" ? vl(n) : n;
        m === "/" || (x = S.pathname) != null && x.startsWith(m) || Ct(!1),
        y = S
    } else
        y = g;
    let N = y.pathname || "/"
      , A = N;
    if (m !== "/") {
        let S = m.replace(/^\//, "").split("/");
        A = "/" + N.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let E = dx(r, {
        pathname: A
    })
      , _ = Mx(E && E.map(S => Object.assign({}, S, {
        params: Object.assign({}, h, S.params),
        pathname: us([m, a.encodeLocation ? a.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? m : us([m, a.encodeLocation ? a.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), c, s, o);
    return n && _ ? U.createElement(wl.Provider, {
        value: {
            location: pl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, y),
            navigationType: nr.Pop
        }
    }, _) : _
}
function jx() {
    let r = Bx()
      , n = Rx(r) ? r.status + " " + r.statusText : r instanceof Error ? r.message : JSON.stringify(r)
      , s = r instanceof Error ? r.stack : null
      , a = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return U.createElement(U.Fragment, null, U.createElement("h2", null, "Unexpected Application Error!"), U.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, n), s ? U.createElement("pre", {
        style: a
    }, s) : null, null)
}
const Lx = U.createElement(jx, null);
class Ix extends U.Component {
    constructor(n) {
        super(n),
        this.state = {
            location: n.location,
            revalidation: n.revalidation,
            error: n.error
        }
    }
    static getDerivedStateFromError(n) {
        return {
            error: n
        }
    }
    static getDerivedStateFromProps(n, s) {
        return s.location !== n.location || s.revalidation !== "idle" && n.revalidation === "idle" ? {
            error: n.error,
            location: n.location,
            revalidation: n.revalidation
        } : {
            error: n.error !== void 0 ? n.error : s.error,
            location: s.location,
            revalidation: n.revalidation || s.revalidation
        }
    }
    componentDidCatch(n, s) {
        console.error("React Router caught the following error during render", n, s)
    }
    render() {
        return this.state.error !== void 0 ? U.createElement(xl.Provider, {
            value: this.props.routeContext
        }, U.createElement(eg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Dx(r) {
    let {routeContext: n, match: s, children: o} = r
      , a = U.useContext(Nx);
    return a && a.static && a.staticContext && (s.route.errorElement || s.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = s.route.id),
    U.createElement(xl.Provider, {
        value: n
    }, o)
}
function Mx(r, n, s, o) {
    var a;
    if (n === void 0 && (n = []),
    s === void 0 && (s = null),
    o === void 0 && (o = null),
    r == null) {
        var c;
        if (!s)
            return null;
        if (s.errors)
            r = s.matches;
        else if ((c = o) != null && c.v7_partialHydration && n.length === 0 && !s.initialized && s.matches.length > 0)
            r = s.matches;
        else
            return null
    }
    let f = r
      , h = (a = s) == null ? void 0 : a.errors;
    if (h != null) {
        let y = f.findIndex(x => x.route.id && (h == null ? void 0 : h[x.route.id]) !== void 0);
        y >= 0 || Ct(!1),
        f = f.slice(0, Math.min(f.length, y + 1))
    }
    let m = !1
      , g = -1;
    if (s && o && o.v7_partialHydration)
        for (let y = 0; y < f.length; y++) {
            let x = f[y];
            if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (g = y),
            x.route.id) {
                let {loaderData: N, errors: A} = s
                  , E = x.route.loader && N[x.route.id] === void 0 && (!A || A[x.route.id] === void 0);
                if (x.route.lazy || E) {
                    m = !0,
                    g >= 0 ? f = f.slice(0, g + 1) : f = [f[0]];
                    break
                }
            }
        }
    return f.reduceRight( (y, x, N) => {
        let A, E = !1, _ = null, S = null;
        s && (A = h && x.route.id ? h[x.route.id] : void 0,
        _ = x.route.errorElement || Lx,
        m && (g < 0 && N === 0 ? ($x("route-fallback"),
        E = !0,
        S = null) : g === N && (E = !0,
        S = x.route.hydrateFallbackElement || null)));
        let D = n.concat(f.slice(0, N + 1))
          , Q = () => {
            let B;
            return A ? B = _ : E ? B = S : x.route.Component ? B = U.createElement(x.route.Component, null) : x.route.element ? B = x.route.element : B = y,
            U.createElement(Dx, {
                match: x,
                routeContext: {
                    outlet: y,
                    matches: D,
                    isDataRoute: s != null
                },
                children: B
            })
        }
        ;
        return s && (x.route.ErrorBoundary || x.route.errorElement || N === 0) ? U.createElement(Ix, {
            location: s.location,
            revalidation: s.revalidation,
            component: _,
            error: A,
            children: Q(),
            routeContext: {
                outlet: null,
                matches: D,
                isDataRoute: !0
            }
        }) : Q()
    }
    , null)
}
var ng = (function(r) {
    return r.UseBlocker = "useBlocker",
    r.UseLoaderData = "useLoaderData",
    r.UseActionData = "useActionData",
    r.UseRouteError = "useRouteError",
    r.UseNavigation = "useNavigation",
    r.UseRouteLoaderData = "useRouteLoaderData",
    r.UseMatches = "useMatches",
    r.UseRevalidator = "useRevalidator",
    r.UseNavigateStable = "useNavigate",
    r.UseRouteId = "useRouteId",
    r
}
)(ng || {});
function Fx(r) {
    let n = U.useContext(Px);
    return n || Ct(!1),
    n
}
function Ux(r) {
    let n = U.useContext(xl);
    return n || Ct(!1),
    n
}
function zx(r) {
    let n = Ux()
      , s = n.matches[n.matches.length - 1];
    return s.route.id || Ct(!1),
    s.route.id
}
function Bx() {
    var r;
    let n = U.useContext(eg)
      , s = Fx(ng.UseRouteError)
      , o = zx();
    return n !== void 0 ? n : (r = s.errors) == null ? void 0 : r[o]
}
const fp = {};
function $x(r, n, s) {
    fp[r] || (fp[r] = !0)
}
function Vx(r, n) {
    r == null || r.v7_startTransition,
    r == null || r.v7_relativeSplatPath
}
function nc(r) {
    Ct(!1)
}
function qx(r) {
    let {basename: n="/", children: s=null, location: o, navigationType: a=nr.Pop, navigator: c, static: f=!1, future: h} = r;
    _c() && Ct(!1);
    let m = n.replace(/^\/*/, "/")
      , g = U.useMemo( () => ({
        basename: m,
        navigator: c,
        static: f,
        future: pl({
            v7_relativeSplatPath: !1
        }, h)
    }), [m, h, c, f]);
    typeof o == "string" && (o = vl(o));
    let {pathname: y="/", search: x="", hash: N="", state: A=null, key: E="default"} = o
      , _ = U.useMemo( () => {
        let S = Xm(y, m);
        return S == null ? null : {
            location: {
                pathname: S,
                search: x,
                hash: N,
                state: A,
                key: E
            },
            navigationType: a
        }
    }
    , [m, y, x, N, A, E, a]);
    return _ == null ? null : U.createElement(Zm.Provider, {
        value: g
    }, U.createElement(wl.Provider, {
        children: s,
        value: _
    }))
}
function Hx(r) {
    let {children: n, location: s} = r;
    return Ox(rc(n), s)
}
new Promise( () => {}
);
function rc(r, n) {
    n === void 0 && (n = []);
    let s = [];
    return U.Children.forEach(r, (o, a) => {
        if (!U.isValidElement(o))
            return;
        let c = [...n, a];
        if (o.type === U.Fragment) {
            s.push.apply(s, rc(o.props.children, c));
            return
        }
        o.type !== nc && Ct(!1),
        !o.props.index || !o.props.children || Ct(!1);
        let f = {
            id: o.props.id || c.join("-"),
            caseSensitive: o.props.caseSensitive,
            element: o.props.element,
            Component: o.props.Component,
            index: o.props.index,
            path: o.props.path,
            loader: o.props.loader,
            action: o.props.action,
            errorElement: o.props.errorElement,
            ErrorBoundary: o.props.ErrorBoundary,
            hasErrorBoundary: o.props.ErrorBoundary != null || o.props.errorElement != null,
            shouldRevalidate: o.props.shouldRevalidate,
            handle: o.props.handle,
            lazy: o.props.lazy
        };
        o.props.children && (f.children = rc(o.props.children, c)),
        s.push(f)
    }
    ),
    s
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Qx = "6";
try {
    window.__reactRouterVersion = Qx
} catch {}
const Wx = "startTransition"
  , hp = cm[Wx];
function Kx(r) {
    let {basename: n, children: s, future: o, window: a} = r
      , c = U.useRef();
    c.current == null && (c.current = ax({
        window: a,
        v5Compat: !0
    }));
    let f = c.current
      , [h,m] = U.useState({
        action: f.action,
        location: f.location
    })
      , {v7_startTransition: g} = o || {}
      , y = U.useCallback(x => {
        g && hp ? hp( () => m(x)) : m(x)
    }
    , [m, g]);
    return U.useLayoutEffect( () => f.listen(y), [f, y]),
    U.useEffect( () => Vx(o), [o]),
    U.createElement(qx, {
        basename: n,
        children: s,
        location: h.location,
        navigationType: h.action,
        navigator: f,
        future: o
    })
}
var pp;
(function(r) {
    r.UseScrollRestoration = "useScrollRestoration",
    r.UseSubmit = "useSubmit",
    r.UseSubmitFetcher = "useSubmitFetcher",
    r.UseFetcher = "useFetcher",
    r.useViewTransitionState = "useViewTransitionState"
}
)(pp || (pp = {}));
var mp;
(function(r) {
    r.UseFetcher = "useFetcher",
    r.UseFetchers = "useFetchers",
    r.UseScrollRestoration = "useScrollRestoration"
}
)(mp || (mp = {}));
function rg(r, n) {
    return function() {
        return r.apply(n, arguments)
    }
}
const {toString: Gx} = Object.prototype
  , {getPrototypeOf: Ec} = Object
  , {iterator: Sl, toStringTag: sg} = Symbol
  , kl = (r => n => {
    const s = Gx.call(n);
    return r[s] || (r[s] = s.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Jt = r => (r = r.toLowerCase(),
n => kl(n) === r)
  , bl = r => n => typeof n === r
  , {isArray: bs} = Array
  , ks = bl("undefined");
function ji(r) {
    return r !== null && !ks(r) && r.constructor !== null && !ks(r.constructor) && _t(r.constructor.isBuffer) && r.constructor.isBuffer(r)
}
const ig = Jt("ArrayBuffer");
function Yx(r) {
    let n;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(r) : n = r && r.buffer && ig(r.buffer),
    n
}
const Xx = bl("string")
  , _t = bl("function")
  , og = bl("number")
  , Li = r => r !== null && typeof r == "object"
  , Jx = r => r === !0 || r === !1
  , rl = r => {
    if (kl(r) !== "object")
        return !1;
    const n = Ec(r);
    return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(sg in r) && !(Sl in r)
}
  , Zx = r => {
    if (!Li(r) || ji(r))
        return !1;
    try {
        return Object.keys(r).length === 0 && Object.getPrototypeOf(r) === Object.prototype
    } catch {
        return !1
    }
}
  , e1 = Jt("Date")
  , t1 = Jt("File")
  , n1 = Jt("Blob")
  , r1 = Jt("FileList")
  , s1 = r => Li(r) && _t(r.pipe)
  , i1 = r => {
    let n;
    return r && (typeof FormData == "function" && r instanceof FormData || _t(r.append) && ((n = kl(r)) === "formdata" || n === "object" && _t(r.toString) && r.toString() === "[object FormData]"))
}
  , o1 = Jt("URLSearchParams")
  , [l1,a1,u1,c1] = ["ReadableStream", "Request", "Response", "Headers"].map(Jt)
  , d1 = r => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ii(r, n, {allOwnKeys: s=!1}={}) {
    if (r === null || typeof r > "u")
        return;
    let o, a;
    if (typeof r != "object" && (r = [r]),
    bs(r))
        for (o = 0,
        a = r.length; o < a; o++)
            n.call(null, r[o], o, r);
    else {
        if (ji(r))
            return;
        const c = s ? Object.getOwnPropertyNames(r) : Object.keys(r)
          , f = c.length;
        let h;
        for (o = 0; o < f; o++)
            h = c[o],
            n.call(null, r[h], h, r)
    }
}
function lg(r, n) {
    if (ji(r))
        return null;
    n = n.toLowerCase();
    const s = Object.keys(r);
    let o = s.length, a;
    for (; o-- > 0; )
        if (a = s[o],
        n === a.toLowerCase())
            return a;
    return null
}
const br = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , ag = r => !ks(r) && r !== br;
function sc() {
    const {caseless: r, skipUndefined: n} = ag(this) && this || {}
      , s = {}
      , o = (a, c) => {
        if (c === "__proto__" || c === "constructor" || c === "prototype")
            return;
        const f = r && lg(s, c) || c;
        rl(s[f]) && rl(a) ? s[f] = sc(s[f], a) : rl(a) ? s[f] = sc({}, a) : bs(a) ? s[f] = a.slice() : (!n || !ks(a)) && (s[f] = a)
    }
    ;
    for (let a = 0, c = arguments.length; a < c; a++)
        arguments[a] && Ii(arguments[a], o);
    return s
}
const f1 = (r, n, s, {allOwnKeys: o}={}) => (Ii(n, (a, c) => {
    s && _t(a) ? Object.defineProperty(r, c, {
        value: rg(a, s),
        writable: !0,
        enumerable: !0,
        configurable: !0
    }) : Object.defineProperty(r, c, {
        value: a,
        writable: !0,
        enumerable: !0,
        configurable: !0
    })
}
, {
    allOwnKeys: o
}),
r)
  , h1 = r => (r.charCodeAt(0) === 65279 && (r = r.slice(1)),
r)
  , p1 = (r, n, s, o) => {
    r.prototype = Object.create(n.prototype, o),
    Object.defineProperty(r.prototype, "constructor", {
        value: r,
        writable: !0,
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(r, "super", {
        value: n.prototype
    }),
    s && Object.assign(r.prototype, s)
}
  , m1 = (r, n, s, o) => {
    let a, c, f;
    const h = {};
    if (n = n || {},
    r == null)
        return n;
    do {
        for (a = Object.getOwnPropertyNames(r),
        c = a.length; c-- > 0; )
            f = a[c],
            (!o || o(f, r, n)) && !h[f] && (n[f] = r[f],
            h[f] = !0);
        r = s !== !1 && Ec(r)
    } while (r && (!s || s(r, n)) && r !== Object.prototype);
    return n
}
  , g1 = (r, n, s) => {
    r = String(r),
    (s === void 0 || s > r.length) && (s = r.length),
    s -= n.length;
    const o = r.indexOf(n, s);
    return o !== -1 && o === s
}
  , y1 = r => {
    if (!r)
        return null;
    if (bs(r))
        return r;
    let n = r.length;
    if (!og(n))
        return null;
    const s = new Array(n);
    for (; n-- > 0; )
        s[n] = r[n];
    return s
}
  , v1 = (r => n => r && n instanceof r)(typeof Uint8Array < "u" && Ec(Uint8Array))
  , w1 = (r, n) => {
    const o = (r && r[Sl]).call(r);
    let a;
    for (; (a = o.next()) && !a.done; ) {
        const c = a.value;
        n.call(r, c[0], c[1])
    }
}
  , x1 = (r, n) => {
    let s;
    const o = [];
    for (; (s = r.exec(n)) !== null; )
        o.push(s);
    return o
}
  , S1 = Jt("HTMLFormElement")
  , k1 = r => r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, o, a) {
    return o.toUpperCase() + a
})
  , gp = ( ({hasOwnProperty: r}) => (n, s) => r.call(n, s))(Object.prototype)
  , b1 = Jt("RegExp")
  , ug = (r, n) => {
    const s = Object.getOwnPropertyDescriptors(r)
      , o = {};
    Ii(s, (a, c) => {
        let f;
        (f = n(a, c, r)) !== !1 && (o[c] = f || a)
    }
    ),
    Object.defineProperties(r, o)
}
  , _1 = r => {
    ug(r, (n, s) => {
        if (_t(r) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
            return !1;
        const o = r[s];
        if (_t(o)) {
            if (n.enumerable = !1,
            "writable"in n) {
                n.writable = !1;
                return
            }
            n.set || (n.set = () => {
                throw Error("Can not rewrite read-only method '" + s + "'")
            }
            )
        }
    }
    )
}
  , E1 = (r, n) => {
    const s = {}
      , o = a => {
        a.forEach(c => {
            s[c] = !0
        }
        )
    }
    ;
    return bs(r) ? o(r) : o(String(r).split(n)),
    s
}
  , C1 = () => {}
  , R1 = (r, n) => r != null && Number.isFinite(r = +r) ? r : n;
function T1(r) {
    return !!(r && _t(r.append) && r[sg] === "FormData" && r[Sl])
}
const N1 = r => {
    const n = new Array(10)
      , s = (o, a) => {
        if (Li(o)) {
            if (n.indexOf(o) >= 0)
                return;
            if (ji(o))
                return o;
            if (!("toJSON"in o)) {
                n[a] = o;
                const c = bs(o) ? [] : {};
                return Ii(o, (f, h) => {
                    const m = s(f, a + 1);
                    !ks(m) && (c[h] = m)
                }
                ),
                n[a] = void 0,
                c
            }
        }
        return o
    }
    ;
    return s(r, 0)
}
  , P1 = Jt("AsyncFunction")
  , O1 = r => r && (Li(r) || _t(r)) && _t(r.then) && _t(r.catch)
  , cg = ( (r, n) => r ? setImmediate : n ? ( (s, o) => (br.addEventListener("message", ({source: a, data: c}) => {
    a === br && c === s && o.length && o.shift()()
}
, !1),
a => {
    o.push(a),
    br.postMessage(s, "*")
}
))(`axios@${Math.random()}`, []) : s => setTimeout(s))(typeof setImmediate == "function", _t(br.postMessage))
  , A1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(br) : typeof process < "u" && process.nextTick || cg
  , j1 = r => r != null && _t(r[Sl])
  , j = {
    isArray: bs,
    isArrayBuffer: ig,
    isBuffer: ji,
    isFormData: i1,
    isArrayBufferView: Yx,
    isString: Xx,
    isNumber: og,
    isBoolean: Jx,
    isObject: Li,
    isPlainObject: rl,
    isEmptyObject: Zx,
    isReadableStream: l1,
    isRequest: a1,
    isResponse: u1,
    isHeaders: c1,
    isUndefined: ks,
    isDate: e1,
    isFile: t1,
    isBlob: n1,
    isRegExp: b1,
    isFunction: _t,
    isStream: s1,
    isURLSearchParams: o1,
    isTypedArray: v1,
    isFileList: r1,
    forEach: Ii,
    merge: sc,
    extend: f1,
    trim: d1,
    stripBOM: h1,
    inherits: p1,
    toFlatObject: m1,
    kindOf: kl,
    kindOfTest: Jt,
    endsWith: g1,
    toArray: y1,
    forEachEntry: w1,
    matchAll: x1,
    isHTMLForm: S1,
    hasOwnProperty: gp,
    hasOwnProp: gp,
    reduceDescriptors: ug,
    freezeMethods: _1,
    toObjectSet: E1,
    toCamelCase: k1,
    noop: C1,
    toFiniteNumber: R1,
    findKey: lg,
    global: br,
    isContextDefined: ag,
    isSpecCompliantForm: T1,
    toJSONObject: N1,
    isAsyncFn: P1,
    isThenable: O1,
    setImmediate: cg,
    asap: A1,
    isIterable: j1
};
let de = class dg extends Error {
    static from(n, s, o, a, c, f) {
        const h = new dg(n.message,s || n.code,o,a,c);
        return h.cause = n,
        h.name = n.name,
        f && Object.assign(h, f),
        h
    }
    constructor(n, s, o, a, c) {
        super(n),
        this.name = "AxiosError",
        this.isAxiosError = !0,
        s && (this.code = s),
        o && (this.config = o),
        a && (this.request = a),
        c && (this.response = c,
        this.status = c.status)
    }
    toJSON() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: j.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
}
;
de.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
de.ERR_BAD_OPTION = "ERR_BAD_OPTION";
de.ECONNABORTED = "ECONNABORTED";
de.ETIMEDOUT = "ETIMEDOUT";
de.ERR_NETWORK = "ERR_NETWORK";
de.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
de.ERR_DEPRECATED = "ERR_DEPRECATED";
de.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
de.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
de.ERR_CANCELED = "ERR_CANCELED";
de.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
de.ERR_INVALID_URL = "ERR_INVALID_URL";
const L1 = null;
function ic(r) {
    return j.isPlainObject(r) || j.isArray(r)
}
function fg(r) {
    return j.endsWith(r, "[]") ? r.slice(0, -2) : r
}
function yp(r, n, s) {
    return r ? r.concat(n).map(function(a, c) {
        return a = fg(a),
        !s && c ? "[" + a + "]" : a
    }).join(s ? "." : "") : n
}
function I1(r) {
    return j.isArray(r) && !r.some(ic)
}
const D1 = j.toFlatObject(j, {}, null, function(n) {
    return /^is[A-Z]/.test(n)
});
function _l(r, n, s) {
    if (!j.isObject(r))
        throw new TypeError("target must be an object");
    n = n || new FormData,
    s = j.toFlatObject(s, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(_, S) {
        return !j.isUndefined(S[_])
    });
    const o = s.metaTokens
      , a = s.visitor || y
      , c = s.dots
      , f = s.indexes
      , m = (s.Blob || typeof Blob < "u" && Blob) && j.isSpecCompliantForm(n);
    if (!j.isFunction(a))
        throw new TypeError("visitor must be a function");
    function g(E) {
        if (E === null)
            return "";
        if (j.isDate(E))
            return E.toISOString();
        if (j.isBoolean(E))
            return E.toString();
        if (!m && j.isBlob(E))
            throw new de("Blob is not supported. Use a Buffer instead.");
        return j.isArrayBuffer(E) || j.isTypedArray(E) ? m && typeof Blob == "function" ? new Blob([E]) : Buffer.from(E) : E
    }
    function y(E, _, S) {
        let D = E;
        if (E && !S && typeof E == "object") {
            if (j.endsWith(_, "{}"))
                _ = o ? _ : _.slice(0, -2),
                E = JSON.stringify(E);
            else if (j.isArray(E) && I1(E) || (j.isFileList(E) || j.endsWith(_, "[]")) && (D = j.toArray(E)))
                return _ = fg(_),
                D.forEach(function(B, M) {
                    !(j.isUndefined(B) || B === null) && n.append(f === !0 ? yp([_], M, c) : f === null ? _ : _ + "[]", g(B))
                }),
                !1
        }
        return ic(E) ? !0 : (n.append(yp(S, _, c), g(E)),
        !1)
    }
    const x = []
      , N = Object.assign(D1, {
        defaultVisitor: y,
        convertValue: g,
        isVisitable: ic
    });
    function A(E, _) {
        if (!j.isUndefined(E)) {
            if (x.indexOf(E) !== -1)
                throw Error("Circular reference detected in " + _.join("."));
            x.push(E),
            j.forEach(E, function(D, Q) {
                (!(j.isUndefined(D) || D === null) && a.call(n, D, j.isString(Q) ? Q.trim() : Q, _, N)) === !0 && A(D, _ ? _.concat(Q) : [Q])
            }),
            x.pop()
        }
    }
    if (!j.isObject(r))
        throw new TypeError("data must be an object");
    return A(r),
    n
}
function vp(r) {
    const n = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g, function(o) {
        return n[o]
    })
}
function Cc(r, n) {
    this._pairs = [],
    r && _l(r, this, n)
}
const hg = Cc.prototype;
hg.append = function(n, s) {
    this._pairs.push([n, s])
}
;
hg.toString = function(n) {
    const s = n ? function(o) {
        return n.call(this, o, vp)
    }
    : vp;
    return this._pairs.map(function(a) {
        return s(a[0]) + "=" + s(a[1])
    }, "").join("&")
}
;
function M1(r) {
    return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}
function pg(r, n, s) {
    if (!n)
        return r;
    const o = s && s.encode || M1
      , a = j.isFunction(s) ? {
        serialize: s
    } : s
      , c = a && a.serialize;
    let f;
    if (c ? f = c(n, a) : f = j.isURLSearchParams(n) ? n.toString() : new Cc(n,a).toString(o),
    f) {
        const h = r.indexOf("#");
        h !== -1 && (r = r.slice(0, h)),
        r += (r.indexOf("?") === -1 ? "?" : "&") + f
    }
    return r
}
class wp {
    constructor() {
        this.handlers = []
    }
    use(n, s, o) {
        return this.handlers.push({
            fulfilled: n,
            rejected: s,
            synchronous: o ? o.synchronous : !1,
            runWhen: o ? o.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(n) {
        this.handlers[n] && (this.handlers[n] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(n) {
        j.forEach(this.handlers, function(o) {
            o !== null && n(o)
        })
    }
}
const Rc = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0
}
  , F1 = typeof URLSearchParams < "u" ? URLSearchParams : Cc
  , U1 = typeof FormData < "u" ? FormData : null
  , z1 = typeof Blob < "u" ? Blob : null
  , B1 = {
    isBrowser: !0,
    classes: {
        URLSearchParams: F1,
        FormData: U1,
        Blob: z1
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Tc = typeof window < "u" && typeof document < "u"
  , oc = typeof navigator == "object" && navigator || void 0
  , $1 = Tc && (!oc || ["ReactNative", "NativeScript", "NS"].indexOf(oc.product) < 0)
  , V1 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , q1 = Tc && window.location.href || "http://localhost"
  , H1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Tc,
    hasStandardBrowserEnv: $1,
    hasStandardBrowserWebWorkerEnv: V1,
    navigator: oc,
    origin: q1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ft = {
    ...H1,
    ...B1
};
function Q1(r, n) {
    return _l(r, new ft.classes.URLSearchParams, {
        visitor: function(s, o, a, c) {
            return ft.isNode && j.isBuffer(s) ? (this.append(o, s.toString("base64")),
            !1) : c.defaultVisitor.apply(this, arguments)
        },
        ...n
    })
}
function W1(r) {
    return j.matchAll(/\w+|\[(\w*)]/g, r).map(n => n[0] === "[]" ? "" : n[1] || n[0])
}
function K1(r) {
    const n = {}
      , s = Object.keys(r);
    let o;
    const a = s.length;
    let c;
    for (o = 0; o < a; o++)
        c = s[o],
        n[c] = r[c];
    return n
}
function mg(r) {
    function n(s, o, a, c) {
        let f = s[c++];
        if (f === "__proto__")
            return !0;
        const h = Number.isFinite(+f)
          , m = c >= s.length;
        return f = !f && j.isArray(a) ? a.length : f,
        m ? (j.hasOwnProp(a, f) ? a[f] = [a[f], o] : a[f] = o,
        !h) : ((!a[f] || !j.isObject(a[f])) && (a[f] = []),
        n(s, o, a[f], c) && j.isArray(a[f]) && (a[f] = K1(a[f])),
        !h)
    }
    if (j.isFormData(r) && j.isFunction(r.entries)) {
        const s = {};
        return j.forEachEntry(r, (o, a) => {
            n(W1(o), a, s, 0)
        }
        ),
        s
    }
    return null
}
function G1(r, n, s) {
    if (j.isString(r))
        try {
            return (n || JSON.parse)(r),
            j.trim(r)
        } catch (o) {
            if (o.name !== "SyntaxError")
                throw o
        }
    return (s || JSON.stringify)(r)
}
const Di = {
    transitional: Rc,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(n, s) {
        const o = s.getContentType() || ""
          , a = o.indexOf("application/json") > -1
          , c = j.isObject(n);
        if (c && j.isHTMLForm(n) && (n = new FormData(n)),
        j.isFormData(n))
            return a ? JSON.stringify(mg(n)) : n;
        if (j.isArrayBuffer(n) || j.isBuffer(n) || j.isStream(n) || j.isFile(n) || j.isBlob(n) || j.isReadableStream(n))
            return n;
        if (j.isArrayBufferView(n))
            return n.buffer;
        if (j.isURLSearchParams(n))
            return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            n.toString();
        let h;
        if (c) {
            if (o.indexOf("application/x-www-form-urlencoded") > -1)
                return Q1(n, this.formSerializer).toString();
            if ((h = j.isFileList(n)) || o.indexOf("multipart/form-data") > -1) {
                const m = this.env && this.env.FormData;
                return _l(h ? {
                    "files[]": n
                } : n, m && new m, this.formSerializer)
            }
        }
        return c || a ? (s.setContentType("application/json", !1),
        G1(n)) : n
    }
    ],
    transformResponse: [function(n) {
        const s = this.transitional || Di.transitional
          , o = s && s.forcedJSONParsing
          , a = this.responseType === "json";
        if (j.isResponse(n) || j.isReadableStream(n))
            return n;
        if (n && j.isString(n) && (o && !this.responseType || a)) {
            const f = !(s && s.silentJSONParsing) && a;
            try {
                return JSON.parse(n, this.parseReviver)
            } catch (h) {
                if (f)
                    throw h.name === "SyntaxError" ? de.from(h, de.ERR_BAD_RESPONSE, this, null, this.response) : h
            }
        }
        return n
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: ft.classes.FormData,
        Blob: ft.classes.Blob
    },
    validateStatus: function(n) {
        return n >= 200 && n < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
j.forEach(["delete", "get", "head", "post", "put", "patch"], r => {
    Di.headers[r] = {}
}
);
const Y1 = j.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , X1 = r => {
    const n = {};
    let s, o, a;
    return r && r.split(`
`).forEach(function(f) {
        a = f.indexOf(":"),
        s = f.substring(0, a).trim().toLowerCase(),
        o = f.substring(a + 1).trim(),
        !(!s || n[s] && Y1[s]) && (s === "set-cookie" ? n[s] ? n[s].push(o) : n[s] = [o] : n[s] = n[s] ? n[s] + ", " + o : o)
    }),
    n
}
  , xp = Symbol("internals");
function fi(r) {
    return r && String(r).trim().toLowerCase()
}
function sl(r) {
    return r === !1 || r == null ? r : j.isArray(r) ? r.map(sl) : String(r)
}
function J1(r) {
    const n = Object.create(null)
      , s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let o;
    for (; o = s.exec(r); )
        n[o[1]] = o[2];
    return n
}
const Z1 = r => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function Nu(r, n, s, o, a) {
    if (j.isFunction(o))
        return o.call(this, n, s);
    if (a && (n = s),
    !!j.isString(n)) {
        if (j.isString(o))
            return n.indexOf(o) !== -1;
        if (j.isRegExp(o))
            return o.test(n)
    }
}
function eS(r) {
    return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, s, o) => s.toUpperCase() + o)
}
function tS(r, n) {
    const s = j.toCamelCase(" " + n);
    ["get", "set", "has"].forEach(o => {
        Object.defineProperty(r, o + s, {
            value: function(a, c, f) {
                return this[o].call(this, n, a, c, f)
            },
            configurable: !0
        })
    }
    )
}
let Et = class {
    constructor(n) {
        n && this.set(n)
    }
    set(n, s, o) {
        const a = this;
        function c(h, m, g) {
            const y = fi(m);
            if (!y)
                throw new Error("header name must be a non-empty string");
            const x = j.findKey(a, y);
            (!x || a[x] === void 0 || g === !0 || g === void 0 && a[x] !== !1) && (a[x || m] = sl(h))
        }
        const f = (h, m) => j.forEach(h, (g, y) => c(g, y, m));
        if (j.isPlainObject(n) || n instanceof this.constructor)
            f(n, s);
        else if (j.isString(n) && (n = n.trim()) && !Z1(n))
            f(X1(n), s);
        else if (j.isObject(n) && j.isIterable(n)) {
            let h = {}, m, g;
            for (const y of n) {
                if (!j.isArray(y))
                    throw TypeError("Object iterator must return a key-value pair");
                h[g = y[0]] = (m = h[g]) ? j.isArray(m) ? [...m, y[1]] : [m, y[1]] : y[1]
            }
            f(h, s)
        } else
            n != null && c(s, n, o);
        return this
    }
    get(n, s) {
        if (n = fi(n),
        n) {
            const o = j.findKey(this, n);
            if (o) {
                const a = this[o];
                if (!s)
                    return a;
                if (s === !0)
                    return J1(a);
                if (j.isFunction(s))
                    return s.call(this, a, o);
                if (j.isRegExp(s))
                    return s.exec(a);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(n, s) {
        if (n = fi(n),
        n) {
            const o = j.findKey(this, n);
            return !!(o && this[o] !== void 0 && (!s || Nu(this, this[o], o, s)))
        }
        return !1
    }
    delete(n, s) {
        const o = this;
        let a = !1;
        function c(f) {
            if (f = fi(f),
            f) {
                const h = j.findKey(o, f);
                h && (!s || Nu(o, o[h], h, s)) && (delete o[h],
                a = !0)
            }
        }
        return j.isArray(n) ? n.forEach(c) : c(n),
        a
    }
    clear(n) {
        const s = Object.keys(this);
        let o = s.length
          , a = !1;
        for (; o--; ) {
            const c = s[o];
            (!n || Nu(this, this[c], c, n, !0)) && (delete this[c],
            a = !0)
        }
        return a
    }
    normalize(n) {
        const s = this
          , o = {};
        return j.forEach(this, (a, c) => {
            const f = j.findKey(o, c);
            if (f) {
                s[f] = sl(a),
                delete s[c];
                return
            }
            const h = n ? eS(c) : String(c).trim();
            h !== c && delete s[c],
            s[h] = sl(a),
            o[h] = !0
        }
        ),
        this
    }
    concat(...n) {
        return this.constructor.concat(this, ...n)
    }
    toJSON(n) {
        const s = Object.create(null);
        return j.forEach(this, (o, a) => {
            o != null && o !== !1 && (s[a] = n && j.isArray(o) ? o.join(", ") : o)
        }
        ),
        s
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([n,s]) => n + ": " + s).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(n) {
        return n instanceof this ? n : new this(n)
    }
    static concat(n, ...s) {
        const o = new this(n);
        return s.forEach(a => o.set(a)),
        o
    }
    static accessor(n) {
        const o = (this[xp] = this[xp] = {
            accessors: {}
        }).accessors
          , a = this.prototype;
        function c(f) {
            const h = fi(f);
            o[h] || (tS(a, f),
            o[h] = !0)
        }
        return j.isArray(n) ? n.forEach(c) : c(n),
        this
    }
}
;
Et.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
j.reduceDescriptors(Et.prototype, ({value: r}, n) => {
    let s = n[0].toUpperCase() + n.slice(1);
    return {
        get: () => r,
        set(o) {
            this[s] = o
        }
    }
}
);
j.freezeMethods(Et);
function Pu(r, n) {
    const s = this || Di
      , o = n || s
      , a = Et.from(o.headers);
    let c = o.data;
    return j.forEach(r, function(h) {
        c = h.call(s, c, a.normalize(), n ? n.status : void 0)
    }),
    a.normalize(),
    c
}
function gg(r) {
    return !!(r && r.__CANCEL__)
}
let Mi = class extends de {
    constructor(n, s, o) {
        super(n ?? "canceled", de.ERR_CANCELED, s, o),
        this.name = "CanceledError",
        this.__CANCEL__ = !0
    }
}
;
function yg(r, n, s) {
    const o = s.config.validateStatus;
    !s.status || !o || o(s.status) ? r(s) : n(new de("Request failed with status code " + s.status,[de.ERR_BAD_REQUEST, de.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],s.config,s.request,s))
}
function nS(r) {
    const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return n && n[1] || ""
}
function rS(r, n) {
    r = r || 10;
    const s = new Array(r)
      , o = new Array(r);
    let a = 0, c = 0, f;
    return n = n !== void 0 ? n : 1e3,
    function(m) {
        const g = Date.now()
          , y = o[c];
        f || (f = g),
        s[a] = m,
        o[a] = g;
        let x = c
          , N = 0;
        for (; x !== a; )
            N += s[x++],
            x = x % r;
        if (a = (a + 1) % r,
        a === c && (c = (c + 1) % r),
        g - f < n)
            return;
        const A = y && g - y;
        return A ? Math.round(N * 1e3 / A) : void 0
    }
}
function sS(r, n) {
    let s = 0, o = 1e3 / n, a, c;
    const f = (g, y=Date.now()) => {
        s = y,
        a = null,
        c && (clearTimeout(c),
        c = null),
        r(...g)
    }
    ;
    return [ (...g) => {
        const y = Date.now()
          , x = y - s;
        x >= o ? f(g, y) : (a = g,
        c || (c = setTimeout( () => {
            c = null,
            f(a)
        }
        , o - x)))
    }
    , () => a && f(a)]
}
const ml = (r, n, s=3) => {
    let o = 0;
    const a = rS(50, 250);
    return sS(c => {
        const f = c.loaded
          , h = c.lengthComputable ? c.total : void 0
          , m = f - o
          , g = a(m)
          , y = f <= h;
        o = f;
        const x = {
            loaded: f,
            total: h,
            progress: h ? f / h : void 0,
            bytes: m,
            rate: g || void 0,
            estimated: g && h && y ? (h - f) / g : void 0,
            event: c,
            lengthComputable: h != null,
            [n ? "download" : "upload"]: !0
        };
        r(x)
    }
    , s)
}
  , Sp = (r, n) => {
    const s = r != null;
    return [o => n[0]({
        lengthComputable: s,
        total: r,
        loaded: o
    }), n[1]]
}
  , kp = r => (...n) => j.asap( () => r(...n))
  , iS = ft.hasStandardBrowserEnv ? ( (r, n) => s => (s = new URL(s,ft.origin),
r.protocol === s.protocol && r.host === s.host && (n || r.port === s.port)))(new URL(ft.origin), ft.navigator && /(msie|trident)/i.test(ft.navigator.userAgent)) : () => !0
  , oS = ft.hasStandardBrowserEnv ? {
    write(r, n, s, o, a, c, f) {
        if (typeof document > "u")
            return;
        const h = [`${r}=${encodeURIComponent(n)}`];
        j.isNumber(s) && h.push(`expires=${new Date(s).toUTCString()}`),
        j.isString(o) && h.push(`path=${o}`),
        j.isString(a) && h.push(`domain=${a}`),
        c === !0 && h.push("secure"),
        j.isString(f) && h.push(`SameSite=${f}`),
        document.cookie = h.join("; ")
    },
    read(r) {
        if (typeof document > "u")
            return null;
        const n = document.cookie.match(new RegExp("(?:^|; )" + r + "=([^;]*)"));
        return n ? decodeURIComponent(n[1]) : null
    },
    remove(r) {
        this.write(r, "", Date.now() - 864e5, "/")
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function lS(r) {
    return typeof r != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)
}
function aS(r, n) {
    return n ? r.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : r
}
function vg(r, n, s) {
    let o = !lS(n);
    return r && (o || s == !1) ? aS(r, n) : n
}
const bp = r => r instanceof Et ? {
    ...r
} : r;
function Ir(r, n) {
    n = n || {};
    const s = {};
    function o(g, y, x, N) {
        return j.isPlainObject(g) && j.isPlainObject(y) ? j.merge.call({
            caseless: N
        }, g, y) : j.isPlainObject(y) ? j.merge({}, y) : j.isArray(y) ? y.slice() : y
    }
    function a(g, y, x, N) {
        if (j.isUndefined(y)) {
            if (!j.isUndefined(g))
                return o(void 0, g, x, N)
        } else
            return o(g, y, x, N)
    }
    function c(g, y) {
        if (!j.isUndefined(y))
            return o(void 0, y)
    }
    function f(g, y) {
        if (j.isUndefined(y)) {
            if (!j.isUndefined(g))
                return o(void 0, g)
        } else
            return o(void 0, y)
    }
    function h(g, y, x) {
        if (x in n)
            return o(g, y);
        if (x in r)
            return o(void 0, g)
    }
    const m = {
        url: c,
        method: c,
        data: c,
        baseURL: f,
        transformRequest: f,
        transformResponse: f,
        paramsSerializer: f,
        timeout: f,
        timeoutMessage: f,
        withCredentials: f,
        withXSRFToken: f,
        adapter: f,
        responseType: f,
        xsrfCookieName: f,
        xsrfHeaderName: f,
        onUploadProgress: f,
        onDownloadProgress: f,
        decompress: f,
        maxContentLength: f,
        maxBodyLength: f,
        beforeRedirect: f,
        transport: f,
        httpAgent: f,
        httpsAgent: f,
        cancelToken: f,
        socketPath: f,
        responseEncoding: f,
        validateStatus: h,
        headers: (g, y, x) => a(bp(g), bp(y), x, !0)
    };
    return j.forEach(Object.keys({
        ...r,
        ...n
    }), function(y) {
        if (y === "__proto__" || y === "constructor" || y === "prototype")
            return;
        const x = j.hasOwnProp(m, y) ? m[y] : a
          , N = x(r[y], n[y], y);
        j.isUndefined(N) && x !== h || (s[y] = N)
    }),
    s
}
const wg = r => {
    const n = Ir({}, r);
    let {data: s, withXSRFToken: o, xsrfHeaderName: a, xsrfCookieName: c, headers: f, auth: h} = n;
    if (n.headers = f = Et.from(f),
    n.url = pg(vg(n.baseURL, n.url, n.allowAbsoluteUrls), r.params, r.paramsSerializer),
    h && f.set("Authorization", "Basic " + btoa((h.username || "") + ":" + (h.password ? unescape(encodeURIComponent(h.password)) : ""))),
    j.isFormData(s)) {
        if (ft.hasStandardBrowserEnv || ft.hasStandardBrowserWebWorkerEnv)
            f.setContentType(void 0);
        else if (j.isFunction(s.getHeaders)) {
            const m = s.getHeaders()
              , g = ["content-type", "content-length"];
            Object.entries(m).forEach( ([y,x]) => {
                g.includes(y.toLowerCase()) && f.set(y, x)
            }
            )
        }
    }
    if (ft.hasStandardBrowserEnv && (o && j.isFunction(o) && (o = o(n)),
    o || o !== !1 && iS(n.url))) {
        const m = a && c && oS.read(c);
        m && f.set(a, m)
    }
    return n
}
  , uS = typeof XMLHttpRequest < "u"
  , cS = uS && function(r) {
    return new Promise(function(s, o) {
        const a = wg(r);
        let c = a.data;
        const f = Et.from(a.headers).normalize();
        let {responseType: h, onUploadProgress: m, onDownloadProgress: g} = a, y, x, N, A, E;
        function _() {
            A && A(),
            E && E(),
            a.cancelToken && a.cancelToken.unsubscribe(y),
            a.signal && a.signal.removeEventListener("abort", y)
        }
        let S = new XMLHttpRequest;
        S.open(a.method.toUpperCase(), a.url, !0),
        S.timeout = a.timeout;
        function D() {
            if (!S)
                return;
            const B = Et.from("getAllResponseHeaders"in S && S.getAllResponseHeaders())
              , W = {
                data: !h || h === "text" || h === "json" ? S.responseText : S.response,
                status: S.status,
                statusText: S.statusText,
                headers: B,
                config: r,
                request: S
            };
            yg(function(se) {
                s(se),
                _()
            }, function(se) {
                o(se),
                _()
            }, W),
            S = null
        }
        "onloadend"in S ? S.onloadend = D : S.onreadystatechange = function() {
            !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(D)
        }
        ,
        S.onabort = function() {
            S && (o(new de("Request aborted",de.ECONNABORTED,r,S)),
            S = null)
        }
        ,
        S.onerror = function(M) {
            const W = M && M.message ? M.message : "Network Error"
              , X = new de(W,de.ERR_NETWORK,r,S);
            X.event = M || null,
            o(X),
            S = null
        }
        ,
        S.ontimeout = function() {
            let M = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
            const W = a.transitional || Rc;
            a.timeoutErrorMessage && (M = a.timeoutErrorMessage),
            o(new de(M,W.clarifyTimeoutError ? de.ETIMEDOUT : de.ECONNABORTED,r,S)),
            S = null
        }
        ,
        c === void 0 && f.setContentType(null),
        "setRequestHeader"in S && j.forEach(f.toJSON(), function(M, W) {
            S.setRequestHeader(W, M)
        }),
        j.isUndefined(a.withCredentials) || (S.withCredentials = !!a.withCredentials),
        h && h !== "json" && (S.responseType = a.responseType),
        g && ([N,E] = ml(g, !0),
        S.addEventListener("progress", N)),
        m && S.upload && ([x,A] = ml(m),
        S.upload.addEventListener("progress", x),
        S.upload.addEventListener("loadend", A)),
        (a.cancelToken || a.signal) && (y = B => {
            S && (o(!B || B.type ? new Mi(null,r,S) : B),
            S.abort(),
            S = null)
        }
        ,
        a.cancelToken && a.cancelToken.subscribe(y),
        a.signal && (a.signal.aborted ? y() : a.signal.addEventListener("abort", y)));
        const Q = nS(a.url);
        if (Q && ft.protocols.indexOf(Q) === -1) {
            o(new de("Unsupported protocol " + Q + ":",de.ERR_BAD_REQUEST,r));
            return
        }
        S.send(c || null)
    }
    )
}
  , dS = (r, n) => {
    const {length: s} = r = r ? r.filter(Boolean) : [];
    if (n || s) {
        let o = new AbortController, a;
        const c = function(g) {
            if (!a) {
                a = !0,
                h();
                const y = g instanceof Error ? g : this.reason;
                o.abort(y instanceof de ? y : new Mi(y instanceof Error ? y.message : y))
            }
        };
        let f = n && setTimeout( () => {
            f = null,
            c(new de(`timeout of ${n}ms exceeded`,de.ETIMEDOUT))
        }
        , n);
        const h = () => {
            r && (f && clearTimeout(f),
            f = null,
            r.forEach(g => {
                g.unsubscribe ? g.unsubscribe(c) : g.removeEventListener("abort", c)
            }
            ),
            r = null)
        }
        ;
        r.forEach(g => g.addEventListener("abort", c));
        const {signal: m} = o;
        return m.unsubscribe = () => j.asap(h),
        m
    }
}
  , fS = function*(r, n) {
    let s = r.byteLength;
    if (s < n) {
        yield r;
        return
    }
    let o = 0, a;
    for (; o < s; )
        a = o + n,
        yield r.slice(o, a),
        o = a
}
  , hS = async function*(r, n) {
    for await(const s of pS(r))
        yield*fS(s, n)
}
  , pS = async function*(r) {
    if (r[Symbol.asyncIterator]) {
        yield*r;
        return
    }
    const n = r.getReader();
    try {
        for (; ; ) {
            const {done: s, value: o} = await n.read();
            if (s)
                break;
            yield o
        }
    } finally {
        await n.cancel()
    }
}
  , _p = (r, n, s, o) => {
    const a = hS(r, n);
    let c = 0, f, h = m => {
        f || (f = !0,
        o && o(m))
    }
    ;
    return new ReadableStream({
        async pull(m) {
            try {
                const {done: g, value: y} = await a.next();
                if (g) {
                    h(),
                    m.close();
                    return
                }
                let x = y.byteLength;
                if (s) {
                    let N = c += x;
                    s(N)
                }
                m.enqueue(new Uint8Array(y))
            } catch (g) {
                throw h(g),
                g
            }
        },
        cancel(m) {
            return h(m),
            a.return()
        }
    },{
        highWaterMark: 2
    })
}
  , Ep = 64 * 1024
  , {isFunction: Jo} = j
  , mS = ( ({Request: r, Response: n}) => ({
    Request: r,
    Response: n
}))(j.global)
  , {ReadableStream: Cp, TextEncoder: Rp} = j.global
  , Tp = (r, ...n) => {
    try {
        return !!r(...n)
    } catch {
        return !1
    }
}
  , gS = r => {
    r = j.merge.call({
        skipUndefined: !0
    }, mS, r);
    const {fetch: n, Request: s, Response: o} = r
      , a = n ? Jo(n) : typeof fetch == "function"
      , c = Jo(s)
      , f = Jo(o);
    if (!a)
        return !1;
    const h = a && Jo(Cp)
      , m = a && (typeof Rp == "function" ? (E => _ => E.encode(_))(new Rp) : async E => new Uint8Array(await new s(E).arrayBuffer()))
      , g = c && h && Tp( () => {
        let E = !1;
        const _ = new s(ft.origin,{
            body: new Cp,
            method: "POST",
            get duplex() {
                return E = !0,
                "half"
            }
        }).headers.has("Content-Type");
        return E && !_
    }
    )
      , y = f && h && Tp( () => j.isReadableStream(new o("").body))
      , x = {
        stream: y && (E => E.body)
    };
    a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(E => {
        !x[E] && (x[E] = (_, S) => {
            let D = _ && _[E];
            if (D)
                return D.call(_);
            throw new de(`Response type '${E}' is not supported`,de.ERR_NOT_SUPPORT,S)
        }
        )
    }
    );
    const N = async E => {
        if (E == null)
            return 0;
        if (j.isBlob(E))
            return E.size;
        if (j.isSpecCompliantForm(E))
            return (await new s(ft.origin,{
                method: "POST",
                body: E
            }).arrayBuffer()).byteLength;
        if (j.isArrayBufferView(E) || j.isArrayBuffer(E))
            return E.byteLength;
        if (j.isURLSearchParams(E) && (E = E + ""),
        j.isString(E))
            return (await m(E)).byteLength
    }
      , A = async (E, _) => {
        const S = j.toFiniteNumber(E.getContentLength());
        return S ?? N(_)
    }
    ;
    return async E => {
        let {url: _, method: S, data: D, signal: Q, cancelToken: B, timeout: M, onDownloadProgress: W, onUploadProgress: X, responseType: se, headers: F, withCredentials: le="same-origin", fetchOptions: be} = wg(E)
          , ge = n || fetch;
        se = se ? (se + "").toLowerCase() : "text";
        let Ne = dS([Q, B && B.toAbortSignal()], M)
          , Ie = null;
        const Ae = Ne && Ne.unsubscribe && ( () => {
            Ne.unsubscribe()
        }
        );
        let De;
        try {
            if (X && g && S !== "get" && S !== "head" && (De = await A(F, D)) !== 0) {
                let R = new s(_,{
                    method: "POST",
                    body: D,
                    duplex: "half"
                }), I;
                if (j.isFormData(D) && (I = R.headers.get("content-type")) && F.setContentType(I),
                R.body) {
                    const [he,pe] = Sp(De, ml(kp(X)));
                    D = _p(R.body, Ep, he, pe)
                }
            }
            j.isString(le) || (le = le ? "include" : "omit");
            const ye = c && "credentials"in s.prototype
              , _e = {
                ...be,
                signal: Ne,
                method: S.toUpperCase(),
                headers: F.normalize().toJSON(),
                body: D,
                duplex: "half",
                credentials: ye ? le : void 0
            };
            Ie = c && new s(_,_e);
            let H = await (c ? ge(Ie, be) : ge(_, _e));
            const re = y && (se === "stream" || se === "response");
            if (y && (W || re && Ae)) {
                const R = {};
                ["status", "statusText", "headers"].forEach(ae => {
                    R[ae] = H[ae]
                }
                );
                const I = j.toFiniteNumber(H.headers.get("content-length"))
                  , [he,pe] = W && Sp(I, ml(kp(W), !0)) || [];
                H = new o(_p(H.body, Ep, he, () => {
                    pe && pe(),
                    Ae && Ae()
                }
                ),R)
            }
            se = se || "text";
            let L = await x[j.findKey(x, se) || "text"](H, E);
            return !re && Ae && Ae(),
            await new Promise( (R, I) => {
                yg(R, I, {
                    data: L,
                    headers: Et.from(H.headers),
                    status: H.status,
                    statusText: H.statusText,
                    config: E,
                    request: Ie
                })
            }
            )
        } catch (ye) {
            throw Ae && Ae(),
            ye && ye.name === "TypeError" && /Load failed|fetch/i.test(ye.message) ? Object.assign(new de("Network Error",de.ERR_NETWORK,E,Ie,ye && ye.response), {
                cause: ye.cause || ye
            }) : de.from(ye, ye && ye.code, E, Ie, ye && ye.response)
        }
    }
}
  , yS = new Map
  , xg = r => {
    let n = r && r.env || {};
    const {fetch: s, Request: o, Response: a} = n
      , c = [o, a, s];
    let f = c.length, h = f, m, g, y = yS;
    for (; h--; )
        m = c[h],
        g = y.get(m),
        g === void 0 && y.set(m, g = h ? new Map : gS(n)),
        y = g;
    return g
}
;
xg();
const Nc = {
    http: L1,
    xhr: cS,
    fetch: {
        get: xg
    }
};
j.forEach(Nc, (r, n) => {
    if (r) {
        try {
            Object.defineProperty(r, "name", {
                value: n
            })
        } catch {}
        Object.defineProperty(r, "adapterName", {
            value: n
        })
    }
}
);
const Np = r => `- ${r}`
  , vS = r => j.isFunction(r) || r === null || r === !1;
function wS(r, n) {
    r = j.isArray(r) ? r : [r];
    const {length: s} = r;
    let o, a;
    const c = {};
    for (let f = 0; f < s; f++) {
        o = r[f];
        let h;
        if (a = o,
        !vS(o) && (a = Nc[(h = String(o)).toLowerCase()],
        a === void 0))
            throw new de(`Unknown adapter '${h}'`);
        if (a && (j.isFunction(a) || (a = a.get(n))))
            break;
        c[h || "#" + f] = a
    }
    if (!a) {
        const f = Object.entries(c).map( ([m,g]) => `adapter ${m} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build"));
        let h = s ? f.length > 1 ? `since :
` + f.map(Np).join(`
`) : " " + Np(f[0]) : "as no adapter specified";
        throw new de("There is no suitable adapter to dispatch the request " + h,"ERR_NOT_SUPPORT")
    }
    return a
}
const Sg = {
    getAdapter: wS,
    adapters: Nc
};
function Ou(r) {
    if (r.cancelToken && r.cancelToken.throwIfRequested(),
    r.signal && r.signal.aborted)
        throw new Mi(null,r)
}
function Pp(r) {
    return Ou(r),
    r.headers = Et.from(r.headers),
    r.data = Pu.call(r, r.transformRequest),
    ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1),
    Sg.getAdapter(r.adapter || Di.adapter, r)(r).then(function(o) {
        return Ou(r),
        o.data = Pu.call(r, r.transformResponse, o),
        o.headers = Et.from(o.headers),
        o
    }, function(o) {
        return gg(o) || (Ou(r),
        o && o.response && (o.response.data = Pu.call(r, r.transformResponse, o.response),
        o.response.headers = Et.from(o.response.headers))),
        Promise.reject(o)
    })
}
const kg = "1.13.5"
  , El = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (r, n) => {
    El[r] = function(o) {
        return typeof o === r || "a" + (n < 1 ? "n " : " ") + r
    }
}
);
const Op = {};
El.transitional = function(n, s, o) {
    function a(c, f) {
        return "[Axios v" + kg + "] Transitional option '" + c + "'" + f + (o ? ". " + o : "")
    }
    return (c, f, h) => {
        if (n === !1)
            throw new de(a(f, " has been removed" + (s ? " in " + s : "")),de.ERR_DEPRECATED);
        return s && !Op[f] && (Op[f] = !0,
        console.warn(a(f, " has been deprecated since v" + s + " and will be removed in the near future"))),
        n ? n(c, f, h) : !0
    }
}
;
El.spelling = function(n) {
    return (s, o) => (console.warn(`${o} is likely a misspelling of ${n}`),
    !0)
}
;
function xS(r, n, s) {
    if (typeof r != "object")
        throw new de("options must be an object",de.ERR_BAD_OPTION_VALUE);
    const o = Object.keys(r);
    let a = o.length;
    for (; a-- > 0; ) {
        const c = o[a]
          , f = n[c];
        if (f) {
            const h = r[c]
              , m = h === void 0 || f(h, c, r);
            if (m !== !0)
                throw new de("option " + c + " must be " + m,de.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (s !== !0)
            throw new de("Unknown option " + c,de.ERR_BAD_OPTION)
    }
}
const il = {
    assertOptions: xS,
    validators: El
}
  , Mt = il.validators;
let jr = class {
    constructor(n) {
        this.defaults = n || {},
        this.interceptors = {
            request: new wp,
            response: new wp
        }
    }
    async request(n, s) {
        try {
            return await this._request(n, s)
        } catch (o) {
            if (o instanceof Error) {
                let a = {};
                Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error;
                const c = a.stack ? a.stack.replace(/^.+\n/, "") : "";
                try {
                    o.stack ? c && !String(o.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + c) : o.stack = c
                } catch {}
            }
            throw o
        }
    }
    _request(n, s) {
        typeof n == "string" ? (s = s || {},
        s.url = n) : s = n || {},
        s = Ir(this.defaults, s);
        const {transitional: o, paramsSerializer: a, headers: c} = s;
        o !== void 0 && il.assertOptions(o, {
            silentJSONParsing: Mt.transitional(Mt.boolean),
            forcedJSONParsing: Mt.transitional(Mt.boolean),
            clarifyTimeoutError: Mt.transitional(Mt.boolean),
            legacyInterceptorReqResOrdering: Mt.transitional(Mt.boolean)
        }, !1),
        a != null && (j.isFunction(a) ? s.paramsSerializer = {
            serialize: a
        } : il.assertOptions(a, {
            encode: Mt.function,
            serialize: Mt.function
        }, !0)),
        s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0),
        il.assertOptions(s, {
            baseUrl: Mt.spelling("baseURL"),
            withXsrfToken: Mt.spelling("withXSRFToken")
        }, !0),
        s.method = (s.method || this.defaults.method || "get").toLowerCase();
        let f = c && j.merge(c.common, c[s.method]);
        c && j.forEach(["delete", "get", "head", "post", "put", "patch", "common"], E => {
            delete c[E]
        }
        ),
        s.headers = Et.concat(f, c);
        const h = [];
        let m = !0;
        this.interceptors.request.forEach(function(_) {
            if (typeof _.runWhen == "function" && _.runWhen(s) === !1)
                return;
            m = m && _.synchronous;
            const S = s.transitional || Rc;
            S && S.legacyInterceptorReqResOrdering ? h.unshift(_.fulfilled, _.rejected) : h.push(_.fulfilled, _.rejected)
        });
        const g = [];
        this.interceptors.response.forEach(function(_) {
            g.push(_.fulfilled, _.rejected)
        });
        let y, x = 0, N;
        if (!m) {
            const E = [Pp.bind(this), void 0];
            for (E.unshift(...h),
            E.push(...g),
            N = E.length,
            y = Promise.resolve(s); x < N; )
                y = y.then(E[x++], E[x++]);
            return y
        }
        N = h.length;
        let A = s;
        for (; x < N; ) {
            const E = h[x++]
              , _ = h[x++];
            try {
                A = E(A)
            } catch (S) {
                _.call(this, S);
                break
            }
        }
        try {
            y = Pp.call(this, A)
        } catch (E) {
            return Promise.reject(E)
        }
        for (x = 0,
        N = g.length; x < N; )
            y = y.then(g[x++], g[x++]);
        return y
    }
    getUri(n) {
        n = Ir(this.defaults, n);
        const s = vg(n.baseURL, n.url, n.allowAbsoluteUrls);
        return pg(s, n.params, n.paramsSerializer)
    }
}
;
j.forEach(["delete", "get", "head", "options"], function(n) {
    jr.prototype[n] = function(s, o) {
        return this.request(Ir(o || {}, {
            method: n,
            url: s,
            data: (o || {}).data
        }))
    }
});
j.forEach(["post", "put", "patch"], function(n) {
    function s(o) {
        return function(c, f, h) {
            return this.request(Ir(h || {}, {
                method: n,
                headers: o ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: c,
                data: f
            }))
        }
    }
    jr.prototype[n] = s(),
    jr.prototype[n + "Form"] = s(!0)
});
let SS = class bg {
    constructor(n) {
        if (typeof n != "function")
            throw new TypeError("executor must be a function.");
        let s;
        this.promise = new Promise(function(c) {
            s = c
        }
        );
        const o = this;
        this.promise.then(a => {
            if (!o._listeners)
                return;
            let c = o._listeners.length;
            for (; c-- > 0; )
                o._listeners[c](a);
            o._listeners = null
        }
        ),
        this.promise.then = a => {
            let c;
            const f = new Promise(h => {
                o.subscribe(h),
                c = h
            }
            ).then(a);
            return f.cancel = function() {
                o.unsubscribe(c)
            }
            ,
            f
        }
        ,
        n(function(c, f, h) {
            o.reason || (o.reason = new Mi(c,f,h),
            s(o.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(n) {
        if (this.reason) {
            n(this.reason);
            return
        }
        this._listeners ? this._listeners.push(n) : this._listeners = [n]
    }
    unsubscribe(n) {
        if (!this._listeners)
            return;
        const s = this._listeners.indexOf(n);
        s !== -1 && this._listeners.splice(s, 1)
    }
    toAbortSignal() {
        const n = new AbortController
          , s = o => {
            n.abort(o)
        }
        ;
        return this.subscribe(s),
        n.signal.unsubscribe = () => this.unsubscribe(s),
        n.signal
    }
    static source() {
        let n;
        return {
            token: new bg(function(a) {
                n = a
            }
            ),
            cancel: n
        }
    }
}
;
function kS(r) {
    return function(s) {
        return r.apply(null, s)
    }
}
function bS(r) {
    return j.isObject(r) && r.isAxiosError === !0
}
const lc = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(lc).forEach( ([r,n]) => {
    lc[n] = r
}
);
function _g(r) {
    const n = new jr(r)
      , s = rg(jr.prototype.request, n);
    return j.extend(s, jr.prototype, n, {
        allOwnKeys: !0
    }),
    j.extend(s, n, null, {
        allOwnKeys: !0
    }),
    s.create = function(a) {
        return _g(Ir(r, a))
    }
    ,
    s
}
const Qe = _g(Di);
Qe.Axios = jr;
Qe.CanceledError = Mi;
Qe.CancelToken = SS;
Qe.isCancel = gg;
Qe.VERSION = kg;
Qe.toFormData = _l;
Qe.AxiosError = de;
Qe.Cancel = Qe.CanceledError;
Qe.all = function(n) {
    return Promise.all(n)
}
;
Qe.spread = kS;
Qe.isAxiosError = bS;
Qe.mergeConfig = Ir;
Qe.AxiosHeaders = Et;
Qe.formToJSON = r => mg(j.isHTMLForm(r) ? new FormData(r) : r);
Qe.getAdapter = Sg.getAdapter;
Qe.HttpStatusCode = lc;
Qe.default = Qe;
const {Axios: Xb, AxiosError: Jb, CanceledError: Zb, isCancel: e_, CancelToken: t_, VERSION: n_, all: r_, Cancel: s_, isAxiosError: i_, spread: o_, toFormData: l_, AxiosHeaders: a_, HttpStatusCode: u_, formToJSON: c_, getAdapter: d_, mergeConfig: f_} = Qe
  , _S = typeof window > "u"
  , Ap = !_S && window.self !== window.top
  , Au = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  , st = [];
for (let r = 0; r < 256; ++r)
    st.push((r + 256).toString(16).slice(1));
function ES(r, n=0) {
    return (st[r[n + 0]] + st[r[n + 1]] + st[r[n + 2]] + st[r[n + 3]] + "-" + st[r[n + 4]] + st[r[n + 5]] + "-" + st[r[n + 6]] + st[r[n + 7]] + "-" + st[r[n + 8]] + st[r[n + 9]] + "-" + st[r[n + 10]] + st[r[n + 11]] + st[r[n + 12]] + st[r[n + 13]] + st[r[n + 14]] + st[r[n + 15]]).toLowerCase()
}
let ju;
const CS = new Uint8Array(16);
function RS() {
    if (!ju) {
        if (typeof crypto > "u" || !crypto.getRandomValues)
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        ju = crypto.getRandomValues.bind(crypto)
    }
    return ju(CS)
}
const TS = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , jp = {
    randomUUID: TS
};
function NS(r, n, s) {
    var a;
    r = r || {};
    const o = r.random ?? ((a = r.rng) == null ? void 0 : a.call(r)) ?? RS();
    if (o.length < 16)
        throw new Error("Random bytes length must be >= 16");
    return o[6] = o[6] & 15 | 64,
    o[8] = o[8] & 63 | 128,
    ES(o)
}
function PS(r, n, s) {
    return jp.randomUUID && !r ? jp.randomUUID() : NS(r)
}
class OS extends Error {
    constructor(n, s, o, a, c) {
        super(n),
        this.name = "Base44Error",
        this.status = s,
        this.code = o,
        this.data = a,
        this.originalError = c
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}
function yi({baseURL: r, headers: n={}, token: s, interceptResponses: o=!0, onError: a}) {
    const c = Qe.create({
        baseURL: r,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...n
        }
    });
    return s && (c.defaults.headers.common.Authorization = `Bearer ${s}`),
    c.interceptors.request.use(f => {
        typeof window < "u" && f.headers.set("X-Origin-URL", window.location.href);
        const h = PS();
        if (f.requestId = h,
        Ap)
            try {
                window.parent.postMessage({
                    type: "api-request-start",
                    requestId: h,
                    data: {
                        url: r + f.url,
                        method: f.method,
                        body: f.data instanceof FormData ? "[FormData object]" : f.data
                    }
                }, "*")
            } catch {}
        return f
    }
    ),
    o && c.interceptors.response.use(f => {
        var h;
        const m = (h = f.config) === null || h === void 0 ? void 0 : h.requestId;
        try {
            Ap && m && window.parent.postMessage({
                type: "api-request-end",
                requestId: m,
                data: {
                    statusCode: f.status,
                    response: f.data
                }
            }, "*")
        } catch {}
        return f.data
    }
    , f => {
        var h, m, g, y, x, N, A, E;
        const _ = ((m = (h = f.response) === null || h === void 0 ? void 0 : h.data) === null || m === void 0 ? void 0 : m.message) || ((y = (g = f.response) === null || g === void 0 ? void 0 : g.data) === null || y === void 0 ? void 0 : y.detail) || f.message
          , S = new OS(_,(x = f.response) === null || x === void 0 ? void 0 : x.status,(A = (N = f.response) === null || N === void 0 ? void 0 : N.data) === null || A === void 0 ? void 0 : A.code,(E = f.response) === null || E === void 0 ? void 0 : E.data,f);
        return a == null || a(S),
        Promise.reject(S)
    }
    ),
    c
}
function Lp(r) {
    const {axios: n, appId: s, getSocket: o} = r;
    return new Proxy({},{
        get(a, c) {
            if (!(typeof c != "string" || c === "then" || c.startsWith("_")))
                return jS(n, s, c, o)
        }
    })
}
function AS(r) {
    var n;
    try {
        const s = JSON.parse(r);
        return {
            type: s.type,
            data: s.data,
            id: s.id || ((n = s.data) === null || n === void 0 ? void 0 : n.id),
            timestamp: s.timestamp || new Date().toISOString()
        }
    } catch (s) {
        return console.warn("[Base44 SDK] Failed to parse realtime message:", s),
        null
    }
}
function jS(r, n, s, o) {
    const a = `/apps/${n}/entities/${s}`;
    return {
        async list(c, f, h, m) {
            const g = {};
            return c && (g.sort = c),
            f && (g.limit = f),
            h && (g.skip = h),
            m && (g.fields = Array.isArray(m) ? m.join(",") : m),
            r.get(a, {
                params: g
            })
        },
        async filter(c, f, h, m, g) {
            const y = {
                q: JSON.stringify(c)
            };
            return f && (y.sort = f),
            h && (y.limit = h),
            m && (y.skip = m),
            g && (y.fields = Array.isArray(g) ? g.join(",") : g),
            r.get(a, {
                params: y
            })
        },
        async get(c) {
            return r.get(`${a}/${c}`)
        },
        async create(c) {
            return r.post(a, c)
        },
        async update(c, f) {
            return r.put(`${a}/${c}`, f)
        },
        async delete(c) {
            return r.delete(`${a}/${c}`)
        },
        async deleteMany(c) {
            return r.delete(a, {
                data: c
            })
        },
        async bulkCreate(c) {
            return r.post(`${a}/bulk`, c)
        },
        async updateMany(c, f) {
            return r.patch(`${a}/update-many`, {
                query: c,
                data: f
            })
        },
        async bulkUpdate(c) {
            return r.put(`${a}/bulk`, c)
        },
        async importEntities(c) {
            const f = new FormData;
            return f.append("file", c, c.name),
            r.post(`${a}/import`, f, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        },
        subscribe(c) {
            const f = `entities:${n}:${s}`;
            return o().subscribeToRoom(f, {
                update_model: g => {
                    var y;
                    const x = AS(g.data);
                    if (x) {
                        x.type !== "delete" && (!((y = x.data) === null || y === void 0) && y._oversize) && console.error(`[Base44 SDK] Realtime broadcast for ${s}#${x.id} was oversize and got slimmed for transport. Fields >10 KB are empty and the rest of the record may be a stub. Call \`entities.${s}.get("${x.id}")\` to fetch the full record.`);
                        try {
                            c(x)
                        } catch (N) {
                            console.error("[Base44 SDK] Subscription callback error:", N)
                        }
                    }
                }
            })
        }
    }
}
function LS(r, n) {
    return {
        async call(s, o, a) {
            if (!(s != null && s.trim()))
                throw new Error("Integration slug is required and cannot be empty");
            if (!(o != null && o.trim()))
                throw new Error("Operation ID is required and cannot be empty");
            const {pathParams: c, queryParams: f, ...h} = a ?? {}
              , m = {
                ...h,
                ...c && {
                    path_params: c
                },
                ...f && {
                    query_params: f
                }
            };
            return await r.post(`/apps/${n}/integrations/custom/${s}/${o}`, m)
        }
    }
}
function Ip(r, n) {
    const s = LS(r, n);
    return new Proxy({},{
        get(o, a) {
            if (!(typeof a != "string" || a === "then" || a.startsWith("_")))
                return a === "custom" ? s : new Proxy({},{
                    get(c, f) {
                        if (!(typeof f != "string" || f === "then" || f.startsWith("_")))
                            return async h => {
                                if (typeof h == "string")
                                    throw new Error(`Integration ${f} must receive an object with named parameters, received: ${h}`);
                                let m, g;
                                return h instanceof FormData || h && Object.values(h).some(y => y instanceof File) ? (m = new FormData,
                                Object.keys(h).forEach(y => {
                                    h[y]instanceof File ? m.append(y, h[y], h[y].name) : typeof h[y] == "object" && h[y] !== null ? m.append(y, JSON.stringify(h[y])) : m.append(y, h[y])
                                }
                                ),
                                g = "multipart/form-data") : (m = h,
                                g = "application/json"),
                                a === "Core" ? r.post(`/apps/${n}/integration-endpoints/Core/${f}`, m || h, {
                                    headers: {
                                        "Content-Type": g
                                    }
                                }) : r.post(`/apps/${n}/integration-endpoints/installable/${a}/integration-endpoints/${f}`, m || h, {
                                    headers: {
                                        "Content-Type": g
                                    }
                                })
                            }
                    }
                })
        }
    })
}
function IS() {
    return typeof window > "u" ? !1 : window !== window.parent
}
function DS(r, n, s) {
    const c = Math.round(window.screenX + (window.outerWidth - 500) / 2)
      , f = Math.round(window.screenY + (window.outerHeight - 600) / 2)
      , h = window.open(r, "base44_auth", `width=500,height=600,left=${c},top=${f},resizable=yes,scrollbars=yes`);
    if (!h)
        return;
    const m = () => {
        window.removeEventListener("message", g),
        clearInterval(y),
        h.closed || h.close()
    }
      , g = x => {
        var N;
        if (x.origin !== s || x.source !== h || !(!((N = x.data) === null || N === void 0) && N.access_token))
            return;
        m();
        const A = new URL(n)
          , {access_token: E, is_new_user: _} = x.data;
        A.searchParams.set("access_token", E),
        _ != null && A.searchParams.set("is_new_user", String(_)),
        window.location.href = A.toString()
    }
      , y = setInterval( () => {
        h.closed && m()
    }
    , 500);
    window.addEventListener("message", g)
}
function MS(r, n, s, o) {
    return {
        async me() {
            return r.get(`/apps/${s}/entities/User/me`)
        },
        async updateMe(a) {
            return r.put(`/apps/${s}/entities/User/me`, a)
        },
        redirectToLogin(a) {
            if (typeof window > "u")
                throw new Error("Login method can only be used in a browser environment");
            const c = a ? new URL(a,window.location.origin).toString() : window.location.href
              , f = `${o.appBaseUrl}/login?from_url=${encodeURIComponent(c)}`;
            window.location.href = f
        },
        loginWithProvider(a, c="/") {
            const f = new URL(c,window.location.origin).toString()
              , h = `app_id=${s}&from_url=${encodeURIComponent(f)}`;
            let m;
            a === "sso" ? m = `/apps/${s}/auth/sso/login` : m = `/apps/auth${a === "google" ? "" : `/${a}`}/login`;
            const g = `${o.appBaseUrl}/api${m}?${h}`;
            if (IS()) {
                const y = `${g}&popup_origin=${encodeURIComponent(window.location.origin)}`;
                return DS(y, f, window.location.origin)
            }
            window.location.href = g
        },
        logout(a) {
            if (delete r.defaults.headers.common.Authorization,
            typeof window < "u") {
                if (window.localStorage)
                    try {
                        window.localStorage.removeItem("base44_access_token"),
                        window.localStorage.removeItem("token")
                    } catch (h) {
                        console.error("Failed to remove token from localStorage:", h)
                    }
                const c = a || window.location.href
                  , f = `${o.appBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(c)}`;
                window.location.href = f
            }
        },
        setToken(a, c=!0) {
            if (a && (r.defaults.headers.common.Authorization = `Bearer ${a}`,
            n.defaults.headers.common.Authorization = `Bearer ${a}`,
            c && typeof window < "u" && window.localStorage))
                try {
                    window.localStorage.setItem("base44_access_token", a),
                    window.localStorage.setItem("token", a)
                } catch (f) {
                    console.error("Failed to save token to localStorage:", f)
                }
        },
        async loginViaEmailPassword(a, c, f) {
            var h;
            try {
                const m = await r.post(`/apps/${s}/auth/login`, {
                    email: a,
                    password: c,
                    ...f && {
                        turnstile_token: f
                    }
                })
                  , {access_token: g, user: y} = m;
                return g && this.setToken(g),
                {
                    access_token: g,
                    user: y
                }
            } catch (m) {
                throw ((h = m.response) === null || h === void 0 ? void 0 : h.status) === 401 && await this.logout(),
                m
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(),
                !0
            } catch {
                return !1
            }
        },
        inviteUser(a, c) {
            return r.post(`/apps/${s}/users/invite-user`, {
                user_email: a,
                role: c
            })
        },
        register(a) {
            return r.post(`/apps/${s}/auth/register`, a)
        },
        verifyOtp({email: a, otpCode: c}) {
            return r.post(`/apps/${s}/auth/verify-otp`, {
                email: a,
                otp_code: c
            })
        },
        resendOtp(a) {
            return r.post(`/apps/${s}/auth/resend-otp`, {
                email: a
            })
        },
        resetPasswordRequest(a) {
            return r.post(`/apps/${s}/auth/reset-password-request`, {
                email: a
            })
        },
        resetPassword({resetToken: a, newPassword: c}) {
            return r.post(`/apps/${s}/auth/reset-password`, {
                reset_token: a,
                new_password: c
            })
        },
        changePassword({userId: a, currentPassword: c, newPassword: f}) {
            return r.post(`/apps/${s}/auth/change-password`, {
                user_id: a,
                current_password: c,
                new_password: f
            })
        }
    }
}
function FS(r, n) {
    return {
        async getAccessToken(s) {
            const o = `/apps/${n}/auth/sso/accesstoken/${s}`;
            return r.get(o)
        }
    }
}
function US(r, n) {
    return {
        async getAccessToken(s) {
            if (!s || typeof s != "string")
                throw new Error("Integration type is required and must be a string");
            return (await r.get(`/apps/${n}/external-auth/tokens/${s}`)).access_token
        },
        async getConnection(s) {
            var o;
            if (!s || typeof s != "string")
                throw new Error("Integration type is required and must be a string");
            const c = await r.get(`/apps/${n}/external-auth/tokens/${s}`);
            return {
                accessToken: c.access_token,
                connectionConfig: (o = c.connection_config) !== null && o !== void 0 ? o : null
            }
        },
        async getCurrentAppUserAccessToken(s) {
            if (!s || typeof s != "string")
                throw new Error("Connector ID is required and must be a string");
            return (await r.get(`/apps/${n}/app-user-auth/connectors/${s}/token`)).access_token
        },
        async getCurrentAppUserConnection(s) {
            var o;
            if (!s || typeof s != "string")
                throw new Error("Connector ID is required and must be a string");
            const c = await r.get(`/apps/${n}/app-user-auth/connectors/${s}/token`);
            return {
                accessToken: c.access_token,
                connectionConfig: (o = c.connection_config) !== null && o !== void 0 ? o : null
            }
        }
    }
}
function zS(r, n) {
    return {
        async connectAppUser(s) {
            if (!s || typeof s != "string")
                throw new Error("Connector ID is required and must be a string");
            return (await r.post(`/apps/${n}/app-user-auth/connectors/${s}/initiate`)).redirect_url
        },
        async disconnectAppUser(s) {
            if (!s || typeof s != "string")
                throw new Error("Connector ID is required and must be a string");
            await r.delete(`/apps/${n}/app-user-auth/connectors/${s}`)
        }
    }
}
function Ei(r={}) {
    const {storageKey: n="base44_access_token", paramName: s="access_token", saveToStorage: o=!0, removeFromUrl: a=!0} = r;
    let c = null;
    if (typeof window < "u" && window.location)
        try {
            const f = new URLSearchParams(window.location.search);
            if (c = f.get(s),
            c) {
                if (o && BS(c, {
                    storageKey: n
                }),
                a) {
                    f.delete(s);
                    const h = `${window.location.pathname}${f.toString() ? `?${f.toString()}` : ""}${window.location.hash}`;
                    window.history.replaceState({}, document.title, h)
                }
                return c
            }
        } catch (f) {
            console.error("Error retrieving token from URL:", f)
        }
    if (typeof window < "u" && window.localStorage)
        try {
            return c = window.localStorage.getItem(n),
            c
        } catch (f) {
            console.error("Error retrieving token from local storage:", f)
        }
    return null
}
function BS(r, n) {
    const {storageKey: s="base44_access_token"} = n;
    if (typeof window > "u" || !window.localStorage || !r)
        return !1;
    try {
        return window.localStorage.setItem(s, r),
        window.localStorage.setItem("token", r),
        !0
    } catch (o) {
        return console.error("Error saving token to local storage:", o),
        !1
    }
}
function Dp(r, n, s) {
    const o = (c, f) => c ? `${String(c).replace(/\/$/, "")}${f}` : f
      , a = c => {
        const f = new Headers;
        if (s != null && s.getAuthHeaders) {
            const h = s.getAuthHeaders();
            Object.entries(h).forEach( ([m,g]) => {
                g != null && f.set(m, String(g))
            }
            )
        }
        return c && new Headers(c).forEach( (h, m) => {
            f.set(m, h)
        }
        ),
        f
    }
    ;
    return {
        async invoke(c, f) {
            if (typeof f == "string")
                throw new Error(`Function ${c} must receive an object with named parameters, received: ${f}`);
            let h, m;
            return f instanceof FormData || f && Object.values(f).some(g => g instanceof File) ? (h = new FormData,
            Object.keys(f).forEach(g => {
                f[g]instanceof File ? h.append(g, f[g], f[g].name) : typeof f[g] == "object" && f[g] !== null ? h.append(g, JSON.stringify(f[g])) : h.append(g, f[g])
            }
            ),
            m = "multipart/form-data") : (h = f,
            m = "application/json"),
            r.post(`/apps/${n}/functions/${c}`, h || f, {
                headers: {
                    "Content-Type": m
                }
            })
        },
        async fetch(c, f={}) {
            const m = `/functions${c.startsWith("/") ? c : `/${c}`}`
              , g = a(f.headers)
              , y = {
                ...f,
                headers: g
            };
            return await fetch(o(s == null ? void 0 : s.baseURL, m), y)
        }
    }
}
function Mp({axios: r, getSocket: n, appId: s, serverUrl: o, token: a}) {
    const c = `/apps/${s}/agents`
      , f = {}
      , h = () => r.get(`${c}/conversations`)
      , m = _ => r.get(`${c}/conversations/${_}`);
    return {
        getConversations: h,
        getConversation: m,
        listConversations: _ => r.get(`${c}/conversations`, {
            params: _
        }),
        createConversation: _ => r.post(`${c}/conversations`, _),
        addMessage: async (_, S) => r.post(`${c}/conversations/v2/${_.id}/messages`, S),
        subscribeToConversation: (_, S) => {
            const D = `/agent-conversations/${_}`
              , Q = n()
              , B = m(_).then(M => (f[_] = M,
            M));
            return Q.subscribeToRoom(D, {
                connect: () => {}
                ,
                update_model: async ({data: M}) => {
                    const W = JSON.parse(M);
                    if (W._message) {
                        await B;
                        const X = W._message
                          , se = f[_];
                        if (se) {
                            const F = se.messages || []
                              , le = F.findIndex(ge => ge.id === X.id)
                              , be = le !== -1 ? F.map( (ge, Ne) => Ne === le ? X : ge) : [...F, X];
                            f[_] = {
                                ...se,
                                messages: be
                            },
                            S == null || S(f[_])
                        }
                    }
                }
            })
        }
        ,
        getWhatsAppConnectURL: _ => {
            const S = `${o}/api/apps/${s}/agents/${encodeURIComponent(_)}/whatsapp`
              , D = a ?? Ei();
            return D ? `${S}?token=${D}` : S
        }
        ,
        getTelegramConnectURL: _ => {
            const S = `${o}/api/apps/${s}/agents/${encodeURIComponent(_)}/telegram`
              , D = a ?? Ei();
            return D ? `${S}?token=${D}` : S
        }
    }
}
function Fp(r, n) {
    const s = `/app-logs/${n}`;
    return {
        async logUserInApp(o) {
            await r.post(`${s}/log-user-in-app/${o}`)
        },
        async fetchLogs(o={}) {
            return await r.get(s, {
                params: o
            })
        },
        async getStats(o={}) {
            return await r.get(`${s}/stats`, {
                params: o
            })
        }
    }
}
function $S(r, n) {
    return {
        async inviteUser(s, o) {
            if (o !== "user" && o !== "admin")
                throw new Error(`Invalid role: "${o}". Role must be either "user" or "admin".`);
            return await r.post(`/apps/${n}/runtime/users/invite-user`, {
                user_email: s,
                role: o
            })
        }
    }
}
const un = Object.create(null);
un.open = "0";
un.close = "1";
un.ping = "2";
un.pong = "3";
un.message = "4";
un.upgrade = "5";
un.noop = "6";
const ol = Object.create(null);
Object.keys(un).forEach(r => {
    ol[un[r]] = r
}
);
const ac = {
    type: "error",
    data: "parser error"
}
  , Eg = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"
  , Cg = typeof ArrayBuffer == "function"
  , Rg = r => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r && r.buffer instanceof ArrayBuffer
  , Pc = ({type: r, data: n}, s, o) => Eg && n instanceof Blob ? s ? o(n) : Up(n, o) : Cg && (n instanceof ArrayBuffer || Rg(n)) ? s ? o(n) : Up(new Blob([n]), o) : o(un[r] + (n || ""))
  , Up = (r, n) => {
    const s = new FileReader;
    return s.onload = function() {
        const o = s.result.split(",")[1];
        n("b" + (o || ""))
    }
    ,
    s.readAsDataURL(r)
}
;
function zp(r) {
    return r instanceof Uint8Array ? r : r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer,r.byteOffset,r.byteLength)
}
let Lu;
function VS(r, n) {
    if (Eg && r.data instanceof Blob)
        return r.data.arrayBuffer().then(zp).then(n);
    if (Cg && (r.data instanceof ArrayBuffer || Rg(r.data)))
        return n(zp(r.data));
    Pc(r, !1, s => {
        Lu || (Lu = new TextEncoder),
        n(Lu.encode(s))
    }
    )
}
const Bp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , vi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let r = 0; r < Bp.length; r++)
    vi[Bp.charCodeAt(r)] = r;
const qS = r => {
    let n = r.length * .75, s = r.length, o, a = 0, c, f, h, m;
    r[r.length - 1] === "=" && (n--,
    r[r.length - 2] === "=" && n--);
    const g = new ArrayBuffer(n)
      , y = new Uint8Array(g);
    for (o = 0; o < s; o += 4)
        c = vi[r.charCodeAt(o)],
        f = vi[r.charCodeAt(o + 1)],
        h = vi[r.charCodeAt(o + 2)],
        m = vi[r.charCodeAt(o + 3)],
        y[a++] = c << 2 | f >> 4,
        y[a++] = (f & 15) << 4 | h >> 2,
        y[a++] = (h & 3) << 6 | m & 63;
    return g
}
  , HS = typeof ArrayBuffer == "function"
  , Oc = (r, n) => {
    if (typeof r != "string")
        return {
            type: "message",
            data: Tg(r, n)
        };
    const s = r.charAt(0);
    return s === "b" ? {
        type: "message",
        data: QS(r.substring(1), n)
    } : ol[s] ? r.length > 1 ? {
        type: ol[s],
        data: r.substring(1)
    } : {
        type: ol[s]
    } : ac
}
  , QS = (r, n) => {
    if (HS) {
        const s = qS(r);
        return Tg(s, n)
    } else
        return {
            base64: !0,
            data: r
        }
}
  , Tg = (r, n) => {
    switch (n) {
    case "blob":
        return r instanceof Blob ? r : new Blob([r]);
    case "arraybuffer":
    default:
        return r instanceof ArrayBuffer ? r : r.buffer
    }
}
  , Ng = ""
  , WS = (r, n) => {
    const s = r.length
      , o = new Array(s);
    let a = 0;
    r.forEach( (c, f) => {
        Pc(c, !1, h => {
            o[f] = h,
            ++a === s && n(o.join(Ng))
        }
        )
    }
    )
}
  , KS = (r, n) => {
    const s = r.split(Ng)
      , o = [];
    for (let a = 0; a < s.length; a++) {
        const c = Oc(s[a], n);
        if (o.push(c),
        c.type === "error")
            break
    }
    return o
}
;
function GS() {
    return new TransformStream({
        transform(r, n) {
            VS(r, s => {
                const o = s.length;
                let a;
                if (o < 126)
                    a = new Uint8Array(1),
                    new DataView(a.buffer).setUint8(0, o);
                else if (o < 65536) {
                    a = new Uint8Array(3);
                    const c = new DataView(a.buffer);
                    c.setUint8(0, 126),
                    c.setUint16(1, o)
                } else {
                    a = new Uint8Array(9);
                    const c = new DataView(a.buffer);
                    c.setUint8(0, 127),
                    c.setBigUint64(1, BigInt(o))
                }
                r.data && typeof r.data != "string" && (a[0] |= 128),
                n.enqueue(a),
                n.enqueue(s)
            }
            )
        }
    })
}
let Iu;
function Zo(r) {
    return r.reduce( (n, s) => n + s.length, 0)
}
function el(r, n) {
    if (r[0].length === n)
        return r.shift();
    const s = new Uint8Array(n);
    let o = 0;
    for (let a = 0; a < n; a++)
        s[a] = r[0][o++],
        o === r[0].length && (r.shift(),
        o = 0);
    return r.length && o < r[0].length && (r[0] = r[0].slice(o)),
    s
}
function YS(r, n) {
    Iu || (Iu = new TextDecoder);
    const s = [];
    let o = 0
      , a = -1
      , c = !1;
    return new TransformStream({
        transform(f, h) {
            for (s.push(f); ; ) {
                if (o === 0) {
                    if (Zo(s) < 1)
                        break;
                    const m = el(s, 1);
                    c = (m[0] & 128) === 128,
                    a = m[0] & 127,
                    a < 126 ? o = 3 : a === 126 ? o = 1 : o = 2
                } else if (o === 1) {
                    if (Zo(s) < 2)
                        break;
                    const m = el(s, 2);
                    a = new DataView(m.buffer,m.byteOffset,m.length).getUint16(0),
                    o = 3
                } else if (o === 2) {
                    if (Zo(s) < 8)
                        break;
                    const m = el(s, 8)
                      , g = new DataView(m.buffer,m.byteOffset,m.length)
                      , y = g.getUint32(0);
                    if (y > Math.pow(2, 21) - 1) {
                        h.enqueue(ac);
                        break
                    }
                    a = y * Math.pow(2, 32) + g.getUint32(4),
                    o = 3
                } else {
                    if (Zo(s) < a)
                        break;
                    const m = el(s, a);
                    h.enqueue(Oc(c ? m : Iu.decode(m), n)),
                    o = 0
                }
                if (a === 0 || a > r) {
                    h.enqueue(ac);
                    break
                }
            }
        }
    })
}
const Pg = 4;
function Ke(r) {
    if (r)
        return XS(r)
}
function XS(r) {
    for (var n in Ke.prototype)
        r[n] = Ke.prototype[n];
    return r
}
Ke.prototype.on = Ke.prototype.addEventListener = function(r, n) {
    return this._callbacks = this._callbacks || {},
    (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(n),
    this
}
;
Ke.prototype.once = function(r, n) {
    function s() {
        this.off(r, s),
        n.apply(this, arguments)
    }
    return s.fn = n,
    this.on(r, s),
    this
}
;
Ke.prototype.off = Ke.prototype.removeListener = Ke.prototype.removeAllListeners = Ke.prototype.removeEventListener = function(r, n) {
    if (this._callbacks = this._callbacks || {},
    arguments.length == 0)
        return this._callbacks = {},
        this;
    var s = this._callbacks["$" + r];
    if (!s)
        return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + r],
        this;
    for (var o, a = 0; a < s.length; a++)
        if (o = s[a],
        o === n || o.fn === n) {
            s.splice(a, 1);
            break
        }
    return s.length === 0 && delete this._callbacks["$" + r],
    this
}
;
Ke.prototype.emit = function(r) {
    this._callbacks = this._callbacks || {};
    for (var n = new Array(arguments.length - 1), s = this._callbacks["$" + r], o = 1; o < arguments.length; o++)
        n[o - 1] = arguments[o];
    if (s) {
        s = s.slice(0);
        for (var o = 0, a = s.length; o < a; ++o)
            s[o].apply(this, n)
    }
    return this
}
;
Ke.prototype.emitReserved = Ke.prototype.emit;
Ke.prototype.listeners = function(r) {
    return this._callbacks = this._callbacks || {},
    this._callbacks["$" + r] || []
}
;
Ke.prototype.hasListeners = function(r) {
    return !!this.listeners(r).length
}
;
const Cl = typeof Promise == "function" && typeof Promise.resolve == "function" ? n => Promise.resolve().then(n) : (n, s) => s(n, 0)
  , zt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
  , JS = "arraybuffer";
function Og(r, ...n) {
    return n.reduce( (s, o) => (r.hasOwnProperty(o) && (s[o] = r[o]),
    s), {})
}
const ZS = zt.setTimeout
  , ek = zt.clearTimeout;
function Rl(r, n) {
    n.useNativeTimers ? (r.setTimeoutFn = ZS.bind(zt),
    r.clearTimeoutFn = ek.bind(zt)) : (r.setTimeoutFn = zt.setTimeout.bind(zt),
    r.clearTimeoutFn = zt.clearTimeout.bind(zt))
}
const tk = 1.33;
function nk(r) {
    return typeof r == "string" ? rk(r) : Math.ceil((r.byteLength || r.size) * tk)
}
function rk(r) {
    let n = 0
      , s = 0;
    for (let o = 0, a = r.length; o < a; o++)
        n = r.charCodeAt(o),
        n < 128 ? s += 1 : n < 2048 ? s += 2 : n < 55296 || n >= 57344 ? s += 3 : (o++,
        s += 4);
    return s
}
function Ag() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function sk(r) {
    let n = "";
    for (let s in r)
        r.hasOwnProperty(s) && (n.length && (n += "&"),
        n += encodeURIComponent(s) + "=" + encodeURIComponent(r[s]));
    return n
}
function ik(r) {
    let n = {}
      , s = r.split("&");
    for (let o = 0, a = s.length; o < a; o++) {
        let c = s[o].split("=");
        n[decodeURIComponent(c[0])] = decodeURIComponent(c[1])
    }
    return n
}
class ok extends Error {
    constructor(n, s, o) {
        super(n),
        this.description = s,
        this.context = o,
        this.type = "TransportError"
    }
}
class Ac extends Ke {
    constructor(n) {
        super(),
        this.writable = !1,
        Rl(this, n),
        this.opts = n,
        this.query = n.query,
        this.socket = n.socket,
        this.supportsBinary = !n.forceBase64
    }
    onError(n, s, o) {
        return super.emitReserved("error", new ok(n,s,o)),
        this
    }
    open() {
        return this.readyState = "opening",
        this.doOpen(),
        this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
        this.onClose()),
        this
    }
    send(n) {
        this.readyState === "open" && this.write(n)
    }
    onOpen() {
        this.readyState = "open",
        this.writable = !0,
        super.emitReserved("open")
    }
    onData(n) {
        const s = Oc(n, this.socket.binaryType);
        this.onPacket(s)
    }
    onPacket(n) {
        super.emitReserved("packet", n)
    }
    onClose(n) {
        this.readyState = "closed",
        super.emitReserved("close", n)
    }
    pause(n) {}
    createUri(n, s={}) {
        return n + "://" + this._hostname() + this._port() + this.opts.path + this._query(s)
    }
    _hostname() {
        const n = this.opts.hostname;
        return n.indexOf(":") === -1 ? n : "[" + n + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(n) {
        const s = sk(n);
        return s.length ? "?" + s : ""
    }
}
class lk extends Ac {
    constructor() {
        super(...arguments),
        this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(n) {
        this.readyState = "pausing";
        const s = () => {
            this.readyState = "paused",
            n()
        }
        ;
        if (this._polling || !this.writable) {
            let o = 0;
            this._polling && (o++,
            this.once("pollComplete", function() {
                --o || s()
            })),
            this.writable || (o++,
            this.once("drain", function() {
                --o || s()
            }))
        } else
            s()
    }
    _poll() {
        this._polling = !0,
        this.doPoll(),
        this.emitReserved("poll")
    }
    onData(n) {
        const s = o => {
            if (this.readyState === "opening" && o.type === "open" && this.onOpen(),
            o.type === "close")
                return this.onClose({
                    description: "transport closed by the server"
                }),
                !1;
            this.onPacket(o)
        }
        ;
        KS(n, this.socket.binaryType).forEach(s),
        this.readyState !== "closed" && (this._polling = !1,
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll())
    }
    doClose() {
        const n = () => {
            this.write([{
                type: "close"
            }])
        }
        ;
        this.readyState === "open" ? n() : this.once("open", n)
    }
    write(n) {
        this.writable = !1,
        WS(n, s => {
            this.doWrite(s, () => {
                this.writable = !0,
                this.emitReserved("drain")
            }
            )
        }
        )
    }
    uri() {
        const n = this.opts.secure ? "https" : "http"
          , s = this.query || {};
        return this.opts.timestampRequests !== !1 && (s[this.opts.timestampParam] = Ag()),
        !this.supportsBinary && !s.sid && (s.b64 = 1),
        this.createUri(n, s)
    }
}
let jg = !1;
try {
    jg = typeof XMLHttpRequest < "u" && "withCredentials"in new XMLHttpRequest
} catch {}
const ak = jg;
function uk() {}
class ck extends lk {
    constructor(n) {
        if (super(n),
        typeof location < "u") {
            const s = location.protocol === "https:";
            let o = location.port;
            o || (o = s ? "443" : "80"),
            this.xd = typeof location < "u" && n.hostname !== location.hostname || o !== n.port
        }
    }
    doWrite(n, s) {
        const o = this.request({
            method: "POST",
            data: n
        });
        o.on("success", s),
        o.on("error", (a, c) => {
            this.onError("xhr post error", a, c)
        }
        )
    }
    doPoll() {
        const n = this.request();
        n.on("data", this.onData.bind(this)),
        n.on("error", (s, o) => {
            this.onError("xhr poll error", s, o)
        }
        ),
        this.pollXhr = n
    }
}
class an extends Ke {
    constructor(n, s, o) {
        super(),
        this.createRequest = n,
        Rl(this, o),
        this._opts = o,
        this._method = o.method || "GET",
        this._uri = s,
        this._data = o.data !== void 0 ? o.data : null,
        this._create()
    }
    _create() {
        var n;
        const s = Og(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        s.xdomain = !!this._opts.xd;
        const o = this._xhr = this.createRequest(s);
        try {
            o.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    o.setDisableHeaderCheck && o.setDisableHeaderCheck(!0);
                    for (let a in this._opts.extraHeaders)
                        this._opts.extraHeaders.hasOwnProperty(a) && o.setRequestHeader(a, this._opts.extraHeaders[a])
                }
            } catch {}
            if (this._method === "POST")
                try {
                    o.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
            try {
                o.setRequestHeader("Accept", "*/*")
            } catch {}
            (n = this._opts.cookieJar) === null || n === void 0 || n.addCookies(o),
            "withCredentials"in o && (o.withCredentials = this._opts.withCredentials),
            this._opts.requestTimeout && (o.timeout = this._opts.requestTimeout),
            o.onreadystatechange = () => {
                var a;
                o.readyState === 3 && ((a = this._opts.cookieJar) === null || a === void 0 || a.parseCookies(o.getResponseHeader("set-cookie"))),
                o.readyState === 4 && (o.status === 200 || o.status === 1223 ? this._onLoad() : this.setTimeoutFn( () => {
                    this._onError(typeof o.status == "number" ? o.status : 0)
                }
                , 0))
            }
            ,
            o.send(this._data)
        } catch (a) {
            this.setTimeoutFn( () => {
                this._onError(a)
            }
            , 0);
            return
        }
        typeof document < "u" && (this._index = an.requestsCount++,
        an.requests[this._index] = this)
    }
    _onError(n) {
        this.emitReserved("error", n, this._xhr),
        this._cleanup(!0)
    }
    _cleanup(n) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = uk,
            n)
                try {
                    this._xhr.abort()
                } catch {}
            typeof document < "u" && delete an.requests[this._index],
            this._xhr = null
        }
    }
    _onLoad() {
        const n = this._xhr.responseText;
        n !== null && (this.emitReserved("data", n),
        this.emitReserved("success"),
        this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
an.requestsCount = 0;
an.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", $p);
    else if (typeof addEventListener == "function") {
        const r = "onpagehide"in zt ? "pagehide" : "unload";
        addEventListener(r, $p, !1)
    }
}
function $p() {
    for (let r in an.requests)
        an.requests.hasOwnProperty(r) && an.requests[r].abort()
}
const dk = (function() {
    const r = Lg({
        xdomain: !1
    });
    return r && r.responseType !== null
}
)();
class fk extends ck {
    constructor(n) {
        super(n);
        const s = n && n.forceBase64;
        this.supportsBinary = dk && !s
    }
    request(n={}) {
        return Object.assign(n, {
            xd: this.xd
        }, this.opts),
        new an(Lg,this.uri(),n)
    }
}
function Lg(r) {
    const n = r.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!n || ak))
            return new XMLHttpRequest
    } catch {}
    if (!n)
        try {
            return new zt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
}
const Ig = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class hk extends Ac {
    get name() {
        return "websocket"
    }
    doOpen() {
        const n = this.uri()
          , s = this.opts.protocols
          , o = Ig ? {} : Og(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (o.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(n, s, o)
        } catch (a) {
            return this.emitReserved("error", a)
        }
        this.ws.binaryType = this.socket.binaryType,
        this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(),
            this.onOpen()
        }
        ,
        this.ws.onclose = n => this.onClose({
            description: "websocket connection closed",
            context: n
        }),
        this.ws.onmessage = n => this.onData(n.data),
        this.ws.onerror = n => this.onError("websocket error", n)
    }
    write(n) {
        this.writable = !1;
        for (let s = 0; s < n.length; s++) {
            const o = n[s]
              , a = s === n.length - 1;
            Pc(o, this.supportsBinary, c => {
                try {
                    this.doWrite(o, c)
                } catch {}
                a && Cl( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}
        ,
        this.ws.close(),
        this.ws = null)
    }
    uri() {
        const n = this.opts.secure ? "wss" : "ws"
          , s = this.query || {};
        return this.opts.timestampRequests && (s[this.opts.timestampParam] = Ag()),
        this.supportsBinary || (s.b64 = 1),
        this.createUri(n, s)
    }
}
const Du = zt.WebSocket || zt.MozWebSocket;
class pk extends hk {
    createSocket(n, s, o) {
        return Ig ? new Du(n,s,o) : s ? new Du(n,s) : new Du(n)
    }
    doWrite(n, s) {
        this.ws.send(s)
    }
}
class mk extends Ac {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
        } catch (n) {
            return this.emitReserved("error", n)
        }
        this._transport.closed.then( () => {
            this.onClose()
        }
        ).catch(n => {
            this.onError("webtransport error", n)
        }
        ),
        this._transport.ready.then( () => {
            this._transport.createBidirectionalStream().then(n => {
                const s = YS(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                  , o = n.readable.pipeThrough(s).getReader()
                  , a = GS();
                a.readable.pipeTo(n.writable),
                this._writer = a.writable.getWriter();
                const c = () => {
                    o.read().then( ({done: h, value: m}) => {
                        h || (this.onPacket(m),
                        c())
                    }
                    ).catch(h => {}
                    )
                }
                ;
                c();
                const f = {
                    type: "open"
                };
                this.query.sid && (f.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(f).then( () => this.onOpen())
            }
            )
        }
        )
    }
    write(n) {
        this.writable = !1;
        for (let s = 0; s < n.length; s++) {
            const o = n[s]
              , a = s === n.length - 1;
            this._writer.write(o).then( () => {
                a && Cl( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        var n;
        (n = this._transport) === null || n === void 0 || n.close()
    }
}
const gk = {
    websocket: pk,
    webtransport: mk,
    polling: fk
}
  , yk = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  , vk = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function uc(r) {
    if (r.length > 8e3)
        throw "URI too long";
    const n = r
      , s = r.indexOf("[")
      , o = r.indexOf("]");
    s != -1 && o != -1 && (r = r.substring(0, s) + r.substring(s, o).replace(/:/g, ";") + r.substring(o, r.length));
    let a = yk.exec(r || "")
      , c = {}
      , f = 14;
    for (; f--; )
        c[vk[f]] = a[f] || "";
    return s != -1 && o != -1 && (c.source = n,
    c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":"),
    c.authority = c.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    c.ipv6uri = !0),
    c.pathNames = wk(c, c.path),
    c.queryKey = xk(c, c.query),
    c
}
function wk(r, n) {
    const s = /\/{2,9}/g
      , o = n.replace(s, "/").split("/");
    return (n.slice(0, 1) == "/" || n.length === 0) && o.splice(0, 1),
    n.slice(-1) == "/" && o.splice(o.length - 1, 1),
    o
}
function xk(r, n) {
    const s = {};
    return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(o, a, c) {
        a && (s[a] = c)
    }),
    s
}
const cc = typeof addEventListener == "function" && typeof removeEventListener == "function"
  , ll = [];
cc && addEventListener("offline", () => {
    ll.forEach(r => r())
}
, !1);
class sr extends Ke {
    constructor(n, s) {
        if (super(),
        this.binaryType = JS,
        this.writeBuffer = [],
        this._prevBufferLen = 0,
        this._pingInterval = -1,
        this._pingTimeout = -1,
        this._maxPayload = -1,
        this._pingTimeoutTime = 1 / 0,
        n && typeof n == "object" && (s = n,
        n = null),
        n) {
            const o = uc(n);
            s.hostname = o.host,
            s.secure = o.protocol === "https" || o.protocol === "wss",
            s.port = o.port,
            o.query && (s.query = o.query)
        } else
            s.host && (s.hostname = uc(s.host).host);
        Rl(this, s),
        this.secure = s.secure != null ? s.secure : typeof location < "u" && location.protocol === "https:",
        s.hostname && !s.port && (s.port = this.secure ? "443" : "80"),
        this.hostname = s.hostname || (typeof location < "u" ? location.hostname : "localhost"),
        this.port = s.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"),
        this.transports = [],
        this._transportsByName = {},
        s.transports.forEach(o => {
            const a = o.prototype.name;
            this.transports.push(a),
            this._transportsByName[a] = o
        }
        ),
        this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, s),
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
        typeof this.opts.query == "string" && (this.opts.query = ik(this.opts.query)),
        cc && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(),
            this.transport.close())
        }
        ,
        addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
        this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }
        ,
        ll.push(this._offlineEventListener))),
        this.opts.withCredentials && (this._cookieJar = void 0),
        this._open()
    }
    createTransport(n) {
        const s = Object.assign({}, this.opts.query);
        s.EIO = Pg,
        s.transport = n,
        this.id && (s.sid = this.id);
        const o = Object.assign({}, this.opts, {
            query: s,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[n]);
        return new this._transportsByName[n](o)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn( () => {
                this.emitReserved("error", "No transports available")
            }
            , 0);
            return
        }
        const n = this.opts.rememberUpgrade && sr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const s = this.createTransport(n);
        s.open(),
        this.setTransport(s)
    }
    setTransport(n) {
        this.transport && this.transport.removeAllListeners(),
        this.transport = n,
        n.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", s => this._onClose("transport close", s))
    }
    onOpen() {
        this.readyState = "open",
        sr.priorWebsocketSuccess = this.transport.name === "websocket",
        this.emitReserved("open"),
        this.flush()
    }
    _onPacket(n) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
            switch (this.emitReserved("packet", n),
            this.emitReserved("heartbeat"),
            n.type) {
            case "open":
                this.onHandshake(JSON.parse(n.data));
                break;
            case "ping":
                this._sendPacket("pong"),
                this.emitReserved("ping"),
                this.emitReserved("pong"),
                this._resetPingTimeout();
                break;
            case "error":
                const s = new Error("server error");
                s.code = n.data,
                this._onError(s);
                break;
            case "message":
                this.emitReserved("data", n.data),
                this.emitReserved("message", n.data);
                break
            }
    }
    onHandshake(n) {
        this.emitReserved("handshake", n),
        this.id = n.sid,
        this.transport.query.sid = n.sid,
        this._pingInterval = n.pingInterval,
        this._pingTimeout = n.pingTimeout,
        this._maxPayload = n.maxPayload,
        this.onOpen(),
        this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const n = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + n,
        this._pingTimeoutTimer = this.setTimeoutFn( () => {
            this._onClose("ping timeout")
        }
        , n),
        this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen),
        this._prevBufferLen = 0,
        this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const n = this._getWritablePackets();
            this.transport.send(n),
            this._prevBufferLen = n.length,
            this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
            return this.writeBuffer;
        let s = 1;
        for (let o = 0; o < this.writeBuffer.length; o++) {
            const a = this.writeBuffer[o].data;
            if (a && (s += nk(a)),
            o > 0 && s > this._maxPayload)
                return this.writeBuffer.slice(0, o);
            s += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return !0;
        const n = Date.now() > this._pingTimeoutTime;
        return n && (this._pingTimeoutTime = 0,
        Cl( () => {
            this._onClose("ping timeout")
        }
        , this.setTimeoutFn)),
        n
    }
    write(n, s, o) {
        return this._sendPacket("message", n, s, o),
        this
    }
    send(n, s, o) {
        return this._sendPacket("message", n, s, o),
        this
    }
    _sendPacket(n, s, o, a) {
        if (typeof s == "function" && (a = s,
        s = void 0),
        typeof o == "function" && (a = o,
        o = null),
        this.readyState === "closing" || this.readyState === "closed")
            return;
        o = o || {},
        o.compress = o.compress !== !1;
        const c = {
            type: n,
            data: s,
            options: o
        };
        this.emitReserved("packetCreate", c),
        this.writeBuffer.push(c),
        a && this.once("flush", a),
        this.flush()
    }
    close() {
        const n = () => {
            this._onClose("forced close"),
            this.transport.close()
        }
          , s = () => {
            this.off("upgrade", s),
            this.off("upgradeError", s),
            n()
        }
          , o = () => {
            this.once("upgrade", s),
            this.once("upgradeError", s)
        }
        ;
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing",
        this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? o() : n()
        }
        ) : this.upgrading ? o() : n()),
        this
    }
    _onError(n) {
        if (sr.priorWebsocketSuccess = !1,
        this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
            return this.transports.shift(),
            this._open();
        this.emitReserved("error", n),
        this._onClose("transport error", n)
    }
    _onClose(n, s) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            cc && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
            this._offlineEventListener)) {
                const o = ll.indexOf(this._offlineEventListener);
                o !== -1 && ll.splice(o, 1)
            }
            this.readyState = "closed",
            this.id = null,
            this.emitReserved("close", n, s),
            this.writeBuffer = [],
            this._prevBufferLen = 0
        }
    }
}
sr.protocol = Pg;
class Sk extends sr {
    constructor() {
        super(...arguments),
        this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(),
        this.readyState === "open" && this.opts.upgrade)
            for (let n = 0; n < this._upgrades.length; n++)
                this._probe(this._upgrades[n])
    }
    _probe(n) {
        let s = this.createTransport(n)
          , o = !1;
        sr.priorWebsocketSuccess = !1;
        const a = () => {
            o || (s.send([{
                type: "ping",
                data: "probe"
            }]),
            s.once("packet", x => {
                if (!o)
                    if (x.type === "pong" && x.data === "probe") {
                        if (this.upgrading = !0,
                        this.emitReserved("upgrading", s),
                        !s)
                            return;
                        sr.priorWebsocketSuccess = s.name === "websocket",
                        this.transport.pause( () => {
                            o || this.readyState !== "closed" && (y(),
                            this.setTransport(s),
                            s.send([{
                                type: "upgrade"
                            }]),
                            this.emitReserved("upgrade", s),
                            s = null,
                            this.upgrading = !1,
                            this.flush())
                        }
                        )
                    } else {
                        const N = new Error("probe error");
                        N.transport = s.name,
                        this.emitReserved("upgradeError", N)
                    }
            }
            ))
        }
        ;
        function c() {
            o || (o = !0,
            y(),
            s.close(),
            s = null)
        }
        const f = x => {
            const N = new Error("probe error: " + x);
            N.transport = s.name,
            c(),
            this.emitReserved("upgradeError", N)
        }
        ;
        function h() {
            f("transport closed")
        }
        function m() {
            f("socket closed")
        }
        function g(x) {
            s && x.name !== s.name && c()
        }
        const y = () => {
            s.removeListener("open", a),
            s.removeListener("error", f),
            s.removeListener("close", h),
            this.off("close", m),
            this.off("upgrading", g)
        }
        ;
        s.once("open", a),
        s.once("error", f),
        s.once("close", h),
        this.once("close", m),
        this.once("upgrading", g),
        this._upgrades.indexOf("webtransport") !== -1 && n !== "webtransport" ? this.setTimeoutFn( () => {
            o || s.open()
        }
        , 200) : s.open()
    }
    onHandshake(n) {
        this._upgrades = this._filterUpgrades(n.upgrades),
        super.onHandshake(n)
    }
    _filterUpgrades(n) {
        const s = [];
        for (let o = 0; o < n.length; o++)
            ~this.transports.indexOf(n[o]) && s.push(n[o]);
        return s
    }
}
let kk = class extends Sk {
    constructor(n, s={}) {
        const o = typeof n == "object" ? n : s;
        (!o.transports || o.transports && typeof o.transports[0] == "string") && (o.transports = (o.transports || ["polling", "websocket", "webtransport"]).map(a => gk[a]).filter(a => !!a)),
        super(n, o)
    }
}
;
function bk(r, n="", s) {
    let o = r;
    s = s || typeof location < "u" && location,
    r == null && (r = s.protocol + "//" + s.host),
    typeof r == "string" && (r.charAt(0) === "/" && (r.charAt(1) === "/" ? r = s.protocol + r : r = s.host + r),
    /^(https?|wss?):\/\//.test(r) || (typeof s < "u" ? r = s.protocol + "//" + r : r = "https://" + r),
    o = uc(r)),
    o.port || (/^(http|ws)$/.test(o.protocol) ? o.port = "80" : /^(http|ws)s$/.test(o.protocol) && (o.port = "443")),
    o.path = o.path || "/";
    const c = o.host.indexOf(":") !== -1 ? "[" + o.host + "]" : o.host;
    return o.id = o.protocol + "://" + c + ":" + o.port + n,
    o.href = o.protocol + "://" + c + (s && s.port === o.port ? "" : ":" + o.port),
    o
}
const _k = typeof ArrayBuffer == "function"
  , Ek = r => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r.buffer instanceof ArrayBuffer
  , Dg = Object.prototype.toString
  , Ck = typeof Blob == "function" || typeof Blob < "u" && Dg.call(Blob) === "[object BlobConstructor]"
  , Rk = typeof File == "function" || typeof File < "u" && Dg.call(File) === "[object FileConstructor]";
function jc(r) {
    return _k && (r instanceof ArrayBuffer || Ek(r)) || Ck && r instanceof Blob || Rk && r instanceof File
}
function al(r, n) {
    if (!r || typeof r != "object")
        return !1;
    if (Array.isArray(r)) {
        for (let s = 0, o = r.length; s < o; s++)
            if (al(r[s]))
                return !0;
        return !1
    }
    if (jc(r))
        return !0;
    if (r.toJSON && typeof r.toJSON == "function" && arguments.length === 1)
        return al(r.toJSON(), !0);
    for (const s in r)
        if (Object.prototype.hasOwnProperty.call(r, s) && al(r[s]))
            return !0;
    return !1
}
function Tk(r) {
    const n = []
      , s = r.data
      , o = r;
    return o.data = dc(s, n),
    o.attachments = n.length,
    {
        packet: o,
        buffers: n
    }
}
function dc(r, n) {
    if (!r)
        return r;
    if (jc(r)) {
        const s = {
            _placeholder: !0,
            num: n.length
        };
        return n.push(r),
        s
    } else if (Array.isArray(r)) {
        const s = new Array(r.length);
        for (let o = 0; o < r.length; o++)
            s[o] = dc(r[o], n);
        return s
    } else if (typeof r == "object" && !(r instanceof Date)) {
        const s = {};
        for (const o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (s[o] = dc(r[o], n));
        return s
    }
    return r
}
function Nk(r, n) {
    return r.data = fc(r.data, n),
    delete r.attachments,
    r
}
function fc(r, n) {
    if (!r)
        return r;
    if (r && r._placeholder === !0) {
        if (typeof r.num == "number" && r.num >= 0 && r.num < n.length)
            return n[r.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(r))
        for (let s = 0; s < r.length; s++)
            r[s] = fc(r[s], n);
    else if (typeof r == "object")
        for (const s in r)
            Object.prototype.hasOwnProperty.call(r, s) && (r[s] = fc(r[s], n));
    return r
}
const Pk = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var ke;
(function(r) {
    r[r.CONNECT = 0] = "CONNECT",
    r[r.DISCONNECT = 1] = "DISCONNECT",
    r[r.EVENT = 2] = "EVENT",
    r[r.ACK = 3] = "ACK",
    r[r.CONNECT_ERROR = 4] = "CONNECT_ERROR",
    r[r.BINARY_EVENT = 5] = "BINARY_EVENT",
    r[r.BINARY_ACK = 6] = "BINARY_ACK"
}
)(ke || (ke = {}));
class Ok {
    constructor(n) {
        this.replacer = n
    }
    encode(n) {
        return (n.type === ke.EVENT || n.type === ke.ACK) && al(n) ? this.encodeAsBinary({
            type: n.type === ke.EVENT ? ke.BINARY_EVENT : ke.BINARY_ACK,
            nsp: n.nsp,
            data: n.data,
            id: n.id
        }) : [this.encodeAsString(n)]
    }
    encodeAsString(n) {
        let s = "" + n.type;
        return (n.type === ke.BINARY_EVENT || n.type === ke.BINARY_ACK) && (s += n.attachments + "-"),
        n.nsp && n.nsp !== "/" && (s += n.nsp + ","),
        n.id != null && (s += n.id),
        n.data != null && (s += JSON.stringify(n.data, this.replacer)),
        s
    }
    encodeAsBinary(n) {
        const s = Tk(n)
          , o = this.encodeAsString(s.packet)
          , a = s.buffers;
        return a.unshift(o),
        a
    }
}
class Lc extends Ke {
    constructor(n) {
        super(),
        this.reviver = n
    }
    add(n) {
        let s;
        if (typeof n == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            s = this.decodeString(n);
            const o = s.type === ke.BINARY_EVENT;
            o || s.type === ke.BINARY_ACK ? (s.type = o ? ke.EVENT : ke.ACK,
            this.reconstructor = new Ak(s),
            s.attachments === 0 && super.emitReserved("decoded", s)) : super.emitReserved("decoded", s)
        } else if (jc(n) || n.base64)
            if (this.reconstructor)
                s = this.reconstructor.takeBinaryData(n),
                s && (this.reconstructor = null,
                super.emitReserved("decoded", s));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + n)
    }
    decodeString(n) {
        let s = 0;
        const o = {
            type: Number(n.charAt(0))
        };
        if (ke[o.type] === void 0)
            throw new Error("unknown packet type " + o.type);
        if (o.type === ke.BINARY_EVENT || o.type === ke.BINARY_ACK) {
            const c = s + 1;
            for (; n.charAt(++s) !== "-" && s != n.length; )
                ;
            const f = n.substring(c, s);
            if (f != Number(f) || n.charAt(s) !== "-")
                throw new Error("Illegal attachments");
            o.attachments = Number(f)
        }
        if (n.charAt(s + 1) === "/") {
            const c = s + 1;
            for (; ++s && !(n.charAt(s) === "," || s === n.length); )
                ;
            o.nsp = n.substring(c, s)
        } else
            o.nsp = "/";
        const a = n.charAt(s + 1);
        if (a !== "" && Number(a) == a) {
            const c = s + 1;
            for (; ++s; ) {
                const f = n.charAt(s);
                if (f == null || Number(f) != f) {
                    --s;
                    break
                }
                if (s === n.length)
                    break
            }
            o.id = Number(n.substring(c, s + 1))
        }
        if (n.charAt(++s)) {
            const c = this.tryParse(n.substr(s));
            if (Lc.isPayloadValid(o.type, c))
                o.data = c;
            else
                throw new Error("invalid payload")
        }
        return o
    }
    tryParse(n) {
        try {
            return JSON.parse(n, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(n, s) {
        switch (n) {
        case ke.CONNECT:
            return Vp(s);
        case ke.DISCONNECT:
            return s === void 0;
        case ke.CONNECT_ERROR:
            return typeof s == "string" || Vp(s);
        case ke.EVENT:
        case ke.BINARY_EVENT:
            return Array.isArray(s) && (typeof s[0] == "number" || typeof s[0] == "string" && Pk.indexOf(s[0]) === -1);
        case ke.ACK:
        case ke.BINARY_ACK:
            return Array.isArray(s)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(),
        this.reconstructor = null)
    }
}
class Ak {
    constructor(n) {
        this.packet = n,
        this.buffers = [],
        this.reconPack = n
    }
    takeBinaryData(n) {
        if (this.buffers.push(n),
        this.buffers.length === this.reconPack.attachments) {
            const s = Nk(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
            s
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null,
        this.buffers = []
    }
}
function Vp(r) {
    return Object.prototype.toString.call(r) === "[object Object]"
}
const jk = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: Lc,
    Encoder: Ok,
    get PacketType() {
        return ke
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
function Xt(r, n, s) {
    return r.on(n, s),
    function() {
        r.off(n, s)
    }
}
const Lk = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class Mg extends Ke {
    constructor(n, s, o) {
        super(),
        this.connected = !1,
        this.recovered = !1,
        this.receiveBuffer = [],
        this.sendBuffer = [],
        this._queue = [],
        this._queueSeq = 0,
        this.ids = 0,
        this.acks = {},
        this.flags = {},
        this.io = n,
        this.nsp = s,
        o && o.auth && (this.auth = o.auth),
        this._opts = Object.assign({}, o),
        this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs)
            return;
        const n = this.io;
        this.subs = [Xt(n, "open", this.onopen.bind(this)), Xt(n, "packet", this.onpacket.bind(this)), Xt(n, "error", this.onerror.bind(this)), Xt(n, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this)
    }
    open() {
        return this.connect()
    }
    send(...n) {
        return n.unshift("message"),
        this.emit.apply(this, n),
        this
    }
    emit(n, ...s) {
        var o, a, c;
        if (Lk.hasOwnProperty(n))
            throw new Error('"' + n.toString() + '" is a reserved event name');
        if (s.unshift(n),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(s),
            this;
        const f = {
            type: ke.EVENT,
            data: s
        };
        if (f.options = {},
        f.options.compress = this.flags.compress !== !1,
        typeof s[s.length - 1] == "function") {
            const y = this.ids++
              , x = s.pop();
            this._registerAckCallback(y, x),
            f.id = y
        }
        const h = (a = (o = this.io.engine) === null || o === void 0 ? void 0 : o.transport) === null || a === void 0 ? void 0 : a.writable
          , m = this.connected && !(!((c = this.io.engine) === null || c === void 0) && c._hasPingExpired());
        return this.flags.volatile && !h || (m ? (this.notifyOutgoingListeners(f),
        this.packet(f)) : this.sendBuffer.push(f)),
        this.flags = {},
        this
    }
    _registerAckCallback(n, s) {
        var o;
        const a = (o = this.flags.timeout) !== null && o !== void 0 ? o : this._opts.ackTimeout;
        if (a === void 0) {
            this.acks[n] = s;
            return
        }
        const c = this.io.setTimeoutFn( () => {
            delete this.acks[n];
            for (let h = 0; h < this.sendBuffer.length; h++)
                this.sendBuffer[h].id === n && this.sendBuffer.splice(h, 1);
            s.call(this, new Error("operation has timed out"))
        }
        , a)
          , f = (...h) => {
            this.io.clearTimeoutFn(c),
            s.apply(this, h)
        }
        ;
        f.withError = !0,
        this.acks[n] = f
    }
    emitWithAck(n, ...s) {
        return new Promise( (o, a) => {
            const c = (f, h) => f ? a(f) : o(h);
            c.withError = !0,
            s.push(c),
            this.emit(n, ...s)
        }
        )
    }
    _addToQueue(n) {
        let s;
        typeof n[n.length - 1] == "function" && (s = n.pop());
        const o = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: n,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        n.push( (a, ...c) => (this._queue[0],
        a !== null ? o.tryCount > this._opts.retries && (this._queue.shift(),
        s && s(a)) : (this._queue.shift(),
        s && s(null, ...c)),
        o.pending = !1,
        this._drainQueue())),
        this._queue.push(o),
        this._drainQueue()
    }
    _drainQueue(n=!1) {
        if (!this.connected || this._queue.length === 0)
            return;
        const s = this._queue[0];
        s.pending && !n || (s.pending = !0,
        s.tryCount++,
        this.flags = s.flags,
        this.emit.apply(this, s.args))
    }
    packet(n) {
        n.nsp = this.nsp,
        this.io._packet(n)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(n => {
            this._sendConnectPacket(n)
        }
        ) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(n) {
        this.packet({
            type: ke.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, n) : n
        })
    }
    onerror(n) {
        this.connected || this.emitReserved("connect_error", n)
    }
    onclose(n, s) {
        this.connected = !1,
        delete this.id,
        this.emitReserved("disconnect", n, s),
        this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(n => {
            if (!this.sendBuffer.some(o => String(o.id) === n)) {
                const o = this.acks[n];
                delete this.acks[n],
                o.withError && o.call(this, new Error("socket has been disconnected"))
            }
        }
        )
    }
    onpacket(n) {
        if (n.nsp === this.nsp)
            switch (n.type) {
            case ke.CONNECT:
                n.data && n.data.sid ? this.onconnect(n.data.sid, n.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case ke.EVENT:
            case ke.BINARY_EVENT:
                this.onevent(n);
                break;
            case ke.ACK:
            case ke.BINARY_ACK:
                this.onack(n);
                break;
            case ke.DISCONNECT:
                this.ondisconnect();
                break;
            case ke.CONNECT_ERROR:
                this.destroy();
                const o = new Error(n.data.message);
                o.data = n.data.data,
                this.emitReserved("connect_error", o);
                break
            }
    }
    onevent(n) {
        const s = n.data || [];
        n.id != null && s.push(this.ack(n.id)),
        this.connected ? this.emitEvent(s) : this.receiveBuffer.push(Object.freeze(s))
    }
    emitEvent(n) {
        if (this._anyListeners && this._anyListeners.length) {
            const s = this._anyListeners.slice();
            for (const o of s)
                o.apply(this, n)
        }
        super.emit.apply(this, n),
        this._pid && n.length && typeof n[n.length - 1] == "string" && (this._lastOffset = n[n.length - 1])
    }
    ack(n) {
        const s = this;
        let o = !1;
        return function(...a) {
            o || (o = !0,
            s.packet({
                type: ke.ACK,
                id: n,
                data: a
            }))
        }
    }
    onack(n) {
        const s = this.acks[n.id];
        typeof s == "function" && (delete this.acks[n.id],
        s.withError && n.data.unshift(null),
        s.apply(this, n.data))
    }
    onconnect(n, s) {
        this.id = n,
        this.recovered = s && this._pid === s,
        this._pid = s,
        this.connected = !0,
        this.emitBuffered(),
        this._drainQueue(!0),
        this.emitReserved("connect")
    }
    emitBuffered() {
        this.receiveBuffer.forEach(n => this.emitEvent(n)),
        this.receiveBuffer = [],
        this.sendBuffer.forEach(n => {
            this.notifyOutgoingListeners(n),
            this.packet(n)
        }
        ),
        this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(),
        this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(n => n()),
        this.subs = void 0),
        this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: ke.DISCONNECT
        }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
    }
    close() {
        return this.disconnect()
    }
    compress(n) {
        return this.flags.compress = n,
        this
    }
    get volatile() {
        return this.flags.volatile = !0,
        this
    }
    timeout(n) {
        return this.flags.timeout = n,
        this
    }
    onAny(n) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.push(n),
        this
    }
    prependAny(n) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.unshift(n),
        this
    }
    offAny(n) {
        if (!this._anyListeners)
            return this;
        if (n) {
            const s = this._anyListeners;
            for (let o = 0; o < s.length; o++)
                if (n === s[o])
                    return s.splice(o, 1),
                    this
        } else
            this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(n) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.push(n),
        this
    }
    prependAnyOutgoing(n) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.unshift(n),
        this
    }
    offAnyOutgoing(n) {
        if (!this._anyOutgoingListeners)
            return this;
        if (n) {
            const s = this._anyOutgoingListeners;
            for (let o = 0; o < s.length; o++)
                if (n === s[o])
                    return s.splice(o, 1),
                    this
        } else
            this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(n) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const s = this._anyOutgoingListeners.slice();
            for (const o of s)
                o.apply(this, n.data)
        }
    }
}
function _s(r) {
    r = r || {},
    this.ms = r.min || 100,
    this.max = r.max || 1e4,
    this.factor = r.factor || 2,
    this.jitter = r.jitter > 0 && r.jitter <= 1 ? r.jitter : 0,
    this.attempts = 0
}
_s.prototype.duration = function() {
    var r = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var n = Math.random()
          , s = Math.floor(n * this.jitter * r);
        r = (Math.floor(n * 10) & 1) == 0 ? r - s : r + s
    }
    return Math.min(r, this.max) | 0
}
;
_s.prototype.reset = function() {
    this.attempts = 0
}
;
_s.prototype.setMin = function(r) {
    this.ms = r
}
;
_s.prototype.setMax = function(r) {
    this.max = r
}
;
_s.prototype.setJitter = function(r) {
    this.jitter = r
}
;
class hc extends Ke {
    constructor(n, s) {
        var o;
        super(),
        this.nsps = {},
        this.subs = [],
        n && typeof n == "object" && (s = n,
        n = void 0),
        s = s || {},
        s.path = s.path || "/socket.io",
        this.opts = s,
        Rl(this, s),
        this.reconnection(s.reconnection !== !1),
        this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(s.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3),
        this.randomizationFactor((o = s.randomizationFactor) !== null && o !== void 0 ? o : .5),
        this.backoff = new _s({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }),
        this.timeout(s.timeout == null ? 2e4 : s.timeout),
        this._readyState = "closed",
        this.uri = n;
        const a = s.parser || jk;
        this.encoder = new a.Encoder,
        this.decoder = new a.Decoder,
        this._autoConnect = s.autoConnect !== !1,
        this._autoConnect && this.open()
    }
    reconnection(n) {
        return arguments.length ? (this._reconnection = !!n,
        n || (this.skipReconnect = !0),
        this) : this._reconnection
    }
    reconnectionAttempts(n) {
        return n === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = n,
        this)
    }
    reconnectionDelay(n) {
        var s;
        return n === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = n,
        (s = this.backoff) === null || s === void 0 || s.setMin(n),
        this)
    }
    randomizationFactor(n) {
        var s;
        return n === void 0 ? this._randomizationFactor : (this._randomizationFactor = n,
        (s = this.backoff) === null || s === void 0 || s.setJitter(n),
        this)
    }
    reconnectionDelayMax(n) {
        var s;
        return n === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = n,
        (s = this.backoff) === null || s === void 0 || s.setMax(n),
        this)
    }
    timeout(n) {
        return arguments.length ? (this._timeout = n,
        this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(n) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new kk(this.uri,this.opts);
        const s = this.engine
          , o = this;
        this._readyState = "opening",
        this.skipReconnect = !1;
        const a = Xt(s, "open", function() {
            o.onopen(),
            n && n()
        })
          , c = h => {
            this.cleanup(),
            this._readyState = "closed",
            this.emitReserved("error", h),
            n ? n(h) : this.maybeReconnectOnOpen()
        }
          , f = Xt(s, "error", c);
        if (this._timeout !== !1) {
            const h = this._timeout
              , m = this.setTimeoutFn( () => {
                a(),
                c(new Error("timeout")),
                s.close()
            }
            , h);
            this.opts.autoUnref && m.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(m)
            }
            )
        }
        return this.subs.push(a),
        this.subs.push(f),
        this
    }
    connect(n) {
        return this.open(n)
    }
    onopen() {
        this.cleanup(),
        this._readyState = "open",
        this.emitReserved("open");
        const n = this.engine;
        this.subs.push(Xt(n, "ping", this.onping.bind(this)), Xt(n, "data", this.ondata.bind(this)), Xt(n, "error", this.onerror.bind(this)), Xt(n, "close", this.onclose.bind(this)), Xt(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(n) {
        try {
            this.decoder.add(n)
        } catch (s) {
            this.onclose("parse error", s)
        }
    }
    ondecoded(n) {
        Cl( () => {
            this.emitReserved("packet", n)
        }
        , this.setTimeoutFn)
    }
    onerror(n) {
        this.emitReserved("error", n)
    }
    socket(n, s) {
        let o = this.nsps[n];
        return o ? this._autoConnect && !o.active && o.connect() : (o = new Mg(this,n,s),
        this.nsps[n] = o),
        o
    }
    _destroy(n) {
        const s = Object.keys(this.nsps);
        for (const o of s)
            if (this.nsps[o].active)
                return;
        this._close()
    }
    _packet(n) {
        const s = this.encoder.encode(n);
        for (let o = 0; o < s.length; o++)
            this.engine.write(s[o], n.options)
    }
    cleanup() {
        this.subs.forEach(n => n()),
        this.subs.length = 0,
        this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0,
        this._reconnecting = !1,
        this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(n, s) {
        var o;
        this.cleanup(),
        (o = this.engine) === null || o === void 0 || o.close(),
        this.backoff.reset(),
        this._readyState = "closed",
        this.emitReserved("close", n, s),
        this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const n = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            this._reconnecting = !1;
        else {
            const s = this.backoff.duration();
            this._reconnecting = !0;
            const o = this.setTimeoutFn( () => {
                n.skipReconnect || (this.emitReserved("reconnect_attempt", n.backoff.attempts),
                !n.skipReconnect && n.open(a => {
                    a ? (n._reconnecting = !1,
                    n.reconnect(),
                    this.emitReserved("reconnect_error", a)) : n.onreconnect()
                }
                ))
            }
            , s);
            this.opts.autoUnref && o.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(o)
            }
            )
        }
    }
    onreconnect() {
        const n = this.backoff.attempts;
        this._reconnecting = !1,
        this.backoff.reset(),
        this.emitReserved("reconnect", n)
    }
}
const hi = {};
function ul(r, n) {
    typeof r == "object" && (n = r,
    r = void 0),
    n = n || {};
    const s = bk(r, n.path || "/socket.io")
      , o = s.source
      , a = s.id
      , c = s.path
      , f = hi[a] && c in hi[a].nsps
      , h = n.forceNew || n["force new connection"] || n.multiplex === !1 || f;
    let m;
    return h ? m = new hc(o,n) : (hi[a] || (hi[a] = new hc(o,n)),
    m = hi[a]),
    s.query && !n.query && (n.query = s.queryKey),
    m.socket(s.path, n)
}
Object.assign(ul, {
    Manager: hc,
    Socket: Mg,
    io: ul,
    connect: ul
});
function qp(r, n) {
    var s;
    const o = ul(r.serverUrl, {
        path: r.mountPath,
        transports: r.transports,
        query: {
            app_id: r.appId,
            token: (s = r.token) !== null && s !== void 0 ? s : Ei()
        }
    });
    return o.on("connect", async () => {
        var a;
        return console.log("connect", o.id),
        (a = n.connect) === null || a === void 0 ? void 0 : a.call(n)
    }
    ),
    o.on("update_model", async a => {
        var c;
        return (c = n.update_model) === null || c === void 0 ? void 0 : c.call(n, a)
    }
    ),
    o.on("error", async a => {
        var c;
        return (c = n.error) === null || c === void 0 ? void 0 : c.call(n, a)
    }
    ),
    o.on("connect_error", async a => {
        var c;
        return console.error("connect_error", a),
        (c = n.error) === null || c === void 0 ? void 0 : c.call(n, a)
    }
    ),
    o
}
function Ik({config: r}) {
    let n = {
        ...r
    };
    const s = {}
      , o = {
        connect: async () => {
            const A = [];
            Object.keys(s).forEach(E => {
                m(E);
                const _ = x(E);
                _ == null || _.forEach( ({connect: S}) => {
                    const D = async () => S == null ? void 0 : S();
                    A.push(D())
                }
                )
            }
            ),
            await Promise.all(A)
        }
        ,
        update_model: async A => {
            const _ = x(A.room).map(S => {
                var D;
                return (D = S.update_model) === null || D === void 0 ? void 0 : D.call(S, A)
            }
            );
            await Promise.all(_)
        }
        ,
        error: async A => {
            console.error("error", A);
            const E = Object.values(s).flat().map(_ => {
                var S;
                return (S = _.error) === null || S === void 0 ? void 0 : S.call(_, A)
            }
            );
            await Promise.all(E)
        }
    };
    let a = qp(r, o);
    function c() {
        f()
    }
    function f() {
        a && a.disconnect()
    }
    function h(A) {
        c(),
        n = {
            ...n,
            ...A
        },
        a = qp(n, o)
    }
    function m(A) {
        a.emit("join", A)
    }
    function g(A) {
        a.emit("leave", A)
    }
    async function y(A, E) {
        var _;
        const S = JSON.stringify(E);
        return (_ = o.update_model) === null || _ === void 0 ? void 0 : _.call(o, {
            room: A,
            data: S
        })
    }
    function x(A) {
        var E;
        return (E = s[A]) !== null && E !== void 0 ? E : []
    }
    return {
        socket: a,
        subscribeToRoom: (A, E) => {
            s[A] || (m(A),
            s[A] = []),
            s[A].push(E);
            let _ = !1;
            return () => {
                var S, D;
                _ || (_ = !0,
                s[A] = (D = (S = s[A]) === null || S === void 0 ? void 0 : S.filter(Q => Q !== E)) !== null && D !== void 0 ? D : [],
                s[A].length === 0 && (g(A),
                delete s[A]))
            }
        }
        ,
        updateConfig: h,
        updateModel: y,
        disconnect: f
    }
}
const pi = typeof window < "u" ? window : {
    base44SharedInstances: {}
};
function Dk(r, n) {
    return pi.base44SharedInstances || (pi.base44SharedInstances = {}),
    pi.base44SharedInstances[r] || (pi.base44SharedInstances[r] = {
        instance: n()
    }),
    pi.base44SharedInstances[r].instance
}
const Mk = "__user_heartbeat_event__"
  , Fk = "__initialization_event__"
  , Uk = "__session_duration_event__"
  , Hp = "analytics-enable"
  , Qp = "base44_analytics_session_id"
  , zk = {
    enabled: !0,
    maxQueueSize: 1e3,
    throttleTime: 1e3,
    batchSize: 30,
    heartBeatInterval: 60 * 1e3
}
  , Bk = "analytics"
  , je = Dk(Bk, () => ({
    requestsQueue: [],
    isProcessing: !1,
    isHeartBeatProcessing: !1,
    wasInitializationTracked: !1,
    sessionContext: null,
    sessionStartTime: null,
    config: {
        ...zk,
        ...Gk()
    }
}))
  , $k = ({axiosClient: r, serverUrl: n, appId: s, userAuthModule: o}) => {
    var a;
    const {maxQueueSize: c, throttleTime: f, batchSize: h} = je.config;
    if (!(!((a = je.config) === null || a === void 0) && a.enabled))
        return {
            track: () => {}
            ,
            cleanup: () => {}
        };
    let m;
    const g = `${n}/api/apps/${s}/analytics/track/batch`
      , y = async B => {
        await r.request({
            method: "POST",
            url: `/apps/${s}/analytics/track/batch`,
            data: {
                events: B
            }
        })
    }
      , x = B => {
        try {
            const M = JSON.stringify({
                events: B
            })
              , W = new Blob([M],{
                type: "application/json"
            });
            return typeof navigator > "u" || M.length > 6e4 || !navigator.sendBeacon(g, W)
        } catch {
            return !1
        }
    }
      , N = async (B, M={}) => {
        if (B.length === 0)
            return;
        const W = await Kk(o)
          , X = B.map(Wk(W));
        try {
            (!M.isBeacon || !x(X)) && await y(X)
        } catch {}
    }
      , A = () => {
        Kp(N, {
            throttleTime: f,
            batchSize: h
        })
    }
      , E = B => {
        if (je.requestsQueue.length >= c)
            return;
        const M = Qk();
        je.requestsQueue.push({
            ...B,
            ...M
        }),
        A()
    }
      , _ = () => {
        Kp(N, {
            throttleTime: f,
            batchSize: h
        }),
        m = Gp(E),
        qk()
    }
      , S = () => {
        Wp(),
        m == null || m(),
        Hk(E);
        const B = je.requestsQueue.splice(0);
        N(B, {
            isBeacon: !0
        })
    }
      , D = () => {
        typeof window > "u" || (document.visibilityState === "hidden" ? S() : document.visibilityState === "visible" && _())
    }
      , Q = () => {
        Wp(),
        m == null || m(),
        typeof window < "u" && window.removeEventListener("visibilitychange", D)
    }
    ;
    return A(),
    m = Gp(E),
    Vk(E),
    typeof window < "u" && window.addEventListener("visibilitychange", D),
    {
        track: E,
        cleanup: Q
    }
}
;
function Wp() {
    je.isProcessing = !1
}
async function Kp(r, n) {
    if (je.isProcessing)
        return;
    je.isProcessing = !0;
    const {throttleTime: s=1e3, batchSize: o=30} = n ?? {};
    for (; je.isProcessing && je.requestsQueue.length > 0; ) {
        const a = je.requestsQueue.splice(0, o);
        a.length && await r(a),
        await new Promise(c => setTimeout(c, s))
    }
    je.isProcessing = !1
}
function Gp(r) {
    var n;
    if (je.isHeartBeatProcessing || ((n = je.config.heartBeatInterval) !== null && n !== void 0 ? n : 0) < 10)
        return () => {}
        ;
    je.isHeartBeatProcessing = !0;
    const s = setInterval( () => {
        r({
            eventName: Mk
        })
    }
    , je.config.heartBeatInterval);
    return () => {
        clearInterval(s),
        je.isHeartBeatProcessing = !1
    }
}
function Vk(r) {
    typeof window > "u" || je.wasInitializationTracked || (je.wasInitializationTracked = !0,
    r({
        eventName: Fk,
        properties: {
            referrer: document == null ? void 0 : document.referrer
        }
    }))
}
function qk() {
    typeof window > "u" || je.sessionStartTime !== null || (je.sessionStartTime = new Date().toISOString())
}
function Hk(r) {
    if (typeof window > "u" || je.sessionStartTime === null)
        return;
    const n = new Date().getTime() - new Date(je.sessionStartTime).getTime();
    je.sessionStartTime = null,
    r({
        eventName: Uk,
        properties: {
            sessionDuration: n
        }
    })
}
function Qk() {
    return {
        timestamp: new Date().toISOString(),
        pageUrl: typeof window < "u" ? window.location.pathname : null
    }
}
function Wk(r) {
    return n => ({
        event_name: n.eventName,
        properties: n.properties,
        timestamp: n.timestamp,
        page_url: n.pageUrl,
        ...r
    })
}
let Mu = null;
async function Kk(r) {
    if (!je.sessionContext) {
        if (!Mu) {
            const n = Yk();
            Mu = r.me().then(s => ({
                user_id: s.id,
                session_id: n
            })).catch( () => ({
                user_id: null,
                session_id: n
            }))
        }
        je.sessionContext = await Mu
    }
    return je.sessionContext
}
function Gk() {
    if (typeof window > "u")
        return;
    const n = new URLSearchParams(window.location.search).get(Hp);
    if (n == null || !n.length)
        return;
    const s = new URLSearchParams(window.location.search);
    s.delete(Hp);
    const o = window.location.pathname + (s.toString() ? "?" + s.toString() : "");
    return window.history.replaceState({}, "", o),
    {
        enabled: n === "true"
    }
}
function Yk() {
    if (typeof window > "u")
        return Au();
    try {
        const r = localStorage.getItem(Qp);
        if (!r) {
            const n = Au();
            return localStorage.setItem(Qp, n),
            n
        }
        return r
    } catch {
        return Au()
    }
}
function Xk(r) {
    var n, s;
    const {serverUrl: o="https://base44.app", appId: a, token: c, serviceToken: f, requiresAuth: h=!1, appBaseUrl: m, options: g, functionsVersion: y, headers: x} = r
      , N = typeof m == "string" ? m : ""
      , A = {
        serverUrl: o,
        mountPath: "/ws-user-apps/socket.io/",
        transports: ["websocket"],
        appId: a,
        token: c
    };
    let E = null;
    const _ = () => (E || (E = Ik({
        config: A
    })),
    E)
      , S = {
        ...x,
        "X-App-Id": String(a)
    }
      , D = y ? {
        ...S,
        "Base44-Functions-Version": y
    } : S
      , Q = yi({
        baseURL: `${o}/api`,
        headers: S,
        token: c,
        onError: g == null ? void 0 : g.onError
    })
      , B = yi({
        baseURL: `${o}/api`,
        headers: D,
        token: c,
        interceptResponses: !1,
        onError: g == null ? void 0 : g.onError
    })
      , M = {
        ...S,
        ...c ? {
            "on-behalf-of": `Bearer ${c}`
        } : {}
    }
      , W = yi({
        baseURL: `${o}/api`,
        headers: M,
        token: f,
        onError: g == null ? void 0 : g.onError
    })
      , X = yi({
        baseURL: `${o}/api`,
        headers: D,
        token: f,
        interceptResponses: !1
    })
      , se = MS(Q, B, a, {
        appBaseUrl: N
    });
    if (typeof window < "u") {
        const ge = c || Ei();
        ge && se.setToken(ge)
    }
    const F = {
        entities: Lp({
            axios: Q,
            appId: a,
            getSocket: _
        }),
        integrations: Ip(Q, a),
        connectors: zS(Q, a),
        auth: se,
        functions: Dp(B, a, {
            getAuthHeaders: () => {
                const ge = {}
                  , Ne = c || Ei();
                return Ne && (ge.Authorization = `Bearer ${Ne}`),
                ge
            }
            ,
            baseURL: (n = B.defaults) === null || n === void 0 ? void 0 : n.baseURL
        }),
        agents: Mp({
            axios: Q,
            getSocket: _,
            appId: a,
            serverUrl: o,
            token: c
        }),
        appLogs: Fp(Q, a),
        users: $S(Q, a),
        analytics: $k({
            axiosClient: Q,
            serverUrl: o,
            appId: a,
            userAuthModule: se
        }),
        cleanup: () => {
            F.analytics.cleanup(),
            E && E.disconnect()
        }
    }
      , le = {
        entities: Lp({
            axios: W,
            appId: a,
            getSocket: _
        }),
        integrations: Ip(W, a),
        sso: FS(W, a),
        connectors: US(W, a),
        functions: Dp(X, a, {
            getAuthHeaders: () => {
                const ge = {};
                return f && (ge.Authorization = `Bearer ${f}`),
                ge
            }
            ,
            baseURL: (s = X.defaults) === null || s === void 0 ? void 0 : s.baseURL
        }),
        agents: Mp({
            axios: W,
            getSocket: _,
            appId: a,
            serverUrl: o,
            token: c
        }),
        appLogs: Fp(W, a),
        cleanup: () => {
            E && E.disconnect()
        }
    };
    return h && typeof window < "u" && setTimeout(async () => {
        try {
            await F.auth.isAuthenticated() || F.auth.redirectToLogin(window.location.href)
        } catch (ge) {
            console.error("Authentication check failed:", ge),
            F.auth.redirectToLogin(window.location.href)
        }
    }
    , 0),
    {
        ...F,
        setToken(ge) {
            F.auth.setToken(ge),
            E && E.updateConfig({
                token: ge
            }),
            A.token = ge
        },
        getConfig() {
            return {
                serverUrl: o,
                appId: a,
                requiresAuth: h
            }
        },
        get asServiceRole() {
            if (!f)
                throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return le
        }
    }
}
const Fg = typeof window > "u"
  , Jk = Fg ? {
    localStorage: new Map
} : window
  , ki = Jk.localStorage
  , Zk = r => r.replace(/([A-Z])/g, "_$1").toLowerCase()
  , as = (r, {defaultValue: n=void 0, removeFromUrl: s=!1}={}) => {
    if (Fg)
        return n;
    const o = `base44_${Zk(r)}`
      , a = new URLSearchParams(window.location.search)
      , c = a.get(r);
    if (s) {
        a.delete(r);
        const h = `${window.location.pathname}${a.toString() ? `?${a.toString()}` : ""}${window.location.hash}`;
        window.history.replaceState({}, document.title, h)
    }
    if (c)
        return ki.setItem(o, c),
        c;
    if (n)
        return ki.setItem(o, n),
        n;
    const f = ki.getItem(o);
    return f || null
}
  , eb = () => (as("clear_access_token") === "true" && (ki.removeItem("base44_access_token"),
ki.removeItem("token")),
{
    appId: as("app_id", {
        defaultValue: "6a0de80f9b876e2317dcac42"
    }),
    token: as("access_token", {
        removeFromUrl: !0
    }),
    fromUrl: as("from_url", {
        defaultValue: window.location.href
    }),
    functionsVersion: as("functions_version", {
        defaultValue: "prod"
    }),
    appBaseUrl: as("app_base_url", {
        defaultValue: void 0
    })
})
  , wi = {
    ...eb()
}
  , {appId: tb, token: nb, functionsVersion: rb, appBaseUrl: sb} = wi
  , xi = Xk({
    appId: tb,
    token: nb,
    functionsVersion: rb,
    serverUrl: "",
    requiresAuth: !1,
    appBaseUrl: sb
});
function ib({}) {
    var a;
    const n = tg().pathname.substring(1)
      , {data: s, isFetched: o} = ox({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                return {
                    user: await xi.auth.me(),
                    isAuthenticated: !0
                }
            } catch {
                return {
                    user: null,
                    isAuthenticated: !1
                }
            }
        }
    });
    return v.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: v.jsx("div", {
            className: "max-w-md w-full",
            children: v.jsxs("div", {
                className: "text-center space-y-6",
                children: [v.jsxs("div", {
                    className: "space-y-2",
                    children: [v.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), v.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), v.jsxs("div", {
                    className: "space-y-3",
                    children: [v.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), v.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", v.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', n, '"']
                        }), " could not be found in this application."]
                    })]
                }), o && s.isAuthenticated && ((a = s.user) == null ? void 0 : a.role) === "admin" && v.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: v.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [v.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: v.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), v.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [v.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), v.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), v.jsx("div", {
                    className: "pt-6",
                    children: v.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [v.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: v.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const Ug = U.createContext()
  , ob = ({children: r}) => {
    const [n,s] = U.useState(null)
      , [o,a] = U.useState(!1)
      , [c,f] = U.useState(!0)
      , [h,m] = U.useState(!0)
      , [g,y] = U.useState(null)
      , [x,N] = U.useState(!1)
      , [A,E] = U.useState(null);
    U.useEffect( () => {
        _()
    }
    , []);
    const _ = async () => {
        var B, M;
        try {
            m(!0),
            y(null);
            const W = yi({
                baseURL: "/api/apps/public",
                headers: {
                    "X-App-Id": wi.appId
                },
                token: wi.token,
                interceptResponses: !0
            });
            try {
                const X = await W.get(`/prod/public-settings/by-id/${wi.appId}`);
                E(X),
                wi.token ? await S() : (f(!1),
                a(!1),
                N(!0)),
                m(!1)
            } catch (X) {
                if (console.error("App state check failed:", X),
                X.status === 403 && ((M = (B = X.data) == null ? void 0 : B.extra_data) != null && M.reason)) {
                    const se = X.data.extra_data.reason;
                    y(se === "auth_required" ? {
                        type: "auth_required",
                        message: "Authentication required"
                    } : se === "user_not_registered" ? {
                        type: "user_not_registered",
                        message: "User not registered for this app"
                    } : {
                        type: se,
                        message: X.message
                    })
                } else
                    y({
                        type: "unknown",
                        message: X.message || "Failed to load app"
                    });
                m(!1),
                f(!1)
            }
        } catch (W) {
            console.error("Unexpected error:", W),
            y({
                type: "unknown",
                message: W.message || "An unexpected error occurred"
            }),
            m(!1),
            f(!1)
        }
    }
      , S = async () => {
        try {
            f(!0);
            const B = await xi.auth.me();
            s(B),
            a(!0),
            f(!1),
            N(!0)
        } catch (B) {
            console.error("User auth check failed:", B),
            f(!1),
            a(!1),
            N(!0),
            (B.status === 401 || B.status === 403) && y({
                type: "auth_required",
                message: "Authentication required"
            })
        }
    }
      , D = (B=!0) => {
        s(null),
        a(!1),
        B ? xi.auth.logout(window.location.href) : xi.auth.logout()
    }
      , Q = () => {
        xi.auth.redirectToLogin(window.location.href)
    }
    ;
    return v.jsx(Ug.Provider, {
        value: {
            user: n,
            isAuthenticated: o,
            isLoadingAuth: c,
            isLoadingPublicSettings: h,
            authError: g,
            appPublicSettings: A,
            authChecked: x,
            logout: D,
            navigateToLogin: Q,
            checkUserAuth: S,
            checkAppState: _
        },
        children: r
    })
}
  , lb = () => {
    const r = U.useContext(Ug);
    if (!r)
        throw new Error("useAuth must be used within an AuthProvider");
    return r
}
  , ab = () => v.jsx("div", {
    className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
    children: v.jsx("div", {
        className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
        children: v.jsxs("div", {
            className: "text-center",
            children: [v.jsx("div", {
                className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                children: v.jsx("svg", {
                    className: "w-8 h-8 text-orange-600",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: v.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    })
                })
            }), v.jsx("h1", {
                className: "text-3xl font-bold text-slate-900 mb-4",
                children: "Access Restricted"
            }), v.jsx("p", {
                className: "text-slate-600 mb-8",
                children: "You are not registered to use this application. Please contact the app administrator to request access."
            }), v.jsxs("div", {
                className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                children: [v.jsx("p", {
                    children: "If you believe this is an error, you can:"
                }), v.jsxs("ul", {
                    className: "list-disc list-inside mt-2 space-y-1",
                    children: [v.jsx("li", {
                        children: "Verify you are logged in with the correct account"
                    }), v.jsx("li", {
                        children: "Contact the app administrator for access"
                    }), v.jsx("li", {
                        children: "Try logging out and back in again"
                    })]
                })]
            })]
        })
    })
});
function zg({size: r="md", dark: n=!1}) {
    const o = {
        sm: {
            icon: 20,
            text: "text-base",
            gap: "gap-1.5"
        },
        md: {
            icon: 26,
            text: "text-xl",
            gap: "gap-2"
        },
        lg: {
            icon: 34,
            text: "text-2xl",
            gap: "gap-2.5"
        }
    }[r];
    return v.jsxs("div", {
        className: `flex items-center ${o.gap}`,
        children: [v.jsxs("svg", {
            width: o.icon,
            height: o.icon,
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [v.jsx("circle", {
                cx: "14",
                cy: "14",
                r: "9",
                stroke: n ? "#ffffff" : "#0D7A5F",
                strokeWidth: "2.5",
                fill: "none"
            }), v.jsx("path", {
                d: "M10.5 14l2.5 2.5 4.5-4.5",
                stroke: n ? "#ffffff" : "#0D7A5F",
                strokeWidth: "2.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), v.jsx("line", {
                x1: "20.5",
                y1: "20.5",
                x2: "27",
                y2: "27",
                stroke: n ? "#ffffff" : "#0D7A5F",
                strokeWidth: "2.5",
                strokeLinecap: "round"
            })]
        }), v.jsxs("span", {
            className: `font-heading font-bold tracking-tight ${o.text} leading-none`,
            children: [v.jsx("span", {
                style: {
                    color: n ? "#ffffff" : "#0D7A5F"
                },
                children: "Go"
            }), v.jsx("span", {
                style: {
                    color: n ? "rgba(255,255,255,0.75)" : "#0a5a46"
                },
                children: "Review"
            })]
        })]
    })
}
function ub() {
    return v.jsx("nav", {
        className: "bg-primary text-primary-foreground py-3.5 px-4 md:px-8 shadow-sm",
        children: v.jsxs("div", {
            className: "max-w-7xl mx-auto flex items-center justify-between",
            children: [v.jsx(zg, {
                size: "md",
                dark: !0
            }), v.jsxs("div", {
                className: "hidden md:flex items-center gap-8 text-sm font-body font-medium text-primary-foreground/80",
                children: [v.jsx("a", {
                    href: "#reviews",
                    className: "hover:text-white transition-colors",
                    children: "Reviews"
                }), v.jsx("a", {
                    href: "#comparison",
                    className: "hover:text-white transition-colors",
                    children: "Comparison"
                }), v.jsx("a", {
                    href: "#about",
                    className: "hover:text-white transition-colors",
                    children: "About"
                })]
            })]
        })
    })
}
function Yp(r, n) {
    if (typeof r == "function")
        return r(n);
    r != null && (r.current = n)
}
function cb(...r) {
    return n => {
        let s = !1;
        const o = r.map(a => {
            const c = Yp(a, n);
            return !s && typeof c == "function" && (s = !0),
            c
        }
        );
        if (s)
            return () => {
                for (let a = 0; a < o.length; a++) {
                    const c = o[a];
                    typeof c == "function" ? c() : Yp(r[a], null)
                }
            }
    }
}
var db = Symbol.for("react.lazy")
  , gl = cm[" use ".trim().toString()];
function fb(r) {
    return typeof r == "object" && r !== null && "then"in r
}
function Bg(r) {
    return r != null && typeof r == "object" && "$$typeof"in r && r.$$typeof === db && "_payload"in r && fb(r._payload)
}
function $g(r) {
    const n = pb(r)
      , s = U.forwardRef( (o, a) => {
        let {children: c, ...f} = o;
        Bg(c) && typeof gl == "function" && (c = gl(c._payload));
        const h = U.Children.toArray(c)
          , m = h.find(gb);
        if (m) {
            const g = m.props.children
              , y = h.map(x => x === m ? U.Children.count(g) > 1 ? U.Children.only(null) : U.isValidElement(g) ? g.props.children : null : x);
            return v.jsx(n, {
                ...f,
                ref: a,
                children: U.isValidElement(g) ? U.cloneElement(g, void 0, y) : null
            })
        }
        return v.jsx(n, {
            ...f,
            ref: a,
            children: c
        })
    }
    );
    return s.displayName = `${r}.Slot`,
    s
}
var hb = $g("Slot");
function pb(r) {
    const n = U.forwardRef( (s, o) => {
        let {children: a, ...c} = s;
        if (Bg(a) && typeof gl == "function" && (a = gl(a._payload)),
        U.isValidElement(a)) {
            const f = vb(a)
              , h = yb(c, a.props);
            return a.type !== U.Fragment && (h.ref = o ? cb(o, f) : f),
            U.cloneElement(a, h)
        }
        return U.Children.count(a) > 1 ? U.Children.only(null) : null
    }
    );
    return n.displayName = `${r}.SlotClone`,
    n
}
var mb = Symbol("radix.slottable");
function gb(r) {
    return U.isValidElement(r) && typeof r.type == "function" && "__radixId"in r.type && r.type.__radixId === mb
}
function yb(r, n) {
    const s = {
        ...n
    };
    for (const o in n) {
        const a = r[o]
          , c = n[o];
        /^on[A-Z]/.test(o) ? a && c ? s[o] = (...h) => {
            const m = c(...h);
            return a(...h),
            m
        }
        : a && (s[o] = a) : o === "style" ? s[o] = {
            ...a,
            ...c
        } : o === "className" && (s[o] = [a, c].filter(Boolean).join(" "))
    }
    return {
        ...r,
        ...s
    }
}
function vb(r) {
    var o, a;
    let n = (o = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : o.get
      , s = n && "isReactWarning"in n && n.isReactWarning;
    return s ? r.ref : (n = (a = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : a.get,
    s = n && "isReactWarning"in n && n.isReactWarning,
    s ? r.props.ref : r.props.ref || r.ref)
}
const wb = gc("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Ci = U.forwardRef( ({className: r, variant: n, size: s, asChild: o=!1, ...a}, c) => {
    const f = o ? hb : "button";
    return v.jsx(f, {
        className: or(wb({
            variant: n,
            size: s,
            className: r
        })),
        ref: c,
        ...a
    })
}
);
Ci.displayName = "Button";
function xb({heroImage: r}) {
    return v.jsx("section", {
        className: "relative bg-gradient-to-br from-white via-white to-secondary overflow-hidden",
        children: v.jsx("div", {
            className: "max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24",
            children: v.jsxs("div", {
                className: "grid md:grid-cols-2 gap-12 items-center",
                children: [v.jsxs("div", {
                    className: "space-y-8",
                    children: [v.jsxs("div", {
                        className: "inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full",
                        children: [v.jsx(cl, {
                            className: "w-4 h-4 text-accent fill-accent"
                        }), v.jsx("span", {
                            className: "text-xs font-body font-semibold text-primary uppercase tracking-wider",
                            children: "Evidence-Based Reviews Since 2019"
                        })]
                    }), v.jsxs("h1", {
                        className: "font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary",
                        children: ["The Gold Standard in", " ", v.jsx("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700",
                            children: "Liver Health Reviews."
                        })]
                    }), v.jsx("p", {
                        className: "font-body text-lg text-muted-foreground leading-relaxed max-w-lg",
                        children: "We analyze clinical research, verify ingredients, and rank the top liver health supplements so you don't have to guess."
                    }), v.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [v.jsxs(Ci, {
                            size: "lg",
                            className: "bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm font-semibold px-8 py-6 rounded-lg tracking-wide",
                            children: [v.jsx("a", {
                                href: "#comparison",
                                children: "VIEW TOP PICKS"
                            }), v.jsx(yc, {
                                className: "w-4 h-4 ml-2"
                            })]
                        }), v.jsx(Ci, {
                            variant: "outline",
                            size: "lg",
                            className: "border-primary/20 text-primary font-body text-sm font-semibold px-8 py-6 rounded-lg tracking-wide hover:bg-primary/5",
                            children: v.jsx("a", {
                                href: "#methodology",
                                children: "OUR METHODOLOGY"
                            })
                        })]
                    }), v.jsx("div", {
                        className: "flex items-center gap-6 pt-2",
                        children: ["50+ Products Tested", "MD Reviewed", "No Sponsorships"].map(n => v.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [v.jsx(Uu, {
                                className: "w-4 h-4 text-green-600"
                            }), v.jsx("span", {
                                className: "text-xs font-body font-medium text-muted-foreground",
                                children: n
                            })]
                        }, n))
                    })]
                }), v.jsxs("div", {
                    className: "relative flex justify-center",
                    children: [v.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/10 rounded-3xl"
                    }), v.jsx("img", {
                        src: r,
                        alt: "Trusted healthcare professional",
                        className: "relative rounded-2xl shadow-2xl max-h-[520px] object-cover w-full"
                    })]
                })]
            })
        })
    })
}
const Sb = [{
    title: "Poor Diet",
    desc: "High sugar and processed foods overload the liver."
}, {
    title: "Alcohol",
    desc: "Even moderate drinking can stress liver cells over time."
}, {
    title: "Medications",
    desc: "Common OTC drugs can burden liver metabolism."
}, {
    title: "Environmental Toxins",
    desc: "Pollutants and chemicals require constant detoxification."
}, {
    title: "Sedentary Lifestyle",
    desc: "Lack of exercise contributes to fatty liver disease."
}, {
    title: "Obesity",
    desc: "Excess weight is a leading cause of non-alcoholic fatty liver."
}];
function kb() {
    return v.jsx("section", {
        className: "py-20 px-4 md:px-8 bg-white",
        id: "about",
        children: v.jsxs("div", {
            className: "max-w-5xl mx-auto text-center",
            children: [v.jsx("h2", {
                className: "font-heading text-3xl md:text-4xl font-bold text-primary mb-4",
                children: "What Can Cause Liver Strain?"
            }), v.jsx("p", {
                className: "font-body text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed",
                children: "Modern lifestyles put enormous stress on your liver. Understanding the key risk factors is the first step toward protecting your most important detox organ."
            }), v.jsx("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                children: Sb.map(r => v.jsxs("div", {
                    className: "group bg-secondary/50 border border-border/50 rounded-xl p-6 text-left hover:shadow-lg hover:border-accent/30 transition-all duration-300",
                    children: [v.jsxs("div", {
                        className: "flex items-center gap-3 mb-3",
                        children: [v.jsx("div", {
                            className: "w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center",
                            children: v.jsx(T0, {
                                className: "w-4 h-4 text-accent"
                            })
                        }), v.jsx("h3", {
                            className: "font-body font-semibold text-primary",
                            children: r.title
                        })]
                    }), v.jsx("p", {
                        className: "font-body text-sm text-muted-foreground leading-relaxed",
                        children: r.desc
                    })]
                }, r.title))
            })]
        })
    })
}
const bb = ["Efficient toxin removal", "Balanced bile production", "Stable energy levels", "Clear skin & bright eyes", "Healthy metabolism"]
  , _b = ["Sluggish detoxification", "Digestive discomfort", "Chronic fatigue", "Skin problems & yellowing", "Weight gain & bloating"];
function Eb({healthyImg: r, strainedImg: n}) {
    return v.jsx("section", {
        className: "py-20 px-4 md:px-8 bg-secondary/30",
        children: v.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [v.jsx("h2", {
                className: "font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4",
                children: "Healthy vs. Strained Liver"
            }), v.jsx("p", {
                className: "font-body text-muted-foreground text-center max-w-2xl mx-auto mb-14",
                children: "See the clinical difference between a well-maintained liver and one under chronic stress."
            }), v.jsxs("div", {
                className: "grid md:grid-cols-2 gap-8",
                children: [v.jsxs("div", {
                    className: "bg-white rounded-2xl border border-green-200/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow",
                    children: [v.jsx("div", {
                        className: "bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 border-b border-green-100",
                        children: v.jsxs("h3", {
                            className: "font-heading text-xl font-bold text-green-800 flex items-center gap-2",
                            children: [v.jsx(Uu, {
                                className: "w-5 h-5 text-green-600"
                            }), "Healthy Function"]
                        })
                    }), v.jsxs("div", {
                        className: "p-6 flex flex-col items-center",
                        children: [v.jsx("img", {
                            src: r,
                            alt: "Healthy liver medical illustration",
                            className: "w-48 h-48 object-contain rounded-xl mb-6"
                        }), v.jsx("ul", {
                            className: "space-y-3 w-full",
                            children: bb.map(s => v.jsxs("li", {
                                className: "flex items-center gap-3 font-body text-sm text-foreground",
                                children: [v.jsx(Uu, {
                                    className: "w-4 h-4 text-green-500 shrink-0"
                                }), s]
                            }, s))
                        })]
                    })]
                }), v.jsxs("div", {
                    className: "bg-white rounded-2xl border border-red-200/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow",
                    children: [v.jsx("div", {
                        className: "bg-gradient-to-r from-red-50 to-orange-50 px-6 py-4 border-b border-red-100",
                        children: v.jsxs("h3", {
                            className: "font-heading text-xl font-bold text-red-800 flex items-center gap-2",
                            children: [v.jsx(qh, {
                                className: "w-5 h-5 text-red-500"
                            }), "Strained State"]
                        })
                    }), v.jsxs("div", {
                        className: "p-6 flex flex-col items-center",
                        children: [v.jsx("img", {
                            src: n,
                            alt: "Strained liver medical illustration",
                            className: "w-48 h-48 object-contain rounded-xl mb-6"
                        }), v.jsx("ul", {
                            className: "space-y-3 w-full",
                            children: _b.map(s => v.jsxs("li", {
                                className: "flex items-center gap-3 font-body text-sm text-foreground",
                                children: [v.jsx(qh, {
                                    className: "w-4 h-4 text-red-400 shrink-0"
                                }), s]
                            }, s))
                        })]
                    })]
                })]
            })]
        })
    })
}
const Cb = gc("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Rb({className: r, variant: n, ...s}) {
    return v.jsx("div", {
        className: or(Cb({
            variant: n
        }), r),
        ...s
    })
}
const Tb = [{
    rank: 1,
    name: "LiverPure Pro",
    clinicalValue: 9.8,
    ingredientQuality: 9.7,
    safety: 9.9,
    overall: 9.8,
    isWinner: !0
}, {
    rank: 2,
    name: "HepaShield Elite",
    clinicalValue: 9.4,
    ingredientQuality: 9.3,
    safety: 9.5,
    overall: 9.4
}, {
    rank: 3,
    name: "Hepato Complex",
    clinicalValue: 9,
    ingredientQuality: 9.1,
    safety: 9.2,
    overall: 9.1
}, {
    rank: 4,
    name: "Vital Liver Complete",
    clinicalValue: 8.7,
    ingredientQuality: 8.5,
    safety: 9,
    overall: 8.7
}, {
    rank: 5,
    name: "MaxCure Hepatix",
    clinicalValue: 8.3,
    ingredientQuality: 8.4,
    safety: 8.6,
    overall: 8.4
}, {
    rank: 6,
    name: "Regent's Liver",
    clinicalValue: 8,
    ingredientQuality: 7.9,
    safety: 8.5,
    overall: 8.1
}];
function Fu({score: r}) {
    const n = r >= 9.5 ? "text-green-700 font-bold" : r >= 9 ? "text-green-600 font-semibold" : "text-foreground";
    return v.jsx("td", {
        className: `px-4 py-4 text-center font-body text-sm ${n}`,
        children: r
    })
}
function Nb({productImages: r}) {
    return v.jsx("section", {
        className: "py-20 px-4 md:px-8 bg-white",
        id: "comparison",
        children: v.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [v.jsxs("div", {
                className: "text-center mb-12",
                children: [v.jsx(Rb, {
                    className: "bg-accent/10 text-accent border-accent/20 font-body text-xs font-semibold mb-4",
                    children: "Updated May 2026"
                }), v.jsx("h2", {
                    className: "font-heading text-3xl md:text-4xl font-bold text-primary",
                    children: "2026: Top 6 Liver Health Supplements"
                }), v.jsx("p", {
                    className: "font-body text-muted-foreground mt-3 max-w-xl mx-auto",
                    children: "Ranked by our medical review board based on clinical evidence, ingredient purity, and safety profiles."
                })]
            }), v.jsx("div", {
                className: "overflow-x-auto rounded-xl border border-slate-200 shadow-sm",
                children: v.jsxs("table", {
                    className: "w-full min-w-[700px]",
                    children: [v.jsx("thead", {
                        children: v.jsxs("tr", {
                            className: "bg-primary text-primary-foreground",
                            children: [v.jsx("th", {
                                className: "px-4 py-4 text-left font-body text-xs font-semibold uppercase tracking-wider",
                                children: "#"
                            }), v.jsx("th", {
                                className: "px-4 py-4 text-left font-body text-xs font-semibold uppercase tracking-wider",
                                children: "Product"
                            }), v.jsx("th", {
                                className: "px-4 py-4 text-center font-body text-xs font-semibold uppercase tracking-wider",
                                children: "Clinical Value"
                            }), v.jsx("th", {
                                className: "px-4 py-4 text-center font-body text-xs font-semibold uppercase tracking-wider",
                                children: "Ingredient Quality"
                            }), v.jsx("th", {
                                className: "px-4 py-4 text-center font-body text-xs font-semibold uppercase tracking-wider",
                                children: "Safety"
                            }), v.jsx("th", {
                                className: "px-4 py-4 text-center font-body text-xs font-semibold uppercase tracking-wider",
                                children: "Overall"
                            }), v.jsx("th", {
                                className: "px-4 py-4 text-center font-body text-xs font-semibold uppercase tracking-wider"
                            })]
                        })
                    }), v.jsx("tbody", {
                        children: Tb.map( (n, s) => v.jsxs("tr", {
                            className: `border-b border-slate-100 transition-colors ${n.isWinner ? "bg-emerald-50/70 hover:bg-emerald-50" : s % 2 === 0 ? "bg-white hover:bg-slate-50/50" : "bg-slate-50/30 hover:bg-slate-50/50"}`,
                            children: [v.jsx("td", {
                                className: "px-4 py-4",
                                children: v.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [v.jsx("span", {
                                        className: `font-body font-bold text-sm ${n.isWinner ? "text-accent" : "text-muted-foreground"}`,
                                        children: n.rank
                                    }), n.isWinner && v.jsxs("span", {
                                        className: "inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-[10px] font-body font-bold rounded-full shadow-sm",
                                        children: [v.jsx(p0, {
                                            className: "w-3 h-3"
                                        }), "EDITOR'S CHOICE"]
                                    })]
                                })
                            }), v.jsx("td", {
                                className: "px-4 py-4",
                                children: v.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [v.jsx("img", {
                                        src: r[s],
                                        alt: n.name,
                                        className: "w-10 h-10 rounded-lg object-cover border border-slate-100"
                                    }), v.jsx("span", {
                                        className: `font-body font-semibold text-sm ${n.isWinner ? "text-primary" : "text-foreground"}`,
                                        children: n.name
                                    })]
                                })
                            }), v.jsx(Fu, {
                                score: n.clinicalValue
                            }), v.jsx(Fu, {
                                score: n.ingredientQuality
                            }), v.jsx(Fu, {
                                score: n.safety
                            }), v.jsx("td", {
                                className: "px-4 py-4 text-center",
                                children: v.jsxs("div", {
                                    className: "flex items-center justify-center gap-1",
                                    children: [v.jsx(cl, {
                                        className: `w-3.5 h-3.5 ${n.overall >= 9.5 ? "text-emerald-600 fill-emerald-600" : "text-slate-300 fill-slate-300"}`
                                    }), v.jsx("span", {
                                        className: `font-body font-bold text-sm ${n.isWinner ? "text-accent" : "text-foreground"}`,
                                        children: n.overall
                                    })]
                                })
                            }), v.jsx("td", {
                                className: "px-4 py-4 text-center",
                                children: v.jsxs(Ci, {
                                    size: "sm",
                                    className: `font-body text-xs font-semibold px-5 py-2 rounded-md ${n.isWinner ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "bg-primary hover:bg-primary/90 text-primary-foreground"}`,
                                    children: ["Read Price ", v.jsx(yc, {
                                        className: "w-3 h-3 ml-1"
                                    })]
                                })
                            })]
                        }, n.rank))
                    })]
                })
            })]
        })
    })
}
function Pb(r, n=[]) {
    let s = [];
    function o(c, f) {
        const h = U.createContext(f);
        h.displayName = c + "Context";
        const m = s.length;
        s = [...s, f];
        const g = x => {
            var D;
            const {scope: N, children: A, ...E} = x
              , _ = ((D = N == null ? void 0 : N[r]) == null ? void 0 : D[m]) || h
              , S = U.useMemo( () => E, Object.values(E));
            return v.jsx(_.Provider, {
                value: S,
                children: A
            })
        }
        ;
        g.displayName = c + "Provider";
        function y(x, N) {
            var _;
            const A = ((_ = N == null ? void 0 : N[r]) == null ? void 0 : _[m]) || h
              , E = U.useContext(A);
            if (E)
                return E;
            if (f !== void 0)
                return f;
            throw new Error(`\`${x}\` must be used within \`${c}\``)
        }
        return [g, y]
    }
    const a = () => {
        const c = s.map(f => U.createContext(f));
        return function(h) {
            const m = (h == null ? void 0 : h[r]) || c;
            return U.useMemo( () => ({
                [`__scope${r}`]: {
                    ...h,
                    [r]: m
                }
            }), [h, m])
        }
    }
    ;
    return a.scopeName = r,
    [o, Ob(a, ...n)]
}
function Ob(...r) {
    const n = r[0];
    if (r.length === 1)
        return n;
    const s = () => {
        const o = r.map(a => ({
            useScope: a(),
            scopeName: a.scopeName
        }));
        return function(c) {
            const f = o.reduce( (h, {useScope: m, scopeName: g}) => {
                const x = m(c)[`__scope${g}`];
                return {
                    ...h,
                    ...x
                }
            }
            , {});
            return U.useMemo( () => ({
                [`__scope${n.scopeName}`]: f
            }), [f])
        }
    }
    ;
    return s.scopeName = n.scopeName,
    s
}
var Ab = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , Vg = Ab.reduce( (r, n) => {
    const s = $g(`Primitive.${n}`)
      , o = U.forwardRef( (a, c) => {
        const {asChild: f, ...h} = a
          , m = f ? s : n;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(m, {
            ...h,
            ref: c
        })
    }
    );
    return o.displayName = `Primitive.${n}`,
    {
        ...r,
        [n]: o
    }
}
, {})
  , Ic = "Progress"
  , Dc = 100
  , [jb] = Pb(Ic)
  , [Lb,Ib] = jb(Ic)
  , qg = U.forwardRef( (r, n) => {
    const {__scopeProgress: s, value: o=null, max: a, getValueLabel: c=Db, ...f} = r;
    (a || a === 0) && !Xp(a) && console.error(Mb(`${a}`, "Progress"));
    const h = Xp(a) ? a : Dc;
    o !== null && !Jp(o, h) && console.error(Fb(`${o}`, "Progress"));
    const m = Jp(o, h) ? o : null
      , g = yl(m) ? c(m, h) : void 0;
    return v.jsx(Lb, {
        scope: s,
        value: m,
        max: h,
        children: v.jsx(Vg.div, {
            "aria-valuemax": h,
            "aria-valuemin": 0,
            "aria-valuenow": yl(m) ? m : void 0,
            "aria-valuetext": g,
            role: "progressbar",
            "data-state": Wg(m, h),
            "data-value": m ?? void 0,
            "data-max": h,
            ...f,
            ref: n
        })
    })
}
);
qg.displayName = Ic;
var Hg = "ProgressIndicator"
  , Qg = U.forwardRef( (r, n) => {
    const {__scopeProgress: s, ...o} = r
      , a = Ib(Hg, s);
    return v.jsx(Vg.div, {
        "data-state": Wg(a.value, a.max),
        "data-value": a.value ?? void 0,
        "data-max": a.max,
        ...o,
        ref: n
    })
}
);
Qg.displayName = Hg;
function Db(r, n) {
    return `${Math.round(r / n * 100)}%`
}
function Wg(r, n) {
    return r == null ? "indeterminate" : r === n ? "complete" : "loading"
}
function yl(r) {
    return typeof r == "number"
}
function Xp(r) {
    return yl(r) && !isNaN(r) && r > 0
}
function Jp(r, n) {
    return yl(r) && !isNaN(r) && r <= n && r >= 0
}
function Mb(r, n) {
    return `Invalid prop \`max\` of value \`${r}\` supplied to \`${n}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Dc}\`.`
}
function Fb(r, n) {
    return `Invalid prop \`value\` of value \`${r}\` supplied to \`${n}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Dc} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`
}
var Kg = qg
  , Ub = Qg;
const Gg = U.forwardRef( ({className: r, value: n, ...s}, o) => v.jsx(Kg, {
    ref: o,
    className: or("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", r),
    ...s,
    children: v.jsx(Ub, {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: {
            transform: `translateX(-${100 - (n || 0)}%)`
        }
    })
}));
Gg.displayName = Kg.displayName;
const zb = [{
    label: "Purity",
    icon: g0
}, {
    label: "Dosage",
    icon: _0
}, {
    label: "Safety",
    icon: mm
}, {
    label: "Efficacy",
    icon: k0
}, {
    label: "Value",
    icon: x0
}];
function Bb({product: r}) {
    const {name: n, image: s, overall: o, tagline: a, pros: c, keyIngredients: f, ratings: h, isTop: m} = r;
    return v.jsxs("div", {
        className: `bg-white rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${m ? "border-amber-300/60 shadow-md ring-1 ring-amber-200/40" : "border-slate-200 shadow-sm"}`,
        children: [m && v.jsxs("div", {
            className: "bg-gradient-to-r from-emerald-600 to-teal-500 px-4 py-2 flex items-center justify-center gap-2",
            children: [v.jsx(cl, {
                className: "w-4 h-4 text-white fill-white"
            }), v.jsx("span", {
                className: "text-white font-body text-xs font-bold uppercase tracking-wider",
                children: "#1 Editor's Choice — Best Overall"
            })]
        }), v.jsx("div", {
            className: "p-6 md:p-8",
            children: v.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: [v.jsxs("div", {
                    className: "flex flex-col items-center text-center",
                    children: [v.jsx("img", {
                        src: s,
                        alt: n,
                        className: "w-40 h-52 object-contain rounded-xl mb-4"
                    }), v.jsx("h3", {
                        className: "font-heading text-xl font-bold text-primary mb-1",
                        children: n
                    }), v.jsx("div", {
                        className: "flex items-center gap-1 mb-2",
                        children: [...Array(5)].map( (g, y) => v.jsx(cl, {
                            className: "w-4 h-4 text-emerald-500 fill-emerald-500"
                        }, y))
                    }), v.jsx("div", {
                        className: "text-3xl font-heading font-bold text-accent",
                        children: o
                    }), v.jsx("span", {
                        className: "text-xs font-body text-muted-foreground",
                        children: "Overall Score"
                    }), v.jsxs(Ci, {
                        className: "mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body text-xs font-semibold px-6 py-5 rounded-lg",
                        children: ["Read Price ", v.jsx(yc, {
                            className: "w-3.5 h-3.5 ml-1.5"
                        })]
                    })]
                }), v.jsxs("div", {
                    className: "space-y-4",
                    children: [v.jsxs("div", {
                        children: [v.jsx("h4", {
                            className: "font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2",
                            children: "Overview"
                        }), v.jsx("p", {
                            className: "font-body text-sm text-foreground leading-relaxed",
                            children: a
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("h4", {
                            className: "font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2",
                            children: "Key Highlights"
                        }), v.jsx("ul", {
                            className: "space-y-2",
                            children: c.map(g => v.jsxs("li", {
                                className: "flex items-start gap-2 font-body text-sm text-foreground",
                                children: [v.jsx(mm, {
                                    className: "w-4 h-4 text-green-500 shrink-0 mt-0.5"
                                }), g]
                            }, g))
                        })]
                    }), v.jsxs("div", {
                        children: [v.jsx("h4", {
                            className: "font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2",
                            children: "Key Ingredients"
                        }), v.jsx("div", {
                            className: "flex flex-wrap gap-2",
                            children: f.map(g => v.jsx("span", {
                                className: "px-3 py-1 bg-primary/5 border border-primary/10 rounded-full font-body text-xs font-medium text-primary",
                                children: g
                            }, g))
                        })]
                    })]
                }), v.jsxs("div", {
                    className: "space-y-4",
                    children: [v.jsx("h4", {
                        className: "font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3",
                        children: "Clinical Analysis"
                    }), zb.map( (g, y) => {
                        const x = h[y]
                          , N = g.icon;
                        return v.jsxs("div", {
                            className: "space-y-1.5",
                            children: [v.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [v.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [v.jsx(N, {
                                        className: "w-3.5 h-3.5 text-primary/60"
                                    }), v.jsx("span", {
                                        className: "font-body text-xs font-medium text-foreground",
                                        children: g.label
                                    })]
                                }), v.jsxs("span", {
                                    className: "font-body text-xs font-bold text-primary",
                                    children: [x, "/10"]
                                })]
                            }), v.jsx(Gg, {
                                value: x * 10,
                                className: "h-2 bg-slate-100"
                            })]
                        }, g.label)
                    }
                    )]
                })]
            })
        })]
    })
}
function $b({productImages: r}) {
    const n = [{
        name: "LiverPure Pro",
        image: r[0],
        overall: "9.8",
        isTop: !0,
        tagline: "The highest-rated liver supplement of 2026. Clinically dosed with patented Silybin-Phosphatidylcholine complex for maximum bioavailability.",
        pros: ["300mg Patented Milk Thistle Extract (Siliphos®)", "Third-party tested for heavy metals & purity", "Clinically proven 28-day liver enzyme improvement"],
        keyIngredients: ["Siliphos®", "NAC", "ALA", "Artichoke Extract", "Zinc"],
        ratings: [9.8, 9.7, 9.9, 9.8, 9.5]
    }, {
        name: "HepaShield Elite",
        image: r[1],
        overall: "9.4",
        tagline: "A close runner-up featuring a comprehensive antioxidant blend for daily liver protection and regeneration support.",
        pros: ["Comprehensive 12-ingredient formula", "GMP certified manufacturing", "Excellent clinical trial data on AST/ALT reduction"],
        keyIngredients: ["Milk Thistle", "Turmeric", "Dandelion Root", "Schisandra"],
        ratings: [9.4, 9.3, 9.5, 9.3, 9.2]
    }, {
        name: "Hepato Complex",
        image: r[2],
        overall: "9.1",
        tagline: "A science-forward formula that focuses on phase I and phase II liver detoxification pathway support.",
        pros: ["Dual-phase detox support formula", "Contains bioavailable curcumin (BCM-95)", "Vegan capsules, no artificial fillers"],
        keyIngredients: ["BCM-95 Curcumin", "Glutathione", "B-Complex", "Selenium"],
        ratings: [9, 9.1, 9.2, 8.9, 9]
    }, {
        name: "Vital Liver Complete",
        image: r[3],
        overall: "8.7",
        tagline: "An affordable option with solid ingredient quality, ideal for those starting their liver health journey.",
        pros: ["Great entry-level price point", "Contains 80% Silymarin standardization", "Positive customer satisfaction ratings"],
        keyIngredients: ["Milk Thistle", "Artichoke", "Choline", "Vitamin E"],
        ratings: [8.7, 8.5, 9, 8.4, 9.2]
    }, {
        name: "MaxCure Hepatix",
        image: r[4],
        overall: "8.4",
        tagline: "Features a unique herbal-enzyme blend, though clinical evidence is somewhat limited compared to top picks.",
        pros: ["Unique digestive enzyme addition", "Pleasant taste for liquid format", "Good for sensitive stomachs"],
        keyIngredients: ["Milk Thistle", "Digestive Enzymes", "Ginger", "Peppermint"],
        ratings: [8.3, 8.4, 8.6, 8.2, 8.5]
    }, {
        name: "Regent's Liver",
        image: r[5],
        overall: "8.1",
        tagline: "A traditional herbal approach to liver support. Decent quality but lacks the clinical depth of higher-ranked options.",
        pros: ["Traditional herbal formula", "Available in most retail stores", "Long brand history"],
        keyIngredients: ["Milk Thistle", "Dandelion", "Burdock Root", "Yellow Dock"],
        ratings: [8, 7.9, 8.5, 7.8, 8.3]
    }];
    return v.jsx("section", {
        className: "py-20 px-4 md:px-8 bg-secondary/30",
        id: "reviews",
        children: v.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [v.jsxs("div", {
                className: "text-center mb-14",
                children: [v.jsx("h2", {
                    className: "font-heading text-3xl md:text-4xl font-bold text-primary",
                    children: "In-Depth Professional Reviews"
                }), v.jsx("p", {
                    className: "font-body text-muted-foreground mt-3 max-w-xl mx-auto",
                    children: "Each product undergoes our rigorous 5-point clinical analysis framework."
                })]
            }), v.jsx("div", {
                className: "space-y-8",
                children: n.map(s => v.jsx(Bb, {
                    product: s
                }, s.name))
            })]
        })
    })
}
function Vb() {
    return v.jsx("footer", {
        className: "bg-primary text-primary-foreground py-12 px-4 md:px-8",
        children: v.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [v.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8 mb-10",
                children: [v.jsxs("div", {
                    children: [v.jsx("div", {
                        className: "mb-4",
                        children: v.jsx(zg, {
                            size: "md",
                            dark: !0
                        })
                    }), v.jsx("p", {
                        className: "font-body text-sm text-primary-foreground/60 leading-relaxed max-w-xs",
                        children: "Independent, evidence-based liver health supplement reviews. Not sponsored. Not biased."
                    })]
                }), v.jsxs("div", {
                    children: [v.jsx("h4", {
                        className: "font-body font-semibold text-sm mb-4 text-primary-foreground/80 uppercase tracking-wider",
                        children: "Resources"
                    }), v.jsxs("ul", {
                        className: "space-y-2 font-body text-sm text-primary-foreground/60",
                        children: [v.jsx("li", {
                            children: v.jsx("a", {
                                href: "#",
                                className: "hover:text-accent transition-colors",
                                children: "Our Methodology"
                            })
                        }), v.jsx("li", {
                            children: v.jsx("a", {
                                href: "#",
                                className: "hover:text-accent transition-colors",
                                children: "About Our Team"
                            })
                        }), v.jsx("li", {
                            children: v.jsx("a", {
                                href: "#",
                                className: "hover:text-accent transition-colors",
                                children: "Contact Us"
                            })
                        })]
                    })]
                }), v.jsxs("div", {
                    children: [v.jsx("h4", {
                        className: "font-body font-semibold text-sm mb-4 text-primary-foreground/80 uppercase tracking-wider",
                        children: "Legal"
                    }), v.jsxs("ul", {
                        className: "space-y-2 font-body text-sm text-primary-foreground/60",
                        children: [v.jsx("li", {
                            children: v.jsx("a", {
                                href: "#",
                                className: "hover:text-accent transition-colors",
                                children: "Privacy Policy"
                            })
                        }), v.jsx("li", {
                            children: v.jsx("a", {
                                href: "#",
                                className: "hover:text-accent transition-colors",
                                children: "Terms of Service"
                            })
                        }), v.jsx("li", {
                            children: v.jsx("a", {
                                href: "#",
                                className: "hover:text-accent transition-colors",
                                children: "FDA Disclaimer"
                            })
                        })]
                    })]
                })]
            }), v.jsx("div", {
                className: "border-t border-primary-foreground/10 pt-6",
                children: v.jsx("p", {
                    className: "font-body text-xs text-primary-foreground/40 text-center leading-relaxed",
                    children: "Disclaimer: The information on this site is not intended to diagnose, treat, cure, or prevent any disease. Statements have not been evaluated by the FDA. Consult your physician before starting any supplement. © 2026 GoReview — All Rights Reserved."
                })
            })]
        })
    })
}
const mi = {
    hero: "https://media.base44.com/images/public/6a0de80f9b876e2317dcac42/3abc40c5f_generated_e17b2e44.png",
    healthyLiver: "https://media.base44.com/images/public/6a0de80f9b876e2317dcac42/879ca58ee_generated_22684939.png",
    strainedLiver: "https://media.base44.com/images/public/6a0de80f9b876e2317dcac42/906cd4fbc_generated_14fc2d05.png",
    products: ["https://media.base44.com/images/public/6a0de80f9b876e2317dcac42/7c2b65df0_generated_8bfcdbd2.png", "https://media.base44.com/images/public/6a0de80f9b876e2317dcac42/c7a7cba87_generated_9805ef8f.png", "https://media.base44.com/images/public/6a0de80f9b876e2317dcac42/2e7062011_generated_79384da9.png", "https://media.base44.com/images/public/6a0de80f9b876e2317dcac42/c8c399019_generated_53f4be1b.png", "https://media.base44.com/images/public/6a0de80f9b876e2317dcac42/21591bfdf_generated_2dba7953.png", "https://media.base44.com/images/public/6a0de80f9b876e2317dcac42/6a017b921_generated_1cc0bd5f.png"]
};
function qb() {
    return v.jsxs("div", {
        className: "min-h-screen bg-background font-body",
        children: [v.jsx(ub, {}), v.jsx(xb, {
            heroImage: mi.hero
        }), v.jsx(kb, {}), v.jsx(Eb, {
            healthyImg: mi.healthyLiver,
            strainedImg: mi.strainedLiver
        }), v.jsx(Nb, {
            productImages: mi.products
        }), v.jsx($b, {
            productImages: mi.products
        }), v.jsx(Vb, {})]
    })
}
const Hb = () => {
    const {isLoadingAuth: r, isLoadingPublicSettings: n, authError: s, navigateToLogin: o} = lb();
    if (n || r)
        return v.jsx("div", {
            className: "fixed inset-0 flex items-center justify-center",
            children: v.jsx("div", {
                className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
            })
        });
    if (s) {
        if (s.type === "user_not_registered")
            return v.jsx(ab, {});
        if (s.type === "auth_required")
            return o(),
            null
    }
    return v.jsxs(Hx, {
        children: [v.jsx(nc, {
            path: "/",
            element: v.jsx(qb, {})
        }), v.jsx(nc, {
            path: "*",
            element: v.jsx(ib, {})
        })]
    })
}
;
function Qb() {
    return v.jsx(ob, {
        children: v.jsxs(Kw, {
            client: lx,
            children: [v.jsx(Kx, {
                children: v.jsx(Hb, {})
            }), v.jsx(kw, {})]
        })
    })
}
n0.createRoot(document.getElementById("root")).render(v.jsx(Qb, {}));
