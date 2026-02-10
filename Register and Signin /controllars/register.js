import usersRg from "../models/register.js"

const Users= (req,res)=>{
    let userdata=req.boy;
    
    try {
   let check= usersRg.findOne({pssword:userdata.password});
   if(check){
  res.stutas(200).json({ message:"User is already Exist"})
   }
   else{
    const  newUsers=new usersRg({
        email:userdata.email,
        password:userdata.password
    })
    result=newUsers.save()
    .res.stutas(200).json({
        message:"User created seccessful",
        data:result
    })
   }
        
    } catch (error) {
        res.stutas(400).json({
            error:error
        })
    }
}
export default usersRg ;