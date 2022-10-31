import db from "../utils/db.config"
import Types from "./Types.model"

const {DataTypes} = require("sequelize")

const Ingredients=db.define("ingredients",{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference:{
            key:"id",
            model:Types
        }
      },
      urlImg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
      }
}, {
    timestamps: false
})

export default Ingredients