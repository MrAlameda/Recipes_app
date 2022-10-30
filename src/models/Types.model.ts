import db from "../utils/database"
const {DataTypes} = require("sequelize")

const Types=db.define("type",{})

export default Types