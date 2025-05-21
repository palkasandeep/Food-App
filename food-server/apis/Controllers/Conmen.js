// const getallmenuitems = async (req, res) => {

//   try {
//     const menus = await Menu.find({})
//     res.status(200).json(menus);
//   }
//   catch (error) {
//     res.send(500).json({ message: error.message })
//   }
// }

// module.exports = {
//   getallmenuitems,
// }
const Menu = require('../model/Menu')
const getallmenuitems = async (req, res) => {
  try {
    const menus = await Menu.find({});
    res.status(200).json(menus);  // ✅ Success response
  }
  catch (error) {
    res.status(500).json({ message: error.message });  // ✅ Error response
  }
}

module.exports = {
  getallmenuitems,
}
