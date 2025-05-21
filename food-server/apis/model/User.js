const mongoose = require('mongoose')
const { Schema } = mongoose

//schema model
const userschema = new Schema({
  name: String,
  email: {
    type: String,
    trim: true,
    minLength: 3
  },
  photoUrl: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
})

//create the model
const User = mongoose.model("User", userschema)
module.exports = User