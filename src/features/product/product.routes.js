import express from "express";
import ProductController from "./product.controller";

const router = express.Router();

//URl continues after /api/product/.......

const productController =new ProductController();

router.get("/", productController.getAllProduct);
router.post("/" , productController.addProduct);
router.get()

export default router;