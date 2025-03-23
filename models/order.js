import mongoose from "mongoose";

const orderSchema = mongoose.Schema({

    orderId : {
        type:String,
        required :true,
        unique : true
    },
    
})