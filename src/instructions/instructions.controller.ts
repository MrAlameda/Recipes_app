
const uuid=require("uuid")

import Instructions from "../models/instructions.model" 

export const getAllInstructions=async()=>{
    const data=await Instructions.findAll()
    return data
}

export const getInstructionsById=async(id:string)=>{
    const data = await Instructions.findOne({
            where:{
                id
            }
        })
    return data
}

export const createInstructions=async(data:any)=>{
    const newInstructions=await Instructions.create({
        id:uuid.v4(),
        description: data.description,
        step:data.step,
        recipeId:data.recipeId
    })
    return newInstructions
}

export const updateInstructions=async(id:string,data:any)=>{
    const result=await Instructions.update(data,{
        where:{
            id
        }
    })
    return result
}
export const deleteInstructions=async (id:string) => {
    const result=Instructions.destroy({
        where:{
            id
        }
    })
    return result
}
