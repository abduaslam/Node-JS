

import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
      email:{
        type:String,
        required:true
    },
      adress:{
        type:String,
        required:true
    }
})
export default mongoose.model("customers",userSchema)