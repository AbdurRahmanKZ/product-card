import Modal from "./modal.js";
import Form from "./form.js";

const formEmail = document.querySelector(".footer-subscribe-form");
const formModal = document.querySelector(".modal-form");
const openRegisterBtn = document.querySelector(".register-button");
const closeRegisterBtn = document.querySelector(".close-register-button");
const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal");
const birthDateInput = document.getElementById("form-birthdate");
const inputPassword = document.getElementById("form-password");
const inputPassword2 = document.getElementById("form-repeat-password")

const modalClass = new Modal(
  modal,
  closeRegisterBtn,
  openRegisterBtn,
  overlay
);
const formEmailClass = new Form(formEmail);
const formClass = new Form(
  formModal,
  inputPassword,
  inputPassword2,
  () => modalClass.closeModal()
);

modalClass.clickModalCloseButton();
modalClass.clickModalOpenButton();
formClass.submitModal();
formClass.inputModal();
formEmailClass.submit();