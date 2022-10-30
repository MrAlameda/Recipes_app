import db from "../utils/db.config";
const {DataTypes} = require("sequelize")

const Instructions=db.define("instructions",{})

export default Instructions