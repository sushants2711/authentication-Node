import userAuthModel from "../model/userAuthModel.js";
import bcrypt from "bcryptjs";


export const registrationUser = async(req, res)=>{
    try {
        const userData = new userAuthModel(req.body);
        const { email, password, rpassword } = req.body;

        const userExists = await userAuthModel.findOne( { email } )

        if ( userExists ){
            return res
            .status(400)
            .json( { error: " user already registered " } )
        }

        if (password !== rpassword){   // solve the error in user registration in that line 
            return res
            .status(400)
            .json( { message: " Password not match try again "} )
        }

        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound)

        userData.password = hash_password;


        const savedUser = await userData.save();
        return res
        .status(201)
        .json( { message: " User Created Successful !! " , details: userData} )
        
    } catch (error) {
        return res
        .status(500)
        .json( { error: " Internal Server Error !! " } )
    }
}


