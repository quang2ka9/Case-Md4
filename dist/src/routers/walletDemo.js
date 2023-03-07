"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const walletController_1 = require("../controllers/walletController");
const router = (0, express_1.Router)();
router.get('/wallet/:userId', walletController_1.getWallet);
router.post('/wallet/:userId/add', walletController_1.addMoney);
exports.default = router;
//# sourceMappingURL=walletDemo.js.map