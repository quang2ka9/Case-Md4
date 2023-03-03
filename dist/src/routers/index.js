"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginRouter_1 = __importDefault(require("./loginRouter"));
const registerRouter_1 = __importDefault(require("./registerRouter"));
const router = (0, express_1.Router)();
router.use('/', loginRouter_1.default);
router.use('/register', registerRouter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map