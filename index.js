// counter
const randomPos = document.getElementById("btn");
var text = document.getElementById("text");
var counter = 0;
randomPos.addEventListener("click", () => {
  if (randomPos) {
    counter++;
    localStorage.setItem("toDo", JSON.stringify(counter));
    text.innerText = counter;
  }
  console.log(counter);
});

// random Position starts here hh
const btnHeight = 50;
const btnWidth = 150;

const maxWidth = window.innerWidth - btnWidth;
const maxHeight = window.innerHeight - btnHeight;

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn");

  button.addEventListener("click", () => {
    button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + "px";
    button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
  });

  const clock = document.querySelector(".clock");
  document.addEventListener("click", (event) => {
    if (!button.contains(event.target) && !clock.contains(event.target)) {
      alert("Game over, you a LOSER");
      clearInterval(intervalId);
      intervalId = null;
    }
  });
});

// clock starts from here haha
const second = document.querySelector("#sec");
const minute = document.querySelector("#min");
const hour = document.querySelector("#hour");

const start = document.querySelector("#btn");
const stop = document.querySelector("#stop");

var resetBtn = document.querySelector("#reset");

let i = 0;
let j = 0;
let k = 0;
let intervalId = null;

function display() {
  second.innerHTML = i;
  minute.innerText = j;
  hour.innerText = k;
  i++;
  if (i === 100) {
    i = 0;
    j++;
    if (j === 60) {
      j = 0;
      k++;
      if (k === 60) {
        k = 1;
      }
    }
  }
}
start.addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(display, 10);
  }
});
stop.addEventListener("click", function () {
  clearInterval(intervalId);
});

resetBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  i = 0;
  j = 0;
  k = 0;
  counter = 0; 
  localStorage.setItem("toDo", JSON.stringify(counter)); 
  document.getElementById("text").innerText = "0"; 
  display();
});

