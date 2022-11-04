
import { Request, Response } from "express"
import * as recipeControllers from "./recipes.controller"

export const getAll = (req:Request, res:Response) => {
    recipeControllers.getAllRecipes()
        .then((data:any) => {
            res.status(200).json(data)
        })
        .catch((err:Error)=> {
            res.status(400).json({message: err.message})
        })
}
//? /api/v1/recipe/2/ingredients/8
//? router.get('/api/v1/recipe/:recipe_id/ingredients/:ingredient_id')
export const getById = (req:any, res:Response) => {
    const id = req.params.recipe_id 
    recipeControllers.getRecipeById(id)
        .then((data:any)=> {
            if(data){
                res.status(200).json(data)
            }else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch((err:Error)=> {
            res.status(400).json({message: err.message})
        })
}

export const created = (req:any, res:Response) => {
    const userId = req.user.id
    const data= req.body

    if(data.title && data.description && data.time && data.portions && data.categoryId){
        recipeControllers.createRecipe(data,userId)
            .then((data:any)=> {
                res.status(201).json(data)
            })
            .catch((err:Error)=> {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                title: 'string',
                description: 'string',
                time: 'number',
                portions: 'number',
                categoryId: 'number'
            }
        })
    }
}

export const patched = (req:Request, res:Response) => {
    const { title, description, urlImg, time, portions, categoryId, origin } = req.body
    const id = req.params.recipe_id
    recipeControllers.updateRecipe(id, {title, description, urlImg, time, portions, categoryId, origin})
        .then((data:any)=> {
            if(data[0]){
                res.status(200).json({message: `Recipe with ID: ${id} edited succesfully`})
            } else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch((err:Error)=> {
            res.status(400).json({message: err.message})
        })  
}

export const deleted = (req:Request, res:Response) => {
    const id = req.params.recipe_id

    recipeControllers.deleteRecipe(id)
        .then((data:any)=> {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch((err:Error)=> {
            res.status(400).json({message: err.message})
        })
}