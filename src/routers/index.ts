import {Router} from "express";
import loginRouter from "./loginRouter";
import registerRouter from "./registerRouter";

const router = Router();

router.use('/', loginRouter);
router.use('/register', registerRouter);


export default router;
