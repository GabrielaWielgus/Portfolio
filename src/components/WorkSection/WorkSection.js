import React from 'react';
import './WorkSection.css';
import Slider from './Slider';
import { ReactComponent as RoomSVG } from '../../assets/room.svg';

const WorkSection = () => {
  return (
    <section className="work-section" id="work-section">
      <div className="work-content">
      <div className="svg-container">
          <RoomSVG className="work-image" />
        </div>
        <div className="slider-container">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
