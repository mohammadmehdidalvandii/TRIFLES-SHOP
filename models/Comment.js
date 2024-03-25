const mongoose = require("mongoose");
require('./Product')
const schema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },

    email:{
        type : String,
        required:true,
    },

    date:{
        type:Date,
        default : ()=> Date.now(),
        immutable:false,
    },

    body:{
        type:String,
        required:true,
    },

    productID:{
        type: mongoose.Types.ObjectId,
        ref:"Product",
    },
})