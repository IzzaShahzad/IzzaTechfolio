import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tech, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass p-5 block"
    >
      <h3 className="text-lg font-semibold mb-2 text-brand-300">{title}</h3>
      <p className="text-white/80 text-sm mb-3">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="badge">{t}</span>
        ))}
      </div>
    </motion.a>
  );
}
