import "./howler.js";

var sound = new Howl({
  src: ['./src/media/timer-bell.mp3']
});

let timerInput = document.getElementById("time");   
let timerForm = document.getElementById("timerform");
let timerPanel = document.getElementById("timer-panel");   
let btnStop = document.getElementById("btn-stop"); 

let timer;

timerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  clearInterval(timer);

  let timeSeconds = parseInt(timerInput.value) * 60;
  
  timer = setInterval(function () {
    let seconds = timeSeconds%60
    let minutes = timeSeconds/60%60   
    let hour = timeSeconds/60/60%60
    
    if (timeSeconds < 0) {
      clearInterval(timer);
      sound.play();
    } else { 
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerPanel.innerHTML = strTimer
    }
    --timeSeconds;
  }, 1000)
});

btnStop.addEventListener('click', function() {
  clearInterval(timer);
})



