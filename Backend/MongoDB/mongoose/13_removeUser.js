const User=require('./07_userModel');

const joe=new User({
    name:'Joe'
});

joe.save()
.then(()=>{
    joe.remove.then().catch(err);
});

//remove all users=joe
User.remove({name:'joe'});

//remove first user=joe
User.findOneAndRemove({name:'joe'})

//remove through user id
User.findByIdAndRemove(joe._id)
.catch((err)=>{console.log("Err",err)});

