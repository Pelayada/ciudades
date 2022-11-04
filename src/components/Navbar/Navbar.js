
import { NavLink } from "react-router-dom";

import './Navbar.css';

import logo from '../../assets/images/miscalenea/logo.png';

export const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="logo-menu" className="logo" />
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
