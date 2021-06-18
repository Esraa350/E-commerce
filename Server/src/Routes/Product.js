const express=require("express");
const productRouter=express.Router();
const ProductController=require("../Controllers/ProductController");
const userAuth = require("../MiddleWares/Auth");

productRouter.post("/",userAuth.auth,ProductController.addProduct);
productRouter.get("/",ProductController.getAllProducts);
productRouter.get("/:id",ProductController.getProduct);
productRouter.delete("/:id",userAuth.auth,ProductController.deleteProduct);
productRouter.patch("/:id",userAuth.auth,ProductController.updateProduct);

module.exports =productRouter;