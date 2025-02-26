import User from "../models/User.js"; // User model import

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
