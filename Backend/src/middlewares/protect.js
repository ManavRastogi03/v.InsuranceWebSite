import jwt from "jsonwebtoken";

// Middleware to protect routes
const protect = (req, res, next) => {
  let token = req.header("Authorization");

  // Check if token is not present
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  // Extract token (remove "Bearer " part)
  token = token.split(" ")[1];

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add the user's ID to the request object
    req.user = decoded.id;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default protect;
