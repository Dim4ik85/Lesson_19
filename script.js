'use strict'

// task 1

function isNumberInRange(i) {
    if (i > 0 && i < 10){
       return true;
    } else {
       return false;
    }
}


//task 2

function isEven(a) {
    if (a%2 === 0) {
        return true;
    }else {
        return false;
    }
}


//task 3
let value = +prompt('value?', '');
switch (value){ 
    case 1:
        console.log( 0 );
    break;

    case 2:
        console.log( 1 );
    break;

    case 3:
        console.log( '2,3' );
    break;
default:
        console.log('Таких значений я не знаю');
    break;
}

// task 4

function min(c, b) {
    if(c > b) {
        return b;
    } else {
    return c;
    }
}
/*
console.log(min(3,5));
console.log(min(5,-1));
*/
