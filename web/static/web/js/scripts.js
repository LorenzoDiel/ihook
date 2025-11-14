// ===============================
// scripts.js
// Archivo JS global para iHook
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  // --- Ocultar botón de WhatsApp cuando aparece el footer
  const btn = document.getElementById("whatsappFlotante");
  const footer = document.getElementById("contacto");

  if (btn && footer && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        // Oculta el botón cuando el footer entra al viewport
        btn.style.display = entries[0].isIntersecting ? "none" : "";
      },
      { threshold: 0 }
    );
    io.observe(footer);
  }
});