import express from "express"
import studentModels from "../models/studentModels.js"

const data=req.body
const studentDtata= async(req,res)=>{
    try {
       const insertData=new studentModels({
        name:data.name,
        age:data.age,
        grad:data.grad
       }) 
       studentDtata.save()
       .then(()=>{
        res.stutas(200).json({message:"the data saved successfully "})
       })
    }     catch(err){
  console.log("error catched")
  res.status(500).json({
    message:"failed to save the data",
    error:"failed"
})

    }
}

export {studentDtata}