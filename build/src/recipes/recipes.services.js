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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserRecipes = exports.deleted = exports.patched = exports.created = exports.getById = exports.getAll = void 0;
const recipeControllers = __importStar(require("./recipes.controller"));
const getAll = (req, res) => {
    recipeControllers.getAllRecipes()
        .then((data) => {
        res.status(200).json(data);
    })
        .catch((err) => {
        res.status(400).json({ message: err.message });
    });
};
exports.getAll = getAll;
const getById = (req, res) => {
    const id = req.params.recipe_id;
    recipeControllers.getRecipeById(id)
        .then((data) => {
        if (data) {
            res.status(200).json(data);
        }
        else {
            res.status(404).json({ message: 'Invalid ID', id });
        }
    })
        .catch((err) => {
        res.status(400).json({ message: err.message });
    });
};
exports.getById = getById;
const created = (req, res) => {
    const userId = req.user.id;
    const data = req.body;
    if (data.title && data.description && data.time && data.portions && data.categoryId) {
        recipeControllers.createRecipe(data, userId)
            .then((data) => {
            res.status(201).json(data);
        })
            .catch((err) => {
            res.status(400).json({ message: err.message });
        });
    }
    else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                title: 'string',
                description: 'string',
                time: 'number',
                portions: 'number',
                categoryId: 'number'
            }
        });
    }
};
exports.created = created;
const patched = (req, res) => {
    const { title, description, urlImg, time, portions, categoryId, origin } = req.body;
    const id = req.params.recipe_id;
    recipeControllers.updateRecipe(id, { title, description, urlImg, time, portions, categoryId, origin })
        .then((data) => {
        if (data[0]) {
            res.status(200).json({ message: `Recipe with ID: ${id} edited succesfully` });
        }
        else {
            res.status(404).json({ message: 'Invalid ID', id });
        }
    })
        .catch((err) => {
        res.status(400).json({ message: err.message });
    });
};
exports.patched = patched;
const deleted = (req, res) => {
    const id = req.params.recipe_id;
    recipeControllers.deleteRecipe(id)
        .then((data) => {
        if (data) {
            res.status(204).json();
        }
        else {
            res.status(404).json({ message: 'Invalid ID', id });
        }
    })
        .catch((err) => {
        res.status(400).json({ message: err.message });
    });
};
exports.deleted = deleted;
const getUserRecipes = (req, res) => {
    const userId = req.user.id;
    recipeControllers.getMyRecipes(userId)
        .then(data => {
        res.status(200).json(data);
    })
        .catch(err => {
        res.status(400).json({ message: err.message });
    });
};
exports.getUserRecipes = getUserRecipes;
