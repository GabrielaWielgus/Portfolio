import React, { useLayoutEffect, useState } from "react";
import './NavBar.css';

const NavBar = () => {
    const [isContactSection, setIsContactSection] = useState(false);

    useLayoutEffect(() => {
        const handleScroll = () => {
            const contactSection = document.getElementById("contact-section");
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                setIsContactSection(rect.top <= window.innerHeight && rect.bottom >= 0);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavigation = (sectionID) => {
        const section = document.getElementById(sectionID);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={`navbar-container ${isContactSection ? "black-bg" : ""}`}>
            <header>
                <nav>
                    <ul className="menu">
                        <li onClick={() => handleNavigation('welcome-section')}>Welcome</li>
                        <li onClick={() => handleNavigation('work-section')}>Work</li>
                        <li onClick={() => handleNavigation('technology-section')}>Technology</li>
                        <li onClick={() => handleNavigation('contact-section')}>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;
