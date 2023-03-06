// import mongoose, { Document } from 'mongoose';
//
// export interface WalletDocument extends Document {
//     user: string;
//     balance: number;
// }
//
// const WalletSchema = new mongoose.Schema(
//     {
//         user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//         balance: { type: Number, required: true },
//     },
//     { timestamps: true }
// );
//
// const Wallet = mongoose.model<WalletDocument>('Wallet', WalletSchema);
//
// export default Wallet;




import mongoose, { Document, Schema } from 'mongoose';

export interface Wallet extends Document {
    userId: string;
    balance: number;
}

const walletSchema: Schema = new Schema({
    userId: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    }
});

export default mongoose.model<Wallet>('Wallet', walletSchema);