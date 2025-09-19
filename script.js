function loadSection(htmlFile, cssFile) {
  // CSS 로드
  const oldCss = document.getElementById("section-style");
  if (oldCss) oldCss.remove();

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = cssFile;
  link.id = "section-style";
  document.head.appendChild(link);

  // HTML 로드
  fetch(htmlFile)
    .then(response => response.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
    })
    .catch(err => {
      document.getElementById("content").innerHTML = "<p>섹션을 불러오는 중 오류 발생</p>";
    });
}
