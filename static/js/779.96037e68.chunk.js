(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{8445:function(n,e,t){"use strict";t.d(e,{O:function(){return c},X:function(){return u}});var r,a,i=t(168),o=t(6444),c=o.ZP.button(r||(r=(0,i.Z)(["\nfont-size: 17px;\ntext-decoration: none;\ncolor: #34312D;\nmargin: 10px;\nborder: 1px solid gray;\nborder-radius: 5px;\npadding: 10px;\ndisplay: inline-block;\nbackground-color: lightgray;\nwidth: 140px;\ncursor: pointer;\n\ntransition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n&:hover{\n    color: #14110F;\n    border-color: #14110F;\n    background-color: #D9C5B2;\n}\n"]))),u=o.ZP.div(a||(a=(0,i.Z)(["\ndisplay: flex;\n"])))},9169:function(n,e,t){"use strict";t.d(e,{Z:function(){return f}});var r,a=t(2007),i=t.n(a),o=t(7689),c=t(1087),u=t(168),s=t(6444).ZP.li(r||(r=(0,u.Z)(["\nmax-width: 185px;\n"]))),p=t(184),l=function(n){var e=n.movieItem,t=(0,o.TH)();return(0,p.jsx)(s,{children:(0,p.jsx)(c.rU,{to:"/movies/".concat(e.id),state:{from:t},children:(0,p.jsxs)("div",{children:[null===e.poster_path?(0,p.jsx)("img",{alt:e.original_title,src:"https://via.placeholder.com/185x280"}):(0,p.jsx)("img",{alt:e.poster_path,src:"http://image.tmdb.org/t/p/w185".concat(e.poster_path)}),(0,p.jsx)("p",{children:e.original_title})]})})})},f=l;l.propType={movieItem:i().object}},1779:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return I}});var r,a,i=t(5861),o=t(9439),c=t(7757),u=t.n(c),s=t(2791),p=t(168),l=t(6444),f=l.ZP.form(r||(r=(0,p.Z)(["\nmargin-left: 25px;\nmargin-bottom: 45px;\n\n"]))),d=l.ZP.input(a||(a=(0,p.Z)(["\nwidth: 350px;\nheight: 40px;\nborder-radius: 5px;\nfont-size: 20px;\n"]))),h=t(184);var g,x,v,m=function(n){var e=n.query,t=n.onChange,r=(0,s.useState)(e),a=(0,o.Z)(r,2),i=a[0],c=a[1];return(0,h.jsx)("div",{children:(0,h.jsx)(f,{onSubmit:function(n){n.preventDefault(),t(i)},children:(0,h.jsx)(d,{type:"text",name:"query",placeholder:"Search . . . ",value:i,onChange:function(n){c(n.target.value)}})})})},y=t(4390),Z=t(1087),b=t(8402),j=t(9169),w=l.ZP.ul(g||(g=(0,p.Z)(["\nlist-style: none;\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\ncolumn-gap: 30px;\nrow-gap: 10px;\ntext-align: center;\n"]))),k=function(n){var e=n.searchList;if(0!==e)return(0,h.jsx)(w,{children:e.map((function(n){return(0,h.jsx)(j.Z,{movieItem:n},n.id)}))})},_=t(8445),S=function(n){var e=n.onChangePage,t=n.title;return(0,h.jsx)("div",{children:(0,h.jsx)(_.O,{type:"submit",onClick:e,children:t})})},C=l.ZP.div(x||(x=(0,p.Z)(["\nmargin-left: 25px;\n"]))),P=l.ZP.p(v||(v=(0,p.Z)(["\nfont-size: 20px;\nfont-weight: 500;\n"]))),I=function(){var n,e,t=(0,s.useState)(null),r=(0,o.Z)(t,2),a=r[0],c=r[1],p=(0,s.useState)(!1),l=(0,o.Z)(p,2),f=l[0],d=l[1],g=(0,s.useState)(null),x=(0,o.Z)(g,2),v=x[0],j=x[1],w=(0,s.useState)(null),I=(0,o.Z)(w,2),O=I[0],T=I[1],N=(0,Z.lr)(),W=(0,o.Z)(N,2),J=W[0],z=W[1],U=(0,s.useState)(null),q=(0,o.Z)(U,2),D=q[0],R=q[1],E=(0,s.useState)(Number(null!==(n=J.get("page"))&&void 0!==n?n:"")),M=(0,o.Z)(E,2),Y=M[0],G=M[1],H=(0,s.useState)(null!==(e=J.get("query"))&&void 0!==e?e:""),L=(0,o.Z)(H,2),F=L[0],Q=L[1];(0,s.useEffect)((function(){function n(){return(n=(0,i.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),n.next=4,(0,y.WK)(F,Y);case 4:e=n.sent,j(e.results),T(e.total_results),R(e.total_pages),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),c(n.t0.message);case 13:return n.prev=13,d(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}Y&&F?(!function(){n.apply(this,arguments)}(),z({query:F,page:Y})):z({})}),[Y,F,z]);return(0,h.jsxs)("main",{children:[(0,h.jsx)(m,{onChange:function(n){G(1),Q(n)},query:F}),(0,h.jsxs)(C,{children:[null!==a&&(0,h.jsx)("p",{children:"Oops, something went wrong. please, try later"}),f&&(0,h.jsx)(b.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}),O&&(0,h.jsxs)(P,{children:["Total pages: ",D]}),v&&(0,h.jsx)(k,{searchList:v}),O&&(0,h.jsxs)(P,{children:["-- Page ",Y," --"]}),(null===v||void 0===v?void 0:v.length)<O/Y&&(0,h.jsxs)(_.X,{children:[(0,h.jsx)(S,{onChangePage:function(){1!==Y&&G((function(n){return n-1}))},title:"Previous page"}),(0,h.jsx)(S,{onChangePage:function(){G((function(n){return n+1}))},title:"Next page"})]})]})]})}},4390:function(n,e,t){"use strict";t.d(e,{Hx:function(){return d},WK:function(){return h},Y5:function(){return l},wr:function(){return p},xc:function(){return f}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1243),c="https://api.themoviedb.org",u="b4322bdf3e2859ea67c5f11069df4ded",s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDMyMmJkZjNlMjg1OWVhNjdjNWYxMTA2OWRmNGRlZCIsInN1YiI6IjY0ZGNhYmJkYjc3ZDRiMTE0MzQ3NWI0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CqbSGDQtmUw3a5Fq7RSi0CObHLk2zkAuH1e2KHzFsMQ"}},p=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/trending/movie/day?language=en-US&api_key=").concat(u),s);case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/movie/").concat(e,"?language=en-US&api_key=").concat(u),s);case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/movie/").concat(e,"/credits?language=en-US&api_key=").concat(u),s);case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/movie/").concat(e,"/reviews?language=en-US&api_key=").concat(u),s);case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=").concat(t,"&api_key=").concat(u),s);case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},888:function(n,e,t){"use strict";var r=t(9047);function a(){}function i(){}i.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,i,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=779.96037e68.chunk.js.map