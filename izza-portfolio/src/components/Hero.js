import React from 'react';
import './hero.css';

export default function Hero(){
  return (
    <section className="hero container" id="home">
      <div className="hero-left">
        <h1>Hi, I’m <span className="name">Izza Shahzad</span></h1>
        <p className="tag">Frontend Web Developer — React • JavaScript • UI/UX</p>

        <p className="bio">
          I build clean, responsive, and engaging web experiences.
          Currently interning at Elevvo Pathways and NUML Summer Internship Program (NSIP).
        </p>

        <div className="cta">
          <a className="primary" href="#projects">See Projects</a>
          <a className="secondary" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="glass-card">
          <div className="stat">
            <div>3.89</div>
            <small>CGPA</small>
          </div>
          <div className="stat">
            <div>Internships</div>
            <small>Bytewise · Elevvo · Alberuni Tech</small>
          </div>
        </div>
      </div>
    </section>
  )
}
