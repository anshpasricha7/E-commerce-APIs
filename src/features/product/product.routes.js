import express from "express";
import ProductController from "./product.controller.js";

const productRouter = express.Router();

//URl continues after /api/product/.......

const productController =new ProductController();

productRouter.get("/", productController.getAllProduct);
productRouter.post("/" , productController.addProduct);


export default productRouter;