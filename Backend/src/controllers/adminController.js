import User from "../models/User.js"; // User model import
import Policy from "../models/Policy.js";
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password"); // Password hide karenge

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user); // User data return
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
export const getAllUsers = async (req, res) => {
    try {
      const search = req.query.search || "";
  
      const query = {
        $or: [
          { firstName: new RegExp(search, "i") },
          { lastName: new RegExp(search, "i") },
          { email: new RegExp(search, "i") },
        ],
      };
  
      const users = await User.find(query)
        .select("firstName lastName email status")
        .lean(); // returns plain JS objects
  
      const usersWithPolicies = await Promise.all(
        users.map(async (user) => {
          const policies = await Policy.find({ userId: user._id }).select("type");
          return {
            _id: user._id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            status: user.status,
            policies: policies.map((p) => p.type), // ["Basic", "Gold"]
          };
        })
      );
  
      res.status(200).json({ success: true, users: usersWithPolicies });
    } catch (error) {
      console.error("Error in getAllUsers:", error.message);
      res.status(500).json({ success: false, message: "Something went wrong" });
    }
  };
  export const toggleUserStatus = async (req, res) => {
    try {
      const userId = req.params.id;
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      user.status = user.status === "active" ? "blocked" : "active";
      await user.save();
  
      res.status(200).json({
        success: true,
        message: `User is now ${user.status}`,
        status: user.status,
      });
    } catch (error) {
      console.error("Error toggling user status:", error.message);
      res.status(500).json({ success: false, message: "Server error" });
    }
  };