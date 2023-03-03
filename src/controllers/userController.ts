import {Request, Response} from "express";
import {User} from "../models/schemas/userSchema"

class UserController{
    constructor(){
    }
    showFormLogin(req:Request, res:Response){
        res.render('login')
    }
    login(req:Request, res:Response){

    }
    register(req:Request, res:Response){

    }

}
export default new UserController();