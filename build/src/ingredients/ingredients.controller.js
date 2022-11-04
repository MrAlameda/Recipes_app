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
exports.addIngredientToUser = exports.deleteIngredients = exports.updateIngredients = exports.createIngredients = exports.getIngredientsById = exports.getAllIngredients = void 0;
const uuid = require("uuid");
const Ingredients_model_1 = __importDefault(require("../models/Ingredients.model"));
const UserIngredients_model_1 = __importDefault(require("../models/UserIngredients.model"));
const getAllIngredients = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Ingredients_model_1.default.findAll();
    return data;
});
exports.getAllIngredients = getAllIngredients;
const getIngredientsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Ingredients_model_1.default.findOne({
        where: {
            id
        }
    });
    return data;
});
exports.getIngredientsById = getIngredientsById;
const createIngredients = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newIngredients = yield Ingredients_model_1.default.create({
        id: uuid.v4(),
        name: data.name,
        typeId: data.typeId,
        urlImg: data.urlImg
    });
    return newIngredients;
});
exports.createIngredients = createIngredients;
const updateIngredients = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Ingredients_model_1.default.update(data, {
        where: {
            id
        }
    });
    return result;
});
exports.updateIngredients = updateIngredients;
const deleteIngredients = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = Ingredients_model_1.default.destroy({
        where: {
            id
        }
    });
    return result;
});
exports.deleteIngredients = deleteIngredients;
const addIngredientToUser = (data, userId, ingredientId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield UserIngredients_model_1.default.create({
        id: uuid.v4(),
        amount: data.amount,
        userId: userId,
        ingredientId: ingredientId
    });
    return response;
});
exports.addIngredientToUser = addIngredientToUser;
