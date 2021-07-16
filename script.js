const button = document.querySelectorAll('button');
const display = document.querySelector('.output');

button.forEach((button => {
    button.addEventListener('click', calculate)
}))

function calculate(event) {
    const userInput = event.target.value;
  
    if (userInput === '=') {
      if (display.value !== '') {
        display.value = eval(display.value);
      }
    } else if (userInput === '%') {
        display.value = percentage()
    } else if (userInput === 'C') {
        display.value = display.value.slice(0, - 1);
    } else if (userInput === 'AC') {
        display.value = '';
    } else {
        display.value += userInput;
    }
}