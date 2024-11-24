import mongoose from "mongoose";
import jwt from "jsonwebtoken";

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


userAuthSchema.methods.generateToken = async function(){
    try {
        return jwt.sign( 
            { 
            name: this.name,
            email: this.email,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d",
        }
    )

    } catch (error) {
        return res
        .status(400)
        .json( { error : "Json web Token Error Occured "} )
    }
}

export default mongoose.model("userAuth", userAuthSchema)