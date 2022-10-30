import db from "../utils/database";
import Category from "./Category.model";
import Users from "./users.models";

const { DataTypes } =require("sequelize");

const Recipes = db.define("Recipe", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            min:8
        }
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    urlImg:{
        type:DataTypes.STRING,
        validate:{
            isUrl:true
        },
        field:"url_img"
    },
    time:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    portions:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    userId:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            key:"id",
            model:Users
        }
    },
    categoryId:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            key:"id",
            model:Category
        }        
    },
    origin:{
        type:DataTypes.STRING
    },
    likes:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    },
})

export default Recipes