

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


//PATH MODULE

// const path = require('path');

// var pathObj = path.parse(__filename);
// console.log(pathObj);


//OS MODULE
const os = require('os');

var totalMem= os.totalmem();
var freeMem= os.freemem();

console.log('Total memory is : '+totalMem);
console.log(`total free memory is ${freeMem}`);

