import passport from "passport";
import {UserModel} from "../models/schemas/userSchema";
import LocalStrategy from 'passport-local';


passport.serializeUser((user, done)=>{
    done(null, user);
});

passport.deserializeUser(function (user, done){
    console.log(1)
    done(null, user);

});

passport.use('local', new LocalStrategy(async (email, password, done)=>{
    const user = await UserModel.findOne({email:email});
    if(!user){
        return done(null, false);
    }else {
        if(user.password === password){
            return done(null, user);
        }else {
            return done(null, false);
        }
    }
}));

export default passport;