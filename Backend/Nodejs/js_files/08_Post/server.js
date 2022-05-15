var http = require('http');
var fs = require('fs');
var qs=require('querystring');

// http://localhost:8000/?year=2020&month=02

http.createServer(function (req, res) {
    console.log("Got a Request", req.url);

    if (req.url == '/users' && req.method == 'GET') {
        res.write(JSON.stringify(usersList));
        res.end();
        return;
    }

    if (req.url == '/users' && req.method == 'POST') {
        var body = '';
        req.on('data', function (data) {
            body += data;
            if (body.length > 1e6) {//10^6=1000000=1MB
                request.connection.destroy();//FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
            }
        });


        req.on('end', function () {
            console.log('body', body);
            var POST = qs.parse(body);
            console.log('POST', POST);
            res.write(JSON.stringify(POST));
            res.end();
        });
        return;
    }

    if (req.url == '/users' && req.method == 'GET') {
        res.write("My User Information");
        res.end();
        return;
    }

    if (req.url.indexOf('/users/') > -1 && req.method == 'GET') {
        var id = req.url.replace("/users/", '');
        res.write("Show User Information which have id" + id);
        res.end();
        return;
    }

    if (req.url == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
        return;
    }

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write("Invalid Route");
    res.end();

}).listen(8000);