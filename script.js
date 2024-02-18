var slideNextButton = document.getElementById("next-button");
var sliderPrevButton = document.getElementById("prev-button");
var maxPosition = (wrapper.children.length - 1) * window.innerWidth;
var sliderImages = document.getElementsByClassName("slideElement");
var dots = document.getElementsByClassName("dot");
// console.log(sliderImages);
var counter = 0;

slideNextButton.addEventListener("click", next);
sliderPrevButton.addEventListener("click", previous);
function next() {
  sliderImages[counter].style.animation = "next1 0.5s ease-in forwards";

  if (counter >= sliderImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  sliderImages[counter].style.animation = "next2 0.5s ease-in forwards";
  // Update Dots
  updateDots(counter);
}
function previous() {
  sliderImages[counter].style.animation = "prev1 0.5s ease-in forwards";
  // update Slider Elements
  if (counter == 0) {
    counter = sliderImages.length - 1;
  } else {
    counter--;
  }
  sliderImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  // Update Dots
  updateDots(counter);
}

function updateDots(counter) {
  // update dots
  for (i = 0; i <= dots.length - 1; i++) {
    dots[i].classList.remove("active");
  }
  dots[counter].classList.add("active");
}
// Countdown JS ====================================
var countDownDate = new Date("May 3, 2023 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

// ==================== SCROLL TO======================================
// ====================================================================
const scheduleElement = document.getElementById("scheduleContainer");
const aboutElement = document.getElementById("infobar");
const speakerElement = document.getElementById("speakersContainer");
const galleryElement = document.getElementById("gallery");
const TestimonialsElement = document.getElementById("testimonialContainer");
const navbarHeight = 70;

function scrolltotop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToSchedule() {
  const position =
    scheduleElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
  // scheduleElement.getBoundingClientRect().top = distance between top of current screen view and the elemnt
  // window.scrollY = distance between between top of current screen and top of webpage document
  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}

function scrollToAbout() {
  const position =
    aboutElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}

function scrollToSpeaker() {
  const position =
    speakersContainer.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight;
  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}

function scrollToGallery() {
  const position =
    galleryElement.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight +
    50;
  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}

function scrollToTestimonials() {
  const position =
    TestimonialsElement.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight;
  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}
// MENU ICON =================================
function showMenuIcon() {
  SmallMenu = document.querySelector(".smallMenu");
  SmallMenu.style.display = "flex";
}
function exitSmallMenu() {
  SmallMenu = document.querySelector(".smallMenu");
  SmallMenu.style.display = "none";
}
