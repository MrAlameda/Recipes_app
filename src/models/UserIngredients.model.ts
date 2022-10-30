import db from "../utils/database"

const {DataTypes} = require("sequelize")

const UserIngredients=db.define("user_ingredients",{})

export default UserIngredients