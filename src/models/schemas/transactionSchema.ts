import {Schema, model} from "mongoose";

interface ITransaction {

    idUser: string;

    nameWallet: string;

    amount : number;

    Proceeds: number;

    categories: any;

    description?: string;

    date: {type:Date}


}

const transactionSchema = new Schema<ITransaction>({

    idUser: String,

    nameWallet: String,

    amount : Number,

    Proceeds: Number,

    categories: String,

    description: String,

    date: {type:Date}

})



const Transaction = model<ITransaction>('Product', transactionSchema);



export { Transaction };