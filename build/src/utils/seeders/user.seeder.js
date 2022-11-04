"use strict";
// const uuid = require('uuid')
// const {faker} = require('@faker-js/faker')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../../models/user.model"));
/* for(let i = 0; i < 10; i++){
    Users.create(
        {
            id: uuid.v4(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: 'root',
            phone: faker.phone.number(),
            birthday: faker.date.birthdate()
        }
    )
} */
user_model_1.default.create({
    id: '39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9',
    firstName: 'Admin',
    lastName: 'Root',
    email: 'admin@admin.com',
    password: 'root',
    role: 'admin',
    phone: '12341234',
    birthday: '2000/10/22'
});
