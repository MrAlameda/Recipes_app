"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../utils/db.config"));
const Ingredients_model_1 = __importDefault(require("./Ingredients.model"));
const recipes_model_1 = __importDefault(require("./recipes.model"));
const { DataTypes } = require("sequelize");
const IngredientsRecipes = db_config_1.default.define("ingredients_recipes", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recipeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        references: {
            key: 'id',
            model: recipes_model_1.default
        }
    },
    ingredientId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'ingredient_id',
        references: {
            key: 'id',
            model: Ingredients_model_1.default
        }
    }
});
exports.default = IngredientsRecipes;
