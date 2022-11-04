import { Request, Response } from "express"
import * as instructionControllers from "./instructions.controller"

export const getAll = (req:Request, res:Response) => {
    instructionControllers.getAllInstructions()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

export const getById = (req:Request, res:Response) => {
    const id = req.params.instruction_id
    instructionControllers.getInstructionsById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            }else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

export const posted = (req:Request, res:Response) => {
    const data = req.body

    if(data.description && data.step && data.recipeId){
        instructionControllers.createInstructions(data)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                description: 'string',
                step: 'number',
                recipeId: 'uuid'
            }
        })
    }
}


export const patched = (req:Request, res:Response) => {
    const { description, step, recipeId } = req.body
    const id = req.params.instruction_id
    instructionControllers.updateInstructions(id, {description, step, recipeId})
        .then(data => {
            if(data[0]){
                res.status(200).json({message: `Instruction with ID: ${id} edited succesfully`})
            } else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })  
}

export const deleted = (req:Request, res:Response) => {
    const id = req.params.instruction_id

    instructionControllers.deleteInstructions(id)
        .then(data => {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}