"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const configure = {
    port: 3001,
    nodeEnv: process.env.NODE_ENV,
    JWTsecret: process.env.JWTSECRET || "hols",
    db: {
        host: process.env.HOST,
        username: process.env.USER,
        password: process.env.PASSWORD,
        dbName: process.env.NAME
    }
};
exports.default = configure;
