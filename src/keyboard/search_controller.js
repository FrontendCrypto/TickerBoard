import { Controller } from "stimulus";

export default class extends Controller {
    static targets = ["button", "input"];
    static values = {
        visible: Boolean
    }
    connect() {
        console.log('dentro search')
    }
    toggleVisibility() {
        if (this.visibleValue) {
            this.visibleValue = false
            this.hideInput();
        } else {
            this.visibleValue = true
            this.showInput();
        }
    }
    showInput() {
        this.element.classList.add('show');
        this.inputTarget.focus();
    }
    hideInput() {
        this.element.classList.remove('show');
        this.clearInput();
    }
    clearInput() {
        this.inputTarget.value = '';
        this.inputTarget.focus();
    }
}