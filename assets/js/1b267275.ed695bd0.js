/*! For license information please see 1b267275.ed695bd0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[904453],{55875:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=r(824246),c=r(511151);const o={id:"plugin-search-backend-node.batchsearchengineindexer",title:"BatchSearchEngineIndexer",description:"API reference for BatchSearchEngineIndexer"},i=void 0,s={unversionedId:"reference/plugin-search-backend-node.batchsearchengineindexer",id:"reference/plugin-search-backend-node.batchsearchengineindexer",title:"BatchSearchEngineIndexer",description:"API reference for BatchSearchEngineIndexer",source:"@site/../docs/reference/plugin-search-backend-node.batchsearchengineindexer.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.batchsearchengineindexer",permalink:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.batchsearchengineindexer.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.batchsearchengineindexer",title:"BatchSearchEngineIndexer",description:"API reference for BatchSearchEngineIndexer"}},a={},u=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer",children:(0,t.jsx)(n.code,{children:"BatchSearchEngineIndexer"})})]}),"\n",(0,t.jsx)(n.p,{children:"Base class encapsulating batch-based stream processing. Useful as a base class for search engine indexers."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.b,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"abstract class BatchSearchEngineIndexer extends Writable \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.b,{children:"Extends:"})," Writable"]}),"\n",(0,t.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constructor"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer._constructor_",children:"(constructor)(options)"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Constructs a new instance of the ",(0,t.jsx)(n.code,{children:"BatchSearchEngineIndexer"})," class"]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer.finalize",children:"finalize()"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Any asynchronous teardown tasks can be performed here."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer.index",children:"index(documents)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Receives an array of indexable documents (of size this.batchSize) which should be written to the search engine. This method won't be called again at least until it resolves."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer.initialize",children:"initialize()"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Any asynchronous setup tasks can be performed here."})]})]})]})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(c){return!1}}()?Object.assign:function(e,c){for(var o,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var u in o=Object(arguments[a]))r.call(o,u)&&(s[u]=o[u]);if(n){i=n(o);for(var l=0;l<i.length;l++)t.call(o,i[l])&&(s[i[l]]=o[i[l]])}}return s}},371426:(e,n,r)=>{r(862525);var t=r(827378),c=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;c=o("react.element"),n.Fragment=o("react.fragment")}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,r){var t,o={},u=null,l=null;for(t in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,t)&&!a.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:c,type:e,key:u,ref:l,props:o,_owner:i.current}}n.jsx=u,n.jsxs=u},541535:(e,n,r)=>{var t=r(862525),c=60103,o=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var i=60109,s=60110,a=60112;n.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;c=d("react.element"),o=d("react.portal"),n.Fragment=d("react.fragment"),n.StrictMode=d("react.strict_mode"),n.Profiler=d("react.profiler"),i=d("react.provider"),s=d("react.context"),a=d("react.forward_ref"),n.Suspense=d("react.suspense"),u=d("react.memo"),l=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,n,r){this.props=e,this.context=n,this.refs=y,this.updater=r||p}function x(){}function g(e,n,r){this.props=e,this.context=n,this.refs=y,this.updater=r||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,n,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=b.prototype;var j=g.prototype=new x;j.constructor=g,t(j,b.prototype),j.isPureReactComponent=!0;var v={current:null},m=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,r){var t,o={},i=null,s=null;if(null!=n)for(t in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(i=""+n.key),n)m.call(n,t)&&!_.hasOwnProperty(t)&&(o[t]=n[t]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===o[t]&&(o[t]=a[t]);return{$$typeof:c,type:e,key:i,ref:s,props:o,_owner:v.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var w=/\/+/g;function E(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,r,t,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case c:case o:a=!0}}if(a)return i=i(a=e),e=""===t?"."+E(a,0):t,Array.isArray(i)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),O(i,n,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,n){return{$$typeof:c,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+e)),n.push(i)),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+E(s=e[u],u);a+=O(s,n,r,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)a+=O(s=s.value,n,r,l=t+E(s,u++),i);else if("object"===s)throw n=""+e,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return a}function C(e,n,r){if(null==e)return e;var t=[],c=0;return O(e,t,"","",(function(e){return n.call(r,e,c++)})),t}function P(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(h(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:C,forEach:function(e,n,r){C(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(h(143));return e}},n.Component=b,n.PureComponent=g,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(e,n,r){if(null==e)throw Error(h(267,e));var o=t({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,a=v.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in n)m.call(n,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===n[l]&&void 0!==u?u[l]:n[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){u=Array(l);for(var d=0;d<l;d++)u[d]=arguments[d+2];o.children=u}return{$$typeof:c,type:e.type,key:i,ref:s,props:o,_owner:a}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return $().useCallback(e,n)},n.useContext=function(e,n){return $().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return $().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return $().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return $().useLayoutEffect(e,n)},n.useMemo=function(e,n){return $().useMemo(e,n)},n.useReducer=function(e,n,r){return $().useReducer(e,n,r)},n.useRef=function(e){return $().useRef(e)},n.useState=function(e){return $().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>s,ah:()=>o});var t=r(667294);const c=t.createContext({});function o(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function s({components:e,children:n,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||i:o(e),t.createElement(c.Provider,{value:s},n)}}}]);