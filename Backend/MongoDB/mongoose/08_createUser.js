const User=require('./07_userModel');

function addUser(){
    console.log('adding User');

    const joe=new User({name:'joe'});
    joe.save()
    .then(()=>{console.log("USer Saved")})
    .catch((err)=>{console.log("Err",err)})
}

module.exports=addUser;