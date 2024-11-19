let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function updateInput() {
 
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = '';
}
