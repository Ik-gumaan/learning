const express=require('express');
const bodyParser=require('body-parser');
const sessions=require('express-session');

var session;

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(sessions({
    secret:'&jh&B7H8^&^&*&^76FG&^f',
    resave:false,
    saveUnintialized:true
}));

app.use('/public',express.static(__dirname+'/public'));

app.get('/',function(req,res){
    res.sendFile('login.html',{
        root:__dirname
    });
})

app.get('/login',function(req,res){
    session=req.session;
    if(session.uniqueID){
        res.redirect('/redirects');
    }
    else{
        res.sendFile('login.html',{
            root:__dirname
        });      
    }
});

app.post('/login',function(req,res){
    session=req.session;
    console.log(session)
    if(req.body.username == 'admin' && req.body.password == 'admin'){
        session.uniqueID= req.body.username;
    }
    res.redirect('/redirects')    
});


app.get('/redirects',function(req,res){
    session=req.session;
    if(session.uniqueID){
        res.redirect('/admin');
    }
    else{
    res.redirect('/login');
    }
});

app.get('/admin',function(req,res){
    session=req.session;
    if(session.uniqueID){
        res.send("WOW you are the admin <a href='/logout'>Logout</a>")
    }
    else{
        res.redirect('/login');
    }
});

app.get('/logout',function(req,res){
    req.session.destroy(function(err){
        console.log("Err",err);
        res.redirect('/redirects');
    })
});

app.get('*',function(req,res){
    res.end("What Exactly You Want?");
});

app.listen(3000,function(){
    console.log('express started on: http:/localhost:3000');
});

