var http=require('http');

var courses=[{id:1,name:"JS"},{id:2,name:"node"}];
var users=['userA','userB'];

var server=http.createServer(function(request,response){
    console.log('Got a Request!',request.url)

//     if(request.url === '/api/courses'){
//         response.write(JSON.stringify(courses));
//         response.end();
//     }
//     else if(request.url === '/api/users'){
//         response.write(JSON.stringify(users));
//         response.end();    
//     }
//     else{
//         response.write('Hello World :) ');
//         response.end();    
    // }
}).listen(3002);
//3002 is port number to listen the answer, here we can giive any port number (react run on port 3000)

// if(request.url === '/'){
//     response.writeHead(200,{'Content-Type' : 'text/html'});
//     response.write("<h1>Hello World</h1>");
//     response.end();
// }