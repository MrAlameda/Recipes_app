

import { Request, Response } from "express"
import * as typeControllers from "./type.controller"

export const getAllTypes = (req:Request, res:Response) => {
    typeControllers.getAllTypes()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err=> {
            res.status(400).json({message: err.message})
        })
}

export const getTypeById = (req:Request, res:Response) => {
    const id = req.params.id
    typeControllers.getTypesById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(400).json({message: `ID: ${id}, not exists`})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

export const postType = (req:Request, res:Response) => {
    const data = req.body

    if(data.name){
        typeControllers.createTypes(data)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err=> {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({
            message: 'Invalid data',
            fields: {
                name: 'string'
            }
        })
    }
}

export const deleteType = (req:Request, res:Response) => {
    const id = req.params.id 
    typeControllers.deleteTypes(id)
        .then(data => {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })

}