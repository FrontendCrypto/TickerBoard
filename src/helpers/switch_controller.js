import { Controller } from "stimulus";

export default class extends Controller {
    static values = {
        active: Boolean
    }
    connect() {
        
    }
    toggle(e) {
        const element = e.currentTarget;
        this.activeValue ? this.off(element) : this.on(element);
    }
    on(element) {
        this.activeValue = true;
        element.classList.add('active')
    }
    off(element) {
        this.activeValue = false;
        element.classList.remove('active')
    }
}