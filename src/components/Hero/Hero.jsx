import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/profile.jpg";
import hero from "../../assets/hero.jpg";


export default function Hero() {
  return (
   <section
  id="home"
  className="min-h-screen flex items-center justify-center px-8 bg-transparent"
>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 text-xl mb-3">
            Hello, I'm
          </p>

          <h1 className="text-7xl lg:text-8xl font-extrabold leading-tight text-white">
  Ashu
  <br />
  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
    Jha
  </span>
</h1>

          <div className="text-3xl mt-6 font-semibold h-14">

            <TypeAnimation
              sequence={[
                "Python Developer",
                2000,
                "AI Enthusiast",
                2000,
                "Frontend Developer",
                2000,
                "FastAPI Developer",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />

          </div>

          <p className="text-gray-400 mt-6 text-lg max-w-xl">
            Passionate about AI, Python, Web Development and creating
            futuristic applications with beautiful UI and immersive user
            experiences.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold"
            >
              View Projects
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
            >
              Contact Me
            </button>

            <a
              href="/resume.pdf"
              download="Ashu_Jha_Resume.pdf"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            >
              📄 Download Resume
            </a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="flex justify-center items-center"
>
  <div className="relative flex justify-center items-center">

    <div className="absolute w-[430px] h-[430px] rounded-full bg-cyan-500/30 blur-3xl animate-pulse"></div>

   <img
      src={hero}
      alt="Ashu Jha"
      className="relative
      w-80 h-80
      lg:w-[430px] lg:h-[430px]
      rounded-full
      object-cover
      object-top
      border-4 border-cyan-400
      shadow-[0_0_70px_#06b6d4]
      hover:scale-105
      transition-all
      duration-500"
    />

  </div>
</motion.div>
      </div>

    </section>
  );
}