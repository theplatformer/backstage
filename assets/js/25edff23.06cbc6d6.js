/*! For license information please see 25edff23.06cbc6d6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[686116],{882136:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var n=t(824246),o=t(511151);const c={id:"plugin-azure-devops-backend.azuredevopsapi.getprojects",title:"AzureDevOpsApi.getProjects()",description:"API reference for AzureDevOpsApi.getProjects()"},u=void 0,a={unversionedId:"reference/plugin-azure-devops-backend.azuredevopsapi.getprojects",id:"reference/plugin-azure-devops-backend.azuredevopsapi.getprojects",title:"AzureDevOpsApi.getProjects()",description:"API reference for AzureDevOpsApi.getProjects()",source:"@site/../docs/reference/plugin-azure-devops-backend.azuredevopsapi.getprojects.md",sourceDirName:"reference",slug:"/reference/plugin-azure-devops-backend.azuredevopsapi.getprojects",permalink:"/docs/reference/plugin-azure-devops-backend.azuredevopsapi.getprojects",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-azure-devops-backend.azuredevopsapi.getprojects.md",tags:[],version:"current",frontMatter:{id:"plugin-azure-devops-backend.azuredevopsapi.getprojects",title:"AzureDevOpsApi.getProjects()",description:"API reference for AzureDevOpsApi.getProjects()"}},s={},i=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-azure-devops-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-azure-devops-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-azure-devops-backend.azuredevopsapi",children:(0,n.jsx)(r.code,{children:"AzureDevOpsApi"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-azure-devops-backend.azuredevopsapi.getprojects",children:(0,n.jsx)(r.code,{children:"getProjects"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"getProjects(): Promise<Project[]>;\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-azure-devops-common.project",children:"Project"}),"[]>"]})]})}const p=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,u,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var i in c=Object(arguments[s]))t.call(c,i)&&(a[i]=c[i]);if(r){u=r(c);for(var f=0;f<u.length;f++)n.call(c,u[f])&&(a[u[f]]=c[u[f]])}}return a}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,c={},i=null,f=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,n)&&!s.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:f,props:c,_owner:u.current}}r.jsx=i,r.jsxs=i},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var u=60109,a=60110,s=60112;r.Suspense=60113;var i=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),c=p("react.portal"),r.Fragment=p("react.fragment"),r.StrictMode=p("react.strict_mode"),r.Profiler=p("react.profiler"),u=p("react.provider"),a=p("react.context"),s=p("react.forward_ref"),r.Suspense=p("react.suspense"),i=p("react.memo"),f=p("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}function g(){}function j(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var b=j.prototype=new g;b.constructor=j,n(b,h.prototype),b.isPureReactComponent=!0;var m={current:null},_=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function O(e,r,t){var n,c={},u=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(u=""+r.key),r)_.call(r,n)&&!k.hasOwnProperty(n)&&(c[n]=r[n]);var s=arguments.length-2;if(1===s)c.children=t;else if(1<s){for(var i=Array(s),f=0;f<s;f++)i[f]=arguments[f+2];c.children=i}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===c[n]&&(c[n]=s[n]);return{$$typeof:o,type:e,key:u,ref:a,props:c,_owner:m.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function x(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case c:s=!0}}if(s)return u=u(s=e),e=""===n?"."+x(s,0):n,Array.isArray(u)?(t="",null!=e&&(t=e.replace(w,"$&/")+"/"),S(u,r,t,"",(function(e){return e}))):null!=u&&(P(u)&&(u=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,t+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),r.push(u)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var f=n+x(a=e[i],i);s+=S(a,r,t,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(a=e.next()).done;)s+=S(a=a.value,r,t,f=n+x(a,i++),u);else if("object"===a)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function z(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function A(){var e=E.current;if(null===e)throw Error(d(321));return e}var R={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:m,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:z,forEach:function(e,r,t){z(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return z(e,(function(){r++})),r},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=j,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var c=n({},e.props),u=e.key,a=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,s=m.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in r)_.call(r,f)&&!k.hasOwnProperty(f)&&(c[f]=void 0===r[f]&&void 0!==i?i[f]:r[f])}var f=arguments.length-2;if(1===f)c.children=t;else if(1<f){i=Array(f);for(var p=0;p<f;p++)i[p]=arguments[p+2];c.children=i}return{$$typeof:o,type:e.type,key:u,ref:a,props:c,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=O,r.createFactory=function(e){var r=O.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:i,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return A().useCallback(e,r)},r.useContext=function(e,r){return A().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return A().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return A().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return A().useLayoutEffect(e,r)},r.useMemo=function(e,r){return A().useMemo(e,r)},r.useReducer=function(e,r,t){return A().useReducer(e,r,t)},r.useRef=function(e){return A().useRef(e)},r.useState=function(e){return A().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||u:c(e),n.createElement(o.Provider,{value:a},r)}}}]);