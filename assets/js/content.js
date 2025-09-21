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
// assets/js/content.js

// "periods-content" div'ini bul
const periodsContainer = document.getElementById("periods-content");

// periods.html dosyasını yükle
fetch("assets/content/periods.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("İçerik yüklenemedi: " + response.status);
    }
    return response.text();
  })
  .then(data => {
    periodsContainer.innerHTML = data;
  })
  .catch(error => {
    console.error("Hata:", error);
    periodsContainer.innerHTML = "<p style='color:red'>İçerik yüklenemedi.</p>";
  });

