
const uuid=require("uuid")

import Category from "../models/Category.model" 

export const getAllCategories=async()=>{
    const data=await Category.findAll()
    return data
}

export const getCategoriesById=async(id:string)=>{
    const data = await Category.findOne({
            where:{
                id
            }
        })
    return data
}

export const createCategories=async(data:any)=>{
    const newCategory=await Category.create({
        id:uuid.v4(),
        name: data.name,
    })
    return newCategory
}

export const updateCategories=async(id:string,data:any)=>{
    const result=await Category.update(data,{
        where:{
            id
        }
    })
    return result
}
export const deleteCategories=async (id:string) => {
    const result=Category.destroy({
        where:{
            id
        }
    })
    return result
}
