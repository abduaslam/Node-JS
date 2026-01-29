import express from "express"
import {getName,createName} from "../controllers/conntrollerName.js"
const route =express.Router()
route.get("/",getName)
route.post("/",createName)

export default route ;