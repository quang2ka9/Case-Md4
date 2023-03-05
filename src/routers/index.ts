import {Router} from "express";
import loginRouter from "./loginRouter";
import registerRouter from "./registerRouters";
import changePasswordRouter from "./changePasswordRouter";
import homeRouter from "./homeRouter";
import listRouter from "./listRouter";
import productRouter from "./productRouter";

const router = Router();

router.use('/', loginRouter);
router.use('/', registerRouter);
router.use('/', changePasswordRouter);
router.use('/', homeRouter);
router.use('/', listRouter);
router.use('/', productRouter);


export default router;
