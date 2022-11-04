
import * as categoryServices from "./categories.services"

import passport from "passport"
import express from "express";
import authMiddleware from "../middleware/auth.middleware";
// import adminValidate from "../middleware/admin.medddleware";
const router=express.Router()
authMiddleware(passport)



router.route("/")
  .get(categoryServices.getAll)
  .post(
    passport.authenticate("jwt", { session: false }),
    // adminValidate,
    categoryServices.posted
  );

router.route("/:id")
  .get(categoryServices.getById)
  .delete(
    passport.authenticate("jwt", { session: false }),
    // adminValidate,
    categoryServices.deleted
  ); 

export default router;