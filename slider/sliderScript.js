const wrapper = document.querySelector(".slider-wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = document.querySelector(".card").offsetWidth;
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");
let cardPreview = Math.round(carousel.offsetWidth / firstCardWidth);

console.log("carousel.scrollLeft = ");
console.log(carousel.scrollLeft);
console.log("carousel.scrollWidth = ");
console.log(carousel.scrollWidth);
console.log("carousel.offsetWidth = ");
console.log(carousel.offsetWidth);

// ================= UPDATE THE CARD WIDTH ============================
function handleResize() {
  firstCardWidth = carousel.querySelector(".card").offsetWidth;
  // updateCard();
}
// =============BUTTONS ( NEXT, PREVIOUS)==============================
nextButton.addEventListener("click", function () {
  carousel.scrollLeft += firstCardWidth;
  console.log("carousel.scrollLeft = ");
  console.log(carousel.scrollLeft);
  console.log("scrollWidth = ");
  console.log(carousel.scrollWidth);
  console.log("carousel.offsetWidth = ");
  console.log(carousel.offsetWidth);
  console.log("-------------------------");

});
prevButton.addEventListener("click", function () {
  carousel.scrollLeft -= firstCardWidth;
  console.log("carousel.scrollLeft = ");
  console.log(carousel.scrollLeft);
  console.log("scrollWidth = ");
  console.log(carousel.scrollWidth);
  console.log("carousel.offsetWidth = ");
  console.log(carousel.offsetWidth);
  console.log("-------------------------");
});

// ===================( Infinite Scrolling) ===============================
const carouselChildren = [...carousel.children];
carouselChildren
  .slice(-cardPreview)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });
carouselChildren.slice(0, cardPreview).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
const infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    console.log("==================================================");
    console.log("scrollWidth = ");
    console.log(carousel.scrollWidth);
    console.log("carousel.offsetWidth = ");
    console.log(carousel.offsetWidth);
    console.log("carousel.scrollWidth - 2 * carousel.offsetWidth = ");
    console.log(carousel.scrollWidth - 2 * carousel.offsetWidth);
    console.log("==================================================");

    carousel.classList.add("stopTransition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("stopTransition");
  } else if (
    carousel.scrollLeft ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    console.log("scr = scrlwd - offset");
    carousel.classList.add("stopTransition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("stopTransition");
  }
};
// ===================( Drag Scrolling )===================================
let isDragging = false,
  mouseStartX,
  carouselStartX;

const startDragging = (e) => {
  isDragging = true;
  mouseStartX = e.pageX;
  carouselStartX = carousel.scrollLeft;
  carousel.classList.add("dragging");
};

const dragging = (e) => {
  // e.stopPropagation();
  if (!isDragging) return;
  carousel.scrollLeft = carouselStartX - (e.pageX - mouseStartX);
  console.log(isDragging);
};

const endDragging = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

// PreventDefault to stop images from being dicks about dragging
var images = document.querySelectorAll(".carousel img");
images.forEach(function (img) {
  img.addEventListener("mousedown", function (e) {
    e.preventDefault();
  });
});

// ===================( Event Listeners )===================================
carousel.addEventListener("mousedown", startDragging);
document.addEventListener("mouseup", endDragging);
document.addEventListener("mousemove", dragging);
// carousel.addEventListener("mouseup", endDragging);
// carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("scroll", infiniteScroll);
window.addEventListener("resize", handleResize);
