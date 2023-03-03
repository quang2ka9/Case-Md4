"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionSchema = void 0;
const mongoose_1 = require("mongoose");
const transactionSchema = new mongoose_1.Schema({
    name: String,
    total: Number
});
exports.transactionSchema = transactionSchema;
const Product = (0, mongoose_1.model)('Product', transactionSchema);
//# sourceMappingURL=transactionSchema.js.map