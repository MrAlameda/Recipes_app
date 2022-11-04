

import passport from "passport"
import express from "express";
import authMiddleware from "../middleware/auth.middleware";
const router=express.Router()
authMiddleware(passport)

import * as recipeServices from "./recipes.services"

router.route('/')
    .get(recipeServices.getAll)
    .post(
        passport.authenticate('jwt', {session: false}),
        recipeServices.created
    )

router.route('/:recipe_id')
    .get(recipeServices.getById)
    .patch(
        passport.authenticate('jwt', {session: false}),
        recipeServices.patched
    )
    .delete(
        passport.authenticate('jwt', {session: false}),
        recipeServices.deleted
    )

export default router