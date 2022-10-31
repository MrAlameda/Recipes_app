import Category from "./Category.model"
import Ingredients from "./Ingredients.model"
import IngredientsRecipes from "./IngredientsRecipes.model"
import Instructions from "./instructions.model"
import Recipes from "./recipes.model"
import Types from "./Types.model"
import User from "./user.model"
import UserIngredients from "./UserIngredients.model"
import UserRecipes from "./UserRecipes.model"

const initModels = () => {
    // ! User
    User.hasMany(Recipes)
    Recipes.belongsTo(User)

    //* Users 1:M UserRecipes
    User.hasMany(UserRecipes)
    UserRecipes.belongsTo(User)

    //* Recipes 1:M UserRecipes
    Recipes.hasMany(UserRecipes)
    UserRecipes.belongsTo(Recipes)

    //* Users 1:M UserIngredients
    User.hasMany(UserIngredients)
    UserIngredients.belongsTo(User)

    //* Ingredients 1:M UserIngredients
    Ingredients.hasMany(UserIngredients)
    UserIngredients.belongsTo(Ingredients)

    //TODO
    //* Recipes M:1 Categories
    Category.hasMany(Recipes)
    Recipes.belongsTo(Category)

    //* Ingredients M:1 Types
    Types.hasMany(Ingredients)
    Ingredients.belongsTo(Types)

    //* Recipes 1:M RecipesIngredients
    Recipes.hasMany(IngredientsRecipes)
    IngredientsRecipes.belongsTo(Recipes)

    //* Ingredients 1:M RecipesIngredients
    Ingredients.hasMany(IngredientsRecipes)
    IngredientsRecipes.belongsTo(Ingredients)

    //* Recipes 1:M Instructions
    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)
}


export default initModels