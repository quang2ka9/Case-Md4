import mongoose, { Document } from 'mongoose';
export interface WalletDocument extends Document {
    user: string;
    balance: number;
}
declare const Wallet: mongoose.Model<WalletDocument, {}, {}, {}, mongoose.Document<unknown, {}, WalletDocument> & Omit<WalletDocument & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default Wallet;
