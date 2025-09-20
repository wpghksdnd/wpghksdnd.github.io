import { useState, useEffect } from "react";

export default function Main() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const backgrounds = [
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
  ];

  const bgUrl = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  return (
    <>
      {!bgLoaded && <div style={{ height: "100vh", backgroundColor: "#000" }}></div>}
      <div
        className="main-container"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <img
          src={bgUrl}
          alt="background"
          style={{ display: "none" }}
          onLoad={() => setBgLoaded(true)}
        />
        {bgLoaded && (
          <>
            <h1 className="main-title">안녕하세요, 저는 제환웅입니다</h1>
            <p className="main-phone">전화번호: 010-5110-3017</p>
            <p className="main-desc">개발자 포트폴리오입니다!</p>
          </>
        )}
      </div>
    </>
  );
}
