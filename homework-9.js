const formEmail = document.querySelector(".footer-top-center-bar-form");
const openRegisterBtn = document.querySelector(".register-button");
const closeRegisterBtn = document.querySelector(".close-register-button");
const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal");
const formModal = document.querySelector(".modal-form");
const modalInput = document.querySelector(".modal-input");
const birthDateInput = document.getElementById("form-birthdate");
const inputPassword = document.getElementById("form-password");
const inputRepeatPassword = document.getElementById("form-repeat-password");

formEmail.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!formEmail.checkValidity()) {
    return;
  }
  const formData = new FormData(formEmail);
  const data = Object.fromEntries(formData.entries());
  console.log(data)
});
closeRegisterBtn.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
})
openRegisterBtn.addEventListener("click", () => {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
});

formModal.addEventListener("submit", (e) => {
  e.preventDefault();
  inputPassword.setCustomValidity("");
  if (!formModal.checkValidity()) {
    return;
  }
  if (inputPassword.value === inputRepeatPassword.value && inputPassword.value.length >= 8) {
    inputPassword.setCustomValidity("");
    const formData = new FormData(formModal);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);

    modal.classList.remove("modal-showed");
    overlay.classList.remove("overlay-showed");
  } else {
    e.preventDefault();
    inputPassword.setCustomValidity("Пароли разные или короткие")
    inputPassword.reportValidity();
  }
});