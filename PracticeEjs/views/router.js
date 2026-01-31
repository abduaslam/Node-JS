import express from "express"
import createUser from "../controlllers/userController.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Router is working");
});

router.post("/create",createUser)
export default router
