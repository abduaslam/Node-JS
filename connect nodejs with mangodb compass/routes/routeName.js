import express from "express"
import {getName,createName,deleteName,updateName} from "../controllers/conntrollerName.js"
const route =express.Router()
route.delete("/:id",deleteName)
route.put("/:id",updateName)
route.get("/",getName)
route.post("/create",createName)

export default route ;