import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold text-cyan-400">
          Ashu Jha
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8">
          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white hover:text-cyan-400 transition"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Hire Me */}
        <button
          onClick={() => scrollTo("contact")}
          className="hidden lg:block bg-cyan-500 text-black px-6 py-2 rounded-full hover:bg-cyan-400"
        >
          Hire Me
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/20">

          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-8 py-4 text-white hover:bg-cyan-500/20"
            >
              {item.name}
            </button>
          ))}

          <button
            onClick={() => scrollTo("contact")}
            className="w-full py-4 bg-cyan-500 text-black font-bold"
          >
            Hire Me
          </button>

        </div>
      )}
    </motion.nav>
  );
}

<a
  href="/resume.pdf"
  download="Ashu_Jha_Resume.pdf"
  className="hidden lg:block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:scale-105 transition"
>
  Resume
</a>