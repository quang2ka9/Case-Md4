import {Router} from "express";
import loginRouter from "./loginRouter";
import registerRouter from "./registerRouters";
import changePasswordRouter from "./changePasswordRouter";
import homeRouter from "./homeRouter";
import listRouter from "./listRouter";
import productRouter from "./productRouter";
import informationRouter from "./informationRouter"
import updateUserRouter from "./updateUserRouter";
import wallerRouter from "./wallerRouter";

const router = Router();

router.use('/', loginRouter);
router.use('/', registerRouter);
router.use('/', changePasswordRouter);
router.use('/', homeRouter);
router.use('/', listRouter);
router.use('/', productRouter);
router.use('/', informationRouter);
router.use('/', updateUserRouter);
router.use('/', wallerRouter);


export default router;
