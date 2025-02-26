import jwt from "jsonwebtoken";
import redisClient from "../config/redisClient.js"; 

const authenticateUser = async (req, res, next) => {
    try {
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
        req.user = decoded; // 📝 Attach user to request

        next(); // Proceed to next middleware
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

export default authenticateUser;
