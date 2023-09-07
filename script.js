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
  document.getElementById("day-of-week").textContent = dayOfWeek;
}
window.onload = displayCurrentDayOfWeek;

function displayCurrentUTCTime() {
  const cuurentTimeMillis = new Date().getTime();
  document.getElementById("utc-time").textContent = cuurentTimeMillis;
}
window.onload = displayCurrentUTCTime;
