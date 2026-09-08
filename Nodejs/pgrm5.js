//import event
var events=require("events")
//create object to events emitter
var eventEmitter=new events.EventEmitter();
//bind event(called)
eventEmitter.on("Hema",()=>{
    console.log("events called")
})

//fire event(calling)
eventEmitter.emit("Hema")
eventEmitter.emit("Hema")
eventEmitter.emit("Hema")
eventEmitter.emit("Hema")