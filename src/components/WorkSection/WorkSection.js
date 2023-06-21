import React from 'react';
import './WorkSection.css';
import Slider from './Slider';
import Spline from '@splinetool/react-spline';

const WorkSection = () => {
  return (
    <section className="work-section" id="work-section">
        <Spline scene="https://prod.spline.design/FdzJ95kl2giPuz0O/scene.splinecode" />
      <div className="work-content">
        <div className="slider-container">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
