"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const sumar = (a, b) => a + b;
(0, mocha_1.describe)("test de la funcion sumar", () => {
    (0, mocha_1.it)("deberia retornar 12 cuando se sumen", (done) => {
        const response = sumar(4, 8);
        chai_1.assert.equal(response, 12);
        done();
    });
    (0, mocha_1.it)("deberia retornar 12 cuando se sumen", (done) => {
        const response = sumar(3, 10);
        chai_1.assert.equal(response, 12);
        done();
    });
});
