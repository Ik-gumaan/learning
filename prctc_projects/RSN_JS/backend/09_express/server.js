const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var token = null;
var dataArr = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('../../'));

app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: '../../'
    });
})

app.post('/submit', function (req, res) {
    console.log(req.body);
    dataArr = [...dataArr, req.body]
    res.sendFile('submit.html', {
        root: '../../'
    });
});

app.get('/database', function (req, res) {
    if (token == 'logged in') {
        res.redirect('/myDatabase');
    }
    else {
        res.sendFile('login.html', {
            root: '../../'
        });

    }
});

app.post('/database', function (req, res) {
    if (req.body.admin == "RSN" && req.body.password == '321') {
        token = 'logged in';
        res.redirect('/myDatabase');
    }
    else {
        res.redirect('/database');
    }
});

app.get('/myDatabase', function (req, res) {
    if (token == 'logged in') {
        res.json(dataArr);
    }
    else {
        res.redirect('/database');
    }
});

app.get('/logout', function (req, res) {
    token = null;
    res.redirect('/database');
});


app.listen(3001, () => {
    console.log('express started on: http:/localhost:3001');
})