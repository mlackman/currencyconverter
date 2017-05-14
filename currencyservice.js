class CurrencyService {

  constructor() {
    this.rates = null;
  }

  init() {
    let promise = new Promise((resolve, reject) => {
      if(this.rates) {
        resolve(this.rates);
      } else {
        fetch('http://api.fixer.io/latest')
          .then(function(response) {
           return response.json()
         })
        .then((data) => {
          this.rates = data.rates;
          console.log(data);
          resolve();
        })

      }
    });
    return promise;
  }

  exchange_rate(currency) {
    return this.rates[currency];
  }
}
