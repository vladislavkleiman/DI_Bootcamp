const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

const users = [];

const JWT_SECRET = "your_jwt_secret";

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };
    users.push(user);
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ message: "All okey" });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error registering new user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
      res.status(200).json({ message: "All okey" });
      res.json({ token });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
});

module.exports = router;
