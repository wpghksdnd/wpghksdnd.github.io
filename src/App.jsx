import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Projects from "./components/Projects";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showIntro ? <Intro /> : (
        <>
          <Main />
          <Projects />
        </>
      )}
    </div>
  );
}
