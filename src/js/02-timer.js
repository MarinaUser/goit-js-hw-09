import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let inputDates = null;
const TIME_DELAY = 1000;


refs.startBtn.setAttribute('disabled', true);
refs.startBtn.addEventListener('click', onStartBtnCkick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    inputDates = selectedDates[0];
    onInputData(inputDates);
  },
};

flatpickr('#datetime-picker', options);

function onInputData(data) {
 
  if (data >= Date.now()) {
    refs.startBtn.removeAttribute('disabled');
  } else {
    Notify.failure('Please choose a date in the future', {
      fontSize: '30px',
      width: '400px',
      
    });
  }
}

function onStartBtnCkick() {
  refs.startBtn.setAttribute('disabled', true);

  const timerId = setInterval(() => {
    const diff = inputDates - Date.now();
    const { days, hours, minutes, seconds } = convertMs(diff);
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;

    if (diff < TIME_DELAY) {
      clearInterval(timerId);
      Notify.success(`the time has come`, {
        fontSize: '30px',
        width: '400px',
        
      });
    }
  }, TIME_DELAY);
 
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}