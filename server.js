import  express from "express";

const server= express();

server.get("/" , function(req, res){
    res.send("Welcome to E_commerce APIs");
});


server.listen(4600 , function(){
    console.log("Server runs at 4600");
});



