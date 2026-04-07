const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import router
const providerRoutes = require("./routes/router");

// Use router
app.use("/api/providers", providerRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Server run
app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});