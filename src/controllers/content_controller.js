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
  ];
  static values = {
    change: Number,
  };

  connect() {
    this.onUpdateContent();
  }

  onUpdateContent() {
    document.addEventListener('update-content', (event) => {
      const market = event.detail[0];
      const balances = event.detail[1];

      // Market data
      const price = market['price'];
      const change = market['change'];
      const ticker = market['ticker'];
      const name = market['name'];
      const icon = market['icon'];

      // Balance data
      const quantity = balances['quantity'];

      // Calculations
      const currencyBalance = this.getCurrencyBalance(price, quantity);

      // @todo Create update method.
      // @todo Refactor logic, single responsability.
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
      new Intl.NumberFormat('es-ES', { minimumFractionDigits: 2 }).format(
        number,
      );
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
