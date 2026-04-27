import Modal from "./modal.js";
import Form from "./form.js";

const formEmail = document.querySelector(".footer-subscribe-form");
const formModal = document.querySelector(".modal-form");
const modalWrapper = document.querySelector(".modal-wrapper");

const modalClass = new Modal(modalWrapper);
const formEmailClass = new Form(formEmail);
const formClass = new Form(formModal);

modalClass.clickModalCloseButton();
modalClass.clickModalOpenButton();
modalClass.quickCheck();
formClass.submitModal(() => {
  modalClass.closeModal();
});
formClass.inputModal();
formEmailClass.submit();