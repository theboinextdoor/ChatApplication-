import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
     try {
          const loggedInUserId = req.user._id;
          const filterUsers = await User.find({
               _id: { $ne: loggedInUserId }
          }).select("-password")    //WE DON'T WANT PASSWORD IN OUR JSON FILE   


          return res.status(200).json(filterUsers)
     } catch (error) {
          console.log("Internal Error in getUsersForSideBar : ", error.message)
          return res.status(500).json({
               error: "Internal server Error"
          })
     }
}