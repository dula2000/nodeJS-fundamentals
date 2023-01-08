

// function sayMyName(name){
//     console.log(" Hello my name is "+name);
// }

// // sayMyName('dds');

// console.log(window)

// var message ='';
// console.log(global.message);

// console.log(module);

// var logger=require('./logger');

// logger.log('message');

const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);