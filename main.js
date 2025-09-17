console.log("Proyecto Web iniciado correctamente 🚀");

//  Interactividad: abrir modal con video
const buttons = document.querySelectorAll(".tarjeta button"); //  nueva línea
const modal = document.getElementById("modal"); //  nueva línea
const modalVideo = document.getElementById("modal-video"); //  nueva línea
const closeModal = document.getElementById("close-modal"); //  nueva línea

buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const card = btn.parentElement;
    const videoFile = card.getAttribute("data-video");
    modalVideo.src = "video/" + videoFile; //  asignar video correcto
    modal.style.display = "flex"; //  mostrar modal
    modalVideo.pause(); //  pausar por seguridad
    modalVideo.currentTime = 0; //  reiniciar video
    modalVideo.muted = false; //  asegurar sonido
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0;
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.currentTime = 0;
  }
});
