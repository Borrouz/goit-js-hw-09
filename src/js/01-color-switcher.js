
import { getRandomHexColor } from "../helpers/01-color-random";

const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
start.addEventListener('click', changeColor);



function changeColor() {
    start.disabled = true;
    stop.disabled = false;
    body.style.backgroundColor = getRandomHexColor();
    const interval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 2000)
    stop.addEventListener('click', stopChangeColor)
    function stopChangeColor() {
        start.disabled = false;
        stop.disabled = true;
        clearInterval(interval);
    }
}

