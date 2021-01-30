const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pmoldeSchema = new Schema({
  moldeNumber: {
    type: String,
    required: true
  },
  moldeSerial: {
    type: String,
    required: true
  },
  cavities: {
    type: Number,
    required: true
  },
  lifecycles: {
    type: Number,
    required: true
  },
  tcycles: {
    type: Number,
    required: true
  },
  shot: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('PMolde', pmoldeSchema)
