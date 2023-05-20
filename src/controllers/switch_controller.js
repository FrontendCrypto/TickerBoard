import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['status'];
  static values = {
    active: Boolean,
    target: String,
  };

  connect() {
    if (this.hasStatusTarget) {
      this.checkLocalStorage();
    }
  }

  checkLocalStorage() {
    const status = localStorage.getItem(this.targetValue);

    status === 'true' ? this.enable(this.element) : this.disable(this.element);
  }

  toggleManager(element) {
    this.activeValue ? this.disable(element) : this.enable(element);
  }

  toggle(event) {
    this.toggleManager(event.currentTarget);
  }

  activeValueChanged() {
    const status = this.activeValue;
    const target = this.targetValue;

    this.dispatch('toggle', { detail: { status, target } });
  }

  enable(element) {
    this.activeValue = true;
    this.statusTarget.textContent = 'Hide';
    localStorage.setItem(this.targetValue, true);
    element.classList.add('active');
  }

  disable(element) {
    this.activeValue = false;
    this.statusTarget.textContent = 'Show';
    localStorage.setItem(this.targetValue, false);
    element.classList.remove('active');
  }
}
