const express = require("express");
const postModel = require("./models/postModel");

const app = express();
app.use(express.json());

app.get("/posts", (req, res) => {
  postModel
    .getAllPosts()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.detail }));
});

app.get("/posts/:id", (req, res) => {
  postModel
    .getPostById(req.params.id)
    .then((data) => {
      if (data.length === 0) {
        res.status(404).send({ message: "Post not found" });
      } else {
        res.send(data[0]);
      }
    })
    .catch((err) => res.status(500).send({ message: err.detail }));
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  postModel
    .createPost(title, content)
    .then((data) => res.status(201).send(data[0]))
    .catch((err) => res.status(500).send({ message: err.detail }));
});

app.put("/posts/:id", (req, res) => {
  const { title, content } = req.body;
  postModel
    .updatePost(req.params.id, title, content)
    .then((data) => {
      if (data.length === 0) {
        res.status(404).send({ message: "Post not found" });
      } else {
        res.send(data[0]);
      }
    })
    .catch((err) => res.status(500).send({ message: err.detail }));
});

app.delete("/posts/:id", (req, res) => {
  postModel
    .deletePost(req.params.id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).send({ message: "Post deleted successfully" });
      } else {
        res.status(404).send({ message: "Post not found" });
      }
    })
    .catch((err) => res.status(500).send({ message: err.detail }));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
