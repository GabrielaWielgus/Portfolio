import React, { useState } from 'react';
import cardData from './cardData';

//import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

import navLeft from '../../assets/img/chevron-left-solid.svg';
import navRight from '../../assets/img/chevron-right-solid.svg';


const MAX_VISIBLE = 3;

const Card = ({ title, content }) => (
    <div className="card">
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
)

const Carousel = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return(
        <div className='carousel'>
            {active > 0 && (
                <button className='nav left' onClick={() =>
                setActive((i) => i - 1)}>
                    <img src={navLeft} alt="" />
                </button>
            )}
            {React.Children.map(children, (child, i) => (
                <div
                    className='card-container'
                    style={{
                        "--active": i === active ? 1 : 0,
                        "--offset": (active - i) / 3,
                        "--direction": Math.sign(active - i),
                        "--abs-offset": Math.abs(active - i) / 3,
                        "pointer-events": active === i ? "auto" : "none",
                        opacity: Math.abs(active - i) >= MAX_VISIBLE ? "0" : "1",
                        display: Math.abs(active - i) >= MAX_VISIBLE ? "none" : "block",
                    }}
                >
                    {child}
                </div>
            ))}
            {active < count - 1 && (
                <button className='nav right' onClick={() =>
                setActive((i) => i + 1)}>
                    <img src={navRight} alt="" />
                </button>
            )}
        </div>
    )
}

const RenderCarousel = () => (
    <div className='render-carousel'>
        <Carousel>
            {cardData.map((data, i) => (
                <Card
                    key={i}
                    title={data.title}
                    content={data.content}
                />
            ))}
        </Carousel>
    </div>
);

export default RenderCarousel;