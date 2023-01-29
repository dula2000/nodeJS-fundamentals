const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('hello world');
        res.end();
    }
    if(req.url==='/courses'){
        res.write(JSON.stringify([1,3,4,5]));
        res.end();
    }
});


// server.on('connection',(socket)=>{
//     console.log('new connection...');
// });
server.listen(3000);
console.log("listening port 3000");
