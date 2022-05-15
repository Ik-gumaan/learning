var fs=require('fs');

function readFile(srcPath){
    fs.readFile(srcPath,'utf8',function(err,data){
        err? console.log("Read Err",err) : console.log("Read File",data)
    })
}

function writeFile(savePath,data){
    fs.writeFile(savePath,data,function(err){
        err? console.log("Write Err",err) : console.log("Write succesfull")
    })
}


function appendFile(savePath,data){
    fs.appendFile(savePath,data,function(err){
        err? console.log("Append Err",err) : console.log("Append succesfull")
    })
}



writeFile('../abc.txt','hello this is my first file');
// readFile('../abc.txt');
// appendFile('../abc.txt','hello this is my first file......yhihihgi');
