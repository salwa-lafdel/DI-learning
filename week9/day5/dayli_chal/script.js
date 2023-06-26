const apiKey = 'YOUR_API_KEY';


fetch(`https://v6.exchangeratesapi.io/v1/symbols?access_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const currencies = Object.keys(data.symbols);
    populateCurrencyOptions(currencies);
  })
  .catch(error => console.log(error));


function populateCurrencyOptions(currencies) {
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');

  currencies.forEach(currency => {
    const option = document.createElement('option');
    option.value = currency;
    option.textContent = currency;
    fromCurrencySelect.appendChild(option.cloneNode(true));
    toCurrencySelect.appendChild(option);
  });
}



function convertCurrency() {
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  fetch(`https://v6.exchangeratesapi.io/v1/convert?access_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`)
    .then(response => response.json())
    .then(data => {
      const convertedAmount = data.result;
      document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    })
    .catch(error => console.log(error));
}