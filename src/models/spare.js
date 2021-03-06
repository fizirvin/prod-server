const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spareSchema = new Schema(
  {
    code: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    optimal: {
      type: Number,
      required: true
    },
    location: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Location'
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

module.exports = mongoose.model('Spare', spareSchema)
