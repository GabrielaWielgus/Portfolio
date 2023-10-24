import React from "react";
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import navIcon4 from '../../assets/img/nav-icon4.svg';

const NavBar = () => {
  const handleNavigation = (sectionID) => {
      const section = document.getElementById(sectionID);
      if (section) {
          const offset = 40;
          const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
              top: sectionTop - offset,
              behavior: "smooth",
          });
      }
  };

  return (
      <div className="navbar-container">
          <header>
              <nav className="navbar">
                  <ul className="menu">
                      <li onClick={() => handleNavigation('welcome-section')}>Welcome</li>
                      <li onClick={() => handleNavigation('work-section')}>Work</li>
                      <li onClick={() => handleNavigation('technology-section')}>Skills</li>
                      <li onClick={() => handleNavigation('projects-section')}>Projects</li>
                  </ul>
                  <span className="navbar-text">
                      <div className="social-icon">
                          <a href="mailto:gabwielgus@gmail.com"><img src={navIcon3} alt="" /></a>
                          <a href="https://www.behance.net/gabrielawielgus1"><img src={navIcon1} alt="" /></a>
                          <a href="https://www.linkedin.com/in/gabriela-wielgus"><img src={navIcon2} alt="" /></a>
                          <a href="https://github.com/GabrielaWielgus"><img src={navIcon4} alt="" /></a>
                      </div>
                  </span>
              </nav>
          </header>
      </div>
  );
}

export default NavBar;
