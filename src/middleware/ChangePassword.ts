import { Request, Response } from 'express';
import {UserModel} from '../models/schemas/userSchema';

export const getChangePassword = (req: Request, res: Response) => {
    res.render('change-password');
};

export const postChangePassword = async (req: Request, res: Response) => {
    // const { username, oldPassword, newPassword } = req.body;
    //
    // try {
    //     const user = await UserModel.findOne({ username });
    //
    //     if (!user) {
    //         return res.status(400).json({ message: 'User not found' });
    //     }
    //
    //     const isMatch = await user.comparePassword(oldPassword);
    //
    //     if (!isMatch) {
    //         return res.status(400).json({ message: 'Invalid password' });
    //     }
    //
    //     user.password = newPassword;
    //     await user.save();
    //
    //     return res.redirect('/login');
    // } catch (error) {
    //     console.log(error);
    //     return res.status(500).json({ message: 'Server error' });
    // }
};