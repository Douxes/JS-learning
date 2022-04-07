'use strict';

// let str = 'some';
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1,2,3]);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         if (typeof(mainObj[key] === 'object')) {
//             Object.assign(mainObj[key], objCopy[key]);
//         }

//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);


// let str = 'some';
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1, 2, 3]);


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier);

john.sayHello();



