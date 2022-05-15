const User=require('./07_userModel');

const joe=new User({
    name:'Joe'
});

joe.save()
.then(()=>{
    joe.update.then().catch(err);
});

//update joe to Alex
joe.update({name:'Alex'});

//update all users=joe to Alex
User.update({name:'joe'},{name:'Alex'});

//update first user=joe to Alex
User.findOneAndUpdate({name:'joe'},{name:'Alex'})

//update through user id 
User.findByIdAndUpdate(joe._id,{name:'Alex'})
.catch((err)=>{console.log("Err",err)});

