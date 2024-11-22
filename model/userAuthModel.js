import mongoose from "mongoose";

const userAuthSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    }
}, { timestamps: true } )

export default mongoose.model("userAuth", userAuthSchema)