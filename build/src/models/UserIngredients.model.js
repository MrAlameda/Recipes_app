"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../utils/db.config"));
const Ingredients_model_1 = __importDefault(require("./Ingredients.model"));
const user_model_1 = __importDefault(require("./user.model"));
const { DataTypes } = require("sequelize");
const UserIngredients = db_config_1.default.define("user_ingredients", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: user_model_1.default
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
exports.default = UserIngredients;
