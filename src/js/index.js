var bg = require('bg');

import '../css/app.scss';
console.log(bg);


console.log('home Pages')

console.log('222');

function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();

    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi
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

let aaa = 2

console.log(aaa);

var fn = (x) => x * x

console.log(fn(3));

console.log(fn(1));
console.log(fn(2));
console.log(fn(3));

console.log(fn(4));
console.log(fn(5));
console.log(fn(6));

//document.getElementById('bg').attributes('src', bg);