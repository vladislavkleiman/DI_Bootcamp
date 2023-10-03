const express = require("express");
const bcrypt = require("bcrypt");
const fs = require("fs");
const dataOfUsers = "./users.JSON";
const router = express.Router();

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  fs.readFile(dataOfUsers, "utf-8", (err, data) => {
    const users = JSON.parse(data);
    const existUsers = users.find((user) => user.username === username);
    if (existUsers) return res.status(404).send("Username already exists");

    bcrypt.hash(password, 5, (err, hash) => {
      if (err) return res.status(404).send("Something go wrong");

      const newUser = {
        id: users.length + 1,
        username: username,
        password: hash,
      };

      users.push(newUser);

      fs.writeFile(dataOfUsers, JSON.stringify(users, null, 2), () => {
        res.status(201).json({ message: "Hello your account is now created" });
      });
    });
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  fs.readFile(dataOfUsers, "utf-8", (err, data) => {
    if (err) return res.status(404).json({ error: "Something go wrong" });

    const users = JSON.parse(data);
    const existUser = users.find((user) => user.username === username);

    if (!existUser)
      return res.status(404).json({ message: "Username is not registered!" });

    bcrypt.compare(password, existUser.password, (err, result) => {
      if (err) return res.status(404).json({ error: "Something go wrong" });

      if (result) {
        res.send({ message: `Hi ${username}, welcome back again!` });
      } else {
        res.status(404).send({ message: "Invalid password" });
      }
    });
  });
});

module.exports = router;
