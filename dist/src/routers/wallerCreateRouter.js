"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const walletRouters = (0, express_1.Router)();
const wallerSchema_1 = require("../models/schemas/wallerSchema");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
walletRouters.get('/create', (req, res) => {
    res.render("listWaller");
});
walletRouters.post('/create', upload.none(), async (req, res) => {
    try {
        const walletNew = new wallerSchema_1.Wallet(req.body);
        console.log("body", walletNew);
        const wallet = await walletNew.save();
        if (wallet) {
            res.redirect("listWaller");
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
exports.default = walletRouters;
//# sourceMappingURL=wallerCreateRouter.js.map