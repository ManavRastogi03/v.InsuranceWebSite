import jwt from "jsonwebtoken";

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email, role: user.role }, // ✅ Ensure role is included
        process.env.JWT_SECRET,
        { expiresIn: "7d" } // Token expires in 7 days
    );
};

export default generateToken;
