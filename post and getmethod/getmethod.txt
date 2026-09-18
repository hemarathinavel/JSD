const {MongoClient} = require("mongodb")
var bp=require("body-parser")
var exp=require("express")
var app=new exp()
var urlencodeparser=bp.urlencoded({extended:false});
var usr,pwd;
// get method api
app.post("/testfun",urlencodeparser,async(request,response)=>{
    usr=request.body.un;
    pwd=request.body.pw;
    const data={"usr":usr,"pwd":pwd}
    var client=new MongoClient("mongodb://127.0.0.1:27017/");
    client.connect()
    response.write("<h1>Express and mongob connection success</h1>")
    try
    {
        const result=await client.db("jsd").collection("login").insertOne(data)
        console.log(result)
        response.write("<h1>Successfully Inserted<h1>")
    }
    catch{
        console.log("error")
        response.write("<h1>Successfully Error<h1>")
    }
    
    response.end()
}).listen(8991)

console.log("port listening at 8991........")