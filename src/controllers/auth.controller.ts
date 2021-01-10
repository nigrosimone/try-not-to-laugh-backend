import {Request, Response, Next} from "express";

export class AuthController {
    static logout(req: Request, res: Response, next: Next) {
        req.logout();
        res.sendStatus(200);
    }
}