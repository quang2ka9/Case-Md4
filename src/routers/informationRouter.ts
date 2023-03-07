import express from "express";
import Process from "process";
const router = express.Router();
import jwt from "jsonwebtoken";
import {UserModel} from "../models/schemas/userSchema"

router.get("/information", async (req, res) => {
    let cook= req.signedCookies.authorization
    let token= cook.split(" ")[1]

    let userSub= jwt.verify(token,Process.env.USER_CODE_SECRET);

    let user= await UserModel.findOne({_id: userSub.sub})
    res.render("information", {user: user});
})


export default router;