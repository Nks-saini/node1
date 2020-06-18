//create api
var http = require('http')
var page = "<h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1> "
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'application\html'})
    console.log(page);
    res.write(page);
    res.end();
}).listen(3900);

