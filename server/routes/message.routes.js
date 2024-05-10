import express from "express"
import { getMessage, sendMessage } from "../controllers/message.controller.js"
import protectRoute from "../middleware/protectRoute.js";

// eslint-disable-next-line new-cap

const router = express.Router();


//* protectRoute is the middleware that will be used to protect the route , so that if the user is not logged in , he will not be able to access the route
router.post("/send/:id", protectRoute ,  sendMessage)
router.get("/:id" , protectRoute , getMessage)

export default router ;
