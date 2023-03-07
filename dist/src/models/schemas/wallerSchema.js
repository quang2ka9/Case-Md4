"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    nameWallet: String,
    money: Number
});
const Wallet = (0, mongoose_1.model)('Wallet', productSchema);
exports.Wallet = Wallet;
//# sourceMappingURL=wallerSchema.js.map