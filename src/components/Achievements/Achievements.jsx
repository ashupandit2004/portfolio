import { motion } from "framer-motion";
import { FaCode, FaRobot, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

const achievements = [
  {
    icon: <FaLaptopCode />,
    title: "Portfolio Projects",
    desc: "Built multiple personal and academic software projects.",
  },
  {
    icon: <FaRobot />,
    title: "AI Learning",
    desc: "Learning Artificial Intelligence, Prompt Engineering and AI tools.",
  },
  {
    icon: <FaCode />,
    title: "Python Development",
    desc: "Created desktop applications and automation projects using Python.",
  },
  {
    icon: <FaGraduationCap />,
    title: "BCA Graduate",
    desc: "Completed Bachelor of Computer Applications.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen bg-transparentpx-8 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 text-center hover:border-cyan-400 hover:shadow-[0_0_30px_#06b6d4] transition-all"
            >
              <div className="text-5xl text-cyan-400 mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}