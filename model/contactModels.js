import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, // removes the extra space of name 
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,  
    },
    mobileNo: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    }

}, {timestamps: true} )

export default mongoose.model("contactsModels", contactSchema)