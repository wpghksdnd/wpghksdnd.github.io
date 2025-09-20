import { useState, useEffect, useRef } from "react";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Projects from "./components/Projects";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);

      // Intro 끝나면 Main 섹션으로 부드럽게 스크롤
      mainRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 2000); // Intro 애니메이션 2초

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showIntro ? (
        <Intro />
      ) : (
        <>
          <div ref={mainRef}>
            <Main />
          </div>
          <Projects />
        </>
      )}
    </div>
  );
}
