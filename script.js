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
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

let calc_display = document.querySelector('.calc-display');
let current_calculation = 0;
// Follows the format = {num1: 0, operator: '', num2: 0}
let current_expression = {};
// Holds the the current number before the user clicks an operator
let current_number = '';

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
  button.addEventListener('click', () => {
    if (current_number === '') {
      calc_display.textContent = '';
    }
    calc_display.textContent += digit;
    current_number += digit;
  });
}

let ops = document.querySelectorAll('.operator');
ops.forEach(op => {
  if (op.classList.contains('o-plus')) {
    addOperatorEvent(op, '+');
  } else if (op.classList.contains('o-minus')) {
    addOperatorEvent(op, '-');
  } else if (op.classList.contains('o-multiply')) {
    addOperatorEvent(op, '*');
  } else if (op.classList.contains('o-divide')) {
    addOperatorEvent(op, '/');
  }
});

function addOperatorEvent(button, operator) {
  button.addEventListener('click', () => {
    // Checks if anything is in current_expression and sets .num1 and .operator
    // (this condition should only be true the first time an operator
    // is clicked in a calculation)
    if (!('num1' in current_expression)) {
      current_expression.num1 = Number(current_number);
      current_expression.operator = operator;
      current_number = '';
    } else {
      // Sets .num2 in current_expression and calls operate() with the values
      // in current_expression, then sets .num1 with the new calcalution and
      // .operator with the new operator
      current_expression.num2 = Number(current_number);
      current_calculation = operate(current_expression.operator, current_expression.num1, current_expression.num2);
      current_expression.num1 = current_calculation;
      current_expression.operator = operator;
      // Deletes .num2 in current_expression and resets the current_number
      delete current_expression.num2;
      current_number = '';
    }
  });
}