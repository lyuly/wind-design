import{r as w,R as x,_ as N}from"./index-c8bce964.js";var h={},E={get exports(){return h},set exports(e){h=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function s(){for(var r=[],l=0;l<arguments.length;l++){var n=arguments[l];if(n){var c=typeof n;if(c==="string"||c==="number")r.push(n);else if(Array.isArray(n)){if(n.length){var a=s.apply(null,n);a&&r.push(a)}}else if(c==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){r.push(n.toString());continue}for(var t in n)i.call(n,t)&&n[t]&&r.push(t)}}}return r.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s})()})(E);const _=h;var S=function(e){w.useEffect(e,[])};const g=S;var k=function(e){g(function(){e()})};const R=k;var v={},$={get exports(){return v},set exports(e){v=e}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y;function P(){if(y)return m;y=1;var e=x,i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function c(a,t,f){var o,u={},d=null,b=null;f!==void 0&&(d=""+f),t.key!==void 0&&(d=""+t.key),t.ref!==void 0&&(b=t.ref);for(o in t)r.call(t,o)&&!n.hasOwnProperty(o)&&(u[o]=t[o]);if(a&&a.defaultProps)for(o in t=a.defaultProps,t)u[o]===void 0&&(u[o]=t[o]);return{$$typeof:i,type:a,key:d,ref:b,props:u,_owner:l.current}}return m.Fragment=s,m.jsx=c,m.jsxs=c,m}(function(e){e.exports=P()})($);const j=v.Fragment,p=v.jsx,C=v.jsxs,T=({name:e,onClick:i,className:s,style:r})=>(_(s,{icon:s}),p("svg",{onClick:i,className:_("icon",s),style:r,"aria-hidden":"true",children:p("use",{xlinkHref:`#icon-${e}`})})),O=({href:e,className:i,loading:s,onClick:r,position:l="left",show:n,url:c,size:a="md",...t})=>{const f=w.useCallback(u=>{r==null||r(u),e&&(window==null||window.open(e,"_blank"))},[e,r]),o=_(i,{"cursor-pointer":e||r,"icon--loading":s,[`icon--${a}`]:a,[`icon--position_${l}`]:l});return R(()=>{N(()=>import("./iconfont-c24a6427-7e26228e.js"),[])}),p(j,{children:n&&p(T,{onClick:f,className:o,...t})})};O.defaultProps={show:!0};const A=e=>{const{btnType:i="default",className:s,disabled:r,size:l="md",children:n,href:c,gost:a,round:t,iconName:f,loading:o,...u}=e,d=_("btn",s,{[`btn--${i}`]:i,[`btn--${l}`]:l!=="md",[`btn--${i}_gost`]:a,"btn--round":t});return i==="link"&&c?p("button",{className:d,disabled:r,...u,children:p("a",{href:c,children:n})}):C("button",{className:d,disabled:r,...u,children:[p(O,{name:f,show:f!==void 0,loading:o}),n]})};A.defaultProps={disabled:!1,btnType:"default"};export{O as S,A as g};
