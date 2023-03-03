"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletSchema = void 0;
const mongoose_1 = require("mongoose");
const walletSchema = new mongoose_1.Schema({
    name: String,
    total: Number
});
exports.walletSchema = walletSchema;
const Product = (0, mongoose_1.model)('Product', walletSchema);
//# sourceMappingURL=walletSchema.js.map