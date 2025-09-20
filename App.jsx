import { useState, useEffect } from "react";
import Intro from "./components/Intro.jsx";
import Main from "./components/Main.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {showIntro ? <Intro /> : (
        <>
          <Main />
          <Projects />
        </>
      )}
    </div>
  );
}

export default App;
