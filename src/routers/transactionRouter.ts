import { Router } from 'express';
const TransactionRoutes = Router();
import { Transaction } from "../models/schemas/Transaction";
import multer from 'multer';
import {Wallet} from "../models/schemas/wallerSchema";
const upload = multer();

TransactionRoutes.get('/createTransaction', (req, res) => {
    res.render("transaction");

});

TransactionRoutes.post('/createTransaction', upload.none(), async (req, res) => {
    try {
        const TransactionNew = new Transaction(req.body);
        const transaction = await TransactionNew.save();
        if (transaction) {
            res.redirect("listTransaction");
        } else {
            res.render("error");
        }
    } catch (err) {
        res.render("error");
    }
});





TransactionRoutes.get('/listTransaction', async (req, res) => {
    try {
        let limit: number;
        let offset: number;
        if(!req.query.limit || !req.query.limit) {
            limit = 3;
            offset = 0;
        } else {
            limit = parseInt(req.query.limit as string);
            offset = parseInt(req.query.offset as string);
        }
        const transactions = await Transaction.find().limit(limit).skip(limit*offset);;
        res.render("listTransaction", { transactions: transactions });
    } catch {
        res.render("error");
    }
});





TransactionRoutes.post('/updateTransaction', async (req, res) => {
    try {
        const transaction = await Transaction.findOne({ _id: req.body.id });
        transaction.idUser = req.body.idUser;
        transaction.nameWallet = req.body.nameWallet;
        transaction.moneyTrade = req.body.moneyTrade;
        transaction.nameTransaction = req.body.nameTransaction;
        transaction.status = req.body.status;
        await transaction.save();
        if (transaction) {
            res.render("success");
        } else {
            res.render("error");
        }
    } catch (err) {
        res.render("error");
    }
});






TransactionRoutes.get('/updateTransaction/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findOne({ _id: req.params.id });
        console.log(transaction, 'transaction')
        if (transaction) {
            res.render("updateTransaction", {transaction: transaction})
        } else {
            res.render("error");
        }
    } catch (err) {
        res.render("error");
    }
});




// TransactionRoutes.delete('/deleteTransaction/:id', async (req, res) => {
//     try {
//         const transaction = await Transaction.findOne({ _id: req.params.id });
//         if (transaction) {
//             await transaction.remos();
//             res.status(200).json({ message: "success" });
//         } else {
//             res.render("error");
//         }
//     } catch (err) {
//         res.render("error");
//     }
// });



export default TransactionRoutes;