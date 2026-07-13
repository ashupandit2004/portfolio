import { motion } from "framer-motion";
import profile from "../../assets/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-8 py-24 bg-transparent"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            <img
              src={profile}
              alt="Ashu"
              className="relative w-80 h-80 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_60px_#06b6d4]"
            />

          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-8">
            Hello! I'm <span className="text-cyan-400 font-bold">Ashu Jha</span>,
            a BCA student passionate about AI, Python, Web Development,
            React, FastAPI and creating modern digital experiences.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-4xl font-bold text-cyan-400">20+</h3>
              <p className="text-gray-400">Projects</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-4xl font-bold text-cyan-400">6+</h3>
              <p className="text-gray-400">Technologies</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-4xl font-bold text-cyan-400"></h3>
              <p className="text-gray-400">BCA Graduate</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-4xl font-bold text-cyan-400">∞</h3>
              <p className="text-gray-400">Learning</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}