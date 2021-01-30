const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moldeSchema = new Schema(
  {
    number: {
      type: String,
      required: true
    },
    serial: {
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

module.exports = mongoose.model('Molde', moldeSchema)
