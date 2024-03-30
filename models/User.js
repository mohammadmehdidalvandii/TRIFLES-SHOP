const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: false,
    },
    password:{
        type: String,
        required : false,
    },

    role:{
        type: String,
        default:"USER",
    },

    refreshToken : String,
})


const model = mongoose.model.User || mongoose.model("User", schema)

export default model