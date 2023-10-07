// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function l(a){var f,j,v,p,h,c,u;if(!t(a))throw new TypeError(m("01f2O,GW",a));if(arguments.length>1){if(!r(p=arguments[1]))throw new TypeError(m("01f2H,G6",p));f=arguments[2]}return u=-1,e(j={},"next",p?g:b),e(j,"return",x),n&&e(j,n,y),c=d(a),h=s(a)?i(c):o(c),j;function g(){var e;if(v)return{done:!0};for(e=a.length,u+=1;u<e&&void 0===h(a,u);)u+=1;return u>=e?(v=!0,{done:!0}):{value:p.call(f,h(a,u),u,a),done:!1}}function b(){var e;if(v)return{done:!0};for(e=a.length,u+=1;u<e&&void 0===h(a,u);)u+=1;return u>=e?(v=!0,{done:!0}):{value:h(a,u),done:!1}}function x(e){return v=!0,arguments.length?{value:e,done:!0}:{done:!0}}function y(){return p?l(a,p,f):l(a)}}export{l as default};
//# sourceMappingURL=index.mjs.map