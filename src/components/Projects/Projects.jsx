import { motion } from "framer-motion";

const projects = [
  {
    title: "YatraBuddy",
    description:
      "A travel planning website to discover destinations, hotels, maps, and trip information.",
    tech: ["Python", "FastAPI", "HTML", "CSS", "JavaScript"],
    demo: "https://png.pngtree.com/png-clipart/20210704/original/pngtree-coming-soon-banner-transparent-background-png-image_6499827.jpg",
    github: "https://png.pngtree.com/png-clipart/20210704/original/pngtree-coming-soon-banner-transparent-background-png-image_6499827.jpg",
  },
  {
    title: "SARKAR AI",
    description:
      "An AI voice assistant capable of automating tasks and answering user queries.",
    tech: ["Python", "AI", "Speech Recognition"],
    demo: "https://github.com/ashupandit2004/voice-assistant/tree/main",
    github: "https://github.com/ashupandit2004/SARKAR-AI",
  },
  {
    title: "Institute Management System",
    description:
      "A desktop application for managing students, teachers, admissions, and records.",
    tech: ["Python", "Tkinter", "MySQL"],
    demo: "https://github.com/ashupandit2004/institute_project",
    github: "https://github.com/ashupandit2004/Institute-Management-System",
  },
  {
    title: "library_system",
    description:
      "A modern personal portfolio built with React, Three.js and Framer Motion.",
    tech: ["React", "Three.js", "Tailwind CSS"],
    demo: "https://your-portfolio.vercel.app",
    github: "https://github.com/ashupandit2004/Portfolio",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-transparent px-8 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                rotateX: 4,
                rotateY: 4,
              }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/5 backdrop-blur-2xl border border-cyan-500/20 p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,255,255,.25)] transition-all"
            >

              <h3 className="text-3xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-300 mt-4 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-8">

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition-all"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
                >
                  GitHub
                </a>

              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}