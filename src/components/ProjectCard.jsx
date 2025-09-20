export default function ProjectCard({ title, tech, role }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-tech">📌 기술 스택: {tech}</p>
        <p className="project-role">💻 맡은 역할: {role}</p>
      </div>
    </div>
  );
}
