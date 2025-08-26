import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="section">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-4 glass px-4 py-3 flex items-center justify-between"
        >
          <Link to="/" className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
            <span className="text-brand-400">Izza</span>
            <span className="text-accent-500">.dev</span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `btn-ghost ${isActive ? "text-pop-500 border-pop-500/50" : "text-white/80"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a href="/Izza_Shahzad_CV.pdf" download className="btn-primary ml-2">
              Download CV
            </a>
          </div>

          <div className="md:hidden">
            <a href="/Izza_Shahzad_CV.pdf" download className="btn-primary">CV</a>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
