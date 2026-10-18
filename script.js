"use strict";

// Menampilkan tahun secara otomatis
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Efek klik pada tautan
document.querySelectorAll(".link").forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("clicked");

    // Menghapus class setelah efek klik
    setTimeout(() => {
      link.classList.remove("clicked");
    }, 250);
  });
});
