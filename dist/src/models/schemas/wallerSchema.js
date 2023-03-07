"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: String,
    money: Number
});
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.Product = Product;
//# sourceMappingURL=wallerSchema.js.map