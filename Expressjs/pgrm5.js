const {MongoClient} = require("mongodb")
var exp=require("express")
var app=new exp()
var usr,pwd;
//get method api

app.get("/showall",async(request,response)=>{
    var client=new MongoClient("mongodb://127.0.0.1:27017/");
    client.connect()
    response.write("<h1>Read all data from Mongodb</h1>")
    try{
        const result=await client.db("jsd").collection("login").find({}).toArray()
        console.log(result)
        var len=result.length;
        response.write("<h1>Total Records Available:"+len+"</h1>")
        response.write("<table border='2' align='center' cellpadding='20' bgcolor='pink'>")
        response.write("<tr><th>s.No</th><th>user name</th><th>password</th>")
        for(i=0;i<len;i++)
        {
            response.write("<tr><td>"+(i+1)+"<td>"+result[i].usr+"</td><td>"+result[i].pwd+"</td>");
        }
        response.write("</table>")
    }
    catch
    {
        response.write("<h1>Data reading error</h1>")
    }
 response.end()

}).listen(3010)

console.log("port listening at 3010.....")