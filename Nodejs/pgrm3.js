//callback:asynchronous : server never waits other process
var fs=require("fs")
fs.readFile("test.txt",(err,res)=>{
    if(err)
    {
        console.log("Error:"+err.toString() )
    }
    else{
        console.log(res.toString())
    }
})
console.log("prgram end")