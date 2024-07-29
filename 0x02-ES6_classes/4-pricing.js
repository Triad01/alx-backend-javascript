/* eslint-disable no-unused-vars */
/* eslint-disable */
import Currency from "./3-currency"
class Pricing{
    constructor(amount, currency){
        this._amount = amount,
        this._currency = currency
    }

    get amount(){
        return this._amount
    }

    set amount(amount){
        if (typeof(amount) !== "numbere"){
            throw new TypeError("Amount must be a number")
        }
        this._amount = amount
    }

    get currency(){
        return this._currency
    }
    set currency(currency){
        if (typeof(currency) !== "symbol"){
            throw new TypeErrora("Currency must be a symbol")
        }
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
      }
    
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
      }
}

export default Pricing