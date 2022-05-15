var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    console.log("Got a Request",req.url);
    fs.readFile('../demoFile1.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8000);