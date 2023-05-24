import { Controller } from "stimulus";
import { marketData, walletBalances } from "../data";

export default class extends Controller {
    static targets = ['plus', 'minus', 'input', 'outputCoin', 'outputCoinCurrency', 'available']
    static values = {
        operation: {
            type: String,
            default: 'buy', // sell / swap
        },
        coin: {
            type: String,
            default: 'eur'
        },
        increment: {
            type: Number,
            default: 10
        },
        quantity: {
            type: Number,
            default: walletBalances.eur.quantity // Rename to 'amount'
        },
        spend: {
            type: Number,
            default: 0
        },
        ticker: {
            type: String,
            default: 'btc'
        }

    }

    connect() {
        this.availableTarget.textContent = this.quantityValue
        this.outputCoinTarget.textContent = this.spendValue / marketData[this.tickerValue].price
    }

    plus() {
        if (this.spendValue < this.quantityValue) {
            this.spendValue += this.incrementValue;
        }
    }

    minus() {
        if (this.spendValue > 0) {
            this.spendValue -= this.incrementValue
        }
    }

    spendValueChanged(value, prevValue) {
        this.inputTarget.value = value;
        this.outputCoinTarget.textContent = (this.spendValue / marketData[this.tickerValue].price).toFixed(8)
    }
}