var exp=require("express")
var app=new exp()
var usr,pwd;
// get method api
app.get("/testfun",(request,response)=>{
    usr=request.query.un;
    pwd=request.query.pw;
    //response.send("<h1> Welcome to Express  JS </h1>")
    response.write("<h1>usr name:"+usr+"</h1>");
    response.write("<h1>password:"+pwd+"</pwd>");
    if(usr==="admin" && pwd==="admin@123")
    {
        response.write("<font color='green' size='7'>valid user</font>")
    }
    else
    {
        response.write("<font color='red' size='7'>invalid user!!!</font>")
    }
    response.end()
}).listen(3010)
console.log("port listening at 3010..........")