export default function ProjectCard({ img, title, tech, role }) {
  return (
    <div className="project-card">
      <img src={img} alt={title} className="project-img"/>
      <h2>{title}</h2>
      <p>📌 기술: {tech}</p>
      <p>💻 맡은 역할: {role}</p>
    </div>
  );
}
