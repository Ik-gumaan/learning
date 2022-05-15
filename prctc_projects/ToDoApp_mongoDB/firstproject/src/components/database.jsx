// const myFile=require();

const express=require('express');

const app=express();

app.use('/public',express.static(__dirname+'/public'));
console.log("dirname"+__dirname)

app.get('/',function(req,res){
    res.sendFile('App.jsx',{
        root:'../../src'
    });
})

app.get('/database',function(req,res){
        res.send("DATABASE SCReeN");
})
    


app.listen(3000,function(){
    console.log('express started on: http:/localhost:3000');
});
