import db from "../utils/db.config"
import Ingredients from "./Ingredients.model"
import User from "./user.model"

const {DataTypes} = require("sequelize")

const UserIngredients=db.define("user_ingredients",{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    amount : {
        type: DataTypes.STRING,
        allowNull:false
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

export default UserIngredients