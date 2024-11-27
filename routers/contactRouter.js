import express from "express";
import { contactFormcontroller } from "../controller/contactForm.js";
import { contactValidator } from "../validators/contactFormValidator.js";
import { validate } from "../middlewares/authMiddlewares.js";


const router = express.Router();

router.route("/contact").post(validate(contactValidator),contactFormcontroller)

export default router