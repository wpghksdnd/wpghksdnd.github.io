import { useEffect, useState } from "react";

export default function Intro() {
  const letters = "jehwanung".split("");
  const [visible, setVisible] = useState(Array(letters.length).fill(false));

  useEffect(() => {
    letters.forEach((_, i) => {
      setTimeout(() => {
        setVisible(prev => {
          const copy = [...prev];
          copy[i] = true;
          return copy;
        });
      }, i * 100);
    });
  }, []);

  return (
    <div className="intro-container">
      <div className="intro-text">
        {letters.map((char, i) => (
          <span key={i} style={{ opacity: visible[i] ? 1 : 0, transform: visible[i] ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.3s' }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
