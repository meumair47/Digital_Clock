let customDate = new Date();

function updateClock() {
  document.getElementById("clock").textContent =
    customDate.toLocaleTimeString() + " " + customDate.toLocaleDateString();
}

function setTime() {
  let setHours = parseInt(document.getElementById("set-hours").value);
  let setMinutes = parseInt(document.getElementById("set-minutes").value);
  let setSeconds = parseInt(document.getElementById("set-seconds").value);

  customDate.setHours(setHours || customDate.getHours());
  customDate.setMinutes(setMinutes || customDate.getMinutes());
  customDate.setSeconds(setSeconds || customDate.getSeconds());

  updateClock();
}

function setDate() {
  let setDay = parseInt(document.getElementById("set-day").value);
  let setMonth = parseInt(document.getElementById("set-month").value);
  let setYear = parseInt(document.getElementById("set-year").value);

  customDate.setDate(setDay || customDate.getDate());
  customDate.setMonth((setMonth || customDate.getMonth() + 1) - 1); // Month is 0-indexed
  customDate.setFullYear(setYear || customDate.getFullYear());

  updateClock();
}

setInterval(() => {
  customDate.setSeconds(customDate.getSeconds() + 1);
  updateClock();
}, 1000);

updateClock();
