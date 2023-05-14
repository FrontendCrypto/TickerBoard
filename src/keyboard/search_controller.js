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
        this.visibleValue ? this.hideInput() : this.showInput();
    }
    showInput() {
        this.visibleValue = true
        this.element.classList.add('show');
        this.inputTarget.focus();
    }
    hideInput() {
        this.visibleValue = false
        this.element.classList.remove('show');
        this.clearInput();
    }
    clearInput() {
        this.inputTarget.value = '';
        this.inputTarget.focus();
    }
}