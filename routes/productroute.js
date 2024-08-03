const express=require('express');

const router=express.Router();
const {getProducts,getProduct,updatedProduct,deleteAProduct,addProduct}=require('../controller/productcontroller.js');


router.get('/',getProducts);
router.get('/:id',getProduct);


router.post('/',addProduct);

router.put('/:id',updatedProduct);

router.delete('/:id',deleteAProduct);



module.exports=router;