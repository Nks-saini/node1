const http = require("http");
const server= http.Server(function(req,res){
    res.writeHead(200,
        {"content-type":"text/html"})//content-type
    res.write("<h1>node is a node js</h1>")
    res.write("<h1>Its is a javascript</h1>")
    res.end();
}).listen(3000,()=>console.log("Server Running on portt 3000"));



// http.createServer().listen(3000)