"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,n,t){t.r(n),t.d(n,{Reviews:function(){return l}});var r=t(5861),a=t(9439),c=t(7757),u=t.n(c),i=t(2791),s=t(7689),o=t(8402),p=t(4390),f=t(184),l=function(){var e=(0,s.UO)().movieId,n=(0,i.useState)(!1),t=(0,a.Z)(n,2),c=t[0],l=t[1],h=(0,i.useState)(null),d=(0,a.Z)(h,2),v=d[0],m=d[1],x=(0,i.useState)(null),g=(0,a.Z)(x,2),w=g[0],k=g[1],y=(0,i.useState)(0),Z=(0,a.Z)(y,2),j=Z[0],b=Z[1];return(0,i.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),n.next=4,(0,p.Hx)(e);case 4:t=n.sent,k(t.results),b(t.total_results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),m(n.t0.message);case 12:return n.prev=12,l(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}e&&function(){n.apply(this,arguments)}()}),[e]),(0,f.jsxs)("div",{children:[null!==v&&(0,f.jsx)("p",{children:"Oops, something went wrong. please, try later"}),c&&(0,f.jsx)(o.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}),null!==w&&(0,f.jsx)("ul",{children:w.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("p",{children:e.author}),(0,f.jsx)("p",{children:e.content})]},e.id)}))}),0===j&&(0,f.jsx)("p",{children:"We don't have any reviews for this movie."})]})};n.default=l},4390:function(e,n,t){t.d(n,{Hx:function(){return h},WK:function(){return d},Y5:function(){return f},wr:function(){return p},xc:function(){return l}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243),i="https://api.themoviedb.org",s="b4322bdf3e2859ea67c5f11069df4ded",o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDMyMmJkZjNlMjg1OWVhNjdjNWYxMTA2OWRmNGRlZCIsInN1YiI6IjY0ZGNhYmJkYjc3ZDRiMTE0MzQ3NWI0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CqbSGDQtmUw3a5Fq7RSi0CObHLk2zkAuH1e2KHzFsMQ"}},p=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/3/trending/movie/day?language=en-US&api_key=").concat(s),o);case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/3/movie/").concat(n,"?language=en-US&api_key=").concat(s),o);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/3/movie/").concat(n,"/credits?language=en-US&api_key=").concat(s),o);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/3/movie/").concat(n,"/reviews?language=en-US&api_key=").concat(s),o);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/3/search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=").concat(t,"&api_key=").concat(s),o);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.a04c3486.chunk.js.map