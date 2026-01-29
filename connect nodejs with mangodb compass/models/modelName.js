import mongoose from "mongoose";
const nameSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:false
    },

})
const Names=mongoose.model("Names",nameSchema)
export default Names ;