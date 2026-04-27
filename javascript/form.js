export default class Form {
  constructor(formId) {
    this.form = formId;
    this.password = this.form.querySelector("#form-password");
    this.password2 = this.form.querySelector("#form-repeat-password");
  }
  submitModal(onSucces) {
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
      this.resetForm();
      onSucces();
    });
  }
  submit() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.form.checkValidity()) {
        const formData = new FormData(this.form);
        const obj = Object.fromEntries(formData.entries());
        console.log(obj);
        this.resetForm();
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
  isValid() {
    return(this.form.checkValidity());
  }
  resetForm() {
    this.form.reset();
  }
}