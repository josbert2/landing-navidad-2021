function At(n, t) {
   for (var i = 0; i < t.length; i++) {
       var r = t[i];
       r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
   }
}
/*!
* Splide.js
* Version  : 3.6.8
* License  : MIT
* Copyright: 2021 Naotoshi Fujita
*/
var n, t;
n = this, t = function() {
   "use strict";
   var m = "splide",
       a = "data-" + m,
       n = {
           CREATED: 1,
           MOUNTED: 2,
           IDLE: 3,
           MOVING: 4,
           DESTROYED: 5
       },
       R = 10;

   function _(n) {
       n.length = 0
   }

   function I(n) {
       return !u(n) && "object" == typeof n
   }

   function r(n) {
       return Array.isArray(n)
   }

   function D(n) {
       return "string" == typeof n
   }

   function M(n) {
       return void 0 === n
   }

   function u(n) {
       return null === n
   }

   function y(n) {
       return n instanceof HTMLElement
   }

   function w(n) {
       return r(n) ? n : [n]
   }

   function b(n, t) {
       w(n).forEach(t)
   }

   function x(n, t) {
       return -1 < n.indexOf(t)
   }

   function k(n, t) {
       return n.push.apply(n, w(t)), n
   }
   var o = Array.prototype;

   function s(n, t, i) {
       return o.slice.call(n, t, i)
   }

   function E(t, n, i) {
       t && b(n, function(n) {
           n && t.classList[i ? "add" : "remove"](n)
       })
   }

   function A(n, t) {
       E(n, D(t) ? t.split(" ") : t, !0)
   }

   function L(n, t) {
       b(t, n.appendChild.bind(n))
   }

   function S(n, i) {
       b(n, function(n) {
           var t = i.parentNode;
           t && t.insertBefore(n, i)
       })
   }

   function W(n, t) {
       return y(n) && (n.msMatchesSelector || n.matches).call(n, t)
   }

   function z(n, t) {
       return n ? s(n.children).filter(function(n) {
           return W(n, t)
       }) : []
   }

   function P(n, t) {
       return t ? z(n, t)[0] : n.firstElementChild
   }

   function e(n, t, i) {
       if (n)
           for (var r = Object.keys(n), r = i ? r.reverse() : r, u = 0; u < r.length; u++) {
               var o = r[u];
               if ("__proto__" !== o && !1 === t(n[o], o)) break
           }
       return n
   }

   function O(r) {
       return s(arguments, 1).forEach(function(i) {
           e(i, function(n, t) {
               r[t] = i[t]
           })
       }), r
   }

   function l(i, n) {
       return e(n, function(n, t) {
           r(n) ? i[t] = n.slice() : I(n) ? i[t] = l(I(i[t]) ? i[t] : {}, n) : i[t] = n
       }), i
   }

   function T(t, n) {
       t && b(n, function(n) {
           t.removeAttribute(n)
       })
   }

   function j(i, n, t) {
       I(n) ? e(n, function(n, t) {
           j(i, t, n)
       }) : u(t) ? T(i, n) : i.setAttribute(n, String(t))
   }

   function F(n, t, i) {
       n = document.createElement(n);
       return t && (D(t) ? A : j)(n, t), i && L(i, n), n
   }

   function C(n, t, i) {
       if (M(i)) return getComputedStyle(n)[t];
       u(i) || (n = n.style)[t] !== (i = "" + i) && (n[t] = i)
   }

   function N(n, t) {
       C(n, "display", t)
   }

   function X(n, t) {
       return n.getAttribute(t)
   }

   function B(n, t) {
       return n && n.classList.contains(t)
   }

   function G(n) {
       return n.getBoundingClientRect()
   }

   function H(n) {
       b(n, function(n) {
           n && n.parentNode && n.parentNode.removeChild(n)
       })
   }

   function Y(n) {
       return P((new DOMParser).parseFromString(n, "text/html").body)
   }

   function U(n, t) {
       n.preventDefault(), t && (n.stopPropagation(), n.stopImmediatePropagation())
   }

   function q(n, t) {
       return n && n.querySelector(t)
   }

   function J(n, t) {
       return s(n.querySelectorAll(t))
   }

   function K(n, t) {
       E(n, t, !1)
   }

   function V(n) {
       return D(n) ? n : n ? n + "px" : ""
   }

   function Q(n, t) {
       if (void 0 === t && (t = ""), !n) throw new Error("[" + m + "] " + t)
   }

   function g(n) {
       setTimeout(n)
   }

   function Z() {}

   function v(n) {
       return requestAnimationFrame(n)
   }
   var $ = Math.min,
       nn = Math.max,
       tn = Math.floor,
       rn = Math.ceil,
       un = Math.abs;

   function on(n, t, i, r) {
       var u = $(t, i),
           i = nn(t, i);
       return r ? u < n && n < i : u <= n && n <= i
   }

   function en(n, t, i) {
       var r = $(t, i),
           i = nn(t, i);
       return $(nn(r, n), i)
   }

   function cn(n) {
       return (0 < n) - (n < 0)
   }

   function fn(t, n) {
       return b(n, function(n) {
           t = t.replace("%s", "" + n)
       }), t
   }

   function an(n) {
       return n < 10 ? "0" + n : "" + n
   }
   var sn = {};

   function c() {
       var o = {};

       function r(n, r) {
           t(n, function(n, t) {
               var i = o[n];
               o[n] = i && i.filter(function(n) {
                   return n.n ? n.n !== r : r || n.t !== t
               })
           })
       }

       function t(n, t) {
           w(n).join(" ").split(" ").forEach(function(n) {
               n = n.split(".");
               t(n[0], n[1])
           })
       }
       return {
           on: function(n, i, r, u) {
               void 0 === u && (u = R), t(n, function(n, t) {
                   o[n] = o[n] || [], k(o[n], {
                       i: n,
                       r: i,
                       t: t,
                       u: u,
                       n: r
                   }).sort(function(n, t) {
                       return n.u - t.u
                   })
               })
           },
           off: r,
           offBy: function(i) {
               e(o, function(n, t) {
                   r(t, i)
               })
           },
           emit: function(n) {
               var t = arguments;
               (o[n] || []).forEach(function(n) {
                   n.r.apply(n, s(t, 1))
               })
           },
           destroy: function() {
               o = {}
           }
       }
   }
   var ln = "mounted",
       dn = "move",
       vn = "moved",
       hn = "shifted",
       pn = "click",
       gn = "active",
       mn = "inactive",
       yn = "visible",
       wn = "hidden",
       _n = "slide:keydown",
       bn = "refresh",
       xn = "updated",
       kn = "resize",
       An = "resized",
       Ln = "repositioned",
       En = "scrolled",
       f = "destroy",
       Sn = "navigation:mounted",
       zn = "lazyload:loaded";

   function Pn(n) {
       var r = n.event,
           u = {},
           o = [];

       function t(n, t, r) {
           e(n, t, function(t, i) {
               o = o.filter(function(n) {
                   return !!(n[0] !== t || n[1] !== i || r && n[2] !== r) || (t.removeEventListener(i, n[2], n[3]), !1)
               })
           })
       }

       function e(n, t, i) {
           b(n, function(n) {
               n && t.split(" ").forEach(i.bind(null, n))
           })
       }

       function i() {
           o = o.filter(function(n) {
               return t(n[0], n[1])
           }), r.offBy(u)
       }
       return r.on(f, i, u), {
           on: function(n, t, i) {
               r.on(n, t, u, i)
           },
           off: function(n) {
               r.off(n, u)
           },
           emit: r.emit,
           bind: function(n, t, i, r) {
               e(n, t, function(n, t) {
                   o.push([n, t, i, r]), n.addEventListener(t, i, r)
               })
           },
           unbind: t,
           destroy: i
       }
   }

   function Rn(t, i, r, u) {
       var o, n, e = Date.now,
           c = 0,
           f = !0,
           a = 0;

       function s() {
           if (!f) {
               var n = e() - o;
               if (t <= n ? (c = 1, o = e()) : c = n / t, r && r(c), 1 === c && (i(), u && ++a >= u)) return l();
               v(s)
           }
       }

       function l() {
           f = !0
       }

       function d() {
           cancelAnimationFrame(n), f = !(n = c = 0)
       }
       return {
           start: function(n) {
               n || d(), o = e() - (n ? c * t : 0), f = !1, v(s)
           },
           rewind: function() {
               o = e(), c = 0, r && r(c)
           },
           pause: l,
           cancel: d,
           set: function(n) {
               t = n
           },
           isPaused: function() {
               return f
           }
       }
   }

   function d(n) {
       var t = n;
       return {
           set: function(n) {
               t = n
           },
           is: function(n) {
               return x(w(n), t)
           }
       }
   }

   function Dn(i, r) {
       var u;
       return function() {
           var n = arguments,
               t = this;
           u || (u = Rn(r || 0, function() {
               i.apply(t, n), u = null
           }, null, 1)).start()
       }
   }
   var h = {
       marginRight: ["marginBottom", "marginLeft"],
       autoWidth: ["autoHeight"],
       fixedWidth: ["fixedHeight"],
       paddingLeft: ["paddingTop", "paddingRight"],
       paddingRight: ["paddingBottom", "paddingLeft"],
       width: ["height"],
       left: ["top", "right"],
       right: ["bottom", "left"],
       x: ["y"],
       X: ["Y"],
       Y: ["X"],
       ArrowLeft: ["ArrowUp", "ArrowRight"],
       ArrowRight: ["ArrowDown", "ArrowLeft"]
   };
   var Mn = m,
       On = m + "__slider",
       Tn = m + "__track",
       jn = m + "__list",
       Fn = m + "__slide",
       In = Fn + "--clone",
       Wn = Fn + "__container",
       Cn = m + "__arrows",
       t = m + "__arrow",
       Nn = t + "--prev",
       Xn = t + "--next",
       i = m + "__pagination",
       Bn = m + "__progress",
       Gn = Bn + "__bar",
       Hn = m + "__autoplay",
       Yn = m + "__play",
       Un = m + "__pause",
       qn = "is-active",
       Jn = "is-prev",
       Kn = "is-next",
       Vn = "is-visible",
       Qn = "is-loading",
       Zn = [qn, Vn, Jn, Kn, Qn];
   var $n = "role",
       nt = "aria-controls",
       tt = "aria-current",
       it = "aria-label",
       rt = "aria-hidden",
       ut = "tabindex",
       p = "aria-orientation",
       ot = [$n, nt, tt, it, rt, p, ut, "disabled"],
       et = "slide",
       ct = "loop",
       ft = "fade";

   function at(u, i, r, o) {
       var t, n = Pn(u),
           e = n.on,
           c = n.emit,
           f = n.bind,
           a = n.destroy,
           s = u.Components,
           l = u.root,
           d = u.options,
           v = d.isNavigation,
           h = d.updateOnMove,
           p = s.Direction.resolve,
           g = X(o, "style"),
           m = -1 < r,
           y = P(o, "." + Wn),
           w = d.focusableNodes && J(o, d.focusableNodes);

       function _() {
           var n = m ? r : i,
               t = fn(d.i18n.slideX, n + 1),
               n = u.splides.map(function(n) {
                   return n.splide.root.id
               }).join(" ");
           j(o, it, t), j(o, nt, n), j(o, $n, "menuitem"), k(A())
       }

       function b() {
           t || x()
       }

       function x() {
           var n;
           t || (n = u.index, k(A()), function(n) {
               var t = !n && (!A() || m);
               j(o, rt, t || null), j(o, ut, !t && d.slideFocus ? 0 : null), w && w.forEach(function(n) {
                   j(n, ut, t ? -1 : null)
               });
               n !== B(o, Vn) && (E(o, Vn, n), c(n ? yn : wn, L))
           }(function() {
               if (u.is(ft)) return A();
               var n = G(s.Elements.track),
                   t = G(o),
                   i = p("left"),
                   r = p("right");
               return tn(n[i]) <= rn(t[i]) && tn(t[r]) <= rn(n[r])
           }()), E(o, Jn, i === n - 1), E(o, Kn, i === n + 1))
       }

       function k(n) {
           n !== B(o, qn) && (E(o, qn, n), v && j(o, tt, n || null), c(n ? gn : mn, L))
       }

       function A() {
           var n = u.index;
           return n === i || d.cloneStatus && n === r
       }
       var L = {
           index: i,
           slideIndex: r,
           slide: o,
           container: y,
           isClone: m,
           mount: function() {
               m || (o.id = l.id + "-slide" + an(i + 1)), f(o, "click keydown", function(n) {
                   c("click" === n.type ? pn : _n, L, n)
               }), e([bn, Ln, hn, vn, En], x), e(Sn, _), h && e(dn, b)
           },
           destroy: function() {
               t = !0, a(), K(o, Zn), T(o, ot), j(o, "style", g)
           },
           update: x,
           style: function(n, t, i) {
               C(i && y || o, n, t)
           },
           isWithin: function(n, t) {
               return n = un(n - i), (n = !m && (d.rewind || u.is(ct)) ? $(n, u.length - n) : n) <= t
           }
       };
       return L
   }
   var st = a + "-interval";
   var lt = {
           passive: !1,
           capture: !0
       },
       dt = "touchmove mousemove",
       vt = "touchend touchcancel mouseup";
   var ht = ["Left", "Right", "Up", "Down"],
       pt = "keydown";
   var gt = a + "-lazy",
       mt = gt + "-srcset",
       yt = "[" + gt + "], [" + mt + "]";
   var wt = [" ", "Enter", "Spacebar"];
   var _t = Object.freeze({
           __proto__: null,
           Options: function(t, n, r) {
               var u, o, i, e = Dn(f);

               function c(n) {
                   n && removeEventListener("resize", e)
               }

               function f() {
                   var n, n = (n = function(n) {
                       return n[1].matches
                   }, s(o).filter(n)[0] || []);
                   n[0] !== i && function(n) {
                       n = r.breakpoints[n] || u;
                       n.destroy ? (t.options = u, t.destroy("completely" === n.destroy)) : (t.state.is(5) && (c(!0), t.mount()), t.options = n)
                   }(i = n[0])
               }
               return {
                   setup: function() {
                       try {
                           l(r, JSON.parse(X(t.root, a)))
                       } catch (n) {
                           Q(!1, n.message)
                       }
                       u = l({}, r);
                       var i, n = r.breakpoints;
                       n && (i = "min" === r.mediaQuery, o = Object.keys(n).sort(function(n, t) {
                           return i ? +t - +n : +n - +t
                       }).map(function(n) {
                           return [n, matchMedia("(" + (i ? "min" : "max") + "-width:" + n + "px)")]
                       }), f())
                   },
                   mount: function() {
                       o && addEventListener("resize", e)
                   },
                   destroy: c
               }
           },
           Direction: function(n, t, r) {
               return {
                   resolve: function(n, t) {
                       var i = r.direction;
                       return h[n]["rtl" !== i || t ? "ttb" === i ? 0 : -1 : 1] || n
                   },
                   orient: function(n) {
                       return n * ("rtl" === r.direction ? 1 : -1)
                   }
               }
           },
           Elements: function(n, t, i) {
               var r, u, o, e, c = Pn(n).on,
                   f = n.root,
                   a = {},
                   s = [];

               function l() {
                   var n;
                   ! function() {
                       u = P(f, "." + On), o = q(f, "." + Tn), e = P(o, "." + jn), Q(o && e, "A track/list element is missing."), k(s, z(e, "." + Fn + ":not(." + In + ")"));
                       var n = p("." + Hn),
                           t = p("." + Cn);
                       O(a, {
                           root: f,
                           slider: u,
                           track: o,
                           list: e,
                           slides: s,
                           arrows: t,
                           autoplay: n,
                           prev: q(t, "." + Nn),
                           next: q(t, "." + Xn),
                           bar: q(p("." + Bn), "." + Gn),
                           play: q(n, "." + Yn),
                           pause: q(n, "." + Un)
                       })
                   }(), n = f.id || function(n) {
                       return "" + n + an(sn[n] = (sn[n] || 0) + 1)
                   }(m), f.id = n, o.id = o.id || n + "-track", e.id = e.id || n + "-list", A(f, r = g())
               }

               function d() {
                   [f, o, e].forEach(function(n) {
                       T(n, "style")
                   }), _(s), K(f, r)
               }

               function v() {
                   d(), l()
               }

               function h() {
                   K(f, r), A(f, r = g())
               }

               function p(n) {
                   return P(f, n) || P(u, n)
               }

               function g() {
                   return [Mn + "--" + i.type, Mn + "--" + i.direction, i.drag && Mn + "--draggable", i.isNavigation && Mn + "--nav", qn]
               }
               return O(a, {
                   setup: l,
                   mount: function() {
                       c(bn, v, R - 2), c(xn, h)
                   },
                   destroy: d
               })
           },
           Slides: function(r, u, o) {
               var n = Pn(r),
                   t = n.on,
                   e = n.emit,
                   c = n.bind,
                   f = (n = u.Elements).slides,
                   a = n.list,
                   s = [];

               function i() {
                   f.forEach(function(n, t) {
                       v(n, t, -1)
                   })
               }

               function l() {
                   p(function(n) {
                       n.destroy()
                   }), _(s)
               }

               function d() {
                   l(), i()
               }

               function v(n, t, i) {
                   n = at(r, t, i, n);
                   n.mount(), s.push(n)
               }

               function h(n) {
                   return n ? g(function(n) {
                       return !n.isClone
                   }) : s
               }

               function p(n, t) {
                   h(t).forEach(n)
               }

               function g(t) {
                   return s.filter("function" == typeof t ? t : function(n) {
                       return D(t) ? W(n.slide, t) : x(w(t), n.index)
                   })
               }
               return {
                   mount: function() {
                       i(), t(bn, d), t([ln, bn], function() {
                           s.sort(function(n, t) {
                               return n.index - t.index
                           })
                       })
                   },
                   destroy: l,
                   update: function() {
                       p(function(n) {
                           n.update()
                       })
                   },
                   register: v,
                   get: h,
                   getIn: function(n) {
                       var t = u.Controller,
                           i = t.toIndex(n),
                           r = t.hasFocus() ? 1 : o.perPage;
                       return g(function(n) {
                           return on(n.index, i, i + r - 1)
                       })
                   },
                   getAt: function(n) {
                       return g(n)[0]
                   },
                   add: function(n, u) {
                       b(n, function(n) {
                           var t, i, r;
                           y(n = D(n) ? Y(n) : n) && ((t = f[u]) ? S(n, t) : L(a, n), A(n, o.classes.slide), n = n, i = e.bind(null, kn), n = J(n, "img"), (r = n.length) ? n.forEach(function(n) {
                               c(n, "load error", function() {
                                   --r || i()
                               })
                           }) : i())
                       }), e(bn)
                   },
                   remove: function(n) {
                       H(g(n).map(function(n) {
                           return n.slide
                       })), e(bn)
                   },
                   forEach: p,
                   filter: g,
                   style: function(t, i, r) {
                       p(function(n) {
                           n.style(t, i, r)
                       })
                   },
                   getLength: function(n) {
                       return (n ? f : s).length
                   },
                   isEnough: function() {
                       return s.length > o.perPage
                   }
               }
           },
           Layout: function(n, t, i) {
               var r, u, o = Pn(n),
                   e = o.on,
                   c = o.bind,
                   f = o.emit,
                   a = t.Slides,
                   s = t.Direction.resolve,
                   l = (t = t.Elements).root,
                   d = t.track,
                   v = t.list,
                   h = a.getAt;

               function p() {
                   u = null, r = "ttb" === i.direction, C(l, "maxWidth", V(i.width)), C(d, s("paddingLeft"), m(!1)), C(d, s("paddingRight"), m(!0)), g()
               }

               function g() {
                   var n = G(l);
                   u && u.width === n.width && u.height === n.height || (C(d, "height", function() {
                       var n = "";
                       r && (Q(n = y(), "height or heightRatio is missing."), n = "calc(" + n + " - " + m(!1) + " - " + m(!0) + ")");
                       return n
                   }()), a.style(s("marginRight"), V(i.gap)), a.style("width", (i.autoWidth ? "" : V(i.fixedWidth) || (r ? "" : w())) || null), a.style("height", V(i.fixedHeight) || (r ? i.autoHeight ? "" : w() : y()) || null, !0), u = n, f(An))
               }

               function m(n) {
                   var t = i.padding,
                       n = s(n ? "right" : "left");
                   return t && V(t[n] || (I(t) ? 0 : t)) || "0px"
               }

               function y() {
                   return V(i.height || G(v).width * i.heightRatio)
               }

               function w() {
                   var n = V(i.gap);
                   return "calc((100%" + (n && " + " + n) + ")/" + (i.perPage || 1) + (n && " - " + n) + ")"
               }

               function _(n, t) {
                   var i = h(n);
                   if (i) {
                       n = G(i.slide)[s("right")], i = G(v)[s("left")];
                       return un(n - i) + (t ? 0 : b())
                   }
                   return 0
               }

               function b() {
                   var n = h(0);
                   return n && parseFloat(C(n.slide, s("marginRight"))) || 0
               }
               return {
                   mount: function() {
                       p(), c(window, "resize load", Dn(f.bind(this, kn))), e([xn, bn], p), e(kn, g)
                   },
                   listSize: function() {
                       return G(v)[s("width")]
                   },
                   slideSize: function(n, t) {
                       return (n = h(n || 0)) ? G(n.slide)[s("width")] + (t ? 0 : b()) : 0
                   },
                   sliderSize: function() {
                       return _(n.length - 1, !0) - _(-1, !0)
                   },
                   totalSize: _,
                   getPadding: function(n) {
                       return parseFloat(C(d, s("padding" + (n ? "Right" : "Left")))) || 0
                   }
               }
           },
           Clones: function(c, n, f) {
               var t, i = Pn(c),
                   r = i.on,
                   u = i.emit,
                   a = n.Elements,
                   s = n.Slides,
                   o = n.Direction.resolve,
                   l = [];

               function e() {
                   (t = p()) && (function(u) {
                       var o = s.get().slice(),
                           e = o.length;
                       if (e) {
                           for (; o.length < u;) k(o, o);
                           k(o.slice(-u), o.slice(0, u)).forEach(function(n, t) {
                               var i = t < u,
                                   r = function(n, t) {
                                       n = n.cloneNode(!0);
                                       return A(n, f.classes.clone), n.id = c.root.id + "-clone" + an(t + 1), n
                                   }(n.slide, t);
                               i ? S(r, o[0].slide) : L(a.list, r), k(l, r), s.register(r, t - u + (i ? 0 : e), n.index)
                           })
                       }
                   }(t), u(kn))
               }

               function d() {
                   H(l), _(l)
               }

               function v() {
                   d(), e()
               }

               function h() {
                   t < p() && u(bn)
               }

               function p() {
                   var n, t, i = f.clones;
                   return c.is(ct) ? i || (n = a.list, D(t = f[o("fixedWidth")]) && (t = G(n = F("div", {
                       style: "width: " + t + "; position: absolute;"
                   }, n)).width, H(n)), i = ((t = t) && rn(G(a.track)[o("width")] / t) || f[o("autoWidth")] && c.length || f.perPage) * (f.drag ? (f.flickMaxPages || 1) + 1 : 2)) : i = 0, i
               }
               return {
                   mount: function() {
                       e(), r(bn, v), r([xn, kn], h)
                   },
                   destroy: d
               }
           },
           Move: function(e, c, f) {
               var a, n = Pn(e),
                   t = n.on,
                   s = n.emit,
                   r = (n = c.Layout).slideSize,
                   i = n.getPadding,
                   u = n.totalSize,
                   o = n.listSize,
                   l = n.sliderSize,
                   d = (n = c.Direction).resolve,
                   v = n.orient,
                   h = (n = c.Elements).list,
                   p = n.track;

               function g() {
                   k() || (c.Scroll.cancel(), m(e.index), s(Ln))
               }

               function m(n) {
                   y(_(n, !0))
               }

               function y(n, t) {
                   e.is(ft) || (t = t ? n : function(n) {
                       {
                           var t, i;
                           e.is(ct) && (i = v(n - b()), t = A(!1, n) && i < 0, i = A(!0, n) && 0 < i, (t || i) && (n = w(n, i)))
                       }
                       return n
                   }(n), h.style.transform = "translate" + d("X") + "(" + t + "px)", n !== t && s(hn))
               }

               function w(n, t) {
                   var i = n - x(t),
                       r = l();
                   return n -= v(r * (rn(un(i) / r) || 1)) * (t ? 1 : -1)
               }

               function _(n, t) {
                   var i, i = v(u(n - 1) - (i = n, "center" === (n = f.focus) ? (o() - r(i, !0)) / 2 : +n * r(i) || 0));
                   return t ? function(n) {
                       f.trimSpace && e.is(et) && (n = en(n, 0, v(l() - o())));
                       return n
                   }(i) : i
               }

               function b() {
                   var n = d("left");
                   return G(h)[n] - G(p)[n] + v(i(!1))
               }

               function x(n) {
                   return _(n ? c.Controller.getEnd() : 0, !!f.trimSpace)
               }

               function k() {
                   return e.state.is(4) && f.waitForTransition
               }

               function A(n, t) {
                   t = M(t) ? b() : t;
                   var i = !0 !== n && v(t) < v(x(!1)),
                       t = !1 !== n && v(t) > v(x(!0));
                   return i || t
               }
               return {
                   mount: function() {
                       a = c.Transition, t([ln, An, xn, bn], g)
                   },
                   destroy: function() {
                       T(h, "style")
                   },
                   move: function(n, t, i, r) {
                       var u, o;
                       k() || (u = e.state.set, o = b(), n !== t && (a.cancel(), y(w(o, t < n), !0)), u(4), s(dn, t, i, n), a.start(t, function() {
                           u(3), s(vn, t, i, n), "move" === f.trimSpace && n !== i && o === b() ? c.Controller.go(i < n ? ">" : "<", !1, r) : r && r()
                       }))
                   },
                   jump: m,
                   translate: y,
                   shift: w,
                   cancel: function() {
                       y(b()), a.cancel()
                   },
                   toIndex: function(n) {
                       for (var t = c.Slides.get(), i = 0, r = 1 / 0, u = 0; u < t.length; u++) {
                           var o = t[u].index,
                               e = un(_(o, !0) - n);
                           if (!(e <= r)) break;
                           r = e, i = o
                       }
                       return i
                   },
                   toPosition: _,
                   getPosition: b,
                   getLimit: x,
                   isBusy: k,
                   exceededLimit: A
               }
           },
           Controller: function(n, e, u) {
               var o, c, f, t = Pn(n).on,
                   a = e.Move,
                   s = a.getPosition,
                   l = a.getLimit,
                   i = e.Slides,
                   d = i.isEnough,
                   r = i.getLength,
                   v = n.is(ct),
                   h = n.is(et),
                   p = u.start || 0,
                   g = p;

               function m() {
                   o = r(!0), c = u.perMove, f = u.perPage, p = en(p, 0, o - 1)
               }

               function y(n, t, i, r, u) {
                   var o = t ? n : S(n);
                   e.Scroll.scroll(t || i ? a.toPosition(o, !0) : n, r, function() {
                       z(a.toIndex(a.getPosition())), u && u()
                   })
               }

               function w(n) {
                   return b(!1, n)
               }

               function _(n) {
                   return b(!0, n)
               }

               function b(n, t) {
                   var i, r, u = c || (P() ? 1 : f),
                       o = x(p + u * (n ? -1 : 1), p);
                   return -1 !== o || !h || (i = s(), r = l(!n), u = 1, un(i - r) < u) ? t ? o : A(o) : n ? 0 : k()
               }

               function x(n, t, i) {
                   var r;
                   return d() ? (r = k(), n < 0 || r < n ? n = on(0, n, t, !0) || on(r, t, n, !0) ? L(E(n)) : v ? c || P() ? n : n < 0 ? -(o % f || f) : o : u.rewind ? n < 0 ? r : 0 : -1 : i || n === t || (n = c ? n : L(E(t) + (n < t ? -1 : 1)))) : n = -1, n
               }

               function k() {
                   var n = o - f;
                   return (P() || v && c) && (n = o - 1), nn(n, 0)
               }

               function A(n) {
                   return v ? d() ? n % o + (n < 0 ? o : 0) : -1 : n
               }

               function L(n) {
                   return en(P() ? n : f * n, 0, k())
               }

               function E(n) {
                   return P() || (n = on(n, o - f, o - 1) ? o - 1 : n, n = tn(n / f)), n
               }

               function S(n) {
                   n = a.toIndex(n);
                   return h ? en(n, 0, k()) : n
               }

               function z(n) {
                   n !== p && (g = p, p = n)
               }

               function P() {
                   return !M(u.focus) || u.isNavigation
               }
               return {
                   mount: function() {
                       m(), t([xn, bn], m, R - 1)
                   },
                   go: function(n, t, i) {
                       var r = function(n) {
                           var t = p; {
                               var i, r;
                               D(n) ? (r = n.match(/([+\-<>])(\d+)?/) || [], i = r[1], r = r[2], "+" === i || "-" === i ? t = x(p + +("" + i + (+r || 1)), p, !0) : ">" === i ? t = r ? L(+r) : w(!0) : "<" === i && (t = _(!0))) : t = v ? n : en(n, 0, k())
                           }
                           return t
                       }(n);
                       u.useScroll ? y(r, !0, !0, u.speed, i) : -1 < (n = A(r)) && !a.isBusy() && (t || n !== p) && (z(n), a.move(r, n, g, i))
                   },
                   scroll: y,
                   getNext: w,
                   getPrev: _,
                   getAdjacent: b,
                   getEnd: k,
                   setIndex: z,
                   getIndex: function(n) {
                       return n ? g : p
                   },
                   toIndex: L,
                   toPage: E,
                   toDest: S,
                   hasFocus: P
               }
           },
           Arrows: function(u, n, i) {
               var r, t = Pn(u),
                   o = t.on,
                   e = t.bind,
                   c = t.emit,
                   f = i.classes,
                   a = i.i18n,
                   s = n.Elements,
                   l = n.Controller,
                   d = s.arrows,
                   v = s.prev,
                   h = s.next,
                   p = {};

               function g() {
                   var n, t;
                   i.arrows && (v && h || (d = F("div", f.arrows), v = m(!0), h = m(!1), r = !0, L(d, [v, h]), S(d, P("slider" === i.arrows && s.slider || u.root)))), v && h && (p.prev ? N(d, !1 === i.arrows ? "none" : "") : (n = s.track.id, j(v, nt, n), j(h, nt, n), p.prev = v, p.next = h, t = l.go, o([ln, vn, xn, bn, En], y), e(h, "click", function() {
                       t(">", !0)
                   }), e(v, "click", function() {
                       t("<", !0)
                   }), c("arrows:mounted", v, h)))
               }

               function m(n) {
                   return Y('<button class="' + f.arrow + " " + (n ? f.prev : f.next) + '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="' + (i.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + '" />')
               }

               function y() {
                   var n = u.index,
                       t = l.getPrev(),
                       i = l.getNext(),
                       r = -1 < t && n < t ? a.last : a.prev,
                       n = -1 < i && i < n ? a.first : a.next;
                   v.disabled = t < 0, h.disabled = i < 0, j(v, it, r), j(h, it, n), c("arrows:updated", v, h, t, i)
               }
               return {
                   arrows: p,
                   mount: function() {
                       g(), o(xn, g)
                   },
                   destroy: function() {
                       r ? H(d) : (T(v, ot), T(h, ot))
                   }
               }
           },
           Autoplay: function(t, i, r) {
               var u, o, e, n = Pn(t),
                   c = n.on,
                   f = n.bind,
                   a = n.emit,
                   s = Rn(r.interval, t.go.bind(t, ">"), function(n) {
                       var t = d.bar;
                       t && C(t, "width", 100 * n + "%"), a("autoplay:playing", n)
                   }),
                   l = s.isPaused,
                   d = i.Elements;

               function v(n) {
                   var t = n ? "pause" : "play",
                       i = d[t];
                   i && (j(i, nt, d.track.id), j(i, it, r.i18n[t]), f(i, "click", n ? p : h))
               }

               function h() {
                   l() && i.Slides.isEnough() && (s.start(!r.resetProgress), o = u = e = !1, a("autoplay:play"))
               }

               function p(n) {
                   void 0 === n && (n = !0), l() || (s.pause(), a("autoplay:pause")), e = n
               }

               function g() {
                   e || (u || o ? p(!1) : h())
               }

               function m() {
                   var n = i.Slides.getAt(t.index);
                   s.set(n && +X(n.slide, st) || r.interval)
               }
               return {
                   mount: function() {
                       var n = r.autoplay;
                       n && (v(!0), v(!1), function() {
                           var n = d.root;
                           r.pauseOnHover && f(n, "mouseenter mouseleave", function(n) {
                               u = "mouseenter" === n.type, g()
                           });
                           r.pauseOnFocus && f(n, "focusin focusout", function(n) {
                               o = "focusin" === n.type, g()
                           });
                           c([dn, "scroll", bn], s.rewind), c(dn, m)
                       }(), "pause" !== n && h())
                   },
                   destroy: s.cancel,
                   play: h,
                   pause: p,
                   isPaused: l
               }
           },
           Cover: function(n, t, i) {
               var r = Pn(n).on;

               function u(i) {
                   t.Slides.forEach(function(n) {
                       var t = P(n.container || n.slide, "img");
                       t && t.src && o(i, t, n)
                   })
               }

               function o(n, t, i) {
                   i.style("background", n ? 'center/contain no-repeat url("' + t.src + '")' : "", !0), N(t, n ? "none" : "")
               }
               return {
                   mount: function() {
                       i.cover && (r(zn, function(n, t) {
                           o(!0, n, t)
                       }), r([ln, xn, bn], u.bind(null, !0)))
                   },
                   destroy: function() {
                       u(!1)
                   }
               }
           },
           Scroll: function(c, n, f) {
               var a, s, t = Pn(c),
                   i = t.on,
                   l = t.emit,
                   d = n.Move,
                   v = d.getPosition,
                   h = d.getLimit,
                   p = d.exceededLimit;

               function g(r, n, t, u) {
                   var i, o = v(),
                       e = 1;
                   n = n || (i = un(r - o), nn(i / 1.5, 800)), s = t, y(), a = Rn(n, m, function(n) {
                       var t = v(),
                           i = (o + (r - o) * (i = n, (n = f.easingFunc) ? n(i) : 1 - Math.pow(1 - i, 4)) - v()) * e;
                       d.translate(t + i), c.is(et) && !u && p() && (e *= .6, un(i) < 10 && (i = p(!1), g(h(!i), 600, null, !0)))
                   }, 1), l("scroll"), a.start()
               }

               function m() {
                   var n = v(),
                       t = d.toIndex(n);
                   on(t, 0, c.length - 1) || d.translate(d.shift(n, 0 < t), !0), s && s(), l(En)
               }

               function y() {
                   a && a.cancel()
               }

               function r() {
                   a && !a.isPaused() && (y(), m())
               }
               return {
                   mount: function() {
                       i(dn, y), i([xn, bn], r)
                   },
                   destroy: y,
                   scroll: g,
                   cancel: r
               }
           },
           Drag: function(u, o, e) {
               var c, f, a, s, l, d, v, r, h, n = Pn(u),
                   t = n.on,
                   p = n.emit,
                   g = n.bind,
                   m = n.unbind,
                   y = o.Move,
                   w = o.Scroll,
                   _ = o.Controller,
                   b = o.Elements.track,
                   i = (n = o.Direction).resolve,
                   x = n.orient,
                   k = y.getPosition,
                   A = y.exceededLimit,
                   L = !1;

               function E() {
                   var n = e.drag;
                   F(!n), l = "free" === n
               }

               function S(n) {
                   var t, i;
                   r || (t = e.noDrag, i = j(n), !(!t || !W(n.target, t)) || !i && n.button || (y.isBusy() ? U(n, !0) : (h = i ? b : window, s = a = null, v = !1, g(h, dt, z, lt), g(h, vt, P, lt), y.cancel(), w.cancel(), R(n))))
               }

               function z(n) {
                   var t, i, r;
                   s || p("drag"), (s = n).cancelable && (t = O(n) - O(f), d ? (y.translate(c + t / (L && u.is(et) ? 5 : 1)), i = 200 < T(n) - T(f), r = L !== (L = A()), (i || r) && R(n), p("dragging"), v = !0, U(n)) : (r = I(r = e.dragMinThreshold) ? r : {
                       mouse: 0,
                       touch: +r || 10
                   }, d = un(t) > (j(n) ? r.touch : r.mouse), M() && U(n)))
               }

               function P(n) {
                   m(h, dt, z), m(h, vt, P);
                   var t, i, r = u.index;
                   s ? ((d || n.cancelable && M()) && (t = function(n) {
                       if (u.is(ct) || !L) {
                           var t = f === s && a || f,
                               i = O(s) - O(t),
                               t = T(n) - T(t),
                               n = T(n) - T(s) < 200;
                           if (t && n) return i / t
                       }
                       return 0
                   }(n), i = t, i = k() + cn(i) * $(un(i) * (e.flickPower || 600), l ? 1 / 0 : o.Layout.listSize() * (e.flickMaxPages || 1)), l ? _.scroll(i) : u.is(ft) ? _.go(r + x(cn(t))) : _.go(_.toDest(i), !0), U(n)), p("dragged")) : l || k() === y.toPosition(r) || _.go(r, !0), d = !1
               }

               function R(n) {
                   a = f, f = n, c = k()
               }

               function D(n) {
                   !r && v && U(n, !0)
               }

               function M() {
                   var n = un(O(s) - O(f));
                   return un(O(s, !0) - O(f, !0)) < n
               }

               function O(n, t) {
                   return (j(n) ? n.touches[0] : n)["page" + i(t ? "Y" : "X")]
               }

               function T(n) {
                   return n.timeStamp
               }

               function j(n) {
                   return "undefined" != typeof TouchEvent && n instanceof TouchEvent
               }

               function F(n) {
                   r = n
               }
               return {
                   mount: function() {
                       g(b, dt, Z, lt), g(b, vt, Z, lt), g(b, "touchstart mousedown", S, lt), g(b, "click", D, {
                           capture: !0
                       }), g(b, "dragstart", U), t([ln, xn], E)
                   },
                   disable: F,
                   isDragging: function() {
                       return d
                   }
               }
           },
           Keyboard: function(t, n, i) {
               var r, u, o = Pn(t),
                   e = o.on,
                   c = o.bind,
                   f = o.unbind,
                   a = t.root,
                   s = n.Direction.resolve;

               function l() {
                   var n = i.keyboard;
                   n && ("focused" === n ? j(r = a, ut, 0) : r = window, c(r, pt, p))
               }

               function d() {
                   f(r, pt), y(r) && T(r, ut)
               }

               function v() {
                   var n = u;
                   u = !0, g(function() {
                       u = n
                   })
               }

               function h() {
                   d(), l()
               }

               function p(n) {
                   u || (n = n.key, (n = x(ht, n) ? "Arrow" + n : n) === s("ArrowLeft") ? t.go("<") : n === s("ArrowRight") && t.go(">"))
               }
               return {
                   mount: function() {
                       l(), e(xn, h), e(dn, v)
                   },
                   destroy: d,
                   disable: function(n) {
                       u = n
                   }
               }
           },
           LazyLoad: function(i, n, e) {
               var t = Pn(i),
                   r = t.on,
                   u = t.off,
                   o = t.bind,
                   c = t.emit,
                   f = "sequential" === e.lazyLoad,
                   a = [],
                   s = 0;

               function l() {
                   v(), d()
               }

               function d() {
                   n.Slides.forEach(function(o) {
                       J(o.slide, yt).forEach(function(n) {
                           var t, i, r = X(n, gt),
                               u = X(n, mt);
                           r === n.src && u === n.srcset || (t = e.classes.spinner, j(i = P(i = n.parentElement, "." + t) || F("span", t, i), $n, "presentation"), a.push({
                               o: n,
                               e: o,
                               src: r,
                               srcset: u,
                               c: i
                           }), n.src || N(n, "none"))
                       })
                   }), f && g()
               }

               function v() {
                   s = 0, a = []
               }

               function h() {
                   (a = a.filter(function(n) {
                       var t = e.perPage * ((e.preloadPages || 1) + 1) - 1;
                       return !n.e.isWithin(i.index, t) || p(n)
                   })).length || u(vn)
               }

               function p(t) {
                   var i = t.o;
                   A(t.e.slide, Qn), o(i, "load error", function(n) {
                       ! function(n, t) {
                           var i = n.e;
                           K(i.slide, Qn), t || (H(n.c), N(n.o, ""), c(zn, n.o, i), c(kn));
                           f && g()
                       }(t, "error" === n.type)
                   }), ["src", "srcset"].forEach(function(n) {
                       t[n] && (j(i, n, t[n]), T(i, "src" === n ? gt : mt))
                   })
               }

               function g() {
                   s < a.length && p(a[s++])
               }
               return {
                   mount: function() {
                       e.lazyLoad && (d(), r(bn, l), f || r([ln, bn, vn, En], h))
                   },
                   destroy: v
               }
           },
           Pagination: function(l, n, d) {
               var v, t = Pn(l),
                   i = t.on,
                   r = t.emit,
                   h = t.bind,
                   u = t.unbind,
                   p = n.Slides,
                   g = n.Elements,
                   o = n.Controller,
                   m = o.hasFocus,
                   e = o.getIndex,
                   y = [];

               function c() {
                   f(), d.pagination && p.isEnough() && (function() {
                       var n = l.length,
                           t = d.classes,
                           i = d.i18n,
                           r = d.perPage,
                           u = "slider" === d.pagination && g.slider || g.root,
                           o = m() ? n : rn(n / r);
                       v = F("ul", t.pagination, u);
                       for (var e = 0; e < o; e++) {
                           var c = F("li", null, v),
                               f = F("button", {
                                   class: t.page,
                                   type: "button"
                               }, c),
                               a = p.getIn(e).map(function(n) {
                                   return n.slide.id
                               }),
                               s = !m() && 1 < r ? i.pageX : i.slideX;
                           h(f, "click", w.bind(null, e)), j(f, nt, a.join(" ")), j(f, it, fn(s, e + 1)), y.push({
                               li: c,
                               button: f,
                               page: e
                           })
                       }
                   }(), r("pagination:mounted", {
                       list: v,
                       items: y
                   }, a(l.index)), s())
               }

               function f() {
                   v && (H(v), y.forEach(function(n) {
                       u(n.button, "click")
                   }), _(y), v = null)
               }

               function w(t) {
                   o.go(">" + t, !0, function() {
                       var n = p.getAt(o.toIndex(t));
                       n && ((n = n.slide).setActive && n.setActive() || n.focus({
                           preventScroll: !0
                       }))
                   })
               }

               function a(n) {
                   return y[o.toPage(n)]
               }

               function s() {
                   var n = a(e(!0)),
                       t = a(e());
                   n && (K(n.button, qn), T(n.button, tt)), t && (A(t.button, qn), j(t.button, tt, !0)), r("pagination:updated", {
                       list: v,
                       items: y
                   }, n, t)
               }
               return {
                   items: y,
                   mount: function() {
                       c(), i([xn, bn], c), i([dn, En], s)
                   },
                   destroy: f,
                   getAt: a,
                   update: s
               }
           },
           Sync: function(u, n, i) {
               var r = n.Elements.list,
                   o = [];

               function t() {
                   var n, t;
                   u.splides.forEach(function(n) {
                       var i;
                       n.isParent || (i = n.splide, [u, i].forEach(function(n) {
                           var t = Pn(n),
                               r = n === u ? i : u;
                           t.on(dn, function(n, t, i) {
                               r.go(r.is(ct) ? i : n)
                           }), o.push(t)
                       }))
                   }), i.isNavigation && (n = Pn(u), (t = n.on)(pn, f), t(_n, a), t([ln, xn], c), j(r, $n, "menu"), o.push(n), n.emit(Sn, u.splides))
               }

               function e() {
                   T(r, ot), o.forEach(function(n) {
                       n.destroy()
                   }), _(o)
               }

               function c() {
                   j(r, p, "ttb" !== i.direction ? "horizontal" : null)
               }

               function f(n) {
                   u.go(n.index)
               }

               function a(n, t) {
                   x(wt, t.key) && (f(n), U(t))
               }
               return {
                   mount: t,
                   destroy: e,
                   remount: function() {
                       e(), t()
                   }
               }
           },
           Wheel: function(i, r, u) {
               var n = Pn(i).bind;

               function t(n) {
                   var t;
                   !n.cancelable || (t = n.deltaY) && (i.go((t = t < 0) ? "<" : ">"), t = t, u.releaseWheel && !i.state.is(4) && -1 === r.Controller.getAdjacent(t) || U(n))
               }
               return {
                   mount: function() {
                       u.wheel && n(r.Elements.track, "wheel", t, lt)
                   }
               }
           }
       }),
       bt = {
           type: "slide",
           speed: 400,
           waitForTransition: !0,
           perPage: 1,
           cloneStatus: !0,
           arrows: !0,
           pagination: !0,
           interval: 5e3,
           pauseOnHover: !0,
           pauseOnFocus: !0,
           resetProgress: !0,
           keyboard: !0,
           easing: "cubic-bezier(0.25, 1, 0.5, 1)",
           drag: !0,
           direction: "ltr",
           slideFocus: !0,
           trimSpace: !0,
           focusableNodes: "a, button, textarea, input, select, iframe",
           classes: {
               slide: Fn,
               clone: In,
               arrows: Cn,
               arrow: t,
               prev: Nn,
               next: Xn,
               pagination: i,
               page: i + "__page",
               spinner: m + "__spinner"
           },
           i18n: {
               prev: "Previous slide",
               next: "Next slide",
               first: "Go to first slide",
               last: "Go to last slide",
               slideX: "Go to slide %s",
               pageX: "Go to page %s",
               play: "Start autoplay",
               pause: "Pause autoplay"
           }
       };

   function xt(n, r, t) {
       var i = Pn(n).on;
       return {
           mount: function() {
               i([ln, bn], function() {
                   g(function() {
                       r.Slides.style("transition", "opacity " + t.speed + "ms " + t.easing)
                   })
               })
           },
           start: function(n, t) {
               var i = r.Elements.track;
               C(i, "height", V(G(i).height)), g(function() {
                   t(), C(i, "height", "")
               })
           },
           cancel: Z
       }
   }

   function kt(o, n, e) {
       var c, t = Pn(o).bind,
           f = n.Move,
           a = n.Controller,
           i = n.Elements.list;

       function r() {
           s("")
       }

       function s(n) {
           C(i, "transition", n)
       }
       return {
           mount: function() {
               t(i, "transitionend", function(n) {
                   n.target === i && c && (r(), c())
               })
           },
           start: function(n, t) {
               var i = f.toPosition(n, !0),
                   r = f.getPosition(),
                   u = function(n) {
                       var t = e.rewindSpeed;
                       if (o.is(et) && t) {
                           var i = a.getIndex(!0),
                               r = a.getEnd();
                           if (0 === i && r <= n || r <= i && 0 === n) return t
                       }
                       return e.speed
                   }(n);
               1 <= un(i - r) && 1 <= u ? (s("transform " + u + "ms " + e.easing), f.translate(i, !0), c = t) : (f.jump(n), t())
           },
           cancel: r
       }
   }
   i = function() {
       function i(n, t) {
           this.event = c(), this.Components = {}, this.state = d(1), this.splides = [], this.f = {}, this.a = {};
           n = D(n) ? q(document, n) : n;
           Q(n, n + " is invalid."), this.root = n, l(bt, i.defaults), l(l(this.f, bt), t || {})
       }
       var n, t, r = i.prototype;
       return r.mount = function(n, t) {
           var i = this,
               r = this.state,
               u = this.Components;
           return Q(r.is([1, 5]), "Already mounted!"), r.set(1), this.s = u, this.l = t || this.l || (this.is(ft) ? xt : kt), this.a = n || this.a, e(O({}, _t, this.a, {
               Transition: this.l
           }), function(n, t) {
               n = n(i, u, i.f);
               (u[t] = n).setup && n.setup()
           }), e(u, function(n) {
               n.mount && n.mount()
           }), this.emit(ln), A(this.root, "is-initialized"), r.set(3), this.emit("ready"), this
       }, r.sync = function(n) {
           return this.splides.push({
               splide: n
           }), n.splides.push({
               splide: this,
               isParent: !0
           }), this.state.is(3) && (this.s.Sync.remount(), n.Components.Sync.remount()), this
       }, r.go = function(n) {
           return this.s.Controller.go(n), this
       }, r.on = function(n, t) {
           return this.event.on(n, t, null, 20), this
       }, r.off = function(n) {
           return this.event.off(n), this
       }, r.emit = function(n) {
           var t;
           return (t = this.event).emit.apply(t, [n].concat(s(arguments, 1))), this
       }, r.add = function(n, t) {
           return this.s.Slides.add(n, t), this
       }, r.remove = function(n) {
           return this.s.Slides.remove(n), this
       }, r.is = function(n) {
           return this.f.type === n
       }, r.refresh = function() {
           return this.emit(bn), this
       }, r.destroy = function(t) {
           void 0 === t && (t = !0);
           var n = this.event,
               i = this.state;
           return i.is(1) ? n.on("ready", this.destroy.bind(this, t), this) : (e(this.s, function(n) {
               n.destroy && n.destroy(t)
           }, !0), n.emit(f), n.destroy(), t && _(this.splides), i.set(5)), this
       }, n = i, (r = [{
           key: "options",
           get: function() {
               return this.f
           },
           set: function(n) {
               var t = this.f;
               l(t, n), this.state.is(1) || this.emit(xn, t)
           }
       }, {
           key: "length",
           get: function() {
               return this.s.Slides.getLength(!0)
           }
       }, {
           key: "index",
           get: function() {
               return this.s.Controller.getIndex()
           }
       }]) && At(n.prototype, r), t && At(n, t), i
   }();
   return i.defaults = {}, i.STATES = n, i
}, "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).Splide = t();