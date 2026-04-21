const formEmail = document.querySelector(".footer-top-center-bar-form");
const openRegisterBtn = document.querySelector(".register-button");
const closeRegisterBtn = document.querySelector(".close-register-button");

formEmail.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!formEmail.checkValidity()) {
    return;
  }
  const formData = new FormData(formEmail);
  const data = Object.fromEntries(formData.entries());
  console.log(data)
});











openRegisterButton.addEventListener("click", () => {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
});
closeRegisterButton.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});