import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass p-6"
      >
        <h2 className="h2 mb-4">About Me</h2>
        <p className="text-white/85">
          I’m <span className="font-semibold text-brand-300">Izza Shahzad</span>, a final-year Bachelor’s student in IT with a CGPA of <span className="font-semibold text-pop-500">3.89</span>.
          I specialize in modern frontend development—React, Tailwind, Bootstrap—backed by strong fundamentals in HTML, CSS, and JavaScript.
          I also enjoy exploring Python, Java, Firebase, MongoDB, and UI/UX design to build user-centered experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-6">
          <div className="glass p-4">
            <h3 className="font-semibold mb-2 text-accent-500">Education</h3>
            <p className="text-white/80 text-sm">
              Final-year Bachelors in IT (CGPA 3.89)
            </p>
          </div>
          <div className="glass p-4">
            <h3 className="font-semibold mb-2 text-accent-500">Experience</h3>
            <ul className="text-white/80 text-sm space-y-1 list-disc ml-5">
              <li>Bytewise Limited — Remote Internship (Completed)</li>
              <li>Elevvo Pathways — Remote Internship (Egypt-based)</li>
              <li>NSIP × Alberuni Tech — On-site Internship</li>
            </ul>
          </div>
          <div className="glass p-4">
            <h3 className="font-semibold mb-2 text-accent-500">What I Value</h3>
            <p className="text-white/80 text-sm">
              Clear communication, reliable teamwork, and solving real problems with simple, accessible UI.
            </p>
          </div>
        </div>

        <a href="/Izza_Shahzad_CV.pdf" download className="btn-primary mt-6 inline-flex">
          Download CV
        </a>
      </motion.div>
    </section>
  );
}
