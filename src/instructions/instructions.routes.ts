import passport from "passport"
import express from "express";
import authMiddleware from "../middleware/auth.middleware";
// import adminValidate from "../middleware/admin.medddleware";
const router=express.Router()
authMiddleware(passport)

import * as instructionServices from "./instructions.services"



router.route('/')
.get(instructionServices.getAll)
.post(
    passport.authenticate('jwt', {session: false}),
    instructionServices.posted
)

router.route('/:instruction_id')
.get(instructionServices.getById)
.patch(
    passport.authenticate('jwt', {session: false}),
    instructionServices.patched
)
.delete(
    passport.authenticate('jwt', {session: false}),
    instructionServices.deleted
)
