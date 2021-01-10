import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";
import { json, urlencoded } from "body-parser";
import * as cookieParser from "cookie-parser";
import * as session from "express-session";
import * as FileStore from 'session-file-store';
import * as passport from "passport";
import * as cors from 'cors';
import { router } from "./routing";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(urlencoded({ extended: false }))
app.use(json());

app.use(session({
     name: 'sessid',
     resave: true,
     saveUninitialized: true,
     secret: 'ds4f5s4f5s4f5s4f5a8',
     store: new FileStore(session)()
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

app.listen(process.env.PORT, () => {
     console.log(`Server is running in ${process.env.BACKEND_HOST}`)
})