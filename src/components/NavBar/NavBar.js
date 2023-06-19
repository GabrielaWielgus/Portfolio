import React from "react";
import './NavBar.css'

const NavBar = () => {
    return(
        <div>
            <header>
            <nav> 
                    <ul className="menu">
                        <li>Welcome</li>
                        <li>Work</li>
                        <li>Technology</li>
                        <li>Contact</li>
                    </ul>
                </nav>
        </header>
        </div>
    );
}

export default NavBar;