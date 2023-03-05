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
router.post("/register", async (req, res) => {
    try {
        const user = await userSchema_1.UserModel.findOne({ username: req.body.username });
        if (!user) {
            const passwordHash = await bcrypt_1.default.hash(req.body.password, 10);
            let userData = {
                username: req.body.username,
                role: req.body.role,
                password: passwordHash
            };
            const newUser = await userSchema_1.UserModel.create(userData);
            res.json({ user: newUser, code: 200 });
            res.render("login");
        }
        else {
            res.json({ err: "User exited" });
        }
    }
    catch (err) {
        res.json({ err: err });
    }
});
exports.default = router;
//# sourceMappingURL=registerRouters.js.map