import express from "express";
const router = express.Router();
import bcrypt from 'bcrypt';
import { UserModel } from '../models/schemas/userSchema';


router.get("/register", async (req, res) => {
    res.render("register");
})
router.post("/register", async (req, res) => {
    try {
        const user = await UserModel.findOne({ username: req.body.username });
        if (!user) {
            const passwordHash = await bcrypt.hash(req.body.password, 10);
            let userData = {
                username: req.body.username,
                role: req.body.role,
                password: passwordHash
            }
            const newUser = await UserModel.create(userData);
            res.json({ user: newUser, code: 200 });
            res.render("login");
        } else {
            res.json({ err: "User exited" })
        }
    } catch (err) {
        res.json({ err: err })
    }
});
export default router;
