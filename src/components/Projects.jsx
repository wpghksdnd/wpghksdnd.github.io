import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    { title: "국밥집 키요스크", tech: "C# winform, mysql", role: "개인 프로젝트" },
    { title: "회사 내부 ERP 프로그램", tech: "C# winform, mysql", role: "메시지기능 구현" },
    { title: "Capstone(계명여지도)", tech: "JAVA, mariaDB", role: "공공기관 API 재가공 및 정제" },
    { title: "AI를 이용한 주가예측프로그램", tech: "python, pytorch", role: "개인 프로젝트" },
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

