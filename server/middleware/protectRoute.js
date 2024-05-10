import jwt from "jsonwebtoken"
import User from "../models/user.model.js";


const protectRoute = async (req  , res , next)=>{
     try{
          const token = req.cookies.jwt;

          if(!token){
               return res.status(401).json({
                    message: "Unauthorized - No Token Provided"
               })
          }

          const decoded  = jwt.verify(token , process.env.JWT_SECRET_KEY);
          if(!decoded){
               return res.status(401).json({
                    message: "Unauthorized - Intalid Token"
               })
          }

          const user = await User.findById(decoded.userId).select("-password")

          if(!user){
               return res.status(401).json({
                    message: "Unauthorized - User not found"
               })
          }

          req.user = user;    //this is is the user in our database which is logged in and we are storing it in the req.user so that we can use it in the next middleware 


          next();                  //if the programm couldn't rach at the next() then the programm will stop and not proceeded to the next middleware which is in the messageRoutes
     }catch(error){
          console.log("Internal server error...", error.message)
          return res.status(500).json({
               message: "Internal server error"
          })
     }
}


export default protectRoute;