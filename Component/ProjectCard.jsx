// ProjectCard.jsx
import { motion } from "framer-motion";

export default function ProjectCard({ img, title, tech, role }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white shadow-lg rounded-2xl p-4 max-w-sm"
    >
      <img src={img} alt={title} className="rounded-xl mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-1">📌 기술: {tech}</p>
      <p className="text-gray-600">💻 맡은 역할: {role}</p>
    </motion.div>
  );
}
