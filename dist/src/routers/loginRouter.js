"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const Process = __importStar(require("process"));
const upload = (0, multer_1.default)();
const app = (0, express_1.default)();
router.get("/login", async (req, res) => {
    res.render("login");
});
router.post("/login", upload.none(), async (req, res) => {
    try {
        const user = await userSchema_1.UserModel.findOne({ username: req.body.username });
        if (user) {
            bcrypt_1.default.compare(req.body.password, user.password, (err, same) => {
                if (same) {
                    let token = jsonwebtoken_1.default.sign({
                        iss: "Dang Quang",
                        sub: user._id,
                        iat: new Date().getTime()
                    }, Process.env.USER_CODE_SECRET);
                    res.cookie("authorization", "Bearer " + token, { signed: true });
                    res.render("homes");
                }
                else {
                    res.status(400).json({ message: 'cai mat khau sai' });
                }
            });
        }
        else {
            return res.json({ err: 'Sai tài khoản hặc mật khẩu' });
        }
    }
    catch (err) {
        return res.json({ err: err });
    }
});
router.get('/home', (req, res) => {
});
exports.default = router;
//# sourceMappingURL=loginRouter.js.map