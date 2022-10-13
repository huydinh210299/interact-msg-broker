const mongoose = require('mongoose')

const { MONGO_CONFIG } = require('../config/var')
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_CONFIG.CONNECT_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('connect success')
  } catch (error) {
    console.log('connect fail')
    console.log(error)
  }
}

module.exports = connectDB
