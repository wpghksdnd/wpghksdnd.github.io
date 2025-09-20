import { useEffect, useState } from "react";

export default function Intro() {
  const letters = "jehwanung".split("");
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => [...prev, letters[current]]);
      current++;
      if (current === letters.length) clearInterval(interval);
    }, 100); // 글자 하나씩 나타나는 속도
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="intro-container">
      {displayed.map((char, i) => (
        <span key={i} className="intro-letter">{char}</span>
      ))}
    </div>
  );
}
