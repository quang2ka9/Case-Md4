import {Schema, model} from "mongoose";

interface ICategories{

    name: string;

    idUser:string;

    total : number;


}

const categoriesSchema = new Schema<ICategories>({

    name: String,

    idUser:String,

    total : Number,


})



const Categories = model<ICategories>('Product', categoriesSchema);



export { Categories };