export default class Modal {
  constructor(idModal, closeButtonId, openButtonId, overlayId) {
    this.modal = idModal;
    this.closeButton = closeButtonId;
    this.openButton = openButtonId;
    this.overlay = overlayId;
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
}