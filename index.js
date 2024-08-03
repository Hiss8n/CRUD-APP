
const express=require('express');
require('./dataBase/db');
const productRuotes=require('./routes/productroute.js');




const app=express();
//midle ware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//routes
app.use('/api/products',productRuotes);





app.get('/',(req,res)=>{
    res.send('Hello World!!');
})


//get all products
/* app.get('/api/products',); */

//get one product by id

/* app.put('/api/products/:id',) */

/// delete a prodduct


/* app.delete('/api/product/:id',) */



////addd prodeucts
/* app.post('/api/products',) */






app.listen(5000,()=>console.log('Running succeesfully at port 5000...'))

