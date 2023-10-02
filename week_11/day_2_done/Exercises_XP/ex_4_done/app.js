import { TodoList } from "./todo.js";

const toDoList = new TodoList();

toDoList.add('Buy products');
toDoList.add('Go to shop');
toDoList.complete('Go to shop')

toDoList.displayAllTasks()