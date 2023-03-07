"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    idUser: String,
    nameWallet: String,
    moneyTrade: Number,
    nameTransaction: String,
    status: String
});
const Transaction = (0, mongoose_1.model)('Transaction', productSchema);
exports.Transaction = Transaction;
//# sourceMappingURL=Transaction.js.map