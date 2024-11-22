import express from "express"
import { registrationUser } from "../controller/authentication.js";
import { loginUserAuth } from "../controller/loginUser.js";


const route = express.Router();

route.post("/registration", registrationUser)
route.post("/login", loginUserAuth)


export default route;

