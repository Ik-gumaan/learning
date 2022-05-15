const User=require('./07_userModel');

//get/find all users : by giving empty object finding
// User.find({})
// .then((user)=>{console.log("USer",user)})//returns array
// .catch((err)=>{console.log("Err",err)})

//finding all users name=joe
User.find({name:'joe'})
.then((user)=>{console.log("USer",user)})//returns array
.catch((err)=>{console.log("Err",err)})

//finding user with a name of joe (first object as joe)
User.findOne({name:'joe'})//or you can use{_id: 'whateverID'}
.then((user)=>{console.log("USer",user)})//returns array
.catch((err)=>{console.log("Err",err)})
