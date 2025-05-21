const express = require('express')

const carts = require("../Carts")

const router = express.Router()

const cartcontroller = require("../../Controllers/Cartcont")

const verifytoken = require("../../middlewares/Verifytoken")

router.get("/", verifytoken, cartcontroller.getcartsbyemail)
router.post("/", cartcontroller.addtoCart)
router.delete("/:id", cartcontroller.deletecart)
router.put("/:id", cartcontroller.updateCart)
router.put("/:id", cartcontroller.getSingleCart)

module.exports = router