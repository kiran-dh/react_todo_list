import "./App.css";
import { useState,useEffect } from "react";
import NavBar from "./components/navBar/navBar";
import TodoForm from "./components/todoForm/todoForm";
import TodoList from "./components/todoList/todoList";

export default function App(){

  const [darkMode, setDarkMode] = useState(false);

function toggleTheme() {
  setDarkMode(!darkMode);
}

const [todos, setTodos] = useState([]) 

useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);
  }, []);

useEffect(() => {
  localStorage.setItem(
    "todos",
    JSON.stringify(todos)
  );
}, [todos]);

const addTodos = (text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text,
      completed:false
    };

    setTodos([...todos,newTodo]);
  };

  const toggleTodo = (id) =>{
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
  <div className={darkMode ? "app dark" : "app"}>
    <div className="todo-container">
      <NavBar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <TodoForm addTodos={addTodos} />

      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        setTodos={setTodos}
      />

    </div>
  </div>
);
}