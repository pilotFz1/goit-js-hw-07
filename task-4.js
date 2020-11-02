const resultEl = document.querySelector("#value");
const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);

decrementBtnEl.addEventListener("click", decrement);
incrementBtnEl.addEventListener("click", increment);

function decrement() {
  const currentValue = Number(resultEl.textContent);
  resultEl.textContent = currentValue - 1;
}

function increment() {
    const currentValue = Number(resultEl.textContent);
    resultEl.textContent = currentValue + 1;
  }