import "./App.css";
import { useState,useEffect } from "react";
import NavBar from "./components/navBar";
import TodoForm from "./components/todoForm";

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

      <div>
        {todos.length === 0 && (
          <p className="empty-text">No tasks yet 🚀</p>
        )}

        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <div className="todo-left">
              <input
                className="check"
                type="checkbox"
                onChange={() => toggleTodo(todo.id)}
              />

              <span
                className={`todo-text ${
                  todo.completed ? "completed" : ""
                }`}
              >
                {todo.text}
              </span>
            </div>

            <button
              className="delete-btn"
              onClick={() =>
                setTodos(
                  todos.filter((t) => t.id !== todo.id)
                )
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}