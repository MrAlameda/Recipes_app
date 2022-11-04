
const uuid=require("uuid")

import Ingredients from "../models/Ingredients.model" 
import UserIngredients from "../models/UserIngredients.model"

export const getAllIngredients=async()=>{
    const data=await Ingredients.findAll()
    return data
}

export const getIngredientsById=async(id:string)=>{
    const data = await Ingredients.findOne({
            where:{
                id
            }
        })
    return data
}

export const createIngredients=async(data:any)=>{
    const newIngredients=await Ingredients.create({
        id:uuid.v4(),
        name: data.name,
        typeId:data.typeId,
        urlImg:data.urlImg
    })
    return newIngredients
}

export const updateIngredients=async(id:string,data:any)=>{
    const result=await Ingredients.update(data,{
        where:{
            id
        }
    })
    return result
}
export const deleteIngredients=async (id:string) => {
    const result=Ingredients.destroy({
        where:{
            id
        }
    })
    return result
}

export const addIngredientToUser = async(data:any,userId:string,ingredientId:string) => {
    const response = await UserIngredients.create({
        id: uuid.v4(),
        amount: data.amount,
        userId: userId,
        ingredientId: ingredientId
    })
    return response
}
