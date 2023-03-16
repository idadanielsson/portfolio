import { useState } from "react";
import { Link } from "react-router-dom";
import '../nav/Nav.scss';

const Nav = () => {
    return (
        <header className="header">
            <nav className="header__nav">  
                    <ul className="header__list">
                        <li className="header__item">
                            <Link to='/' className="header__item__link" id="navlink">Home</Link> 
                        </li>
                        <li className="header__item">
                            <Link to='/about' className="header__item__link">About</Link>
                        </li>
                        <li className="header__item">
                            <Link to='/contact' className="header__item__link">Contact</Link>
                        </li>
                    </ul>
            </nav>
        </header>

    );

}

export default Nav;