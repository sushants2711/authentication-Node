import { z } from "zod";

export const loginValidatorSchema = z.object({

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

})

