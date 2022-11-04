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
exports.deleteTypes = exports.updateTypes = exports.createTypes = exports.getTypesById = exports.getAllTypes = void 0;
const uuid = require("uuid");
const Types_model_1 = __importDefault(require("../models/Types.model"));
const getAllTypes = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Types_model_1.default.findAll();
    return data;
});
exports.getAllTypes = getAllTypes;
const getTypesById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Types_model_1.default.findOne({
        where: {
            id
        }
    });
    return data;
});
exports.getTypesById = getTypesById;
const createTypes = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newTypes = yield Types_model_1.default.create({
        id: uuid.v4(),
        name: data.name
    });
    return newTypes;
});
exports.createTypes = createTypes;
const updateTypes = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Types_model_1.default.update(data, {
        where: {
            id
        }
    });
    return result;
});
exports.updateTypes = updateTypes;
const deleteTypes = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = Types_model_1.default.destroy({
        where: {
            id
        }
    });
    return result;
});
exports.deleteTypes = deleteTypes;
