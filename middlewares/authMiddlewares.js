export const validate = (schema)=> async (req, res, next)=>{
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody;
        next();
    } catch (err) {
        const message = err.errors[0].message;
        return res
        .status(400)
        .json( { error : "Error is coming forn zod validator ", msg: message} )
    }
}

