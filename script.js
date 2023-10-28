const projectBox = document.querySelector(".project-box");
const header = document.querySelector(".header");
const nav = document.querySelector(".main-nav");
const navList = document.querySelector(".main-nav-list");
const navLink = document.querySelectorAll(".main-nav-link");
const btnProject = document.querySelector(".btn-project");
navList.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("main-nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

btnProject.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnRight = document.querySelector(".btn-slide-right");
  const btnLeft = document.querySelector(".btn-slide-left");
  let curSlide = 0;
  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };
  goToSlide(0);
  btnRight.addEventListener("click", function () {
    if (curSlide === slides.length - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  });

  btnLeft.addEventListener("click", function () {
    if (curSlide === 0) {
      curSlide = slides.length - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  });
};
slider();
