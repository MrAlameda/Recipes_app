"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../utils/db.config"));
const Types_model_1 = __importDefault(require("./Types.model"));
const { DataTypes } = require("sequelize");
const Ingredients = db_config_1.default.define("ingredients", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            key: "id",
            model: Types_model_1.default
        }
    },
    urlImg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        // isUrl: true
        }
    }
}, {
    timestamps: false
});
exports.default = Ingredients;
