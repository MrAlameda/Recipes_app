import db from "../utils/db.config"
import Ingredients from "./Ingredients.model"
import Recipes from "./recipes.model"

const {DataTypes} = require("sequelize")

const IngredientsRecipes= db.define("ingredients_recipes",{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recipeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        references: {
            key: 'id',
            model: Recipes
        }
    },
    ingredientId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'ingredient_id',
        references: {
            key: 'id',
            model: Ingredients
        }
    }
})

export default IngredientsRecipes