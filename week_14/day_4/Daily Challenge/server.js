const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.send("Hello From Express");
});

app.post("/api/world", (req, res) => {
  const { inputValue } = req.body;
  res.json({
    message: `I received your POST request. This is what you sent me: ${inputValue}`,
  });
});

app.listen(5000, () => {
  console.log(`Server listening on port 5000`);
});
