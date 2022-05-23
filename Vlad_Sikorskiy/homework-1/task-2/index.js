"use strict"

let bulletNumber = 7;
let shotsFired = 3;

if (shotsFired <= 7 && bulletNumber <= 7 && shotsFired != 0 && bulletNumber != 0) {

    let result = true;

    for (let i = 1; i <= shotsFired; i++) {

        if (bulletNumber === i) {

            console.log('Бах!');

            console.log('Player survived');

            result = false;

            break;
        }

        console.log('Щелк!');

    }

    if (result) {

        console.log('Player survived');
    
    }
    
    else {
    console.log('mistake :(');
    }
};    