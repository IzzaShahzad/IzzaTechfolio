import SkillPill from "../components/SkillPill";
import { techSkills, softSkills } from "../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="section">
      <h2 className="h2 mb-6">Skills</h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="glass p-6">
          <h3 className="font-semibold text-brand-300 mb-3">Tech</h3>
          <div className="space-y-4">
            <div>
              <p className="text-white/70 mb-2">Languages</p>
              <div className="flex flex-wrap gap-2">
                {techSkills.languages.map((s) => <SkillPill key={s} label={s} />)}
              </div>
            </div>
            <div>
              <p className="text-white/70 mb-2">Frameworks / Libraries</p>
              <div className="flex flex-wrap gap-2">
                {techSkills.frameworks.map((s) => <SkillPill key={s} label={s} />)}
              </div>
            </div>
            <div>
              <p className="text-white/70 mb-2">Tools / Platforms</p>
              <div className="flex flex-wrap gap-2">
                {techSkills.tools.map((s) => <SkillPill key={s} label={s} />)}
              </div>
            </div>
            <div>
              <p className="text-white/70 mb-2">Methodologies</p>
              <div className="flex flex-wrap gap-2">
                {techSkills.methodologies.map((s) => <SkillPill key={s} label={s} />)}
              </div>
            </div>
            <div>
              <p className="text-white/70 mb-2">Others</p>
              <div className="flex flex-wrap gap-2">
                {techSkills.others.map((s) => <SkillPill key={s} label={s} />)}
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-6">
          <h3 className="font-semibold text-brand-300 mb-3">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((s) => <SkillPill key={s} label={s} />)}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
