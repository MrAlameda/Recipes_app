import db from "../utils/database";
const {DataTypes} = require("sequelize")

const Category=db.define("category",{})

export default Category