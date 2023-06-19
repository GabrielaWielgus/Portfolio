import React from "react";
import './FirstSection.css';
import {ReactComponent as ReactLogo} from './character.svg';



const FirstSection = () => {
    return(
        <section>
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
            <ReactLogo/>

        </section>
    );
}

export default FirstSection;