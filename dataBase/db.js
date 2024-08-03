  const mongoose=require('mongoose')



  mongoose.
  connect('mongodb+srv://test123:test123@cluster0.awvv3s7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(()=>console.log('db connected successfully!')).catch((e)=>console.log(e))