import express from "express"
import { studentDtata } from "../controllers/studentController.js"
const route =express.Router()

route.use("/student",studentDtata)
export default route