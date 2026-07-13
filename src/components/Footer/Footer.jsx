import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-cyan-500/20 py-12">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ashu Jha
            </h2>

            <p className="text-gray-400 mt-3">
              Building modern applications with Python, AI and Web Technologies.
            </p>
          </div>

          <div className="flex gap-6 text-3xl">

            <a
              href="https://github.com/ashupandit2004"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/ashu-jha-967839297"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/ashujh_a/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        <hr className="my-8 border-cyan-500/20" />

        <div className="flex justify-between items-center">

          <p className="text-gray-500">
            © 2026 Ashu Jha. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="bg-cyan-500 hover:bg-cyan-400 p-4 rounded-full transition"
          >
            <FaArrowUp className="text-black" />
          </a>

        </div>

      </div>

    </footer>
  );
}