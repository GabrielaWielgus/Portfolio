import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";

const Projects = () => {

  const projects = [
    {
      title: "CatchDog",
      description: (
        <div>
        Design & Development | 
        <a href="https://github.com/GabrielaWielgus/CatchDog" target="_blank" rel="noopener noreferrer"> Github </a>
        <br></br>
        <br></br>
        The project focuses on the implementation of a mobile application that allows real-time location tracking of users, provides a chat feature, and handles data related to pet care. 
      </div>
      ),
      imgUrl: projImg1,
    },
    {
      title: "Cookingly",
      description: (
        <div>
        Design
        | <a href="https://www.behance.net/gallery/172363605/Web-and-Mobile-UXUI-Concept-Cookingly" target="_blank" rel="noopener noreferrer">Behance</a>
        <br></br>
        <br></br>
        Discover a web application designed to help users choose recipes based on the ingredients available in a virtual fridge. Reduce food waste and elevate the cooking experience.
      </div>
      ),
      imgUrl: projImg2,
    },
    {
      title: "Porfolio",
      description: (
        <div>
        Design & Development | 
        <a href="https://github.com/GabrielaWielgus/Portfolio" target="_blank" rel="noopener noreferrer"> Github </a>
        | <a href="https://www.behance.net/gallery/173513593/Portfolio-UXUI-Design-with-Development" target="_blank" rel="noopener noreferrer">Behance</a>
        <br></br>
        <br></br>
        This is the website you are currently exploring, designed and implemented by me. The original version can be found on Behance. 
      </div>
      ),
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="projects-section" id="projects-section">
      <Container>
        <Row className="projects-gallery">
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
