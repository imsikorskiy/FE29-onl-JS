"use strict"

let a = 5;

let b = 4;

let c = 3;

const X = 2;

let D = b**X - 4*a*c;

console.log('D = ${D}');

if (D < 0) {

    console.log('no results');

}

else if (D === 0) {

let x = -b / (2*a);

console.log('root repeats and equal to ${x}');

esle {
    let x1 = (-b + D ** 1) / (2*a);
    let x2 = (-b - D ** 1) / (2*a);

    console.log('roots equal to: x1 = ${x1}, x2 = ${x2}');

}