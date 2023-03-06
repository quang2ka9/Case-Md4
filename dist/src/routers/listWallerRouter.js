"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouters = (0, express_1.Router)();
const wallerSchema_1 = require("../models/schemas/wallerSchema");
productRouters.get('/listWaller', async (req, res) => {
    try {
        const products = await wallerSchema_1.Product.find();
        console.log("abc", products);
        res.render("listWaller", { products: products });
    }
    catch (_a) {
        res.render("error");
    }
});
exports.default = productRouters;
//# sourceMappingURL=listWallerRouter.js.map