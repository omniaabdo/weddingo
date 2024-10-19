const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Protect routes (Only for authenticated users)
exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in! Please log in to get access.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id); // Add the user data to request object

    if (!req.user) {
      return res.status(401).json({
        status: "fail",
        message: "The user belonging to this token does no longer exist.",
      });
    }

    next();
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid token or token has expired",
    });
  }
};

// Restrict routes to certain roles
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: "fail",
        message: "You do not have permission to perform this action",
      });
    }
    next();
  };
};

exports.checkToken = async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
      const error = new Error("No Authenticated");
      error.stateusCode = 401;
      throw error;
    }
    const token = authHeader.split(" ")[1];
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      const error = new Error("No Authenticated");
      error.stateusCode = 401;
      throw error;
    }

    req.userId = decodedToken.id;
    next();
  } catch (error) {
    error.stateusCode = 500;
    next(error);
  }
};
