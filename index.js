import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"


import route from "./routers/userRouter.js"

const app = express();

app.use(bodyParser.json())
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then( ()=> {
    console.log("mongo database connected successfull");
    app.listen(PORT, ()=>{
        console.log(`Server in running on port ${PORT}`);
    })
}).catch((error)=> console.log("error from mongo database connection "+error))

app.use("/ourwebsite", route)