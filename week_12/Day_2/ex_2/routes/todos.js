const express = require("express");
const router = express.Router();

const todos = [
  { id: "1", task: "go to shop" },
  { id: "2", task: "buy products" },
  { id: "3", task: "go to work" },
  { id: "4", task: "go to gym" },
];

router.get("/", (req, res) => {
  res.send(todos);
});

router.post("/", (req, res) => {
  const newTask = {
    id: todos.length + 1,
    task: req.body.task,
  };
  todos.push(newTask);
  res.status(201).json(todos);
});

router.put("/id/:id", (req, res) => {
  const id = req.params.id;
  const taskFindIndex = todos.findIndex((tas) => tas.id === id);
  if (taskFindIndex !== -1) {
    const updateTask = {
      id: todos[taskFindIndex].id,
      task: req.body.task,
    };
    todos[taskFindIndex] = updateTask;
    res.status(200).json(todos);
  }
});

router.delete("/id/:id", (req, res) => {
  const id = req.params.id;
  const taskFindIndex = todos.findIndex((tas) => tas.id === id);
  if (taskFindIndex !== -1) {
    todos.splice(taskFindIndex, 1);
    res.status(200).json("Task deleted");
  }
});

module.exports = router;
