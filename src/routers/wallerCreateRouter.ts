import {Router} from "express";
const productRouters = Router();
import {Product} from "../models/schemas/wallerSchema";
import multer from "multer";
const upload = multer()

productRouters.get('/create', (req, res)=>{
    res.render("wallerCreate");
});

productRouters.post('/create', upload.none(), async (req, res)=>{
    try {
        const productNew = new Product(req.body);
        const product = await productNew.save();
        if(product){
            res.redirect("listWaller");
        }else {
            res.render("error");
        }
    }catch (err){
        res.render("error");
    }
});



export default productRouters;