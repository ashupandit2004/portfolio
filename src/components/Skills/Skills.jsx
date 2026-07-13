import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: "90" },
  { name: "MySQL", level: "95" },
  { name: "HTML", level: "60" },
  { name: "CSS", level: "Learning" },
  { name: "JavaScript", level: "Learning" },
  { name: "React", level: "Learning" },
  { name: "Tkinter", level: "98" },
  { name: "AI Tools & Prompt Engineering", level: "Advanced" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-transparent px-8 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 transition"
            >

              <div className="flex justify-between mb-3">
                <span className="text-xl font-semibold text-white">
                  {skill.name}
                </span>

                <span className="text-cyan-400">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-3 rounded-full bg-transparent overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}