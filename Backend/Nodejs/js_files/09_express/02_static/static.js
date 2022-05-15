const express=require('express');

const app=express();

app.set('port',process.env.PORT || 3000);

//static folder
app.use('/public',express.static(__dirname+'/public'));

app.get('/',function(req,res){
    res.send('Express works');
    // res.sendFile(__dirname+'/public/index.html');
});

app.get('/users',function(req,res){
    res.json([{id:1,name:'john'},{id:2,name:'doe'},{id:3,name:'nane'},])
});

app.listen(app.get('port'),function(){
    console.log(`express started on: http:/localhost:${(app.get('port'))}`);
});