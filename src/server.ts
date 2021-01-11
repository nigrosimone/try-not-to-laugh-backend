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
import * as path from "path";
import * as fs from "fs";

const app = express();

app.enable('trust proxy');

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(urlencoded({ extended: false }))
app.use(json());

app.use(session({
     name: 'sessid',
     resave: true,
     saveUninitialized: true,
     secret: 'ds4f5s4f5s4f5s4f5a8',
     store: new FileStore(session)(),
     cookie: process.env.BACKEND_HOST.indexOf('.herokuapp.com') !== -1 ? { domain: 'try-not-to-laugh.herokuapp.com', secure: true } : { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());

const staticRoot = path.join(path.dirname(__dirname), 'public');
app.use((req, res, next) => {
     //if the request is not html then move along
     const accept = req.accepts('html', 'json', 'xml');
     if (accept !== 'html') {
         return next();
     }
     // if the request has a '.' assume that it's for a file, move along
     const ext = path.extname(req.path);
     if (ext !== '') {
         return next();
     }
     // api path
     if( req.path.indexOf('api/') !== -1 ){
          return next();
     }
     fs.createReadStream(path.join(staticRoot, 'index.html')).pipe(res);
});
app.use(express.static(staticRoot));


app.use('/api', router);
router.get('/', (req, res) => res.send("Hello backend"));

app.listen(process.env.PORT, () => {
     console.log(`Server is running in ${process.env.BACKEND_HOST}`)
})