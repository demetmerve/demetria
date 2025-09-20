function loadSectionContent(sectionId, filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(sectionId).innerHTML = data;
    })
    .catch(error => {
      console.error("İçerik yüklenemedi:", filePath, error);
      document.getElementById(sectionId).innerHTML = "<p>İçerik yüklenemedi.</p>";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadSectionContent("periods-content", "assets/content/periods.html");
});
