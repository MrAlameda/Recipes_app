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
const config_1 = __importDefault(require("../config"));
const user_controller_1 = require("../users/user.controller");
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const passport_jwt_2 = __importDefault(require("passport-jwt"));
exports.default = (passport) => {
    const options = {
        jwtFromRequest: passport_jwt_2.default.ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: config_1.default.JWTsecret
    };
    passport.use(new passport_jwt_1.default.Strategy(options, (decode, done) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield (0, user_controller_1.getUserById)(decode.id);
            if (!result) {
                return done(null, false);
            }
            console.log("decode jwt", decode);
            return done(null, decode);
        }
        catch (error) {
            return done(error, false);
        }
    })));
};
