

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


// //OS MODULE
// const os = require('os');

// var totalMem= os.totalmem();
// var freeMem= os.freemem();

// console.log('Total memory is : '+totalMem);
// console.log(`total free memory is ${freeMem}`);

//FILE SYSTEM MODULE

// const fs = require('fs');

// fs.readdir('./', function(err,files){
//   if(err) console.log('ERROR', err);
//   else console.log('result', files);
// });

//EVENT MODULE

const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listner
emitter.on('messageLogged',function(){
  console.log('Listner Called')
});

//Raise an event
emitter.emit('messageLogged');       

