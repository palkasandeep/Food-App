const Carts = require("../model/Carts");

// Get all the carts by the email id
const getcartsbyemail = async (req, res) => {
  try {
    const email = req.query.email;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const query = { email: email.trim() };
    const result = await Carts.find(query).exec();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add to Cart
const addtoCart = async (req, res) => {
  const { menuItemId, name, recipe, image, price, quantity, email } = req.body;

  // Validation
  if (!menuItemId || !name || !price || !quantity || !email) {
    return res.status(400).json({ message: "All required fields must be filled" });
  }

  try {
    const existingCartItem = await Carts.findOne({ menuItemId });
    if (existingCartItem) {
      return res.status(400).json({ message: "Product already exists" });
    }

    const cartItem = await Carts.create({
      menuItemId: menuItemId.trim(),
      name: name.trim().replace(/,$/, ''),   // Remove trailing comma
      recipe: recipe ? recipe.trim().replace(/,$/, '') : '', // Handle undefined recipe
      image: image ? image.trim().replace(/,$/, '') : '', // Handle undefined image
      price,
      quantity,
      email: email.trim().replace(/,$/, '')
    });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a cart item
const deletecart = async (req, res) => {
  const cartId = req.params.id;

  try {
    const deletedCart = await Carts.findByIdAndDelete(cartId);
    if (!deletedCart) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.status(200).json({ message: "Cart item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//updating the cart
const updateCart = async (req, res) => {
  const cartId = req.params.id;
  const { menuItemId, name, recipe, image, price, quantity, email } = req.body;

  try {
    const updatedCart = await Carts.findByIdAndUpdate(
      cartId,
      { menuItemId, name, recipe, image, price, quantity, email },
      { new: true, runValidators: true }
    );

    if (!updatedCart) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//getting the single recipeeee
const getSingleCart = async (req, res) => {
  const cartId = req.params.id;

  try {
    const cartItem = await Carts.findById(cartId);

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getcartsbyemail,
  addtoCart,
  deletecart,
  updateCart,
  getSingleCart
};
