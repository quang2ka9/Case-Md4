"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = void 0;
const mongoose_1 = require("mongoose");
const categoriesSchema = new mongoose_1.Schema({
    name: String,
    idUser: String,
    total: Number,
});
const Categories = (0, mongoose_1.model)('Product', categoriesSchema);
exports.Categories = Categories;
//# sourceMappingURL=categoriesSchema.js.map