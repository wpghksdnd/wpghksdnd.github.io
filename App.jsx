// App.jsx
import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Projects from "./components/Projects";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen">
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
