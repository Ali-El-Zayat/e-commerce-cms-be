const express = require("express");
const router = express.Router();
const { addProduct } = require("../Controllers/Product.controller");
const AuthMiddleware = require("../Middlewares/Auth.middleware");

router.post("/product", AuthMiddleware, addProduct);

module.exports = router;
