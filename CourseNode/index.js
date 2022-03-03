// const http = require('http');
// const color = require('colors');

// const handleServer = function(req, res){
//     res.writeHead(200, {'content-type':'text/html'})
//     res.write('<h1>Hola mundo</h1>');
//     res.end();
// }

// const server = http.createServer(handleServer);
// server.listen(3000, function(){
//     console.log('server on port 3000'.inverse);
// });

const express = require('express');
const color = require('colors');
const methods = require('./methods.js');

const server = express();
server.get('/', function(req, res){
    res.send('<h1>Hola mundo con express y nodejs</h1>');
    res.end();
})
server.listen(3000, ()=>{
    console.log('server on port 3000'.red);
    console.log(`El saludo que viene es ${methods.sayHello}`);
})