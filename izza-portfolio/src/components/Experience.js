import React from 'react';
import './experience.css';

export default function Experience() {
  return (
    <section id="experience" className="container experience-section">
      <div className="section-box">
        <h2>Education & Experience</h2>
        <div className="exp-list">
          <div className="exp-item">
            <h3>Final Year — Bachelors (IT)</h3>
            <p>CGPA: 3.89</p>
          </div>

          <div className="exp-item">
            <h3>Internships</h3>
            <ul>
              <li>Bytewise Limited (Remote)</li>
              <li>Elevvo Pathways (Remote) — Egypt-based</li>
              <li>Alberuni Tech (Onsite)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
