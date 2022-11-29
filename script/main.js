const quoteId = document.querySelector(".number");
const quote = document.querySelector(".quote");
const diceBtn = document.querySelector(".dice");

window.onload = () => {
  getQoute();
};

function getQoute() {
  fetch("https://api.adviceslip.com/advice", {cache: "no-cache"}).then((response) => response.json()).then((response) => {
    let data = response.slip;
    let dataId = data.id;
    let dataAdvice = data.advice;

    quoteId.innerHTML = `advice #${dataId}`;
    quote.innerHTML = dataAdvice;
  });
}

diceBtn.addEventListener("click", () => {
  getQoute();
});