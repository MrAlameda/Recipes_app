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
const express_1 = __importDefault(require("express"));
const userServises = __importStar(require("./user.services"));
const passport_1 = __importDefault(require("passport"));
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const admin_medddleware_1 = __importDefault(require("../middleware/admin.medddleware"));
(0, auth_middleware_1.default)(passport_1.default);
const router = express_1.default.Router();
router.get("/", passport_1.default.authenticate("jwt", { session: false }), userServises.allUsers);
router.route("/me")
    .get(passport_1.default.authenticate("jwt", { session: false }), userServises.getMyUser)
    .delete(passport_1.default.authenticate("jwt", { session: false }), userServises.deleteMyUser)
    .patch(passport_1.default.authenticate("jwt", { session: false }), userServises.updateMyUser);
router.route("/:id")
    .get(userServises.userById)
    .patch(passport_1.default.authenticate("jwt", { session: false }), admin_medddleware_1.default, userServises.userPatch)
    .delete(passport_1.default.authenticate("jwt", { session: false }), admin_medddleware_1.default, userServises.userDelet);
exports.default = router;
