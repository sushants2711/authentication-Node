import userAuthModel from "../model/userAuthModel.js";
import bcrypt from "bcryptjs"


export const loginUserAuth = async( req, res )=>{
   try {

    const userData = new userAuthModel( req.body );
    const { email, password } = userData;

    const userExist = await userAuthModel.findOne( { email } )

    if( !userExist ){
        return res
        .status(400)
        .json( { error : "User not found " } )
    }

    const isPasswordMatch = await bcrypt.compare(password, userExist.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }

    return res
    .status(200)
    .json( { message: "Login Successfull ", userExist})
    

   } catch (error) {
    return res
    .status(500)
    .json( { error: "Internal Server Error !! " } )
   }


}