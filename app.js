let hours = document.querySelector("#clock_hrs");
let minutes = document.querySelector("#clock_min");
let seconds = document.querySelector("#clock_sec");

setInterval(() => {
  let currentTime = new Date();

  hours.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minutes.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  seconds.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

const day = document.querySelector(".calDay");
const week = document.querySelector(".calWeek");
const month = document.querySelector(".calMonth");
const year = document.querySelector(".calYear");

const today = new Date();

day.innerHTML = today.getDate();
week.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const allMonths = [
  "January",
  "February",
  "March",
  "May",
  "April",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decemeber",
];
