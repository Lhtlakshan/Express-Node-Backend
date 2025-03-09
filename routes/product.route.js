const express = require('express');
const router = express.Router();
const {getAllProducts , getProductById , addProduct , deleteProduct,updateProduct } = require("../controller/product.controller.js");

router.post("/" , addProduct);
router.get("/:id",getProductById)
router.get("/", getAllProducts);
router.put("/:id" , updateProduct);
router.delete("/:id" , deleteProduct)

module.exports = router;