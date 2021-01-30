const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pmodelSchema = new Schema({
  partNumber: {
    type: String,
    required: true
  },
  partName: {
    type: String,
    required: true
  },
  family: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('PModel', pmodelSchema)
