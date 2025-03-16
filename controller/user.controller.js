const bcrypt = require('bcrypt');
const User = require('../models/user');

const saveUser = (req,res)=>{
    const bcryptPassword = bcrypt.hashSync(req.body.password , 10);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcryptPassword,
      address: req.body.address,
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

module.exports = {
    saveUser
}