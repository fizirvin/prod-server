const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pshotSchema = new Schema({
  molde: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Molde'
  },
  date: {
    type: String,
    required: true
  },
  shift: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: false
  },
  end: {
    type: String,
    required: false
  },
  shiftEnd: {
    type: String,
    required: false
  },
  active: {
    type: Boolean,
    required: true
  },
  comments: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('PShot', pshotSchema)
