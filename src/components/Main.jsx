import React, { useEffect, useState } from "react";
import "../index.css";

const backgrounds = [
  "https://source.unsplash.com/1600x900/?nature,forest",
  "https://source.unsplash.com/1600x900/?city,night",
  "https://source.unsplash.com/1600x900/?technology,computer",
  "https://source.unsplash.com/1600x900/?mountain,landscape",
  "https://source.unsplash.com/1600x900/?ocean,beach"
];

export default function Main() {
  const [bg, setBg] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    setBg(backgrounds[randomIndex]);
  }, []);

  return (
    <section
      className="main-container"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <h1 className="main-title">안녕하세요, 저는 제환웅입니다 👋</h1>
      <p className="main-phone">전화번호: 010-5110-3017</p>
      <p className="main-desc">개발자 포트폴리오입니다!</p>
    </section>
  );
}
