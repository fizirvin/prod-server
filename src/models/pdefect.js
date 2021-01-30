const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pdefectSchema = new Schema({
  defectName: {
    type: String,
    required: true
  },
  defectCode: {
    type: String,
    required: true
  },
  isInjection: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('PDefect', pdefectSchema)
