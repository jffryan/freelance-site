const nav = document.querySelector("#main-nav");
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= 400) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);

const navSlide = () => {
  const burger = document.querySelector(`.burger`);
  const nav = document.querySelector(`.nav-links`);
  const navLinks = document.querySelectorAll(`.nav-links li`);

  //   Toggle Nav
  burger.addEventListener(`click`, () => {
    nav.classList.toggle(`nav-active`);
    //   Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.2}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle(`toggle`);
  });
};

navSlide();
