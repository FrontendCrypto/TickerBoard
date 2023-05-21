import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = [
        'price',
        'change',
        'changeDirection',
        'quantity',
        'currencyBalance',
        'name',
        'icon',
        'currency'
    ];
    static values = {
        change: Number,
    };

    connect() {
        document.addEventListener('update-content', this.handleUpdateContent);
        document.addEventListener('update-currency', this.handleUpdateCurrency())
        this.updateContent();
        this.updateCurrency();
    }

    disconnect() {
        document.removeEventListener('update-content');
        document.removeEventListener('update-currency');
    }

    handleUpdateContent = (event) => {
        this.updateContent(event.detail[0], event.detail[1]);
    };

    handleUpdateCurrency(event) {
        this.updateCurrency(event)
        console.log('dentro handle')
    }

    updateContent() {
        document.addEventListener('update-content', (event) => {
            const market = event.detail[0];
            const balances = event.detail[1];
            const { change, icon, name, price, ticker } = market

            // Market data => Replaced destructuring object. Clean after refactor explanation.
            //   const price = market['price'];
            //   const change = market['change'];
            //   const ticker = market['ticker'];
            //   const name = market['name'];
            //   const icon = market['icon'];

            // Balance data
            const quantity = balances['quantity'];

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
}
