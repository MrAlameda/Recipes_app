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
exports.deleteInstructions = exports.updateInstructions = exports.createInstructions = exports.getInstructionsById = exports.getAllInstructions = void 0;
const uuid = require("uuid");
const instructions_model_1 = __importDefault(require("../models/instructions.model"));
const getAllInstructions = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield instructions_model_1.default.findAll();
    return data;
});
exports.getAllInstructions = getAllInstructions;
const getInstructionsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield instructions_model_1.default.findOne({
        where: {
            id
        }
    });
    return data;
});
exports.getInstructionsById = getInstructionsById;
const createInstructions = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newInstructions = yield instructions_model_1.default.create({
        id: uuid.v4(),
        description: data.description,
        step: data.step,
        recipeId: data.recipeId
    });
    return newInstructions;
});
exports.createInstructions = createInstructions;
const updateInstructions = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield instructions_model_1.default.update(data, {
        where: {
            id
        }
    });
    return result;
});
exports.updateInstructions = updateInstructions;
const deleteInstructions = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = instructions_model_1.default.destroy({
        where: {
            id
        }
    });
    return result;
});
exports.deleteInstructions = deleteInstructions;
