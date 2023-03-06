import {Router} from "express";
const productRouters = Router();
import {Product} from "../models/schemas/wallerSchema";

productRouters.get('/listWaller', async (req, res)=>{
    try {
        const products = await Product.find();
        console.log("abc", products);
        res.render("listWaller", {products: products});

    }catch {
        res.render("error");
    }
});

export default productRouters;