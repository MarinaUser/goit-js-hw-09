const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');


startBtn.addEventListener('click', onStartBtnCkick);
stopBtn.addEventListener('click', onStopBtnClick);
stopBtn.setAttribute('disabled', 'disabled');

let intervalId = null;
const TIME_DELAY = 1000;

function onStartBtnCkick() {
    intervalId = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
    }, TIME_DELAY);
    startBtn.setAttribute('disabled', 'disabled');
    stopBtn.removeAttribute('disabled');
}

function onStopBtnClick() {
clearInterval(intervalId);
    stopBtn.setAttribute('disabled', 'disabled');
    startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}