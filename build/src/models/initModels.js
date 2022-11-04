"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_model_1 = __importDefault(require("./Category.model"));
const Ingredients_model_1 = __importDefault(require("./Ingredients.model"));
const IngredientsRecipes_model_1 = __importDefault(require("./IngredientsRecipes.model"));
const instructions_model_1 = __importDefault(require("./instructions.model"));
const recipes_model_1 = __importDefault(require("./recipes.model"));
const Types_model_1 = __importDefault(require("./Types.model"));
const user_model_1 = __importDefault(require("./user.model"));
const UserIngredients_model_1 = __importDefault(require("./UserIngredients.model"));
const UserRecipes_model_1 = __importDefault(require("./UserRecipes.model"));
const initModels = () => {
    // ! User
    user_model_1.default.hasMany(recipes_model_1.default);
    recipes_model_1.default.belongsTo(user_model_1.default);
    //* Users 1:M UserRecipes
    user_model_1.default.hasMany(UserRecipes_model_1.default);
    UserRecipes_model_1.default.belongsTo(user_model_1.default);
    //* Recipes 1:M UserRecipes
    recipes_model_1.default.hasMany(UserRecipes_model_1.default);
    UserRecipes_model_1.default.belongsTo(recipes_model_1.default);
    //* Users 1:M UserIngredients
    user_model_1.default.hasMany(UserIngredients_model_1.default);
    UserIngredients_model_1.default.belongsTo(user_model_1.default);
    //* Ingredients 1:M UserIngredients
    Ingredients_model_1.default.hasMany(UserIngredients_model_1.default);
    UserIngredients_model_1.default.belongsTo(Ingredients_model_1.default);
    //TODO
    //* Recipes M:1 Categories
    Category_model_1.default.hasMany(recipes_model_1.default);
    recipes_model_1.default.belongsTo(Category_model_1.default);
    //* Ingredients M:1 Types
    Types_model_1.default.hasMany(Ingredients_model_1.default);
    Ingredients_model_1.default.belongsTo(Types_model_1.default);
    //* Recipes 1:M RecipesIngredients
    recipes_model_1.default.hasMany(IngredientsRecipes_model_1.default);
    IngredientsRecipes_model_1.default.belongsTo(recipes_model_1.default);
    //* Ingredients 1:M RecipesIngredients
    Ingredients_model_1.default.hasMany(IngredientsRecipes_model_1.default);
    IngredientsRecipes_model_1.default.belongsTo(Ingredients_model_1.default);
    //* Recipes 1:M Instructions
    recipes_model_1.default.hasMany(instructions_model_1.default);
    instructions_model_1.default.belongsTo(recipes_model_1.default);
};
exports.default = initModels;
