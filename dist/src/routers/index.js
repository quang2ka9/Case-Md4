"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginRouter_1 = __importDefault(require("./loginRouter"));
const registerRouters_1 = __importDefault(require("./registerRouters"));
const changePasswordRouter_1 = __importDefault(require("./changePasswordRouter"));
const homeRouter_1 = __importDefault(require("./homeRouter"));
const informationRouter_1 = __importDefault(require("./informationRouter"));
const updateUserRouter_1 = __importDefault(require("./updateUserRouter"));
const wallerRouter_1 = __importDefault(require("./wallerRouter"));
const wallerCreateRouter_1 = __importDefault(require("./wallerCreateRouter"));
const listWallerRouter_1 = __importDefault(require("./listWallerRouter"));
const router = (0, express_1.Router)();
router.use('/', loginRouter_1.default);
router.use('/', registerRouters_1.default);
router.use('/', changePasswordRouter_1.default);
router.use('/', homeRouter_1.default);
router.use('/', informationRouter_1.default);
router.use('/', updateUserRouter_1.default);
router.use('/', wallerRouter_1.default);
router.use('/', wallerCreateRouter_1.default);
router.use('/', listWallerRouter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map