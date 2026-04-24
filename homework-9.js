const formEmail = document.querySelector(".footer-subscribe-form");
const openRegisterBtn = document.querySelector(".register-button");
const closeRegisterBtn = document.querySelector(".close-register-button");
const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal");
const formModal = document.querySelector(".modal-form");
const modalInput = document.querySelector(".modal-input");
const birthDateInput = document.getElementById("form-birthdate");
const inputPassword = document.getElementById("form-password");
const inputPassword2 = document.getElementById("form-repeat-password")
const inputRepeatPassword = document.getElementById("form-repeat-password");
const inputSub = document.querySelector(".footer-subscribe-input");

formEmail.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!formEmail.checkValidity()) {
    return;
  }
  const formData = new FormData(formEmail);
  const data = Object.fromEntries(formData.entries());
  console.log(data)
  inputSub.value = "";
});
closeRegisterBtn.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
})
openRegisterBtn.addEventListener("click", () => {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
});

let user;

formModal.addEventListener("submit", (e) => {
  e.preventDefault();
  inputPassword.setCustomValidity("");
  if (!formModal.checkValidity()) {
    inputPassword.reportValidity();
    return;
  }
  if (inputPassword.value !== inputRepeatPassword.value) {
    inputPassword.setCustomValidity("Пароли разные")
    inputPassword.reportValidity();
    return;
  }
  if (inputPassword.value.length < 8) {
    inputPassword.setCustomValidity("Пароли короткие")
    inputPassword.reportValidity();
    return;
  }
    const formData = new FormData(formModal);
    const obj = Object.fromEntries(formData.entries());
    obj.createdOn = new Date();
    user = obj;
    console.log(obj);
    console.log(user);
    formModal.reset();

    modal.classList.remove("modal-showed");
    overlay.classList.remove("overlay-showed");
});
inputPassword.addEventListener("input", () => {
  inputPassword.setCustomValidity("");
});
inputPassword2.addEventListener("input", () => {
  inputPassword2.setCustomValidity("");
});