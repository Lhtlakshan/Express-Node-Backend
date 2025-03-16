const express = require('express');
const { saveUser } = require('../controller/user.controller');

const userRouter = express.Router();

userRouter.post("/", saveUser);

module.exports = userRouter; 