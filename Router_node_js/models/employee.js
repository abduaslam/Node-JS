import mongoose, { Mongoose,Schema } from "mongoose";
const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:"the name is required"
    },
    salary:{
        type:Number,
        required:"the salary is required"
    }
})
export default mongoose.model("salary",employeeSchema)