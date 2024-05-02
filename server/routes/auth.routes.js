import express from "express"
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

// signup Routes
router.post("/signup", signup)

// login Routes
router.post("/login", login)

// logout Routes
router.post("/logout", logout)

export default router;