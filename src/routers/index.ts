import {Router} from "express";
import loginRouter from "./loginRouter";
import registerRouter from "./registerRouters";
import changePasswordRouter from "./changePasswordRouter";
import homeRouter from "./homeRouter";
import informationRouter from "./informationRouter"
import updateUserRouter from "./updateUserRouter";
import wallerRouter from "./wallerRouter";
import wallerCreateRouter from "./wallerCreateRouter";
import wallerRouters from "./listWallerRouter";


const router = Router();

router.use('/', loginRouter);
router.use('/', registerRouter);
router.use('/', changePasswordRouter);
router.use('/', homeRouter);
router.use('/', informationRouter);
router.use('/', updateUserRouter);
router.use('/', wallerRouter);
router.use('/', wallerCreateRouter);
router.use('/',  wallerRouters);



export default router;
