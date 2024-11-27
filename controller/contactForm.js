import contactSchema from "../model/contactModels.js";

export const contactFormcontroller = async (req, res) => {
    try {
        const contactData = new contactSchema(req.body);
        const savedUser = await contactData.save();
        return res
            .status(201)
            .json({ message: "Form submitted successful !!!", })
    } catch (error) {
        return res
            .status(500)
            .json({ error: "Internal server error" })
    }
}