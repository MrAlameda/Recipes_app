import passport from "passport"
import express from "express";
import authMiddleware from "../middleware/auth.middleware";
// import adminValidate from "../middleware/admin.medddleware";
const router=express.Router()
authMiddleware(passport)

import * as typeServices from "./type.services"


router.route("/")
  .get(typeServices.getAllTypes)
  .post(
    passport.authenticate("jwt", { session: false }),
    // adminValidate,
    typeServices.postType
  ); 

router.route("/:id")
  .get(typeServices.getTypeById)
  .delete(
    passport.authenticate("jwt", { session: false }),
    // adminValidate,
    typeServices.deleteType
  ); 

  export default router