const openRegisterBtn = document.querySelector(".register-button");
const closeRegisterBtn = document.querySelector(".close-register-button");













openRegisterButton.addEventListener("click", () => {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
});
closeRegisterButton.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});