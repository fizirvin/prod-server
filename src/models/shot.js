const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shotSchema = new Schema(
  {
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

module.exports = mongoose.model('Shot', shotSchema)
