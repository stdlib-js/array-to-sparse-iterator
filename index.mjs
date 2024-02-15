// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function a(l){var u,j,v,f,c,h,p;if(!r(l))throw new TypeError(m("invalid argument. First argument must be an array-like object. Value: `%s`.",l));if(arguments.length>1){if(!t(f=arguments[1]))throw new TypeError(m("invalid argument. Second argument must be a function. Value: `%s`.",f));u=arguments[2]}return p=-1,e(j={},"next",f?g:b),e(j,"return",y),s&&e(j,s,x),h=d(l),c=n(l)?i(h):o(h),j;function g(){var e;if(v)return{done:!0};for(e=l.length,p+=1;p<e&&void 0===c(l,p);)p+=1;return p>=e?(v=!0,{done:!0}):{value:f.call(u,c(l,p),p,l),done:!1}}function b(){var e;if(v)return{done:!0};for(e=l.length,p+=1;p<e&&void 0===c(l,p);)p+=1;return p>=e?(v=!0,{done:!0}):{value:c(l,p),done:!1}}function y(e){return v=!0,arguments.length?{value:e,done:!0}:{done:!0}}function x(){return f?a(l,f,u):a(l)}}export{a as default};
//# sourceMappingURL=index.mjs.map
