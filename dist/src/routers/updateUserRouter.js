"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const process_1 = __importDefault(require("process"));
const userSchema_1 = require("../models/schemas/userSchema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
router.get("/updateUser", async (req, res) => {
    let cook = req.signedCookies.authorization;
    let token = cook.split(" ")[1];
    let userSub = jsonwebtoken_1.default.verify(token, process_1.default.env.USER_CODE_SECRET);
    let user = await userSchema_1.UserModel.findOne({ _id: userSub.sub });
    console.log(user);
    res.render("updateUser", { user: user });
});
router.post('/updateUser', async (req, res) => {
    let cook = req.signedCookies.authorization;
    let token = cook.split(" ")[1];
    let userSub = jsonwebtoken_1.default.verify(token, process_1.default.env.USER_CODE_SECRET);
    let user = await userSchema_1.UserModel.findOne({ _id: userSub.sub });
    let id = user._id;
    try {
        const user = await userSchema_1.UserModel.findOne({ _id: id });
        user.username = req.body.username;
        user.age = req.body.age;
        user.address = req.body.address;
        user.gender = req.body.gender;
        user.phone = req.body.phone;
        user.role = req.body.role;
        await user.save();
        if (user) {
            res.render("success");
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
exports.default = router;
//# sourceMappingURL=updateUserRouter.js.map