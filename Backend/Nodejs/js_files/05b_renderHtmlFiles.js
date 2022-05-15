var http=require('http');
var fs=require('fs');

function sendFile(path,res,mime){
    fs.readFile(path,function(err,data){
        if(err){
            // errorHandling(err,res);
            return;
        }
        res.writeHead(200,{
            'Content-Type':mime
        });
        res.end(data.toString());
    });

}

http.createServer(function(req,res){
    console.log("Got a Request",req.url);
    
        if(req.url === '/demoscript.js'){
        sendFile('./demoscripts.js',res,'text/javascript');
        return;
     }


    fs.readFile('../demoFile1.html',function(err,data){
        res.writeHead(200,{
            'Content-Type':'text/html'
        });
        res.write(data);
        res.end();
    });
}).listen(8000);