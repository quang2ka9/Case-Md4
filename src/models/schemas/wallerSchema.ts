import { Schema, model } from "mongoose";

interface IWallet {
    idUser: string,
    walletName: string,
    totalMoneyLeft: number,
}
const walletSchema = new Schema<IWallet>({
    idUser: String,
    walletName: String,
    totalMoneyLeft: Number,
})

const Wallet = model<IWallet>('Wallet', walletSchema);

export default Wallet;