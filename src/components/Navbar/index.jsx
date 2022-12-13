
import { NavLink, Link } from "react-router-dom";

import { ChangeLanguage } from "../ChangeLanguage";
import { useChangeText } from '../../commons/hooks/useChangeText';
import logo from '../../assets/images/miscalenea/logo.png';
import './styles.css';

export const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <img src={logo} alt="logo-menu" className="logo" />
            </Link>
            <h1 className="titleMenu">{ useChangeText('titleApp') }</h1>
            <div className="listGeneralMenu">
                <ul className="listMenu">
                    <li>
                        <NavLink className="itemMenu" exact to="/" activeClassName="active">
                            { useChangeText('search') }
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="itemMenu" exact to="/record" activeClassName="active">
                            { useChangeText('record') }
                        </NavLink>
                    </li>
                </ul>
                <ChangeLanguage />
            </div>
        </nav>
    )
}
