import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  //   set and get amount property
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  //   set and get currency property
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('Currency must be a Currency');
    }
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new TypeError('Amount and conversionRate must be a number');
  }
}
