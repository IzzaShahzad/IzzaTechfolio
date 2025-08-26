import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="section">
      <div className="flex items-center justify-between mb-4">
        <h2 className="h2">Projects</h2>
        <a
          href="https://github.com/IzzaShahzad"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          View GitHub
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </motion.div>
    </section>
  );
}
