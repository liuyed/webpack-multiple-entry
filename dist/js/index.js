webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "1.12.4",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
      return e.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    }, pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function each(a) {
      return n.each(this, a);
    }, map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (e = arguments[h])) for (d in e) {
        a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
      }
    }return g;
  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === n.type(a);
    }, isArray: Array.isArray || function (a) {
      return "array" === n.type(a);
    }, isWindow: function isWindow(a) {
      return null != a && a == a.window;
    }, isNumeric: function isNumeric(a) {
      var b = a && a.toString();return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, isPlainObject: function isPlainObject(a) {
      var b;if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;try {
        if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }if (!l.ownFirst) for (b in a) {
        return k.call(a, b);
      }for (b in a) {}return void 0 === b || k.call(a, b);
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? i[j.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(b) {
      b && n.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    }, camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (s(a)) {
        for (c = a.length; c > d; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      var d;if (b) {
        if (h) return h.call(b, a, c);for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
          if (c in b && b[c] === a) return c;
        }
      }return -1;
    }, merge: function merge(a, b) {
      var c = +b.length,
          d = 0,
          e = a.length;while (c > d) {
        a[e++] = b[d++];
      }if (c !== c) while (void 0 !== b[d]) {
        a[e++] = b[d++];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];if (s(a)) for (d = a.length; d > g; g++) {
        e = b(a[g], g, c), null != e && h.push(e);
      } else for (g in a) {
        e = b(a[g], g, c), null != e && h.push(e);
      }return f.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, f;return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function d() {
        return a.apply(b || this, c.concat(e.call(arguments)));
      }, d.guid = a.guid = a.guid || n.guid++, d) : void 0;
    }, now: function now() {
      return +new Date();
    }, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function ca(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function da() {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";while (h--) {
              r[h] = l + " " + qa(r[h]);
            }s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(Q, "$1"), b, d, e);
    }function ga() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ha(a) {
      return a[u] = !0, a;
    }function ia(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ja(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return ka(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }), contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function enabled(a) {
          return a.disabled === !1;
        }, disabled: function disabled(a) {
          return a.disabled === !0;
        }, checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return Y.test(a.nodeName);
        }, input: function input(a) {
          return X.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: na(function () {
          return [0];
        }), last: na(function (a, b) {
          return [b - 1];
        }), eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }return a;
        }), odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }return a;
        }), lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = la(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = ma(b);
    }function pa() {}pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }return d;
    }function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];if (i[d] = k, k[2] = a(b, c, g)) return !0;
          }
        }
      };
    }function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        fa(a, b[d], c);
      }return c;
    }function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
          }m.push(c);
        }
      }return sa(m);
    }function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = F.call(i));
            }u = ua(u);
          }H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ha(f) : f;
    }return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, xa(e, d)), f.selector = a;
      }return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = W.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = function u(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      v = function v(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
    }return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c;
    });
  }n.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({ find: function find(a) {
      var b,
          c = [],
          d = this,
          e = d.length;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; e > b; b++) {
          if (n.contains(d[b], this)) return !0;
        }
      }));for (b = 0; e > b; b++) {
        n.find(a, d[b], c);
      }return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
    }, filter: function filter(a) {
      return this.pushStack(z(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    }, is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    } });var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || A, "string" == typeof a) {
      if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }if (f = d.getElementById(e[2]), f && f.parentNode) {
        if (f.id !== e[2]) return A.find(a);this.length = 1, this[0] = f;
      }return this.context = d, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };C.prototype = n.fn, A = n(d);var D = /^(?:parents|prev(?:Until|All))/,
      E = { children: !0, contents: !0, next: !0, prev: !0 };n.fn.extend({ has: function has(a) {
      var b,
          c = n(a, this),
          d = c.length;return this.filter(function () {
        for (b = 0; d > b; b++) {
          if (n.contains(this, c[b])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function F(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);return a;
  }n.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return u(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    }, next: function next(a) {
      return F(a, "nextSibling");
    }, prev: function prev(a) {
      return F(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return v(a.firstChild);
    }, contents: function contents(a) {
      return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes);
    } }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e);
    };
  });var G = /\S+/g;function H(a) {
    var b = {};return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return n.each(arguments, function (a, b) {
          var c;while ((c = n.inArray(b, f, c)) > -1) {
            f.splice(c, 1), h >= c && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = !0, c || j.disable(), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  }, n.extend({ Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = { state: function state() {
          return c;
        }, always: function always() {
          return e.done(arguments).fail(arguments), this;
        }, then: function then() {
          var a = arguments;return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function when(a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      }return f || g.resolveWith(k, c), g.promise();
    } });var I;n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    } });function J() {
    d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
  }function K() {
    (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready());
  }n.ready.promise = function (b) {
    if (!I) if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);else {
      d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);var c = !1;try {
        c = null == a.frameElement && d.documentElement;
      } catch (e) {}c && c.doScroll && !function f() {
        if (!n.isReady) {
          try {
            c.doScroll("left");
          } catch (b) {
            return a.setTimeout(f, 50);
          }J(), n.ready();
        }
      }();
    }return I.promise(b);
  }, n.ready.promise();var L;for (L in n(l)) {
    break;
  }l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () {
    var a, b, c, e;c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e));
  }), function () {
    var a = d.createElement("div");l.deleteExpando = !0;try {
      delete a.test;
    } catch (b) {
      l.deleteExpando = !1;
    }a = null;
  }();var M = function M(a) {
    var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
  },
      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
        } catch (e) {}n.data(a, b, c);
      } else c = void 0;
    }return c;
  }function Q(a) {
    var b;for (b in a) {
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    }return !0;
  }function R(a, b, d, e) {
    if (M(a)) {
      var f,
          g,
          h = n.expando,
          i = a.nodeType,
          j = i ? n.cache : a,
          k = i ? a[h] : a[h] && h;if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: n.noop }), "object" != (typeof b === "undefined" ? "undefined" : _typeof(b)) && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f;
    }
  }function S(a, b, c) {
    if (M(a)) {
      var d,
          e,
          f = a.nodeType,
          g = f ? n.cache : a,
          h = f ? a[n.expando] : n.expando;if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;while (e--) {
            delete d[b[e]];
          }if (c ? !Q(d) : !n.isEmptyObject(d)) return;
        }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0);
      }
    }
  }n.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function hasData(a) {
      return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a);
    }, data: function data(a, b, c) {
      return R(a, b, c);
    }, removeData: function removeData(a, b) {
      return S(a, b);
    }, _data: function _data(a, b, c) {
      return R(a, b, c, !0);
    }, _removeData: function _removeData(a, b) {
      return S(a, b, !0);
    } }), n.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
          }n._data(f, "parsedAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        n.data(this, a);
      }) : arguments.length > 1 ? this.each(function () {
        n.data(this, a, b);
      }) : f ? P(f, a, n.data(f, a)) : void 0;
    }, removeData: function removeData(a) {
      return this.each(function () {
        n.removeData(this, a);
      });
    } }), n.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return n._data(a, c) || n._data(a, c, { empty: n.Callbacks("once memory").add(function () {
          n._removeData(a, b + "queue"), n._removeData(a, c);
        }) });
    } }), n.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } }), function () {
    var a;l.shrinkWrapBlocks = function () {
      if (null != a) return a;a = !1;var b, c, e;return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0;
    };
  }();var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
      V = ["Top", "Right", "Bottom", "Left"],
      W = function W(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };function X(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, n.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var Y = function Y(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === n.type(c)) {
      e = !0;for (h in c) {
        Y(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      Z = /^(?:checkbox|radio)$/i,
      $ = /<([\w:-]+)/,
      _ = /^$|\/(?:java|ecma)script/i,
      aa = /^\s+/,
      ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a) {
    var b = ba.split("|"),
        c = a.createDocumentFragment();if (c.createElement) while (b.length) {
      c.createElement(b.pop());
    }return c;
  }!function () {
    var a = d.createElement("div"),
        b = d.createDocumentFragment(),
        c = d.createElement("input");a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando);
  }();var da = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;function ea(a, b) {
    var c,
        d,
        e = 0,
        f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
      !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
    }return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f;
  }function fa(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) {
      n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
    }
  }var ga = /<|&#?\w+;/,
      ha = /<tbody/i;function ia(a) {
    Z.test(a.type) && (a.defaultChecked = a.checked);
  }function ja(a, b, c, d, e) {
    for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) {
      if (g = a[r], g || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);else if (ga.test(g)) {
        i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];while (f--) {
          i = i.lastChild;
        }if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
          g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;while (f--) {
            n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
          }
        }n.merge(q, i.childNodes), i.textContent = "";while (i.firstChild) {
          i.removeChild(i.firstChild);
        }i = p.lastChild;
      } else q.push(b.createTextNode(g));
    }i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;while (g = q[r++]) {
      if (d && n.inArray(g, d) > -1) e && e.push(g);else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
        f = 0;while (g = i[f++]) {
          _.test(g.type || "") && c.push(g);
        }
      }
    }return i = null, p;
  }!function () {
    var b,
        c,
        e = d.createElement("div");for (b in { submit: !0, change: !0, focusin: !0 }) {
      c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
    }e = null;
  }();var ka = /^(?:input|select|textarea)$/i,
      la = /^key/,
      ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      na = /^(?:focusinfocus|focusoutblur)$/,
      oa = /^([^.]*)(?:\.(.+)|)/;function pa() {
    return !0;
  }function qa() {
    return !1;
  }function ra() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function sa(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        sa(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }n.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = n._data(a);if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments);
        }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;while (h--) {
          f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
        }a = null;
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = n.hasData(a) && n._data(a);if (r && (k = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;while (j--) {
          if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;while (f--) {
              g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
            }i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o]);
          } else for (o in k) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
      }
    }, trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) {
            p.push(i), m = i;
          }m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a);
        }o = 0;while ((i = p[o++]) && !b.isPropagationStopped()) {
          b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
        }if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
          m = e[h], m && (e[h] = null), n.event.triggered = q;try {
            e[q]();
          } catch (s) {}n.event.triggered = void 0, m && (e[h] = m);
        }return b.result;
      }
    }, dispatch: function dispatch(a) {
      a = n.event.fix(a);var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (n._data(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }d.length && g.push({ elem: i, handlers: d });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, fix: function fix(a) {
      if (a[n.expando]) return a;var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;while (b--) {
        c = e[b], a[c] = g[c];
      }return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button,
            h = b.fromElement;return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      } }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== ra() && this.focus) try {
            return this.focus(), !1;
          } catch (a) {}
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === ra() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return n.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } }, simulate: function simulate(a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    } }, n.removeEvent = d.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  } : function (a, b, c) {
    var d = "on" + b;a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: qa, isPropagationStopped: qa, isImmediatePropagationStopped: qa, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), l.submit || (n.event.special.submit = { setup: function setup() {
      return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
        var b = a.target,
            c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
          a._submitBubble = !0;
        }), n._data(c, "submit", !0));
      });
    }, postDispatch: function postDispatch(a) {
      a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a));
    }, teardown: function teardown() {
      return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit");
    } }), l.change || (n.event.special.change = { setup: function setup() {
      return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._justChanged = !0);
      }), n.event.add(this, "click._change", function (a) {
        this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a);
      })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a);
        }), n._data(b, "change", !0));
      });
    }, handle: function handle(a) {
      var b = a.target;return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
    }, teardown: function teardown() {
      return n.event.remove(this, "._change"), !ka.test(this.nodeName);
    } }), l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };n.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = n._data(d, b);e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = n._data(d, b) - 1;e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b));
      } };
  }), n.fn.extend({ on: function on(a, b, c, d) {
      return sa(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return sa(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    }, trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
    } });var ta = / jQuery\d+="(?:null|\d+)"/g,
      ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
      va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      wa = /<script|<style|<link/i,
      xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ya = /^true\/(.*)/,
      za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Aa = ca(d),
      Ba = Aa.appendChild(d.createElement("div"));function Ca(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function Da(a) {
    return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a;
  }function Ea(a) {
    var b = ya.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Fa(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c,
          d,
          e,
          f = n._data(a),
          g = n._data(b, f),
          h = f.events;if (h) {
        delete g.handle, g.events = {};for (c in h) {
          for (d = 0, e = h[c].length; e > d; d++) {
            n.event.add(b, c, h[c][d]);
          }
        }
      }g.data && (g.data = n.extend({}, g.data));
    }
  }function Ga(a, b) {
    var c, d, e;if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
        e = n._data(b);for (d in e.events) {
          n.removeEvent(b, d, e.handle);
        }b.removeAttribute(n.expando);
      }"script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
  }function Ha(a, b, c, d) {
    b = f.apply([], b);var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
      var f = a.eq(e);r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
    });if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
      for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) {
        g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
      }if (h) for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) {
        g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
      }k = e = null;
    }return a;
  }function Ia(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }n.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(va, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i = n.contains(a.ownerDocument, a);if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) {
        d[g] && Ga(e, d[g]);
      }if (b) if (c) for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) {
        Fa(e, d[g]);
      } else Fa(a, f);return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f;
    }, cleanData: function cleanData(a, b) {
      for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) {
        if ((b || M(d)) && (f = d[i], g = f && j[f])) {
          if (g.events) for (e in g.events) {
            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          }j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f));
        }
      }
    } }), n.fn.extend({ domManip: Ha, detach: function detach(a) {
      return Ia(this, a, !0);
    }, remove: function remove(a) {
      return Ia(this, a);
    }, text: function text(a) {
      return Y(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a));
      }, null, a, arguments.length);
    }, append: function append() {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && n.cleanData(ea(a, !1));while (a.firstChild) {
          a.removeChild(a.firstChild);
        }a.options && n.nodeName(a, "select") && (a.options.length = 0);
      }return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    }, html: function html(a) {
      return Y(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ha(this, arguments, function (b) {
        var c = this.parentNode;n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this));
      }, a);
    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) {
        c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
      }return this.pushStack(e);
    };
  });var Ja,
      Ka = { HTML: "block", BODY: "block" };function La(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");return c.detach(), d;
  }function Ma(a) {
    var b = d,
        c = Ka[a];return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c;
  }var Na = /^margin/,
      Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
      Pa = function Pa(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  },
      Qa = d.documentElement;!function () {
    var b,
        c,
        e,
        f,
        g,
        h,
        i = d.createElement("div"),
        j = d.createElement("div");if (j.style) {
      var _k = function _k() {
        var k,
            l,
            m = d.documentElement;m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || { width: "4px" }).width, j.style.marginRight = "50%", c = "4px" === (l || { marginRight: "4px" }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i);
      };

      j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, { reliableHiddenOffsets: function reliableHiddenOffsets() {
          return null == b && _k(), f;
        }, boxSizingReliable: function boxSizingReliable() {
          return null == b && _k(), e;
        }, pixelMarginRight: function pixelMarginRight() {
          return null == b && _k(), c;
        }, pixelPosition: function pixelPosition() {
          return null == b && _k(), b;
        }, reliableMarginRight: function reliableMarginRight() {
          return null == b && _k(), g;
        }, reliableMarginLeft: function reliableMarginLeft() {
          return null == b && _k(), h;
        } });
    }
  }();var Ra,
      Sa,
      Ta = /^(top|right|bottom|left)$/;a.getComputedStyle ? (Ra = function Ra(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  }, Sa = function Sa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + "";
  }) : Qa.currentStyle && (Ra = function Ra(a) {
    return a.currentStyle;
  }, Sa = function Sa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
  });function Ua(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Va = /alpha\([^)]*\)/i,
      Wa = /opacity\s*=\s*([^)]*)/i,
      Xa = /^(none|table(?!-c[ea]).+)/,
      Ya = new RegExp("^(" + T + ")(.*)$", "i"),
      Za = { position: "absolute", visibility: "hidden", display: "block" },
      $a = { letterSpacing: "0", fontWeight: "400" },
      _a = ["Webkit", "O", "Moz", "ms"],
      ab = d.createElement("div").style;function bb(a) {
    if (a in ab) return a;var b = a.charAt(0).toUpperCase() + a.slice(1),
        c = _a.length;while (c--) {
      if (a = _a[c] + b, a in ab) return a;
    }
  }function cb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    }for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }return a;
  }function db(a, b, c) {
    var d = Ya.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }function eb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
    }return g;
  }function fb(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ra(a),
        g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
      if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Sa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": l.cssFloat ? "cssFloat" : "styleFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];if (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c;
        } catch (j) {}
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f;
    } }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = { get: function get(a, c, d) {
        return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
          return fb(a, b, d);
        }) : fb(a, b, d) : void 0;
      }, set: function set(a, c, d) {
        var e = d && Ra(a);return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
      } };
  }), l.opacity || (n.cssHooks.opacity = { get: function get(a, b) {
      return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
    }, set: function set(a, b) {
      var c = a.style,
          d = a.currentStyle,
          e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = d && d.filter || c.filter || "";c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
    } }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
    return b ? Pa(a, { display: "inline-block" }, Sa, [a, "marginRight"]) : void 0;
  }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
      marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    }) : 0)) + "px" : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    n.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Na.test(a) || (n.cssHooks[a + b].set = db);
  }), n.fn.extend({ css: function css(a, b) {
      return Y(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (n.isArray(b)) {
          for (d = Ra(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function show() {
      return cb(this, !0);
    }, hide: function hide() {
      return cb(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        W(this) ? n(this).show() : n(this).hide();
      });
    } });function gb(a, b, c, d, e) {
    return new gb.prototype.init(a, b, c, d, e);
  }n.Tween = gb, gb.prototype = { constructor: gb, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = gb.propHooks[this.prop];return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = gb.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this;
    } }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      } } }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, n.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, n.fx = gb.prototype.init, n.fx.step = {};var hb,
      ib,
      jb = /^(?:toggle|show|hide)$/,
      kb = /queueHooks$/;function lb() {
    return a.setTimeout(function () {
      hb = void 0;
    }), hb = n.now();
  }function mb(a, b) {
    var c,
        d = { height: a },
        e = 0;for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
      c = V[e], d["margin" + c] = d["padding" + c] = a;
    }return b && (d.opacity = d.width = a), d;
  }function nb(a, b, c) {
    for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function ob(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        m = this,
        o = {},
        p = a.style,
        q = a.nodeType && W(a),
        r = n._data(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, m.always(function () {
      m.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
    }));for (d in b) {
      if (e = b[d], jb.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;q = !0;
        }o[d] = r && r[d] || n.style(a, d);
      } else j = void 0;
    }if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);else {
      r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
        n(a).hide();
      }), m.done(function () {
        var b;n._removeData(a, "fxshow");for (b in o) {
          n.style(a, b, o[b]);
        }
      });for (d in o) {
        g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }function pb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function qb(a, b, c) {
    var d,
        e,
        f = 0,
        g = qb.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: hb || lb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (pb(k, j.opts.specialEasing); g > f; f++) {
      if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    }return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }n.Animation = n.extend(qb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return X(c.elem, a, U.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b);
      }
    }, prefilters: [ob], prefilter: function prefilter(a, b) {
      b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
    } }), n.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(W).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = qb(this, n.extend({}, a), f);(e || n._data(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = n._data(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && kb.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || n.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = n._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e);
    };
  }), n.each({ slideDown: mb("show"), slideUp: mb("hide"), slideToggle: mb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = n.timers,
        c = 0;for (hb = n.now(); c < b.length; c++) {
      a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    }b.length || n.fx.stop(), hb = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(ib), ib = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a,
        b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value;
  }();var rb = /\r/g,
      sb = /[\x20\t\r\n\f]+/g;n.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    } }), n.extend({ valHooks: { option: { get: function get(a) {
          var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a)).replace(sb, " ");
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;while (g--) {
            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
              d.selected = c = !0;
            } catch (h) {
              d.scrollHeight;
            } else d.selected = !1;
          }return c || (a.selectedIndex = -1), e;
        } } } }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = { set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      } }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var tb,
      ub,
      vb = n.expr.attrHandle,
      wb = /^(?:checked|selected)$/i,
      xb = l.getSetAttribute,
      yb = l.input;n.fn.extend({ attr: function attr(a, b) {
      return Y(this, n.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    } }), n.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d);
      }
    } }), ub = { set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c;
    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = vb[b] || n.find.attr;yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) {
      var e, f;return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e;
    } : vb[b] = function (a, b, c) {
      return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null;
    };
  }), yb && xb || (n.attrHooks.value = { set: function set(a, b, c) {
      return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c);
    } }), xb || (tb = { set: function set(a, b, c) {
      var d = a.getAttributeNode(c);return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
    } }, vb.id = vb.name = vb.coords = function (a, b, c) {
    var d;return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
  }, n.valHooks.button = { get: function get(a, b) {
      var c = a.getAttributeNode(b);return c && c.specified ? c.value : void 0;
    }, set: tb.set }, n.attrHooks.contenteditable = { set: function set(a, b, c) {
      tb.set(a, "" === b ? !1 : b, c);
    } }, n.each(["width", "height"], function (a, b) {
    n.attrHooks[b] = { set: function set(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
      } };
  })), l.style || (n.attrHooks.style = { get: function get(a) {
      return a.style.cssText || void 0;
    }, set: function set(a, b) {
      return a.style.cssText = b + "";
    } });var zb = /^(?:input|select|textarea|button|object)$/i,
      Ab = /^(?:a|area)$/i;n.fn.extend({ prop: function prop(a, b) {
      return Y(this, n.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return a = n.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a];
        } catch (b) {}
      });
    } }), n.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = n.find.attr(a, "tabindex");return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
    n.propHooks[b] = { get: function get(a) {
        return a.getAttribute(b, 4);
      } };
  }), l.optSelected || (n.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  }), l.enctype || (n.propFix.enctype = "encoding");var Bb = /[\t\r\n\f]/g;function Cb(a) {
    return n.attr(a, "class") || "";
  }n.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, Cb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = n.trim(d), e !== h && n.attr(c, "class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, Cb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = n.trim(d), e !== h && n.attr(c, "class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, Cb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
      }return !1;
    } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } });var Db = a.location,
      Eb = n.now(),
      Fb = /\?/,
      Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");var c,
        d = null,
        e = n.trim(b + "");return e && !n.trim(e.replace(Gb, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
    })) ? Function("return " + e)() : n.error("Invalid JSON: " + b);
  }, n.parseXML = function (b) {
    var c, d;if (!b || "string" != typeof b) return null;try {
      a.DOMParser ? (d = new a.DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
    } catch (e) {
      c = void 0;
    }return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
  };var Hb = /#.*$/,
      Ib = /([?&])_=[^&]*/,
      Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Lb = /^(?:GET|HEAD)$/,
      Mb = /^\/\//,
      Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Ob = {},
      Pb = {},
      Qb = "*/".concat("*"),
      Rb = Db.href,
      Sb = Nb.exec(Rb.toLowerCase()) || [];function Tb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Ub(a, b, c, d) {
    var e = {},
        f = a === Pb;function g(h) {
      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Vb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};for (d in b) {
      void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    }return c && n.extend(!0, a, c), a;
  }function Wb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (e) for (g in h) {
      if (h[g] && h[g].test(e)) {
        i.unshift(g);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;break;
        }d || (d = g);
      }f = f || d;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function Xb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Rb, type: "GET", isLocal: Kb.test(Sb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Qb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a);
    }, ajaxPrefilter: Tb(Ob), ajaxTransport: Tb(Pb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = n.ajaxSetup({}, c),
          m = l.context || l,
          o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
          p = n.Deferred(),
          q = n.Callbacks("once memory"),
          r = l.statusCode || {},
          s = {},
          t = {},
          u = 0,
          v = "canceled",
          w = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (2 === u) {
            if (!k) {
              k = {};while (b = Jb.exec(g)) {
                k[b[1].toLowerCase()] = b[2];
              }
            }b = k[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === u ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();return u || (a = t[c] = t[c] || a, s[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return u || (l.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (2 > u) for (b in a) {
            r[b] = [r[b], a[b]];
          } else w.always(a[w.status]);return this;
        }, abort: function abort(a) {
          var b = a || v;return j && j.abort(b), y(0, b), this;
        } };if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);for (e in l.headers) {
        w.setRequestHeader(e, l.headers[e]);
      }if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();v = "abort";for (e in { success: 1, error: 1, complete: 1 }) {
        w[e](l[e]);
      }if (j = Ub(Pb, l, c, w)) {
        if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;l.async && l.timeout > 0 && (h = a.setTimeout(function () {
          w.abort("timeout");
        }, l.timeout));try {
          u = 1, j.send(s, y);
        } catch (x) {
          if (!(2 > u)) throw x;y(-1, x);
        }
      } else y(-1, "No Transport");function y(b, c, d, e) {
        var k,
            s,
            t,
            v,
            x,
            y = c;2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")));
      }return w;
    }, getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    } }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, n.fn.extend({ wrapAll: function wrapAll(a) {
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      });if (this[0]) {
        var b = n(a, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;while (a.firstChild && 1 === a.firstChild.nodeType) {
            a = a.firstChild;
          }return a;
        }).append(this);
      }return this;
    }, wrapInner: function wrapInner(a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = n.isFunction(a);return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    } });function Yb(a) {
    return a.style && a.style.display || n.css(a, "display");
  }function Zb(a) {
    if (!n.contains(a.ownerDocument || d, a)) return !0;while (a && 1 === a.nodeType) {
      if ("none" === Yb(a) || "hidden" === a.type) return !0;a = a.parentNode;
    }return !1;
  }n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a);
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a);
  };var $b = /%20/g,
      _b = /\[\]$/,
      ac = /\r?\n/g,
      bc = /^(?:submit|button|image|reset|file)$/i,
      cc = /^(?:input|select|textarea|keygen)/i;function dc(a, b, c, d) {
    var e;if (n.isArray(b)) n.each(b, function (b, e) {
      c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      dc(a + "[" + e + "]", b[e], c, d);
    }
  }n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      dc(c, a[c], b, e);
    }return d.join("&").replace($b, "+");
  }, n.fn.extend({ serialize: function serialize() {
      return n.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a));
      }).map(function (a, b) {
        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return { name: b.name, value: a.replace(ac, "\r\n") };
        }) : { name: b.name, value: c.replace(ac, "\r\n") };
      }).get();
    } }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic();
  } : hc;var ec = 0,
      fc = {},
      gc = n.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in fc) {
      fc[a](void 0, !0);
    }
  }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function (b) {
    if (!b.crossDomain || l.cors) {
      var _c;return { send: function send(d, e) {
          var f,
              g = b.xhr(),
              h = ++ec;if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) {
            g[f] = b.xhrFields[f];
          }b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");for (f in d) {
            void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
          }g.send(b.hasContent && b.data || null), _c = function c(a, d) {
            var f, i, j;if (_c && (d || 4 === g.readyState)) if (delete fc[h], _c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();else {
              j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);try {
                i = g.statusText;
              } catch (k) {
                i = "";
              }f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404;
            }j && e(f, i, j, g.getAllResponseHeaders());
          }, b.async ? 4 === g.readyState ? a.setTimeout(_c) : g.onreadystatechange = fc[h] = _c : _c();
        }, abort: function abort() {
          _c && _c(void 0, !0);
        } };
    }
  });function hc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }function ic() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return n.globalEval(a), a;
      } } }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b,
          c = d.head || n("head")[0] || d.documentElement;return { send: function send(e, f) {
          b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"));
          }, c.insertBefore(b, c.firstChild);
        }, abort: function abort() {
          b && b.onload(void 0, !0);
        } };
    }
  });var jc = [],
      kc = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = jc.pop() || n.expando + "_" + Eb++;return this[a] = !0, a;
    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || d;var e = x.exec(a),
        f = !c && [];return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };var lc = n.fn.load;n.fn.load = function (a, b, c) {
    if ("string" != typeof a && lc) return lc.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };function mc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }n.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, n.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d;
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - n.css(d, "marginTop", !0), left: b.left - c.left - n.css(d, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }return a || Qa;
      });
    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = /Y/.test(b);n.fn[a] = function (d) {
      return Y(this, function (a, d, e) {
        var f = mc(a);return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e);
      }, a, d, arguments.length, null);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
      return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
    n.each({
      padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return Y(this, function (b, c, d) {
          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), n.fn.size = function () {
    return this.length;
  }, n.fn.andSelf = n.fn.addBack, "function" == "function" && __webpack_require__(2) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return n;
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var nc = a.jQuery,
      oc = a.$;return n.noConflict = function (b) {
    return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n;
  }, b || (a.jQuery = a.$ = n), n;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, layer) {

__webpack_require__(4);

var bg = __webpack_require__(8);

console.log(bg);
//var $ = require('jquery');

console.log($('#bg'));

console.log('home Pages');

console.log('222');

console.log(layer);

function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();

    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi;
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;
    //IE
    if (agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }

    //firefox
    if (agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }

    //Chrome
    if (agent.indexOf("chrome") > 0) {
        return agent.match(regStr_chrome);
    }

    //Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        return agent.match(regStr_saf);
    }
}

var browser = getBrowserInfo();
//alert(browser); 
var verinfo = (browser + "").replace(/[^0-9.]/ig, "");

document.write(verinfo);

var aaa = 2;

console.log(aaa);

var fn = function fn(x) {
    return x * x;
};

console.log(fn(3));

console.log(fn(1));
console.log(fn(2));
console.log(fn(3));

console.log(fn(4));
console.log(fn(5));
console.log(fn(6));

layer.msg('1111');

setTimeout(function () {
    layer.confirm('这是comfirm');
}, 2000);

//document.getElementById('bg').attributes('src', bg);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!

 @Name：layer v2.3 弹层组件
 @Author：贤心
 @Site：http://layer.layui.com
 @License：LGPL
    
 */

;!function (window, undefined) {
  "use strict";

  var $,
      win,
      _ready = {
    getPath: function () {
      var js = document.scripts,
          script = js[js.length - 1],
          jsPath = script.src;
      if (script.getAttribute('merge')) return;
      return jsPath.substring(0, jsPath.lastIndexOf("/") + 1);
    }(),

    //屏蔽Enter触发弹层
    enter: function enter(e) {
      if (e.keyCode === 13) e.preventDefault();
    },
    config: {}, end: {},
    btn: ['&#x786E;&#x5B9A;', '&#x53D6;&#x6D88;'],

    //五种原始层模式
    type: ['dialog', 'page', 'iframe', 'loading', 'tips']
  };
  //默认内置方法。
  var layer = {
    v: '2.3',
    ie6: !!window.ActiveXObject && !window.XMLHttpRequest,
    index: 0,
    path: _ready.getPath,
    config: function config(options, fn) {
      var item = 0;
      options = options || {};
      layer.cache = _ready.config = $.extend(_ready.config, options);
      layer.path = _ready.config.path || layer.path;
      typeof options.extend === 'string' && (options.extend = [options.extend]);
      layer.use('skin/layer.css', options.extend && options.extend.length > 0 ? function loop() {
        var ext = options.extend;
        layer.use(ext[ext[item] ? item : item - 1], item < ext.length ? function () {
          ++item;
          return loop;
        }() : fn);
      }() : fn);
      return this;
    },

    //载入配件
    use: function use(module, fn, readyMethod) {
      var i = 0,
          head = $('head')[0];
      var module = module.replace(/\s/g, '');
      var iscss = /\.css$/.test(module);
      var node = document.createElement(iscss ? 'link' : 'script');
      var id = 'layui_layer_' + module.replace(/\.|\//g, '');
      if (!layer.path) return;
      if (iscss) {
        node.rel = 'stylesheet';
      }
      node[iscss ? 'href' : 'src'] = /^http:\/\//.test(module) ? module : layer.path + module;
      node.id = id;
      if (!$('#' + id)[0]) {
        head.appendChild(node);
      }
      //轮询加载就绪
      ;(function poll() {
        ;(iscss ? parseInt($('#' + id).css('width')) === 1989 : layer[readyMethod || id]) ? function () {
          fn && fn();
          try {
            iscss || head.removeChild(node);
          } catch (e) {};
        }() : setTimeout(poll, 100);
      })();
      return this;
    },

    ready: function ready(path, fn) {
      var type = typeof path === 'function';
      if (type) fn = path;
      layer.config($.extend(_ready.config, function () {
        return type ? {} : { path: path };
      }()), fn);
      return this;
    },

    //各种快捷引用
    alert: function alert(content, options, yes) {
      var type = typeof options === 'function';
      if (type) yes = options;
      return layer.open($.extend({
        content: content,
        yes: yes
      }, type ? {} : options));
    },

    confirm: function confirm(content, options, yes, cancel) {
      var type = typeof options === 'function';
      if (type) {
        cancel = yes;
        yes = options;
      }
      return layer.open($.extend({
        content: content,
        btn: _ready.btn,
        yes: yes,
        btn2: cancel
      }, type ? {} : options));
    },

    msg: function msg(content, options, end) {
      //最常用提示层
      var type = typeof options === 'function',
          rskin = _ready.config.skin;
      var skin = (rskin ? rskin + ' ' + rskin + '-msg' : '') || 'layui-layer-msg';
      var shift = doms.anim.length - 1;
      if (type) end = options;
      return layer.open($.extend({
        content: content,
        time: 3000,
        shade: false,
        skin: skin,
        title: false,
        closeBtn: false,
        btn: false,
        end: end
      }, type && !_ready.config.skin ? {
        skin: skin + ' layui-layer-hui',
        shift: shift
      } : function () {
        options = options || {};
        if (options.icon === -1 || options.icon === undefined && !_ready.config.skin) {
          options.skin = skin + ' ' + (options.skin || 'layui-layer-hui');
        }
        return options;
      }()));
    },

    load: function load(icon, options) {
      return layer.open($.extend({
        type: 3,
        icon: icon || 0,
        shade: 0.01
      }, options));
    },

    tips: function tips(content, follow, options) {
      return layer.open($.extend({
        type: 4,
        content: [content, follow],
        closeBtn: false,
        time: 3000,
        shade: false,
        maxWidth: 210
      }, options));
    }
  };

  var Class = function Class(setings) {
    var that = this;
    that.index = ++layer.index;
    that.config = $.extend({}, that.config, _ready.config, setings);
    that.creat();
  };

  Class.pt = Class.prototype;

  //缓存常用字符
  var doms = ['layui-layer', '.layui-layer-title', '.layui-layer-main', '.layui-layer-dialog', 'layui-layer-iframe', 'layui-layer-content', 'layui-layer-btn', 'layui-layer-close'];
  doms.anim = ['layer-anim', 'layer-anim-01', 'layer-anim-02', 'layer-anim-03', 'layer-anim-04', 'layer-anim-05', 'layer-anim-06'];

  //默认配置
  Class.pt.config = {
    type: 0,
    shade: 0.3,
    fix: true,
    move: doms[1],
    title: '&#x4FE1;&#x606F;',
    offset: 'auto',
    area: 'auto',
    closeBtn: 1,
    time: 0, //0表示不自动关闭
    zIndex: 19891014,
    maxWidth: 360,
    shift: 0,
    icon: -1,
    scrollbar: true, //是否允许浏览器滚动条
    tips: 2
  };

  //容器
  Class.pt.vessel = function (conType, callback) {
    var that = this,
        times = that.index,
        config = that.config;
    var zIndex = config.zIndex + times,
        titype = _typeof(config.title) === 'object';
    var ismax = config.maxmin && (config.type === 1 || config.type === 2);
    var titleHTML = config.title ? '<div class="layui-layer-title" style="' + (titype ? config.title[1] : '') + '">' + (titype ? config.title[0] : config.title) + '</div>' : '';

    config.zIndex = zIndex;
    callback([
    //遮罩
    config.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + times + '" times="' + times + '" style="' + ('z-index:' + (zIndex - 1) + '; background-color:' + (config.shade[1] || '#000') + '; opacity:' + (config.shade[0] || config.shade) + '; filter:alpha(opacity=' + (config.shade[0] * 100 || config.shade * 100) + ');') + '"></div>' : '',

    //主体
    '<div class="' + doms[0] + ' ' + (doms.anim[config.shift] || '') + (' layui-layer-' + _ready.type[config.type]) + ((config.type == 0 || config.type == 2) && !config.shade ? ' layui-layer-border' : '') + ' ' + (config.skin || '') + '" id="' + doms[0] + times + '" type="' + _ready.type[config.type] + '" times="' + times + '" showtime="' + config.time + '" conType="' + (conType ? 'object' : 'string') + '" style="z-index: ' + zIndex + '; width:' + config.area[0] + ';height:' + config.area[1] + (config.fix ? '' : ';position:absolute;') + '">' + (conType && config.type != 2 ? '' : titleHTML) + '<div id="' + (config.id || '') + '" class="layui-layer-content' + (config.type == 0 && config.icon !== -1 ? ' layui-layer-padding' : '') + (config.type == 3 ? ' layui-layer-loading' + config.icon : '') + '">' + (config.type == 0 && config.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + config.icon + '"></i>' : '') + (config.type == 1 && conType ? '' : config.content || '') + '</div>' + '<span class="layui-layer-setwin">' + function () {
      var closebtn = ismax ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : '';
      config.closeBtn && (closebtn += '<a class="layui-layer-ico ' + doms[7] + ' ' + doms[7] + (config.title ? config.closeBtn : config.type == 4 ? '1' : '2') + '" href="javascript:;"></a>');
      return closebtn;
    }() + '</span>' + (config.btn ? function () {
      var button = '';
      typeof config.btn === 'string' && (config.btn = [config.btn]);
      for (var i = 0, len = config.btn.length; i < len; i++) {
        button += '<a class="' + doms[6] + '' + i + '">' + config.btn[i] + '</a>';
      }
      return '<div class="' + doms[6] + '">' + button + '</div>';
    }() : '') + '</div>'], titleHTML);
    return that;
  };

  //创建骨架
  Class.pt.creat = function () {
    var that = this,
        config = that.config,
        times = that.index,
        nodeIndex;
    var content = config.content,
        conType = (typeof content === "undefined" ? "undefined" : _typeof(content)) === 'object';

    if ($('#' + config.id)[0]) return;

    if (typeof config.area === 'string') {
      config.area = config.area === 'auto' ? ['', ''] : [config.area, ''];
    }

    switch (config.type) {
      case 0:
        config.btn = 'btn' in config ? config.btn : _ready.btn[0];
        layer.closeAll('dialog');
        break;
      case 2:
        var content = config.content = conType ? config.content : [config.content || 'http://layer.layui.com', 'auto'];
        config.content = '<iframe scrolling="' + (config.content[1] || 'auto') + '" allowtransparency="true" id="' + doms[4] + '' + times + '" name="' + doms[4] + '' + times + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + config.content[0] + '"></iframe>';
        break;
      case 3:
        config.title = false;
        config.closeBtn = false;
        config.icon === -1 && config.icon === 0;
        layer.closeAll('loading');
        break;
      case 4:
        conType || (config.content = [config.content, 'body']);
        config.follow = config.content[1];
        config.content = config.content[0] + '<i class="layui-layer-TipsG"></i>';
        config.title = false;
        config.fix = false;
        config.tips = _typeof(config.tips) === 'object' ? config.tips : [config.tips, true];
        config.tipsMore || layer.closeAll('tips');
        break;
    }

    //建立容器
    that.vessel(conType, function (html, titleHTML) {
      $('body').append(html[0]);
      conType ? function () {
        config.type == 2 || config.type == 4 ? function () {
          $('body').append(html[1]);
        }() : function () {
          if (!content.parents('.' + doms[0])[0]) {
            content.show().addClass('layui-layer-wrap').wrap(html[1]);
            $('#' + doms[0] + times).find('.' + doms[5]).before(titleHTML);
          }
        }();
      }() : $('body').append(html[1]);
      that.layero = $('#' + doms[0] + times);
      config.scrollbar || doms.html.css('overflow', 'hidden').attr('layer-full', times);
    }).auto(times);

    config.type == 2 && layer.ie6 && that.layero.find('iframe').attr('src', content[0]);
    $(document).off('keydown', _ready.enter).on('keydown', _ready.enter);
    that.layero.on('keydown', function (e) {
      $(document).off('keydown', _ready.enter);
    });

    //坐标自适应浏览器窗口尺寸
    config.type == 4 ? that.tips() : that.offset();
    if (config.fix) {
      win.on('resize', function () {
        that.offset();
        (/^\d+%$/.test(config.area[0]) || /^\d+%$/.test(config.area[1])) && that.auto(times);
        config.type == 4 && that.tips();
      });
    }

    config.time <= 0 || setTimeout(function () {
      layer.close(that.index);
    }, config.time);
    that.move().callback();
  };

  //自适应
  Class.pt.auto = function (index) {
    var that = this,
        config = that.config,
        layero = $('#' + doms[0] + index);
    if (config.area[0] === '' && config.maxWidth > 0) {
      //为了修复IE7下一个让人难以理解的bug
      if (/MSIE 7/.test(navigator.userAgent) && config.btn) {
        layero.width(layero.innerWidth());
      }
      layero.outerWidth() > config.maxWidth && layero.width(config.maxWidth);
    }
    var area = [layero.innerWidth(), layero.innerHeight()];
    var titHeight = layero.find(doms[1]).outerHeight() || 0;
    var btnHeight = layero.find('.' + doms[6]).outerHeight() || 0;
    function setHeight(elem) {
      elem = layero.find(elem);
      elem.height(area[1] - titHeight - btnHeight - 2 * (parseFloat(elem.css('padding')) | 0));
    }
    switch (config.type) {
      case 2:
        setHeight('iframe');
        break;
      default:
        if (config.area[1] === '') {
          if (config.fix && area[1] >= win.height()) {
            area[1] = win.height();
            setHeight('.' + doms[5]);
          }
        } else {
          setHeight('.' + doms[5]);
        }
        break;
    }
    return that;
  };

  //计算坐标
  Class.pt.offset = function () {
    var that = this,
        config = that.config,
        layero = that.layero;
    var area = [layero.outerWidth(), layero.outerHeight()];
    var type = _typeof(config.offset) === 'object';
    that.offsetTop = (win.height() - area[1]) / 2;
    that.offsetLeft = (win.width() - area[0]) / 2;
    if (type) {
      that.offsetTop = config.offset[0];
      that.offsetLeft = config.offset[1] || that.offsetLeft;
    } else if (config.offset !== 'auto') {
      that.offsetTop = config.offset;
      if (config.offset === 'rb') {
        //右下角
        that.offsetTop = win.height() - area[1];
        that.offsetLeft = win.width() - area[0];
      }
    }
    if (!config.fix) {
      that.offsetTop = /%$/.test(that.offsetTop) ? win.height() * parseFloat(that.offsetTop) / 100 : parseFloat(that.offsetTop);
      that.offsetLeft = /%$/.test(that.offsetLeft) ? win.width() * parseFloat(that.offsetLeft) / 100 : parseFloat(that.offsetLeft);
      that.offsetTop += win.scrollTop();
      that.offsetLeft += win.scrollLeft();
    }
    layero.css({ top: that.offsetTop, left: that.offsetLeft });
  };

  //Tips
  Class.pt.tips = function () {
    var that = this,
        config = that.config,
        layero = that.layero;
    var layArea = [layero.outerWidth(), layero.outerHeight()],
        follow = $(config.follow);
    if (!follow[0]) follow = $('body');
    var goal = {
      width: follow.outerWidth(),
      height: follow.outerHeight(),
      top: follow.offset().top,
      left: follow.offset().left
    },
        tipsG = layero.find('.layui-layer-TipsG');

    var guide = config.tips[0];
    config.tips[1] || tipsG.remove();

    goal.autoLeft = function () {
      if (goal.left + layArea[0] - win.width() > 0) {
        goal.tipLeft = goal.left + goal.width - layArea[0];
        tipsG.css({ right: 12, left: 'auto' });
      } else {
        goal.tipLeft = goal.left;
      };
    };

    //辨别tips的方位
    goal.where = [function () {
      //上        
      goal.autoLeft();
      goal.tipTop = goal.top - layArea[1] - 10;
      tipsG.removeClass('layui-layer-TipsB').addClass('layui-layer-TipsT').css('border-right-color', config.tips[1]);
    }, function () {
      //右
      goal.tipLeft = goal.left + goal.width + 10;
      goal.tipTop = goal.top;
      tipsG.removeClass('layui-layer-TipsL').addClass('layui-layer-TipsR').css('border-bottom-color', config.tips[1]);
    }, function () {
      //下
      goal.autoLeft();
      goal.tipTop = goal.top + goal.height + 10;
      tipsG.removeClass('layui-layer-TipsT').addClass('layui-layer-TipsB').css('border-right-color', config.tips[1]);
    }, function () {
      //左
      goal.tipLeft = goal.left - layArea[0] - 10;
      goal.tipTop = goal.top;
      tipsG.removeClass('layui-layer-TipsR').addClass('layui-layer-TipsL').css('border-bottom-color', config.tips[1]);
    }];
    goal.where[guide - 1]();

    /* 8*2为小三角形占据的空间 */
    if (guide === 1) {
      goal.top - (win.scrollTop() + layArea[1] + 8 * 2) < 0 && goal.where[2]();
    } else if (guide === 2) {
      win.width() - (goal.left + goal.width + layArea[0] + 8 * 2) > 0 || goal.where[3]();
    } else if (guide === 3) {
      goal.top - win.scrollTop() + goal.height + layArea[1] + 8 * 2 - win.height() > 0 && goal.where[0]();
    } else if (guide === 4) {
      layArea[0] + 8 * 2 - goal.left > 0 && goal.where[1]();
    }

    layero.find('.' + doms[5]).css({
      'background-color': config.tips[1],
      'padding-right': config.closeBtn ? '30px' : ''
    });
    layero.css({ left: goal.tipLeft, top: goal.tipTop });
  };

  //拖拽层
  Class.pt.move = function () {
    var that = this,
        config = that.config,
        conf = {
      setY: 0,
      moveLayer: function moveLayer() {
        var layero = conf.layero,
            mgleft = parseInt(layero.css('margin-left'));
        var lefts = parseInt(conf.move.css('left'));
        mgleft === 0 || (lefts = lefts - mgleft);
        if (layero.css('position') !== 'fixed') {
          lefts = lefts - layero.parent().offset().left;
          conf.setY = 0;
        }
        layero.css({ left: lefts, top: parseInt(conf.move.css('top')) - conf.setY });
      }
    };

    var movedom = that.layero.find(config.move);
    config.move && movedom.attr('move', 'ok');
    movedom.css({ cursor: config.move ? 'move' : 'auto' });

    $(config.move).on('mousedown', function (M) {
      M.preventDefault();
      if ($(this).attr('move') === 'ok') {
        conf.ismove = true;
        conf.layero = $(this).parents('.' + doms[0]);
        var xx = conf.layero.offset().left,
            yy = conf.layero.offset().top,
            ww = conf.layero.outerWidth() - 6,
            hh = conf.layero.outerHeight() - 6;
        if (!$('#layui-layer-moves')[0]) {
          $('body').append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:' + xx + 'px; top:' + yy + 'px; width:' + ww + 'px; height:' + hh + 'px; z-index:2147483584"></div>');
        }
        conf.move = $('#layui-layer-moves');
        config.moveType && conf.move.css({ visibility: 'hidden' });

        conf.moveX = M.pageX - conf.move.position().left;
        conf.moveY = M.pageY - conf.move.position().top;
        conf.layero.css('position') !== 'fixed' || (conf.setY = win.scrollTop());
      }
    });

    $(document).mousemove(function (M) {
      if (conf.ismove) {
        var offsetX = M.pageX - conf.moveX,
            offsetY = M.pageY - conf.moveY;
        M.preventDefault();

        //控制元素不被拖出窗口外
        if (!config.moveOut) {
          conf.setY = win.scrollTop();
          var setRig = win.width() - conf.move.outerWidth(),
              setTop = conf.setY;
          offsetX < 0 && (offsetX = 0);
          offsetX > setRig && (offsetX = setRig);
          offsetY < setTop && (offsetY = setTop);
          offsetY > win.height() - conf.move.outerHeight() + conf.setY && (offsetY = win.height() - conf.move.outerHeight() + conf.setY);
        }

        conf.move.css({ left: offsetX, top: offsetY });
        config.moveType && conf.moveLayer();

        offsetX = offsetY = setRig = setTop = null;
      }
    }).mouseup(function () {
      try {
        if (conf.ismove) {
          conf.moveLayer();
          conf.move.remove();
          config.moveEnd && config.moveEnd();
        }
        conf.ismove = false;
      } catch (e) {
        conf.ismove = false;
      }
    });
    return that;
  };

  Class.pt.callback = function () {
    var that = this,
        layero = that.layero,
        config = that.config;
    that.openLayer();
    if (config.success) {
      if (config.type == 2) {
        layero.find('iframe').on('load', function () {
          config.success(layero, that.index);
        });
      } else {
        config.success(layero, that.index);
      }
    }
    layer.ie6 && that.IE6(layero);

    //按钮
    layero.find('.' + doms[6]).children('a').on('click', function () {
      var index = $(this).index();
      if (index === 0) {
        if (config.yes) {
          config.yes(that.index, layero);
        } else if (config['btn1']) {
          config['btn1'](that.index, layero);
        } else {
          layer.close(that.index);
        }
      } else {
        var close = config['btn' + (index + 1)] && config['btn' + (index + 1)](that.index, layero);
        close === false || layer.close(that.index);
      }
    });

    //取消
    function cancel() {
      var close = config.cancel && config.cancel(that.index, layero);
      close === false || layer.close(that.index);
    }

    //右上角关闭回调
    layero.find('.' + doms[7]).on('click', cancel);

    //点遮罩关闭
    if (config.shadeClose) {
      $('#layui-layer-shade' + that.index).on('click', function () {
        layer.close(that.index);
      });
    }

    //最小化
    layero.find('.layui-layer-min').on('click', function () {
      layer.min(that.index, config);
      config.min && config.min(layero);
    });

    //全屏/还原
    layero.find('.layui-layer-max').on('click', function () {
      if ($(this).hasClass('layui-layer-maxmin')) {
        layer.restore(that.index);
        config.restore && config.restore(layero);
      } else {
        layer.full(that.index, config);
        config.full && config.full(layero);
      }
    });

    config.end && (_ready.end[that.index] = config.end);
  };

  //for ie6 恢复select
  _ready.reselect = function () {
    $.each($('select'), function (index, value) {
      var sthis = $(this);
      if (!sthis.parents('.' + doms[0])[0]) {
        sthis.attr('layer') == 1 && $('.' + doms[0]).length < 1 && sthis.removeAttr('layer').show();
      }
      sthis = null;
    });
  };

  Class.pt.IE6 = function (layero) {
    var that = this,
        _ieTop = layero.offset().top;

    //ie6的固定与相对定位
    function ie6Fix() {
      layero.css({ top: _ieTop + (that.config.fix ? win.scrollTop() : 0) });
    };
    ie6Fix();
    win.scroll(ie6Fix);

    //隐藏select
    $('select').each(function (index, value) {
      var sthis = $(this);
      if (!sthis.parents('.' + doms[0])[0]) {
        sthis.css('display') === 'none' || sthis.attr({ 'layer': '1' }).hide();
      }
      sthis = null;
    });
  };

  //需依赖原型的对外方法
  Class.pt.openLayer = function () {
    var that = this;

    //置顶当前窗口
    layer.zIndex = that.config.zIndex;
    layer.setTop = function (layero) {
      var setZindex = function setZindex() {
        layer.zIndex++;
        layero.css('z-index', layer.zIndex + 1);
      };
      layer.zIndex = parseInt(layero[0].style.zIndex);
      layero.on('mousedown', setZindex);
      return layer.zIndex;
    };
  };

  _ready.record = function (layero) {
    var area = [layero.outerWidth(), layero.outerHeight(), layero.position().top, layero.position().left + parseFloat(layero.css('margin-left'))];
    layero.find('.layui-layer-max').addClass('layui-layer-maxmin');
    layero.attr({ area: area });
  };

  _ready.rescollbar = function (index) {
    if (doms.html.attr('layer-full') == index) {
      if (doms.html[0].style.removeProperty) {
        doms.html[0].style.removeProperty('overflow');
      } else {
        doms.html[0].style.removeAttribute('overflow');
      }
      doms.html.removeAttr('layer-full');
    }
  };

  /** 内置成员 */

  window.layer = layer;

  //获取子iframe的DOM
  layer.getChildFrame = function (selector, index) {
    index = index || $('.' + doms[4]).attr('times');
    return $('#' + doms[0] + index).find('iframe').contents().find(selector);
  };

  //得到当前iframe层的索引，子iframe时使用
  layer.getFrameIndex = function (name) {
    return $('#' + name).parents('.' + doms[4]).attr('times');
  };

  //iframe层自适应宽高
  layer.iframeAuto = function (index) {
    if (!index) return;
    var heg = layer.getChildFrame('html', index).outerHeight();
    var layero = $('#' + doms[0] + index);
    var titHeight = layero.find(doms[1]).outerHeight() || 0;
    var btnHeight = layero.find('.' + doms[6]).outerHeight() || 0;
    layero.css({ height: heg + titHeight + btnHeight });
    layero.find('iframe').css({ height: heg });
  };

  //重置iframe url
  layer.iframeSrc = function (index, url) {
    $('#' + doms[0] + index).find('iframe').attr('src', url);
  };

  //设定层的样式
  layer.style = function (index, options) {
    var layero = $('#' + doms[0] + index),
        type = layero.attr('type');
    var titHeight = layero.find(doms[1]).outerHeight() || 0;
    var btnHeight = layero.find('.' + doms[6]).outerHeight() || 0;
    if (type === _ready.type[1] || type === _ready.type[2]) {
      layero.css(options);
      if (type === _ready.type[2]) {
        layero.find('iframe').css({
          height: parseFloat(options.height) - titHeight - btnHeight
        });
      }
    }
  };

  //最小化
  layer.min = function (index, options) {
    var layero = $('#' + doms[0] + index);
    var titHeight = layero.find(doms[1]).outerHeight() || 0;
    _ready.record(layero);
    layer.style(index, { width: 180, height: titHeight, overflow: 'hidden' });
    layero.find('.layui-layer-min').hide();
    layero.attr('type') === 'page' && layero.find(doms[4]).hide();
    _ready.rescollbar(index);
  };

  //还原
  layer.restore = function (index) {
    var layero = $('#' + doms[0] + index),
        area = layero.attr('area').split(',');
    var type = layero.attr('type');
    layer.style(index, {
      width: parseFloat(area[0]),
      height: parseFloat(area[1]),
      top: parseFloat(area[2]),
      left: parseFloat(area[3]),
      overflow: 'visible'
    });
    layero.find('.layui-layer-max').removeClass('layui-layer-maxmin');
    layero.find('.layui-layer-min').show();
    layero.attr('type') === 'page' && layero.find(doms[4]).show();
    _ready.rescollbar(index);
  };

  //全屏
  layer.full = function (index) {
    var layero = $('#' + doms[0] + index),
        timer;
    _ready.record(layero);
    if (!doms.html.attr('layer-full')) {
      doms.html.css('overflow', 'hidden').attr('layer-full', index);
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      var isfix = layero.css('position') === 'fixed';
      layer.style(index, {
        top: isfix ? 0 : win.scrollTop(),
        left: isfix ? 0 : win.scrollLeft(),
        width: win.width(),
        height: win.height()
      });
      layero.find('.layui-layer-min').hide();
    }, 100);
  };

  //改变title
  layer.title = function (name, index) {
    var title = $('#' + doms[0] + (index || layer.index)).find(doms[1]);
    title.html(name);
  };

  //关闭layer总方法
  layer.close = function (index) {
    var layero = $('#' + doms[0] + index),
        type = layero.attr('type');
    if (!layero[0]) return;
    if (type === _ready.type[1] && layero.attr('conType') === 'object') {
      layero.children(':not(.' + doms[5] + ')').remove();
      for (var i = 0; i < 2; i++) {
        layero.find('.layui-layer-wrap').unwrap().hide();
      }
    } else {
      //低版本IE 回收 iframe
      if (type === _ready.type[2]) {
        try {
          var iframe = $('#' + doms[4] + index)[0];
          iframe.contentWindow.document.write('');
          iframe.contentWindow.close();
          layero.find('.' + doms[5])[0].removeChild(iframe);
        } catch (e) {}
      }
      layero[0].innerHTML = '';
      layero.remove();
    }
    $('#layui-layer-moves, #layui-layer-shade' + index).remove();
    layer.ie6 && _ready.reselect();
    _ready.rescollbar(index);
    $(document).off('keydown', _ready.enter);
    typeof _ready.end[index] === 'function' && _ready.end[index]();
    delete _ready.end[index];
  };

  //关闭所有层
  layer.closeAll = function (type) {
    $.each($('.' + doms[0]), function () {
      var othis = $(this);
      var is = type ? othis.attr('type') === type : 1;
      is && layer.close(othis.attr('times'));
      is = null;
    });
  };

  /** 
  
    拓展模块，layui开始合并在一起
  
   */

  var cache = layer.cache || {},
      skin = function skin(type) {
    return cache.skin ? ' ' + cache.skin + ' ' + cache.skin + '-' + type : '';
  };

  //仿系统prompt
  layer.prompt = function (options, _yes) {
    options = options || {};
    if (typeof options === 'function') _yes = options;
    var prompt,
        content = options.formType == 2 ? '<textarea class="layui-layer-input">' + (options.value || '') + '</textarea>' : function () {
      return '<input type="' + (options.formType == 1 ? 'password' : 'text') + '" class="layui-layer-input" value="' + (options.value || '') + '">';
    }();
    return layer.open($.extend({
      btn: ['&#x786E;&#x5B9A;', '&#x53D6;&#x6D88;'],
      content: content,
      skin: 'layui-layer-prompt' + skin('prompt'),
      success: function success(layero) {
        prompt = layero.find('.layui-layer-input');
        prompt.focus();
      }, yes: function yes(index) {
        var value = prompt.val();
        if (value === '') {
          prompt.focus();
        } else if (value.length > (options.maxlength || 500)) {
          layer.tips('&#x6700;&#x591A;&#x8F93;&#x5165;' + (options.maxlength || 500) + '&#x4E2A;&#x5B57;&#x6570;', prompt, { tips: 1 });
        } else {
          _yes && _yes(value, index, prompt);
        }
      }
    }, options));
  };

  //tab层
  layer.tab = function (options) {
    options = options || {};
    var tab = options.tab || {};
    return layer.open($.extend({
      type: 1,
      skin: 'layui-layer-tab' + skin('tab'),
      title: function () {
        var len = tab.length,
            ii = 1,
            str = '';
        if (len > 0) {
          str = '<span class="layui-layer-tabnow">' + tab[0].title + '</span>';
          for (; ii < len; ii++) {
            str += '<span>' + tab[ii].title + '</span>';
          }
        }
        return str;
      }(),
      content: '<ul class="layui-layer-tabmain">' + function () {
        var len = tab.length,
            ii = 1,
            str = '';
        if (len > 0) {
          str = '<li class="layui-layer-tabli xubox_tab_layer">' + (tab[0].content || 'no content') + '</li>';
          for (; ii < len; ii++) {
            str += '<li class="layui-layer-tabli">' + (tab[ii].content || 'no  content') + '</li>';
          }
        }
        return str;
      }() + '</ul>',
      success: function success(layero) {
        var btn = layero.find('.layui-layer-title').children();
        var main = layero.find('.layui-layer-tabmain').children();
        btn.on('mousedown', function (e) {
          e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
          var othis = $(this),
              index = othis.index();
          othis.addClass('layui-layer-tabnow').siblings().removeClass('layui-layer-tabnow');
          main.eq(index).show().siblings().hide();
          typeof options.change === 'function' && options.change(index);
        });
      }
    }, options));
  };

  //相册层
  layer.photos = function (options, loop, key) {
    var dict = {};
    options = options || {};
    if (!options.photos) return;
    var type = options.photos.constructor === Object;
    var photos = type ? options.photos : {},
        data = photos.data || [];
    var start = photos.start || 0;
    dict.imgIndex = (start | 0) + 1;

    options.img = options.img || 'img';

    if (!type) {
      //页面直接获取
      var parent = $(options.photos),
          pushData = function pushData() {
        data = [];
        parent.find(options.img).each(function (index) {
          var othis = $(this);
          othis.attr('layer-index', index);
          data.push({
            alt: othis.attr('alt'),
            pid: othis.attr('layer-pid'),
            src: othis.attr('layer-src') || othis.attr('src'),
            thumb: othis.attr('src')
          });
        });
      };

      pushData();

      if (data.length === 0) return;

      loop || parent.on('click', options.img, function () {
        var othis = $(this),
            index = othis.attr('layer-index');
        layer.photos($.extend(options, {
          photos: {
            start: index,
            data: data,
            tab: options.tab
          },
          full: options.full
        }), true);
        pushData();
      });

      //不直接弹出
      if (!loop) return;
    } else if (data.length === 0) {
      return layer.msg('&#x6CA1;&#x6709;&#x56FE;&#x7247;');
    }

    //上一张
    dict.imgprev = function (key) {
      dict.imgIndex--;
      if (dict.imgIndex < 1) {
        dict.imgIndex = data.length;
      }
      dict.tabimg(key);
    };

    //下一张
    dict.imgnext = function (key, errorMsg) {
      dict.imgIndex++;
      if (dict.imgIndex > data.length) {
        dict.imgIndex = 1;
        if (errorMsg) {
          return;
        };
      }
      dict.tabimg(key);
    };

    //方向键
    dict.keyup = function (event) {
      if (!dict.end) {
        var code = event.keyCode;
        event.preventDefault();
        if (code === 37) {
          dict.imgprev(true);
        } else if (code === 39) {
          dict.imgnext(true);
        } else if (code === 27) {
          layer.close(dict.index);
        }
      }
    };

    //切换
    dict.tabimg = function (key) {
      if (data.length <= 1) return;
      photos.start = dict.imgIndex - 1;
      layer.close(dict.index);
      layer.photos(options, true, key);
    };

    //一些动作
    dict.event = function () {
      dict.bigimg.hover(function () {
        dict.imgsee.show();
      }, function () {
        dict.imgsee.hide();
      });

      dict.bigimg.find('.layui-layer-imgprev').on('click', function (event) {
        event.preventDefault();
        dict.imgprev();
      });

      dict.bigimg.find('.layui-layer-imgnext').on('click', function (event) {
        event.preventDefault();
        dict.imgnext();
      });

      $(document).on('keyup', dict.keyup);
    };

    //图片预加载
    function loadImage(url, callback, error) {
      var img = new Image();
      img.src = url;
      if (img.complete) {
        return callback(img);
      }
      img.onload = function () {
        img.onload = null;
        callback(img);
      };
      img.onerror = function (e) {
        img.onerror = null;
        error(e);
      };
    };

    dict.loadi = layer.load(1, {
      shade: 'shade' in options ? false : 0.9,
      scrollbar: false
    });
    loadImage(data[start].src, function (img) {
      layer.close(dict.loadi);
      dict.index = layer.open($.extend({
        type: 1,
        area: function () {
          var imgarea = [img.width, img.height];
          var winarea = [$(window).width() - 50, $(window).height() - 50];
          if (!options.full && imgarea[0] > winarea[0]) {
            imgarea[0] = winarea[0];
            imgarea[1] = imgarea[0] * img.height / img.width;
          }
          return [imgarea[0] + 'px', imgarea[1] + 'px'];
        }(),
        title: false,
        shade: 0.9,
        shadeClose: true,
        closeBtn: false,
        move: '.layui-layer-phimg img',
        moveType: 1,
        scrollbar: false,
        moveOut: true,
        shift: Math.random() * 5 | 0,
        skin: 'layui-layer-photos' + skin('photos'),
        content: '<div class="layui-layer-phimg">' + '<img src="' + data[start].src + '" alt="' + (data[start].alt || '') + '" layer-pid="' + data[start].pid + '">' + '<div class="layui-layer-imgsee">' + (data.length > 1 ? '<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>' : '') + '<div class="layui-layer-imgbar" style="display:' + (key ? 'block' : '') + '"><span class="layui-layer-imgtit"><a href="javascript:;">' + (data[start].alt || '') + '</a><em>' + dict.imgIndex + '/' + data.length + '</em></span></div>' + '</div>' + '</div>',
        success: function success(layero, index) {
          dict.bigimg = layero.find('.layui-layer-phimg');
          dict.imgsee = layero.find('.layui-layer-imguide,.layui-layer-imgbar');
          dict.event(layero);
          options.tab && options.tab(data[start], layero);
        }, end: function end() {
          dict.end = true;
          $(document).off('keyup', dict.keyup);
        }
      }, options));
    }, function () {
      layer.close(dict.loadi);
      layer.msg('&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;', {
        time: 30000,
        btn: ['&#x4E0B;&#x4E00;&#x5F20;', '&#x4E0D;&#x770B;&#x4E86;'],
        yes: function yes() {
          data.length > 1 && dict.imgnext(true, true);
        }
      });
    });
  };

  //主入口
  _ready.run = function () {
    $ = jQuery;
    win = $(window);
    doms.html = $('html');
    layer.open = function (deliver) {
      var o = new Class(deliver);
      return o.index;
    };
  };

   true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    _ready.run();
    return layer;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : function () {
    _ready.run();
    layer.use('skin/layer.css');
  }();
}(window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.b45e5863.jpg";

/***/ })
],[6]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2pxdWVyeS9qcXVlcnktMS4xMi40Lm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2xheWVyL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2JnLmpwZyJdLCJuYW1lcyI6WyJhIiwiYiIsIm1vZHVsZSIsImV4cG9ydHMiLCJkb2N1bWVudCIsIkVycm9yIiwid2luZG93IiwiYyIsImQiLCJlIiwic2xpY2UiLCJmIiwiY29uY2F0IiwiZyIsInB1c2giLCJoIiwiaW5kZXhPZiIsImkiLCJqIiwidG9TdHJpbmciLCJrIiwiaGFzT3duUHJvcGVydHkiLCJsIiwibSIsIm4iLCJmbiIsImluaXQiLCJvIiwicCIsInEiLCJyIiwidG9VcHBlckNhc2UiLCJwcm90b3R5cGUiLCJqcXVlcnkiLCJjb25zdHJ1Y3RvciIsInNlbGVjdG9yIiwibGVuZ3RoIiwidG9BcnJheSIsImNhbGwiLCJnZXQiLCJwdXNoU3RhY2siLCJtZXJnZSIsInByZXZPYmplY3QiLCJjb250ZXh0IiwiZWFjaCIsIm1hcCIsImFwcGx5IiwiYXJndW1lbnRzIiwiZmlyc3QiLCJlcSIsImxhc3QiLCJlbmQiLCJzb3J0Iiwic3BsaWNlIiwiZXh0ZW5kIiwiaXNGdW5jdGlvbiIsImlzUGxhaW5PYmplY3QiLCJpc0FycmF5IiwiZXhwYW5kbyIsIk1hdGgiLCJyYW5kb20iLCJyZXBsYWNlIiwiaXNSZWFkeSIsImVycm9yIiwibm9vcCIsInR5cGUiLCJBcnJheSIsImlzV2luZG93IiwiaXNOdW1lcmljIiwicGFyc2VGbG9hdCIsImlzRW1wdHlPYmplY3QiLCJub2RlVHlwZSIsIm93bkZpcnN0IiwiZ2xvYmFsRXZhbCIsInRyaW0iLCJleGVjU2NyaXB0IiwiZXZhbCIsImNhbWVsQ2FzZSIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJzIiwibWFrZUFycmF5IiwiT2JqZWN0IiwiaW5BcnJheSIsIm1heCIsImdyZXAiLCJndWlkIiwicHJveHkiLCJub3ciLCJEYXRlIiwic3VwcG9ydCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwic3BsaXQiLCJ0IiwidSIsInYiLCJ3IiwieCIsInkiLCJnYSIsInoiLCJBIiwiQiIsIkMiLCJEIiwiRSIsIkYiLCJwb3AiLCJHIiwiSCIsIkkiLCJKIiwiSyIsIkwiLCJNIiwiTiIsIk8iLCJQIiwiUmVnRXhwIiwiUSIsIlIiLCJTIiwiVCIsIlUiLCJWIiwiVyIsIklEIiwiQ0xBU1MiLCJUQUciLCJBVFRSIiwiUFNFVURPIiwiQ0hJTEQiLCJib29sIiwibmVlZHNDb250ZXh0IiwiWCIsIlkiLCJaIiwiJCIsIl8iLCJhYSIsImJhIiwiY2EiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJkYSIsImNoaWxkTm9kZXMiLCJlYSIsImZhIiwib3duZXJEb2N1bWVudCIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXNhIiwidGVzdCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInFhIiwiam9pbiIsIm9hIiwicGFyZW50Tm9kZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjYWNoZUxlbmd0aCIsInNoaWZ0IiwiaGEiLCJpYSIsImNyZWF0ZUVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImphIiwiYXR0ckhhbmRsZSIsImthIiwic291cmNlSW5kZXgiLCJuZXh0U2libGluZyIsImxhIiwibWEiLCJuYSIsImlzWE1MIiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0RG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUNvbW1lbnQiLCJnZXRCeUlkIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJmaW5kIiwiZmlsdGVyIiwiZ2V0QXR0cmlidXRlTm9kZSIsInZhbHVlIiwiaW5uZXJIVE1MIiwibWF0Y2hlc1NlbGVjdG9yIiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsImRpc2Nvbm5lY3RlZE1hdGNoIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJjb250YWlucyIsInNvcnREZXRhY2hlZCIsInVuc2hpZnQiLCJhdHRyIiwic3BlY2lmaWVkIiwidW5pcXVlU29ydCIsImRldGVjdER1cGxpY2F0ZXMiLCJzb3J0U3RhYmxlIiwiZ2V0VGV4dCIsInRleHRDb250ZW50IiwiZmlyc3RDaGlsZCIsIm5vZGVWYWx1ZSIsInNlbGVjdG9ycyIsImNyZWF0ZVBzZXVkbyIsIm1hdGNoIiwicmVsYXRpdmUiLCJkaXIiLCJwcmVGaWx0ZXIiLCJsYXN0Q2hpbGQiLCJ1bmlxdWVJRCIsInBzZXVkb3MiLCJzZXRGaWx0ZXJzIiwibm90IiwiaGFzIiwiaW5uZXJUZXh0IiwibGFuZyIsInRhcmdldCIsImxvY2F0aW9uIiwiaGFzaCIsInJvb3QiLCJmb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJoYXNGb2N1cyIsImhyZWYiLCJ0YWJJbmRleCIsImVuYWJsZWQiLCJkaXNhYmxlZCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJlbXB0eSIsInBhcmVudCIsImhlYWRlciIsImlucHV0IiwiYnV0dG9uIiwidGV4dCIsImV2ZW4iLCJvZGQiLCJsdCIsImd0IiwibnRoIiwicmFkaW8iLCJjaGVja2JveCIsImZpbGUiLCJwYXNzd29yZCIsImltYWdlIiwic3VibWl0IiwicmVzZXQiLCJwYSIsImZpbHRlcnMiLCJ0b2tlbml6ZSIsInJhIiwic2EiLCJ0YSIsInVhIiwidmEiLCJ3YSIsInhhIiwiY29tcGlsZSIsInNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsImV4cHIiLCJ1bmlxdWUiLCJpc1hNTERvYyIsImlzIiwiY2hhckF0IiwicGFyc2VIVE1MIiwicmVhZHkiLCJjaGlsZHJlbiIsImNvbnRlbnRzIiwibmV4dCIsInByZXYiLCJjbG9zZXN0IiwiaW5kZXgiLCJwcmV2QWxsIiwiYWRkIiwiYWRkQmFjayIsInBhcmVudHMiLCJwYXJlbnRzVW50aWwiLCJuZXh0QWxsIiwibmV4dFVudGlsIiwicHJldlVudGlsIiwic2libGluZ3MiLCJjb250ZW50RG9jdW1lbnQiLCJjb250ZW50V2luZG93IiwicmV2ZXJzZSIsIkNhbGxiYWNrcyIsIm9uY2UiLCJzdG9wT25GYWxzZSIsIm1lbW9yeSIsInJlbW92ZSIsImRpc2FibGUiLCJsb2NrIiwibG9ja2VkIiwiZmlyZVdpdGgiLCJmaXJlIiwiZmlyZWQiLCJEZWZlcnJlZCIsInN0YXRlIiwiYWx3YXlzIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwicHJvbWlzZSIsInByb2dyZXNzIiwibm90aWZ5IiwicmVzb2x2ZSIsInJlamVjdCIsInBpcGUiLCJ3aGVuIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwicmVhZHlXYWl0IiwiaG9sZFJlYWR5IiwidHJpZ2dlckhhbmRsZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGV0YWNoRXZlbnQiLCJldmVudCIsInJlYWR5U3RhdGUiLCJkb1Njcm9sbCIsInNldFRpbWVvdXQiLCJmcmFtZUVsZW1lbnQiLCJpbmxpbmVCbG9ja05lZWRzTGF5b3V0Iiwic3R5bGUiLCJjc3NUZXh0Iiwiem9vbSIsIm9mZnNldFdpZHRoIiwiZGVsZXRlRXhwYW5kbyIsIm5vRGF0YSIsInBhcnNlSlNPTiIsImRhdGEiLCJjYWNoZSIsInRvSlNPTiIsImNsZWFuRGF0YSIsImhhc0RhdGEiLCJyZW1vdmVEYXRhIiwiX2RhdGEiLCJfcmVtb3ZlRGF0YSIsIm5hbWUiLCJxdWV1ZSIsImRlcXVldWUiLCJfcXVldWVIb29rcyIsInN0b3AiLCJjbGVhclF1ZXVlIiwic2hyaW5rV3JhcEJsb2NrcyIsIndpZHRoIiwic291cmNlIiwiY3NzIiwiY3VyIiwiY3NzTnVtYmVyIiwidW5pdCIsInN0YXJ0IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImxlYWRpbmdXaGl0ZXNwYWNlIiwidGJvZHkiLCJodG1sU2VyaWFsaXplIiwiaHRtbDVDbG9uZSIsImNsb25lTm9kZSIsIm91dGVySFRNTCIsImFwcGVuZENoZWNrZWQiLCJub0Nsb25lQ2hlY2tlZCIsImNoZWNrQ2xvbmUiLCJub0Nsb25lRXZlbnQiLCJvcHRpb24iLCJsZWdlbmQiLCJhcmVhIiwicGFyYW0iLCJ0aGVhZCIsInRyIiwiY29sIiwidGQiLCJfZGVmYXVsdCIsIm9wdGdyb3VwIiwidGZvb3QiLCJjb2xncm91cCIsImNhcHRpb24iLCJ0aCIsImRlZmF1bHRDaGVja2VkIiwiaHRtbFByZWZpbHRlciIsImNyZWF0ZVRleHROb2RlIiwiY2hhbmdlIiwiZm9jdXNpbiIsImdsb2JhbCIsImhhbmRsZXIiLCJldmVudHMiLCJoYW5kbGUiLCJ0cmlnZ2VyZWQiLCJkaXNwYXRjaCIsImVsZW0iLCJzcGVjaWFsIiwiZGVsZWdhdGVUeXBlIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsIm5hbWVzcGFjZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnQiLCJ0cmlnZ2VyIiwiRXZlbnQiLCJpc1RyaWdnZXIiLCJybmFtZXNwYWNlIiwicmVzdWx0Iiwibm9CdWJibGUiLCJwYXJlbnRXaW5kb3ciLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsInByZXZlbnREZWZhdWx0IiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZml4IiwiZGVsZWdhdGVUYXJnZXQiLCJwcmVEaXNwYXRjaCIsImhhbmRsZXJzIiwiY3VycmVudFRhcmdldCIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwiaGFuZGxlT2JqIiwic3RvcFByb3BhZ2F0aW9uIiwicG9zdERpc3BhdGNoIiwiaXNOYU4iLCJmaXhIb29rcyIsIm1vdXNlSG9va3MiLCJrZXlIb29rcyIsInByb3BzIiwic3JjRWxlbWVudCIsIm1ldGFLZXkiLCJ3aGljaCIsImNoYXJDb2RlIiwia2V5Q29kZSIsImZyb21FbGVtZW50IiwicGFnZVgiLCJjbGllbnRYIiwiYm9keSIsInNjcm9sbExlZnQiLCJjbGllbnRMZWZ0IiwicGFnZVkiLCJjbGllbnRZIiwic2Nyb2xsVG9wIiwiY2xpZW50VG9wIiwicmVsYXRlZFRhcmdldCIsInRvRWxlbWVudCIsImxvYWQiLCJibHVyIiwiY2xpY2siLCJiZWZvcmV1bmxvYWQiLCJvcmlnaW5hbEV2ZW50IiwicmV0dXJuVmFsdWUiLCJzaW11bGF0ZSIsImlzU2ltdWxhdGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInRpbWVTdGFtcCIsImNhbmNlbEJ1YmJsZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwicHJvcCIsIl9zdWJtaXRCdWJibGUiLCJwcm9wZXJ0eU5hbWUiLCJfanVzdENoYW5nZWQiLCJvbiIsIm9uZSIsInlhIiwiemEiLCJBYSIsIkJhIiwiQ2EiLCJEYSIsIkVhIiwiRmEiLCJHYSIsImRlZmF1bHRTZWxlY3RlZCIsIkhhIiwiaHRtbCIsImNsb25lIiwic3JjIiwiX2V2YWxVcmwiLCJJYSIsImRvbU1hbmlwIiwiZGV0YWNoIiwiYXBwZW5kIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImFmdGVyIiwib3B0aW9ucyIsInJlcGxhY2VXaXRoIiwicmVwbGFjZUNoaWxkIiwiYXBwZW5kVG8iLCJwcmVwZW5kVG8iLCJpbnNlcnRBZnRlciIsInJlcGxhY2VBbGwiLCJKYSIsIkthIiwiSFRNTCIsIkJPRFkiLCJMYSIsIk1hIiwid3JpdGUiLCJjbG9zZSIsIk5hIiwiT2EiLCJQYSIsIlFhIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImRpc3BsYXkiLCJnZXRDbGllbnRSZWN0cyIsImJvcmRlckNvbGxhcHNlIiwib2Zmc2V0SGVpZ2h0Iiwib3BhY2l0eSIsImNzc0Zsb2F0IiwiYmFja2dyb3VuZENsaXAiLCJjbGVhckNsb25lU3R5bGUiLCJib3hTaXppbmciLCJNb3pCb3hTaXppbmciLCJXZWJraXRCb3hTaXppbmciLCJyZWxpYWJsZUhpZGRlbk9mZnNldHMiLCJib3hTaXppbmdSZWxpYWJsZSIsInBpeGVsTWFyZ2luUmlnaHQiLCJwaXhlbFBvc2l0aW9uIiwicmVsaWFibGVNYXJnaW5SaWdodCIsInJlbGlhYmxlTWFyZ2luTGVmdCIsIlJhIiwiU2EiLCJUYSIsIm9wZW5lciIsImdldFByb3BlcnR5VmFsdWUiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiY3VycmVudFN0eWxlIiwibGVmdCIsInJ1bnRpbWVTdHlsZSIsInBpeGVsTGVmdCIsIlVhIiwiVmEiLCJXYSIsIlhhIiwiWWEiLCJaYSIsInBvc2l0aW9uIiwidmlzaWJpbGl0eSIsIiRhIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJfYSIsImFiIiwiYmIiLCJjYiIsImRiIiwiZWIiLCJmYiIsImNzc0hvb2tzIiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJjb2x1bW5Db3VudCIsImZpbGxPcGFjaXR5IiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwibGluZUhlaWdodCIsIm9yZGVyIiwib3JwaGFucyIsIndpZG93cyIsInpJbmRleCIsImNzc1Byb3BzIiwic2V0IiwiaXNGaW5pdGUiLCIkMSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJleHBhbmQiLCJzaG93IiwiaGlkZSIsInRvZ2dsZSIsImdiIiwiVHdlZW4iLCJlYXNpbmciLCJwcm9wSG9va3MiLCJydW4iLCJkdXJhdGlvbiIsInBvcyIsInN0ZXAiLCJmeCIsImxpbmVhciIsInN3aW5nIiwiY29zIiwiUEkiLCJoYiIsImliIiwiamIiLCJrYiIsImxiIiwibWIiLCJoZWlnaHQiLCJuYiIsInFiIiwidHdlZW5lcnMiLCJvYiIsInVucXVldWVkIiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJoaWRkZW4iLCJwYiIsInByZWZpbHRlcnMiLCJzdGFydFRpbWUiLCJ0d2VlbnMiLCJvcHRzIiwic3BlY2lhbEVhc2luZyIsIm9yaWdpbmFsUHJvcGVydGllcyIsIm9yaWdpbmFsT3B0aW9ucyIsImNyZWF0ZVR3ZWVuIiwicmVqZWN0V2l0aCIsInRpbWVyIiwiYW5pbSIsImNvbXBsZXRlIiwiQW5pbWF0aW9uIiwidHdlZW5lciIsInByZWZpbHRlciIsInNwZWVkIiwic3BlZWRzIiwib2xkIiwiZmFkZVRvIiwiYW5pbWF0ZSIsImZpbmlzaCIsInRpbWVycyIsInNsaWRlRG93biIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsImZhZGVJbiIsImZhZGVPdXQiLCJmYWRlVG9nZ2xlIiwidGljayIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2xvdyIsImZhc3QiLCJkZWxheSIsImNsZWFyVGltZW91dCIsImdldFNldEF0dHJpYnV0ZSIsImhyZWZOb3JtYWxpemVkIiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwiZW5jdHlwZSIsIm9wdERpc2FibGVkIiwicmFkaW9WYWx1ZSIsInJiIiwic2IiLCJ2YWwiLCJ2YWxIb29rcyIsInNjcm9sbEhlaWdodCIsInRiIiwidWIiLCJ2YiIsIndiIiwieGIiLCJ5YiIsInJlbW92ZUF0dHIiLCJhdHRySG9va3MiLCJwcm9wRml4Iiwic2V0QXR0cmlidXRlTm9kZSIsImNyZWF0ZUF0dHJpYnV0ZSIsImNvb3JkcyIsImNvbnRlbnRlZGl0YWJsZSIsInpiIiwiQWIiLCJyZW1vdmVQcm9wIiwicGFyc2VJbnQiLCJCYiIsIkNiIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJob3ZlciIsIkRiIiwiRWIiLCJGYiIsIkdiIiwiSlNPTiIsInBhcnNlIiwiRnVuY3Rpb24iLCJwYXJzZVhNTCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsIkFjdGl2ZVhPYmplY3QiLCJhc3luYyIsImxvYWRYTUwiLCJIYiIsIkliIiwiSmIiLCJLYiIsIkxiIiwiTWIiLCJOYiIsIk9iIiwiUGIiLCJRYiIsIlJiIiwiU2IiLCJUYiIsIlViIiwiZGF0YVR5cGVzIiwiVmIiLCJhamF4U2V0dGluZ3MiLCJmbGF0T3B0aW9ucyIsIldiIiwibWltZVR5cGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImNvbnZlcnRlcnMiLCJYYiIsInJlc3BvbnNlRmllbGRzIiwiZGF0YUZpbHRlciIsImRhdGFUeXBlIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiYWNjZXB0cyIsInhtbCIsImpzb24iLCJhamF4U2V0dXAiLCJhamF4UHJlZmlsdGVyIiwiYWpheFRyYW5zcG9ydCIsImFqYXgiLCJzdGF0dXNDb2RlIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2V0UmVxdWVzdEhlYWRlciIsIm92ZXJyaWRlTWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsInN1Y2Nlc3MiLCJtZXRob2QiLCJjcm9zc0RvbWFpbiIsInRyYWRpdGlvbmFsIiwiaGFzQ29udGVudCIsImlmTW9kaWZpZWQiLCJoZWFkZXJzIiwiYmVmb3JlU2VuZCIsInRpbWVvdXQiLCJzZW5kIiwic3RhdHVzVGV4dCIsImdldEpTT04iLCJnZXRTY3JpcHQiLCJ3cmFwQWxsIiwid3JhcElubmVyIiwid3JhcCIsInVud3JhcCIsIlliIiwiWmIiLCJ2aXNpYmxlIiwiJGIiLCJfYiIsImFjIiwiYmMiLCJjYyIsImRjIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplIiwic2VyaWFsaXplQXJyYXkiLCJ4aHIiLCJpYyIsImRvY3VtZW50TW9kZSIsImhjIiwiZWMiLCJmYyIsImdjIiwiY29ycyIsIm9wZW4iLCJ1c2VybmFtZSIsInhockZpZWxkcyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlc3BvbnNlVGV4dCIsIlhNTEh0dHBSZXF1ZXN0Iiwic2NyaXB0IiwiaGVhZCIsInNjcmlwdENoYXJzZXQiLCJjaGFyc2V0Iiwib25sb2FkIiwiamMiLCJrYyIsImpzb25wIiwianNvbnBDYWxsYmFjayIsImxjIiwiYW5pbWF0ZWQiLCJtYyIsIm9mZnNldCIsInNldE9mZnNldCIsInVzaW5nIiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsIm9mZnNldFBhcmVudCIsInNjcm9sbFRvIiwiSGVpZ2h0IiwiV2lkdGgiLCJjb250ZW50IiwiYmluZCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsInNpemUiLCJhbmRTZWxmIiwibmMiLCJqUXVlcnkiLCJvYyIsIm5vQ29uZmxpY3QiLCJiZyIsInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIiwibGF5ZXIiLCJnZXRCcm93c2VySW5mbyIsImFnZW50IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwicmVnU3RyX2llIiwicmVnU3RyX2ZmIiwicmVnU3RyX2Nocm9tZSIsInJlZ1N0cl9zYWYiLCJicm93c2VyIiwidmVyaW5mbyIsImFhYSIsIm1zZyIsImNvbmZpcm0iLCJ1bmRlZmluZWQiLCJ3aW4iLCJnZXRQYXRoIiwianMiLCJzY3JpcHRzIiwianNQYXRoIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJlbnRlciIsImNvbmZpZyIsImJ0biIsImllNiIsInBhdGgiLCJpdGVtIiwidXNlIiwibG9vcCIsImV4dCIsInJlYWR5TWV0aG9kIiwiaXNjc3MiLCJub2RlIiwicmVsIiwicG9sbCIsImFsZXJ0IiwieWVzIiwiY2FuY2VsIiwiYnRuMiIsInJza2luIiwic2tpbiIsImRvbXMiLCJ0aW1lIiwic2hhZGUiLCJ0aXRsZSIsImNsb3NlQnRuIiwiaWNvbiIsInRpcHMiLCJmb2xsb3ciLCJDbGFzcyIsInNldGluZ3MiLCJ0aGF0IiwiY3JlYXQiLCJwdCIsIm1vdmUiLCJzY3JvbGxiYXIiLCJ2ZXNzZWwiLCJjb25UeXBlIiwiY2FsbGJhY2siLCJ0aW1lcyIsInRpdHlwZSIsImlzbWF4IiwibWF4bWluIiwidGl0bGVIVE1MIiwiY2xvc2VidG4iLCJsZW4iLCJub2RlSW5kZXgiLCJjbG9zZUFsbCIsInRpcHNNb3JlIiwibGF5ZXJvIiwiYXV0byIsImlubmVyV2lkdGgiLCJvdXRlcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ0aXRIZWlnaHQiLCJvdXRlckhlaWdodCIsImJ0bkhlaWdodCIsInNldEhlaWdodCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJsYXlBcmVhIiwiZ29hbCIsInRpcHNHIiwiZ3VpZGUiLCJhdXRvTGVmdCIsInRpcExlZnQiLCJyaWdodCIsIndoZXJlIiwidGlwVG9wIiwiY29uZiIsInNldFkiLCJtb3ZlTGF5ZXIiLCJtZ2xlZnQiLCJsZWZ0cyIsIm1vdmVkb20iLCJjdXJzb3IiLCJpc21vdmUiLCJ4eCIsInl5Iiwid3ciLCJoaCIsIm1vdmVUeXBlIiwibW92ZVgiLCJtb3ZlWSIsIm1vdXNlbW92ZSIsIm9mZnNldFgiLCJvZmZzZXRZIiwibW92ZU91dCIsInNldFJpZyIsInNldFRvcCIsIm1vdXNldXAiLCJtb3ZlRW5kIiwib3BlbkxheWVyIiwiSUU2Iiwic2hhZGVDbG9zZSIsIm1pbiIsInJlc3RvcmUiLCJmdWxsIiwicmVzZWxlY3QiLCJzdGhpcyIsIl9pZVRvcCIsImllNkZpeCIsInNjcm9sbCIsInNldFppbmRleCIsInJlY29yZCIsInJlc2NvbGxiYXIiLCJyZW1vdmVQcm9wZXJ0eSIsImdldENoaWxkRnJhbWUiLCJnZXRGcmFtZUluZGV4IiwiaWZyYW1lQXV0byIsImhlZyIsImlmcmFtZVNyYyIsImlzZml4IiwiaWZyYW1lIiwib3RoaXMiLCJwcm9tcHQiLCJmb3JtVHlwZSIsIm1heGxlbmd0aCIsInRhYiIsImlpIiwic3RyIiwibWFpbiIsInBob3RvcyIsImtleSIsImRpY3QiLCJpbWdJbmRleCIsImltZyIsInB1c2hEYXRhIiwiYWx0IiwicGlkIiwidGh1bWIiLCJpbWdwcmV2IiwidGFiaW1nIiwiaW1nbmV4dCIsImVycm9yTXNnIiwia2V5dXAiLCJjb2RlIiwiYmlnaW1nIiwiaW1nc2VlIiwibG9hZEltYWdlIiwiSW1hZ2UiLCJvbmVycm9yIiwibG9hZGkiLCJpbWdhcmVhIiwid2luYXJlYSIsImRlbGl2ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsQ0FBQyxVQUFTQSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLDhDQUFpQkMsTUFBakIsTUFBeUIsb0JBQWlCQSxPQUFPQyxPQUF4QixDQUF6QixHQUF5REQsT0FBT0MsT0FBUCxHQUFlSCxFQUFFSSxRQUFGLEdBQVdILEVBQUVELENBQUYsRUFBSSxDQUFDLENBQUwsQ0FBWCxHQUFtQixVQUFTQSxDQUFULEVBQVc7QUFBQyxRQUFHLENBQUNBLEVBQUVJLFFBQU4sRUFBZSxNQUFNLElBQUlDLEtBQUosQ0FBVSwwQ0FBVixDQUFOLENBQTRELE9BQU9KLEVBQUVELENBQUYsQ0FBUDtBQUFZLEdBQTlMLEdBQStMQyxFQUFFRCxDQUFGLENBQS9MO0FBQW9NLENBQWxOLENBQW1OLGVBQWEsT0FBT00sTUFBcEIsR0FBMkJBLE1BQTNCLFlBQW5OLEVBQTBQLFVBQVNOLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsTUFBSU0sSUFBRSxFQUFOO0FBQUEsTUFBU0MsSUFBRVIsRUFBRUksUUFBYjtBQUFBLE1BQXNCSyxJQUFFRixFQUFFRyxLQUExQjtBQUFBLE1BQWdDQyxJQUFFSixFQUFFSyxNQUFwQztBQUFBLE1BQTJDQyxJQUFFTixFQUFFTyxJQUEvQztBQUFBLE1BQW9EQyxJQUFFUixFQUFFUyxPQUF4RDtBQUFBLE1BQWdFQyxJQUFFLEVBQWxFO0FBQUEsTUFBcUVDLElBQUVELEVBQUVFLFFBQXpFO0FBQUEsTUFBa0ZDLElBQUVILEVBQUVJLGNBQXRGO0FBQUEsTUFBcUdDLElBQUUsRUFBdkc7QUFBQSxNQUEwR0MsSUFBRSxRQUE1RztBQUFB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NE8sVUFBTTRCLEdBQU4sQ0FBVSxnQkFBVjtBQUNGLEdBSEksRUFITDtBQVFDLENBL2hDQyxDQStoQ0FyMUIsTUEvaENBLENBQUQsQzs7Ozs7OztBQ1RELCtEIiwiZmlsZSI6ImpzLy9pbmRleC5qcz92PWEyMWI5Y2Y1Iiwic291cmNlc0NvbnRlbnQiOlsiLyohIGpRdWVyeSB2MS4xMi40IHwgKGMpIGpRdWVyeSBGb3VuZGF0aW9uIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YS5kb2N1bWVudD9iKGEsITApOmZ1bmN0aW9uKGEpe2lmKCFhLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIGIoYSl9OmIoYSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oYSxiKXt2YXIgYz1bXSxkPWEuZG9jdW1lbnQsZT1jLnNsaWNlLGY9Yy5jb25jYXQsZz1jLnB1c2gsaD1jLmluZGV4T2YsaT17fSxqPWkudG9TdHJpbmcsaz1pLmhhc093blByb3BlcnR5LGw9e30sbT1cIjEuMTIuNFwiLG49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IG4uZm4uaW5pdChhLGIpfSxvPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxwPS9eLW1zLS8scT0vLShbXFxkYS16XSkvZ2kscj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O24uZm49bi5wcm90b3R5cGU9e2pxdWVyeTptLGNvbnN0cnVjdG9yOm4sc2VsZWN0b3I6XCJcIixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGUuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPzA+YT90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV06ZS5jYWxsKHRoaXMpfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9bi5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGIuY29udGV4dD10aGlzLmNvbnRleHQsYn0sZWFjaDpmdW5jdGlvbihhKXtyZXR1cm4gbi5lYWNoKHRoaXMsYSl9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKDA+YT9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZiPmM/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOmcsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxuLmV4dGVuZD1uLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fG4uaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aT5oO2grKylpZihudWxsIT0oZT1hcmd1bWVudHNbaF0pKWZvcihkIGluIGUpYT1nW2RdLGM9ZVtkXSxnIT09YyYmKGomJmMmJihuLmlzUGxhaW5PYmplY3QoYyl8fChiPW4uaXNBcnJheShjKSkpPyhiPyhiPSExLGY9YSYmbi5pc0FycmF5KGEpP2E6W10pOmY9YSYmbi5pc1BsYWluT2JqZWN0KGEpP2E6e30sZ1tkXT1uLmV4dGVuZChqLGYsYykpOnZvaWQgMCE9PWMmJihnW2RdPWMpKTtyZXR1cm4gZ30sbi5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisobStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1uLnR5cGUoYSl9LGlzQXJyYXk6QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuXCJhcnJheVwiPT09bi50eXBlKGEpfSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXt2YXIgYj1hJiZhLnRvU3RyaW5nKCk7cmV0dXJuIW4uaXNBcnJheShhKSYmYi1wYXJzZUZsb2F0KGIpKzE+PTB9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7Zm9yKGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtpZighYXx8XCJvYmplY3RcIiE9PW4udHlwZShhKXx8YS5ub2RlVHlwZXx8bi5pc1dpbmRvdyhhKSlyZXR1cm4hMTt0cnl7aWYoYS5jb25zdHJ1Y3RvciYmIWsuY2FsbChhLFwiY29uc3RydWN0b3JcIikmJiFrLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExfWNhdGNoKGMpe3JldHVybiExfWlmKCFsLm93bkZpcnN0KWZvcihiIGluIGEpcmV0dXJuIGsuY2FsbChhLGIpO2ZvcihiIGluIGEpO3JldHVybiB2b2lkIDA9PT1ifHxrLmNhbGwoYSxiKX0sdHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/aVtqLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGIpe2ImJm4udHJpbShiKSYmKGEuZXhlY1NjcmlwdHx8ZnVuY3Rpb24oYil7YS5ldmFsLmNhbGwoYSxiKX0pKGIpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShwLFwibXMtXCIpLnJlcGxhY2UocSxyKX0sbm9kZU5hbWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wO2lmKHMoYSkpe2ZvcihjPWEubGVuZ3RoO2M+ZDtkKyspaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrfWVsc2UgZm9yKGQgaW4gYSlpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKG8sXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYocyhPYmplY3QoYSkpP24ubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6Zy5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKGIpe2lmKGgpcmV0dXJuIGguY2FsbChiLGEsYyk7Zm9yKGQ9Yi5sZW5ndGgsYz1jPzA+Yz9NYXRoLm1heCgwLGQrYyk6YzowO2Q+YztjKyspaWYoYyBpbiBiJiZiW2NdPT09YSlyZXR1cm4gY31yZXR1cm4tMX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXt2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7d2hpbGUoYz5kKWFbZSsrXT1iW2QrK107aWYoYyE9PWMpd2hpbGUodm9pZCAwIT09YltkXSlhW2UrK109YltkKytdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7Zz5mO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGc9MCxoPVtdO2lmKHMoYSkpZm9yKGQ9YS5sZW5ndGg7ZD5nO2crKyllPWIoYVtnXSxnLGMpLG51bGwhPWUmJmgucHVzaChlKTtlbHNlIGZvcihnIGluIGEpZT1iKGFbZ10sZyxjKSxudWxsIT1lJiZoLnB1c2goZSk7cmV0dXJuIGYuYXBwbHkoW10saCl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGY9YVtiXSxiPWEsYT1mKSxuLmlzRnVuY3Rpb24oYSk/KGM9ZS5jYWxsKGFyZ3VtZW50cywyKSxkPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxjLmNvbmNhdChlLmNhbGwoYXJndW1lbnRzKSkpfSxkLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8bi5ndWlkKyssZCk6dm9pZCAwfSxub3c6ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9LHN1cHBvcnQ6bH0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKG4uZm5bU3ltYm9sLml0ZXJhdG9yXT1jW1N5bWJvbC5pdGVyYXRvcl0pLG4uZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7aVtcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gcyhhKXt2YXIgYj0hIWEmJlwibGVuZ3RoXCJpbiBhJiZhLmxlbmd0aCxjPW4udHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCI9PT1jfHxuLmlzV2luZG93KGEpPyExOlwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYX12YXIgdD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1PVwic2l6emxlXCIrMSpuZXcgRGF0ZSx2PWEuZG9jdW1lbnQsdz0wLHg9MCx5PWdhKCksej1nYSgpLEE9Z2EoKSxCPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1iJiYobD0hMCksMH0sQz0xPDwzMSxEPXt9Lmhhc093blByb3BlcnR5LEU9W10sRj1FLnBvcCxHPUUucHVzaCxIPUUucHVzaCxJPUUuc2xpY2UsSj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sSz1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTD1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsTT1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcXFx4MDAtXFxcXHhhMF0pK1wiLE49XCJcXFxcW1wiK0wrXCIqKFwiK00rXCIpKD86XCIrTCtcIiooWypeJHwhfl0/PSlcIitMK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTStcIikpfClcIitMK1wiKlxcXFxdXCIsTz1cIjooXCIrTStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrTitcIikqKXwuKilcXFxcKXwpXCIsUD1uZXcgUmVnRXhwKEwrXCIrXCIsXCJnXCIpLFE9bmV3IFJlZ0V4cChcIl5cIitMK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitMK1wiKyRcIixcImdcIiksUj1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqLFwiK0wrXCIqXCIpLFM9bmV3IFJlZ0V4cChcIl5cIitMK1wiKihbPit+XXxcIitMK1wiKVwiK0wrXCIqXCIpLFQ9bmV3IFJlZ0V4cChcIj1cIitMK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrTCtcIipcXFxcXVwiLFwiZ1wiKSxVPW5ldyBSZWdFeHAoTyksVj1uZXcgUmVnRXhwKFwiXlwiK00rXCIkXCIpLFc9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitNK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK00rXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitNK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK04pLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK08pLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK0wrXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitMK1wiKig/OihbKy1dfClcIitMK1wiKihcXFxcZCspfCkpXCIrTCtcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitLK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTCtcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTCtcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTCtcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFk9L15oXFxkJC9pLFo9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LywkPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLF89L1srfl0vLGFhPS8nfFxcXFwvZyxiYT1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrTCtcIj98KFwiK0wrXCIpfC4pXCIsXCJpZ1wiKSxjYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCIweFwiK2ItNjU1MzY7cmV0dXJuIGQhPT1kfHxjP2I6MD5kP1N0cmluZy5mcm9tQ2hhckNvZGUoZCs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShkPj4xMHw1NTI5NiwxMDIzJmR8NTYzMjApfSxkYT1mdW5jdGlvbigpe20oKX07dHJ5e0guYXBwbHkoRT1JLmNhbGwodi5jaGlsZE5vZGVzKSx2LmNoaWxkTm9kZXMpLEVbdi5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZWEpe0g9e2FwcGx5OkUubGVuZ3RoP2Z1bmN0aW9uKGEsYil7Ry5hcHBseShhLEkuY2FsbChiKSl9OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5sZW5ndGgsZD0wO3doaWxlKGFbYysrXT1iW2QrK10pO2EubGVuZ3RoPWMtMX19fWZ1bmN0aW9uIGZhKGEsYixkLGUpe3ZhciBmLGgsaixrLGwsbyxyLHMsdz1iJiZiLm93bmVyRG9jdW1lbnQseD1iP2Iubm9kZVR5cGU6OTtpZihkPWR8fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBhfHwhYXx8MSE9PXgmJjkhPT14JiYxMSE9PXgpcmV0dXJuIGQ7aWYoIWUmJigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixwKSl7aWYoMTEhPT14JiYobz0kLmV4ZWMoYSkpKWlmKGY9b1sxXSl7aWYoOT09PXgpe2lmKCEoaj1iLmdldEVsZW1lbnRCeUlkKGYpKSlyZXR1cm4gZDtpZihqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZSBpZih3JiYoaj13LmdldEVsZW1lbnRCeUlkKGYpKSYmdChiLGopJiZqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZXtpZihvWzJdKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoZj1vWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZikpLGR9aWYoYy5xc2EmJiFBW2ErXCIgXCJdJiYoIXF8fCFxLnRlc3QoYSkpKXtpZigxIT09eCl3PWIscz1hO2Vsc2UgaWYoXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7KGs9Yi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/az1rLnJlcGxhY2UoYWEsXCJcXFxcJCZcIik6Yi5zZXRBdHRyaWJ1dGUoXCJpZFwiLGs9dSkscj1nKGEpLGg9ci5sZW5ndGgsbD1WLnRlc3Qoayk/XCIjXCIrazpcIltpZD0nXCIraytcIiddXCI7d2hpbGUoaC0tKXJbaF09bCtcIiBcIitxYShyW2hdKTtzPXIuam9pbihcIixcIiksdz1fLnRlc3QoYSkmJm9hKGIucGFyZW50Tm9kZSl8fGJ9aWYocyl0cnl7cmV0dXJuIEguYXBwbHkoZCx3LnF1ZXJ5U2VsZWN0b3JBbGwocykpLGR9Y2F0Y2goeSl7fWZpbmFsbHl7az09PXUmJmIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gaShhLnJlcGxhY2UoUSxcIiQxXCIpLGIsZCxlKX1mdW5jdGlvbiBnYSgpe3ZhciBhPVtdO2Z1bmN0aW9uIGIoYyxlKXtyZXR1cm4gYS5wdXNoKGMrXCIgXCIpPmQuY2FjaGVMZW5ndGgmJmRlbGV0ZSBiW2Euc2hpZnQoKV0sYltjK1wiIFwiXT1lfXJldHVybiBifWZ1bmN0aW9uIGhhKGEpe3JldHVybiBhW3VdPSEwLGF9ZnVuY3Rpb24gaWEoYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RyeXtyZXR1cm4hIWEoYil9Y2F0Y2goYyl7cmV0dXJuITF9ZmluYWxseXtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGx9fWZ1bmN0aW9uIGphKGEsYil7dmFyIGM9YS5zcGxpdChcInxcIiksZT1jLmxlbmd0aDt3aGlsZShlLS0pZC5hdHRySGFuZGxlW2NbZV1dPWJ9ZnVuY3Rpb24ga2EoYSxiKXt2YXIgYz1iJiZhLGQ9YyYmMT09PWEubm9kZVR5cGUmJjE9PT1iLm5vZGVUeXBlJiYofmIuc291cmNlSW5kZXh8fEMpLSh+YS5zb3VyY2VJbmRleHx8Qyk7aWYoZClyZXR1cm4gZDtpZihjKXdoaWxlKGM9Yy5uZXh0U2libGluZylpZihjPT09YilyZXR1cm4tMTtyZXR1cm4gYT8xOi0xfWZ1bmN0aW9uIGxhKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YyYmYi50eXBlPT09YX19ZnVuY3Rpb24gbWEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09Y3x8XCJidXR0b25cIj09PWMpJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBuYShhKXtyZXR1cm4gaGEoZnVuY3Rpb24oYil7cmV0dXJuIGI9K2IsaGEoZnVuY3Rpb24oYyxkKXt2YXIgZSxmPWEoW10sYy5sZW5ndGgsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pY1tlPWZbZ11dJiYoY1tlXT0hKGRbZV09Y1tlXSkpfSl9KX1mdW5jdGlvbiBvYShhKXtyZXR1cm4gYSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmF9Yz1mYS5zdXBwb3J0PXt9LGY9ZmEuaXNYTUw9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiBiP1wiSFRNTFwiIT09Yi5ub2RlTmFtZTohMX0sbT1mYS5zZXREb2N1bWVudD1mdW5jdGlvbihhKXt2YXIgYixlLGc9YT9hLm93bmVyRG9jdW1lbnR8fGE6djtyZXR1cm4gZyE9PW4mJjk9PT1nLm5vZGVUeXBlJiZnLmRvY3VtZW50RWxlbWVudD8obj1nLG89bi5kb2N1bWVudEVsZW1lbnQscD0hZihuKSwoZT1uLmRlZmF1bHRWaWV3KSYmZS50b3AhPT1lJiYoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGRhLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixkYSkpLGMuYXR0cmlidXRlcz1pYShmdW5jdGlvbihhKXtyZXR1cm4gYS5jbGFzc05hbWU9XCJpXCIsIWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksYy5nZXRFbGVtZW50c0J5VGFnTmFtZT1pYShmdW5jdGlvbihhKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChuLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxjLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9Wi50ZXN0KG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksYy5nZXRCeUlkPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBvLmFwcGVuZENoaWxkKGEpLmlkPXUsIW4uZ2V0RWxlbWVudHNCeU5hbWV8fCFuLmdldEVsZW1lbnRzQnlOYW1lKHUpLmxlbmd0aH0pLGMuZ2V0QnlJZD8oZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjPWIuZ2V0RWxlbWVudEJ5SWQoYSk7cmV0dXJuIGM/W2NdOltdfX0sZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT1ifX0pOihkZWxldGUgZC5maW5kLklELGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShiYSxjYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZU5vZGUmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5VGFnTmFtZT9iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpOmMucXNhP2IucXVlcnlTZWxlY3RvckFsbChhKTp2b2lkIDB9OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPTAsZj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpO2lmKFwiKlwiPT09YSl7d2hpbGUoYz1mW2UrK10pMT09PWMubm9kZVR5cGUmJmQucHVzaChjKTtyZXR1cm4gZH1yZXR1cm4gZn0sZC5maW5kLkNMQVNTPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZwP2IuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKTp2b2lkIDB9LHI9W10scT1bXSwoYy5xc2E9Wi50ZXN0KG4ucXVlcnlTZWxlY3RvckFsbCkpJiYoaWEoZnVuY3Rpb24oYSl7by5hcHBlbmRDaGlsZChhKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrdStcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK3UrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnEucHVzaChcIlsqXiRdPVwiK0wrXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxxLnB1c2goXCJcXFxcW1wiK0wrXCIqKD86dmFsdWV8XCIrSytcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIit1K1wiLV1cIikubGVuZ3RofHxxLnB1c2goXCJ+PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHEucHVzaChcIjpjaGVja2VkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcImEjXCIrdStcIisqXCIpLmxlbmd0aHx8cS5wdXNoKFwiLiMuK1srfl1cIil9KSxpYShmdW5jdGlvbihhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxhLmFwcGVuZENoaWxkKGIpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZxLnB1c2goXCJuYW1lXCIrTCtcIipbKl4kfCF+XT89XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHEucHVzaChcIiwuKjpcIil9KSksKGMubWF0Y2hlc1NlbGVjdG9yPVoudGVzdChzPW8ubWF0Y2hlc3x8by53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fG8ubW96TWF0Y2hlc1NlbGVjdG9yfHxvLm9NYXRjaGVzU2VsZWN0b3J8fG8ubXNNYXRjaGVzU2VsZWN0b3IpKSYmaWEoZnVuY3Rpb24oYSl7Yy5kaXNjb25uZWN0ZWRNYXRjaD1zLmNhbGwoYSxcImRpdlwiKSxzLmNhbGwoYSxcIltzIT0nJ106eFwiKSxyLnB1c2goXCIhPVwiLE8pfSkscT1xLmxlbmd0aCYmbmV3IFJlZ0V4cChxLmpvaW4oXCJ8XCIpKSxyPXIubGVuZ3RoJiZuZXcgUmVnRXhwKHIuam9pbihcInxcIikpLGI9Wi50ZXN0KG8uY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHQ9Ynx8Wi50ZXN0KG8uY29udGFpbnMpP2Z1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhKGMuY29udGFpbnM/Yy5jb250YWlucyhkKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQpKSl9OmZ1bmN0aW9uKGEsYil7aWYoYil3aGlsZShiPWIucGFyZW50Tm9kZSlpZihiPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sQj1iP2Z1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgZD0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gZD9kOihkPShhLm93bmVyRG9jdW1lbnR8fGEpPT09KGIub3duZXJEb2N1bWVudHx8Yik/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKToxLDEmZHx8IWMuc29ydERldGFjaGVkJiZiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpPT09ZD9hPT09bnx8YS5vd25lckRvY3VtZW50PT09diYmdCh2LGEpPy0xOmI9PT1ufHxiLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYik/MTprP0ooayxhKS1KKGssYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgYyxkPTAsZT1hLnBhcmVudE5vZGUsZj1iLnBhcmVudE5vZGUsZz1bYV0saD1bYl07aWYoIWV8fCFmKXJldHVybiBhPT09bj8tMTpiPT09bj8xOmU/LTE6Zj8xOms/SihrLGEpLUooayxiKTowO2lmKGU9PT1mKXJldHVybiBrYShhLGIpO2M9YTt3aGlsZShjPWMucGFyZW50Tm9kZSlnLnVuc2hpZnQoYyk7Yz1iO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTt3aGlsZShnW2RdPT09aFtkXSlkKys7cmV0dXJuIGQ/a2EoZ1tkXSxoW2RdKTpnW2RdPT09dj8tMTpoW2RdPT09dj8xOjB9LG4pOm59LGZhLm1hdGNoZXM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZmEoYSxudWxsLG51bGwsYil9LGZhLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihhLGIpe2lmKChhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSxiPWIucmVwbGFjZShULFwiPSckMSddXCIpLGMubWF0Y2hlc1NlbGVjdG9yJiZwJiYhQVtiK1wiIFwiXSYmKCFyfHwhci50ZXN0KGIpKSYmKCFxfHwhcS50ZXN0KGIpKSl0cnl7dmFyIGQ9cy5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZmEoYixuLG51bGwsW2FdKS5sZW5ndGg+MH0sZmEuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksdChhLGIpfSxmYS5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmRC5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFwKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFwP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZmEuZXJyb3I9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrYSl9LGZhLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZD1bXSxlPTAsZj0wO2lmKGw9IWMuZGV0ZWN0RHVwbGljYXRlcyxrPSFjLnNvcnRTdGFibGUmJmEuc2xpY2UoMCksYS5zb3J0KEIpLGwpe3doaWxlKGI9YVtmKytdKWI9PT1hW2ZdJiYoZT1kLnB1c2goZikpO3doaWxlKGUtLSlhLnNwbGljZShkW2VdLDEpfXJldHVybiBrPW51bGwsYX0sZT1mYS5nZXRUZXh0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZj1hLm5vZGVUeXBlO2lmKGYpe2lmKDE9PT1mfHw5PT09Znx8MTE9PT1mKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0Q29udGVudClyZXR1cm4gYS50ZXh0Q29udGVudDtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYys9ZShhKX1lbHNlIGlmKDM9PT1mfHw0PT09ZilyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1lKGIpO3JldHVybiBjfSxkPWZhLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmhhLG1hdGNoOlcsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnJlcGxhY2UoYmEsY2EpLGFbM109KGFbM118fGFbNF18fGFbNV18fFwiXCIpLnJlcGxhY2UoYmEsY2EpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGZhLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmZhLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzZdJiZhWzJdO3JldHVybiBXLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXT9hWzJdPWFbNF18fGFbNV18fFwiXCI6YyYmVS50ZXN0KGMpJiYoYj1nKGMsITApKSYmKGI9Yy5pbmRleE9mKFwiKVwiLGMubGVuZ3RoLWIpLWMubGVuZ3RoKSYmKGFbMF09YVswXS5zbGljZSgwLGIpLGFbMl09Yy5zbGljZSgwLGIpKSxhLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09YT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yn19LENMQVNTOmZ1bmN0aW9uKGEpe3ZhciBiPXlbYStcIiBcIl07cmV0dXJuIGJ8fChiPW5ldyBSZWdFeHAoXCIoXnxcIitMK1wiKVwiK2ErXCIoXCIrTCtcInwkKVwiKSkmJnkoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBhLmNsYXNzTmFtZSYmYS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe3ZhciBlPWZhLmF0dHIoZCxhKTtyZXR1cm4gbnVsbD09ZT9cIiE9XCI9PT1iOmI/KGUrPVwiXCIsXCI9XCI9PT1iP2U9PT1jOlwiIT1cIj09PWI/ZSE9PWM6XCJePVwiPT09Yj9jJiYwPT09ZS5pbmRleE9mKGMpOlwiKj1cIj09PWI/YyYmZS5pbmRleE9mKGMpPi0xOlwiJD1cIj09PWI/YyYmZS5zbGljZSgtYy5sZW5ndGgpPT09YzpcIn49XCI9PT1iPyhcIiBcIitlLnJlcGxhY2UoUCxcIiBcIikrXCIgXCIpLmluZGV4T2YoYyk+LTE6XCJ8PVwiPT09Yj9lPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIjohMSk6ITB9fSxDSElMRDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwibnRoXCIhPT1hLnNsaWNlKDAsMyksZz1cImxhc3RcIiE9PWEuc2xpY2UoLTQpLGg9XCJvZi10eXBlXCI9PT1iO3JldHVybiAxPT09ZCYmMD09PWU/ZnVuY3Rpb24oYSl7cmV0dXJuISFhLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbSxuLG8scD1mIT09Zz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixxPWIucGFyZW50Tm9kZSxyPWgmJmIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxzPSFpJiYhaCx0PSExO2lmKHEpe2lmKGYpe3doaWxlKHApe209Yjt3aGlsZShtPW1bcF0paWYoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKXJldHVybiExO289cD1cIm9ubHlcIj09PWEmJiFvJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYobz1bZz9xLmZpcnN0Q2hpbGQ6cS5sYXN0Q2hpbGRdLGcmJnMpe209cSxsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uJiZqWzJdLG09biYmcS5jaGlsZE5vZGVzW25dO3doaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKDE9PT1tLm5vZGVUeXBlJiYrK3QmJm09PT1iKXtrW2FdPVt3LG4sdF07YnJlYWt9fWVsc2UgaWYocyYmKG09YixsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uKSx0PT09ITEpd2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSkmJisrdCYmKHMmJihsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxrW2FdPVt3LHRdKSxtPT09YikpYnJlYWs7cmV0dXJuIHQtPWUsdD09PWR8fHQlZD09PTAmJnQvZD49MH19fSxQU0VVRE86ZnVuY3Rpb24oYSxiKXt2YXIgYyxlPWQucHNldWRvc1thXXx8ZC5zZXRGaWx0ZXJzW2EudG9Mb3dlckNhc2UoKV18fGZhLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIithKTtyZXR1cm4gZVt1XT9lKGIpOmUubGVuZ3RoPjE/KGM9W2EsYSxcIlwiLGJdLGQuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShhLnRvTG93ZXJDYXNlKCkpP2hhKGZ1bmN0aW9uKGEsYyl7dmFyIGQsZj1lKGEsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pZD1KKGEsZltnXSksYVtkXT0hKGNbZF09ZltnXSl9KTpmdW5jdGlvbihhKXtyZXR1cm4gZShhLDAsYyl9KTplfX0scHNldWRvczp7bm90OmhhKGZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9W10sZD1oKGEucmVwbGFjZShRLFwiJDFcIikpO3JldHVybiBkW3VdP2hhKGZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGc9ZChhLG51bGwsZSxbXSksaD1hLmxlbmd0aDt3aGlsZShoLS0pKGY9Z1toXSkmJihhW2hdPSEoYltoXT1mKSl9KTpmdW5jdGlvbihhLGUsZil7cmV0dXJuIGJbMF09YSxkKGIsbnVsbCxmLGMpLGJbMF09bnVsbCwhYy5wb3AoKX19KSxoYXM6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBmYShhLGIpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOmhhKGZ1bmN0aW9uKGEpe3JldHVybiBhPWEucmVwbGFjZShiYSxjYSksZnVuY3Rpb24oYil7cmV0dXJuKGIudGV4dENvbnRlbnR8fGIuaW5uZXJUZXh0fHxlKGIpKS5pbmRleE9mKGEpPi0xfX0pLGxhbmc6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIFYudGVzdChhfHxcIlwiKXx8ZmEuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIithKSxhPWEucmVwbGFjZShiYSxjYSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihiKXt2YXIgYztkbyBpZihjPXA/Yi5sYW5nOmIuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGIuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4gYz1jLnRvTG93ZXJDYXNlKCksYz09PWF8fDA9PT1jLmluZGV4T2YoYStcIi1cIik7d2hpbGUoKGI9Yi5wYXJlbnROb2RlKSYmMT09PWIubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihiKXt2YXIgYz1hLmxvY2F0aW9uJiZhLmxvY2F0aW9uLmhhc2g7cmV0dXJuIGMmJmMuc2xpY2UoMSk9PT1iLmlkfSxyb290OmZ1bmN0aW9uKGEpe3JldHVybiBhPT09b30sZm9jdXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1uLmFjdGl2ZUVsZW1lbnQmJighbi5oYXNGb2N1c3x8bi5oYXNGb2N1cygpKSYmISEoYS50eXBlfHxhLmhyZWZ8fH5hLnRhYkluZGV4KX0sZW5hYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSExfSxkaXNhYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSEwfSxjaGVja2VkOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiYhIWEuY2hlY2tlZHx8XCJvcHRpb25cIj09PWImJiEhYS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsYS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpaWYoYS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIWQucHNldWRvcy5lbXB0eShhKX0saGVhZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBZLnRlc3QoYS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGEpe3JldHVybiBYLnRlc3QoYS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmXCJidXR0b25cIj09PWEudHlwZXx8XCJidXR0b25cIj09PWJ9LHRleHQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWEudHlwZSYmKG51bGw9PShiPWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09Yi50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6bmEoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0Om5hKGZ1bmN0aW9uKGEsYil7cmV0dXJuW2ItMV19KSxlcTpuYShmdW5jdGlvbihhLGIsYyl7cmV0dXJuWzA+Yz9jK2I6Y119KSxldmVuOm5hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksb2RkOm5hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTE7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksbHQ6bmEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7LS1kPj0wOylhLnB1c2goZCk7cmV0dXJuIGF9KSxndDpuYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzsrK2Q8YjspYS5wdXNoKGQpO3JldHVybiBhfSl9fSxkLnBzZXVkb3MubnRoPWQucHNldWRvcy5lcTtmb3IoYiBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlkLnBzZXVkb3NbYl09bGEoYik7Zm9yKGIgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlkLnBzZXVkb3NbYl09bWEoYik7ZnVuY3Rpb24gcGEoKXt9cGEucHJvdG90eXBlPWQuZmlsdGVycz1kLnBzZXVkb3MsZC5zZXRGaWx0ZXJzPW5ldyBwYSxnPWZhLnRva2VuaXplPWZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGcsaCxpLGosaz16W2ErXCIgXCJdO2lmKGspcmV0dXJuIGI/MDprLnNsaWNlKDApO2g9YSxpPVtdLGo9ZC5wcmVGaWx0ZXI7d2hpbGUoaCl7YyYmIShlPVIuZXhlYyhoKSl8fChlJiYoaD1oLnNsaWNlKGVbMF0ubGVuZ3RoKXx8aCksaS5wdXNoKGY9W10pKSxjPSExLChlPVMuZXhlYyhoKSkmJihjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTplWzBdLnJlcGxhY2UoUSxcIiBcIil9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtmb3IoZyBpbiBkLmZpbHRlcikhKGU9V1tnXS5leGVjKGgpKXx8altnXSYmIShlPWpbZ10oZSkpfHwoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZyxtYXRjaGVzOmV9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtpZighYylicmVha31yZXR1cm4gYj9oLmxlbmd0aDpoP2ZhLmVycm9yKGEpOnooYSxpKS5zbGljZSgwKX07ZnVuY3Rpb24gcWEoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aCxkPVwiXCI7Yz5iO2IrKylkKz1hW2JdLnZhbHVlO3JldHVybiBkfWZ1bmN0aW9uIHJhKGEsYixjKXt2YXIgZD1iLmRpcixlPWMmJlwicGFyZW50Tm9kZVwiPT09ZCxmPXgrKztyZXR1cm4gYi5maXJzdD9mdW5jdGlvbihiLGMsZil7d2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXJldHVybiBhKGIsYyxmKX06ZnVuY3Rpb24oYixjLGcpe3ZhciBoLGksaixrPVt3LGZdO2lmKGcpe3doaWxlKGI9YltkXSlpZigoMT09PWIubm9kZVR5cGV8fGUpJiZhKGIsYyxnKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSl7aWYoaj1iW3VdfHwoYlt1XT17fSksaT1qW2IudW5pcXVlSURdfHwoaltiLnVuaXF1ZUlEXT17fSksKGg9aVtkXSkmJmhbMF09PT13JiZoWzFdPT09ZilyZXR1cm4ga1syXT1oWzJdO2lmKGlbZF09ayxrWzJdPWEoYixjLGcpKXJldHVybiEwfX19ZnVuY3Rpb24gc2EoYSl7cmV0dXJuIGEubGVuZ3RoPjE/ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEubGVuZ3RoO3doaWxlKGUtLSlpZighYVtlXShiLGMsZCkpcmV0dXJuITE7cmV0dXJuITB9OmFbMF19ZnVuY3Rpb24gdGEoYSxiLGMpe2Zvcih2YXIgZD0wLGU9Yi5sZW5ndGg7ZT5kO2QrKylmYShhLGJbZF0sYyk7cmV0dXJuIGN9ZnVuY3Rpb24gdWEoYSxiLGMsZCxlKXtmb3IodmFyIGYsZz1bXSxoPTAsaT1hLmxlbmd0aCxqPW51bGwhPWI7aT5oO2grKykoZj1hW2hdKSYmKGMmJiFjKGYsZCxlKXx8KGcucHVzaChmKSxqJiZiLnB1c2goaCkpKTtyZXR1cm4gZ31mdW5jdGlvbiB2YShhLGIsYyxkLGUsZil7cmV0dXJuIGQmJiFkW3VdJiYoZD12YShkKSksZSYmIWVbdV0mJihlPXZhKGUsZikpLGhhKGZ1bmN0aW9uKGYsZyxoLGkpe3ZhciBqLGssbCxtPVtdLG49W10sbz1nLmxlbmd0aCxwPWZ8fHRhKGJ8fFwiKlwiLGgubm9kZVR5cGU/W2hdOmgsW10pLHE9IWF8fCFmJiZiP3A6dWEocCxtLGEsaCxpKSxyPWM/ZXx8KGY/YTpvfHxkKT9bXTpnOnE7aWYoYyYmYyhxLHIsaCxpKSxkKXtqPXVhKHIsbiksZChqLFtdLGgsaSksaz1qLmxlbmd0aDt3aGlsZShrLS0pKGw9altrXSkmJihyW25ba11dPSEocVtuW2tdXT1sKSl9aWYoZil7aWYoZXx8YSl7aWYoZSl7aj1bXSxrPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmai5wdXNoKHFba109bCk7ZShudWxsLHI9W10saixpKX1rPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmKGo9ZT9KKGYsbCk6bVtrXSk+LTEmJihmW2pdPSEoZ1tqXT1sKSl9fWVsc2Ugcj11YShyPT09Zz9yLnNwbGljZShvLHIubGVuZ3RoKTpyKSxlP2UobnVsbCxnLHIsaSk6SC5hcHBseShnLHIpfSl9ZnVuY3Rpb24gd2EoYSl7Zm9yKHZhciBiLGMsZSxmPWEubGVuZ3RoLGc9ZC5yZWxhdGl2ZVthWzBdLnR5cGVdLGg9Z3x8ZC5yZWxhdGl2ZVtcIiBcIl0saT1nPzE6MCxrPXJhKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0saCwhMCksbD1yYShmdW5jdGlvbihhKXtyZXR1cm4gSihiLGEpPi0xfSxoLCEwKSxtPVtmdW5jdGlvbihhLGMsZCl7dmFyIGU9IWcmJihkfHxjIT09ail8fCgoYj1jKS5ub2RlVHlwZT9rKGEsYyxkKTpsKGEsYyxkKSk7cmV0dXJuIGI9bnVsbCxlfV07Zj5pO2krKylpZihjPWQucmVsYXRpdmVbYVtpXS50eXBlXSltPVtyYShzYShtKSxjKV07ZWxzZXtpZihjPWQuZmlsdGVyW2FbaV0udHlwZV0uYXBwbHkobnVsbCxhW2ldLm1hdGNoZXMpLGNbdV0pe2ZvcihlPSsraTtmPmU7ZSsrKWlmKGQucmVsYXRpdmVbYVtlXS50eXBlXSlicmVhaztyZXR1cm4gdmEoaT4xJiZzYShtKSxpPjEmJnFhKGEuc2xpY2UoMCxpLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1hW2ktMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoUSxcIiQxXCIpLGMsZT5pJiZ3YShhLnNsaWNlKGksZSkpLGY+ZSYmd2EoYT1hLnNsaWNlKGUpKSxmPmUmJnFhKGEpKX1tLnB1c2goYyl9cmV0dXJuIHNhKG0pfWZ1bmN0aW9uIHhhKGEsYil7dmFyIGM9Yi5sZW5ndGg+MCxlPWEubGVuZ3RoPjAsZj1mdW5jdGlvbihmLGcsaCxpLGspe3ZhciBsLG8scSxyPTAscz1cIjBcIix0PWYmJltdLHU9W10sdj1qLHg9Znx8ZSYmZC5maW5kLlRBRyhcIipcIixrKSx5PXcrPW51bGw9PXY/MTpNYXRoLnJhbmRvbSgpfHwuMSx6PXgubGVuZ3RoO2ZvcihrJiYoaj1nPT09bnx8Z3x8ayk7cyE9PXomJm51bGwhPShsPXhbc10pO3MrKyl7aWYoZSYmbCl7bz0wLGd8fGwub3duZXJEb2N1bWVudD09PW58fChtKGwpLGg9IXApO3doaWxlKHE9YVtvKytdKWlmKHEobCxnfHxuLGgpKXtpLnB1c2gobCk7YnJlYWt9ayYmKHc9eSl9YyYmKChsPSFxJiZsKSYmci0tLGYmJnQucHVzaChsKSl9aWYocis9cyxjJiZzIT09cil7bz0wO3doaWxlKHE9YltvKytdKXEodCx1LGcsaCk7aWYoZil7aWYocj4wKXdoaWxlKHMtLSl0W3NdfHx1W3NdfHwodVtzXT1GLmNhbGwoaSkpO3U9dWEodSl9SC5hcHBseShpLHUpLGsmJiFmJiZ1Lmxlbmd0aD4wJiZyK2IubGVuZ3RoPjEmJmZhLnVuaXF1ZVNvcnQoaSl9cmV0dXJuIGsmJih3PXksaj12KSx0fTtyZXR1cm4gYz9oYShmKTpmfXJldHVybiBoPWZhLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9W10sZj1BW2ErXCIgXCJdO2lmKCFmKXtifHwoYj1nKGEpKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlmPXdhKGJbY10pLGZbdV0/ZC5wdXNoKGYpOmUucHVzaChmKTtmPUEoYSx4YShlLGQpKSxmLnNlbGVjdG9yPWF9cmV0dXJuIGZ9LGk9ZmEuc2VsZWN0PWZ1bmN0aW9uKGEsYixlLGYpe3ZhciBpLGosayxsLG0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhLG89IWYmJmcoYT1uLnNlbGVjdG9yfHxhKTtpZihlPWV8fFtdLDE9PT1vLmxlbmd0aCl7aWYoaj1vWzBdPW9bMF0uc2xpY2UoMCksai5sZW5ndGg+MiYmXCJJRFwiPT09KGs9alswXSkudHlwZSYmYy5nZXRCeUlkJiY5PT09Yi5ub2RlVHlwZSYmcCYmZC5yZWxhdGl2ZVtqWzFdLnR5cGVdKXtpZihiPShkLmZpbmQuSUQoay5tYXRjaGVzWzBdLnJlcGxhY2UoYmEsY2EpLGIpfHxbXSlbMF0sIWIpcmV0dXJuIGU7biYmKGI9Yi5wYXJlbnROb2RlKSxhPWEuc2xpY2Uoai5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1XLm5lZWRzQ29udGV4dC50ZXN0KGEpPzA6ai5sZW5ndGg7d2hpbGUoaS0tKXtpZihrPWpbaV0sZC5yZWxhdGl2ZVtsPWsudHlwZV0pYnJlYWs7aWYoKG09ZC5maW5kW2xdKSYmKGY9bShrLm1hdGNoZXNbMF0ucmVwbGFjZShiYSxjYSksXy50ZXN0KGpbMF0udHlwZSkmJm9hKGIucGFyZW50Tm9kZSl8fGIpKSl7aWYoai5zcGxpY2UoaSwxKSxhPWYubGVuZ3RoJiZxYShqKSwhYSlyZXR1cm4gSC5hcHBseShlLGYpLGU7YnJlYWt9fX1yZXR1cm4obnx8aChhLG8pKShmLGIsIXAsZSwhYnx8Xy50ZXN0KGEpJiZvYShiLnBhcmVudE5vZGUpfHxiKSxlfSxjLnNvcnRTdGFibGU9dS5zcGxpdChcIlwiKS5zb3J0KEIpLmpvaW4oXCJcIik9PT11LGMuZGV0ZWN0RHVwbGljYXRlcz0hIWwsbSgpLGMuc29ydERldGFjaGVkPWlhKGZ1bmN0aW9uKGEpe3JldHVybiAxJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKX0pLGlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGphKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYz92b2lkIDA6YS5nZXRBdHRyaWJ1dGUoYixcInR5cGVcIj09PWIudG9Mb3dlckNhc2UoKT8xOjIpfSksYy5hdHRyaWJ1dGVzJiZpYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8amEoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gY3x8XCJpbnB1dFwiIT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP3ZvaWQgMDphLmRlZmF1bHRWYWx1ZX0pLGlhKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGphKEssZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBjP3ZvaWQgMDphW2JdPT09ITA/Yi50b0xvd2VyQ2FzZSgpOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmQuc3BlY2lmaWVkP2QudmFsdWU6bnVsbH0pLGZhfShhKTtuLmZpbmQ9dCxuLmV4cHI9dC5zZWxlY3RvcnMsbi5leHByW1wiOlwiXT1uLmV4cHIucHNldWRvcyxuLnVuaXF1ZVNvcnQ9bi51bmlxdWU9dC51bmlxdWVTb3J0LG4udGV4dD10LmdldFRleHQsbi5pc1hNTERvYz10LmlzWE1MLG4uY29udGFpbnM9dC5jb250YWluczt2YXIgdT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT12b2lkIDAhPT1jO3doaWxlKChhPWFbYl0pJiY5IT09YS5ub2RlVHlwZSlpZigxPT09YS5ub2RlVHlwZSl7aWYoZSYmbihhKS5pcyhjKSlicmVhaztkLnB1c2goYSl9cmV0dXJuIGR9LHY9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9LHc9bi5leHByLm1hdGNoLm5lZWRzQ29udGV4dCx4PS9ePChbXFx3LV0rKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyx5PS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiB6KGEsYixjKXtpZihuLmlzRnVuY3Rpb24oYikpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pO2lmKGIubm9kZVR5cGUpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09YiE9PWN9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7aWYoeS50ZXN0KGIpKXJldHVybiBuLmZpbHRlcihiLGEsYyk7Yj1uLmZpbHRlcihiLGEpfXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gbi5pbkFycmF5KGEsYik+LTEhPT1jfSl9bi5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP24uZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106bi5maW5kLm1hdGNoZXMoYSxuLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LG4uZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGM9W10sZD10aGlzLGU9ZC5sZW5ndGg7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKG4oYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtlPmI7YisrKWlmKG4uY29udGFpbnMoZFtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYj0wO2U+YjtiKyspbi5maW5kKGEsZFtiXSxjKTtyZXR1cm4gYz10aGlzLnB1c2hTdGFjayhlPjE/bi51bmlxdWUoYyk6YyksYy5zZWxlY3Rvcj10aGlzLnNlbGVjdG9yP3RoaXMuc2VsZWN0b3IrXCIgXCIrYTphLGN9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeih0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeih0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEheih0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZ3LnRlc3QoYSk/bihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBBLEI9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKikpJC8sQz1uLmZuLmluaXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBlLGY7aWYoIWEpcmV0dXJuIHRoaXM7aWYoYz1jfHxBLFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihlPVwiPFwiPT09YS5jaGFyQXQoMCkmJlwiPlwiPT09YS5jaGFyQXQoYS5sZW5ndGgtMSkmJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06Qi5leGVjKGEpLCFlfHwhZVsxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fGMpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGVbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIG4/YlswXTpiLG4ubWVyZ2UodGhpcyxuLnBhcnNlSFRNTChlWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOmQsITApKSx4LnRlc3QoZVsxXSkmJm4uaXNQbGFpbk9iamVjdChiKSlmb3IoZSBpbiBiKW4uaXNGdW5jdGlvbih0aGlzW2VdKT90aGlzW2VdKGJbZV0pOnRoaXMuYXR0cihlLGJbZV0pO3JldHVybiB0aGlzfWlmKGY9ZC5nZXRFbGVtZW50QnlJZChlWzJdKSxmJiZmLnBhcmVudE5vZGUpe2lmKGYuaWQhPT1lWzJdKXJldHVybiBBLmZpbmQoYSk7dGhpcy5sZW5ndGg9MSx0aGlzWzBdPWZ9cmV0dXJuIHRoaXMuY29udGV4dD1kLHRoaXMuc2VsZWN0b3I9YSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6bi5pc0Z1bmN0aW9uKGEpP1widW5kZWZpbmVkXCIhPXR5cGVvZiBjLnJlYWR5P2MucmVhZHkoYSk6YShuKToodm9pZCAwIT09YS5zZWxlY3RvciYmKHRoaXMuc2VsZWN0b3I9YS5zZWxlY3Rvcix0aGlzLmNvbnRleHQ9YS5jb250ZXh0KSxuLm1ha2VBcnJheShhLHRoaXMpKX07Qy5wcm90b3R5cGU9bi5mbixBPW4oZCk7dmFyIEQ9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sRT17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtuLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGEpe3ZhciBiLGM9bihhLHRoaXMpLGQ9Yy5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtkPmI7YisrKWlmKG4uY29udGFpbnModGhpcyxjW2JdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz13LnRlc3QoYSl8fFwic3RyaW5nXCIhPXR5cGVvZiBhP24oYSxifHx0aGlzLmNvbnRleHQpOjA7ZT5kO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJm4uZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9uLnVuaXF1ZVNvcnQoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP24uaW5BcnJheSh0aGlzWzBdLG4oYSkpOm4uaW5BcnJheShhLmpxdWVyeT9hWzBdOmEsdGhpcyk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi51bmlxdWVTb3J0KG4ubWVyZ2UodGhpcy5nZXQoKSxuKGEsYikpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWE/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoYSkpfX0pO2Z1bmN0aW9uIEYoYSxiKXtkbyBhPWFbYl07d2hpbGUoYSYmMSE9PWEubm9kZVR5cGUpO3JldHVybiBhfW4uZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmMTEhPT1iLm5vZGVUeXBlP2I6bnVsbH0scGFyZW50czpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBGKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gRihhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB1KGEsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB1KGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB1KGEsXCJwcmV2aW91c1NpYmxpbmdcIixjKX0sc2libGluZ3M6ZnVuY3Rpb24oYSl7cmV0dXJuIHYoKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiB2KGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBuLm5vZGVOYW1lKGEsXCJpZnJhbWVcIik/YS5jb250ZW50RG9jdW1lbnR8fGEuY29udGVudFdpbmRvdy5kb2N1bWVudDpuLm1lcmdlKFtdLGEuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1uLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1uLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoRVthXXx8KGU9bi51bmlxdWVTb3J0KGUpKSxELnRlc3QoYSkmJihlPWUucmV2ZXJzZSgpKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEc9L1xcUysvZztmdW5jdGlvbiBIKGEpe3ZhciBiPXt9O3JldHVybiBuLmVhY2goYS5tYXRjaChHKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1uLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP0goYSk6bi5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZj1bXSxnPVtdLGg9LTEsaT1mdW5jdGlvbigpe2ZvcihlPWEub25jZSxkPWI9ITA7Zy5sZW5ndGg7aD0tMSl7Yz1nLnNoaWZ0KCk7d2hpbGUoKytoPGYubGVuZ3RoKWZbaF0uYXBwbHkoY1swXSxjWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlJiYoaD1mLmxlbmd0aCxjPSExKX1hLm1lbW9yeXx8KGM9ITEpLGI9ITEsZSYmKGY9Yz9bXTpcIlwiKX0saj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihjJiYhYiYmKGg9Zi5sZW5ndGgtMSxnLnB1c2goYykpLGZ1bmN0aW9uIGQoYil7bi5lYWNoKGIsZnVuY3Rpb24oYixjKXtuLmlzRnVuY3Rpb24oYyk/YS51bmlxdWUmJmouaGFzKGMpfHxmLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1uLnR5cGUoYykmJmQoYyl9KX0oYXJndW1lbnRzKSxjJiYhYiYmaSgpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPW4uaW5BcnJheShiLGYsYykpPi0xKWYuc3BsaWNlKGMsMSksaD49YyYmaC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP24uaW5BcnJheShhLGYpPi0xOmYubGVuZ3RoPjB9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihmPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxmPWM9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFmfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGU9ITAsY3x8ai5kaXNhYmxlKCksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFlfSxmaXJlV2l0aDpmdW5jdGlvbihhLGMpe3JldHVybiBlfHwoYz1jfHxbXSxjPVthLGMuc2xpY2U/Yy5zbGljZSgpOmNdLGcucHVzaChjKSxifHxpKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gai5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWR9fTtyZXR1cm4gan0sbi5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGEpe3ZhciBiPVtbXCJyZXNvbHZlXCIsXCJkb25lXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZWplY3RlZFwiXSxbXCJub3RpZnlcIixcInByb2dyZXNzXCIsbi5DYWxsYmFja3MoXCJtZW1vcnlcIildXSxjPVwicGVuZGluZ1wiLGQ9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGN9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBlLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sdGhlbjpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50cztyZXR1cm4gbi5EZWZlcnJlZChmdW5jdGlvbihjKXtuLmVhY2goYixmdW5jdGlvbihiLGYpe3ZhciBnPW4uaXNGdW5jdGlvbihhW2JdKSYmYVtiXTtlW2ZbMV1dKGZ1bmN0aW9uKCl7dmFyIGE9ZyYmZy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/YS5wcm9taXNlKCkucHJvZ3Jlc3MoYy5ub3RpZnkpLmRvbmUoYy5yZXNvbHZlKS5mYWlsKGMucmVqZWN0KTpjW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1kP2MucHJvbWlzZSgpOnRoaXMsZz9bYV06YXJndW1lbnRzKX0pfSksYT1udWxsfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP24uZXh0ZW5kKGEsZCk6ZH19LGU9e307cmV0dXJuIGQucGlwZT1kLnRoZW4sbi5lYWNoKGIsZnVuY3Rpb24oYSxmKXt2YXIgZz1mWzJdLGg9ZlszXTtkW2ZbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7Yz1ofSxiWzFeYV1bMl0uZGlzYWJsZSxiWzJdWzJdLmxvY2spLGVbZlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZVtmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZT9kOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxlW2ZbMF0rXCJXaXRoXCJdPWcuZmlyZVdpdGh9KSxkLnByb21pc2UoZSksYSYmYS5jYWxsKGUsZSksZX0sd2hlbjpmdW5jdGlvbihhKXt2YXIgYj0wLGM9ZS5jYWxsKGFyZ3VtZW50cyksZD1jLmxlbmd0aCxmPTEhPT1kfHxhJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9kOjAsZz0xPT09Zj9hOm4uRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7YlthXT10aGlzLGNbYV09YXJndW1lbnRzLmxlbmd0aD4xP2UuY2FsbChhcmd1bWVudHMpOmQsYz09PWk/Zy5ub3RpZnlXaXRoKGIsYyk6LS1mfHxnLnJlc29sdmVXaXRoKGIsYyl9fSxpLGosaztpZihkPjEpZm9yKGk9bmV3IEFycmF5KGQpLGo9bmV3IEFycmF5KGQpLGs9bmV3IEFycmF5KGQpO2Q+YjtiKyspY1tiXSYmbi5pc0Z1bmN0aW9uKGNbYl0ucHJvbWlzZSk/Y1tiXS5wcm9taXNlKCkucHJvZ3Jlc3MoaChiLGosaSkpLmRvbmUoaChiLGssYykpLmZhaWwoZy5yZWplY3QpOi0tZjtyZXR1cm4gZnx8Zy5yZXNvbHZlV2l0aChrLGMpLGcucHJvbWlzZSgpfX0pO3ZhciBJO24uZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIG4ucmVhZHkucHJvbWlzZSgpLmRvbmUoYSksdGhpc30sbi5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEsaG9sZFJlYWR5OmZ1bmN0aW9uKGEpe2E/bi5yZWFkeVdhaXQrKzpuLnJlYWR5KCEwKX0scmVhZHk6ZnVuY3Rpb24oYSl7KGE9PT0hMD8tLW4ucmVhZHlXYWl0Om4uaXNSZWFkeSl8fChuLmlzUmVhZHk9ITAsYSE9PSEwJiYtLW4ucmVhZHlXYWl0PjB8fChJLnJlc29sdmVXaXRoKGQsW25dKSxuLmZuLnRyaWdnZXJIYW5kbGVyJiYobihkKS50cmlnZ2VySGFuZGxlcihcInJlYWR5XCIpLG4oZCkub2ZmKFwicmVhZHlcIikpKSl9fSk7ZnVuY3Rpb24gSigpe2QuYWRkRXZlbnRMaXN0ZW5lcj8oZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEspLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixLKSk6KGQuZGV0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixLKSxhLmRldGFjaEV2ZW50KFwib25sb2FkXCIsSykpfWZ1bmN0aW9uIEsoKXsoZC5hZGRFdmVudExpc3RlbmVyfHxcImxvYWRcIj09PWEuZXZlbnQudHlwZXx8XCJjb21wbGV0ZVwiPT09ZC5yZWFkeVN0YXRlKSYmKEooKSxuLnJlYWR5KCkpfW4ucmVhZHkucHJvbWlzZT1mdW5jdGlvbihiKXtpZighSSlpZihJPW4uRGVmZXJyZWQoKSxcImNvbXBsZXRlXCI9PT1kLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09ZC5yZWFkeVN0YXRlJiYhZC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwpYS5zZXRUaW1lb3V0KG4ucmVhZHkpO2Vsc2UgaWYoZC5hZGRFdmVudExpc3RlbmVyKWQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixLKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSyk7ZWxzZXtkLmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsSyksYS5hdHRhY2hFdmVudChcIm9ubG9hZFwiLEspO3ZhciBjPSExO3RyeXtjPW51bGw9PWEuZnJhbWVFbGVtZW50JiZkLmRvY3VtZW50RWxlbWVudH1jYXRjaChlKXt9YyYmYy5kb1Njcm9sbCYmIWZ1bmN0aW9uIGYoKXtpZighbi5pc1JlYWR5KXt0cnl7Yy5kb1Njcm9sbChcImxlZnRcIil9Y2F0Y2goYil7cmV0dXJuIGEuc2V0VGltZW91dChmLDUwKX1KKCksbi5yZWFkeSgpfX0oKX1yZXR1cm4gSS5wcm9taXNlKGIpfSxuLnJlYWR5LnByb21pc2UoKTt2YXIgTDtmb3IoTCBpbiBuKGwpKWJyZWFrO2wub3duRmlyc3Q9XCIwXCI9PT1MLGwuaW5saW5lQmxvY2tOZWVkc0xheW91dD0hMSxuKGZ1bmN0aW9uKCl7dmFyIGEsYixjLGU7Yz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXSxjJiZjLnN0eWxlJiYoYj1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOjA7d2lkdGg6MDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHhcIixjLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKGIpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLnN0eWxlLnpvb20mJihiLnN0eWxlLmNzc1RleHQ9XCJkaXNwbGF5OmlubGluZTttYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjFweDt3aWR0aDoxcHg7em9vbToxXCIsbC5pbmxpbmVCbG9ja05lZWRzTGF5b3V0PWE9Mz09PWIub2Zmc2V0V2lkdGgsYSYmKGMuc3R5bGUuem9vbT0xKSksYy5yZW1vdmVDaGlsZChlKSl9KSxmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtsLmRlbGV0ZUV4cGFuZG89ITA7dHJ5e2RlbGV0ZSBhLnRlc3R9Y2F0Y2goYil7bC5kZWxldGVFeHBhbmRvPSExfWE9bnVsbH0oKTt2YXIgTT1mdW5jdGlvbihhKXt2YXIgYj1uLm5vRGF0YVsoYS5ub2RlTmFtZStcIiBcIikudG9Mb3dlckNhc2UoKV0sYz0rYS5ub2RlVHlwZXx8MTtyZXR1cm4gMSE9PWMmJjkhPT1jPyExOiFifHxiIT09ITAmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NpZFwiKT09PWJ9LE49L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLE89LyhbQS1aXSkvZztmdW5jdGlvbiBQKGEsYixjKXtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSl7dmFyIGQ9XCJkYXRhLVwiK2IucmVwbGFjZShPLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCk7aWYoYz1hLmdldEF0dHJpYnV0ZShkKSxcInN0cmluZ1wiPT10eXBlb2YgYyl7dHJ5e2M9XCJ0cnVlXCI9PT1jPyEwOlwiZmFsc2VcIj09PWM/ITE6XCJudWxsXCI9PT1jP251bGw6K2MrXCJcIj09PWM/K2M6Ti50ZXN0KGMpP24ucGFyc2VKU09OKGMpOmN9Y2F0Y2goZSl7fW4uZGF0YShhLGIsYyl9ZWxzZSBjPXZvaWQgMDtcbn1yZXR1cm4gY31mdW5jdGlvbiBRKGEpe3ZhciBiO2ZvcihiIGluIGEpaWYoKFwiZGF0YVwiIT09Ynx8IW4uaXNFbXB0eU9iamVjdChhW2JdKSkmJlwidG9KU09OXCIhPT1iKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIFIoYSxiLGQsZSl7aWYoTShhKSl7dmFyIGYsZyxoPW4uZXhwYW5kbyxpPWEubm9kZVR5cGUsaj1pP24uY2FjaGU6YSxrPWk/YVtoXTphW2hdJiZoO2lmKGsmJmpba10mJihlfHxqW2tdLmRhdGEpfHx2b2lkIDAhPT1kfHxcInN0cmluZ1wiIT10eXBlb2YgYilyZXR1cm4ga3x8KGs9aT9hW2hdPWMucG9wKCl8fG4uZ3VpZCsrOmgpLGpba118fChqW2tdPWk/e306e3RvSlNPTjpuLm5vb3B9KSxcIm9iamVjdFwiIT10eXBlb2YgYiYmXCJmdW5jdGlvblwiIT10eXBlb2YgYnx8KGU/altrXT1uLmV4dGVuZChqW2tdLGIpOmpba10uZGF0YT1uLmV4dGVuZChqW2tdLmRhdGEsYikpLGc9altrXSxlfHwoZy5kYXRhfHwoZy5kYXRhPXt9KSxnPWcuZGF0YSksdm9pZCAwIT09ZCYmKGdbbi5jYW1lbENhc2UoYildPWQpLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhmPWdbYl0sbnVsbD09ZiYmKGY9Z1tuLmNhbWVsQ2FzZShiKV0pKTpmPWcsZn19ZnVuY3Rpb24gUyhhLGIsYyl7aWYoTShhKSl7dmFyIGQsZSxmPWEubm9kZVR5cGUsZz1mP24uY2FjaGU6YSxoPWY/YVtuLmV4cGFuZG9dOm4uZXhwYW5kbztpZihnW2hdKXtpZihiJiYoZD1jP2dbaF06Z1toXS5kYXRhKSl7bi5pc0FycmF5KGIpP2I9Yi5jb25jYXQobi5tYXAoYixuLmNhbWVsQ2FzZSkpOmIgaW4gZD9iPVtiXTooYj1uLmNhbWVsQ2FzZShiKSxiPWIgaW4gZD9bYl06Yi5zcGxpdChcIiBcIikpLGU9Yi5sZW5ndGg7d2hpbGUoZS0tKWRlbGV0ZSBkW2JbZV1dO2lmKGM/IVEoZCk6IW4uaXNFbXB0eU9iamVjdChkKSlyZXR1cm59KGN8fChkZWxldGUgZ1toXS5kYXRhLFEoZ1toXSkpKSYmKGY/bi5jbGVhbkRhdGEoW2FdLCEwKTpsLmRlbGV0ZUV4cGFuZG98fGchPWcud2luZG93P2RlbGV0ZSBnW2hdOmdbaF09dm9pZCAwKX19fW4uZXh0ZW5kKHtjYWNoZTp7fSxub0RhdGE6e1wiYXBwbGV0IFwiOiEwLFwiZW1iZWQgXCI6ITAsXCJvYmplY3QgXCI6XCJjbHNpZDpEMjdDREI2RS1BRTZELTExY2YtOTZCOC00NDQ1NTM1NDAwMDBcIn0saGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gYT1hLm5vZGVUeXBlP24uY2FjaGVbYVtuLmV4cGFuZG9dXTphW24uZXhwYW5kb10sISFhJiYhUShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFIoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBSKGEsYixjLCEwKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUyhhLGIsITApfX0pLG4uZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpc1swXSxnPWYmJmYuYXR0cmlidXRlcztpZih2b2lkIDA9PT1hKXtpZih0aGlzLmxlbmd0aCYmKGU9bi5kYXRhKGYpLDE9PT1mLm5vZGVUeXBlJiYhbi5fZGF0YShmLFwicGFyc2VkQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1uLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxQKGYsZCxlW2RdKSkpO24uX2RhdGEoZixcInBhcnNlZEF0dHJzXCIsITApfXJldHVybiBlfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP3RoaXMuZWFjaChmdW5jdGlvbigpe24uZGF0YSh0aGlzLGEpfSk6YXJndW1lbnRzLmxlbmd0aD4xP3RoaXMuZWFjaChmdW5jdGlvbigpe24uZGF0YSh0aGlzLGEsYil9KTpmP1AoZixhLG4uZGF0YShmLGEpKTp2b2lkIDB9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24ucmVtb3ZlRGF0YSh0aGlzLGEpfSl9fSksbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYT8oYj0oYnx8XCJmeFwiKStcInF1ZXVlXCIsZD1uLl9kYXRhKGEsYiksYyYmKCFkfHxuLmlzQXJyYXkoYyk/ZD1uLl9kYXRhKGEsYixuLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXSk6dm9pZCAwfSxkZXF1ZXVlOmZ1bmN0aW9uKGEsYil7Yj1ifHxcImZ4XCI7dmFyIGM9bi5xdWV1ZShhLGIpLGQ9Yy5sZW5ndGgsZT1jLnNoaWZ0KCksZj1uLl9xdWV1ZUhvb2tzKGEsYiksZz1mdW5jdGlvbigpe24uZGVxdWV1ZShhLGIpfTtcImlucHJvZ3Jlc3NcIj09PWUmJihlPWMuc2hpZnQoKSxkLS0pLGUmJihcImZ4XCI9PT1iJiZjLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBmLnN0b3AsZS5jYWxsKGEsZyxmKSksIWQmJmYmJmYuZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihhLGIpe3ZhciBjPWIrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIG4uX2RhdGEoYSxjKXx8bi5fZGF0YShhLGMse2VtcHR5Om4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7bi5fcmVtb3ZlRGF0YShhLGIrXCJxdWV1ZVwiKSxuLl9yZW1vdmVEYXRhKGEsYyl9KX0pfX0pLG4uZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT1cImZ4XCIsYy0tKSxhcmd1bWVudHMubGVuZ3RoPGM/bi5xdWV1ZSh0aGlzWzBdLGEpOnZvaWQgMD09PWI/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1uLnF1ZXVlKHRoaXMsYSxiKTtuLl9xdWV1ZUhvb2tzKHRoaXMsYSksXCJmeFwiPT09YSYmXCJpbnByb2dyZXNzXCIhPT1jWzBdJiZuLmRlcXVldWUodGhpcyxhKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmRlcXVldWUodGhpcyxhKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTEsZT1uLkRlZmVycmVkKCksZj10aGlzLGc9dGhpcy5sZW5ndGgsaD1mdW5jdGlvbigpey0tZHx8ZS5yZXNvbHZlV2l0aChmLFtmXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxhPWF8fFwiZnhcIjt3aGlsZShnLS0pYz1uLl9kYXRhKGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSksZnVuY3Rpb24oKXt2YXIgYTtsLnNocmlua1dyYXBCbG9ja3M9ZnVuY3Rpb24oKXtpZihudWxsIT1hKXJldHVybiBhO2E9ITE7dmFyIGIsYyxlO3JldHVybiBjPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLGMmJmMuc3R5bGU/KGI9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGU9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGUuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2JvcmRlcjowO3dpZHRoOjA7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4XCIsYy5hcHBlbmRDaGlsZChlKS5hcHBlbmRDaGlsZChiKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5zdHlsZS56b29tJiYoYi5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzoxcHg7d2lkdGg6MXB4O3pvb206MVwiLGIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5zdHlsZS53aWR0aD1cIjVweFwiLGE9MyE9PWIub2Zmc2V0V2lkdGgpLGMucmVtb3ZlQ2hpbGQoZSksYSk6dm9pZCAwfX0oKTt2YXIgVD0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsVT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitUK1wiKShbYS16JV0qKSRcIixcImlcIiksVj1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sVz1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1uLmNzcyhhLFwiZGlzcGxheVwiKXx8IW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfTtmdW5jdGlvbiBYKGEsYixjLGQpe3ZhciBlLGY9MSxnPTIwLGg9ZD9mdW5jdGlvbigpe3JldHVybiBkLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBuLmNzcyhhLGIsXCJcIil9LGk9aCgpLGo9YyYmY1szXXx8KG4uY3NzTnVtYmVyW2JdP1wiXCI6XCJweFwiKSxrPShuLmNzc051bWJlcltiXXx8XCJweFwiIT09aiYmK2kpJiZVLmV4ZWMobi5jc3MoYSxiKSk7aWYoayYma1szXSE9PWope2o9anx8a1szXSxjPWN8fFtdLGs9K2l8fDE7ZG8gZj1mfHxcIi41XCIsay89ZixuLnN0eWxlKGEsYixrK2opO3doaWxlKGYhPT0oZj1oKCkvaSkmJjEhPT1mJiYtLWcpfXJldHVybiBjJiYoaz0ra3x8K2l8fDAsZT1jWzFdP2srKGNbMV0rMSkqY1syXTorY1syXSxkJiYoZC51bml0PWosZC5zdGFydD1rLGQuZW5kPWUpKSxlfXZhciBZPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PW4udHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKVkoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsbi5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKG4oYSksYyl9KSksYikpZm9yKDtpPmg7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn0sWj0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSwkPS88KFtcXHc6LV0rKS8sXz0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLGFhPS9eXFxzKy8sYmE9XCJhYmJyfGFydGljbGV8YXNpZGV8YXVkaW98YmRpfGNhbnZhc3xkYXRhfGRhdGFsaXN0fGRldGFpbHN8ZGlhbG9nfGZpZ2NhcHRpb258ZmlndXJlfGZvb3RlcnxoZWFkZXJ8aGdyb3VwfG1haW58bWFya3xtZXRlcnxuYXZ8b3V0cHV0fHBpY3R1cmV8cHJvZ3Jlc3N8c2VjdGlvbnxzdW1tYXJ5fHRlbXBsYXRlfHRpbWV8dmlkZW9cIjtmdW5jdGlvbiBjYShhKXt2YXIgYj1iYS5zcGxpdChcInxcIiksYz1hLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtpZihjLmNyZWF0ZUVsZW1lbnQpd2hpbGUoYi5sZW5ndGgpYy5jcmVhdGVFbGVtZW50KGIucG9wKCkpO3JldHVybiBjfSFmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxiPWQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGM9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7YS5pbm5lckhUTUw9XCIgIDxsaW5rLz48dGFibGU+PC90YWJsZT48YSBocmVmPScvYSc+YTwvYT48aW5wdXQgdHlwZT0nY2hlY2tib3gnLz5cIixsLmxlYWRpbmdXaGl0ZXNwYWNlPTM9PT1hLmZpcnN0Q2hpbGQubm9kZVR5cGUsbC50Ym9keT0hYS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpLmxlbmd0aCxsLmh0bWxTZXJpYWxpemU9ISFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKS5sZW5ndGgsbC5odG1sNUNsb25lPVwiPDpuYXY+PC86bmF2PlwiIT09ZC5jcmVhdGVFbGVtZW50KFwibmF2XCIpLmNsb25lTm9kZSghMCkub3V0ZXJIVE1MLGMudHlwZT1cImNoZWNrYm94XCIsYy5jaGVja2VkPSEwLGIuYXBwZW5kQ2hpbGQoYyksbC5hcHBlbmRDaGVja2VkPWMuY2hlY2tlZCxhLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixsLm5vQ2xvbmVDaGVja2VkPSEhYS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWUsYi5hcHBlbmRDaGlsZChhKSxjPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGMuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxhLmFwcGVuZENoaWxkKGMpLGwuY2hlY2tDbG9uZT1hLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxsLm5vQ2xvbmVFdmVudD0hIWEuYWRkRXZlbnRMaXN0ZW5lcixhW24uZXhwYW5kb109MSxsLmF0dHJpYnV0ZXM9IWEuZ2V0QXR0cmlidXRlKG4uZXhwYW5kbyl9KCk7dmFyIGRhPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sbGVnZW5kOlsxLFwiPGZpZWxkc2V0PlwiLFwiPC9maWVsZHNldD5cIl0sYXJlYTpbMSxcIjxtYXA+XCIsXCI8L21hcD5cIl0scGFyYW06WzEsXCI8b2JqZWN0PlwiLFwiPC9vYmplY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PHRib2R5PjwvdGJvZHk+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OmwuaHRtbFNlcmlhbGl6ZT9bMCxcIlwiLFwiXCJdOlsxLFwiWDxkaXY+XCIsXCI8L2Rpdj5cIl19O2RhLm9wdGdyb3VwPWRhLm9wdGlvbixkYS50Ym9keT1kYS50Zm9vdD1kYS5jb2xncm91cD1kYS5jYXB0aW9uPWRhLnRoZWFkLGRhLnRoPWRhLnRkO2Z1bmN0aW9uIGVhKGEsYil7dmFyIGMsZCxlPTAsZj1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6dm9pZCAwO2lmKCFmKWZvcihmPVtdLGM9YS5jaGlsZE5vZGVzfHxhO251bGwhPShkPWNbZV0pO2UrKykhYnx8bi5ub2RlTmFtZShkLGIpP2YucHVzaChkKTpuLm1lcmdlKGYsZWEoZCxiKSk7cmV0dXJuIHZvaWQgMD09PWJ8fGImJm4ubm9kZU5hbWUoYSxiKT9uLm1lcmdlKFthXSxmKTpmfWZ1bmN0aW9uIGZhKGEsYil7Zm9yKHZhciBjLGQ9MDtudWxsIT0oYz1hW2RdKTtkKyspbi5fZGF0YShjLFwiZ2xvYmFsRXZhbFwiLCFifHxuLl9kYXRhKGJbZF0sXCJnbG9iYWxFdmFsXCIpKX12YXIgZ2E9Lzx8JiM/XFx3KzsvLGhhPS88dGJvZHkvaTtmdW5jdGlvbiBpYShhKXtaLnRlc3QoYS50eXBlKSYmKGEuZGVmYXVsdENoZWNrZWQ9YS5jaGVja2VkKX1mdW5jdGlvbiBqYShhLGIsYyxkLGUpe2Zvcih2YXIgZixnLGgsaSxqLGssbSxvPWEubGVuZ3RoLHA9Y2EoYikscT1bXSxyPTA7bz5yO3IrKylpZihnPWFbcl0sZ3x8MD09PWcpaWYoXCJvYmplY3RcIj09PW4udHlwZShnKSluLm1lcmdlKHEsZy5ub2RlVHlwZT9bZ106Zyk7ZWxzZSBpZihnYS50ZXN0KGcpKXtpPWl8fHAuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxqPSgkLmV4ZWMoZyl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLG09ZGFbal18fGRhLl9kZWZhdWx0LGkuaW5uZXJIVE1MPW1bMV0rbi5odG1sUHJlZmlsdGVyKGcpK21bMl0sZj1tWzBdO3doaWxlKGYtLSlpPWkubGFzdENoaWxkO2lmKCFsLmxlYWRpbmdXaGl0ZXNwYWNlJiZhYS50ZXN0KGcpJiZxLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShhYS5leGVjKGcpWzBdKSksIWwudGJvZHkpe2c9XCJ0YWJsZVwiIT09anx8aGEudGVzdChnKT9cIjx0YWJsZT5cIiE9PW1bMV18fGhhLnRlc3QoZyk/MDppOmkuZmlyc3RDaGlsZCxmPWcmJmcuY2hpbGROb2Rlcy5sZW5ndGg7d2hpbGUoZi0tKW4ubm9kZU5hbWUoaz1nLmNoaWxkTm9kZXNbZl0sXCJ0Ym9keVwiKSYmIWsuY2hpbGROb2Rlcy5sZW5ndGgmJmcucmVtb3ZlQ2hpbGQoayl9bi5tZXJnZShxLGkuY2hpbGROb2RlcyksaS50ZXh0Q29udGVudD1cIlwiO3doaWxlKGkuZmlyc3RDaGlsZClpLnJlbW92ZUNoaWxkKGkuZmlyc3RDaGlsZCk7aT1wLmxhc3RDaGlsZH1lbHNlIHEucHVzaChiLmNyZWF0ZVRleHROb2RlKGcpKTtpJiZwLnJlbW92ZUNoaWxkKGkpLGwuYXBwZW5kQ2hlY2tlZHx8bi5ncmVwKGVhKHEsXCJpbnB1dFwiKSxpYSkscj0wO3doaWxlKGc9cVtyKytdKWlmKGQmJm4uaW5BcnJheShnLGQpPi0xKWUmJmUucHVzaChnKTtlbHNlIGlmKGg9bi5jb250YWlucyhnLm93bmVyRG9jdW1lbnQsZyksaT1lYShwLmFwcGVuZENoaWxkKGcpLFwic2NyaXB0XCIpLGgmJmZhKGkpLGMpe2Y9MDt3aGlsZShnPWlbZisrXSlfLnRlc3QoZy50eXBlfHxcIlwiKSYmYy5wdXNoKGcpfXJldHVybiBpPW51bGwscH0hZnVuY3Rpb24oKXt2YXIgYixjLGU9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2ZvcihiIGlue3N1Ym1pdDohMCxjaGFuZ2U6ITAsZm9jdXNpbjohMH0pYz1cIm9uXCIrYiwobFtiXT1jIGluIGEpfHwoZS5zZXRBdHRyaWJ1dGUoYyxcInRcIiksbFtiXT1lLmF0dHJpYnV0ZXNbY10uZXhwYW5kbz09PSExKTtlPW51bGx9KCk7dmFyIGthPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhKSQvaSxsYT0vXmtleS8sbWE9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLG5hPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxvYT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIHBhKCl7cmV0dXJuITB9ZnVuY3Rpb24gcWEoKXtyZXR1cm4hMX1mdW5jdGlvbiByYSgpe3RyeXtyZXR1cm4gZC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319ZnVuY3Rpb24gc2EoYSxiLGMsZCxlLGYpe3ZhciBnLGg7aWYoXCJvYmplY3RcIj09dHlwZW9mIGIpe1wic3RyaW5nXCIhPXR5cGVvZiBjJiYoZD1kfHxjLGM9dm9pZCAwKTtmb3IoaCBpbiBiKXNhKGEsaCxjLGQsYltoXSxmKTtyZXR1cm4gYX1pZihudWxsPT1kJiZudWxsPT1lPyhlPWMsZD1jPXZvaWQgMCk6bnVsbD09ZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBjPyhlPWQsZD12b2lkIDApOihlPWQsZD1jLGM9dm9pZCAwKSksZT09PSExKWU9cWE7ZWxzZSBpZighZSlyZXR1cm4gYTtyZXR1cm4gMT09PWYmJihnPWUsZT1mdW5jdGlvbihhKXtyZXR1cm4gbigpLm9mZihhKSxnLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5ndWlkPWcuZ3VpZHx8KGcuZ3VpZD1uLmd1aWQrKykpLGEuZWFjaChmdW5jdGlvbigpe24uZXZlbnQuYWRkKHRoaXMsYixlLGQsYyl9KX1uLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPW4uX2RhdGEoYSk7aWYocil7Yy5oYW5kbGVyJiYoaT1jLGM9aS5oYW5kbGVyLGU9aS5zZWxlY3RvciksYy5ndWlkfHwoYy5ndWlkPW4uZ3VpZCsrKSwoZz1yLmV2ZW50cyl8fChnPXIuZXZlbnRzPXt9KSwoaz1yLmhhbmRsZSl8fChrPXIuaGFuZGxlPWZ1bmN0aW9uKGEpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBufHxhJiZuLmV2ZW50LnRyaWdnZXJlZD09PWEudHlwZT92b2lkIDA6bi5ldmVudC5kaXNwYXRjaC5hcHBseShrLmVsZW0sYXJndW1lbnRzKX0say5lbGVtPWEpLGI9KGJ8fFwiXCIpLm1hdGNoKEcpfHxbXCJcIl0saD1iLmxlbmd0aDt3aGlsZShoLS0pZj1vYS5leGVjKGJbaF0pfHxbXSxvPXE9ZlsxXSxwPShmWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8mJihqPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZT9qLmRlbGVnYXRlVHlwZTpqLmJpbmRUeXBlKXx8byxqPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbD1uLmV4dGVuZCh7dHlwZTpvLG9yaWdUeXBlOnEsZGF0YTpkLGhhbmRsZXI6YyxndWlkOmMuZ3VpZCxzZWxlY3RvcjplLG5lZWRzQ29udGV4dDplJiZuLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoZSksbmFtZXNwYWNlOnAuam9pbihcIi5cIil9LGkpLChtPWdbb10pfHwobT1nW29dPVtdLG0uZGVsZWdhdGVDb3VudD0wLGouc2V0dXAmJmouc2V0dXAuY2FsbChhLGQscCxrKSE9PSExfHwoYS5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihvLGssITEpOmEuYXR0YWNoRXZlbnQmJmEuYXR0YWNoRXZlbnQoXCJvblwiK28saykpKSxqLmFkZCYmKGouYWRkLmNhbGwoYSxsKSxsLmhhbmRsZXIuZ3VpZHx8KGwuaGFuZGxlci5ndWlkPWMuZ3VpZCkpLGU/bS5zcGxpY2UobS5kZWxlZ2F0ZUNvdW50KyssMCxsKTptLnB1c2gobCksbi5ldmVudC5nbG9iYWxbb109ITApO2E9bnVsbH19LHJlbW92ZTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1uLmhhc0RhdGEoYSkmJm4uX2RhdGEoYSk7aWYociYmKGs9ci5ldmVudHMpKXtiPShifHxcIlwiKS5tYXRjaChHKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWlmKGg9b2EuZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvKXtsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZD9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxtPWtbb118fFtdLGg9aFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Auam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGk9Zj1tLmxlbmd0aDt3aGlsZShmLS0pZz1tW2ZdLCFlJiZxIT09Zy5vcmlnVHlwZXx8YyYmYy5ndWlkIT09Zy5ndWlkfHxoJiYhaC50ZXN0KGcubmFtZXNwYWNlKXx8ZCYmZCE9PWcuc2VsZWN0b3ImJihcIioqXCIhPT1kfHwhZy5zZWxlY3Rvcil8fChtLnNwbGljZShmLDEpLGcuc2VsZWN0b3ImJm0uZGVsZWdhdGVDb3VudC0tLGwucmVtb3ZlJiZsLnJlbW92ZS5jYWxsKGEsZykpO2kmJiFtLmxlbmd0aCYmKGwudGVhcmRvd24mJmwudGVhcmRvd24uY2FsbChhLHAsci5oYW5kbGUpIT09ITF8fG4ucmVtb3ZlRXZlbnQoYSxvLHIuaGFuZGxlKSxkZWxldGUga1tvXSl9ZWxzZSBmb3IobyBpbiBrKW4uZXZlbnQucmVtb3ZlKGEsbytiW2pdLGMsZCwhMCk7bi5pc0VtcHR5T2JqZWN0KGspJiYoZGVsZXRlIHIuaGFuZGxlLG4uX3JlbW92ZURhdGEoYSxcImV2ZW50c1wiKSl9fSx0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxlLGYpe3ZhciBnLGgsaSxqLGwsbSxvLHA9W2V8fGRdLHE9ay5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHI9ay5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGk9bT1lPWV8fGQsMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiYhbmEudGVzdChxK24uZXZlbnQudHJpZ2dlcmVkKSYmKHEuaW5kZXhPZihcIi5cIik+LTEmJihyPXEuc3BsaXQoXCIuXCIpLHE9ci5zaGlmdCgpLHIuc29ydCgpKSxoPXEuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3EsYj1iW24uZXhwYW5kb10/YjpuZXcgbi5FdmVudChxLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1mPzI6MyxiLm5hbWVzcGFjZT1yLmpvaW4oXCIuXCIpLGIucm5hbWVzcGFjZT1iLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrci5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxiLnJlc3VsdD12b2lkIDAsYi50YXJnZXR8fChiLnRhcmdldD1lKSxjPW51bGw9PWM/W2JdOm4ubWFrZUFycmF5KGMsW2JdKSxsPW4uZXZlbnQuc3BlY2lhbFtxXXx8e30sZnx8IWwudHJpZ2dlcnx8bC50cmlnZ2VyLmFwcGx5KGUsYykhPT0hMSkpe2lmKCFmJiYhbC5ub0J1YmJsZSYmIW4uaXNXaW5kb3coZSkpe2ZvcihqPWwuZGVsZWdhdGVUeXBlfHxxLG5hLnRlc3QoaitxKXx8KGk9aS5wYXJlbnROb2RlKTtpO2k9aS5wYXJlbnROb2RlKXAucHVzaChpKSxtPWk7bT09PShlLm93bmVyRG9jdW1lbnR8fGQpJiZwLnB1c2gobS5kZWZhdWx0Vmlld3x8bS5wYXJlbnRXaW5kb3d8fGEpfW89MDt3aGlsZSgoaT1wW28rK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1vPjE/ajpsLmJpbmRUeXBlfHxxLGc9KG4uX2RhdGEoaSxcImV2ZW50c1wiKXx8e30pW2IudHlwZV0mJm4uX2RhdGEoaSxcImhhbmRsZVwiKSxnJiZnLmFwcGx5KGksYyksZz1oJiZpW2hdLGcmJmcuYXBwbHkmJk0oaSkmJihiLnJlc3VsdD1nLmFwcGx5KGksYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtpZihiLnR5cGU9cSwhZiYmIWIuaXNEZWZhdWx0UHJldmVudGVkKCkmJighbC5fZGVmYXVsdHx8bC5fZGVmYXVsdC5hcHBseShwLnBvcCgpLGMpPT09ITEpJiZNKGUpJiZoJiZlW3FdJiYhbi5pc1dpbmRvdyhlKSl7bT1lW2hdLG0mJihlW2hdPW51bGwpLG4uZXZlbnQudHJpZ2dlcmVkPXE7dHJ5e2VbcV0oKX1jYXRjaChzKXt9bi5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLG0mJihlW2hdPW0pfXJldHVybiBiLnJlc3VsdH19LGRpc3BhdGNoOmZ1bmN0aW9uKGEpe2E9bi5ldmVudC5maXgoYSk7dmFyIGIsYyxkLGYsZyxoPVtdLGk9ZS5jYWxsKGFyZ3VtZW50cyksaj0obi5fZGF0YSh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYS50eXBlXXx8W10saz1uLmV2ZW50LnNwZWNpYWxbYS50eXBlXXx8e307aWYoaVswXT1hLGEuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYSkhPT0hMSl7aD1uLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxhLGopLGI9MDt3aGlsZSgoZj1oW2IrK10pJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXthLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGM9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2MrK10pJiYhYS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKWEucm5hbWVzcGFjZSYmIWEucm5hbWVzcGFjZS50ZXN0KGcubmFtZXNwYWNlKXx8KGEuaGFuZGxlT2JqPWcsYS5kYXRhPWcuZGF0YSxkPSgobi5ldmVudC5zcGVjaWFsW2cub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxnLmhhbmRsZXIpLmFwcGx5KGYuZWxlbSxpKSx2b2lkIDAhPT1kJiYoYS5yZXN1bHQ9ZCk9PT0hMSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGsucG9zdERpc3BhdGNoJiZrLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsYSksYS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc9W10saD1iLmRlbGVnYXRlQ291bnQsaT1hLnRhcmdldDtpZihoJiZpLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09YS50eXBlfHxpc05hTihhLmJ1dHRvbil8fGEuYnV0dG9uPDEpKWZvcig7aSE9dGhpcztpPWkucGFyZW50Tm9kZXx8dGhpcylpZigxPT09aS5ub2RlVHlwZSYmKGkuZGlzYWJsZWQhPT0hMHx8XCJjbGlja1wiIT09YS50eXBlKSl7Zm9yKGQ9W10sYz0wO2g+YztjKyspZj1iW2NdLGU9Zi5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1kW2VdJiYoZFtlXT1mLm5lZWRzQ29udGV4dD9uKGUsdGhpcykuaW5kZXgoaSk+LTE6bi5maW5kKGUsdGhpcyxudWxsLFtpXSkubGVuZ3RoKSxkW2VdJiZkLnB1c2goZik7ZC5sZW5ndGgmJmcucHVzaCh7ZWxlbTppLGhhbmRsZXJzOmR9KX1yZXR1cm4gaDxiLmxlbmd0aCYmZy5wdXNoKHtlbGVtOnRoaXMsaGFuZGxlcnM6Yi5zbGljZShoKX0pLGd9LGZpeDpmdW5jdGlvbihhKXtpZihhW24uZXhwYW5kb10pcmV0dXJuIGE7dmFyIGIsYyxlLGY9YS50eXBlLGc9YSxoPXRoaXMuZml4SG9va3NbZl07aHx8KHRoaXMuZml4SG9va3NbZl09aD1tYS50ZXN0KGYpP3RoaXMubW91c2VIb29rczpsYS50ZXN0KGYpP3RoaXMua2V5SG9va3M6e30pLGU9aC5wcm9wcz90aGlzLnByb3BzLmNvbmNhdChoLnByb3BzKTp0aGlzLnByb3BzLGE9bmV3IG4uRXZlbnQoZyksYj1lLmxlbmd0aDt3aGlsZShiLS0pYz1lW2JdLGFbY109Z1tjXTtyZXR1cm4gYS50YXJnZXR8fChhLnRhcmdldD1nLnNyY0VsZW1lbnR8fGQpLDM9PT1hLnRhcmdldC5ub2RlVHlwZSYmKGEudGFyZ2V0PWEudGFyZ2V0LnBhcmVudE5vZGUpLGEubWV0YUtleT0hIWEubWV0YUtleSxoLmZpbHRlcj9oLmZpbHRlcihhLGcpOmF9LHByb3BzOlwiYWx0S2V5IGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZGV0YWlsIGV2ZW50UGhhc2UgbWV0YUtleSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5IHRhcmdldCB0aW1lU3RhbXAgdmlldyB3aGljaFwiLnNwbGl0KFwiIFwiKSxmaXhIb29rczp7fSxrZXlIb29rczp7cHJvcHM6XCJjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlXCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1hLndoaWNoJiYoYS53aGljaD1udWxsIT1iLmNoYXJDb2RlP2IuY2hhckNvZGU6Yi5rZXlDb2RlKSxhfX0sbW91c2VIb29rczp7cHJvcHM6XCJidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgZnJvbUVsZW1lbnQgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnRcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGc9Yi5idXR0b24saD1iLmZyb21FbGVtZW50O3JldHVybiBudWxsPT1hLnBhZ2VYJiZudWxsIT1iLmNsaWVudFgmJihlPWEudGFyZ2V0Lm93bmVyRG9jdW1lbnR8fGQsZj1lLmRvY3VtZW50RWxlbWVudCxjPWUuYm9keSxhLnBhZ2VYPWIuY2xpZW50WCsoZiYmZi5zY3JvbGxMZWZ0fHxjJiZjLnNjcm9sbExlZnR8fDApLShmJiZmLmNsaWVudExlZnR8fGMmJmMuY2xpZW50TGVmdHx8MCksYS5wYWdlWT1iLmNsaWVudFkrKGYmJmYuc2Nyb2xsVG9wfHxjJiZjLnNjcm9sbFRvcHx8MCktKGYmJmYuY2xpZW50VG9wfHxjJiZjLmNsaWVudFRvcHx8MCkpLCFhLnJlbGF0ZWRUYXJnZXQmJmgmJihhLnJlbGF0ZWRUYXJnZXQ9aD09PWEudGFyZ2V0P2IudG9FbGVtZW50OmgpLGEud2hpY2h8fHZvaWQgMD09PWd8fChhLndoaWNoPTEmZz8xOjImZz8zOjQmZz8yOjApLGF9fSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZih0aGlzIT09cmEoKSYmdGhpcy5mb2N1cyl0cnl7cmV0dXJuIHRoaXMuZm9jdXMoKSwhMX1jYXRjaChhKXt9fSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcz09PXJhKCkmJnRoaXMuYmx1cj8odGhpcy5ibHVyKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbi5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIikmJlwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljaz8odGhpcy5jbGljaygpLCExKTp2b2lkIDB9LF9kZWZhdWx0OmZ1bmN0aW9uKGEpe3JldHVybiBuLm5vZGVOYW1lKGEudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZvaWQgMCE9PWEucmVzdWx0JiZhLm9yaWdpbmFsRXZlbnQmJihhLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9YS5yZXN1bHQpfX19LHNpbXVsYXRlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1uLmV4dGVuZChuZXcgbi5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITB9KTtuLmV2ZW50LnRyaWdnZXIoZCxudWxsLGIpLGQuaXNEZWZhdWx0UHJldmVudGVkKCkmJmMucHJldmVudERlZmF1bHQoKX19LG4ucmVtb3ZlRXZlbnQ9ZC5yZW1vdmVFdmVudExpc3RlbmVyP2Z1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMpfTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCJvblwiK2I7YS5kZXRhY2hFdmVudCYmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBhW2RdJiYoYVtkXT1udWxsKSxhLmRldGFjaEV2ZW50KGQsYykpfSxuLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBuLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT9wYTpxYSk6dGhpcy50eXBlPWEsYiYmbi5leHRlbmQodGhpcyxiKSx0aGlzLnRpbWVTdGFtcD1hJiZhLnRpbWVTdGFtcHx8bi5ub3coKSx2b2lkKHRoaXNbbi5leHBhbmRvXT0hMCkpOm5ldyBuLkV2ZW50KGEsYil9LG4uRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpuLkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDpxYSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpxYSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpxYSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1wYSxhJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMSl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXBhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiYoYS5zdG9wUHJvcGFnYXRpb24mJmEuc3RvcFByb3BhZ2F0aW9uKCksYS5jYW5jZWxCdWJibGU9ITApfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1wYSxhJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sbi5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7bi5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4gZSYmKGU9PT1kfHxuLmNvbnRhaW5zKGQsZSkpfHwoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxsLnN1Ym1pdHx8KG4uZXZlbnQuc3BlY2lhbC5zdWJtaXQ9e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIG4ubm9kZU5hbWUodGhpcyxcImZvcm1cIik/ITE6dm9pZCBuLmV2ZW50LmFkZCh0aGlzLFwiY2xpY2suX3N1Ym1pdCBrZXlwcmVzcy5fc3VibWl0XCIsZnVuY3Rpb24oYSl7dmFyIGI9YS50YXJnZXQsYz1uLm5vZGVOYW1lKGIsXCJpbnB1dFwiKXx8bi5ub2RlTmFtZShiLFwiYnV0dG9uXCIpP24ucHJvcChiLFwiZm9ybVwiKTp2b2lkIDA7YyYmIW4uX2RhdGEoYyxcInN1Ym1pdFwiKSYmKG4uZXZlbnQuYWRkKGMsXCJzdWJtaXQuX3N1Ym1pdFwiLGZ1bmN0aW9uKGEpe2EuX3N1Ym1pdEJ1YmJsZT0hMH0pLG4uX2RhdGEoYyxcInN1Ym1pdFwiLCEwKSl9KX0scG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe2EuX3N1Ym1pdEJ1YmJsZSYmKGRlbGV0ZSBhLl9zdWJtaXRCdWJibGUsdGhpcy5wYXJlbnROb2RlJiYhYS5pc1RyaWdnZXImJm4uZXZlbnQuc2ltdWxhdGUoXCJzdWJtaXRcIix0aGlzLnBhcmVudE5vZGUsYSkpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiBuLm5vZGVOYW1lKHRoaXMsXCJmb3JtXCIpPyExOnZvaWQgbi5ldmVudC5yZW1vdmUodGhpcyxcIi5fc3VibWl0XCIpfX0pLGwuY2hhbmdlfHwobi5ldmVudC5zcGVjaWFsLmNoYW5nZT17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4ga2EudGVzdCh0aGlzLm5vZGVOYW1lKT8oXCJjaGVja2JveFwiIT09dGhpcy50eXBlJiZcInJhZGlvXCIhPT10aGlzLnR5cGV8fChuLmV2ZW50LmFkZCh0aGlzLFwicHJvcGVydHljaGFuZ2UuX2NoYW5nZVwiLGZ1bmN0aW9uKGEpe1wiY2hlY2tlZFwiPT09YS5vcmlnaW5hbEV2ZW50LnByb3BlcnR5TmFtZSYmKHRoaXMuX2p1c3RDaGFuZ2VkPSEwKX0pLG4uZXZlbnQuYWRkKHRoaXMsXCJjbGljay5fY2hhbmdlXCIsZnVuY3Rpb24oYSl7dGhpcy5fanVzdENoYW5nZWQmJiFhLmlzVHJpZ2dlciYmKHRoaXMuX2p1c3RDaGFuZ2VkPSExKSxuLmV2ZW50LnNpbXVsYXRlKFwiY2hhbmdlXCIsdGhpcyxhKX0pKSwhMSk6dm9pZCBuLmV2ZW50LmFkZCh0aGlzLFwiYmVmb3JlYWN0aXZhdGUuX2NoYW5nZVwiLGZ1bmN0aW9uKGEpe3ZhciBiPWEudGFyZ2V0O2thLnRlc3QoYi5ub2RlTmFtZSkmJiFuLl9kYXRhKGIsXCJjaGFuZ2VcIikmJihuLmV2ZW50LmFkZChiLFwiY2hhbmdlLl9jaGFuZ2VcIixmdW5jdGlvbihhKXshdGhpcy5wYXJlbnROb2RlfHxhLmlzU2ltdWxhdGVkfHxhLmlzVHJpZ2dlcnx8bi5ldmVudC5zaW11bGF0ZShcImNoYW5nZVwiLHRoaXMucGFyZW50Tm9kZSxhKX0pLG4uX2RhdGEoYixcImNoYW5nZVwiLCEwKSl9KX0saGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBiPWEudGFyZ2V0O3JldHVybiB0aGlzIT09Ynx8YS5pc1NpbXVsYXRlZHx8YS5pc1RyaWdnZXJ8fFwicmFkaW9cIiE9PWIudHlwZSYmXCJjaGVja2JveFwiIT09Yi50eXBlP2EuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOnZvaWQgMH0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gbi5ldmVudC5yZW1vdmUodGhpcyxcIi5fY2hhbmdlXCIpLCFrYS50ZXN0KHRoaXMubm9kZU5hbWUpfX0pLGwuZm9jdXNpbnx8bi5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtuLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsbi5ldmVudC5maXgoYSkpfTtuLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9bi5fZGF0YShkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLG4uX2RhdGEoZCxiLChlfHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1uLl9kYXRhKGQsYiktMTtlP24uX2RhdGEoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxuLl9yZW1vdmVEYXRhKGQsYikpfX19KSxuLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHNhKHRoaXMsYSxiLGMsZCl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gc2EodGhpcyxhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmosbihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gYiE9PSExJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBifHwoYz1iLGI9dm9pZCAwKSxjPT09ITEmJihjPXFhKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfSx0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO3JldHVybiBjP24uZXZlbnQudHJpZ2dlcihhLGIsYywhMCk6dm9pZCAwfX0pO3ZhciB0YT0vIGpRdWVyeVxcZCs9XCIoPzpudWxsfFxcZCspXCIvZyx1YT1uZXcgUmVnRXhwKFwiPCg/OlwiK2JhK1wiKVtcXFxccy8+XVwiLFwiaVwiKSx2YT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Oi1dKylbXj5dKilcXC8+L2dpLHdhPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLHhhPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2kseWE9L150cnVlXFwvKC4qKS8semE9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nLEFhPWNhKGQpLEJhPUFhLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7ZnVuY3Rpb24gQ2EoYSxiKXtyZXR1cm4gbi5ub2RlTmFtZShhLFwidGFibGVcIikmJm4ubm9kZU5hbWUoMTEhPT1iLm5vZGVUeXBlP2I6Yi5maXJzdENoaWxkLFwidHJcIik/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpWzBdfHxhLmFwcGVuZENoaWxkKGEub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIikpOmF9ZnVuY3Rpb24gRGEoYSl7cmV0dXJuIGEudHlwZT0obnVsbCE9PW4uZmluZC5hdHRyKGEsXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiBFYShhKXt2YXIgYj15YS5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gRmEoYSxiKXtpZigxPT09Yi5ub2RlVHlwZSYmbi5oYXNEYXRhKGEpKXt2YXIgYyxkLGUsZj1uLl9kYXRhKGEpLGc9bi5fZGF0YShiLGYpLGg9Zi5ldmVudHM7aWYoaCl7ZGVsZXRlIGcuaGFuZGxlLGcuZXZlbnRzPXt9O2ZvcihjIGluIGgpZm9yKGQ9MCxlPWhbY10ubGVuZ3RoO2U+ZDtkKyspbi5ldmVudC5hZGQoYixjLGhbY11bZF0pfWcuZGF0YSYmKGcuZGF0YT1uLmV4dGVuZCh7fSxnLmRhdGEpKX19ZnVuY3Rpb24gR2EoYSxiKXt2YXIgYyxkLGU7aWYoMT09PWIubm9kZVR5cGUpe2lmKGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLCFsLm5vQ2xvbmVFdmVudCYmYltuLmV4cGFuZG9dKXtlPW4uX2RhdGEoYik7Zm9yKGQgaW4gZS5ldmVudHMpbi5yZW1vdmVFdmVudChiLGQsZS5oYW5kbGUpO2IucmVtb3ZlQXR0cmlidXRlKG4uZXhwYW5kbyl9XCJzY3JpcHRcIj09PWMmJmIudGV4dCE9PWEudGV4dD8oRGEoYikudGV4dD1hLnRleHQsRWEoYikpOlwib2JqZWN0XCI9PT1jPyhiLnBhcmVudE5vZGUmJihiLm91dGVySFRNTD1hLm91dGVySFRNTCksbC5odG1sNUNsb25lJiZhLmlubmVySFRNTCYmIW4udHJpbShiLmlubmVySFRNTCkmJihiLmlubmVySFRNTD1hLmlubmVySFRNTCkpOlwiaW5wdXRcIj09PWMmJloudGVzdChhLnR5cGUpPyhiLmRlZmF1bHRDaGVja2VkPWIuY2hlY2tlZD1hLmNoZWNrZWQsYi52YWx1ZSE9PWEudmFsdWUmJihiLnZhbHVlPWEudmFsdWUpKTpcIm9wdGlvblwiPT09Yz9iLmRlZmF1bHRTZWxlY3RlZD1iLnNlbGVjdGVkPWEuZGVmYXVsdFNlbGVjdGVkOlwiaW5wdXRcIiE9PWMmJlwidGV4dGFyZWFcIiE9PWN8fChiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9fWZ1bmN0aW9uIEhhKGEsYixjLGQpe2I9Zi5hcHBseShbXSxiKTt2YXIgZSxnLGgsaSxqLGssbT0wLG89YS5sZW5ndGgscD1vLTEscT1iWzBdLHI9bi5pc0Z1bmN0aW9uKHEpO2lmKHJ8fG8+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHEmJiFsLmNoZWNrQ2xvbmUmJnhhLnRlc3QocSkpcmV0dXJuIGEuZWFjaChmdW5jdGlvbihlKXt2YXIgZj1hLmVxKGUpO3ImJihiWzBdPXEuY2FsbCh0aGlzLGUsZi5odG1sKCkpKSxIYShmLGIsYyxkKX0pO2lmKG8mJihrPWphKGIsYVswXS5vd25lckRvY3VtZW50LCExLGEsZCksZT1rLmZpcnN0Q2hpbGQsMT09PWsuY2hpbGROb2Rlcy5sZW5ndGgmJihrPWUpLGV8fGQpKXtmb3IoaT1uLm1hcChlYShrLFwic2NyaXB0XCIpLERhKSxoPWkubGVuZ3RoO28+bTttKyspZz1rLG0hPT1wJiYoZz1uLmNsb25lKGcsITAsITApLGgmJm4ubWVyZ2UoaSxlYShnLFwic2NyaXB0XCIpKSksYy5jYWxsKGFbbV0sZyxtKTtpZihoKWZvcihqPWlbaS5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxuLm1hcChpLEVhKSxtPTA7aD5tO20rKylnPWlbbV0sXy50ZXN0KGcudHlwZXx8XCJcIikmJiFuLl9kYXRhKGcsXCJnbG9iYWxFdmFsXCIpJiZuLmNvbnRhaW5zKGosZykmJihnLnNyYz9uLl9ldmFsVXJsJiZuLl9ldmFsVXJsKGcuc3JjKTpuLmdsb2JhbEV2YWwoKGcudGV4dHx8Zy50ZXh0Q29udGVudHx8Zy5pbm5lckhUTUx8fFwiXCIpLnJlcGxhY2UoemEsXCJcIikpKTtrPWU9bnVsbH1yZXR1cm4gYX1mdW5jdGlvbiBJYShhLGIsYyl7Zm9yKHZhciBkLGU9Yj9uLmZpbHRlcihiLGEpOmEsZj0wO251bGwhPShkPWVbZl0pO2YrKyljfHwxIT09ZC5ub2RlVHlwZXx8bi5jbGVhbkRhdGEoZWEoZCkpLGQucGFyZW50Tm9kZSYmKGMmJm4uY29udGFpbnMoZC5vd25lckRvY3VtZW50LGQpJiZmYShlYShkLFwic2NyaXB0XCIpKSxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCkpO3JldHVybiBhfW4uZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UodmEsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGk9bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSk7aWYobC5odG1sNUNsb25lfHxuLmlzWE1MRG9jKGEpfHwhdWEudGVzdChcIjxcIithLm5vZGVOYW1lK1wiPlwiKT9mPWEuY2xvbmVOb2RlKCEwKTooQmEuaW5uZXJIVE1MPWEub3V0ZXJIVE1MLEJhLnJlbW92ZUNoaWxkKGY9QmEuZmlyc3RDaGlsZCkpLCEobC5ub0Nsb25lRXZlbnQmJmwubm9DbG9uZUNoZWNrZWR8fDEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fG4uaXNYTUxEb2MoYSkpKWZvcihkPWVhKGYpLGg9ZWEoYSksZz0wO251bGwhPShlPWhbZ10pOysrZylkW2ddJiZHYShlLGRbZ10pO2lmKGIpaWYoYylmb3IoaD1ofHxlYShhKSxkPWR8fGVhKGYpLGc9MDtudWxsIT0oZT1oW2ddKTtnKyspRmEoZSxkW2ddKTtlbHNlIEZhKGEsZik7cmV0dXJuIGQ9ZWEoZixcInNjcmlwdFwiKSxkLmxlbmd0aD4wJiZmYShkLCFpJiZlYShhLFwic2NyaXB0XCIpKSxkPWg9ZT1udWxsLGZ9LGNsZWFuRGF0YTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgZCxlLGYsZyxoPTAsaT1uLmV4cGFuZG8saj1uLmNhY2hlLGs9bC5hdHRyaWJ1dGVzLG09bi5ldmVudC5zcGVjaWFsO251bGwhPShkPWFbaF0pO2grKylpZigoYnx8TShkKSkmJihmPWRbaV0sZz1mJiZqW2ZdKSl7aWYoZy5ldmVudHMpZm9yKGUgaW4gZy5ldmVudHMpbVtlXT9uLmV2ZW50LnJlbW92ZShkLGUpOm4ucmVtb3ZlRXZlbnQoZCxlLGcuaGFuZGxlKTtqW2ZdJiYoZGVsZXRlIGpbZl0sa3x8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGQucmVtb3ZlQXR0cmlidXRlP2RbaV09dm9pZCAwOmQucmVtb3ZlQXR0cmlidXRlKGkpLGMucHVzaChmKSl9fX0pLG4uZm4uZXh0ZW5kKHtkb21NYW5pcDpIYSxkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIElhKHRoaXMsYSwhMCl9LHJlbW92ZTpmdW5jdGlvbihhKXtyZXR1cm4gSWEodGhpcyxhKX0sdGV4dDpmdW5jdGlvbihhKXtyZXR1cm4gWSh0aGlzLGZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hP24udGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuYXBwZW5kKCh0aGlzWzBdJiZ0aGlzWzBdLm93bmVyRG9jdW1lbnR8fGQpLmNyZWF0ZVRleHROb2RlKGEpKX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSGEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPUNhKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiBIYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9Q2EodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiBIYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiBIYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgYSxiPTA7bnVsbCE9KGE9dGhpc1tiXSk7YisrKXsxPT09YS5ub2RlVHlwZSYmbi5jbGVhbkRhdGEoZWEoYSwhMSkpO3doaWxlKGEuZmlyc3RDaGlsZClhLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCk7YS5vcHRpb25zJiZuLm5vZGVOYW1lKGEsXCJzZWxlY3RcIikmJihhLm9wdGlvbnMubGVuZ3RoPTApfXJldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGw9PWE/ITE6YSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIG4uY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIFkodGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hKXJldHVybiAxPT09Yi5ub2RlVHlwZT9iLmlubmVySFRNTC5yZXBsYWNlKHRhLFwiXCIpOnZvaWQgMDtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmIXdhLnRlc3QoYSkmJihsLmh0bWxTZXJpYWxpemV8fCF1YS50ZXN0KGEpKSYmKGwubGVhZGluZ1doaXRlc3BhY2V8fCFhYS50ZXN0KGEpKSYmIWRhWygkLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1uLmh0bWxQcmVmaWx0ZXIoYSk7dHJ5e2Zvcig7ZD5jO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEoZWEoYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gSGEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5wYXJlbnROb2RlO24uaW5BcnJheSh0aGlzLGEpPDAmJihuLmNsZWFuRGF0YShlYSh0aGlzKSksYyYmYy5yZXBsYWNlQ2hpbGQoYix0aGlzKSl9LGEpfX0pLG4uZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9MCxlPVtdLGY9bihhKSxoPWYubGVuZ3RoLTE7aD49ZDtkKyspYz1kPT09aD90aGlzOnRoaXMuY2xvbmUoITApLG4oZltkXSlbYl0oYyksZy5hcHBseShlLGMuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgSmEsS2E9e0hUTUw6XCJibG9ja1wiLEJPRFk6XCJibG9ja1wifTtmdW5jdGlvbiBMYShhLGIpe3ZhciBjPW4oYi5jcmVhdGVFbGVtZW50KGEpKS5hcHBlbmRUbyhiLmJvZHkpLGQ9bi5jc3MoY1swXSxcImRpc3BsYXlcIik7cmV0dXJuIGMuZGV0YWNoKCksZH1mdW5jdGlvbiBNYShhKXt2YXIgYj1kLGM9S2FbYV07cmV0dXJuIGN8fChjPUxhKGEsYiksXCJub25lXCIhPT1jJiZjfHwoSmE9KEphfHxuKFwiPGlmcmFtZSBmcmFtZWJvcmRlcj0nMCcgd2lkdGg9JzAnIGhlaWdodD0nMCcvPlwiKSkuYXBwZW5kVG8oYi5kb2N1bWVudEVsZW1lbnQpLGI9KEphWzBdLmNvbnRlbnRXaW5kb3d8fEphWzBdLmNvbnRlbnREb2N1bWVudCkuZG9jdW1lbnQsYi53cml0ZSgpLGIuY2xvc2UoKSxjPUxhKGEsYiksSmEuZGV0YWNoKCkpLEthW2FdPWMpLGN9dmFyIE5hPS9ebWFyZ2luLyxPYT1uZXcgUmVnRXhwKFwiXihcIitUK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLFBhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz17fTtmb3IoZiBpbiBiKWdbZl09YS5zdHlsZVtmXSxhLnN0eWxlW2ZdPWJbZl07ZT1jLmFwcGx5KGEsZHx8W10pO2ZvcihmIGluIGIpYS5zdHlsZVtmXT1nW2ZdO3JldHVybiBlfSxRYT1kLmRvY3VtZW50RWxlbWVudDshZnVuY3Rpb24oKXt2YXIgYixjLGUsZixnLGgsaT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaj1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoai5zdHlsZSl7ai5zdHlsZS5jc3NUZXh0PVwiZmxvYXQ6bGVmdDtvcGFjaXR5Oi41XCIsbC5vcGFjaXR5PVwiMC41XCI9PT1qLnN0eWxlLm9wYWNpdHksbC5jc3NGbG9hdD0hIWouc3R5bGUuY3NzRmxvYXQsai5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsai5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsbC5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09ai5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxpPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxpLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDo4cHg7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O3BhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGouaW5uZXJIVE1MPVwiXCIsaS5hcHBlbmRDaGlsZChqKSxsLmJveFNpemluZz1cIlwiPT09ai5zdHlsZS5ib3hTaXppbmd8fFwiXCI9PT1qLnN0eWxlLk1vekJveFNpemluZ3x8XCJcIj09PWouc3R5bGUuV2Via2l0Qm94U2l6aW5nLG4uZXh0ZW5kKGwse3JlbGlhYmxlSGlkZGVuT2Zmc2V0czpmdW5jdGlvbigpe3JldHVybiBudWxsPT1iJiZrKCksZn0sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YiYmaygpLGV9LHBpeGVsTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YiYmaygpLGN9LHBpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YiYmaygpLGJ9LHJlbGlhYmxlTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YiYmaygpLGd9LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBudWxsPT1iJiZrKCksaH19KTtmdW5jdGlvbiBrKCl7dmFyIGssbCxtPWQuZG9jdW1lbnRFbGVtZW50O20uYXBwZW5kQ2hpbGQoaSksai5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt0b3A6MSU7d2lkdGg6NTAlXCIsYj1lPWg9ITEsYz1nPSEwLGEuZ2V0Q29tcHV0ZWRTdHlsZSYmKGw9YS5nZXRDb21wdXRlZFN0eWxlKGopLGI9XCIxJVwiIT09KGx8fHt9KS50b3AsaD1cIjJweFwiPT09KGx8fHt9KS5tYXJnaW5MZWZ0LGU9XCI0cHhcIj09PShsfHx7d2lkdGg6XCI0cHhcIn0pLndpZHRoLGouc3R5bGUubWFyZ2luUmlnaHQ9XCI1MCVcIixjPVwiNHB4XCI9PT0obHx8e21hcmdpblJpZ2h0OlwiNHB4XCJ9KS5tYXJnaW5SaWdodCxrPWouYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxrLnN0eWxlLmNzc1RleHQ9ai5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzowXCIsay5zdHlsZS5tYXJnaW5SaWdodD1rLnN0eWxlLndpZHRoPVwiMFwiLGouc3R5bGUud2lkdGg9XCIxcHhcIixnPSFwYXJzZUZsb2F0KChhLmdldENvbXB1dGVkU3R5bGUoayl8fHt9KS5tYXJnaW5SaWdodCksai5yZW1vdmVDaGlsZChrKSksai5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGY9MD09PWouZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgsZiYmKGouc3R5bGUuZGlzcGxheT1cIlwiLGouaW5uZXJIVE1MPVwiPHRhYmxlPjx0cj48dGQ+PC90ZD48dGQ+dDwvdGQ+PC90cj48L3RhYmxlPlwiLGouY2hpbGROb2Rlc1swXS5zdHlsZS5ib3JkZXJDb2xsYXBzZT1cInNlcGFyYXRlXCIsaz1qLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIiksa1swXS5zdHlsZS5jc3NUZXh0PVwibWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzowO2Rpc3BsYXk6bm9uZVwiLGY9MD09PWtbMF0ub2Zmc2V0SGVpZ2h0LGYmJihrWzBdLnN0eWxlLmRpc3BsYXk9XCJcIixrWzFdLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZj0wPT09a1swXS5vZmZzZXRIZWlnaHQpKSxtLnJlbW92ZUNoaWxkKGkpfX19KCk7dmFyIFJhLFNhLFRhPS9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkLzthLmdldENvbXB1dGVkU3R5bGU/KFJhPWZ1bmN0aW9uKGIpe3ZhciBjPWIub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gYyYmYy5vcGVuZXJ8fChjPWEpLGMuZ2V0Q29tcHV0ZWRTdHlsZShiKX0sU2E9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHxSYShhKSxnPWM/Yy5nZXRQcm9wZXJ0eVZhbHVlKGIpfHxjW2JdOnZvaWQgMCxcIlwiIT09ZyYmdm9pZCAwIT09Z3x8bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl8fChnPW4uc3R5bGUoYSxiKSksYyYmIWwucGl4ZWxNYXJnaW5SaWdodCgpJiZPYS50ZXN0KGcpJiZOYS50ZXN0KGIpJiYoZD1oLndpZHRoLGU9aC5taW5XaWR0aCxmPWgubWF4V2lkdGgsaC5taW5XaWR0aD1oLm1heFdpZHRoPWgud2lkdGg9ZyxnPWMud2lkdGgsaC53aWR0aD1kLGgubWluV2lkdGg9ZSxoLm1heFdpZHRoPWYpLHZvaWQgMD09PWc/ZzpnK1wiXCJ9KTpRYS5jdXJyZW50U3R5bGUmJihSYT1mdW5jdGlvbihhKXtyZXR1cm4gYS5jdXJyZW50U3R5bGV9LFNhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuc3R5bGU7cmV0dXJuIGM9Y3x8UmEoYSksZz1jP2NbYl06dm9pZCAwLG51bGw9PWcmJmgmJmhbYl0mJihnPWhbYl0pLE9hLnRlc3QoZykmJiFUYS50ZXN0KGIpJiYoZD1oLmxlZnQsZT1hLnJ1bnRpbWVTdHlsZSxmPWUmJmUubGVmdCxmJiYoZS5sZWZ0PWEuY3VycmVudFN0eWxlLmxlZnQpLGgubGVmdD1cImZvbnRTaXplXCI9PT1iP1wiMWVtXCI6ZyxnPWgucGl4ZWxMZWZ0K1wicHhcIixoLmxlZnQ9ZCxmJiYoZS5sZWZ0PWYpKSx2b2lkIDA9PT1nP2c6ZytcIlwifHxcImF1dG9cIn0pO2Z1bmN0aW9uIFVhKGEsYil7cmV0dXJue2dldDpmdW5jdGlvbigpe3JldHVybiBhKCk/dm9pZCBkZWxldGUgdGhpcy5nZXQ6KHRoaXMuZ2V0PWIpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fXZhciBWYT0vYWxwaGFcXChbXildKlxcKS9pLFdhPS9vcGFjaXR5XFxzKj1cXHMqKFteKV0qKS9pLFhhPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxZYT1uZXcgUmVnRXhwKFwiXihcIitUK1wiKSguKikkXCIsXCJpXCIpLFphPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSwkYT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LF9hPVtcIldlYmtpdFwiLFwiT1wiLFwiTW96XCIsXCJtc1wiXSxhYj1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7ZnVuY3Rpb24gYmIoYSl7aWYoYSBpbiBhYilyZXR1cm4gYTt2YXIgYj1hLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc2xpY2UoMSksYz1fYS5sZW5ndGg7d2hpbGUoYy0tKWlmKGE9X2FbY10rYixhIGluIGFiKXJldHVybiBhfWZ1bmN0aW9uIGNiKGEsYil7Zm9yKHZhciBjLGQsZSxmPVtdLGc9MCxoPWEubGVuZ3RoO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihmW2ddPW4uX2RhdGEoZCxcIm9sZGRpc3BsYXlcIiksYz1kLnN0eWxlLmRpc3BsYXksYj8oZltnXXx8XCJub25lXCIhPT1jfHwoZC5zdHlsZS5kaXNwbGF5PVwiXCIpLFwiXCI9PT1kLnN0eWxlLmRpc3BsYXkmJlcoZCkmJihmW2ddPW4uX2RhdGEoZCxcIm9sZGRpc3BsYXlcIixNYShkLm5vZGVOYW1lKSkpKTooZT1XKGQpLChjJiZcIm5vbmVcIiE9PWN8fCFlKSYmbi5fZGF0YShkLFwib2xkZGlzcGxheVwiLGU/YzpuLmNzcyhkLFwiZGlzcGxheVwiKSkpKTtmb3IoZz0wO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihiJiZcIm5vbmVcIiE9PWQuc3R5bGUuZGlzcGxheSYmXCJcIiE9PWQuc3R5bGUuZGlzcGxheXx8KGQuc3R5bGUuZGlzcGxheT1iP2ZbZ118fFwiXCI6XCJub25lXCIpKTtyZXR1cm4gYX1mdW5jdGlvbiBkYihhLGIsYyl7dmFyIGQ9WWEuZXhlYyhiKTtyZXR1cm4gZD9NYXRoLm1heCgwLGRbMV0tKGN8fDApKSsoZFsyXXx8XCJweFwiKTpifWZ1bmN0aW9uIGViKGEsYixjLGQsZSl7Zm9yKHZhciBmPWM9PT0oZD9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PWI/MTowLGc9MDs0PmY7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPW4uY3NzKGEsYytWW2ZdLCEwLGUpKSxkPyhcImNvbnRlbnRcIj09PWMmJihnLT1uLmNzcyhhLFwicGFkZGluZ1wiK1ZbZl0sITAsZSkpLFwibWFyZ2luXCIhPT1jJiYoZy09bi5jc3MoYSxcImJvcmRlclwiK1ZbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPW4uY3NzKGEsXCJwYWRkaW5nXCIrVltmXSwhMCxlKSxcInBhZGRpbmdcIiE9PWMmJihnKz1uLmNzcyhhLFwiYm9yZGVyXCIrVltmXStcIldpZHRoXCIsITAsZSkpKTtyZXR1cm4gZ31mdW5jdGlvbiBmYihhLGIsYyl7dmFyIGQ9ITAsZT1cIndpZHRoXCI9PT1iP2Eub2Zmc2V0V2lkdGg6YS5vZmZzZXRIZWlnaHQsZj1SYShhKSxnPWwuYm94U2l6aW5nJiZcImJvcmRlci1ib3hcIj09PW4uY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKTtpZigwPj1lfHxudWxsPT1lKXtpZihlPVNhKGEsYixmKSwoMD5lfHxudWxsPT1lKSYmKGU9YS5zdHlsZVtiXSksT2EudGVzdChlKSlyZXR1cm4gZTtkPWcmJihsLmJveFNpemluZ1JlbGlhYmxlKCl8fGU9PT1hLnN0eWxlW2JdKSxlPXBhcnNlRmxvYXQoZSl8fDB9cmV0dXJuIGUrZWIoYSxiLGN8fChnP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGQsZikrXCJweFwifW4uZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9U2EoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOmwuY3NzRmxvYXQ/XCJjc3NGbG9hdFwiOlwic3R5bGVGbG9hdFwifSxzdHlsZTpmdW5jdGlvbihhLGIsYyxkKXtpZihhJiYzIT09YS5ub2RlVHlwZSYmOCE9PWEubm9kZVR5cGUmJmEuc3R5bGUpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpLGk9YS5zdHlsZTtpZihiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPWJiKGgpfHxoKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sdm9pZCAwPT09YylyZXR1cm4gZyYmXCJnZXRcImluIGcmJnZvaWQgMCE9PShlPWcuZ2V0KGEsITEsZCkpP2U6aVtiXTtpZihmPXR5cGVvZiBjLFwic3RyaW5nXCI9PT1mJiYoZT1VLmV4ZWMoYykpJiZlWzFdJiYoYz1YKGEsYixlKSxmPVwibnVtYmVyXCIpLG51bGwhPWMmJmM9PT1jJiYoXCJudW1iZXJcIj09PWYmJihjKz1lJiZlWzNdfHwobi5jc3NOdW1iZXJbaF0/XCJcIjpcInB4XCIpKSxsLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PWN8fDAhPT1iLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwoaVtiXT1cImluaGVyaXRcIiksIShnJiZcInNldFwiaW4gZyYmdm9pZCAwPT09KGM9Zy5zZXQoYSxjLGQpKSkpKXRyeXtpW2JdPWN9Y2F0Y2goail7fX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1iYihoKXx8aCksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZj1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1mJiYoZj1TYShhLGIsZCkpLFwibm9ybWFsXCI9PT1mJiZiIGluICRhJiYoZj0kYVtiXSksXCJcIj09PWN8fGM/KGU9cGFyc2VGbG9hdChmKSxjPT09ITB8fGlzRmluaXRlKGUpP2V8fDA6Zik6Zn19KSxuLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGM/WGEudGVzdChuLmNzcyhhLFwiZGlzcGxheVwiKSkmJjA9PT1hLm9mZnNldFdpZHRoP1BhKGEsWmEsZnVuY3Rpb24oKXtyZXR1cm4gZmIoYSxiLGQpfSk6ZmIoYSxiLGQpOnZvaWQgMH0sc2V0OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZT1kJiZSYShhKTtyZXR1cm4gZGIoYSxjLGQ/ZWIoYSxiLGQsbC5ib3hTaXppbmcmJlwiYm9yZGVyLWJveFwiPT09bi5jc3MoYSxcImJveFNpemluZ1wiLCExLGUpLGUpOjApfX19KSxsLm9wYWNpdHl8fChuLmNzc0hvb2tzLm9wYWNpdHk9e2dldDpmdW5jdGlvbihhLGIpe3JldHVybiBXYS50ZXN0KChiJiZhLmN1cnJlbnRTdHlsZT9hLmN1cnJlbnRTdHlsZS5maWx0ZXI6YS5zdHlsZS5maWx0ZXIpfHxcIlwiKT8uMDEqcGFyc2VGbG9hdChSZWdFeHAuJDEpK1wiXCI6Yj9cIjFcIjpcIlwifSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnN0eWxlLGQ9YS5jdXJyZW50U3R5bGUsZT1uLmlzTnVtZXJpYyhiKT9cImFscGhhKG9wYWNpdHk9XCIrMTAwKmIrXCIpXCI6XCJcIixmPWQmJmQuZmlsdGVyfHxjLmZpbHRlcnx8XCJcIjtjLnpvb209MSwoYj49MXx8XCJcIj09PWIpJiZcIlwiPT09bi50cmltKGYucmVwbGFjZShWYSxcIlwiKSkmJmMucmVtb3ZlQXR0cmlidXRlJiYoYy5yZW1vdmVBdHRyaWJ1dGUoXCJmaWx0ZXJcIiksXCJcIj09PWJ8fGQmJiFkLmZpbHRlcil8fChjLmZpbHRlcj1WYS50ZXN0KGYpP2YucmVwbGFjZShWYSxlKTpmK1wiIFwiK2UpfX0pLG4uY3NzSG9va3MubWFyZ2luUmlnaHQ9VWEobC5yZWxpYWJsZU1hcmdpblJpZ2h0LGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/UGEoYSx7ZGlzcGxheTpcImlubGluZS1ibG9ja1wifSxTYSxbYSxcIm1hcmdpblJpZ2h0XCJdKTp2b2lkIDB9KSxuLmNzc0hvb2tzLm1hcmdpbkxlZnQ9VWEobC5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj8ocGFyc2VGbG9hdChTYShhLFwibWFyZ2luTGVmdFwiKSl8fChuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKT9hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtUGEoYSx7XG5tYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pOjApKStcInB4XCI6dm9pZCAwfSksbi5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdOzQ+ZDtkKyspZVthK1ZbZF0rYl09ZltkXXx8ZltkLTJdfHxmWzBdO3JldHVybiBlfX0sTmEudGVzdChhKXx8KG4uY3NzSG9va3NbYStiXS5zZXQ9ZGIpfSksbi5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihhLGIpe3JldHVybiBZKHRoaXMsZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj17fSxnPTA7aWYobi5pc0FycmF5KGIpKXtmb3IoZD1SYShhKSxlPWIubGVuZ3RoO2U+ZztnKyspZltiW2ddXT1uLmNzcyhhLGJbZ10sITEsZCk7cmV0dXJuIGZ9cmV0dXJuIHZvaWQgMCE9PWM/bi5zdHlsZShhLGIsYyk6bi5jc3MoYSxiKX0sYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gY2IodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gY2IodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/YT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtXKHRoaXMpP24odGhpcykuc2hvdygpOm4odGhpcykuaGlkZSgpfSl9fSk7ZnVuY3Rpb24gZ2IoYSxiLGMsZCxlKXtyZXR1cm4gbmV3IGdiLnByb3RvdHlwZS5pbml0KGEsYixjLGQsZSl9bi5Ud2Vlbj1nYixnYi5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmdiLGluaXQ6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMuZWxlbT1hLHRoaXMucHJvcD1jLHRoaXMuZWFzaW5nPWV8fG4uZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz1iLHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1kLHRoaXMudW5pdD1mfHwobi5jc3NOdW1iZXJbY10/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgYT1nYi5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gYSYmYS5nZXQ/YS5nZXQodGhpcyk6Z2IucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGEpe3ZhciBiLGM9Z2IucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz1iPW4uZWFzaW5nW3RoaXMuZWFzaW5nXShhLHRoaXMub3B0aW9ucy5kdXJhdGlvbiphLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPWI9YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpnYi5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxnYi5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9Z2IucHJvdG90eXBlLGdiLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gMSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbCE9YS5lbGVtW2EucHJvcF0mJm51bGw9PWEuZWxlbS5zdHlsZVthLnByb3BdP2EuZWxlbVthLnByb3BdOihiPW4uY3NzKGEuZWxlbSxhLnByb3AsXCJcIiksYiYmXCJhdXRvXCIhPT1iP2I6MCl9LHNldDpmdW5jdGlvbihhKXtuLmZ4LnN0ZXBbYS5wcm9wXT9uLmZ4LnN0ZXBbYS5wcm9wXShhKToxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsPT1hLmVsZW0uc3R5bGVbbi5jc3NQcm9wc1thLnByb3BdXSYmIW4uY3NzSG9va3NbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXT1hLm5vdzpuLnN0eWxlKGEuZWxlbSxhLnByb3AsYS5ub3crYS51bml0KX19fSxnYi5wcm9wSG9va3Muc2Nyb2xsVG9wPWdiLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oYSl7YS5lbGVtLm5vZGVUeXBlJiZhLmVsZW0ucGFyZW50Tm9kZSYmKGEuZWxlbVthLnByb3BdPWEubm93KX19LG4uZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxuLmZ4PWdiLnByb3RvdHlwZS5pbml0LG4uZnguc3RlcD17fTt2YXIgaGIsaWIsamI9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLGtiPS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gbGIoKXtyZXR1cm4gYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aGI9dm9pZCAwfSksaGI9bi5ub3coKX1mdW5jdGlvbiBtYihhLGIpe3ZhciBjLGQ9e2hlaWdodDphfSxlPTA7Zm9yKGI9Yj8xOjA7ND5lO2UrPTItYiljPVZbZV0sZFtcIm1hcmdpblwiK2NdPWRbXCJwYWRkaW5nXCIrY109YTtyZXR1cm4gYiYmKGQub3BhY2l0eT1kLndpZHRoPWEpLGR9ZnVuY3Rpb24gbmIoYSxiLGMpe2Zvcih2YXIgZCxlPShxYi50d2VlbmVyc1tiXXx8W10pLmNvbmNhdChxYi50d2VlbmVyc1tcIipcIl0pLGY9MCxnPWUubGVuZ3RoO2c+ZjtmKyspaWYoZD1lW2ZdLmNhbGwoYyxiLGEpKXJldHVybiBkfWZ1bmN0aW9uIG9iKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrLG09dGhpcyxvPXt9LHA9YS5zdHlsZSxxPWEubm9kZVR5cGUmJlcoYSkscj1uLl9kYXRhKGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGg9bi5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09aC51bnF1ZXVlZCYmKGgudW5xdWV1ZWQ9MCxpPWguZW1wdHkuZmlyZSxoLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtoLnVucXVldWVkfHxpKCl9KSxoLnVucXVldWVkKyssbS5hbHdheXMoZnVuY3Rpb24oKXttLmFsd2F5cyhmdW5jdGlvbigpe2gudW5xdWV1ZWQtLSxuLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGguZW1wdHkuZmlyZSgpfSl9KSksMT09PWEubm9kZVR5cGUmJihcImhlaWdodFwiaW4gYnx8XCJ3aWR0aFwiaW4gYikmJihjLm92ZXJmbG93PVtwLm92ZXJmbG93LHAub3ZlcmZsb3dYLHAub3ZlcmZsb3dZXSxqPW4uY3NzKGEsXCJkaXNwbGF5XCIpLGs9XCJub25lXCI9PT1qP24uX2RhdGEoYSxcIm9sZGRpc3BsYXlcIil8fE1hKGEubm9kZU5hbWUpOmosXCJpbmxpbmVcIj09PWsmJlwibm9uZVwiPT09bi5jc3MoYSxcImZsb2F0XCIpJiYobC5pbmxpbmVCbG9ja05lZWRzTGF5b3V0JiZcImlubGluZVwiIT09TWEoYS5ub2RlTmFtZSk/cC56b29tPTE6cC5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxjLm92ZXJmbG93JiYocC5vdmVyZmxvdz1cImhpZGRlblwiLGwuc2hyaW5rV3JhcEJsb2NrcygpfHxtLmFsd2F5cyhmdW5jdGlvbigpe3Aub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxwLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLHAub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0samIuZXhlYyhlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KHE/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFyfHx2b2lkIDA9PT1yW2RdKWNvbnRpbnVlO3E9ITB9b1tkXT1yJiZyW2RdfHxuLnN0eWxlKGEsZCl9ZWxzZSBqPXZvaWQgMDtpZihuLmlzRW1wdHlPYmplY3QobykpXCJpbmxpbmVcIj09PShcIm5vbmVcIj09PWo/TWEoYS5ub2RlTmFtZSk6aikmJihwLmRpc3BsYXk9aik7ZWxzZXtyP1wiaGlkZGVuXCJpbiByJiYocT1yLmhpZGRlbik6cj1uLl9kYXRhKGEsXCJmeHNob3dcIix7fSksZiYmKHIuaGlkZGVuPSFxKSxxP24oYSkuc2hvdygpOm0uZG9uZShmdW5jdGlvbigpe24oYSkuaGlkZSgpfSksbS5kb25lKGZ1bmN0aW9uKCl7dmFyIGI7bi5fcmVtb3ZlRGF0YShhLFwiZnhzaG93XCIpO2ZvcihiIGluIG8pbi5zdHlsZShhLGIsb1tiXSl9KTtmb3IoZCBpbiBvKWc9bmIocT9yW2RdOjAsZCxtKSxkIGluIHJ8fChyW2RdPWcuc3RhcnQscSYmKGcuZW5kPWcuc3RhcnQsZy5zdGFydD1cIndpZHRoXCI9PT1kfHxcImhlaWdodFwiPT09ZD8xOjApKX19ZnVuY3Rpb24gcGIoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1uLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLG4uaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9bi5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIHFiKGEsYixjKXt2YXIgZCxlLGY9MCxnPXFiLnByZWZpbHRlcnMubGVuZ3RoLGg9bi5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSBpLmVsZW19KSxpPWZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4hMTtmb3IodmFyIGI9aGJ8fGxiKCksYz1NYXRoLm1heCgwLGouc3RhcnRUaW1lK2ouZHVyYXRpb24tYiksZD1jL2ouZHVyYXRpb258fDAsZj0xLWQsZz0wLGk9ai50d2VlbnMubGVuZ3RoO2k+ZztnKyspai50d2VlbnNbZ10ucnVuKGYpO3JldHVybiBoLm5vdGlmeVdpdGgoYSxbaixmLGNdKSwxPmYmJmk/YzooaC5yZXNvbHZlV2l0aChhLFtqXSksITEpfSxqPWgucHJvbWlzZSh7ZWxlbTphLHByb3BzOm4uZXh0ZW5kKHt9LGIpLG9wdHM6bi5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOm4uZWFzaW5nLl9kZWZhdWx0fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6aGJ8fGxiKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1uLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2Q+YztjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiPyhoLm5vdGlmeVdpdGgoYSxbaiwxLDBdKSxoLnJlc29sdmVXaXRoKGEsW2osYl0pKTpoLnJlamVjdFdpdGgoYSxbaixiXSksdGhpc319KSxrPWoucHJvcHM7Zm9yKHBiKGssai5vcHRzLnNwZWNpYWxFYXNpbmcpO2c+ZjtmKyspaWYoZD1xYi5wcmVmaWx0ZXJzW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gbi5pc0Z1bmN0aW9uKGQuc3RvcCkmJihuLl9xdWV1ZUhvb2tzKGouZWxlbSxqLm9wdHMucXVldWUpLnN0b3A9bi5wcm94eShkLnN0b3AsZCkpLGQ7cmV0dXJuIG4ubWFwKGssbmIsaiksbi5pc0Z1bmN0aW9uKGoub3B0cy5zdGFydCkmJmoub3B0cy5zdGFydC5jYWxsKGEsaiksbi5meC50aW1lcihuLmV4dGVuZChpLHtlbGVtOmEsYW5pbTpqLHF1ZXVlOmoub3B0cy5xdWV1ZX0pKSxqLnByb2dyZXNzKGoub3B0cy5wcm9ncmVzcykuZG9uZShqLm9wdHMuZG9uZSxqLm9wdHMuY29tcGxldGUpLmZhaWwoai5vcHRzLmZhaWwpLmFsd2F5cyhqLm9wdHMuYWx3YXlzKX1uLkFuaW1hdGlvbj1uLmV4dGVuZChxYix7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY3JlYXRlVHdlZW4oYSxiKTtyZXR1cm4gWChjLmVsZW0sYSxVLmV4ZWMoYiksYyksY31dfSx0d2VlbmVyOmZ1bmN0aW9uKGEsYil7bi5pc0Z1bmN0aW9uKGEpPyhiPWEsYT1bXCIqXCJdKTphPWEubWF0Y2goRyk7Zm9yKHZhciBjLGQ9MCxlPWEubGVuZ3RoO2U+ZDtkKyspYz1hW2RdLHFiLnR3ZWVuZXJzW2NdPXFiLnR3ZWVuZXJzW2NdfHxbXSxxYi50d2VlbmVyc1tjXS51bnNoaWZ0KGIpfSxwcmVmaWx0ZXJzOltvYl0scHJlZmlsdGVyOmZ1bmN0aW9uKGEsYil7Yj9xYi5wcmVmaWx0ZXJzLnVuc2hpZnQoYSk6cWIucHJlZmlsdGVycy5wdXNoKGEpfX0pLG4uc3BlZWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEmJlwib2JqZWN0XCI9PXR5cGVvZiBhP24uZXh0ZW5kKHt9LGEpOntjb21wbGV0ZTpjfHwhYyYmYnx8bi5pc0Z1bmN0aW9uKGEpJiZhLGR1cmF0aW9uOmEsZWFzaW5nOmMmJmJ8fGImJiFuLmlzRnVuY3Rpb24oYikmJmJ9O3JldHVybiBkLmR1cmF0aW9uPW4uZngub2ZmPzA6XCJudW1iZXJcIj09dHlwZW9mIGQuZHVyYXRpb24/ZC5kdXJhdGlvbjpkLmR1cmF0aW9uIGluIG4uZnguc3BlZWRzP24uZnguc3BlZWRzW2QuZHVyYXRpb25dOm4uZnguc3BlZWRzLl9kZWZhdWx0LG51bGwhPWQucXVldWUmJmQucXVldWUhPT0hMHx8KGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXtuLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJm4uZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxuLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihXKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6Yn0sYSxjLGQpfSxhbmltYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW4uaXNFbXB0eU9iamVjdChhKSxmPW4uc3BlZWQoYixjLGQpLGc9ZnVuY3Rpb24oKXt2YXIgYj1xYih0aGlzLG4uZXh0ZW5kKHt9LGEpLGYpOyhlfHxuLl9kYXRhKHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1uLnRpbWVycyxnPW4uX2RhdGEodGhpcyk7aWYoZSlnW2VdJiZnW2VdLnN0b3AmJmQoZ1tlXSk7ZWxzZSBmb3IoZSBpbiBnKWdbZV0mJmdbZV0uc3RvcCYma2IudGVzdChlKSYmZChnW2VdKTtmb3IoZT1mLmxlbmd0aDtlLS07KWZbZV0uZWxlbSE9PXRoaXN8fG51bGwhPWEmJmZbZV0ucXVldWUhPT1hfHwoZltlXS5hbmltLnN0b3AoYyksYj0hMSxmLnNwbGljZShlLDEpKTshYiYmY3x8bi5kZXF1ZXVlKHRoaXMsYSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiBhIT09ITEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsYz1uLl9kYXRhKHRoaXMpLGQ9Y1thK1wicXVldWVcIl0sZT1jW2ErXCJxdWV1ZUhvb2tzXCJdLGY9bi50aW1lcnMsZz1kP2QubGVuZ3RoOjA7Zm9yKGMuZmluaXNoPSEwLG4ucXVldWUodGhpcyxhLFtdKSxlJiZlLnN0b3AmJmUuc3RvcC5jYWxsKHRoaXMsITApLGI9Zi5sZW5ndGg7Yi0tOylmW2JdLmVsZW09PT10aGlzJiZmW2JdLnF1ZXVlPT09YSYmKGZbYl0uYW5pbS5zdG9wKCEwKSxmLnNwbGljZShiLDEpKTtmb3IoYj0wO2c+YjtiKyspZFtiXSYmZFtiXS5maW5pc2gmJmRbYl0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIGMuZmluaXNofSl9fSksbi5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihhLGIpe3ZhciBjPW4uZm5bYl07bi5mbltiXT1mdW5jdGlvbihhLGQsZSl7cmV0dXJuIG51bGw9PWF8fFwiYm9vbGVhblwiPT10eXBlb2YgYT9jLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUobWIoYiwhMCksYSxkLGUpfX0pLG4uZWFjaCh7c2xpZGVEb3duOm1iKFwic2hvd1wiKSxzbGlkZVVwOm1iKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTptYihcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhLGMsZCl7cmV0dXJuIHRoaXMuYW5pbWF0ZShiLGEsYyxkKX19KSxuLnRpbWVycz1bXSxuLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgYSxiPW4udGltZXJzLGM9MDtmb3IoaGI9bi5ub3coKTtjPGIubGVuZ3RoO2MrKylhPWJbY10sYSgpfHxiW2NdIT09YXx8Yi5zcGxpY2UoYy0tLDEpO2IubGVuZ3RofHxuLmZ4LnN0b3AoKSxoYj12b2lkIDB9LG4uZngudGltZXI9ZnVuY3Rpb24oYSl7bi50aW1lcnMucHVzaChhKSxhKCk/bi5meC5zdGFydCgpOm4udGltZXJzLnBvcCgpfSxuLmZ4LmludGVydmFsPTEzLG4uZnguc3RhcnQ9ZnVuY3Rpb24oKXtpYnx8KGliPWEuc2V0SW50ZXJ2YWwobi5meC50aWNrLG4uZnguaW50ZXJ2YWwpKX0sbi5meC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhckludGVydmFsKGliKSxpYj1udWxsfSxuLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxuLmZuLmRlbGF5PWZ1bmN0aW9uKGIsYyl7cmV0dXJuIGI9bi5meD9uLmZ4LnNwZWVkc1tiXXx8YjpiLGM9Y3x8XCJmeFwiLHRoaXMucXVldWUoYyxmdW5jdGlvbihjLGQpe3ZhciBlPWEuc2V0VGltZW91dChjLGIpO2Quc3RvcD1mdW5jdGlvbigpe2EuY2xlYXJUaW1lb3V0KGUpfX0pfSxmdW5jdGlvbigpe3ZhciBhLGI9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYz1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZT1kLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksZj1lLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7Yz1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIixcInRcIiksYy5pbm5lckhUTUw9XCIgIDxsaW5rLz48dGFibGU+PC90YWJsZT48YSBocmVmPScvYSc+YTwvYT48aW5wdXQgdHlwZT0nY2hlY2tib3gnLz5cIixhPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpWzBdLGIuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiY2hlY2tib3hcIiksYy5hcHBlbmRDaGlsZChiKSxhPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpWzBdLGEuc3R5bGUuY3NzVGV4dD1cInRvcDoxcHhcIixsLmdldFNldEF0dHJpYnV0ZT1cInRcIiE9PWMuY2xhc3NOYW1lLGwuc3R5bGU9L3RvcC8udGVzdChhLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpKSxsLmhyZWZOb3JtYWxpemVkPVwiL2FcIj09PWEuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxsLmNoZWNrT249ISFiLnZhbHVlLGwub3B0U2VsZWN0ZWQ9Zi5zZWxlY3RlZCxsLmVuY3R5cGU9ISFkLmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLmVuY3R5cGUsZS5kaXNhYmxlZD0hMCxsLm9wdERpc2FibGVkPSFmLmRpc2FibGVkLGI9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLGwuaW5wdXQ9XCJcIj09PWIuZ2V0QXR0cmlidXRlKFwidmFsdWVcIiksYi52YWx1ZT1cInRcIixiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGwucmFkaW9WYWx1ZT1cInRcIj09PWIudmFsdWV9KCk7dmFyIHJiPS9cXHIvZyxzYj0vW1xceDIwXFx0XFxyXFxuXFxmXSsvZztuLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9bi5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLG4odGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpuLmlzQXJyYXkoZSkmJihlPW4ubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1uLnZhbEhvb2tzW3RoaXMudHlwZV18fG4udmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9bi52YWxIb29rc1tlLnR5cGVdfHxuLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZShyYixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLG4uZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bi5maW5kLmF0dHIoYSxcInZhbHVlXCIpO3JldHVybiBudWxsIT1iP2I6bi50cmltKG4udGV4dChhKSkucmVwbGFjZShzYixcIiBcIil9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkPWEub3B0aW9ucyxlPWEuc2VsZWN0ZWRJbmRleCxmPVwic2VsZWN0LW9uZVwiPT09YS50eXBlfHwwPmUsZz1mP251bGw6W10saD1mP2UrMTpkLmxlbmd0aCxpPTA+ZT9oOmY/ZTowO2g+aTtpKyspaWYoYz1kW2ldLChjLnNlbGVjdGVkfHxpPT09ZSkmJihsLm9wdERpc2FibGVkPyFjLmRpc2FibGVkOm51bGw9PT1jLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpKSYmKCFjLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFuLm5vZGVOYW1lKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1uKGMpLnZhbCgpLGYpcmV0dXJuIGI7Zy5wdXNoKGIpfXJldHVybiBnfSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9bi5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0paWYoZD1lW2ddLG4uaW5BcnJheShuLnZhbEhvb2tzLm9wdGlvbi5nZXQoZCksZik+LTEpdHJ5e2Quc2VsZWN0ZWQ9Yz0hMH1jYXRjaChoKXtkLnNjcm9sbEhlaWdodH1lbHNlIGQuc2VsZWN0ZWQ9ITE7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGV9fX19KSxuLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7bi52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uaXNBcnJheShiKT9hLmNoZWNrZWQ9bi5pbkFycmF5KG4oYSkudmFsKCksYik+LTE6dm9pZCAwfX0sbC5jaGVja09ufHwobi52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KTt2YXIgdGIsdWIsdmI9bi5leHByLmF0dHJIYW5kbGUsd2I9L14oPzpjaGVja2VkfHNlbGVjdGVkKSQvaSx4Yj1sLmdldFNldEF0dHJpYnV0ZSx5Yj1sLmlucHV0O24uZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFkodGhpcyxuLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24ucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuZ2V0QXR0cmlidXRlP24ucHJvcChhLGIsYyk6KDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1iLnRvTG93ZXJDYXNlKCksZT1uLmF0dHJIb29rc1tiXXx8KG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYik/dWI6dGIpKSx2b2lkIDAhPT1jP251bGw9PT1jP3ZvaWQgbi5yZW1vdmVBdHRyKGEsYik6ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDooYS5zZXRBdHRyaWJ1dGUoYixjK1wiXCIpLGMpOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDooZD1uLmZpbmQuYXR0cihhLGIpLG51bGw9PWQ/dm9pZCAwOmQpKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oYSxiKXtpZighbC5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT1iJiZuLm5vZGVOYW1lKGEsXCJpbnB1dFwiKSl7dmFyIGM9YS52YWx1ZTtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsYiksYyYmKGEudmFsdWU9YyksYn19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT0wLGY9YiYmYi5tYXRjaChHKTtpZihmJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWZbZSsrXSlkPW4ucHJvcEZpeFtjXXx8YyxuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGMpP3liJiZ4Ynx8IXdiLnRlc3QoYyk/YVtkXT0hMTphW24uY2FtZWxDYXNlKFwiZGVmYXVsdC1cIitjKV09YVtkXT0hMTpuLmF0dHIoYSxjLFwiXCIpLGEucmVtb3ZlQXR0cmlidXRlKHhiP2M6ZCl9fSksdWI9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9uLnJlbW92ZUF0dHIoYSxjKTp5YiYmeGJ8fCF3Yi50ZXN0KGMpP2Euc2V0QXR0cmlidXRlKCF4YiYmbi5wcm9wRml4W2NdfHxjLGMpOmFbbi5jYW1lbENhc2UoXCJkZWZhdWx0LVwiK2MpXT1hW2NdPSEwLGN9fSxuLmVhY2gobi5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9dmJbYl18fG4uZmluZC5hdHRyO3liJiZ4Ynx8IXdiLnRlc3QoYik/dmJbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGY7cmV0dXJuIGR8fChmPXZiW2JdLHZiW2JdPWUsZT1udWxsIT1jKGEsYixkKT9iLnRvTG93ZXJDYXNlKCk6bnVsbCx2YltiXT1mKSxlfTp2YltiXT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGM/dm9pZCAwOmFbbi5jYW1lbENhc2UoXCJkZWZhdWx0LVwiK2IpXT9iLnRvTG93ZXJDYXNlKCk6bnVsbH19KSx5YiYmeGJ8fChuLmF0dHJIb29rcy52YWx1ZT17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5ub2RlTmFtZShhLFwiaW5wdXRcIik/dm9pZChhLmRlZmF1bHRWYWx1ZT1iKTp0YiYmdGIuc2V0KGEsYixjKX19KSx4Ynx8KHRiPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEuZ2V0QXR0cmlidXRlTm9kZShjKTtyZXR1cm4gZHx8YS5zZXRBdHRyaWJ1dGVOb2RlKGQ9YS5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShjKSksZC52YWx1ZT1iKz1cIlwiLFwidmFsdWVcIj09PWN8fGI9PT1hLmdldEF0dHJpYnV0ZShjKT9iOnZvaWQgMH19LHZiLmlkPXZiLm5hbWU9dmIuY29vcmRzPWZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYz92b2lkIDA6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmXCJcIiE9PWQudmFsdWU/ZC52YWx1ZTpudWxsfSxuLnZhbEhvb2tzLmJ1dHRvbj17Z2V0OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpO3JldHVybiBjJiZjLnNwZWNpZmllZD9jLnZhbHVlOnZvaWQgMH0sc2V0OnRiLnNldH0sbi5hdHRySG9va3MuY29udGVudGVkaXRhYmxlPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3RiLnNldChhLFwiXCI9PT1iPyExOmIsYyl9fSxuLmVhY2goW1wid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihhLGIpe24uYXR0ckhvb2tzW2JdPXtzZXQ6ZnVuY3Rpb24oYSxjKXtyZXR1cm5cIlwiPT09Yz8oYS5zZXRBdHRyaWJ1dGUoYixcImF1dG9cIiksYyk6dm9pZCAwfX19KSksbC5zdHlsZXx8KG4uYXR0ckhvb2tzLnN0eWxlPXtnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc3R5bGUuY3NzVGV4dHx8dm9pZCAwfSxzZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5zdHlsZS5jc3NUZXh0PWIrXCJcIn19KTt2YXIgemI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9ufG9iamVjdCkkL2ksQWI9L14oPzphfGFyZWEpJC9pO24uZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFkodGhpcyxuLnByb3AsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9bi5wcm9wRml4W2FdfHxhLHRoaXMuZWFjaChmdW5jdGlvbigpe3RyeXt0aGlzW2FdPXZvaWQgMCxkZWxldGUgdGhpc1thXX1jYXRjaChiKXt9fSl9fSksbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuIDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1uLnByb3BGaXhbYl18fGIsZT1uLnByb3BIb29rc1tiXSksdm9pZCAwIT09Yz9lJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOmFbYl09YzplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6YVtiXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPW4uZmluZC5hdHRyKGEsXCJ0YWJpbmRleFwiKTtyZXR1cm4gYj9wYXJzZUludChiLDEwKTp6Yi50ZXN0KGEubm9kZU5hbWUpfHxBYi50ZXN0KGEubm9kZU5hbWUpJiZhLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLGwuaHJlZk5vcm1hbGl6ZWR8fG4uZWFjaChbXCJocmVmXCIsXCJzcmNcIl0sZnVuY3Rpb24oYSxiKXtuLnByb3BIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShiLDQpfX19KSxsLm9wdFNlbGVjdGVkfHwobi5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJihiLnNlbGVjdGVkSW5kZXgsYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCksbnVsbH0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtiJiYoYi5zZWxlY3RlZEluZGV4LGIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLG4uZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtuLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSksbC5lbmN0eXBlfHwobi5wcm9wRml4LmVuY3R5cGU9XCJlbmNvZGluZ1wiKTt2YXIgQmI9L1tcXHRcXHJcXG5cXGZdL2c7ZnVuY3Rpb24gQ2IoYSl7cmV0dXJuIG4uYXR0cihhLFwiY2xhc3NcIil8fFwiXCJ9bi5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLmFkZENsYXNzKGEuY2FsbCh0aGlzLGIsQ2IodGhpcykpKX0pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goRyl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9Q2IoYyksZD0xPT09Yy5ub2RlVHlwZSYmKFwiIFwiK2UrXCIgXCIpLnJlcGxhY2UoQmIsXCIgXCIpKXtnPTA7d2hpbGUoZj1iW2crK10pZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPDAmJihkKz1mK1wiIFwiKTtoPW4udHJpbShkKSxlIT09aCYmbi5hdHRyKGMsXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYixDYih0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChHKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1DYihjKSxkPTE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZStcIiBcIikucmVwbGFjZShCYixcIiBcIikpe2c9MDt3aGlsZShmPWJbZysrXSl3aGlsZShkLmluZGV4T2YoXCIgXCIrZitcIiBcIik+LTEpZD1kLnJlcGxhY2UoXCIgXCIrZitcIiBcIixcIiBcIik7aD1uLnRyaW0oZCksZSE9PWgmJm4uYXR0cihjLFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dHlwZW9mIGE7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBiJiZcInN0cmluZ1wiPT09Yz9iP3RoaXMuYWRkQ2xhc3MoYSk6dGhpcy5yZW1vdmVDbGFzcyhhKTpuLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykudG9nZ2xlQ2xhc3MoYS5jYWxsKHRoaXMsYyxDYih0aGlzKSxiKSxiKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGQsZSxmO2lmKFwic3RyaW5nXCI9PT1jKXtkPTAsZT1uKHRoaXMpLGY9YS5tYXRjaChHKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZSB2b2lkIDAhPT1hJiZcImJvb2xlYW5cIiE9PWN8fChiPUNiKHRoaXMpLGImJm4uX2RhdGEodGhpcyxcIl9fY2xhc3NOYW1lX19cIixiKSxuLmF0dHIodGhpcyxcImNsYXNzXCIsYnx8YT09PSExP1wiXCI6bi5fZGF0YSh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0wO2I9XCIgXCIrYStcIiBcIjt3aGlsZShjPXRoaXNbZCsrXSlpZigxPT09Yy5ub2RlVHlwZSYmKFwiIFwiK0NiKGMpK1wiIFwiKS5yZXBsYWNlKEJiLFwiIFwiKS5pbmRleE9mKGIpPi0xKXJldHVybiEwO3JldHVybiExfX0pLG4uZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCBsb2FkIHJlc2l6ZSBzY3JvbGwgdW5sb2FkIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3IgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxuLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9fSk7dmFyIERiPWEubG9jYXRpb24sRWI9bi5ub3coKSxGYj0vXFw/LyxHYj0vKCwpfChcXFt8eyl8KH18XSl8XCIoPzpbXlwiXFxcXFxcclxcbl18XFxcXFtcIlxcXFxcXC9iZm5ydF18XFxcXHVbXFxkYS1mQS1GXXs0fSkqXCJcXHMqOj98dHJ1ZXxmYWxzZXxudWxsfC0/KD8hMFxcZClcXGQrKD86XFwuXFxkK3wpKD86W2VFXVsrLV0/XFxkK3wpL2c7bi5wYXJzZUpTT049ZnVuY3Rpb24oYil7aWYoYS5KU09OJiZhLkpTT04ucGFyc2UpcmV0dXJuIGEuSlNPTi5wYXJzZShiK1wiXCIpO3ZhciBjLGQ9bnVsbCxlPW4udHJpbShiK1wiXCIpO3JldHVybiBlJiYhbi50cmltKGUucmVwbGFjZShHYixmdW5jdGlvbihhLGIsZSxmKXtyZXR1cm4gYyYmYiYmKGQ9MCksMD09PWQ/YTooYz1lfHxiLGQrPSFmLSFlLFwiXCIpfSkpP0Z1bmN0aW9uKFwicmV0dXJuIFwiK2UpKCk6bi5lcnJvcihcIkludmFsaWQgSlNPTjogXCIrYil9LG4ucGFyc2VYTUw9ZnVuY3Rpb24oYil7dmFyIGMsZDtpZighYnx8XCJzdHJpbmdcIiE9dHlwZW9mIGIpcmV0dXJuIG51bGw7dHJ5e2EuRE9NUGFyc2VyPyhkPW5ldyBhLkRPTVBhcnNlcixjPWQucGFyc2VGcm9tU3RyaW5nKGIsXCJ0ZXh0L3htbFwiKSk6KGM9bmV3IGEuQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxET01cIiksYy5hc3luYz1cImZhbHNlXCIsYy5sb2FkWE1MKGIpKX1jYXRjaChlKXtjPXZvaWQgMH1yZXR1cm4gYyYmYy5kb2N1bWVudEVsZW1lbnQmJiFjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RofHxuLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2IpLGN9O3ZhciBIYj0vIy4qJC8sSWI9LyhbPyZdKV89W14mXSovLEpiPS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKVxccj8kL2dtLEtiPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLExiPS9eKD86R0VUfEhFQUQpJC8sTWI9L15cXC9cXC8vLE5iPS9eKFtcXHcuKy1dKzopKD86XFwvXFwvKD86W15cXC8/I10qQHwpKFteXFwvPyM6XSopKD86OihcXGQrKXwpfCkvLE9iPXt9LFBiPXt9LFFiPVwiKi9cIi5jb25jYXQoXCIqXCIpLFJiPURiLmhyZWYsU2I9TmIuZXhlYyhSYi50b0xvd2VyQ2FzZSgpKXx8W107ZnVuY3Rpb24gVGIoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWIsYj1cIipcIik7dmFyIGQsZT0wLGY9Yi50b0xvd2VyQ2FzZSgpLm1hdGNoKEcpfHxbXTtpZihuLmlzRnVuY3Rpb24oYykpd2hpbGUoZD1mW2UrK10pXCIrXCI9PT1kLmNoYXJBdCgwKT8oZD1kLnNsaWNlKDEpfHxcIipcIiwoYVtkXT1hW2RdfHxbXSkudW5zaGlmdChjKSk6KGFbZF09YVtkXXx8W10pLnB1c2goYyl9fWZ1bmN0aW9uIFViKGEsYixjLGQpe3ZhciBlPXt9LGY9YT09PVBiO2Z1bmN0aW9uIGcoaCl7dmFyIGk7cmV0dXJuIGVbaF09ITAsbi5lYWNoKGFbaF18fFtdLGZ1bmN0aW9uKGEsaCl7dmFyIGo9aChiLGMsZCk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGp8fGZ8fGVbal0/Zj8hKGk9aik6dm9pZCAwOihiLmRhdGFUeXBlcy51bnNoaWZ0KGopLGcoaiksITEpfSksaX1yZXR1cm4gZyhiLmRhdGFUeXBlc1swXSl8fCFlW1wiKlwiXSYmZyhcIipcIil9ZnVuY3Rpb24gVmIoYSxiKXt2YXIgYyxkLGU9bi5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihkIGluIGIpdm9pZCAwIT09YltkXSYmKChlW2RdP2E6Y3x8KGM9e30pKVtkXT1iW2RdKTtyZXR1cm4gYyYmbi5leHRlbmQoITAsYSxjKSxhfWZ1bmN0aW9uIFdiKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY29udGVudHMsaT1hLmRhdGFUeXBlczt3aGlsZShcIipcIj09PWlbMF0paS5zaGlmdCgpLHZvaWQgMD09PWUmJihlPWEubWltZVR5cGV8fGIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKGUpZm9yKGcgaW4gaClpZihoW2ddJiZoW2ddLnRlc3QoZSkpe2kudW5zaGlmdChnKTticmVha31pZihpWzBdaW4gYylmPWlbMF07ZWxzZXtmb3IoZyBpbiBjKXtpZighaVswXXx8YS5jb252ZXJ0ZXJzW2crXCIgXCIraVswXV0pe2Y9ZzticmVha31kfHwoZD1nKX1mPWZ8fGR9cmV0dXJuIGY/KGYhPT1pWzBdJiZpLnVuc2hpZnQoZiksY1tmXSk6dm9pZCAwfWZ1bmN0aW9uIFhiKGEsYixjLGQpe3ZhciBlLGYsZyxoLGksaj17fSxrPWEuZGF0YVR5cGVzLnNsaWNlKCk7aWYoa1sxXSlmb3IoZyBpbiBhLmNvbnZlcnRlcnMpaltnLnRvTG93ZXJDYXNlKCldPWEuY29udmVydGVyc1tnXTtmPWsuc2hpZnQoKTt3aGlsZShmKWlmKGEucmVzcG9uc2VGaWVsZHNbZl0mJihjW2EucmVzcG9uc2VGaWVsZHNbZl1dPWIpLCFpJiZkJiZhLmRhdGFGaWx0ZXImJihiPWEuZGF0YUZpbHRlcihiLGEuZGF0YVR5cGUpKSxpPWYsZj1rLnNoaWZ0KCkpaWYoXCIqXCI9PT1mKWY9aTtlbHNlIGlmKFwiKlwiIT09aSYmaSE9PWYpe2lmKGc9altpK1wiIFwiK2ZdfHxqW1wiKiBcIitmXSwhZylmb3IoZSBpbiBqKWlmKGg9ZS5zcGxpdChcIiBcIiksaFsxXT09PWYmJihnPWpbaStcIiBcIitoWzBdXXx8altcIiogXCIraFswXV0pKXtnPT09ITA/Zz1qW2VdOmpbZV0hPT0hMCYmKGY9aFswXSxrLnVuc2hpZnQoaFsxXSkpO2JyZWFrfWlmKGchPT0hMClpZihnJiZhW1widGhyb3dzXCJdKWI9ZyhiKTtlbHNlIHRyeXtiPWcoYil9Y2F0Y2gobCl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpnP2w6XCJObyBjb252ZXJzaW9uIGZyb20gXCIraStcIiB0byBcIitmfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6Yn19bi5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOlJiLHR5cGU6XCJHRVRcIixpc0xvY2FsOktiLnRlc3QoU2JbMV0pLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOlFiLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpuLnBhcnNlSlNPTixcInRleHQgeG1sXCI6bi5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/VmIoVmIoYSxuLmFqYXhTZXR0aW5ncyksYik6VmIobi5hamF4U2V0dGluZ3MsYSl9LGFqYXhQcmVmaWx0ZXI6VGIoT2IpLGFqYXhUcmFuc3BvcnQ6VGIoUGIpLGFqYXg6ZnVuY3Rpb24oYixjKXtcIm9iamVjdFwiPT10eXBlb2YgYiYmKGM9YixiPXZvaWQgMCksYz1jfHx7fTt2YXIgZCxlLGYsZyxoLGksaixrLGw9bi5hamF4U2V0dXAoe30sYyksbT1sLmNvbnRleHR8fGwsbz1sLmNvbnRleHQmJihtLm5vZGVUeXBlfHxtLmpxdWVyeSk/bihtKTpuLmV2ZW50LHA9bi5EZWZlcnJlZCgpLHE9bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxyPWwuc3RhdHVzQ29kZXx8e30scz17fSx0PXt9LHU9MCx2PVwiY2FuY2VsZWRcIix3PXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoMj09PXUpe2lmKCFrKXtrPXt9O3doaWxlKGI9SmIuZXhlYyhnKSlrW2JbMV0udG9Mb3dlckNhc2UoKV09YlsyXX1iPWtbYS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09Yj9udWxsOmJ9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiAyPT09dT9nOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHV8fChhPXRbY109dFtjXXx8YSxzW2FdPWIpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHV8fChsLm1pbWVUeXBlPWEpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSlpZigyPnUpZm9yKGIgaW4gYSlyW2JdPVtyW2JdLGFbYl1dO2Vsc2Ugdy5hbHdheXMoYVt3LnN0YXR1c10pO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihhKXt2YXIgYj1hfHx2O3JldHVybiBqJiZqLmFib3J0KGIpLHkoMCxiKSx0aGlzfX07aWYocC5wcm9taXNlKHcpLmNvbXBsZXRlPXEuYWRkLHcuc3VjY2Vzcz13LmRvbmUsdy5lcnJvcj13LmZhaWwsbC51cmw9KChifHxsLnVybHx8UmIpK1wiXCIpLnJlcGxhY2UoSGIsXCJcIikucmVwbGFjZShNYixTYlsxXStcIi8vXCIpLGwudHlwZT1jLm1ldGhvZHx8Yy50eXBlfHxsLm1ldGhvZHx8bC50eXBlLGwuZGF0YVR5cGVzPW4udHJpbShsLmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChHKXx8W1wiXCJdLG51bGw9PWwuY3Jvc3NEb21haW4mJihkPU5iLmV4ZWMobC51cmwudG9Mb3dlckNhc2UoKSksbC5jcm9zc0RvbWFpbj0hKCFkfHxkWzFdPT09U2JbMV0mJmRbMl09PT1TYlsyXSYmKGRbM118fChcImh0dHA6XCI9PT1kWzFdP1wiODBcIjpcIjQ0M1wiKSk9PT0oU2JbM118fChcImh0dHA6XCI9PT1TYlsxXT9cIjgwXCI6XCI0NDNcIikpKSksbC5kYXRhJiZsLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2YgbC5kYXRhJiYobC5kYXRhPW4ucGFyYW0obC5kYXRhLGwudHJhZGl0aW9uYWwpKSxVYihPYixsLGMsdyksMj09PXUpcmV0dXJuIHc7aT1uLmV2ZW50JiZsLmdsb2JhbCxpJiYwPT09bi5hY3RpdmUrKyYmbi5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLGwudHlwZT1sLnR5cGUudG9VcHBlckNhc2UoKSxsLmhhc0NvbnRlbnQ9IUxiLnRlc3QobC50eXBlKSxmPWwudXJsLGwuaGFzQ29udGVudHx8KGwuZGF0YSYmKGY9bC51cmwrPShGYi50ZXN0KGYpP1wiJlwiOlwiP1wiKStsLmRhdGEsZGVsZXRlIGwuZGF0YSksbC5jYWNoZT09PSExJiYobC51cmw9SWIudGVzdChmKT9mLnJlcGxhY2UoSWIsXCIkMV89XCIrRWIrKyk6ZisoRmIudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK0ViKyspKSxsLmlmTW9kaWZpZWQmJihuLmxhc3RNb2RpZmllZFtmXSYmdy5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixuLmxhc3RNb2RpZmllZFtmXSksbi5ldGFnW2ZdJiZ3LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsbi5ldGFnW2ZdKSksKGwuZGF0YSYmbC5oYXNDb250ZW50JiZsLmNvbnRlbnRUeXBlIT09ITF8fGMuY29udGVudFR5cGUpJiZ3LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixsLmNvbnRlbnRUeXBlKSx3LnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixsLmRhdGFUeXBlc1swXSYmbC5hY2NlcHRzW2wuZGF0YVR5cGVzWzBdXT9sLmFjY2VwdHNbbC5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PWwuZGF0YVR5cGVzWzBdP1wiLCBcIitRYitcIjsgcT0wLjAxXCI6XCJcIik6bC5hY2NlcHRzW1wiKlwiXSk7Zm9yKGUgaW4gbC5oZWFkZXJzKXcuc2V0UmVxdWVzdEhlYWRlcihlLGwuaGVhZGVyc1tlXSk7aWYobC5iZWZvcmVTZW5kJiYobC5iZWZvcmVTZW5kLmNhbGwobSx3LGwpPT09ITF8fDI9PT11KSlyZXR1cm4gdy5hYm9ydCgpO3Y9XCJhYm9ydFwiO2ZvcihlIGlue3N1Y2Nlc3M6MSxlcnJvcjoxLGNvbXBsZXRlOjF9KXdbZV0obFtlXSk7aWYoaj1VYihQYixsLGMsdykpe2lmKHcucmVhZHlTdGF0ZT0xLGkmJm8udHJpZ2dlcihcImFqYXhTZW5kXCIsW3csbF0pLDI9PT11KXJldHVybiB3O2wuYXN5bmMmJmwudGltZW91dD4wJiYoaD1hLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt3LmFib3J0KFwidGltZW91dFwiKX0sbC50aW1lb3V0KSk7dHJ5e3U9MSxqLnNlbmQocyx5KX1jYXRjaCh4KXtpZighKDI+dSkpdGhyb3cgeDt5KC0xLHgpfX1lbHNlIHkoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24geShiLGMsZCxlKXt2YXIgayxzLHQsdix4LHk9YzsyIT09dSYmKHU9MixoJiZhLmNsZWFyVGltZW91dChoKSxqPXZvaWQgMCxnPWV8fFwiXCIsdy5yZWFkeVN0YXRlPWI+MD80OjAsaz1iPj0yMDAmJjMwMD5ifHwzMDQ9PT1iLGQmJih2PVdiKGwsdyxkKSksdj1YYihsLHYsdyxrKSxrPyhsLmlmTW9kaWZpZWQmJih4PXcuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHgmJihuLmxhc3RNb2RpZmllZFtmXT14KSx4PXcuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHgmJihuLmV0YWdbZl09eCkpLDIwND09PWJ8fFwiSEVBRFwiPT09bC50eXBlP3k9XCJub2NvbnRlbnRcIjozMDQ9PT1iP3k9XCJub3Rtb2RpZmllZFwiOih5PXYuc3RhdGUscz12LmRhdGEsdD12LmVycm9yLGs9IXQpKToodD15LCFiJiZ5fHwoeT1cImVycm9yXCIsMD5iJiYoYj0wKSkpLHcuc3RhdHVzPWIsdy5zdGF0dXNUZXh0PShjfHx5KStcIlwiLGs/cC5yZXNvbHZlV2l0aChtLFtzLHksd10pOnAucmVqZWN0V2l0aChtLFt3LHksdF0pLHcuc3RhdHVzQ29kZShyKSxyPXZvaWQgMCxpJiZvLnRyaWdnZXIoaz9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbdyxsLGs/czp0XSkscS5maXJlV2l0aChtLFt3LHldKSxpJiYoby50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3csbF0pLC0tbi5hY3RpdmV8fG4uZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHd9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLG4uZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtuW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBuLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxuLmFqYXgobi5leHRlbmQoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9LG4uaXNQbGFpbk9iamVjdChhKSYmYSkpfX0pLG4uX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sbi5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS53cmFwQWxsKGEuY2FsbCh0aGlzLGIpKX0pO2lmKHRoaXNbMF0pe3ZhciBiPW4oYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKTt0aGlzWzBdLnBhcmVudE5vZGUmJmIuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLGIubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpczt3aGlsZShhLmZpcnN0Q2hpbGQmJjE9PT1hLmZpcnN0Q2hpbGQubm9kZVR5cGUpYT1hLmZpcnN0Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcyl9cmV0dXJuIHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihhKXtyZXR1cm4gbi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLndyYXBJbm5lcihhLmNhbGwodGhpcyxiKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1uKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPW4uaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtuLm5vZGVOYW1lKHRoaXMsXCJib2R5XCIpfHxuKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KS5lbmQoKX19KTtmdW5jdGlvbiBZYihhKXtyZXR1cm4gYS5zdHlsZSYmYS5zdHlsZS5kaXNwbGF5fHxuLmNzcyhhLFwiZGlzcGxheVwiKX1mdW5jdGlvbiBaYihhKXtpZighbi5jb250YWlucyhhLm93bmVyRG9jdW1lbnR8fGQsYSkpcmV0dXJuITA7d2hpbGUoYSYmMT09PWEubm9kZVR5cGUpe2lmKFwibm9uZVwiPT09WWIoYSl8fFwiaGlkZGVuXCI9PT1hLnR5cGUpcmV0dXJuITA7YT1hLnBhcmVudE5vZGV9cmV0dXJuITF9bi5leHByLmZpbHRlcnMuaGlkZGVuPWZ1bmN0aW9uKGEpe3JldHVybiBsLnJlbGlhYmxlSGlkZGVuT2Zmc2V0cygpP2Eub2Zmc2V0V2lkdGg8PTAmJmEub2Zmc2V0SGVpZ2h0PD0wJiYhYS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aDpaYihhKX0sbi5leHByLmZpbHRlcnMudmlzaWJsZT1mdW5jdGlvbihhKXtyZXR1cm4hbi5leHByLmZpbHRlcnMuaGlkZGVuKGEpfTt2YXIgJGI9LyUyMC9nLF9iPS9cXFtcXF0kLyxhYz0vXFxyP1xcbi9nLGJjPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxjYz0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gZGMoYSxiLGMsZCl7dmFyIGU7aWYobi5pc0FycmF5KGIpKW4uZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8X2IudGVzdChhKT9kKGEsZSk6ZGMoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPWU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1uLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYilkYyhhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfW4ucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXtiPW4uaXNGdW5jdGlvbihiKT9iKCk6bnVsbD09Yj9cIlwiOmIsZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChiKX07aWYodm9pZCAwPT09YiYmKGI9bi5hamF4U2V0dGluZ3MmJm4uYWpheFNldHRpbmdzLnRyYWRpdGlvbmFsKSxuLmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhbi5pc1BsYWluT2JqZWN0KGEpKW4uZWFjaChhLGZ1bmN0aW9uKCl7ZSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihjIGluIGEpZGMoYyxhW2NdLGIsZSk7cmV0dXJuIGQuam9pbihcIiZcIikucmVwbGFjZSgkYixcIitcIil9LG4uZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPW4ucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGE/bi5tYWtlQXJyYXkoYSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBhPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhbih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmY2MudGVzdCh0aGlzLm5vZGVOYW1lKSYmIWJjLnRlc3QoYSkmJih0aGlzLmNoZWNrZWR8fCFaLnRlc3QoYSkpfSkubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9bih0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09Yz9udWxsOm4uaXNBcnJheShjKT9uLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UoYWMsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZShhYyxcIlxcclxcblwiKX19KS5nZXQoKX19KSxuLmFqYXhTZXR0aW5ncy54aHI9dm9pZCAwIT09YS5BY3RpdmVYT2JqZWN0P2Z1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNMb2NhbD9pYygpOmQuZG9jdW1lbnRNb2RlPjg/aGMoKTovXihnZXR8cG9zdHxoZWFkfHB1dHxkZWxldGV8b3B0aW9ucykkL2kudGVzdCh0aGlzLnR5cGUpJiZoYygpfHxpYygpfTpoYzt2YXIgZWM9MCxmYz17fSxnYz1uLmFqYXhTZXR0aW5ncy54aHIoKTthLmF0dGFjaEV2ZW50JiZhLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixmdW5jdGlvbigpe2Zvcih2YXIgYSBpbiBmYylmY1thXSh2b2lkIDAsITApfSksbC5jb3JzPSEhZ2MmJlwid2l0aENyZWRlbnRpYWxzXCJpbiBnYyxnYz1sLmFqYXg9ISFnYyxnYyYmbi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGIpe2lmKCFiLmNyb3NzRG9tYWlufHxsLmNvcnMpe3ZhciBjO3JldHVybntzZW5kOmZ1bmN0aW9uKGQsZSl7dmFyIGYsZz1iLnhocigpLGg9KytlYztpZihnLm9wZW4oYi50eXBlLGIudXJsLGIuYXN5bmMsYi51c2VybmFtZSxiLnBhc3N3b3JkKSxiLnhockZpZWxkcylmb3IoZiBpbiBiLnhockZpZWxkcylnW2ZdPWIueGhyRmllbGRzW2ZdO2IubWltZVR5cGUmJmcub3ZlcnJpZGVNaW1lVHlwZSYmZy5vdmVycmlkZU1pbWVUeXBlKGIubWltZVR5cGUpLGIuY3Jvc3NEb21haW58fGRbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoZFtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZiBpbiBkKXZvaWQgMCE9PWRbZl0mJmcuc2V0UmVxdWVzdEhlYWRlcihmLGRbZl0rXCJcIik7Zy5zZW5kKGIuaGFzQ29udGVudCYmYi5kYXRhfHxudWxsKSxjPWZ1bmN0aW9uKGEsZCl7dmFyIGYsaSxqO2lmKGMmJihkfHw0PT09Zy5yZWFkeVN0YXRlKSlpZihkZWxldGUgZmNbaF0sYz12b2lkIDAsZy5vbnJlYWR5c3RhdGVjaGFuZ2U9bi5ub29wLGQpNCE9PWcucmVhZHlTdGF0ZSYmZy5hYm9ydCgpO2Vsc2V7aj17fSxmPWcuc3RhdHVzLFwic3RyaW5nXCI9PXR5cGVvZiBnLnJlc3BvbnNlVGV4dCYmKGoudGV4dD1nLnJlc3BvbnNlVGV4dCk7dHJ5e2k9Zy5zdGF0dXNUZXh0fWNhdGNoKGspe2k9XCJcIn1mfHwhYi5pc0xvY2FsfHxiLmNyb3NzRG9tYWluPzEyMjM9PT1mJiYoZj0yMDQpOmY9ai50ZXh0PzIwMDo0MDR9aiYmZShmLGksaixnLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKX0sYi5hc3luYz80PT09Zy5yZWFkeVN0YXRlP2Euc2V0VGltZW91dChjKTpnLm9ucmVhZHlzdGF0ZWNoYW5nZT1mY1toXT1jOmMoKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKHZvaWQgMCwhMCl9fX19KTtmdW5jdGlvbiBoYygpe3RyeXtyZXR1cm4gbmV3IGEuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goYil7fX1mdW5jdGlvbiBpYygpe3RyeXtyZXR1cm4gbmV3IGEuQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpfWNhdGNoKGIpe319bi5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ2xvYmFsRXZhbChhKSxhfX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiLGEuZ2xvYmFsPSExKX0pLG4uYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM9ZC5oZWFkfHxuKFwiaGVhZFwiKVswXXx8ZC5kb2N1bWVudEVsZW1lbnQ7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXtiPWQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxiLmFzeW5jPSEwLGEuc2NyaXB0Q2hhcnNldCYmKGIuY2hhcnNldD1hLnNjcmlwdENoYXJzZXQpLGIuc3JjPWEudXJsLGIub25sb2FkPWIub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKGEsYyl7KGN8fCFiLnJlYWR5U3RhdGV8fC9sb2FkZWR8Y29tcGxldGUvLnRlc3QoYi5yZWFkeVN0YXRlKSkmJihiLm9ubG9hZD1iLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLGIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbCxjfHxmKDIwMCxcInN1Y2Nlc3NcIikpfSxjLmluc2VydEJlZm9yZShiLGMuZmlyc3RDaGlsZCl9LGFib3J0OmZ1bmN0aW9uKCl7YiYmYi5vbmxvYWQodm9pZCAwLCEwKX19fX0pO3ZhciBqYz1bXSxrYz0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO24uYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPWpjLnBvcCgpfHxuLmV4cGFuZG8rXCJfXCIrRWIrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLG4uYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoa2MudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYwPT09KGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJmtjLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiBofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXT8oZT1iLmpzb25wQ2FsbGJhY2s9bi5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2Uoa2MsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0oRmIudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8bi5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09Zj9uKGEpLnJlbW92ZVByb3AoZSk6YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLGpjLnB1c2goZSkpLGcmJm4uaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIik6dm9pZCAwfSksbi5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSksYj1ifHxkO3ZhciBlPXguZXhlYyhhKSxmPSFjJiZbXTtyZXR1cm4gZT9bYi5jcmVhdGVFbGVtZW50KGVbMV0pXTooZT1qYShbYV0sYixmKSxmJiZmLmxlbmd0aCYmbihmKS5yZW1vdmUoKSxuLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfTt2YXIgbGM9bi5mbi5sb2FkO24uZm4ubG9hZD1mdW5jdGlvbihhLGIsYyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEmJmxjKXJldHVybiBsYy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGQsZSxmLGc9dGhpcyxoPWEuaW5kZXhPZihcIiBcIik7cmV0dXJuIGg+LTEmJihkPW4udHJpbShhLnNsaWNlKGgsYS5sZW5ndGgpKSxhPWEuc2xpY2UoMCxoKSksbi5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmbi5hamF4KHt1cmw6YSx0eXBlOmV8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9uKFwiPGRpdj5cIikuYXBwZW5kKG4ucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuYWx3YXlzKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGZ1bmN0aW9uKCl7Yy5hcHBseSh0aGlzLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pfSksdGhpc30sbi5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksbi5leHByLmZpbHRlcnMuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ3JlcChuLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH07ZnVuY3Rpb24gbWMoYSl7cmV0dXJuIG4uaXNXaW5kb3coYSk/YTo5PT09YS5ub2RlVHlwZT9hLmRlZmF1bHRWaWV3fHxhLnBhcmVudFdpbmRvdzohMX1uLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrPW4uY3NzKGEsXCJwb3NpdGlvblwiKSxsPW4oYSksbT17fTtcInN0YXRpY1wiPT09ayYmKGEuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxoPWwub2Zmc2V0KCksZj1uLmNzcyhhLFwidG9wXCIpLGk9bi5jc3MoYSxcImxlZnRcIiksaj0oXCJhYnNvbHV0ZVwiPT09a3x8XCJmaXhlZFwiPT09aykmJm4uaW5BcnJheShcImF1dG9cIixbZixpXSk+LTEsaj8oZD1sLnBvc2l0aW9uKCksZz1kLnRvcCxlPWQubGVmdCk6KGc9cGFyc2VGbG9hdChmKXx8MCxlPXBhcnNlRmxvYXQoaSl8fDApLG4uaXNGdW5jdGlvbihiKSYmKGI9Yi5jYWxsKGEsYyxuLmV4dGVuZCh7fSxoKSkpLG51bGwhPWIudG9wJiYobS50b3A9Yi50b3AtaC50b3ArZyksbnVsbCE9Yi5sZWZ0JiYobS5sZWZ0PWIubGVmdC1oLmxlZnQrZSksXCJ1c2luZ1wiaW4gYj9iLnVzaW5nLmNhbGwoYSxtKTpsLmNzcyhtKX19LG4uZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24oYSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09YT90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihiKXtuLm9mZnNldC5zZXRPZmZzZXQodGhpcyxhLGIpfSk7dmFyIGIsYyxkPXt0b3A6MCxsZWZ0OjB9LGU9dGhpc1swXSxmPWUmJmUub3duZXJEb2N1bWVudDtpZihmKXJldHVybiBiPWYuZG9jdW1lbnRFbGVtZW50LG4uY29udGFpbnMoYixlKT8oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0JiYoZD1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxjPW1jKGYpLHt0b3A6ZC50b3ArKGMucGFnZVlPZmZzZXR8fGIuc2Nyb2xsVG9wKS0oYi5jbGllbnRUb3B8fDApLGxlZnQ6ZC5sZWZ0KyhjLnBhZ2VYT2Zmc2V0fHxiLnNjcm9sbExlZnQpLShiLmNsaWVudExlZnR8fDApfSk6ZH0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9e3RvcDowLGxlZnQ6MH0sZD10aGlzWzBdO3JldHVyblwiZml4ZWRcIj09PW4uY3NzKGQsXCJwb3NpdGlvblwiKT9iPWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksbi5ub2RlTmFtZShhWzBdLFwiaHRtbFwiKXx8KGM9YS5vZmZzZXQoKSksYy50b3ArPW4uY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxjLmxlZnQrPW4uY3NzKGFbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpLHt0b3A6Yi50b3AtYy50b3Atbi5jc3MoZCxcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OmIubGVmdC1jLmxlZnQtbi5jc3MoZCxcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoYSYmIW4ubm9kZU5hbWUoYSxcImh0bWxcIikmJlwic3RhdGljXCI9PT1uLmNzcyhhLFwicG9zaXRpb25cIikpYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8UWF9KX19KSxuLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9L1kvLnRlc3QoYik7bi5mblthXT1mdW5jdGlvbihkKXtyZXR1cm4gWSh0aGlzLGZ1bmN0aW9uKGEsZCxlKXt2YXIgZj1tYyhhKTtyZXR1cm4gdm9pZCAwPT09ZT9mP2IgaW4gZj9mW2JdOmYuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W2RdOmFbZF06dm9pZChmP2Yuc2Nyb2xsVG8oYz9uKGYpLnNjcm9sbExlZnQoKTplLGM/ZTpuKGYpLnNjcm9sbFRvcCgpKTphW2RdPWUpfSxhLGQsYXJndW1lbnRzLmxlbmd0aCxudWxsKX19KSxuLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1tiXT1VYShsLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oYSxjKXtyZXR1cm4gYz8oYz1TYShhLGIpLE9hLnRlc3QoYyk/bihhKS5wb3NpdGlvbigpW2JdK1wicHhcIjpjKTp2b2lkIDB9KX0pLG4uZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLGIpe24uZWFjaCh7XG5wYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe24uZm5bZF09ZnVuY3Rpb24oZCxlKXt2YXIgZj1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBkKSxnPWN8fChkPT09ITB8fGU9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBZKHRoaXMsZnVuY3Rpb24oYixjLGQpe3ZhciBlO3JldHVybiBuLmlzV2luZG93KGIpP2IuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWIubm9kZVR5cGU/KGU9Yi5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoYi5ib2R5W1wic2Nyb2xsXCIrYV0sZVtcInNjcm9sbFwiK2FdLGIuYm9keVtcIm9mZnNldFwiK2FdLGVbXCJvZmZzZXRcIithXSxlW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1kP24uY3NzKGIsYyxnKTpuLnN0eWxlKGIsYyxkLGcpfSxiLGY/ZDp2b2lkIDAsZixudWxsKX19KX0pLG4uZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSksbi5mbi5zaXplPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGVuZ3RofSxuLmZuLmFuZFNlbGY9bi5mbi5hZGRCYWNrLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gbn0pO3ZhciBuYz1hLmpRdWVyeSxvYz1hLiQ7cmV0dXJuIG4ubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09biYmKGEuJD1vYyksYiYmYS5qUXVlcnk9PT1uJiYoYS5qUXVlcnk9bmMpLG59LGJ8fChhLmpRdWVyeT1hLiQ9biksbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvanF1ZXJ5L2pxdWVyeS0xLjEyLjQubWluLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwidmFyIGJnID0gcmVxdWlyZSgnYmcnKTtcblxuaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnO1xuY29uc29sZS5sb2coYmcpO1xuLy92YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5jb25zb2xlLmxvZygkKCcjYmcnKSk7XG5cbmNvbnNvbGUubG9nKCdob21lIFBhZ2VzJylcblxuY29uc29sZS5sb2coJzIyMicpO1xuXG5jb25zb2xlLmxvZyhsYXllcik7XG5cbmZ1bmN0aW9uIGdldEJyb3dzZXJJbmZvKCkge1xuICAgIHZhciBhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcblxuICAgIHZhciByZWdTdHJfaWUgPSAvbXNpZSBbXFxkLl0rOy9naTtcbiAgICB2YXIgcmVnU3RyX2ZmID0gL2ZpcmVmb3hcXC9bXFxkLl0rL2dpXG4gICAgdmFyIHJlZ1N0cl9jaHJvbWUgPSAvY2hyb21lXFwvW1xcZC5dKy9naTtcbiAgICB2YXIgcmVnU3RyX3NhZiA9IC9zYWZhcmlcXC9bXFxkLl0rL2dpO1xuICAgIC8vSUVcbiAgICBpZiAoYWdlbnQuaW5kZXhPZihcIm1zaWVcIikgPiAwKSB7XG4gICAgICAgIHJldHVybiBhZ2VudC5tYXRjaChyZWdTdHJfaWUpO1xuICAgIH1cblxuICAgIC8vZmlyZWZveFxuICAgIGlmIChhZ2VudC5pbmRleE9mKFwiZmlyZWZveFwiKSA+IDApIHtcbiAgICAgICAgcmV0dXJuIGFnZW50Lm1hdGNoKHJlZ1N0cl9mZik7XG4gICAgfVxuXG4gICAgLy9DaHJvbWVcbiAgICBpZiAoYWdlbnQuaW5kZXhPZihcImNocm9tZVwiKSA+IDApIHtcbiAgICAgICAgcmV0dXJuIGFnZW50Lm1hdGNoKHJlZ1N0cl9jaHJvbWUpO1xuICAgIH1cblxuICAgIC8vU2FmYXJpXG4gICAgaWYgKGFnZW50LmluZGV4T2YoXCJzYWZhcmlcIikgPiAwICYmIGFnZW50LmluZGV4T2YoXCJjaHJvbWVcIikgPCAwKSB7XG4gICAgICAgIHJldHVybiBhZ2VudC5tYXRjaChyZWdTdHJfc2FmKTtcbiAgICB9XG5cbn1cblxudmFyIGJyb3dzZXIgPSBnZXRCcm93c2VySW5mbygpO1xuLy9hbGVydChicm93c2VyKTsgXG52YXIgdmVyaW5mbyA9IChicm93c2VyICsgXCJcIikucmVwbGFjZSgvW14wLTkuXS9pZywgXCJcIik7XG5cbmRvY3VtZW50LndyaXRlKHZlcmluZm8pO1xuXG5sZXQgYWFhID0gMlxuXG5jb25zb2xlLmxvZyhhYWEpO1xuXG52YXIgZm4gPSAoeCkgPT4geCAqIHhcblxuY29uc29sZS5sb2coZm4oMykpO1xuXG5jb25zb2xlLmxvZyhmbigxKSk7XG5jb25zb2xlLmxvZyhmbigyKSk7XG5jb25zb2xlLmxvZyhmbigzKSk7XG5cbmNvbnNvbGUubG9nKGZuKDQpKTtcbmNvbnNvbGUubG9nKGZuKDUpKTtcbmNvbnNvbGUubG9nKGZuKDYpKTtcblxubGF5ZXIubXNnKCcxMTExJyk7XG5cbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgbGF5ZXIuY29uZmlybSgn6L+Z5pivY29tZmlybScpO1xuXG59LCAyMDAwKVxuXG4vL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZycpLmF0dHJpYnV0ZXMoJ3NyYycsIGJnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXguanMiLCIvKiFcblxuIEBOYW1l77yabGF5ZXIgdjIuMyDlvLnlsYLnu4Tku7ZcbiBAQXV0aG9y77ya6LSk5b+DXG4gQFNpdGXvvJpodHRwOi8vbGF5ZXIubGF5dWkuY29tXG4gQExpY2Vuc2XvvJpMR1BMXG4gICAgXG4gKi9cblxuOyFmdW5jdGlvbih3aW5kb3csIHVuZGVmaW5lZCl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyICQsIHdpbiwgcmVhZHkgPSB7XG4gIGdldFBhdGg6IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGpzID0gZG9jdW1lbnQuc2NyaXB0cywgc2NyaXB0ID0ganNbanMubGVuZ3RoIC0gMV0sIGpzUGF0aCA9IHNjcmlwdC5zcmM7XG4gICAgaWYoc2NyaXB0LmdldEF0dHJpYnV0ZSgnbWVyZ2UnKSkgcmV0dXJuO1xuICAgIHJldHVybiBqc1BhdGguc3Vic3RyaW5nKDAsIGpzUGF0aC5sYXN0SW5kZXhPZihcIi9cIikgKyAxKTtcbiAgfSgpLFxuICBcbiAgLy/lsY/olL1FbnRlcuinpuWPkeW8ueWxglxuICBlbnRlcjogZnVuY3Rpb24oZSl7XG4gICAgaWYoZS5rZXlDb2RlID09PSAxMykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuICBjb25maWc6IHt9LCBlbmQ6IHt9LFxuICBidG46IFsnJiN4Nzg2RTsmI3g1QjlBOycsJyYjeDUzRDY7JiN4NkQ4ODsnXSxcbiAgXG4gIC8v5LqU56eN5Y6f5aeL5bGC5qih5byPXG4gIHR5cGU6IFsnZGlhbG9nJywgJ3BhZ2UnLCAnaWZyYW1lJywgJ2xvYWRpbmcnLCAndGlwcyddXG59O1xuLy/pu5jorqTlhoXnva7mlrnms5XjgIJcbnZhciBsYXllciA9IHtcbiAgdjogJzIuMycsXG4gIGllNjogISF3aW5kb3cuQWN0aXZlWE9iamVjdCYmIXdpbmRvdy5YTUxIdHRwUmVxdWVzdCxcbiAgaW5kZXg6IDAsXG4gIHBhdGg6IHJlYWR5LmdldFBhdGgsXG4gIGNvbmZpZzogZnVuY3Rpb24ob3B0aW9ucywgZm4pe1xuICAgIHZhciBpdGVtID0gMDtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBsYXllci5jYWNoZSA9IHJlYWR5LmNvbmZpZyA9ICQuZXh0ZW5kKHJlYWR5LmNvbmZpZywgb3B0aW9ucyk7XG4gICAgbGF5ZXIucGF0aCA9IHJlYWR5LmNvbmZpZy5wYXRoIHx8IGxheWVyLnBhdGg7XG4gICAgdHlwZW9mIG9wdGlvbnMuZXh0ZW5kID09PSAnc3RyaW5nJyAmJiAob3B0aW9ucy5leHRlbmQgPSBbb3B0aW9ucy5leHRlbmRdKTtcbiAgICBsYXllci51c2UoJ3NraW4vbGF5ZXIuY3NzJywgKG9wdGlvbnMuZXh0ZW5kICYmIG9wdGlvbnMuZXh0ZW5kLmxlbmd0aCA+IDApID8gKGZ1bmN0aW9uIGxvb3AoKXtcbiAgICAgIHZhciBleHQgPSBvcHRpb25zLmV4dGVuZDtcbiAgICAgIGxheWVyLnVzZShleHRbZXh0W2l0ZW1dID8gaXRlbSA6IGl0ZW0tMV0sIGl0ZW0gPCBleHQubGVuZ3RoID8gZnVuY3Rpb24oKXtcbiAgICAgICAgKytpdGVtOyBcbiAgICAgICAgcmV0dXJuIGxvb3A7XG4gICAgICB9KCkgOiBmbik7XG4gICAgfSgpKSA6IGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgXG4gIC8v6L295YWl6YWN5Lu2XG4gIHVzZTogZnVuY3Rpb24obW9kdWxlLCBmbiwgcmVhZHlNZXRob2Qpe1xuICAgIHZhciBpID0gMCwgaGVhZCA9ICQoJ2hlYWQnKVswXTtcbiAgICB2YXIgbW9kdWxlID0gbW9kdWxlLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgdmFyIGlzY3NzID0gL1xcLmNzcyQvLnRlc3QobW9kdWxlKTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXNjc3MgPyAnbGluaycgOiAnc2NyaXB0Jyk7XG4gICAgdmFyIGlkID0gJ2xheXVpX2xheWVyXycgKyBtb2R1bGUucmVwbGFjZSgvXFwufFxcLy9nLCAnJyk7XG4gICAgaWYoIWxheWVyLnBhdGgpIHJldHVybjtcbiAgICBpZihpc2Nzcyl7XG4gICAgICBub2RlLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICB9XG4gICAgbm9kZVtpc2NzcyA/ICdocmVmJyA6ICdzcmMnXSA9IC9eaHR0cDpcXC9cXC8vLnRlc3QobW9kdWxlKSA/IG1vZHVsZSA6IGxheWVyLnBhdGggKyBtb2R1bGU7XG4gICAgbm9kZS5pZCA9IGlkO1xuICAgIGlmKCEkKCcjJysgaWQpWzBdKXtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuICAgIC8v6L2u6K+i5Yqg6L295bCx57uqXG4gICAgOyhmdW5jdGlvbiBwb2xsKCkge1xuICAgICAgOyhpc2NzcyA/IHBhcnNlSW50KCQoJyMnK2lkKS5jc3MoJ3dpZHRoJykpID09PSAxOTg5IDogbGF5ZXJbcmVhZHlNZXRob2R8fGlkXSkgPyBmdW5jdGlvbigpe1xuICAgICAgICBmbiAmJiBmbigpO1xuICAgICAgICB0cnkgeyBpc2NzcyB8fCBoZWFkLnJlbW92ZUNoaWxkKG5vZGUpOyB9IGNhdGNoKGUpe307XG4gICAgICB9KCkgOiBzZXRUaW1lb3V0KHBvbGwsIDEwMCk7XG4gICAgfSgpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgXG4gIHJlYWR5OiBmdW5jdGlvbihwYXRoLCBmbil7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgcGF0aCA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZih0eXBlKSBmbiA9IHBhdGg7XG4gICAgbGF5ZXIuY29uZmlnKCQuZXh0ZW5kKHJlYWR5LmNvbmZpZywgZnVuY3Rpb24oKXtcbiAgICAgICByZXR1cm4gdHlwZSA/IHt9IDoge3BhdGg6IHBhdGh9O1xuICAgIH0oKSksIGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgXG4gIC8v5ZCE56eN5b+r5o235byV55SoXG4gIGFsZXJ0OiBmdW5jdGlvbihjb250ZW50LCBvcHRpb25zLCB5ZXMpe1xuICAgIHZhciB0eXBlID0gdHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbic7XG4gICAgaWYodHlwZSkgeWVzID0gb3B0aW9ucztcbiAgICByZXR1cm4gbGF5ZXIub3BlbigkLmV4dGVuZCh7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgeWVzOiB5ZXNcbiAgICB9LCB0eXBlID8ge30gOiBvcHRpb25zKSk7XG4gIH0sIFxuICBcbiAgY29uZmlybTogZnVuY3Rpb24oY29udGVudCwgb3B0aW9ucywgeWVzLCBjYW5jZWwpeyBcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nO1xuICAgIGlmKHR5cGUpe1xuICAgICAgY2FuY2VsID0geWVzO1xuICAgICAgeWVzID0gb3B0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyLm9wZW4oJC5leHRlbmQoe1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIGJ0bjogcmVhZHkuYnRuLFxuICAgICAgeWVzOiB5ZXMsXG4gICAgICBidG4yOiBjYW5jZWxcbiAgICB9LCB0eXBlID8ge30gOiBvcHRpb25zKSk7XG4gIH0sXG4gIFxuICBtc2c6IGZ1bmN0aW9uKGNvbnRlbnQsIG9wdGlvbnMsIGVuZCl7IC8v5pyA5bi455So5o+Q56S65bGCXG4gICAgdmFyIHR5cGUgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJywgcnNraW4gPSByZWFkeS5jb25maWcuc2tpbjtcbiAgICB2YXIgc2tpbiA9IChyc2tpbiA/IHJza2luICsgJyAnICsgcnNraW4gKyAnLW1zZycgOiAnJyl8fCdsYXl1aS1sYXllci1tc2cnO1xuICAgIHZhciBzaGlmdCA9IGRvbXMuYW5pbS5sZW5ndGggLSAxO1xuICAgIGlmKHR5cGUpIGVuZCA9IG9wdGlvbnM7XG4gICAgcmV0dXJuIGxheWVyLm9wZW4oJC5leHRlbmQoe1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIHRpbWU6IDMwMDAsXG4gICAgICBzaGFkZTogZmFsc2UsXG4gICAgICBza2luOiBza2luLFxuICAgICAgdGl0bGU6IGZhbHNlLFxuICAgICAgY2xvc2VCdG46IGZhbHNlLFxuICAgICAgYnRuOiBmYWxzZSxcbiAgICAgIGVuZDogZW5kXG4gICAgfSwgKHR5cGUgJiYgIXJlYWR5LmNvbmZpZy5za2luKSA/IHtcbiAgICAgIHNraW46IHNraW4gKyAnIGxheXVpLWxheWVyLWh1aScsXG4gICAgICBzaGlmdDogc2hpZnRcbiAgICB9IDogZnVuY3Rpb24oKXtcbiAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICBpZihvcHRpb25zLmljb24gPT09IC0xIHx8IG9wdGlvbnMuaWNvbiA9PT0gdW5kZWZpbmVkICYmICFyZWFkeS5jb25maWcuc2tpbil7XG4gICAgICAgICBvcHRpb25zLnNraW4gPSBza2luICsgJyAnICsgKG9wdGlvbnMuc2tpbnx8J2xheXVpLWxheWVyLWh1aScpO1xuICAgICAgIH1cbiAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9KCkpKTsgIFxuICB9LFxuICBcbiAgbG9hZDogZnVuY3Rpb24oaWNvbiwgb3B0aW9ucyl7XG4gICAgcmV0dXJuIGxheWVyLm9wZW4oJC5leHRlbmQoe1xuICAgICAgdHlwZTogMyxcbiAgICAgIGljb246IGljb24gfHwgMCxcbiAgICAgIHNoYWRlOiAwLjAxXG4gICAgfSwgb3B0aW9ucykpO1xuICB9LCBcbiAgXG4gIHRpcHM6IGZ1bmN0aW9uKGNvbnRlbnQsIGZvbGxvdywgb3B0aW9ucyl7XG4gICAgcmV0dXJuIGxheWVyLm9wZW4oJC5leHRlbmQoe1xuICAgICAgdHlwZTogNCxcbiAgICAgIGNvbnRlbnQ6IFtjb250ZW50LCBmb2xsb3ddLFxuICAgICAgY2xvc2VCdG46IGZhbHNlLFxuICAgICAgdGltZTogMzAwMCxcbiAgICAgIHNoYWRlOiBmYWxzZSxcbiAgICAgIG1heFdpZHRoOiAyMTBcbiAgICB9LCBvcHRpb25zKSk7XG4gIH1cbn07XG5cbnZhciBDbGFzcyA9IGZ1bmN0aW9uKHNldGluZ3MpeyAgXG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdGhhdC5pbmRleCA9ICsrbGF5ZXIuaW5kZXg7XG4gIHRoYXQuY29uZmlnID0gJC5leHRlbmQoe30sIHRoYXQuY29uZmlnLCByZWFkeS5jb25maWcsIHNldGluZ3MpO1xuICB0aGF0LmNyZWF0KCk7XG59O1xuXG5DbGFzcy5wdCA9IENsYXNzLnByb3RvdHlwZTtcblxuLy/nvJPlrZjluLjnlKjlrZfnrKZcbnZhciBkb21zID0gWydsYXl1aS1sYXllcicsICcubGF5dWktbGF5ZXItdGl0bGUnLCAnLmxheXVpLWxheWVyLW1haW4nLCAnLmxheXVpLWxheWVyLWRpYWxvZycsICdsYXl1aS1sYXllci1pZnJhbWUnLCAnbGF5dWktbGF5ZXItY29udGVudCcsICdsYXl1aS1sYXllci1idG4nLCAnbGF5dWktbGF5ZXItY2xvc2UnXTtcbmRvbXMuYW5pbSA9IFsnbGF5ZXItYW5pbScsICdsYXllci1hbmltLTAxJywgJ2xheWVyLWFuaW0tMDInLCAnbGF5ZXItYW5pbS0wMycsICdsYXllci1hbmltLTA0JywgJ2xheWVyLWFuaW0tMDUnLCAnbGF5ZXItYW5pbS0wNiddO1xuXG4vL+m7mOiupOmFjee9rlxuQ2xhc3MucHQuY29uZmlnID0ge1xuICB0eXBlOiAwLFxuICBzaGFkZTogMC4zLFxuICBmaXg6IHRydWUsXG4gIG1vdmU6IGRvbXNbMV0sXG4gIHRpdGxlOiAnJiN4NEZFMTsmI3g2MDZGOycsXG4gIG9mZnNldDogJ2F1dG8nLFxuICBhcmVhOiAnYXV0bycsXG4gIGNsb3NlQnRuOiAxLFxuICB0aW1lOiAwLCAvLzDooajnpLrkuI3oh6rliqjlhbPpl61cbiAgekluZGV4OiAxOTg5MTAxNCwgXG4gIG1heFdpZHRoOiAzNjAsXG4gIHNoaWZ0OiAwLFxuICBpY29uOiAtMSxcbiAgc2Nyb2xsYmFyOiB0cnVlLCAvL+aYr+WQpuWFgeiuuOa1j+iniOWZqOa7muWKqOadoVxuICB0aXBzOiAyXG59O1xuXG4vL+WuueWZqFxuQ2xhc3MucHQudmVzc2VsID0gZnVuY3Rpb24oY29uVHlwZSwgY2FsbGJhY2spe1xuICB2YXIgdGhhdCA9IHRoaXMsIHRpbWVzID0gdGhhdC5pbmRleCwgY29uZmlnID0gdGhhdC5jb25maWc7XG4gIHZhciB6SW5kZXggPSBjb25maWcuekluZGV4ICsgdGltZXMsIHRpdHlwZSA9IHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdvYmplY3QnO1xuICB2YXIgaXNtYXggPSBjb25maWcubWF4bWluICYmIChjb25maWcudHlwZSA9PT0gMSB8fCBjb25maWcudHlwZSA9PT0gMik7XG4gIHZhciB0aXRsZUhUTUwgPSAoY29uZmlnLnRpdGxlID8gJzxkaXYgY2xhc3M9XCJsYXl1aS1sYXllci10aXRsZVwiIHN0eWxlPVwiJysgKHRpdHlwZSA/IGNvbmZpZy50aXRsZVsxXSA6ICcnKSArJ1wiPicgXG4gICAgKyAodGl0eXBlID8gY29uZmlnLnRpdGxlWzBdIDogY29uZmlnLnRpdGxlKSBcbiAgKyAnPC9kaXY+JyA6ICcnKTtcbiAgXG4gIGNvbmZpZy56SW5kZXggPSB6SW5kZXg7XG4gIGNhbGxiYWNrKFtcbiAgICAvL+mBrue9qVxuICAgIGNvbmZpZy5zaGFkZSA/ICgnPGRpdiBjbGFzcz1cImxheXVpLWxheWVyLXNoYWRlXCIgaWQ9XCJsYXl1aS1sYXllci1zaGFkZScrIHRpbWVzICsnXCIgdGltZXM9XCInKyB0aW1lcyArJ1wiIHN0eWxlPVwiJysgKCd6LWluZGV4OicrICh6SW5kZXgtMSkgKyc7IGJhY2tncm91bmQtY29sb3I6JysgKGNvbmZpZy5zaGFkZVsxXXx8JyMwMDAnKSArJzsgb3BhY2l0eTonKyAoY29uZmlnLnNoYWRlWzBdfHxjb25maWcuc2hhZGUpICsnOyBmaWx0ZXI6YWxwaGEob3BhY2l0eT0nKyAoY29uZmlnLnNoYWRlWzBdKjEwMHx8Y29uZmlnLnNoYWRlKjEwMCkgKycpOycpICsnXCI+PC9kaXY+JykgOiAnJyxcbiAgICBcbiAgICAvL+S4u+S9k1xuICAgICc8ZGl2IGNsYXNzPVwiJysgZG9tc1swXSArJyAnKyAoZG9tcy5hbmltW2NvbmZpZy5zaGlmdF18fCcnKSArICgnIGxheXVpLWxheWVyLScrcmVhZHkudHlwZVtjb25maWcudHlwZV0pICsgKCgoY29uZmlnLnR5cGUgPT0gMCB8fCBjb25maWcudHlwZSA9PSAyKSAmJiAhY29uZmlnLnNoYWRlKSA/ICcgbGF5dWktbGF5ZXItYm9yZGVyJyA6ICcnKSArICcgJyArIChjb25maWcuc2tpbnx8JycpICsnXCIgaWQ9XCInKyBkb21zWzBdICsgdGltZXMgKydcIiB0eXBlPVwiJysgcmVhZHkudHlwZVtjb25maWcudHlwZV0gKydcIiB0aW1lcz1cIicrIHRpbWVzICsnXCIgc2hvd3RpbWU9XCInKyBjb25maWcudGltZSArJ1wiIGNvblR5cGU9XCInKyAoY29uVHlwZSA/ICdvYmplY3QnIDogJ3N0cmluZycpICsnXCIgc3R5bGU9XCJ6LWluZGV4OiAnKyB6SW5kZXggKyc7IHdpZHRoOicrIGNvbmZpZy5hcmVhWzBdICsgJztoZWlnaHQ6JyArIGNvbmZpZy5hcmVhWzFdICsgKGNvbmZpZy5maXggPyAnJyA6ICc7cG9zaXRpb246YWJzb2x1dGU7JykgKydcIj4nXG4gICAgICArIChjb25UeXBlICYmIGNvbmZpZy50eXBlICE9IDIgPyAnJyA6IHRpdGxlSFRNTClcbiAgICAgICsnPGRpdiBpZD1cIicrIChjb25maWcuaWR8fCcnKSArJ1wiIGNsYXNzPVwibGF5dWktbGF5ZXItY29udGVudCcrICgoY29uZmlnLnR5cGUgPT0gMCAmJiBjb25maWcuaWNvbiAhPT0gLTEpID8gJyBsYXl1aS1sYXllci1wYWRkaW5nJyA6JycpICsgKGNvbmZpZy50eXBlID09IDMgPyAnIGxheXVpLWxheWVyLWxvYWRpbmcnK2NvbmZpZy5pY29uIDogJycpICsnXCI+J1xuICAgICAgICArIChjb25maWcudHlwZSA9PSAwICYmIGNvbmZpZy5pY29uICE9PSAtMSA/ICc8aSBjbGFzcz1cImxheXVpLWxheWVyLWljbyBsYXl1aS1sYXllci1pY28nKyBjb25maWcuaWNvbiArJ1wiPjwvaT4nIDogJycpXG4gICAgICAgICsgKGNvbmZpZy50eXBlID09IDEgJiYgY29uVHlwZSA/ICcnIDogKGNvbmZpZy5jb250ZW50fHwnJykpXG4gICAgICArJzwvZGl2PidcbiAgICAgICsgJzxzcGFuIGNsYXNzPVwibGF5dWktbGF5ZXItc2V0d2luXCI+JysgZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGNsb3NlYnRuID0gaXNtYXggPyAnPGEgY2xhc3M9XCJsYXl1aS1sYXllci1taW5cIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+PGNpdGU+PC9jaXRlPjwvYT48YSBjbGFzcz1cImxheXVpLWxheWVyLWljbyBsYXl1aS1sYXllci1tYXhcIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPicgOiAnJztcbiAgICAgICAgY29uZmlnLmNsb3NlQnRuICYmIChjbG9zZWJ0biArPSAnPGEgY2xhc3M9XCJsYXl1aS1sYXllci1pY28gJysgZG9tc1s3XSArJyAnKyBkb21zWzddICsgKGNvbmZpZy50aXRsZSA/IGNvbmZpZy5jbG9zZUJ0biA6IChjb25maWcudHlwZSA9PSA0ID8gJzEnIDogJzInKSkgKydcIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPicpO1xuICAgICAgICByZXR1cm4gY2xvc2VidG47XG4gICAgICB9KCkgKyAnPC9zcGFuPidcbiAgICAgICsgKGNvbmZpZy5idG4gPyBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgYnV0dG9uID0gJyc7XG4gICAgICAgIHR5cGVvZiBjb25maWcuYnRuID09PSAnc3RyaW5nJyAmJiAoY29uZmlnLmJ0biA9IFtjb25maWcuYnRuXSk7XG4gICAgICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IGNvbmZpZy5idG4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xuICAgICAgICAgIGJ1dHRvbiArPSAnPGEgY2xhc3M9XCInKyBkb21zWzZdICsnJysgaSArJ1wiPicrIGNvbmZpZy5idG5baV0gKyc8L2E+J1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cIicrIGRvbXNbNl0gKydcIj4nKyBidXR0b24gKyc8L2Rpdj4nXG4gICAgICB9KCkgOiAnJylcbiAgICArJzwvZGl2PidcbiAgXSwgdGl0bGVIVE1MKTtcbiAgcmV0dXJuIHRoYXQ7XG59O1xuXG4vL+WIm+W7uumqqOaetlxuQ2xhc3MucHQuY3JlYXQgPSBmdW5jdGlvbigpe1xuICB2YXIgdGhhdCA9IHRoaXMsIGNvbmZpZyA9IHRoYXQuY29uZmlnLCB0aW1lcyA9IHRoYXQuaW5kZXgsIG5vZGVJbmRleDtcbiAgdmFyIGNvbnRlbnQgPSBjb25maWcuY29udGVudCwgY29uVHlwZSA9IHR5cGVvZiBjb250ZW50ID09PSAnb2JqZWN0JztcbiAgXG4gIGlmKCQoJyMnK2NvbmZpZy5pZClbMF0pICByZXR1cm47XG4gIFxuICBpZih0eXBlb2YgY29uZmlnLmFyZWEgPT09ICdzdHJpbmcnKXtcbiAgICBjb25maWcuYXJlYSA9IGNvbmZpZy5hcmVhID09PSAnYXV0bycgPyBbJycsICcnXSA6IFtjb25maWcuYXJlYSwgJyddO1xuICB9XG4gIFxuICBzd2l0Y2goY29uZmlnLnR5cGUpe1xuICAgIGNhc2UgMDpcbiAgICAgIGNvbmZpZy5idG4gPSAoJ2J0bicgaW4gY29uZmlnKSA/IGNvbmZpZy5idG4gOiByZWFkeS5idG5bMF07XG4gICAgICBsYXllci5jbG9zZUFsbCgnZGlhbG9nJyk7XG4gICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIGNvbnRlbnQgPSBjb25maWcuY29udGVudCA9IGNvblR5cGUgPyBjb25maWcuY29udGVudCA6IFtjb25maWcuY29udGVudHx8J2h0dHA6Ly9sYXllci5sYXl1aS5jb20nLCAnYXV0byddO1xuICAgICAgY29uZmlnLmNvbnRlbnQgPSAnPGlmcmFtZSBzY3JvbGxpbmc9XCInKyAoY29uZmlnLmNvbnRlbnRbMV18fCdhdXRvJykgKydcIiBhbGxvd3RyYW5zcGFyZW5jeT1cInRydWVcIiBpZD1cIicrIGRvbXNbNF0gKycnKyB0aW1lcyArJ1wiIG5hbWU9XCInKyBkb21zWzRdICsnJysgdGltZXMgKydcIiBvbmxvYWQ9XCJ0aGlzLmNsYXNzTmFtZT1cXCdcXCc7XCIgY2xhc3M9XCJsYXl1aS1sYXllci1sb2FkXCIgZnJhbWVib3JkZXI9XCIwXCIgc3JjPVwiJyArIGNvbmZpZy5jb250ZW50WzBdICsgJ1wiPjwvaWZyYW1lPic7XG4gICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgY29uZmlnLnRpdGxlID0gZmFsc2U7XG4gICAgICBjb25maWcuY2xvc2VCdG4gPSBmYWxzZTtcbiAgICAgIGNvbmZpZy5pY29uID09PSAtMSAmJiAoY29uZmlnLmljb24gPT09IDApO1xuICAgICAgbGF5ZXIuY2xvc2VBbGwoJ2xvYWRpbmcnKTtcbiAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICBjb25UeXBlIHx8IChjb25maWcuY29udGVudCA9IFtjb25maWcuY29udGVudCwgJ2JvZHknXSk7XG4gICAgICBjb25maWcuZm9sbG93ID0gY29uZmlnLmNvbnRlbnRbMV07XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50WzBdICsgJzxpIGNsYXNzPVwibGF5dWktbGF5ZXItVGlwc0dcIj48L2k+JztcbiAgICAgIGNvbmZpZy50aXRsZSA9IGZhbHNlO1xuICAgICAgY29uZmlnLmZpeCA9IGZhbHNlO1xuICAgICAgY29uZmlnLnRpcHMgPSB0eXBlb2YgY29uZmlnLnRpcHMgPT09ICdvYmplY3QnID8gY29uZmlnLnRpcHMgOiBbY29uZmlnLnRpcHMsIHRydWVdO1xuICAgICAgY29uZmlnLnRpcHNNb3JlIHx8IGxheWVyLmNsb3NlQWxsKCd0aXBzJyk7XG4gICAgYnJlYWs7XG4gIH1cbiAgXG4gIC8v5bu656uL5a655ZmoXG4gIHRoYXQudmVzc2VsKGNvblR5cGUsIGZ1bmN0aW9uKGh0bWwsIHRpdGxlSFRNTCl7XG4gICAgJCgnYm9keScpLmFwcGVuZChodG1sWzBdKTtcbiAgICBjb25UeXBlID8gZnVuY3Rpb24oKXtcbiAgICAgIChjb25maWcudHlwZSA9PSAyIHx8IGNvbmZpZy50eXBlID09IDQpID8gZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZChodG1sWzFdKTtcbiAgICAgIH0oKSA6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCFjb250ZW50LnBhcmVudHMoJy4nK2RvbXNbMF0pWzBdKXtcbiAgICAgICAgICBjb250ZW50LnNob3coKS5hZGRDbGFzcygnbGF5dWktbGF5ZXItd3JhcCcpLndyYXAoaHRtbFsxXSk7XG4gICAgICAgICAgJCgnIycrIGRvbXNbMF0gKyB0aW1lcykuZmluZCgnLicrZG9tc1s1XSkuYmVmb3JlKHRpdGxlSFRNTCk7XG4gICAgICAgIH1cbiAgICAgIH0oKTtcbiAgICB9KCkgOiAkKCdib2R5JykuYXBwZW5kKGh0bWxbMV0pO1xuICAgIHRoYXQubGF5ZXJvID0gJCgnIycrIGRvbXNbMF0gKyB0aW1lcyk7XG4gICAgY29uZmlnLnNjcm9sbGJhciB8fCBkb21zLmh0bWwuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKS5hdHRyKCdsYXllci1mdWxsJywgdGltZXMpO1xuICB9KS5hdXRvKHRpbWVzKTtcblxuICBjb25maWcudHlwZSA9PSAyICYmIGxheWVyLmllNiAmJiB0aGF0LmxheWVyby5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCBjb250ZW50WzBdKTtcbiAgJChkb2N1bWVudCkub2ZmKCdrZXlkb3duJywgcmVhZHkuZW50ZXIpLm9uKCdrZXlkb3duJywgcmVhZHkuZW50ZXIpO1xuICB0aGF0LmxheWVyby5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpe1xuICAgICQoZG9jdW1lbnQpLm9mZigna2V5ZG93bicsIHJlYWR5LmVudGVyKTtcbiAgfSk7XG5cbiAgLy/lnZDmoIfoh6rpgILlupTmtY/op4jlmajnqpflj6PlsLrlr7hcbiAgY29uZmlnLnR5cGUgPT0gNCA/IHRoYXQudGlwcygpIDogdGhhdC5vZmZzZXQoKTtcbiAgaWYoY29uZmlnLmZpeCl7XG4gICAgd2luLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpe1xuICAgICAgdGhhdC5vZmZzZXQoKTtcbiAgICAgICgvXlxcZCslJC8udGVzdChjb25maWcuYXJlYVswXSkgfHwgL15cXGQrJSQvLnRlc3QoY29uZmlnLmFyZWFbMV0pKSAmJiB0aGF0LmF1dG8odGltZXMpO1xuICAgICAgY29uZmlnLnR5cGUgPT0gNCAmJiB0aGF0LnRpcHMoKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgY29uZmlnLnRpbWUgPD0gMCB8fCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgbGF5ZXIuY2xvc2UodGhhdC5pbmRleClcbiAgfSwgY29uZmlnLnRpbWUpO1xuICB0aGF0Lm1vdmUoKS5jYWxsYmFjaygpO1xufTtcblxuLy/oh6rpgILlupRcbkNsYXNzLnB0LmF1dG8gPSBmdW5jdGlvbihpbmRleCl7XG4gIHZhciB0aGF0ID0gdGhpcywgY29uZmlnID0gdGhhdC5jb25maWcsIGxheWVybyA9ICQoJyMnKyBkb21zWzBdICsgaW5kZXgpO1xuICBpZihjb25maWcuYXJlYVswXSA9PT0gJycgJiYgY29uZmlnLm1heFdpZHRoID4gMCl7XG4gICAgLy/kuLrkuobkv67lpI1JRTfkuIvkuIDkuKrorqnkurrpmr7ku6XnkIbop6PnmoRidWdcbiAgICBpZigvTVNJRSA3Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIGNvbmZpZy5idG4pe1xuICAgICAgbGF5ZXJvLndpZHRoKGxheWVyby5pbm5lcldpZHRoKCkpO1xuICAgIH1cbiAgICBsYXllcm8ub3V0ZXJXaWR0aCgpID4gY29uZmlnLm1heFdpZHRoICYmIGxheWVyby53aWR0aChjb25maWcubWF4V2lkdGgpO1xuICB9XG4gIHZhciBhcmVhID0gW2xheWVyby5pbm5lcldpZHRoKCksIGxheWVyby5pbm5lckhlaWdodCgpXTtcbiAgdmFyIHRpdEhlaWdodCA9IGxheWVyby5maW5kKGRvbXNbMV0pLm91dGVySGVpZ2h0KCkgfHwgMDtcbiAgdmFyIGJ0bkhlaWdodCA9IGxheWVyby5maW5kKCcuJytkb21zWzZdKS5vdXRlckhlaWdodCgpIHx8IDA7XG4gIGZ1bmN0aW9uIHNldEhlaWdodChlbGVtKXtcbiAgICBlbGVtID0gbGF5ZXJvLmZpbmQoZWxlbSk7XG4gICAgZWxlbS5oZWlnaHQoYXJlYVsxXSAtIHRpdEhlaWdodCAtIGJ0bkhlaWdodCAtIDIqKHBhcnNlRmxvYXQoZWxlbS5jc3MoJ3BhZGRpbmcnKSl8MCkpO1xuICB9XG4gIHN3aXRjaChjb25maWcudHlwZSl7XG4gICAgY2FzZSAyOiBcbiAgICAgIHNldEhlaWdodCgnaWZyYW1lJyk7XG4gICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmKGNvbmZpZy5hcmVhWzFdID09PSAnJyl7XG4gICAgICAgIGlmKGNvbmZpZy5maXggJiYgYXJlYVsxXSA+PSB3aW4uaGVpZ2h0KCkpe1xuICAgICAgICAgIGFyZWFbMV0gPSB3aW4uaGVpZ2h0KCk7XG4gICAgICAgICAgc2V0SGVpZ2h0KCcuJytkb21zWzVdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SGVpZ2h0KCcuJytkb21zWzVdKTtcbiAgICAgIH1cbiAgICBicmVhaztcbiAgfVxuICByZXR1cm4gdGhhdDtcbn07XG5cbi8v6K6h566X5Z2Q5qCHXG5DbGFzcy5wdC5vZmZzZXQgPSBmdW5jdGlvbigpe1xuICB2YXIgdGhhdCA9IHRoaXMsIGNvbmZpZyA9IHRoYXQuY29uZmlnLCBsYXllcm8gPSB0aGF0LmxheWVybztcbiAgdmFyIGFyZWEgPSBbbGF5ZXJvLm91dGVyV2lkdGgoKSwgbGF5ZXJvLm91dGVySGVpZ2h0KCldO1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjb25maWcub2Zmc2V0ID09PSAnb2JqZWN0JztcbiAgdGhhdC5vZmZzZXRUb3AgPSAod2luLmhlaWdodCgpIC0gYXJlYVsxXSkvMjtcbiAgdGhhdC5vZmZzZXRMZWZ0ID0gKHdpbi53aWR0aCgpIC0gYXJlYVswXSkvMjtcbiAgaWYodHlwZSl7XG4gICAgdGhhdC5vZmZzZXRUb3AgPSBjb25maWcub2Zmc2V0WzBdO1xuICAgIHRoYXQub2Zmc2V0TGVmdCA9IGNvbmZpZy5vZmZzZXRbMV18fHRoYXQub2Zmc2V0TGVmdDtcbiAgfSBlbHNlIGlmKGNvbmZpZy5vZmZzZXQgIT09ICdhdXRvJyl7XG4gICAgdGhhdC5vZmZzZXRUb3AgPSBjb25maWcub2Zmc2V0O1xuICAgIGlmKGNvbmZpZy5vZmZzZXQgPT09ICdyYicpeyAvL+WPs+S4i+inklxuICAgICAgdGhhdC5vZmZzZXRUb3AgPSB3aW4uaGVpZ2h0KCkgLSBhcmVhWzFdO1xuICAgICAgdGhhdC5vZmZzZXRMZWZ0ID0gd2luLndpZHRoKCkgLSBhcmVhWzBdO1xuICAgIH1cbiAgfVxuICBpZighY29uZmlnLmZpeCl7XG4gICAgdGhhdC5vZmZzZXRUb3AgPSAvJSQvLnRlc3QodGhhdC5vZmZzZXRUb3ApID8gXG4gICAgICB3aW4uaGVpZ2h0KCkqcGFyc2VGbG9hdCh0aGF0Lm9mZnNldFRvcCkvMTAwXG4gICAgOiBwYXJzZUZsb2F0KHRoYXQub2Zmc2V0VG9wKTtcbiAgICB0aGF0Lm9mZnNldExlZnQgPSAvJSQvLnRlc3QodGhhdC5vZmZzZXRMZWZ0KSA/IFxuICAgICAgd2luLndpZHRoKCkqcGFyc2VGbG9hdCh0aGF0Lm9mZnNldExlZnQpLzEwMFxuICAgIDogcGFyc2VGbG9hdCh0aGF0Lm9mZnNldExlZnQpO1xuICAgIHRoYXQub2Zmc2V0VG9wICs9IHdpbi5zY3JvbGxUb3AoKTtcbiAgICB0aGF0Lm9mZnNldExlZnQgKz0gd2luLnNjcm9sbExlZnQoKTtcbiAgfVxuICBsYXllcm8uY3NzKHt0b3A6IHRoYXQub2Zmc2V0VG9wLCBsZWZ0OiB0aGF0Lm9mZnNldExlZnR9KTtcbn07XG5cbi8vVGlwc1xuQ2xhc3MucHQudGlwcyA9IGZ1bmN0aW9uKCl7XG4gIHZhciB0aGF0ID0gdGhpcywgY29uZmlnID0gdGhhdC5jb25maWcsIGxheWVybyA9IHRoYXQubGF5ZXJvO1xuICB2YXIgbGF5QXJlYSA9IFtsYXllcm8ub3V0ZXJXaWR0aCgpLCBsYXllcm8ub3V0ZXJIZWlnaHQoKV0sIGZvbGxvdyA9ICQoY29uZmlnLmZvbGxvdyk7XG4gIGlmKCFmb2xsb3dbMF0pIGZvbGxvdyA9ICQoJ2JvZHknKTtcbiAgdmFyIGdvYWwgPSB7XG4gICAgd2lkdGg6IGZvbGxvdy5vdXRlcldpZHRoKCksXG4gICAgaGVpZ2h0OiBmb2xsb3cub3V0ZXJIZWlnaHQoKSxcbiAgICB0b3A6IGZvbGxvdy5vZmZzZXQoKS50b3AsXG4gICAgbGVmdDogZm9sbG93Lm9mZnNldCgpLmxlZnRcbiAgfSwgdGlwc0cgPSBsYXllcm8uZmluZCgnLmxheXVpLWxheWVyLVRpcHNHJyk7XG4gIFxuICB2YXIgZ3VpZGUgPSBjb25maWcudGlwc1swXTtcbiAgY29uZmlnLnRpcHNbMV0gfHwgdGlwc0cucmVtb3ZlKCk7XG4gIFxuICBnb2FsLmF1dG9MZWZ0ID0gZnVuY3Rpb24oKXtcbiAgICBpZihnb2FsLmxlZnQgKyBsYXlBcmVhWzBdIC0gd2luLndpZHRoKCkgPiAwKXtcbiAgICAgIGdvYWwudGlwTGVmdCA9IGdvYWwubGVmdCArIGdvYWwud2lkdGggLSBsYXlBcmVhWzBdO1xuICAgICAgdGlwc0cuY3NzKHtyaWdodDogMTIsIGxlZnQ6ICdhdXRvJ30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBnb2FsLnRpcExlZnQgPSBnb2FsLmxlZnQ7XG4gICAgfTtcbiAgfTtcbiAgXG4gIC8v6L6o5YirdGlwc+eahOaWueS9jVxuICBnb2FsLndoZXJlID0gW2Z1bmN0aW9uKCl7IC8v5LiKICAgICAgICBcbiAgICBnb2FsLmF1dG9MZWZ0KCk7XG4gICAgZ29hbC50aXBUb3AgPSBnb2FsLnRvcCAtIGxheUFyZWFbMV0gLSAxMDtcbiAgICB0aXBzRy5yZW1vdmVDbGFzcygnbGF5dWktbGF5ZXItVGlwc0InKS5hZGRDbGFzcygnbGF5dWktbGF5ZXItVGlwc1QnKS5jc3MoJ2JvcmRlci1yaWdodC1jb2xvcicsIGNvbmZpZy50aXBzWzFdKTtcbiAgfSwgZnVuY3Rpb24oKXsgLy/lj7NcbiAgICBnb2FsLnRpcExlZnQgPSBnb2FsLmxlZnQgKyBnb2FsLndpZHRoICsgMTA7XG4gICAgZ29hbC50aXBUb3AgPSBnb2FsLnRvcDtcbiAgICB0aXBzRy5yZW1vdmVDbGFzcygnbGF5dWktbGF5ZXItVGlwc0wnKS5hZGRDbGFzcygnbGF5dWktbGF5ZXItVGlwc1InKS5jc3MoJ2JvcmRlci1ib3R0b20tY29sb3InLCBjb25maWcudGlwc1sxXSk7IFxuICB9LCBmdW5jdGlvbigpeyAvL+S4i1xuICAgIGdvYWwuYXV0b0xlZnQoKTtcbiAgICBnb2FsLnRpcFRvcCA9IGdvYWwudG9wICsgZ29hbC5oZWlnaHQgKyAxMDtcbiAgICB0aXBzRy5yZW1vdmVDbGFzcygnbGF5dWktbGF5ZXItVGlwc1QnKS5hZGRDbGFzcygnbGF5dWktbGF5ZXItVGlwc0InKS5jc3MoJ2JvcmRlci1yaWdodC1jb2xvcicsIGNvbmZpZy50aXBzWzFdKTtcbiAgfSwgZnVuY3Rpb24oKXsgLy/lt6ZcbiAgICBnb2FsLnRpcExlZnQgPSBnb2FsLmxlZnQgLSBsYXlBcmVhWzBdIC0gMTA7XG4gICAgZ29hbC50aXBUb3AgPSBnb2FsLnRvcDtcbiAgICB0aXBzRy5yZW1vdmVDbGFzcygnbGF5dWktbGF5ZXItVGlwc1InKS5hZGRDbGFzcygnbGF5dWktbGF5ZXItVGlwc0wnKS5jc3MoJ2JvcmRlci1ib3R0b20tY29sb3InLCBjb25maWcudGlwc1sxXSk7XG4gIH1dO1xuICBnb2FsLndoZXJlW2d1aWRlLTFdKCk7XG4gIFxuICAvKiA4KjLkuLrlsI/kuInop5LlvaLljaDmja7nmoTnqbrpl7QgKi9cbiAgaWYoZ3VpZGUgPT09IDEpe1xuICAgIGdvYWwudG9wIC0gKHdpbi5zY3JvbGxUb3AoKSArIGxheUFyZWFbMV0gKyA4KjIpIDwgMCAmJiBnb2FsLndoZXJlWzJdKCk7XG4gIH0gZWxzZSBpZihndWlkZSA9PT0gMil7XG4gICAgd2luLndpZHRoKCkgLSAoZ29hbC5sZWZ0ICsgZ29hbC53aWR0aCArIGxheUFyZWFbMF0gKyA4KjIpID4gMCB8fCBnb2FsLndoZXJlWzNdKClcbiAgfSBlbHNlIGlmKGd1aWRlID09PSAzKXtcbiAgICAoZ29hbC50b3AgLSB3aW4uc2Nyb2xsVG9wKCkgKyBnb2FsLmhlaWdodCArIGxheUFyZWFbMV0gKyA4KjIpIC0gd2luLmhlaWdodCgpID4gMCAmJiBnb2FsLndoZXJlWzBdKCk7XG4gIH0gZWxzZSBpZihndWlkZSA9PT0gNCl7XG4gICAgIGxheUFyZWFbMF0gKyA4KjIgLSBnb2FsLmxlZnQgPiAwICYmIGdvYWwud2hlcmVbMV0oKVxuICB9XG5cbiAgbGF5ZXJvLmZpbmQoJy4nK2RvbXNbNV0pLmNzcyh7XG4gICAgJ2JhY2tncm91bmQtY29sb3InOiBjb25maWcudGlwc1sxXSwgXG4gICAgJ3BhZGRpbmctcmlnaHQnOiAoY29uZmlnLmNsb3NlQnRuID8gJzMwcHgnIDogJycpXG4gIH0pO1xuICBsYXllcm8uY3NzKHtsZWZ0OiBnb2FsLnRpcExlZnQsIHRvcDogZ29hbC50aXBUb3B9KTtcbn1cblxuLy/mi5bmi73lsYJcbkNsYXNzLnB0Lm1vdmUgPSBmdW5jdGlvbigpe1xuICB2YXIgdGhhdCA9IHRoaXMsIGNvbmZpZyA9IHRoYXQuY29uZmlnLCBjb25mID0ge1xuICAgIHNldFk6IDAsXG4gICAgbW92ZUxheWVyOiBmdW5jdGlvbigpe1xuICAgICAgdmFyIGxheWVybyA9IGNvbmYubGF5ZXJvLCBtZ2xlZnQgPSBwYXJzZUludChsYXllcm8uY3NzKCdtYXJnaW4tbGVmdCcpKTtcbiAgICAgIHZhciBsZWZ0cyA9IHBhcnNlSW50KGNvbmYubW92ZS5jc3MoJ2xlZnQnKSk7XG4gICAgICBtZ2xlZnQgPT09IDAgfHwgKGxlZnRzID0gbGVmdHMgLSBtZ2xlZnQpO1xuICAgICAgaWYobGF5ZXJvLmNzcygncG9zaXRpb24nKSAhPT0gJ2ZpeGVkJyl7XG4gICAgICAgIGxlZnRzID0gbGVmdHMgLSBsYXllcm8ucGFyZW50KCkub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgY29uZi5zZXRZID0gMDtcbiAgICAgIH1cbiAgICAgIGxheWVyby5jc3Moe2xlZnQ6IGxlZnRzLCB0b3A6IHBhcnNlSW50KGNvbmYubW92ZS5jc3MoJ3RvcCcpKSAtIGNvbmYuc2V0WX0pO1xuICAgIH1cbiAgfTtcbiAgXG4gIHZhciBtb3ZlZG9tID0gdGhhdC5sYXllcm8uZmluZChjb25maWcubW92ZSk7XG4gIGNvbmZpZy5tb3ZlICYmIG1vdmVkb20uYXR0cignbW92ZScsICdvaycpO1xuICBtb3ZlZG9tLmNzcyh7Y3Vyc29yOiBjb25maWcubW92ZSA/ICdtb3ZlJyA6ICdhdXRvJ30pO1xuICBcbiAgJChjb25maWcubW92ZSkub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKE0peyAgXG4gICAgTS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCQodGhpcykuYXR0cignbW92ZScpID09PSAnb2snKXtcbiAgICAgIGNvbmYuaXNtb3ZlID0gdHJ1ZTtcbiAgICAgIGNvbmYubGF5ZXJvID0gJCh0aGlzKS5wYXJlbnRzKCcuJysgZG9tc1swXSk7XG4gICAgICB2YXIgeHggPSBjb25mLmxheWVyby5vZmZzZXQoKS5sZWZ0LCB5eSA9IGNvbmYubGF5ZXJvLm9mZnNldCgpLnRvcCwgd3cgPSBjb25mLmxheWVyby5vdXRlcldpZHRoKCkgLSA2LCBoaCA9IGNvbmYubGF5ZXJvLm91dGVySGVpZ2h0KCkgLSA2O1xuICAgICAgaWYoISQoJyNsYXl1aS1sYXllci1tb3ZlcycpWzBdKXtcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBpZD1cImxheXVpLWxheWVyLW1vdmVzXCIgY2xhc3M9XCJsYXl1aS1sYXllci1tb3Zlc1wiIHN0eWxlPVwibGVmdDonKyB4eCArJ3B4OyB0b3A6JysgeXkgKydweDsgd2lkdGg6Jysgd3cgKydweDsgaGVpZ2h0OicrIGhoICsncHg7IHotaW5kZXg6MjE0NzQ4MzU4NFwiPjwvZGl2PicpO1xuICAgICAgfVxuICAgICAgY29uZi5tb3ZlID0gJCgnI2xheXVpLWxheWVyLW1vdmVzJyk7XG4gICAgICBjb25maWcubW92ZVR5cGUgJiYgY29uZi5tb3ZlLmNzcyh7dmlzaWJpbGl0eTogJ2hpZGRlbid9KTtcbiAgICAgICBcbiAgICAgIGNvbmYubW92ZVggPSBNLnBhZ2VYIC0gY29uZi5tb3ZlLnBvc2l0aW9uKCkubGVmdDtcbiAgICAgIGNvbmYubW92ZVkgPSBNLnBhZ2VZIC0gY29uZi5tb3ZlLnBvc2l0aW9uKCkudG9wO1xuICAgICAgY29uZi5sYXllcm8uY3NzKCdwb3NpdGlvbicpICE9PSAnZml4ZWQnIHx8IChjb25mLnNldFkgPSB3aW4uc2Nyb2xsVG9wKCkpO1xuICAgIH1cbiAgfSk7XG4gIFxuICAkKGRvY3VtZW50KS5tb3VzZW1vdmUoZnVuY3Rpb24oTSl7XG4gICAgaWYoY29uZi5pc21vdmUpe1xuICAgICAgdmFyIG9mZnNldFggPSBNLnBhZ2VYIC0gY29uZi5tb3ZlWCwgb2Zmc2V0WSA9IE0ucGFnZVkgLSBjb25mLm1vdmVZO1xuICAgICAgTS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvL+aOp+WItuWFg+e0oOS4jeiiq+aLluWHuueql+WPo+WkllxuICAgICAgaWYoIWNvbmZpZy5tb3ZlT3V0KXtcbiAgICAgICAgY29uZi5zZXRZID0gd2luLnNjcm9sbFRvcCgpO1xuICAgICAgICB2YXIgc2V0UmlnID0gd2luLndpZHRoKCkgLSBjb25mLm1vdmUub3V0ZXJXaWR0aCgpLCBzZXRUb3AgPSBjb25mLnNldFk7ICAgICAgICAgXG4gICAgICAgIG9mZnNldFggPCAwICYmIChvZmZzZXRYID0gMCk7XG4gICAgICAgIG9mZnNldFggPiBzZXRSaWcgJiYgKG9mZnNldFggPSBzZXRSaWcpOyBcbiAgICAgICAgb2Zmc2V0WSA8IHNldFRvcCAmJiAob2Zmc2V0WSA9IHNldFRvcCk7XG4gICAgICAgIG9mZnNldFkgPiB3aW4uaGVpZ2h0KCkgLSBjb25mLm1vdmUub3V0ZXJIZWlnaHQoKSArIGNvbmYuc2V0WSAmJiAob2Zmc2V0WSA9IHdpbi5oZWlnaHQoKSAtIGNvbmYubW92ZS5vdXRlckhlaWdodCgpICsgY29uZi5zZXRZKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uZi5tb3ZlLmNzcyh7bGVmdDogb2Zmc2V0WCwgdG9wOiBvZmZzZXRZfSk7ICBcbiAgICAgIGNvbmZpZy5tb3ZlVHlwZSAmJiBjb25mLm1vdmVMYXllcigpO1xuICAgICAgXG4gICAgICBvZmZzZXRYID0gb2Zmc2V0WSA9IHNldFJpZyA9IHNldFRvcCA9IG51bGw7XG4gICAgfSAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgfSkubW91c2V1cChmdW5jdGlvbigpe1xuICAgIHRyeXtcbiAgICAgIGlmKGNvbmYuaXNtb3ZlKXtcbiAgICAgICAgY29uZi5tb3ZlTGF5ZXIoKTtcbiAgICAgICAgY29uZi5tb3ZlLnJlbW92ZSgpO1xuICAgICAgICBjb25maWcubW92ZUVuZCAmJiBjb25maWcubW92ZUVuZCgpO1xuICAgICAgfVxuICAgICAgY29uZi5pc21vdmUgPSBmYWxzZTtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25mLmlzbW92ZSA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0aGF0O1xufTtcblxuQ2xhc3MucHQuY2FsbGJhY2sgPSBmdW5jdGlvbigpe1xuICB2YXIgdGhhdCA9IHRoaXMsIGxheWVybyA9IHRoYXQubGF5ZXJvLCBjb25maWcgPSB0aGF0LmNvbmZpZztcbiAgdGhhdC5vcGVuTGF5ZXIoKTtcbiAgaWYoY29uZmlnLnN1Y2Nlc3Mpe1xuICAgIGlmKGNvbmZpZy50eXBlID09IDIpe1xuICAgICAgbGF5ZXJvLmZpbmQoJ2lmcmFtZScpLm9uKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uZmlnLnN1Y2Nlc3MobGF5ZXJvLCB0aGF0LmluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuc3VjY2VzcyhsYXllcm8sIHRoYXQuaW5kZXgpO1xuICAgIH1cbiAgfVxuICBsYXllci5pZTYgJiYgdGhhdC5JRTYobGF5ZXJvKTtcbiAgXG4gIC8v5oyJ6ZKuXG4gIGxheWVyby5maW5kKCcuJysgZG9tc1s2XSkuY2hpbGRyZW4oJ2EnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICBpZihpbmRleCA9PT0gMCl7XG4gICAgICBpZihjb25maWcueWVzKXtcbiAgICAgICAgY29uZmlnLnllcyh0aGF0LmluZGV4LCBsYXllcm8pXG4gICAgICB9IGVsc2UgaWYoY29uZmlnWydidG4xJ10pe1xuICAgICAgICBjb25maWdbJ2J0bjEnXSh0aGF0LmluZGV4LCBsYXllcm8pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXllci5jbG9zZSh0aGF0LmluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNsb3NlID0gY29uZmlnWydidG4nKyhpbmRleCsxKV0gJiYgY29uZmlnWydidG4nKyhpbmRleCsxKV0odGhhdC5pbmRleCwgbGF5ZXJvKTtcbiAgICAgIGNsb3NlID09PSBmYWxzZSB8fCBsYXllci5jbG9zZSh0aGF0LmluZGV4KTtcbiAgICB9XG4gIH0pO1xuICBcbiAgLy/lj5bmtohcbiAgZnVuY3Rpb24gY2FuY2VsKCl7XG4gICAgdmFyIGNsb3NlID0gY29uZmlnLmNhbmNlbCAmJiBjb25maWcuY2FuY2VsKHRoYXQuaW5kZXgsIGxheWVybyk7XG4gICAgY2xvc2UgPT09IGZhbHNlIHx8IGxheWVyLmNsb3NlKHRoYXQuaW5kZXgpO1xuICB9XG4gIFxuICAvL+WPs+S4iuinkuWFs+mXreWbnuiwg1xuICBsYXllcm8uZmluZCgnLicrIGRvbXNbN10pLm9uKCdjbGljaycsIGNhbmNlbCk7XG4gIFxuICAvL+eCuemBrue9qeWFs+mXrVxuICBpZihjb25maWcuc2hhZGVDbG9zZSl7XG4gICAgJCgnI2xheXVpLWxheWVyLXNoYWRlJysgdGhhdC5pbmRleCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgIGxheWVyLmNsb3NlKHRoYXQuaW5kZXgpO1xuICAgIH0pO1xuICB9IFxuICBcbiAgLy/mnIDlsI/ljJZcbiAgbGF5ZXJvLmZpbmQoJy5sYXl1aS1sYXllci1taW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGxheWVyLm1pbih0aGF0LmluZGV4LCBjb25maWcpO1xuICAgIGNvbmZpZy5taW4gJiYgY29uZmlnLm1pbihsYXllcm8pO1xuICB9KTtcbiAgXG4gIC8v5YWo5bGPL+i/mOWOn1xuICBsYXllcm8uZmluZCgnLmxheXVpLWxheWVyLW1heCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnbGF5dWktbGF5ZXItbWF4bWluJykpe1xuICAgICAgbGF5ZXIucmVzdG9yZSh0aGF0LmluZGV4KTtcbiAgICAgIGNvbmZpZy5yZXN0b3JlICYmIGNvbmZpZy5yZXN0b3JlKGxheWVybyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxheWVyLmZ1bGwodGhhdC5pbmRleCwgY29uZmlnKTtcbiAgICAgIGNvbmZpZy5mdWxsICYmIGNvbmZpZy5mdWxsKGxheWVybyk7XG4gICAgfVxuICB9KTtcblxuICBjb25maWcuZW5kICYmIChyZWFkeS5lbmRbdGhhdC5pbmRleF0gPSBjb25maWcuZW5kKTtcbn07XG5cbi8vZm9yIGllNiDmgaLlpI1zZWxlY3RcbnJlYWR5LnJlc2VsZWN0ID0gZnVuY3Rpb24oKXtcbiAgJC5lYWNoKCQoJ3NlbGVjdCcpLCBmdW5jdGlvbihpbmRleCAsIHZhbHVlKXtcbiAgICB2YXIgc3RoaXMgPSAkKHRoaXMpO1xuICAgIGlmKCFzdGhpcy5wYXJlbnRzKCcuJytkb21zWzBdKVswXSl7XG4gICAgICAoc3RoaXMuYXR0cignbGF5ZXInKSA9PSAxICYmICQoJy4nK2RvbXNbMF0pLmxlbmd0aCA8IDEpICYmIHN0aGlzLnJlbW92ZUF0dHIoJ2xheWVyJykuc2hvdygpOyBcbiAgICB9XG4gICAgc3RoaXMgPSBudWxsO1xuICB9KTtcbn07IFxuXG5DbGFzcy5wdC5JRTYgPSBmdW5jdGlvbihsYXllcm8pe1xuICB2YXIgdGhhdCA9IHRoaXMsIF9pZVRvcCA9IGxheWVyby5vZmZzZXQoKS50b3A7XG4gIFxuICAvL2llNueahOWbuuWumuS4juebuOWvueWumuS9jVxuICBmdW5jdGlvbiBpZTZGaXgoKXtcbiAgICBsYXllcm8uY3NzKHt0b3AgOiBfaWVUb3AgKyAodGhhdC5jb25maWcuZml4ID8gd2luLnNjcm9sbFRvcCgpIDogMCl9KTtcbiAgfTtcbiAgaWU2Rml4KCk7XG4gIHdpbi5zY3JvbGwoaWU2Rml4KTtcblxuICAvL+makOiXj3NlbGVjdFxuICAkKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKGluZGV4ICwgdmFsdWUpe1xuICAgIHZhciBzdGhpcyA9ICQodGhpcyk7XG4gICAgaWYoIXN0aGlzLnBhcmVudHMoJy4nK2RvbXNbMF0pWzBdKXtcbiAgICAgIHN0aGlzLmNzcygnZGlzcGxheScpID09PSAnbm9uZScgfHwgc3RoaXMuYXR0cih7J2xheWVyJyA6ICcxJ30pLmhpZGUoKTtcbiAgICB9XG4gICAgc3RoaXMgPSBudWxsO1xuICB9KTtcbn07XG5cbi8v6ZyA5L6d6LWW5Y6f5Z6L55qE5a+55aSW5pa55rOVXG5DbGFzcy5wdC5vcGVuTGF5ZXIgPSBmdW5jdGlvbigpe1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIFxuICAvL+e9rumhtuW9k+WJjeeql+WPo1xuICBsYXllci56SW5kZXggPSB0aGF0LmNvbmZpZy56SW5kZXg7XG4gIGxheWVyLnNldFRvcCA9IGZ1bmN0aW9uKGxheWVybyl7XG4gICAgdmFyIHNldFppbmRleCA9IGZ1bmN0aW9uKCl7XG4gICAgICBsYXllci56SW5kZXgrKztcbiAgICAgIGxheWVyby5jc3MoJ3otaW5kZXgnLCBsYXllci56SW5kZXggKyAxKTtcbiAgICB9O1xuICAgIGxheWVyLnpJbmRleCA9IHBhcnNlSW50KGxheWVyb1swXS5zdHlsZS56SW5kZXgpO1xuICAgIGxheWVyby5vbignbW91c2Vkb3duJywgc2V0WmluZGV4KTtcbiAgICByZXR1cm4gbGF5ZXIuekluZGV4O1xuICB9O1xufTtcblxucmVhZHkucmVjb3JkID0gZnVuY3Rpb24obGF5ZXJvKXtcbiAgdmFyIGFyZWEgPSBbXG4gICAgbGF5ZXJvLm91dGVyV2lkdGgoKSxcbiAgICBsYXllcm8ub3V0ZXJIZWlnaHQoKSxcbiAgICBsYXllcm8ucG9zaXRpb24oKS50b3AsIFxuICAgIGxheWVyby5wb3NpdGlvbigpLmxlZnQgKyBwYXJzZUZsb2F0KGxheWVyby5jc3MoJ21hcmdpbi1sZWZ0JykpXG4gIF07XG4gIGxheWVyby5maW5kKCcubGF5dWktbGF5ZXItbWF4JykuYWRkQ2xhc3MoJ2xheXVpLWxheWVyLW1heG1pbicpO1xuICBsYXllcm8uYXR0cih7YXJlYTogYXJlYX0pO1xufTtcblxucmVhZHkucmVzY29sbGJhciA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgaWYoZG9tcy5odG1sLmF0dHIoJ2xheWVyLWZ1bGwnKSA9PSBpbmRleCl7XG4gICAgaWYoZG9tcy5odG1sWzBdLnN0eWxlLnJlbW92ZVByb3BlcnR5KXtcbiAgICAgIGRvbXMuaHRtbFswXS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tcy5odG1sWzBdLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnb3ZlcmZsb3cnKTtcbiAgICB9XG4gICAgZG9tcy5odG1sLnJlbW92ZUF0dHIoJ2xheWVyLWZ1bGwnKTtcbiAgfVxufTtcblxuLyoqIOWGhee9ruaIkOWRmCAqL1xuXG53aW5kb3cubGF5ZXIgPSBsYXllcjtcblxuLy/ojrflj5blrZBpZnJhbWXnmoRET01cbmxheWVyLmdldENoaWxkRnJhbWUgPSBmdW5jdGlvbihzZWxlY3RvciwgaW5kZXgpe1xuICBpbmRleCA9IGluZGV4IHx8ICQoJy4nK2RvbXNbNF0pLmF0dHIoJ3RpbWVzJyk7XG4gIHJldHVybiAkKCcjJysgZG9tc1swXSArIGluZGV4KS5maW5kKCdpZnJhbWUnKS5jb250ZW50cygpLmZpbmQoc2VsZWN0b3IpOyAgXG59O1xuXG4vL+W+l+WIsOW9k+WJjWlmcmFtZeWxgueahOe0ouW8le+8jOWtkGlmcmFtZeaXtuS9v+eUqFxubGF5ZXIuZ2V0RnJhbWVJbmRleCA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gJCgnIycrIG5hbWUpLnBhcmVudHMoJy4nK2RvbXNbNF0pLmF0dHIoJ3RpbWVzJyk7XG59O1xuXG4vL2lmcmFtZeWxguiHqumAguW6lOWuvemrmFxubGF5ZXIuaWZyYW1lQXV0byA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgaWYoIWluZGV4KSByZXR1cm47XG4gIHZhciBoZWcgPSBsYXllci5nZXRDaGlsZEZyYW1lKCdodG1sJywgaW5kZXgpLm91dGVySGVpZ2h0KCk7XG4gIHZhciBsYXllcm8gPSAkKCcjJysgZG9tc1swXSArIGluZGV4KTtcbiAgdmFyIHRpdEhlaWdodCA9IGxheWVyby5maW5kKGRvbXNbMV0pLm91dGVySGVpZ2h0KCkgfHwgMDtcbiAgdmFyIGJ0bkhlaWdodCA9IGxheWVyby5maW5kKCcuJytkb21zWzZdKS5vdXRlckhlaWdodCgpIHx8IDA7XG4gIGxheWVyby5jc3Moe2hlaWdodDogaGVnICsgdGl0SGVpZ2h0ICsgYnRuSGVpZ2h0fSk7XG4gIGxheWVyby5maW5kKCdpZnJhbWUnKS5jc3Moe2hlaWdodDogaGVnfSk7XG59O1xuXG4vL+mHjee9rmlmcmFtZSB1cmxcbmxheWVyLmlmcmFtZVNyYyA9IGZ1bmN0aW9uKGluZGV4LCB1cmwpe1xuICAkKCcjJysgZG9tc1swXSArIGluZGV4KS5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCB1cmwpO1xufTtcblxuLy/orr7lrprlsYLnmoTmoLflvI9cbmxheWVyLnN0eWxlID0gZnVuY3Rpb24oaW5kZXgsIG9wdGlvbnMpe1xuICB2YXIgbGF5ZXJvID0gJCgnIycrIGRvbXNbMF0gKyBpbmRleCksIHR5cGUgPSBsYXllcm8uYXR0cigndHlwZScpO1xuICB2YXIgdGl0SGVpZ2h0ID0gbGF5ZXJvLmZpbmQoZG9tc1sxXSkub3V0ZXJIZWlnaHQoKSB8fCAwO1xuICB2YXIgYnRuSGVpZ2h0ID0gbGF5ZXJvLmZpbmQoJy4nK2RvbXNbNl0pLm91dGVySGVpZ2h0KCkgfHwgMDtcbiAgaWYodHlwZSA9PT0gcmVhZHkudHlwZVsxXSB8fCB0eXBlID09PSByZWFkeS50eXBlWzJdKXtcbiAgICBsYXllcm8uY3NzKG9wdGlvbnMpO1xuICAgIGlmKHR5cGUgPT09IHJlYWR5LnR5cGVbMl0pe1xuICAgICAgbGF5ZXJvLmZpbmQoJ2lmcmFtZScpLmNzcyh7XG4gICAgICAgIGhlaWdodDogcGFyc2VGbG9hdChvcHRpb25zLmhlaWdodCkgLSB0aXRIZWlnaHQgLSBidG5IZWlnaHRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuLy/mnIDlsI/ljJZcbmxheWVyLm1pbiA9IGZ1bmN0aW9uKGluZGV4LCBvcHRpb25zKXtcbiAgdmFyIGxheWVybyA9ICQoJyMnKyBkb21zWzBdICsgaW5kZXgpO1xuICB2YXIgdGl0SGVpZ2h0ID0gbGF5ZXJvLmZpbmQoZG9tc1sxXSkub3V0ZXJIZWlnaHQoKSB8fCAwO1xuICByZWFkeS5yZWNvcmQobGF5ZXJvKTtcbiAgbGF5ZXIuc3R5bGUoaW5kZXgsIHt3aWR0aDogMTgwLCBoZWlnaHQ6IHRpdEhlaWdodCwgb3ZlcmZsb3c6ICdoaWRkZW4nfSk7XG4gIGxheWVyby5maW5kKCcubGF5dWktbGF5ZXItbWluJykuaGlkZSgpO1xuICBsYXllcm8uYXR0cigndHlwZScpID09PSAncGFnZScgJiYgbGF5ZXJvLmZpbmQoZG9tc1s0XSkuaGlkZSgpO1xuICByZWFkeS5yZXNjb2xsYmFyKGluZGV4KTtcbn07XG5cbi8v6L+Y5Y6fXG5sYXllci5yZXN0b3JlID0gZnVuY3Rpb24oaW5kZXgpe1xuICB2YXIgbGF5ZXJvID0gJCgnIycrIGRvbXNbMF0gKyBpbmRleCksIGFyZWEgPSBsYXllcm8uYXR0cignYXJlYScpLnNwbGl0KCcsJyk7XG4gIHZhciB0eXBlID0gbGF5ZXJvLmF0dHIoJ3R5cGUnKTtcbiAgbGF5ZXIuc3R5bGUoaW5kZXgsIHtcbiAgICB3aWR0aDogcGFyc2VGbG9hdChhcmVhWzBdKSwgXG4gICAgaGVpZ2h0OiBwYXJzZUZsb2F0KGFyZWFbMV0pLCBcbiAgICB0b3A6IHBhcnNlRmxvYXQoYXJlYVsyXSksIFxuICAgIGxlZnQ6IHBhcnNlRmxvYXQoYXJlYVszXSksXG4gICAgb3ZlcmZsb3c6ICd2aXNpYmxlJ1xuICB9KTtcbiAgbGF5ZXJvLmZpbmQoJy5sYXl1aS1sYXllci1tYXgnKS5yZW1vdmVDbGFzcygnbGF5dWktbGF5ZXItbWF4bWluJyk7XG4gIGxheWVyby5maW5kKCcubGF5dWktbGF5ZXItbWluJykuc2hvdygpO1xuICBsYXllcm8uYXR0cigndHlwZScpID09PSAncGFnZScgJiYgbGF5ZXJvLmZpbmQoZG9tc1s0XSkuc2hvdygpO1xuICByZWFkeS5yZXNjb2xsYmFyKGluZGV4KTtcbn07XG5cbi8v5YWo5bGPXG5sYXllci5mdWxsID0gZnVuY3Rpb24oaW5kZXgpe1xuICB2YXIgbGF5ZXJvID0gJCgnIycrIGRvbXNbMF0gKyBpbmRleCksIHRpbWVyO1xuICByZWFkeS5yZWNvcmQobGF5ZXJvKTtcbiAgaWYoIWRvbXMuaHRtbC5hdHRyKCdsYXllci1mdWxsJykpe1xuICAgIGRvbXMuaHRtbC5jc3MoJ292ZXJmbG93JywnaGlkZGVuJykuYXR0cignbGF5ZXItZnVsbCcsIGluZGV4KTtcbiAgfVxuICBjbGVhclRpbWVvdXQodGltZXIpO1xuICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICB2YXIgaXNmaXggPSBsYXllcm8uY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnO1xuICAgIGxheWVyLnN0eWxlKGluZGV4LCB7XG4gICAgICAgdG9wOiBpc2ZpeCA/IDAgOiB3aW4uc2Nyb2xsVG9wKCksXG4gICAgICAgbGVmdDogaXNmaXggPyAwIDogd2luLnNjcm9sbExlZnQoKSxcbiAgICAgICB3aWR0aDogd2luLndpZHRoKCksXG4gICAgICAgaGVpZ2h0OiB3aW4uaGVpZ2h0KClcbiAgICB9KTtcbiAgICBsYXllcm8uZmluZCgnLmxheXVpLWxheWVyLW1pbicpLmhpZGUoKTtcbiAgfSwgMTAwKTtcbn07XG5cbi8v5pS55Y+YdGl0bGVcbmxheWVyLnRpdGxlID0gZnVuY3Rpb24obmFtZSwgaW5kZXgpe1xuICB2YXIgdGl0bGUgPSAkKCcjJysgZG9tc1swXSArIChpbmRleHx8bGF5ZXIuaW5kZXgpKS5maW5kKGRvbXNbMV0pO1xuICB0aXRsZS5odG1sKG5hbWUpO1xufTtcblxuLy/lhbPpl61sYXllcuaAu+aWueazlVxubGF5ZXIuY2xvc2UgPSBmdW5jdGlvbihpbmRleCl7XG4gIHZhciBsYXllcm8gPSAkKCcjJysgZG9tc1swXSArIGluZGV4KSwgdHlwZSA9IGxheWVyby5hdHRyKCd0eXBlJyk7XG4gIGlmKCFsYXllcm9bMF0pIHJldHVybjtcbiAgaWYodHlwZSA9PT0gcmVhZHkudHlwZVsxXSAmJiBsYXllcm8uYXR0cignY29uVHlwZScpID09PSAnb2JqZWN0Jyl7XG4gICAgbGF5ZXJvLmNoaWxkcmVuKCc6bm90KC4nKyBkb21zWzVdICsnKScpLnJlbW92ZSgpO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCAyOyBpKyspe1xuICAgICAgbGF5ZXJvLmZpbmQoJy5sYXl1aS1sYXllci13cmFwJykudW53cmFwKCkuaGlkZSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvL+S9jueJiOacrElFIOWbnuaUtiBpZnJhbWVcbiAgICBpZih0eXBlID09PSByZWFkeS50eXBlWzJdKXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBpZnJhbWUgPSAkKCcjJytkb21zWzRdK2luZGV4KVswXTtcbiAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoJycpO1xuICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5jbG9zZSgpO1xuICAgICAgICBsYXllcm8uZmluZCgnLicrZG9tc1s1XSlbMF0ucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICAgIH0gY2F0Y2goZSl7fVxuICAgIH1cbiAgICBsYXllcm9bMF0uaW5uZXJIVE1MID0gJyc7XG4gICAgbGF5ZXJvLnJlbW92ZSgpO1xuICB9XG4gICQoJyNsYXl1aS1sYXllci1tb3ZlcywgI2xheXVpLWxheWVyLXNoYWRlJyArIGluZGV4KS5yZW1vdmUoKTtcbiAgbGF5ZXIuaWU2ICYmIHJlYWR5LnJlc2VsZWN0KCk7XG4gIHJlYWR5LnJlc2NvbGxiYXIoaW5kZXgpO1xuICAkKGRvY3VtZW50KS5vZmYoJ2tleWRvd24nLCByZWFkeS5lbnRlcik7XG4gIHR5cGVvZiByZWFkeS5lbmRbaW5kZXhdID09PSAnZnVuY3Rpb24nICYmIHJlYWR5LmVuZFtpbmRleF0oKTtcbiAgZGVsZXRlIHJlYWR5LmVuZFtpbmRleF07IFxufTtcblxuLy/lhbPpl63miYDmnInlsYJcbmxheWVyLmNsb3NlQWxsID0gZnVuY3Rpb24odHlwZSl7XG4gICQuZWFjaCgkKCcuJytkb21zWzBdKSwgZnVuY3Rpb24oKXtcbiAgICB2YXIgb3RoaXMgPSAkKHRoaXMpO1xuICAgIHZhciBpcyA9IHR5cGUgPyAob3RoaXMuYXR0cigndHlwZScpID09PSB0eXBlKSA6IDE7XG4gICAgaXMgJiYgbGF5ZXIuY2xvc2Uob3RoaXMuYXR0cigndGltZXMnKSk7XG4gICAgaXMgPSBudWxsO1xuICB9KTtcbn07XG5cbi8qKiBcblxuICDmi5PlsZXmqKHlnZfvvIxsYXl1aeW8gOWni+WQiOW5tuWcqOS4gOi1t1xuXG4gKi9cblxudmFyIGNhY2hlID0gbGF5ZXIuY2FjaGV8fHt9LCBza2luID0gZnVuY3Rpb24odHlwZSl7XG4gIHJldHVybiAoY2FjaGUuc2tpbiA/ICgnICcgKyBjYWNoZS5za2luICsgJyAnICsgY2FjaGUuc2tpbiArICctJyt0eXBlKSA6ICcnKTtcbn07IFxuIFxuLy/ku7/ns7vnu59wcm9tcHRcbmxheWVyLnByb21wdCA9IGZ1bmN0aW9uKG9wdGlvbnMsIHllcyl7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZih0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeWVzID0gb3B0aW9ucztcbiAgdmFyIHByb21wdCwgY29udGVudCA9IG9wdGlvbnMuZm9ybVR5cGUgPT0gMiA/ICc8dGV4dGFyZWEgY2xhc3M9XCJsYXl1aS1sYXllci1pbnB1dFwiPicrIChvcHRpb25zLnZhbHVlfHwnJykgKyc8L3RleHRhcmVhPicgOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAnPGlucHV0IHR5cGU9XCInKyAob3B0aW9ucy5mb3JtVHlwZSA9PSAxID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0JykgKydcIiBjbGFzcz1cImxheXVpLWxheWVyLWlucHV0XCIgdmFsdWU9XCInKyAob3B0aW9ucy52YWx1ZXx8JycpICsnXCI+JztcbiAgfSgpO1xuICByZXR1cm4gbGF5ZXIub3BlbigkLmV4dGVuZCh7XG4gICAgYnRuOiBbJyYjeDc4NkU7JiN4NUI5QTsnLCcmI3g1M0Q2OyYjeDZEODg7J10sXG4gICAgY29udGVudDogY29udGVudCxcbiAgICBza2luOiAnbGF5dWktbGF5ZXItcHJvbXB0JyArIHNraW4oJ3Byb21wdCcpLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGxheWVybyl7XG4gICAgICBwcm9tcHQgPSBsYXllcm8uZmluZCgnLmxheXVpLWxheWVyLWlucHV0Jyk7XG4gICAgICBwcm9tcHQuZm9jdXMoKTtcbiAgICB9LCB5ZXM6IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgIHZhciB2YWx1ZSA9IHByb21wdC52YWwoKTtcbiAgICAgIGlmKHZhbHVlID09PSAnJyl7XG4gICAgICAgIHByb21wdC5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmKHZhbHVlLmxlbmd0aCA+IChvcHRpb25zLm1heGxlbmd0aHx8NTAwKSkge1xuICAgICAgICBsYXllci50aXBzKCcmI3g2NzAwOyYjeDU5MUE7JiN4OEY5MzsmI3g1MTY1OycrIChvcHRpb25zLm1heGxlbmd0aCB8fCA1MDApICsnJiN4NEUyQTsmI3g1QjU3OyYjeDY1NzA7JywgcHJvbXB0LCB7dGlwczogMX0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeWVzICYmIHllcyh2YWx1ZSwgaW5kZXgsIHByb21wdCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBvcHRpb25zKSk7XG59O1xuXG4vL3RhYuWxglxubGF5ZXIudGFiID0gZnVuY3Rpb24ob3B0aW9ucyl7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdGFiID0gb3B0aW9ucy50YWIgfHwge307XG4gIHJldHVybiBsYXllci5vcGVuKCQuZXh0ZW5kKHtcbiAgICB0eXBlOiAxLFxuICAgIHNraW46ICdsYXl1aS1sYXllci10YWInICsgc2tpbigndGFiJyksXG4gICAgdGl0bGU6IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgbGVuID0gdGFiLmxlbmd0aCwgaWkgPSAxLCBzdHIgPSAnJztcbiAgICAgIGlmKGxlbiA+IDApe1xuICAgICAgICBzdHIgPSAnPHNwYW4gY2xhc3M9XCJsYXl1aS1sYXllci10YWJub3dcIj4nKyB0YWJbMF0udGl0bGUgKyc8L3NwYW4+JztcbiAgICAgICAgZm9yKDsgaWkgPCBsZW47IGlpKyspe1xuICAgICAgICAgIHN0ciArPSAnPHNwYW4+JysgdGFiW2lpXS50aXRsZSArJzwvc3Bhbj4nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH0oKSxcbiAgICBjb250ZW50OiAnPHVsIGNsYXNzPVwibGF5dWktbGF5ZXItdGFibWFpblwiPicrIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgbGVuID0gdGFiLmxlbmd0aCwgaWkgPSAxLCBzdHIgPSAnJztcbiAgICAgIGlmKGxlbiA+IDApe1xuICAgICAgICBzdHIgPSAnPGxpIGNsYXNzPVwibGF5dWktbGF5ZXItdGFibGkgeHVib3hfdGFiX2xheWVyXCI+JysgKHRhYlswXS5jb250ZW50IHx8ICdubyBjb250ZW50JykgKyc8L2xpPic7XG4gICAgICAgIGZvcig7IGlpIDwgbGVuOyBpaSsrKXtcbiAgICAgICAgICBzdHIgKz0gJzxsaSBjbGFzcz1cImxheXVpLWxheWVyLXRhYmxpXCI+JysgKHRhYltpaV0uY29udGVudCB8fCAnbm8gIGNvbnRlbnQnKSArJzwvbGk+JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9KCkgKyc8L3VsPicsXG4gICAgc3VjY2VzczogZnVuY3Rpb24obGF5ZXJvKXtcbiAgICAgIHZhciBidG4gPSBsYXllcm8uZmluZCgnLmxheXVpLWxheWVyLXRpdGxlJykuY2hpbGRyZW4oKTtcbiAgICAgIHZhciBtYWluID0gbGF5ZXJvLmZpbmQoJy5sYXl1aS1sYXllci10YWJtYWluJykuY2hpbGRyZW4oKTtcbiAgICAgIGJ0bi5vbignbW91c2Vkb3duJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uID8gZS5zdG9wUHJvcGFnYXRpb24oKSA6IGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICAgICAgdmFyIG90aGlzID0gJCh0aGlzKSwgaW5kZXggPSBvdGhpcy5pbmRleCgpO1xuICAgICAgICBvdGhpcy5hZGRDbGFzcygnbGF5dWktbGF5ZXItdGFibm93Jykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnbGF5dWktbGF5ZXItdGFibm93Jyk7XG4gICAgICAgIG1haW4uZXEoaW5kZXgpLnNob3coKS5zaWJsaW5ncygpLmhpZGUoKTtcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuY2hhbmdlID09PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMuY2hhbmdlKGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgb3B0aW9ucykpO1xufTtcblxuLy/nm7jlhozlsYJcbmxheWVyLnBob3RvcyA9IGZ1bmN0aW9uKG9wdGlvbnMsIGxvb3AsIGtleSl7XG4gIHZhciBkaWN0ID0ge307XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZighb3B0aW9ucy5waG90b3MpIHJldHVybjtcbiAgdmFyIHR5cGUgPSBvcHRpb25zLnBob3Rvcy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xuICB2YXIgcGhvdG9zID0gdHlwZSA/IG9wdGlvbnMucGhvdG9zIDoge30sIGRhdGEgPSBwaG90b3MuZGF0YSB8fCBbXTtcbiAgdmFyIHN0YXJ0ID0gcGhvdG9zLnN0YXJ0IHx8IDA7XG4gIGRpY3QuaW1nSW5kZXggPSAoc3RhcnR8MCkgKyAxO1xuICBcbiAgb3B0aW9ucy5pbWcgPSBvcHRpb25zLmltZyB8fCAnaW1nJztcblxuICBpZighdHlwZSl7IC8v6aG16Z2i55u05o6l6I635Y+WXG4gICAgdmFyIHBhcmVudCA9ICQob3B0aW9ucy5waG90b3MpLCBwdXNoRGF0YSA9IGZ1bmN0aW9uKCl7XG4gICAgICBkYXRhID0gW107XG4gICAgICBwYXJlbnQuZmluZChvcHRpb25zLmltZykuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgICAgIHZhciBvdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIG90aGlzLmF0dHIoJ2xheWVyLWluZGV4JywgaW5kZXgpO1xuICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgIGFsdDogb3RoaXMuYXR0cignYWx0JyksXG4gICAgICAgICAgcGlkOiBvdGhpcy5hdHRyKCdsYXllci1waWQnKSxcbiAgICAgICAgICBzcmM6IG90aGlzLmF0dHIoJ2xheWVyLXNyYycpIHx8IG90aGlzLmF0dHIoJ3NyYycpLFxuICAgICAgICAgIHRodW1iOiBvdGhpcy5hdHRyKCdzcmMnKVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgfTtcbiAgICBcbiAgICBwdXNoRGF0YSgpO1xuICAgIFxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIFxuICAgIGxvb3AgfHwgcGFyZW50Lm9uKCdjbGljaycsIG9wdGlvbnMuaW1nLCBmdW5jdGlvbigpe1xuICAgICAgdmFyIG90aGlzID0gJCh0aGlzKSwgaW5kZXggPSBvdGhpcy5hdHRyKCdsYXllci1pbmRleCcpOyBcbiAgICAgIGxheWVyLnBob3RvcygkLmV4dGVuZChvcHRpb25zLCB7XG4gICAgICAgIHBob3Rvczoge1xuICAgICAgICAgIHN0YXJ0OiBpbmRleCxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIHRhYjogb3B0aW9ucy50YWJcbiAgICAgICAgfSxcbiAgICAgICAgZnVsbDogb3B0aW9ucy5mdWxsXG4gICAgICB9KSwgdHJ1ZSk7XG4gICAgICBwdXNoRGF0YSgpO1xuICAgIH0pXG4gICAgXG4gICAgLy/kuI3nm7TmjqXlvLnlh7pcbiAgICBpZighbG9vcCkgcmV0dXJuO1xuICAgIFxuICB9IGVsc2UgaWYgKGRhdGEubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gbGF5ZXIubXNnKCcmI3g2Q0ExOyYjeDY3MDk7JiN4NTZGRTsmI3g3MjQ3OycpO1xuICB9XG4gIFxuICAvL+S4iuS4gOW8oFxuICBkaWN0LmltZ3ByZXYgPSBmdW5jdGlvbihrZXkpe1xuICAgIGRpY3QuaW1nSW5kZXgtLTtcbiAgICBpZihkaWN0LmltZ0luZGV4IDwgMSl7XG4gICAgICBkaWN0LmltZ0luZGV4ID0gZGF0YS5sZW5ndGg7XG4gICAgfVxuICAgIGRpY3QudGFiaW1nKGtleSk7XG4gIH07XG4gIFxuICAvL+S4i+S4gOW8oFxuICBkaWN0LmltZ25leHQgPSBmdW5jdGlvbihrZXksZXJyb3JNc2cpe1xuICAgIGRpY3QuaW1nSW5kZXgrKztcbiAgICBpZihkaWN0LmltZ0luZGV4ID4gZGF0YS5sZW5ndGgpe1xuICAgICAgZGljdC5pbWdJbmRleCA9IDE7XG4gICAgICBpZiAoZXJyb3JNc2cpIHtyZXR1cm59O1xuICAgIH1cbiAgICBkaWN0LnRhYmltZyhrZXkpXG4gIH07XG4gIFxuICAvL+aWueWQkemUrlxuICBkaWN0LmtleXVwID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgIGlmKCFkaWN0LmVuZCl7XG4gICAgICB2YXIgY29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYoY29kZSA9PT0gMzcpe1xuICAgICAgICBkaWN0LmltZ3ByZXYodHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYoY29kZSA9PT0gMzkpIHtcbiAgICAgICAgZGljdC5pbWduZXh0KHRydWUpO1xuICAgICAgfSBlbHNlIGlmKGNvZGUgPT09IDI3KSB7XG4gICAgICAgIGxheWVyLmNsb3NlKGRpY3QuaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLy/liIfmjaJcbiAgZGljdC50YWJpbWcgPSBmdW5jdGlvbihrZXkpe1xuICAgIGlmKGRhdGEubGVuZ3RoIDw9IDEpIHJldHVybjtcbiAgICBwaG90b3Muc3RhcnQgPSBkaWN0LmltZ0luZGV4IC0gMTtcbiAgICBsYXllci5jbG9zZShkaWN0LmluZGV4KTtcbiAgICBsYXllci5waG90b3Mob3B0aW9ucywgdHJ1ZSwga2V5KTtcbiAgfVxuICBcbiAgLy/kuIDkupvliqjkvZxcbiAgZGljdC5ldmVudCA9IGZ1bmN0aW9uKCl7XG4gICAgZGljdC5iaWdpbWcuaG92ZXIoZnVuY3Rpb24oKXtcbiAgICAgIGRpY3QuaW1nc2VlLnNob3coKTtcbiAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgZGljdC5pbWdzZWUuaGlkZSgpO1xuICAgIH0pO1xuICAgIFxuICAgIGRpY3QuYmlnaW1nLmZpbmQoJy5sYXl1aS1sYXllci1pbWdwcmV2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRpY3QuaW1ncHJldigpO1xuICAgIH0pOyAgXG4gICAgXG4gICAgZGljdC5iaWdpbWcuZmluZCgnLmxheXVpLWxheWVyLWltZ25leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7ICAgICBcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkaWN0LmltZ25leHQoKTtcbiAgICB9KTtcbiAgICBcbiAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCBkaWN0LmtleXVwKTtcbiAgfTtcbiAgXG4gIC8v5Zu+54mH6aKE5Yqg6L29XG4gIGZ1bmN0aW9uIGxvYWRJbWFnZSh1cmwsIGNhbGxiYWNrLCBlcnJvcikgeyAgIFxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gdXJsOyBcbiAgICBpZihpbWcuY29tcGxldGUpe1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGltZyk7XG4gICAgfVxuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgICAgaW1nLm9ubG9hZCA9IG51bGw7XG4gICAgICBjYWxsYmFjayhpbWcpO1xuICAgIH07XG4gICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbihlKXtcbiAgICAgIGltZy5vbmVycm9yID0gbnVsbDtcbiAgICAgIGVycm9yKGUpO1xuICAgIH07ICBcbiAgfTtcbiAgXG4gIGRpY3QubG9hZGkgPSBsYXllci5sb2FkKDEsIHtcbiAgICBzaGFkZTogJ3NoYWRlJyBpbiBvcHRpb25zID8gZmFsc2UgOiAwLjksXG4gICAgc2Nyb2xsYmFyOiBmYWxzZVxuICB9KTtcbiAgbG9hZEltYWdlKGRhdGFbc3RhcnRdLnNyYywgZnVuY3Rpb24oaW1nKXtcbiAgICBsYXllci5jbG9zZShkaWN0LmxvYWRpKTtcbiAgICBkaWN0LmluZGV4ID0gbGF5ZXIub3BlbigkLmV4dGVuZCh7XG4gICAgICB0eXBlOiAxLFxuICAgICAgYXJlYTogZnVuY3Rpb24oKXtcbiAgICAgICAgIHZhciBpbWdhcmVhID0gW2ltZy53aWR0aCwgaW1nLmhlaWdodF07XG4gICAgICAgICB2YXIgd2luYXJlYSA9IFskKHdpbmRvdykud2lkdGgoKSAtIDUwLCAkKHdpbmRvdykuaGVpZ2h0KCkgLSA1MF07XG4gICAgICAgICBpZighb3B0aW9ucy5mdWxsICYmIGltZ2FyZWFbMF0gPiB3aW5hcmVhWzBdKXtcbiAgICAgICAgICAgaW1nYXJlYVswXSA9IHdpbmFyZWFbMF07XG4gICAgICAgICAgIGltZ2FyZWFbMV0gPSBpbWdhcmVhWzBdKmltZy5oZWlnaHQvaW1nLndpZHRoO1xuICAgICAgICAgfVxuICAgICAgICAgcmV0dXJuIFtpbWdhcmVhWzBdKydweCcsIGltZ2FyZWFbMV0rJ3B4J107IFxuICAgICAgfSgpLFxuICAgICAgdGl0bGU6IGZhbHNlLFxuICAgICAgc2hhZGU6IDAuOSxcbiAgICAgIHNoYWRlQ2xvc2U6IHRydWUsXG4gICAgICBjbG9zZUJ0bjogZmFsc2UsXG4gICAgICBtb3ZlOiAnLmxheXVpLWxheWVyLXBoaW1nIGltZycsXG4gICAgICBtb3ZlVHlwZTogMSxcbiAgICAgIHNjcm9sbGJhcjogZmFsc2UsXG4gICAgICBtb3ZlT3V0OiB0cnVlLFxuICAgICAgc2hpZnQ6IE1hdGgucmFuZG9tKCkqNXwwLFxuICAgICAgc2tpbjogJ2xheXVpLWxheWVyLXBob3RvcycgKyBza2luKCdwaG90b3MnKSxcbiAgICAgIGNvbnRlbnQ6ICc8ZGl2IGNsYXNzPVwibGF5dWktbGF5ZXItcGhpbWdcIj4nXG4gICAgICAgICsnPGltZyBzcmM9XCInKyBkYXRhW3N0YXJ0XS5zcmMgKydcIiBhbHQ9XCInKyAoZGF0YVtzdGFydF0uYWx0fHwnJykgKydcIiBsYXllci1waWQ9XCInKyBkYXRhW3N0YXJ0XS5waWQgKydcIj4nXG4gICAgICAgICsnPGRpdiBjbGFzcz1cImxheXVpLWxheWVyLWltZ3NlZVwiPidcbiAgICAgICAgICArKGRhdGEubGVuZ3RoID4gMSA/ICc8c3BhbiBjbGFzcz1cImxheXVpLWxheWVyLWltZ3VpZGVcIj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJsYXl1aS1sYXllci1pY29uZXh0IGxheXVpLWxheWVyLWltZ3ByZXZcIj48L2E+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibGF5dWktbGF5ZXItaWNvbmV4dCBsYXl1aS1sYXllci1pbWduZXh0XCI+PC9hPjwvc3Bhbj4nIDogJycpXG4gICAgICAgICAgKyc8ZGl2IGNsYXNzPVwibGF5dWktbGF5ZXItaW1nYmFyXCIgc3R5bGU9XCJkaXNwbGF5OicrIChrZXkgPyAnYmxvY2snIDogJycpICsnXCI+PHNwYW4gY2xhc3M9XCJsYXl1aS1sYXllci1pbWd0aXRcIj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+JysgKGRhdGFbc3RhcnRdLmFsdHx8JycpICsnPC9hPjxlbT4nKyBkaWN0LmltZ0luZGV4ICsnLycrIGRhdGEubGVuZ3RoICsnPC9lbT48L3NwYW4+PC9kaXY+J1xuICAgICAgICArJzwvZGl2PidcbiAgICAgICsnPC9kaXY+JyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGxheWVybywgaW5kZXgpe1xuICAgICAgICBkaWN0LmJpZ2ltZyA9IGxheWVyby5maW5kKCcubGF5dWktbGF5ZXItcGhpbWcnKTtcbiAgICAgICAgZGljdC5pbWdzZWUgPSBsYXllcm8uZmluZCgnLmxheXVpLWxheWVyLWltZ3VpZGUsLmxheXVpLWxheWVyLWltZ2JhcicpO1xuICAgICAgICBkaWN0LmV2ZW50KGxheWVybyk7XG4gICAgICAgIG9wdGlvbnMudGFiICYmIG9wdGlvbnMudGFiKGRhdGFbc3RhcnRdLCBsYXllcm8pO1xuICAgICAgfSwgZW5kOiBmdW5jdGlvbigpe1xuICAgICAgICBkaWN0LmVuZCA9IHRydWU7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAnLCBkaWN0LmtleXVwKTtcbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKSk7XG4gIH0sIGZ1bmN0aW9uKCl7XG4gICAgbGF5ZXIuY2xvc2UoZGljdC5sb2FkaSk7XG4gICAgbGF5ZXIubXNnKCcmI3g1RjUzOyYjeDUyNEQ7JiN4NTZGRTsmI3g3MjQ3OyYjeDU3MzA7JiN4NTc0MDsmI3g1RjAyOyYjeDVFMzg7PGJyPiYjeDY2MkY7JiN4NTQyNjsmI3g3RUU3OyYjeDdFRUQ7JiN4NjdFNTsmI3g3NzBCOyYjeDRFMEI7JiN4NEUwMDsmI3g1RjIwOyYjeEZGMUY7Jywge1xuICAgICAgdGltZTogMzAwMDAsIFxuICAgICAgYnRuOiBbJyYjeDRFMEI7JiN4NEUwMDsmI3g1RjIwOycsICcmI3g0RTBEOyYjeDc3MEI7JiN4NEU4NjsnXSwgXG4gICAgICB5ZXM6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGRhdGEubGVuZ3RoID4gMSAmJiBkaWN0LmltZ25leHQodHJ1ZSx0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vL+S4u+WFpeWPo1xucmVhZHkucnVuID0gZnVuY3Rpb24oKXtcbiAgJCA9IGpRdWVyeTsgXG4gIHdpbiA9ICQod2luZG93KTtcbiAgZG9tcy5odG1sID0gJCgnaHRtbCcpO1xuICBsYXllci5vcGVuID0gZnVuY3Rpb24oZGVsaXZlcil7XG4gICAgdmFyIG8gPSBuZXcgQ2xhc3MoZGVsaXZlcik7XG4gICAgcmV0dXJuIG8uaW5kZXg7XG4gIH07XG59O1xuXG4nZnVuY3Rpb24nID09PSB0eXBlb2YgZGVmaW5lID8gZGVmaW5lKGZ1bmN0aW9uKCl7XG4gIHJlYWR5LnJ1bigpO1xuICByZXR1cm4gbGF5ZXI7XG59KSA6IGZ1bmN0aW9uKCl7XG4gICByZWFkeS5ydW4oKTtcbiAgIGxheWVyLnVzZSgnc2tpbi9sYXllci5jc3MnKTtcbn0oKTtcblxufSh3aW5kb3cpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvbGF5ZXIvYXBwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2JnLmI0NWU1ODYzLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9iZy5qcGdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==