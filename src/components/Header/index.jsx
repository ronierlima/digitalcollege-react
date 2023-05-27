import { Link } from "react-router-dom";
import style from "./style.module.css";

function Header() {

  const deslogar = () =>{
    localStorage.removeItem('logado');

    window.location.reload()
  }

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

          <li onClick={deslogar}>
             Logout
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
