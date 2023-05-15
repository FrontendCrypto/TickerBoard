import { Controller } from "stimulus";

export default class extends Controller {
    static targets = ["status"];
    static values = {
        active: Boolean,
        target: String,
    }

    connect() {
        this.activeValue ? this.on(this.element) : this.off(this.element);
    }

    toggle(event) {
        const element = event.currentTarget;
        this.activeValue ? this.off(element) : this.on(element);
    }

    on(element) {
        const event = new CustomEvent(`show-${this.targetValue}`);

        this.activeValue = true;
        this.statusTarget.innerHTML = 'Hide';
        element.classList.add('active');
        document.dispatchEvent(event)
    }

    off(element) {
        const event = new CustomEvent(`hide-${this.targetValue}`);

        this.activeValue = false;
        this.statusTarget.innerHTML = 'Show';
        element.classList.remove('active');
        document.dispatchEvent(event)
    }

}
