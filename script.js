const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");

const prevArrowBtns = document.querySelectorAll(".prev-arrow");
const nextArrowBtns = document.querySelectorAll(".next-arrow");

const brandBtns = document.querySelectorAll(".brandArrow");

const brandContents = document.querySelectorAll(".brandContent");

let brandNaming = document.getElementById("brandNaming");
let brandIdentity = document.getElementById("brandIdentity");
let brandWebsite = document.getElementById("brandWebsite");

let counter = 0;
if (counter === 0) {
  prevArrow.classList.add("disable");
}

for (let prev of prevArrowBtns) {
  prev.addEventListener("click", () => {
    counter--;

    let brandContentAll = document.querySelectorAll(".brandContent");

    for (let brandContent of brandContentAll) {
      brandDisplay();
    }
  });
}
for (let next of nextArrowBtns) {
  next.addEventListener("click", () => {
    counter++;
    if (counter === 3) {
      next.classList.add("disable");
    }
    let brandContentAll = document.querySelectorAll(".brandContent");

    for (let brandContent of brandContentAll) {
      brandDisplay();
    }
  });
}

function brandDisplay() {
  if (counter === 0) {
    brandNaming.style.display = "flex";
    brandIdentity.style.display = "none";
    brandWebsite.style.display = "none";
  } else if (counter === 1) {
    brandNaming.style.display = "none";
    brandIdentity.style.display = "flex";
    brandWebsite.style.display = "none";
  } else {
    brandWebsite.style.display = "flex";
    brandNaming.style.display = "none";
    brandIdentity.style.display = "none";
  }
}

// MOBILE Interaction
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const crossIcon = document.querySelector(".crossIcon");

const mobileContent = document.querySelector(".mobile-content");

hamburgerIcon.addEventListener("click", () => {
  mobileContent.style.display = "block";
  hamburgerIcon.style.display = "none";
  crossIcon.style.display = "block";
});
crossIcon.addEventListener("click", () => {
  crossIcon.style.display = "none";
  mobileContent.style.display = "none";
  hamburgerIcon.style.display = "block";
});
