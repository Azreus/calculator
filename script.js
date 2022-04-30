function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      add(num1, num2);
      break;
    case '-':
      subtract(num1, num2);
      break;
    case '*':
      multiply(num1, num2);
      break;
    case '/':
      divide(num1, num2);
      break;
    default:
      alert("Not a valid input.");
  }
}

let calc_display = document.querySelector('.calc-display');

//  Adds click event listeners to each numbered button which adds them to the calculator display

let nums = document.querySelectorAll('.num');

nums.forEach(num => {
  if (num.classList.contains('b-one')) {
    addNumberEvent(num, 1);
  } else if (num.classList.contains('b-two')) {
    addNumberEvent(num, 2);
  } else if (num.classList.contains('b-three')) {
    addNumberEvent(num, 3);
  } else if (num.classList.contains('b-four')) {
    addNumberEvent(num, 4);
  } else if (num.classList.contains('b-five')) {
    addNumberEvent(num, 5);
  } else if (num.classList.contains('b-six')) {
    addNumberEvent(num, 6);
  } else if (num.classList.contains('b-seven')) {
    addNumberEvent(num, 7);
  } else if (num.classList.contains('b-eight')) {
    addNumberEvent(num, 8);
  } else if (num.classList.contains('b-nine')) {
    addNumberEvent(num, 9);
  } else if (num.classList.contains('b-zero')) {
    addNumberEvent(num, 0);
  }
});

function addNumberEvent(button, digit) {
  button.addEventListener('click', () => calc_display.textContent += digit);
}

// let b_one = document.querySelector('.b-one');
// b_one.addEventListener('click', () => {
//   calc_display.textContent += '1';
// });