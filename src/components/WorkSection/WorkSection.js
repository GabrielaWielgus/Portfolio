import React from "react";
import './WorkSection.css';
import {ReactComponent as RoomSVG} from '../../assets/room.svg'

const WorkSection = () => {
    return(
        <section>
            <h1> WORK SECTION</h1>
            <p>Something about work</p>
            <RoomSVG/>
        </section>
    );
}

export default WorkSection;