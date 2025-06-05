import express from "express"
import userController from "../controller/userController.js"
const router = express.Router()

router.post("/create", userController.create)
router.post("/login", userController.login)
router.get("/dashboard", userController.dashboard)
router.get("/profile", userController.profile)
router.post("/changepassword", userController.changePassword)
export default router 