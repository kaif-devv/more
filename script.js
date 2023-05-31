function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  let expression = document.getElementById('display').value;
  let result = eval(expression);
  document.getElementById('display').value = result;
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key >= '0' && key <= '9') {
    appendToDisplay(key);
  } else if (key === '+') {
    appendToDisplay('+');
  } else if (key === '-') {
    appendToDisplay('-');
  } else if (key === '*') {
    appendToDisplay('*');
  } else if (key === '/') {
    appendToDisplay('/');
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    clearDisplay();
  }
});
