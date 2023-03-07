import {Router} from "express";
const walletRouters = Router();
import {Wallet} from "../models/schemas/wallerSchema";
import multer from "multer";
const upload = multer()

walletRouters.get('/create', (req, res)=>{
    res.render("listWaller");
});

walletRouters.post('/create', upload.none(), async (req, res)=>{
    try {
        const walletNew = new Wallet(req.body);
        console.log("body" , walletNew)
        const wallet = await walletNew.save();
        if(wallet){
            res.redirect("listWaller");
        }else {
            res.render("error");
        }
    }catch (err){
        res.render("error");
    }
});



export default walletRouters;