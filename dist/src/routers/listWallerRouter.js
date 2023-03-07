"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const walletRouters = (0, express_1.Router)();
const wallerSchema_1 = require("../models/schemas/wallerSchema");
walletRouters.get('/listWaller', async (req, res) => {
    try {
        let limit;
        let offset;
        if (!req.query.limit || !req.query.limit) {
            limit = 1;
            offset = 0;
        }
        else {
            limit = parseInt(req.query.limit);
            offset = parseInt(req.query.offset);
        }
        const wallets = await wallerSchema_1.Wallet.find().limit(limit).skip(limit * offset);
        res.render("listWaller", { wallets: wallets });
    }
    catch (_a) {
        res.render("error");
    }
});
exports.default = walletRouters;
//# sourceMappingURL=listWallerRouter.js.map