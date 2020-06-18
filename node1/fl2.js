// define async and sync  method in file system

const fs = require('fs');

// fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{
// console.log(data)
// });
// console.log("asynchronous method")

try{
const data = fs.readFileSync(__dirname+"/hello.txt","utf8");
console.log(data);
}catch(e){
    console.log(e);
}
console.log("synchronous method")
