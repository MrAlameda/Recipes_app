const uuid = require('uuid')
const {Op} = require('sequelize')

import Recipes from '../models/recipes.model'
import User from '../models/user.model'
import Category from '../models/Category.model'
import Instructions from '../models/instructions.model'
import IngredientsRecipes from '../models/IngredientsRecipes.model'
import Ingredients from '../models/Ingredients.model'
import Types from '../models/Types.model'
import UserIngredients from '../models/UserIngredients.model'



export const getAllRecipes = async () => {
    const data = await Recipes.findAll({
        attributes: {
            exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt']
        },
        include: [
            {
                model: Category
            },
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Instructions,
                attributes: ['step', 'description']
            },
            {
                model: IngredientsRecipes,
                include: {
                    model: Ingredients,
                    include: {
                        model: Types
                    }
                }
            }
        ]
    })
    return data
}

export const getRecipeById = async (id:string) => {
    const data = await Recipes.findOne({
        where: {
            id
        },
        attributes: {
            exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt']
        },
        include: [
            {
                model: Category
            },
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Instructions,
                attributes: ['step', 'description']
            },
            {
                model: IngredientsRecipes,
                include: {
                    model: Ingredients,
                    include: {
                        model: Types
                    }
                }
            }
        ]
    })
    return data
}

export const createRecipe = async (data:any,user_id:string) => {
    const response = await Recipes.create({
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        urlImg: data.urlImg,
        time: data.time,
        portions: data.portions,
        userId: user_id,
        categoryId: data.categoryId,
        origin: data.origin,
        likes: data.likes
    })
    return response
}

export const updateRecipe = async (id:string, data:any) => {
    const response = await Recipes.update(data, {
        where: {
            id
        }
    })
    return response
}

export const deleteRecipe = async (id:string) => {
    const data = await Recipes.destroy({
        where: {
            id
        }
    })
    return data
}

export const getMyRecipes = async(userId:string) => {
    const userIngredients = await UserIngredients.findAll({
        attributes: ['ingredientId'],
        where: {
            userId
        }
    })
    const filteredIngredients = userIngredients.map((obj:any) => obj.ingredientId)
    const recipeIngredients = await IngredientsRecipes.findAll({
        where: {
            ingredientId: {
                [Op.in]: filteredIngredients
            }
        }
    })

    const filteredRecipes = recipeIngredients.map((obj:any)=> obj.recipeId)

    const data = await Recipes.findAll({
        where: {
            id: {
                [Op.in]: filteredRecipes
            }
        }
    })

    return data
}
