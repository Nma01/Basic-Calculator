'use strict';

const display = document.querySelector('#operation');
const buttons = document.querySelectorAll('button');



buttons.forEach((btn) => {
//   console.log(btn.id);
  btn.onclick = () => {
    if (btn.id == 'clear') {
      display.innerText = '';
    } else if (btn.id == 'back') {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText !== '' && btn.id == 'equals') {
      display.innerText = parseFloat(eval(display.innerText)).toFixed(3);
    } else if (display.innerText == '' && btn.id == 'equals') {
      display.innerText = 'Empty!';
      // setTimeout(()=>(display.innerText = ''), 3000);
      setTimeout(clearEmpty, 3000);
      function clearEmpty() {
        display.innerText = '';
      }
    } else {
      display.innerText += btn.id;
    }
  };
});
