export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
    this.closeButton = this.modal.querySelector('#modal-close-button');
    this.closeHandler = () => this.close();
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#addCloseEvents();
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.#removeCloseEvents();
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => this.open());
  }

  #addCloseEvents() {
    this.closeButton.addEventListener('click', this.closeHandler);
    
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.closeHandler);
    }
  }

  #removeCloseEvents() {
    this.closeButton.removeEventListener('click', this.closeHandler);
    this.overlay.removeEventListener('click', this.closeHandler);
  }
}