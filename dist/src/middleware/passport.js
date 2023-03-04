"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const userSchema_1 = require("../models/schemas/userSchema");
const passport_local_1 = __importDefault(require("passport-local"));
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser(function (user, done) {
    done(null, user);
});
passport_1.default.use('local', new passport_local_1.default(async (email, password, done) => {
    const user = await userSchema_1.UserModel.findOne({ email: email });
    if (!user) {
        return done(null, false);
    }
    else {
        if (user.password === password) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    }
}));
exports.default = passport_1.default;
//# sourceMappingURL=passport.js.map