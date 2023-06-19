import React from "react";
import './TechnologySection.css';
import {ReactComponent as LaptopSVG} from '../../assets/laptop.svg';

const TechnologySection = () => {
    return(
        <section>
            <h1>TECHNOLOGY SECTION</h1>
            <p>Something about technology</p>
            <LaptopSVG/>
        </section>
    );
};

export default TechnologySection;