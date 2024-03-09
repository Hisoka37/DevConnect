import express from 'express';
import userRoutes from './routes/User.route.js';
import exploreRouter from './routes/explore.route.js';
import dotenv from "dotenv"
import cors from 'cors'


dotenv.config()
const app = express()
app.use(cors())

app.get('/', (req,res) => {
    res.send('Server is running')
})

app.use("/api/users", userRoutes)
app.use("/api/explore", exploreRouter)

app.listen(5000, () => {
    console.log("Server started on PORT: 5000");
})