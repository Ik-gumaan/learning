const express=require('express');

const app=express();

function log(req,res,next){
    console.log(new Date(),req.method,req.url);
    next();
}

function secondMiddleware(req,res,next){
    console.log('Second Mddleware');
    next();
}

app.get('/',log,secondMiddleware,function(req,res){
    res.send("Express Works");
});

app.get('/error',secondMiddleware,function(req,res){
    throw new Error('Testing Error')
});

function notDefineRoute(req,res,next){
    res.send('404 no found');
}

app.use(notDefineRoute);

app.listen(3000,function(){
    console.log('express started on: http:/localhost:3000');
});