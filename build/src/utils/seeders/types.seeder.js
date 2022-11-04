"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Types_model_1 = __importDefault(require("../../models/Types.model"));
Types_model_1.default.bulkCreate([
    { id: 1, name: 'Aceites y materias grasas' },
    { id: 2, name: 'Lacteos' },
    { id: 3, name: 'Legumbres' },
    { id: 4, name: 'Setas/Hongos' },
    { id: 5, name: 'Verduras' },
    { id: 6, name: 'Frutas' },
    { id: 7, name: 'Cereales, harinas y masas' },
    { id: 8, name: 'Marisco' },
    { id: 9, name: 'Carnes' },
    { id: 10, name: 'Bebidas' },
    { id: 11, name: 'Licores' },
    { id: 12, name: 'Especias' }
]);
