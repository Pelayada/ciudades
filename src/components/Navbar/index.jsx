
import { NavLink, Link } from "react-router-dom";

import logo from '../../assets/images/miscalenea/logo.png';
import './styles.css';

export const Navbar = () => {
  return (
    <nav>
        <Link to="/">
            <img src={logo} alt="logo-menu" className="logo" />
        </Link>
        <h1 className="title-menu">Ciudades</h1>
        <ul className="list-menu">
            <li>
                <NavLink className="item-menu" exact to="/" activeClassName="active">
                    Buscar
                </NavLink>
            </li>
            <li>
                <NavLink className="item-menu" exact to="/record" activeClassName="active">
                    Historial
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}
