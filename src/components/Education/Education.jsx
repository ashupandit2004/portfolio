import { motion } from "framer-motion";

const education = [
  {
    year: "2023",
    title: "Senior Secondary (12th)",
    place: "CBSE Board",
    desc: "Completed Higher Secondary Education.",
  },
  {
    year: "2023 - 2026",
    title: "Bachelor of Computer Applications (BCA)",
    place: "MERI CET / MDU University",
    desc: "Learning Python, AI, Web Development, Databases and Software Development.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-transparent px-8 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="relative border-l-2 border-cyan-500/30 ml-6">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
              viewport={{ once: true }}
              className="mb-16 ml-8"
            >

              <div className="absolute -left-[13px] w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_20px_#06b6d4]"></div>

              <span className="text-cyan-400 font-bold">
                {item.year}
              </span>

              <h3 className="text-3xl font-bold text-white mt-2">
                {item.title}
              </h3>

              <h4 className="text-lg text-cyan-300 mt-2">
                {item.place}
              </h4>

              <p className="text-gray-400 mt-3 leading-7">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}