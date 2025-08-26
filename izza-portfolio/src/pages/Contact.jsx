import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass p-6"
      >
        <h2 className="h2 mb-4">Contact Me</h2>
        <p className="text-white/80">
          I’m open to internships, collaborations, and interesting frontend projects.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <a href="mailto:izzashahzad516@gmail.com" className="glass p-4 hover:bg-white/10">
            <p className="text-white/70 text-sm">Email</p>
            <p className="font-semibold">izzashahzad516@gmail.com</p>
          </a>
          <a href="https://github.com/IzzaShahzad" target="_blank" rel="noreferrer" className="glass p-4 hover:bg-white/10">
            <p className="text-white/70 text-sm">GitHub</p>
            <p className="font-semibold">github.com/IzzaShahzad</p>
          </a>
          <a href="https://www.linkedin.com/in/izza-shahzad-b855612a1/" target="_blank" rel="noreferrer" className="glass p-4 hover:bg-white/10">
            <p className="text-white/70 text-sm">LinkedIn</p>
            <p className="font-semibold">in/izza-shahzad-b855612a1</p>
          </a>
        </div>

        <a href="/Izza_Shahzad_CV.pdf" download className="btn-primary mt-6 inline-flex">
          Download CV
        </a>
      </motion.div>
    </section>
  );
}
