const mongoose=require('mongoose');
const schema=mongoose.Schema;

const userSchema=new schema({
    name:{
        type:String,
        validate:{
            validator:(name)=>name.length>2 ,
            message:"Name must be larger than 2 characters"
        },
        required:[true,'Name Should be required.']
    }
});

const User=mongoose.model('user',userSchema);

module.exports(User);
