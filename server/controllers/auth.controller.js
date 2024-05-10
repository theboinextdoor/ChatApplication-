import bcrypt from "bcryptjs"
import User from "../models/user.model.js";
import generatwTokenAndSetCookie from "../utils/generateToken.js";


// Signup Routes
export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Password didn't match"
            })
        }

        const user = await User.findOne({ userName });
        if (user) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        //  Hash Password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
      

        // Profile Pic Avatar
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,                        //if key and value are same then we don't need to write both
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            // Generate a JWT Tokens
            await generatwTokenAndSetCookie(newUser._id, res)

            await newUser.save();
            res.status(200).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                gender: newUser.gender,
                profilePic: newUser.profilePic,
                message: "Signup Successfully"
            })
        } else {
            return res.status(400).json({
                message: "Invalid user data"
            })
        }

    } catch (error) {
        console.log("Error in signup controller", error.message)
        return res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

// Login Routes 
export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const existingUser = await User.findOne({ userName })
        const isPassword = await bcrypt.compare(password, existingUser.password || "")

        // checking if user exist or not and their password is correct or not 
        if (!existingUser || !isPassword) {
            return res.status(404).json({
                message: "Invalid username or password"
            })
        }

        // generate token and set cookie for login 
        generatwTokenAndSetCookie(existingUser._id, res)

        res.status(200).json({
            _id: existingUser._id,
            fullName: existingUser.fullName,
            userName: existingUser.userName,
            profilePic: existingUser.profilePic,
            // token : req.cookies.token
        })

    } catch (error) {
        console.log("Internal Server Error in Login Controller", error)
        return res.status(500).json({
            message: "Internal Server error"
        })
    }
}

// Logout Routes
export const logout =  (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({
            message: "Logout Successfully"
        })
    } catch (error) {
        console.log("Internal Server Error in Logout Controller", error)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
