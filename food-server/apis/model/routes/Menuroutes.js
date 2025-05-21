// const express = require("express")

// const router = express.Router()

// //get all the menu items
// router.get('/', async (req, res) => {
//   try {

//     const menus = await Menu.find({});
//     res.status(200).json(menus)

//   } catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// })

// module.exports = router
const express = require("express");
const router = express.Router();
const Menu = require("../Menu"); // Adjust the path as needed



const menucontroller = require("../../Controllers/Conmen");

router.get('/', menucontroller.getallmenuitems)
// Get all the menu items
// router.get('/', async (req, res) => {
//   try {
//     const menus = await Menu.find({});
//     console.log(menus);
//     res.status(200).json(menus);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

module.exports = router;
