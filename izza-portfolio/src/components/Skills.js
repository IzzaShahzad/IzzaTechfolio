import React from 'react';
import './Skills.css';

const tech = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Bootstrap', 'Python', 'Java',
  'Firebase', 'MongoDB', 'MySQL', 'Git', 'Redux Toolkit'
];
const soft = ['Leadership', 'Communication', 'Team Collaboration', 'Problem Solving'];

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-box">
        <h2 className="skills-heading">Skills</h2>

        <div className="skill-grid">
          <div>
            <h3>Technical Skills</h3>
            <div className="chips">
              {tech.map((s, i) => (
                <span key={i} className="chip">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <h3>Soft Skills</h3>
            <div className="chips">
              {soft.map((s, i) => (
                <span key={i} className="chip">{s}</span> 
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
