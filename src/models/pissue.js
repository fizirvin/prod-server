const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pissueSchema = new Schema({
  issueName: {
    type: String,
    required: true
  },
  issueCode: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('PIssue', pissueSchema)
