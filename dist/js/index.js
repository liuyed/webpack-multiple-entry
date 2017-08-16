webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var bg = __webpack_require__(4);

console.log(bg);

console.log('home Pages');

console.log('222');

function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();

    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi;
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;
    //IE
    if (agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }

    //firefox
    if (agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }

    //Chrome
    if (agent.indexOf("chrome") > 0) {
        return agent.match(regStr_chrome);
    }

    //Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        return agent.match(regStr_saf);
    }
}

var browser = getBrowserInfo();
//alert(browser); 
var verinfo = (browser + "").replace(/[^0-9.]/ig, "");

document.write(verinfo);

var aaa = 2;

console.log(aaa);

var fn = function fn(x) {
    return x * x;
};

console.log(fn(3));

console.log(fn(1));
console.log(fn(2));
console.log(fn(3));

console.log(fn(4));
console.log(fn(5));
console.log(fn(6));

//document.getElementById('bg').attributes('src', bg);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.jpg?b45e5863";

/***/ })
],[3]);