import Modal from "./modal.js";
import { Form } from "./modal.js";

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
const inputSub = document.querySelector(".footer-subscribe-input");

const modalDom = new Modal(
  modal,
  closeRegisterBtn,
  openRegisterBtn,
  formModal,
  inputPassword,
  inputPassword2
);
const formEmailDom = new Form(formEmail);

modalDom.clickModalCloseButton();
modalDom.clickModalOpenButton();
modalDom.submitModal();
modalDom.inputModal();
formEmailDom.submit();