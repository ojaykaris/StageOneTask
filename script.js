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
  document.getElementById("day-of-week").innerText = dayOfWeek;
}
window.onload = displayCurrentDayOfWeek;

function displayCurrentUTCTime() {
  const cuurentTimeMillis = new Date().getTime();
  document.getElementById("utc-time").innerText = cuurentTimeMillis;
}
setTimeout = (displayCurrentUTCTime, 1);
