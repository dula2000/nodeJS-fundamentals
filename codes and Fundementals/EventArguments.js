const EventEmitter = require('events');




const Logger = require('./logger');
const logger = new Logger();

//Register a listner
logger.on('messageLogged',(arg)=>{
    console.log('Listner Called',arg)
  });
logger.log('message');