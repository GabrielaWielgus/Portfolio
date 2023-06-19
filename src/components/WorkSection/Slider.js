import React, { useState } from 'react';
import './Slider.css';
import AdministrativeOfficeSpecjalistText from './AdministratOsText';
import YoungResearcherText from './YoungResearcherText';
import PMText from './PMText';
import DeveloperText from './DeveloperText';
import DesignerText from './DesignerText';


const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      title: '2017-2021 Administrative Office Specialist',
      description: AdministrativeOfficeSpecjalistText,
    },
    {
      title: 'Since May 2021 - now, Young Researcher',
      description: YoungResearcherText,
    },
    {
      title: 'Since May 2021 - now, Project Manager',
      description: PMText,
    },
    {
      title: 'Designer',
      description: DesignerText,
    },
    {
      title: 'Developer',
      description: DeveloperText,
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        {data.map((item, index) => (
          <div
            key={index}
            className={`slider-item ${index === activeIndex ? 'active' : ''}`}
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="slider-buttons">
        {data.map((item, index) => (
          <button
            key={index}
            className={`slider-button ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
