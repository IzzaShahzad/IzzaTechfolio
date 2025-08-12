import React from 'react';
import './Projects.css';

const projects = [
  {title:'BlogFolio_React', desc:'Personal blog & portfolio in React', link:'https://github.com/IzzaShahzad/BlogFolio_React'},
  {title:'ContactForm', desc:'Contact form with validation and email send', link:'https://github.com/IzzaShahzad/ContactForm'},
  {title:'WeatherTracker', desc:'Real-time weather dashboard using OpenWeatherMap', link:'https://github.com/IzzaShahzad/WeatherTracker'},
  {title:'TaskFlow-app', desc:'Landing page & UI for TaskFlow app', link:'https://github.com/IzzaShahzad/TaskFlow-app'},
  {title:'TaxPal-clone', desc:'UI clone project', link:'https://github.com/IzzaShahzad/TaxPal-clone'},
  {title:'Learn-react', desc:'React learning exercises', link:'https://github.com/IzzaShahzad/Learn-react'},
  {title:'JS-Bytes', desc:'Small JS utilities & snippets', link:'https://github.com/IzzaShahzad/JS-Bytes'},
  {title:'Learn-JS', desc:'JavaScript tutorials', link:'https://github.com/IzzaShahzad/Learn-JS'},
  {title:'JSCodeLibrary', desc:'Reusable JS components & snippets', link:'https://github.com/IzzaShahzad/JSCodeLibrary'},
];

export default function Projects(){
  return (
    <section id="projects" className="container projects-box">
      <h2 className="section-title">Projects</h2>
      <div className="proj-grid">
        {projects.map((p,i)=> (
          <a key={i} className="proj-card" href={p.link} target="_blank" rel="noreferrer">
            <div className="proj-thumb" />
            <div className="proj-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
