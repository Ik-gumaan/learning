var fs=require('fs');

// both sync and async works same but in sync case IO blocked

// SYNC
// console.log("SYNC 1");
// var files=fs.readdirSync('./');
// console.log("SYNC 2",files);

// ASYNC
console.log("ASYNC 1");
fs.readdir('./',function(err,files){
if(err){
    console.log("Error",err);
}
else{
    console.log("Files",files);
}
});
console.log("ASYNC 1");
