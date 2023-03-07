import {Schema, model} from "mongoose";

interface ITransaction {

    idUser: string;
    nameWallet: string;
    moneyTrade: number;
    nameTransaction: string
    status: string
}

const productSchema = new Schema<ITransaction>({

    idUser: String,
    nameWallet: String,
    moneyTrade: Number,
    nameTransaction: String,
    status: String

})

const Transaction = model<ITransaction>('Transaction', productSchema);

export {Transaction};