import { z } from "zod";

export const userAuthValidatorsSchema = z.object({

    name: z
    .string( { required_error: " Name is required "} )
    .trim()
    .min( 2, { message : "Name at least 2 character "} )
    .max( 255, { message : "Name must not be greater than 255 characters "} ),

    email: z
    .string( { required_error: " Email is required "} )
    .trim()
    .email( { message :  " Invalid email address "} )
    .min( 5, { message : "Email at least 5 character "} )
    .max( 255, { message: "Email must not be greater than 255 characters " } ),

    password: z
    .string( { required_error: "password is required "})
    .min( 8, { message : "Password must be require at least 8 character "})
    .max( 100, { message : "Password is not more than 100 words "}),

    rpassword: z
    .string( { required_error: "password is required "})
    .min( 8, { message : "Password must be require at least 8 character "})
    .max( 100, { message : "Password is not more than 100 words "}),
    

})
