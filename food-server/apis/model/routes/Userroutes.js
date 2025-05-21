const express = require("express")
const router = express.Router();
const veriftoken = require("../../middlewares/Verifytoken")
const userController = require('../../Controllers/userController')
router.get("/", userController.getallusers)
router.post("/", userController.createUser)
router.delete("/:id", userController.deleteUser)
router.get("/admin/email", userController.getadmin)
router.patch("/admin/:id", userController.makeadmin)
module.exports = router