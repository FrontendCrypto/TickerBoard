import { Controller } from "stimulus";

export default class extends Controller {
    static targets = ["button", "input", "clear"];
    static values = {
        visible: Boolean
    }
    connect() {

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
        this.hideClear();
    }

    showClear() {
        this.clearTarget.style.display ='block'
    }

    hideClear() {
        this.clearTarget.style.display ='none'
    }

    clearVisibilityManager() {
        this.hasValue() ? this.showClear() : this.hideClear();
    }

    onKeyPress() {
        this.clearVisibilityManager()
    }

    hasValue() {
        return this.inputTarget.value != '';
    }

}
