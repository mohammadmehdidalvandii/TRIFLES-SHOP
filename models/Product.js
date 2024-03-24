const  mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    shortDesc:{
        type: String,
        required : true,
    },

    LongDesc:{
        type: String,
        required : true,
    },

    unit:{
        type : String,
        required: true,
    },

    color:{
        type : String,
        required: false,
    },

    size:{
        type : Number,
        required: false,
    },

    weight:{
        type : Number,
        required: false,
    },
    dimensions:{
        type : Number,
        required: false,
    },

})

const model = mongoose.model.Product || mongoose.model('Product' , schema)

export default model