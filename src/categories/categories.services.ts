import { Request,Response } from "express"

import * as categoryControllers from "./categories.controller"

export const getAll = (req:Request, res:Response) => {
    categoryControllers.getAllCategories()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err=> {
            res.status(400).json({message: err.message})
        })
}

export const getById = (req:Request, res:Response) => {
    const id = req.params.id
    categoryControllers.getCategoriesById(id)
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

export const posted = (req:Request, res:Response) => {
    const {name} = req.body

    if(name){
        categoryControllers.createCategories(name)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err=> {
                res.status(400).json({where:"categoryController",message: err})
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

export const deleted = (req:Request, res:Response) => {
    const id = req.params.id 
    categoryControllers.deleteCategories(id)
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
