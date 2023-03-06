"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const walletController_1 = __importDefault(require("../controllers/walletController"));
const wallet_1 = __importDefault(require("../models/schemas/wallet"));
const router = (0, express_1.Router)();
router.get('/:userId', walletController_1.default.getWallet);
router.post('/:userId', walletController_1.default.addMoney);
router.put('/:userId', async (req, res) => {
    const { userId } = req.params;
    const { amount } = req.body;
    try {
        const user = await wallet_1.default.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.balance += amount;
        await user.save();
        return res.redirect('demo');
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
});
exports.default = router;
//# sourceMappingURL=walletDemo.js.map