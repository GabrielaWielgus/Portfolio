import React from "react";
import technologyText from "./TechnologyText";

const TechnologyContent = () => {
    return(
        <div className="technology-content">
        <div className="technology-description">
          <h1>Skills &amp; Technology</h1>
          <p className="technology-text">{technologyText}</p>
        </div>
      </div>
    );
};

export default TechnologyContent;