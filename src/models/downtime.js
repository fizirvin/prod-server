const mongoose = require('mongoose')
const Schema = mongoose.Schema

const downtimeSchema = new Schema(
  {
    report: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Report'
    },
    issue: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Issue'
    },
    mins: {
      type: Number,
      required: true
    },
    shift: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    dates: {
      y: {
        type: String,
        required: true
      },
      m: {
        type: String,
        required: true
      },
      dm: {
        type: String,
        required: true
      },
      dw: {
        type: String,
        required: true
      },
      w: {
        type: String,
        required: true
      },
      dy: {
        type: String,
        required: true
      },
      q: {
        type: String,
        required: true
      }
    }
  },
  {
    versionKey: false
  }
)

module.exports = mongoose.model('Downtime', downtimeSchema)
