import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="section">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent-500 font-semibold mb-2">Frontend Web Developer</p>
          <h1 className="h1">
            Hi, I’m <span className="text-brand-400">Izza Shahzad</span>
          </h1>
          <p className="lead mt-4">
            I build clean, responsive, and engaging digital experiences using{" "}
            <span className="text-brand-300 font-semibold">HTML, CSS, JavaScript, React, Tailwind, Bootstrap</span>.
            I also bring side-expertise in Python, Java, Firebase, MongoDB, and UI/UX design.
          </p>
          <p className="text-white/70 mt-4">
            Remote intern at Bytewise and Elevvo Pathways (Egypt-based), and on-site intern atAlberuni Tech.
            Strong leadership, communication, teamwork, and problem-solving skills.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <Link to="/about" className="btn-ghost">About Me</Link>
            <a href="/Izza_Shahzad_CV.pdf" download className="btn-ghost border-pop-500/50 text-pop-500">
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass p-6"
        >
          <div className="h-48 rounded-xl bg-gradient-to-tr from-brand-600 via-accent-500 to-pop-500 opacity-80"></div>
          <p className="text-white/75 text-sm mt-4">
            Welcome! Use the navigation above to explore my skills, projects, and contact details.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
