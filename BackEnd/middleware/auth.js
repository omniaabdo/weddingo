const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Protect routes (Only for authenticated users)
exports.protect = async (req, res, next) => {
  let token;

  // Check if token is provided in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // If no token is provided
  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in! Please log in to get access.",
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return res.status(401).json({
        status: 'fail',
        message: 'The user belonging to this token no longer exists.',
      });
    }

    // Check if user changed password after the token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return res.status(401).json({
        status: 'fail',
        message: 'User recently changed password! Please log in again.',
      });
    }

    // Attach the user to the request object
    req.user = currentUser;
    next();
  } catch (err) {

    return res.status(400).json({
      status: 'fail',
      message: 'Invalid token or token has expired',
    });
  }
};

// Restrict routes to certain roles
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // Check if user's role is allowed
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
