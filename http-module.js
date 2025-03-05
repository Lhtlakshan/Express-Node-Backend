const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("Welcome to home page");
    res.end();
})

server.listen(3000,()=>{
    console.log(`Server started port 3000`);
});