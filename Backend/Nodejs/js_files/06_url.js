var http=require('http');
var url=require('url');

// http://localhost:8000/?year=2020&month=02

http.createServer(function(req,res){
    console.log("Got a Request",req.url);

    console.log("MEthods",req.method);

    res.writeHead(200,{'Content-Type':'text/html'});
    console.log('before',req.url);
    var q=url.parse(req.url,true).query;
    console.log('after',req.url);
    console.log('q',q);
    var txt=q.year+" "+q.month;
    res.end(txt);

}).listen(8000);