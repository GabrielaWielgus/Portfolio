import React from 'react';
import './WorkSection.css';
import Slider from './Slider';


const WorkSection = () => {
  return (
    <section className="work-section" id="work-section">
      <div className="work-content">
        <div className="slider-container">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
