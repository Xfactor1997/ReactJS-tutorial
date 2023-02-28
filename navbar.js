import { NavLink } from "react-router-dom";
import './navbar.css';
const Nav = () => {
    return (
        <div className="Nav">
            <ul>
                <li><NavLink to="/home">Courses</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/signup">SignUp</NavLink></li>
                <li><NavLink to="/login">login</NavLink></li>
            </ul>
        </div>
    );
}
export default Nav;