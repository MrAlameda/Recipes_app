"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
// import adminValidate from "../middleware/admin.medddleware";
const router = express_1.default.Router();
(0, auth_middleware_1.default)(passport_1.default);
const ingredientServices = __importStar(require("./ingredients.services"));
router.route('/')
    .get(ingredientServices.getAll)
    .post(passport_1.default.authenticate('jwt', { session: false }), 
// adminValidate,
ingredientServices.created);
router.route('/:ingredient_id')
    .get(ingredientServices.getById)
    .patch(passport_1.default.authenticate('jwt', { session: false }), 
// adminValidate,
ingredientServices.patched)
    .delete(passport_1.default.authenticate('jwt', { session: false }), 
// adminValidate,
ingredientServices.deleted);
router.post('/:ingredient_id/add_to_user', passport_1.default.authenticate('jwt', { session: false }), ingredientServices.postIngredientToUser);
exports.default = router;
