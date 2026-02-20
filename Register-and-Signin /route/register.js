import express from "express"
import usersRg from "../controllars/register.js"

const route =express.Router()

route.post("/",usersRg)
export default route
