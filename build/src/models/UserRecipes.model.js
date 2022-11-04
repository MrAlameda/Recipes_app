"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../utils/db.config"));
const recipes_model_1 = __importDefault(require("./recipes.model"));
const user_model_1 = __importDefault(require("./user.model"));
const { DataTypes } = require("sequelize");
const UserRecipes = db_config_1.default.define("user_recipes", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    favorite: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: user_model_1.default
        }
    },
    recipeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        references: {
            key: 'id',
            model: recipes_model_1.default
        }
    }
});
exports.default = UserRecipes;
