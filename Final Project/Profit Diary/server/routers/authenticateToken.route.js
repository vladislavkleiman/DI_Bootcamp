const express = require("express");
const authenticateTokenRoute = express.Router();
// Import your middleware
const { authenticateToken } = require("../controllers/authenticateToken.js");

// Apply the middleware to protected routes
authenticateTokenRoute.get(
  "/protected-route",
  authenticateToken,
  (req, res) => {
    res.send("Access to protected data");
  }
);

module.exports = { authenticateTokenRoute };
