/*! For license information please see 6d4c5430.5dafb5e4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[923633],{890820:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(824246),i=t(511151);const o={id:"reading",title:"Reading Backstage Configuration",description:"Documentation on Reading Backstage Configuration"},a=void 0,s={unversionedId:"conf/reading",id:"conf/reading",title:"Reading Backstage Configuration",description:"Documentation on Reading Backstage Configuration",source:"@site/../docs/conf/reading.md",sourceDirName:"conf",slug:"/conf/reading",permalink:"/docs/conf/reading",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/conf/reading.md",tags:[],version:"current",frontMatter:{id:"reading",title:"Reading Backstage Configuration",description:"Documentation on Reading Backstage Configuration"},sidebar:"docs",previous:{title:"Static Configuration in Backstage",permalink:"/docs/conf/"},next:{title:"Writing Backstage Configuration Files",permalink:"/docs/conf/writing"}},c={},l=[{value:"Config API",id:"config-api",level:2},{value:"Type Safety",id:"type-safety",level:3},{value:"Reading Nested Configuration",id:"reading-nested-configuration",level:3},{value:"Required vs Optional Configuration",id:"required-vs-optional-configuration",level:3},{value:"Accessing ConfigApi in Frontend Plugins",id:"accessing-configapi-in-frontend-plugins",level:2},{value:"Accessing ConfigApi in Backend Plugins",id:"accessing-configapi-in-backend-plugins",level:2}];function u(e){const n=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"config-api",children:"Config API"}),"\n",(0,r.jsxs)(n.p,{children:["There's a common configuration API for by both frontend and backend plugins. An\nAPI reference can be found ",(0,r.jsx)(n.a,{href:"/docs/reference/config.config",children:"here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The configuration API is tailored towards failing fast in case of missing or bad\nconfig. That's because configuration errors can always be considered programming\nmistakes, and will fail deterministically."}),"\n",(0,r.jsx)(n.h3,{id:"type-safety",children:"Type Safety"}),"\n",(0,r.jsxs)(n.p,{children:["The methods for reading primitive values are typed, and validate that type at\nruntime. For example ",(0,r.jsx)(n.code,{children:"getNumber()"})," requires the underlying value to be a number,\nand there will be no attempt to coerce other types into the desired one. If\n",(0,r.jsx)(n.code,{children:"getNumber()"})," receives a string value, it will throw an error, explaining where\nthe bad config came from, and what the desired and actual types where."]}),"\n",(0,r.jsx)(n.h3,{id:"reading-nested-configuration",children:"Reading Nested Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The backing configuration data is a nested JSON structure, meaning there will be\nobject, within objects, arrays within objects, and so on. There are a couple of\ndifferent ways to access nested values when reading configuration, but the\nprimary one is to use dot-separated paths."}),"\n",(0,r.jsx)(n.p,{children:"For example, given the following configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"app:\n  baseUrl: http://localhost:3000\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We can access the ",(0,r.jsx)(n.code,{children:"baseUrl"})," using ",(0,r.jsx)(n.code,{children:"config.getString('app.baseUrl')"}),". Because of\nthis syntax, configuration keys are not allowed to contain dots. In fact,\nconfiguration keys are validated using the following regular expression:\n",(0,r.jsx)(n.code,{children:"/^[a-z][a-z0-9]*(?:[-_][a-z][a-z0-9]*)*$/i"}),". This basically means that keys\nmust only contain the letters ",(0,r.jsx)(n.code,{children:"a"})," through ",(0,r.jsx)(n.code,{children:"z"})," and digits, in groups separated by\ndashes or underscores. Additionally, the very first character of each such group\nmust be a letter, not a digit."]}),"\n",(0,r.jsxs)(n.p,{children:["Another option of accessing the ",(0,r.jsx)(n.code,{children:"baseUrl"})," value is to create a sub-view of the\nconfiguration, ",(0,r.jsx)(n.code,{children:"config.getConfig('app').getString('baseUrl')"}),". When reading out\nsingle values the dot-path pattern is preferred, but creating sub-views can be\nuseful for when you want to pass on parts of configuration to be read out by a\nseparate function. For example, given something like"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"my-plugin:\n  items:\n    a:\n      title: Item A\n      path: /a\n    b:\n      title: Item B\n      path: /b\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can get the list of all items using the ",(0,r.jsx)(n.code,{children:".keys()"})," method, and then pass on\neach sub-view to be handled individually."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"for (const itemKey of config.keys('my-plugin.items')) {\n  const itemConfig = config.getConfig(`my-plugin.items`).getConfig(itemKey);\n  const title = itemConfig.getString('title');\n  // ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Another option for iterating through configuration keys is to call\n",(0,r.jsx)(n.code,{children:"config.get('my-plugin.items')"}),", which simply returns the JSON structure for\nthat position without any validation. This can be handy to use sometimes,\nespecially if you're passing on config to an external library. There's a clear\nbenefit to the sub-view approach though, which is that the user will receive\nmuch more detailed and relevant error messages. For example, if\n",(0,r.jsx)(n.code,{children:"itemConfig.getString('title')"})," fails in the above example because a boolean was\nsupplied, the user will receive an error message with the full path, e.g.\n",(0,r.jsx)(n.code,{children:"my-plugin.items.b.title"}),", as well as the name of the config file with the bad\nvalue. Conversely, if you try to access missing fields in raw JSON, you tend to\nend up with very technical and hard-to-understand type errors from javascript."]}),"\n",(0,r.jsx)(n.p,{children:"Note that no matter what method is used for reading out nested config, the same\nmerging rules apply. You will always get the same value for any way of accessing\nnested config:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Equivalent as long as a.b.c exists and is a string\nconfig.getString('a.b.c');\nconfig.getConfig('a.b').getString('c');\nconfig.get('a').b.c;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"required-vs-optional-configuration",children:"Required vs Optional Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Reading configuration can be divided into two categories: required, and\noptional. When reading optional configuration you use the optional methods such\nas ",(0,r.jsx)(n.code,{children:"getOptionalString"}),". These methods will simply return ",(0,r.jsx)(n.code,{children:"undefined"})," if\nconfiguration values are missing, allowing the called to fall back to default\nvalues. The optional methods still validate types however, so receiving a string\nin a call to ",(0,r.jsx)(n.code,{children:"config.getOptionalNumber"})," will still throw an error."]}),"\n",(0,r.jsxs)(n.p,{children:["A good pattern for reading optional configuration values is to use the ",(0,r.jsx)(n.code,{children:"??"}),"\noperator. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const title = config.getOptionalString('my-plugin.title') ?? 'My Plugin';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To read required configuration, simply use the methods without ",(0,r.jsx)(n.code,{children:"Optional"}),", for\nexample ",(0,r.jsx)(n.code,{children:"getString"}),". These will throw an error if there is no value available."]}),"\n",(0,r.jsx)(n.h2,{id:"accessing-configapi-in-frontend-plugins",children:"Accessing ConfigApi in Frontend Plugins"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api.configapi",children:"ConfigApi"})," in the frontend is a\n",(0,r.jsx)(n.a,{href:"/docs/api/utility-apis",children:"UtilityApi"}),". It's accessible as usual via the\n",(0,r.jsx)(n.code,{children:"configApiRef"})," exported from ",(0,r.jsx)(n.code,{children:"@backstage/core-plugin-api"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import { useApi, configApiRef } from '@backstage/core-plugin-api';\n...\nconst MyReactComponent = (...) => {\n  const config = useApi(configApiRef);\n  ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Depending on the config api in another API is slightly different though, as the\n",(0,r.jsx)(n.code,{children:"ConfigApi"})," implementation is supplied via the App itself and not instantiated\nlike other APIs. See\n",(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/244eef851f5aa19f91c7c9b5c12d5df95cf482ca/packages/app/src/apis.ts#L66",children:"packages/app/src/apis.ts"}),"\nfor an example of how this wiring is done."]}),"\n",(0,r.jsxs)(n.p,{children:["For standalone plugin setups in ",(0,r.jsx)(n.code,{children:"dev/index.ts"}),", register a factory with a\nstatically mocked implementation of the config API. Use the ",(0,r.jsx)(n.code,{children:"ConfigReader"})," from\n",(0,r.jsx)(n.code,{children:"@backstage/config"})," to create an instance and register it for the ",(0,r.jsx)(n.code,{children:"configApiRef"}),"\nfrom ",(0,r.jsx)(n.code,{children:"@backstage/core-plugin-api"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"accessing-configapi-in-backend-plugins",children:"Accessing ConfigApi in Backend Plugins"}),"\n",(0,r.jsxs)(n.p,{children:["In backend plugins the configuration is passed in via options from the main\nbackend package. See for example\n",(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/244eef851f5aa19f91c7c9b5c12d5df95cf482ca/packages/backend/src/plugins/auth.ts#L23",children:"packages/backend/src/plugins/auth.ts"}),"."]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in o=Object(arguments[c]))t.call(o,l)&&(s[l]=o[l]);if(n){a=n(o);for(var u=0;u<a.length;u++)r.call(o,a[u])&&(s[a[u]]=o[a[u]])}}return s}},371426:(e,n,t)=>{t(862525);var r=t(827378),i=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),n.Fragment=o("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,u=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:l,ref:u,props:o,_owner:a.current}}n.jsx=l,n.jsxs=l},541535:(e,n,t)=>{var r=t(862525),i=60103,o=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,s=60110,c=60112;n.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;i=f("react.element"),o=f("react.portal"),n.Fragment=f("react.fragment"),n.StrictMode=f("react.strict_mode"),n.Profiler=f("react.profiler"),a=f("react.provider"),s=f("react.context"),c=f("react.forward_ref"),n.Suspense=f("react.suspense"),l=f("react.memo"),u=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||g}function m(){}function b(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var v=b.prototype=new m;v.constructor=b,r(v,y.prototype),v.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,o={},a=null,s=null;if(null!=n)for(r in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(a=""+n.key),n)x.call(n,r)&&!w.hasOwnProperty(r)&&(o[r]=n[r]);var c=arguments.length-2;if(1===c)o.children=t;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:j.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g;function S(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,t,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case o:c=!0}}if(c)return a=a(c=e),e=""===r?"."+S(c,0):r,Array.isArray(a)?(t="",null!=e&&(t=e.replace(C,"$&/")+"/"),O(a,n,t,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),n.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+S(s=e[l],l);c+=O(s,n,t,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=O(s=s.value,n,t,u=r+S(s,l++),a);else if("object"===s)throw n=""+e,Error(p(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return c}function A(e,n,t){if(null==e)return e;var r=[],i=0;return O(e,r,"","",(function(e){return n.call(t,e,i++)})),r}function R(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function E(){var e=P.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:A,forEach:function(e,n,t){A(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return A(e,(function(){n++})),n},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},n.Component=y,n.PureComponent=b,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(e,n,t){if(null==e)throw Error(p(267,e));var o=r({},e.props),a=e.key,s=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,c=j.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in n)x.call(n,u)&&!w.hasOwnProperty(u)&&(o[u]=void 0===n[u]&&void 0!==l?l[u]:n[u])}var u=arguments.length-2;if(1===u)o.children=t;else if(1<u){l=Array(u);for(var f=0;f<u;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:i,type:e.type,key:a,ref:s,props:o,_owner:c}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=_,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:R}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return E().useCallback(e,n)},n.useContext=function(e,n){return E().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return E().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return E().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return E().useLayoutEffect(e,n)},n.useMemo=function(e,n){return E().useMemo(e,n)},n.useReducer=function(e,n,t){return E().useReducer(e,n,t)},n.useRef=function(e){return E().useRef(e)},n.useState=function(e){return E().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>o});var r=t(667294);const i=r.createContext({});function o(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||a:o(e),r.createElement(i.Provider,{value:s},n)}}}]);