import express from "express";
const router = express.Router();
import {ProductModel} from '../models/schemas/product';
import {auth} from '../middleware/register'
import multer from 'multer';

const upload = multer();

router.use("/product", upload.none(), auth)

router.get("/create", async (req, res) => {
    res.render("create");
})

router.post("/product/create", async (req: any, res) => {
    try {
        const user = req.decoded;
        if (user.role !== "admin") {
            res.render("error");
            return;
        }
        {
            const product = await ProductModel.findOne({name: req.body.name});
            if (!product) {
                let productData = {
                    name: req.body.name,
                    price: req.body.price,
                    category: req.body.category,

                }
                const productNew = await ProductModel.create(productData);
                res.render("success")
            } else {
                res.json({err: "Product exited"})
            }
        }
    } catch (err) {
        res.json({err: err})
    }
});


export default router;

