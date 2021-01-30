const mongoose = require('mongoose')
const Schema = mongoose.Schema

const modelSchema = new Schema(
  {
    number: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    family: {
      type: String,
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

module.exports = mongoose.model('Model', modelSchema)
