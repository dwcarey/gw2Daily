const processedData = [];

function processCurrencyData(currencyList, currencyAccount) {
  for (let i = 0; i < currencyAccount.length; i += 1) {
    const currencyID = currencyAccount[i].id;
    const currencyValue = currencyAccount[i].value;

    for (let j = 0; j < currencyList.length; j += 1) {
      const currencyListID = currencyList[j].id;
      if (currencyListID === currencyID) {
        const genericCurrencyName = currencyList[j].name;
        const genericCurrencyDesc = currencyList[j].description;
        const genericCurrencyIcon = currencyList[j].icon;
        const currencyArrayItem = {
          id: currencyListID,
          value: currencyValue,
          name: genericCurrencyName,
          description: genericCurrencyDesc,
          icon: genericCurrencyIcon,
        };
        processedData.push(currencyArrayItem);
      }
    }
  }
  return processedData;
}

function getFirstData(key) {
  async function getCurrencyData() {
    const currencyResponse = await fetch('https://api.guildwars2.com/v2/currencies?ids=all');
    const currencyResponseData = await currencyResponse.json();
    return currencyResponseData;
  }

  async function getAccountCurrencyData() {
    const currencyAccountResponse = await fetch(`https://api.guildwars2.com/v2/account/wallet?access_token=${key}`);
    const currencyAccountResponseData = await currencyAccountResponse.json();
    return currencyAccountResponseData;
  }

  (async function processDataStart() {
    const getCurrencyDataTemp = await getCurrencyData();
    const getAccountCurrencyDataTemp = await getAccountCurrencyData();
    processCurrencyData(getCurrencyDataTemp, getAccountCurrencyDataTemp);
  }());
}
export { getFirstData, processedData };
