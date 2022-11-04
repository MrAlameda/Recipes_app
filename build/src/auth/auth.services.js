"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_controller_1 = __importDefault(require("./auth.controller"));
const config_1 = __importDefault(require("../config"));
const uselogin = (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        (0, auth_controller_1.default)(email, password)
            .then((result) => {
            if (result) {
                const token = jsonwebtoken_1.default.sign({
                    id: result.id,
                    email: result.email,
                    role: result.role
                }, config_1.default.JWTsecret
                // "queso"
                );
                res.status(200).json({
                    message: "correct credential",
                    token
                });
            }
            else {
                res.status(401).json({ messsage: "Invalid credentials" });
            }
        })
            .catch((err) => { res.status(400).json({ message: err.message }); });
    }
    else {
        res.status(400).json({ message: "missing data" });
    }
};
exports.default = uselogin;
