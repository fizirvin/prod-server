const mongoose = require('mongoose')
const Schema = mongoose.Schema

const machineSchema = new Schema(
  {
    number: {
      type: String,
      required: true
    },
    serial: {
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
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

module.exports = mongoose.model('Machine', machineSchema)
