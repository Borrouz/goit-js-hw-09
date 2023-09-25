
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { convertMs } from "../helpers/02-time-convert";
import { Notify } from "notiflix";


const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const  days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const currentDate = Date.now()
btnStart.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < Date.now()) {
        Notify.failure('Please choose a date in the future');
      } else {
        btnStart.disabled = false;
      }
    },
  };

  btnStart.addEventListener('click', timerStart);
  function timerStart () {
    input.disabled = true;
    btnStart.disabled = true;

 function firstTime () {
    const selectedDate = new Date(input.value);
        const currentDate = Date.now();
        const timeLeft = selectedDate - currentDate;
        const timeConverted = convertMs(timeLeft);
        if (timeLeft < 1000) {
            clearInterval(timer);
        }
        days.textContent = timeConverted.days.toString().padStart(2, 0);
        hours.textContent = timeConverted.hours.toString().padStart(2, 0);
        minutes.textContent = timeConverted.minutes.toString().padStart(2, 0);
        seconds.textContent = timeConverted.seconds.toString().padStart(2, 0);
 }
 firstTime()
       
 const timer = setInterval(firstTime, 1000)
    
  }

flatpickr(input, options);