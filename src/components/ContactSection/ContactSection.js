import React from "react";
import './ContactSection.css';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const ContactSection = () => {
    return(
        <section className="contact-section">
            <div className="contact-icons">
                <div className="icon-container">
                    <MailIcon className="mail-icon" />
                        <span className="icon-text">gabwielgus@gmail.com</span>
                </div>
                <div className="icon-container">
                    <LinkedInIcon className="linkedin-icon" />
                        <span className="icon-text">linkedin.com/in/gabriela-wielgus</span>
                </div>
                <div className="icon-container">
                    <GitHubIcon className="github-icon" />
                    <span className="icon-text">github.com/GabrielaWielgus</span>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;