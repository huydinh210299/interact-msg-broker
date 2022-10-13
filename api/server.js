const express = require('express')
const connectDB = require('../db')
const Message = require('../model/message')
const port = 3001

const app = express()

connectDB()

app.use('/', async (req, res) => {
  const messages = await Message.find({})
  res.status(200).send({ data: messages })
})

try {
  app.listen(port, () => {
    console.log(`App listen at port: ${port}.`)
  })
} catch (error) {
  console.log('App runs fail.')
}

module.exports = app
