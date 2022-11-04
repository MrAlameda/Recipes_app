"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize } = require("sequelize");
const config_1 = __importDefault(require("../config"));
const db_seq = new Sequelize({
    dialect: "postgres",
    host: config_1.default.db.host,
    username: config_1.default.db.username,
    password: config_1.default.db.password,
    database: config_1.default.db.dbName,
    dialectOptions: process.env.NODE_ENV === 'production'
        ? {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        } : {}
});
exports.default = db_seq;
