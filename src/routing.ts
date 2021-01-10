import * as express from "express";
import { AuthController } from "./controllers/auth.controller";
import { PassportController } from "./controllers/passport.controller";

export const router = express.Router();

router.get('/', (req, res) => res.send("Hello World"));

router.get('/auth/facebook/ok', PassportController.authFacebookOk);
router.get('/auth/facebook/error', PassportController.authFacebookError);
router.get('/auth/facebook', PassportController.authFacebook());
router.get('/auth/facebook/callback', PassportController.authFacebookCallback());
router.get('/auth/logout', AuthController.logout);