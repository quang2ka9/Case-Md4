// import { Router } from 'express';
// import { getWallet, addMoney } from '../controllers/walletController';
//
// const router = Router();
//
// router.get('/wallet/:userId', getWallet);
// router.post('/wallet/:userId/add', addMoney);
//
// export default router;


import { Router } from 'express';
import WalletController from '../controllers/walletController';
import User from '../models/schemas/wallet'
const router: Router = Router();

router.get('/:userId', WalletController.getWallet);
router.post('/:userId', WalletController.addMoney);

router.put('/:userId', async (req, res) => {
    const { userId } = req.params;
    const { amount } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.balance += amount;
        await user.save();

        return res.redirect('demo');
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
});

export default router;



