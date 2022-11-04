"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyRecipes = exports.deleteRecipe = exports.updateRecipe = exports.createRecipe = exports.getRecipeById = exports.getAllRecipes = void 0;
const uuid = require('uuid');
const { Op } = require('sequelize');
const recipes_model_1 = __importDefault(require("../models/recipes.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const Category_model_1 = __importDefault(require("../models/Category.model"));
const instructions_model_1 = __importDefault(require("../models/instructions.model"));
const IngredientsRecipes_model_1 = __importDefault(require("../models/IngredientsRecipes.model"));
const Ingredients_model_1 = __importDefault(require("../models/Ingredients.model"));
const Types_model_1 = __importDefault(require("../models/Types.model"));
const UserIngredients_model_1 = __importDefault(require("../models/UserIngredients.model"));
const getAllRecipes = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield recipes_model_1.default.findAll({
        attributes: {
            exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt']
        },
        include: [
            {
                model: Category_model_1.default
            },
            {
                model: user_model_1.default,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: instructions_model_1.default,
                attributes: ['step', 'description']
            },
            {
                model: IngredientsRecipes_model_1.default,
                include: {
                    model: Ingredients_model_1.default,
                    include: {
                        model: Types_model_1.default
                    }
                }
            }
        ]
    });
    return data;
});
exports.getAllRecipes = getAllRecipes;
const getRecipeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield recipes_model_1.default.findOne({
        where: {
            id
        },
        attributes: {
            exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt']
        },
        include: [
            {
                model: Category_model_1.default
            },
            {
                model: user_model_1.default,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: instructions_model_1.default,
                attributes: ['step', 'description']
            },
            {
                model: IngredientsRecipes_model_1.default,
                include: {
                    model: Ingredients_model_1.default,
                    include: {
                        model: Types_model_1.default
                    }
                }
            }
        ]
    });
    return data;
});
exports.getRecipeById = getRecipeById;
const createRecipe = (data, user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield recipes_model_1.default.create({
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        urlImg: data.urlImg,
        time: data.time,
        portions: data.portions,
        userId: user_id,
        categoryId: data.categoryId,
        origin: data.origin,
        likes: data.likes || 0
    });
    return response;
});
exports.createRecipe = createRecipe;
const updateRecipe = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield recipes_model_1.default.update(data, {
        where: {
            id
        }
    });
    return response;
});
exports.updateRecipe = updateRecipe;
const deleteRecipe = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield recipes_model_1.default.destroy({
        where: {
            id
        }
    });
    return data;
});
exports.deleteRecipe = deleteRecipe;
const getMyRecipes = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const userIngredients = yield UserIngredients_model_1.default.findAll({
        attributes: ['ingredientId'],
        where: {
            userId
        }
    });
    const filteredIngredients = userIngredients.map((obj) => obj.ingredientId);
    const recipeIngredients = yield IngredientsRecipes_model_1.default.findAll({
        where: {
            ingredientId: {
                [Op.in]: filteredIngredients
            }
        }
    });
    const filteredRecipes = recipeIngredients.map((obj) => obj.recipeId);
    const data = yield recipes_model_1.default.findAll({
        where: {
            id: {
                [Op.in]: filteredRecipes
            }
        }
    });
    return data;
});
exports.getMyRecipes = getMyRecipes;
