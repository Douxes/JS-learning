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


// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const john = Object.create(soldier);

// // const john = {
// //     health: 100
// // };

// // john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// john.sayHello();

//To string

// console.log(typeof(String(null)));

// console.log(typeof(5 + ''));

// const num = 5;

// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

// //To number


// console.log(typeof(Number('4')));

// console.log(typeof(+ '4'));

// console.log(typeof(parseInt('4', 10)));

// let answer = +prompt('Hello', '');

//To boolean

// 0, '', null, undefuned, NaN;

// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// console.log(typeof(Boolean('4')));

// console.log(typeof(!!'44444'));





//Задачи

// let x= 5;

// console.log(x++);

// console.log([ ] + false - null + true );

// let y = 1;
// let x = y = 2;
// console.log(x);

// console.log([ ] + 1 + 2);

// let a = 1;
// let b = 0;

// console.log(!(a && b));

// console.log(null || 2 && 3 || 4);

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b);

// console.log(+ 'Infinity');

// console.log("Ёжик" > "яблоко");

// console.log(0 || "" || 2 || undefined || true || falsе);

// const arr = ['a', 'b', 'c'];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// const arr = ['a', 'b', 'c', 'd'];

// console.log(arr[0] + ' + ' + arr[1] + ', ' + arr[2] + ' + ' + arr[3]);

// const array = [2, 5, 3, 9];

// let x = array[0] * array[1];
// let y = array[2] * array[3];

// let result = x + y;

// console.log(result);

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// console.log(obj.c);

// const obj = {
//     Kolya: '1000',
//     Vasya: '500',
//     Petya: '200'
// };

// console.log(obj['Kolya'], obj['Petya']);

// let calc = function(a, b) {
//     console.log(a * b);
//     console.log(a + b);
// }

// calc(5, 5);

let str = '123456';

let numbers = +str;

numbers = Array.from(numbers);

console.log(numbers);
