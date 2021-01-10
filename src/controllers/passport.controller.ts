import {Request, Response, Next} from "express";
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
        return passport.authenticate('facebook', { successRedirect: '/auth/facebook/ok', failureRedirect: '/auth/facebook/error'});
    }

    static authFacebookOk(req: Request, res: Response, next: Next) {
        if (req.isAuthenticated()) {
            req.session.save((err) => {
                if( err ){
                    PassportController.authFacebookError(req, res, next);
                    return;
                }
                res.redirect(process.env.FRONTEND_HOST + '/demo/facebook-login/ok');
            });
        } else {
            PassportController.authFacebookError(req, res, next);
        }
    }

    static authFacebookError(req: Request, res: Response, next: Next) {
        res.redirect(process.env.FRONTEND_HOST + '/demo/facebook-login/error');
    }

    static authFacebookProfile(req: Request, res: Response, next: Next) {
        if (req.isAuthenticated()) {
            res.send({user: req.user});
        } else {
            res.sendStatus(401);
        }
    }
}