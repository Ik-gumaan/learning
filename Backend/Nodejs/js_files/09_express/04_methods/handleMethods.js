const express=require('express');
const bodyParser=require('body-parser');

const app=express();

// 4 methods:
// get: app.get
// post: app.post 
// put: app.put
// delete: app.delete

app.set('port',process.env.PORT || 3000);

// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//GET
app.get('/',function(req,res){
    // res.send('Express works');
    res.end(JSON.stringify(req.query));
});

//POST
app.post('/',function(req,res){
    res.end(JSON.stringify(req.body));
});


app.listen(app.get('port'),function(){
    console.log(`express started on: http:/localhost:${(app.get('port'))}`);
});