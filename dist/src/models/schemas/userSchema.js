"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: String,
    password: String,
    age: Number,
    address: String,
    gender: String,
    phone: Number,
    role: String
});
const UserModel = (0, mongoose_1.model)('UserModel', userSchema);
exports.UserModel = UserModel;
//# sourceMappingURL=userSchema.js.map