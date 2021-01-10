import * as passport from "passport";
import * as strategy from "passport-facebook";

// https://www.loginradius.com/blog/async/facebook-authentication-using-node-and-passport/

const FacebookStrategy = strategy.Strategy;

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: process.env.BACKEND_HOST + 'auth/facebook/callback',
            profileFields: ["email", "name"]
        },
        (accessToken, refreshToken, profile, done) => {
            const { email, first_name, last_name } = profile._json;
            const userData = {
                email,
                firstName: first_name,
                lastName: last_name
            };
            done(null, userData);
        }
    )
);

export class PassportController {

    static authFacebook(){
        return passport.authenticate('facebook', { scope: ['public_profile', 'email']});
    }

    static authFacebookCallback(){
        return passport.authenticate('facebook', { successRedirect: '/auth/profile', failureRedirect: '/auth/error'});
    }
}