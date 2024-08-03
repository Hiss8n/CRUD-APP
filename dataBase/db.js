  const mongoose=require('mongoose')
  require('dotenv').config()
  const Mongo_URI=process.env.Mongo_URI;



  mongoose.
  connect(Mongo_URI)
  .then(()=>console.log('db connected successfully!')).catch((e)=>console.log(e))