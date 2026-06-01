import { useState } from "react";
import "./todoForm.css"

function TodoForm({addTodos}) {

    const [text,setText]= useState("")

    function handleSubmit(e){
        e.preventDefault();
        addTodos(text);
        setText("");
    }
     
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a task..."
        />

        <button  type="submit">
            {<h1>+</h1>}
        </button>
        </form>
    );
}

export default TodoForm;