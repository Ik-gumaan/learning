const EventEmitter=require('events');
const emitter=new EventEmitter();

// Register a listener
emitter.on('messageLogged',function(arg){
    console.log("Listener Called",arg)
})

// Raise an Event
emitter.emit("messageLogged",{id:1, url:'http://myUrl'})

// Event Fire after 1000ms
setTimeout(()=>{
    console.log("firing from setTimeOut");
    emitter.emit('messageLogged',{id:2, from:'setTimeout'});
},1000);