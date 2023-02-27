"use strict";

//////////////////////////
const currencyFirstElement = document.getElementById("currency-first");
const worthFirstElement = document.getElementById("worth-first");
const currencySecondElement = document.getElementById("currency-second");
const worthSecondElement = document.getElementById("worth-second");
const exchangeRateElement = document.getElementById("exchange-rate");

updateRate();

function updateRate(e) {
  fetch(
    `https://v6.exchangerate-api.com/v6/95142248ef1e4edb65f7b2ce/latest/${currencyFirstElement.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondElement.value];
      console.log(data);
      exchangeRateElement.innerText = `1 ${currencyFirstElement.value} = ${
        rate.toFixed(2) + " " + currencySecondElement.value
      }`;

      worthSecondElement.value = (
        data.conversion_rates[currencySecondElement.value] *
        worthFirstElement.value
      ).toFixed(2);
    });
}

currencyFirstElement.addEventListener("change", updateRate);
currencySecondElement.addEventListener("change", updateRate);
worthFirstElement.addEventListener("input", updateRate);
worthSecondElement.addEventListener("input", updateRate);
