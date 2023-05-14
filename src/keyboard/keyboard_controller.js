import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["key", "configuration", "notch", "categories", "actions"];
  static values = {
    configuration: Boolean,
    visible: Boolean,
  };

  startY = 0;

  connect() {
    console.log("Keyboard connected");
    this.notchTarget.addEventListener("dragstart", this.dragStart.bind(this));
    this.notchTarget.addEventListener("dragend", this.dragEnd.bind(this));
  }

  // @todo la lógica del drag debe de ir en un controlador propio del notch
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

  showKeyboard() {
    this.element.style.bottom = 0;
  }

  hideKeyBoard() {
    const height = this.element.offsetHeight;
    this.element.style.bottom = `-${height}px`;
    this.configurationVisibilityManager();
  }

  onKeypress(e) {
    const element = e.currentTarget;
    const keyType = element.dataset.type;
    console.log(keyType);

    switch (keyType) {
      case "ticker":
        console.log(element.dataset.value);
        break;
      case "category":
        console.log(element.dataset.value);
        break;
      case "favorite":
        break;
      case "search":
        break;
      case "configuration":
        this.configurationVisibilityManager();
        console.log(this.configurationValue);
        break;
      case "action":
        console.log(e.currentTarget.dataset.value);
        break;
      default:
        console.log("other key");
    }
  }

  configurationVisibilityManager() {
    const height = this.configurationTarget.offsetHeight;
    const offset = height + 24 + 16;
    if (this.configurationValue) {
      this.configurationValue = false;
      this.configurationTarget.style.top = "0";
    } else {
      this.configurationValue = true;
      this.configurationTarget.style.top = `-${offset}px`;
    }
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
}
