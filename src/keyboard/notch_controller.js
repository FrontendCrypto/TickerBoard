import { Controller } from "stimulus";

export default class extends Controller {
  startY = 0;
  connect() {
    this.element.addEventListener("dragstart", this.dragStart.bind(this));
    this.element.addEventListener("dragend", this.dragEnd.bind(this));
  }

  dragStart(event) {
    // this.startY = event.clientY;
    console.log("dragstart en notch");
  }

  dragEnd(event) {
    console.log("dragend en notch");
    // const currentY = event.clientY;
    // const deltaY = currentY - this.startY;

    // if (deltaY > 0) {
    //   this.hideKeyBoard();
    // } else if (deltaY < 0) {
    //   this.showKeyboard();
    // }
  }
}
