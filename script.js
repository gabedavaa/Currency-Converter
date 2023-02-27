"use strict";

//////////////////////////
const currencyFirstElement = document.getElementById("currency-first");
const worthFirstElement = document.getElementById("worth-first");
const currencySecondElement = document.getElementById("currency-second");
const worthSecondElement = document.getElementById("worth-second");
const exchangeRate = document.getElementById("exchange-rate");

function updateRate(e) {
  console.log(typeof e.target.value);
  fetch(
    `https://v6.exchangerate-api.com/v6/95142248ef1e4edb65f7b2ce/latest/${e.target.value}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}

currencyFirstElement.addEventListener("change", updateRate);
currencySecondElement.addEventListener("change", updateRate);
worthFirstElement.addEventListener("input", updateRate);
worthSecondElement.addEventListener("input", updateRate);
