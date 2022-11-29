const quote = document.querySelector(".quote");
const diceBtn = document.querySelector(".dice");

fetch("https://api.adviceslip.com/advice").then((response) => {
  return response.json();
}).then(adviceData => {
    const Adviceobj = adviceData.slip;
    quote.innerHTML = `${Adviceobj.advice}`;
}).catch(error => {
    console.log(error);
});
