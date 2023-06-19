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
  const [isClicked, setIsClicked] = useState(false);

  const data = [
    {
      title: `Administrative Office Specialist`,
      description: AdministrativeOfficeSpecjalistText,
    },
    {
      title: 'Young Researcher',
      description: YoungResearcherText,
    },
    {
      title: 'Project Manager',
      description: PMText,
    },
    {
      title: 'Developer',
      description: DeveloperText,
    },
    {
      title: 'Designer',
      description: DesignerText,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
  };

  const handleAnimationEnd = () => {
    setIsClicked(false); // Ustawienie stanu isClicked na false po zakończeniu animacji
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
        style={{ backgroundColor: "transparent"}}
        onAnimationEnd={handleAnimationEnd}
        >
        <NavigateNextIcon className={'navigate-icon'} id="navigate-icon-prev"/>
        </IconButton>

        <IconButton
        disableFocusRipple
        disableRipple
        onClick={handleNext}
        style={{ backgroundColor: "transparent"}}
        onAnimationEnd={handleAnimationEnd}
        >
        <NavigateNextIcon className='navigate-icon' id="navigate-icon-next"/>
        </IconButton>
      </div>
    </div>
  );
};

export default Slider;