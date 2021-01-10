import {Request, Response, Next} from "express";

export class AuthController {
    static profile(req: Request, res: Response, next: Next) {
        if (req.isAuthenticated()) {
            res.send(req.user);
        } else {
            res.sendStatus(401);
        }
    }

    static error(req: Request, res: Response, next: Next) {
        res.sendStatus(401);
    }

    static logout(req: Request, res: Response, next: Next) {
        req.logout();
        res.sendStatus(200);
    }
}