"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouters = (0, express_1.Router)();
const wallerSchema_1 = require("../models/schemas/wallerSchema");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
productRouters.get('/create', (req, res) => {
    res.render("listWaller");
});
productRouters.post('/create', upload.none(), async (req, res) => {
    try {
        const productNew = new wallerSchema_1.Product(req.body);
        const product = await productNew.save();
        if (product) {
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
exports.default = productRouters;
//# sourceMappingURL=wallerCreateRouter.js.map