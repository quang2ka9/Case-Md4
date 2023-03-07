import {Router} from "express";
const productRouters = Router();
import {Product} from "../models/schemas/wallerSchema";

productRouters.get('/listWaller', async (req, res)=>{
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
        const products = await Product.find().limit(limit).skip(limit*offset);;
        res.render("listWaller", { products: products });
    } catch {
        res.render("error");
    }
});

export default productRouters;

