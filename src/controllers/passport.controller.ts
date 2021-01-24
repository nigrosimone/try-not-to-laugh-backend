import { Request, Response, Next } from "express";
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
            callbackURL: process.env.BACKEND_HOST + 'api/auth/facebook/callback',
            profileFields: ["id", "email", "name"]
        },
        (accessToken, refreshToken, profile, done) => {
            const { email, first_name, last_name, id } = profile._json;
            const userData = {
                email,
                firstName: first_name,
                lastName: last_name,
                id: id,
                accessToken: accessToken
            };
            done(null, userData);
        }
    )
);

const FRONT_END_LOGIN = process.env.FRONTEND_HOST + 'login';

export class PassportController {

    static authFacebook() {
        return passport.authenticate('facebook', { scope: ['public_profile','user_friends' ,'email' ] });
    }

    static authFacebookCallback() {
        return passport.authenticate('facebook', { successRedirect: '/api/auth/facebook/ok', failureRedirect: '/api/auth/facebook/error' });
    }

    static authFacebookOk(req: Request, res: Response, next: Next) {
        if (req.isAuthenticated()) {
            res.redirect(FRONT_END_LOGIN);
        } else {
            PassportController.authFacebookError(req, res, next);
        }
    }

    static authFacebookError(req: Request, res: Response, next: Next) {
        res.redirect(FRONT_END_LOGIN);
    }

    static authFacebookProfile(req: Request, res: Response, next: Next) {
        if (req.isAuthenticated()) {
            res.send({ data: req.user });
        } else {
            res.sendStatus(401);
        }
    }
}