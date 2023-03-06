// import { Request, Response } from 'express';
// import Wallet from '../models/schemas/wallet';
//
// export const getWallet = async (req: Request, res: Response) => {
//     const { userId } = req.params;
//     try {
//         const wallet = await Wallet.findOne({ user: userId });
//         res.render('demo', { wallet });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };
//
// export const addMoney = async (req: Request, res: Response) => {
//     const { userId } = req.params;
//     const { amount } = req.body;
//     try {
//         const wallet = await Wallet.findOneAndUpdate(
//             { user: userId },
//             { $inc: { balance: amount } },
//             { new: true }
//         );
//         res.render('demo', { wallet });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };


import { Request, Response } from 'express';
import WalletModel, { Wallet } from '../models/schemas/wallet';

class WalletController {
    public async getWallet(req: Request, res: Response): Promise<void> {
        try {
            const { userId } = req.params;
            const wallet: Wallet | null = await WalletModel.findOne({ userId });
            if (wallet) {
                res.redirect('demo')
                // res.status(200).json({ balance: wallet.balance });
            } else {
                res.status(404).json({ message: 'Wallet not found' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async addMoney(req: Request, res: Response): Promise<void> {
        try {
            const { userId } = req.params;
            const { amount } = req.body;
            const wallet: Wallet | null = await WalletModel.findOne({ userId });
            if (wallet) {
                wallet.balance += amount;
                await wallet.save();
                res.redirect('demo')
                // res.status(200).json({ balance: wallet.balance });
            } else {
                const newWallet: Wallet = await WalletModel.create({ userId, balance: amount });
                res.status(201).json({ balance: newWallet.balance });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}



export default new WalletController();