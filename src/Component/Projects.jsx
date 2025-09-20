import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const projects = [
    { img: "/project1.png", title: "프로젝트 1", tech: "React, Node.js", role: "프론트엔드" },
    { img: "/project2.png", title: "프로젝트 2", tech: "Python, Flask", role: "백엔드" },
    { img: "/project3.png", title: "프로젝트 3", tech: "Java, Spring", role: "서버" },
    { img: "/project4.png", title: "프로젝트 4", tech: "Next.js, CSS", role: "풀스택" },
  ];

  return (
    <section className="projects-section">
      <h1>📂 프로젝트</h1>
      <div className="projects-grid">
        {projects.map((p,i) => <ProjectCard key={i} {...p} />)}
      </div>
    </section>
  );
}
