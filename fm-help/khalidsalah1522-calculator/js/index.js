const switchTheme = document.querySelector(".current-theme");
const themesBtns = document.querySelectorAll(".themes button");
const btns = document.querySelectorAll(".clc button");
const screen = document.querySelector(".screen");

themesBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switchTheme.style.left = `${+e.target.dataset.theme * 25}%`;
    document.body.className = e.target.classList[1];
  });
});

let number = [];
let operator = "";
let operatorClicked = false;

function operatorNumbers(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "/") {
    return a / b;
  } else if (operator === "-") {
    return a - b;
  } else {
    return a * b;
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.dataset.number) {
      case "delete":
        break;
      case "reset":
        screen.innerText = "";
        break;
      case "equal":
        operatorClicked = false;
        number.push(+screen.innerText);
        screen.innerText = number.reduce((a, b) =>
          operatorNumbers(a, b, operator)
        );
        number = [];
        break;
      case "operator":
        if (!operatorClicked) {
          number.push(+screen.innerText);
          operator = e.target.dataset.operator;
          screen.innerText = "";
          operatorClicked = true;
        } else {
          number.push(+screen.innerText);
          screen.innerText = number.reduce((a, b) =>
            operatorNumbers(a, b, operator)
          );
          number = [];
        }
        break;
      default:
        screen.innerText += e.target.dataset.number;
        break;
    }
  });
});
