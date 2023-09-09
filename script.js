function displayCurrentDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getUTCDay()];
  document.querySelector('[data-testid="currentDayOfTheWeek"]').innerText =
    dayOfWeek;
}
window.onload = displayCurrentDayOfWeek;

function displayCurrentUTCTime() {
  const cuurentTimeMillis = new Date().getTime();
  document.querySelector('[data-testid="currentUTCTime"]').innerText =
    cuurentTimeMillis;
}
setInterval(displayCurrentUTCTime, 1);
