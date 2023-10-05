const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("You are on a Home page");
  res.status(200).send("All okey");
});

router.get("/about", (req, res) => {
  console.log("You are on a About page");
  res.status(200).send("All okey");
});

module.exports = router;
