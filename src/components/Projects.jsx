import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    { img: "/project1.png", title: "국밥집 키요스크", tech: "C# winform, mysql", role: "개인 프로젝트" },
    { img: "/project2.png", title: "회사 내부 ERP 프로그램", tech: "C# winform, mysql", role: "메시지기능 구현" },
    { img: "/project3.png", title: "Capstone(계명여지도)", tech: "JAVA, mariaDB", role: "공공기관 API 재가공 및 정제" },
    { img: "/project4.png", title: "AI를 이용한 주가예측프로그램", tech: "python, pytorch", role: "개인 프로젝트" },
  ];

  return (
    <section className="projects-container">
      <h1>📂 프로젝트</h1>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

