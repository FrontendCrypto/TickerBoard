import { Controller } from "stimulus";
import anime from 'animejs/lib/anime.es.js';

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
        // this.animateKeys();
        console.log('favorito!')
        document.addEventListener('on-favorite', (event) => {
            const data = event.detail
            // console.log(.ticker, event.detail.isFavorite)
            if (this.element.classList.contains(data.ticker.toLowerCase())) {
                console.log(this.element)
                this.animateKeyIcon(this.element.querySelector('img'), '.favorites-category-icon', 20, 100);
                this.favoriteValue = !data.isFavorite;
            }

        })
    }

    animateKeys() {
        anime({
            targets: '.key.coin',
            scale: [
                { value: .1, easing: 'easeOutSine', duration: 500 },
                { value: 1, easing: 'easeInOutQuad', duration: 900 }
            ],
            delay: anime.stagger(200, { grid: [7, 3], from: 'center' })
        });
    }

    onSelectedCoin(event) {
        this.toggle();
        this.animateKeyIcon(event.currentTarget.querySelector('img'), '.asset--image', 48, 700);
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
        this.clearSelectedClass();
        this.element.classList.toggle(this.selectedClass);
        this.selectedValue = !this.selectedValue;

        document.dispatchEvent(selectedCoinEvent);
    }

    enable() {
        this.element.classList.add(this.selectedClass);
    }

    disable() {
        this.element.classList.remove(this.selectedClass);
    }

    favoriteValueChanged() {
        // console.log(`${this.tickerValue} cambia a ${this.favoriteValue}`);
    }

    clearSelectedClass() {
        const selectedElements = document.querySelectorAll('.coin.selected');
        selectedElements.forEach((element) => {
            element.classList.remove(this.selectedClass);
        })
    }

    animateKeyIcon(element, target, size, duration) {
        // Get current icon
        const icon = element;

        // Get target icon
        const assetImage = document.querySelector(target);

        // Clone key icon
        const clonedIcon = icon.cloneNode(true);

        // Get origin coordiantes
        const iconRect = icon.getBoundingClientRect();

        // Get target coordinates
        const assetImageRect = assetImage.getBoundingClientRect();

        // Clear and style animation item
        clonedIcon.classList.remove('coin--icon');
        clonedIcon.style.position = 'absolute';
        clonedIcon.style.left = `${iconRect.left}px`;
        clonedIcon.style.top = `${iconRect.top}px`;
        clonedIcon.style.zIndex = '999';

        // Append animation item
        document.body.appendChild(clonedIcon);

        anime({
            targets: clonedIcon,
            top: assetImageRect.top,
            left: assetImageRect.left,
            width: `${size}px`,
            height: `${size}px`,
            easing: 'easeInOutSine',
            duration: duration,
            begin: () => {
                assetImage.parentNode.classList.add('loading');
            },
            complete: () => {
                assetImage.parentNode.classList.remove('loading');

                // Remove transitioned element
                document.body.removeChild(clonedIcon);
            }
        });
    }

}