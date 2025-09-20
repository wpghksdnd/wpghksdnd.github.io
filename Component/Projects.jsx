// Projects.jsx
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      img: "/project1.png",
      title: "프로젝트 1",
      tech: "React, Node.js",
      role: "프론트엔드 개발"
    },
    {
      img: "/project2.png",
      title: "프로젝트 2",
      tech: "Python, Flask",
      role: "백엔드 개발"
    },
    {
      img: "/project3.png",
      title: "프로젝트 3",
      tech: "Java, Spring",
      role: "서버 개발"
    },
    {
      img: "/project4.png",
      title: "프로젝트 4",
      tech: "Next.js, Tailwind",
      role: "풀스택 개발"
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center py-20 gap-10">
      <h1 className="text-3xl font-bold mb-10">📂 프로젝트</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
