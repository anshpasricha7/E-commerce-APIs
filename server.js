import  express from "express";
import  ProductRouter from "./src/features/product/product.routes.js";

const server= express();

//This helps us to use a particular file to call all the requests of product folder 
server.use("/api/products" ,ProductRouter);

server.get("/" , function(req, res){
    res.send("Welcome to E_commerce APIs");
});


server.listen(4600 , function(){
    console.log("Server runs at 4600");
});



