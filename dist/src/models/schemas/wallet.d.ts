import mongoose, { Document } from 'mongoose';
export interface Wallet extends Document {
    userId: string;
    balance: number;
}
declare const _default: mongoose.Model<Wallet, {}, {}, {}, mongoose.Document<unknown, {}, Wallet> & Omit<Wallet & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default _default;
