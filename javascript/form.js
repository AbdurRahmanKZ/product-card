export default class Form {
  constructor(formId, passwordId, password2Id, onSucces) {
    this.form = formId;
    this.password = passwordId;
    this.password2 = password2Id;
    this.onSucces = onSucces;
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
      this.onSucces();
    });
  }
  submit() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.form.checkValidity()) {
        const formData = new FormData(this.form);
        const obj = Object.fromEntries(formData.entries());
        console.log(obj);
      }
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

export class FormEmail {
  constructor(inputId) {
    this.inputId = inputId;
  }
  submit() {
    this.inputId.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.inputId.checkValidity()) {
        const formData = new FormData(this.inputId);
        const obj = Object.fromEntries(formData.entries());
        console.log(obj);
      }
    });
  }
}