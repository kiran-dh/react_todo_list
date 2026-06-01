import "./todoList.css"

function TodoList({toggleTodo,setTodos,todos}){
    return(
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
    )
}

export default TodoList;