"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema_1 = require("../models/schemas/userSchema");
router.get("/register", async (req, res) => {
    res.render("register");
});
router.get("/viewInfor", async (req, res) => {
    res.render("information");
});
router.post("/register", async (req, res) => {
    const { username, password, age, address, gender, phone, role } = req.body;
    const saltRounds = 10;
    console.log(req.body);
    try {
        const passwordHash = await bcrypt_1.default.hash(password, saltRounds);
        let userData = new userSchema_1.UserModel({
            username,
            age,
            address,
            gender,
            phone,
            role,
            password: passwordHash
        });
        await userSchema_1.UserModel.create(userData);
        res.redirect("/login");
    }
    catch (err) {
        res.redirect("/register");
    }
});
exports.default = router;
//# sourceMappingURL=registerRouters.js.map