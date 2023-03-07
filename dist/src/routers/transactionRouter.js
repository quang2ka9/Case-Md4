"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TransactionRoutes = (0, express_1.Router)();
const Transaction_1 = require("../models/schemas/Transaction");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
TransactionRoutes.get('/createTransaction', (req, res) => {
    res.render("transaction");
});
TransactionRoutes.post('/createTransaction', upload.none(), async (req, res) => {
    try {
        const TransactionNew = new Transaction_1.Transaction(req.body);
        const transaction = await TransactionNew.save();
        if (transaction) {
            res.redirect("listTransaction");
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
TransactionRoutes.get('/listTransaction', async (req, res) => {
    try {
        let limit;
        let offset;
        if (!req.query.limit || !req.query.limit) {
            limit = 3;
            offset = 0;
        }
        else {
            limit = parseInt(req.query.limit);
            offset = parseInt(req.query.offset);
        }
        const transactions = await Transaction_1.Transaction.find().limit(limit).skip(limit * offset);
        ;
        res.render("listTransaction", { transactions: transactions });
    }
    catch (_a) {
        res.render("error");
    }
});
TransactionRoutes.post('/updateTransaction', async (req, res) => {
    try {
        const transaction = await Transaction_1.Transaction.findOne({ _id: req.body.id });
        transaction.idUser = req.body.idUser;
        transaction.nameWallet = req.body.nameWallet;
        transaction.moneyTrade = req.body.moneyTrade;
        transaction.nameTransaction = req.body.nameTransaction;
        transaction.status = req.body.status;
        await transaction.save();
        if (transaction) {
            res.render("success");
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
TransactionRoutes.get('/updateTransaction/:id', async (req, res) => {
    try {
        const transaction = await Transaction_1.Transaction.findOne({ _id: req.params.id });
        console.log(transaction, 'transaction');
        if (transaction) {
            res.render("updateTransaction", { transaction: transaction });
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
exports.default = TransactionRoutes;
//# sourceMappingURL=transactionRouter.js.map