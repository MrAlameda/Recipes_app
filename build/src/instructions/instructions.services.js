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
exports.deleteInstruction = exports.patchInstruction = exports.posted = exports.getById = exports.getAll = void 0;
const instructionControllers = __importStar(require("./instructions.controller"));
const getAll = (req, res) => {
    instructionControllers.getAllInstructions()
        .then(data => {
        res.status(200).json(data);
    })
        .catch(err => {
        res.status(400).json({ message: err.message });
    });
};
exports.getAll = getAll;
const getById = (req, res) => {
    const id = req.params.instruction_id;
    instructionControllers.getInstructionsById(id)
        .then(data => {
        if (data) {
            res.status(200).json(data);
        }
        else {
            res.status(404).json({ message: 'Invalid ID', id });
        }
    })
        .catch(err => {
        res.status(400).json({ message: err.message });
    });
};
exports.getById = getById;
const posted = (req, res) => {
    const data = req.body;
    if (data.description && data.step && data.recipeId) {
        instructionControllers.createInstructions(data)
            .then(data => {
            res.status(201).json(data);
        })
            .catch(err => {
            res.status(400).json({ message: err.message });
        });
    }
    else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                description: 'string',
                step: 'number',
                recipeId: 'uuid'
            }
        });
    }
};
exports.posted = posted;
const patchInstruction = (req, res) => {
    const { description, step, recipeId } = req.body;
    const id = req.params.instruction_id;
    instructionControllers.updateInstructions(id, { description, step, recipeId })
        .then(data => {
        if (data[0]) {
            res.status(200).json({ message: `Instruction with ID: ${id} edited succesfully` });
        }
        else {
            res.status(404).json({ message: 'Invalid ID', id });
        }
    })
        .catch(err => {
        res.status(400).json({ message: err.message });
    });
};
exports.patchInstruction = patchInstruction;
const deleteInstruction = (req, res) => {
    const id = req.params.instruction_id;
    instructionControllers.deleteInstructions(id)
        .then(data => {
        if (data) {
            res.status(204).json();
        }
        else {
            res.status(404).json({ message: 'Invalid ID', id });
        }
    })
        .catch(err => {
        res.status(400).json({ message: err.message });
    });
};
exports.deleteInstruction = deleteInstruction;
