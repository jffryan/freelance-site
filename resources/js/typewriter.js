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
