"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_1 = __importDefault(require("../models/schemas/wallet"));
class WalletController {
    async getWallet(req, res) {
        try {
            const { userId } = req.params;
            const wallet = await wallet_1.default.findOne({ userId });
            if (wallet) {
                res.redirect('demo');
            }
            else {
                res.status(404).json({ message: 'Wallet not found' });
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async addMoney(req, res) {
        try {
            const { userId } = req.params;
            const { amount } = req.body;
            const wallet = await wallet_1.default.findOne({ userId });
            if (wallet) {
                wallet.balance += amount;
                await wallet.save();
                res.redirect('demo');
            }
            else {
                const newWallet = await wallet_1.default.create({ userId, balance: amount });
                res.status(201).json({ balance: newWallet.balance });
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.default = new WalletController();
//# sourceMappingURL=walletController.js.map