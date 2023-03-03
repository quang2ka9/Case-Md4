"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
const userSchema_1 = require("../models/schemas/userSchema");
router.get('/register', (req, res) => {
    res.render("registerUser");
});
router.post('/register', upload.none(), async (req, res) => {
    try {
        const User = new userSchema_1.UserModel(req.body);
        const user = await User.save();
        if (user) {
            res.render('/login');
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
//# sourceMappingURL=registerRouter.js.map