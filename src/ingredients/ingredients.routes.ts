import passport from "passport"
import express from "express";
import authMiddleware from "../middleware/auth.middleware";
// import adminValidate from "../middleware/admin.medddleware";
const router=express.Router()
authMiddleware(passport)

import * as ingredientServices from "./ingredients.services"


router.route('/')
    .get(ingredientServices.getAll)
    .post(
        passport.authenticate('jwt', {session: false}),
        // adminValidate,
        ingredientServices.created
    )

router.route('/:ingredient_id')
    .get(ingredientServices.getById)
    .patch(
        passport.authenticate('jwt', {session: false}),
        // adminValidate,
        ingredientServices.patched
    )
    .delete(
        passport.authenticate('jwt', {session: false}),
        // adminValidate,
        ingredientServices.deleted
    )

router.post('/:ingredient_id/add_to_user', 
        passport.authenticate('jwt', {session: false}),
        ingredientServices.postIngredientToUser
)
export default router