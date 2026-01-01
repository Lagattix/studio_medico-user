(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ZE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cg={exports:{}},ml={},hg={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),ew=Symbol.for("react.portal"),tw=Symbol.for("react.fragment"),nw=Symbol.for("react.strict_mode"),rw=Symbol.for("react.profiler"),iw=Symbol.for("react.provider"),sw=Symbol.for("react.context"),ow=Symbol.for("react.forward_ref"),aw=Symbol.for("react.suspense"),lw=Symbol.for("react.memo"),uw=Symbol.for("react.lazy"),Fd=Symbol.iterator;function cw(t){return t===null||typeof t!="object"?null:(t=Fd&&t[Fd]||t["@@iterator"],typeof t=="function"?t:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dg=Object.assign,pg={};function Di(t,e,n){this.props=t,this.context=e,this.refs=pg,this.updater=n||fg}Di.prototype.isReactComponent={};Di.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Di.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mg(){}mg.prototype=Di.prototype;function ch(t,e,n){this.props=t,this.context=e,this.refs=pg,this.updater=n||fg}var hh=ch.prototype=new mg;hh.constructor=ch;dg(hh,Di.prototype);hh.isPureReactComponent=!0;var Ud=Array.isArray,gg=Object.prototype.hasOwnProperty,fh={current:null},yg={key:!0,ref:!0,__self:!0,__source:!0};function _g(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)gg.call(e,r)&&!yg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),h=0;h<l;h++)c[h]=arguments[h+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:so,type:t,key:s,ref:a,props:i,_owner:fh.current}}function hw(t,e){return{$$typeof:so,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dh(t){return typeof t=="object"&&t!==null&&t.$$typeof===so}function fw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jd=/\/+/g;function fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fw(""+t.key):e.toString(36)}function ia(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case so:case ew:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+fu(a,0):r,Ud(i)?(n="",t!=null&&(n=t.replace(jd,"$&/")+"/"),ia(i,e,n,"",function(h){return h})):i!=null&&(dh(i)&&(i=hw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(jd,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",Ud(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+fu(s,l);a+=ia(s,e,n,c,i)}else if(c=cw(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+fu(s,l++),a+=ia(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Vo(t,e,n){if(t==null)return t;var r=[],i=0;return ia(t,r,"","",function(s){return e.call(n,s,i++)}),r}function dw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tt={current:null},sa={transition:null},pw={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:sa,ReactCurrentOwner:fh};function vg(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:Vo,forEach:function(t,e,n){Vo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vo(t,function(){e++}),e},toArray:function(t){return Vo(t,function(e){return e})||[]},only:function(t){if(!dh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Di;Y.Fragment=tw;Y.Profiler=rw;Y.PureComponent=ch;Y.StrictMode=nw;Y.Suspense=aw;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pw;Y.act=vg;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=dg({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=fh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)gg.call(e,c)&&!yg.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var h=0;h<c;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:so,type:t.type,key:i,ref:s,props:r,_owner:a}};Y.createContext=function(t){return t={$$typeof:sw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iw,_context:t},t.Consumer=t};Y.createElement=_g;Y.createFactory=function(t){var e=_g.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:ow,render:t}};Y.isValidElement=dh;Y.lazy=function(t){return{$$typeof:uw,_payload:{_status:-1,_result:t},_init:dw}};Y.memo=function(t,e){return{$$typeof:lw,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=sa.transition;sa.transition={};try{t()}finally{sa.transition=e}};Y.unstable_act=vg;Y.useCallback=function(t,e){return tt.current.useCallback(t,e)};Y.useContext=function(t){return tt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return tt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return tt.current.useEffect(t,e)};Y.useId=function(){return tt.current.useId()};Y.useImperativeHandle=function(t,e,n){return tt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return tt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return tt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return tt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return tt.current.useReducer(t,e,n)};Y.useRef=function(t){return tt.current.useRef(t)};Y.useState=function(t){return tt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return tt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return tt.current.useTransition()};Y.version="18.3.1";hg.exports=Y;var ft=hg.exports;const mw=ZE(ft);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gw=ft,yw=Symbol.for("react.element"),_w=Symbol.for("react.fragment"),vw=Object.prototype.hasOwnProperty,Ew=gw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ww={key:!0,ref:!0,__self:!0,__source:!0};function Eg(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)vw.call(e,r)&&!ww.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yw,type:t,key:s,ref:a,props:i,_owner:Ew.current}}ml.Fragment=_w;ml.jsx=Eg;ml.jsxs=Eg;cg.exports=ml;var B=cg.exports,Xu={},wg={exports:{}},gt={},Tg={exports:{}},Ig={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,q){var K=j.length;j.push(q);e:for(;0<K;){var ue=K-1>>>1,Ee=j[ue];if(0<i(Ee,q))j[ue]=q,j[K]=Ee,K=ue;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var q=j[0],K=j.pop();if(K!==q){j[0]=K;e:for(var ue=0,Ee=j.length,lr=Ee>>>1;ue<lr;){var _t=2*(ue+1)-1,ur=j[_t],Ct=_t+1,En=j[Ct];if(0>i(ur,K))Ct<Ee&&0>i(En,ur)?(j[ue]=En,j[Ct]=K,ue=Ct):(j[ue]=ur,j[_t]=K,ue=_t);else if(Ct<Ee&&0>i(En,K))j[ue]=En,j[Ct]=K,ue=Ct;else break e}}return q}function i(j,q){var K=j.sortIndex-q.sortIndex;return K!==0?K:j.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],h=[],p=1,m=null,y=3,k=!1,N=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(j){for(var q=n(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=j)r(h),q.sortIndex=q.expirationTime,e(c,q);else break;q=n(h)}}function D(j){if(x=!1,A(j),!N)if(n(c)!==null)N=!0,ji(F);else{var q=n(h);q!==null&&zi(D,q.startTime-j)}}function F(j,q){N=!1,x&&(x=!1,S(g),g=-1),k=!0;var K=y;try{for(A(q),m=n(c);m!==null&&(!(m.expirationTime>q)||j&&!I());){var ue=m.callback;if(typeof ue=="function"){m.callback=null,y=m.priorityLevel;var Ee=ue(m.expirationTime<=q);q=t.unstable_now(),typeof Ee=="function"?m.callback=Ee:m===n(c)&&r(c),A(q)}else r(c);m=n(c)}if(m!==null)var lr=!0;else{var _t=n(h);_t!==null&&zi(D,_t.startTime-q),lr=!1}return lr}finally{m=null,y=K,k=!1}}var U=!1,_=null,g=-1,v=5,T=-1;function I(){return!(t.unstable_now()-T<v)}function C(){if(_!==null){var j=t.unstable_now();T=j;var q=!0;try{q=_(!0,j)}finally{q?w():(U=!1,_=null)}}else U=!1}var w;if(typeof E=="function")w=function(){E(C)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,Jt=Oe.port2;Oe.port1.onmessage=C,w=function(){Jt.postMessage(null)}}else w=function(){b(C,0)};function ji(j){_=j,U||(U=!0,w())}function zi(j,q){g=b(function(){j(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){N||k||(N=!0,ji(F))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(j){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var K=y;y=q;try{return j()}finally{y=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var K=y;y=j;try{return q()}finally{y=K}},t.unstable_scheduleCallback=function(j,q,K){var ue=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ue+K:ue):K=ue,j){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=K+Ee,j={id:p++,callback:q,priorityLevel:j,startTime:K,expirationTime:Ee,sortIndex:-1},K>ue?(j.sortIndex=K,e(h,j),n(c)===null&&j===n(h)&&(x?(S(g),g=-1):x=!0,zi(D,K-ue))):(j.sortIndex=Ee,e(c,j),N||k||(N=!0,ji(F))),j},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(j){var q=y;return function(){var K=y;y=q;try{return j.apply(this,arguments)}finally{y=K}}}})(Ig);Tg.exports=Ig;var Tw=Tg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iw=ft,mt=Tw;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sg=new Set,Ls={};function Ur(t,e){vi(t,e),vi(t+"Capture",e)}function vi(t,e){for(Ls[t]=e,t=0;t<e.length;t++)Sg.add(e[t])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yu=Object.prototype.hasOwnProperty,Sw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zd={},Bd={};function Aw(t){return Yu.call(Bd,t)?!0:Yu.call(zd,t)?!1:Sw.test(t)?Bd[t]=!0:(zd[t]=!0,!1)}function Cw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Pw(t,e,n,r){if(e===null||typeof e>"u"||Cw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nt(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){je[t]=new nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];je[e]=new nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){je[t]=new nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){je[t]=new nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){je[t]=new nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){je[t]=new nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){je[t]=new nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){je[t]=new nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){je[t]=new nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ph=/[\-:]([a-z])/g;function mh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ph,mh);je[e]=new nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ph,mh);je[e]=new nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ph,mh);je[e]=new nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){je[t]=new nt(t,1,!1,t.toLowerCase(),null,!1,!1)});je.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){je[t]=new nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function gh(t,e,n,r){var i=je.hasOwnProperty(e)?je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Pw(e,n,i,r)&&(n=null),r||i===null?Aw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var yn=Iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lo=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),yh=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),Ag=Symbol.for("react.provider"),Cg=Symbol.for("react.context"),_h=Symbol.for("react.forward_ref"),Zu=Symbol.for("react.suspense"),ec=Symbol.for("react.suspense_list"),vh=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),Pg=Symbol.for("react.offscreen"),$d=Symbol.iterator;function is(t){return t===null||typeof t!="object"?null:(t=$d&&t[$d]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,du;function ds(t){if(du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);du=e&&e[1]||""}return`
`+du+t}var pu=!1;function mu(t,e){if(!t||pu)return"";pu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{pu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ds(t):""}function kw(t){switch(t.tag){case 5:return ds(t.type);case 16:return ds("Lazy");case 13:return ds("Suspense");case 19:return ds("SuspenseList");case 0:case 2:case 15:return t=mu(t.type,!1),t;case 11:return t=mu(t.type.render,!1),t;case 1:return t=mu(t.type,!0),t;default:return""}}function tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Qr:return"Portal";case Ju:return"Profiler";case yh:return"StrictMode";case Zu:return"Suspense";case ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cg:return(t.displayName||"Context")+".Consumer";case Ag:return(t._context.displayName||"Context")+".Provider";case _h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vh:return e=t.displayName||null,e!==null?e:tc(t.type)||"Memo";case Rn:e=t._payload,t=t._init;try{return tc(t(e))}catch{}}return null}function Rw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tc(e);case 8:return e===yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Nw(t){var e=kg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mo(t){t._valueTracker||(t._valueTracker=Nw(t))}function Rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=kg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nc(t,e){var n=e.checked;return ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Jn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ng(t,e){e=e.checked,e!=null&&gh(t,"checked",e,!1)}function rc(t,e){Ng(t,e);var n=Jn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&ic(t,e.type,Jn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ic(t,e,n){(e!=="number"||Ca(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ps=Array.isArray;function li(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Jn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(ps(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jn(n)}}function xg(t,e){var n=Jn(e.value),r=Jn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bo,Og=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bo=bo||document.createElement("div"),bo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ms(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xw=["Webkit","ms","Moz","O"];Object.keys(_s).forEach(function(t){xw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_s[e]=_s[t]})});function Vg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_s.hasOwnProperty(t)&&_s[t]?(""+e).trim():e+"px"}function Lg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Dw=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ac(t,e){if(e){if(Dw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function lc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uc=null;function Eh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cc=null,ui=null,ci=null;function Kd(t){if(t=lo(t)){if(typeof cc!="function")throw Error(L(280));var e=t.stateNode;e&&(e=El(e),cc(t.stateNode,t.type,e))}}function Mg(t){ui?ci?ci.push(t):ci=[t]:ui=t}function bg(){if(ui){var t=ui,e=ci;if(ci=ui=null,Kd(t),e)for(t=0;t<e.length;t++)Kd(e[t])}}function Fg(t,e){return t(e)}function Ug(){}var gu=!1;function jg(t,e,n){if(gu)return t(e,n);gu=!0;try{return Fg(t,e,n)}finally{gu=!1,(ui!==null||ci!==null)&&(Ug(),bg())}}function bs(t,e){var n=t.stateNode;if(n===null)return null;var r=El(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var hc=!1;if(cn)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){hc=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{hc=!1}function Ow(t,e,n,r,i,s,a,l,c){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var vs=!1,Pa=null,ka=!1,fc=null,Vw={onError:function(t){vs=!0,Pa=t}};function Lw(t,e,n,r,i,s,a,l,c){vs=!1,Pa=null,Ow.apply(Vw,arguments)}function Mw(t,e,n,r,i,s,a,l,c){if(Lw.apply(this,arguments),vs){if(vs){var h=Pa;vs=!1,Pa=null}else throw Error(L(198));ka||(ka=!0,fc=h)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qd(t){if(jr(t)!==t)throw Error(L(188))}function bw(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Qd(i),t;if(s===r)return Qd(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function Bg(t){return t=bw(t),t!==null?$g(t):null}function $g(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$g(t);if(e!==null)return e;t=t.sibling}return null}var Hg=mt.unstable_scheduleCallback,Xd=mt.unstable_cancelCallback,Fw=mt.unstable_shouldYield,Uw=mt.unstable_requestPaint,we=mt.unstable_now,jw=mt.unstable_getCurrentPriorityLevel,wh=mt.unstable_ImmediatePriority,Wg=mt.unstable_UserBlockingPriority,Ra=mt.unstable_NormalPriority,zw=mt.unstable_LowPriority,qg=mt.unstable_IdlePriority,gl=null,qt=null;function Bw(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(gl,t,void 0,(t.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Ww,$w=Math.log,Hw=Math.LN2;function Ww(t){return t>>>=0,t===0?32:31-($w(t)/Hw|0)|0}var Fo=64,Uo=4194304;function ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Na(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ms(l):(s&=a,s!==0&&(r=ms(s)))}else a=n&~i,a!==0?r=ms(a):s!==0&&(r=ms(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bt(e),i=1<<n,r|=t[n],e&=~i;return r}function qw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-bt(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=qw(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function dc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gg(){var t=Fo;return Fo<<=1,!(Fo&4194240)&&(Fo=64),t}function yu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function oo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bt(e),t[e]=n}function Kw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Th(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function Kg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qg,Ih,Xg,Yg,Jg,pc=!1,jo=[],Un=null,jn=null,zn=null,Fs=new Map,Us=new Map,xn=[],Qw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yd(t,e){switch(t){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Fs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(e.pointerId)}}function os(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=lo(e),e!==null&&Ih(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Xw(t,e,n,r,i){switch(e){case"focusin":return Un=os(Un,t,e,n,r,i),!0;case"dragenter":return jn=os(jn,t,e,n,r,i),!0;case"mouseover":return zn=os(zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fs.set(s,os(Fs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Us.set(s,os(Us.get(s)||null,t,e,n,r,i)),!0}return!1}function Zg(t){var e=vr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=zg(n),e!==null){t.blockedOn=e,Jg(t.priority,function(){Xg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uc=r,n.target.dispatchEvent(r),uc=null}else return e=lo(n),e!==null&&Ih(e),t.blockedOn=n,!1;e.shift()}return!0}function Jd(t,e,n){oa(t)&&n.delete(e)}function Yw(){pc=!1,Un!==null&&oa(Un)&&(Un=null),jn!==null&&oa(jn)&&(jn=null),zn!==null&&oa(zn)&&(zn=null),Fs.forEach(Jd),Us.forEach(Jd)}function as(t,e){t.blockedOn===e&&(t.blockedOn=null,pc||(pc=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,Yw)))}function js(t){function e(i){return as(i,t)}if(0<jo.length){as(jo[0],t);for(var n=1;n<jo.length;n++){var r=jo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Un!==null&&as(Un,t),jn!==null&&as(jn,t),zn!==null&&as(zn,t),Fs.forEach(e),Us.forEach(e),n=0;n<xn.length;n++)r=xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xn.length&&(n=xn[0],n.blockedOn===null);)Zg(n),n.blockedOn===null&&xn.shift()}var hi=yn.ReactCurrentBatchConfig,xa=!0;function Jw(t,e,n,r){var i=ne,s=hi.transition;hi.transition=null;try{ne=1,Sh(t,e,n,r)}finally{ne=i,hi.transition=s}}function Zw(t,e,n,r){var i=ne,s=hi.transition;hi.transition=null;try{ne=4,Sh(t,e,n,r)}finally{ne=i,hi.transition=s}}function Sh(t,e,n,r){if(xa){var i=mc(t,e,n,r);if(i===null)Pu(t,e,r,Da,n),Yd(t,r);else if(Xw(i,t,e,n,r))r.stopPropagation();else if(Yd(t,r),e&4&&-1<Qw.indexOf(t)){for(;i!==null;){var s=lo(i);if(s!==null&&Qg(s),s=mc(t,e,n,r),s===null&&Pu(t,e,r,Da,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Pu(t,e,r,null,n)}}var Da=null;function mc(t,e,n,r){if(Da=null,t=Eh(r),t=vr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Da=t,null}function ey(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jw()){case wh:return 1;case Wg:return 4;case Ra:case zw:return 16;case qg:return 536870912;default:return 16}default:return 16}}var bn=null,Ah=null,aa=null;function ty(){if(aa)return aa;var t,e=Ah,n=e.length,r,i="value"in bn?bn.value:bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return aa=i.slice(t,1<r?1-r:void 0)}function la(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zo(){return!0}function Zd(){return!1}function yt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zo:Zd,this.isPropagationStopped=Zd,this}return ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),e}var Oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ch=yt(Oi),ao=ge({},Oi,{view:0,detail:0}),e0=yt(ao),_u,vu,ls,yl=ge({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ls&&(ls&&t.type==="mousemove"?(_u=t.screenX-ls.screenX,vu=t.screenY-ls.screenY):vu=_u=0,ls=t),_u)},movementY:function(t){return"movementY"in t?t.movementY:vu}}),ep=yt(yl),t0=ge({},yl,{dataTransfer:0}),n0=yt(t0),r0=ge({},ao,{relatedTarget:0}),Eu=yt(r0),i0=ge({},Oi,{animationName:0,elapsedTime:0,pseudoElement:0}),s0=yt(i0),o0=ge({},Oi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a0=yt(o0),l0=ge({},Oi,{data:0}),tp=yt(l0),u0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=h0[t])?!!e[t]:!1}function Ph(){return f0}var d0=ge({},ao,{key:function(t){if(t.key){var e=u0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ph,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),p0=yt(d0),m0=ge({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=yt(m0),g0=ge({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ph}),y0=yt(g0),_0=ge({},Oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),v0=yt(_0),E0=ge({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=yt(E0),T0=[9,13,27,32],kh=cn&&"CompositionEvent"in window,Es=null;cn&&"documentMode"in document&&(Es=document.documentMode);var I0=cn&&"TextEvent"in window&&!Es,ny=cn&&(!kh||Es&&8<Es&&11>=Es),rp=" ",ip=!1;function ry(t,e){switch(t){case"keyup":return T0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function S0(t,e){switch(t){case"compositionend":return iy(e);case"keypress":return e.which!==32?null:(ip=!0,rp);case"textInput":return t=e.data,t===rp&&ip?null:t;default:return null}}function A0(t,e){if(Yr)return t==="compositionend"||!kh&&ry(t,e)?(t=ty(),aa=Ah=bn=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ny&&e.locale!=="ko"?null:e.data;default:return null}}var C0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!C0[t.type]:e==="textarea"}function sy(t,e,n,r){Mg(r),e=Oa(e,"onChange"),0<e.length&&(n=new Ch("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ws=null,zs=null;function P0(t){gy(t,0)}function _l(t){var e=ei(t);if(Rg(e))return t}function k0(t,e){if(t==="change")return e}var oy=!1;if(cn){var wu;if(cn){var Tu="oninput"in document;if(!Tu){var op=document.createElement("div");op.setAttribute("oninput","return;"),Tu=typeof op.oninput=="function"}wu=Tu}else wu=!1;oy=wu&&(!document.documentMode||9<document.documentMode)}function ap(){ws&&(ws.detachEvent("onpropertychange",ay),zs=ws=null)}function ay(t){if(t.propertyName==="value"&&_l(zs)){var e=[];sy(e,zs,t,Eh(t)),jg(P0,e)}}function R0(t,e,n){t==="focusin"?(ap(),ws=e,zs=n,ws.attachEvent("onpropertychange",ay)):t==="focusout"&&ap()}function N0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _l(zs)}function x0(t,e){if(t==="click")return _l(e)}function D0(t,e){if(t==="input"||t==="change")return _l(e)}function O0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ut=typeof Object.is=="function"?Object.is:O0;function Bs(t,e){if(Ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yu.call(e,i)||!Ut(t[i],e[i]))return!1}return!0}function lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function up(t,e){var n=lp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lp(n)}}function ly(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ly(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uy(){for(var t=window,e=Ca();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ca(t.document)}return e}function Rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function V0(t){var e=uy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ly(n.ownerDocument.documentElement,n)){if(r!==null&&Rh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=up(n,s);var a=up(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var L0=cn&&"documentMode"in document&&11>=document.documentMode,Jr=null,gc=null,Ts=null,yc=!1;function cp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yc||Jr==null||Jr!==Ca(r)||(r=Jr,"selectionStart"in r&&Rh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ts&&Bs(Ts,r)||(Ts=r,r=Oa(gc,"onSelect"),0<r.length&&(e=new Ch("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Jr)))}function Bo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zr={animationend:Bo("Animation","AnimationEnd"),animationiteration:Bo("Animation","AnimationIteration"),animationstart:Bo("Animation","AnimationStart"),transitionend:Bo("Transition","TransitionEnd")},Iu={},cy={};cn&&(cy=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function vl(t){if(Iu[t])return Iu[t];if(!Zr[t])return t;var e=Zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cy)return Iu[t]=e[n];return t}var hy=vl("animationend"),fy=vl("animationiteration"),dy=vl("animationstart"),py=vl("transitionend"),my=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){my.set(t,e),Ur(e,[t])}for(var Su=0;Su<hp.length;Su++){var Au=hp[Su],M0=Au.toLowerCase(),b0=Au[0].toUpperCase()+Au.slice(1);sr(M0,"on"+b0)}sr(hy,"onAnimationEnd");sr(fy,"onAnimationIteration");sr(dy,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(py,"onTransitionEnd");vi("onMouseEnter",["mouseout","mouseover"]);vi("onMouseLeave",["mouseout","mouseover"]);vi("onPointerEnter",["pointerout","pointerover"]);vi("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F0=new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));function fp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Mw(r,e,void 0,t),t.currentTarget=null}function gy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,h=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;fp(i,l,h),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,h=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;fp(i,l,h),s=c}}}if(ka)throw t=fc,ka=!1,fc=null,t}function ae(t,e){var n=e[Tc];n===void 0&&(n=e[Tc]=new Set);var r=t+"__bubble";n.has(r)||(yy(e,t,2,!1),n.add(r))}function Cu(t,e,n){var r=0;e&&(r|=4),yy(n,t,r,e)}var $o="_reactListening"+Math.random().toString(36).slice(2);function $s(t){if(!t[$o]){t[$o]=!0,Sg.forEach(function(n){n!=="selectionchange"&&(F0.has(n)||Cu(n,!1,t),Cu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$o]||(e[$o]=!0,Cu("selectionchange",!1,e))}}function yy(t,e,n,r){switch(ey(e)){case 1:var i=Jw;break;case 4:i=Zw;break;default:i=Sh}n=i.bind(null,e,n,t),i=void 0,!hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Pu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=vr(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}jg(function(){var h=s,p=Eh(n),m=[];e:{var y=my.get(t);if(y!==void 0){var k=Ch,N=t;switch(t){case"keypress":if(la(n)===0)break e;case"keydown":case"keyup":k=p0;break;case"focusin":N="focus",k=Eu;break;case"focusout":N="blur",k=Eu;break;case"beforeblur":case"afterblur":k=Eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=n0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=y0;break;case hy:case fy:case dy:k=s0;break;case py:k=v0;break;case"scroll":k=e0;break;case"wheel":k=w0;break;case"copy":case"cut":case"paste":k=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=np}var x=(e&4)!==0,b=!x&&t==="scroll",S=x?y!==null?y+"Capture":null:y;x=[];for(var E=h,A;E!==null;){A=E;var D=A.stateNode;if(A.tag===5&&D!==null&&(A=D,S!==null&&(D=bs(E,S),D!=null&&x.push(Hs(E,D,A)))),b)break;E=E.return}0<x.length&&(y=new k(y,N,null,n,p),m.push({event:y,listeners:x}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",y&&n!==uc&&(N=n.relatedTarget||n.fromElement)&&(vr(N)||N[hn]))break e;if((k||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,k?(N=n.relatedTarget||n.toElement,k=h,N=N?vr(N):null,N!==null&&(b=jr(N),N!==b||N.tag!==5&&N.tag!==6)&&(N=null)):(k=null,N=h),k!==N)){if(x=ep,D="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(x=np,D="onPointerLeave",S="onPointerEnter",E="pointer"),b=k==null?y:ei(k),A=N==null?y:ei(N),y=new x(D,E+"leave",k,n,p),y.target=b,y.relatedTarget=A,D=null,vr(p)===h&&(x=new x(S,E+"enter",N,n,p),x.target=A,x.relatedTarget=b,D=x),b=D,k&&N)t:{for(x=k,S=N,E=0,A=x;A;A=qr(A))E++;for(A=0,D=S;D;D=qr(D))A++;for(;0<E-A;)x=qr(x),E--;for(;0<A-E;)S=qr(S),A--;for(;E--;){if(x===S||S!==null&&x===S.alternate)break t;x=qr(x),S=qr(S)}x=null}else x=null;k!==null&&dp(m,y,k,x,!1),N!==null&&b!==null&&dp(m,b,N,x,!0)}}e:{if(y=h?ei(h):window,k=y.nodeName&&y.nodeName.toLowerCase(),k==="select"||k==="input"&&y.type==="file")var F=k0;else if(sp(y))if(oy)F=D0;else{F=N0;var U=R0}else(k=y.nodeName)&&k.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(F=x0);if(F&&(F=F(t,h))){sy(m,F,n,p);break e}U&&U(t,y,h),t==="focusout"&&(U=y._wrapperState)&&U.controlled&&y.type==="number"&&ic(y,"number",y.value)}switch(U=h?ei(h):window,t){case"focusin":(sp(U)||U.contentEditable==="true")&&(Jr=U,gc=h,Ts=null);break;case"focusout":Ts=gc=Jr=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,cp(m,n,p);break;case"selectionchange":if(L0)break;case"keydown":case"keyup":cp(m,n,p)}var _;if(kh)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Yr?ry(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(ny&&n.locale!=="ko"&&(Yr||g!=="onCompositionStart"?g==="onCompositionEnd"&&Yr&&(_=ty()):(bn=p,Ah="value"in bn?bn.value:bn.textContent,Yr=!0)),U=Oa(h,g),0<U.length&&(g=new tp(g,t,null,n,p),m.push({event:g,listeners:U}),_?g.data=_:(_=iy(n),_!==null&&(g.data=_)))),(_=I0?S0(t,n):A0(t,n))&&(h=Oa(h,"onBeforeInput"),0<h.length&&(p=new tp("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=_))}gy(m,e)})}function Hs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Oa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bs(t,n),s!=null&&r.unshift(Hs(t,s,i)),s=bs(t,e),s!=null&&r.push(Hs(t,s,i))),t=t.return}return r}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dp(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,h=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&h!==null&&(l=h,i?(c=bs(n,s),c!=null&&a.unshift(Hs(n,c,l))):i||(c=bs(n,s),c!=null&&a.push(Hs(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var U0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function pp(t){return(typeof t=="string"?t:""+t).replace(U0,`
`).replace(j0,"")}function Ho(t,e,n){if(e=pp(e),pp(t)!==e&&n)throw Error(L(425))}function Va(){}var _c=null,vc=null;function Ec(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,z0=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,B0=typeof queueMicrotask=="function"?queueMicrotask:typeof mp<"u"?function(t){return mp.resolve(null).then(t).catch($0)}:wc;function $0(t){setTimeout(function(){throw t})}function ku(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),js(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);js(e)}function Bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vi=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Vi,Ws="__reactProps$"+Vi,hn="__reactContainer$"+Vi,Tc="__reactEvents$"+Vi,H0="__reactListeners$"+Vi,W0="__reactHandles$"+Vi;function vr(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hn]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gp(t);t!==null;){if(n=t[Wt])return n;t=gp(t)}return e}t=n,n=t.parentNode}return null}function lo(t){return t=t[Wt]||t[hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function El(t){return t[Ws]||null}var Ic=[],ti=-1;function or(t){return{current:t}}function le(t){0>ti||(t.current=Ic[ti],Ic[ti]=null,ti--)}function ie(t,e){ti++,Ic[ti]=t.current,t.current=e}var Zn={},Qe=or(Zn),ot=or(!1),Pr=Zn;function Ei(t,e){var n=t.type.contextTypes;if(!n)return Zn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function at(t){return t=t.childContextTypes,t!=null}function La(){le(ot),le(Qe)}function yp(t,e,n){if(Qe.current!==Zn)throw Error(L(168));ie(Qe,e),ie(ot,n)}function _y(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,Rw(t)||"Unknown",i));return ge({},n,r)}function Ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zn,Pr=Qe.current,ie(Qe,t),ie(ot,ot.current),!0}function _p(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=_y(t,e,Pr),r.__reactInternalMemoizedMergedChildContext=t,le(ot),le(Qe),ie(Qe,t)):le(ot),ie(ot,n)}var en=null,wl=!1,Ru=!1;function vy(t){en===null?en=[t]:en.push(t)}function q0(t){wl=!0,vy(t)}function ar(){if(!Ru&&en!==null){Ru=!0;var t=0,e=ne;try{var n=en;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}en=null,wl=!1}catch(i){throw en!==null&&(en=en.slice(t+1)),Hg(wh,ar),i}finally{ne=e,Ru=!1}}return null}var ni=[],ri=0,ba=null,Fa=0,vt=[],Et=0,kr=null,tn=1,nn="";function gr(t,e){ni[ri++]=Fa,ni[ri++]=ba,ba=t,Fa=e}function Ey(t,e,n){vt[Et++]=tn,vt[Et++]=nn,vt[Et++]=kr,kr=t;var r=tn;t=nn;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,tn=1<<32-bt(e)+i|n<<i|r,nn=s+t}else tn=1<<s|n<<i|r,nn=t}function Nh(t){t.return!==null&&(gr(t,1),Ey(t,1,0))}function xh(t){for(;t===ba;)ba=ni[--ri],ni[ri]=null,Fa=ni[--ri],ni[ri]=null;for(;t===kr;)kr=vt[--Et],vt[Et]=null,nn=vt[--Et],vt[Et]=null,tn=vt[--Et],vt[Et]=null}var pt=null,dt=null,he=!1,Nt=null;function wy(t,e){var n=wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pt=t,dt=Bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pt=t,dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:tn,overflow:nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pt=t,dt=null,!0):!1;default:return!1}}function Sc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ac(t){if(he){var e=dt;if(e){var n=e;if(!vp(t,e)){if(Sc(t))throw Error(L(418));e=Bn(n.nextSibling);var r=pt;e&&vp(t,e)?wy(r,n):(t.flags=t.flags&-4097|2,he=!1,pt=t)}}else{if(Sc(t))throw Error(L(418));t.flags=t.flags&-4097|2,he=!1,pt=t}}}function Ep(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pt=t}function Wo(t){if(t!==pt)return!1;if(!he)return Ep(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ec(t.type,t.memoizedProps)),e&&(e=dt)){if(Sc(t))throw Ty(),Error(L(418));for(;e;)wy(t,e),e=Bn(e.nextSibling)}if(Ep(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dt=Bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dt=null}}else dt=pt?Bn(t.stateNode.nextSibling):null;return!0}function Ty(){for(var t=dt;t;)t=Bn(t.nextSibling)}function wi(){dt=pt=null,he=!1}function Dh(t){Nt===null?Nt=[t]:Nt.push(t)}var G0=yn.ReactCurrentBatchConfig;function us(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function qo(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wp(t){var e=t._init;return e(t._payload)}function Iy(t){function e(S,E){if(t){var A=S.deletions;A===null?(S.deletions=[E],S.flags|=16):A.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function i(S,E){return S=qn(S,E),S.index=0,S.sibling=null,S}function s(S,E,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<E?(S.flags|=2,E):A):(S.flags|=2,E)):(S.flags|=1048576,E)}function a(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,E,A,D){return E===null||E.tag!==6?(E=Mu(A,S.mode,D),E.return=S,E):(E=i(E,A),E.return=S,E)}function c(S,E,A,D){var F=A.type;return F===Xr?p(S,E,A.props.children,D,A.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Rn&&wp(F)===E.type)?(D=i(E,A.props),D.ref=us(S,E,A),D.return=S,D):(D=ma(A.type,A.key,A.props,null,S.mode,D),D.ref=us(S,E,A),D.return=S,D)}function h(S,E,A,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=bu(A,S.mode,D),E.return=S,E):(E=i(E,A.children||[]),E.return=S,E)}function p(S,E,A,D,F){return E===null||E.tag!==7?(E=Sr(A,S.mode,D,F),E.return=S,E):(E=i(E,A),E.return=S,E)}function m(S,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Mu(""+E,S.mode,A),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Lo:return A=ma(E.type,E.key,E.props,null,S.mode,A),A.ref=us(S,null,E),A.return=S,A;case Qr:return E=bu(E,S.mode,A),E.return=S,E;case Rn:var D=E._init;return m(S,D(E._payload),A)}if(ps(E)||is(E))return E=Sr(E,S.mode,A,null),E.return=S,E;qo(S,E)}return null}function y(S,E,A,D){var F=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return F!==null?null:l(S,E,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Lo:return A.key===F?c(S,E,A,D):null;case Qr:return A.key===F?h(S,E,A,D):null;case Rn:return F=A._init,y(S,E,F(A._payload),D)}if(ps(A)||is(A))return F!==null?null:p(S,E,A,D,null);qo(S,A)}return null}function k(S,E,A,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(A)||null,l(E,S,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Lo:return S=S.get(D.key===null?A:D.key)||null,c(E,S,D,F);case Qr:return S=S.get(D.key===null?A:D.key)||null,h(E,S,D,F);case Rn:var U=D._init;return k(S,E,A,U(D._payload),F)}if(ps(D)||is(D))return S=S.get(A)||null,p(E,S,D,F,null);qo(E,D)}return null}function N(S,E,A,D){for(var F=null,U=null,_=E,g=E=0,v=null;_!==null&&g<A.length;g++){_.index>g?(v=_,_=null):v=_.sibling;var T=y(S,_,A[g],D);if(T===null){_===null&&(_=v);break}t&&_&&T.alternate===null&&e(S,_),E=s(T,E,g),U===null?F=T:U.sibling=T,U=T,_=v}if(g===A.length)return n(S,_),he&&gr(S,g),F;if(_===null){for(;g<A.length;g++)_=m(S,A[g],D),_!==null&&(E=s(_,E,g),U===null?F=_:U.sibling=_,U=_);return he&&gr(S,g),F}for(_=r(S,_);g<A.length;g++)v=k(_,S,g,A[g],D),v!==null&&(t&&v.alternate!==null&&_.delete(v.key===null?g:v.key),E=s(v,E,g),U===null?F=v:U.sibling=v,U=v);return t&&_.forEach(function(I){return e(S,I)}),he&&gr(S,g),F}function x(S,E,A,D){var F=is(A);if(typeof F!="function")throw Error(L(150));if(A=F.call(A),A==null)throw Error(L(151));for(var U=F=null,_=E,g=E=0,v=null,T=A.next();_!==null&&!T.done;g++,T=A.next()){_.index>g?(v=_,_=null):v=_.sibling;var I=y(S,_,T.value,D);if(I===null){_===null&&(_=v);break}t&&_&&I.alternate===null&&e(S,_),E=s(I,E,g),U===null?F=I:U.sibling=I,U=I,_=v}if(T.done)return n(S,_),he&&gr(S,g),F;if(_===null){for(;!T.done;g++,T=A.next())T=m(S,T.value,D),T!==null&&(E=s(T,E,g),U===null?F=T:U.sibling=T,U=T);return he&&gr(S,g),F}for(_=r(S,_);!T.done;g++,T=A.next())T=k(_,S,g,T.value,D),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?g:T.key),E=s(T,E,g),U===null?F=T:U.sibling=T,U=T);return t&&_.forEach(function(C){return e(S,C)}),he&&gr(S,g),F}function b(S,E,A,D){if(typeof A=="object"&&A!==null&&A.type===Xr&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Lo:e:{for(var F=A.key,U=E;U!==null;){if(U.key===F){if(F=A.type,F===Xr){if(U.tag===7){n(S,U.sibling),E=i(U,A.props.children),E.return=S,S=E;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Rn&&wp(F)===U.type){n(S,U.sibling),E=i(U,A.props),E.ref=us(S,U,A),E.return=S,S=E;break e}n(S,U);break}else e(S,U);U=U.sibling}A.type===Xr?(E=Sr(A.props.children,S.mode,D,A.key),E.return=S,S=E):(D=ma(A.type,A.key,A.props,null,S.mode,D),D.ref=us(S,E,A),D.return=S,S=D)}return a(S);case Qr:e:{for(U=A.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){n(S,E.sibling),E=i(E,A.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=bu(A,S.mode,D),E.return=S,S=E}return a(S);case Rn:return U=A._init,b(S,E,U(A._payload),D)}if(ps(A))return N(S,E,A,D);if(is(A))return x(S,E,A,D);qo(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,E!==null&&E.tag===6?(n(S,E.sibling),E=i(E,A),E.return=S,S=E):(n(S,E),E=Mu(A,S.mode,D),E.return=S,S=E),a(S)):n(S,E)}return b}var Ti=Iy(!0),Sy=Iy(!1),Ua=or(null),ja=null,ii=null,Oh=null;function Vh(){Oh=ii=ja=null}function Lh(t){var e=Ua.current;le(Ua),t._currentValue=e}function Cc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function fi(t,e){ja=t,Oh=ii=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(st=!0),t.firstContext=null)}function It(t){var e=t._currentValue;if(Oh!==t)if(t={context:t,memoizedValue:e,next:null},ii===null){if(ja===null)throw Error(L(308));ii=t,ja.dependencies={lanes:0,firstContext:t}}else ii=ii.next=t;return e}var Er=null;function Mh(t){Er===null?Er=[t]:Er.push(t)}function Ay(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Mh(e)):(n.next=i.next,i.next=n),e.interleaved=n,fn(t,r)}function fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nn=!1;function bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function on(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $n(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,fn(t,n)}return i=r.interleaved,i===null?(e.next=e,Mh(r)):(e.next=i.next,i.next=e),r.interleaved=e,fn(t,n)}function ua(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Th(t,n)}}function Tp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function za(t,e,n,r){var i=t.updateQueue;Nn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,h=c.next;c.next=null,a===null?s=h:a.next=h,a=c;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=c))}if(s!==null){var m=i.baseState;a=0,p=h=c=null,l=s;do{var y=l.lane,k=l.eventTime;if((r&y)===y){p!==null&&(p=p.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,x=l;switch(y=e,k=n,x.tag){case 1:if(N=x.payload,typeof N=="function"){m=N.call(k,m,y);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=x.payload,y=typeof N=="function"?N.call(k,m,y):N,y==null)break e;m=ge({},m,y);break e;case 2:Nn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else k={eventTime:k,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=k,c=m):p=p.next=k,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(p===null&&(c=m),i.baseState=c,i.firstBaseUpdate=h,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Nr|=a,t.lanes=a,t.memoizedState=m}}function Ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var uo={},Gt=or(uo),qs=or(uo),Gs=or(uo);function wr(t){if(t===uo)throw Error(L(174));return t}function Fh(t,e){switch(ie(Gs,e),ie(qs,t),ie(Gt,uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oc(e,t)}le(Gt),ie(Gt,e)}function Ii(){le(Gt),le(qs),le(Gs)}function Py(t){wr(Gs.current);var e=wr(Gt.current),n=oc(e,t.type);e!==n&&(ie(qs,t),ie(Gt,n))}function Uh(t){qs.current===t&&(le(Gt),le(qs))}var de=or(0);function Ba(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nu=[];function jh(){for(var t=0;t<Nu.length;t++)Nu[t]._workInProgressVersionPrimary=null;Nu.length=0}var ca=yn.ReactCurrentDispatcher,xu=yn.ReactCurrentBatchConfig,Rr=0,me=null,Ce=null,Ne=null,$a=!1,Is=!1,Ks=0,K0=0;function Be(){throw Error(L(321))}function zh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ut(t[n],e[n]))return!1;return!0}function Bh(t,e,n,r,i,s){if(Rr=s,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ca.current=t===null||t.memoizedState===null?J0:Z0,t=n(r,i),Is){s=0;do{if(Is=!1,Ks=0,25<=s)throw Error(L(301));s+=1,Ne=Ce=null,e.updateQueue=null,ca.current=eT,t=n(r,i)}while(Is)}if(ca.current=Ha,e=Ce!==null&&Ce.next!==null,Rr=0,Ne=Ce=me=null,$a=!1,e)throw Error(L(300));return t}function $h(){var t=Ks!==0;return Ks=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?me.memoizedState=Ne=t:Ne=Ne.next=t,Ne}function St(){if(Ce===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=Ne===null?me.memoizedState:Ne.next;if(e!==null)Ne=e,Ce=t;else{if(t===null)throw Error(L(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ne===null?me.memoizedState=Ne=t:Ne=Ne.next=t}return Ne}function Qs(t,e){return typeof e=="function"?e(t):e}function Du(t){var e=St(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,h=s;do{var p=h.lane;if((Rr&p)===p)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(l=c=m,a=r):c=c.next=m,me.lanes|=p,Nr|=p}h=h.next}while(h!==null&&h!==s);c===null?a=r:c.next=l,Ut(r,e.memoizedState)||(st=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,me.lanes|=s,Nr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ou(t){var e=St(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Ut(s,e.memoizedState)||(st=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ky(){}function Ry(t,e){var n=me,r=St(),i=e(),s=!Ut(r.memoizedState,i);if(s&&(r.memoizedState=i,st=!0),r=r.queue,Hh(Dy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Xs(9,xy.bind(null,n,r,i,e),void 0,null),De===null)throw Error(L(349));Rr&30||Ny(n,e,i)}return i}function Ny(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xy(t,e,n,r){e.value=n,e.getSnapshot=r,Oy(e)&&Vy(t)}function Dy(t,e,n){return n(function(){Oy(e)&&Vy(t)})}function Oy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ut(t,n)}catch{return!0}}function Vy(t){var e=fn(t,1);e!==null&&Ft(e,t,1,-1)}function Sp(t){var e=$t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qs,lastRenderedState:t},e.queue=t,t=t.dispatch=Y0.bind(null,me,t),[e.memoizedState,t]}function Xs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ly(){return St().memoizedState}function ha(t,e,n,r){var i=$t();me.flags|=t,i.memoizedState=Xs(1|e,n,void 0,r===void 0?null:r)}function Tl(t,e,n,r){var i=St();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var a=Ce.memoizedState;if(s=a.destroy,r!==null&&zh(r,a.deps)){i.memoizedState=Xs(e,n,s,r);return}}me.flags|=t,i.memoizedState=Xs(1|e,n,s,r)}function Ap(t,e){return ha(8390656,8,t,e)}function Hh(t,e){return Tl(2048,8,t,e)}function My(t,e){return Tl(4,2,t,e)}function by(t,e){return Tl(4,4,t,e)}function Fy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Uy(t,e,n){return n=n!=null?n.concat([t]):null,Tl(4,4,Fy.bind(null,e,t),n)}function Wh(){}function jy(t,e){var n=St();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function zy(t,e){var n=St();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function By(t,e,n){return Rr&21?(Ut(n,e)||(n=Gg(),me.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,st=!0),t.memoizedState=n)}function Q0(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=xu.transition;xu.transition={};try{t(!1),e()}finally{ne=n,xu.transition=r}}function $y(){return St().memoizedState}function X0(t,e,n){var r=Wn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hy(t))Wy(e,n);else if(n=Ay(t,e,n,r),n!==null){var i=et();Ft(n,t,r,i),qy(n,e,r)}}function Y0(t,e,n){var r=Wn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hy(t))Wy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Ut(l,a)){var c=e.interleaved;c===null?(i.next=i,Mh(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=Ay(t,e,i,r),n!==null&&(i=et(),Ft(n,t,r,i),qy(n,e,r))}}function Hy(t){var e=t.alternate;return t===me||e!==null&&e===me}function Wy(t,e){Is=$a=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Th(t,n)}}var Ha={readContext:It,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},J0={readContext:It,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:It,useEffect:Ap,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ha(4194308,4,Fy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return ha(4,2,t,e)},useMemo:function(t,e){var n=$t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=X0.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:Sp,useDebugValue:Wh,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=Sp(!1),e=t[0];return t=Q0.bind(null,t[1]),$t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=me,i=$t();if(he){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),De===null)throw Error(L(349));Rr&30||Ny(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ap(Dy.bind(null,r,s,t),[t]),r.flags|=2048,Xs(9,xy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$t(),e=De.identifierPrefix;if(he){var n=nn,r=tn;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ks++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=K0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Z0={readContext:It,useCallback:jy,useContext:It,useEffect:Hh,useImperativeHandle:Uy,useInsertionEffect:My,useLayoutEffect:by,useMemo:zy,useReducer:Du,useRef:Ly,useState:function(){return Du(Qs)},useDebugValue:Wh,useDeferredValue:function(t){var e=St();return By(e,Ce.memoizedState,t)},useTransition:function(){var t=Du(Qs)[0],e=St().memoizedState;return[t,e]},useMutableSource:ky,useSyncExternalStore:Ry,useId:$y,unstable_isNewReconciler:!1},eT={readContext:It,useCallback:jy,useContext:It,useEffect:Hh,useImperativeHandle:Uy,useInsertionEffect:My,useLayoutEffect:by,useMemo:zy,useReducer:Ou,useRef:Ly,useState:function(){return Ou(Qs)},useDebugValue:Wh,useDeferredValue:function(t){var e=St();return Ce===null?e.memoizedState=t:By(e,Ce.memoizedState,t)},useTransition:function(){var t=Ou(Qs)[0],e=St().memoizedState;return[t,e]},useMutableSource:ky,useSyncExternalStore:Ry,useId:$y,unstable_isNewReconciler:!1};function kt(t,e){if(t&&t.defaultProps){e=ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Pc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=et(),i=Wn(t),s=on(r,i);s.payload=e,n!=null&&(s.callback=n),e=$n(t,s,i),e!==null&&(Ft(e,t,i,r),ua(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=et(),i=Wn(t),s=on(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$n(t,s,i),e!==null&&(Ft(e,t,i,r),ua(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=et(),r=Wn(t),i=on(n,r);i.tag=2,e!=null&&(i.callback=e),e=$n(t,i,r),e!==null&&(Ft(e,t,r,n),ua(e,t,r))}};function Cp(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Bs(n,r)||!Bs(i,s):!0}function Gy(t,e,n){var r=!1,i=Zn,s=e.contextType;return typeof s=="object"&&s!==null?s=It(s):(i=at(e)?Pr:Qe.current,r=e.contextTypes,s=(r=r!=null)?Ei(t,i):Zn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function kc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},bh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=It(s):(s=at(e)?Pr:Qe.current,i.context=Ei(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Il.enqueueReplaceState(i,i.state,null),za(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Si(t,e){try{var n="",r=e;do n+=kw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Vu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tT=typeof WeakMap=="function"?WeakMap:Map;function Ky(t,e,n){n=on(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){qa||(qa=!0,Uc=r),Rc(t,e)},n}function Qy(t,e,n){n=on(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rc(t,e),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function kp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mT.bind(null,t,e,n),e.then(t,t))}function Rp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Np(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=on(-1,1),e.tag=2,$n(n,e,1))),n.lanes|=1),t)}var nT=yn.ReactCurrentOwner,st=!1;function Ze(t,e,n,r){e.child=t===null?Sy(e,null,n,r):Ti(e,t.child,n,r)}function xp(t,e,n,r,i){n=n.render;var s=e.ref;return fi(e,i),r=Bh(t,e,n,r,s,i),n=$h(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dn(t,e,i)):(he&&n&&Nh(e),e.flags|=1,Ze(t,e,r,i),e.child)}function Dp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Zh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Xy(t,e,s,r,i)):(t=ma(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bs,n(a,r)&&t.ref===e.ref)return dn(t,e,i)}return e.flags|=1,t=qn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Xy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bs(s,r)&&t.ref===e.ref)if(st=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(st=!0);else return e.lanes=t.lanes,dn(t,e,i)}return Nc(t,e,n,r,i)}function Yy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(oi,ht),ht|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(oi,ht),ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(oi,ht),ht|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ie(oi,ht),ht|=r;return Ze(t,e,i,n),e.child}function Jy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nc(t,e,n,r,i){var s=at(n)?Pr:Qe.current;return s=Ei(e,s),fi(e,i),n=Bh(t,e,n,r,s,i),r=$h(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dn(t,e,i)):(he&&r&&Nh(e),e.flags|=1,Ze(t,e,n,i),e.child)}function Op(t,e,n,r,i){if(at(n)){var s=!0;Ma(e)}else s=!1;if(fi(e,i),e.stateNode===null)fa(t,e),Gy(e,n,r),kc(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=It(h):(h=at(n)?Pr:Qe.current,h=Ei(e,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==h)&&Pp(e,a,r,h),Nn=!1;var y=e.memoizedState;a.state=y,za(e,r,a,i),c=e.memoizedState,l!==r||y!==c||ot.current||Nn?(typeof p=="function"&&(Pc(e,n,p,r),c=e.memoizedState),(l=Nn||Cp(e,n,l,r,y,c,h))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),a.props=r,a.state=c,a.context=h,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Cy(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:kt(e.type,l),a.props=h,m=e.pendingProps,y=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=It(c):(c=at(n)?Pr:Qe.current,c=Ei(e,c));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||y!==c)&&Pp(e,a,r,c),Nn=!1,y=e.memoizedState,a.state=y,za(e,r,a,i);var N=e.memoizedState;l!==m||y!==N||ot.current||Nn?(typeof k=="function"&&(Pc(e,n,k,r),N=e.memoizedState),(h=Nn||Cp(e,n,h,r,y,N,c)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,N,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,N,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),a.props=r,a.state=N,a.context=c,r=h):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return xc(t,e,n,r,s,i)}function xc(t,e,n,r,i,s){Jy(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&_p(e,n,!1),dn(t,e,s);r=e.stateNode,nT.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=Ti(e,t.child,null,s),e.child=Ti(e,null,l,s)):Ze(t,e,l,s),e.memoizedState=r.state,i&&_p(e,n,!0),e.child}function Zy(t){var e=t.stateNode;e.pendingContext?yp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&yp(t,e.context,!1),Fh(t,e.containerInfo)}function Vp(t,e,n,r,i){return wi(),Dh(i),e.flags|=256,Ze(t,e,n,r),e.child}var Dc={dehydrated:null,treeContext:null,retryLane:0};function Oc(t){return{baseLanes:t,cachePool:null,transitions:null}}function e_(t,e,n){var r=e.pendingProps,i=de.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ie(de,i&1),t===null)return Ac(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Cl(a,r,0,null),t=Sr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Oc(n),e.memoizedState=Dc,t):qh(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return rT(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=qn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=qn(l,s):(s=Sr(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?Oc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Dc,r}return s=t.child,t=s.sibling,r=qn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function qh(t,e){return e=Cl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Go(t,e,n,r){return r!==null&&Dh(r),Ti(e,t.child,null,n),t=qh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rT(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=Vu(Error(L(422))),Go(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Cl({mode:"visible",children:r.children},i,0,null),s=Sr(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ti(e,t.child,null,a),e.child.memoizedState=Oc(a),e.memoizedState=Dc,s);if(!(e.mode&1))return Go(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=Vu(s,r,void 0),Go(t,e,a,r)}if(l=(a&t.childLanes)!==0,st||l){if(r=De,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,fn(t,i),Ft(r,t,i,-1))}return Jh(),r=Vu(Error(L(421))),Go(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=gT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dt=Bn(i.nextSibling),pt=e,he=!0,Nt=null,t!==null&&(vt[Et++]=tn,vt[Et++]=nn,vt[Et++]=kr,tn=t.id,nn=t.overflow,kr=e),e=qh(e,r.children),e.flags|=4096,e)}function Lp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Cc(t.return,e,n)}function Lu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function t_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ze(t,e,r.children,n),r=de.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lp(t,n,e);else if(t.tag===19)Lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(de,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ba(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Lu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ba(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Lu(e,!0,n,null,s);break;case"together":Lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=qn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iT(t,e,n){switch(e.tag){case 3:Zy(e),wi();break;case 5:Py(e);break;case 1:at(e.type)&&Ma(e);break;case 4:Fh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ie(Ua,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(de,de.current&1),e.flags|=128,null):n&e.child.childLanes?e_(t,e,n):(ie(de,de.current&1),t=dn(t,e,n),t!==null?t.sibling:null);ie(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return t_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,Yy(t,e,n)}return dn(t,e,n)}var n_,Vc,r_,i_;n_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vc=function(){};r_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,wr(Gt.current);var s=null;switch(n){case"input":i=nc(t,i),r=nc(t,r),s=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),s=[];break;case"textarea":i=sc(t,i),r=sc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Va)}ac(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ls.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var c=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&c!==l&&(c!=null||l!=null))if(h==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(h,n)),n=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ls.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&ae("scroll",t),s||l===c||(s=[])):(s=s||[]).push(h,c))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};i_=function(t,e,n,r){n!==r&&(e.flags|=4)};function cs(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sT(t,e,n){var r=e.pendingProps;switch(xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return at(e.type)&&La(),$e(e),null;case 3:return r=e.stateNode,Ii(),le(ot),le(Qe),jh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nt!==null&&(Bc(Nt),Nt=null))),Vc(t,e),$e(e),null;case 5:Uh(e);var i=wr(Gs.current);if(n=e.type,t!==null&&e.stateNode!=null)r_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return $e(e),null}if(t=wr(Gt.current),Wo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wt]=e,r[Ws]=s,t=(e.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<gs.length;i++)ae(gs[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Hd(r,s),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ae("invalid",r);break;case"textarea":qd(r,s),ae("invalid",r)}ac(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ho(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ho(r.textContent,l,t),i=["children",""+l]):Ls.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ae("scroll",r)}switch(n){case"input":Mo(r),Wd(r,s,!0);break;case"textarea":Mo(r),Gd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Va)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Wt]=e,t[Ws]=r,n_(t,e,!1,!1),e.stateNode=t;e:{switch(a=lc(n,r),n){case"dialog":ae("cancel",t),ae("close",t),i=r;break;case"iframe":case"object":case"embed":ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<gs.length;i++)ae(gs[i],t);i=r;break;case"source":ae("error",t),i=r;break;case"img":case"image":case"link":ae("error",t),ae("load",t),i=r;break;case"details":ae("toggle",t),i=r;break;case"input":Hd(t,r),i=nc(t,r),ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ae("invalid",t);break;case"textarea":qd(t,r),i=sc(t,r),ae("invalid",t);break;default:i=r}ac(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Lg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Og(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ms(t,c):typeof c=="number"&&Ms(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ls.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ae("scroll",t):c!=null&&gh(t,s,c,a))}switch(n){case"input":Mo(t),Wd(t,r,!1);break;case"textarea":Mo(t),Gd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Jn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?li(t,!!r.multiple,s,!1):r.defaultValue!=null&&li(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Va)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)i_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=wr(Gs.current),wr(Gt.current),Wo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wt]=e,(s=r.nodeValue!==n)&&(t=pt,t!==null))switch(t.tag){case 3:Ho(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ho(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=e,e.stateNode=r}return $e(e),null;case 13:if(le(de),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&dt!==null&&e.mode&1&&!(e.flags&128))Ty(),wi(),e.flags|=98560,s=!1;else if(s=Wo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[Wt]=e}else wi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else Nt!==null&&(Bc(Nt),Nt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||de.current&1?Pe===0&&(Pe=3):Jh())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return Ii(),Vc(t,e),t===null&&$s(e.stateNode.containerInfo),$e(e),null;case 10:return Lh(e.type._context),$e(e),null;case 17:return at(e.type)&&La(),$e(e),null;case 19:if(le(de),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)cs(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ba(t),a!==null){for(e.flags|=128,cs(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>Ai&&(e.flags|=128,r=!0,cs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ba(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),cs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!he)return $e(e),null}else 2*we()-s.renderingStartTime>Ai&&n!==1073741824&&(e.flags|=128,r=!0,cs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=de.current,ie(de,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return Yh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ht&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function oT(t,e){switch(xh(e),e.tag){case 1:return at(e.type)&&La(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ii(),le(ot),le(Qe),jh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uh(e),null;case 13:if(le(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(de),null;case 4:return Ii(),null;case 10:return Lh(e.type._context),null;case 22:case 23:return Yh(),null;case 24:return null;default:return null}}var Ko=!1,qe=!1,aT=typeof WeakSet=="function"?WeakSet:Set,z=null;function si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function Lc(t,e,n){try{n()}catch(r){_e(t,e,r)}}var Mp=!1;function lT(t,e){if(_c=xa,t=uy(),Rh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,h=0,p=0,m=t,y=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(l=a+i),m!==s||r!==0&&m.nodeType!==3||(c=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(k=m.firstChild)!==null;)y=m,m=k;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=a),y===s&&++p===r&&(c=a),(k=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=k}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(vc={focusedElem:t,selectionRange:n},xa=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var x=N.memoizedProps,b=N.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?x:kt(e.type,x),b);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(D){_e(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return N=Mp,Mp=!1,N}function Ss(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lc(e,n,s)}i=i.next}while(i!==r)}}function Sl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Mc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function s_(t){var e=t.alternate;e!==null&&(t.alternate=null,s_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wt],delete e[Ws],delete e[Tc],delete e[H0],delete e[W0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function o_(t){return t.tag===5||t.tag===3||t.tag===4}function bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||o_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Va));else if(r!==4&&(t=t.child,t!==null))for(bc(t,e,n),t=t.sibling;t!==null;)bc(t,e,n),t=t.sibling}function Fc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fc(t,e,n),t=t.sibling;t!==null;)Fc(t,e,n),t=t.sibling}var Ve=null,Rt=!1;function Pn(t,e,n){for(n=n.child;n!==null;)a_(t,e,n),n=n.sibling}function a_(t,e,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 5:qe||si(n,e);case 6:var r=Ve,i=Rt;Ve=null,Pn(t,e,n),Ve=r,Rt=i,Ve!==null&&(Rt?(t=Ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Rt?(t=Ve,n=n.stateNode,t.nodeType===8?ku(t.parentNode,n):t.nodeType===1&&ku(t,n),js(t)):ku(Ve,n.stateNode));break;case 4:r=Ve,i=Rt,Ve=n.stateNode.containerInfo,Rt=!0,Pn(t,e,n),Ve=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Lc(n,e,a),i=i.next}while(i!==r)}Pn(t,e,n);break;case 1:if(!qe&&(si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,e,l)}Pn(t,e,n);break;case 21:Pn(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,Pn(t,e,n),qe=r):Pn(t,e,n);break;default:Pn(t,e,n)}}function Fp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aT),e.forEach(function(r){var i=yT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ve=l.stateNode,Rt=!1;break e;case 3:Ve=l.stateNode.containerInfo,Rt=!0;break e;case 4:Ve=l.stateNode.containerInfo,Rt=!0;break e}l=l.return}if(Ve===null)throw Error(L(160));a_(s,a,i),Ve=null,Rt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(h){_e(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)l_(e,t),e=e.sibling}function l_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pt(e,t),Bt(t),r&4){try{Ss(3,t,t.return),Sl(3,t)}catch(x){_e(t,t.return,x)}try{Ss(5,t,t.return)}catch(x){_e(t,t.return,x)}}break;case 1:Pt(e,t),Bt(t),r&512&&n!==null&&si(n,n.return);break;case 5:if(Pt(e,t),Bt(t),r&512&&n!==null&&si(n,n.return),t.flags&32){var i=t.stateNode;try{Ms(i,"")}catch(x){_e(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ng(i,s),lc(l,a);var h=lc(l,s);for(a=0;a<c.length;a+=2){var p=c[a],m=c[a+1];p==="style"?Lg(i,m):p==="dangerouslySetInnerHTML"?Og(i,m):p==="children"?Ms(i,m):gh(i,p,m,h)}switch(l){case"input":rc(i,s);break;case"textarea":xg(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?li(i,!!s.multiple,k,!1):y!==!!s.multiple&&(s.defaultValue!=null?li(i,!!s.multiple,s.defaultValue,!0):li(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ws]=s}catch(x){_e(t,t.return,x)}}break;case 6:if(Pt(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){_e(t,t.return,x)}}break;case 3:if(Pt(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{js(e.containerInfo)}catch(x){_e(t,t.return,x)}break;case 4:Pt(e,t),Bt(t);break;case 13:Pt(e,t),Bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Qh=we())),r&4&&Fp(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(h=qe)||p,Pt(e,t),qe=h):Pt(e,t),Bt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(z=t,p=t.child;p!==null;){for(m=z=p;z!==null;){switch(y=z,k=y.child,y.tag){case 0:case 11:case 14:case 15:Ss(4,y,y.return);break;case 1:si(y,y.return);var N=y.stateNode;if(typeof N.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(x){_e(r,n,x)}}break;case 5:si(y,y.return);break;case 22:if(y.memoizedState!==null){jp(m);continue}}k!==null?(k.return=y,z=k):jp(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Vg("display",a))}catch(x){_e(t,t.return,x)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(x){_e(t,t.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pt(e,t),Bt(t),r&4&&Fp(t);break;case 21:break;default:Pt(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(o_(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ms(i,""),r.flags&=-33);var s=bp(t);Fc(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=bp(t);bc(t,l,a);break;default:throw Error(L(161))}}catch(c){_e(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uT(t,e,n){z=t,u_(t)}function u_(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ko;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||qe;l=Ko;var h=qe;if(Ko=a,(qe=c)&&!h)for(z=i;z!==null;)a=z,c=a.child,a.tag===22&&a.memoizedState!==null?zp(i):c!==null?(c.return=a,z=c):zp(i);for(;s!==null;)z=s,u_(s),s=s.sibling;z=i,Ko=l,qe=h}Up(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):Up(t)}}function Up(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||Sl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ip(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ip(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&js(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}qe||e.flags&512&&Mc(e)}catch(y){_e(e,e.return,y)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function jp(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function zp(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sl(4,e)}catch(c){_e(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){_e(e,i,c)}}var s=e.return;try{Mc(e)}catch(c){_e(e,s,c)}break;case 5:var a=e.return;try{Mc(e)}catch(c){_e(e,a,c)}}}catch(c){_e(e,e.return,c)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var cT=Math.ceil,Wa=yn.ReactCurrentDispatcher,Gh=yn.ReactCurrentOwner,Tt=yn.ReactCurrentBatchConfig,ee=0,De=null,Ie=null,Fe=0,ht=0,oi=or(0),Pe=0,Ys=null,Nr=0,Al=0,Kh=0,As=null,it=null,Qh=0,Ai=1/0,Zt=null,qa=!1,Uc=null,Hn=null,Qo=!1,Fn=null,Ga=0,Cs=0,jc=null,da=-1,pa=0;function et(){return ee&6?we():da!==-1?da:da=we()}function Wn(t){return t.mode&1?ee&2&&Fe!==0?Fe&-Fe:G0.transition!==null?(pa===0&&(pa=Gg()),pa):(t=ne,t!==0||(t=window.event,t=t===void 0?16:ey(t.type)),t):1}function Ft(t,e,n,r){if(50<Cs)throw Cs=0,jc=null,Error(L(185));oo(t,n,r),(!(ee&2)||t!==De)&&(t===De&&(!(ee&2)&&(Al|=n),Pe===4&&Dn(t,Fe)),lt(t,r),n===1&&ee===0&&!(e.mode&1)&&(Ai=we()+500,wl&&ar()))}function lt(t,e){var n=t.callbackNode;Gw(t,e);var r=Na(t,t===De?Fe:0);if(r===0)n!==null&&Xd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xd(n),e===1)t.tag===0?q0(Bp.bind(null,t)):vy(Bp.bind(null,t)),B0(function(){!(ee&6)&&ar()}),n=null;else{switch(Kg(r)){case 1:n=wh;break;case 4:n=Wg;break;case 16:n=Ra;break;case 536870912:n=qg;break;default:n=Ra}n=y_(n,c_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function c_(t,e){if(da=-1,pa=0,ee&6)throw Error(L(327));var n=t.callbackNode;if(di()&&t.callbackNode!==n)return null;var r=Na(t,t===De?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ka(t,r);else{e=r;var i=ee;ee|=2;var s=f_();(De!==t||Fe!==e)&&(Zt=null,Ai=we()+500,Ir(t,e));do try{dT();break}catch(l){h_(t,l)}while(!0);Vh(),Wa.current=s,ee=i,Ie!==null?e=0:(De=null,Fe=0,e=Pe)}if(e!==0){if(e===2&&(i=dc(t),i!==0&&(r=i,e=zc(t,i))),e===1)throw n=Ys,Ir(t,0),Dn(t,r),lt(t,we()),n;if(e===6)Dn(t,r);else{if(i=t.current.alternate,!(r&30)&&!hT(i)&&(e=Ka(t,r),e===2&&(s=dc(t),s!==0&&(r=s,e=zc(t,s))),e===1))throw n=Ys,Ir(t,0),Dn(t,r),lt(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:yr(t,it,Zt);break;case 3:if(Dn(t,r),(r&130023424)===r&&(e=Qh+500-we(),10<e)){if(Na(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wc(yr.bind(null,t,it,Zt),e);break}yr(t,it,Zt);break;case 4:if(Dn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-bt(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cT(r/1960))-r,10<r){t.timeoutHandle=wc(yr.bind(null,t,it,Zt),r);break}yr(t,it,Zt);break;case 5:yr(t,it,Zt);break;default:throw Error(L(329))}}}return lt(t,we()),t.callbackNode===n?c_.bind(null,t):null}function zc(t,e){var n=As;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=Ka(t,e),t!==2&&(e=it,it=n,e!==null&&Bc(e)),t}function Bc(t){it===null?it=t:it.push.apply(it,t)}function hT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dn(t,e){for(e&=~Kh,e&=~Al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bt(e),r=1<<n;t[n]=-1,e&=~r}}function Bp(t){if(ee&6)throw Error(L(327));di();var e=Na(t,0);if(!(e&1))return lt(t,we()),null;var n=Ka(t,e);if(t.tag!==0&&n===2){var r=dc(t);r!==0&&(e=r,n=zc(t,r))}if(n===1)throw n=Ys,Ir(t,0),Dn(t,e),lt(t,we()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,it,Zt),lt(t,we()),null}function Xh(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Ai=we()+500,wl&&ar())}}function xr(t){Fn!==null&&Fn.tag===0&&!(ee&6)&&di();var e=ee;ee|=1;var n=Tt.transition,r=ne;try{if(Tt.transition=null,ne=1,t)return t()}finally{ne=r,Tt.transition=n,ee=e,!(ee&6)&&ar()}}function Yh(){ht=oi.current,le(oi)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,z0(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(xh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&La();break;case 3:Ii(),le(ot),le(Qe),jh();break;case 5:Uh(r);break;case 4:Ii();break;case 13:le(de);break;case 19:le(de);break;case 10:Lh(r.type._context);break;case 22:case 23:Yh()}n=n.return}if(De=t,Ie=t=qn(t.current,null),Fe=ht=e,Pe=0,Ys=null,Kh=Al=Nr=0,it=As=null,Er!==null){for(e=0;e<Er.length;e++)if(n=Er[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Er=null}return t}function h_(t,e){do{var n=Ie;try{if(Vh(),ca.current=Ha,$a){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$a=!1}if(Rr=0,Ne=Ce=me=null,Is=!1,Ks=0,Gh.current=null,n===null||n.return===null){Pe=1,Ys=e,Ie=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=Fe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=Rp(a);if(k!==null){k.flags&=-257,Np(k,a,l,s,e),k.mode&1&&kp(s,h,e),e=k,c=h;var N=e.updateQueue;if(N===null){var x=new Set;x.add(c),e.updateQueue=x}else N.add(c);break e}else{if(!(e&1)){kp(s,h,e),Jh();break e}c=Error(L(426))}}else if(he&&l.mode&1){var b=Rp(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Np(b,a,l,s,e),Dh(Si(c,l));break e}}s=c=Si(c,l),Pe!==4&&(Pe=2),As===null?As=[s]:As.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=Ky(s,c,e);Tp(s,S);break e;case 1:l=c;var E=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Hn===null||!Hn.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=Qy(s,l,e);Tp(s,D);break e}}s=s.return}while(s!==null)}p_(n)}catch(F){e=F,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function f_(){var t=Wa.current;return Wa.current=Ha,t===null?Ha:t}function Jh(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),De===null||!(Nr&268435455)&&!(Al&268435455)||Dn(De,Fe)}function Ka(t,e){var n=ee;ee|=2;var r=f_();(De!==t||Fe!==e)&&(Zt=null,Ir(t,e));do try{fT();break}catch(i){h_(t,i)}while(!0);if(Vh(),ee=n,Wa.current=r,Ie!==null)throw Error(L(261));return De=null,Fe=0,Pe}function fT(){for(;Ie!==null;)d_(Ie)}function dT(){for(;Ie!==null&&!Fw();)d_(Ie)}function d_(t){var e=g_(t.alternate,t,ht);t.memoizedProps=t.pendingProps,e===null?p_(t):Ie=e,Gh.current=null}function p_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oT(n,e),n!==null){n.flags&=32767,Ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,Ie=null;return}}else if(n=sT(n,e,ht),n!==null){Ie=n;return}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);Pe===0&&(Pe=5)}function yr(t,e,n){var r=ne,i=Tt.transition;try{Tt.transition=null,ne=1,pT(t,e,n,r)}finally{Tt.transition=i,ne=r}return null}function pT(t,e,n,r){do di();while(Fn!==null);if(ee&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Kw(t,s),t===De&&(Ie=De=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qo||(Qo=!0,y_(Ra,function(){return di(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tt.transition,Tt.transition=null;var a=ne;ne=1;var l=ee;ee|=4,Gh.current=null,lT(t,n),l_(n,t),V0(vc),xa=!!_c,vc=_c=null,t.current=n,uT(n),Uw(),ee=l,ne=a,Tt.transition=s}else t.current=n;if(Qo&&(Qo=!1,Fn=t,Ga=i),s=t.pendingLanes,s===0&&(Hn=null),Bw(n.stateNode),lt(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qa)throw qa=!1,t=Uc,Uc=null,t;return Ga&1&&t.tag!==0&&di(),s=t.pendingLanes,s&1?t===jc?Cs++:(Cs=0,jc=t):Cs=0,ar(),null}function di(){if(Fn!==null){var t=Kg(Ga),e=Tt.transition,n=ne;try{if(Tt.transition=null,ne=16>t?16:t,Fn===null)var r=!1;else{if(t=Fn,Fn=null,Ga=0,ee&6)throw Error(L(331));var i=ee;for(ee|=4,z=t.current;z!==null;){var s=z,a=s.child;if(z.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var h=l[c];for(z=h;z!==null;){var p=z;switch(p.tag){case 0:case 11:case 15:Ss(8,p,s)}var m=p.child;if(m!==null)m.return=p,z=m;else for(;z!==null;){p=z;var y=p.sibling,k=p.return;if(s_(p),p===h){z=null;break}if(y!==null){y.return=k,z=y;break}z=k}}}var N=s.alternate;if(N!==null){var x=N.child;if(x!==null){N.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}z=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,z=a;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ss(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,z=S;break e}z=s.return}}var E=t.current;for(z=E;z!==null;){a=z;var A=a.child;if(a.subtreeFlags&2064&&A!==null)A.return=a,z=A;else e:for(a=E;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Sl(9,l)}}catch(F){_e(l,l.return,F)}if(l===a){z=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,z=D;break e}z=l.return}}if(ee=i,ar(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(gl,t)}catch{}r=!0}return r}finally{ne=n,Tt.transition=e}}return!1}function $p(t,e,n){e=Si(n,e),e=Ky(t,e,1),t=$n(t,e,1),e=et(),t!==null&&(oo(t,1,e),lt(t,e))}function _e(t,e,n){if(t.tag===3)$p(t,t,n);else for(;e!==null;){if(e.tag===3){$p(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){t=Si(n,t),t=Qy(e,t,1),e=$n(e,t,1),t=et(),e!==null&&(oo(e,1,t),lt(e,t));break}}e=e.return}}function mT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=et(),t.pingedLanes|=t.suspendedLanes&n,De===t&&(Fe&n)===n&&(Pe===4||Pe===3&&(Fe&130023424)===Fe&&500>we()-Qh?Ir(t,0):Kh|=n),lt(t,e)}function m_(t,e){e===0&&(t.mode&1?(e=Uo,Uo<<=1,!(Uo&130023424)&&(Uo=4194304)):e=1);var n=et();t=fn(t,e),t!==null&&(oo(t,e,n),lt(t,n))}function gT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),m_(t,n)}function yT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),m_(t,n)}var g_;g_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ot.current)st=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return st=!1,iT(t,e,n);st=!!(t.flags&131072)}else st=!1,he&&e.flags&1048576&&Ey(e,Fa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fa(t,e),t=e.pendingProps;var i=Ei(e,Qe.current);fi(e,n),i=Bh(null,e,r,t,i,n);var s=$h();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,at(r)?(s=!0,Ma(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bh(e),i.updater=Il,e.stateNode=i,i._reactInternals=e,kc(e,r,t,n),e=xc(null,e,r,!0,s,n)):(e.tag=0,he&&s&&Nh(e),Ze(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vT(r),t=kt(r,t),i){case 0:e=Nc(null,e,r,t,n);break e;case 1:e=Op(null,e,r,t,n);break e;case 11:e=xp(null,e,r,t,n);break e;case 14:e=Dp(null,e,r,kt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Nc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Op(t,e,r,i,n);case 3:e:{if(Zy(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Cy(t,e),za(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Si(Error(L(423)),e),e=Vp(t,e,r,n,i);break e}else if(r!==i){i=Si(Error(L(424)),e),e=Vp(t,e,r,n,i);break e}else for(dt=Bn(e.stateNode.containerInfo.firstChild),pt=e,he=!0,Nt=null,n=Sy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wi(),r===i){e=dn(t,e,n);break e}Ze(t,e,r,n)}e=e.child}return e;case 5:return Py(e),t===null&&Ac(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,Ec(r,i)?a=null:s!==null&&Ec(r,s)&&(e.flags|=32),Jy(t,e),Ze(t,e,a,n),e.child;case 6:return t===null&&Ac(e),null;case 13:return e_(t,e,n);case 4:return Fh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ti(e,null,r,n):Ze(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),xp(t,e,r,i,n);case 7:return Ze(t,e,e.pendingProps,n),e.child;case 8:return Ze(t,e,e.pendingProps.children,n),e.child;case 12:return Ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,ie(Ua,r._currentValue),r._currentValue=a,s!==null)if(Ut(s.value,a)){if(s.children===i.children&&!ot.current){e=dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=on(-1,n&-n),c.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?c.next=c:(c.next=p.next,p.next=c),h.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Cc(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(L(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Cc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Ze(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,fi(e,n),i=It(i),r=r(i),e.flags|=1,Ze(t,e,r,n),e.child;case 14:return r=e.type,i=kt(r,e.pendingProps),i=kt(r.type,i),Dp(t,e,r,i,n);case 15:return Xy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),fa(t,e),e.tag=1,at(r)?(t=!0,Ma(e)):t=!1,fi(e,n),Gy(e,r,i),kc(e,r,i,n),xc(null,e,r,!0,t,n);case 19:return t_(t,e,n);case 22:return Yy(t,e,n)}throw Error(L(156,e.tag))};function y_(t,e){return Hg(t,e)}function _T(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(t,e,n,r){return new _T(t,e,n,r)}function Zh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vT(t){if(typeof t=="function")return Zh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_h)return 11;if(t===vh)return 14}return 2}function qn(t,e){var n=t.alternate;return n===null?(n=wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ma(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Zh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Xr:return Sr(n.children,i,s,e);case yh:a=8,i|=8;break;case Ju:return t=wt(12,n,e,i|2),t.elementType=Ju,t.lanes=s,t;case Zu:return t=wt(13,n,e,i),t.elementType=Zu,t.lanes=s,t;case ec:return t=wt(19,n,e,i),t.elementType=ec,t.lanes=s,t;case Pg:return Cl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ag:a=10;break e;case Cg:a=9;break e;case _h:a=11;break e;case vh:a=14;break e;case Rn:a=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=wt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Sr(t,e,n,r){return t=wt(7,t,r,e),t.lanes=n,t}function Cl(t,e,n,r){return t=wt(22,t,r,e),t.elementType=Pg,t.lanes=n,t.stateNode={isHidden:!1},t}function Mu(t,e,n){return t=wt(6,t,null,e),t.lanes=n,t}function bu(t,e,n){return e=wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ET(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yu(0),this.expirationTimes=yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ef(t,e,n,r,i,s,a,l,c){return t=new ET(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(s),t}function wT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function __(t){if(!t)return Zn;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(at(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(at(n))return _y(t,n,e)}return e}function v_(t,e,n,r,i,s,a,l,c){return t=ef(n,r,!0,t,i,s,a,l,c),t.context=__(null),n=t.current,r=et(),i=Wn(n),s=on(r,i),s.callback=e??null,$n(n,s,i),t.current.lanes=i,oo(t,i,r),lt(t,r),t}function Pl(t,e,n,r){var i=e.current,s=et(),a=Wn(i);return n=__(n),e.context===null?e.context=n:e.pendingContext=n,e=on(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=$n(i,e,a),t!==null&&(Ft(t,i,a,s),ua(t,i,a)),a}function Qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tf(t,e){Hp(t,e),(t=t.alternate)&&Hp(t,e)}function TT(){return null}var E_=typeof reportError=="function"?reportError:function(t){console.error(t)};function nf(t){this._internalRoot=t}kl.prototype.render=nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));Pl(t,e,null,null)};kl.prototype.unmount=nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){Pl(null,t,null,null)}),e[hn]=null}};function kl(t){this._internalRoot=t}kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xn.length&&e!==0&&e<xn[n].priority;n++);xn.splice(n,0,t),n===0&&Zg(t)}};function rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wp(){}function IT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Qa(a);s.call(h)}}var a=v_(e,r,t,0,null,!1,!1,"",Wp);return t._reactRootContainer=a,t[hn]=a.current,$s(t.nodeType===8?t.parentNode:t),xr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Qa(c);l.call(h)}}var c=ef(t,0,!1,null,null,!1,!1,"",Wp);return t._reactRootContainer=c,t[hn]=c.current,$s(t.nodeType===8?t.parentNode:t),xr(function(){Pl(e,c,n,r)}),c}function Nl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=Qa(a);l.call(c)}}Pl(e,a,t,i)}else a=IT(n,e,t,i,r);return Qa(a)}Qg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ms(e.pendingLanes);n!==0&&(Th(e,n|1),lt(e,we()),!(ee&6)&&(Ai=we()+500,ar()))}break;case 13:xr(function(){var r=fn(t,1);if(r!==null){var i=et();Ft(r,t,1,i)}}),tf(t,1)}};Ih=function(t){if(t.tag===13){var e=fn(t,134217728);if(e!==null){var n=et();Ft(e,t,134217728,n)}tf(t,134217728)}};Xg=function(t){if(t.tag===13){var e=Wn(t),n=fn(t,e);if(n!==null){var r=et();Ft(n,t,e,r)}tf(t,e)}};Yg=function(){return ne};Jg=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};cc=function(t,e,n){switch(e){case"input":if(rc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=El(r);if(!i)throw Error(L(90));Rg(r),rc(r,i)}}}break;case"textarea":xg(t,n);break;case"select":e=n.value,e!=null&&li(t,!!n.multiple,e,!1)}};Fg=Xh;Ug=xr;var ST={usingClientEntryPoint:!1,Events:[lo,ei,El,Mg,bg,Xh]},hs={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AT={bundleType:hs.bundleType,version:hs.version,rendererPackageName:hs.rendererPackageName,rendererConfig:hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bg(t),t===null?null:t.stateNode},findFiberByHostInstance:hs.findFiberByHostInstance||TT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{gl=Xo.inject(AT),qt=Xo}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ST;gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(e))throw Error(L(200));return wT(t,e,null,n)};gt.createRoot=function(t,e){if(!rf(t))throw Error(L(299));var n=!1,r="",i=E_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ef(t,1,!1,null,null,n,!1,r,i),t[hn]=e.current,$s(t.nodeType===8?t.parentNode:t),new nf(e)};gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=Bg(e),t=t===null?null:t.stateNode,t};gt.flushSync=function(t){return xr(t)};gt.hydrate=function(t,e,n){if(!Rl(e))throw Error(L(200));return Nl(null,t,e,!0,n)};gt.hydrateRoot=function(t,e,n){if(!rf(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=E_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=v_(e,null,t,1,n??null,i,!1,s,a),t[hn]=e.current,$s(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kl(e)};gt.render=function(t,e,n){if(!Rl(e))throw Error(L(200));return Nl(null,t,e,!1,n)};gt.unmountComponentAtNode=function(t){if(!Rl(t))throw Error(L(40));return t._reactRootContainer?(xr(function(){Nl(null,null,t,!1,function(){t._reactRootContainer=null,t[hn]=null})}),!0):!1};gt.unstable_batchedUpdates=Xh;gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Rl(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return Nl(t,e,n,!1,r)};gt.version="18.3.1-next-f1338f8080-20240426";function w_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w_)}catch(t){console.error(t)}}w_(),wg.exports=gt;var CT=wg.exports,qp=CT;Xu.createRoot=qp.createRoot,Xu.hydrateRoot=qp.hydrateRoot;const PT=()=>{};var Gp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},I_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,c=i+2<t.length,h=c?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,k=h&63;c||(k=64,a||(y=64)),r.push(n[p],n[m],n[y],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(T_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new RT;const y=s<<2|l>>4;if(r.push(y),h!==64){const k=l<<4&240|h>>2;if(r.push(k),m!==64){const N=h<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class RT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NT=function(t){const e=T_(t);return I_.encodeByteArray(e,!0)},Xa=function(t){return NT(t).replace(/\./g,"")},S_=function(t){try{return I_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=()=>xT().__FIREBASE_DEFAULTS__,OT=()=>{if(typeof process>"u"||typeof Gp>"u")return;const t=Gp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&S_(t[1]);return e&&JSON.parse(e)},xl=()=>{try{return PT()||DT()||OT()||VT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},A_=t=>{var e,n;return(n=(e=xl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},LT=t=>{const e=A_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},C_=()=>{var t;return(t=xl())==null?void 0:t.config},P_=t=>{var e;return(e=xl())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function k_(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Xa(JSON.stringify(n)),Xa(JSON.stringify(a)),""].join(".")}const Ps={};function FT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ps))Ps[e]?t.emulator.push(e):t.prod.push(e);return t}function UT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Kp=!1;function R_(t,e){if(typeof window>"u"||typeof document>"u"||!Li(window.location.host)||Ps[t]===e||Ps[t]||Kp)return;Ps[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",s=FT().prod.length>0;function a(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function c(y,k){y.setAttribute("width","24"),y.setAttribute("id",k),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Kp=!0,a()},y}function p(y,k){y.setAttribute("id",k),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function m(){const y=UT(r),k=n("text"),N=document.getElementById(k)||document.createElement("span"),x=n("learnmore"),b=document.getElementById(x)||document.createElement("a"),S=n("preprendIcon"),E=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const A=y.element;l(A),p(b,x);const D=h();c(E,S),A.append(E,N,b,D),document.body.appendChild(A)}s?(N.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(E.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function zT(){var e;const t=(e=xl())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $T(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function HT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WT(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qT(){return!zT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function GT(){try{return typeof indexedDB=="object"}catch{return!1}}function KT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QT,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,co.prototype.create)}}class co{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?XT(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new _n(i,l,r)}}function XT(t,e){return t.replace(YT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YT=/\{\$([^}]+)}/g;function JT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Qp(s)&&Qp(a)){if(!Dr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ZT(t,e){const n=new e1(t,e);return n.subscribe.bind(n)}class e1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");t1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fu),i.error===void 0&&(i.error=Fu),i.complete===void 0&&(i.complete=Fu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function t1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return t&&t._delegate?t._delegate:t}class Or{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new MT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i1(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:r1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r1(t){return t===_r?void 0:t}function i1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new n1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const o1={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},a1=J.INFO,l1={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},u1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=l1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sf{constructor(e){this.name=e,this._logLevel=a1,this._logHandler=u1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?o1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const c1=(t,e)=>e.some(n=>t instanceof n);let Xp,Yp;function h1(){return Xp||(Xp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f1(){return Yp||(Yp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N_=new WeakMap,$c=new WeakMap,x_=new WeakMap,Uu=new WeakMap,of=new WeakMap;function d1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Gn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&N_.set(n,t)}).catch(()=>{}),of.set(e,t),e}function p1(t){if($c.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});$c.set(t,e)}let Hc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||x_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function m1(t){Hc=t(Hc)}function g1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ju(this),e,...n);return x_.set(r,e.sort?e.sort():[e]),Gn(r)}:f1().includes(t)?function(...e){return t.apply(ju(this),e),Gn(N_.get(this))}:function(...e){return Gn(t.apply(ju(this),e))}}function y1(t){return typeof t=="function"?g1(t):(t instanceof IDBTransaction&&p1(t),c1(t,h1())?new Proxy(t,Hc):t)}function Gn(t){if(t instanceof IDBRequest)return d1(t);if(Uu.has(t))return Uu.get(t);const e=y1(t);return e!==t&&(Uu.set(t,e),of.set(e,t)),e}const ju=t=>of.get(t);function _1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Gn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Gn(a.result),c.oldVersion,c.newVersion,Gn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const v1=["get","getKey","getAll","getAllKeys","count"],E1=["put","add","delete","clear"],zu=new Map;function Jp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zu.get(e))return zu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=E1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v1.includes(n)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&c.done]))[0]};return zu.set(e,s),s}m1(t=>({...t,get:(e,n,r)=>Jp(e,n)||t.get(e,n,r),has:(e,n)=>!!Jp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(T1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function T1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wc="@firebase/app",Zp="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new sf("@firebase/app"),I1="@firebase/app-compat",S1="@firebase/analytics-compat",A1="@firebase/analytics",C1="@firebase/app-check-compat",P1="@firebase/app-check",k1="@firebase/auth",R1="@firebase/auth-compat",N1="@firebase/database",x1="@firebase/data-connect",D1="@firebase/database-compat",O1="@firebase/functions",V1="@firebase/functions-compat",L1="@firebase/installations",M1="@firebase/installations-compat",b1="@firebase/messaging",F1="@firebase/messaging-compat",U1="@firebase/performance",j1="@firebase/performance-compat",z1="@firebase/remote-config",B1="@firebase/remote-config-compat",$1="@firebase/storage",H1="@firebase/storage-compat",W1="@firebase/firestore",q1="@firebase/ai",G1="@firebase/firestore-compat",K1="firebase",Q1="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="[DEFAULT]",X1={[Wc]:"fire-core",[I1]:"fire-core-compat",[A1]:"fire-analytics",[S1]:"fire-analytics-compat",[P1]:"fire-app-check",[C1]:"fire-app-check-compat",[k1]:"fire-auth",[R1]:"fire-auth-compat",[N1]:"fire-rtdb",[x1]:"fire-data-connect",[D1]:"fire-rtdb-compat",[O1]:"fire-fn",[V1]:"fire-fn-compat",[L1]:"fire-iid",[M1]:"fire-iid-compat",[b1]:"fire-fcm",[F1]:"fire-fcm-compat",[U1]:"fire-perf",[j1]:"fire-perf-compat",[z1]:"fire-rc",[B1]:"fire-rc-compat",[$1]:"fire-gcs",[H1]:"fire-gcs-compat",[W1]:"fire-fst",[G1]:"fire-fst-compat",[q1]:"fire-vertex","fire-js":"fire-js",[K1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=new Map,Y1=new Map,Gc=new Map;function em(t,e){try{t.container.addComponent(e)}catch(n){pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ci(t){const e=t.name;if(Gc.has(e))return pn.debug(`There were multiple attempts to register component ${e}.`),!1;Gc.set(e,t);for(const n of Ya.values())em(n,t);for(const n of Y1.values())em(n,t);return!0}function af(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new co("app","Firebase",J1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=Q1;function D_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:qc,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Kn.create("bad-app-name",{appName:String(i)});if(n||(n=C_()),!n)throw Kn.create("no-options");const s=Ya.get(i);if(s){if(Dr(n,s.options)&&Dr(r,s.config))return s;throw Kn.create("duplicate-app",{appName:i})}const a=new s1(i);for(const c of Gc.values())a.addComponent(c);const l=new Z1(n,r,a);return Ya.set(i,l),l}function O_(t=qc){const e=Ya.get(t);if(!e&&t===qc&&C_())return D_();if(!e)throw Kn.create("no-app",{appName:t});return e}function Qn(t,e,n){let r=X1[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pn.warn(a.join(" "));return}Ci(new Or(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="firebase-heartbeat-database",tI=1,Js="firebase-heartbeat-store";let Bu=null;function V_(){return Bu||(Bu=_1(eI,tI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Js)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),Bu}async function nI(t){try{const n=(await V_()).transaction(Js),r=await n.objectStore(Js).get(L_(t));return await n.done,r}catch(e){if(e instanceof _n)pn.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pn.warn(n.message)}}}async function tm(t,e){try{const r=(await V_()).transaction(Js,"readwrite");await r.objectStore(Js).put(e,L_(t)),await r.done}catch(n){if(n instanceof _n)pn.warn(n.message);else{const r=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(r.message)}}}function L_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=1024,iI=30;class sI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>iI){const a=lI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=nm(),{heartbeatsToSend:r,unsentEntries:i}=oI(this._heartbeatsCache.heartbeats),s=Xa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return pn.warn(n),""}}}function nm(){return new Date().toISOString().substring(0,10)}function oI(t,e=rI){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),rm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GT()?KT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return tm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return tm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function rm(t){return Xa(JSON.stringify({version:2,heartbeats:t})).length}function lI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t){Ci(new Or("platform-logger",e=>new w1(e),"PRIVATE")),Ci(new Or("heartbeat",e=>new sI(e),"PRIVATE")),Qn(Wc,Zp,t),Qn(Wc,Zp,"esm2020"),Qn("fire-js","")}uI("");var cI="firebase",hI="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn(cI,hI,"app");function M_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fI=M_,b_=new co("auth","Firebase",M_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new sf("@firebase/auth");function dI(t,...e){Ja.logLevel<=J.WARN&&Ja.warn(`Auth (${Mi}): ${t}`,...e)}function ga(t,...e){Ja.logLevel<=J.ERROR&&Ja.error(`Auth (${Mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,...e){throw lf(t,...e)}function Kt(t,...e){return lf(t,...e)}function F_(t,e,n){const r={...fI(),[e]:n};return new co("auth","Firebase",r).create(e,{appName:t.name})}function Xn(t){return F_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return b_.create(t,...e)}function W(t,e,...n){if(!t)throw lf(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ga(e),new Error(e)}function gn(t,e){t||rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function pI(){return im()==="http:"||im()==="https:"}function im(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pI()||$T()||"connection"in navigator)?navigator.onLine:!0}function gI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=jT()||HT()}get(){return mI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vI=new fo(3e4,6e4);function Dl(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function bi(t,e,n,r,i={}){return j_(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=ho({key:t.config.apiKey,...a}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:c,...s};return BT()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Li(t.emulatorConfig.host)&&(h.credentials="include"),U_.fetch()(await B_(t,t.config.apiHost,n,l),h)})}async function j_(t,e,n){t._canInitEmulator=!1;const r={...yI,...e};try{const i=new EI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Yo(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yo(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Yo(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Yo(t,"user-disabled",a);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw F_(t,p,h);mn(t,p)}}catch(i){if(i instanceof _n)throw i;mn(t,"network-request-failed",{message:String(i)})}}async function z_(t,e,n,r,i={}){const s=await bi(t,e,n,r,i);return"mfaPendingCredential"in s&&mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function B_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,a=s.config.emulator?uf(t.config,i):`${t.config.apiScheme}://${i}`;return _I.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class EI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),vI.get())})}}function Yo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(t,e){return bi(t,"POST","/v1/accounts:delete",e)}async function Za(t,e){return bi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TI(t,e=!1){const n=At(t),r=await n.getIdToken(e),i=cf(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ks($u(i.auth_time)),issuedAtTime:ks($u(i.iat)),expirationTime:ks($u(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $u(t){return Number(t)*1e3}function cf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ga("JWT malformed, contained fewer than 3 sections"),null;try{const i=S_(n);return i?JSON.parse(i):(ga("Failed to decode base64 JWT payload"),null)}catch(i){return ga("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sm(t){const e=cf(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&II(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function II({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ks(this.lastLoginAt),this.creationTime=ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Zs(t,Za(e,{idToken:n}));W(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?$_(i.providerUserInfo):[],a=CI(t.providerData,s),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Qc(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function AI(t){const e=At(t);await el(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(t,e){const n=await j_(t,{},async()=>{const r=ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=await B_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Li(t.emulatorConfig.host)&&(c.credentials="include"),U_.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kI(t,e){return bi(t,"POST","/v2/accounts:revokeToken",Dl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=sm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new pi;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new SI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TI(this,e)}reload(){return AI(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await el(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await Zs(this,wI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,h=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:y,isAnonymous:k,providerData:N,stsTokenManager:x}=n;W(m&&x,e,"internal-error");const b=pi.fromJSON(this.name,x);W(typeof m=="string",e,"internal-error"),kn(r,e.name),kn(i,e.name),W(typeof y=="boolean",e,"internal-error"),W(typeof k=="boolean",e,"internal-error"),kn(s,e.name),kn(a,e.name),kn(l,e.name),kn(c,e.name),kn(h,e.name),kn(p,e.name);const S=new Lt({uid:m,auth:e,email:i,emailVerified:y,displayName:r,isAnonymous:k,photoURL:a,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:h,lastLoginAt:p});return N&&Array.isArray(N)&&(S.providerData=N.map(E=>({...E}))),c&&(S._redirectEventId=c),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new pi;i.updateFromServerResponse(n);const s=new Lt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await el(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$_(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new pi;l.updateFromIdToken(r);const c=new Lt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Qc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=new Map;function sn(t){gn(t instanceof Function,"Expected a class definition");let e=om.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,om.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}H_.type="NONE";const am=H_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t,e,n){return`firebase:${t}:${e}:${n}`}class mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ya(this.userKey,i.apiKey,s),this.fullPersistenceKey=ya("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Za(this.auth,{idToken:e}).catch(()=>{});return n?Lt._fromGetAccountInfoResponse(this.auth,n,e):null}return Lt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new mi(sn(am),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||sn(am);const a=ya(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(a);if(p){let m;if(typeof p=="string"){const y=await Za(e,{idToken:p}).catch(()=>{});if(!y)break;m=await Lt._fromGetAccountInfoResponse(e,y,p)}else m=Lt._fromJSON(e,p);h!==s&&(l=m),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new mi(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new mi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(K_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(W_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(X_(e))return"Blackberry";if(Y_(e))return"Webos";if(q_(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(Q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function W_(t=Xe()){return/firefox\//i.test(t)}function q_(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(t=Xe()){return/crios\//i.test(t)}function K_(t=Xe()){return/iemobile/i.test(t)}function Q_(t=Xe()){return/android/i.test(t)}function X_(t=Xe()){return/blackberry/i.test(t)}function Y_(t=Xe()){return/webos/i.test(t)}function hf(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RI(t=Xe()){var e;return hf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function NI(){return WT()&&document.documentMode===10}function J_(t=Xe()){return hf(t)||Q_(t)||Y_(t)||X_(t)||/windows phone/i.test(t)||K_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(t,e=[]){let n;switch(t){case"Browser":n=lm(Xe());break;case"Worker":n=`${lm(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(t,e={}){return bi(t,"GET","/v2/passwordPolicy",Dl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=6;class VI{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??OI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new um(this),this.idTokenSubscription=new um(this),this.beforeStateQueue=new xI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=b_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await mi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Za(this,{idToken:e}),r=await Lt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Dt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await el(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(Xn(this));const n=e?At(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DI(this),n=new VI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new co("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await mi.create(this,[sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&dI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ol(t){return At(t)}class um{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZT(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ff={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MI(t){ff=t}function bI(t){return ff.loadJS(t)}function FI(){return ff.gapiScript}function UI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t,e){const n=af(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Dr(s,e??{}))return i;mn(i,"already-initialized")}return n.initialize({options:e})}function zI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function BI(t,e,n){const r=Ol(t);W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ev(e),{host:a,port:l}=$I(e),c=l===null?"":`:${l}`,h={url:`${s}//${a}${c}/`},p=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(Dr(h,r.config.emulator)&&Dr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Li(a)?(k_(`${s}//${a}${c}`),R_("Auth",!0)):HI()}function ev(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $I(t){const e=ev(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cm(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:cm(a)}}}function cm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(t,e){return z_(t,"POST","/v1/accounts:signInWithIdp",Dl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="http://localhost";class Vr extends tv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const a=new Vr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return gi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gi(e,n)}buildRequest(){const e={requestUri:WI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends nv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends po{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends po{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends po{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(t,e){return z_(t,"POST","/v1/accounts:signUp",Dl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Lt._fromIdTokenResponse(e,r,i),a=hm(r);return new er({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hm(r);return new er({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(t){var i;if(Dt(t.app))return Promise.reject(Xn(t));const e=Ol(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new er({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await qI(e,{returnSecureToken:!0}),r=await er._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends _n{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,tl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new tl(e,n,r,i)}}function rv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tl._fromErrorAndOperation(t,s,e,r):s})}async function KI(t,e,n=!1){const r=await Zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return er._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(Xn(r));const i="reauthenticate";try{const s=await Zs(t,rv(r,i,e,t),n);W(s.idToken,r,"internal-error");const a=cf(s.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(t.uid===l,r,"user-mismatch"),er._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(t,e,n=!1){if(Dt(t.app))return Promise.reject(Xn(t));const r="signIn",i=await rv(t,r,e),s=await er._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function YI(t,e,n,r){return At(t).onIdTokenChanged(e,n,r)}function JI(t,e,n){return At(t).beforeAuthStateChanged(e,n)}function ZI(t,e,n,r){return At(t).onAuthStateChanged(e,n,r)}const nl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nl,"1"),this.storage.removeItem(nl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=1e3,tS=10;class sv extends iv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=J_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);NI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sv.type="LOCAL";const nS=sv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov extends iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ov.type="SESSION";const av=ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(n.origin,s)),c=await rS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const h=df("",20);i.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(p),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function sS(t){Qt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function oS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function lS(){return lv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="firebaseLocalStorageDb",uS=1,rl="firebaseLocalStorage",cv="fbase_key";class mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ll(t,e){return t.transaction([rl],e?"readwrite":"readonly").objectStore(rl)}function cS(){const t=indexedDB.deleteDatabase(uv);return new mo(t).toPromise()}function Xc(){const t=indexedDB.open(uv,uS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rl,{keyPath:cv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rl)?e(r):(r.close(),await cS(),e(await Xc()))})})}async function fm(t,e,n){const r=Ll(t,!0).put({[cv]:e,value:n});return new mo(r).toPromise()}async function hS(t,e){const n=Ll(t,!1).get(e),r=await new mo(n).toPromise();return r===void 0?null:r.value}function dm(t,e){const n=Ll(t,!0).delete(e);return new mo(n).toPromise()}const fS=800,dS=3;class hv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vl._getInstance(lS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await oS(),!this.activeServiceWorker)return;this.sender=new iS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xc();return await fm(e,nl,"1"),await dm(e,nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ll(i,!1).getAll();return new mo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hv.type="LOCAL";const pS=hv;new fo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(t,e){return e?sn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends tv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gS(t){return XI(t.auth,new pf(t),t.bypassAuthState)}function yS(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),QI(n,new pf(t),t.bypassAuthState)}async function _S(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),KI(n,new pf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gS;case"linkViaPopup":case"linkViaRedirect":return _S;case"reauthViaPopup":case"reauthViaRedirect":return yS;default:mn(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=new fo(2e3,1e4);class ai extends fv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=df();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vS.get())};e()}}ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="pendingRedirect",_a=new Map;class wS extends fv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_a.get(this.auth._key());if(!e){try{const r=await TS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_a.set(this.auth._key(),e)}return this.bypassAuthState||_a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TS(t,e){const n=AS(e),r=SS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function IS(t,e){_a.set(t._key(),e)}function SS(t){return sn(t._redirectPersistence)}function AS(t){return ya(ES,t.config.apiKey,t.name)}async function CS(t,e,n=!1){if(Dt(t.app))return Promise.reject(Xn(t));const r=Ol(t),i=mS(r,e),a=await new wS(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=10*60*1e3;class kS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dv(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PS&&this.cachedEventUids.clear(),this.cachedEventUids.has(pm(e))}saveEventToCache(e){this.cachedEventUids.add(pm(e)),this.lastProcessedEventTime=Date.now()}}function pm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(t,e={}){return bi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DS=/^https?/;async function OS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NS(t);for(const n of e)try{if(VS(n))return}catch{}mn(t,"unauthorized-domain")}function VS(t){const e=Kc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!DS.test(n))return!1;if(xS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=new fo(3e4,6e4);function mm(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MS(t){return new Promise((e,n)=>{var i,s,a;function r(){mm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mm(),n(Kt(t,"network-request-failed"))},timeout:LS.get()})}if((s=(i=Qt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((a=Qt().gapi)!=null&&a.load)r();else{const l=UI("iframefcb");return Qt()[l]=()=>{gapi.load?r():n(Kt(t,"network-request-failed"))},bI(`${FI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw va=null,e})}let va=null;function bS(t){return va=va||MS(t),va}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=new fo(5e3,15e3),US="__/auth/iframe",jS="emulator/auth/iframe",zS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $S(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uf(e,jS):`https://${t.config.authDomain}/${US}`,r={apiKey:e.apiKey,appName:t.name,v:Mi},i=BS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ho(r).slice(1)}`}async function HS(t){const e=await bS(t),n=Qt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:$S(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Kt(t,"network-request-failed"),l=Qt().setTimeout(()=>{s(a)},FS.get());function c(){Qt().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qS=500,GS=600,KS="_blank",QS="http://localhost";class gm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XS(t,e,n,r=qS,i=GS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...WS,width:r.toString(),height:i.toString(),top:s,left:a},h=Xe().toLowerCase();n&&(l=G_(h)?KS:n),W_(h)&&(e=e||QS,c.scrollbars="yes");const p=Object.entries(c).reduce((y,[k,N])=>`${y}${k}=${N},`,"");if(RI(h)&&l!=="_self")return YS(e||"",l),new gm(null);const m=window.open(e||"",l,p);W(m,t,"popup-blocked");try{m.focus()}catch{}return new gm(m)}function YS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="__/auth/handler",ZS="emulator/auth/handler",eA=encodeURIComponent("fac");async function ym(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mi,eventId:i};if(e instanceof nv){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",JT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof po){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await t._getAppCheckToken(),h=c?`#${eA}=${encodeURIComponent(c)}`:"";return`${tA(t)}?${ho(l).slice(1)}${h}`}function tA({config:t}){return t.emulator?uf(t,ZS):`https://${t.authDomain}/${JS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="webStorageSupport";class nA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=av,this._completeRedirectFn=CS,this._overrideRedirectResult=IS}async _openPopup(e,n,r,i){var a;gn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await ym(e,n,r,Kc(),i);return XS(e,s,df())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ym(e,n,r,Kc(),i);return sS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HS(e),r=new kS(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hu,{type:Hu},i=>{var a;const s=(a=i==null?void 0:i[0])==null?void 0:a[Hu];s!==void 0&&n(!!s),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return J_()||q_()||hf()}}const rA=nA;var _m="@firebase/auth",vm="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oA(t){Ci(new Or("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z_(t)},h=new LI(r,i,s,c);return zI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ci(new Or("auth-internal",e=>{const n=Ol(e.getProvider("auth").getImmediate());return(r=>new iA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(_m,vm,sA(t)),Qn(_m,vm,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=5*60,lA=P_("authIdTokenMaxAge")||aA;let Em=null;const uA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lA)return;const i=n==null?void 0:n.token;Em!==i&&(Em=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cA(t=O_()){const e=af(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jI(t,{popupRedirectResolver:rA,persistence:[pS,nS,av]}),r=P_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=uA(s.toString());JI(n,a,()=>a(n.currentUser)),YI(n,l=>a(l))}}const i=A_("auth");return i&&BI(n,`http://${i}`),n}function hA(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}MI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oA("Browser");var wm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mf;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,g){function v(){}v.prototype=g.prototype,_.F=g.prototype,_.prototype=new v,_.prototype.constructor=_,_.D=function(T,I,C){for(var w=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)w[Oe-2]=arguments[Oe];return g.prototype[I].apply(T,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,g,v){v||(v=0);const T=Array(16);if(typeof g=="string")for(var I=0;I<16;++I)T[I]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(I=0;I<16;++I)T[I]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=_.g[0],v=_.g[1],I=_.g[2];let C=_.g[3],w;w=g+(C^v&(I^C))+T[0]+3614090360&4294967295,g=v+(w<<7&4294967295|w>>>25),w=C+(I^g&(v^I))+T[1]+3905402710&4294967295,C=g+(w<<12&4294967295|w>>>20),w=I+(v^C&(g^v))+T[2]+606105819&4294967295,I=C+(w<<17&4294967295|w>>>15),w=v+(g^I&(C^g))+T[3]+3250441966&4294967295,v=I+(w<<22&4294967295|w>>>10),w=g+(C^v&(I^C))+T[4]+4118548399&4294967295,g=v+(w<<7&4294967295|w>>>25),w=C+(I^g&(v^I))+T[5]+1200080426&4294967295,C=g+(w<<12&4294967295|w>>>20),w=I+(v^C&(g^v))+T[6]+2821735955&4294967295,I=C+(w<<17&4294967295|w>>>15),w=v+(g^I&(C^g))+T[7]+4249261313&4294967295,v=I+(w<<22&4294967295|w>>>10),w=g+(C^v&(I^C))+T[8]+1770035416&4294967295,g=v+(w<<7&4294967295|w>>>25),w=C+(I^g&(v^I))+T[9]+2336552879&4294967295,C=g+(w<<12&4294967295|w>>>20),w=I+(v^C&(g^v))+T[10]+4294925233&4294967295,I=C+(w<<17&4294967295|w>>>15),w=v+(g^I&(C^g))+T[11]+2304563134&4294967295,v=I+(w<<22&4294967295|w>>>10),w=g+(C^v&(I^C))+T[12]+1804603682&4294967295,g=v+(w<<7&4294967295|w>>>25),w=C+(I^g&(v^I))+T[13]+4254626195&4294967295,C=g+(w<<12&4294967295|w>>>20),w=I+(v^C&(g^v))+T[14]+2792965006&4294967295,I=C+(w<<17&4294967295|w>>>15),w=v+(g^I&(C^g))+T[15]+1236535329&4294967295,v=I+(w<<22&4294967295|w>>>10),w=g+(I^C&(v^I))+T[1]+4129170786&4294967295,g=v+(w<<5&4294967295|w>>>27),w=C+(v^I&(g^v))+T[6]+3225465664&4294967295,C=g+(w<<9&4294967295|w>>>23),w=I+(g^v&(C^g))+T[11]+643717713&4294967295,I=C+(w<<14&4294967295|w>>>18),w=v+(C^g&(I^C))+T[0]+3921069994&4294967295,v=I+(w<<20&4294967295|w>>>12),w=g+(I^C&(v^I))+T[5]+3593408605&4294967295,g=v+(w<<5&4294967295|w>>>27),w=C+(v^I&(g^v))+T[10]+38016083&4294967295,C=g+(w<<9&4294967295|w>>>23),w=I+(g^v&(C^g))+T[15]+3634488961&4294967295,I=C+(w<<14&4294967295|w>>>18),w=v+(C^g&(I^C))+T[4]+3889429448&4294967295,v=I+(w<<20&4294967295|w>>>12),w=g+(I^C&(v^I))+T[9]+568446438&4294967295,g=v+(w<<5&4294967295|w>>>27),w=C+(v^I&(g^v))+T[14]+3275163606&4294967295,C=g+(w<<9&4294967295|w>>>23),w=I+(g^v&(C^g))+T[3]+4107603335&4294967295,I=C+(w<<14&4294967295|w>>>18),w=v+(C^g&(I^C))+T[8]+1163531501&4294967295,v=I+(w<<20&4294967295|w>>>12),w=g+(I^C&(v^I))+T[13]+2850285829&4294967295,g=v+(w<<5&4294967295|w>>>27),w=C+(v^I&(g^v))+T[2]+4243563512&4294967295,C=g+(w<<9&4294967295|w>>>23),w=I+(g^v&(C^g))+T[7]+1735328473&4294967295,I=C+(w<<14&4294967295|w>>>18),w=v+(C^g&(I^C))+T[12]+2368359562&4294967295,v=I+(w<<20&4294967295|w>>>12),w=g+(v^I^C)+T[5]+4294588738&4294967295,g=v+(w<<4&4294967295|w>>>28),w=C+(g^v^I)+T[8]+2272392833&4294967295,C=g+(w<<11&4294967295|w>>>21),w=I+(C^g^v)+T[11]+1839030562&4294967295,I=C+(w<<16&4294967295|w>>>16),w=v+(I^C^g)+T[14]+4259657740&4294967295,v=I+(w<<23&4294967295|w>>>9),w=g+(v^I^C)+T[1]+2763975236&4294967295,g=v+(w<<4&4294967295|w>>>28),w=C+(g^v^I)+T[4]+1272893353&4294967295,C=g+(w<<11&4294967295|w>>>21),w=I+(C^g^v)+T[7]+4139469664&4294967295,I=C+(w<<16&4294967295|w>>>16),w=v+(I^C^g)+T[10]+3200236656&4294967295,v=I+(w<<23&4294967295|w>>>9),w=g+(v^I^C)+T[13]+681279174&4294967295,g=v+(w<<4&4294967295|w>>>28),w=C+(g^v^I)+T[0]+3936430074&4294967295,C=g+(w<<11&4294967295|w>>>21),w=I+(C^g^v)+T[3]+3572445317&4294967295,I=C+(w<<16&4294967295|w>>>16),w=v+(I^C^g)+T[6]+76029189&4294967295,v=I+(w<<23&4294967295|w>>>9),w=g+(v^I^C)+T[9]+3654602809&4294967295,g=v+(w<<4&4294967295|w>>>28),w=C+(g^v^I)+T[12]+3873151461&4294967295,C=g+(w<<11&4294967295|w>>>21),w=I+(C^g^v)+T[15]+530742520&4294967295,I=C+(w<<16&4294967295|w>>>16),w=v+(I^C^g)+T[2]+3299628645&4294967295,v=I+(w<<23&4294967295|w>>>9),w=g+(I^(v|~C))+T[0]+4096336452&4294967295,g=v+(w<<6&4294967295|w>>>26),w=C+(v^(g|~I))+T[7]+1126891415&4294967295,C=g+(w<<10&4294967295|w>>>22),w=I+(g^(C|~v))+T[14]+2878612391&4294967295,I=C+(w<<15&4294967295|w>>>17),w=v+(C^(I|~g))+T[5]+4237533241&4294967295,v=I+(w<<21&4294967295|w>>>11),w=g+(I^(v|~C))+T[12]+1700485571&4294967295,g=v+(w<<6&4294967295|w>>>26),w=C+(v^(g|~I))+T[3]+2399980690&4294967295,C=g+(w<<10&4294967295|w>>>22),w=I+(g^(C|~v))+T[10]+4293915773&4294967295,I=C+(w<<15&4294967295|w>>>17),w=v+(C^(I|~g))+T[1]+2240044497&4294967295,v=I+(w<<21&4294967295|w>>>11),w=g+(I^(v|~C))+T[8]+1873313359&4294967295,g=v+(w<<6&4294967295|w>>>26),w=C+(v^(g|~I))+T[15]+4264355552&4294967295,C=g+(w<<10&4294967295|w>>>22),w=I+(g^(C|~v))+T[6]+2734768916&4294967295,I=C+(w<<15&4294967295|w>>>17),w=v+(C^(I|~g))+T[13]+1309151649&4294967295,v=I+(w<<21&4294967295|w>>>11),w=g+(I^(v|~C))+T[4]+4149444226&4294967295,g=v+(w<<6&4294967295|w>>>26),w=C+(v^(g|~I))+T[11]+3174756917&4294967295,C=g+(w<<10&4294967295|w>>>22),w=I+(g^(C|~v))+T[2]+718787259&4294967295,I=C+(w<<15&4294967295|w>>>17),w=v+(C^(I|~g))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(I+(w<<21&4294967295|w>>>11))&4294967295,_.g[2]=_.g[2]+I&4294967295,_.g[3]=_.g[3]+C&4294967295}r.prototype.v=function(_,g){g===void 0&&(g=_.length);const v=g-this.blockSize,T=this.C;let I=this.h,C=0;for(;C<g;){if(I==0)for(;C<=v;)i(this,_,C),C+=this.blockSize;if(typeof _=="string"){for(;C<g;)if(T[I++]=_.charCodeAt(C++),I==this.blockSize){i(this,T),I=0;break}}else for(;C<g;)if(T[I++]=_[C++],I==this.blockSize){i(this,T),I=0;break}}this.h=I,this.o+=g},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;g=this.o*8;for(var v=_.length-8;v<_.length;++v)_[v]=g&255,g/=256;for(this.v(_),_=Array(16),g=0,v=0;v<4;++v)for(let T=0;T<32;T+=8)_[g++]=this.g[v]>>>T&255;return _};function s(_,g){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=g(_)}function a(_,g){this.h=g;const v=[];let T=!0;for(let I=_.length-1;I>=0;I--){const C=_[I]|0;T&&C==g||(v[I]=C,T=!1)}this.g=v}var l={};function c(_){return-128<=_&&_<128?s(_,function(g){return new a([g|0],g<0?-1:0)}):new a([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return m;if(_<0)return b(h(-_));const g=[];let v=1;for(let T=0;_>=v;T++)g[T]=_/v|0,v*=4294967296;return new a(g,0)}function p(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return b(p(_.substring(1),g));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(g,8));let T=m;for(let C=0;C<_.length;C+=8){var I=Math.min(8,_.length-C);const w=parseInt(_.substring(C,C+I),g);I<8?(I=h(Math.pow(g,I)),T=T.j(I).add(h(w))):(T=T.j(v),T=T.add(h(w)))}return T}var m=c(0),y=c(1),k=c(16777216);t=a.prototype,t.m=function(){if(x(this))return-b(this).m();let _=0,g=1;for(let v=0;v<this.g.length;v++){const T=this.i(v);_+=(T>=0?T:4294967296+T)*g,g*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(N(this))return"0";if(x(this))return"-"+b(this).toString(_);const g=h(Math.pow(_,6));var v=this;let T="";for(;;){const I=D(v,g).g;v=S(v,I.j(g));let C=((v.g.length>0?v.g[0]:v.h)>>>0).toString(_);if(v=I,N(v))return C+T;for(;C.length<6;)C="0"+C;T=C+T}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function N(_){if(_.h!=0)return!1;for(let g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function x(_){return _.h==-1}t.l=function(_){return _=S(this,_),x(_)?-1:N(_)?0:1};function b(_){const g=_.g.length,v=[];for(let T=0;T<g;T++)v[T]=~_.g[T];return new a(v,~_.h).add(y)}t.abs=function(){return x(this)?b(this):this},t.add=function(_){const g=Math.max(this.g.length,_.g.length),v=[];let T=0;for(let I=0;I<=g;I++){let C=T+(this.i(I)&65535)+(_.i(I)&65535),w=(C>>>16)+(this.i(I)>>>16)+(_.i(I)>>>16);T=w>>>16,C&=65535,w&=65535,v[I]=w<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function S(_,g){return _.add(b(g))}t.j=function(_){if(N(this)||N(_))return m;if(x(this))return x(_)?b(this).j(b(_)):b(b(this).j(_));if(x(_))return b(this.j(b(_)));if(this.l(k)<0&&_.l(k)<0)return h(this.m()*_.m());const g=this.g.length+_.g.length,v=[];for(var T=0;T<2*g;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(let I=0;I<_.g.length;I++){const C=this.i(T)>>>16,w=this.i(T)&65535,Oe=_.i(I)>>>16,Jt=_.i(I)&65535;v[2*T+2*I]+=w*Jt,E(v,2*T+2*I),v[2*T+2*I+1]+=C*Jt,E(v,2*T+2*I+1),v[2*T+2*I+1]+=w*Oe,E(v,2*T+2*I+1),v[2*T+2*I+2]+=C*Oe,E(v,2*T+2*I+2)}for(_=0;_<g;_++)v[_]=v[2*_+1]<<16|v[2*_];for(_=g;_<2*g;_++)v[_]=0;return new a(v,0)};function E(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function A(_,g){this.g=_,this.h=g}function D(_,g){if(N(g))throw Error("division by zero");if(N(_))return new A(m,m);if(x(_))return g=D(b(_),g),new A(b(g.g),b(g.h));if(x(g))return g=D(_,b(g)),new A(b(g.g),g.h);if(_.g.length>30){if(x(_)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var v=y,T=g;T.l(_)<=0;)v=F(v),T=F(T);var I=U(v,1),C=U(T,1);for(T=U(T,2),v=U(v,2);!N(T);){var w=C.add(T);w.l(_)<=0&&(I=I.add(v),C=w),T=U(T,1),v=U(v,1)}return g=S(_,I.j(g)),new A(I,g)}for(I=m;_.l(g)>=0;){for(v=Math.max(1,Math.floor(_.m()/g.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),C=h(v),w=C.j(g);x(w)||w.l(_)>0;)v-=T,C=h(v),w=C.j(g);N(C)&&(C=y),I=I.add(C),_=S(_,w)}return new A(I,_)}t.B=function(_){return D(this,_).h},t.and=function(_){const g=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<g;T++)v[T]=this.i(T)&_.i(T);return new a(v,this.h&_.h)},t.or=function(_){const g=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<g;T++)v[T]=this.i(T)|_.i(T);return new a(v,this.h|_.h)},t.xor=function(_){const g=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<g;T++)v[T]=this.i(T)^_.i(T);return new a(v,this.h^_.h)};function F(_){const g=_.g.length+1,v=[];for(let T=0;T<g;T++)v[T]=_.i(T)<<1|_.i(T-1)>>>31;return new a(v,_.h)}function U(_,g){const v=g>>5;g%=32;const T=_.g.length-v,I=[];for(let C=0;C<T;C++)I[C]=g>0?_.i(C+v)>>>g|_.i(C+v+1)<<32-g:_.i(C+v);return new a(I,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,mf=a}).apply(typeof wm<"u"?wm:typeof self<"u"?self:typeof window<"u"?window:{});var Jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pv,ys,mv,Ea,Yc,gv,yv,_v;(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jo=="object"&&Jo];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)e:{var f=r;o=o.split(".");for(var d=0;d<o.length-1;d++){var P=o[d];if(!(P in f))break e;f=f[P]}o=o[o.length-1],d=f[o],u=u(d),u!=d&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(u){var f=[],d;for(d in u)Object.prototype.hasOwnProperty.call(u,d)&&f.push([d,u[d]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function c(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=c,h.apply(null,arguments)}function p(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var d=f.slice();return d.push.apply(d,arguments),o.apply(this,d)}}function m(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(d,P,R){for(var M=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)M[Q-2]=arguments[Q];return u.prototype[P].apply(d,M)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function k(o){const u=o.length;if(u>0){const f=Array(u);for(let d=0;d<u;d++)f[d]=o[d];return f}return[]}function N(o,u){for(let d=1;d<arguments.length;d++){const P=arguments[d];var f=typeof P;if(f=f!="object"?f:P?Array.isArray(P)?"array":f:"null",f=="array"||f=="object"&&typeof P.length=="number"){f=o.length||0;const R=P.length||0;o.length=f+R;for(let M=0;M<R;M++)o[f+M]=P[M]}else o.push(P)}}class x{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function b(o){a.setTimeout(()=>{throw o},0)}function S(){var o=_;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class E{constructor(){this.h=this.g=null}add(u,f){const d=A.get();d.set(u,f),this.h?this.h.next=d:this.g=d,this.h=d}}var A=new x(()=>new D,o=>o.reset());class D{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let F,U=!1,_=new E,g=()=>{const o=Promise.resolve(void 0);F=()=>{o.then(v)}};function v(){for(var o;o=S();){try{o.h.call(o.g)}catch(f){b(f)}var u=A;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}U=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,u),a.removeEventListener("test",f,u)}catch{}return o}();function w(o){return/^[\s\xa0]*$/.test(o)}function Oe(o,u){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}m(Oe,I),Oe.prototype.init=function(o,u){const f=this.type=o.type,d=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Oe.Z.h.call(this)},Oe.prototype.h=function(){Oe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Jt="closure_listenable_"+(Math.random()*1e6|0),ji=0;function zi(o,u,f,d,P){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!d,this.ha=P,this.key=++ji,this.da=this.fa=!1}function j(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function q(o,u,f){for(const d in o)u.call(f,o[d],d,o)}function K(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function ue(o){const u={};for(const f in o)u[f]=o[f];return u}const Ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lr(o,u){let f,d;for(let P=1;P<arguments.length;P++){d=arguments[P];for(f in d)o[f]=d[f];for(let R=0;R<Ee.length;R++)f=Ee[R],Object.prototype.hasOwnProperty.call(d,f)&&(o[f]=d[f])}}function _t(o){this.src=o,this.g={},this.h=0}_t.prototype.add=function(o,u,f,d,P){const R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);const M=Ct(o,u,d,P);return M>-1?(u=o[M],f||(u.fa=!1)):(u=new zi(u,this.src,R,!!d,P),u.fa=f,o.push(u)),u};function ur(o,u){const f=u.type;if(f in o.g){var d=o.g[f],P=Array.prototype.indexOf.call(d,u,void 0),R;(R=P>=0)&&Array.prototype.splice.call(d,P,1),R&&(j(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Ct(o,u,f,d){for(let P=0;P<o.length;++P){const R=o[P];if(!R.da&&R.listener==u&&R.capture==!!f&&R.ha==d)return P}return-1}var En="closure_lm_"+(Math.random()*1e6|0),Wl={};function jf(o,u,f,d,P){if(Array.isArray(u)){for(let R=0;R<u.length;R++)jf(o,u[R],f,d,P);return null}return f=$f(f),o&&o[Jt]?o.J(u,f,l(d)?!!d.capture:!1,P):SE(o,u,f,!1,d,P)}function SE(o,u,f,d,P,R){if(!u)throw Error("Invalid event type");const M=l(P)?!!P.capture:!!P;let Q=Gl(o);if(Q||(o[En]=Q=new _t(o)),f=Q.add(u,f,d,M,R),f.proxy)return f;if(d=AE(),f.proxy=d,d.src=o,d.listener=f,o.addEventListener)C||(P=M),P===void 0&&(P=!1),o.addEventListener(u.toString(),d,P);else if(o.attachEvent)o.attachEvent(Bf(u.toString()),d);else if(o.addListener&&o.removeListener)o.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return f}function AE(){function o(f){return u.call(o.src,o.listener,f)}const u=CE;return o}function zf(o,u,f,d,P){if(Array.isArray(u))for(var R=0;R<u.length;R++)zf(o,u[R],f,d,P);else d=l(d)?!!d.capture:!!d,f=$f(f),o&&o[Jt]?(o=o.i,R=String(u).toString(),R in o.g&&(u=o.g[R],f=Ct(u,f,d,P),f>-1&&(j(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[R],o.h--)))):o&&(o=Gl(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Ct(u,f,d,P)),(f=o>-1?u[o]:null)&&ql(f))}function ql(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Jt])ur(u.i,o);else{var f=o.type,d=o.proxy;u.removeEventListener?u.removeEventListener(f,d,o.capture):u.detachEvent?u.detachEvent(Bf(f),d):u.addListener&&u.removeListener&&u.removeListener(d),(f=Gl(u))?(ur(f,o),f.h==0&&(f.src=null,u[En]=null)):j(o)}}}function Bf(o){return o in Wl?Wl[o]:Wl[o]="on"+o}function CE(o,u){if(o.da)o=!0;else{u=new Oe(u,this);const f=o.listener,d=o.ha||o.src;o.fa&&ql(o),o=f.call(d,u)}return o}function Gl(o){return o=o[En],o instanceof _t?o:null}var Kl="__closure_events_fn_"+(Math.random()*1e9>>>0);function $f(o){return typeof o=="function"?o:(o[Kl]||(o[Kl]=function(u){return o.handleEvent(u)}),o[Kl])}function ze(){T.call(this),this.i=new _t(this),this.M=this,this.G=null}m(ze,T),ze.prototype[Jt]=!0,ze.prototype.removeEventListener=function(o,u,f,d){zf(this,o,u,f,d)};function Ye(o,u){var f,d=o.G;if(d)for(f=[];d;d=d.G)f.push(d);if(o=o.M,d=u.type||u,typeof u=="string")u=new I(u,o);else if(u instanceof I)u.target=u.target||o;else{var P=u;u=new I(d,o),lr(u,P)}P=!0;let R,M;if(f)for(M=f.length-1;M>=0;M--)R=u.g=f[M],P=To(R,d,!0,u)&&P;if(R=u.g=o,P=To(R,d,!0,u)&&P,P=To(R,d,!1,u)&&P,f)for(M=0;M<f.length;M++)R=u.g=f[M],P=To(R,d,!1,u)&&P}ze.prototype.N=function(){if(ze.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let d=0;d<f.length;d++)j(f[d]);delete o.g[u],o.h--}}this.G=null},ze.prototype.J=function(o,u,f,d){return this.i.add(String(o),u,!1,f,d)},ze.prototype.K=function(o,u,f,d){return this.i.add(String(o),u,!0,f,d)};function To(o,u,f,d){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let P=!0;for(let R=0;R<u.length;++R){const M=u[R];if(M&&!M.da&&M.capture==f){const Q=M.listener,Ae=M.ha||M.src;M.fa&&ur(o.i,M),P=Q.call(Ae,d)!==!1&&P}}return P&&!d.defaultPrevented}function PE(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Hf(o){o.g=PE(()=>{o.g=null,o.i&&(o.i=!1,Hf(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class kE extends T{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Hf(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bi(o){T.call(this),this.h=o,this.g={}}m(Bi,T);var Wf=[];function qf(o){q(o.g,function(u,f){this.g.hasOwnProperty(f)&&ql(u)},o),o.g={}}Bi.prototype.N=function(){Bi.Z.N.call(this),qf(this)},Bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ql=a.JSON.stringify,RE=a.JSON.parse,NE=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Gf(){}function Kf(){}var $i={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Xl(){I.call(this,"d")}m(Xl,I);function Yl(){I.call(this,"c")}m(Yl,I);var cr={},Qf=null;function Io(){return Qf=Qf||new ze}cr.Ia="serverreachability";function Xf(o){I.call(this,cr.Ia,o)}m(Xf,I);function Hi(o){const u=Io();Ye(u,new Xf(u))}cr.STAT_EVENT="statevent";function Yf(o,u){I.call(this,cr.STAT_EVENT,o),this.stat=u}m(Yf,I);function Je(o){const u=Io();Ye(u,new Yf(u,o))}cr.Ja="timingevent";function Jf(o,u){I.call(this,cr.Ja,o),this.size=u}m(Jf,I);function Wi(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function qi(){this.g=!0}qi.prototype.ua=function(){this.g=!1};function xE(o,u,f,d,P,R){o.info(function(){if(o.g)if(R){var M="",Q=R.split("&");for(let re=0;re<Q.length;re++){var Ae=Q[re].split("=");if(Ae.length>1){const ke=Ae[0];Ae=Ae[1];const zt=ke.split("_");M=zt.length>=2&&zt[1]=="type"?M+(ke+"="+Ae+"&"):M+(ke+"=redacted&")}}}else M=null;else M=R;return"XMLHTTP REQ ("+d+") [attempt "+P+"]: "+u+`
`+f+`
`+M})}function DE(o,u,f,d,P,R,M){o.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+P+"]: "+u+`
`+f+`
`+R+" "+M})}function $r(o,u,f,d){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+VE(o,f)+(d?" "+d:"")})}function OE(o,u){o.info(function(){return"TIMEOUT: "+u})}qi.prototype.info=function(){};function VE(o,u){if(!o.g)return u;if(!u)return null;try{const R=JSON.parse(u);if(R){for(o=0;o<R.length;o++)if(Array.isArray(R[o])){var f=R[o];if(!(f.length<2)){var d=f[1];if(Array.isArray(d)&&!(d.length<1)){var P=d[0];if(P!="noop"&&P!="stop"&&P!="close")for(let M=1;M<d.length;M++)d[M]=""}}}}return Ql(R)}catch{return u}}var So={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Zf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ed;function Jl(){}m(Jl,Gf),Jl.prototype.g=function(){return new XMLHttpRequest},ed=new Jl;function Gi(o){return encodeURIComponent(String(o))}function LE(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function wn(o,u,f,d){this.j=o,this.i=u,this.l=f,this.S=d||1,this.V=new Bi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new td}function td(){this.i=null,this.g="",this.h=!1}var nd={},Zl={};function eu(o,u,f){o.M=1,o.A=Co(jt(u)),o.u=f,o.R=!0,rd(o,null)}function rd(o,u){o.F=Date.now(),Ao(o),o.B=jt(o.A);var f=o.B,d=o.S;Array.isArray(d)||(d=[String(d)]),gd(f.i,"t",d),o.C=0,f=o.j.L,o.h=new td,o.g=Vd(o.j,f?u:null,!o.u),o.P>0&&(o.O=new kE(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,d=o.ba;var P="readystatechange";Array.isArray(P)||(P&&(Wf[0]=P.toString()),P=Wf);for(let R=0;R<P.length;R++){const M=jf(f,P[R],d||u.handleEvent,!1,u.h||u);if(!M)break;u.g[M.key]=M}u=o.J?ue(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Hi(),xE(o.i,o.v,o.B,o.l,o.S,o.u)}wn.prototype.ba=function(o){o=o.target;const u=this.O;u&&Sn(o)==3?u.j():this.Y(o)},wn.prototype.Y=function(o){try{if(o==this.g)e:{const Q=Sn(this.g),Ae=this.g.ya(),re=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||Id(this.g)))){this.K||Q!=4||Ae==7||(Ae==8||re<=0?Hi(3):Hi(2)),tu(this);var u=this.g.ca();this.X=u;var f=ME(this);if(this.o=u==200,DE(this.i,this.v,this.B,this.l,this.S,Q,u),this.o){if(this.U&&!this.L){t:{if(this.g){var d,P=this.g;if((d=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(d)){var R=d;break t}}R=null}if(o=R)$r(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,nu(this,o);else{this.o=!1,this.m=3,Je(12),hr(this),Ki(this);break e}}if(this.R){o=!0;let ke;for(;!this.K&&this.C<f.length;)if(ke=bE(this,f),ke==Zl){Q==4&&(this.m=4,Je(14),o=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==nd){this.m=4,Je(15),$r(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else $r(this.i,this.l,ke,null),nu(this,ke);if(id(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||f.length!=0||this.h.h||(this.m=1,Je(16),o=!1),this.o=this.o&&o,!o)$r(this.i,this.l,f,"[Invalid Chunked Response]"),hr(this),Ki(this);else if(f.length>0&&!this.W){this.W=!0;var M=this.j;M.g==this&&M.aa&&!M.P&&(M.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),cu(M),M.P=!0,Je(11))}}else $r(this.i,this.l,f,null),nu(this,f);Q==4&&hr(this),this.o&&!this.K&&(Q==4?Nd(this.j,this):(this.o=!1,Ao(this)))}else YE(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,Je(12)):(this.m=0,Je(13)),hr(this),Ki(this)}}}catch{}finally{}};function ME(o){if(!id(o))return o.g.la();const u=Id(o.g);if(u==="")return"";let f="";const d=u.length,P=Sn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return hr(o),Ki(o),"";o.h.i=new a.TextDecoder}for(let R=0;R<d;R++)o.h.h=!0,f+=o.h.i.decode(u[R],{stream:!(P&&R==d-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function id(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function bE(o,u){var f=o.C,d=u.indexOf(`
`,f);return d==-1?Zl:(f=Number(u.substring(f,d)),isNaN(f)?nd:(d+=1,d+f>u.length?Zl:(u=u.slice(d,d+f),o.C=d+f,u)))}wn.prototype.cancel=function(){this.K=!0,hr(this)};function Ao(o){o.T=Date.now()+o.H,sd(o,o.H)}function sd(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Wi(h(o.aa,o),u)}function tu(o){o.D&&(a.clearTimeout(o.D),o.D=null)}wn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(OE(this.i,this.B),this.M!=2&&(Hi(),Je(17)),hr(this),this.m=2,Ki(this)):sd(this,this.T-o)};function Ki(o){o.j.I==0||o.K||Nd(o.j,o)}function hr(o){tu(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,qf(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function nu(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||ru(f.h,o))){if(!o.L&&ru(f.h,o)&&f.I==3){try{var d=f.Ba.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var P=d;if(P[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)xo(f),Ro(f);else break e;uu(f),Je(18)}}else f.xa=P[1],0<f.xa-f.K&&P[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Wi(h(f.Va,f),6e3));ld(f.h)<=1&&f.ta&&(f.ta=void 0)}else dr(f,11)}else if((o.L||f.g==o)&&xo(f),!w(u))for(P=f.Ba.g.parse(u),u=0;u<P.length;u++){let re=P[u];const ke=re[0];if(!(ke<=f.K))if(f.K=ke,re=re[1],f.I==2)if(re[0]=="c"){f.M=re[1],f.ba=re[2];const zt=re[3];zt!=null&&(f.ka=zt,f.j.info("VER="+f.ka));const pr=re[4];pr!=null&&(f.za=pr,f.j.info("SVER="+f.za));const An=re[5];An!=null&&typeof An=="number"&&An>0&&(d=1.5*An,f.O=d,f.j.info("backChannelRequestTimeoutMs_="+d)),d=f;const Cn=o.g;if(Cn){const Oo=Cn.g?Cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oo){var R=d.h;R.g||Oo.indexOf("spdy")==-1&&Oo.indexOf("quic")==-1&&Oo.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(iu(R,R.h),R.h=null))}if(d.G){const hu=Cn.g?Cn.g.getResponseHeader("X-HTTP-Session-Id"):null;hu&&(d.wa=hu,oe(d.J,d.G,hu))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),d=f;var M=o;if(d.na=Od(d,d.L?d.ba:null,d.W),M.L){ud(d.h,M);var Q=M,Ae=d.O;Ae&&(Q.H=Ae),Q.D&&(tu(Q),Ao(Q)),d.g=M}else kd(d);f.i.length>0&&No(f)}else re[0]!="stop"&&re[0]!="close"||dr(f,7);else f.I==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?dr(f,7):lu(f):re[0]!="noop"&&f.l&&f.l.qa(re),f.A=0)}}Hi(4)}catch{}}var FE=class{constructor(o,u){this.g=o,this.map=u}};function od(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ad(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ld(o){return o.h?1:o.g?o.g.size:0}function ru(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function iu(o,u){o.g?o.g.add(u):o.h=u}function ud(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}od.prototype.cancel=function(){if(this.i=cd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function cd(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return k(o.i)}var hd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UE(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const d=o[f].indexOf("=");let P,R=null;d>=0?(P=o[f].substring(0,d),R=o[f].substring(d+1)):P=o[f],u(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Tn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Tn?(this.l=o.l,Qi(this,o.j),this.o=o.o,this.g=o.g,Xi(this,o.u),this.h=o.h,su(this,yd(o.i)),this.m=o.m):o&&(u=String(o).match(hd))?(this.l=!1,Qi(this,u[1]||"",!0),this.o=Yi(u[2]||""),this.g=Yi(u[3]||"",!0),Xi(this,u[4]),this.h=Yi(u[5]||"",!0),su(this,u[6]||"",!0),this.m=Yi(u[7]||"")):(this.l=!1,this.i=new Zi(null,this.l))}Tn.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Ji(u,fd,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ji(u,fd,!0),"@"),o.push(Gi(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Ji(f,f.charAt(0)=="/"?BE:zE,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Ji(f,HE)),o.join("")},Tn.prototype.resolve=function(o){const u=jt(this);let f=!!o.j;f?Qi(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var d=o.h;if(f)Xi(u,o.u);else if(f=!!o.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var P=u.h.lastIndexOf("/");P!=-1&&(d=u.h.slice(0,P+1)+d)}if(P=d,P==".."||P==".")d="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){d=P.lastIndexOf("/",0)==0,P=P.split("/");const R=[];for(let M=0;M<P.length;){const Q=P[M++];Q=="."?d&&M==P.length&&R.push(""):Q==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),d&&M==P.length&&R.push("")):(R.push(Q),d=!0)}d=R.join("/")}else d=P}return f?u.h=d:f=o.i.toString()!=="",f?su(u,yd(o.i)):f=!!o.m,f&&(u.m=o.m),u};function jt(o){return new Tn(o)}function Qi(o,u,f){o.j=f?Yi(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Xi(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function su(o,u,f){u instanceof Zi?(o.i=u,WE(o.i,o.l)):(f||(u=Ji(u,$E)),o.i=new Zi(u,o.l))}function oe(o,u,f){o.i.set(u,f)}function Co(o){return oe(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Yi(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ji(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,jE),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function jE(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var fd=/[#\/\?@]/g,zE=/[#\?:]/g,BE=/[#\?]/g,$E=/[#\?@]/g,HE=/#/g;function Zi(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function fr(o){o.g||(o.g=new Map,o.h=0,o.i&&UE(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Zi.prototype,t.add=function(o,u){fr(this),this.i=null,o=Hr(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function dd(o,u){fr(o),u=Hr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function pd(o,u){return fr(o),u=Hr(o,u),o.g.has(u)}t.forEach=function(o,u){fr(this),this.g.forEach(function(f,d){f.forEach(function(P){o.call(u,P,d,this)},this)},this)};function md(o,u){fr(o);let f=[];if(typeof u=="string")pd(o,u)&&(f=f.concat(o.g.get(Hr(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}t.set=function(o,u){return fr(this),this.i=null,o=Hr(this,o),pd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=md(this,o),o.length>0?String(o[0]):u):u};function gd(o,u,f){dd(o,u),f.length>0&&(o.i=null,o.g.set(Hr(o,u),k(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let d=0;d<u.length;d++){var f=u[d];const P=Gi(f);f=md(this,f);for(let R=0;R<f.length;R++){let M=P;f[R]!==""&&(M+="="+Gi(f[R])),o.push(M)}}return this.i=o.join("&")};function yd(o){const u=new Zi;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Hr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function WE(o,u){u&&!o.j&&(fr(o),o.i=null,o.g.forEach(function(f,d){const P=d.toLowerCase();d!=P&&(dd(this,d),gd(this,P,f))},o)),o.j=u}function qE(o,u){const f=new qi;if(a.Image){const d=new Image;d.onload=p(In,f,"TestLoadImage: loaded",!0,u,d),d.onerror=p(In,f,"TestLoadImage: error",!1,u,d),d.onabort=p(In,f,"TestLoadImage: abort",!1,u,d),d.ontimeout=p(In,f,"TestLoadImage: timeout",!1,u,d),a.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=o}else u(!1)}function GE(o,u){const f=new qi,d=new AbortController,P=setTimeout(()=>{d.abort(),In(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:d.signal}).then(R=>{clearTimeout(P),R.ok?In(f,"TestPingServer: ok",!0,u):In(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),In(f,"TestPingServer: error",!1,u)})}function In(o,u,f,d,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),d(f)}catch{}}function KE(){this.g=new NE}function ou(o){this.i=o.Sb||null,this.h=o.ab||!1}m(ou,Gf),ou.prototype.g=function(){return new Po(this.i,this.h)};function Po(o,u){ze.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Po,ze),t=Po.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,ts(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,es(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ts(this)),this.g&&(this.readyState=3,ts(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_d(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function _d(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?es(this):ts(this),this.readyState==3&&_d(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,es(this))},t.Na=function(o){this.g&&(this.response=o,es(this))},t.ga=function(){this.g&&es(this)};function es(o){o.readyState=4,o.l=null,o.j=null,o.B=null,ts(o)}t.setRequestHeader=function(o,u){this.A.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function ts(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function vd(o){let u="";return q(o,function(f,d){u+=d,u+=":",u+=f,u+=`\r
`}),u}function au(o,u,f){e:{for(d in f){var d=!1;break e}d=!0}d||(f=vd(f),typeof o=="string"?f!=null&&Gi(f):oe(o,u,f))}function ye(o){ze.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ye,ze);var QE=/^https?$/i,XE=["POST","PUT"];t=ye.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,u,f,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ed.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(R){Ed(this,R);return}if(o=f||"",f=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var P in d)f.set(P,d[P]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())f.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(f.keys()).find(R=>R.toLowerCase()=="content-type"),P=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(XE,u,void 0)>=0)||d||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,M]of f)this.g.setRequestHeader(R,M);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(R){Ed(this,R)}};function Ed(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,wd(o),ko(o)}function wd(o){o.A||(o.A=!0,Ye(o,"complete"),Ye(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ye(this,"complete"),Ye(this,"abort"),ko(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ko(this,!0)),ye.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Td(this):this.Xa())},t.Xa=function(){Td(this)};function Td(o){if(o.h&&typeof s<"u"){if(o.v&&Sn(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ye(o,"readystatechange"),Sn(o)==4){o.h=!1;try{const R=o.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var d;if(d=R===0){let M=String(o.D).match(hd)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),d=!QE.test(M?M.toLowerCase():"")}f=d}if(f)Ye(o,"complete"),Ye(o,"success");else{o.o=6;try{var P=Sn(o)>2?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.ca()+"]",wd(o)}}finally{ko(o)}}}}function ko(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||Ye(o,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Sn(o){return o.g?o.g.readyState:0}t.ca=function(){try{return Sn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),RE(u)}};function Id(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function YE(o){const u={};o=(o.g&&Sn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<o.length;d++){if(w(o[d]))continue;var f=LE(o[d]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const R=u[P]||[];u[P]=R,R.push(f)}K(u,function(d){return d.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ns(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Sd(o){this.za=0,this.i=[],this.j=new qi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ns("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ns("baseRetryDelayMs",5e3,o),this.Za=ns("retryDelaySeedMs",1e4,o),this.Ta=ns("forwardChannelMaxRetries",2,o),this.va=ns("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new od(o&&o.concurrentRequestLimit),this.Ba=new KE,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Sd.prototype,t.ka=8,t.I=1,t.connect=function(o,u,f,d){Je(0),this.W=o,this.H=u||{},f&&d!==void 0&&(this.H.OSID=f,this.H.OAID=d),this.F=this.X,this.J=Od(this,null,this.W),No(this)};function lu(o){if(Ad(o),o.I==3){var u=o.V++,f=jt(o.J);if(oe(f,"SID",o.M),oe(f,"RID",u),oe(f,"TYPE","terminate"),rs(o,f),u=new wn(o,o.j,u),u.M=2,u.A=Co(jt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=u.A,f=!0),f||(u.g=Vd(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ao(u)}Dd(o)}function Ro(o){o.g&&(cu(o),o.g.cancel(),o.g=null)}function Ad(o){Ro(o),o.v&&(a.clearTimeout(o.v),o.v=null),xo(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function No(o){if(!ad(o.h)&&!o.m){o.m=!0;var u=o.Ea;F||g(),U||(F(),U=!0),_.add(u,o),o.D=0}}function JE(o,u){return ld(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Wi(h(o.Ea,o,u),xd(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const P=new wn(this,this.j,o);let R=this.o;if(this.U&&(R?(R=ue(R),lr(R,this.U)):R=this.U),this.u!==null||this.R||(P.J=R,R=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var d=this.i[f];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(u+=d,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Pd(this,P,u),f=jt(this.J),oe(f,"RID",o),oe(f,"CVER",22),this.G&&oe(f,"X-HTTP-Session-Id",this.G),rs(this,f),R&&(this.R?u="headers="+Gi(vd(R))+"&"+u:this.u&&au(f,this.u,R)),iu(this.h,P),this.Ra&&oe(f,"TYPE","init"),this.S?(oe(f,"$req",u),oe(f,"SID","null"),P.U=!0,eu(P,f,null)):eu(P,f,u),this.I=2}}else this.I==3&&(o?Cd(this,o):this.i.length==0||ad(this.h)||Cd(this))};function Cd(o,u){var f;u?f=u.l:f=o.V++;const d=jt(o.J);oe(d,"SID",o.M),oe(d,"RID",f),oe(d,"AID",o.K),rs(o,d),o.u&&o.o&&au(d,o.u,o.o),f=new wn(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Pd(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),iu(o.h,f),eu(f,d,u)}function rs(o,u){o.H&&q(o.H,function(f,d){oe(u,d,f)}),o.l&&q({},function(f,d){oe(u,d,f)})}function Pd(o,u,f){f=Math.min(o.i.length,f);const d=o.l?h(o.l.Ka,o.l,o):null;e:{var P=o.i;let Q=-1;for(;;){const Ae=["count="+f];Q==-1?f>0?(Q=P[0].g,Ae.push("ofs="+Q)):Q=0:Ae.push("ofs="+Q);let re=!0;for(let ke=0;ke<f;ke++){var R=P[ke].g;const zt=P[ke].map;if(R-=Q,R<0)Q=Math.max(0,P[ke].g-100),re=!1;else try{R="req"+R+"_"||"";try{var M=zt instanceof Map?zt:Object.entries(zt);for(const[pr,An]of M){let Cn=An;l(An)&&(Cn=Ql(An)),Ae.push(R+pr+"="+encodeURIComponent(Cn))}}catch(pr){throw Ae.push(R+"type="+encodeURIComponent("_badmap")),pr}}catch{d&&d(zt)}}if(re){M=Ae.join("&");break e}}M=void 0}return o=o.i.splice(0,f),u.G=o,M}function kd(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;F||g(),U||(F(),U=!0),_.add(u,o),o.A=0}}function uu(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Wi(h(o.Da,o),xd(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,Rd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Wi(h(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Je(10),Ro(this),Rd(this))};function cu(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Rd(o){o.g=new wn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=jt(o.na);oe(u,"RID","rpc"),oe(u,"SID",o.M),oe(u,"AID",o.K),oe(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&oe(u,"TO",o.ia),oe(u,"TYPE","xmlhttp"),rs(o,u),o.u&&o.o&&au(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Co(jt(u)),f.u=null,f.R=!0,rd(f,o)}t.Va=function(){this.C!=null&&(this.C=null,Ro(this),uu(this),Je(19))};function xo(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Nd(o,u){var f=null;if(o.g==u){xo(o),cu(o),o.g=null;var d=2}else if(ru(o.h,u))f=u.G,ud(o.h,u),d=1;else return;if(o.I!=0){if(u.o)if(d==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var P=o.D;d=Io(),Ye(d,new Jf(d,f)),No(o)}else kd(o);else if(P=u.m,P==3||P==0&&u.X>0||!(d==1&&JE(o,u)||d==2&&uu(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),P){case 1:dr(o,5);break;case 4:dr(o,10);break;case 3:dr(o,6);break;default:dr(o,2)}}}function xd(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function dr(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),d=o.Ua;const P=!d;d=new Tn(d||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Qi(d,"https"),Co(d),P?qE(d.toString(),f):GE(d.toString(),f)}else Je(2);o.I=0,o.l&&o.l.pa(u),Dd(o),Ad(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function Dd(o){if(o.I=0,o.ja=[],o.l){const u=cd(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ja,u),N(o.ja,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.oa()}}function Od(o,u,f){var d=f instanceof Tn?jt(f):new Tn(f);if(d.g!="")u&&(d.g=u+"."+d.g),Xi(d,d.u);else{var P=a.location;d=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;const R=new Tn(null);d&&Qi(R,d),u&&(R.g=u),P&&Xi(R,P),f&&(R.h=f),d=R}return f=o.G,u=o.wa,f&&u&&oe(d,f,u),oe(d,"VER",o.ka),rs(o,d),d}function Vd(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new ye(new ou({ab:f})):new ye(o.ma),u.Fa(o.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ld(){}t=Ld.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Do(){}Do.prototype.g=function(o,u){return new ct(o,u)};function ct(o,u){ze.call(this),this.g=new Sd(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!w(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!w(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Wr(this)}m(ct,ze),ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ct.prototype.close=function(){lu(this.g)},ct.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=Ql(o),o=f);u.i.push(new FE(u.Ya++,o)),u.I==3&&No(u)},ct.prototype.N=function(){this.g.l=null,delete this.j,lu(this.g),delete this.g,ct.Z.N.call(this)};function Md(o){Xl.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}m(Md,Xl);function bd(){Yl.call(this),this.status=1}m(bd,Yl);function Wr(o){this.g=o}m(Wr,Ld),Wr.prototype.ra=function(){Ye(this.g,"a")},Wr.prototype.qa=function(o){Ye(this.g,new Md(o))},Wr.prototype.pa=function(o){Ye(this.g,new bd)},Wr.prototype.oa=function(){Ye(this.g,"b")},Do.prototype.createWebChannel=Do.prototype.g,ct.prototype.send=ct.prototype.o,ct.prototype.open=ct.prototype.m,ct.prototype.close=ct.prototype.close,_v=function(){return new Do},yv=function(){return Io()},gv=cr,Yc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},So.NO_ERROR=0,So.TIMEOUT=8,So.HTTP_ERROR=6,Ea=So,Zf.COMPLETE="complete",mv=Zf,Kf.EventType=$i,$i.OPEN="a",$i.CLOSE="b",$i.ERROR="c",$i.MESSAGE="d",ze.prototype.listen=ze.prototype.J,ys=Kf,ye.prototype.listenOnce=ye.prototype.K,ye.prototype.getLastError=ye.prototype.Ha,ye.prototype.getLastErrorCode=ye.prototype.ya,ye.prototype.getStatus=ye.prototype.ca,ye.prototype.getResponseJson=ye.prototype.La,ye.prototype.getResponseText=ye.prototype.la,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Fa,pv=ye}).apply(typeof Jo<"u"?Jo:typeof self<"u"?self:typeof window<"u"?window:{});const Tm="@firebase/firestore",Im="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new sf("@firebase/firestore");function Gr(){return Lr.logLevel}function $(t,...e){if(Lr.logLevel<=J.DEBUG){const n=e.map(gf);Lr.debug(`Firestore (${Fi}): ${t}`,...n)}}function Mr(t,...e){if(Lr.logLevel<=J.ERROR){const n=e.map(gf);Lr.error(`Firestore (${Fi}): ${t}`,...n)}}function Ml(t,...e){if(Lr.logLevel<=J.WARN){const n=e.map(gf);Lr.warn(`Firestore (${Fi}): ${t}`,...n)}}function gf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,vv(t,r,n)}function vv(t,e,n){let r=`FIRESTORE (${Fi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Mr(r),new Error(r)}function ve(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||vv(e,i,r)}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class dA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pA{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ar,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ar)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new Ev(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new We(e)}}class mA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new mA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ve(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Sm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Sm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=_A(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function Jc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Wu(i)===Wu(s)?te(i,s):Wu(i)?1:-1}return te(t.length,e.length)}const vA=55296,EA=57343;function Wu(t){const e=t.charCodeAt(0);return e>=vA&&e<=EA}function Pi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="__name__";class Ht{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&X(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ht.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ht?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Ht.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return te(e.length,n.length)}static compareSegments(e,n){const r=Ht.isNumericId(e),i=Ht.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Ht.extractNumericId(e).compare(Ht.extractNumericId(n)):Jc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mf.fromString(e.substring(4,e.length-2))}}class pe extends Ht{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const wA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends Ht{construct(e,n,r){return new be(e,n,r)}static isValidIdentifier(e){return wA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Am}static keyField(){return new be([Am])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new H(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(n)}static emptyPath(){return new be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(pe.fromString(e))}static fromName(e){return new G(pe.fromString(e).popFirst(5))}static empty(){return new G(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t,e,n){if(!n)throw new H(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TA(t,e,n,r){if(e===!0&&r===!0)throw new H(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cm(t){if(!G.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pm(t){if(G.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function _f(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X(12329,{type:typeof t})}function Iv(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_f(t);throw new H(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t,e){const n={typeString:t};return e&&(n.value=e),n}function go(t,e){if(!Tv(t))throw new H(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new H(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=-62135596800,Rm=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Rm);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<km)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rm}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(go(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-km;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:Se("string",fe._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new fe(0,0))}static max(){return new ce(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=-1;function IA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ce.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new tr(i,G.empty(),e)}function SA(t){return new tr(t.readTime,t.key,eo)}class tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new tr(ce.min(),G.empty(),eo)}static max(){return new tr(ce.max(),G.empty(),eo)}}function AA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vf(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==CA)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},c=>r(c))}),a=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;n(e[h]).next(p=>{a[h]=p,++l,l===s&&r(a)},p=>i(p))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function kA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function yo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ef.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=-1;function Tf(t){return t==null}function il(t){return t===0&&1/t==-1/0}function RA(t){return typeof t=="number"&&Number.isInteger(t)&&!il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="";function NA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Nm(e)),e=xA(t.get(n),e);return Nm(e)}function xA(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Sv:n+="";break;default:n+=s}}return n}function Nm(t){return t+Sv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Av(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new ut(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zo(this.root,e,this.comparator,!0)}}class Zo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Le.RED,this.left=i??Le.EMPTY,this.right=s??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Le(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Le.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Le(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dm(this.data.getIterator())}getIteratorFrom(e){return new Dm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class Dm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Ue(be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new DA("Invalid base64 string: "+s):s}}(e);return new Xt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const OA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(ve(!!t,39018),typeof t=="string"){let e=0;const n=OA.exec(t);if(ve(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ki(t){return typeof t=="string"?Xt.fromBase64String(t):Xt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="server_timestamp",Pv="__type__",kv="__previous_value__",Rv="__local_write_time__";function If(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Pv])==null?void 0:r.stringValue)===Cv}function Sf(t){const e=t.mapValue.fields[kv];return If(e)?Sf(e):e}function sl(t){const e=br(t.mapValue.fields[Rv].timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n,r,i,s,a,l,c,h,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=p}}const ol="(default)";class al{constructor(e,n){this.projectId=e,this.database=n||ol}static empty(){return new al("","")}get isDefaultDatabase(){return this.database===ol}isEqual(e){return e instanceof al&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="__type__",LA="__max__",ea={mapValue:{}},xv="__vector__",Zc="value";function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?If(t)?4:bA(t)?9007199254740991:MA(t)?10:11:X(28295,{value:t})}function Yt(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sl(t).isEqual(sl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=br(i.timestampValue),l=br(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ki(i.bytesValue).isEqual(ki(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Me(i.doubleValue),l=Me(s.doubleValue);return a===l?il(a)===il(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Pi(t.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(xm(a)!==xm(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Yt(a[c],l[c])))return!1;return!0}(t,e);default:return X(52216,{left:t})}}function to(t,e){return(t.values||[]).find(n=>Yt(n,e))!==void 0}function Ri(t,e){if(t===e)return 0;const n=Fr(t),r=Fr(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Me(s.integerValue||s.doubleValue),c=Me(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Om(t.timestampValue,e.timestampValue);case 4:return Om(sl(t),sl(e));case 5:return Jc(t.stringValue,e.stringValue);case 6:return function(s,a){const l=ki(s),c=ki(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const p=te(l[h],c[h]);if(p!==0)return p}return te(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=te(Me(s.latitude),Me(a.latitude));return l!==0?l:te(Me(s.longitude),Me(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Vm(t.arrayValue,e.arrayValue);case 10:return function(s,a){var y,k,N,x;const l=s.fields||{},c=a.fields||{},h=(y=l[Zc])==null?void 0:y.arrayValue,p=(k=c[Zc])==null?void 0:k.arrayValue,m=te(((N=h==null?void 0:h.values)==null?void 0:N.length)||0,((x=p==null?void 0:p.values)==null?void 0:x.length)||0);return m!==0?m:Vm(h,p)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===ea.mapValue&&a===ea.mapValue)return 0;if(s===ea.mapValue)return 1;if(a===ea.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=a.fields||{},p=Object.keys(h);c.sort(),p.sort();for(let m=0;m<c.length&&m<p.length;++m){const y=Jc(c[m],p[m]);if(y!==0)return y;const k=Ri(l[c[m]],h[p[m]]);if(k!==0)return k}return te(c.length,p.length)}(t.mapValue,e.mapValue);default:throw X(23264,{he:n})}}function Om(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=br(t),r=br(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function Vm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ri(n[i],r[i]);if(s)return s}return te(n.length,r.length)}function Ni(t){return eh(t)}function eh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ki(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=eh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${eh(n.fields[a])}`;return i+"}"}(t.mapValue):X(61005,{value:t})}function wa(t){switch(Fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Sf(t);return e?16+wa(e):16;case 5:return 2*t.stringValue.length;case 6:return ki(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+wa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Ui(r.fields,(s,a)=>{i+=s.length+wa(a)}),i}(t.mapValue);default:throw X(13486,{value:t})}}function th(t){return!!t&&"integerValue"in t}function Af(t){return!!t&&"arrayValue"in t}function Ta(t){return!!t&&"mapValue"in t}function MA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Nv])==null?void 0:r.stringValue)===xv}function Rs(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Rs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Rs(t.arrayValue.values[n]);return e}return{...t}}function bA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===LA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ta(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rs(n)}setAll(e){let n=be.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=Rs(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ta(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ta(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ot(Rs(this.value))}}function Dv(t){const e=[];return Ui(t.fields,(n,r)=>{const i=new be([n]);if(Ta(r)){const s=Dv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new xt(e,0,ce.min(),ce.min(),ce.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,i){return new xt(e,1,n,ce.min(),r,i,0)}static newNoDocument(e,n){return new xt(e,2,n,ce.min(),ce.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new xt(e,3,n,ce.min(),ce.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n){this.position=e,this.inclusive=n}}function Lm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(a.referenceValue),n.key):r=Ri(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n="asc"){this.field=e,this.dir=n}}function FA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{}class xe extends Ov{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jA(e,n,r):n==="array-contains"?new $A(e,r):n==="in"?new HA(e,r):n==="not-in"?new WA(e,r):n==="array-contains-any"?new qA(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zA(e,r):new BA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ri(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(Ri(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends Ov{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new nr(e,n)}matches(e){return Vv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Vv(t){return t.op==="and"}function Lv(t){return UA(t)&&Vv(t)}function UA(t){for(const e of t.filters)if(e instanceof nr)return!1;return!0}function nh(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Ni(t.value);if(Lv(t))return t.filters.map(e=>nh(e)).join(",");{const e=t.filters.map(n=>nh(n)).join(",");return`${t.op}(${e})`}}function Mv(t,e){return t instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.field.isEqual(i.field)&&Yt(r.value,i.value)}(t,e):t instanceof nr?function(r,i){return i instanceof nr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Mv(a,i.filters[l]),!0):!1}(t,e):void X(19439)}function bv(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ni(n.value)}`}(t):t instanceof nr?function(n){return n.op.toString()+" {"+n.getFilters().map(bv).join(" ,")+"}"}(t):"Filter"}class jA extends xe{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class zA extends xe{constructor(e,n){super(e,"in",n),this.keys=Fv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BA extends xe{constructor(e,n){super(e,"not-in",n),this.keys=Fv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Fv(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class $A extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Af(n)&&to(n.arrayValue,this.value)}}class HA extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&to(this.value.arrayValue,n)}}class WA extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(to(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!to(this.value.arrayValue,n)}}class qA extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Af(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>to(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Te=null}}function bm(t,e=null,n=[],r=[],i=null,s=null,a=null){return new GA(t,e,n,r,i,s,a)}function Cf(t){const e=se(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>nh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Tf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ni(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ni(r)).join(",")),e.Te=n}return e.Te}function Pf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Mv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mm(t.startAt,e.startAt)&&Mm(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function KA(t,e,n,r,i,s,a,l){return new bl(t,e,n,r,i,s,a,l)}function QA(t){return new bl(t)}function Fm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function XA(t){return t.collectionGroup!==null}function Ns(t){const e=se(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ue(be.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new ul(s,r))}),n.has(be.keyField().canonicalString())||e.Ie.push(new ul(be.keyField(),r))}return e.Ie}function Cr(t){const e=se(t);return e.Ee||(e.Ee=YA(e,Ns(t))),e.Ee}function YA(t,e){if(t.limitType==="F")return bm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ul(i.field,s)});const n=t.endAt?new ll(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ll(t.startAt.position,t.startAt.inclusive):null;return bm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function rh(t,e,n){return new bl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uv(t,e){return Pf(Cr(t),Cr(e))&&t.limitType===e.limitType}function jv(t){return`${Cf(Cr(t))}|lt:${t.limitType}`}function fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>bv(i)).join(", ")}]`),Tf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ni(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ni(i)).join(",")),`Target(${r})`}(Cr(t))}; limitType=${t.limitType})`}function kf(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ns(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,c){const h=Lm(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Ns(r),i)||r.endAt&&!function(a,l,c){const h=Lm(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Ns(r),i))}(t,e)}function JA(t){return(e,n)=>{let r=!1;for(const i of Ns(t)){const s=ZA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ZA(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,a,l){const c=a.data.field(s),h=l.data.field(s);return c!==null&&h!==null?Ri(c,h):X(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Av(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=new ut(G.comparator);function cl(){return eC}const zv=new ut(G.comparator);function ta(...t){let e=zv;for(const n of t)e=e.insert(n.key,n);return e}function Bv(t){let e=zv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Tr(){return xs()}function $v(){return xs()}function xs(){return new zr(t=>t.toString(),(t,e)=>t.isEqual(e))}const tC=new ut(G.comparator),nC=new Ue(G.comparator);function Ge(...t){let e=nC;for(const n of t)e=e.add(n);return e}const rC=new Ue(te);function iC(){return rC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:il(e)?"-0":e}}function Hv(t){return{integerValue:""+t}}function sC(t,e){return RA(e)?Hv(e):Rf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(){this._=void 0}}function oC(t,e,n){return t instanceof no?function(i,s){const a={fields:{[Pv]:{stringValue:Cv},[Rv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&If(s)&&(s=Sf(s)),s&&(a.fields[kv]=s),{mapValue:a}}(n,e):t instanceof ro?qv(t,e):t instanceof io?Gv(t,e):function(i,s){const a=Wv(i,s),l=Um(a)+Um(i.Ae);return th(a)&&th(i.Ae)?Hv(l):Rf(i.serializer,l)}(t,e)}function aC(t,e,n){return t instanceof ro?qv(t,e):t instanceof io?Gv(t,e):n}function Wv(t,e){return t instanceof hl?function(r){return th(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class no extends Fl{}class ro extends Fl{constructor(e){super(),this.elements=e}}function qv(t,e){const n=Kv(e);for(const r of t.elements)n.some(i=>Yt(i,r))||n.push(r);return{arrayValue:{values:n}}}class io extends Fl{constructor(e){super(),this.elements=e}}function Gv(t,e){let n=Kv(e);for(const r of t.elements)n=n.filter(i=>!Yt(i,r));return{arrayValue:{values:n}}}class hl extends Fl{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Um(t){return Me(t.integerValue||t.doubleValue)}function Kv(t){return Af(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n){this.field=e,this.transform=n}}function uC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ro&&i instanceof ro||r instanceof io&&i instanceof io?Pi(r.elements,i.elements,Yt):r instanceof hl&&i instanceof hl?Yt(r.Ae,i.Ae):r instanceof no&&i instanceof no}(t.transform,e.transform)}class cC{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ul{}function Qv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yv(t.key,an.none()):new _o(t.key,t.data,an.none());{const n=t.data,r=Ot.empty();let i=new Ue(be.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Br(t.key,r,new Mt(i.toArray()),an.none())}}function hC(t,e,n){t instanceof _o?function(i,s,a){const l=i.value.clone(),c=zm(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Br?function(i,s,a){if(!Ia(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=zm(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Xv(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Ds(t,e,n,r){return t instanceof _o?function(s,a,l,c){if(!Ia(s.precondition,a))return l;const h=s.value.clone(),p=Bm(s.fieldTransforms,c,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Br?function(s,a,l,c){if(!Ia(s.precondition,a))return l;const h=Bm(s.fieldTransforms,c,a),p=a.data;return p.setAll(Xv(s)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,a,l){return Ia(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function fC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Wv(r.transform,i||null);s!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,s))}return n||null}function jm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Pi(r,i,(s,a)=>uC(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _o extends Ul{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Br extends Ul{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Xv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zm(t,e,n){const r=new Map;ve(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,aC(a,l,n[i]))}return r}function Bm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,oC(s,a,e))}return r}class Yv extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dC extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&hC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ds(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ds(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$v();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const c=Qv(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ge())}isEqual(e){return this.batchId===e.batchId&&Pi(this.mutations,e.mutations,(n,r)=>jm(n,r))&&Pi(this.baseMutations,e.baseMutations,(n,r)=>jm(n,r))}}class Nf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return tC}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Nf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,Z;function gC(t){switch(t){case V.OK:return X(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return X(15467,{code:t})}}function yC(t){if(t===void 0)return Mr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Te.OK:return V.OK;case Te.CANCELLED:return V.CANCELLED;case Te.UNKNOWN:return V.UNKNOWN;case Te.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Te.INTERNAL:return V.INTERNAL;case Te.UNAVAILABLE:return V.UNAVAILABLE;case Te.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Te.NOT_FOUND:return V.NOT_FOUND;case Te.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Te.ABORTED:return V.ABORTED;case Te.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Te.DATA_LOSS:return V.DATA_LOSS;default:return X(39323,{code:t})}}(Z=Te||(Te={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new mf([4294967295,4294967295],0);class _C{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ih(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function EC(t,e){return ih(t,e.toTimestamp())}function yi(t){return ve(!!t,49232),ce.fromTimestamp(function(n){const r=br(n);return new fe(r.seconds,r.nanos)}(t))}function Jv(t,e){return sh(t,e).canonicalString()}function sh(t,e){const n=function(i){return new pe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function wC(t){const e=pe.fromString(t);return ve(RC(e),10190,{key:e.toString()}),e}function oh(t,e){return Jv(t.databaseId,e.path)}function TC(t){const e=wC(t);return e.length===4?pe.emptyPath():SC(e)}function IC(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function SC(t){return ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function $m(t,e,n){return{name:oh(t,e),fields:n.value.mapValue.fields}}function AC(t,e){let n;if(e instanceof _o)n={update:$m(t,e.key,e.value)};else if(e instanceof Yv)n={delete:oh(t,e.key)};else if(e instanceof Br)n={update:$m(t,e.key,e.data),updateMask:kC(e.fieldMask)};else{if(!(e instanceof dC))return X(16599,{Vt:e.type});n={verify:oh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof no)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ro)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof io)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof hl)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw X(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:EC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X(27497)}(t,e.precondition)),n}function CC(t,e){return t&&t.length>0?(ve(e!==void 0,14353),t.map(n=>function(i,s){let a=i.updateTime?yi(i.updateTime):yi(s);return a.isEqual(ce.min())&&(a=yi(s)),new cC(a,i.transformResults||[])}(n,e))):[]}function PC(t){let e=TC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const y=Zv(m);return y instanceof nr&&Lv(y)?y.getFilters():[y]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(y=>function(N){return new ul(Kr(N.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Tf(y)?null:y}(n.limit));let c=null;n.startAt&&(c=function(m){const y=!!m.before,k=m.values||[];return new ll(k,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,k=m.values||[];return new ll(k,y)}(n.endAt)),KA(e,i,a,s,l,"F",c,h)}function Zv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Kr(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Kr(n.unaryFilter.field);return xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Kr(n.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Kr(n.unaryFilter.field);return xe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(t):t.fieldFilter!==void 0?function(n){return xe.create(Kr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nr.create(n.compositeFilter.filters.map(r=>Zv(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(n.compositeFilter.op))}(t):X(30097,{filter:t})}function Kr(t){return be.fromServerFormat(t.fieldPath)}function kC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.yt=e}}function xC(t){const e=PC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(){this.Cn=new OC}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(tr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class OC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ue(pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ue(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eE=41943040;class rt{static withCacheSize(e){return new rt(e,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt.DEFAULT_COLLECTION_PERCENTILE=10,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rt.DEFAULT=new rt(eE,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rt.DISABLED=new rt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new xi(0)}static cr(){return new xi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="LruGarbageCollector",VC=1048576;function qm([t,e],[n,r]){const i=te(t,n);return i===0?te(e,r):i}class LC{constructor(e){this.Ir=e,this.buffer=new Ue(qm),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();qm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class MC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){$(Wm,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){yo(n)?$(Wm,"Ignoring IndexedDB error during garbage collection: ",n):await vf(n)}await this.Vr(3e5)})}}class bC{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Ef.ce);const r=new LC(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Hm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hm):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,a,l,c,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Gr()<=J.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-p}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function FC(t,e){return new bC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.changes=new zr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ds(r.mutation,i,Mt.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ge()){const i=Tr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=ta();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=cl();const a=xs(),l=function(){return xs()}();return n.forEach((c,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof Br)?s=s.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),Ds(p.mutation,h,p.mutation.getFieldMask(),fe.now())):a.set(h.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,p)=>a.set(h,p)),n.forEach((h,p)=>l.set(h,new jC(p,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=xs();let i=new ut((a,l)=>a-l),s=Ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let p=r.get(c)||Mt.empty();p=l.applyToLocalView(h,p),r.set(c,p);const m=(i.get(l.batchId)||Ge()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,p=c.value,m=$v();p.forEach(y=>{if(!s.has(y)){const k=Qv(n.get(y),r.get(y));k!==null&&m.set(y,k),s=s.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return G.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):XA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Tr());let l=eo,c=s;return a.next(h=>O.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?O.resolve():this.remoteDocumentCache.getEntry(e,p).next(y=>{c=c.insert(p,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,Ge())).next(p=>({batchId:l,changes:Bv(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=ta();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=ta();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,c=>{const h=function(m,y){return new bl(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((m,y)=>{a=a.insert(m,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((c,h)=>{const p=h.getKey();a.get(p)===null&&(a=a.insert(p,xt.newInvalidDocument(p)))});let l=ta();return a.forEach((c,h)=>{const p=s.get(c);p!==void 0&&Ds(p.mutation,h,Mt.empty(),fe.now()),kf(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:yi(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:xC(i.bundledQuery),readTime:yi(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.overlays=new ut(G.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Tr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Tr(),s=n.length+1,a=new G(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ut((h,p)=>h-p);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=Tr(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Tr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=i)););return O.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new mC(n,r));let s=this.qr.get(n);s===void 0&&(s=Ge(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.sessionToken=Xt.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.Qr=new Ue(Re.$r),this.Ur=new Ue(Re.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Re(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Re(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new G(new pe([])),r=new Re(n,e),i=new Re(n,e+1),s=[];return this.Ur.forEachInRange([r,i],a=>{this.Gr(a),s.push(a.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new G(new pe([])),r=new Re(n,e),i=new Re(n,e+1);let s=Ge();return this.Ur.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Re(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Re{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return G.comparator(e.key,n.key)||te(e.Yr,n.Yr)}static Kr(e,n){return te(e.Yr,n.Yr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ue(Re.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new pC(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.Zr=this.Zr.add(new Re(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?wf:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Re(n,0),i=new Re(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],a=>{const l=this.Xr(a.Yr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(te);return n.forEach(i=>{const s=new Re(i,0),a=new Re(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,a],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const a=new Re(new G(s),0);let l=new Ue(te);return this.Zr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.Yr)),!0)},a),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,i=>{const s=new Re(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Re(n,0),i=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.ri=e,this.docs=function(){return new ut(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(e,n){let r=cl();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xt.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=cl();const a=n.path,l=new G(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:p}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||AA(SA(p),r)<=0||(i.has(p.key)||kf(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GC(this)}getSize(e){return O.resolve(this.size)}}class GC extends UC{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.persistence=e,this.si=new zr(n=>Cf(n),Pf),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.oi=0,this._i=new xf,this.targetCount=0,this.ai=xi.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new xi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ef(0),this.li=!1,this.li=!0,this.hi=new HC,this.referenceDelegate=e(this),this.Pi=new KC(this),this.indexManager=new DC,this.remoteDocumentCache=function(i){return new qC(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new NC(n),this.Ii=new BC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $C,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new WC(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new QC(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class QC extends PA{constructor(e){super(),this.currentSequenceNumber=e}}class Df{constructor(e){this.persistence=e,this.Ri=new xf,this.Vi=null}static mi(e){return new Df(e)}get fi(){if(this.Vi)return this.Vi;throw X(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const i=G.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,ce.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class fl{constructor(e,n){this.persistence=e,this.pi=new zr(r=>NA(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=FC(this,n)}static mi(e,n){return new fl(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,a=>this.br(e,a,n).next(l=>{l||(r++,s.removeEntry(a,ce.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=wa(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=Ge(),i=Ge();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Of(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return qT()?8:kA(Xe())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new XC;return this.Ss(e,n,a).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,a,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Gr()<=J.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(Gr()<=J.DEBUG&&$("QueryEngine","Query:",fs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Gr()<=J.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cr(n))):O.resolve())}ys(e,n){if(Fm(n))return O.resolve(null);let r=Cr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=rh(n,null,"F"),r=Cr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Ge(...s);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.Ds(n,l);return this.Cs(n,h,a,c.readTime)?this.ys(e,rh(n,null,"F")):this.vs(e,h,n,c)}))})))}ws(e,n,r,i){return Fm(n)||i.isEqual(ce.min())?O.resolve(null):this.ps.getDocuments(e,r).next(s=>{const a=this.Ds(n,s);return this.Cs(n,a,r,i)?O.resolve(null):(Gr()<=J.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fs(n)),this.vs(e,a,n,IA(i,eo)).next(l=>l))})}Ds(e,n){let r=new Ue(JA(e));return n.forEach((i,s)=>{kf(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Gr()<=J.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",fs(n)),this.ps.getDocumentsMatchingQuery(e,n,tr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="LocalStore";class ZC{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new ut(te),this.xs=new zr(s=>Cf(s),Pf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function eP(t,e,n,r){return new ZC(t,e,n,r)}async function nE(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let c=Ge();for(const h of i){a.push(h.batchId);for(const p of h.mutations)c=c.add(p.key)}for(const h of s){l.push(h.batchId);for(const p of h.mutations)c=c.add(p.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:l}))})})}function tP(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,h,p){const m=h.batch,y=m.keys();let k=O.resolve();return y.forEach(N=>{k=k.next(()=>p.getEntry(c,N)).next(x=>{const b=h.docVersions.get(N);ve(b!==null,48541),x.version.compareTo(b)<0&&(m.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),p.addEntry(x)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ge();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function nP(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function rP(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=wf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Gm{constructor(){this.activeTargetIds=iC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iP{constructor(){this.Mo=new Gm,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Gm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="ConnectivityMonitor";class Qm{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){$(Km,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){$(Km,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na=null;function ah(){return na===null?na=function(){return 268435456+Math.round(2147483648*Math.random())}():na++,"0x"+na.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="RestConnection",oP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===ol?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const a=ah(),l=this.zo(e,n.toUriEncodedString());$(qu,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,s);const{host:h}=new URL(l),p=Li(h);return this.Jo(e,l,c,r,p).then(m=>($(qu,`Received RPC '${e}' ${a}: `,m),m),m=>{throw Ml(qu,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,a){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=oP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection";class uP extends aP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const a=ah();return new Promise((l,c)=>{const h=new pv;h.setWithCredentials(!0),h.listenOnce(mv.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ea.NO_ERROR:const m=h.getResponseJson();$(He,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case Ea.TIMEOUT:$(He,`RPC '${e}' ${a} timed out`),c(new H(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ea.HTTP_ERROR:const y=h.getStatus();if($(He,`RPC '${e}' ${a} failed with status:`,y,"response text:",h.getResponseText()),y>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const N=k==null?void 0:k.error;if(N&&N.status&&N.message){const x=function(S){const E=S.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(E)>=0?E:V.UNKNOWN}(N.status);c(new H(x,N.message))}else c(new H(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new H(V.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{$(He,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(i);$(He,`RPC '${e}' ${a} sending request:`,i),h.send(n,"POST",p,r,15)})}T_(e,n,r){const i=ah(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=_v(),l=yv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const p=s.join("");$(He,`Creating RPC '${e}' stream ${i}: ${p}`,c);const m=a.createWebChannel(p,c);this.I_(m);let y=!1,k=!1;const N=new lP({Yo:b=>{k?$(He,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(y||($(He,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),$(He,`RPC '${e}' stream ${i} sending:`,b),m.send(b))},Zo:()=>m.close()}),x=(b,S,E)=>{b.listen(S,A=>{try{E(A)}catch(D){setTimeout(()=>{throw D},0)}})};return x(m,ys.EventType.OPEN,()=>{k||($(He,`RPC '${e}' stream ${i} transport opened.`),N.o_())}),x(m,ys.EventType.CLOSE,()=>{k||(k=!0,$(He,`RPC '${e}' stream ${i} transport closed`),N.a_(),this.E_(m))}),x(m,ys.EventType.ERROR,b=>{k||(k=!0,Ml(He,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),N.a_(new H(V.UNAVAILABLE,"The operation could not be completed")))}),x(m,ys.EventType.MESSAGE,b=>{var S;if(!k){const E=b.data[0];ve(!!E,16349);const A=E,D=(A==null?void 0:A.error)||((S=A[0])==null?void 0:S.error);if(D){$(He,`RPC '${e}' stream ${i} received error:`,D);const F=D.status;let U=function(v){const T=Te[v];if(T!==void 0)return yC(T)}(F),_=D.message;U===void 0&&(U=V.INTERNAL,_="Unknown error status: "+F+" with message "+D.message),k=!0,N.a_(new H(U,_)),m.close()}else $(He,`RPC '${e}' stream ${i} received:`,E),N.u_(E)}}),x(l,gv.STAT_EVENT,b=>{b.stat===Yc.PROXY?$(He,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Yc.NOPROXY&&$(He,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Gu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t){return new _C(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="PersistentStream";class cP{constructor(e,n,r,i,s,a,l,c){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new rE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Mr(n.toString()),Mr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new H(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(Xm,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():($(Xm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hP extends cP{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=CC(e.writeResults,e.commitTime),r=yi(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=IC(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>AC(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{}class dP extends fP{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Go(e,sh(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(V.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,sh(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(V.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class pP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Mr(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="RemoteStore";class mP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{wo(this)&&($(vo,"Restarting streams for network reachability change."),await async function(c){const h=se(c);h.Ea.add(4),await Eo(h),h.Ra.set("Unknown"),h.Ea.delete(4),await zl(h)}(this))})}),this.Ra=new pP(r,i)}}async function zl(t){if(wo(t))for(const e of t.da)await e(!0)}async function Eo(t){for(const e of t.da)await e(!1)}function wo(t){return se(t).Ea.size===0}async function iE(t,e,n){if(!yo(e))throw e;t.Ea.add(1),await Eo(t),t.Ra.set("Offline"),n||(n=()=>nP(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(vo,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await zl(t)})}function sE(t,e){return e().catch(n=>iE(t,n,e))}async function Bl(t){const e=se(t),n=rr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:wf;for(;gP(e);)try{const i=await rP(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,yP(e,i)}catch(i){await iE(e,i)}oE(e)&&aE(e)}function gP(t){return wo(t)&&t.Ta.length<10}function yP(t,e){t.Ta.push(e);const n=rr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function oE(t){return wo(t)&&!rr(t).x_()&&t.Ta.length>0}function aE(t){rr(t).start()}async function _P(t){rr(t).ra()}async function vP(t){const e=rr(t);for(const n of t.Ta)e.ea(n.mutations)}async function EP(t,e,n){const r=t.Ta.shift(),i=Nf.from(r,e,n);await sE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Bl(t)}async function wP(t,e){e&&rr(t).X_&&await async function(r,i){if(function(a){return gC(a)&&a!==V.ABORTED}(i.code)){const s=r.Ta.shift();rr(r).B_(),await sE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Bl(r)}}(t,e),oE(t)&&aE(t)}async function Ym(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),$(vo,"RemoteStore received new credentials");const r=wo(n);n.Ea.add(3),await Eo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await zl(n)}async function TP(t,e){const n=se(t);e?(n.Ea.delete(2),await zl(n)):e||(n.Ea.add(2),await Eo(n),n.Ra.set("Unknown"))}function rr(t){return t.fa||(t.fa=function(n,r,i){const s=se(n);return s.sa(),new hP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:_P.bind(null,t),r_:wP.bind(null,t),ta:vP.bind(null,t),na:EP.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Bl(t)):(await t.fa.stop(),t.Ta.length>0&&($(vo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Vf(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lE(t,e){if(Mr("AsyncQueue",`${e}: ${t}`),yo(t))return new H(V.UNAVAILABLE,`${e}: ${t}`);throw t}class IP{constructor(){this.queries=Jm(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=se(n),s=i.queries;i.queries=Jm(),s.forEach((a,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new H(V.ABORTED,"Firestore shutting down"))}}function Jm(){return new zr(t=>jv(t),Uv)}function SP(t){t.Ca.forEach(e=>{e.next()})}var Zm,eg;(eg=Zm||(Zm={})).Ma="default",eg.Cache="cache";const AP="SyncEngine";class CP{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new zr(l=>jv(l),Uv),this.Iu=new Map,this.Eu=new Set,this.du=new ut(G.comparator),this.Au=new Map,this.Ru=new xf,this.Vu={},this.mu=new Map,this.fu=xi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function PP(t,e,n){const r=xP(t);try{const i=await function(a,l){const c=se(a),h=fe.now(),p=l.reduce((k,N)=>k.add(N.key),Ge());let m,y;return c.persistence.runTransaction("Locally write mutations","readwrite",k=>{let N=cl(),x=Ge();return c.Ns.getEntries(k,p).next(b=>{N=b,N.forEach((S,E)=>{E.isValidDocument()||(x=x.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(k,N)).next(b=>{m=b;const S=[];for(const E of l){const A=fC(E,m.get(E.key).overlayedDocument);A!=null&&S.push(new Br(E.key,A,Dv(A.value.mapValue),an.exists(!0)))}return c.mutationQueue.addMutationBatch(k,h,S,l)}).next(b=>{y=b;const S=b.applyToLocalDocumentSet(m,x);return c.documentOverlayCache.saveOverlays(k,b.batchId,S)})}).then(()=>({batchId:y.batchId,changes:Bv(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let h=a.Vu[a.currentUser.toKey()];h||(h=new ut(te)),h=h.insert(l,c),a.Vu[a.currentUser.toKey()]=h}(r,i.batchId,n),await $l(r,i.changes),await Bl(r.remoteStore)}catch(i){const s=lE(i,"Failed to persist write");n.reject(s)}}function tg(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=se(a);c.onlineState=l;let h=!1;c.queries.forEach((p,m)=>{for(const y of m.Sa)y.va(l)&&(h=!0)}),h&&SP(c)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kP(t,e){const n=se(t),r=e.batch.batchId;try{const i=await tP(n.localStore,e);cE(n,r,null),uE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $l(n,i)}catch(i){await vf(i)}}async function RP(t,e,n){const r=se(t);try{const i=await function(a,l){const c=se(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(ve(m!==null,37113),p=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>c.localDocuments.getDocuments(h,p))})}(r.localStore,e);cE(r,e,n),uE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $l(r,i)}catch(i){await vf(i)}}function uE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function cE(t,e,n){const r=se(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}async function $l(t,e,n){const r=se(t),i=[],s=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{a.push(r.pu(c,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Of.As(c.targetId,h);s.push(m)}}))}),await Promise.all(a),r.Pu.H_(i),await async function(c,h){const p=se(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,y=>O.forEach(y.Es,k=>p.persistence.referenceDelegate.addReference(m,y.targetId,k)).next(()=>O.forEach(y.ds,k=>p.persistence.referenceDelegate.removeReference(m,y.targetId,k)))))}catch(m){if(!yo(m))throw m;$(JC,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const k=p.Ms.get(y),N=k.snapshotVersion,x=k.withLastLimboFreeSnapshotVersion(N);p.Ms=p.Ms.insert(y,x)}}}(r.localStore,s))}async function NP(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){$(AP,"User change. New user:",e.toKey());const r=await nE(n.localStore,e);n.currentUser=e,function(s,a){s.mu.forEach(l=>{l.forEach(c=>{c.reject(new H(V.CANCELLED,a))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $l(n,r.Ls)}}function xP(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RP.bind(null,e),e}class dl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return eP(this.persistence,new YC,e.initialUser,this.serializer)}Cu(e){return new tE(Df.mi,this.serializer)}Du(e){return new iP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dl.provider={build:()=>new dl};class DP extends dl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ve(this.persistence.referenceDelegate instanceof fl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new MC(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?rt.withCacheSize(this.cacheSizeBytes):rt.DEFAULT;return new tE(r=>fl.mi(r,n),this.serializer)}}class lh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NP.bind(null,this.syncEngine),await TP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IP}()}createDatastore(e){const n=jl(e.databaseInfo.databaseId),r=function(s){return new uP(s)}(e.databaseInfo);return function(s,a,l,c){return new dP(s,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new mP(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>tg(this.syncEngine,n,0),function(){return Qm.v()?new Qm:new sP}())}createSyncEngine(e,n){return function(i,s,a,l,c,h,p){const m=new CP(i,s,a,l,c,h);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=se(i);$(vo,"RemoteStore shutting down."),s.Ea.add(5),await Eo(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}lh.provider={build:()=>new lh};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="FirestoreClient";class OP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=We.UNAUTHENTICATED,this.clientId=yf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{$(ir,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>($(ir,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lE(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ku(t,e){t.asyncQueue.verifyOperationInProgress(),$(ir,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ng(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VP(t);$(ir,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ym(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ym(e.remoteStore,i)),t._onlineComponents=e}async function VP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(ir,"Using user provided OfflineComponentProvider");try{await Ku(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ml("Error using user provided cache. Falling back to memory cache: "+n),await Ku(t,new dl)}}else $(ir,"Using default OfflineComponentProvider"),await Ku(t,new DP(void 0));return t._offlineComponents}async function LP(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(ir,"Using user provided OnlineComponentProvider"),await ng(t,t._uninitializedComponentsProvider._online)):($(ir,"Using default OnlineComponentProvider"),await ng(t,new lh))),t._onlineComponents}function MP(t){return LP(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="firestore.googleapis.com",ig=!0;class sg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fE,this.ssl=ig}else this.host=e.host,this.ssl=e.ssl??ig;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=eE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VC)throw new H(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fA;switch(r.type){case"firstParty":return new gA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=rg.get(n);r&&($("ComponentProvider","Removing Datastore"),rg.delete(n),r.terminate())}(this),Promise.resolve()}}function bP(t,e,n,r={}){var h;t=Iv(t,Hl);const i=Li(e),s=t._getSettings(),a={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(k_(`https://${l}`),R_("Firestore",!0)),s.host!==fE&&s.host!==l&&Ml("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:l,ssl:i,emulatorOptions:r};if(!Dr(c,a)&&(t._setSettings(c),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=We.MOCK_USER;else{p=bT(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new H(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new We(y)}t._authCredentials=new dA(new Ev(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lf(this.firestore,e,this._query)}}class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(go(n,Ke._jsonSchema))return new Ke(e,r||null,new G(pe.fromString(n.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:Se("string",Ke._jsonSchemaVersion),referencePath:Se("string")};class Yn extends Lf{constructor(e,n,r){super(e,n,QA(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new G(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function FP(t,e,...n){if(t=At(t),wv("collection","path",e),t instanceof Hl){const r=pe.fromString(e,...n);return Pm(r),new Yn(t,null,r)}{if(!(t instanceof Ke||t instanceof Yn))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Pm(r),new Yn(t.firestore,null,r)}}function UP(t,e,...n){if(t=At(t),arguments.length===1&&(e=yf.newId()),wv("doc","path",e),t instanceof Hl){const r=pe.fromString(e,...n);return Cm(r),new Ke(t,null,new G(r))}{if(!(t instanceof Ke||t instanceof Yn))throw new H(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Cm(r),new Ke(t.firestore,t instanceof Yn?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="AsyncQueue";class ag{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new rE(this,"async_queue_retry"),this._c=()=>{const r=Gu();r&&$(og,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Gu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Gu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Ar;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!yo(e))throw e;$(og,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Mr("INTERNAL UNHANDLED ERROR: ",lg(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Vf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&X(47125,{Pc:lg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function lg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class dE extends Hl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ag,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ag(e),this._firestoreClient=void 0,await e}}}function jP(t,e){const n=typeof t=="object"?t:O_(),r=typeof t=="string"?t:ol,i=af(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=LT("firestore");s&&bP(i,...s)}return i}function zP(t){if(t._terminated)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||BP(t),t._firestoreClient}function BP(t){var r,i,s;const e=t._freezeSettings(),n=function(l,c,h,p){return new VA(l,c,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,hE(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new OP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vt(Xt.fromBase64String(e))}catch(n){throw new H(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vt(Xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(go(e,Vt._jsonSchema))return Vt.fromBase64String(e.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:Se("string",Vt._jsonSchemaVersion),bytes:Se("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ln._jsonSchemaVersion}}static fromJSON(e){if(go(e,ln._jsonSchema))return new ln(e.latitude,e.longitude)}}ln._jsonSchemaVersion="firestore/geoPoint/1.0",ln._jsonSchema={type:Se("string",ln._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(go(e,un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new un(e.vectorValues);throw new H(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}un._jsonSchemaVersion="firestore/vectorValue/1.0",un._jsonSchema={type:Se("string",un._jsonSchemaVersion),vectorValues:Se("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=/^__.*__$/;class HP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,n,this.fieldTransforms):new _o(e,this.data,n,this.fieldTransforms)}}function pE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{Ac:t})}}class Ff{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ff({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return pl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(pE(this.Ac)&&$P.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class WP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jl(e)}Cc(e,n,r,i=!1){return new Ff({Ac:e,methodName:n,Dc:r,path:be.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qP(t){const e=t._freezeSettings(),n=jl(t._databaseId);return new WP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function GP(t,e,n,r,i,s={}){const a=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);_E("Data must be an object, but it was:",a,r);const l=gE(r,a);let c,h;if(s.merge)c=new Mt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const y=KP(e,m,n);if(!a.contains(y))throw new H(V.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);XP(p,y)||p.push(y)}c=new Mt(p),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new HP(new Ot(l),c,h)}class Uf extends bf{_toFieldTransform(e){return new lC(e.path,new no)}isEqual(e){return e instanceof Uf}}function mE(t,e){if(yE(t=At(t)))return _E("Unsupported field value:",e,t),gE(t,e);if(t instanceof bf)return function(r,i){if(!pE(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let c=mE(l,i.wc(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=At(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:ih(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ih(i.serializer,s)}}if(r instanceof ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vt)return{bytesValue:vC(i.serializer,r._byteString)};if(r instanceof Ke){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jv(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof un)return function(a,l){return{mapValue:{fields:{[Nv]:{stringValue:xv},[Zc]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return Rf(l.serializer,h)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${_f(r)}`)}(t,e)}function gE(t,e){const n={};return Av(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ui(t,(r,i)=>{const s=mE(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof ln||t instanceof Vt||t instanceof Ke||t instanceof bf||t instanceof un)}function _E(t,e,n){if(!yE(n)||!Tv(n)){const r=_f(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function KP(t,e,n){if((e=At(e))instanceof Mf)return e._internalPath;if(typeof e=="string")return vE(t,e);throw pl("Field path arguments must be of type string or ",t,!1,void 0,n)}const QP=new RegExp("[~\\*/\\[\\]]");function vE(t,e,n){if(e.search(QP)>=0)throw pl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mf(...e.split("."))._internalPath}catch{throw pl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pl(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new H(V.INVALID_ARGUMENT,l+t+c)}function XP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YP extends EE{data(){return super.data()}}function wE(t,e){return typeof e=="string"?vE(t,e):e instanceof Mf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ra{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _i extends EE{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=_i._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}_i._jsonSchemaVersion="firestore/documentSnapshot/1.0",_i._jsonSchema={type:Se("string",_i._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class Sa extends _i{data(e={}){return super.data(e)}}class Os{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ra(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Sa(this._firestore,this._userDataWriter,r.key,r,new ra(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const c=new Sa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ra(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Sa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ra(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:ZP(l.type),doc:c,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Os._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ZP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:t})}}Os._jsonSchemaVersion="firestore/querySnapshot/1.0",Os._jsonSchema={type:Se("string",Os._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};function ek(t,e){const n=Iv(t.firestore,dE),r=UP(t),i=JP(t.converter,e);return tk(n,[GP(qP(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,an.exists(!1))]).then(()=>r)}function tk(t,e){return function(r,i){const s=new Ar;return r.asyncQueue.enqueueAndForget(async()=>PP(await MP(r),i,s)),s.promise}(zP(t),e)}function nk(){return new Uf("serverTimestamp")}(function(e,n=!0){(function(i){Fi=i})(Mi),Ci(new Or("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new dE(new pA(r.getProvider("auth-internal")),new yA(a,r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new al(h.options.projectId,p)}(a,i),a);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Qn(Tm,Im,e),Qn(Tm,Im,"esm2020")})();/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ik=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),ug=t=>{const e=ik(t);return e.charAt(0).toUpperCase()+e.slice(1)},TE=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),sk=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ok={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=ft.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...l},c)=>ft.createElement("svg",{ref:c,...ok,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:TE("lucide",i),...!s&&!sk(l)&&{"aria-hidden":"true"},...l},[...a.map(([h,p])=>ft.createElement(h,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=(t,e)=>{const n=ft.forwardRef(({className:r,...i},s)=>ft.createElement(ak,{ref:s,iconNode:e,className:TE(`lucide-${rk(ug(t))}`,`lucide-${t}`,r),...i}));return n.displayName=ug(t),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],uk=vn("activity",lk);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],hk=vn("chevron-right",ck);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],dk=vn("circle-check-big",fk);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],mk=vn("heart",pk);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],yk=vn("mail",gk);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],vk=vn("map-pin",_k);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],wk=vn("phone",Ek);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ik=vn("shield-check",Tk);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],IE=vn("stethoscope",Sk),Vs={apiKey:"IL_TUO_API_KEY_REALE",authDomain:"tuo-progetto.firebaseapp.com",projectId:"tuo-progetto-id",storageBucket:"tuo-progetto.appspot.com",messagingSenderId:"1234567890",appId:"1:1234567890:web:abc123def456"};let Qu,Aa,uh;try{Vs.apiKey&&Vs.apiKey!=="IL_TUO_API_KEY_REALE"&&(Qu=D_(Vs),Aa=cA(Qu),uh=jP(Qu))}catch(t){console.error("Errore inizializzazione Firebase:",t)}const mr={name:"Dr. Enrico Di Paola",bio:"Con oltre 20 anni di esperienza clinica, accolgo i miei pazienti in un ambiente riservato e professionale. Il mio obiettivo è offrire percorsi di cura personalizzati, ascoltando attentamente ogni singola esigenza.",image:"https://api.dicebear.com/7.x/avataaars/svg?seed=Enrico",email:"enrico.dipaola@studiomedico.it",phone:"+39 02 12345678",address:"Via Roma 123, 00100 Roma (RM)"},Ak=[{icon:IE,title:"Visita Specialistica",desc:"Esame clinico approfondito e diagnosi accurata."},{icon:mk,title:"Cardiologia Base",desc:"Monitoraggio della pressione e salute del cuore."},{icon:Ik,title:"Certificazioni",desc:"Idoneità sportiva e certificati di buona salute."},{icon:uk,title:"Prevenzione",desc:"Check-up periodici e piani di screening."}];function Ck(){const[t,e]=ft.useState(null),[n,r]=ft.useState("home"),[i,s]=ft.useState("idle"),[a,l]=ft.useState({patientName:"",phone:"",email:"",date:"",time:"",notes:""});ft.useEffect(()=>{if(!Aa)return;const h=ZI(Aa,async p=>{if(!p)try{await GI(Aa)}catch(m){console.error(m)}e(p)});return()=>h()},[]);const c=async h=>{if(h.preventDefault(),!(!uh||!t)){s("loading");try{await ek(FP(uh,"appointments"),{...a,createdAt:nk(),status:"pending"}),s("success"),setTimeout(()=>{r("home"),s("idle"),l({patientName:"",phone:"",email:"",date:"",time:"",notes:""})},3e3)}catch{s("error")}}};return!Vs.apiKey||Vs.apiKey==="IL_TUO_API_KEY_REALE"?B.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-50 p-6 text-center",children:B.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-lg border border-red-200 max-w-md",children:[B.jsx("h2",{className:"text-xl font-bold mb-2",children:"Configurazione Richiesta"}),B.jsxs("p",{className:"text-slate-600",children:["Inserisci le chiavi API di Firebase in ",B.jsx("code",{children:"App.jsx"})," per far funzionare le prenotazioni."]})]})}):B.jsxs("div",{className:"min-h-screen bg-slate-50 font-sans text-slate-900",children:[B.jsx("nav",{className:"fixed w-full z-50 bg-white/80 backdrop-blur-md border-b",children:B.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-16 flex justify-between items-center",children:[B.jsxs("div",{className:"flex items-center gap-2 font-bold text-teal-600 cursor-pointer",onClick:()=>r("home"),children:[B.jsx(IE,{size:24})," ",mr.name]}),B.jsxs("div",{className:"flex gap-6 font-medium",children:[B.jsx("button",{onClick:()=>r("home"),className:"hover:text-teal-600",children:"Home"}),B.jsx("button",{onClick:()=>r("booking"),className:"bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors",children:"Prenota"})]})]})}),B.jsx("main",{className:"pt-16",children:n==="home"?B.jsxs("div",{className:"animate-in fade-in duration-500",children:[B.jsxs("section",{className:"py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center",children:[B.jsxs("div",{children:[B.jsxs("h1",{className:"text-5xl font-extrabold mb-6 leading-tight",children:["La tua salute al ",B.jsx("span",{className:"text-teal-600",children:"centro"}),"."]}),B.jsx("p",{className:"text-xl text-slate-600 mb-8",children:mr.bio}),B.jsxs("button",{onClick:()=>r("booking"),className:"bg-teal-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all",children:["Prenota una visita ",B.jsx(hk,{size:20})]})]}),B.jsx("img",{src:mr.image,alt:"Medico",className:"w-full max-w-sm mx-auto drop-shadow-2xl"})]}),B.jsx("section",{className:"bg-white py-20 px-6",children:B.jsx("div",{className:"max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8",children:Ak.map((h,p)=>B.jsxs("div",{className:"p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-all",children:[B.jsx("div",{className:"w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-4",children:B.jsx(h.icon,{size:24})}),B.jsx("h3",{className:"text-lg font-bold mb-2",children:h.title}),B.jsx("p",{className:"text-slate-600 text-sm",children:h.desc})]},p))})})]}):B.jsxs("section",{className:"py-20 px-6 max-w-2xl mx-auto",children:[B.jsx("h2",{className:"text-3xl font-bold mb-2 text-center",children:"Prenota Appuntamento"}),B.jsx("p",{className:"text-slate-600 text-center mb-10",children:"Compila il modulo, ti ricontatteremo per confermare."}),i==="success"?B.jsxs("div",{className:"bg-green-50 p-8 rounded-2xl text-center border border-green-200",children:[B.jsx(dk,{className:"text-green-500 mx-auto mb-4",size:48}),B.jsx("h3",{className:"text-xl font-bold text-green-800",children:"Richiesta Inviata!"}),B.jsx("p",{className:"text-green-700",children:"Verrai ricontattato telefonicamente."})]}):B.jsxs("form",{onSubmit:c,className:"bg-white p-8 rounded-2xl shadow-xl space-y-4",children:[B.jsx("input",{type:"text",placeholder:"Nome Completo",required:!0,className:"w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none",value:a.patientName,onChange:h=>l({...a,patientName:h.target.value})}),B.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[B.jsx("input",{type:"tel",placeholder:"Telefono",required:!0,className:"p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none",value:a.phone,onChange:h=>l({...a,phone:h.target.value})}),B.jsx("input",{type:"email",placeholder:"Email",required:!0,className:"p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none",value:a.email,onChange:h=>l({...a,email:h.target.value})})]}),B.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[B.jsx("input",{type:"date",required:!0,className:"p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none",value:a.date,onChange:h=>l({...a,date:h.target.value})}),B.jsx("input",{type:"time",required:!0,className:"p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none",value:a.time,onChange:h=>l({...a,time:h.target.value})})]}),B.jsx("textarea",{placeholder:"Eventuali note...",rows:"3",className:"w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none",value:a.notes,onChange:h=>l({...a,notes:h.target.value})}),B.jsx("button",{type:"submit",disabled:i==="loading",className:"w-full bg-teal-600 text-white py-3 rounded-lg font-bold hover:bg-teal-700 disabled:bg-teal-300",children:i==="loading"?"Invio...":"Conferma Prenotazione"})]})]})}),B.jsx("footer",{className:"bg-slate-900 text-white py-12 px-6 mt-20",children:B.jsxs("div",{className:"max-w-7xl mx-auto grid md:grid-cols-2 gap-8",children:[B.jsxs("div",{children:[B.jsx("h4",{className:"font-bold text-lg mb-4",children:mr.name}),B.jsxs("div",{className:"space-y-2 text-slate-400",children:[B.jsxs("p",{className:"flex items-center gap-2",children:[B.jsx(vk,{size:16})," ",mr.address]}),B.jsxs("p",{className:"flex items-center gap-2",children:[B.jsx(wk,{size:16})," ",mr.phone]}),B.jsxs("p",{className:"flex items-center gap-2",children:[B.jsx(yk,{size:16})," ",mr.email]})]})]}),B.jsxs("div",{className:"text-slate-400 md:text-right",children:[B.jsxs("p",{children:["© ",new Date().getFullYear()," Studio Medico Specialistico."]}),B.jsx("p",{className:"text-sm mt-2",children:"Sito creato per fini informativi."})]})]})})]})}Xu.createRoot(document.getElementById("root")).render(B.jsx(mw.StrictMode,{children:B.jsx(Ck,{})}));
