import express from 'express';
import userRoutes from './routes/User.route.js';
import authRoutes from './routes/auth.route.js';
import exploreRouter from './routes/explore.route.js';
import dotenv from "dotenv"
import cors from 'cors'
import connectMongoDB from './db/connectMongo.js';
import "./passport/github.auth.js"
import passport from 'passport';
import session from 'express-session';
 



dotenv.config()
const app = express()

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/explore", exploreRouter)

app.listen(5000, () => {
    console.log("Server started on PORT: 5000");
    connectMongoDB()
})