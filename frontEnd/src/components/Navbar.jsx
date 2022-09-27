import "./Navbar.css";

//Components
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsCameraFill,
} from "react-icons/bs";

const Navbar = () => {
  return (
    <div id="nav">
      <Link to="/">ReactGram</Link>
      <form id="search-form">
        <BsSearch />
        <input type="text" />
      </form>
      <ul id="nav-link">
        <li>
          <NavLink>
            <BsFillPersonFill />
          </NavLink>
        </li>
        <li>
          <NavLink to="/register">Registrar</NavLink>
        </li>
        <li>
          <NavLink to="/login">Entrar</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
