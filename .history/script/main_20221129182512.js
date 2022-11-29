const quote = document.querySelector(".quote");
const diceBtn = document.querySelector(".dice");

diceBtn.addEventListener('click', () => {
    getQuote();
});

window.onload = () => {
  getQuote();
};

function getQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then(adviceData => {
      const Adviceobj = adviceData.slip;
      quote.innerHTML = `${Adviceobj.advice}`;
    })
    .catch(error => {
      console.log(error);
    });
};


const quote = document.querySelector(".quote");
const diceBtn = document.querySelector(".dice");

resBtn.addEventListener("click", () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch("	https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const Adviceobj = adviceData.slip;
      resDiv.innerHTML = `<p>${Adviceobj.advice}</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}