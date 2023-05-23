import { Controller } from 'stimulus';
import { marketData, walletBalances } from '../data';

export default class extends Controller {
    static targets = [
        'price',
        'change',
        'changeDirection',
        'quantity',
        'currencyBalance',
        'name',
        'icon',
        'currency',
        'favoriteKeyAction',
        'favoriteKeyCategory'
    ];
    static values = {
        change: Number,
        ticker: String,
        isFavorite: Boolean,
    };

    connect() {
        document.addEventListener('update-content', this.handleUpdateContent);
        document.addEventListener('update-currency', this.handleUpdateCurrency());

        this.updateContent();
        this.updateCurrency();

        // document.addEventListener('on-selected-coin', (event) => {

        // })
    }

    onFavoriteKeyAction() {
        const data = {
            ticker: this.tickerValue,
            isFavorite: this.isFavoriteValue,
        }
        const onFavoriteEvent = new CustomEvent('on-favorite', { detail: data });
        document.dispatchEvent(onFavoriteEvent);

        this.favoriteKeyCategoryTarget.classList.add('active');
        setTimeout(() => {
            this.favoriteKeyCategoryTarget.classList.remove('active');
        }, 1000)
    }

    handleUpdateContent = (event) => {
        this.updateContent(event.detail[0], event.detail[1]);
    }

    handleUpdateCurrency(event) {
        this.updateCurrency(event)
    }

    onSelectedCoin() {
        const data = [marketData[this.tickerValue], walletBalances[this.tickerValue]];
        this.updateContent(data);
    }

    updateContent(data) {
        document.addEventListener('on-selected-coin', (event) => {
            const selectedTicker = event.detail.ticker
            const isFavorite = event.detail.isFavorite
            const category = event.detail.category

            const { change, icon, name, price, ticker } = marketData[selectedTicker.toLowerCase()]

            // Balance data
            const quantity = walletBalances[selectedTicker.toLowerCase()]['quantity'];

            // Calculations
            const currencyBalance = this.getCurrencyBalance(price, quantity);

            // @todo implement API and make it async.
            // @todo Currency selection from user preferences.
            this.priceTarget.textContent = this.formatCurrency(price, 'EUR');

            this.changeValue = change;
            this.changeTarget.textContent = change;

            this.quantityTarget.textContent = this.formatCurrency(
                quantity,
                ticker,
                false,
            );

            this.currencyBalanceTarget.textContent = this.formatCurrency(
                currencyBalance,
                'EUR',
                true,
            );
            this.priceTarget.textContent = this.formatCurrency(price, 'EUR', true);
            this.quantityTarget.textContent = this.formatCurrency(
                quantity,
                'EUR',
                true,
            );

            this.nameTarget.textContent = name;
            this.iconTarget.src = icon;
        });
    }

    updateCurrency() {
        // @todo Recalculate equivalent balances or get from endpoint. For the moment only currency change.
        document.addEventListener('update-currency', (event) => {
            const currency = event.detail.currency;

            this.currencyValue = currency
            this.currencyTargets.forEach((element) => {
                element.textContent = currency
            })
        })
    }

    getCurrencyBalance(price, quantity) {
        return price * quantity;
    }

    formatCurrency(number, currency, isFiat) {
        let formattedCurrency;

        if (isFiat) {
            formattedCurrency = new Intl.NumberFormat('es-ES', {
                style: 'currency',
                currency,
                minimumFractionDigits: 2,
            }).format(number);
        } else {
            formattedCurrency = new Intl.NumberFormat('es-ES', {
                minimumFractionDigits: 2,
            }).format(number);
        }

        return formattedCurrency;
    }

    changeValueChanged(event) {
        if (this.changeValue > 0) {
            this.changeDirectionTarget.classList.remove('uis-angle-double-down');
            this.changeDirectionTarget.classList.add('uis-angle-double-up');
        } else {
            this.changeDirectionTarget.classList.add('uis-angle-double-down');
            this.changeDirectionTarget.classList.remove('uis-angle-double-up');
        }
    }

    disconnect() {
        document.removeEventListener('update-content', this.handleUpdateContent);
        document.removeEventListener('update-currency', this.handleUpdateCurrency);
        document.removeEventListener('on-selected-coin', this.onSelectedCoin);
    }
}
