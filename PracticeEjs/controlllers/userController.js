import express from "express";
import userdata from "../models/userModels.js";

const createUser = async (req, res) => {
  try {
    const user = await userdata.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

export default createUser;
