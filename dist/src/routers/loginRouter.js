"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema_1 = require("../models/schemas/userSchema");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
router.get("/login", async (req, res) => {
    res.render("login");
});
router.post("/login", upload.none(), async (req, res) => {
    try {
        const user = await userSchema_1.UserModel.findOne({ username: req.body.username });
        if (user) {
            const comparePass = await bcrypt_1.default.compare(req.body.password, user.password);
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
            };
            const token = jsonwebtoken_1.default.sign(payload, '123456789', {
                expiresIn: 36000,
            });
            res.render("home", { token: token });
        }
        else {
            return res.json({ err: 'Sai tài khoản hặc mật khẩu' });
        }
    }
    catch (err) {
        return res.json({ err: err });
    }
});
exports.default = router;
//# sourceMappingURL=loginRouter.js.map