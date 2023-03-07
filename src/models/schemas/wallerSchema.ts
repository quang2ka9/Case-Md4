import {Schema, model} from "mongoose";

interface IWallet{
    nameWallet: string;
    money: number
}

const productSchema = new Schema<IWallet>({
    nameWallet: String,
    money: Number

})

const Wallet = model<IWallet>('Wallet', productSchema);

export {Wallet};