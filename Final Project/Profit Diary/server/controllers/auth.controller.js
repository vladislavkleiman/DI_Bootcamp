const bcrypt = require("bcrypt");
const { getUser, addUser } = require("../models/auth.model.js");

//register
const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const responds = await getUser(username);
    if (responds.length > 0)
      return res.status(409).json({ error: "Username already exists" });

    const hash = await bcrypt.hash(password, 5);
    const newUser = {
      username,
      password: hash,
    };

    const resp = await addUser(newUser.username, newUser.password);
    if (resp.length > 0) {
      res.send({ message: `Successfully registered!`, id: resp[0].id });
    } else {
      return res.status(500).json({ error: "Something went wrong" });
    }
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

//login

const login = async (req, res) => {
  const { username, password } = req.body;

  const responds = await getUser(username);
  if (responds.length == 0)
    return res.status(404).json({ error: "User not found" });
  const user = responds[0];

  bcrypt.compare(password, user.password, (err, result) => {
    if (err) return res.status(500).json({ error: "Something went wrong" });

    if (result) {
      res.send({ message: `Hi ${username}, welcome back again!`, id: user.id });
    } else {
      res.status(404).json({ error: "Invalid credentials" });
    }
  });
};

module.exports = { register, login };
