export class CurrencyApi {
  _baseApi = "https://gd-react-workshop-krakow.herokuapp.com";

  fetchCurrencyRate(fromCurrency, toCurrency) {
    return fetch(`${this._baseApi}/currency/exchange-rate?from-currency=${fromCurrency}&to-currency=${toCurrency}`)
      .then(res => res.json());
  }
}
