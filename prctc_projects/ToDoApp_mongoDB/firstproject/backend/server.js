const express = require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
// const addUser=require('./08_createUser');

mongoose.connect("mongodb+srv://admin:hasnain007@cluster0.0umyn.mongodb.net/test1?retryWrites=true&w=majority",{})

// mongoose.connect("mongodb+srv://admin:hasnain007@cluster0.0umyn.mongodb.net/test")


mongoose.connection
    .once('open',()=>{
        console.log("Connection is Established...")
        // addUser();
    })
    .on('err',(err)=>{
        console.log("Err",err);
    })

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


// app.post('/submit',(req,res)=>{
//     console.log(req.body);
// })

// var body="";
// app.post('/api/getData/todoitems',(req,res)=>{
//     // console.log(req);
//     body=req.body;
// })

// app.get('/api/getData/todoitems',(req,res)=>{
//     res.send(body)
// })



//GET DATBASEDATA
// app.get('/getData/todoitems',(req,res)=>{
//     console.log(req.params)
//     pool.query('SELECT * FROM todoitems',(err,rows)=>{
//         if(!err)
//         res.send(rows);
//         else
//         res.send(err);

//     })

// })

// delete data
// app.delete('/getData/todoitems/del/:no',(req,res)=>{
//     console.log(req.params)
//     pool.query('DELETE FROM todoitems Where no=?',[req.params.no],(err,rows)=>{
//         console.log(req.params)
//         if(!err)
//         res.send("deleted "+[req.params.no]+"  "+ [req.params.no]);
//         else
//         res.send(err);
//     })
// })


// insert data
// app.post('/getData/todoitems/insert',(req,res)=>{
//     console.log(req.body)
//     pool.query("INSERT INTO todoitems (no,items) VALUES (3,'hi')",(err,rows)=>{
//         if(!err)
//         res.send("inserted "+[req.body]);
//         else
//         res.send(err);
//     })
// })

// update data
// app.put('/getData/todoitems/update/:no',(req,res)=>{
//     console.log(req.body)
//     item="geo";
//     pool.query("UPDATE todoitems SET items=? Where no=? ",[req.params.no,item],(err,rows)=>{
//         if(!err)
//         res.send("upsated "+[req.params]);
//         else
//         res.send(err);
//     })
// })



// app.get('/getData',(req,res)=>{

//     pool.getConnection((err,connection)=>{
//         if(err){ 
//         // throw err;
//         res.send("Database Connection "+err)
//     }
//         // console.log(`connected as id ${connection.threadId}`)

//         //query(sqlString,callback)
//         connection.query('SELECT * FROM mytabletest',(err,rows)=>{
//         connection.release();//return the connection to pool
      
//             if(!err){
//                 res.send(rows);
//             }
//             else{
//                 console.log("Error-->",err)
//             }
//         })

//     })

// })



// app.use('/data/',require('./router/router'));
// // app.use('/users/',require('./router/userRoutes') );
// // app.use('/admins/',require('./router/adminsRoute') );

app.get('/',(req,res)=>res.send("Express here!"));


app.listen(3001, () => {
    console.log('express started on: http:/localhost:3001');
})