"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const process_1 = __importDefault(require("process"));
const router = express_1.default.Router();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSchema_1 = require("../models/schemas/userSchema");
router.get("/information", async (req, res) => {
    let cook = req.signedCookies.authorization;
    let token = cook.split(" ")[1];
    let userSub = jsonwebtoken_1.default.verify(token, process_1.default.env.USER_CODE_SECRET);
    let user = await userSchema_1.UserModel.findOne({ _id: userSub.sub });
    res.render("information", { user: user });
});
exports.default = router;
//# sourceMappingURL=informationRouter.js.map