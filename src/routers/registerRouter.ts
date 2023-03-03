import express from "express";
const router = express.Router();
import multer from 'multer';
const upload = multer();
import passport from "passport";
import {UserModel} from "../models/schemas/userSchema";

router.get('/register', (req, res) => {
    res.render("registerUser");
});

router.post('/register', upload.none(), async (req, res) => {
    try {
        const User = new UserModel(req.body);
        const user = await User.save();
        if (user) {
            res.render('/login');
        } else {
            res.render("error");
        }
    } catch (err) {
        res.render("error");
    }
});

export default router;
