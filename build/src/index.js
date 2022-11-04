"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const cors = require("cors");
//* init
const app = (0, express_1.default)();
//! routes
const auth_routes_1 = __importDefault(require("./auth/auth.routes"));
const user_routes_1 = __importDefault(require("./users/user.routes"));
const categories_routes_1 = __importDefault(require("./categories/categories.routes"));
const recipes_routes_1 = __importDefault(require("./recipes/recipes.routes"));
const ingredients_routes_1 = __importDefault(require("./ingredients/ingredients.routes"));
//! middalwere
app.use(express_1.default.json());
app.use(cors());
//! database
const db_config_1 = __importDefault(require("./utils/db.config"));
const initModels_1 = __importDefault(require("./models/initModels"));
db_config_1.default.authenticate()
    .then(() => {
    console.log('================//==================');
    console.log("database Aunthenticated");
    console.log('================//==================');
})
    .catch((err) => console.error(err.message));
db_config_1.default.sync()
    .then(() => {
    console.log('================//==================');
    console.log("database Synced");
    console.log('================//==================');
})
    .catch((err) => console.error(err.message));
(0, initModels_1.default)();
//! enruter
app.get("/", (req, res) => {
    res.status(200).json({
        message: "hola",
        port: `${config_1.default.port}`
    });
});
// //* routes 
app.use('/users', user_routes_1.default);
app.use('/auth', auth_routes_1.default);
app.use('/categories', categories_routes_1.default);
app.use('/recipes', recipes_routes_1.default);
app.use('/ingredients', ingredients_routes_1.default);
//* initServer 
app.listen(config_1.default.port, () => {
    console.log('====================================');
    console.log(`server listener in port:${config_1.default.port}`);
    console.log('====================================');
});
