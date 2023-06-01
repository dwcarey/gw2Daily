function DOMcontroller(processedData) {
  console.log(processedData);
  console.log(processedData[0].name);
  console.log(processedData[0].value);
  console.log(processedData[0].description);
  console.log(processedData[0].icon);

  // generate DOM elements
  const content = document.getElementById('content');

  const currencyBalanceContainer = document.createElement('div');
  currencyBalanceContainer.id = 'currencyBalanceContainer';

  for (let i = 0; i < processedData.length; i += 1) {
    const currencyItemContainer = document.createElement('div');
    currencyItemContainer.classList.add('currencyItemContainer');
    currencyItemContainer.id = `currencyItemContainer-${i}`;

    const currencyItemIcon = document.createElement('img');
    currencyItemIcon.classList.add('currencyItemIcon');
    currencyItemIcon.id = `currencyItemIcon-${i}`;

    const currencyItemValue = document.createElement('h2');
    currencyItemValue.classList.add('currencyItemValue');
    currencyItemValue.id = `currencyItemValue-${i}`;
    
    currencyItemContainer.appendChild(currencyItemIcon);
    currencyItemContainer.appendChild(currencyItemValue);

    currencyBalanceContainer.appendChild(currencyItemContainer);
  }
  content.appendChild(currencyBalanceContainer);

  // populate DOM elements
  for (let i = 0; i < processedData.length; i += 1) {
    const iconDOM = document.getElementById(`currencyItemIcon-${i}`);
    const valueDOM = document.getElementById(`currencyItemValue-${i}`);


    iconDOM.src = `${processedData[i].icon}`;
    valueDOM.textContent = `${processedData[i].value}`;
  }

  currencyBalanceContainer.addEventListener('click', (e) => {
    if (e.target.id.startsWith('currencyItem')) {
      const clickedID = e.target.id.split('-')[1];
      const clickedItem = document.getElementById(`currencyItemContainer-${clickedID}`);
      if (!clickedItem.classList.contains('clickedItemContainer')) {

        const currencyItemName = document.createElement('h2');
        currencyItemName.classList.add('currencyItemName');
        currencyItemName.id = `currencyItemName-${clickedID}`;


        const currencyItemDescription = document.createElement('h2');
        currencyItemDescription.classList.add('currencyItemDescription');
        currencyItemDescription.id = `currencyItemDescription-${clickedID}`;


        currencyItemName.textContent = `${processedData[clickedID].name}`;
        currencyItemDescription.textContent = `${processedData[clickedID].description}`;

        clickedItem.classList.add('clickedItemContainer');
        clickedItem.appendChild(currencyItemName);
        clickedItem.appendChild(currencyItemDescription);
      } else if (clickedItem.classList.contains('clickedItemContainer')) {
        const clickedItemDesc = document.getElementById(`currencyItemDescription-${clickedID}`);
        const clickedItemName = document.getElementById(`currencyItemName-${clickedID}`);
        clickedItem.classList.remove('clickedItemContainer');
        clickedItem.removeChild(clickedItemDesc);
        clickedItem.removeChild(clickedItemName);
      }
  }
  })
}

export { DOMcontroller };
