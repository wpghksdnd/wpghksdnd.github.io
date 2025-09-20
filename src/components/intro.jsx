// src/components/Intro.jsx
import React, { useEffect, useState } from "react";
import "../index.css";

export default function Intro() {
  const letters = "jehwanung".split("");

  return (
    <div className="intro-container">
      {letters.map((char, i) => (
        <span
          key={i}
          className="intro-letter"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
