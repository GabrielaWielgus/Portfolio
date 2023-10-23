import React from 'react';

const SkillsCategory = ({ title, items }) => {
  return (
    <div className="column">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCategory;
