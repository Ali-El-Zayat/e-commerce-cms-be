const express = require("express");
const { register } = require("../Controllers/Register.controller");
const { login } = require("../Controllers/Login.controller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
