import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from '../../assets/img/header-img.svg';
import './WelcomeSection.css'
import TrackVisibility from 'react-on-screen';

const WelcomeSection = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "UI/UX Designer", "Web Developer", "Young Researcher", "Project Manager" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="welcome-section" id="welcome-section">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Hello! I'm Gabriela Wielgus, and I'm a `} <span className="txt-rotate" dataPeriod="1500" data-rotate='[ "UI/UX Designer", "Web Developer", "Young Researcher", "Project Manager" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a computer science graduate with a passion for web development and user interface/user experience (UI/UX) design. Currently, I work as a Young Researcher at AGH University of Krakow, where I conduct research in Quality of Experience (QoE). 
                  Prior to this, I gained experience as an Administrative Office Specialist, overseeing operations in two companies. My skills encompass creating mobile and web application and UI/UX design.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WelcomeSection;
