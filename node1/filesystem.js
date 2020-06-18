const http = require("http");
const server= http.Server(function(req,res){

const fs = require('fs');
// console.log(fs);
fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{
    res.writeHead(200,{"content-type":"text/plain"})
    res.write(data)
    // res.write("hy this is hello")
    res.end();

});


}).listen(3000,()=>console.log("Server Running on portt 3000"));;



// fs.unlink(__dirname+"/hello.txt",(err,data)=>{
// if(err) throw err;
// console.log("file deleted"+data);
// })