export default class Modal {
  constructor(idModal, closeButtonId, openButtonId, formId, passwordId, password2Id) {
    this.modal = idModal;
    this.closeButton = closeButtonId;
    this.openButton = openButtonId;
    this.form = formId;
    this.password = passwordId;
    this.password2 = password2Id;
  }
  openModal() {
    this.modal.classList.add("modal-showed");
    this.modal.classList.add("overlay-showed");
  }
  closeModal() {
    this.modal.classList.remove("modal-showed");
    this.modal.classList.remove("overlay-showed");
  }
  checkOpen() {
    if (this.modal.classList.contains("modal-showed")) {
      console.log("modal showed");
    } else {
      console.log("modal-closed");
    }
  }
  clickModalCloseButton() {
    this.closeButton.addEventListener("click", () => {
      this.closeModal();
    });
  }
  clickModalOpenButton() {
    this.openButton.addEventListener("click", () => {
      this.openModal();
    });
  }
  submitModal() {
    this.form.addEventListener("submit", (e) => {
      console.log("submit works");
      e.preventDefault();
      if (!(this.form.checkValidity())) {
        this.password.setCustomValidity("не валидно");
        this.password.reportValidity();
        return;
      }
      if (this.password.value !== this.password2.value) {
        this.password.setCustomValidity("пароли разные!");
        this.password.reportValidity();
        return;
      }
      if (this.password.value.length < 8) {
        this.password.setCustomValidity("пароль короткий!");
        this.password.reportValidity();
        return;
      }
      this.password.setCustomValidity("");
      const formData = new FormData(this.form);
      const obj = Object.fromEntries(formData.entries());
      console.log(obj);
      this.closeModal();
    });
  }
  inputModal() {
    this.password.addEventListener("input", () => {
      this.password.setCustomValidity("");
    });
    this.password2.addEventListener("input", () => {
      this.password2.setCustomValidity("");
    })
  }
}
export class Form {
  constructor(inputEmail) {
    this.inputEmail = inputEmail;
  }
  submit() {
    this.inputEmail.addEventListener("submit", (e) => {
      e.preventDefault();
      if(this.inputEmail.checkValidity()) {
        const formData = new FormData(this.inputEmail);
        const obj = Object.fromEntries(formData.entries());
        console.log(obj);
      }
    });
  }
}