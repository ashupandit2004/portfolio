import { useState } from "react";
import { motion } from "framer-motion";

import photo1 from "./photo1.jpg";
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.jpg";
import photo4 from "./photo4.jpg";
import photo5 from "./photo5.jpg";
import photo6 from "./photo6.jpg";



const images = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,

];

export default function Gallery() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="gallery"
      className="min-h-screen bg-transparent flex flex-col justify-center items-center px-8"
    >
      <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        My Gallery
      </h2>

      <button
        onClick={() => setOpen(true)}
        className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-lg font-bold hover:scale-105 transition"
      >
        📷 View My Gallery
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto p-10">

          <button
            onClick={() => setOpen(false)}
            className="fixed top-6 right-6 text-white text-4xl"
          >
            ✕
          </button>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt=""
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl shadow-xl cursor-pointer"
              />
            ))}

          </div>
        </div>
      )}
    </section>
  );
}