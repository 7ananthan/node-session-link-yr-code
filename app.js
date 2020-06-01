var express=require("express")

const server=express()
server.listen(3000,function(){
    console.log("server started listing....")
})

server.get("/",function(req,res){
    res.sendFile(__dirname+"/views/home.html")

})
server.get("/home",function(req,res){
    res.send("This is home page")

})
server.get("/login",function(req,res){
    res.send("This is login page........")

})