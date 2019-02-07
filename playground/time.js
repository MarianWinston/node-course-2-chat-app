let moment = require('moment');

// Jan 1st 1970 00:00:00 am 

// let date = new Date();
// let months = ['Jan', 'Feb']
// console.log(date.getMonth());

// let date = moment();
// date.add(100, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

new Date().getTime();
let someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

let createAt = 1234;
let date = moment(createAt);
console.log(date.format('h:mm a'));