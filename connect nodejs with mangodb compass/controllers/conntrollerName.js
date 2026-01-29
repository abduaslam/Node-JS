import Names from "../models/modelName.js";
const getName=async(req,res)=>{
    try {
        const name=await Names.find();
        res.json(name)

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


const createName=async(req,res)=>{
    try {
      const data=req.body;
        const name=await Names({firstName:data.firstName, lastName:data.lastName});
        await name.save()
        res.send(name)

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export{getName,createName}