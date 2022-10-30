import db from "../utils/database"

const {DataTypes} = require("sequelize")

const UserRecipes=db.define("user_recipes",{})

export default UserRecipes