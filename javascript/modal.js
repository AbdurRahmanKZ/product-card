export default class Modal {
  constructor(modalWrapper) {
    this.modalWrapper = modalWrapper;
    this.modal = this.modalWrapper.querySelector(".modal");
    this.overlay = this.modalWrapper.querySelector(".overlay");
    this.openButton = this.modalWrapper.querySelector(".register-button");
    this.closeButton = this.modalWrapper.querySelector(".close-register-button");
  }
  quickCheck() {
    console.log(this.modalWrapper);
console.log(this.openButton);
  }
  openModal() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
  }
  closeModal() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
  }
  checkOpen() {
    if (this.modal.classList.contains("modal-showed")) {
      return true;
    } else {
      return false;
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
}