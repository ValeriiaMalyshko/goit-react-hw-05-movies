"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[166],{3166:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(885),a=r(2791),u=r(501),c=r(4635),o=r(184);function s(){var e=(0,a.useState)(""),t=(0,n.Z)(e,2),r=t[0],s=t[1],i=(0,a.useState)([]),p=(0,n.Z)(i,2),l=p[0],f=p[1],h=(0,u.lr)(),v=(0,n.Z)(h,2),d=v[0],m=v[1];(0,a.useEffect)((function(){var e=d.get("query");e&&(0,c.Zo)(e).then((function(e){var t=e.results;return f(t)}))}));return(0,o.jsxs)("header",{children:[(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=r.trim().toLocaleLowerCase();""!==t?(m({query:t}),(0,c.Zo)(t).then((function(e){var t=e.results;return f(t)}))):alert("Please, enter a movie title")},children:[(0,o.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search film",value:r,onChange:function(e){s(e.currentTarget.value.toLowerCase())}}),(0,o.jsx)("button",{type:"submit",children:(0,o.jsx)("span",{children:"Search"})})]}),l&&(0,o.jsx)("ul",{children:l.map((function(e){var t=e.id,r=e.title;return(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{to:"".concat(t),children:r})},t)}))})]})}},4635:function(e,t,r){r.d(t,{GK:function(){return h},OM:function(){return i},Zo:function(){return l},ei:function(){return y},x1:function(){return d}});var n=r(5861),a=r(7757),u=r.n(a),c=r(4569),o=r.n(c);o().defaults.baseURL="https://api.themoviedb.org/3";var s="044cb4a395576b2afeda8b70ead6e0f2";function i(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:s},e.prev=1,e.next=4,o()("/trending/all/day",{params:t});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function l(){return f.apply(this,arguments)}function f(){return f=(0,n.Z)(u().mark((function e(){var t,r,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",r={api_key:s,query:t},e.prev=2,e.next=5,o()("/search/movie",{params:r});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),f.apply(this,arguments)}function h(){return v.apply(this,arguments)}function v(){return v=(0,n.Z)(u().mark((function e(){var t,r,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",r={api_key:s,movie_id:t},e.prev=2,e.next=5,o()("/movie/".concat(t),{params:r});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),v.apply(this,arguments)}function d(){return m.apply(this,arguments)}function m(){return m=(0,n.Z)(u().mark((function e(){var t,r,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",r={api_key:s,movie_id:t},e.prev=2,e.next=5,o()("/movie/".concat(t,"/credits"),{params:r});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),m.apply(this,arguments)}function y(){return x.apply(this,arguments)}function x(){return x=(0,n.Z)(u().mark((function e(){var t,r,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",r={api_key:s,movie_id:t},e.prev=2,e.next=5,o()("/movie/".concat(t,"/reviews"),{params:r});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),x.apply(this,arguments)}}}]);
//# sourceMappingURL=166.c71d8f1c.chunk.js.map