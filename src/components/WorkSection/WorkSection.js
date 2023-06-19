import React from 'react';
import './WorkSection.css';
import Slider from './Slider';
import { ReactComponent as RoomSVG } from '../../assets/room.svg';

const WorkSection = () => {
  return (
    <section className="work-section" id="work-section">
      <div className="work-content">
        <div className="work-description">
          <h1>Professional and Research Experience</h1>
          <Slider />
        </div>
        <div className="work-image">
          <RoomSVG />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
