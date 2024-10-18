require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require("./routes/userroutes");
const venueRoutes = require("./routes/venueRoutes");
const logger = require("./utils/logger");
const beautyCenter = require("./routes/beauty-center.js");
const homeStore = require("./routes/home-store.js");
const homeStoreCategory = require("./routes/home-store-category.js");
const app = express();

const path = require("path");
const fs = require("fs");
// Multer Uploader
const upload = require("./utils/FileMulterUploader.js");

// app.post("/upload", upload.single("file"), (req, res) => {
//   res.json({
//     message: "File uploaded successfully!",
//     file: req.file,
//   });
// });
app.post("/uploads", upload.array("files"), (req, res) => {
  res.json({
    message: "File uploaded successfully!",
    files: req.files,
  });
});

app.get("/image/:filename", (req, res) => {
  const { filename } = req.params;
  const filepath = path.join(__dirname, "uploads", filename);

  if (fs.existsSync(filepath)) {
    res.sendFile(filepath);
  } else {
    res.status(404).json({ message: "File not found" });
  }
});

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(
  morgan("combined", {
    stream: { write: (message) => logger.info(message.trim()) },
  })
);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/venues', venueRoutes);
app.use('/api/budget', require('./routes/budget'));
app.use("/beauty-center",beautyCenter)
app.use("/home-store",homeStore)
app.use("/home-store-category",homeStoreCategory)

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

module.exports = app;
