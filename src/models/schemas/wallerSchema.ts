import {Schema, model} from "mongoose";

interface IProduct{
    name: string;
    money: number
}

const productSchema = new Schema<IProduct>({
    name: String,
    money: Number

})

const Product = model<IProduct>('Product', productSchema);

export {Product};