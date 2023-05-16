import { Controller } from "stimulus";

export default class extends Controller {
  startY = 0;

  connect() {
    this.startY = 0;
    this.element.addEventListener("dragstart", this.dragStart.bind(this));
    this.element.addEventListener("dragend", this.dragEnd.bind(this));
  }

  dragStart(event) {
    console.log("dragstart en notchsgwrgrwg");
  }

  dragEnd(event) {
    console.log("dragend en notrwgwrgch");
  }
}
