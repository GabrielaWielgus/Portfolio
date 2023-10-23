import React from 'react';

const SkillsSection = () => {
  return (
    <div className="skills-container">
      <div className="column">
        <h3>Development:</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React and React Native</li>
          <li>Node.js</li>
          <li>RWD</li>
          <li>MySQL and PostgreSQL</li>
          <li>MongoDB</li>
          <li>macOS, Windows, Linux</li>
          <li>Jira</li>
          <li>Git</li>
        </ul>
      </div>
      <div className="column">
        <h3>UI/UX:</h3>
        <ul>
          <li>Adobe XD, Adobe Photoshop, Illustrator, Figma</li>
          <li>User-centered design principles and methodologies</li>
          <li>Wireframing, prototyping, and interactive mockups</li>
          <li>Visual design for intuitive user interfaces</li>
        </ul>
      </div>
      <div className="additionally">
        <h3>Additionally:</h3>
        <ul>
          <li>Unreal Engine and Unity game development engines</li>
          <li>Digital Art, Drawing, Sketch</li>
          <li>Certificate A.36 Bookkeeping</li>
          <li>Certificate A.35 Planning and performing tasks in an organisation</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
