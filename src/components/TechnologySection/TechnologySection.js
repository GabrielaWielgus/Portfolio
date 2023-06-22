import React from 'react';
import './TechnologySection.css';
import technologyText from './TechnologyText';
import Spline from '@splinetool/react-spline';

const TechnologySection = () => {
  return (
    <section className="technology-section" id="technology-section">
      <div className='spline-container-technology'>
        <Spline scene="https://prod.spline.design/slbqH6weNaB-kZtE/scene.splinecode" />
      </div>
      <div className="technology-content">
        <div className="technology-description">
          <h1>Skills &amp; Technology</h1>
          <p className="technology-text">{technologyText}</p>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

