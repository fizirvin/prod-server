const mongoose = require('mongoose')
const { database } = require('../../config')

const URL = database.url

const connect = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('DB MONGODB is connected')
  } catch (e) {
    console.log('something goes wrong', e.message)
  }
}

exports.connect = connect
