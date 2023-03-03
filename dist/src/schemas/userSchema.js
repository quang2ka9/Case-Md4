"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    address: String,
    phoneNumber: Number,
    email: String,
    password: String
});
exports.userSchema = userSchema;
const Product = (0, mongoose_1.model)('Product', userSchema);
//# sourceMappingURL=userSchema.js.map