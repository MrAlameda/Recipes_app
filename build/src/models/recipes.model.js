"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../utils/db.config"));
const Category_model_1 = __importDefault(require("./Category.model"));
const user_model_1 = __importDefault(require("./user.model"));
const { DataTypes } = require("sequelize");
const Recipes = db_config_1.default.define("recipes", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 8
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    urlImg: {
        type: DataTypes.STRING,
        validate: {
        // isUrl:true
        }
    },
    time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    portions: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: "id",
            model: user_model_1.default
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'id',
            model: Category_model_1.default
        }
    },
    origin: {
        type: DataTypes.STRING
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
});
exports.default = Recipes;
