const http=require("http")
http.createServer(function(req,res){
    res.end("<h1> Welcome to nodejs</h>");
}).listen(9887)
console.log("port listening at 9887...............")