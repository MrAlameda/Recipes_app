"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postIngredientToUser = exports.deleted = exports.patched = exports.created = exports.getById = exports.getAll = void 0;
const ingredientControllers = require("./ingredients.controller");
const getAll = (req, res) => {
    ingredientControllers
        .getAllIngredients()
        .then((data) => {
        res.status(200).json(data);
    })
        .catch((err) => {
        res.status(400).json({ message: err.message });
    });
};
exports.getAll = getAll;
const getById = (req, res) => {
    const id = req.params.ingredient_id;
    ingredientControllers.getIngredientsById(id)
        .then((data) => {
        if (data) {
            res.status(200).json(data);
        }
        else {
            res.status(404).json({ message: "Invalid ID", id });
        }
    })
        .catch((err) => {
        res.status(400).json({ message: err.message });
    });
};
exports.getById = getById;
const created = (req, res) => {
    const data = req.body;
    if (data.name && data.typeId) {
        ingredientControllers.createIngredients(data)
            .then((data) => {
            res.status(201).json(data);
        })
            .catch((err) => {
            res.status(400).json({ message: err.message });
        });
    }
    else {
        res.status(400).json({
            message: "Missing Data",
            fields: {
                name: "string",
                typeId: "number",
                urlImg: "string",
            },
        });
    }
};
exports.created = created;
const patched = (req, res) => {
    const data = req.body;
    const id = req.params.ingredient_id;
    ingredientControllers.updateIngredient(id, data)
        .then((data) => {
        if (data[0]) {
            res
                .status(200)
                .json({ message: `Ingredient with ID: ${id} edited succesfully` });
        }
        else {
            res.status(404).json({ message: "Invalid ID", id });
        }
    })
        .catch((err) => {
        res.status(400).json({ message: err.message });
    });
};
exports.patched = patched;
const deleted = (req, res) => {
    const id = req.params.ingredient_id;
    ingredientControllers.deleteIngredient(id)
        .then((data) => {
        if (data) {
            res.status(204).json();
        }
        else {
            res.status(404).json({ message: "Invalid ID", id });
        }
    })
        .catch((err) => {
        res.status(400).json({ message: err.message });
    });
};
exports.deleted = deleted;
const postIngredientToUser = (req, res) => {
    const userId = req.user.id;
    const data = req.body;
    const ingredientId = req.params.ingredient_id;
    if (data.amount) {
        ingredientControllers.addIngredientToUser(data, userId, ingredientId)
            .then((data) => {
            res.status(201).json(data);
        })
            .catch((err) => {
            res.status(400).json({ message: err.message });
        });
    }
    else {
        res.status(400).json({
            message: "Missing Data",
            fields: {
                amount: "string",
            },
        });
    }
};
exports.postIngredientToUser = postIngredientToUser;
