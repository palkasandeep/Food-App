const mongoose = require("mongoose")
const { Schema } = mongoose

//creating the menu items for schema objects
const menuschema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3
  },
  recipe: String,
  image: String,
  category: String,
  price: Number
})

//creating the model

const Menu = mongoose.model("Menu", menuschema)
module.exports = Menu;
