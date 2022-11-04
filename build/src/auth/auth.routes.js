"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const auth_services_1 = __importDefault(require("./auth.services"));
const { userAdd } = require('../users/user.services');
router.post("/register", userAdd);
router.post("/login", auth_services_1.default);
exports.default = router;
