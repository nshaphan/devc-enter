parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var b={},a=function(r,n){for(var t=arguments.length,e=new Array(t>2?t-2:0),u=2;u<t;u++)e[u-2]=arguments[u];return[r,n].concat(e).map(function(r){return parseInt(r,10)}).filter(function(r){return!Number.isNaN(r)}).reduce(function(r,n){return r+n},0)};b.default=a;describe("secures the bag",function(){test("can handle edge cases",function(){expect(a()).toBe(0),expect(a(3)).toBe(3),expect(a(1,2,-1,"3",null,{},[],4," 5 ",1," ",void 0,6)).toBe(21)})});b.__esModule=true;return{"ZsDQ":{},"nNE2":b};});