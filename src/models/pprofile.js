const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pprofileSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  entry: {
    type: Date,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  picture_URL: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    required: false
  },
  updatedAt: {
    type: Date,
    required: false
  }
})

module.exports = mongoose.model('PProfile', pprofileSchema)
