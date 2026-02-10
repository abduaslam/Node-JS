import mongoose from "mongoose"



const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type :Number,
        required:true
    },
    grad:{
        type :Number
        ,required:true
    }
})
export default mongoose.model("students1",studentSchema)