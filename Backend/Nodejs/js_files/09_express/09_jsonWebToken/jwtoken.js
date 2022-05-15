const express=require('express');
const bodyParser=require('body-parser');
const jwt=require('jsonwebtoken');

var session;

const app=express();
const secretKey='abcxyz123';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/public',express.static(__dirname+'/public'));

app.get('/',function(req,res){
    res.sendFile('login.html',{
        root:__dirname
    });
});

app.get('/login',function(req,res){
    res.sendFile('login.html',{
        root:__dirname
    });
});

app.post('/login',function(req,res){
    var token=null;
    if(req.body.username == 'admin' && req.body.password == 'admin'){
        token=jwt.sign({username:req.body.username},secretKey,{expiresIn:'15m'});
        // console.log("token",token)
        //console.log("verifying...",jwt.verify(token,secretKey));
    }
    res.redirect('/redirect?token='+token);
});

app.get('/redirects',function(req,res){
    console.log("req.query.token",req.query.token);
    if(!req.query.token){
        console.log("verifying...",jwt.verify(token,secretKey));
        res.redirect('/admin');
    }
    else{
        res.send('Who are u?');
    }
})



app.get('/admin',function(req,res){
        res.send("WOW you are the admin <a href='/logout'>Logout</a>")
});

app.get('/logout',function(req,res){
    res.redirect('/login');
});

app.get('*',function(req,res){
    res.end("What Exactly You Want?");
});

app.listen(3000,function(){
    console.log('express started on: http:/localhost:3000');
});

