const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const saveUser = (req,res)=>{
    const bcryptPassword = bcrypt.hashSync(req.body.password , 10);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcryptPassword,
      address: req.body.address,
      role: req.body.role
    });

    user.save().then(()=>{
        res.json({
            message:"user saved"
        })
    }).catch((err)=>{
        res.json({
            message:"user was not saved"
        })
    })
}

const loginUser = (req,res)=>{
    const email = req.body.username;
    const password = req.body.password;

    User.findOne({
        email: email
    }).then((user)=>{
        if(user == null){
            res.status(400).json({
                message: "Invalid email"
            })
        }else{
            isPasswordCorrect = bcrypt.compareSync(password , user.password);
            if(isPasswordCorrect){
                const userData = {
                    name :user.name,
                    email :user.email,
                    password :user.password,
                    address : user.address,
                    role : user.role
                }

                const token = jwt.sign(userData , "random1234");
                
                res.json({
                    message: "Login successfull",
                    token : token
                })
            }else{
                res.json({
                  message: "Invalid password",
                });
            }
        }
    })
}

module.exports = {
    saveUser,
    loginUser
}