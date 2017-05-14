class CurrencyConverter {

  constructor(currency_service) {
    this.currency_service = currency_service;
  }

  convert(from_currency, to_currency, amount) {
    if (from_currency == 'EUR') {
      let rate = this.currency_service.exchange_rate(to_currency);
      return rate * amount;
    } else {
      let rate = this.currency_service.exchange_rate(from_currency);
      return amount / rate;
    }
  }

}
