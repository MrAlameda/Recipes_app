
const uuid=require("uuid")

import Users from "../models/user.model" 
import { hashPassword } from "../utils/crypto"

export const getAllUser=async()=>{
    const data=await Users.findAll()
    return data
}

export const getUserById=async(id:string)=>{
    const data = await Users.findOne({
            where:{
                id
            }
        })
    return data
}

export const createUser=async(data:any)=>{
    const newUser=await Users.create({
        id:uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashPassword(data.password),
        phone: data.phone,
        birthday: data.birthday,
        gender: data.gender,
        country: data.country
    })
    return newUser
}

export const updateUser=async(id:string,data:any)=>{
    const result=await Users.update(data,{
        where:{
            id
        }
    })
    return result
}
export const deleteUser=async (id:string) => {
    const result=Users.destroy({
        where:{
            id
        }
    })
    return result
}

export const getUserByEmail=async (email:string) => {
    const result=await Users.findOne({
        where:{
            email
        }
    })
    return result
}

