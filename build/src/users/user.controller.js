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
exports.getUserByEmail = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUser = void 0;
const uuid = require("uuid");
const user_model_1 = __importDefault(require("../models/user.model"));
const crypto_1 = require("../utils/crypto");
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield user_model_1.default.findAll();
    return data;
});
exports.getAllUser = getAllUser;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield user_model_1.default.findOne({
        where: {
            id
        }
    });
    return data;
});
exports.getUserById = getUserById;
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield user_model_1.default.create({
        id: uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: (0, crypto_1.hashPassword)(data.password)
    });
    return newUser;
});
exports.createUser = createUser;
const updateUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.update(data, {
        where: {
            id
        }
    });
    return result;
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = user_model_1.default.destroy({
        where: {
            id
        }
    });
    return result;
});
exports.deleteUser = deleteUser;
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findOne({
        where: {
            email
        }
    });
    return result;
});
exports.getUserByEmail = getUserByEmail;
