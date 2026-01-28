import mongoose, {Schema } from "mongoose";    
const commentSchema =mongoose.Schema({
    email:{
        type:String,
        required:"is required"
    },
    name:{
        type:String,
        required:'name is reduired'
    },
    age:{
        type:Number,
        required:"the age is required"
    },
    Phone:{
        type:Number,
        required:"the phone number is required"
    }
})
export default mongoose.model("comments",commentSchema)