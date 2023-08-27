const day1 = document.getElementById("day1");
const day2 = document.getElementById("day2");
const day3 = document.getElementById("day3");
let time = document.querySelectorAll(".elementDetails .time");
let title = document.querySelectorAll(".elementDetails .title");
let info = document.querySelectorAll(".elementDetails .info");
let img = document.querySelectorAll(".elementPicture img");

day1.addEventListener("click", function () {
  day1.classList.add("activeday");
  day2.classList.remove("activeday");
  day3.classList.remove("activeday");
  time.forEach(function (e, index) {
    e.innerHTML = day1_Elements[index].time;
  });
  title.forEach(function (e, index) {
    e.innerHTML = day1_Elements[index].title;
  });
  info.forEach(function (e, index) {
    e.innerHTML = day1_Elements[index].info;
  });
  img.forEach(function (e, index) {
    e.src = day1_Elements[index].img;
  });
});

day2.addEventListener("click", function () {
  day1.classList.remove("activeday");
  day2.classList.add("activeday");
  day3.classList.remove("activeday");
  time.forEach(function (e, index) {
    e.innerHTML = day2_Elements[index].time;
  });
  title.forEach(function (e, index) {
    e.innerHTML = day2_Elements[index].title;
  });
  info.forEach(function (e, index) {
    e.innerHTML = day2_Elements[index].info;
  });
  img.forEach(function (e, index) {
    e.src = day2_Elements[index].img;
  });
});

day3.addEventListener("click", function () {
  day1.classList.remove("activeday");
  day2.classList.remove("activeday");
  day3.classList.add("activeday");
  time.forEach(function (e, index) {
    e.innerHTML = day3_Elements[index].time;
  });
  title.forEach(function (e, index) {
    e.innerHTML = day3_Elements[index].title;
  });
  info.forEach(function (e, index) {
    e.innerHTML = day3_Elements[index].info;
  });
  img.forEach(function (e, index) {
    e.src = day3_Elements[index].img;
  });
});

const day1_Elements = [
  {
    time: "08:30 AM",
    title: "CHECK IN",
    info: "Guest reception",
    img: "images/checkin.png",
  },
  {
    time: "09:00 AM",
    title: "OPENNING CEREMONY",
    info: "Speech by: BELHADEF Aya",
    img: "images/openingCeremony.jpg",
  },
  {
    time: "09:30 AM",
    title: "* 01: WHAT IS PROGRAMMING?",
    info: "Conferance by: DJELLIT Adem",
    img: "images/conferance.png",
  },
  {
    time: "11:30 AM",
    title: "COFFEE BREAK",
    info: "At: Dining room",
    img: "images/break.png",
  },
  {
    time: "12:00 PM",
    title: "CONFERANCE 02: SCRATCH ASPECT ON KIDS",
    info: "Conferance by: MENGHOUR Lamis",
    img: "images/break.png",
  },
];
const day2_Elements = [
  {
    time: "08:30 AM",
    title: "CONFERANCES CHECK IN",
    info: "Guest reception",
    img: "images/conferance3.jpg",
  },
  {
    time: "09:00 AM",
    title: "MUSICAL OPENING",
    info: "Singing by: FRIOUI Mouna",
    img: "images/conferance.png",
  },
  {
    time: "09:30 AM",
    title: "Workshop 01: CNC ROUTER",
    info: "Coach: ROULA Imad",
    img: "images/break.png",
  },
  {
    time: "11:30 AM",
    title: "COFFEE BREAK",
    info: "At: Dining room",
    img: "images/workshop.jpg",
  },
  {
    time: "12:00 PM",
    title: "Workshop 02: Voice Over Basic",
    info: "Coach: BELHADEF AYA",
    img: "images/workshop.jpg",
  },
];
const day3_Elements = [
  {
    time: "08:30 AM",
    title: "Workshops check in",
    info: "Registrations checking",
    img: "images/workshop.jpg",
  },
  {
    time: "09:00 AM",
    title: "COMPETITION",
    info: "At: Library",
    img: "images/gladiator-pic.jpg",
  },
  {
    time: "09:30 AM",
    title: "ENTERTAINMENT ACTIVITIES",
    info: "Various",
    img: "images/checkin.png",
  },
  {
    time: "11:30 AM",
    title: "LUNCH",
    info: "At: Lunch room",
    img: "images/conferance.png",
  },
  {
    time: "12:00 PM",
    title: "CLOSURE CEREMONY",
    info: "At: Conferances Hall",
    img: "images/closingceremony.jpg",
  },
];
