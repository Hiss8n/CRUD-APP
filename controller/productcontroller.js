const Product=require('../models/products');

const getProducts=async(req,res)=>{
    try {

        const myProducts=await Product.find({})

        res.status(200).json(myProducts)
        
    } catch (error) {

        res.status(500).json({message:'No products found...'})
        
    }
}



const getProduct=async(req,res)=>{
    try {
        const {id}=req.params;

        const myProducts=await Product.findById(id)

        res.status(200).json(myProducts)
        
    } catch (error) {

        res.status(500).json({message:'No products found...'})
        
    }
}


const addProduct=async(req,res)=>{
    try {

     const newllyProdeuct=await Product.create(req.body)

        res.status(200).json(newllyProdeuct)
        
    } catch (error) {
        res.status(500).json({message:'could no postr,try again later'})
        
    } 
}

const updatedProduct=async(req,res)=>{
    try {

        const {id}=req.params
        const product= await Product.findByIdAndUpdate(id,req.body)

        if(!product){
            return res.status(404).json({message:'Not found the product... please try later'})
        }

        const updatedProduct=await Product.findById(id)

        res.status(200).json(updatedProduct)
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

const deleteAProduct=async(req,res)=>{
    try {
     const {id}=req.params
        const product=await Product.findByIdAndDelete(id)

        if(!product){
            return res.status(404).json({message:'Not found the, plesae try laters'})
        }

        res.status(200).json({message:'product deleted successfully.'})
        
    }catch (error) {
        res.status(500).json({message:error.message})

        
    }
}




module.exports={getProduct,getProducts,addProduct,updatedProduct,deleteAProduct}