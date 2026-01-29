import express from "express"
import { studentDtata } from "../controllers/studentController.js"
const route =express.Router()

route.get("/:name",studentDtata())
export default route