import userAuthModel from "../model/userAuthModel.js";

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

    if(userExist.password != password){
        return res
        .status(400)
        .json( { error: "invalid password "} )
    }

    return res
    .status(200)
    .json( { message: "Login Successfull ", userData})
    

   } catch (error) {
    return res
    .status(500)
    .json( { error: "Internal Server Error !! " } )
   }


}