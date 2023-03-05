import express from "express";
const router = express.Router();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/schemas/userSchema';

import multer from 'multer';
const upload = multer();


router.get("/login", async (req, res) => {
    res.render("login")
})

router.post("/login", upload.none(), async (req, res) => {
    try {
        const user = await UserModel.findOne({ username: req.body.username });
        if (user) {
            const comparePass = await bcrypt.compare(req.body.password, user.password);
            if (!comparePass) {
                return Promise.reject({
                    code: 404,
                    message: "PASSWORD_NOT_VALID",
                });
            }
            let payload = {
                user_id: user["id"],
                username: user["username"],
                role: user["role"]

            }

            const token = jwt.sign(payload, '123456789', {
                expiresIn: 36000,
            });
            res.render("homes", {token: token});
        } else {
            return res.json({ err: 'Sai tài khoản hặc mật khẩu' });
        }
    } catch (err) {
        return res.json({ err: err })
    }
});

export default router;