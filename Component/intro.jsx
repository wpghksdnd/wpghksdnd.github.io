// Intro.jsx
import { motion } from "framer-motion";

export default function Intro() {
  const letters = "jehwanung".split("");

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-screen bg-green-600 flex items-center justify-center"
    >
      <div className="text-white text-5xl font-bold flex gap-1">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
