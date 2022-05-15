const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//SQL
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mytest',
})


// app.post('/api/todoitems',(req,res)=>{
//     // console.log(req);
//     body=req.body;
// })
// var data={itemsList:[]};
// var index = 0;
// var itemsArr=[];
// var bodyData=[];

app.post('/api/todoitems/insert', (req, res) => {
    var items=req.body.itemsList;
    var index=req.body.index;
    var itemObj=items[index];
    
    pool.query("INSERT INTO todoitems(itemKey,item) VALUES (?,?)",[itemObj.itemKey,itemObj.item], (err, rows) => {
        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }
    })
})



app.get('/api/todoitems/getItems', (req, res) => {
    pool.query("SELECT * FROM todoitems", (err, rows) => {
        if (!err) {
            res.send(rows)
        }
        else {
            res.send(err)
        }
    })
})

app.delete('/api/todoitems/delAll', (req, res) => {
    pool.query("DELETE FROM todoitems", (err, rows) => {
        if (!err) {
            res.send(rows)
        }
        else
            res.send(err);
    })
})


app.delete('/api/todoitems/del/:delItemKey', (req, res) => {
    var key = req.params.delItemKey;
    pool.query("DELETE FROM todoitems where itemKey=?", [key], (err, rows) => {
        if (!err) {
            res.send(rows)
        }
        else
            res.send(err);
    })

})



app.put('/api/todoitems/update', (req, res) => {
    var key=req.body.itemObj.itemKey;
    var value=req.body.itemObj.item;

    pool.query("UPDATE todoitems SET item=? where itemKey=?",[value,key], (err, rows) => {
                if (!err) {
                    res.send(rows)
                }
                else
                    res.send(err);
            })

})




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


app.get('/', (req, res) => res.send("Express here!"));


app.listen(3001, () => {
    console.log('express started on: http:/localhost:3001');
})