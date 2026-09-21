const{MongoClient}=require("mongodb")
var exp=require("express")
var bp=require("body-parser")
var app=new exp()
var urlencodeparser=bp.urlencoded({extended:false});
var usr,pwd;
//get method api
app.post("/testfun",urlencodeparser,async(req,res)=>{
    usr=req.body.un;
    pwd=req.body.pwd;
    const data={"usr":usr,"pwd":pwd}
    var client=new MongoClient("mongodb://127.0.0.1:27017");
    client.connect()
    res.write("<h1>Express and mongodb connection success</h1>")
    try
    {
        const result=await client.db("jsd").collection("login").insertOne(data)
        console.log(result)
        res.write("<h1>Successfully Inserted</h1>")
    }
    catch{
        console.log("error")
        res.write("<h1>Instruction error</h1>")
    }
    res.end()

}).listen(3010)
console.log("port listening at 3010..................")