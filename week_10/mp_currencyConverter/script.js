const apiKey = "3a33894bd1da657ce1562949";
const fromDropdownList = document.getElementById('fromDropdownListOfCurrency');
const toDropdownList = document.getElementById('toDropdownListOfCurrency');
const amount = document.getElementById('amount');
const convertBtn = document.getElementById('btnConvert');
const convertRateInfo = document.getElementById('covertRate');
const finalNumberArea = document.getElementById('finalNumber')

amount.addEventListener('input', function(e) {
    if (!/^\d*\.?\d*$/.test(e.target.value)) {
        alert('Please type a number');
        e.target.value = '';
    }
});



convertBtn.addEventListener('click', letConvertCurrency);

async function getListOfCurrency(dropdownList) {
    try {
        const listOfCurrency = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
        const listOfCurrencyJson = await listOfCurrency.json();
        const separatedCurrency = listOfCurrencyJson.supported_codes.map(cur => ({
            codeCurrency: cur[0],
            nameCurrency: cur[1]
        }));

        for (let elem of separatedCurrency) {
            const optionCurrency = document.createElement('option');
            optionCurrency.textContent = `${elem.codeCurrency} - ${elem.nameCurrency}`;
            dropdownList.appendChild(optionCurrency);
        }
    } catch (error) {
        console.log(error);
    }
}

function getCurrencyCode(dropdown) {
    const selectedText = dropdown.options[dropdown.selectedIndex].textContent;
    const currencyCode = selectedText.split(" - ")[0];
    return currencyCode;
}

async function letConvertCurrency(event) {
    event.preventDefault();
    const codeCur1 = getCurrencyCode(fromDropdownList);
    const codeCur2 = getCurrencyCode(toDropdownList);

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${codeCur1}/${codeCur2}`);
        const data = await response.json();
        const convertRate = data.conversion_rate;
        convertRateInfo.innerText = 'Convert rate: '+ convertRate;
        const numberMoneyToConvert = amount.value
        const finalNumber = numberMoneyToConvert * convertRate
        finalNumberArea.innerHTML = `${parseFloat(finalNumber.toFixed(2))} ${codeCur2}`;
    } catch (error) {
        console.log(error);
    }
}

getListOfCurrency(fromDropdownList);
getListOfCurrency(toDropdownList);
