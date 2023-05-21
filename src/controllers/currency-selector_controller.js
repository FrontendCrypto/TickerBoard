import { Controller } from "stimulus";

export default class extends Controller {
    static values = {
        currency: {
            type: String,
            default: 'EUR'
        }
    }
    connect() {

    }

    currencyChange(event) {
        const element = event.target;
        const value = element.value
        this.currencyValue = value;
    }

    currencyValueChanged(value, previousValue) {
        const data = {
            currency: value,
        }
        const updateCurrencyEvent = new CustomEvent('update-currency', { detail: data })
        document.dispatchEvent(updateCurrencyEvent);
    }

}