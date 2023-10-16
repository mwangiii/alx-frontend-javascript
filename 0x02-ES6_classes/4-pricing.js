import {Currency} from './3-currency'

export default class Pricing {
  constructor (ammount, currency){
    if (!Number.isInteger(ammount)){
      throw TypeError ('ammount must be a number');
    }
    if (!Intl.NumberFormat(currency)){
      throw TypeError('currency should be in currecy format')
    }
    this._ammount = ammount;
    this._currency = currency
  }
  get ammount() {
    return this._ammount 
  }
  set ammount(newAmmount){
    this._ammount = newAmmount
  }
  get currency() {
    return this._currency
  }
  set currency(newCurrency){
    this._currency = this.currency
  }

  displayFullPrice() {
    return `${amount} ${currency_name} ${(currency_code)}`
  }
  static convertPrice(ammount, conversionRate){
    if(typeof ammount !== 'number' && typeof conversionRate !== 'number'){
      throw TypeError ('This has to be an error')
    }
    else{
      return ammount * conversionRate
    }
  }
}