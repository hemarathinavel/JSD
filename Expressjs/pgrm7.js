const {MongoClient} = require("mongodb")
var exp=require("express")
var app=new exp()
var pw=""
// get method api
app.get("/updatefun",async(request,response)=>{
    var client=new MongoClient("mongodb://127.0.0.1:27017/");
    client.connect()
    const data={"usr":request.query.un};
    pw=request.query.pw
    const udata={$set:{"pwd":pw}}
    response.write("<h1>update Record:</h1>")
    try
    {
        const result=await client.db("jsd").collection("login").updateOne(data,udata)
        console.log(result)                
        if(result.modifiedCount===1)
        {
            response.write("<h1>Successfully updated</h1>")
        }
        else
        {
            response.write("<h1>data not found</h1>")
        }
        
    }
    catch(err){
        console.log("error:",err)
        response.write("<h1>data reading error<h1>")
    }
    
    response.end()
}).listen(3010)

console.log("port listening at 3010........")