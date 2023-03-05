"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const product_1 = require("../models/schemas/product");
const register_1 = require("../middleware/register");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
router.use("/product", upload.none(), register_1.auth);
router.get("/create", async (req, res) => {
    res.render("create");
});
router.post("/product/create", async (req, res) => {
    try {
        const user = req.decoded;
        if (user.role !== "admin") {
            res.render("error");
            return;
        }
        {
            const product = await product_1.ProductModel.findOne({ name: req.body.name });
            if (!product) {
                let productData = {
                    name: req.body.name,
                    price: req.body.price,
                    category: req.body.category,
                };
                const productNew = await product_1.ProductModel.create(productData);
                res.render("success");
            }
            else {
                res.json({ err: "Product exited" });
            }
        }
    }
    catch (err) {
        res.json({ err: err });
    }
});
exports.default = router;
//# sourceMappingURL=productRouter.js.map