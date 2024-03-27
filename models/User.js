const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: false,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type: String,
        required : true,
    }

    
})


const model = mongoose.model.User || mongoose.model("User", schema)

export default model