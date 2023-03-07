import express from "express";
import Process from "process";
import {UserModel} from "../models/schemas/userSchema";
import jwt from "jsonwebtoken"
const router = express.Router();


router.get("/updateUser", async (req, res) => {
    let cook= req.signedCookies.authorization
    let token= cook.split(" ")[1]
    let userSub= jwt.verify(token,Process.env.USER_CODE_SECRET)
    let user= await UserModel.findOne({_id: userSub.sub})
    console.log(user)
    res.render("updateUser", {user: user});
})


router.post('/updateUser', async (req, res) => {

     let cook= req.signedCookies.authorization
     let token= cook.split(" ")[1]
     let userSub= jwt.verify(token,Process.env.USER_CODE_SECRET)
     let user= await UserModel.findOne({_id:userSub.sub})
     let id= user._id

    try {

        const user = await UserModel.findOne({ _id: id });
                    user.username= req.body.username;
                    user.age= req.body.age;
                    user.address= req.body.address;
                    user.gender= req.body.gender;
                    user.phone= req.body.phone;
                    user.role= req.body.role
        await user.save();

        if (user) {
            res.render("success");
        } else {
            res.render("error");
        }
    } catch (err) {
        res.render("error");
    }
});


export default router;