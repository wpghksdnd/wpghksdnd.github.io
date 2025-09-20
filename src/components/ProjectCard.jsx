export default function ProjectCard({ img, title, tech, role }) {
  return (
    <div className="project-card">
      <img src={img} alt={title} className="project-img" />
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-tech">📌 기술: {tech}</p>
        <p className="project-role">💻 맡은 역할: {role}</p>
      </div>
    </div>
  );
}
