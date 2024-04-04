import User from "../models/user.model.js";

export const getUsersforSidebar = async (req, res) => {
  try {
    const loggedInuserId = req.user._id;

    // Below line is for find every user in database but not the user with logged in id!
    const filteredUsers = await User.find({
      _id: { $ne: loggedInuserId },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersforSidebar controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};
