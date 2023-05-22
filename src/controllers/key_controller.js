import { Controller } from "stimulus";

export default class extends Controller {
    static values = {
        favorite: {
            type: Boolean,
            default: false,
        },
        ticker: {
            type: String,
            default: 'BTC',
        },
        category: {
            type: String,
            default: 'all',
        },
        selected: {
            type: Boolean,
            default: false,
        }
    }

    static classes = ["selected"]

    connect() {
        this.selectedValue ? this.enable() : this.disable();
    }

    onSelectedCoin(event) {
        this.toggle();
    }

    toggle() {
        const data = {
            ticker: this.tickerValue,
            category: this.categoryValue,
            favorite: this.favoriteValue,
            selected: this.selectedValue,
        }
        const selectedCoinEvent = new CustomEvent('on-selected-coin', { detail: data })

        // Clear selected class from all other keys
        this.clearSelectedClass()
        this.element.classList.toggle(this.selectedClass)
        this.selectedValue = !this.selectedValue;

        document.dispatchEvent(selectedCoinEvent)
    }

    enable() {
        this.element.classList.add(this.selectedClass)
    }

    disable() {
        this.element.classList.remove(this.selectedClass)
    }

    favoriteValueChanged() {
        // console.log(`${this.tickerValue} cambia a ${this.favoriteValue}`)
    }

    clearSelectedClass() {
        const selectedElements = document.querySelectorAll('.coin.selected')
        selectedElements.forEach((element) => {
            element.classList.remove(this.selectedClass)
        })
    }

}