import { Controller } from "stimulus";
import { marketData } from '../data';

export default class extends Controller {
    static values = {
        ticker: String
    }
    connect() {

    }
    onSelectedCoin() {
        alert(`${this.tickerValue} selected`);
        this.retrieveData(this.tickerValue)
    }
    async retrieveData(ticker){
        alert(`Retrieve ${ticker} data from API`);
        const url = `endpoint/whatever/${ticker}`
        const response = await fetch(url)
        console.log(response)
    }
}