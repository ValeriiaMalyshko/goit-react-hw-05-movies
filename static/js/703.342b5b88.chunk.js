"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[703],{3703:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(885),a=r(2791),u=r(501),c=r(6871),s=r(4635),o="Movies_Container__EE37G",i="Movies_form__mp42q",p="Movies_button__hVjwG",l="Movies_input__OE3ef",f="Movies_link__0oDWE",v="Movies_list__JEO-P",h=r(184);function m(){var e=(0,a.useState)(""),t=(0,n.Z)(e,2),r=t[0],m=t[1],d=(0,a.useState)([]),_=(0,n.Z)(d,2),y=_[0],x=_[1],w=(0,u.lr)(),k=(0,n.Z)(w,2),b=k[0],Z=k[1],g=(0,c.TH)();(0,a.useEffect)((function(){var e=b.get("query");e&&(0,s.Zo)(e).then((function(e){var t=e.results;return x(t)}))}));return(0,h.jsxs)("header",{className:o,children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=r.trim().toLocaleLowerCase();""!==t?(Z({query:t}),(0,s.Zo)(t).then((function(e){var t=e.results;return x(t)}))):alert("Please, enter a movie title")},className:i,children:[(0,h.jsx)("input",{className:l,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search film",value:r,onChange:function(e){m(e.currentTarget.value.toLowerCase())}}),(0,h.jsx)("button",{type:"submit",className:p,children:(0,h.jsx)("span",{children:"Search"})})]}),y&&(0,h.jsx)("ul",{className:v,children:y.map((function(e){var t=e.id,r=e.title;return(0,h.jsx)("li",{className:f,children:(0,h.jsx)(u.rU,{to:"".concat(t),state:{from:g},children:r})},t)}))})]})}},4635:function(e,t,r){r.d(t,{GK:function(){return v},OM:function(){return i},Zo:function(){return l},ei:function(){return _},x1:function(){return m}});var n=r(5861),a=r(7757),u=r.n(a),c=r(4569),s=r.n(c);s().defaults.baseURL="https://api.themoviedb.org/3";var o="044cb4a395576b2afeda8b70ead6e0f2";function i(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:o},e.prev=1,e.next=4,s()("/trending/all/day",{params:t});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function l(){return f.apply(this,arguments)}function f(){return f=(0,n.Z)(u().mark((function e(){var t,r,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",r={api_key:o,query:t},e.prev=2,e.next=5,s()("/search/movie",{params:r});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),f.apply(this,arguments)}function v(){return h.apply(this,arguments)}function h(){return h=(0,n.Z)(u().mark((function e(){var t,r,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",r={api_key:o},e.prev=2,e.next=5,s()("/movie/".concat(t),{params:r});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),h.apply(this,arguments)}function m(){return d.apply(this,arguments)}function d(){return d=(0,n.Z)(u().mark((function e(){var t,r,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",r={api_key:o},e.prev=2,e.next=5,s()("/movie/".concat(t,"/credits"),{params:r});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),d.apply(this,arguments)}function _(){return y.apply(this,arguments)}function y(){return y=(0,n.Z)(u().mark((function e(){var t,r,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",r={api_key:o},e.prev=2,e.next=5,s()("/movie/".concat(t,"/reviews"),{params:r});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),y.apply(this,arguments)}}}]);
//# sourceMappingURL=703.342b5b88.chunk.js.map