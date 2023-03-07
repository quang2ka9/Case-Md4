import {Router} from "express";
const walletRouters = Router();
import {Wallet} from "../models/schemas/wallerSchema";

walletRouters.get('/listWaller', async (req, res)=>{
    try {
        let limit: number;
        let offset: number;
        if(!req.query.limit || !req.query.limit) {
            limit = 1;
            offset = 0;
        } else {
            limit = parseInt(req.query.limit as string);
            offset = parseInt(req.query.offset as string);
        }
        const wallets = await Wallet.find().limit(limit).skip(limit*offset);
        res.render("listWaller", { wallets: wallets });
    } catch {
        res.render("error");
    }
});

export default walletRouters;

