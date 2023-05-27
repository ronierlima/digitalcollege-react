import { Link } from "react-router-dom";
import style from "./style.module.css"

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.menu}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}



export default Header