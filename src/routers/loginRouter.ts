import express from "express";
const router = express.Router();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/schemas/userSchema';

import multer from 'multer';
import * as Process from "process";
import passport from "../middleware/passport";
const upload = multer();
const app= express();


router.get("/login", async (req, res) => {
    res.render("login")
})

router.post("/login", upload.none(), async (req, res) => {
    try {
        const user = await UserModel.findOne({ username: req.body.username });
        if (user) {
             bcrypt.compare(req.body.password, user.password,(err,same)=>{
                 if (same) {
                    let token = jwt.sign({
                        iss:"Dang Quang",
                        sub: user._id,
                        iat: new Date().getTime()
                    },Process.env.USER_CODE_SECRET)
                     res.cookie("authorization","Bearer "+ token,{signed:true})

                    res.render("homes")

                     // res.status(200).json({message:'login oke',token, user})
                 }else {

                     res.status(400).json({message:'cai mat khau sai'})
                 }
             });
        } else {
            return res.json({ err: 'Sai tài khoản hặc mật khẩu' });
        }
    } catch (err) {
        return res.json({ err: err })
    }
});



router.get('/home', (req, res) => {

})

// router.get('/private',(req,res,next) => {
//     try {
//         const token = req.params.token
//         const encode= jwt.verify(token,Process.env.USER_CODE_SECRET)
//         if (encode) {
//             next()
//         }
//     }catch (err) {
//         return res.json({ err:'loi qua loi'+ err})
//     }
// },(req,res,next)=>{
//     res.render('homes')
// })

export default router;