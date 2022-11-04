"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const hashPassword = (plainPasword) => {
    return bcrypt.hashSync(plainPasword, 10);
};
exports.hashPassword = hashPassword;
const comparePassword = (plainPassword, hashPassword) => {
    return bcrypt.compareSync(plainPassword, hashPassword);
};
exports.comparePassword = comparePassword;
module.exports = {
    hashPassword: exports.hashPassword,
    comparePassword: exports.comparePassword
};
