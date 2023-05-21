import { Controller } from "stimulus";

export default class extends Controller {
    static targets = ['buy', 'sell', 'swap', 'deposit', 'withdraw', 'favorite']
    connect() {

    }

    toggleFavorite(event) {
        console.log('favorite!', event);
        const favoriteEvent = new CustomEvent('on-favorite-action');
        document.dispatchEvent(favoriteEvent);
    }
}