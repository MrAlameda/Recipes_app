import db from "../utils/db.config"
import Recipes from "./recipes.model"
import User from "./user.model"

const {DataTypes} = require("sequelize")

const UserRecipes=db.define("user_recipes",{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    favorite: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: User
        }
    },
    recipeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        references: {
            key: 'id',
            model: Recipes
        }
    }
})

export default UserRecipes