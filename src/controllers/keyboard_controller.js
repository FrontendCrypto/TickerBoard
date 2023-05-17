import { Controller } from "stimulus";
import { marketData, walletBalances } from '../data';

export default class extends Controller {
  static targets = ["key", "configuration", "notch", "categories", "actions"];
  static values = {
    configuration: Boolean,
  };

  // @todo set preferences in localStorage

  connect() {
    this.startY = 0;
    this.element.addEventListener("dragstart", this.dragStart.bind(this));
    this.element.addEventListener("dragend", this.dragEnd.bind(this));
  }

  onSelectedCoin(event) {
    // @todo refactor: use stimulus built ins instead dispatch custom event
    const ticker = event.currentTarget.dataset['ticker'];
    const data = [marketData[ticker], walletBalances[ticker]];
    const updateContentEvent = new CustomEvent('update-content', {detail: data});

    document.dispatchEvent(updateContentEvent)
  }

  manageChunksVisibility(event) {
    const status = event.detail.status;
    const target = event.detail.target;

    switch (target) {
      case 'categories':
        status ? this.showCategories() : this.hideCategories()
        break
      case 'actions':
        status ? this.showActions() : this.hideActions()
        break
    }
  }

  dragStart(event) {
    this.startY = event.clientY;
  }

  dragEnd(event) {
    const currentY = event.clientY;
    const deltaY = currentY - this.startY;

    if (deltaY > 0) {
      this.hideKeyBoard();
    } else if (deltaY < 0) {
      this.showKeyboard();
    }
  }

  toggleConfiguration() {
    this.configurationValue ? this.hideConfiguration() : this.showConfiguration();
  }

  showKeyboard() {
    this.element.style.bottom = 0;
    this.hideConfiguration();
  }

  hideKeyBoard() {
    const height = this.element.offsetHeight;

    this.element.style.bottom = `-${height}px`;
    this.hideConfiguration();
  }

  showCategories() {
    this.categoriesTarget.style.display = "grid";
  }

  hideCategories() {
    this.categoriesTarget.style.display = "none";
  }

  showActions() {
    this.actionsTarget.style.display = "grid";
  }

  hideActions() {
    this.actionsTarget.style.display = "none";
  }
  showConfiguration() {
    const height = this.configurationTarget.offsetHeight;
    const offset = height + 24 + 16;

    this.configurationValue = true;
    this.configurationTarget.style.top = `-${offset}px`;
  }

  hideConfiguration() {
    this.configurationValue = false;
    this.configurationTarget.style.top = "0";
  }

}
