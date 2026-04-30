export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
    this.closeButton = this.modal.querySelector('#modal-close-button')
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open()
      this.#initClose()
    });
  }

  #initClose() {
    const closeEvent = () => {
      this.close()
      closeButton.removeEventListener('click', closeEvent);
    }
    closeButton.addEventListener('click', closeEvent);

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', () => {
        if (!this.isOpen()) return;
        if (!this.shouldCloseOnOverlay) return;
        this.close();
      })
    }
  }
}