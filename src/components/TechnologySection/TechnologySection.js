import React from "react";
import './TechnologySection.css';
import { ReactComponent as LaptopSVG } from '../../assets/laptop.svg';
import technologyText from "./TechnologyText";

const TechnologySection = () => {
    return (
        <section className="technology-section" id="technology-section">
            <div className="technology-content">
                <div className="technology-description">
                    <h1>Skills & Technology</h1>
                    <p className="technology-text">{technologyText}</p>
                </div>
            </div>   
            <LaptopSVG className="technology-image"/>
        </section>
    );
};

export default TechnologySection;
