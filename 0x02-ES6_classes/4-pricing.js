import Currency from './3-currency';

export default class Pricing {
  constructor (ammount, currency) {
    this._ammount = ammount;
    this._currency = currency;
  }

  get ammount () {
    return this._ammount;
  }

  set ammount (newAmmount) {
    this._ammount = newAmmount;
  }

  get currency () {
    return this._currency;
  }

  set currency (newCurrency) {
    this._currency = this.currency;
  }

  displayFullPrice () {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice (ammount, conversionRate) {
    return ammount * conversionRate;
  }
}
