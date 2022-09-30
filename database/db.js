const mongoose = require('mongoose');




// connect to mongodb
const connectDB = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/express-mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB...')
  )};





  module.exports = connectDB;