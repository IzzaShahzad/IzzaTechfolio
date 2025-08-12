import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <motion.div
        className="about-box"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="about-heading">About Me</h2>
        <p className="about-text">
          Hi, I’m <strong>Izza Shahzad</strong> — a passionate front-end
          developer with a love for clean design, responsive layouts, and
          interactive experiences.  
          My goal is to craft digital solutions that make an impact while
          delivering seamless user experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
