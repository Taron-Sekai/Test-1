
 const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:String
      
    },
    ImageUrl:{
        type:String
    }
})
module.exports =  mongoose.model('product',productSchema)