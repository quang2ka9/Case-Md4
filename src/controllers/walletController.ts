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