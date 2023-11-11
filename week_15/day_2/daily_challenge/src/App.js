import React, { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const handleEditTodo = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const handleSave = (id) => {
    dispatch({ type: "EDIT_TODO", id: id, text: editText });
    setEditingId(null);
    setEditText("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "active") {
      return !todo.completed;
    }
    return true;
  });

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        <button onClick={() => setFilter("all")}>Show All</button>
        <button onClick={() => setFilter("completed")}>Show Completed</button>
        <button onClick={() => setFilter("active")}>Show Active</button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text} ({todo.completed ? "Completed" : "Active"})
              </span>
            )}
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.completed ? "Uncomplete" : "Complete"}
            </button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            {editingId === todo.id ? (
              <button onClick={() => handleSave(todo.id)}>Save</button>
            ) : (
              <button onClick={() => handleEditTodo(todo.id, todo.text)}>
                Edit
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
