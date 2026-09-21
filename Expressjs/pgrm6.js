const {MongoClient} = require("mongodb")
var exp=require("express")
var app=new exp()
//get method api

app.get("/delfun",async(request,response)=>{
    var client=new MongoClient("mongodb://127.0.0.1:27017/");
    client.connect()
    const data={"usr":request.query.un};
    response.write("<h1>Delete Record:</h1>")
    try{
        const result=await client.db("jsd").collection("login").deleteOne(data)
        console.log(result)
       
        if(result.deletedCount===1)
        {
            response.write("<h1>Successfully Deleted</h1>");
        }
        else{
            response.write("<h1> No data found!!</h1>")
        }
    
    }
    catch
    {
        response.write("<h1>Data reading error</h1>")
    }
 response.end()

}).listen(3010)

console.log("port listening at 3010.....")