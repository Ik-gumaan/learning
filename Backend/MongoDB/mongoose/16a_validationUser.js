const mongoose=require('mongoose');
const schema=mongoose.Schema;

const userSchema=new schema({
    name:{
        type:String,
        required:[true,'Name Should be required']
    }
});

const User=mongoose.model('user',userSchema);

module.exports(User);
