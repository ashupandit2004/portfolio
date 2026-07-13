import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
    >
      <div className="text-center">

        <div className="w-24 h-24 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h1 className="mt-8 text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Ashu Jha
        </h1>

        <p className="text-gray-400 mt-4">
          Loading Portfolio...
        </p>

      </div>
    </motion.div>
  );
}