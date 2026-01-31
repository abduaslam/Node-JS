import mongoose from "mongoose";
import express from "express"

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:"user name is required"
    },
    age:{
        type:Number,
        required:true
    },
    location :{
        type:String,
        required:true
    }
})
const userdata=mongoose.model("users",userSchema)
export default userdata