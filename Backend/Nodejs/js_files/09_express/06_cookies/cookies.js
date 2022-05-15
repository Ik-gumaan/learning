const express=require('express');
const cookieParser=require('cookie-parser');

const app=express();

app.use(cookieParser());

app.get('/',function(req,res){
    res.cookie('myFirstCookie', 'looks good');
    res.send('cookies!'); //check in browser document.cookie
})

app.get('/clearcookie',function(req,res){
    res.clearCookie('myFirstCookie');
    res.send('cookies removed');
})

app.listen(3000,function(){
    console.log('express started on: http:/localhost:3000');
});