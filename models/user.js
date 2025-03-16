const mongoose = require('mongoose');

const Userschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

const User = mongoose.model("user",Userschema);
module.exports =  User;