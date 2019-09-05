const nav = document.querySelector("#main_nav");
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

var app = document.querySelector("#typewriter-text");

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 60,
  cursor: ""
});

typewriter
  .typeString("Grow Your Business")
  .pauseFor(2400)
  .deleteAll()
  .typeString("Build Your Movement")
  .pauseFor(2400)
  .deleteAll()
  .typeString("Tell Your Story")
  .start();
