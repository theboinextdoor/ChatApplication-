import jwt from "jsonwebtoken"

const generatwTokenAndSetCookie = (userId , res)=>{
    const token = jwt.sign(
        {userId} , 
        process.env.JWT_SECRET_KEY , 
        {expiresIn : "15d"}
    )
    res.cookie("jwt",token , {
        maxAge : 15 * 24 * 60 * 60 * 1000 ,
        httpOnly : true ,     // prevent XSS attacks ,cross-site scripting attacks
        secure : process.env.NODE_ENV !== "development" ,    //https only 
        sameSite : "strict"   //CSRF attacks, cross-site request frogery attacks
    })
}

export default generatwTokenAndSetCookie;