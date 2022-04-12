import React, {useState} from 'react';
import {NavLink} from "react-bootstrap";
import "./navbar.css";
import {Link} from "react-router-dom";

function NavBar(){
    const [click, setClick] = useState(false);
    const appName = "Inquire</>";
    const handleClick = () => setClick(!click);
    return(

        <div>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        {appName}
                        <i className="fas fa-code"></i>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"

                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                exact
                                to="/#"
                                activeClassName="active"
                                className="nav-links"

                            >
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">



                            <Link
                                exact
                                to="/profile"
                                activeClassName="active"
                                className="nav-links"

                            >
                                profile
                            </Link>

                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default  NavBar;