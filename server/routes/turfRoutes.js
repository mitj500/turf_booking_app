import express from "express"
const router = express.Router()
import turfController from "../controller/turfController.js"

router.post("/create", turfController.createTurf)
router.get("/gallery", turfController.getTurf)

export default router