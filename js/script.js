let content = document.querySelector(".content");
let btn = document.getElementById("spin");
let modal = document.querySelector(".modal");
let angle = 60; // кут обертання для кожного елемента колеса
let winningAngle = 180; // кут обертання для виграшної винагороди (4)
let blurItem = document.querySelectorAll("blur");
btn.onclick = function () {
  btn.style.pointerEvents = "none";
  let randomRotations = Math.ceil(Math.random() * 20); // випадкове число повних обертань
  let totalAngle = randomRotations * 360 + winningAngle; // загальний кут обертання
  let number = totalAngle - (totalAngle % angle); // вираховуємо число згідно з кутом обертання виграшної винагороди
  content.style.transform = "rotate(" + number + "deg)";
  setTimeout(function () {
    btn.style.pointerEvents = "auto";
    document.querySelector(".modal").style.display = "inherit";
    document.getElementById("fotter").style.display = "none";
    blurItem.style.filter = "blur(6px)";
  }, 10000);
};

let close = document.querySelector(".prize-btn");
close.onclick = function () {
  document.querySelector(".modal").style.display = "none";
  document.getElementById("fotter").style.display = "flex";
  btn.style.backgroundColor = " rgb(31, 44, 114)";
  btn.style.color = "white";
};

btn.addEventListener("click", function () {
  btn.style.backgroundColor = "rgb(60, 255, 0)";
  btn.style.color = "white";
});

// встановлюємо час початку таймера (12 годин)
let remainingTime = 72000000;

function updateTimer() {
  if (remainingTime <= 0) {
    // таймер завершився
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "00:00:00";
    return;
  }

  // розбиваємо час на години, хвилини та секунди
  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);

  // форматуємо рядок з таймером та оновлюємо HTML-елемент
  const timerString = `${hours.toString().padStart(2, "0")} HOURS : ${minutes
    .toString()
    .padStart(2, "0")} MINUTES : ${seconds
    .toString()
    .padStart(2, "0")} SECONDS   `;
  document.getElementById("timer").innerHTML = timerString;

  // зменшуємо залишковий час на 1 секунду
  remainingTime -= 1000;
}

// запускаємо таймер та оновлюємо його кожну секунду
const timerInterval = setInterval(updateTimer, 1000);
