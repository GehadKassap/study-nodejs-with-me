const http = require ("http");
const server = http.createServer((request ,response)=>{
    console.log(request);
    response.end("Welcome to server..");
});
server.listen(8000 , "127.0.0.1" , ()=>{
    console.log("Server listening on port 8000..");
});