const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Photographer = require("../models/photographer");
const Car = require("../models/car_rent");
const Venue = require("../models/Venue");
const Location = require("../models/location");
const nodemailer = require("nodemailer");

const { changeName, rmoveFile } = require("../utils/imageServices");
const ERRORHANDELLER = require("../utils/errorHandler");

// Utility to generate JWT token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Send response with token
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

// Register new user with hashed password
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const newUser = await User.create({
      name,
      email,
      password, // This should be hashed automatically
      role,
    });

    createSendToken(newUser, 201, res);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// User login with password comparison
// User login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "من فضلك ادخل كلمة المرور و الايميل الخاص بك!",
      });
    }

    const user = await User.findOne({ email }).select("+password");
    const isCorrect = await bcrypt.compare(password, user.password);

    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "خطا فى الايميل او كلمة المرور",
      });
    }
    if (!isCorrect) {
      return res.status(401).json({
        status: "fail",
        message: "خطا فى الايميل او كلمة المرور",
      });
    }

    createSendToken(user, 200, res);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};




// Forgot Password
// Email sending utility

// Initialize the transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ahmedabdo102024@gmail.com", // Replace with your Gmail address
    pass: "ejhbafrvpmjygooa", // Replace with your generated App Password
  },
});

// Function to generate a random verification code
const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit code
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "المستخدم غير موجود" });
    }

    // Generate a verification code
    const verificationCode = generateVerificationCode();

    // Optionally, you could save the verification code to the user record
    user.passwordResetToken = verificationCode; // Store the code
    user.passwordResetExpires = Date.now() + 15 * 60 * 1000; // Set expiry time (15 minutes)
    await user.save({ validateBeforeSave: false });

    // Send the email with the verification code
    const mailOptions = {
      from: "ahmedabdo102024@gmail.com", // Replace with your Gmail address
      to: user.email,
      subject: "Password Reset Verification Code",
      text: `Your verification code is: ${verificationCode}. It will expire in 15 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "تم ارسال كود التحقق الى بريدك الالكترونى",
    });
  } catch (error) {
    console.error("Error during forgotPassword:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to verify the verification code
exports.verifyCode = async (req, res) => {
  const { email, verificationCode } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "المستخدم غير موجود" });
    }

    // Check if the verification code matches and is not expired
    if (
      user.passwordResetToken !== verificationCode ||
      Date.now() > user.passwordResetExpires
    ) {
      return res.status(400).json({ message: "كود التحقق منتهى الصلاحية" });
    }

    // If the code is valid, respond with a success message
    res
      .status(200)
      .json({ message: "كود التحقق صحيح . يمكنك الان اعادة تعين كلمة المرور" });
  } catch (error) {
    console.error("خطأ اثناء التحقق", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Reset Password
// Function to reset the password
exports.resetPassword = async (req, res) => {
  const { email, verificationCode, newPassword } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });
    }

    // Check if the verification code matches and is not expired
    if (
      user.passwordResetToken !== verificationCode ||
      Date.now() > user.passwordResetExpires
    ) {
      return res
        .status(400)
        .json({ message: "Invalid or expired verification code" });
    }

    const hashNewPassword = await bcrypt.hash(newPassword, 12);
    console.log("======================");
    console.log("email", email);
    console.log("new user password", newPassword);
    console.log("user password", hashNewPassword);
    console.log("verificationCode", verificationCode);
    console.log("======================");

    // // Update the user's password (make sure to hash it before saving)
    user.password = newPassword; // Ensure you hash this before saving
    user.passwordResetToken = undefined; // Clear the reset token
    user.passwordResetExpires = undefined; // Clear the expiry
    // console.log("verificationCode", verificationCode);

    await user.save();
    console.log(user);

    res.status(200).json({
      status: "success",
      message: "Password has been reset successfully!",
    });
  } catch (error) {
    console.error("Error during resetPassword:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get current user
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    const photographer = await Photographer.find({ userId: user._id }).select(
      "_id"
    );
    const cars = await Car.find({ userId: user._id }).select("_id");
    const vanue = await Venue.find({ userId: user._id }).select("_id");
    const locations = await Location.find({ userId: user._id }).select("_id");

    const getPhotographer = await Photographer.aggregate([
      { $sample: { size: 4 } }, // اختيار 4 خدمات عشوائية
    ]);
    const getVenue = await Venue.aggregate([
      { $sample: { size: 4 } }, // اختيار 4 خدمات عشوائية
    ]);

    user.services = [
      ...user.services, // إبقاء أي بيانات موجودة في المصفوفة
      ...photographer.map((item) => item._id),
      ...cars.map((item) => item._id),
      ...vanue.map((item) => item._id),
      ...locations.map((item) => item._id),
    ];
    res.status(200).json({
      status: "success",
      data: {
        user,
        services: {
          photographers: getPhotographer,
          venue: getVenue,
        },
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// Admin - Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// User - Get User Services
exports.getServices = async (req, res) => {
  try {
    const userId = req.userId;
    const userData = await User.findById(userId);
    // if (!userData) {
    //   throwError(404, "user not found");
    // }
    const getAllPhotgraphersServices = await Photographer.find({
      userId: userData.id,
    });
    const getAllCarRentServices = await Car.find({
      userId: userData.id,
    });

    const getAllVenueServices = await Venue.find({
      userId: userData.id,
    });
    const getAllLocationServices = await Location.find({
      userId: userData.id,
    });

    res.status(200).json({
      status: "success",
      message: "data feached successfuly",
      data: {
        photographers: getAllPhotgraphersServices,
        cars: getAllCarRentServices,
        venue: getAllVenueServices,
        locations: getAllLocationServices,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};




exports.searchServices = async (req, res) => {
  try {
    const query = req.query.query;

    if (!query) {
      return res.status(400).json({
        status: 'fail',
        message: 'Search query is missing',
      });
    }

    // Create a regular expression to match both Arabic and English words (case-insensitive)
    const searchRegex = new RegExp(query, 'i'); // Case-insensitive search

    // Search vendors and services by name or description in both languages
    const results = await User.find({
      role: { $in: ['vendor', 'photographer', 'beauty center', 'service'] },
      $or: [
        { name: searchRegex },        // Search by name
        { email: searchRegex },       // Search by email (if applicable)
        { description: searchRegex }, // Search by description (if you have one)
      ],
    });

    res.status(200).json({
      status: 'success',
      data: results,
    });
  } catch (err) {
    console.error('Error during search:', err);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong while searching',
    });
  }
};


// exports.searchServices = async (req, res) => {
//   try {
//     const userId = req.userId;
//     const { name, password } = req.body;
//     const image = req.file;

//     const userData = await User.findById(userId);
//     if (!userData) {
//       ERRORHANDELLER(404, "data not found");
//     }

//     if (image) {
//       const newPaths = changeName(image.path);

//       rmoveFile(userData.image);
//       userData.$set({ image: newPaths });
//     } else {
//       if (name) {
//         userData.$set({ name: name });
//       }
//       if (password) {
//         userData.$set({ password });
//       }
//     }
//     await userData.save();

//     res.status(200).json({
//       status: "success",
//       message: "data feached successfuly",
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "fail",
//       message: err.message,
//     });
//   }
// };
