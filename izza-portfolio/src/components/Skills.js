import React from 'react';

const tech = [
  'HTML','CSS','JavaScript','React','Tailwind','Bootstrap','Python','Java',
  'Firebase','MongoDB','MySQL','Git','Redux Toolkit'
];
const soft = ['Leadership','Communication','Team Collaboration','Problem Solving'];

export default function Skills(){
  return (
    <section id="skills" className="container skills">
      <h2>Skills</h2>
      <div className="skill-grid">
        <div>
          <h3>Tech</h3>
          <div className="chips">
            {tech.map((s,i)=>(<span key={i} className="chip">{s}</span>))}
          </div>
        </div>

        <div>
          <h3>Soft Skills</h3>
          <div className="chips">
            {soft.map((s,i)=>(<span key={i} className="chip soft">{s}</span>))}
          </div>
        </div>
      </div>
    </section>
  )
}
