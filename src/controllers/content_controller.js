import { Controller } from 'stimulus';


export default class extends Controller {
    static targets = ["price"]
    connect() {
        // console.log(marketData)
        document.addEventListener('update-content', (event) => {

            // @todo parse and format number. Create update method.
            this.priceTarget.textContent = event.detail["price"]
        })
    }

}