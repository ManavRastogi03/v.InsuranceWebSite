import jwt from "jsonwebtoken";
import redisClient from "../config/redisClient.js"; // Import Redis Client

const authMiddleware = async (req, res, next) => {
    try {
        // 🛑 Get token from headers
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        // 🔍 Check if token is blacklisted
        const isBlacklisted = await redisClient.get(`blacklist_${token}`);
        if (isBlacklisted) {
            return res.status(401).json({ message: "Unauthorized: Token is blacklisted" });
        }

        // ✅ Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 📝 Attach user data to request
        req.user = decoded;

        next(); // Proceed to next middleware
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

export default authMiddleware;
