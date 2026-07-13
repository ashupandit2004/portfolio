import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-transparent px-8 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8">

            <h3 className="text-3xl font-bold text-cyan-400 mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span className="text-gray-200">
                    ashu46689@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-2xl" />
                <span className="text-gray-200">
                    +91 9266892396, 9354283110
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-cyan-400 text-2xl" />
                <span className="text-gray-200">
                    github.com/ashupandit2004

                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-cyan-400 text-2xl" />
                <span className="text-gray-200">
                    linkedin.com/in/ashu-jha-967839297
                </span>
              </div>

            </div>

          </div>

          {/* Right Form */}
        <form
            className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-cyan-500/20 shadow-[0_0_40px_rgba(0,255,255,.08)] p-10 space-y-6"
        >
            <input
                type="text"
                placeholder="Your Name"
                className="w-full p-5 rounded-2xl
                 bg-slate-900/80
                border border-cyan-500/20
                text-white
                placeholder:text-gray-400
                outline-none
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-500/30
                transition-all duration-300"
            />

            <input
                type="email"
                placeholder="Your Email"
                className="w-full p-5 rounded-2xl
                bg-slate-900/80
                border border-cyan-500/20
                text-white
                placeholder:text-gray-400
                outline-none
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-500/30
                transition-all duration-300"
            />

            <textarea
                rows="7"
                placeholder="Write your message..."
                className="w-full p-5 rounded-2xl
                bg-slate-900/80
                border border-cyan-500/20
                text-white
                placeholder:text-gray-400
                outline-none
                resize-none
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-500/30
                transition-all duration-300"
            />

            <button
                className="w-full py-5 rounded-2xl
                bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600
                text-white
                font-bold
                text-lg
                hover:scale-[1.02]
                hover:shadow-[0_0_40px_#06b6d4]
                transition-all duration-300"
            >
                Send Message 🚀
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}