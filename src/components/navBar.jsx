import { darkImg, lightImg, todoLogo } from "../assets/image.js";
import "./navBar.css"

function NavBar({ darkMode, toggleTheme }) {
  return (
    <nav>
      <div className="logo-box">
        <img src={todoLogo} />
        <h1>Todo List</h1>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? <img src={darkImg}/>:<img src={lightImg}/>}
      </button>
    </nav>
  );
}

export default NavBar;