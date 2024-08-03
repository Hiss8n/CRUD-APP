const mongoose=require('mongoose');



const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        default:0
    },
    Qty:{
        type:Number,
        default:0
    }
},
{
    timestamps:true
})

const products=mongoose.model('Product',productSchema);

module.exports=products