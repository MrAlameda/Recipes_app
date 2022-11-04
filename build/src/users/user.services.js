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
exports.updateMyUser = exports.deleteMyUser = exports.getMyUser = exports.userDelet = exports.userPatch = exports.userAdd = exports.userById = exports.allUsers = void 0;
const userController = __importStar(require("./user.controller"));
const allUsers = (req, res) => {
    userController.getAllUser()
        .then((result) => res.status(200).json(result))
        .catch((err) => { res.status(400).json({ message: "no hay nada", Error: err.message }); });
};
exports.allUsers = allUsers;
const userById = (req, res) => {
    const id = req.params.id;
    userController.getUserById(id)
        .then((result) => {
        res.status(200).json(result);
    })
        .catch((err) => {
        res.status(400).json({ message: "Id not found", Error: err.message });
    });
};
exports.userById = userById;
const userAdd = (req, res) => {
    const data = req.body;
    if (data.email
        && data.firstName
        && data.lastName
        && data.password) {
        userController.createUser(data)
            .then((result) => {
            res.status(200).json(result);
        })
            .catch((err) => {
            console.error(err);
        });
    }
    else {
        res.status(400).json({
            message: "hiciste algo mal",
            checa: {
                firstName: 'string',
                lastName: 'string',
                email: 'example@example.com',
                password: 'string'
            }
        });
    }
};
exports.userAdd = userAdd;
const userPatch = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    userController.updateUser(id, data)
        .then((data) => {
        if (data[0]) {
            res.status(200).json({ message: `User with id:${id} has ben modify` });
        }
        else {
            res.status(404).json({ message: "Invalid Id" });
        }
    })
        .catch((err) => {
        res.status(400).json({ message: err.message });
    });
};
exports.userPatch = userPatch;
const userDelet = (req, res) => {
    const id = req.params.id;
    userController.deleteUser(id)
        .then((data) => {
        if (data) {
            res.status(204).json(data);
        }
        else {
            res.status(404).json({ message: "invalid Id" });
        }
    })
        .catch((err) => {
        res.status(400).json({ message: err.message });
    });
};
exports.userDelet = userDelet;
const getMyUser = (req, res) => {
    const id = req.user.id;
    userController.getUserById(id)
        .then((result) => {
        res.status(200).json(result);
    })
        .catch((err) => {
        console.error(err);
    });
};
exports.getMyUser = getMyUser;
const deleteMyUser = (req, res) => {
    const id = req.user.id;
    userController.updateUser(id, { status: `inactive` })
        .then((result) => {
        res.status(204).json(result);
    })
        .catch((err) => {
        res.status(400).json({ message: err.message });
    });
};
exports.deleteMyUser = deleteMyUser;
const updateMyUser = (req, res) => {
    const id = req.user.id;
    const { firstName, lastName } = req.body;
    userController.updateUser(id, { firstName, lastName })
        .then(() => {
        res.status(202).json({ message: `todo bien c:` });
    })
        .catch((err) => {
        res.status(404).json({ message: err.message });
    });
};
exports.updateMyUser = updateMyUser;
