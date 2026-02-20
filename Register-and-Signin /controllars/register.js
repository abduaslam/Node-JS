import mongoose from "mongoose";
import userschema from "../models/register.js"
import express from "express"
import bcrypt from "bcrypt"



const addUsers=async (req,res)=>{
  const data =req.body;
  try {
    const hashPassword=await bcrypt.hash(data.password,10);
      data.password =hashPassword;
    const checkUser=await userschema.findOne({email:data.email}) ;
    if(checkUser){
      res.status(400).json({
        message:"user already exsit"
      })
   
    }
     
     else{
      
      const newuser=await new userschema({
        email:data.email,
        password:data.password
      })
      const result= await newuser.save();
      res.status(200).json({
        message:"users registered secessufully",
        data:result
      })
      }
  } catch (error) {
  console.error("User failed to register:", error);
  res.status(500).json({
    message: "Internal server error"
  });
}
                                                                                                                                                          
}

export default addUsers