const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ingoingSchema = new Schema(
  {
    date: {
      type: String,
      required: true
    },
    spare: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Spare'
    },
    quantity: {
      type: Number,
      required: true
    },
    origin: {
      type: String,
      required: true
    },
    provider: {
      type: String,
      required: false
    },
    price: {
      type: Schema.Types.Decimal128,
      required: false
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

module.exports = mongoose.model('Ingoing', ingoingSchema)
