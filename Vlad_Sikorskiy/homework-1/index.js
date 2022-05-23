"use strict"

let a = prompt('enter a');

let b = prompt('enter b');

let c = prompt('enter c');

const X = 2;

const D = b**X - 4*a*c;

if (D === 0) {

let x = (-b +Math. sqrt(D) )/2*a;

alert(x);

} else if (D > 0) {

let x1 = (-b + Math.sqrt(D) ) /2*a;

let x2 = (-b - Math.sqrt(D) ) /2*a;

alert(x1);

alert(x2);

} else {
    alert('no answer')
};