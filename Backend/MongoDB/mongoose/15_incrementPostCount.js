const User=require('./07_userModel');

const joe=new User({
    name:'Joe'
});

joe.save()
.then(()=>{
    // joe.set('postCount',1);
    // joe.save();

    // User.update({name:'joe'},{postCount:1});


//user can have their own post count by 1
User.update({name:'joe'},{$inc: {postCount:1}});

});

