import React, { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './Slider.css';
import AdministrativeOfficeSpecjalistText from './AdministratOsText';
import YoungResearcherText from './YoungResearcherText';
import PMText from './PMText';
import DeveloperText from './DeveloperText';
import DesignerText from './DesignerText';
import { IconButton } from '@mui/material';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      title: 'Young Researcher',
      description: YoungResearcherText,
    },
    {
      title: 'Project Manager',
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
    {
      title: `Administrative Office Specialist`,
      description: AdministrativeOfficeSpecjalistText,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
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
      <div className="slider-navigation">
        <IconButton
          disableFocusRipple
          disableRipple
          onClick={handlePrev}
          style={{ backgroundColor: 'transparent' }}
        >
          <NavigateNextIcon className={'navigate-icon'} id="navigate-icon-prev" />
        </IconButton>

        <IconButton
          disableFocusRipple
          disableRipple
          onClick={handleNext}
          style={{ backgroundColor: 'transparent' }}
        >
          <NavigateNextIcon className="navigate-icon" id="navigate-icon-next" />
        </IconButton>
      </div>
    </div>
  );
};

export default Slider;
