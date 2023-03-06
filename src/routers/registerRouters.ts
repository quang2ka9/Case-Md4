import express from "express";

const router = express.Router();
import bcrypt from 'bcrypt';
import {UserModel} from '../models/schemas/userSchema';


router.get("/register", async (req, res) => {
    res.render("register");
})
router.get("/viewInfor", async (req, res) => {
    res.render("information");
})
router.post("/register", async (req, res) => {
    const { username , password, age,address, gender, phone,role } = req.body
    console.log(req.body)
    const saltRounds = 10;
    try {
            const passwordHash = await bcrypt.hash(password, saltRounds);
            let userData = new UserModel({
                username,
                age,
                address,
                gender,
                phone,
                role,
                password: passwordHash
            })
            await UserModel.create(userData);
            res.redirect("/login");
    } catch (err) {
        res.redirect("/register");
    }
});
export default router;
