"use strict"

let a = prompt('enter a');
let b = prompt('enter b');
let c = prompt('enter c');
const x = 2;
let D =  b*b-4*a*c;
{
    if (a==0) 
        alert "Mistake, a=0 not allowed!";

    let D = b*b-4*a*c;

    let x1, x2;

    if (D>0) {

        x1 = (-b+Math.sqrt(D)) / (2*a);

        x2 = (-b-Math.sqrt(D)) / (2*a);

         alert("Coefficient: a="+a+", b="+b+", c="+c+"\nTast solutions: X1=" +x1 +", X2=" + x2+"\nDiscriminant(D)=" + D);

    }

    else if(D==0) {

        x1=-b/(2*a);

        alert("Coefficient: a="+a+", b="+b+", c="+c+"\nTast solution: X=" +x1 +"\nDiscriminant(D)=" + D);

    }
    
    else if(D<0) {

        alert("Coefficient: a="+a+", b="+b+", c="+c+"\nNo solutions"\nDiscriminant(D)=" + D");

    }
};