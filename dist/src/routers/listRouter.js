"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const product_1 = require("../models/schemas/product");
router.get("/list", async (req, res) => {
    const products = await product_1.ProductModel.find();
    res.render("list", { products: products });
});
exports.default = router;
//# sourceMappingURL=listRouter.js.map