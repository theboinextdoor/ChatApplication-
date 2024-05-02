import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./database/connectToMongoDB.js";


// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

dotenv.config()

// Define routes
app.get("/", (req, res) => {
    res.send("This is the main page ")
})

// authentication endpoint
app.use("/api/auth", authRoutes)



// Start the server
app.listen(PORT, () => {
    connectToMongoDB();
    console.log("Server is running on PORT no: ", PORT)
})