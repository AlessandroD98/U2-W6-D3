const timer = document.getElementById("timer");
const StartButton = document.getElementById("start");
const ResetButton = document.getElementById("reset");
let x = parseInt(sessionStorage.getItem("SavedTime")) || 0;
timer.innerHTML = x;

function counter() {
  const Interval = setInterval(function () {
    if (x === 1000) {
      clearInterval(Interval);
    } else {
      x = x + 1;
      timer.innerHTML = x;
      console.log("Currently at " + x);
    }
    sessionStorage.setItem("SavedTime", x);
  }, 1000);
}

function Reset() {
  sessionStorage.removeItem("SavedTime");
}
function backtozero() {
  x = 0;
  timer.innerHTML = 0;
}

StartButton.onclick = counter;
ResetButton.addEventListener("click", () => {
  Reset();
  backtozero();
});
