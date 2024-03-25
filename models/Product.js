const  mongoose = require("mongoose");
require('./Comment')

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

    comments:{
        type:[
            {
                type: mongoose.Types.ObjectId,
                ref:"Comment"
            }
        ]
    }

})

const model = mongoose.model.Product || mongoose.model('Product' , schema)

export default model