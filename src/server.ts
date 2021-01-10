import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";
import * as session from "express-session";
import * as passport from "passport";
import { router } from "./routing";

const app = express();

app.use(session({
     resave: false,
     saveUninitialized: true,
     secret: 'SECRET'
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/', router);

app.listen(3000, () => {
     console.log(`Server is running in ${process.env.BACKEND_HOST}`)
})