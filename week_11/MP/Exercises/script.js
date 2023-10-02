const express = require("express");
const app = express();
const fs = require("fs");
const router = express.Router();
const file = "./tasks.JSON";

router.get("/", (req, res) => {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("Problem with read file");
    } else {
      res.send(JSON.parse(data));
    }
  });
});

router.get("/:id", (req, res) => {
  const taskId = Number(req.params.id);
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      res.status(404).send("Problem with read file");
    }
    const listOfTasks = JSON.parse(data);
    const findTask = listOfTasks.find((t) => t.id === taskId);
    if (!findTask) {
      return res.status(404).send("Task not found");
    }
    res.json(findTask);
  });
});

router.post("/", (req, res) => {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      res.status(404).send("Problem with read file");
    }
    const listOfTasks = JSON.parse(data);
    const newTask = {
      id: listOfTasks.length + 1,
      nameTask: req.body.nameTask,
      completed: false,
    };

    listOfTasks.push(newTask);
    res.status(201).json(listOfTasks);
  });
});

router.put("/:id", (req, res) => {
  const taskId = Number(req.params.id);

  fs.readFile(file, "utf8", (err, data) => {
    const listOfTasks = JSON.parse(data);
    const taskIndex = listOfTasks.findIndex((t) => t.id === taskId);
    if (taskIndex === -1) return res.status(404).send("Task not found");

    const updateTask = {
      id: taskId,
      nameTask: req.body.nameTask,
      completed: false,
    };
    listOfTasks[taskIndex] = updateTask;
    res.status(200).json("Task was update");
    fs.writeFile(file, JSON.stringify(listOfTasks, null, 4), (err) => {
      if (err) return res.status(500).send("Error writing to file");
      res.json(listOfTasks);
    });
  });
});

router.delete("/:id", (req, res) => {
  const taskId = Number(req.params.id);
  fs.readFile(file, "utf8", (err, data) => {
    const listOfTasks = JSON.parse(data);
    const taskIndex = listOfTasks.findIndex((t) => t.id === taskId);
    if (taskIndex === -1) return res.status(404).send("Task not found");
    listOfTasks.splice(taskIndex, 1);
    fs.writeFile(file, JSON.stringify(newTasks, null, 4), (err) => {
      res.status(204).json("Task deleted");
    });
  });
});

module.exports = router;
