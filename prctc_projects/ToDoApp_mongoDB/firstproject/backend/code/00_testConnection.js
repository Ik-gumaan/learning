const mongoose=require('mongoose');
const addUser=require('./08_createUser');

mongoose.connect("url thst is goven by mongoDB")

mongoose.connection
    .once('open',()=>{
        console.log("Connection is Established...")
        // addUser();
    })
    .on('err',(err)=>{
        console.log("Err",err);
    })