function getFirstData(key) {
  (async function getCurrencyData() {
    const currencyResponse = await fetch('https://api.guildwars2.com/v2/currencies?ids=all');
    const currencyResponseData = await currencyResponse.json();
    console.log(currencyResponseData);
  }());

  (async function getAccountCurrencyData() {
    const currencyAccountResponse = await fetch(`https://api.guildwars2.com/v2/account/wallet?access_token=${key}`);
    const currencyAccountResponseData = await currencyAccountResponse.json();
    console.log(currencyAccountResponseData);
  }());
}
export { getFirstData };
