const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// variables holding html elements
const giveaway = document.querySelector(".giveaway");
const dealine = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// temp time / date variables to set futureDate 10 days from page load
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// use the code below if you want to hard code a fututre date
// let futureDate = new Date(2021, 3, 22, 23, 30, 0);
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 23, 30, 0);

console.log(futureDate);
// time / date variables
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
console.log(date);
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day} ${month} ${date} ${year} ${hours}:${mins}hrs`;

// future time in milliseconds
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log("today", today, "t", t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hrs

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  console.log("days", days);
  let hours = Math.floor((t % oneDay) / oneHour);
  console.log("hours", hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  console.log("minutes", minutes);
  let seconds = Math.floor((t % oneMinute) / 1000);
  console.log("seconds", seconds);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    dealine.innerHTML = `<h4 class="expired">Sorry Dudes & Dudettes, this giveaway has expired</h4>`;
  }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
