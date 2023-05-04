const url = require("url");
const http = require("http");

const server =http.createServer((request , response)=>{
    // console.log(request.url);
    const pathName = request.url;
    if(pathName === "/" || pathName === "/overview"){
        response.end("The overview page");
    }else if(pathName === "/product"){
        response.end("The product page");
    }else{
        response.writeHead(404,{
            "Content-Type": "text/html",
            "my-own-error":"NOT FOUND HEADER"
        });
        response.end("<h1>The page you are looking for is not available</h1>");
    }
});

server.listen(8000 , "127.0.0.1" , () => {
  console.log("listening to incomming requests from port 8000");
});