"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
const express_1 = require("express");
const userRouter_1 = require("./userRouter");
exports.routers = (0, express_1.Router)();
exports.routers.get('/', userRouter_1.userRouter);
exports.routers.get('/home');
//# sourceMappingURL=index.js.map