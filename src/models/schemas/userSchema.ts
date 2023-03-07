import { Schema, model } from "mongoose";


interface IUser {
    username?:{
        type :string,
        unique : true,
        required: true
    }
    password?: string;
    age?: number;
    address?: string;
    gender?: string;
    phone?: number;
    role?: {
        type : string,
        default: "user",
    }



}

const userSchema = new Schema<IUser>({

    username: String,
    password: String,
    age: Number,
    address: String,
    gender: String,
    phone: Number,
    role: String
})

const UserModel = model<IUser>('User', userSchema);

export { UserModel };
