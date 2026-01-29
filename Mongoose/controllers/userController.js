import user from "../model/userModel.js"
export const create=async (req,res)=>{
    try {
        const userData=new user(req.body)
        const {email}=userData
        const userExist=await userData.findOne(email)
        if(userExist){
            res.status(4000).json({message:"user already exist"})
        }
        const userSaved=await userData.save()
        res.status(200).json(userSaved)

    } catch(error) {
        res.status(400).json({error:"the user not found"})
    }
}

export const fetch =async(req,res)=>{
    try{
  return res.json("hello the the world")
    }
    catch{
        res.status(400).json({error:"the result is not found"})
    }
}