// NODE PACKAGE
import express from "express" ;
import dotenv from "dotenv" ; 
import cors from "cors" ; 
import cookieParser from "cookie-parser" ;

// MONGODB PACKAGE
import connectToMongoDB from "./database/connectToMongoDB.js" ;


// API ROUTES
import authRoutes from "./routes/auth.routes.js" ; 
import messageRoutes from "./routes/message.routes.js" ; 
import userRoutes from "./routes/user.routes.js" ; 


// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
app.use(cookieParser())

dotenv.config()

// Define routes
app.get("/", (req, res) => {
    res.send("This is the main page ")
})


// authentication endpoint API
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)



// Start the server
app.listen(PORT, () => {
    connectToMongoDB();
    console.log("Server is running on PORT no: ", PORT)
})