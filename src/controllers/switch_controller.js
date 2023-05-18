import { Controller } from "stimulus";

export default class extends Controller {
    static targets = ["status"];
    static values = {
        active: Boolean,
        target: String,
        type: String
    }

    connect() {
        this.toggleManager(this.element)
    }

    toggleManager(element) {
        this.activeValue ? this.disable(element) : this.enable(element)
    }

    toggle(event) {
        this.toggleManager(event.currentTarget)
    }

    activeValueChanged() {
        let status;
        let target = this.targetValue;
        if (this.activeValue) {
            status = true
        } else {
            status = false
        }

        this.dispatch('toggle', { detail: {status, target: target}})
    }

    enable(element) {
        this.activeValue = true;
        this.statusTarget.innerHTML = 'Hide';
        element.classList.add('active');
    }

    disable(element) {
        this.activeValue = false;
        this.statusTarget.innerHTML = 'Show';
        element.classList.remove('active');
    }

}
