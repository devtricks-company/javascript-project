const label = document.querySelector("label");
const btnIncrement = document.querySelector("#btn-increment");
const btnDecrement = document.querySelector("#btn-decrement");
const btnReset = document.querySelector("#btn-reset");

let count = 0;
label.textContent = count;

btnIncrement.addEventListener("click", () => {
  if (count < 10) {
    label.textContent = ++count;
  } else {
    count = 0;
    label.textContent = count;
  }
});

btnDecrement.addEventListener("click", () => {
  if (count > 0) {
    label.textContent = --count;
  } else {
    count = 10;
    label.textContent = count;
  }
});

btnReset.addEventListener("click", () => {
  count = 0;
  label.textContent = count;
});
