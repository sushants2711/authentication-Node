import userAuthModel from "../model/userAuthModel.js";

export const registrationUser = async(req, res)=>{
    try {
        const userData = new userAuthModel(req.body);
        const { email, password, rpassword } = userData;

        const userExists = await userAuthModel.findOne( { email } )

        if ( userExists ){
            return res
            .status(400)
            .json( { error: " user already registered " } )
        }

        if (password === rpassword){
            return res
            .status(400)
            .json( { message: " Password not match try again "} )
        }

        const savedUser = await userData.save();
        return res
        .status(201)
        .json( { message: " User Created Successful !! " } )
        
    } catch (error) {
        return res
        .status(500)
        .json( { error: " Internal Server Error !! " } )
    }
}


