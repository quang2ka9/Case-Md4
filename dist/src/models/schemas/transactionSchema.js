"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const mongoose_1 = require("mongoose");
const transactionSchema = new mongoose_1.Schema({
    idUser: String,
    nameWallet: String,
    amount: Number,
    Proceeds: Number,
    categories: String,
    description: String,
    date: { type: Date }
});
const Transaction = (0, mongoose_1.model)('Product', transactionSchema);
exports.Transaction = Transaction;
//# sourceMappingURL=transactionSchema.js.map