import React from "react";
import './WelcomeSection.css';
import {ReactComponent as CharacterSVG} from '../../assets/character.svg';



const WelcomeSection = () => {
    return(
        <section className="welcome-section" id="welcome-section">
            <h1> Hello, My name is Gabriela Wielgus,</h1>
            <div className="wrapper">
                <div className="static-txt">and I'm a</div>
                <ul className="dynamic-txts">
                    <li><span>Designer</span></li>
                    <li><span>Developer</span></li>
                    <li><span>Young researcher</span></li>
                    <li><span>Project manager</span></li>
                </ul>
            </div> 
            <div className="container-welcome-svg"> 
                <CharacterSVG className="welcome-image"/>
            </div>
            
        </section>
    );
}

export default WelcomeSection;