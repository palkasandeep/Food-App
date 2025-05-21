const mongoose = require('mongoose')
const { Schema } = mongoose;


const cartschema = new Schema({
  menuItemId: String,
  name: {
    type: String,
    trim: true,
    required: true,
    minLength: 3
  },
  recipe: String,
  image: String,
  price: Number,
  quantity: Number,
  email: {
    type: String,
    true: true,
    required: true,
  }
})


const Carts = mongoose.model("Cart", cartschema);
module.exports = Carts;