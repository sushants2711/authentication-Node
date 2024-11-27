import { z } from "zod" ;

export const contactValidator = z.object({

    name: z
    .string({ required_error: " Name is required "})
    .trim()
    .min( 2, { message : "Name at least 2 character "} )
    .max( 255, { message : "Name must not be greater than 255 characters "} ),

    email: z
    .string( { required_error: " Email is required "} )
    .trim()
    .email( { message :  " Invalid email address "} )
    .min( 5, { message : "Email at least 5 character "} )
    .max( 255, { message: "Email must not be greater than 255 characters " } ),

    mobileNo: z
    .string({ required_error: " Mobile number is required "})
    .min(10, {message: " Mobile is required must be 10 digits "})
    .max(10, {message: " Mobile is required must be 10 digits " })
    .regex(/^\d+$/, "Mobile number must contain only digits"),

    message: z
    .string({ required_error: "Message must be required "})
    .min(5, { message: "Minimum length should be 5 characters"})
    
})