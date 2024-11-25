import express from "express"
import { registrationUser } from "../controller/authentication.js";
import { loginUserAuth } from "../controller/loginUser.js";
import { userAuthValidatorsSchema } from "../validators/userAuthValidators.js"
import { validate } from "../middlewares/authMiddlewares.js"

const route = express.Router();

route.post("/registration", validate(userAuthValidatorsSchema), registrationUser)
route.post("/login", loginUserAuth)


export default route;

