import express from "express";
const router = express.Router();

import { ProductModel } from '../models/schemas/product';


router.get("/list", async (req, res) => {
    const products = await ProductModel.find();
    res.render("list", {products: products});
})


export default router;