const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('request event');
    res.end('hello world');
});

server.listen(4000,()=>{
    console.log('Server listning on port : 4000...');
})
