(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820],{3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},2775:function(e,t,r){"use strict";var n=r(1682);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),s=(o=r(3244))&&o.__esModule?o:{default:o},u=r(3398),d=r(1165),l=r(6393);function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce(((e,t)=>{var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return a=>{var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,d=h.length;u<d;u++){var l=h[u];if(a.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?o=!1:r.add(l);else{var c=a.props[l],p=n[l]||new Set;"name"===l&&i||!p.has(c)?(p.add(c),n[l]=p):o=!1}}}return o}}()).reverse().map(((e,r)=>{var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((t=>e.props.href.startsWith(t)))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}var g=function(e){var t=e.children,r=(0,i.useContext)(u.AmpStateContext),n=(0,i.useContext)(d.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)};t.default=g},3244:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(7294);class a extends n.Component{constructor(e){super(e),this._hasHeadManager=void 0,this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=a},3359:function(e,t,r){"use strict";var n=r(2426);t.__esModule=!0,t.default=void 0;var a=n(r(7294)),o=n(r(2775)),i={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}class u extends a.default.Component{render(){var e=this.props.statusCode,t=this.props.title||i[e]||"An unexpected error has occurred";return a.default.createElement("div",{style:d.error},a.default.createElement(o.default,null,a.default.createElement("title",null,e?"".concat(e,": ").concat(t):"Application error: a client-side exception has occurred")),a.default.createElement("div",null,a.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?a.default.createElement("h1",{style:d.h1},e):null,a.default.createElement("div",{style:d.desc},a.default.createElement("h2",{style:d.h2},this.props.title||e?t:a.default.createElement(a.default.Fragment,null,"Application error: a client-side exception has occurred (",a.default.createElement("a",{href:"https://nextjs.org/docs/messages/client-side-exception-occurred"},"developer guidance"),")"),"."))))}}t.default=u,u.displayName="ErrorPage",u.getInitialProps=s,u.origGetInitialProps=s;var d={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},4977:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return r(3359)}])},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}}},function(e){e.O(0,[774,888,179],(function(){return t=4977,e(e.s=t);var t}));var t=e.O();_N_E=t}]);