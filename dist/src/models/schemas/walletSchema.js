"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const mongoose_1 = require("mongoose");
const walletSchema = new mongoose_1.Schema({
    name: String,
    idUser: String,
    total: Number,
});
const Wallet = (0, mongoose_1.model)('Product', walletSchema);
exports.Wallet = Wallet;
//# sourceMappingURL=walletSchema.js.map