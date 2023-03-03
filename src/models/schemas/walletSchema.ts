import {Schema, model} from "mongoose";

interface IWallet {

    name: string;

    idUser:string;

    total : number;


}

const walletSchema = new Schema<IWallet>({

    name: String,

    idUser:String,

    total : Number,


})



const Wallet = model<IWallet>('Product', walletSchema);



export { Wallet };