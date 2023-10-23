import React from 'react';
import './WorkSection.css';
import plant from '../../assets/img/plant.svg';
import RenderCarousel from './Card';

const WorkSection = () => {
  return (
    <section className="work-section" id="work-section">
      <div className='spline-container-work'>
        <img src={plant} alt="Plant Img"/>
      </div>
      <div className="work-content">
        <RenderCarousel />
      </div>
    </section>
  );
};

export default WorkSection;
