import express from "express";
const router = express.Router();
import {UserModel} from "../models/schemas/userSchema";

router.get("/ChangePassword", async (req, res) => {
    res.render("changePassword");
})

router.post("/ChangePassword/:id", async (req, res) => {
    // const {currentPassword, newPassword, confirmPassword} = req.body;
    //
    // const user = await UserModel.findById({ _id: req.params.id});
    // if (!user) {
    //     return res.status(401).json({message: "User not found"});
    // }
    //
    // const isPasswordValid = await user.checkPassword(currentPassword);
    // if (!isPasswordValid) {
    //     return res.status(401).json({message: "Current password is incorrect"});
    // }
    //
    // if (newPassword !== confirmPassword) {
    //     return res.status(400).json({message: "New password and confirm password do not match"});
    // }
    //
    // user.password = newPassword;
    // await user.save();
    //
    // return res.status(200).json({message: "Password changed successfully"});
})


export default router;