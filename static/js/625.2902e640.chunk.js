"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[625],{6625:function(r,e,t){t.r(e),t.d(e,{default:function(){return o}});var n=t(885),a=t(2791),c=t(501),u=t(4635),i=t(184);function o(){var r=(0,a.useState)([]),e=(0,n.Z)(r,2),t=e[0],o=e[1];return(0,a.useEffect)((function(){(0,u.OM)().then((function(r){var e=r.results;return o(e)}))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Trending today"}),t&&(0,i.jsx)("ul",{children:t.map((function(r){var e=r.id,t=r.title;return(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:"movies/".concat(e),children:t})},e)}))})]})}},4635:function(r,e,t){t.d(e,{GK:function(){return v},OM:function(){return s},Zo:function(){return l},ei:function(){return y},x1:function(){return d}});var n=t(5861),a=t(7757),c=t.n(a),u=t(4569),i=t.n(u);i().defaults.baseURL="https://api.themoviedb.org/3";var o="044cb4a395576b2afeda8b70ead6e0f2";function s(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function r(){var e,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e={api_key:o},r.prev=1,r.next=4,i()("/trending/all/day",{params:e});case 4:return t=r.sent,r.abrupt("return",t.data);case 8:r.prev=8,r.t0=r.catch(1),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))).apply(this,arguments)}function l(){return f.apply(this,arguments)}function f(){return f=(0,n.Z)(c().mark((function r(){var e,t,n,a=arguments;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",t={api_key:o,query:e},r.prev=2,r.next=5,i()("/search/movie",{params:t});case 5:return n=r.sent,r.abrupt("return",n.data);case 9:r.prev=9,r.t0=r.catch(2),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])}))),f.apply(this,arguments)}function v(){return h.apply(this,arguments)}function h(){return h=(0,n.Z)(c().mark((function r(){var e,t,n,a=arguments;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",t={api_key:o,movie_id:e},r.prev=2,r.next=5,i()("/movie/".concat(e),{params:t});case 5:return n=r.sent,r.abrupt("return",n.data);case 9:r.prev=9,r.t0=r.catch(2),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])}))),h.apply(this,arguments)}function d(){return m.apply(this,arguments)}function m(){return m=(0,n.Z)(c().mark((function r(){var e,t,n,a=arguments;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",t={api_key:o,movie_id:e},r.prev=2,r.next=5,i()("/movie/".concat(e,"/credits"),{params:t});case 5:return n=r.sent,r.abrupt("return",n.data);case 9:r.prev=9,r.t0=r.catch(2),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])}))),m.apply(this,arguments)}function y(){return k.apply(this,arguments)}function k(){return k=(0,n.Z)(c().mark((function r(){var e,t,n,a=arguments;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",t={api_key:o,movie_id:e},r.prev=2,r.next=5,i()("/movie/".concat(e,"/reviews"),{params:t});case 5:return n=r.sent,r.abrupt("return",n.data);case 9:r.prev=9,r.t0=r.catch(2),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])}))),k.apply(this,arguments)}}}]);
//# sourceMappingURL=625.2902e640.chunk.js.map