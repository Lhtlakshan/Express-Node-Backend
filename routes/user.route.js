const express = require("express");
const { saveUser, loginUser } = require("../controller/user.controller");

const userRouter = express.Router();

userRouter.post("/", saveUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
