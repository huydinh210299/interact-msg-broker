const { Schema, model } = require('mongoose')

const message = new Schema({
  title: {
    type: String
  },
  time: {
    type: Date,
    default: new Date()
  }
})

module.exports = model('message', message, 'message')
