let m = require("./modules.js");
let m1 = m();
let m2 = m();

m1.addClass('c1');
m1.addClass('c2');
m1.addClass('c3');
m1.addTag('div');
m1.addTag('p');

m2.addClass('c1');
m2.addClass('c4');
m2.addClass('c5');
m2.addTag('div');
m2.addTag('p');

console.log(m1.getStat());
console.log(m2.getStat());
