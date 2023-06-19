import React from "react";
import './ContactSection.css';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const ContactSection = () => {
    return (
        <section className="contact-section" id="contact-section">
            <div className="contact-icons">
                <div className="icon-container">
                    <a href="mailto:gabwielgus@gmail.com">
                        <MailIcon className="mail-icon" />
                        <span className="icon-text">gabwielgus@gmail.com</span>
                    </a>
                </div>
                <div className="icon-container">
                    <a href="https://www.linkedin.com/in/gabriela-wielgus">
                        <LinkedInIcon className="linkedin-icon" />
                        <span className="icon-text">linkedin.com/in/gabriela-wielgus</span>
                    </a>
                </div>
                <div className="icon-container">
                    <a href="https://github.com/GabrielaWielgus">
                        <GitHubIcon className="github-icon" />
                        <span className="icon-text">github.com/GabrielaWielgus</span>
                    </a>
                </div>
                <div className="icon-container">
                    <a href="https://www.behance.net/gabrielawielgus1">
                        <ColorLensIcon className="behance-icon" />
                        <span className="icon-text">behance.net/gabrielawielgus1</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
