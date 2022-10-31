import db from "../utils/db.config"
const {DataTypes} = require("sequelize")

const Types=db.define("type",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    }
}, {
    timestamps: false,
})

export default Types