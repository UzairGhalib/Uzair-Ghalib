require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Global error handlers to avoid "err is undefined" and to log unhandled errors
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason || "<no reason provided>");
});
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err || "<no error object>");
  // In production you might want to exit; here we log then exit to avoid undefined state
  process.exit(1);
});


connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});