import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [listTasks, setListTasks] = useState(["buy milk", "go to shop"]);
  const [task, setTask] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setTask(value);

    if (event.key === "Enter" && value.trim()) {
      event.preventDefault();
      setListTasks((prevTasks) => [...prevTasks, value]);
      setTask("");
    }
  };

  const deleteTask = (indexToDelete) => {
    setListTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="main">
      <h1>Todo's</h1>
      <div className="newTask">
        {listTasks.length === 0 && <p>You have no todo's left, yay!</p>}
        {listTasks.map((task, index) => (
          <div key={index}>
            <p className="task" onClick={() => deleteTask(index)}>
              {task}
            </p>
          </div>
        ))}
      </div>
      <p className="headOfTodo">Add a new todo:</p>
      <input
        value={task}
        className="enterTask"
        onChange={handleInputChange}
        onKeyDown={handleInputChange}
      />
    </div>
  );
};

export default App;
