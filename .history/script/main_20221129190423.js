const quoteId = document.querySelector(".number");
const quote = document.querySelector(".quote");
const diceBtn = document.querySelector(".dice");

// diceBtn.addEventListener('click', () => {
//     getQuote();
// });

// window.onload = () => {
//   getQuote();
// };

// function getQuote() {
//   fetch("https://api.adviceslip.com/advice").then(response => {
//       return response.json();
//     }).then(adviceData => {
//       const Adviceobj = adviceData.slip;
//       quote.innerHTML = `${Adviceobj.advice}`;
//     }).catch(error => {
//       console.log(error);
//     });
// };

window.on

function getQoute() {
  fetch("https://api.adviceslip.com/advice", {cache: "no-cache"}).then((response) => response.json()).then((response) => {
    let data = response.slip;
    let dataId = data.id;
    let dataAdvice = data.advice;

    quoteId.innerHTML = `${dataId}`;
    quote.innerHTML = dataAdvice;
  });
}

diceBtn.addEventListener("click", () => {
  getQoute();
});