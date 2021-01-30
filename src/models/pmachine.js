const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pmachineSchema = new Schema({
  machineNumber: {
    type: String,
    required: true
  },
  machineSerial: {
    type: String,
    required: true
  },
  closingForce: {
    type: Number,
    required: true
  },
  spindleDiameter: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('PMachine', pmachineSchema)
