var express=require("express")

const server=express()
server.set("view engine","ejs");

server.get("/",function(req,res){
    res.render("login")

})
server.get("/home",function(req,res){
    res.send("This is home page")

})
server.get("/login",function(req,res){
    res.sendFile(__dirname+"/views/login.html")

})
server.listen(3000,function(){
    console.log("server started listing....")
})