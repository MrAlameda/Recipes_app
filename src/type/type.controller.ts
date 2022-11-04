
const uuid=require("uuid")

import Types from "../models/Types.model" 

export const getAllTypes=async()=>{
    const data=await Types.findAll()
    return data
}

export const getTypesById=async(id:string)=>{
    const data = await Types.findOne({
            where:{
                id
            }
        })
    return data
}

export const createTypes=async(data:any)=>{
    const newTypes=await Types.create({
        id:uuid.v4(),
        name: data.name
    })
    return newTypes
}

export const updateTypes=async(id:string,data:any)=>{
    const result=await Types.update(data,{
        where:{
            id
        }
    })
    return result
}
export const deleteTypes=async (id:string) => {
    const result=Types.destroy({
        where:{
            id
        }
    })
    return result
}
